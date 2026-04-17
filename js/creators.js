/* ===== CreatorMetrics — Real Creator Data ===== */

(function () {
  'use strict';

  const SITE = 'https://fanvuemodels.com';
  const IMG  = 'https://kwpimrlrdtmtbinmdecv.supabase.co/storage/v1/object/public/model-images';

  // ============================================
  // REAL CREATOR PROFILES — screenshot models first
  // Earnings/growth are estimated ranges for display
  // ============================================
  const creators = [
    {
      rank: 1, name: 'Lyra Saint-Clair', slug: 'lyra-saint-clair',
      img: IMG + '/lyra-saint-clair-profile-1776431438180.png',
      cover: IMG + '/lyra-saint-clair-cover-1776431438790.jpeg',
      niche: 'Lifestyle', location: 'France',
      likes: '43.2K', posts: 106, photos: 88, videos: 18,
      views: '242.3K', rating: 4.9, earnings: 92400, growth: 38, subscribers: 11200,
    },
    {
      rank: 2, name: 'Monica Musclemom', slug: 'musclemom',
      img: IMG + '/musclemom-profile-1775951217511.jpeg',
      cover: IMG + '/musclemom-cover-1775951218168.jpeg',
      niche: 'Fitness', location: 'United States',
      likes: '22K', posts: 88, photos: 86, videos: 2,
      views: '113.5K', rating: 4.8, earnings: 78600, growth: 29, subscribers: 8900,
    },
    {
      rank: 3, name: 'Bianca', slug: 'biancalouvie',
      img: IMG + '/biancalouvie-profile-1773777711440.webp',
      cover: IMG + '/biancalouvie-cover-1773777712165.webp',
      niche: 'Content Creator', location: 'Greece',
      likes: '90.2K', posts: 466, photos: 441, videos: 25,
      views: '45.9K', rating: 4.7, earnings: 68400, growth: 34, subscribers: 7820,
    },
    {
      rank: 4, name: 'RosaBella', slug: 'rosabella',
      img: IMG + '/rosabella-szqXmc-profile-1776281548487.jpg',
      cover: IMG + '/rosabella-szqXmc-cover-1776281549323.jpg',
      niche: 'Fashion', location: 'Spain',
      likes: '79.9K', posts: 6270, photos: 20, videos: 6250,
      views: '79.9K', rating: 4.6, earnings: 64200, growth: 19, subscribers: 6800,
    },
    {
      rank: 5, name: 'Riding Harley', slug: 'riding-harley',
      img: IMG + '/harley-7odAfC-profile-1773694654457.jpg',
      cover: null,
      niche: 'Adventure', location: 'United States',
      likes: '12K', posts: 43, photos: 40, videos: 3,
      views: '46.2K', rating: 4.5, earnings: 52100, growth: 41, subscribers: 5400,
    },
    {
      rank: 6, name: 'Nyxa Noire', slug: 'nyxa-noire',
      img: IMG + '/nyxa-noire-1iZ6lF-profile-1775389309595.jpg',
      cover: IMG + '/nyxa-noire-1iZ6lF-cover-1775389310304.png',
      niche: 'Alternative', location: 'Florida',
      likes: '13.5K', posts: 196, photos: 171, videos: 25,
      views: '45.4K', rating: 4.9, earnings: 49800, growth: 42, subscribers: 4650,
    },
    {
      rank: 7, name: 'Lana Valentine', slug: 'lana-valentine',
      img: IMG + '/lana-valentine-j1YhAj-profile-1775060539970.jpeg',
      cover: IMG + '/lana-valentine-cover-1776291452055.jpg',
      niche: 'Fashion', location: 'United States',
      likes: '14.5K', posts: 89, photos: 86, videos: 3,
      views: '43.7K', rating: 4.8, earnings: 47200, growth: 28, subscribers: 5430,
    },
    {
      rank: 8, name: 'Catalina Arango', slug: 'itscatalinaa-arango',
      img: IMG + '/itscatalinaa-arango-profile-1775575783649.webp',
      cover: null,
      niche: 'Lifestyle', location: 'Colombia',
      likes: '12K', posts: 91, photos: 91, videos: 0,
      views: '43.5K', rating: 4.6, earnings: 44100, growth: 22, subscribers: 4200,
    },
    {
      rank: 9, name: 'Stacy', slug: 'stacy-after-dark',
      img: IMG + '/stacy-after-dark-profile-1773777068494.jpg',
      cover: IMG + '/stacy-after-dark-cover-1773777068970.jpg',
      niche: 'Wellness', location: 'United States',
      likes: '188', posts: 20, photos: 20, videos: 0,
      views: '42.9K', rating: 4.4, earnings: 41300, growth: 55, subscribers: 3900,
    },
    {
      rank: 10, name: 'Mila Rose', slug: 'xmilarose',
      img: IMG + '/xmilarose%20(1).webp',
      cover: IMG + '/xmilarose%20(2).webp',
      niche: 'Lifestyle', location: 'Denmark',
      likes: '39.8K', posts: 27, photos: 26, videos: 1,
      views: '39.8K', rating: 4.3, earnings: 38500, growth: 45, subscribers: 2900,
    },
    {
      rank: 11, name: 'Ara', slug: 'ara',
      img: IMG + '/ara-hTZMpc-profile-1773694011385.jpg',
      cover: IMG + '/ara-hTZMpc-gallery-0-1773694011726.jpg',
      niche: 'Content Creator', location: 'Asia',
      likes: '5.9K', posts: 25, photos: 25, videos: 0,
      views: '39.1K', rating: 4.5, earnings: 36200, growth: 33, subscribers: 3100,
    },
    {
      rank: 12, name: 'Isabella', slug: 'sweetisabellaxo',
      img: IMG + '/patrickaphrodite-mLWGYX-profile-1773693090212.jpg',
      cover: IMG + '/patrickaphrodite-mLWGYX-gallery-0-1773693090889.jpg',
      niche: 'Modeling', location: 'Texas',
      likes: '9.2K', posts: 84, photos: 74, videos: 10,
      views: '39K', rating: 4.9, earnings: 34800, growth: 37, subscribers: 3200,
    },
    {
      rank: 13, name: 'Mia', slug: 'mia',
      img: IMG + '/mia-RTXfod-profile-1773693631523.jpg',
      cover: IMG + '/mia-RTXfod-gallery-1-1773693632561.jpg',
      niche: 'Content Creator', location: 'Florida',
      likes: '13K', posts: 54, photos: 35, videos: 19,
      views: '38.8K', rating: 4.9, earnings: 33600, growth: 31, subscribers: 4900,
    },
    {
      rank: 14, name: 'Jane', slug: 'janesweety',
      img: IMG + '/janesweety-profile-1773678621339.jpg',
      cover: IMG + '/janesweety-cover-1773678621693.jpg',
      niche: 'Gaming', location: 'Europe',
      likes: '1.8K', posts: 23, photos: 23, videos: 0,
      views: '38.5K', rating: 4.3, earnings: 29400, growth: 48, subscribers: 2600,
    },
    {
      rank: 15, name: 'Rain Kang', slug: 'rainunlocked',
      img: IMG + '/rainunlocked.webp',
      cover: null,
      niche: 'Modeling', location: 'Asia',
      likes: '15K', posts: 119, photos: 90, videos: 29,
      views: '34.9K', rating: 4.5, earnings: 27800, growth: 26, subscribers: 2800,
    },
    {
      rank: 16, name: 'Chloe', slug: 'tinybrunettebabe',
      img: IMG + '/tinybrunettebabe-profile-1773616971938.jpg',
      cover: IMG + '/tinybrunettebabe-cover-1773616972367.jpg',
      niche: 'Lifestyle', location: 'United States',
      likes: '8K', posts: 16, photos: 13, videos: 3,
      views: '31.5K', rating: 4.6, earnings: 24200, growth: 52, subscribers: 2100,
    },
  ];

  // Gradient backgrounds for avatars
  const gradients = [
    'linear-gradient(135deg, #6366f1, #06b6d4)',
    'linear-gradient(135deg, #ec4899, #f59e0b)',
    'linear-gradient(135deg, #10b981, #3b82f6)',
    'linear-gradient(135deg, #a855f7, #ec4899)',
    'linear-gradient(135deg, #f59e0b, #ef4444)',
    'linear-gradient(135deg, #06b6d4, #10b981)',
    'linear-gradient(135deg, #8b5cf6, #06b6d4)',
    'linear-gradient(135deg, #ef4444, #f59e0b)',
  ];

  function getGradient(i) { return gradients[i % gradients.length]; }

  function avatarHTML(c, size) {
    size = size || 40;
    if (c.img) {
      return '<img src="' + c.img + '" alt="' + c.name + '" ' +
        'style="width:' + size + 'px;height:' + size + 'px;border-radius:50%;object-fit:cover;flex-shrink:0;" ' +
        'loading="lazy" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">' +
        '<div class="lb-avatar" style="background:' + getGradient(c.rank) + ';width:' + size + 'px;height:' + size + 'px;display:none;">' + c.name[0] + '</div>';
    }
    return '<div class="lb-avatar" style="background:' + getGradient(c.rank) + ';width:' + size + 'px;height:' + size + 'px;">' + c.name[0] + '</div>';
  }

  function profileURL(c, utm) {
    return SITE + '/models/' + c.slug + '?utm_source=creatormetrics&utm_medium=' + utm + '&utm_campaign=bridge';
  }

  // ============================================
  // RENDER LEADERBOARD TABLE
  // ============================================
  window.renderLeaderboard = function (containerId, count, campaignTag) {
    const el = document.getElementById(containerId);
    if (!el) return;

    const top = creators.slice(0, count || 10);
    const utm = campaignTag || 'leaderboard';

    let html = `
      <div style="overflow-x:auto;">
      <table class="leaderboard">
        <thead>
          <tr>
            <th>#</th>
            <th>Creator</th>
            <th>Niche</th>
            <th class="hide-mobile">Location</th>
            <th>Est. Monthly</th>
            <th class="hide-mobile">Growth</th>
            <th></th>
          </tr>
        </thead>
        <tbody>`;

    top.forEach(c => {
      const rankClass = c.rank === 1 ? 'gold' : c.rank === 2 ? 'silver' : c.rank === 3 ? 'bronze' : '';
      const medal = c.rank === 1 ? '👑' : c.rank === 2 ? '🥈' : c.rank === 3 ? '🥉' : c.rank;
      const url = profileURL(c, 'leaderboard_row');

      html += `
          <tr onclick="window.open('${url}','_blank')">
            <td class="lb-rank ${rankClass}">${medal}</td>
            <td>
              <div class="lb-creator">
                ${avatarHTML(c, 40)}
                <div>
                  <div class="lb-name">${c.name}</div>
                  <div class="lb-handle">${c.likes} likes · ⭐ ${c.rating}</div>
                </div>
              </div>
            </td>
            <td><span class="lb-niche">${c.niche}</span></td>
            <td class="hide-mobile">${c.location}</td>
            <td class="lb-earnings">$${c.earnings.toLocaleString()}</td>
            <td class="hide-mobile"><span class="lb-growth up">↑ ${c.growth}%</span></td>
            <td><a href="${url}" class="lb-action" target="_blank" onclick="event.stopPropagation();gtag('event','conversion',{send_to:'AW-XXXXXXXXXX/XXXXXXXXXX'});">View Profile →</a></td>
          </tr>`;
    });

    html += `
        </tbody>
      </table>
      </div>

      <div class="see-more-banner">
        <span class="see-more-count">2,847+</span>
        <p>More verified creator profiles on FanvueModels</p>
        <a href="${SITE}/discover?utm_source=creatormetrics&utm_medium=see_more&utm_campaign=${utm}" class="btn btn-primary" target="_blank"
           onclick="gtag('event','conversion',{send_to:'AW-XXXXXXXXXX/XXXXXXXXXX'});">
          Browse All Creators →
        </a>
      </div>`;

    el.innerHTML = html;
  };

  // ============================================
  // RENDER SPOTLIGHT CARDS
  // ============================================
  window.renderSpotlight = function (containerId, count, campaignTag) {
    const el = document.getElementById(containerId);
    if (!el) return;

    const n = Math.min(count || 6, creators.length);
    const shuffled = [].concat(creators).sort(function () { return Math.random() - 0.5; });
    const selected = shuffled.slice(0, n);
    const utm = campaignTag || 'spotlight';

    let html = '<div class="spotlight-grid">';

    selected.forEach(c => {
      const url = profileURL(c, 'spotlight_card');
      const coverStyle = 'background:' + getGradient(c.rank) + ';';

      html += `
        <a href="${url}" class="spotlight-card" target="_blank"
           onclick="gtag('event','conversion',{send_to:'AW-XXXXXXXXXX/XXXXXXXXXX'});">
          <div class="spotlight-header">
            <div style="width:100%;height:100%;${coverStyle}filter:blur(2px) brightness(0.7);"></div>
            <div class="spotlight-avatar" style="${c.img ? 'padding:0;overflow:hidden;' : 'background:' + getGradient(c.rank) + ';'}">
              ${c.img ? '<img src="' + c.img + '" alt="' + c.name + '" style="width:100%;height:100%;object-fit:cover;" loading="lazy">' : c.name[0]}
            </div>
          </div>
          <div class="spotlight-body">
            <div class="spotlight-name">${c.name}</div>
            <div class="spotlight-niche">${c.niche} · ${c.location}</div>
            <div class="spotlight-stats">
              <div>
                <div class="spotlight-stat-val">${c.subscribers.toLocaleString()}</div>
                <div class="spotlight-stat-lbl">Subscribers</div>
              </div>
              <div>
                <div class="spotlight-stat-val">${c.posts.toLocaleString()}</div>
                <div class="spotlight-stat-lbl">Posts</div>
              </div>
              <div>
                <div class="spotlight-stat-val" style="color:var(--success);">↑ ${c.growth}%</div>
                <div class="spotlight-stat-lbl">Growth</div>
              </div>
            </div>
            <div class="spotlight-earning">
              <div>
                <div class="label">Est. Monthly</div>
                <div class="amount">$${c.earnings.toLocaleString()}</div>
              </div>
              <span class="lb-niche">${c.niche}</span>
            </div>
          </div>
          <div class="spotlight-cta">View ${c.name}'s Profile →</div>
        </a>`;
    });

    html += '</div>';

    html += `
      <div class="see-more-banner">
        <span class="see-more-count">2,847+</span>
        <p>Discover more top-earning creators on FanvueModels</p>
        <a href="${SITE}/discover?utm_source=creatormetrics&utm_medium=spotlight_see_more&utm_campaign=${utm}" class="btn btn-primary" target="_blank"
           onclick="gtag('event','conversion',{send_to:'AW-XXXXXXXXXX/XXXXXXXXXX'});">
          Browse All Creator Profiles →
        </a>
      </div>`;

    el.innerHTML = html;
  };

  // ============================================
  // RENDER "SIMILAR CREATORS" (for calculator)
  // ============================================
  window.renderSimilarCreators = function (containerId, estimatedEarnings, campaignTag) {
    const el = document.getElementById(containerId);
    if (!el) return;

    // Find creators within earning range
    const low = estimatedEarnings * 0.4;
    const high = estimatedEarnings * 2.5;
    let similar = creators.filter(c => c.earnings >= low && c.earnings <= high);
    if (similar.length < 3) similar = creators.slice(0, 6);
    similar = similar.slice(0, 5);

    const utm = campaignTag || 'similar';

    let html = `
      <div class="card card-flat mt-24" style="border-color: rgba(16,185,129,0.25); background: rgba(16,185,129,0.04);">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
          <span style="font-size:1.5rem;">🔥</span>
          <div>
            <h3 style="margin:0;font-size:1rem;">Creators Earning Similar Amounts</h3>
            <p class="text-muted text-sm" style="margin:0;">Real creators with comparable estimated earnings — see their profiles</p>
          </div>
        </div>`;

    similar.forEach(c => {
      const url = profileURL(c, 'similar_creator');
      html += `
        <a href="${url}" target="_blank" 
           style="text-decoration:none;color:inherit;display:flex;align-items:center;gap:12px;padding:10px 0;border-top:1px solid var(--surface-3);"
           onclick="gtag('event','conversion',{send_to:'AW-XXXXXXXXXX/XXXXXXXXXX'});">
          ${avatarHTML(c, 36)}
          <div style="flex:1;min-width:0;">
            <div style="font-weight:600;font-size:0.875rem;">${c.name} <span class="lb-niche" style="margin-left:6px;">${c.niche}</span></div>
            <div class="text-muted text-xs">${c.location} · ${c.likes} likes · ⭐ ${c.rating}</div>
          </div>
          <div style="text-align:right;flex-shrink:0;">
            <div style="font-weight:700;color:var(--success);font-size:0.875rem;">$${c.earnings.toLocaleString()}/mo</div>
            <div class="text-xs" style="color:var(--success);">↑ ${c.growth}%</div>
          </div>
        </a>`;
    });

    html += `
        <a href="${SITE}/discover?utm_source=creatormetrics&utm_medium=similar_see_all&utm_campaign=${utm}" 
           class="btn btn-primary w-full mt-16" target="_blank" style="justify-content:center;"
           onclick="gtag('event','conversion',{send_to:'AW-XXXXXXXXXX/XXXXXXXXXX'});">
          See All 2,847+ Creator Profiles →
        </a>
      </div>`;

    el.innerHTML = html;
  };

})();
