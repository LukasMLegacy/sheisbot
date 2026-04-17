/* ===== CreatorMetrics — Earnings Calculator Logic ===== */

(function () {
  'use strict';

  // ---- DOM refs ----
  const elFollowers  = document.getElementById('followers');
  const elLikes      = document.getElementById('likes');
  const elPrice      = document.getElementById('price');
  const elPriceLabel = document.getElementById('priceLabel');
  const elNiche      = document.getElementById('niche');
  const trialYes     = document.getElementById('trialYes');
  const trialNo      = document.getElementById('trialNo');

  // result elements
  const elResultMain  = document.getElementById('resultAmount');
  const elResultRange = document.getElementById('resultRange');
  const elDailySignups  = document.getElementById('dailySignups');
  const elConvRate       = document.getElementById('convRate');
  const elBreakdown      = document.getElementById('breakdownList');
  const elDonutPaths     = document.querySelectorAll('.donut-segment');
  const elDonutTotal     = document.getElementById('donutTotal');

  let freeTrialEnabled = true;

  // ---- Toggle buttons ----
  trialYes.addEventListener('click', () => {
    freeTrialEnabled = true;
    trialYes.classList.add('active');
    trialNo.classList.remove('active');
    calculate();
  });
  trialNo.addEventListener('click', () => {
    freeTrialEnabled = false;
    trialNo.classList.add('active');
    trialYes.classList.remove('active');
    calculate();
  });

  // ---- Live recalculation ----
  [elFollowers, elLikes, elPrice, elNiche].forEach(el => {
    el.addEventListener('input', calculate);
  });

  elPrice.addEventListener('input', () => {
    elPriceLabel.textContent = '$' + parseFloat(elPrice.value).toFixed(2);
  });

  // ---- Main calculation (mirrors EarningsCalculator.tsx) ----
  function calculate() {
    const instagramFollowers = parseInt(elFollowers.value) || 0;
    const averageLikes       = parseInt(elLikes.value) || 0;
    const subscriptionPrice  = parseFloat(elPrice.value) || 4.99;
    const brandNiche         = elNiche.value;

    // 1) Engagement → Quality
    const engagementRate = instagramFollowers > 0 ? averageLikes / instagramFollowers : 0;
    const qualityScore   = 0.45 + 0.85 / (1 + Math.exp(-7 * (engagementRate - 0.04)));
    const reachRatio     = 0.12 + 0.06 * Math.tanh(instagramFollowers / 15000);
    const effectiveReach = instagramFollowers * reachRatio * qualityScore;

    // 2) Base conversion
    const baseConversion = brandNiche === 'niche' ? 0.016 : brandNiche === 'branded' ? 0.014 : 0.011;
    const trialMultiplier = freeTrialEnabled ? 1.12 : 1;

    // 3) Gamma-style price → demand
    const alpha = 0.5, beta = 18, calibration = 11.5;
    const priceDemandFactor = Math.pow(subscriptionPrice, -alpha) * Math.exp(-subscriptionPrice / beta);
    const monthlyNewSubs = effectiveReach * baseConversion * priceDemandFactor * trialMultiplier * calibration;

    // 4) Sub revenue
    const subRevenueBase = monthlyNewSubs * subscriptionPrice;

    // 5) Upsell
    const upsellPeak = 8, upsellWidth = 60;
    const upsellFactor = Math.exp(-Math.pow(subscriptionPrice - upsellPeak, 2) / upsellWidth);
    const upsellMultiplier = 1.1 + upsellFactor * 1.4;
    const secondaryRev = subRevenueBase * upsellMultiplier;

    // 6) Total monthly revenue
    const totalMonthlyRevenue = subRevenueBase + secondaryRev;

    // 7) Dynamic ratios
    const subRatio = 0.35 + 0.35 * (1 / (1 + Math.exp(-(subscriptionPrice - 10) / 4)));
    const upsellRatio = 1 - subRatio;

    // 8) Retention
    const renewalRate = 0.18 + 0.28 / (1 + Math.exp((subscriptionPrice - 12) / 4));
    const newSubRate = 1 - renewalRate;

    // 9) Breakdown
    function genBreakdown(total) {
      return {
        subscriptions: Math.round(total * subRatio * newSubRate),
        renewals:      Math.round(total * subRatio * renewalRate),
        messages:      Math.round(total * upsellRatio * 0.6),
        tips:          Math.round(total * upsellRatio * 0.25),
        posts:         Math.round(total * upsellRatio * 0.15),
      };
    }

    const minTotal = totalMonthlyRevenue * 0.8;
    const maxTotal = totalMonthlyRevenue * 1.2;
    const maxBD = genBreakdown(maxTotal);

    const dailySignups  = Math.round(monthlyNewSubs / 30);
    const conversionRate = (baseConversion * priceDemandFactor * 100).toFixed(2);

    // ---- Render ----
    elResultMain.textContent  = '$' + Math.round(minTotal).toLocaleString();
    elResultRange.textContent = 'to $' + Math.round(maxTotal).toLocaleString() + '/month';
    elDailySignups.textContent = dailySignups.toLocaleString();
    elConvRate.textContent     = conversionRate + '%';

    const breakdownItems = [
      { key: 'subscriptions', label: 'Subscriptions', color: '#6366f1', val: maxBD.subscriptions },
      { key: 'renewals',      label: 'Renewals',      color: '#a855f7', val: maxBD.renewals },
      { key: 'messages',      label: 'Messages',      color: '#ec4899', val: maxBD.messages },
      { key: 'tips',          label: 'Tips',           color: '#f59e0b', val: maxBD.tips },
      { key: 'posts',         label: 'Posts',          color: '#10b981', val: maxBD.posts },
    ];

    const bdTotal = breakdownItems.reduce((s, i) => s + i.val, 0) || 1;

    // Update breakdown list
    elBreakdown.innerHTML = breakdownItems.map(item => {
      const pct = Math.round((item.val / bdTotal) * 100);
      return `
        <div class="breakdown-item">
          <span class="breakdown-dot" style="background:${item.color}"></span>
          <div class="breakdown-info">
            <div class="breakdown-label">${item.label}</div>
            <div class="breakdown-bar-bg"><div class="breakdown-bar" style="width:${pct}%;background:${item.color}"></div></div>
          </div>
          <span class="breakdown-pct">${pct}%</span>
          <span class="breakdown-val">$${item.val.toLocaleString()}</span>
        </div>`;
    }).join('');

    // Update donut chart (SVG)
    renderDonut(breakdownItems, bdTotal, Math.round(maxTotal));
  }

  // ---- SVG Donut Chart ----
  function renderDonut(items, total, maxAmount) {
    const svg = document.getElementById('donutSvg');
    // Remove old segments
    svg.querySelectorAll('.seg').forEach(el => el.remove());

    const cx = 50, cy = 50, outerR = 45, innerR = 30;
    let angle = 0;

    items.forEach(item => {
      const pct = item.val / total;
      if (pct <= 0) return;

      const startAngle = angle;
      const endAngle = angle + pct * 360;

      const p1 = polarToCart(cx, cy, outerR, startAngle);
      const p2 = polarToCart(cx, cy, outerR, endAngle);
      const p3 = polarToCart(cx, cy, innerR, endAngle);
      const p4 = polarToCart(cx, cy, innerR, startAngle);
      const largeArc = pct > 0.5 ? 1 : 0;

      const d = [
        `M ${p1.x} ${p1.y}`,
        `A ${outerR} ${outerR} 0 ${largeArc} 1 ${p2.x} ${p2.y}`,
        `L ${p3.x} ${p3.y}`,
        `A ${innerR} ${innerR} 0 ${largeArc} 0 ${p4.x} ${p4.y}`,
        'Z',
      ].join(' ');

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', d);
      path.setAttribute('fill', item.color);
      path.setAttribute('stroke', '#0f172a');
      path.setAttribute('stroke-width', '1');
      path.classList.add('seg');
      svg.appendChild(path);

      angle = endAngle;
    });

    elDonutTotal.textContent = '$' + maxAmount.toLocaleString();
  }

  function polarToCart(cx, cy, r, angleDeg) {
    const rad = (angleDeg - 90) * Math.PI / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  // ---- Initial calculation ----
  calculate();
})();
