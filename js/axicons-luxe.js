/**
 * Axiom01 - Axicons Luxe Variant
 * Ultra-detailed, illustrative SVG icons with rich gradients, shadows, and depth.
 */

(function() {
  if (typeof window === 'undefined') window = {};
  if (!window.AxiconsLuxe) window.AxiconsLuxe = {};

  Object.assign(window.AxiconsLuxe, {

  // 1. ROCKET (Innovation, Launch, Speed, Deployment)
  rocket: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="rkBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="100%" stop-color="#E2E8F0" />
        </linearGradient>
        <linearGradient id="rkFlame" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FACC15" />
          <stop offset="50%" stop-color="#F97316" />
          <stop offset="100%" stop-color="#EF4444" />
        </linearGradient>
        <filter id="rkDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="rkGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#EF4444" flood-opacity="0.6"/>
        </filter>
      </defs>
      <path d="M60,10 L75,70 L60,85 L45,70 Z" fill="url(#rkBody)" filter="url(#rkDrop)" />
      <path d="M45,70 L30,95 L45,85 Z" fill="#94A3B8" />
      <path d="M75,70 L90,95 L75,85 Z" fill="#94A3B8" />
      <path d="M50,85 L60,110 L70,85 C65,95 55,95 50,85 Z" fill="url(#rkFlame)" filter="url(#rkGlow)" />
      <circle cx="60" cy="45" r="6" fill="#334155" />
      <circle cx="60" cy="45" r="3" fill="#38BDF8" />
    </svg>
  `,

  // 2. SHIELD (Security, Privacy, Trust)
  shield: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="sGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FDE047" />
                  <stop offset="50%" stop-color="#EAB308" />
                  <stop offset="100%" stop-color="#A16207" />
                </linearGradient>
                <linearGradient id="sDark" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#334155" />
                  <stop offset="100%" stop-color="#0F172A" />
                </linearGradient>
                <filter id="sDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
                </filter>
              </defs>
              <!-- Base Shield -->
              <path d="M60,15 L100,30 C100,70 80,105 60,115 C40,105 20,70 20,30 Z" fill="url(#sGold)" filter="url(#sDrop)" />
              <!-- Inner Shield -->
              <path d="M60,23 L92,36 C92,68 76,95 60,105 C44,95 28,68 28,36 Z" fill="url(#sDark)" />
              <!-- Checkmark -->
              <path d="M45,60 L55,70 L75,45" fill="none" stroke="#10B981" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
              <!-- Glass glare -->
              <path d="M60,23 L92,36 C92,50 85,70 75,80 C60,60 40,40 28,36 Z" fill="#FFFFFF" opacity="0.1" />
            </svg>
  `,

  // 3. TARGET (Goals, SEO, Success)
  target: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="tRed" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FCA5A5" />
                  <stop offset="100%" stop-color="#DC2626" />
                </linearGradient>
                <linearGradient id="tWhite" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FFFFFF" />
                  <stop offset="100%" stop-color="#E2E8F0" />
                </linearGradient>
                <filter id="tShadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000000" flood-opacity="0.2"/>
                </filter>
              </defs>
              <!-- Outer Red -->
              <circle cx="60" cy="60" r="45" fill="url(#tRed)" filter="url(#tShadow)" />
              <!-- Middle White -->
              <circle cx="60" cy="60" r="30" fill="url(#tWhite)" filter="url(#tShadow)" />
              <!-- Inner Red -->
              <circle cx="60" cy="60" r="15" fill="url(#tRed)" filter="url(#tShadow)" />
              <!-- Arrow Shaft -->
              <line x1="100" y1="20" x2="65" y2="55" stroke="#FBBF24" stroke-width="6" stroke-linecap="round" filter="url(#tShadow)" />
              <!-- Arrow Head -->
              <polygon points="60,60 70,50 60,40" fill="#FBBF24" filter="url(#tShadow)" />
              <!-- Feathers -->
              <path d="M100,20 L110,30 L90,30 Z" fill="#38BDF8" />
              <path d="M100,20 L90,10 L90,30 Z" fill="#0284C7" />
            </svg>
  `,

  // 4. PLANET (Space, Universe, Global, Discovery)
  planet: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <radialGradient id="plGrad" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#C084FC" />
          <stop offset="100%" stop-color="#6B21A8" />
        </radialGradient>
        <linearGradient id="plRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE047" />
          <stop offset="100%" stop-color="#B45309" />
        </linearGradient>
        <filter id="plDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.4"/>
        </filter>
      </defs>
      <ellipse cx="60" cy="60" rx="55" ry="15" fill="none" stroke="url(#plRing)" stroke-width="8" transform="rotate(-20 60 60)" filter="url(#plDrop)" />
      <circle cx="60" cy="60" r="35" fill="url(#plGrad)" filter="url(#plDrop)" />
      <path d="M25,50 A35,35 0 0,0 95,70" fill="none" stroke="url(#plRing)" stroke-width="8" transform="rotate(-20 60 60)" />
      <circle cx="50" cy="45" r="5" fill="#D8B4FE" opacity="0.6" />
      <circle cx="70" cy="65" r="8" fill="#D8B4FE" opacity="0.4" />
    </svg>
  `,

  // 5. DIAMOND (Premium, Gem, Quality, VIP)
  diamond: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="dmCyan" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#67E8F9" />
          <stop offset="100%" stop-color="#0891B2" />
        </linearGradient>
        <linearGradient id="dmDark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#06B6D4" />
          <stop offset="100%" stop-color="#164E63" />
        </linearGradient>
        <filter id="dmDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="dmGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#67E8F9" flood-opacity="0.6"/>
        </filter>
      </defs>
      <polygon points="60,100 20,45 40,20 80,20 100,45" fill="url(#dmDark)" filter="url(#dmDrop)" />
      <polygon points="60,100 20,45 60,45" fill="url(#dmCyan)" filter="url(#dmGlow)" />
      <polygon points="60,100 100,45 60,45" fill="#0891B2" />
      <polygon points="20,45 40,20 60,45" fill="#22D3EE" />
      <polygon points="100,45 80,20 60,45" fill="#0E7490" />
      <polygon points="40,20 80,20 60,45" fill="#CFFAFE" />
    </svg>
  `,

  // 6. FIRE / FLAME (Trending, Hot, Popularity, Gamification Streaks)
  fire: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="fOuter" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stop-color="#DC2626" />
                  <stop offset="60%" stop-color="#EA580C" />
                  <stop offset="100%" stop-color="#FBBF24" />
                </linearGradient>
                <linearGradient id="fInner" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stop-color="#EA580C" />
                  <stop offset="50%" stop-color="#F97316" />
                  <stop offset="100%" stop-color="#FEF08A" />
                </linearGradient>
                <filter id="fGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#EA580C" flood-opacity="0.5"/>
                </filter>
              </defs>
              <!-- Outer Flame -->
              <path d="M60,15 C60,15 75,45 75,65 C75,85 60,105 60,105 C60,105 45,85 45,65 C45,45 60,15 60,15 Z" fill="none" filter="url(#fGlow)" />
              <path d="M60,12 C72,35 95,55 95,78 C95,98 79,112 60,112 C41,112 25,98 25,78 C25,50 48,30 60,12 Z" fill="url(#fOuter)" filter="url(#fGlow)" />
              <!-- Middle Flame Layer -->
              <path d="M60,35 C68,50 82,65 82,82 C82,95 72,105 60,105 C48,105 38,95 38,82 C38,62 52,50 60,35 Z" fill="url(#fInner)" opacity="0.9" />
              <!-- Core Intense Glow -->
              <path d="M60,60 C64,70 72,75 72,85 C72,92 67,97 60,97 C53,97 48,92 48,85 C48,75 56,70 60,60 Z" fill="#FFFFFF" opacity="0.95" />
            </svg>
  `,

  // 7. HEART (Health, Love, Favorite, Life)
  heart: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="htRed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F87171" />
          <stop offset="100%" stop-color="#991B1B" />
        </linearGradient>
        <filter id="htDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="htGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#EF4444" flood-opacity="0.6"/>
        </filter>
      </defs>
      <path d="M60,100 C60,100 15,65 15,35 C15,20 30,10 45,15 C52,18 60,30 60,30 C60,30 68,18 75,15 C90,10 105,20 105,35 C105,65 60,100 60,100 Z" fill="url(#htRed)" filter="url(#htGlow)" />
      <path d="M30,30 A10,10 0 0,1 45,25" fill="none" stroke="#FCA5A5" stroke-width="4" stroke-linecap="round" />
    </svg>
  `,

  // 8. WALLET (Finance, Payment, Money, Cards)
  wallet: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="waLeather" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#A16207" />
          <stop offset="100%" stop-color="#422006" />
        </linearGradient>
        <linearGradient id="waCard" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#60A5FA" />
          <stop offset="100%" stop-color="#1D4ED8" />
        </linearGradient>
        <filter id="waDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.4"/>
        </filter>
      </defs>
      <rect x="25" y="30" width="70" height="40" rx="4" fill="url(#waCard)" filter="url(#waDrop)" transform="rotate(-10 60 50)" />
      <path d="M20,50 L100,50 L100,90 C100,95 95,100 90,100 L30,100 C25,100 20,95 20,90 Z" fill="url(#waLeather)" filter="url(#waDrop)" />
      <path d="M20,50 L100,50 C100,45 95,40 90,40 L30,40 C25,40 20,45 20,50 Z" fill="#713F12" />
      <path d="M75,65 L100,65 L100,80 L75,80 Z" fill="#422006" />
      <circle cx="85" cy="72" r="4" fill="#FDE047" />
    </svg>
  `,

  // 9. TROPHY (Winner, Achievement, Reward, Champion)
  trophy: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="trGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE047" />
          <stop offset="100%" stop-color="#B45309" />
        </linearGradient>
        <filter id="trDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="trGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#FDE047" flood-opacity="0.6"/>
        </filter>
      </defs>
      <path d="M35,20 L85,20 L80,60 C75,80 45,80 40,60 Z" fill="url(#trGold)" filter="url(#trGlow)" />
      <path d="M35,30 A15,15 0 0,0 35,60" fill="none" stroke="url(#trGold)" stroke-width="6" stroke-linecap="round" filter="url(#trDrop)" />
      <path d="M85,30 A15,15 0 0,1 85,60" fill="none" stroke="url(#trGold)" stroke-width="6" stroke-linecap="round" filter="url(#trDrop)" />
      <rect x="55" y="70" width="10" height="25" fill="#B45309" />
      <rect x="40" y="95" width="40" height="15" rx="2" fill="#1E293B" filter="url(#trDrop)" />
      <ellipse cx="60" cy="20" rx="25" ry="5" fill="#FEF08A" />
    </svg>
  `,

  // 10. BELL (Notifications, Alerts, Dynamic Updates)
  bell: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="bGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FDE047" />
                  <stop offset="50%" stop-color="#EAB308" />
                  <stop offset="100%" stop-color="#854D0E" />
                </linearGradient>
                <filter id="bShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.2"/>
                </filter>
                <filter id="bAlertGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#EF4444" flood-opacity="0.6"/>
                </filter>
              </defs>
              <!-- Clapper (Ringer) -->
              <circle cx="60" cy="96" r="10" fill="#854D0E" filter="url(#bShadow)" />
              <!-- Main Bell Body -->
              <path d="M60,15 C42,15 35,35 35,55 L35,80 L25,86 L25,92 L95,92 L95,86 L85,80 L85,55 C85,35 78,15 60,15 Z" fill="url(#bGold)" filter="url(#bShadow)" />
              <!-- Top Crown Loop -->
              <path d="M52,16 C52,10 68,10 68,16" fill="none" stroke="#EAB308" stroke-width="4" stroke-linecap="round" />
              <!-- Polished Side Reflection Highlight -->
              <path d="M42,50 C42,38 48,24 56,20" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" opacity="0.4" />
              <!-- Dynamic Notification Unread Dot/Badge -->
              <circle cx="88" cy="28" r="11" fill="#EF4444" filter="url(#bAlertGlow)" />
              <circle cx="85" cy="25" r="3" fill="#FFFFFF" opacity="0.6" />
            </svg>
  `,

  // 11. SEARCH (Explore, Find, Focus, Query)
  search: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%"> <defs> <linearGradient id="scLens" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#38BDF8" /> <stop offset="100%" stop-color="#0284C7" /> </linearGradient> <linearGradient id="scHandle" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#FEF08A" /> <stop offset="50%" stop-color="#FACC15" /> <stop offset="100%" stop-color="#B45309" /> </linearGradient> <filter id="scDrop" x="-10%" y="-10%" width="120%" height="120%"> <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/> </filter> <filter id="scInner" x="-10%" y="-10%" width="120%" height="120%"> <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#0F172A" flood-opacity="0.5"/> </filter> <filter id="scGlow" x="-15%" y="-15%" width="130%" height="130%"> <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#38BDF8" flood-opacity="0.5"/> </filter> </defs> <g filter="url(#scDrop)"> <path d="M85,85 L105,105 L115,100 L95,80 Z" fill="url(#scHandle)" filter="url(#scGlow)" /> <rect x="90" y="80" width="20" height="20" rx="3" fill="#A16207" filter="url(#scInner)" /> <circle cx="50" cy="50" r="35" fill="none" stroke="url(#scLens)" stroke-width="12" filter="url(#scInner)" /> <circle cx="50" cy="50" r="32" fill="#BAE6FD" opacity="0.3" filter="blur(2px)"/> <path d="M30,30 C30,30 40,25 50,25 C60,25 70,30 70,30" fill="none" stroke="#FFFFFF" stroke-width="2.5" opacity="0.4" filter="url(#scGlow)"/> </g> </svg>
  `,

  // 12. SETTINGS (Configurations, Preferences, Gears, Mechanisms)
  settings: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%"> <defs> <linearGradient id="seGear1" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#FEF08A" /> <stop offset="50%" stop-color="#EAB308" /> <stop offset="100%" stop-color="#A16207" /> </linearGradient> <linearGradient id="seGear2" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#FECACA" /> <stop offset="50%" stop-color="#EF4444" /> <stop offset="100%" stop-color="#991B1B" /> </linearGradient> <filter id="seDrop" x="-10%" y="-10%" width="120%" height="120%"> <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.3"/> </filter> <filter id="seGlow" x="-15%" y="-15%" width="130%" height="130%"> <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#FBBF24" flood-opacity="0.6"/> </filter> <filter id="seInner" x="-10%" y="-10%" width="120%" height="120%"> <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000000" flood-opacity="0.5"/> </filter> </defs> <g filter="url(#seDrop)"> <path d="M50,15 L70,15 L75,25 L85,30 L90,25 L105,35 L100,50 L105,65 L95,75 L105,90 L95,105 L80,100 L65,105 L50,100 L35,105 L25,95 L15,80 L25,65 L15,50 L25,35 L20,20 L35,15 Z" fill="url(#seGear1)" filter="url(#seGlow)" /> <circle cx="60" cy="60" r="18" fill="#FDE047" stroke="#A16207" stroke-width="2" /> <g transform="translate(30, 60)"> <path d="M25,0 L35,15 L50,10 L60,25 L75,20 L85,35 L80,50 L85,65 L75,70 L70,85 L55,80 L45,95 L30,90 L20,105 L10,100 L0,115 L-10,105 L-20,110 L-35,100 L-45,115 L-60,110 L-70,100 L-65,85 L-70,70 L-65,55 L-70,40 L-65,25 L-70,10 L-65,0 Z" fill="url(#seGear2)" /> <circle cx="25" cy="25" r="12" fill="#FECACA" stroke="#991B1B" stroke-width="1.5" /> </g> </g> <circle cx="60" cy="60" r="6" fill="#A16207" /> <circle cx="60" cy="60" r="2" fill="#FDE047" /> <path d="M30,30 C30,30 40,25 50,25 C60,25 70,30 70,30" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.4" /> </svg>
  `,

  // 13. FOLDER (Organization, Documents, Files, Stacked Folders)
  folder: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%"> <defs> <linearGradient id="foBody" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#FDE047" /> <stop offset="50%" stop-color="#F59E0B" /> <stop offset="100%" stop-color="#B45309" /> </linearGradient> <linearGradient id="foTab" x1="0%" y1="0%" x2="100%" y2="0%"> <stop offset="0%" stop-color="#BAE6FD" /> <stop offset="100%" stop-color="#38BDF8" /> </linearGradient> <linearGradient id="foPaper" x1="0%" y1="0%" x2="0%" y2="100%"> <stop offset="0%" stop-color="#FFFFFF" /> <stop offset="100%" stop-color="#E2E8F0" /> </linearGradient> <filter id="foDrop" x="-10%" y="-10%" width="120%" height="120%"> <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.3"/> </filter> <filter id="foInner" x="-10%" y="-10%" width="120%" height="120%"> <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000000" flood-opacity="0.5"/> </filter> <filter id="foTabGlow" x="-20%" y="-20%" width="140%" height="140%"> <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#38BDF8" flood-opacity="0.5"/> </filter> </defs> <g filter="url(#foDrop)"> <rect x="30" y="20" width="70" height="50" rx="3" fill="url(#foPaper)" filter="url(#foInner)" transform="rotate(-3, 65, 45)" /> <rect x="25" y="25" width="80" height="60" rx="3" fill="#A16207" transform="rotate(-5, 60, 60)" /> <g filter="url(#foDrop)"> <path d="M15,40 L105,40 L100,105 L20,105 Z" fill="url(#foBody)" /> <rect x="15" y="40" width="90" height="65" rx="3" fill="none" stroke="#FDE047" stroke-width="1.5" opacity="0.6"/> <rect x="20" y="30" width="20" height="10" rx="2" fill="url(#foTab)" filter="url(#foTabGlow)" /> </g> </g> <line x1="45" y1="25" x2="85" y2="25" stroke="#CBD5E1" stroke-width="3" stroke-linecap="round" /> <line x1="45" y1="35" x2="75" y2="35" stroke="#CBD5E1" stroke-width="3" stroke-linecap="round" /> <path d="M22,42 C30,35 45,35 60,35 C75,35 90,35 98,42" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.4" /> </svg>
  `,

  // 14. CALENDAR (Events, Scheduling, Time, Dates)
  calendar: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%"> <defs> <linearGradient id="caBackground" x1="0%" y1="0%" x2="0%" y2="100%"> <stop offset="0%" stop-color="#BAE6FD" /> <stop offset="100%" stop-color="#E0F2FE" /> </linearGradient> <linearGradient id="caHeader" x1="0%" y1="0%" x2="100%" y2="0%"> <stop offset="0%" stop-color="#38BDF8" /> <stop offset="100%" stop-color="#0284C7" /> </linearGradient> <linearGradient id="caSelected" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#FEF08A" /> <stop offset="50%" stop-color="#F59E0B" /> <stop offset="100%" stop-color="#991B1B" /> </linearGradient> <filter id="caDrop" x="-10%" y="-10%" width="120%" height="120%"> <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.3"/> </filter> <filter id="caInner" x="-10%" y="-10%" width="120%" height="120%"> <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#0F172A" flood-opacity="0.5"/> </filter> <filter id="caGlow" x="-15%" y="-15%" width="130%" height="130%"> <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#38BDF8" flood-opacity="0.6"/> </filter> </defs> <g filter="url(#caDrop)"> <rect x="25" y="10" width="70" height="90" rx="3" fill="#A16207" transform="rotate(-5, 60, 55)" /> <rect x="15" y="15" width="90" height="90" rx="3" fill="url(#caBackground)" filter="caInner" /> <rect x="15" y="15" width="90" height="30" rx="3" fill="url(#caHeader)" /> <path d="M22,17 L98,17" stroke="#FFFFFF" stroke-width="2" opacity="0.6" /> <rect x="15" y="15" width="90" height="30" rx="3" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.4" filter="blur(2px)"/> <g stroke="#334155" stroke-width="1" opacity="0.5"> <line x1="15" y1="55" x2="105" y2="55" /> <line x1="15" y1="75" x2="105" y2="75" /> <line x1="45" y1="45" x2="45" y2="105" /> <line x1="75" y1="45" x2="75" y2="105" /> </g> <g filter="url(#caGlow)"> <rect x="45" y="55" width="30" height="20" rx="2" fill="url(#caSelected)" filter="caInner" /> <path d="M47,57 Q60,65 73,57" fill="none" stroke="#F59E0B" stroke-width="2" /> <circle cx="50" cy="58" r="2.5" fill="#EF4444" /> </g> </g> <path d="M22,42 C30,35 45,35 60,35 C75,35 90,35 98,42" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.4" /> </svg>
  `,

  // 15. USER / PROFILE (Identity, Accounts, Settings)
  user: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="usrHead" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#E2E8F0" />
                  <stop offset="100%" stop-color="#94A3B8" />
                </linearGradient>
                <linearGradient id="usrTorso" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#FFFFFF" />
                  <stop offset="100%" stop-color="#E2E8F0" />
                </linearGradient>
                <linearGradient id="usrBase" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#F1F5F9" />
                  <stop offset="100%" stop-color="#94A3B8" />
                </linearGradient>
                <filter id="usrDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="8" stdDeviation="5" flood-color="#000000" flood-opacity="0.25"/>
                </filter>
                <filter id="usrInnerDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000000" flood-opacity="0.2"/>
                </filter>
              </defs>
              <circle cx="60" cy="60" r="45" fill="url(#usrBase)" filter="url(#usrDrop)" />
              <g filter="url(#usrInnerDrop)">
                <ellipse cx="60" cy="45" rx="20" ry="25" fill="url(#usrHead)" />
                <path d="M35,100 L85,100 L85,90 C85,80 75,70 60,70 C45,70 35,80 35,90 Z" fill="url(#usrTorso)" />
              </g>
              <path d="M45,55 L75,55" stroke="#FFFFFF" stroke-width="2" opacity="0.6" />
              <path d="M52,65 L68,65" stroke="#FFFFFF" stroke-width="2" opacity="0.6" />
            </svg>
  `,

  // 16. CAMERA (Photography, Media, Capture, Memories)
  camera: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="camBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#CBD5E1" />
          <stop offset="50%" stop-color="#94A3B8" />
          <stop offset="100%" stop-color="#475569" />
        </linearGradient>
        <linearGradient id="camLeather" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#334155" />
          <stop offset="100%" stop-color="#0F172A" />
        </linearGradient>
        <radialGradient id="camLens" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#1E1B4B" />
          <stop offset="50%" stop-color="#312E81" />
          <stop offset="100%" stop-color="#020617" />
        </radialGradient>
        <filter id="camDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="camLensGlare" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#818CF8" flood-opacity="0.7"/>
        </filter>
      </defs>
      <path d="M25,35 L40,35 L45,25 L75,25 L80,35 L95,35 C100,35 105,40 105,45 L105,85 C105,90 100,95 95,95 L25,95 C20,95 15,90 15,85 L15,45 C15,40 20,35 25,35 Z" fill="url(#camBody)" filter="url(#camDrop)" />
      <rect x="15" y="45" width="90" height="35" fill="url(#camLeather)" />
      <circle cx="60" cy="65" r="25" fill="#475569" filter="url(#camDrop)" />
      <circle cx="60" cy="65" r="20" fill="url(#camLens)" stroke="#0F172A" stroke-width="2" filter="url(#camLensGlare)" />
      <circle cx="53" cy="58" r="4" fill="#A5B4FC" opacity="0.8" />
      <circle cx="68" cy="72" r="2" fill="#818CF8" opacity="0.6" />
      <rect x="25" y="40" width="12" height="6" rx="2" fill="#0F172A" />
      <circle cx="90" cy="45" r="4" fill="#F87171" filter="url(#camDrop)" />
    </svg>
  `,

  // 17. STAR (Favorite, Priority, Milestone, Quality)
  star: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="stGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE047" />
          <stop offset="100%" stop-color="#B45309" />
        </linearGradient>
        <filter id="stDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M60,10 L75,45 L110,45 L82,65 L95,100 L60,80 L25,100 L38,65 L10,45 L45,45 Z" fill="url(#stGrad)" filter="url(#stDrop)" />
    </svg>
  `,

  // 18. CHAT / BUBBLES (Messages, AI Chat, Communication, Support)
  chat: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="chBack" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#C084FC" />
                  <stop offset="100%" stop-color="#7E22CE" />
                </linearGradient>
                <linearGradient id="chFront" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#7DD3FC" />
                  <stop offset="50%" stop-color="#0EA5E9" />
                  <stop offset="100%" stop-color="#0369A1" />
                </linearGradient>
                <filter id="chShadow" x="-10%" y="-10%" width="130%" height="130%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
                </filter>
              </defs>
              <path d="M75,20 C95,20 110,32 110,48 C110,58 102,67 90,72 L95,85 L78,76 C77,76 76,76 75,76 C55,76 40,64 40,48 C40,32 55,20 75,20 Z" fill="url(#chBack)" filter="url(#chShadow)" />
              <path d="M55,26 C70,22 90,26 100,35" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" opacity="0.3" />
              <circle cx="60" cy="48" r="4" fill="#E9D5FF" />
              <circle cx="75" cy="48" r="4" fill="#E9D5FF" />
              <circle cx="90" cy="48" r="4" fill="#E9D5FF" />
              <path d="M45,45 C20,45 10,60 10,75 C10,85 18,94 28,98 L20,112 L40,103 C41,103 43,103 45,103 C70,103 80,88 80,75 C80,60 70,45 45,45 Z" fill="url(#chFront)" filter="url(#chShadow)" />
              <path d="M25,52 C35,47 55,47 65,52" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.5" />
              <line x1="30" y1="68" x2="60" y2="68" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" />
              <line x1="30" y1="80" x2="50" y2="80" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" />
            </svg>
  `,

  // 19. LOCK (Security, Private, Closed, Authentication)
  lock: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="lkGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE047" />
          <stop offset="50%" stop-color="#CA8A04" />
          <stop offset="100%" stop-color="#713F12" />
        </linearGradient>
        <linearGradient id="lkSteel" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#E2E8F0" />
          <stop offset="50%" stop-color="#64748B" />
          <stop offset="100%" stop-color="#334155" />
        </linearGradient>
        <filter id="lkDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.4"/>
        </filter>
        <filter id="lkInner" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
        <filter id="lkGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#FDE047" flood-opacity="0.5"/>
        </filter>
      </defs>
      <!-- Shackle -->
      <path d="M35,55 L35,35 C35,15 85,15 85,35 L85,55" fill="none" stroke="url(#lkSteel)" stroke-width="14" stroke-linecap="round" filter="url(#lkDrop)" />
      <path d="M35,55 L35,35 C35,15 85,15 85,35 L85,55" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.3" />
      <!-- Body -->
      <rect x="20" y="55" width="80" height="55" rx="8" fill="url(#lkGold)" filter="url(#lkDrop)" />
      <rect x="25" y="60" width="70" height="45" rx="4" fill="none" stroke="#FEF08A" stroke-width="2" opacity="0.5" />
      <!-- Keyhole -->
      <circle cx="60" cy="75" r="8" fill="#1E293B" filter="url(#lkInner)" />
      <path d="M55,80 L65,80 L68,95 L52,95 Z" fill="#1E293B" filter="url(#lkInner)" />
      <!-- Glow detail inside keyhole -->
      <circle cx="60" cy="75" r="2" fill="#FEF08A" filter="url(#lkGlow)" />
    </svg>
  `,

  // 20. MAIL (Email, Envelope, Letter, Send)
  mail: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="mlEnv" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="100%" stop-color="#E2E8F0" />
        </linearGradient>
        <linearGradient id="mlFlap" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F1F5F9" />
          <stop offset="100%" stop-color="#CBD5E1" />
        </linearGradient>
        <filter id="mlDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="15" y="35" width="90" height="60" rx="4" fill="url(#mlEnv)" filter="url(#mlDrop)" />
      <path d="M15,35 L60,65 L105,35 Z" fill="url(#mlFlap)" filter="url(#mlDrop)" />
      <path d="M15,95 L45,70 M105,95 L75,70" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round" />
      <circle cx="60" cy="65" r="8" fill="#EF4444" />
    </svg>
  `,

  // 21. COMPASS (Navigation, Direction, Explore, Guidance)
  compass: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="cmBrass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE047" />
          <stop offset="50%" stop-color="#B45309" />
          <stop offset="100%" stop-color="#713F12" />
        </linearGradient>
        <radialGradient id="cmFace" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#F8FAFC" />
          <stop offset="100%" stop-color="#CBD5E1" />
        </radialGradient>
        <linearGradient id="cmNorth" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FCA5A5" />
          <stop offset="100%" stop-color="#991B1B" />
        </linearGradient>
        <filter id="cmDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.4"/>
        </filter>
        <filter id="cmInnerShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#0F172A" flood-opacity="0.3"/>
        </filter>
      </defs>
      <circle cx="60" cy="60" r="45" fill="url(#cmBrass)" filter="url(#cmDrop)" />
      <circle cx="60" cy="60" r="38" fill="url(#cmFace)" filter="url(#cmInnerShadow)" />
      <circle cx="60" cy="60" r="34" fill="none" stroke="#94A3B8" stroke-width="1" stroke-dasharray="2 4" />
      <path d="M60,30 L65,55 L55,55 Z" fill="url(#cmNorth)" filter="url(#cmDrop)" />
      <path d="M60,90 L65,65 L55,65 Z" fill="#94A3B8" />
      <circle cx="60" cy="60" r="6" fill="url(#cmBrass)" filter="url(#cmDrop)" />
      <circle cx="60" cy="60" r="2" fill="#451A03" />
      <path d="M22,42 C30,24 55,18 78,24 C55,20 32,28 22,42 Z" fill="#FFFFFF" opacity="0.6" />
    </svg>
  `,

  // 22. CROWN (VIP, Premium, Admin, Gamification Leaderboard)
  crown: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="crGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FEF08A" />
                  <stop offset="30%" stop-color="#FDE047" />
                  <stop offset="70%" stop-color="#EAB308" />
                  <stop offset="100%" stop-color="#854D0E" />
                </linearGradient>
                <linearGradient id="crVelvet" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#991B1B" />
                  <stop offset="100%" stop-color="#450A0A" />
                </linearGradient>
                <filter id="crDrop" x="-15%" y="-15%" width="130%" height="130%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#854D0E" flood-opacity="0.4"/>
                </filter>
                <filter id="crJewel" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.6"/>
                </filter>
              </defs>
              <!-- Background Velvet Cap (Inner depth) -->
              <path d="M20,65 C20,35 100,35 100,65 Z" fill="url(#crVelvet)" />
              <!-- Main Gold Structure -->
              <path d="M15,85 L20,40 L38,65 L60,25 L82,65 L100,40 L105,85 Z" fill="url(#crGold)" filter="url(#crDrop)" stroke="#CA8A04" stroke-width="1.5" stroke-linejoin="round" />
              <!-- Volumetric Base Band -->
              <rect x="15" y="85" width="90" height="15" rx="4" fill="url(#crGold)" filter="url(#crDrop)" />
              <rect x="18" y="87" width="84" height="4" rx="2" fill="#FEF08A" opacity="0.7" />
              <!-- Jewels on Points -->
              <circle cx="20" cy="40" r="5" fill="#EF4444" filter="url(#crJewel)" />
              <circle cx="19" cy="39" r="1.5" fill="#FFFFFF" opacity="0.8" />
              <circle cx="60" cy="25" r="7" fill="#38BDF8" filter="url(#crJewel)" />
              <circle cx="58" cy="23" r="2" fill="#FFFFFF" opacity="0.8" />
              <circle cx="100" cy="40" r="5" fill="#EF4444" filter="url(#crJewel)" />
              <circle cx="99" cy="39" r="1.5" fill="#FFFFFF" opacity="0.8" />
              <!-- Base Jewels -->
              <polygon points="60,88 64,92 60,96 56,92" fill="#10B981" filter="url(#crJewel)" />
              <polygon points="35,89 38,92 35,95 32,92" fill="#38BDF8" filter="url(#crJewel)" />
              <polygon points="85,89 88,92 85,95 82,92" fill="#38BDF8" filter="url(#crJewel)" />
              <!-- Crown 3D Edge Highlights -->
              <path d="M20,40 L38,65 L60,25 L82,65 L100,40" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.5" />
            </svg>
  `,

  // 23. MAGIC WAND (AI, Automation, Enhancements, Editing)
  wand: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="mwStick" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#475569" />
                  <stop offset="100%" stop-color="#0F172A" />
                </linearGradient>
                <linearGradient id="mwTip" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FDE047" />
                  <stop offset="100%" stop-color="#D97706" />
                </linearGradient>
                <filter id="mwGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#FCD34D" flood-opacity="0.6"/>
                </filter>
                <filter id="mwShadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="4" flood-color="#000000" flood-opacity="0.3"/>
                </filter>
              </defs>
              <!-- Wand Stick -->
              <line x1="30" y1="90" x2="80" y2="40" stroke="url(#mwStick)" stroke-width="12" stroke-linecap="round" filter="url(#mwShadow)" />
              <line x1="32" y1="88" x2="78" y2="42" stroke="#94A3B8" stroke-width="4" stroke-linecap="round" />
              <!-- Wand Tip Base -->
              <line x1="75" y1="45" x2="90" y2="30" stroke="url(#mwTip)" stroke-width="14" stroke-linecap="round" filter="url(#mwShadow)" />
              <!-- Star Tip -->
              <path d="M85,15 L90,25 L100,25 L92,31 L95,40 L87,35 L80,40 L83,31 L75,25 L85,25 Z" fill="url(#mwTip)" filter="url(#mwGlow)" />
              <!-- Magic Sparkles -->
              <path d="M55,20 L60,10 L65,20 L75,25 L65,30 L60,40 L55,30 L45,25 Z" fill="#FDE047" filter="url(#mwGlow)" transform="scale(0.6) translate(10,10)" />
              <path d="M100,50 L105,40 L110,50 L120,55 L110,60 L105,70 L100,60 L90,55 Z" fill="#FDE047" filter="url(#mwGlow)" transform="scale(0.5) translate(110,-10)" />
              <circle cx="65" cy="25" r="2" fill="#FFFFFF" />
              <circle cx="100" cy="45" r="1.5" fill="#FFFFFF" />
              <circle cx="85" cy="15" r="2" fill="#FFFFFF" />
            </svg>
  `,

  // 24. MICROPHONE (Entertainment, Audio, Podcast, Voice)
  microphone: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="miMic" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#94A3B8" />
          <stop offset="100%" stop-color="#334155" />
        </linearGradient>
        <linearGradient id="miGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FEF08A" />
          <stop offset="100%" stop-color="#B45309" />
        </linearGradient>
        <filter id="miDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="5" flood-color="#000000" flood-opacity="0.4" />
        </filter>
        <filter id="miGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#EF4444" flood-opacity="0.8" />
        </filter>
      </defs>
      <rect x="45" y="15" width="30" height="50" rx="15" fill="url(#miMic)" filter="url(#miDrop)" />
      <path d="M35,45 C35,65 45,75 60,75 C75,75 85,65 85,45" fill="none" stroke="url(#miGold)" stroke-width="6" stroke-linecap="round" filter="url(#miDrop)" />
      <line x1="60" y1="75" x2="60" y2="95" stroke="url(#miGold)" stroke-width="6" filter="url(#miDrop)" />
      <line x1="45" y1="95" x2="75" y2="95" stroke="url(#miGold)" stroke-width="6" stroke-linecap="round" filter="url(#miDrop)" />
      <!-- Grill detail -->
      <line x1="50" y1="25" x2="70" y2="25" stroke="#CBD5E1" stroke-width="2" opacity="0.5" />
      <line x1="50" y1="35" x2="70" y2="35" stroke="#CBD5E1" stroke-width="2" opacity="0.5" />
      <line x1="50" y1="45" x2="70" y2="45" stroke="#CBD5E1" stroke-width="2" opacity="0.5" />
      <!-- Recording indicator -->
      <circle cx="60" cy="55" r="4" fill="#EF4444" filter="url(#miGlow)" />
    </svg>
  `,

  // 25. GIFT (Present, Reward, Bonus, Celebration)
  gift: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="gfBox" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#8B5CF6" />
          <stop offset="100%" stop-color="#4C1D95" />
        </linearGradient>
        <linearGradient id="gfRibbon" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FCD34D" />
          <stop offset="100%" stop-color="#B45309" />
        </linearGradient>
        <filter id="gfDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="25" y="45" width="70" height="60" rx="4" fill="url(#gfBox)" filter="url(#gfDrop)" />
      <rect x="20" y="35" width="80" height="15" rx="2" fill="url(#gfBox)" filter="url(#gfDrop)" />
      <rect x="52" y="35" width="16" height="70" fill="url(#gfRibbon)" />
      <!-- Bow -->
      <path d="M60,35 C40,10 20,30 45,35" fill="none" stroke="url(#gfRibbon)" stroke-width="8" stroke-linecap="round" />
      <path d="M60,35 C80,10 100,30 75,35" fill="none" stroke="url(#gfRibbon)" stroke-width="8" stroke-linecap="round" />
      <circle cx="60" cy="35" r="5" fill="#F59E0B" />
    </svg>
  `,

  // 26. CLOCK (Time, Schedule, Performance, Deadlines)
  clock: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="clRim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE047" />
          <stop offset="100%" stop-color="#B45309" />
        </linearGradient>
        <filter id="clDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <circle cx="60" cy="60" r="45" fill="none" stroke="url(#clRim)" stroke-width="8" filter="url(#clDrop)" />
      <circle cx="60" cy="60" r="38" fill="#FFFFFF" />
      <line x1="60" y1="60" x2="60" y2="30" stroke="#1E293B" stroke-width="6" stroke-linecap="round" />
      <line x1="60" y1="60" x2="85" y2="60" stroke="#1E293B" stroke-width="6" stroke-linecap="round" />
      <circle cx="60" cy="60" r="4" fill="#B45309" />
    </svg>
  `,

  // 27. LIGHTNING / BOLT (Energy, Action, Speed, Power)
  lightning: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="ltGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FEF08A" />
                  <stop offset="50%" stop-color="#F59E0B" />
                  <stop offset="100%" stop-color="#B45309" />
                </linearGradient>
                <linearGradient id="ltGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#FCD34D" />
                  <stop offset="100%" stop-color="#D97706" />
                </linearGradient>
                <filter id="ltDrop" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="0" stdDeviation="10" flood-color="#F59E0B" flood-opacity="0.6"/>
                </filter>
              </defs>
              <!-- Intense Glowing Core Aura -->
              <path d="M68,10 L30,60 L58,60 L45,110 L90,45 L58,45 Z" fill="url(#ltGlow)" filter="blur(6px)" opacity="0.7" />
              <!-- Sharp 3D Lightning Bolt -->
              <path d="M68,10 L30,60 L58,60 L45,110 L90,45 L58,45 Z" fill="url(#ltGold)" filter="url(#ltDrop)" stroke="#FEF3C7" stroke-width="1.5" stroke-linejoin="miter" />
              <!-- Sharp Edge Highlights -->
              <path d="M68,10 L30,60 L58,60" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="miter" opacity="0.8" />
              <!-- Facet Bevel Line (Creates 3D Ridge) -->
              <path d="M68,10 L50,55 L45,110" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="miter" opacity="0.5" />
            </svg>
  `,

  // 28. GLOBE (World, Network, Internet, Global)
  globe: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <radialGradient id="glOcean" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="60%" stop-color="#0284C7" />
          <stop offset="100%" stop-color="#1E3A8A" />
        </radialGradient>
        <linearGradient id="glLand" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#A3E635" />
          <stop offset="50%" stop-color="#65A30D" />
          <stop offset="100%" stop-color="#3F6212" />
        </linearGradient>
        <filter id="glAtmosphere" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#38BDF8" flood-opacity="0.6"/>
        </filter>
        <filter id="glInner" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="5" stdDeviation="4" flood-color="#0F172A" flood-opacity="0.5"/>
        </filter>
      </defs>
      <circle cx="60" cy="60" r="45" fill="url(#glOcean)" filter="url(#glAtmosphere)" />
      <g fill="url(#glLand)" opacity="0.9" filter="url(#glInner)">
        <path d="M40,25 C50,20 60,30 55,40 C50,50 35,45 25,50 C20,40 25,30 40,25 Z" />
        <path d="M70,30 C85,25 95,45 85,55 C70,65 60,50 70,30 Z" />
        <path d="M35,65 C55,60 65,85 50,95 C30,100 20,80 35,65 Z" />
        <path d="M75,70 C90,65 100,75 95,85 C85,95 70,85 75,70 Z" />
      </g>
      <!-- Latitude/Longitude Grid -->
      <ellipse cx="60" cy="60" rx="45" ry="15" fill="none" stroke="#BAE6FD" stroke-width="1" opacity="0.3" />
      <ellipse cx="60" cy="60" rx="15" ry="45" fill="none" stroke="#BAE6FD" stroke-width="1" opacity="0.3" />
      <!-- Volumetric Glare -->
      <path d="M22,42 C30,24 55,18 78,24 C55,20 32,28 22,42 Z" fill="#FFFFFF" opacity="0.4" />
    </svg>
  `,

  // 29. KEY (Access, Security, Credentials, Authentication)
  key: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="kyBody" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#E2E8F0" />
          <stop offset="100%" stop-color="#64748B" />
        </linearGradient>
        <filter id="kyDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <circle cx="35" cy="35" r="25" fill="none" stroke="url(#kyBody)" stroke-width="12" filter="url(#kyDrop)" />
      <path d="M55,35 L100,35 L100,45 L80,45 L80,65 L70,65 L70,45 L55,45 Z" fill="url(#kyBody)" filter="url(#kyDrop)" />
    </svg>
  `,

  // 30. SUN (Weather, Morning, Brightness, Light)
  sun: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <radialGradient id="snCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FEF08A" />
          <stop offset="100%" stop-color="#F59E0B" />
        </radialGradient>
        <filter id="snGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="0" stdDeviation="10" flood-color="#F59E0B" flood-opacity="0.8"/>
        </filter>
      </defs>
      <circle cx="60" cy="60" r="25" fill="url(#snCore)" filter="url(#snGlow)" />
      <line x1="60" y1="10" x2="60" y2="25" stroke="#F59E0B" stroke-width="6" stroke-linecap="round" filter="url(#snGlow)" />
      <line x1="60" y1="95" x2="60" y2="110" stroke="#F59E0B" stroke-width="6" stroke-linecap="round" filter="url(#snGlow)" />
      <line x1="10" y1="60" x2="25" y2="60" stroke="#F59E0B" stroke-width="6" stroke-linecap="round" filter="url(#snGlow)" />
      <line x1="95" y1="60" x2="110" y2="60" stroke="#F59E0B" stroke-width="6" stroke-linecap="round" filter="url(#snGlow)" />
      <line x1="25" y1="25" x2="35" y2="35" stroke="#F59E0B" stroke-width="6" stroke-linecap="round" filter="url(#snGlow)" />
      <line x1="85" y1="85" x2="95" y2="95" stroke="#F59E0B" stroke-width="6" stroke-linecap="round" filter="url(#snGlow)" />
      <line x1="25" y1="95" x2="35" y2="85" stroke="#F59E0B" stroke-width="6" stroke-linecap="round" filter="url(#snGlow)" />
      <line x1="85" y1="35" x2="95" y2="25" stroke="#F59E0B" stroke-width="6" stroke-linecap="round" filter="url(#snGlow)" />
    </svg>
  `,

  // 31. LAPTOP (Computer, Device, Code, Work)
  laptop: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="lpScreen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#1E293B" />
          <stop offset="100%" stop-color="#020617" />
        </linearGradient>
        <linearGradient id="lpBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#CBD5E1" />
          <stop offset="100%" stop-color="#64748B" />
        </linearGradient>
        <filter id="lpDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="25" y="25" width="70" height="50" rx="4" fill="#94A3B8" filter="url(#lpDrop)" />
      <rect x="30" y="30" width="60" height="40" fill="url(#lpScreen)" />
      <path d="M15,80 L105,80 L115,95 L5,95 Z" fill="url(#lpBody)" filter="url(#lpDrop)" />
      <rect x="45" y="85" width="30" height="5" rx="2" fill="#475569" />
      <circle cx="60" cy="27" r="1.5" fill="#34D399" />
    </svg>
  `,

  // 32. SMARTPHONE (Mobile, Phone, Call, Device)
  smartphone: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="mpBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#475569" />
          <stop offset="100%" stop-color="#1E293B" />
        </linearGradient>
        <linearGradient id="mpScreen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0F172A" />
          <stop offset="100%" stop-color="#020617" />
        </linearGradient>
        <filter id="mpDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="35" y="15" width="50" height="90" rx="8" fill="url(#mpBody)" filter="url(#mpDrop)" />
      <rect x="40" y="25" width="40" height="70" rx="2" fill="url(#mpScreen)" />
      <rect x="55" y="20" width="10" height="2" rx="1" fill="#94A3B8" />
      <circle cx="60" cy="100" r="3" fill="#94A3B8" />
      <rect x="45" y="40" width="10" height="10" rx="2" fill="#3B82F6" opacity="0.8" />
      <rect x="65" y="40" width="10" height="10" rx="2" fill="#10B981" opacity="0.8" />
      <rect x="45" y="60" width="10" height="10" rx="2" fill="#F59E0B" opacity="0.8" />
      <rect x="65" y="60" width="10" height="10" rx="2" fill="#EF4444" opacity="0.8" />
    </svg>
  `,

  // 33. DATABASE (Backend, Storage, Infrastructure, Reliability)
  database: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="dbBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#475569" />
          <stop offset="100%" stop-color="#1E293B" />
        </linearGradient>
        <radialGradient id="dbTop" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#94A3B8" />
          <stop offset="100%" stop-color="#475569" />
        </radialGradient>
        <filter id="dbDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <ellipse cx="60" cy="25" rx="40" ry="15" fill="url(#dbTop)" filter="url(#dbDrop)" />
      <path d="M20,25 L20,95 C20,105 40,110 60,110 C80,110 100,105 100,95 L100,25" fill="url(#dbBody)" filter="url(#dbDrop)" />
      <ellipse cx="60" cy="95" rx="40" ry="15" fill="#1E293B" />
      <path d="M20,60 L100,60" stroke="#334155" stroke-width="2" />
      <path d="M20,40 L100,40" stroke="#334155" stroke-width="2" />
      <path d="M20,80 L100,80" stroke="#334155" stroke-width="2" />
    </svg>
  `,

  // 34. CLOUD (Storage, Cloud Computing, Weather, Sync)
  cloud: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="clBack" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#FFFFFF" />
                  <stop offset="50%" stop-color="#F0F9FF" />
                  <stop offset="100%" stop-color="#BAE6FD" />
                </linearGradient>
                <linearGradient id="clShadowInner" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stop-color="#7DD3FC" />
                  <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
                </linearGradient>
                <filter id="clDrop" x="-15%" y="-15%" width="130%" height="130%">
                  <feDropShadow dx="0" dy="10" stdDeviation="8" flood-color="#0284C7" flood-opacity="0.25"/>
                </filter>
              </defs>
              <!-- Volumetric 3D Fluffy Cloud Path -->
              <path d="M42,85 L85,85 C98,85 105,75 105,62 C105,50 97,42 85,42 C83,42 81,42 80,43 C75,25 55,20 42,32 C38,28 32,25 25,25 C12,25 5,35 5,48 C5,51 6,55 8,58 C3,62 0,68 0,75 C0,85 8,85 15,85 Z" fill="url(#clBack)" filter="url(#clDrop)" transform="translate(5, 5)" />
              <!-- Soft Bottom Shadow for Depth -->
              <path d="M42,85 L85,85 C98,85 105,75 105,62 C105,75 98,82 85,82 L42,82 C25,82 15,82 15,75 C15,82 25,85 42,85 Z" fill="url(#clShadowInner)" transform="translate(5, 5)" />
              <!-- Soft Core Highlight -->
              <circle cx="45" cy="45" r="12" fill="#FFFFFF" opacity="0.8" filter="blur(2px)" />
              <circle cx="80" cy="55" r="10" fill="#FFFFFF" opacity="0.8" filter="blur(2px)" />
            </svg>
  `,

  // 35. BRACKETS (Development, API, Script)
  brackets: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="brGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FCD34D" />
                  <stop offset="50%" stop-color="#F59E0B" />
                  <stop offset="100%" stop-color="#B45309" />
                </linearGradient>
                <linearGradient id="brSlash" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#38BDF8" />
                  <stop offset="100%" stop-color="#0369A1" />
                </linearGradient>
                <filter id="brDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
                </filter>
                <filter id="brGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#FCD34D" flood-opacity="0.4"/>
                </filter>
              </defs>
              <!-- Left Bracket -->
              <path d="M45,25 L25,60 L45,95" fill="none" stroke="url(#brGrad)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" filter="url(#brDrop)" />
              <!-- Right Bracket -->
              <path d="M75,25 L95,60 L75,95" fill="none" stroke="url(#brGrad)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" filter="url(#brDrop)" />
              <!-- Slash -->
              <line x1="68" y1="20" x2="52" y2="100" stroke="url(#brSlash)" stroke-width="10" stroke-linecap="round" filter="url(#brDrop)" />
              <!-- Sparkles -->
              <circle cx="20" cy="30" r="4" fill="#FDE047" filter="url(#brGlow)" />
              <circle cx="100" cy="90" r="3" fill="#FDE047" filter="url(#brGlow)" />
            </svg>
  `,

  // 36. GAMEPAD (Gaming, Entertainment, Console, Play)
  gamepad: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="gpBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#60A5FA" />
          <stop offset="100%" stop-color="#1E40AF" />
        </linearGradient>
        <filter id="gpDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M20,40 C20,30 40,30 60,35 C80,30 100,30 100,40 L105,70 C110,90 90,95 80,75 L40,75 C30,95 10,90 15,70 Z" fill="url(#gpBody)" filter="url(#gpDrop)" />
      <path d="M30,45 L30,65 M20,55 L40,55" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" />
      <circle cx="85" cy="45" r="5" fill="#EF4444" />
      <circle cx="75" cy="55" r="5" fill="#FDE047" />
      <circle cx="95" cy="55" r="5" fill="#34D399" />
      <circle cx="85" cy="65" r="5" fill="#60A5FA" />
    </svg>
  `,

  // 37. BATTERY (Power, Charge, Energy, Mobile)
  battery: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="baBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#94A3B8" />
          <stop offset="100%" stop-color="#475569" />
        </linearGradient>
        <linearGradient id="baCharge" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#34D399" />
          <stop offset="100%" stop-color="#059669" />
        </linearGradient>
        <filter id="baDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="baGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#34D399" flood-opacity="0.6"/>
        </filter>
      </defs>
      <rect x="15" y="40" width="80" height="40" rx="4" fill="url(#baBody)" filter="url(#baDrop)" />
      <rect x="95" y="50" width="10" height="20" rx="2" fill="#94A3B8" filter="url(#baDrop)" />
      <rect x="20" y="45" width="20" height="30" rx="2" fill="url(#baCharge)" filter="url(#baGlow)" />
      <rect x="45" y="45" width="20" height="30" rx="2" fill="url(#baCharge)" filter="url(#baGlow)" />
      <rect x="70" y="45" width="20" height="30" rx="2" fill="#1E293B" />
    </svg>
  `,

  // 38. HEADPHONES (Music, Audio, Listening, Entertainment)
  headphones: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="hpPad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#334155" />
          <stop offset="100%" stop-color="#0F172A" />
        </linearGradient>
        <filter id="hpDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M25,60 C25,30 95,30 95,60" fill="none" stroke="#94A3B8" stroke-width="12" stroke-linecap="round" filter="url(#hpDrop)" />
      <rect x="15" y="55" width="20" height="40" rx="8" fill="url(#hpPad)" filter="url(#hpDrop)" />
      <rect x="85" y="55" width="20" height="40" rx="8" fill="url(#hpPad)" filter="url(#hpDrop)" />
      <path d="M35,65 L35,85" stroke="#FFFFFF" stroke-width="2" opacity="0.2" />
      <path d="M85,65 L85,85" stroke="#FFFFFF" stroke-width="2" opacity="0.2" />
    </svg>
  `,

  // 39. MICROCHIP (Processor, Hardware, CPU, Brain)
  microchip: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="mcBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1E293B" />
          <stop offset="100%" stop-color="#020617" />
        </linearGradient>
        <linearGradient id="mcPins" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FCD34D" />
          <stop offset="100%" stop-color="#B45309" />
        </linearGradient>
        <filter id="mcDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.4"/>
        </filter>
      </defs>
      <rect x="25" y="15" width="10" height="90" fill="url(#mcPins)" />
      <rect x="85" y="15" width="10" height="90" fill="url(#mcPins)" />
      <rect x="15" y="25" width="90" height="10" fill="url(#mcPins)" />
      <rect x="15" y="85" width="90" height="10" fill="url(#mcPins)" />
      <rect x="25" y="25" width="70" height="70" rx="4" fill="url(#mcBody)" filter="url(#mcDrop)" />
      <rect x="40" y="40" width="40" height="40" rx="2" fill="#0F172A" />
      <circle cx="60" cy="60" r="10" fill="#38BDF8" opacity="0.8" />
    </svg>
  `,

  // 40. SATELLITE (Space, Transmission, Orbit, Connectivity)
  satellite: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="satPanel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3B82F6" />
          <stop offset="100%" stop-color="#1E3A8A" />
        </linearGradient>
        <linearGradient id="satBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F1F5F9" />
          <stop offset="100%" stop-color="#94A3B8" />
        </linearGradient>
        <filter id="satDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="satBeam" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#10B981" flood-opacity="0.8"/>
        </filter>
      </defs>
      <g filter="url(#satDrop)" transform="rotate(-20 60 60)">
        <rect x="15" y="45" width="30" height="30" rx="2" fill="url(#satPanel)" />
        <rect x="75" y="45" width="30" height="30" rx="2" fill="url(#satPanel)" />
        <line x1="25" y1="45" x2="25" y2="75" stroke="#93C5FD" stroke-width="1.5" opacity="0.5" />
        <line x1="35" y1="45" x2="35" y2="75" stroke="#93C5FD" stroke-width="1.5" opacity="0.5" />
        <line x1="85" y1="45" x2="85" y2="75" stroke="#93C5FD" stroke-width="1.5" opacity="0.5" />
        <line x1="95" y1="45" x2="95" y2="75" stroke="#93C5FD" stroke-width="1.5" opacity="0.5" />
        <line x1="15" y1="55" x2="45" y2="55" stroke="#93C5FD" stroke-width="1.5" opacity="0.5" />
        <line x1="15" y1="65" x2="45" y2="65" stroke="#93C5FD" stroke-width="1.5" opacity="0.5" />
        <line x1="75" y1="55" x2="105" y2="55" stroke="#93C5FD" stroke-width="1.5" opacity="0.5" />
        <line x1="75" y1="65" x2="105" y2="65" stroke="#93C5FD" stroke-width="1.5" opacity="0.5" />
        <rect x="45" y="40" width="30" height="40" rx="4" fill="url(#satBody)" />
        <path d="M50,40 L70,40 L75,25 L45,25 Z" fill="#CBD5E1" />
        <circle cx="60" cy="25" r="5" fill="#334155" />
        <circle cx="60" cy="22" r="3" fill="#10B981" filter="url(#satBeam)" />
        <path d="M50,80 L70,80 L60,95 Z" fill="#94A3B8" />
        <line x1="60" y1="95" x2="60" y2="105" stroke="#64748B" stroke-width="2" />
      </g>
    </svg>
  `,

  // 41. CART (E-commerce, Checkout, Shopping, Business)
  cart: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="ctBasket" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#38BDF8" />
                  <stop offset="100%" stop-color="#0284C7" />
                </linearGradient>
                <linearGradient id="ctMetal" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#F1F5F9" />
                  <stop offset="100%" stop-color="#94A3B8" />
                </linearGradient>
                <filter id="ctDrop" x="-10%" y="-10%" width="125%" height="125%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#0284C7" flood-opacity="0.3"/>
                </filter>
                <filter id="ctWheelShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#000000" flood-opacity="0.4"/>
                </filter>
              </defs>
              <!-- Base Frame / Handle -->
              <path d="M15,25 L28,25 L38,82 L92,82 L102,40 L34,40" fill="none" stroke="url(#ctMetal)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" filter="url(#ctWheelShadow)" />
              <!-- Basket Main Body -->
              <path d="M38,40 L102,40 L92,82 L38,82 Z" fill="url(#ctBasket)" filter="url(#ctDrop)" />
              <!-- Basket Grid Lines -->
              <line x1="52" y1="40" x2="48" y2="82" stroke="#7DD3FC" stroke-width="3" opacity="0.6" />
              <line x1="68" y1="40" x2="65" y2="82" stroke="#7DD3FC" stroke-width="3" opacity="0.6" />
              <line x1="84" y1="40" x2="82" y2="82" stroke="#7DD3FC" stroke-width="3" opacity="0.6" />
              <line x1="38" y1="54" x2="98" y2="54" stroke="#7DD3FC" stroke-width="3" opacity="0.6" />
              <line x1="38" y1="68" x2="95" y2="68" stroke="#7DD3FC" stroke-width="3" opacity="0.6" />
              <!-- Handle Grip -->
              <line x1="12" y1="25" x2="25" y2="25" stroke="#1E293B" stroke-width="10" stroke-linecap="round" />
              <!-- Volumetric Glare -->
              <path d="M42,46 L95,46 L92,58 L42,58 Z" fill="#FFFFFF" opacity="0.2" />
              <!-- Wheels -->
              <circle cx="45" cy="98" r="8" fill="#1E293B" filter="url(#ctWheelShadow)" />
              <circle cx="45" cy="98" r="3" fill="#94A3B8" />
              <circle cx="85" cy="98" r="8" fill="#1E293B" filter="url(#ctWheelShadow)" />
              <circle cx="85" cy="98" r="3" fill="#94A3B8" />
            </svg>
  `,

  // 42. STOREFRONT (Shop, Business, Marketplace)
  storefront: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="sfAwning1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#EF4444" />
                  <stop offset="100%" stop-color="#991B1B" />
                </linearGradient>
                <linearGradient id="sfAwning2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#F8FAFC" />
                  <stop offset="100%" stop-color="#94A3B8" />
                </linearGradient>
                <linearGradient id="sfBuilding" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#F1F5F9" />
                  <stop offset="100%" stop-color="#CBD5E1" />
                </linearGradient>
                <filter id="sfDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="4" flood-color="#000000" flood-opacity="0.3"/>
                </filter>
                <filter id="sfWindowGlow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="2" stdDeviation="5" flood-color="#38BDF8" flood-opacity="0.5"/>
                </filter>
              </defs>
              <!-- Main Building -->
              <rect x="15" y="45" width="90" height="60" fill="url(#sfBuilding)" filter="url(#sfDrop)" />
              <rect x="25" y="45" width="70" height="60" fill="#E2E8F0" />
              <!-- Windows & Door -->
              <rect x="35" y="55" width="20" height="30" rx="2" fill="#38BDF8" filter="url(#sfWindowGlow)" opacity="0.8" />
              <rect x="65" y="55" width="20" height="50" rx="2" fill="#38BDF8" filter="url(#sfWindowGlow)" opacity="0.8" />
              <path d="M35,65 L55,65 M65,75 L85,75" stroke="#FFFFFF" stroke-width="2" opacity="0.5" />
              <!-- Awning (Stripes) -->
              <path d="M10,45 L110,45 L105,25 L15,25 Z" fill="#475569" filter="url(#sfDrop)" />
              <path d="M10,45 L25,45 L25,50 C25,55 10,55 10,50 Z" fill="url(#sfAwning1)" filter="url(#sfDrop)" />
              <path d="M25,45 L45,45 L45,50 C45,55 25,55 25,50 Z" fill="url(#sfAwning2)" filter="url(#sfDrop)" />
              <path d="M45,45 L65,45 L65,50 C65,55 45,55 45,50 Z" fill="url(#sfAwning1)" filter="url(#sfDrop)" />
              <path d="M65,45 L85,45 L85,50 C85,55 65,55 65,50 Z" fill="url(#sfAwning2)" filter="url(#sfDrop)" />
              <path d="M85,45 L110,45 L110,50 C110,55 85,55 85,50 Z" fill="url(#sfAwning1)" filter="url(#sfDrop)" />
              <!-- Open Sign -->
              <rect x="40" y="60" width="10" height="6" rx="1" fill="#10B981" />
            </svg>
  `,

  // 43. CREDIT CARD (Payment, Subscription, Billing)
  creditcard: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="ccBody" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#1E293B" />
                  <stop offset="50%" stop-color="#0F172A" />
                  <stop offset="100%" stop-color="#020617" />
                </linearGradient>
                <linearGradient id="ccChip" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FDE047" />
                  <stop offset="100%" stop-color="#D97706" />
                </linearGradient>
                <filter id="ccDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.4"/>
                </filter>
                <filter id="ccGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#8B5CF6" flood-opacity="0.5"/>
                </filter>
              </defs>
              <!-- Card Base -->
              <rect x="15" y="30" width="90" height="60" rx="8" fill="url(#ccBody)" filter="url(#ccDrop)" stroke="#334155" stroke-width="1.5" />
              <!-- Magnetic Strip -->
              <rect x="15" y="45" width="90" height="12" fill="#000000" />
              <!-- Chip -->
              <rect x="25" y="65" width="16" height="12" rx="2" fill="url(#ccChip)" />
              <path d="M25,71 L41,71 M33,65 L33,77 M29,65 L29,77 M37,65 L37,77" stroke="#92400E" stroke-width="1" />
              <!-- Hologram Glow / Brand -->
              <circle cx="85" cy="72" r="8" fill="#8B5CF6" filter="url(#ccGlow)" opacity="0.8" />
              <circle cx="95" cy="72" r="8" fill="#F43F5E" opacity="0.8" />
              <!-- Text Lines -->
              <rect x="50" y="68" width="20" height="3" rx="1" fill="#64748B" />
              <rect x="50" y="74" width="25" height="3" rx="1" fill="#64748B" />
              <!-- Highlight -->
              <path d="M15,40 C35,30 85,30 105,40" fill="none" stroke="#FFFFFF" stroke-width="4" opacity="0.1" />
            </svg>
  `,

  // 44. COIN STACK (Wealth, Revenue, Crypto)
  coinstack: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="csGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FEF08A" />
                  <stop offset="50%" stop-color="#F59E0B" />
                  <stop offset="100%" stop-color="#B45309" />
                </linearGradient>
                <linearGradient id="csEdge" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#D97706" />
                  <stop offset="50%" stop-color="#FCD34D" />
                  <stop offset="100%" stop-color="#92400E" />
                </linearGradient>
                <filter id="csDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="4" stdDeviation="3" flood-color="#000000" flood-opacity="0.4"/>
                </filter>
                <filter id="csGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#F59E0B" flood-opacity="0.6"/>
                </filter>
              </defs>
              <!-- Bottom Coin -->
              <path d="M30,85 L30,95 C30,103 90,103 90,95 L90,85" fill="url(#csEdge)" filter="url(#csDrop)" />
              <ellipse cx="60" cy="85" rx="30" ry="10" fill="url(#csGold)" />
              <!-- Middle Coin 2 -->
              <path d="M30,70 L30,80 C30,88 90,88 90,80 L90,70" fill="url(#csEdge)" filter="url(#csDrop)" />
              <ellipse cx="60" cy="70" rx="30" ry="10" fill="url(#csGold)" />
              <!-- Middle Coin 1 -->
              <path d="M30,55 L30,65 C30,73 90,73 90,65 L90,55" fill="url(#csEdge)" filter="url(#csDrop)" />
              <ellipse cx="60" cy="55" rx="30" ry="10" fill="url(#csGold)" />
              <!-- Top Coin -->
              <path d="M30,40 L30,50 C30,58 90,58 90,50 L90,40" fill="url(#csEdge)" filter="url(#csDrop)" />
              <ellipse cx="60" cy="40" rx="30" ry="10" fill="url(#csGold)" filter="url(#csGlow)" />
              <ellipse cx="60" cy="40" rx="22" ry="7" fill="none" stroke="#D97706" stroke-width="2" />
              <path d="M57,36 L63,36 M60,35 L60,45 M57,41 C57,39 63,39 63,41 C63,43 57,43 57,45 C57,47 63,47 63,45" fill="none" stroke="#B45309" stroke-width="2" stroke-linecap="round" />
              <circle cx="45" cy="38" r="2" fill="#FFFFFF" opacity="0.8" filter="url(#csGlow)" />
            </svg>
  `,

  // 45. PRICE TAG (Sale, Discount, Retail)
  pricetag: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="ptBody" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#F43F5E" />
                  <stop offset="100%" stop-color="#9F1239" />
                </linearGradient>
                <filter id="ptDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
                </filter>
                <filter id="ptGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#F43F5E" flood-opacity="0.5"/>
                </filter>
              </defs>
              <!-- Tag String -->
              <path d="M40,25 C40,10 70,10 70,25" fill="none" stroke="#94A3B8" stroke-width="4" stroke-linecap="round" filter="url(#ptDrop)" />
              <!-- Tag Body -->
              <path d="M30,25 L80,25 L100,55 L65,105 L20,55 Z" fill="url(#ptBody)" filter="url(#ptDrop)" stroke="#BE123C" stroke-width="2" />
              <!-- Hole -->
              <circle cx="55" cy="35" r="5" fill="#1E293B" filter="url(#ptGlow)" />
              <!-- Discount Text / Symbol -->
              <path d="M40,60 L70,60 M55,45 L55,75 M50,55 C50,50 60,50 60,55 C60,60 50,60 50,65 C50,70 60,70 60,65" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" />
              <!-- Edge Highlight -->
              <path d="M32,27 L78,27 L95,55" fill="none" stroke="#FFFFFF" stroke-width="3" opacity="0.4" />
              <!-- Star Sparkle -->
              <path d="M80,35 Q85,45 95,50 Q85,55 80,65 Q75,55 65,50 Q75,45 80,35 Z" fill="#FDE047" filter="url(#ptGlow)" />
            </svg>
  `,

  // 46. SHOPPING BAG (Products, Cart, Order)
  shoppingbag: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="sbBody" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#10B981" />
                  <stop offset="100%" stop-color="#047857" />
                </linearGradient>
                <linearGradient id="sbFront" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#34D399" />
                  <stop offset="100%" stop-color="#059669" />
                </linearGradient>
                <filter id="sbDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
                </filter>
                <filter id="sbGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#34D399" flood-opacity="0.5"/>
                </filter>
              </defs>
              <!-- Handles -->
              <path d="M45,45 C45,25 75,25 75,45" fill="none" stroke="#0F172A" stroke-width="6" stroke-linecap="round" filter="url(#sbDrop)" />
              <!-- Bag Body (Back) -->
              <rect x="25" y="45" width="70" height="60" rx="4" fill="url(#sbBody)" filter="url(#sbDrop)" />
              <!-- Bag Front Pocket/Fold -->
              <path d="M25,65 L95,55 L95,105 C95,107 93,109 91,109 L29,109 C27,109 25,107 25,105 Z" fill="url(#sbFront)" />
              <!-- Icon on Bag (Checkmark) -->
              <path d="M50,75 L55,80 L70,65" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" filter="url(#sbGlow)" />
              <!-- Highlight -->
              <path d="M27,67 L90,58" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.6" />
            </svg>
  `,

  // 47. PIGGY BANK (Savings, Investment)
  piggybank: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="pbBody" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#F472B6" />
                  <stop offset="100%" stop-color="#BE185D" />
                </linearGradient>
                <linearGradient id="pbCoin" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FDE047" />
                  <stop offset="100%" stop-color="#B45309" />
                </linearGradient>
                <filter id="pbDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#BE185D" flood-opacity="0.4"/>
                </filter>
                <filter id="pbGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="-4" stdDeviation="4" flood-color="#FDE047" flood-opacity="0.6"/>
                </filter>
              </defs>
              <!-- Legs -->
              <rect x="35" y="80" width="12" height="20" rx="4" fill="#9D174D" filter="url(#pbDrop)" />
              <rect x="75" y="80" width="12" height="20" rx="4" fill="#9D174D" filter="url(#pbDrop)" />
              <!-- Body -->
              <ellipse cx="60" cy="65" rx="45" ry="35" fill="url(#pbBody)" filter="url(#pbDrop)" />
              <!-- Snout -->
              <ellipse cx="100" cy="60" rx="10" ry="15" fill="#DB2777" />
              <circle cx="98" cy="55" r="2" fill="#831843" />
              <circle cx="98" cy="65" r="2" fill="#831843" />
              <!-- Ears -->
              <path d="M40,35 L35,20 L55,30 Z" fill="#DB2777" />
              <path d="M70,30 L80,15 L85,35 Z" fill="#F472B6" />
              <!-- Eye -->
              <circle cx="85" cy="50" r="4" fill="#1E293B" />
              <circle cx="86" cy="49" r="1.5" fill="#FFFFFF" />
              <!-- Coin Dropping -->
              <ellipse cx="60" cy="25" rx="12" ry="16" fill="url(#pbCoin)" transform="rotate(30 60 25)" filter="url(#pbGlow)" />
              <path d="M60,25 C63,22 67,23 68,26 C69,29 67,33 64,35" fill="none" stroke="#D97706" stroke-width="2" transform="rotate(30 60 25)" />
              <!-- Slot -->
              <path d="M50,30 L70,30" stroke="#831843" stroke-width="4" stroke-linecap="round" />
              <!-- Highlight -->
              <path d="M30,45 C45,35 75,35 90,45" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.5" />
            </svg>
  `,

  // 48. RECEIPT (Billing, Checkout, Total, Purchase)
  receipt: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="rePaper" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="100%" stop-color="#CBD5E1" />
        </linearGradient>
        <filter id="reDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M30,15 L90,15 L90,100 L80,90 L70,100 L60,90 L50,100 L40,90 L30,100 Z" fill="url(#rePaper)" filter="url(#reDrop)" />
      <line x1="45" y1="35" x2="75" y2="35" stroke="#94A3B8" stroke-width="4" stroke-linecap="round" />
      <line x1="45" y1="50" x2="75" y2="50" stroke="#94A3B8" stroke-width="4" stroke-linecap="round" />
      <line x1="45" y1="65" x2="60" y2="65" stroke="#94A3B8" stroke-width="4" stroke-linecap="round" />
      <circle cx="60" cy="80" r="5" fill="#EF4444" />
    </svg>
  `,

  // 49. DELIVERY BOX (Shipping, Logistics, Mail)
  deliverybox: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="dbTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FDE68A" />
                  <stop offset="100%" stop-color="#D97706" />
                </linearGradient>
                <linearGradient id="dbLeftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#D97706" />
                  <stop offset="100%" stop-color="#92400E" />
                </linearGradient>
                <linearGradient id="dbRightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#F59E0B" />
                  <stop offset="100%" stop-color="#B45309" />
                </linearGradient>
                <filter id="dbDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.3"/>
                </filter>
              </defs>
              <!-- Box Isometric 3D -->
              <g filter="url(#dbDrop)">
                <!-- Top Face -->
                <polygon points="60,25 95,45 60,65 25,45" fill="url(#dbTopGrad)" />
                <!-- Left Face -->
                <polygon points="25,45 60,65 60,100 25,80" fill="url(#dbLeftGrad)" />
                <!-- Right Face -->
                <polygon points="60,65 95,45 95,80 60,100" fill="url(#dbRightGrad)" />
              </g>
              <!-- Box Tape -->
              <polygon points="60,25 75,34 40,54 25,45" fill="#FEF08A" opacity="0.6" />
              <polygon points="40,54 40,89 25,80 25,45" fill="#FDE047" opacity="0.5" />
              <!-- Logo / Graphic on Right Face -->
              <polygon points="70,65 85,55 85,65 70,75" fill="#FFFFFF" opacity="0.8" />
              <path d="M73,65 L82,59" stroke="#1E293B" stroke-width="2" opacity="0.8" />
              <!-- Flaps Highlight -->
              <line x1="25" y1="45" x2="60" y2="65" stroke="#FFFFFF" stroke-width="2" opacity="0.5" />
              <line x1="60" y1="65" x2="95" y2="45" stroke="#FFFFFF" stroke-width="2" opacity="0.3" />
              <line x1="60" y1="65" x2="60" y2="100" stroke="#FFFFFF" stroke-width="2" opacity="0.4" />
            </svg>
  `,

  // 50. DIAMOND RING (Luxury, Premium, Jewelry)
  diamondring: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="drRing" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FCD34D" />
                  <stop offset="50%" stop-color="#F59E0B" />
                  <stop offset="100%" stop-color="#92400E" />
                </linearGradient>
                <linearGradient id="drDiamond" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#E0F2FE" />
                  <stop offset="50%" stop-color="#38BDF8" />
                  <stop offset="100%" stop-color="#0369A1" />
                </linearGradient>
                <filter id="drDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
                </filter>
                <filter id="drGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#38BDF8" flood-opacity="0.7"/>
                </filter>
              </defs>
              <!-- Ring Band -->
              <circle cx="60" cy="70" r="30" fill="none" stroke="url(#drRing)" stroke-width="12" filter="url(#drDrop)" />
              <!-- Inner Band Highlight -->
              <circle cx="60" cy="70" r="24" fill="none" stroke="#FEF08A" stroke-width="2" opacity="0.5" />
              <!-- Diamond Setup -->
              <g filter="url(#drDrop)">
                <!-- Prongs -->
                <path d="M45,35 L40,45 M75,35 L80,45" stroke="url(#drRing)" stroke-width="4" stroke-linecap="round" />
                <!-- Main Diamond -->
                <polygon points="45,25 75,25 85,40 60,60 35,40" fill="url(#drDiamond)" filter="url(#drGlow)" />
                <!-- Facets -->
                <polygon points="45,25 60,25 55,40 35,40" fill="#FFFFFF" opacity="0.6" />
                <polygon points="60,25 75,25 85,40 65,40" fill="#0284C7" opacity="0.4" />
                <polygon points="35,40 60,60 55,40" fill="#FFFFFF" opacity="0.4" />
                <polygon points="85,40 60,60 65,40" fill="#0284C7" opacity="0.6" />
                <polygon points="55,40 65,40 60,60" fill="#38BDF8" />
              </g>
              <!-- Sparkle -->
              <path d="M30,15 Q35,25 45,30 Q35,35 30,45 Q25,35 15,30 Q25,25 30,15 Z" fill="#FFFFFF" filter="url(#drGlow)" opacity="0.9" />
            </svg>
  `,

  // 51. HOME (Dashboard, Main Menu, Navigation, Base)
  home: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="hmRoof" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#F87171" />
                  <stop offset="100%" stop-color="#B91C1C" />
                </linearGradient>
                <linearGradient id="hmWall" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#FFFFFF" />
                  <stop offset="100%" stop-color="#E2E8F0" />
                </linearGradient>
                <linearGradient id="hmDoor" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#38BDF8" />
                  <stop offset="100%" stop-color="#0284C7" />
                </linearGradient>
                <filter id="hmDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="8" stdDeviation="5" flood-color="#000000" flood-opacity="0.25"/>
                </filter>
                <filter id="hmRoofDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#7F1D1D" flood-opacity="0.4"/>
                </filter>
              </defs>
              <!-- Base House Walls -->
              <path d="M25,50 L95,50 L95,100 L25,100 Z" fill="url(#hmWall)" filter="url(#hmDrop)" />
              <!-- Chimney -->
              <rect x="75" y="20" width="12" height="30" fill="url(#hmWall)" filter="url(#hmDrop)" />
              <rect x="73" y="17" width="16" height="5" rx="1" fill="#94A3B8" />
              <!-- Overhanging Roof -->
              <path d="M10,55 L60,15 L110,55 L100,63 L60,32 L20,63 Z" fill="url(#hmRoof)" filter="url(#hmRoofDrop)" />
              <!-- Roof Highlight -->
              <path d="M22,56 L60,26 L98,56" fill="none" stroke="#FCA5A5" stroke-width="2" stroke-linecap="round" />
              <!-- Front Door -->
              <path d="M50,100 L50,70 C50,65 54,62 58,62 L62,62 C66,62 70,65 70,70 L70,100 Z" fill="url(#hmDoor)" />
              <!-- Door Knob -->
              <circle cx="65" cy="85" r="2" fill="#FFFFFF" />
              <!-- Window -->
              <rect x="33" y="65" width="16" height="16" rx="2" fill="#BAE6FD" />
              <path d="M41,65 L41,81 M33,73 L49,73" stroke="#FFFFFF" stroke-width="2" />
            </svg>
  `,

  // 52. MAP / PIN (Location, Directions, GPS)
  map: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="mpPin" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#F87171" />
                  <stop offset="100%" stop-color="#B91C1C" />
                </linearGradient>
                <linearGradient id="mpPaper" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#F1F5F9" />
                  <stop offset="100%" stop-color="#94A3B8" />
                </linearGradient>
                <filter id="mpDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
                </filter>
                <filter id="mpGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#F87171" flood-opacity="0.5"/>
                </filter>
              </defs>
              <!-- Map Paper -->
              <path d="M20,35 L45,25 L75,35 L100,25 L100,85 L75,95 L45,85 L20,95 Z" fill="url(#mpPaper)" filter="url(#mpDrop)" />
              <!-- Map Folds -->
              <line x1="45" y1="25" x2="45" y2="85" stroke="#CBD5E1" stroke-width="2" />
              <line x1="75" y1="35" x2="75" y2="95" stroke="#475569" stroke-width="2" opacity="0.3" />
              <!-- Roads -->
              <path d="M30,55 L45,65 L75,55 L90,65" fill="none" stroke="#FDE047" stroke-width="4" stroke-linecap="round" />
              <path d="M40,30 L35,80 M85,30 L80,80" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.8" />
              <!-- Pin -->
              <path d="M60,15 C45,15 35,25 35,40 C35,60 60,85 60,85 C60,85 85,60 85,40 C85,25 75,15 60,15 Z" fill="url(#mpPin)" filter="url(#mpDrop)" />
              <circle cx="60" cy="40" r="10" fill="#1E293B" />
              <!-- Pin Highlight -->
              <path d="M48,28 C55,22 65,22 72,28" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.6" filter="url(#mpGlow)" />
            </svg>
  `,

  // 53. TRASH / DELETE (Remove, Clear, Destructive Action)
  trash: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="trMetal" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#F1F5F9" />
                  <stop offset="50%" stop-color="#94A3B8" />
                  <stop offset="100%" stop-color="#475569" />
                </linearGradient>
                <linearGradient id="trDark" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#64748B" />
                  <stop offset="100%" stop-color="#1E293B" />
                </linearGradient>
                <filter id="trDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
                </filter>
                <filter id="trInner" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
                </filter>
              </defs>
              <!-- Trash Bin Body -->
              <path d="M30,35 L90,35 L82,100 C81,105 77,108 72,108 L48,108 C43,108 39,105 38,100 Z" fill="url(#trMetal)" filter="url(#trDrop)" />
              <!-- Ribbed Detailing (Vertical Ridges) -->
              <line x1="45" y1="48" x2="50" y2="95" stroke="#CBD5E1" stroke-width="3" stroke-linecap="round" />
              <line x1="60" y1="48" x2="60" y2="95" stroke="#CBD5E1" stroke-width="3" stroke-linecap="round" />
              <line x1="75" y1="48" x2="70" y2="95" stroke="#CBD5E1" stroke-width="3" stroke-linecap="round" />
              <!-- Bin Opening (Inner Depth) -->
              <ellipse cx="60" cy="35" rx="32" ry="6" fill="url(#trDark)" filter="url(#trInner)" />
              <!-- Lid Structure (Slightly Ajar for Dynamic Look) -->
              <g transform="rotate(-8 30 35)">
                <ellipse cx="60" cy="30" rx="34" ry="7" fill="url(#trMetal)" filter="url(#trDrop)" />
                <ellipse cx="60" cy="28" rx="30" ry="5" fill="#E2E8F0" />
                <!-- Handle -->
                <path d="M50,25 L50,20 C50,17 52,15 55,15 L65,15 C68,15 70,17 70,20 L70,25" fill="none" stroke="url(#trMetal)" stroke-width="4" stroke-linecap="round" />
              </g>
            </svg>
  `,

  // 54. EYE (Visibility, Views, Watch)
  eye: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="eyWhite" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FFFFFF" />
                  <stop offset="100%" stop-color="#E2E8F0" />
                </linearGradient>
                <radialGradient id="eyIris" cx="40%" cy="40%" r="60%">
                  <stop offset="0%" stop-color="#38BDF8" />
                  <stop offset="70%" stop-color="#0284C7" />
                  <stop offset="100%" stop-color="#0F172A" />
                </radialGradient>
                <filter id="eyDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
                </filter>
                <filter id="eyGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#38BDF8" flood-opacity="0.5"/>
                </filter>
              </defs>
              <!-- Eye Shape -->
              <path d="M15,60 C35,20 85,20 105,60 C85,100 35,100 15,60 Z" fill="url(#eyWhite)" filter="url(#eyDrop)" />
              <!-- Iris -->
              <circle cx="60" cy="60" r="25" fill="url(#eyIris)" filter="url(#eyDrop)" />
              <!-- Pupil -->
              <circle cx="60" cy="60" r="10" fill="#000000" />
              <!-- Glare -->
              <circle cx="53" cy="53" r="4" fill="#FFFFFF" opacity="0.9" filter="url(#eyGlow)" />
              <circle cx="65" cy="55" r="2" fill="#FFFFFF" opacity="0.7" />
              <!-- Upper Eyelid Highlight -->
              <path d="M25,50 C45,30 75,30 95,50" fill="none" stroke="#0F172A" stroke-width="4" stroke-linecap="round" opacity="0.1" />
            </svg>
  `,

  // 55. MEGAPHONE (Announcements, Marketing, Loud)
  megaphone: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="mgBody" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#EF4444" />
                  <stop offset="100%" stop-color="#9F1239" />
                </linearGradient>
                <linearGradient id="mgCone" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#F8FAFC" />
                  <stop offset="100%" stop-color="#94A3B8" />
                </linearGradient>
                <filter id="mgDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
                </filter>
                <filter id="mgSoundGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#FCD34D" flood-opacity="0.6"/>
                </filter>
              </defs>
              <!-- Base/Handle -->
              <rect x="25" y="45" width="20" height="30" rx="4" fill="url(#mgBody)" filter="url(#mgDrop)" />
              <path d="M30,75 L40,75 L35,100 Z" fill="#475569" filter="url(#mgDrop)" />
              <!-- Main Cone -->
              <path d="M45,45 L85,25 L85,95 L45,75 Z" fill="url(#mgCone)" filter="url(#mgDrop)" />
              <!-- Cone Opening -->
              <ellipse cx="85" cy="60" rx="10" ry="35" fill="#1E293B" />
              <!-- Inner Glow/Speaker -->
              <ellipse cx="85" cy="60" rx="4" ry="15" fill="#EF4444" filter="url(#mgDrop)" />
              <!-- Sound Waves -->
              <path d="M100,45 Q110,60 100,75" fill="none" stroke="#FDE047" stroke-width="4" stroke-linecap="round" filter="url(#mgSoundGlow)" />
              <path d="M110,35 Q125,60 110,85" fill="none" stroke="#FDE047" stroke-width="4" stroke-linecap="round" filter="url(#mgSoundGlow)" />
              <!-- Highlight -->
              <path d="M47,48 L80,31" stroke="#FFFFFF" stroke-width="2" opacity="0.6" />
            </svg>
  `,

  // 56. ANCHOR (Stability, Harbor, Trust)
  anchor: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="anMetal" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#E2E8F0" />
                  <stop offset="50%" stop-color="#94A3B8" />
                  <stop offset="100%" stop-color="#475569" />
                </linearGradient>
                <filter id="anDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.4"/>
                </filter>
                <filter id="anGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#FFFFFF" flood-opacity="0.3"/>
                </filter>
              </defs>
              <!-- Central Shaft -->
              <rect x="55" y="30" width="10" height="60" rx="5" fill="url(#anMetal)" filter="url(#anDrop)" />
              <!-- Top Ring -->
              <circle cx="60" cy="20" r="10" fill="none" stroke="url(#anMetal)" stroke-width="6" filter="url(#anDrop)" />
              <circle cx="60" cy="20" r="10" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.3" filter="url(#anGlow)" />
              <!-- Crossbar -->
              <path d="M35,40 L85,40" stroke="url(#anMetal)" stroke-width="10" stroke-linecap="round" filter="url(#anDrop)" />
              <path d="M35,40 L85,40" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.4" />
              <!-- Bottom Hooks -->
              <path d="M25,60 C25,100 95,100 95,60" fill="none" stroke="url(#anMetal)" stroke-width="12" stroke-linecap="round" filter="url(#anDrop)" />
              <path d="M25,60 C25,100 95,100 95,60" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.3" />
              <!-- Flukes (Arrows) -->
              <polygon points="15,65 35,65 25,50" fill="url(#anMetal)" filter="url(#anDrop)" />
              <polygon points="85,65 105,65 95,50" fill="url(#anMetal)" filter="url(#anDrop)" />
              <polygon points="15,65 35,65 25,50" fill="none" stroke="#FFFFFF" stroke-width="1" opacity="0.5" />
              <polygon points="85,65 105,65 95,50" fill="none" stroke="#FFFFFF" stroke-width="1" opacity="0.5" />
            </svg>
  `,

  // 57. PUZZLE PIECE (Plugins, Integrations, Logic)
  puzzle: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="pzBody" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#A78BFA" />
                  <stop offset="100%" stop-color="#6D28D9" />
                </linearGradient>
                <filter id="pzDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
                </filter>
                <filter id="pzInner" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#4C1D95" flood-opacity="0.6"/>
                </filter>
              </defs>
              <!-- Puzzle Body -->
              <path d="M30,30 L45,30 C45,15 75,15 75,30 L90,30 L90,45 C105,45 105,75 90,75 L90,90 L75,90 C75,75 45,75 45,90 L30,90 L30,75 C45,75 45,45 30,45 Z" fill="url(#pzBody)" filter="url(#pzDrop)" stroke="#5B21B6" stroke-width="2" />
              <!-- Highlights -->
              <path d="M35,35 L45,35 C45,25 75,25 75,35 L85,35" fill="none" stroke="#FFFFFF" stroke-width="3" opacity="0.5" />
              <path d="M35,35 L35,45 C45,45 45,75 35,75 L35,85" fill="none" stroke="#FFFFFF" stroke-width="3" opacity="0.3" />
              <!-- Star / Logic Core -->
              <circle cx="60" cy="60" r="8" fill="#FDE047" filter="url(#pzDrop)" />
              <path d="M60,40 L60,80 M40,60 L80,60" stroke="#FDE047" stroke-width="2" opacity="0.5" />
            </svg>
  `,

  // 58. PAPER PLANE (Send, Email, Fast Delivery)
  paperplane: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="ppTop" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#E0F2FE" />
                  <stop offset="100%" stop-color="#38BDF8" />
                </linearGradient>
                <linearGradient id="ppBottom" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#0284C7" />
                  <stop offset="100%" stop-color="#0F172A" />
                </linearGradient>
                <filter id="ppDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.3"/>
                </filter>
                <filter id="ppGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#38BDF8" flood-opacity="0.5"/>
                </filter>
              </defs>
              <!-- Top Wing -->
              <polygon points="15,45 105,25 65,95 45,65" fill="url(#ppTop)" filter="url(#ppDrop)" />
              <!-- Bottom Wing/Fold -->
              <polygon points="15,45 45,65 35,85" fill="url(#ppBottom)" filter="url(#ppDrop)" />
              <polygon points="15,45 45,65 105,25" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.6" />
              <polygon points="45,65 65,95 105,25" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.4" />
              <!-- Action Lines -->
              <path d="M10,80 Q25,75 30,85" fill="none" stroke="#94A3B8" stroke-width="3" stroke-linecap="round" opacity="0.6" />
              <path d="M15,95 Q35,85 45,100" fill="none" stroke="#94A3B8" stroke-width="3" stroke-linecap="round" opacity="0.4" />
              <circle cx="105" cy="25" r="3" fill="#FFFFFF" filter="url(#ppGlow)" />
            </svg>
  `,

  // 59. BADGE (Access, ID, Credentials, Verification)
  badge: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="bdPlastic" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#F1F5F9" />
          <stop offset="100%" stop-color="#CBD5E1" />
        </linearGradient>
        <linearGradient id="bdBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3B82F6" />
          <stop offset="100%" stop-color="#1D4ED8" />
        </linearGradient>
        <filter id="bdDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="30" y="25" width="60" height="80" rx="4" fill="url(#bdPlastic)" filter="url(#bdDrop)" />
      <rect x="30" y="25" width="60" height="20" fill="url(#bdBlue)" />
      <rect x="45" y="15" width="30" height="5" rx="2" fill="#64748B" />
      <circle cx="60" cy="65" r="12" fill="#94A3B8" />
      <circle cx="60" cy="62" r="4" fill="#E2E8F0" />
      <path d="M50,75 A12,12 0 0,1 70,75" fill="none" stroke="#E2E8F0" stroke-width="4" />
      <rect x="40" y="85" width="40" height="4" fill="#94A3B8" />
      <rect x="40" y="95" width="20" height="4" fill="#94A3B8" />
    </svg>
  `,

  // 60. WARNING / ALERT (Caution, Danger, Notice)
  warning: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="wnSign" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FDE047" />
                  <stop offset="50%" stop-color="#F59E0B" />
                  <stop offset="100%" stop-color="#B45309" />
                </linearGradient>
                <filter id="wnDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.4"/>
                </filter>
                <filter id="wnGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#EF4444" flood-opacity="0.7"/>
                </filter>
              </defs>
              <!-- Triangle Base -->
              <path d="M60,15 L15,95 L105,95 Z" fill="url(#wnSign)" filter="url(#wnDrop)" stroke="#78350F" stroke-width="4" stroke-linejoin="round" />
              <!-- Inner Triangle -->
              <path d="M60,25 L25,88 L95,88 Z" fill="#FEF08A" opacity="0.3" />
              <!-- Exclamation Mark -->
              <rect x="54" y="35" width="12" height="35" rx="6" fill="#1E293B" filter="url(#wnGlow)" />
              <circle cx="60" cy="80" r="6" fill="#1E293B" filter="url(#wnGlow)" />
              <!-- Exclamation Highlight -->
              <rect x="56" y="37" width="4" height="31" rx="2" fill="#EF4444" />
              <circle cx="60" cy="80" r="3" fill="#EF4444" />
              <!-- Edge Highlight -->
              <path d="M60,20 L20,90" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.6" />
            </svg>
  `,

  // 61. PALETTE (Design, Themes, Colors, Creativity)
  palette: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
          <defs>
            <linearGradient id="plWood" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FDE68A"/>
              <stop offset="50%" stop-color="#D97706"/>
              <stop offset="100%" stop-color="#78350F"/>
            </linearGradient>
            <radialGradient id="plBlob1" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stop-color="#FCA5A5"/><stop offset="100%" stop-color="#DC2626"/>
            </radialGradient>
            <radialGradient id="plBlob2" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stop-color="#86EFAC"/><stop offset="100%" stop-color="#16A34A"/>
            </radialGradient>
            <radialGradient id="plBlob3" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stop-color="#93C5FD"/><stop offset="100%" stop-color="#2563EB"/>
            </radialGradient>
            <filter id="plDrop" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
            </filter>
            <filter id="plBlobDrop" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#000000" flood-opacity="0.4"/>
            </filter>
          </defs>
          <path d="M60,15 C90,15 105,35 105,65 C105,95 85,105 60,105 C35,105 15,85 15,55 C15,25 30,15 60,15 Z" fill="url(#plWood)" filter="url(#plDrop)"/>
          <circle cx="80" cy="75" r="10" fill="#0F172A" filter="url(#plBlobDrop)"/>
          <circle cx="40" cy="35" r="12" fill="url(#plBlob1)" filter="url(#plBlobDrop)"/>
          <circle cx="37" cy="32" r="3" fill="#FFFFFF" opacity="0.7"/>
          
          <circle cx="28" cy="65" r="14" fill="url(#plBlob2)" filter="url(#plBlobDrop)"/>
          <circle cx="24" cy="61" r="4" fill="#FFFFFF" opacity="0.7"/>
          
          <circle cx="60" cy="85" r="11" fill="url(#plBlob3)" filter="url(#plBlobDrop)"/>
          <circle cx="58" cy="82" r="2.5" fill="#FFFFFF" opacity="0.7"/>
          <path d="M30,25 C45,15 65,15 80,22" fill="none" stroke="#FEF3C7" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
        </svg>
  `,

  // 62. BOOK (Reading, Knowledge, Documentation, Reference)
  book: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="bkCover" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#EF4444" />
          <stop offset="100%" stop-color="#991B1B" />
        </linearGradient>
        <filter id="bkDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M20,20 L60,10 L60,100 L20,90 Z" fill="url(#bkCover)" filter="url(#bkDrop)" />
      <path d="M60,10 L100,20 L100,110 L60,100 Z" fill="url(#bkCover)" filter="url(#bkDrop)" />
      <path d="M60,10 L60,100" stroke="#FFFFFF" stroke-width="4" opacity="0.3" />
      <path d="M30,30 L50,35 M30,45 L50,50 M30,60 L50,65" stroke="#FFFFFF" stroke-width="2" opacity="0.3" />
    </svg>
  `,

  // 63. GRADUATION CAP (Learning, Academy, Success)
  graduation: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="grCap" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#334155" />
                  <stop offset="100%" stop-color="#0F172A" />
                </linearGradient>
                <linearGradient id="grTassel" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#FDE047" />
                  <stop offset="100%" stop-color="#B45309" />
                </linearGradient>
                <filter id="grDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.4"/>
                </filter>
              </defs>
              <!-- Base Skullcap -->
              <path d="M35,65 C35,85 85,85 85,65 L85,55 L35,55 Z" fill="#1E293B" filter="url(#grDrop)" />
              <!-- Mortarboard Top -->
              <polygon points="60,20 105,45 60,70 15,45" fill="url(#grCap)" filter="url(#grDrop)" stroke="#475569" stroke-width="2" />
              <!-- Center Button -->
              <ellipse cx="60" cy="45" rx="5" ry="3" fill="#94A3B8" />
              <!-- Tassel String -->
              <path d="M60,45 Q75,55 85,75" fill="none" stroke="#FDE047" stroke-width="2" />
              <!-- Tassel Fringe -->
              <path d="M82,75 L88,75 L90,95 L80,95 Z" fill="url(#grTassel)" filter="url(#grDrop)" />
              <line x1="82" y1="80" x2="82" y2="95" stroke="#D97706" stroke-width="1" />
              <line x1="85" y1="80" x2="85" y2="95" stroke="#D97706" stroke-width="1" />
              <line x1="88" y1="80" x2="88" y2="95" stroke="#D97706" stroke-width="1" />
              <!-- Highlight -->
              <polygon points="60,25 95,45 60,65 25,45" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.2" />
            </svg>
  `,

  // 64. FILM REEL (Movies, Video, Cinema)
  filmreel: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="frBody" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#475569" />
                  <stop offset="50%" stop-color="#1E293B" />
                  <stop offset="100%" stop-color="#020617" />
                </linearGradient>
                <linearGradient id="frFilm" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#64748B" />
                  <stop offset="100%" stop-color="#0F172A" />
                </linearGradient>
                <filter id="frDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.4"/>
                </filter>
                <filter id="frGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#38BDF8" flood-opacity="0.4"/>
                </filter>
              </defs>
              <!-- Film Strip Background (Unrolling) -->
              <path d="M15,90 L40,90 L40,110 L15,110 Z" fill="url(#frFilm)" filter="url(#frDrop)" />
              <path d="M30,90 C30,70 45,70 45,90 L70,90 C70,60 15,60 15,90 Z" fill="url(#frFilm)" />
              <!-- Strip Holes -->
              <circle cx="20" cy="95" r="2" fill="#FFFFFF" />
              <circle cx="20" cy="105" r="2" fill="#FFFFFF" />
              <circle cx="35" cy="95" r="2" fill="#FFFFFF" />
              <circle cx="35" cy="105" r="2" fill="#FFFFFF" />
              <!-- Main Reel -->
              <circle cx="65" cy="45" r="40" fill="url(#frBody)" filter="url(#frDrop)" stroke="#94A3B8" stroke-width="3" />
              <circle cx="65" cy="45" r="32" fill="none" stroke="#64748B" stroke-width="2" />
              <!-- Reel Cutouts -->
              <circle cx="65" cy="22" r="10" fill="#0F172A" filter="url(#frGlow)" />
              <circle cx="85" cy="55" r="10" fill="#0F172A" filter="url(#frGlow)" />
              <circle cx="45" cy="55" r="10" fill="#0F172A" filter="url(#frGlow)" />
              <!-- Center Hub -->
              <circle cx="65" cy="45" r="8" fill="#CBD5E1" />
              <circle cx="65" cy="45" r="3" fill="#0F172A" />
              <!-- Highlight -->
              <path d="M35,35 C45,20 85,20 95,35" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.3" />
            </svg>
  `,

  // 65. MUSIC (Audio, Podcasts, Sound, Media)
  music: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
          <defs>
            <linearGradient id="msBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#60A5FA"/>
              <stop offset="50%" stop-color="#3B82F6"/>
              <stop offset="100%" stop-color="#1E3A8A"/>
            </linearGradient>
            <filter id="msDrop" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#1E3A8A" flood-opacity="0.4"/>
            </filter>
            <filter id="msGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#93C5FD" flood-opacity="0.6"/>
            </filter>
          </defs>
          <ellipse cx="35" cy="85" rx="16" ry="11" fill="url(#msBlue)" filter="url(#msDrop)" transform="rotate(-15 35 85)"/>
          <ellipse cx="80" cy="75" rx="16" ry="11" fill="url(#msBlue)" filter="url(#msDrop)" transform="rotate(-15 80 75)"/>
          <rect x="44" y="35" width="7" height="52" fill="url(#msBlue)" filter="url(#msDrop)"/>
          <rect x="89" y="25" width="7" height="52" fill="url(#msBlue)" filter="url(#msDrop)"/>
          <path d="M44,35 L96,25 L96,38 L44,48 Z" fill="url(#msBlue)" filter="url(#msDrop)"/>
          <path d="M44,35 L96,25" fill="none" stroke="#DBEAFE" stroke-width="2" opacity="0.7"/>
          <path d="M44,35 L44,85" fill="none" stroke="#DBEAFE" stroke-width="2" opacity="0.5"/>
          <ellipse cx="33" cy="82" rx="4" ry="2" fill="#FFFFFF" opacity="0.6" transform="rotate(-15 33 82)"/>
          <ellipse cx="78" cy="72" rx="4" ry="2" fill="#FFFFFF" opacity="0.6" transform="rotate(-15 78 72)"/>
        </svg>
  `,

  // 66. BRIEFCASE (Business, Portfolio, Work, Corporate)
  briefcase: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="brLeather" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#78350F" />
          <stop offset="100%" stop-color="#451A03" />
        </linearGradient>
        <linearGradient id="brGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE047" />
          <stop offset="100%" stop-color="#92400E" />
        </linearGradient>
        <filter id="brDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="5" flood-color="#000000" flood-opacity="0.4" />
        </filter>
      </defs>
      <!-- Handle -->
      <path d="M45,35 L45,20 C45,15 50,15 55,15 L65,15 C70,15 75,15 75,20 L75,35" fill="none" stroke="url(#brLeather)" stroke-width="8" stroke-linecap="round" filter="url(#brDrop)" />
      <!-- Main Body -->
      <rect x="15" y="35" width="90" height="65" rx="6" fill="url(#brLeather)" filter="url(#brDrop)" />
      <!-- Flap / Stitching detail -->
      <path d="M15,60 L45,60 L50,68 L70,68 L75,60 L105,60" fill="none" stroke="#92400E" stroke-width="3" />
      <rect x="52" y="62" width="16" height="12" rx="2" fill="url(#brGold)" filter="url(#brDrop)" />
      <circle cx="60" cy="68" r="2" fill="#451A03" />
      <!-- Corner Protectors -->
      <path d="M15,45 L15,35 L25,35 Z" fill="url(#brGold)" />
      <path d="M105,45 L105,35 L95,35 Z" fill="url(#brGold)" />
      <path d="M15,90 L15,100 L25,100 Z" fill="url(#brGold)" />
      <path d="M105,90 L105,100 L95,100 Z" fill="url(#brGold)" />
    </svg>
  `,

  // 67. CLIPBOARD (Tasks, ToDo, List, Management)
  clipboard: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="cbBoard" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#B45309" />
          <stop offset="100%" stop-color="#78350F" />
        </linearGradient>
        <filter id="cbDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="20" y="25" width="80" height="85" rx="6" fill="url(#cbBoard)" filter="url(#cbDrop)" />
      <rect x="30" y="35" width="60" height="65" fill="#F8FAFC" />
      <rect x="40" y="10" width="40" height="20" rx="4" fill="#94A3B8" filter="url(#cbDrop)" />
      <rect x="50" y="15" width="20" height="5" fill="#475569" />
      <line x1="40" y1="50" x2="80" y2="50" stroke="#CBD5E1" stroke-width="4" />
      <line x1="40" y1="65" x2="70" y2="65" stroke="#CBD5E1" stroke-width="4" />
      <line x1="40" y1="80" x2="80" y2="80" stroke="#CBD5E1" stroke-width="4" />
    </svg>
  `,

  // 68. PEN / NIB (Writing, Author, Edit)
  pen: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="pnBody" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#3B82F6" />
                  <stop offset="100%" stop-color="#1E3A8A" />
                </linearGradient>
                <linearGradient id="pnNib" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FDE047" />
                  <stop offset="100%" stop-color="#B45309" />
                </linearGradient>
                <filter id="pnDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
                </filter>
                <filter id="pnGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#38BDF8" flood-opacity="0.6"/>
                </filter>
              </defs>
              <!-- Pen Body -->
              <polygon points="90,15 105,30 50,85 35,70" fill="url(#pnBody)" filter="url(#pnDrop)" />
              <!-- Pen Top -->
              <path d="M90,15 L105,30 L110,25 C110,15 100,10 95,10 Z" fill="#0F172A" filter="url(#pnDrop)" />
              <!-- Gold Band -->
              <polygon points="45,80 60,95 55,100 40,85" fill="url(#pnNib)" />
              <!-- Nib Base -->
              <polygon points="35,70 50,85 45,80 40,85" fill="#475569" />
              <!-- Main Nib -->
              <path d="M35,70 L50,85 L20,110 Z" fill="url(#pnNib)" filter="url(#pnDrop)" stroke="#92400E" stroke-width="2" />
              <line x1="20" y1="110" x2="42" y2="78" stroke="#000000" stroke-width="2" />
              <circle cx="35" cy="85" r="3" fill="#000000" />
              <!-- Ink Swoosh -->
              <path d="M15,105 Q30,115 50,105 T80,105" fill="none" stroke="#38BDF8" stroke-width="4" stroke-linecap="round" filter="url(#pnGlow)" />
              <!-- Body Highlight -->
              <line x1="90" y1="20" x2="45" y2="65" stroke="#FFFFFF" stroke-width="2" opacity="0.4" stroke-linecap="round" />
            </svg>
  `,

  // 69. PRINTER (Hardware, Documents, Office, Output)
  printer: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="prBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#E2E8F0" />
          <stop offset="100%" stop-color="#94A3B8" />
        </linearGradient>
        <filter id="prDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="35" y="15" width="50" height="30" fill="#FFFFFF" filter="url(#prDrop)" />
      <line x1="45" y1="25" x2="75" y2="25" stroke="#CBD5E1" stroke-width="2" />
      <line x1="45" y1="35" x2="65" y2="35" stroke="#CBD5E1" stroke-width="2" />
      <rect x="20" y="45" width="80" height="40" rx="6" fill="url(#prBody)" filter="url(#prDrop)" />
      <rect x="35" y="75" width="50" height="30" fill="#F8FAFC" filter="url(#prDrop)" />
      <line x1="45" y1="85" x2="75" y2="85" stroke="#94A3B8" stroke-width="2" />
      <line x1="45" y1="95" x2="75" y2="95" stroke="#94A3B8" stroke-width="2" />
      <rect x="25" y="55" width="6" height="6" rx="3" fill="#34D399" />
      <rect x="35" y="55" width="6" height="6" rx="3" fill="#EF4444" />
    </svg>
  `,

  // 70. COFFEE CUP (Break, Energy, Morning)
  coffeecup: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="cfCup" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FFFFFF" />
                  <stop offset="100%" stop-color="#E2E8F0" />
                </linearGradient>
                <linearGradient id="cfCoffee" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#78350F" />
                  <stop offset="100%" stop-color="#451A03" />
                </linearGradient>
                <filter id="cfDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
                </filter>
                <filter id="cfSteamGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#94A3B8" flood-opacity="0.4"/>
                </filter>
              </defs>
              <!-- Saucer -->
              <ellipse cx="60" cy="95" rx="40" ry="15" fill="url(#cfCup)" filter="url(#cfDrop)" />
              <ellipse cx="60" cy="95" rx="30" ry="10" fill="#CBD5E1" />
              <!-- Cup Handle -->
              <path d="M75,55 C100,50 100,80 75,80" fill="none" stroke="url(#cfCup)" stroke-width="10" stroke-linecap="round" filter="url(#cfDrop)" />
              <!-- Main Cup -->
              <path d="M35,45 L85,45 C85,75 75,90 60,90 C45,90 35,75 35,45 Z" fill="url(#cfCup)" filter="url(#cfDrop)" />
              <!-- Inside / Coffee -->
              <ellipse cx="60" cy="45" rx="25" ry="10" fill="#CBD5E1" />
              <ellipse cx="60" cy="45" rx="22" ry="8" fill="url(#cfCoffee)" />
              <!-- Steam -->
              <path d="M50,35 Q45,25 55,15 T50,5" fill="none" stroke="#F1F5F9" stroke-width="4" stroke-linecap="round" filter="url(#cfSteamGlow)" opacity="0.8" />
              <path d="M70,30 Q65,20 75,10 T70,0" fill="none" stroke="#F1F5F9" stroke-width="3" stroke-linecap="round" filter="url(#cfSteamGlow)" opacity="0.6" />
              <!-- Cup Highlight -->
              <path d="M40,50 C40,65 45,80 60,85" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.8" />
            </svg>
  `,

  // 71. MICROSCOPE (Research, Zoom, Biology, Inspect)
  microscope: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="msMetal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#94A3B8" />
          <stop offset="100%" stop-color="#475569" />
        </linearGradient>
        <filter id="msDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M40,105 L90,105 C95,105 100,100 100,95 C100,90 95,85 90,85 L80,85 L70,40 C75,35 80,25 80,20 C80,10 70,10 65,20 L55,45 C50,60 40,70 30,70 C25,70 20,75 20,80 C20,85 25,90 30,90 L30,105 Z" fill="url(#msMetal)" filter="url(#msDrop)" />
      <path d="M45,35 L60,25 L70,40 L55,50 Z" fill="#1E293B" />
      <circle cx="85" cy="65" r="8" fill="#F59E0B" />
      <line x1="35" y1="85" x2="65" y2="85" stroke="#334155" stroke-width="4" />
    </svg>
  `,

  // 72. TELESCOPE (Space, Future, Vision, Astronomy)
  telescope: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="tsBrass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FCD34D" />
          <stop offset="100%" stop-color="#B45309" />
        </linearGradient>
        <filter id="tsDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <polygon points="40,70 90,30 95,40 45,80" fill="url(#tsBrass)" filter="url(#tsDrop)" />
      <polygon points="30,78 40,70 45,80 35,88" fill="#1E293B" />
      <polygon points="90,30 100,22 105,32 95,40" fill="#1E293B" />
      <line x1="65" y1="55" x2="65" y2="100" stroke="#94A3B8" stroke-width="6" />
      <line x1="65" y1="75" x2="45" y2="105" stroke="#94A3B8" stroke-width="4" />
      <line x1="65" y1="75" x2="85" y2="105" stroke="#94A3B8" stroke-width="4" />
    </svg>
  `,

  // 73. LEAF (Nature, Environment, Eco, Growth)
  leaf: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="lfGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#34D399" />
          <stop offset="100%" stop-color="#065F46" />
        </linearGradient>
        <filter id="lfDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M60,15 C90,15 105,45 105,75 C105,105 60,105 60,105 C60,105 15,105 15,75 C15,45 30,15 60,15 Z" fill="url(#lfGreen)" filter="url(#lfDrop)" />
      <path d="M60,105 C60,75 75,45 105,45" fill="none" stroke="#A7F3D0" stroke-width="4" stroke-linecap="round" />
      <path d="M60,85 L80,75 M60,65 L75,55 M60,45 L70,35" stroke="#A7F3D0" stroke-width="3" stroke-linecap="round" />
    </svg>
  `,

  // 74. WATER DROP (Liquid, Clean, Environment)
  waterdrop: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="wdBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#E0F2FE" />
                  <stop offset="50%" stop-color="#38BDF8" />
                  <stop offset="100%" stop-color="#0284C7" />
                </linearGradient>
                <filter id="wdDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#0284C7" flood-opacity="0.4"/>
                </filter>
                <filter id="wdInner" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#BAE6FD" flood-opacity="0.8"/>
                </filter>
              </defs>
              <!-- Drop Shape -->
              <path d="M60,15 C60,15 25,60 25,80 C25,100 40,110 60,110 C80,110 95,100 95,80 C95,60 60,15 60,15 Z" fill="url(#wdBlue)" filter="url(#wdDrop)" stroke="#0369A1" stroke-width="2" />
              <!-- Core Highlight (Inner depth) -->
              <path d="M60,25 C60,25 35,65 35,80 C35,95 45,100 60,100 C75,100 85,95 85,80 C85,65 60,25 60,25 Z" fill="none" stroke="#BAE6FD" stroke-width="4" filter="url(#wdInner)" opacity="0.5" />
              <!-- Surface Glare -->
              <path d="M35,75 C35,60 50,45 55,40" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" opacity="0.8" />
              <circle cx="58" cy="35" r="4" fill="#FFFFFF" opacity="0.9" />
              <!-- Small Bubble -->
              <circle cx="75" cy="85" r="5" fill="#FFFFFF" opacity="0.4" />
              <circle cx="73" cy="83" r="2" fill="#FFFFFF" opacity="0.8" />
            </svg>
  `,

  // 75. CAMPFIRE (Warmth, Outdoors, Survival)
  campfire: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="cfWood" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#92400E" />
                  <stop offset="100%" stop-color="#451A03" />
                </linearGradient>
                <linearGradient id="cfFlame" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stop-color="#EF4444" />
                  <stop offset="50%" stop-color="#F59E0B" />
                  <stop offset="100%" stop-color="#FDE047" />
                </linearGradient>
                <filter id="cfDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
                </filter>
                <filter id="cfGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="-4" stdDeviation="8" flood-color="#F59E0B" flood-opacity="0.7"/>
                </filter>
              </defs>
              <!-- Logs -->
              <rect x="25" y="80" width="70" height="15" rx="5" fill="url(#cfWood)" filter="url(#cfDrop)" transform="rotate(-15 60 87)" />
              <rect x="25" y="80" width="70" height="15" rx="5" fill="url(#cfWood)" filter="url(#cfDrop)" transform="rotate(15 60 87)" />
              <!-- Wood Rings -->
              <ellipse cx="28" cy="87" rx="3" ry="5" fill="#78350F" transform="rotate(-15 28 87)" />
              <ellipse cx="92" cy="87" rx="3" ry="5" fill="#78350F" transform="rotate(15 92 87)" />
              <!-- Flame Base -->
              <path d="M60,25 C80,45 90,65 80,80 C70,95 50,95 40,80 C30,65 40,45 60,25 Z" fill="url(#cfFlame)" filter="url(#cfGlow)" />
              <!-- Inner Flame -->
              <path d="M60,45 C70,60 75,70 70,80 C65,90 55,90 50,80 C45,70 50,60 60,45 Z" fill="#FDE047" />
              <!-- Sparks -->
              <circle cx="45" cy="30" r="3" fill="#FDE047" filter="url(#cfGlow)" />
              <circle cx="75" cy="25" r="4" fill="#F59E0B" filter="url(#cfGlow)" />
              <circle cx="65" cy="15" r="2" fill="#FEF08A" filter="url(#cfGlow)" />
            </svg>
  `,

  // 76. UMBRELLA (Protection, Insurance, Rain)
  umbrella: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="umCanopy" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#F43F5E" />
                  <stop offset="50%" stop-color="#E11D48" />
                  <stop offset="100%" stop-color="#9F1239" />
                </linearGradient>
                <linearGradient id="umHandle" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#E2E8F0" />
                  <stop offset="100%" stop-color="#94A3B8" />
                </linearGradient>
                <filter id="umDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
                </filter>
                <filter id="umGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#F43F5E" flood-opacity="0.4"/>
                </filter>
              </defs>
              <!-- Shaft & Handle -->
              <path d="M60,25 L60,85 C60,95 50,95 50,85" fill="none" stroke="url(#umHandle)" stroke-width="6" stroke-linecap="round" filter="url(#umDrop)" />
              <circle cx="60" cy="20" r="3" fill="#1E293B" />
              <!-- Canopy Base -->
              <path d="M15,65 C15,35 40,25 60,25 C80,25 105,35 105,65 C95,60 85,60 75,65 C65,60 55,60 45,65 C35,60 25,60 15,65 Z" fill="url(#umCanopy)" filter="url(#umDrop)" />
              <!-- Canopy Ribs (Lines) -->
              <path d="M60,25 C50,40 45,55 45,65" fill="none" stroke="#BE123C" stroke-width="3" />
              <path d="M60,25 C70,40 75,55 75,65" fill="none" stroke="#BE123C" stroke-width="3" />
              <path d="M60,25 L60,65" fill="none" stroke="#BE123C" stroke-width="3" />
              <!-- Highlights -->
              <path d="M25,55 C35,35 50,30 60,30" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.4" />
              <path d="M85,50 C95,55 100,60 100,60" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.2" />
              <!-- Raindrops -->
              <path d="M20,20 L25,30" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" />
              <path d="M80,15 L85,25" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" />
              <path d="M100,30 L105,40" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" />
            </svg>
  `,

  // 77. SNOWFLAKE (Cold, Winter, Freeze)
  snowflake: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="sfIce" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#E0F2FE" />
                  <stop offset="50%" stop-color="#38BDF8" />
                  <stop offset="100%" stop-color="#0284C7" />
                </linearGradient>
                <filter id="sfDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#0284C7" flood-opacity="0.3"/>
                </filter>
                <filter id="sfGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#E0F2FE" flood-opacity="0.7"/>
                </filter>
              </defs>
              <!-- Snowflake Core -->
              <g stroke="url(#sfIce)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" filter="url(#sfDrop)">
                <!-- Axes -->
                <line x1="60" y1="15" x2="60" y2="105" />
                <line x1="20" y1="35" x2="100" y2="85" />
                <line x1="20" y1="85" x2="100" y2="35" />
                <!-- Branches Top -->
                <polyline points="50,30 60,20 70,30" fill="none" />
                <polyline points="40,50 50,40 60,50" fill="none" transform="rotate(-60 60 60)" />
                <polyline points="40,50 50,40 60,50" fill="none" transform="rotate(60 60 60)" />
                <!-- Branches Bottom -->
                <polyline points="50,90 60,100 70,90" fill="none" />
                <polyline points="40,50 50,40 60,50" fill="none" transform="rotate(120 60 60)" />
                <polyline points="40,50 50,40 60,50" fill="none" transform="rotate(240 60 60)" />
              </g>
              <!-- Center Gem -->
              <circle cx="60" cy="60" r="10" fill="#FFFFFF" filter="url(#sfGlow)" />
              <polygon points="60,55 65,60 60,65 55,60" fill="#38BDF8" />
            </svg>
  `,

  // 78. MOON (Night, Dark Mode, Sleep)
  moon: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="mnBody" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FCD34D" />
                  <stop offset="50%" stop-color="#F59E0B" />
                  <stop offset="100%" stop-color="#92400E" />
                </linearGradient>
                <filter id="mnDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#92400E" flood-opacity="0.3"/>
                </filter>
                <filter id="mnGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#FCD34D" flood-opacity="0.6"/>
                </filter>
              </defs>
              <!-- Moon Crescent -->
              <path d="M60,15 C85,15 105,35 105,60 C105,85 85,105 60,105 C45,105 32,97 25,85 C45,85 60,70 60,50 C60,35 50,22 37,15 C44,15 52,15 60,15 Z" fill="url(#mnBody)" filter="url(#mnDrop)" />
              <!-- Craters -->
              <circle cx="85" cy="50" r="8" fill="#B45309" opacity="0.4" />
              <circle cx="70" cy="80" r="5" fill="#B45309" opacity="0.3" />
              <circle cx="95" cy="70" r="3" fill="#B45309" opacity="0.4" />
              <!-- Star Sparkles -->
              <path d="M25,25 Q30,35 40,40 Q30,45 25,55 Q20,45 10,40 Q20,35 25,25 Z" fill="#FDE047" filter="url(#mnGlow)" />
              <circle cx="15" cy="15" r="2" fill="#FFFFFF" filter="url(#mnGlow)" />
              <circle cx="45" cy="85" r="3" fill="#FFFFFF" filter="url(#mnGlow)" />
              <!-- Edge Highlight -->
              <path d="M60,20 C75,20 90,32 98,48" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.6" />
            </svg>
  `,

  // 79. ATOM (Physics, React, Nucleus, Core)
  atom: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="atCore" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE047" />
          <stop offset="100%" stop-color="#F59E0B" />
        </linearGradient>
        <filter id="atGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#38BDF8" flood-opacity="0.6"/>
        </filter>
      </defs>
      <ellipse cx="60" cy="60" rx="45" ry="15" fill="none" stroke="#38BDF8" stroke-width="4" transform="rotate(30 60 60)" filter="url(#atGlow)" />
      <ellipse cx="60" cy="60" rx="45" ry="15" fill="none" stroke="#38BDF8" stroke-width="4" transform="rotate(90 60 60)" filter="url(#atGlow)" />
      <ellipse cx="60" cy="60" rx="45" ry="15" fill="none" stroke="#38BDF8" stroke-width="4" transform="rotate(150 60 60)" filter="url(#atGlow)" />
      <circle cx="60" cy="60" r="10" fill="url(#atCore)" filter="url(#atGlow)" />
      <circle cx="95" cy="40" r="4" fill="#60A5FA" />
      <circle cx="60" cy="15" r="4" fill="#60A5FA" />
      <circle cx="25" cy="80" r="4" fill="#60A5FA" />
    </svg>
  `,

  // 80. MAGNET (Attraction, Leads, Marketing, Physics)
  magnet: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="mgRed" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#EF4444" />
          <stop offset="100%" stop-color="#991B1B" />
        </linearGradient>
        <linearGradient id="mgSilver" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#F1F5F9" />
          <stop offset="100%" stop-color="#94A3B8" />
        </linearGradient>
        <filter id="mgDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M30,80 L30,50 C30,30 90,30 90,50 L90,80 L70,80 L70,50 C70,45 50,45 50,50 L50,80 Z" fill="url(#mgRed)" filter="url(#mgDrop)" />
      <rect x="30" y="80" width="20" height="20" rx="2" fill="url(#mgSilver)" filter="url(#mgDrop)" />
      <rect x="70" y="80" width="20" height="20" rx="2" fill="url(#mgSilver)" filter="url(#mgDrop)" />
      <!-- Magnetic field lines -->
      <path d="M40,110 A30,30 0 0,0 80,110" fill="none" stroke="#60A5FA" stroke-width="2" stroke-dasharray="4 4" />
      <path d="M30,115 A40,40 0 0,0 90,115" fill="none" stroke="#60A5FA" stroke-width="2" stroke-dasharray="4 4" />
    </svg>
  `,

  // 81. CHECK / SUCCESS (Completed, Verified, Done, Validation)
  check: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <radialGradient id="ckGlow" cx="40%" cy="30%" r="70%">
                  <stop offset="0%" stop-color="#34D399" />
                  <stop offset="60%" stop-color="#10B981" />
                  <stop offset="100%" stop-color="#047857" />
                </radialGradient>
                <linearGradient id="ckMark" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#FFFFFF" />
                  <stop offset="100%" stop-color="#E2E8F0" />
                </linearGradient>
                <filter id="ckShadow" x="-15%" y="-15%" width="130%" height="130%">
                  <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#047857" flood-opacity="0.4"/>
                </filter>
                <filter id="ckMarkDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#022C22" flood-opacity="0.5"/>
                </filter>
              </defs>
              <!-- Thick 3D Emerald Bubble Base -->
              <circle cx="60" cy="60" r="45" fill="url(#ckGlow)" filter="url(#ckShadow)" />
              <!-- Volumetric Glare -->
              <circle cx="50" cy="40" r="25" fill="#A7F3D0" opacity="0.3" filter="blur(4px)" />
              <!-- Edge Highlight Ring -->
              <circle cx="60" cy="60" r="42" fill="none" stroke="#6EE7B7" stroke-width="2" opacity="0.6" />
              <!-- Bold 3D Checkmark -->
              <path d="M40,60 L52,72 L82,42" fill="none" stroke="url(#ckMark)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" filter="url(#ckMarkDrop)" />
              <!-- Checkmark Specular Highlight -->
              <path d="M42,60 L52,70 L80,42" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" opacity="0.8" />
            </svg>
  `,

  // 82. CREDIT CARD (Billing, Finance, Payments, Subscriptions)
  card: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="ccBack" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#8B5CF6" />
                  <stop offset="50%" stop-color="#4F46E5" />
                  <stop offset="100%" stop-color="#312E81" />
                </linearGradient>
                <linearGradient id="ccChip" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FEF08A" />
                  <stop offset="100%" stop-color="#D97706" />
                </linearGradient>
                <linearGradient id="ccHolo" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.8" />
                  <stop offset="50%" stop-color="#F472B6" stop-opacity="0.4" />
                  <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.1" />
                </linearGradient>
                <filter id="ccDrop" x="-10%" y="-10%" width="125%" height="125%">
                  <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#312E81" flood-opacity="0.4"/>
                </filter>
              </defs>
              <!-- Tilted Card Body -->
              <g transform="rotate(-12 60 60)">
                <rect x="15" y="30" width="90" height="60" rx="6" fill="url(#ccBack)" filter="url(#ccDrop)" />
                <!-- Holographic Gloss Overlay -->
                <rect x="15" y="30" width="90" height="60" rx="6" fill="url(#ccHolo)" />
                <!-- Edge Bevel -->
                <rect x="16" y="31" width="88" height="58" rx="5" fill="none" stroke="#C4B5FD" stroke-width="1.5" opacity="0.5" />
                <!-- EMV Gold Chip -->
                <rect x="25" y="55" width="16" height="12" rx="2" fill="url(#ccChip)" />
                <path d="M25,59 L41,59 M25,63 L41,63 M33,55 L33,67" stroke="#B45309" stroke-width="1" opacity="0.6" />
                <!-- Contactless Wave -->
                <path d="M48,56 Q52,61 48,66 M53,54 Q59,61 53,68 M58,52 Q66,61 58,70" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.7" />
                <!-- Simulated Embossed Text -->
                <rect x="25" y="75" width="45" height="4" rx="2" fill="#FFFFFF" opacity="0.6" />
                <rect x="75" y="75" width="20" height="4" rx="2" fill="#FFFFFF" opacity="0.6" />
                <!-- Visa/Mastercard style circles -->
                <circle cx="85" cy="45" r="7" fill="#FCA5A5" opacity="0.8" />
                <circle cx="92" cy="45" r="7" fill="#FDE047" opacity="0.8" />
              </g>
            </svg>
  `,

  // 83. COFFEE (Energy, Break, Drink, Cup)
  coffee: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="cfCup" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FCD34D" />
          <stop offset="100%" stop-color="#B45309" />
        </linearGradient>
        <filter id="cfDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M25,45 L85,45 L75,100 C75,105 70,110 60,110 L50,110 C40,110 35,105 35,100 Z" fill="url(#cfCup)" filter="url(#cfDrop)" />
      <path d="M85,55 A15,15 0 0,1 85,85" fill="none" stroke="url(#cfCup)" stroke-width="8" stroke-linecap="round" filter="url(#cfDrop)" />
      <ellipse cx="55" cy="45" rx="30" ry="10" fill="#78350F" />
      <path d="M45,35 Q50,20 55,30 T60,10" fill="none" stroke="#94A3B8" stroke-width="4" stroke-linecap="round" opacity="0.5" />
      <path d="M65,35 Q70,20 75,30 T80,10" fill="none" stroke="#94A3B8" stroke-width="4" stroke-linecap="round" opacity="0.5" />
    </svg>
  `,

  // 84. MEDAL (Award, First Place, Win, Ribbon)
  medal: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="mdRibbonL" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FCA5A5" />
          <stop offset="100%" stop-color="#B91C1C" />
        </linearGradient>
        <linearGradient id="mdRibbonR" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#991B1B" />
          <stop offset="100%" stop-color="#7F1D1D" />
        </linearGradient>
        <radialGradient id="mdGold" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#FEF08A" />
          <stop offset="50%" stop-color="#EAB308" />
          <stop offset="100%" stop-color="#A16207" />
        </radialGradient>
        <filter id="mdDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.4"/>
        </filter>
        <filter id="mdGlow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#FDE047" flood-opacity="0.6"/>
        </filter>
      </defs>
      <path d="M25,10 L50,55 L35,65 Z" fill="url(#mdRibbonL)" filter="url(#mdDrop)" />
      <path d="M95,10 L70,55 L85,65 Z" fill="url(#mdRibbonR)" filter="url(#mdDrop)" />
      <path d="M50,55 L70,55 L60,75 Z" fill="#B91C1C" />
      <circle cx="60" cy="75" r="30" fill="url(#mdGold)" filter="url(#mdDrop)" />
      <circle cx="60" cy="75" r="26" fill="none" stroke="#FEF08A" stroke-width="2" opacity="0.8" />
      <path d="M60,55 L64,65 L75,65 L66,72 L69,82 L60,76 L51,82 L54,72 L45,65 L56,65 Z" fill="#FFFFFF" filter="url(#mdGlow)" />
    </svg>
  `,

  // 85. TICKET (Event, Cinema, Concert, Access)
  ticket: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="tkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FCA5A5" />
          <stop offset="100%" stop-color="#B91C1C" />
        </linearGradient>
        <filter id="tkDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M20,30 L100,30 L100,45 A10,10 0 0,0 100,65 L100,90 L20,90 L20,65 A10,10 0 0,0 20,45 Z" fill="url(#tkGrad)" filter="url(#tkDrop)" />
      <line x1="75" y1="35" x2="75" y2="85" stroke="#FFFFFF" stroke-width="4" stroke-dasharray="8 8" opacity="0.6" />
      <circle cx="45" cy="60" r="12" fill="none" stroke="#FFFFFF" stroke-width="4" opacity="0.6" />
      <path d="M40,55 L52,60 L40,65 Z" fill="#FFFFFF" opacity="0.8" />
    </svg>
  `,

  // 86. MAX LEVEL (Premium, Completion, Top Tier, End-Game State)
  maxLevel: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <radialGradient id="mlFace" cx="35%" cy="30%" r="75%">
                  <stop offset="0%" stop-color="#FFFBEB" />
                  <stop offset="30%" stop-color="#FDE047" />
                  <stop offset="75%" stop-color="#EAB308" />
                  <stop offset="100%" stop-color="#854D0E" />
                </radialGradient>
                <linearGradient id="mlCrown" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FEF3C7" />
                  <stop offset="50%" stop-color="#EAB308" />
                  <stop offset="100%" stop-color="#78350F" />
                </linearGradient>
                <filter id="mlGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#854D0E" flood-opacity="0.35"/>
                </filter>
                <filter id="mlAlertGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#EF4444" flood-opacity="0.6"/>
                </filter>
              </defs>
              <circle cx="60" cy="60" r="45" fill="url(#mlFace)" filter="url(#mlGlow)" />
              <path d="M42,50 Q48,47 54,50" stroke="#451a03" stroke-width="2.5" stroke-linecap="round" />
              <path d="M78,50 Q84,47 90,50" stroke="#451a03" stroke-width="2.5" stroke-linecap="round" />
              <path d="M48,68 Q60,74 72,68" stroke="#451a03" stroke-width="3" stroke-linecap="round" />
              <circle cx="35" cy="75" r="1.5" fill="#451a03" opacity="0.6" />
              <circle cx="85" cy="75" r="1.5" fill="#451a03" opacity="0.6" />
              <path d="M22,42 Q30,24 55,18 Q78,24 55,20 Q32,28 22,42 Z" fill="#FFFFFF" opacity="0.4" />
              <path d="M60,15 L72,25 L88,25 L98,35 L98,45 L108,55 L60,50 L12,55 L22,45 L22,35 L32,25 L48,25 Z" fill="url(#mlCrown)" stroke="#CA8A04" stroke-width="1.5" filter="url(#mlGlow)" />
              <text x="60" y="38" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-weight="bold" font-size="12">MAX</text>
            </svg>
  `,

  // 87. LUXE VERIFIED (Dynamic Check, Premium Success, Group Validation, Partner State)
  luxeVerified: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
          <defs>
            <radialGradient id="lvGlow" cx="35%" cy="30%" r="75%">
              <stop offset="0%" stop-color="#FEF3C7" />
              <stop offset="30%" stop-color="#FDE047" />
              <stop offset="75%" stop-color="#A16207" />
              <stop offset="100%" stop-color="#1F0D40" />
            </radialGradient>
            <linearGradient id="lvMetal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FFFFFF" />
              <stop offset="100%" stop-color="#475569" />
            </linearGradient>
            <filter id="lvGlowF" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#A16207" flood-opacity="0.4"/>
            </filter>
            <filter id="lvInnerGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#111827" flood-opacity="0.6" />
            </filter>
          </defs>
          <!-- Base checked circle made of interconnected glowing gold segments -->
          <path d="M60,10 A50,50 0 1,0 60,110 A50,50 0 1,0 60,10 Z M60,20 A40,40 0 1,1 60,100 A40,40 0 1,1 60,20 Z" fill="url(#lvGlow)" filter="lvGlowF" stroke="#F59E0B" stroke-width="2.5" opacity="0.6" />
          <!-- Simplified high-fidelity face integrated into initial curve of the check -->
          <circle cx="45" cy="65" r="25" fill="url(#lvGlow)" filter="lvInnerGlow" />
          <path d="M37,60 Q41,58 45,60" stroke="#111827" stroke-width="2" stroke-linecap="round" />
          <path d="M53,60 Q57,58 61,60" stroke="#111827" stroke-width="2" stroke-linecap="round" />
          <path d="M40,75 Q45,78 50,75" stroke="#111827" stroke-width="2.5" stroke-linecap="round" />
          <!-- Stubble pattern -->
          <circle cx="37" cy="72" r="1" fill="#111827" opacity="0.6" />
          <circle cx="53" cy="72" r="1" fill="#111827" opacity="0.6" />
          <!-- Stylized high-fidelity handshake -->
          <path d="M40,75 C45,70 55,70 60,75 C60,75 55,80 50,80 C45,80 40,75 40,75 Z" fill="url(#amMetal)" filter="url(#amInnerGlow)" />
          <path d="M80,75 C75,70 65,70 60,75 C60,75 65,80 70,80 C75,80 80,75 80,75 Z" fill="url(#amMetal)" filter="url(#amInnerGlow)" />
          <!-- Dynamic confetti and gold stars bursting around check -->
          <circle cx="20" cy="20" r="3" fill="#F472B6" />
          <circle cx="100" cy="100" r="3" fill="#60A5FA" />
          <polygon points="105,25 107,29 111,30 108,33 109,37 105,35 101,37 102,33 99,30 103,29" fill="#FBBF24" filter="url(#amInnerGlow)" />
        </svg>
  `,

  // 88. LUXE DYNAMIC SUCCESS (Level Up Explosion, Rapid Progression, Triumph, Premium Gain)
  luxeDynamicSuccess: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
          <defs>
            <linearGradient id="ldsExplosion" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stop-color="#DC2626" />
              <stop offset="40%" stop-color="#F97316" />
              <stop offset="75%" stop-color="#FCD34D" />
              <stop offset="100%" stop-color="#FFFFFF" />
            </linearGradient>
            <radialGradient id="ldsFace" cx="35%" cy="45%" r="75%">
              <stop offset="0%" stop-color="#FFFBEB" />
              <stop offset="30%" stop-color="#FDE047" />
              <stop offset="75%" stop-color="#EAB308" />
              <stop offset="100%" stop-color="#854D0E" />
            </radialGradient>
            <filter id="ldsBlast" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#F97316" flood-opacity="0.7"/>
            </filter>
            <filter id="ldsDrop" x="-15%" y="-15%" width="130%" height="130%">
              <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#854D0E" flood-opacity="0.3"/>
            </filter>
          </defs>
          <!-- Base truncated open top head of stylized character looking solemn -->
          <path d="M15,65 C15,90 35,110 60,110 C85,110 105,90 105,65 C105,53 98,46 92,44 L28,44 C22,46 15,53 15,65 Z" fill="url(#ldsFace)" filter="ldsDrop" />
          <!-- Simplified, recognized features accurate to the man -->
          <circle cx="42" cy="65" r="7" fill="#111827" />
          <circle cx="40" cy="63" r="2.5" fill="#FFFFFF" />
          <circle cx="78" cy="65" r="7" fill="#111827" />
          <circle cx="76" cy="63" r="2.5" fill="#FFFFFF" />
          <path d="M52,78 Q60,82 68,78" stroke="#111827" stroke-width="2.5" stroke-linecap="round" />
          <!-- Highly detailed "Level Up" style explosion of multi-stop gold gradients -->
          <path d="M38,35 C20,35 15,20 35,12 C40,5 60,5 65,12 C85,5 90,20 82,35 C95,40 85,55 70,48 C60,55 50,55 40,48 C25,55 20,40 38,35 Z" fill="url(#ldsExplosion)" filter="ldsBlast" />
          <!-- Exploding gold coins and stars bursting out -->
          <circle cx="25" cy="18" r="4" fill="#FBBF24" filter="ldsBlast" />
          <polygon points="95,22 97,25 100,26 97,28 98,31 95,30 92,31 93,28 90,26 93,25" fill="#FBBF24" filter="ldsBlast" />
          <circle cx="60" cy="8" r="2" fill="#FFFFFF" />
          <!-- Gaping open top -->
          <path d="M28,44 C35,35 60,32 85,35 C92,38 92,44 92,44 L28,44 Z" fill="#1e293b" />
        </svg>
  `,

  // 89. LUXE REGAL STATUS (Solemn Recognition, Top End-Game State, Distinguished Partner, Ultimate Rank)
  luxeRegalStatus: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
          <defs>
            <linearGradient id="lrsCrown" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FEF3C7" />
              <stop offset="50%" stop-color="#FBBF24" />
              <stop offset="100%" stop-color="#78350F" />
            </linearGradient>
            <radialGradient id="lrsFace" cx="35%" cy="30%" r="75%">
              <stop offset="0%" stop-color="#FFFBEB" />
              <stop offset="30%" stop-color="#FDE047" />
              <stop offset="75%" stop-color="#EAB308" />
              <stop offset="100%" stop-color="#854D0E" />
            </radialGradient>
            <filter id="lrsGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#A16207" flood-opacity="0.4"/>
            </filter>
            <filter id="lrsInnerGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#111827" flood-opacity="0.6" />
            </filter>
          </defs>
          <!-- Premium intricate gold crown made of multi-stop gradients and volumetric segments -->
          <path d="M60,15 L72,25 L88,25 L98,35 L98,45 L108,55 L60,50 L12,55 L22,45 L22,35 L32,25 L48,25 Z" fill="url(#lrsCrown)" stroke="#CA8A04" stroke-width="1.5" filter="lrsGlow" />
          <!-- Base solemn face accurate to the man from image_7.png/image_5.png -->
          <circle cx="60" cy="65" r="40" fill="url(#lrsFace)" filter="url(#lrsInnerGlow)" />
          <!-- Simplified features showing recognizable solemnity -->
          <path d="M48,57 Q52,55 56,57" stroke="#111827" stroke-width="2" stroke-linecap="round" />
          <path d="M72,57 Q76,55 80,57" stroke="#111827" stroke-width="2" stroke-linecap="round" />
          <path d="M52,70 Q60,74 68,70" stroke="#111827" stroke-width="2.5" stroke-linecap="round" />
          <!-- Crown Text -->
          <text x="60" y="38" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-weight="bold" font-size="12">ULTIMATE RANK</text>
          <!-- Simplified stubble pattern -->
          <circle cx="43" cy="72" r="1.5" fill="#111827" opacity="0.6" />
          <circle cx="77" cy="72" r="1.5" fill="#111827" opacity="0.6" />
          <!-- Intricate gold laurel wreaths and star accents surrounding face -->
          <path d="M35,85 Q60,92 85,85" fill="none" stroke="#FBBF24" stroke-width="4" stroke-linecap="round" filter="url(#lgInnerGlow)" />
          <polygon points="60,90 62,94 66,95 63,98 64,102 60,100 56,102 57,98 54,95 58,94" fill="#FBBF24" filter="url(#lgInnerGlow)" />
        </svg>
  `,

  // 90. LUXE VERIFIED STAR (Confident stamp, Multi-stop checked star, Confetti, Premium Recognition)
  luxeVerifiedStar: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
          <defs>
            <linearGradient id="lvsStar" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FEF08A" />
              <stop offset="30%" stop-color="#FACC15" />
              <stop offset="70%" stop-color="#EAB308" />
              <stop offset="100%" stop-color="#854D0E" />
            </linearGradient>
            <radialGradient id="lvsGlow" cx="38%" cy="38%" r="65%">
              <stop offset="0%" stop-color="#FFFBEB" />
              <stop offset="25%" stop-color="#FDE047" />
              <stop offset="75%" stop-color="#EAB308" />
              <stop offset="100%" stop-color="#854D0E" />
            </radialGradient>
            <linearGradient id="lvsConfetti" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#EF4444" />
              <stop offset="35%" stop-color="#DC2626" />
              <stop offset="36%" stop-color="#3B82F6" />
              <stop offset="64%" stop-color="#1D4ED8" />
              <stop offset="65%" stop-color="#EF4444" />
              <stop offset="100%" stop-color="#B91C1C" />
            </linearGradient>
            <filter id="lvsGlowF" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#854D0E" flood-opacity="0.3"/>
            </filter>
            <filter id="lvsStampGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#10B981" flood-opacity="0.7"/>
            </filter>
          </defs>
          <!-- Base multi-faceted gold star from image_5.png -->
          <path d="M60,10 L75,45 L112,45 L82,67 L94,102 L60,80 L26,102 L38,67 L8,45 L45,45 Z" fill="url(#lvsGlow)" filter="lvsGlowF" stroke="#CA8A04" stroke-width="1.5" stroke-linejoin="miter" />
          <!-- Faceted edge highlights creating 3D bevel -->
          <path d="M60,10 L75,45 L60,55 Z" fill="#FFFFFF" opacity="0.4" />
          <path d="M112,45 L82,67 L60,55 Z" fill="#FFFFFF" opacity="0.3" />
          <!-- Confession confident stamp effect across star with large check -->
          <path d="M22,75 L45,52 L62,57 L88,22" fill="none" stroke="#10B981" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" filter="url(#lvsStampGlow)" />
          <!-- Star verification punch and miniature likeness from Batch 9/image_5.png -->
          <polygon points="60,60 70,50 60,40" fill="#FBBF24" />
          <circle cx="60" cy="50" r="3" fill="#111827" opacity="0.6" />
          <!-- Multi-stop ribbon and confetti around stamp area -->
          <polygon points="30,10 60,55 90,10 70,10 60,40 50,10" fill="url(#lvsConfetti)" opacity="0.3" />
          <circle cx="93" cy="48" r="1" fill="#FFFFFF" opacity="0.7" />
        </svg>
  `,

  // 91. LUXE STAR PROFILE (Premium face integration, Dynamic star base, Verified label, Ultimate achievement)
  luxeStarProfile: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
          <defs>
            <linearGradient id="lspGlowInner" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stop-color="#F59E0B" stop-opacity="0" />
              <stop offset="100%" stop-color="#F59E0B" stop-opacity="0.6" />
            </linearGradient>
            <radialGradient id="lspFace" cx="35%" cy="30%" r="75%">
              <stop offset="0%" stop-color="#FEF08A" />
              <stop offset="30%" stop-color="#FACC15" />
              <stop offset="75%" stop-color="#A16207" />
              <stop offset="100%" stop-color="#6B3C10" />
            </radialGradient>
            <filter id="lspGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#A16207" flood-opacity="0.4"/>
            </filter>
            <filter id="lspInnerGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#111827" flood-opacity="0.6" />
            </filter>
          </defs>
          <!-- Large premium gold shield-star structure from Batch 9/image_5.png -->
          <path d="M60,10 L75,45 L112,45 L82,67 L94,102 L60,80 L26,102 L38,67 L8,45 L45,45 Z" fill="url(#lgGlowInner)" filter="lspGlow" />
          <path d="M60,20 L75,42 C75,65 60,80 60,80 L26,80 L38,67 L8,45 L45,45 L60,10 Z" fill="url(#lspGlowInner)" stroke="#F59E0B" stroke-width="2.5" opacity="0.6" />
          <!-- Base face from Batch 9 accurate to the man integrated as profile -->
          <circle cx="60" cy="55" r="30" fill="url(#lspFace)" filter="url(#lspInnerGlow)" />
          <!-- Simplified features translated to illustrative medium, accurate stubble and solemnity -->
          <path d="M48,47 Q52,45 56,47" stroke="#111827" stroke-width="2" stroke-linecap="round" />
          <path d="M72,47 Q76,45 80,47" stroke="#111827" stroke-width="2" stroke-linecap="round" />
          <path d="M52,60 Q60,64 68,60" stroke="#111827" stroke-width="2.5" stroke-linecap="round" />
          <circle cx="43" cy="62" r="1.5" fill="#111827" opacity="0.6" />
          <circle cx="77" cy="62" r="1.5" fill="#111827" opacity="0.6" />
          <!-- PREMIUM INTENSIVE COMMUNITY STAR label and star bursts -->
          <path d="M35,85 Q60,92 85,85" fill="none" stroke="#F59E0B" stroke-width="4" stroke-linecap="round" filter="url(#lgInnerGlow)" />
          <polygon points="60,90 62,94 66,95 63,98 64,102 60,100 56,102 57,98 54,95 58,94" fill="#FBBF24" filter="url(#lgInnerGlow)" />
          <text x="60" y="38" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-weight="bold" font-size="12">VERIFIED</text>
          <!-- Volumetric Glare -->
          <path d="M35,42 Q45,28 65,22 Q85,28 75,42 Q60,30 45,30 Q35,32 35,42 Z" fill="#FFFFFF" opacity="0.3" />
        </svg>
  `,

  // 92. NETWORK (Connectivity, Global, Infrastructure, Data Nodes)
  network: `
    <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" viewBox="0 0 120 120" width="100%" height="100%"> <defs> <linearGradient id="nwGrid" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#BAE6FD" /> <stop offset="100%" stop-color="#38BDF8" /> </linearGradient> <radialGradient id="nwGlow" cx="50%" cy="50%" r="50%"> <stop offset="0%" stop-color="#7DD3FC" /> <stop offset="100%" stop-color="#0F172A" stop-opacity="0" /> </radialGradient> <filter id="nwDrop" x="-20%" y="-20%" width="140%" height="140%"> <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#0284C7" flood-opacity="0.3"/> </filter> <filter id="nwInnerGlow" x="-10%" y="-10%" width="120%" height="120%"> <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/> </filter> </defs> <circle cx="60" cy="60" r="50" fill="url(#nwGlow)" filter="blur(5px)" /> <circle cx="60" cy="60" r="45" fill="none" stroke="url(#nwGrid)" stroke-width="2" opacity="0.6" /> <g filter="url(#nwDrop)"> <path d="M60,15 L78,38 L60,60 L42,38 Z" fill="url(#nwGrid)" filter="url(#nwInnerGlow)" /> <path d="M42,38 L15,45 L38,60 L60,60 Z" fill="url(#nwGrid)" filter="url(#nwInnerGlow)" /> <path d="M15,45 L30,95 L60,78 L38,60 Z" fill="url(#nwGrid)" filter="url(#nwInnerGlow)" /> <path d="M30,95 L90,95 L60,78 Z" fill="url(#nwGrid)" filter="url(#nwInnerGlow)" /> <path d="M90,95 L105,45 L82,60 L60,78 Z" fill="url(#nwGrid)" filter="url(#nwInnerGlow)" /> <path d="M105,45 L78,38 L60,60 L82,60 Z" fill="url(#nwGrid)" filter="url(#nwInnerGlow)" /> </g> <circle cx="60" cy="60" r="4" fill="#FFFFFF" filter="blur(2px)" /> <circle cx="15" cy="45" r="3" fill="#FFFFFF" filter="blur(2px)" /> </svg>
  `,

  // 93. ANALYTICS (Analytics, Dashboard, Metrics, Strategy)
  analytics: `
    <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" viewBox="0 0 120 120" width="100%" height="100%"> <defs> <linearGradient id="anBar" x1="0%" y1="0%" x2="0%" y2="100%"> <stop offset="0%" stop-color="#C084FC" /> <stop offset="100%" stop-color="#7E22CE" /> </linearGradient> <linearGradient id="anTrend" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#34D399" /> <stop offset="100%" stop-color="#059669" /> </linearGradient> <linearGradient id="anDashboard" x1="0%" y1="0%" x2="0%" y2="100%"> <stop offset="0%" stop-color="#FFFFFF" /> <stop offset="100%" stop-color="#E2E8F0" /> </linearGradient> <filter id="anDrop" x="-10%" y="-10%" width="120%" height="120%"> <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/> </filter> <filter id="anTrendGlow" x="-20%" y="-20%" width="140%" height="140%"> <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#10B981" flood-opacity="0.6"/> </filter> </defs> <rect x="15" y="20" width="90" height="80" rx="8" fill="url(#anDashboard)" filter="url(#anDrop)" /> <line x1="25" y1="35" x2="95" y2="35" stroke="#CBD5E1" stroke-width="2" /> <line x1="25" y1="55" x2="95" y2="55" stroke="#CBD5E1" stroke-width="2" /> <line x1="25" y1="75" x2="95" y2="75" stroke="#CBD5E1" stroke-width="2" /> <line x1="45" y1="20" x2="45" y2="100" stroke="#CBD5E1" stroke-width="2" /> <circle cx="35" cy="35" r="3" fill="#BAE6FD" /> <circle cx="60" cy="55" r="3" fill="#BAE6FD" /> <circle cx="85" cy="75" r="3" fill="#BAE6FD" /> <g filter="url(#anTrendGlow)"> <rect x="25" y="45" width="10" height="40" rx="2" fill="#38BDF8" opacity="0.8" /> <rect x="55" y="60" width="10" height="25" rx="2" fill="url(#anBar)" opacity="0.8" /> <path d="M20,70 Q45,55 70,60 Q85,65 105,45" fill="none" stroke="url(#anTrend)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" /> </g> </svg>
  `,

  // 94. COLLABORATE (Partnership, Teamwork, Integration, Synergy)
  collaborate: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
          <defs>
            <linearGradient id="coRing1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#38BDF8" />
              <stop offset="50%" stop-color="#0284C7" />
              <stop offset="100%" stop-color="#0F172A" />
            </linearGradient>
            <linearGradient id="coRing2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#F472B6" />
              <stop offset="50%" stop-color="#BE185D" />
              <stop offset="100%" stop-color="#4C0519" />
            </linearGradient>
            <filter id="coDrop" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.3"/>
            </filter>
            <filter id="coSpark" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#FDE047" flood-opacity="0.8"/>
            </filter>
          </defs>
          <!-- Background Ring (Blue) -->
          <circle cx="45" cy="60" r="30" fill="none" stroke="url(#coRing1)" stroke-width="14" filter="url(#coDrop)" />
          <!-- Foreground Ring (Pink) -->
          <path d="M75,30 A30,30 0 1,1 75,90 A30,30 0 0,1 75,30 Z" fill="none" stroke="url(#coRing2)" stroke-width="14" filter="url(#coDrop)" />
          <!-- Overlapping Illusion (Cutting out and redrawing front segment of Blue ring) -->
          <path d="M45,30 A30,30 0 0,1 62.3,35.2" fill="none" stroke="url(#coRing1)" stroke-width="14" />
          <path d="M45,90 A30,30 0 0,0 62.3,84.8" fill="none" stroke="url(#coRing1)" stroke-width="14" />
          <!-- Edge Bevels for 3D Torus Effect -->
          <circle cx="45" cy="60" r="23" fill="none" stroke="#BAE6FD" stroke-width="1.5" opacity="0.5" />
          <circle cx="45" cy="60" r="37" fill="none" stroke="#0284C7" stroke-width="1.5" opacity="0.3" />
          <circle cx="75" cy="60" r="23" fill="none" stroke="#FBCFE8" stroke-width="1.5" opacity="0.5" />
          <circle cx="75" cy="60" r="37" fill="none" stroke="#BE185D" stroke-width="1.5" opacity="0.3" />
          <!-- Center Energy Spark / Synergy Core -->
          <polygon points="60,45 63,55 73,58 63,61 60,71 57,61 47,58 57,55" fill="#FEF08A" filter="url(#coSpark)" />
          <circle cx="60" cy="58" r="3" fill="#FFFFFF" />
        </svg>
  `,

  // 95. SUPPORT (Ticket, Headset, Help, Dynamic Problem Solving)
  support: `
    <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" viewBox="0 0 120 120" width="100%" height="100%"> <defs> <linearGradient id="spBand" x1="0%" y1="0%" x2="100%" y2="0%"> <stop offset="0%" stop-color="#38BDF8" /> <stop offset="100%" stop-color="#0284C7" /> </linearGradient> <linearGradient id="spPad" x1="0%" y1="0%" x2="0%" y2="100%"> <stop offset="0%" stop-color="#F8FAFC" /> <stop offset="100%" stop-color="#CBD5E1" /> </linearGradient> <linearGradient id="spTicket" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#FEF08A" /> <stop offset="100%" stop-color="#EAB308" /> </linearGradient> <filter id="spDrop" x="-10%" y="-10%" width="120%" height="120%"> <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.35"/> </filter> <filter id="spAlertGlow" x="-20%" y="-20%" width="140%" height="140%"> <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#EF4444" flood-opacity="0.6"/> </filter> </defs> <path d="M25,65 Q25,30 60,30 Q95,30 95,65" fill="none" stroke="url(#spBand)" stroke-width="10" stroke-linecap="round" filter="url(#spDrop)" /> <rect x="15" y="55" width="20" height="35" rx="10" fill="url(#spPad)" filter="url(#spDrop)" /> <path d="M22,58 Q25,55 28,58 L28,87 Q25,90 22,87 Z" fill="#FFFFFF" opacity="0.4" /> <rect x="85" y="55" width="20" height="35" rx="10" fill="url(#spPad)" filter="url(#spDrop)" /> <path d="M92,58 Q95,55 98,58 L98,87 Q95,90 92,87 Z" fill="#FFFFFF" opacity="0.4" /> <path d="M30,80 Q35,100 60,95" fill="none" stroke="#475569" stroke-width="4" stroke-linecap="round" filter="url(#spDrop)" /> <path d="M70,90 A10,10 0 0,1 70,100" fill="none" stroke="#64748B" stroke-width="2" stroke-linecap="round" opacity="0.8" /> <path d="M75,85 A16,16 0 0,1 75,105" fill="none" stroke="#64748B" stroke-width="2" stroke-linecap="round" opacity="0.4" /> <rect x="35" y="15" width="50" height="25" rx="4" fill="url(#spTicket)" filter="url(#spDrop)" /> <line x1="45" y1="15" x2="45" y2="40" stroke="#FBBF24" stroke-width="3" stroke-dasharray="4 4" opacity="0.8" /> <line x1="55" y1="20" x2="75" y2="20" stroke="#FFF0F6" stroke-width="3" stroke-linecap="round" opacity="0.5" /> <line x1="55" y1="30" x2="75" y2="30" stroke="#FFF0F6" stroke-width="3" stroke-linecap="round" opacity="0.5" /> </svg>
  `,

  // 96. GEM / RUBY (Premium, Exclusive Content, High Value, Rewards)
  gem: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
          <defs>
            <linearGradient id="gmTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FECDD3" />
              <stop offset="100%" stop-color="#F43F5E" />
            </linearGradient>
            <linearGradient id="gmSideL" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#E11D48" />
              <stop offset="100%" stop-color="#9F1239" />
            </linearGradient>
            <linearGradient id="gmSideR" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FDA4AF" />
              <stop offset="100%" stop-color="#BE123C" />
            </linearGradient>
            <filter id="gmDrop" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="10" stdDeviation="8" flood-color="#9F1239" flood-opacity="0.5"/>
            </filter>
            <filter id="gmGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="0" stdDeviation="15" flood-color="#F43F5E" flood-opacity="0.4"/>
            </filter>
          </defs>
          <!-- Outer Shape & Glow Base -->
          <polygon points="60,110 15,45 35,15 85,15 105,45" fill="none" filter="url(#gmGlow)" />
          <!-- Left Bottom Facet -->
          <polygon points="60,110 15,45 60,45" fill="url(#gmSideL)" filter="url(#gmDrop)" />
          <!-- Right Bottom Facet -->
          <polygon points="60,110 105,45 60,45" fill="url(#gmSideR)" filter="url(#gmDrop)" />
          <!-- Center Bottom Facet -->
          <polygon points="60,110 40,45 80,45" fill="#BE123C" />
          <!-- Top Center Facet -->
          <polygon points="40,45 80,45 70,15 50,15" fill="url(#gmTop)" />
          <!-- Top Left Facet -->
          <polygon points="15,45 40,45 50,15 35,15" fill="#FDA4AF" />
          <!-- Top Right Facet -->
          <polygon points="105,45 80,45 70,15 85,15" fill="#FB7185" />
          <!-- Facet Edge Highlights (Crisp Lines for Glass Effect) -->
          <path d="M15,45 L105,45 M60,110 L40,45 M60,110 L80,45 M40,45 L50,15 M80,45 L70,15 M15,45 L35,15 M105,45 L85,15" fill="none" stroke="#FFF1F2" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
          <!-- Intense Specular Sparkle Highlight -->
          <path d="M25,20 L30,12 L35,20 L43,25 L35,30 L30,38 L25,30 L17,25 Z" fill="#FFFFFF" />
          <circle cx="30" cy="25" r="1.5" fill="#F43F5E" />
        </svg>
  `,

  // 97. AMBASSADOR (Networking, Status, Partner Verification)
  ambassador: `
    <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" viewBox="0 0 120 120" width="100%" height="100%"> <defs> <linearGradient id="amMetal" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#E2E8F0" /> <stop offset="100%" stop-color="#94A3B8" /> </linearGradient> <radialGradient id="amFace" cx="35%" cy="30%" r="75%"> <stop offset="0%" stop-color="#E9D5FF" /> <stop offset="30%" stop-color="#A78BFA" /> <stop offset="75%" stop-color="#5B21B6" /> <stop offset="100%" stop-color="#1F0D40" /> </radialGradient> <filter id="amGlow" x="-20%" y="-20%" width="140%" height="140%"> <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#5B21B6" flood-opacity="0.35"/> </filter> <filter id="amInnerGlow" x="-10%" y="-10%" width="120%" height="120%"> <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#0F172A" flood-opacity="0.6" /> </filter> </defs> <path d="M60,15 L105,35 L100,60 L60,115 L20,60 L15,35 Z" fill="url(#amFace)" filter="url(#amGlow)" stroke="#7C3AED" stroke-width="1.5" stroke-linejoin="round" /> <circle cx="60" cy="55" r="30" fill="url(#amFace)" filter="url(#amInnerGlow)" /> <path d="M48,47 Q52,45 56,47" stroke="#1F0D40" stroke-width="2" stroke-linecap="round" /> <path d="M72,47 Q76,45 80,47" stroke="#1F0D40" stroke-width="2" stroke-linecap="round" /> <path d="M52,60 Q60,64 68,60" stroke="#1F0D40" stroke-width="2.5" stroke-linecap="round" /> <circle cx="43" cy="62" r="1" fill="#1F0D40" opacity="0.6" /> <circle cx="77" cy="62" r="1" fill="#1F0D40" opacity="0.6" /> <rect x="25" y="80" width="70" height="20" rx="4" fill="#3B82F6" stroke="#FFFFFF" stroke-width="1.5" opacity="0.8" /> <text x="60" y="93" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-weight="bold" font-size="12">AMBASSADOR</text> <polygon points="105,25 107,29 111,30 108,33 109,37 105,35 101,37 102,33 99,30 103,29" fill="#FBBF24" /> </svg>
  `,

  // 98. LUXE TIER (VIP, Level Up, Ultimate Rank, Completionist)
  luxeTier: `
    <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" viewBox="0 0 120 120" width="100%" height="100%"> <defs> <linearGradient id="ltShield" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#C2410C" /> <stop offset="100%" stop-color="#111827" /> </linearGradient> <radialGradient id="ltFace" cx="35%" cy="30%" r="75%"> <stop offset="0%" stop-color="#FFFBEB" /> <stop offset="30%" stop-color="#FDE047" /> <stop offset="75%" stop-color="#EAB308" /> <stop offset="100%" stop-color="#854D0E" /> </radialGradient> <linearGradient id="ltLabel" x1="0%" y1="0%" x2="100%" y2="0%"> <stop offset="0%" stop-color="#FEF08A" /> <stop offset="50%" stop-color="#CA8A04" /> <stop offset="100%" stop-color="#78350F" /> </linearGradient> <filter id="ltGlow" x="-20%" y="-20%" width="140%" height="140%"> <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#A16207" flood-opacity="0.4"/> </filter> <filter id="ltInnerGlow" x="-10%" y="-10%" width="120%" height="120%"> <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#111827" flood-opacity="0.6" /> </filter> </defs> <path d="M60,15 L105,35 L100,60 L60,115 L20,60 L15,35 Z" fill="url(#ltShield)" filter="url(#ltGlow)" stroke="#CA8A04" stroke-width="1.5" stroke-linejoin="round" /> <path d="M22,38 L60,22 L98,38 L94,58 L60,110 L26,58 Z" fill="none" stroke="#FDE047" stroke-width="2" opacity="0.6" /> <circle cx="60" cy="55" r="30" fill="url(#ltFace)" filter="url(#ltInnerGlow)" /> <path d="M48,47 Q52,45 56,47" stroke="#111827" stroke-width="2" stroke-linecap="round" /> <path d="M72,47 Q76,45 80,47" stroke="#111827" stroke-width="2" stroke-linecap="round" /> <path d="M52,60 Q60,64 68,60" stroke="#111827" stroke-width="2.5" stroke-linecap="round" /> <circle cx="43" cy="62" r="1" fill="#111827" opacity="0.6" /> <circle cx="77" cy="62" r="1" fill="#111827" opacity="0.6" /> <path d="M35,42 Q45,28 65,22 Q85,28 75,42 Q60,30 45,30 Q35,32 35,42 Z" fill="#FFFFFF" opacity="0.3" /> <path d="M20,60 L60,60 L60,115 C60,115 40,105 20,60 Z" fill="url(#ltLabel)" filter="url(#ltGlow)" stroke="#FFFFFF" stroke-width="1.5" opacity="0.8" /> <path d="M30,75 L45,90 L85,50" fill="none" stroke="#FFFFFF" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" opacity="0.9" /> <path d="M32,77 L45,88 L83,52" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.6" /> </svg>
  `,

  // 99. VIDEO (Playback, Media, Entertainment, Tutorials)
  video: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
          <defs>
            <linearGradient id="vdRed" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FCA5A5"/>
              <stop offset="50%" stop-color="#EF4444"/>
              <stop offset="100%" stop-color="#991B1B"/>
            </linearGradient>
            <linearGradient id="vdDark" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#334155"/>
              <stop offset="100%" stop-color="#0F172A"/>
            </linearGradient>
            <filter id="vdDrop" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#991B1B" flood-opacity="0.4"/>
            </filter>
            <filter id="vdInnerDrop" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000000" flood-opacity="0.5"/>
            </filter>
          </defs>
          <rect x="15" y="25" width="90" height="70" rx="8" fill="url(#vdDark)" filter="url(#vdInnerDrop)"/>
          <circle cx="25" cy="35" r="3" fill="#E2E8F0"/>
          <circle cx="25" cy="50" r="3" fill="#E2E8F0"/>
          <circle cx="25" cy="65" r="3" fill="#E2E8F0"/>
          <circle cx="25" cy="80" r="3" fill="#E2E8F0"/>
          <circle cx="95" cy="35" r="3" fill="#E2E8F0"/>
          <circle cx="95" cy="50" r="3" fill="#E2E8F0"/>
          <circle cx="95" cy="65" r="3" fill="#E2E8F0"/>
          <circle cx="95" cy="80" r="3" fill="#E2E8F0"/>
          <path d="M15,35 L105,35 L105,25 L15,25 Z" fill="#FFFFFF" opacity="0.1"/>
          <polygon points="45,40 45,80 80,60" fill="url(#vdRed)" filter="url(#vdDrop)"/>
          <polygon points="45,40 45,80 50,75 50,45" fill="#FECACA" opacity="0.4"/>
          <path d="M45,40 L80,60 L70,60 L45,45 Z" fill="#FFFFFF" opacity="0.2"/>
        </svg>
  `,

  // 100. ARTICLE (Documents, News, Writing, Publishing)
  article: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
          <defs>
            <linearGradient id="arPaper" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#FFFFFF"/>
              <stop offset="100%" stop-color="#E2E8F0"/>
            </linearGradient>
            <linearGradient id="arGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FEF08A"/>
              <stop offset="100%" stop-color="#B45309"/>
            </linearGradient>
            <filter id="arDrop" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.2"/>
            </filter>
            <filter id="arSealDrop" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#B45309" flood-opacity="0.4"/>
            </filter>
          </defs>
          <rect x="25" y="15" width="70" height="90" rx="2" fill="#CBD5E1" transform="rotate(5 60 60)"/>
          <rect x="20" y="15" width="70" height="90" rx="2" fill="url(#arPaper)" filter="url(#arDrop)"/>
          <polygon points="90,15 90,35 70,15" fill="#F8FAFC" filter="url(#arDrop)"/>
          <path d="M70,15 L90,35" stroke="#CBD5E1" stroke-width="1.5" />
          <line x1="30" y1="35" x2="60" y2="35" stroke="#94A3B8" stroke-width="4" stroke-linecap="round"/>
          <line x1="30" y1="50" x2="80" y2="50" stroke="#94A3B8" stroke-width="4" stroke-linecap="round"/>
          <line x1="30" y1="65" x2="75" y2="65" stroke="#94A3B8" stroke-width="4" stroke-linecap="round"/>
          <line x1="30" y1="80" x2="50" y2="80" stroke="#94A3B8" stroke-width="4" stroke-linecap="round"/>
          <circle cx="75" cy="85" r="12" fill="url(#arGold)" filter="url(#arSealDrop)"/>
          <circle cx="75" cy="85" r="8" fill="none" stroke="#FEF3C7" stroke-width="1.5" stroke-dasharray="2 2"/>
          <path d="M72,82 L75,88 L78,82" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" fill="none"/>
        </svg>
  `,

  // 101. PRESENTATION (Pitch Decks, Meetings, Analytics, Teaching)
  presentation: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
          <defs>
            <linearGradient id="prBoard" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#475569"/>
              <stop offset="100%" stop-color="#1E293B"/>
            </linearGradient>
            <linearGradient id="prScreen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#38BDF8"/>
              <stop offset="100%" stop-color="#0284C7"/>
            </linearGradient>
            <filter id="prDrop" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
            </filter>
            <filter id="prGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#38BDF8" flood-opacity="0.5"/>
            </filter>
          </defs>
          <line x1="60" y1="90" x2="60" y2="115" stroke="#94A3B8" stroke-width="8" stroke-linecap="round" filter="url(#prDrop)"/>
          <line x1="35" y1="115" x2="85" y2="115" stroke="#64748B" stroke-width="6" stroke-linecap="round" filter="url(#prDrop)"/>
          <rect x="10" y="20" width="100" height="70" rx="4" fill="url(#prBoard)" filter="url(#prDrop)"/>
          <rect x="15" y="25" width="90" height="60" rx="2" fill="url(#prScreen)"/>
          <rect x="25" y="55" width="12" height="20" rx="2" fill="#FFFFFF" opacity="0.9" filter="url(#prGlow)"/>
          <rect x="45" y="40" width="12" height="35" rx="2" fill="#FDE047" opacity="0.9" filter="url(#prGlow)"/>
          <rect x="65" y="25" width="12" height="50" rx="2" fill="#A7F3D0" opacity="0.9" filter="url(#prGlow)"/>
          <line x1="85" y1="35" x2="95" y2="35" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
          <line x1="85" y1="45" x2="92" y2="45" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
          <path d="M12,22 L108,22" stroke="#94A3B8" stroke-width="2" opacity="0.5" stroke-linecap="round"/>
        </svg>
  `,

  // 102. SERVER (Hardware Computing, Cloud Nodes, Datacenters, Hosting)
  server: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="svChassis" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#475569" />
          <stop offset="50%" stop-color="#334155" />
          <stop offset="100%" stop-color="#1E293B" />
        </linearGradient>
        <linearGradient id="svBevel" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#94A3B8" />
          <stop offset="100%" stop-color="#475569" />
        </linearGradient>
        <linearGradient id="svGlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#10B981" />
          <stop offset="100%" stop-color="#34D399" />
        </linearGradient>
        <filter id="svDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="svLedGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#10B981" flood-opacity="0.7"/>
        </filter>
      </defs>
      <rect x="15" y="15" width="90" height="90" rx="10" fill="url(#svChassis)" filter="url(#svDrop)" />
      <rect x="18" y="18" width="84" height="84" rx="8" fill="none" stroke="url(#svBevel)" stroke-width="2" opacity="0.6" />
      <path d="M15,25 L8,25 L8,35 L15,35 Z M15,85 L8,85 L8,95 L15,95 Z" fill="url(#svBevel)" />
      <path d="M105,25 L112,25 L112,35 L105,35 Z M105,85 L112,85 L112,95 L105,95 Z" fill="url(#svBevel)" />
      <rect x="25" y="28" width="70" height="14" rx="4" fill="#0F172A" />
      <rect x="25" y="48" width="70" height="14" rx="4" fill="#0F172A" />
      <rect x="25" y="68" width="70" height="14" rx="4" fill="#0F172A" />
      <rect x="29" y="31" width="8" height="8" rx="1" fill="#475569" />
      <rect x="29" y="51" width="8" height="8" rx="1" fill="#475569" />
      <rect x="29" y="71" width="8" height="8" rx="1" fill="#475569" />
      <circle cx="85" cy="35" r="3" fill="url(#svGlow)" filter="url(#svLedGlow)" />
      <circle cx="85" cy="55" r="3" fill="url(#svGlow)" filter="url(#svLedGlow)" />
      <circle cx="85" cy="75" r="3" fill="#64748B" />
      <circle cx="77" cy="35" r="2" fill="#34D399" opacity="0.8" />
      <circle cx="77" cy="55" r="2" fill="#34D399" opacity="0.8" />
      <circle cx="82" cy="92" r="4" fill="#EF4444" />
      <circle cx="90" cy="92" r="2" fill="#3B82F6" />
    </svg>
  `,

  // 103. KEYBOARD (Typing, Code, Input, Hardware)
  keyboard: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="kbBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#64748B" />
          <stop offset="100%" stop-color="#1E293B" />
        </linearGradient>
        <filter id="kbDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="15" y="35" width="90" height="50" rx="4" fill="url(#kbBody)" filter="url(#kbDrop)" />
      <!-- Keys Top Row -->
      <rect x="22" y="42" width="8" height="8" rx="2" fill="#0F172A" />
      <rect x="34" y="42" width="8" height="8" rx="2" fill="#0F172A" />
      <rect x="46" y="42" width="8" height="8" rx="2" fill="#0F172A" />
      <rect x="58" y="42" width="8" height="8" rx="2" fill="#0F172A" />
      <rect x="70" y="42" width="8" height="8" rx="2" fill="#0F172A" />
      <rect x="82" y="42" width="16" height="8" rx="2" fill="#0F172A" />
      <!-- Keys Middle Row -->
      <rect x="22" y="56" width="12" height="8" rx="2" fill="#0F172A" />
      <rect x="38" y="56" width="8" height="8" rx="2" fill="#0F172A" />
      <rect x="50" y="56" width="8" height="8" rx="2" fill="#0F172A" />
      <rect x="62" y="56" width="8" height="8" rx="2" fill="#0F172A" />
      <rect x="74" y="56" width="8" height="8" rx="2" fill="#0F172A" />
      <rect x="86" y="56" width="12" height="8" rx="2" fill="#0F172A" />
      <!-- Keys Bottom Row (Spacebar) -->
      <rect x="22" y="70" width="16" height="8" rx="2" fill="#0F172A" />
      <rect x="42" y="70" width="36" height="8" rx="2" fill="#3B82F6" />
      <rect x="82" y="70" width="16" height="8" rx="2" fill="#0F172A" />
    </svg>
  `,

  // 104. MOUSE (Cursor, Hardware, Click, Navigate)
  mouse: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="moBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F1F5F9" />
          <stop offset="100%" stop-color="#94A3B8" />
        </linearGradient>
        <filter id="moDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="35" y="20" width="50" height="80" rx="25" fill="url(#moBody)" filter="url(#moDrop)" />
      <path d="M60,20 L60,50" stroke="#CBD5E1" stroke-width="4" />
      <rect x="55" y="30" width="10" height="15" rx="5" fill="#3B82F6" />
      <path d="M35,50 Q60,60 85,50" fill="none" stroke="#CBD5E1" stroke-width="4" />
    </svg>
  `,

  // 105. SHIELD GEAR (Automated Pipeline Compliance, DevSecOps, System Encryption Protection)
  shieldGear: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="sgGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE047" />
          <stop offset="50%" stop-color="#EAB308" />
          <stop offset="100%" stop-color="#854D0E" />
        </linearGradient>
        <linearGradient id="sgMetal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#94A3B8" />
          <stop offset="100%" stop-color="#334155" />
        </linearGradient>
        <linearGradient id="sgGlass" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
        </linearGradient>
        <filter id="sgDrop" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="sgInner" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
      </defs>
      <path d="M60,12 L102,27 C102,72 80,106 60,116 C40,106 18,72 18,27 Z" fill="url(#sgGold)" filter="url(#sgDrop)" stroke="#CA8A04" stroke-width="1" />
      <path d="M60,20 L94,32 C94,68 76,96 60,106 C44,96 26,68 26,32 Z" fill="#1E293B" filter="url(#sgInner)" />
      <g filter="url(#sgInner)" transform="translate(60,63)">
        <path d="M-6,-32 L6,-32 L8,-22 L16,-20 L24,-26 L32,-18 L26,-10 L29,-2 L39,0 L39,12 L29,14 L26,22 L32,30 L24,38 L16,32 L8,34 L6,44 L-6,44 L-8,34 L-16,32 L-24,38 L-32,30 L-26,22 L-29,14 L-39,12 L-39,0 L-29,-2 L-26,-10 L-32,-18 L-24,-26 L-16,-20 L-8,-22 Z" fill="url(#sgMetal)" />
        <circle cx="0" cy="6" r="14" fill="#0F172A" />
        <circle cx="0" cy="6" r="6" fill="url(#sgGold)" />
      </g>
      <path d="M60,20 L94,32 C94,50 85,72 72,85 C60,62 38,40 26,32 Z" fill="url(#sgGlass)" />
    </svg>
  `,

  // 106. GRAPH NODE (Abstract Syntax Trees, Data Structures, Structural Interconnectivity)
  graphNode: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="gnLine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#A78BFA" />
          <stop offset="100%" stop-color="#F472B6" />
        </linearGradient>
        <radialGradient id="gnNodeA" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#C4B5FD" />
          <stop offset="60%" stop-color="#7C3AED" />
          <stop offset="100%" stop-color="#4C1D95" />
        </radialGradient>
        <radialGradient id="gnNodeB" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#FBCFE8" />
          <stop offset="60%" stop-color="#EC4899" />
          <stop offset="100%" stop-color="#9D174D" />
        </radialGradient>
        <filter id="gnDrop" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="gnNeon" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#EC4899" flood-opacity="0.6"/>
        </filter>
      </defs>
      <g stroke="url(#gnLine)" stroke-width="6" stroke-linecap="round" filter="url(#gnNeon)">
        <line x1="30" y1="35" x2="90" y2="45" />
        <line x1="30" y1="35" x2="50" y2="90" />
        <line x1="90" y1="45" x2="50" y2="90" />
      </g>
      <line x1="30" y1="35" x2="90" y2="45" stroke="#FFFFFF" stroke-width="1.5" stroke-dasharray="6 12" opacity="0.5" />
      <line x1="30" y1="35" x2="50" y2="90" stroke="#FFFFFF" stroke-width="1.5" stroke-dasharray="6 12" opacity="0.5" />
      <circle cx="30" cy="35" r="16" fill="url(#gnNodeA)" filter="url(#gnDrop)" stroke="#4C1D95" stroke-width="1" />
      <circle cx="26" cy="31" r="3" fill="#FFFFFF" opacity="0.7" />
      <circle cx="90" cy="45" r="14" fill="url(#gnNodeB)" filter="url(#gnDrop)" stroke="#9D174D" stroke-width="1" />
      <circle cx="86" cy="41" r="2.5" fill="#FFFFFF" opacity="0.7" />
      <circle cx="50" cy="90" r="14" fill="url(#gnNodeB)" filter="url(#gnDrop)" stroke="#9D174D" stroke-width="1" />
      <circle cx="46" cy="86" r="2.5" fill="#FFFFFF" opacity="0.7" />
    </svg>
  `,

  // 107. COIN (Currency, Money, Wealth, Crypto)
  coin: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="cnGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FEF08A" />
          <stop offset="50%" stop-color="#F59E0B" />
          <stop offset="100%" stop-color="#92400E" />
        </linearGradient>
        <filter id="cnDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <circle cx="60" cy="65" r="45" fill="#78350F" filter="url(#cnDrop)" />
      <circle cx="60" cy="60" r="45" fill="url(#cnGold)" />
      <circle cx="60" cy="60" r="35" fill="none" stroke="#FEF08A" stroke-width="2" opacity="0.8" />
      <path d="M50,40 L70,40 L70,80 L50,80" fill="none" stroke="#78350F" stroke-width="6" stroke-linecap="round" />
      <line x1="60" y1="30" x2="60" y2="90" stroke="#78350F" stroke-width="6" stroke-linecap="round" />
    </svg>
  `,

  // 108. VAULT (Bank, Secure, Storage, Protection)
  vault: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="vtSteel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#CBD5E1" />
          <stop offset="100%" stop-color="#64748B" />
        </linearGradient>
        <radialGradient id="vtWheel" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#F1F5F9" />
          <stop offset="100%" stop-color="#94A3B8" />
        </radialGradient>
        <filter id="vtDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <circle cx="60" cy="60" r="45" fill="url(#vtSteel)" filter="url(#vtDrop)" />
      <circle cx="60" cy="60" r="35" fill="none" stroke="#475569" stroke-width="4" />
      <circle cx="60" cy="60" r="25" fill="url(#vtWheel)" />
      <line x1="60" y1="25" x2="60" y2="95" stroke="#475569" stroke-width="6" />
      <line x1="25" y1="60" x2="95" y2="60" stroke="#475569" stroke-width="6" />
      <circle cx="60" cy="60" r="8" fill="#1E293B" />
    </svg>
  `,

  // 109. CANDLESTICK CHART (Trading, Markets, Analytics, Growth)
  candlestick: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="cdGreen" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="#059669" />
          <stop offset="100%" stop-color="#34D399" />
        </linearGradient>
        <linearGradient id="cdRed" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#EF4444" />
          <stop offset="100%" stop-color="#991B1B" />
        </linearGradient>
        <filter id="cdGlowGreen" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#10B981" flood-opacity="0.6"/>
        </filter>
        <filter id="cdGlowRed" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#EF4444" flood-opacity="0.6"/>
        </filter>
        <filter id="cdDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="5" stdDeviation="4" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M15,20 L15,100 L105,100" fill="none" stroke="#475569" stroke-width="3" stroke-linecap="round" />
      <line x1="15" y1="40" x2="105" y2="40" stroke="#334155" stroke-width="1.5" stroke-dasharray="4 4" />
      <line x1="15" y1="60" x2="105" y2="60" stroke="#334155" stroke-width="1.5" stroke-dasharray="4 4" />
      <line x1="15" y1="80" x2="105" y2="80" stroke="#334155" stroke-width="1.5" stroke-dasharray="4 4" />
      
      <g filter="url(#cdGlowGreen)">
        <line x1="35" y1="45" x2="35" y2="85" stroke="#34D399" stroke-width="3" stroke-linecap="round" />
        <rect x="27" y="55" width="16" height="20" rx="2" fill="url(#cdGreen)" filter="url(#cdDrop)" />
      </g>
      
      <g filter="url(#cdGlowRed)">
        <line x1="60" y1="35" x2="60" y2="75" stroke="#EF4444" stroke-width="3" stroke-linecap="round" />
        <rect x="52" y="45" width="16" height="25" rx="2" fill="url(#cdRed)" filter="url(#cdDrop)" />
      </g>
      
      <g filter="url(#cdGlowGreen)">
        <line x1="85" y1="15" x2="85" y2="60" stroke="#34D399" stroke-width="3" stroke-linecap="round" />
        <rect x="77" y="25" width="16" height="30" rx="2" fill="url(#cdGreen)" filter="url(#cdDrop)" />
      </g>
      
      <path d="M28,56 L42,56 M53,46 L67,46 M78,26 L92,26" stroke="#FFFFFF" stroke-width="1.5" opacity="0.5" />
    </svg>
  `,

  // 110. BANK (Institution, Finance, Secure, Trust)
  bank: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="bkStone" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#F1F5F9" />
          <stop offset="100%" stop-color="#64748B" />
        </linearGradient>
        <filter id="bkDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <polygon points="60,15 15,45 105,45" fill="url(#bkStone)" filter="url(#bkDrop)" />
      <rect x="15" y="45" width="90" height="10" fill="#94A3B8" />
      <rect x="25" y="55" width="10" height="35" fill="url(#bkStone)" filter="url(#bkDrop)" />
      <rect x="45" y="55" width="10" height="35" fill="url(#bkStone)" filter="url(#bkDrop)" />
      <rect x="65" y="55" width="10" height="35" fill="url(#bkStone)" filter="url(#bkDrop)" />
      <rect x="85" y="55" width="10" height="35" fill="url(#bkStone)" filter="url(#bkDrop)" />
      <rect x="15" y="90" width="90" height="15" fill="url(#bkStone)" filter="url(#bkDrop)" />
      <circle cx="60" cy="30" r="6" fill="#F59E0B" />
    </svg>
  `,

  // 111. PIGGY BANK (Savings, Micro-transactions, Financial Planning)
  piggyBank: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <radialGradient id="pbPig" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#FBCFE8" />
          <stop offset="50%" stop-color="#F472B6" />
          <stop offset="100%" stop-color="#BE185D" />
        </radialGradient>
        <linearGradient id="pbGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FEF08A" />
          <stop offset="100%" stop-color="#A16207" />
        </linearGradient>
        <filter id="pbDrop" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#9D174D" flood-opacity="0.3"/>
        </filter>
        <filter id="pbCoinDrop" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#854D0E" flood-opacity="0.5"/>
        </filter>
      </defs>
      <ellipse cx="60" cy="100" rx="40" ry="8" fill="#000000" opacity="0.15" filter="blur(4px)" />
      <path d="M35,80 L30,100 L45,100 L45,80 Z" fill="#BE185D" />
      <path d="M75,80 L70,100 L85,100 L85,80 Z" fill="#BE185D" />
      <path d="M30,35 L20,20 L40,30 Z" fill="#F472B6" filter="url(#pbDrop)" />
      <path d="M80,30 L90,20 L90,40 Z" fill="#F472B6" filter="url(#pbDrop)" />
      <ellipse cx="60" cy="65" rx="45" ry="35" fill="url(#pbPig)" filter="url(#pbDrop)" />
      <path d="M30,50 C40,35 70,35 85,50" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.5" />
      <ellipse cx="25" cy="65" rx="12" ry="16" fill="#F9A8D4" filter="url(#pbDrop)" />
      <circle cx="22" cy="60" r="3" fill="#BE185D" />
      <circle cx="22" cy="70" r="3" fill="#BE185D" />
      <circle cx="45" cy="52" r="5" fill="#4C0519" />
      <circle cx="43" cy="50" r="1.5" fill="#FFFFFF" />
      <circle cx="65" cy="25" r="14" fill="url(#pbGold)" filter="url(#pbCoinDrop)" />
      <path d="M65,15 L65,35 M61,25 L69,25 M65,17 C68,17 71,20 71,25" fill="none" stroke="#FFFBEB" stroke-width="2" stroke-linecap="round" />
      <path d="M50,30 L75,30" fill="none" stroke="#4C0519" stroke-width="6" stroke-linecap="round" />
      <path d="M50,30 L63,30" fill="none" stroke="#4C0519" stroke-width="6" stroke-linecap="round" />
    </svg>
  `,

  // 112. SMARTWATCH (Wearable, Time, Fitness, Device)
  smartwatch: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="swStrap" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#334155" />
          <stop offset="100%" stop-color="#0F172A" />
        </linearGradient>
        <linearGradient id="swFace" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#CBD5E1" />
          <stop offset="100%" stop-color="#64748B" />
        </linearGradient>
        <filter id="swDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="45" y="15" width="30" height="90" rx="4" fill="url(#swStrap)" filter="url(#swDrop)" />
      <rect x="35" y="35" width="50" height="50" rx="10" fill="url(#swFace)" filter="url(#swDrop)" />
      <rect x="40" y="40" width="40" height="40" rx="6" fill="#020617" />
      <circle cx="60" cy="60" r="12" fill="none" stroke="#34D399" stroke-width="4" />
      <circle cx="60" cy="60" r="12" fill="none" stroke="#38BDF8" stroke-width="4" stroke-dasharray="20 40" />
      <line x1="60" y1="60" x2="60" y2="52" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" />
      <line x1="60" y1="60" x2="68" y2="60" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" />
    </svg>
  `,

  // 113. VR HEADSET (Metaverse, Virtual Reality, Immersive, Future)
  vrHeadset: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="vrBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="50%" stop-color="#F1F5F9" />
          <stop offset="100%" stop-color="#94A3B8" />
        </linearGradient>
        <linearGradient id="vrVisor" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1E293B" />
          <stop offset="50%" stop-color="#0F172A" />
          <stop offset="100%" stop-color="#020617" />
        </linearGradient>
        <linearGradient id="vrStrap" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#475569" />
          <stop offset="100%" stop-color="#1E293B" />
        </linearGradient>
        <filter id="vrDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.35"/>
        </filter>
        <filter id="vrNeon" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#8B5CF6" flood-opacity="0.8"/>
        </filter>
      </defs>
      <path d="M15,55 C5,55 5,65 15,65 L105,65 C115,65 115,55 105,55 Z" fill="url(#vrStrap)" filter="url(#vrDrop)" />
      <rect x="20" y="50" width="15" height="20" rx="4" fill="#CBD5E1" />
      <rect x="85" y="50" width="15" height="20" rx="4" fill="#CBD5E1" />
      <path d="M25,40 L95,40 C105,40 105,80 95,80 L25,80 C15,80 15,40 25,40 Z" fill="url(#vrBody)" filter="url(#vrDrop)" />
      <path d="M30,45 L90,45 C98,45 98,75 90,75 L30,75 C22,75 22,45 30,45 Z" fill="url(#vrVisor)" />
      <line x1="45" y1="60" x2="75" y2="60" stroke="#8B5CF6" stroke-width="4" stroke-linecap="round" filter="url(#vrNeon)" />
      <circle cx="45" cy="60" r="4" fill="#C4B5FD" />
      <circle cx="75" cy="60" r="4" fill="#C4B5FD" />
      <path d="M30,45 L80,45 L40,75 L25,75 C22,65 24,50 30,45 Z" fill="#FFFFFF" opacity="0.1" />
      <path d="M40,35 L80,35" stroke="#E2E8F0" stroke-width="2" stroke-linecap="round" />
      <path d="M50,85 L70,85" stroke="#64748B" stroke-width="2" stroke-linecap="round" opacity="0.5" />
    </svg>
  `,

  // 114. PREMIUM ME VERIFIED (User, Profile, Achievement, Personalized)
  premium_me_verified: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <radialGradient id="meFace" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stop-color="#E2E8F0" />
          <stop offset="60%" stop-color="#94A3B8" />
          <stop offset="100%" stop-color="#475569" />
        </radialGradient>
        <linearGradient id="meCrown" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FEF08A" />
          <stop offset="50%" stop-color="#F59E0B" />
          <stop offset="100%" stop-color="#B45309" />
        </linearGradient>
        <linearGradient id="meShield" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="100%" stop-color="#0284C7" />
        </linearGradient>
        <filter id="meDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="meGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#FBBF24" flood-opacity="0.6"/>
        </filter>
      </defs>
      <circle cx="60" cy="60" r="45" fill="url(#meFace)" filter="url(#meDrop)" />
      <ellipse cx="60" cy="55" rx="18" ry="22" fill="#E2E8F0" />
      <path d="M48,50 Q60,40 72,50" fill="none" stroke="#000" stroke-width="2" />
      <path d="M52,65 Q60,75 68,65" fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round" />
      <g transform="translate(42, 10)" filter="url(#meDrop)">
        <path d="M0,20 L36,20 L36,0 L24,10 L18,0 L12,10 L0,0 Z" fill="url(#meCrown)" />
        <circle cx="18" cy="10" r="2.5" fill="#FDE047" stroke="#CA8A04" />
      </g>
      <path d="M85,85 L115,85 L100,115 Z" fill="url(#meShield)" filter="url(#meGlow)" />
      <path d="M92,92 L98,105 L108,92" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" />
      <path d="M22,42 C30,24 55,18 78,24 C55,20 32,28 22,42 Z" fill="#FFFFFF" opacity="0.4" />
    </svg>
  `,

  // 115. ACHIEVEMENT STAR (Success, Achievement, Goal, Premium achievement)
  achievement_star: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="asStarOuter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FEF08A" />
          <stop offset="50%" stop-color="#FACC15" />
          <stop offset="100%" stop-color="#A16207" />
        </linearGradient>
        <linearGradient id="asStarInner" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="60%" stop-color="#FDE047" />
          <stop offset="100%" stop-color="#A16207" />
        </linearGradient>
        <filter id="asStarDrop" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="10" stdDeviation="8" flood-color="#000000" flood-opacity="0.4"/>
        </filter>
        <filter id="asStarGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#FBBF24" flood-opacity="0.7"/>
        </filter>
      </defs>
      <g filter="url(#asStarDrop)">
        <path d="M60,10 L75,45 L110,50 L85,75 L95,110 L60,95 L25,110 L35,75 L10,50 L45,45 Z" fill="url(#asStarOuter)" filter="url(#asStarGlow)" stroke="#CA8A04" stroke-width="2" stroke-linejoin="miter" />
        <path d="M60,20 L73,43 L102,48 L80,68 L88,98 L60,86 L32,98 L40,68 L18,48 L47,43 Z" fill="url(#asStarInner)" opacity="0.8" stroke="#FDE047" stroke-width="1.5" />
      </g>
      <circle cx="60" cy="65" r="10" fill="#EF4444" filter="url(#asStarGlow)" />
      <circle cx="58" cy="63" r="3" fill="#FFFFFF" opacity="0.7" />
      <path d="M42,52 L78,52" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.5" stroke-linecap="round" />
    </svg>
  `,

  // 116. ACHIEVEMENT (Success, Goal, Gold Star, Triumphant)
  achievement: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%"> <defs> <linearGradient id="asStarOuter" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#FEF08A" /> <stop offset="50%" stop-color="#FACC15" /> <stop offset="100%" stop-color="#A16207" /> </linearGradient> <linearGradient id="asStarInner" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#FFFFFF" /> <stop offset="60%" stop-color="#FDE047" /> <stop offset="100%" stop-color="#A16207" /> </linearGradient> <filter id="asStarDrop" x="-15%" y="-15%" width="130%" height="130%"> <feDropShadow dx="0" dy="10" stdDeviation="8" flood-color="#000000" flood-opacity="0.4"/> </filter> <filter id="asStarGlow" x="-20%" y="-20%" width="140%" height="140%"> <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#FBBF24" flood-opacity="0.7"/> </filter> <filter id="asConfettiGlow" x="-25%" y="-25%" width="150%" height="150%"> <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#60A5FA" flood-opacity="0.6"/> </filter> </defs> <g filter="url(#asStarDrop)"> <path d="M60,10 L75,45 L110,50 L85,75 L95,110 L60,95 L25,110 L35,75 L10,50 L45,45 Z" fill="url(#asStarOuter)" filter="url(#asStarGlow)" stroke="#CA8A04" stroke-width="2" stroke-linejoin="miter" /> <path d="M60,20 L73,43 L102,48 L80,68 L88,98 L60,86 L32,98 L40,68 L18,48 L47,43 Z" fill="url(#asStarInner)" opacity="0.8" stroke="#FDE047" stroke-width="1.5" /> </g> <circle cx="60" cy="65" r="10" fill="#EF4444" filter="asStarGlow" /> <circle cx="58" cy="63" r="3" fill="#FFFFFF" opacity="0.7" /> <path d="M42,52 L78,52" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.5" stroke-linecap="round" /> </svg>
  `,

  // 117. CHART (Business, Analytics, Growth, Finance)
  chart: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="chBar1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#60A5FA" />
          <stop offset="100%" stop-color="#1D4ED8" />
        </linearGradient>
        <linearGradient id="chBar2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F472B6" />
          <stop offset="100%" stop-color="#BE185D" />
        </linearGradient>
        <linearGradient id="chBar3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FCD34D" />
          <stop offset="100%" stop-color="#B45309" />
        </linearGradient>
        <filter id="chDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="4" flood-color="#000000" flood-opacity="0.3" />
        </filter>
      </defs>
      <path d="M15,20 L15,100 L105,100" fill="none" stroke="#94A3B8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" filter="url(#chDrop)" />
      <rect x="25" y="60" width="16" height="38" rx="3" fill="url(#chBar1)" filter="url(#chDrop)" />
      <rect x="52" y="40" width="16" height="58" rx="3" fill="url(#chBar2)" filter="url(#chDrop)" />
      <rect x="79" y="15" width="16" height="83" rx="3" fill="url(#chBar3)" filter="url(#chDrop)" />
      <!-- Volumetric highlights -->
      <path d="M28,62 L38,62 M55,42 L65,42 M82,17 L92,17" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.6" />
    </svg>
  `,

  // 118. LAUGHING (Emoticons, Joy, Humor, Reaction)
  laughing: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <radialGradient id="laFace" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stop-color="#FEF08A" />
          <stop offset="60%" stop-color="#F59E0B" />
          <stop offset="100%" stop-color="#B45309" />
        </radialGradient>
        <linearGradient id="laTear" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#7DD3FC" />
          <stop offset="100%" stop-color="#0284C7" />
        </linearGradient>
        <filter id="laDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3" />
        </filter>
        <filter id="laInner" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#78350F" flood-opacity="0.5" />
        </filter>
      </defs>
      <circle cx="60" cy="60" r="45" fill="url(#laFace)" filter="url(#laDrop)" />
      <!-- Closed Happy Eyes -->
      <path d="M35,45 Q42,35 50,45" fill="none" stroke="#713F12" stroke-width="4" stroke-linecap="round" />
      <path d="M70,45 Q77,35 85,45" fill="none" stroke="#713F12" stroke-width="4" stroke-linecap="round" />
      <!-- Wide Laughing Mouth -->
      <path d="M35,65 C35,85 85,85 85,65 Z" fill="#451A03" filter="url(#laInner)" />
      <!-- Teeth -->
      <path d="M40,65 L80,65 C80,72 40,72 40,65 Z" fill="#FFFFFF" />
      <!-- Tears of Joy -->
      <path d="M25,50 C15,60 25,75 25,75 C25,75 35,60 25,50 Z" fill="url(#laTear)" filter="url(#laDrop)" transform="rotate(-15 25 60)" />
      <path d="M95,50 C85,60 95,75 95,75 C95,75 105,60 95,50 Z" fill="url(#laTear)" filter="url(#laDrop)" transform="rotate(15 95 60)" />
      <!-- Volumetric Glare -->
      <path d="M22,42 C30,24 55,18 78,24 C55,20 32,28 22,42 Z" fill="#FFFFFF" opacity="0.4" />
    </svg>
  `,

  // 119. DRONE (Technology, Flight, Future, Camera)
  drone: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="drBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#475569" />
          <stop offset="50%" stop-color="#1E293B" />
          <stop offset="100%" stop-color="#020617" />
        </linearGradient>
        <radialGradient id="drBlade" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#94A3B8" stop-opacity="0.8" />
          <stop offset="100%" stop-color="#F8FAFC" stop-opacity="0.1" />
        </radialGradient>
        <filter id="drDrop" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.4"/>
        </filter>
        <filter id="drLed" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#10B981" flood-opacity="0.8"/>
        </filter>
      </defs>
      <!-- Arms -->
      <path d="M60,60 L25,35 M60,60 L95,35 M60,60 L25,85 M60,60 L95,85" stroke="#334155" stroke-width="6" stroke-linecap="round" filter="url(#drDrop)" />
      <!-- Rotors -->
      <circle cx="25" cy="35" r="18" fill="url(#drBlade)" />
      <circle cx="95" cy="35" r="18" fill="url(#drBlade)" />
      <circle cx="25" cy="85" r="18" fill="url(#drBlade)" />
      <circle cx="95" cy="85" r="18" fill="url(#drBlade)" />
      <circle cx="25" cy="35" r="3" fill="#0F172A" />
      <circle cx="95" cy="35" r="3" fill="#0F172A" />
      <circle cx="25" cy="85" r="3" fill="#0F172A" />
      <circle cx="95" cy="85" r="3" fill="#0F172A" />
      <!-- Central Body -->
      <rect x="45" y="45" width="30" height="40" rx="8" fill="url(#drBody)" filter="url(#drDrop)" />
      <!-- Camera -->
      <circle cx="60" cy="85" r="8" fill="#0F172A" filter="url(#drDrop)" />
      <circle cx="60" cy="85" r="4" fill="#38BDF8" />
      <!-- Status LEDs -->
      <circle cx="50" cy="50" r="2" fill="#10B981" filter="url(#drLed)" />
      <circle cx="70" cy="50" r="2" fill="#EF4444" />
    </svg>
  `,

  // 120. CHEMISTRY (Science, Flask, Experiment, Laboratory)
  chemistry: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="chGlass" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#F1F5F9" stop-opacity="0.6" />
          <stop offset="100%" stop-color="#94A3B8" stop-opacity="0.3" />
        </linearGradient>
        <radialGradient id="chLiquid" cx="50%" cy="80%" r="60%">
          <stop offset="0%" stop-color="#4ADE80" />
          <stop offset="60%" stop-color="#16A34A" />
          <stop offset="100%" stop-color="#14532D" />
        </radialGradient>
        <filter id="chDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.2"/>
        </filter>
        <filter id="chNeon" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#4ADE80" flood-opacity="0.7"/>
        </filter>
      </defs>
      <!-- Liquid Background -->
      <path d="M45,65 L25,100 C20,110 30,115 60,115 C90,115 100,110 95,100 L75,65 Z" fill="url(#chLiquid)" filter="url(#chNeon)" />
      <!-- Bubbles -->
      <circle cx="45" cy="95" r="4" fill="#FFFFFF" opacity="0.6" />
      <circle cx="70" cy="100" r="3" fill="#FFFFFF" opacity="0.6" />
      <circle cx="55" cy="85" r="5" fill="#FFFFFF" opacity="0.6" />
      <circle cx="65" cy="75" r="2.5" fill="#FFFFFF" opacity="0.6" />
      <circle cx="50" cy="70" r="2" fill="#FFFFFF" opacity="0.6" />
      <circle cx="60" cy="55" r="3" fill="#4ADE80" opacity="0.8" filter="url(#chNeon)" />
      <circle cx="50" cy="40" r="2" fill="#4ADE80" opacity="0.8" filter="url(#chNeon)" />
      <!-- Glass Flask -->
      <path d="M50,15 L50,55 L20,105 C15,115 25,120 60,120 C95,120 105,115 100,105 L70,55 L70,15 Z" fill="url(#chGlass)" stroke="#FFFFFF" stroke-width="2" filter="url(#chDrop)" />
      <rect x="45" y="10" width="30" height="5" rx="2" fill="#E2E8F0" />
      <line x1="35" y1="80" x2="45" y2="80" stroke="#FFFFFF" stroke-width="2" opacity="0.7" />
      <line x1="30" y1="95" x2="40" y2="95" stroke="#FFFFFF" stroke-width="2" opacity="0.7" />
    </svg>
  `,

  // 121. CIRCUIT (Electronics, Logic, Hardware Design, Firmware)
  circuit: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="ctBoard" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1E293B" />
          <stop offset="100%" stop-color="#0F172A" />
        </linearGradient>
        <linearGradient id="ctTrace" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#FDE047" />
          <stop offset="100%" stop-color="#CA8A04" />
        </linearGradient>
        <filter id="ctDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.4"/>
        </filter>
        <filter id="ctNeon" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="#FDE047" flood-opacity="0.6"/>
        </filter>
      </defs>
      <rect x="15" y="15" width="90" height="90" rx="8" fill="url(#ctBoard)" filter="url(#ctDrop)" />
      <path d="M30,30 L60,30 L60,60 L90,60" fill="none" stroke="url(#ctTrace)" stroke-width="4" stroke-linecap="round" filter="url(#ctNeon)" />
      <path d="M30,90 L60,90 L60,60 L90,30" fill="none" stroke="url(#ctTrace)" stroke-width="4" stroke-linecap="round" filter="url(#ctNeon)" />
      <circle cx="30" cy="30" r="6" fill="#FDE047" filter="url(#ctNeon)" />
      <circle cx="60" cy="60" r="6" fill="#FDE047" filter="url(#ctNeon)" />
      <circle cx="90" cy="60" r="6" fill="#FDE047" filter="url(#ctNeon)" />
      <circle cx="30" cy="90" r="6" fill="#FDE047" filter="url(#ctNeon)" />
      <circle cx="90" cy="30" r="6" fill="#FDE047" filter="url(#ctNeon)" />
      <rect x="20" y="20" width="80" height="80" rx="6" fill="none" stroke="#334155" stroke-width="2" />
    </svg>
  `,

  // 122. SHIELD (Security, Encryption, Safety, Protection)
  shield_1: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="shSteel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#94A3B8" />
          <stop offset="100%" stop-color="#1E293B" />
        </linearGradient>
        <filter id="shDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="5" flood-color="#000000" flood-opacity="0.4"/>
        </filter>
      </defs>
      <path d="M60,15 L105,35 C105,75 80,105 60,115 C40,105 15,75 15,35 Z" fill="url(#shSteel)" filter="url(#shDrop)" />
      <path d="M60,25 L95,40 C95,70 75,95 60,105 C45,95 25,70 25,40 Z" fill="#334155" />
      <path d="M40,60 L55,75 L80,45" fill="none" stroke="#34D399" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `,

  // 123. MESSAGE (Communication, Chat, Feedback, Notifications)
  message: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="msgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#8B5CF6" />
          <stop offset="100%" stop-color="#4C1D95" />
        </linearGradient>
        <filter id="msgDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M20,30 L100,30 C105,30 110,35 110,40 L110,75 C110,80 105,85 100,85 L65,85 L50,105 L50,85 L20,85 C15,85 10,80 10,75 L10,40 C10,35 15,30 20,30 Z" fill="url(#msgGrad)" filter="url(#msgDrop)" />
      <circle cx="40" cy="57" r="5" fill="#FFFFFF" />
      <circle cx="60" cy="57" r="5" fill="#FFFFFF" />
      <circle cx="80" cy="57" r="5" fill="#FFFFFF" />
    </svg>
  `,

  // 124. SPEEDOMETER (Performance, Benchmarking, Velocity, Metrics)
  speedometer: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <radialGradient id="smGauge" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="100%" stop-color="#E2E8F0" />
        </radialGradient>
        <linearGradient id="smNeedle" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#EF4444" />
          <stop offset="100%" stop-color="#991B1B" />
        </linearGradient>
        <filter id="smDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <circle cx="60" cy="60" r="45" fill="#334155" filter="url(#smDrop)" />
      <circle cx="60" cy="60" r="40" fill="url(#smGauge)" />
      <path d="M25,85 A40,40 0 0,1 95,85" fill="none" stroke="#94A3B8" stroke-width="4" stroke-linecap="round" />
      <line x1="60" y1="60" x2="85" y2="35" stroke="url(#smNeedle)" stroke-width="5" stroke-linecap="round" filter="url(#smDrop)" />
      <circle cx="60" cy="60" r="6" fill="#1E293B" />
    </svg>
  `,

  // 125. LOCK (Security, Authentication, Access, Privacy)
  lock_1: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="lkShackle" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#CBD5E1" />
          <stop offset="100%" stop-color="#64748B" />
        </linearGradient>
        <linearGradient id="lkBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE047" />
          <stop offset="100%" stop-color="#B45309" />
        </linearGradient>
        <filter id="lkDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M40,45 L40,30 C40,15 50,5 60,5 C70,5 80,15 80,30 L80,45" fill="none" stroke="url(#lkShackle)" stroke-width="12" stroke-linecap="round" filter="url(#lkDrop)" />
      <rect x="25" y="45" width="70" height="50" rx="8" fill="url(#lkBody)" filter="url(#lkDrop)" />
      <circle cx="60" cy="70" r="8" fill="#78350F" />
      <rect x="58" y="70" width="4" height="10" fill="#FDE047" />
    </svg>
  `,

  // 126. CODE (Programming, Logic, Scripts, Development)
  code: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="cdGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="100%" stop-color="#818CF8" />
        </linearGradient>
        <filter id="cdDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="15" y="25" width="90" height="70" rx="6" fill="#1E293B" filter="url(#cdDrop)" />
      <path d="M35,45 L50,60 L35,75" fill="none" stroke="url(#cdGrad)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M85,45 L70,60 L85,75" fill="none" stroke="url(#cdGrad)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
      <line x1="60" y1="40" x2="50" y2="80" stroke="url(#cdGrad)" stroke-width="8" stroke-linecap="round" />
    </svg>
  `,

  // 127. GLOBE (Worldwide, Cloud, Connectivity, Distribution)
  globe_1: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <radialGradient id="glBlue" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="100%" stop-color="#1D4ED8" />
        </radialGradient>
        <filter id="glDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <circle cx="60" cy="60" r="45" fill="url(#glBlue)" filter="url(#glDrop)" />
      <ellipse cx="60" cy="60" rx="20" ry="45" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.3" />
      <ellipse cx="60" cy="60" rx="45" ry="20" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.3" />
      <path d="M30,30 C50,20 70,20 90,30" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.4" />
      <path d="M30,90 C50,100 70,100 90,90" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.4" />
    </svg>
  `,

  // 128. SHIELD (Encryption, Security, Protection, Compliance)
  shield_2: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="shGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="100%" stop-color="#1E40AF" />
        </linearGradient>
        <filter id="shDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M60,15 L105,35 C105,75 80,105 60,115 C40,105 15,75 15,35 Z" fill="url(#shGradient)" filter="url(#shDrop)" />
      <path d="M40,55 L55,70 L80,40" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `,

  // 129. WIFI (Signal, Connectivity, Network, Wireless)
  wifi: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="wfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F59E0B" />
          <stop offset="100%" stop-color="#B45309" />
        </linearGradient>
        <filter id="wfDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <circle cx="60" cy="95" r="8" fill="url(#wfGrad)" filter="url(#wfDrop)" />
      <path d="M35,70 A35,35 0 0,1 85,70" fill="none" stroke="url(#wfGrad)" stroke-width="8" stroke-linecap="round" />
      <path d="M20,55 A55,55 0 0,1 100,55" fill="none" stroke="url(#wfGrad)" stroke-width="8" stroke-linecap="round" />
    </svg>
  `,

  // 130. SYNC (Data, Refresh, Update, Circular)
  sync: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="syGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10B981" />
          <stop offset="100%" stop-color="#047857" />
        </linearGradient>
        <filter id="syDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M30,60 A30,30 0 1,1 60,90 M90,60 A30,30 0 1,1 60,30" fill="none" stroke="url(#syGrad)" stroke-width="10" stroke-linecap="round" filter="url(#syDrop)" />
      <polygon points="30,60 20,50 40,50" fill="url(#syGrad)" />
      <polygon points="90,60 100,70 80,70" fill="url(#syGrad)" />
    </svg>
  `,

  // 131. STORAGE (Hard Drive, Data, Capacity, Volume)
  storage: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="stGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#64748B" />
          <stop offset="100%" stop-color="#1E293B" />
        </linearGradient>
        <filter id="stDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="20" y="30" width="80" height="60" rx="6" fill="url(#stGrad)" filter="url(#stDrop)" />
      <circle cx="60" cy="60" r="15" fill="#334155" />
      <circle cx="60" cy="60" r="5" fill="#FFFFFF" />
      <rect x="30" y="40" width="10" height="5" fill="#CBD5E1" />
    </svg>
  `,

  // 132. GLOBE (Worldwide, Cloud, Connectivity)
  globe_2: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="glGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="100%" stop-color="#1D4ED8" />
        </linearGradient>
        <filter id="glDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <circle cx="60" cy="60" r="45" fill="url(#glGrad)" filter="url(#glDrop)" />
      <path d="M60,15 A45,45 0 0,0 60,105 M15,60 A45,45 0 0,0 105,60" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.4" />
      <ellipse cx="60" cy="60" rx="25" ry="45" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.4" />
    </svg>
  `,

  // 133. PENCIL (Design, Writing, Editing, Creation)
  pencil: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="peBody" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#FDE047" />
          <stop offset="100%" stop-color="#D97706" />
        </linearGradient>
        <linearGradient id="peTip" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#A1A1AA" />
          <stop offset="100%" stop-color="#52525B" />
        </linearGradient>
        <filter id="peDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M15,105 L35,85 L105,15 L85,-5 L15,65 Z" fill="url(#peBody)" filter="url(#peDrop)" />
      <path d="M15,105 L35,85 L25,75 Z" fill="#FCA5A5" />
      <path d="M85,-5 L105,15 L95,25 L75,5 Z" fill="url(#peTip)" />
      <path d="M15,105 L85,-5" stroke="#000000" stroke-width="2" opacity="0.2" />
    </svg>
  `,

  // 134. BRUSH (Art, Painting, Graphics, Styling)
  brush: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="brHandle" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#8B5CF6" />
          <stop offset="100%" stop-color="#5B21B6" />
        </linearGradient>
        <linearGradient id="brBristle" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FDE047" />
          <stop offset="100%" stop-color="#B45309" />
        </linearGradient>
        <filter id="brDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="50" y="40" width="20" height="70" rx="3" fill="url(#brHandle)" filter="url(#brDrop)" />
      <path d="M40,40 L80,40 L75,10 L45,10 Z" fill="url(#brBristle)" filter="url(#brDrop)" />
      <path d="M45,40 L75,40" stroke="#000000" stroke-width="4" opacity="0.2" />
    </svg>
  `,

  // 135. DOCUMENT (Text, Files, Reports, Writing)
  document: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="doPaper" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="100%" stop-color="#E2E8F0" />
        </linearGradient>
        <filter id="doDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M30,15 L80,15 L105,40 L105,105 L30,105 Z" fill="url(#doPaper)" filter="url(#doDrop)" />
      <path d="M80,15 L105,40 L80,40 Z" fill="#CBD5E1" />
      <line x1="40" y1="55" x2="90" y2="55" stroke="#94A3B8" stroke-width="4" stroke-linecap="round" />
      <line x1="40" y1="70" x2="90" y2="70" stroke="#94A3B8" stroke-width="4" stroke-linecap="round" />
      <line x1="40" y1="85" x2="70" y2="85" stroke="#94A3B8" stroke-width="4" stroke-linecap="round" />
    </svg>
  `,

  // 136. TOOLS (Repair, Configuration, Management)
  tools: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="toTool" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#94A3B8" />
          <stop offset="100%" stop-color="#475569" />
        </linearGradient>
        <filter id="toDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M30,30 L60,60 L50,70 L20,40 Z" fill="url(#toTool)" filter="url(#toDrop)" />
      <path d="M80,80 L50,50 L60,40 L90,70 Z" fill="url(#toTool)" filter="url(#toDrop)" />
      <circle cx="60" cy="60" r="5" fill="#FFFFFF" />
    </svg>
  `,

  // 137. COMPASS (Navigation, Strategy, Direction, Exploration)
  compass_1: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <radialGradient id="cpBase" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#334155" />
          <stop offset="100%" stop-color="#0F172A" />
        </radialGradient>
        <linearGradient id="cpNeedle" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#F87171" />
          <stop offset="100%" stop-color="#B91C1C" />
        </linearGradient>
        <filter id="cpDrop" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.4"/>
        </filter>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#cpBase)" filter="url(#cpDrop)" />
      <circle cx="60" cy="60" r="42" fill="none" stroke="#475569" stroke-width="4" />
      <path d="M60,20 L65,60 L60,100 L55,60 Z" fill="url(#cpNeedle)" filter="url(#cpDrop)" />
      <path d="M60,20 L55,60 L60,100 L65,60 Z" fill="#FCA5A5" />
      <circle cx="60" cy="60" r="8" fill="#F1F5F9" />
    </svg>
  `,

  // 138. CALENDAR (Scheduling, Time Management, Deadlines)
  calendar_1: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="caBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE047" />
          <stop offset="100%" stop-color="#B45309" />
        </linearGradient>
        <filter id="caDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="20" y="25" width="80" height="75" rx="6" fill="url(#caBody)" filter="url(#caDrop)" />
      <rect x="20" y="25" width="80" height="20" rx="6" fill="#F59E0B" />
      <circle cx="35" cy="20" r="6" fill="#334155" />
      <circle cx="85" cy="20" r="6" fill="#334155" />
      <line x1="35" y1="55" x2="85" y2="55" stroke="#FFFFFF" stroke-width="4" opacity="0.3" />
      <line x1="35" y1="70" x2="85" y2="70" stroke="#FFFFFF" stroke-width="4" opacity="0.3" />
      <line x1="35" y1="85" x2="60" y2="85" stroke="#FFFFFF" stroke-width="4" opacity="0.3" />
    </svg>
  `,

  // 139. UPLOAD (Sync, Cloud, Data Transfer, Deployment)
  upload: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="upGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#10B981" />
          <stop offset="100%" stop-color="#065F46" />
        </linearGradient>
        <filter id="upDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M40,70 L60,45 L80,70" fill="none" stroke="url(#upGrad)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" filter="url(#upDrop)" />
      <line x1="60" y1="45" x2="60" y2="100" stroke="url(#upGrad)" stroke-width="12" stroke-linecap="round" filter="url(#upDrop)" />
      <rect x="30" y="15" width="60" height="15" rx="2" fill="url(#upGrad)" filter="url(#upDrop)" />
    </svg>
  `,

  // 140. CREDIT CARD (Payment, Transaction, Commerce)
  credit_card: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="ccGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1E293B" />
          <stop offset="100%" stop-color="#020617" />
        </linearGradient>
        <linearGradient id="ccChip" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE047" />
          <stop offset="100%" stop-color="#B45309" />
        </linearGradient>
        <filter id="ccDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.4"/>
        </filter>
      </defs>
      <rect x="15" y="30" width="90" height="60" rx="6" fill="url(#ccGrad)" filter="url(#ccDrop)" />
      <rect x="25" y="45" width="15" height="12" rx="2" fill="url(#ccChip)" />
      <circle cx="85" cy="70" r="10" fill="#EF4444" opacity="0.8" />
      <circle cx="75" cy="70" r="10" fill="#F59E0B" opacity="0.8" />
      <path d="M25,75 L60,75" stroke="#94A3B8" stroke-width="4" stroke-linecap="round" />
    </svg>
  `,

  // 141. SAFE (Security, Wealth, Vault, Protection)
  safe: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="sfMetal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#94A3B8" />
          <stop offset="100%" stop-color="#334155" />
        </linearGradient>
        <filter id="sfDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.4"/>
        </filter>
      </defs>
      <rect x="20" y="20" width="80" height="80" rx="8" fill="url(#sfMetal)" filter="url(#sfDrop)" />
      <rect x="30" y="30" width="60" height="60" rx="4" fill="#1E293B" />
      <circle cx="60" cy="60" r="18" fill="#F1F5F9" />
      <circle cx="60" cy="60" r="10" fill="#64748B" />
      <line x1="60" y1="35" x2="60" y2="42" stroke="#FFFFFF" stroke-width="4" />
      <line x1="60" y1="78" x2="60" y2="85" stroke="#FFFFFF" stroke-width="4" />
      <line x1="35" y1="60" x2="42" y2="60" stroke="#FFFFFF" stroke-width="4" />
      <line x1="78" y1="60" x2="85" y2="60" stroke="#FFFFFF" stroke-width="4" />
    </svg>
  `,

  // 142. PIGGY BANK (Savings, Investment, Wealth, Growth)
  piggy_bank: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="pbPink" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FBCFE8" />
          <stop offset="100%" stop-color="#DB2777" />
        </linearGradient>
        <filter id="pbDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <circle cx="65" cy="65" r="35" fill="url(#pbPink)" filter="url(#pbDrop)" />
      <ellipse cx="35" cy="65" rx="15" ry="10" fill="url(#pbPink)" filter="url(#pbDrop)" />
      <circle cx="45" cy="45" r="8" fill="url(#pbPink)" />
      <circle cx="75" cy="35" r="8" fill="url(#pbPink)" />
      <rect x="55" y="85" width="10" height="15" rx="4" fill="#9D174D" />
      <rect x="75" y="85" width="10" height="15" rx="4" fill="#9D174D" />
      <line x1="60" y1="40" x2="70" y2="40" stroke="#FDE047" stroke-width="6" stroke-linecap="round" filter="url(#pbDrop)" />
      <circle cx="80" cy="55" r="3" fill="#000000" />
    </svg>
  `,

  // 143. CHART (Growth, Data, Statistics, Revenue)
  chart_line: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="clGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#34D399" />
          <stop offset="100%" stop-color="#059669" />
        </linearGradient>
        <filter id="clDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <polyline points="20,80 50,50 75,65 100,25" fill="none" stroke="url(#clGrad)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" filter="url(#clDrop)" />
      <line x1="15" y1="100" x2="105" y2="100" stroke="#94A3B8" stroke-width="6" stroke-linecap="round" />
      <line x1="15" y1="100" x2="15" y2="15" stroke="#94A3B8" stroke-width="6" stroke-linecap="round" />
      <circle cx="50" cy="50" r="6" fill="#FDE047" />
      <circle cx="75" cy="65" r="6" fill="#FDE047" />
      <circle cx="100" cy="25" r="6" fill="#FDE047" />
    </svg>
  `,

  // 144. BULL (Market, Optimism, Stocks, Trading)
  bull: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="blGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4ADE80" />
          <stop offset="100%" stop-color="#14532D" />
        </linearGradient>
        <filter id="blDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M20,60 L50,30 L70,40 L100,20 L100,80 L20,80 Z" fill="url(#blGrad)" filter="url(#blDrop)" />
      <path d="M40,20 Q45,10 55,20" fill="none" stroke="#FDE047" stroke-width="4" stroke-linecap="round" />
      <path d="M70,30 Q75,20 85,30" fill="none" stroke="#FDE047" stroke-width="4" stroke-linecap="round" />
    </svg>
  `,

  // 145. BEAR (Market, Pessimism, Stocks, Trading)
  bear: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="brGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F87171" />
          <stop offset="100%" stop-color="#7F1D1D" />
        </linearGradient>
        <filter id="brDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M100,40 L70,70 L50,60 L20,80 L20,20 L100,20 Z" fill="url(#brGrad)" filter="url(#brDrop)" />
      <circle cx="80" cy="50" r="4" fill="#000000" />
    </svg>
  `,

  // 146. INVOICE (Billing, Receipt, Payment, Accounting)
  invoice: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="inPaper" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="100%" stop-color="#E2E8F0" />
        </linearGradient>
        <filter id="inDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M25,15 L95,15 L95,105 L80,95 L65,105 L50,95 L35,105 L25,95 Z" fill="url(#inPaper)" filter="url(#inDrop)" />
      <line x1="40" y1="40" x2="80" y2="40" stroke="#94A3B8" stroke-width="4" stroke-linecap="round" />
      <line x1="40" y1="55" x2="70" y2="55" stroke="#94A3B8" stroke-width="4" stroke-linecap="round" />
      <line x1="40" y1="70" x2="80" y2="70" stroke="#94A3B8" stroke-width="4" stroke-linecap="round" />
      <circle cx="80" cy="30" r="8" fill="#F59E0B" />
    </svg>
  `,

  // 147. SERVER (Database, Storage, Hosting, Rack)
  server_rack: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="srMetal" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#475569" />
          <stop offset="100%" stop-color="#1E293B" />
        </linearGradient>
        <filter id="srDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="25" y="15" width="70" height="90" rx="4" fill="url(#srMetal)" filter="url(#srDrop)" />
      <rect x="35" y="25" width="50" height="20" rx="2" fill="#0F172A" />
      <rect x="35" y="55" width="50" height="20" rx="2" fill="#0F172A" />
      <rect x="35" y="85" width="50" height="10" rx="2" fill="#0F172A" />
      <circle cx="45" cy="35" r="3" fill="#34D399" />
      <circle cx="55" cy="35" r="3" fill="#34D399" />
      <circle cx="45" cy="65" r="3" fill="#34D399" />
      <circle cx="55" cy="65" r="3" fill="#F87171" />
    </svg>
  `,

  // 148. NODE (Network, Hub, Distribution, Graph)
  node: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="ndGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#A78BFA" />
          <stop offset="100%" stop-color="#5B21B6" />
        </linearGradient>
        <filter id="ndDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <line x1="60" y1="20" x2="30" y2="80" stroke="#94A3B8" stroke-width="4" filter="url(#ndDrop)" />
      <line x1="60" y1="20" x2="90" y2="80" stroke="#94A3B8" stroke-width="4" filter="url(#ndDrop)" />
      <line x1="30" y1="80" x2="90" y2="80" stroke="#94A3B8" stroke-width="4" filter="url(#ndDrop)" />
      <circle cx="60" cy="20" r="15" fill="url(#ndGrad)" filter="url(#ndDrop)" />
      <circle cx="30" cy="80" r="15" fill="url(#ndGrad)" filter="url(#ndDrop)" />
      <circle cx="90" cy="80" r="15" fill="url(#ndGrad)" filter="url(#ndDrop)" />
    </svg>
  `,

  // 149. CLOUD (Internet, Sync, Backup, Storage)
  cloud_sync: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="csCloud" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="100%" stop-color="#BAE6FD" />
        </linearGradient>
        <filter id="csDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M40,75 C25,75 25,50 40,50 C45,30 75,30 80,50 C95,50 95,75 80,75 Z" fill="url(#csCloud)" filter="url(#csDrop)" />
      <path d="M60,25 A35,35 0 0,1 95,60" fill="none" stroke="#38BDF8" stroke-width="4" stroke-linecap="round" />
      <path d="M60,95 A35,35 0 0,1 25,60" fill="none" stroke="#38BDF8" stroke-width="4" stroke-linecap="round" />
      <polygon points="95,60 105,50 85,50" fill="#38BDF8" />
      <polygon points="25,60 15,70 35,70" fill="#38BDF8" />
    </svg>
  `,

  // 150. EDGE (CDN, Global, Edge Computing, Distribution)
  edge: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="egGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE047" />
          <stop offset="100%" stop-color="#B45309" />
        </linearGradient>
        <filter id="egDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="20" y="20" width="80" height="80" fill="none" stroke="#64748B" stroke-width="4" />
      <line x1="20" y1="60" x2="100" y2="60" stroke="#64748B" stroke-width="4" />
      <line x1="60" y1="20" x2="60" y2="100" stroke="#64748B" stroke-width="4" />
      <circle cx="20" cy="20" r="10" fill="url(#egGrad)" filter="url(#egDrop)" />
      <circle cx="100" cy="20" r="10" fill="url(#egGrad)" filter="url(#egDrop)" />
      <circle cx="20" cy="100" r="10" fill="url(#egGrad)" filter="url(#egDrop)" />
      <circle cx="100" cy="100" r="10" fill="url(#egGrad)" filter="url(#egDrop)" />
    </svg>
  `,

  // 151. HOSTING (Web, Virtual Machine, VPS, Servers)
  hosting: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="hsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="100%" stop-color="#1D4ED8" />
        </linearGradient>
        <filter id="hsDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="25" y="30" width="70" height="60" rx="8" fill="#1E293B" filter="url(#hsDrop)" />
      <path d="M40,50 L80,50" stroke="url(#hsGrad)" stroke-width="6" stroke-linecap="round" />
      <path d="M40,70 L60,70" stroke="url(#hsGrad)" stroke-width="6" stroke-linecap="round" />
      <circle cx="75" cy="70" r="5" fill="#34D399" />
      <path d="M60,10 L60,30" stroke="#94A3B8" stroke-width="4" />
      <path d="M30,10 L90,10" stroke="#94A3B8" stroke-width="4" />
    </svg>
  `,

  // 152. CONTAINER (Docker, Kubernetes, Packages, Modules)
  container: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="ctBox" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3B82F6" />
          <stop offset="100%" stop-color="#1E3A8A" />
        </linearGradient>
        <filter id="ctDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <polygon points="60,20 20,40 20,80 60,100 100,80 100,40" fill="url(#ctBox)" filter="url(#ctDrop)" />
      <polygon points="60,60 20,40 60,20 100,40" fill="#60A5FA" opacity="0.8" />
      <polygon points="20,80 60,100 60,60 20,40" fill="#1D4ED8" opacity="0.6" />
      <line x1="60" y1="60" x2="60" y2="100" stroke="#1E3A8A" stroke-width="4" />
    </svg>
  `,

  // 153. GATEWAY (Router, Entry, ISP, Connectivity)
  gateway: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="gwBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#CBD5E1" />
          <stop offset="100%" stop-color="#64748B" />
        </linearGradient>
        <filter id="gwDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="20" y="45" width="80" height="30" rx="4" fill="url(#gwBody)" filter="url(#gwDrop)" />
      <rect x="30" y="15" width="4" height="30" fill="#94A3B8" />
      <rect x="86" y="15" width="4" height="30" fill="#94A3B8" />
      <circle cx="35" cy="60" r="3" fill="#34D399" />
      <circle cx="45" cy="60" r="3" fill="#34D399" />
      <circle cx="55" cy="60" r="3" fill="#FDE047" />
    </svg>
  `,

  // 154. API (Endpoints, Hooks, Connect, Software)
  api: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="apGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F472B6" />
          <stop offset="100%" stop-color="#BE185D" />
        </linearGradient>
        <filter id="apDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <circle cx="30" cy="60" r="15" fill="url(#apGrad)" filter="url(#apDrop)" />
      <circle cx="90" cy="60" r="15" fill="url(#apGrad)" filter="url(#apDrop)" />
      <path d="M45,60 L75,60" fill="none" stroke="#64748B" stroke-width="6" stroke-linecap="round" />
      <circle cx="60" cy="60" r="8" fill="#FFFFFF" filter="url(#apDrop)" />
    </svg>
  `,

  // 155. TERMINAL (Console, CLI, Shell, Commands)
  terminal: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="tmScreen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#1E293B" />
          <stop offset="100%" stop-color="#0F172A" />
        </linearGradient>
        <filter id="tmDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="15" y="25" width="90" height="70" rx="4" fill="url(#tmScreen)" filter="url(#tmDrop)" />
      <rect x="15" y="25" width="90" height="15" fill="#334155" />
      <circle cx="25" cy="32" r="3" fill="#EF4444" />
      <circle cx="35" cy="32" r="3" fill="#F59E0B" />
      <circle cx="45" cy="32" r="3" fill="#10B981" />
      <path d="M25,55 L40,65 L25,75" fill="none" stroke="#10B981" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <line x1="50" y1="75" x2="65" y2="75" stroke="#FFFFFF" stroke-width="4" />
    </svg>
  `,

  // 156. BUG (Debugging, Issues, Errors, Testing)
  bug: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="bgBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F87171" />
          <stop offset="100%" stop-color="#991B1B" />
        </linearGradient>
        <filter id="bgDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <!-- Legs -->
      <path d="M40,50 L20,40 M40,60 L15,60 M40,70 L20,80 M80,50 L100,40 M80,60 L105,60 M80,70 L100,80" fill="none" stroke="#334155" stroke-width="4" stroke-linecap="round" filter="url(#bgDrop)" />
      <!-- Antennas -->
      <path d="M50,30 Q40,15 30,20 M70,30 Q80,15 90,20" fill="none" stroke="#334155" stroke-width="4" stroke-linecap="round" filter="url(#bgDrop)" />
      <!-- Body -->
      <ellipse cx="60" cy="60" rx="25" ry="35" fill="url(#bgBody)" filter="url(#bgDrop)" />
      <circle cx="60" cy="30" r="10" fill="#1E293B" />
      <line x1="60" y1="30" x2="60" y2="95" stroke="#000000" stroke-width="2" opacity="0.3" />
    </svg>
  `,

  // 157. PLAY (Video, Music, Media, Start)
  play: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="plGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#A78BFA" />
          <stop offset="100%" stop-color="#5B21B6" />
        </linearGradient>
        <filter id="plDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <circle cx="60" cy="60" r="45" fill="url(#plGrad)" filter="url(#plDrop)" />
      <polygon points="50,40 50,80 85,60" fill="#FFFFFF" />
    </svg>
  `,

  // 158. PAUSE (Wait, Stop, Hold, Media)
  pause: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="paGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="100%" stop-color="#0284C7" />
        </linearGradient>
        <filter id="paDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <circle cx="60" cy="60" r="45" fill="url(#paGrad)" filter="url(#paDrop)" />
      <rect x="40" y="40" width="12" height="40" fill="#FFFFFF" />
      <rect x="68" y="40" width="12" height="40" fill="#FFFFFF" />
    </svg>
  `,

  // 159. RECORD (Video, Audio, Capture, Broadcast)
  record: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <radialGradient id="rcRed" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FCA5A5" />
          <stop offset="100%" stop-color="#B91C1C" />
        </radialGradient>
        <filter id="rcDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="rcGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#EF4444" flood-opacity="0.6"/>
        </filter>
      </defs>
      <circle cx="60" cy="60" r="45" fill="#1E293B" filter="url(#rcDrop)" />
      <circle cx="60" cy="60" r="20" fill="url(#rcRed)" filter="url(#rcGlow)" />
    </svg>
  `,

  // 160. SPEAKER (Audio, Sound, Volume, Megaphone)
  speaker: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="spGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FCD34D" />
          <stop offset="100%" stop-color="#B45309" />
        </linearGradient>
        <filter id="spDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <polygon points="20,45 40,45 70,25 70,95 40,75 20,75" fill="url(#spGrad)" filter="url(#spDrop)" />
      <path d="M85,40 A30,30 0 0,1 85,80" fill="none" stroke="#F59E0B" stroke-width="6" stroke-linecap="round" />
      <path d="M100,25 A50,50 0 0,1 100,95" fill="none" stroke="#F59E0B" stroke-width="6" stroke-linecap="round" opacity="0.5" />
    </svg>
  `,

  // 161. VR (Virtual Reality, Metaverse, Headset, 3D)
  vr_headset: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="vrBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#CBD5E1" />
          <stop offset="100%" stop-color="#475569" />
        </linearGradient>
        <linearGradient id="vrVisor" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#1E293B" />
          <stop offset="100%" stop-color="#020617" />
        </linearGradient>
        <filter id="vrDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="20" y="35" width="80" height="50" rx="10" fill="url(#vrBody)" filter="url(#vrDrop)" />
      <rect x="25" y="45" width="70" height="30" rx="6" fill="url(#vrVisor)" />
      <path d="M25,50 C40,40 80,40 95,50" fill="none" stroke="#38BDF8" stroke-width="2" opacity="0.5" />
      <circle cx="60" cy="60" r="3" fill="#38BDF8" />
      <path d="M10,50 C10,40 20,40 20,40 M110,50 C110,40 100,40 100,40" fill="none" stroke="#475569" stroke-width="6" stroke-linecap="round" />
    </svg>
  `,

  // 162. VIDEO (Movie, Film, Cinema, Recording)
  video_film: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="vfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#475569" />
          <stop offset="100%" stop-color="#0F172A" />
        </linearGradient>
        <filter id="vfDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="20" y="20" width="80" height="80" rx="4" fill="url(#vfGrad)" filter="url(#vfDrop)" />
      <rect x="25" y="25" width="10" height="10" fill="#FFFFFF" />
      <rect x="25" y="45" width="10" height="10" fill="#FFFFFF" />
      <rect x="25" y="65" width="10" height="10" fill="#FFFFFF" />
      <rect x="25" y="85" width="10" height="10" fill="#FFFFFF" />
      <rect x="85" y="25" width="10" height="10" fill="#FFFFFF" />
      <rect x="85" y="45" width="10" height="10" fill="#FFFFFF" />
      <rect x="85" y="65" width="10" height="10" fill="#FFFFFF" />
      <rect x="85" y="85" width="10" height="10" fill="#FFFFFF" />
      <rect x="45" y="35" width="30" height="50" fill="#334155" />
    </svg>
  `,

  // 163. MICROPHONE (Podcast, Audio, Vocal, Recording)
  microphone_retro: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="mrMetal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E2E8F0" />
          <stop offset="100%" stop-color="#64748B" />
        </linearGradient>
        <filter id="mrDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="45" y="20" width="30" height="50" rx="15" fill="#1E293B" filter="url(#mrDrop)" />
      <path d="M35,45 C35,65 45,75 60,75 C75,75 85,65 85,45" fill="none" stroke="url(#mrMetal)" stroke-width="6" stroke-linecap="round" />
      <line x1="60" y1="75" x2="60" y2="95" stroke="url(#mrMetal)" stroke-width="6" />
      <line x1="45" y1="95" x2="75" y2="95" stroke="url(#mrMetal)" stroke-width="6" stroke-linecap="round" />
      <!-- Grills -->
      <line x1="45" y1="35" x2="75" y2="35" stroke="url(#mrMetal)" stroke-width="2" />
      <line x1="45" y1="45" x2="75" y2="45" stroke="url(#mrMetal)" stroke-width="2" />
      <line x1="45" y1="55" x2="75" y2="55" stroke="url(#mrMetal)" stroke-width="2" />
    </svg>
  `,

  // 164. FINGERPRINT (Biometric, Security, Identity, Scan)
  fingerprint: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="fpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="100%" stop-color="#0369A1" />
        </linearGradient>
        <filter id="fpGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#38BDF8" flood-opacity="0.6"/>
        </filter>
      </defs>
      <path d="M45,30 A15,15 0 0,1 75,30" fill="none" stroke="url(#fpGrad)" stroke-width="4" stroke-linecap="round" filter="url(#fpGlow)" />
      <path d="M35,40 A25,25 0 0,1 85,40" fill="none" stroke="url(#fpGrad)" stroke-width="4" stroke-linecap="round" filter="url(#fpGlow)" />
      <path d="M25,50 A35,35 0 0,1 95,50 M25,60 A45,45 0 0,1 95,60" fill="none" stroke="url(#fpGrad)" stroke-width="4" stroke-linecap="round" filter="url(#fpGlow)" />
      <path d="M35,70 A25,25 0 0,1 60,45 A25,25 0 0,1 85,70" fill="none" stroke="url(#fpGrad)" stroke-width="4" stroke-linecap="round" filter="url(#fpGlow)" />
      <path d="M45,80 A15,15 0 0,1 60,65 A15,15 0 0,1 75,80" fill="none" stroke="url(#fpGrad)" stroke-width="4" stroke-linecap="round" filter="url(#fpGlow)" />
      <line x1="60" y1="85" x2="60" y2="95" stroke="url(#fpGrad)" stroke-width="4" stroke-linecap="round" filter="url(#fpGlow)" />
    </svg>
  `,

  // 165. CCTV (Surveillance, Camera, Security, Monitor)
  cctv: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="ccMetal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#94A3B8" />
          <stop offset="100%" stop-color="#475569" />
        </linearGradient>
        <filter id="ccDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="30" y="25" width="20" height="10" fill="#334155" />
      <rect x="35" y="35" width="10" height="20" fill="#334155" />
      <rect x="25" y="55" width="60" height="30" rx="4" fill="url(#ccMetal)" filter="url(#ccDrop)" transform="rotate(15 55 70)" />
      <path d="M75,65 L95,65 L90,85 L70,85 Z" fill="#0F172A" transform="rotate(15 55 70)" />
      <circle cx="85" cy="75" r="4" fill="#38BDF8" transform="rotate(15 55 70)" />
      <circle cx="85" cy="75" r="2" fill="#FFFFFF" transform="rotate(15 55 70)" opacity="0.6"/>
    </svg>
  `,

  // 166. FIREWALL (Protection, Network, Guard, Block)
  firewall: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="fwBrick" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F87171" />
          <stop offset="100%" stop-color="#B91C1C" />
        </linearGradient>
        <filter id="fwDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="15" y="45" width="30" height="15" rx="2" fill="url(#fwBrick)" filter="url(#fwDrop)" />
      <rect x="50" y="45" width="30" height="15" rx="2" fill="url(#fwBrick)" filter="url(#fwDrop)" />
      <rect x="25" y="65" width="40" height="15" rx="2" fill="url(#fwBrick)" filter="url(#fwDrop)" />
      <rect x="70" y="65" width="30" height="15" rx="2" fill="url(#fwBrick)" filter="url(#fwDrop)" />
      <rect x="15" y="85" width="30" height="15" rx="2" fill="url(#fwBrick)" filter="url(#fwDrop)" />
      <rect x="50" y="85" width="40" height="15" rx="2" fill="url(#fwBrick)" filter="url(#fwDrop)" />
      <!-- Fire -->
      <path d="M60,15 C55,25 45,30 45,40 C45,50 60,50 60,50 C60,50 75,50 75,40 C75,30 65,25 60,15 Z" fill="#FDE047" />
      <path d="M60,25 C58,30 52,32 52,38 C52,44 60,45 60,45 C60,45 68,44 68,38 C68,32 62,30 60,25 Z" fill="#F97316" />
    </svg>
  `,

  // 167. PASSWORD (Authentication, Secure, Secret, Dots)
  password: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="pwGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#34D399" />
          <stop offset="100%" stop-color="#065F46" />
        </linearGradient>
        <filter id="pwDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="15" y="40" width="90" height="40" rx="8" fill="url(#pwGrad)" filter="url(#pwDrop)" />
      <circle cx="35" cy="60" r="6" fill="#1E293B" />
      <circle cx="60" cy="60" r="6" fill="#1E293B" />
      <circle cx="85" cy="60" r="6" fill="#1E293B" />
      <path d="M80,60 L90,60 M85,55 L85,65" stroke="#FFFFFF" stroke-width="2" />
    </svg>
  `,

  // 168. EYE_OFF (Privacy, Hidden, Secret, Obscured)
  eye_off: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="eoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#94A3B8" />
          <stop offset="100%" stop-color="#475569" />
        </linearGradient>
        <filter id="eoDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M15,60 C30,30 90,30 105,60 C90,90 30,90 15,60 Z" fill="url(#eoGrad)" filter="url(#eoDrop)" />
      <circle cx="60" cy="60" r="15" fill="#1E293B" />
      <circle cx="65" cy="55" r="4" fill="#FFFFFF" opacity="0.8" />
      <line x1="20" y1="20" x2="100" y2="100" stroke="#F87171" stroke-width="8" stroke-linecap="round" filter="url(#eoDrop)" />
    </svg>
  `,

  // 169. ENCRYPT (Data, Privacy, Cipher, Code)
  encrypt: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="enGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#8B5CF6" />
          <stop offset="100%" stop-color="#4C1D95" />
        </linearGradient>
        <filter id="enDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="25" y="25" width="70" height="70" rx="8" fill="url(#enGrad)" filter="url(#enDrop)" />
      <path d="M40,50 L55,50 M65,50 L80,50 M40,70 L50,70 M60,70 L80,70 M50,40 L50,80 M70,40 L70,80" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.8" />
      <circle cx="60" cy="60" r="8" fill="#FDE047" />
    </svg>
  `,

  // 170. POLICE (Guard, Security, Shield, Enforcement)
  police: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="poBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3B82F6" />
          <stop offset="100%" stop-color="#1E3A8A" />
        </linearGradient>
        <linearGradient id="poGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FEF08A" />
          <stop offset="100%" stop-color="#B45309" />
        </linearGradient>
        <filter id="poDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M60,15 L105,35 L100,75 C95,95 75,110 60,115 C45,110 25,95 20,75 L15,35 Z" fill="url(#poBlue)" filter="url(#poDrop)" />
      <polygon points="60,35 70,55 90,60 75,75 80,95 60,85 40,95 45,75 30,60 50,55" fill="url(#poGold)" filter="url(#poDrop)" />
    </svg>
  `,

  // 171. ALARM (Siren, Alert, Warning, Emergency)
  alarm: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="alRed" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FCA5A5" />
          <stop offset="100%" stop-color="#B91C1C" />
        </linearGradient>
        <filter id="alDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="alGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#EF4444" flood-opacity="0.6"/>
        </filter>
      </defs>
      <path d="M30,70 C30,30 90,30 90,70 L30,70 Z" fill="url(#alRed)" filter="url(#alDrop)" />
      <rect x="25" y="70" width="70" height="15" rx="4" fill="#1E293B" filter="url(#alDrop)" />
      <rect x="45" y="85" width="30" height="10" rx="2" fill="#475569" />
      <path d="M45,45 A20,20 0 0,1 75,45" fill="none" stroke="#FFFFFF" stroke-width="4" opacity="0.5" filter="url(#alGlow)" />
    </svg>
  `,

  // 172. NOTEBOOK (Writing, Diary, Ledger, Pages)
  notebook: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="nbCover" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10B981" />
          <stop offset="100%" stop-color="#047857" />
        </linearGradient>
        <filter id="nbDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="30" y="15" width="60" height="90" rx="4" fill="url(#nbCover)" filter="url(#nbDrop)" />
      <rect x="20" y="15" width="10" height="90" fill="#1E293B" filter="url(#nbDrop)" />
      <circle cx="25" cy="25" r="3" fill="#E2E8F0" />
      <circle cx="25" cy="45" r="3" fill="#E2E8F0" />
      <circle cx="25" cy="65" r="3" fill="#E2E8F0" />
      <circle cx="25" cy="85" r="3" fill="#E2E8F0" />
      <rect x="70" y="30" width="10" height="30" fill="#FDE047" />
    </svg>
  `,

  // 173. INBOX (Mail, Messages, Drawer, Storage)
  inbox: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="ibBox" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#60A5FA" />
          <stop offset="100%" stop-color="#1D4ED8" />
        </linearGradient>
        <filter id="ibDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <polygon points="15,40 105,40 90,85 30,85" fill="url(#ibBox)" filter="url(#ibDrop)" />
      <path d="M30,85 L45,85 L50,95 L70,95 L75,85 L90,85 L90,100 L30,100 Z" fill="#1E3A8A" />
      <rect x="35" y="25" width="50" height="25" fill="#F8FAFC" />
      <line x1="45" y1="35" x2="75" y2="35" stroke="#CBD5E1" stroke-width="4" />
    </svg>
  `,

  // 174. FLAG (Milestone, Goal, Priority, Important)
  flag: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="flRed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F87171" />
          <stop offset="100%" stop-color="#B91C1C" />
        </linearGradient>
        <filter id="flDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <line x1="30" y1="15" x2="30" y2="105" stroke="#94A3B8" stroke-width="6" stroke-linecap="round" filter="url(#flDrop)" />
      <path d="M30,20 Q60,10 95,25 Q60,40 30,50 Z" fill="url(#flRed)" filter="url(#flDrop)" />
      <circle cx="30" cy="15" r="5" fill="#F59E0B" />
    </svg>
  `,

  // 175. ERASER (Clear, Delete, Remove, Edit)
  eraser: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="erPink" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F472B6" />
          <stop offset="100%" stop-color="#BE185D" />
        </linearGradient>
        <linearGradient id="erBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#60A5FA" />
          <stop offset="100%" stop-color="#1E40AF" />
        </linearGradient>
        <filter id="erDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <polygon points="20,80 50,110 100,60 70,30" fill="url(#erPink)" filter="url(#erDrop)" />
      <polygon points="70,30 100,60 100,50 70,20" fill="url(#erBlue)" filter="url(#erDrop)" />
      <polygon points="50,110 100,60 100,50 50,100" fill="#0F172A" opacity="0.2" />
    </svg>
  `,

  // 176. FOLDER_OPEN (Directory, Explore, Documents)
  folder_open: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="foBack" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#F59E0B" />
          <stop offset="100%" stop-color="#92400E" />
        </linearGradient>
        <linearGradient id="foFront" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE047" />
          <stop offset="100%" stop-color="#B45309" />
        </linearGradient>
        <filter id="foDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M15,35 L45,35 L55,45 L105,45 L105,95 L15,95 Z" fill="url(#foBack)" filter="url(#foDrop)" />
      <rect x="25" y="45" width="70" height="40" fill="#F8FAFC" />
      <polygon points="10,55 110,55 95,95 25,95" fill="url(#foFront)" filter="url(#foDrop)" />
    </svg>
  `,

  // 177. PIN (Location, Map, Place, Marker)
  pin: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="pnRed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F87171" />
          <stop offset="100%" stop-color="#B91C1C" />
        </linearGradient>
        <filter id="pnDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M60,15 C40,15 25,30 25,50 C25,75 60,110 60,110 C60,110 95,75 95,50 C95,30 80,15 60,15 Z" fill="url(#pnRed)" filter="url(#pnDrop)" />
      <circle cx="60" cy="45" r="15" fill="#FFFFFF" />
      <ellipse cx="60" cy="115" rx="15" ry="3" fill="#000000" opacity="0.3" filter="blur(2px)" />
    </svg>
  `,

  // 178. SIGNPOST (Direction, Choices, Options, Route)
  signpost: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="spWood" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#B45309" />
          <stop offset="100%" stop-color="#78350F" />
        </linearGradient>
        <filter id="spDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="55" y="15" width="10" height="95" fill="#475569" filter="url(#spDrop)" />
      <path d="M20,25 L75,25 L90,35 L75,45 L20,45 Z" fill="url(#spWood)" filter="url(#spDrop)" />
      <path d="M100,60 L45,60 L30,70 L45,80 L100,80 Z" fill="url(#spWood)" filter="url(#spDrop)" />
      <circle cx="60" cy="35" r="3" fill="#1E293B" />
      <circle cx="60" cy="70" r="3" fill="#1E293B" />
    </svg>
  `,

  // 179. TASK (Checklist, Done, Productivity, ToDo)
  task_list: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="tlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F1F5F9" />
          <stop offset="100%" stop-color="#94A3B8" />
        </linearGradient>
        <filter id="tlDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="25" y="15" width="70" height="90" rx="6" fill="url(#tlGrad)" filter="url(#tlDrop)" />
      <rect x="35" y="30" width="12" height="12" rx="2" fill="#38BDF8" />
      <line x1="55" y1="36" x2="85" y2="36" stroke="#475569" stroke-width="4" stroke-linecap="round" />
      <rect x="35" y="55" width="12" height="12" rx="2" fill="#34D399" />
      <path d="M37,60 L40,63 L45,57" fill="none" stroke="#FFFFFF" stroke-width="2" />
      <line x1="55" y1="61" x2="80" y2="61" stroke="#475569" stroke-width="4" stroke-linecap="round" />
      <rect x="35" y="80" width="12" height="12" rx="2" fill="#CBD5E1" />
      <line x1="55" y1="86" x2="70" y2="86" stroke="#475569" stroke-width="4" stroke-linecap="round" />
    </svg>
  `,

  // 180. CART (Shopping, E-Commerce, Checkout, Retail)
  shopping_cart: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="ctBasket" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3B82F6" />
          <stop offset="100%" stop-color="#1E3A8A" />
        </linearGradient>
        <filter id="ctDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M15,20 L30,20 L45,75 L95,75 L105,35 L40,35" fill="none" stroke="url(#ctBasket)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" filter="url(#ctDrop)" />
      <line x1="45" y1="55" x2="98" y2="55" stroke="url(#ctBasket)" stroke-width="4" />
      <circle cx="55" cy="95" r="8" fill="#1E293B" />
      <circle cx="85" cy="95" r="8" fill="#1E293B" />
    </svg>
  `,

  // 181. STORE (Retail, Shop, Market, Business)
  store: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="stAwning1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#EF4444" />
          <stop offset="100%" stop-color="#991B1B" />
        </linearGradient>
        <linearGradient id="stAwning2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="100%" stop-color="#94A3B8" />
        </linearGradient>
        <filter id="stDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="20" y="55" width="80" height="50" fill="#E2E8F0" />
      <rect x="40" y="65" width="40" height="25" fill="#38BDF8" opacity="0.3" />
      <!-- Awning -->
      <path d="M15,35 L105,35 L100,55 L20,55 Z" fill="url(#stAwning1)" filter="url(#stDrop)" />
      <polygon points="35,35 50,35 45,55 35,55" fill="url(#stAwning2)" />
      <polygon points="70,35 85,35 80,55 70,55" fill="url(#stAwning2)" />
      <!-- Sign -->
      <rect x="35" y="15" width="50" height="15" rx="2" fill="#1E293B" />
      <circle cx="60" cy="22.5" r="3" fill="#FDE047" />
    </svg>
  `,

  // 182. TAG (Price, Label, Metadata, Discount)
  price_tag: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="tgRed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F43F5E" />
          <stop offset="100%" stop-color="#BE123C" />
        </linearGradient>
        <filter id="tgDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M40,20 L80,20 L105,65 L65,105 L20,60 Z" fill="url(#tgRed)" filter="url(#tgDrop)" />
      <circle cx="45" cy="45" r="6" fill="#F8FAFC" />
      <circle cx="45" cy="45" r="4" fill="#0F172A" />
      <line x1="75" y1="50" x2="50" y2="75" stroke="#FDA4AF" stroke-width="4" stroke-linecap="round" />
      <circle cx="60" cy="50" r="3" fill="#FDA4AF" />
      <circle cx="65" cy="70" r="3" fill="#FDA4AF" />
    </svg>
  `,

  // 183. BOX (Package, Shipping, Delivery, Inventory)
  package_box: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="bxTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE68A" />
          <stop offset="100%" stop-color="#D97706" />
        </linearGradient>
        <linearGradient id="bxSide" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#D97706" />
          <stop offset="100%" stop-color="#92400E" />
        </linearGradient>
        <filter id="bxDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <polygon points="60,20 100,40 60,60 20,40" fill="url(#bxTop)" filter="url(#bxDrop)" />
      <polygon points="20,40 60,60 60,100 20,80" fill="url(#bxSide)" filter="url(#bxDrop)" />
      <polygon points="60,60 100,40 100,80 60,100" fill="#B45309" filter="url(#bxDrop)" />
      <line x1="60" y1="60" x2="60" y2="100" stroke="#78350F" stroke-width="2" />
      <!-- Tape -->
      <polygon points="50,25 70,35 60,40 40,30" fill="#FEF3C7" opacity="0.6" />
      <polygon points="60,60 70,65 70,85 60,80" fill="#FEF3C7" opacity="0.6" />
    </svg>
  `,

  // 184. RIBBON (Award, Badge, Recognition, Certification)
  ribbon: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="rbRed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#EF4444" />
          <stop offset="100%" stop-color="#7F1D1D" />
        </linearGradient>
        <linearGradient id="rbGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE047" />
          <stop offset="100%" stop-color="#B45309" />
        </linearGradient>
        <filter id="rbDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M45,60 L30,105 L50,95 L60,105 L55,60 Z" fill="url(#rbRed)" filter="url(#rbDrop)" />
      <path d="M75,60 L90,105 L70,95 L60,105 L65,60 Z" fill="url(#rbRed)" filter="url(#rbDrop)" />
      <circle cx="60" cy="45" r="25" fill="url(#rbGold)" filter="url(#rbDrop)" />
      <circle cx="60" cy="45" r="18" fill="none" stroke="#FEF08A" stroke-width="2" />
      <circle cx="60" cy="45" r="12" fill="#FEF08A" />
    </svg>
  `,

  // 185. BASKET (Shopping, Groceries, E-Commerce)
  basket: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="bsWeave" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F59E0B" />
          <stop offset="100%" stop-color="#92400E" />
        </linearGradient>
        <filter id="bsDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M25,45 L95,45 L85,95 C85,100 80,105 75,105 L45,105 C40,105 35,100 35,95 Z" fill="url(#bsWeave)" filter="url(#bsDrop)" />
      <path d="M40,45 C40,20 80,20 80,45" fill="none" stroke="#B45309" stroke-width="8" stroke-linecap="round" />
      <!-- Weave details -->
      <line x1="33" y1="65" x2="87" y2="65" stroke="#78350F" stroke-width="4" />
      <line x1="35" y1="85" x2="85" y2="85" stroke="#78350F" stroke-width="4" />
      <line x1="45" y1="45" x2="50" y2="105" stroke="#78350F" stroke-width="4" />
      <line x1="75" y1="45" x2="70" y2="105" stroke="#78350F" stroke-width="4" />
    </svg>
  `,

  // 186. DISCOUNT (Sale, Offer, Price Drop, Deal)
  discount: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="dcRed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#EF4444" />
          <stop offset="100%" stop-color="#7F1D1D" />
        </linearGradient>
        <filter id="dcDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <circle cx="60" cy="60" r="45" fill="url(#dcRed)" filter="url(#dcDrop)" />
      <path d="M35,85 L85,35" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" />
      <circle cx="45" cy="45" r="8" fill="#FFFFFF" />
      <circle cx="75" cy="75" r="8" fill="#FFFFFF" />
    </svg>
  `,

  // 187. FLASK (Science, Chemistry, Experiment, Lab)
  flask: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="fkGlass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E0F2FE" />
          <stop offset="100%" stop-color="#93C5FD" />
        </linearGradient>
        <linearGradient id="fkLiquid" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#34D399" />
          <stop offset="100%" stop-color="#059669" />
        </linearGradient>
        <filter id="fkDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="fkGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#34D399" flood-opacity="0.6"/>
        </filter>
      </defs>
      <path d="M50,20 L70,20 L70,45 L95,95 C100,105 90,110 80,110 L40,110 C30,110 20,105 25,95 L50,45 Z" fill="url(#fkGlass)" filter="url(#fkDrop)" opacity="0.6" />
      <path d="M35,75 L85,75 L90,85 C95,95 85,100 80,100 L40,100 C30,100 25,95 30,85 Z" fill="url(#fkLiquid)" filter="url(#fkGlow)" />
      <line x1="45" y1="20" x2="75" y2="20" stroke="#94A3B8" stroke-width="4" stroke-linecap="round" />
      <circle cx="60" cy="85" r="4" fill="#FFFFFF" opacity="0.8" />
      <circle cx="50" cy="90" r="2" fill="#FFFFFF" opacity="0.8" />
      <circle cx="70" cy="80" r="3" fill="#FFFFFF" opacity="0.8" />
    </svg>
  `,

  // 188. BRAIN (Intelligence, AI, Logic, Mind)
  brain: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="brPink" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F472B6" />
          <stop offset="100%" stop-color="#BE185D" />
        </linearGradient>
        <filter id="brDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="brGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#F472B6" flood-opacity="0.6"/>
        </filter>
      </defs>
      <path d="M60,15 C40,15 20,30 20,50 C20,60 25,70 35,80 C30,90 40,100 50,95 C55,100 65,100 70,95 C80,100 90,90 85,80 C95,70 100,60 100,50 C100,30 80,15 60,15 Z" fill="url(#brPink)" filter="url(#brDrop)" />
      <path d="M60,15 L60,95" stroke="#9D174D" stroke-width="4" />
      <path d="M35,35 Q45,30 55,45 T35,65" fill="none" stroke="#FCE7F3" stroke-width="4" stroke-linecap="round" />
      <path d="M85,35 Q75,30 65,45 T85,65" fill="none" stroke="#FCE7F3" stroke-width="4" stroke-linecap="round" />
      <circle cx="45" cy="45" r="4" fill="#FBCFE8" filter="url(#brGlow)" />
      <circle cx="75" cy="45" r="4" fill="#FBCFE8" filter="url(#brGlow)" />
    </svg>
  `,

  // 189. DNA (Genetics, Core, Biology, Science)
  dna: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="dnBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="100%" stop-color="#0369A1" />
        </linearGradient>
        <linearGradient id="dnPurple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#C084FC" />
          <stop offset="100%" stop-color="#7E22CE" />
        </linearGradient>
        <filter id="dnDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M40,20 Q60,40 80,60 T40,100" fill="none" stroke="url(#dnBlue)" stroke-width="8" stroke-linecap="round" filter="url(#dnDrop)" />
      <path d="M80,20 Q60,40 40,60 T80,100" fill="none" stroke="url(#dnPurple)" stroke-width="8" stroke-linecap="round" filter="url(#dnDrop)" />
      <!-- Bonds -->
      <line x1="48" y1="35" x2="72" y2="35" stroke="#94A3B8" stroke-width="4" />
      <line x1="60" y1="60" x2="60" y2="60" stroke="#94A3B8" stroke-width="4" />
      <line x1="48" y1="85" x2="72" y2="85" stroke="#94A3B8" stroke-width="4" />
      <circle cx="40" cy="20" r="5" fill="#38BDF8" />
      <circle cx="80" cy="20" r="5" fill="#C084FC" />
      <circle cx="40" cy="100" r="5" fill="#0369A1" />
      <circle cx="80" cy="100" r="5" fill="#7E22CE" />
    </svg>
  `,

  // 190. GRADUATION (Education, Learning, Achievement, Degree)
  graduation_cap: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="grCap" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#1E293B" />
          <stop offset="100%" stop-color="#020617" />
        </linearGradient>
        <filter id="grDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <polygon points="60,25 100,45 60,65 20,45" fill="url(#grCap)" filter="url(#grDrop)" />
      <polygon points="40,55 40,85 60,95 80,85 80,55 60,65" fill="#334155" filter="url(#grDrop)" />
      <!-- Tassel -->
      <circle cx="60" cy="45" r="4" fill="#F59E0B" />
      <path d="M60,45 Q75,55 85,75" fill="none" stroke="#FCD34D" stroke-width="3" />
      <polygon points="82,75 88,75 90,95 80,95" fill="#B45309" />
    </svg>
  `,

  // 191. LIGHTBULB (Idea, Innovation, Vision, Startup)
  lightbulb: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <radialGradient id="lbGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FEF08A" />
          <stop offset="100%" stop-color="#F59E0B" />
        </radialGradient>
        <linearGradient id="lbBase" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#94A3B8" />
          <stop offset="100%" stop-color="#475569" />
        </linearGradient>
        <filter id="lbDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="lbLight" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#FDE047" flood-opacity="0.8"/>
        </filter>
      </defs>
      <path d="M40,75 C25,60 25,25 60,25 C95,25 95,60 80,75 L75,90 L45,90 Z" fill="url(#lbGlow)" filter="url(#lbLight)" />
      <rect x="45" y="90" width="30" height="15" rx="2" fill="url(#lbBase)" filter="url(#lbDrop)" />
      <path d="M50,105 L70,105 L65,112 L55,112 Z" fill="#1E293B" />
      <!-- Filament -->
      <path d="M50,75 L55,55 L65,55 L70,75" fill="none" stroke="#B45309" stroke-width="4" stroke-linecap="round" />
      <circle cx="60" cy="50" r="3" fill="#FFFBEB" />
    </svg>
  `,

  // 192. FILTER (Sort, Organize, Search, Refine)
  filter: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="flMetal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="100%" stop-color="#0369A1" />
        </linearGradient>
        <filter id="flDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <polygon points="15,30 105,30 75,65 75,100 45,110 45,65" fill="url(#flMetal)" filter="url(#flDrop)" />
      <line x1="25" y1="40" x2="95" y2="40" stroke="#BAE6FD" stroke-width="2" opacity="0.5" />
      <line x1="35" y1="50" x2="85" y2="50" stroke="#BAE6FD" stroke-width="2" opacity="0.5" />
    </svg>
  `,

  // 193. SETTINGS (Gears, Configuration, Options, Control)
  settings_gear: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="sgMetal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#94A3B8" />
          <stop offset="100%" stop-color="#334155" />
        </linearGradient>
        <filter id="sgDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M70,20 L75,32 A30,30 0 0,1 88,45 L100,40 L105,55 L93,60 A30,30 0 0,1 93,70 L105,75 L100,90 L88,85 A30,30 0 0,1 75,98 L70,110 L50,110 L45,98 A30,30 0 0,1 32,85 L20,90 L15,75 L27,70 A30,30 0 0,1 27,60 L15,55 L20,40 L32,45 A30,30 0 0,1 45,32 L50,20 Z" fill="url(#sgMetal)" filter="url(#sgDrop)" />
      <circle cx="60" cy="65" r="15" fill="#1E293B" />
      <circle cx="60" cy="65" r="8" fill="#F1F5F9" />
    </svg>
  `,

  // 194. SHARE (Network, Forward, Social, Distribute)
  share: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="shBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3B82F6" />
          <stop offset="100%" stop-color="#1E3A8A" />
        </linearGradient>
        <filter id="shDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <line x1="45" y1="45" x2="75" y2="30" stroke="url(#shBlue)" stroke-width="8" stroke-linecap="round" filter="url(#shDrop)" />
      <line x1="45" y1="75" x2="75" y2="90" stroke="url(#shBlue)" stroke-width="8" stroke-linecap="round" filter="url(#shDrop)" />
      <circle cx="35" cy="60" r="15" fill="#38BDF8" filter="url(#shDrop)" />
      <circle cx="85" cy="25" r="15" fill="#10B981" filter="url(#shDrop)" />
      <circle cx="85" cy="95" r="15" fill="#F59E0B" filter="url(#shDrop)" />
      <circle cx="35" cy="60" r="5" fill="#FFFFFF" />
      <circle cx="85" cy="25" r="5" fill="#FFFFFF" />
      <circle cx="85" cy="95" r="5" fill="#FFFFFF" />
    </svg>
  `,

  // 195. DOWNLOAD (Save, Get, Fetch, Install)
  download: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="dlGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#10B981" />
          <stop offset="100%" stop-color="#065F46" />
        </linearGradient>
        <filter id="dlDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M40,55 L60,80 L80,55" fill="none" stroke="url(#dlGrad)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" filter="url(#dlDrop)" />
      <line x1="60" y1="20" x2="60" y2="80" stroke="url(#dlGrad)" stroke-width="12" stroke-linecap="round" filter="url(#dlDrop)" />
      <rect x="30" y="95" width="60" height="10" rx="2" fill="url(#dlGrad)" filter="url(#dlDrop)" />
    </svg>
  `,

  // 196. LINK (Chain, URL, Connection, Connect)
  link: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="lnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#94A3B8" />
          <stop offset="100%" stop-color="#475569" />
        </linearGradient>
        <filter id="lnDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M45,45 A20,20 0 0,0 45,75 L55,75" fill="none" stroke="url(#lnGrad)" stroke-width="12" stroke-linecap="round" filter="url(#lnDrop)" />
      <path d="M75,75 A20,20 0 0,0 75,45 L65,45" fill="none" stroke="url(#lnGrad)" stroke-width="12" stroke-linecap="round" filter="url(#lnDrop)" />
      <line x1="45" y1="60" x2="75" y2="60" stroke="#38BDF8" stroke-width="8" stroke-linecap="round" filter="url(#lnDrop)" />
    </svg>
  `,

  // 197. ZOOM_IN (Magnify, Search, Focus, Enlarge)
  zoom_in: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="ziLens" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E0F2FE" />
          <stop offset="100%" stop-color="#7DD3FC" />
        </linearGradient>
        <linearGradient id="ziFrame" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="100%" stop-color="#0284C7" />
        </linearGradient>
        <filter id="ziDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <line x1="75" y1="75" x2="100" y2="100" stroke="#1E293B" stroke-width="12" stroke-linecap="round" filter="url(#ziDrop)" />
      <circle cx="50" cy="50" r="35" fill="url(#ziLens)" stroke="url(#ziFrame)" stroke-width="8" filter="url(#ziDrop)" />
      <path d="M35,50 L65,50 M50,35 L50,65" stroke="#0284C7" stroke-width="6" stroke-linecap="round" />
      <path d="M35,35 A20,20 0 0,1 65,35" fill="none" stroke="#FFFFFF" stroke-width="4" opacity="0.5" />
    </svg>
  `,

  // 198. ZOOM_OUT (Minify, Distance, Overview, Shrink)
  zoom_out: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="zoLens" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E0F2FE" />
          <stop offset="100%" stop-color="#7DD3FC" />
        </linearGradient>
        <linearGradient id="zoFrame" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F472B6" />
          <stop offset="100%" stop-color="#BE185D" />
        </linearGradient>
        <filter id="zoDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <line x1="75" y1="75" x2="100" y2="100" stroke="#1E293B" stroke-width="12" stroke-linecap="round" filter="url(#zoDrop)" />
      <circle cx="50" cy="50" r="35" fill="url(#zoLens)" stroke="url(#zoFrame)" stroke-width="8" filter="url(#zoDrop)" />
      <line x1="35" y1="50" x2="65" y2="50" stroke="#BE185D" stroke-width="6" stroke-linecap="round" />
      <path d="M35,35 A20,20 0 0,1 65,35" fill="none" stroke="#FFFFFF" stroke-width="4" opacity="0.5" />
    </svg>
  `,

  // 199. MENU (Hamburger, Navigation, List, Options)
  hamburger_menu: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="hmGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#8B5CF6" />
          <stop offset="100%" stop-color="#4C1D95" />
        </linearGradient>
        <filter id="hmDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="20" y="30" width="80" height="12" rx="6" fill="url(#hmGrad)" filter="url(#hmDrop)" />
      <rect x="20" y="55" width="80" height="12" rx="6" fill="url(#hmGrad)" filter="url(#hmDrop)" />
      <rect x="20" y="80" width="80" height="12" rx="6" fill="url(#hmGrad)" filter="url(#hmDrop)" />
      <circle cx="30" cy="36" r="3" fill="#FFFFFF" opacity="0.5" />
      <circle cx="30" cy="61" r="3" fill="#FFFFFF" opacity="0.5" />
      <circle cx="30" cy="86" r="3" fill="#FFFFFF" opacity="0.5" />
    </svg>
  `,

  // 200. LAYOUT (Grid, Dashboard, Panels, Structure)
  layout: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="lyBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#60A5FA" />
          <stop offset="100%" stop-color="#1E40AF" />
        </linearGradient>
        <linearGradient id="lyGray" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#94A3B8" />
          <stop offset="100%" stop-color="#475569" />
        </linearGradient>
        <filter id="lyDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="15" y="15" width="90" height="25" rx="4" fill="url(#lyGray)" filter="url(#lyDrop)" />
      <rect x="15" y="50" width="25" height="55" rx="4" fill="url(#lyGray)" filter="url(#lyDrop)" />
      <rect x="50" y="50" width="55" height="55" rx="4" fill="url(#lyBlue)" filter="url(#lyDrop)" />
      <circle cx="75" cy="75" r="8" fill="#FDE047" />
    </svg>
  `,

  // 201. CURSOR (Pointer, Select, Click, Arrow)
  cursor: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="crWhite" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="100%" stop-color="#CBD5E1" />
        </linearGradient>
        <filter id="crDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.4"/>
        </filter>
      </defs>
      <polygon points="30,20 85,60 55,65 65,95 50,100 40,70 20,80" fill="url(#crWhite)" filter="url(#crDrop)" stroke="#0F172A" stroke-width="4" stroke-linejoin="round" />
    </svg>
  `,

  // 202. PILL (Medicine, Drug, Pharmacy, Health)
  pill: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="piBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="100%" stop-color="#0284C7" />
        </linearGradient>
        <linearGradient id="piWhite" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="100%" stop-color="#E2E8F0" />
        </linearGradient>
        <filter id="piDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M20,60 A30,30 0 0,1 60,20 L100,60 A30,30 0 0,1 60,100 Z" fill="url(#piWhite)" filter="url(#piDrop)" />
      <path d="M20,60 A30,30 0 0,0 60,100 L100,60 A30,30 0 0,0 60,20 Z" fill="url(#piBlue)" filter="url(#piDrop)" />
      <line x1="20" y1="60" x2="100" y2="60" stroke="#0F172A" stroke-width="4" opacity="0.2" />
      <circle cx="80" cy="40" r="4" fill="#FFFFFF" opacity="0.6" />
    </svg>
  `,

  // 203. STETHOSCOPE (Doctor, Medical, Checkup, Diagnosis)
  stethoscope: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="stMetal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#CBD5E1" />
          <stop offset="100%" stop-color="#64748B" />
        </linearGradient>
        <filter id="stDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M30,20 C30,70 90,70 90,20" fill="none" stroke="url(#stMetal)" stroke-width="8" stroke-linecap="round" filter="url(#stDrop)" />
      <path d="M60,65 L60,100 C60,105 50,110 40,110 C30,110 20,105 20,95 L20,80" fill="none" stroke="#1E293B" stroke-width="8" stroke-linecap="round" filter="url(#stDrop)" />
      <circle cx="20" cy="80" r="12" fill="url(#stMetal)" filter="url(#stDrop)" />
      <circle cx="20" cy="80" r="6" fill="#3B82F6" />
      <circle cx="30" cy="20" r="5" fill="#1E293B" />
      <circle cx="90" cy="20" r="5" fill="#1E293B" />
    </svg>
  `,

  // 204. DUMBBELL (Fitness, Gym, Workout, Strength)
  dumbbell: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="dbWeight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1E293B" />
          <stop offset="100%" stop-color="#020617" />
        </linearGradient>
        <linearGradient id="dbBar" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#94A3B8" />
          <stop offset="100%" stop-color="#475569" />
        </linearGradient>
        <filter id="dbDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="25" y="55" width="70" height="10" fill="url(#dbBar)" filter="url(#dbDrop)" />
      <rect x="15" y="30" width="15" height="60" rx="4" fill="url(#dbWeight)" filter="url(#dbDrop)" />
      <rect x="90" y="30" width="15" height="60" rx="4" fill="url(#dbWeight)" filter="url(#dbDrop)" />
      <rect x="5" y="40" width="10" height="40" rx="2" fill="url(#dbWeight)" filter="url(#dbDrop)" />
      <rect x="105" y="40" width="10" height="40" rx="2" fill="url(#dbWeight)" filter="url(#dbDrop)" />
      <line x1="22" y1="35" x2="22" y2="85" stroke="#FFFFFF" stroke-width="2" opacity="0.2" />
      <line x1="97" y1="35" x2="97" y2="85" stroke="#FFFFFF" stroke-width="2" opacity="0.2" />
    </svg>
  `,

  // 205. APPLE (Food, Health, Fruit, Nutrition)
  apple: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <radialGradient id="apRed" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#FCA5A5" />
          <stop offset="100%" stop-color="#991B1B" />
        </radialGradient>
        <filter id="apDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M60,105 C85,105 100,85 100,55 C100,35 85,30 70,35 C65,37 60,40 60,40 C60,40 55,37 50,35 C35,30 20,35 20,55 C20,85 35,105 60,105 Z" fill="url(#apRed)" filter="url(#apDrop)" />
      <path d="M60,35 C65,25 75,20 75,20" fill="none" stroke="#166534" stroke-width="6" stroke-linecap="round" />
      <path d="M75,20 C85,25 80,35 70,35 C60,30 65,20 75,20 Z" fill="#22C55E" filter="url(#apDrop)" />
      <circle cx="45" cy="45" r="8" fill="#FFFFFF" opacity="0.4" />
    </svg>
  `,

  // 206. BED (Sleep, Rest, Hotel, Furniture)
  bed: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="bdWood" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#B45309" />
          <stop offset="100%" stop-color="#78350F" />
        </linearGradient>
        <linearGradient id="bdMattress" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="100%" stop-color="#CBD5E1" />
        </linearGradient>
        <filter id="bdDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="15" y="35" width="10" height="70" rx="2" fill="url(#bdWood)" filter="url(#bdDrop)" />
      <rect x="95" y="65" width="10" height="40" rx="2" fill="url(#bdWood)" filter="url(#bdDrop)" />
      <rect x="25" y="70" width="70" height="15" fill="url(#bdWood)" />
      <rect x="25" y="55" width="70" height="15" rx="4" fill="url(#bdMattress)" filter="url(#bdDrop)" />
      <rect x="30" y="45" width="25" height="10" rx="5" fill="#BAE6FD" />
      <rect x="65" y="45" width="25" height="10" rx="5" fill="#BAE6FD" />
    </svg>
  `,

  // 207. PLUG (Power, Connectivity, Charging, Hardware)
  plug: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="pgBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#475569" />
          <stop offset="100%" stop-color="#1E293B" />
        </linearGradient>
        <filter id="pgDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect x="40" y="50" width="40" height="40" rx="6" fill="url(#pgBody)" filter="url(#pgDrop)" />
      <rect x="45" y="25" width="10" height="25" fill="#CBD5E1" filter="url(#pgDrop)" />
      <rect x="65" y="25" width="10" height="25" fill="#CBD5E1" filter="url(#pgDrop)" />
      <path d="M60,90 L60,110" stroke="#1E293B" stroke-width="10" stroke-linecap="round" filter="url(#pgDrop)" />
      <circle cx="50" cy="35" r="2" fill="#0F172A" />
      <circle cx="70" cy="35" r="2" fill="#0F172A" />
    </svg>
  `,

  // 208. ROUTER (Network, Internet, Connectivity, Wifi)
  router: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="rtBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1E293B" />
          <stop offset="100%" stop-color="#020617" />
        </linearGradient>
        <filter id="rtDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.4"/>
        </filter>
        <filter id="rtGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#38BDF8" flood-opacity="0.8"/>
        </filter>
      </defs>
      <!-- Antennas -->
      <path d="M30,55 L20,20 M60,55 L60,15 M90,55 L100,20" stroke="#64748B" stroke-width="6" stroke-linecap="round" filter="url(#rtDrop)" />
      <circle cx="20" cy="20" r="3" fill="#38BDF8" filter="url(#rtGlow)" />
      <circle cx="60" cy="15" r="3" fill="#38BDF8" filter="url(#rtGlow)" />
      <circle cx="100" cy="20" r="3" fill="#38BDF8" filter="url(#rtGlow)" />
      <!-- Body -->
      <rect x="15" y="55" width="90" height="35" rx="6" fill="url(#rtBody)" filter="url(#rtDrop)" />
      <rect x="15" y="85" width="90" height="15" fill="#0F172A" />
      <!-- Lights -->
      <circle cx="25" cy="70" r="3" fill="#34D399" />
      <circle cx="35" cy="70" r="3" fill="#34D399" />
      <circle cx="45" cy="70" r="3" fill="#34D399" filter="url(#rtGlow)" />
      <circle cx="55" cy="70" r="3" fill="#EF4444" />
    </svg>
  `,


  "health_probe": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="hpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#10B981" />
                <stop offset="100%" stop-color="#047857" />
              </linearGradient>
              <filter id="hpDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <circle cx="60" cy="60" r="45" fill="none" stroke="url(#hpGrad)" stroke-width="8" filter="url(#hpDrop)" />
            <path d="M40,60 L55,75 L80,45" fill="none" stroke="url(#hpGrad)" stroke-width="10" stroke-linecap="round" />
          </svg>
  `,

  "messaging_queue": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="mqGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#8B5CF6" />
                <stop offset="100%" stop-color="#4C1D95" />
              </linearGradient>
              <filter id="mqDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <rect x="10" y="40" width="100" height="40" rx="6" fill="none" stroke="url(#mqGrad)" stroke-width="8" />
            <rect x="20" y="45" width="20" height="30" rx="4" fill="url(#mqGrad)" filter="url(#mqDrop)" />
            <rect x="50" y="45" width="20" height="30" rx="4" fill="url(#mqGrad)" filter="url(#mqDrop)" />
          </svg>
  `,

  "kubernetes_ingress": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="kiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#3B82F6" />
                <stop offset="100%" stop-color="#1E3A8A" />
              </linearGradient>
              <filter id="kiDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <path d="M60,10 L105,50 L60,90 L15,50 Z" fill="url(#kiGrad)" filter="url(#kiDrop)" />
            <path d="M40,50 L80,50 M60,30 L60,70" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" />
          </svg>
  `,

  "secret_rotation": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="srGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#F59E0B" />
                <stop offset="100%" stop-color="#92400E" />
              </linearGradient>
              <filter id="srDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <path d="M60,20 A40,40 0 1,1 20,60" fill="none" stroke="url(#srGrad)" stroke-width="10" stroke-linecap="round" filter="url(#srDrop)" />
            <polygon points="60,10 60,30 80,20" fill="url(#srGrad)" />
            <circle cx="60" cy="60" r="12" fill="#FFFFFF" />
          </svg>
  `,

  "dynamic_config": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="dcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#EF4444" />
                  <stop offset="100%" stop-color="#991B1B" />
                </linearGradient>
                <filter id="dcDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
                </filter>
              </defs>
              <rect x="30" y="30" width="60" height="60" rx="8" fill="url(#dcGrad)" filter="url(#dcDrop)" />
              <path d="M45,45 L75,45 M45,60 L75,60 M45,75 L75,75" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" />
            </svg>
  `,

  "sharding": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="shGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#8B5CF6" />
                  <stop offset="100%" stop-color="#4C1D95" />
                </linearGradient>
                <filter id="shDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
                </filter>
              </defs>
              <rect x="20" y="20" width="35" height="35" rx="4" fill="url(#shGrad)" filter="url(#shDrop)" />
              <rect x="65" y="20" width="35" height="35" rx="4" fill="url(#shGrad)" filter="url(#shDrop)" />
              <rect x="20" y="65" width="35" height="35" rx="4" fill="url(#shGrad)" filter="url(#shDrop)" />
              <rect x="65" y="65" width="35" height="35" rx="4" fill="url(#shGrad)" filter="url(#shDrop)" />
              <path d="M55,37 L65,37 M55,83 L65,83 M37,55 L37,65 M83,55 L83,65" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" />
            </svg>
  `,

  "leader_election": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="leGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#F59E0B" />
                  <stop offset="100%" stop-color="#92400E" />
                </linearGradient>
                <filter id="leDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
                </filter>
              </defs>
              <circle cx="60" cy="60" r="40" fill="none" stroke="url(#leGrad)" stroke-width="8" filter="url(#leDrop)" />
              <path d="M60,20 L60,100 M20,60 L100,60 M40,40 L80,80 M40,80 L80,40" stroke="url(#leGrad)" stroke-width="6" stroke-linecap="round" />
              <circle cx="60" cy="60" r="15" fill="#FFFFFF" />
              <path d="M50,55 L70,55 L60,75 Z" fill="#F59E0B" />
            </svg>
  `,

  "service_mesh_mtls": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="mtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#10B981" />
                  <stop offset="100%" stop-color="#047857" />
                </linearGradient>
                <filter id="mtDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
                </filter>
              </defs>
              <circle cx="40" cy="60" r="20" fill="url(#mtGrad)" filter="url(#mtDrop)" />
              <circle cx="80" cy="60" r="20" fill="url(#mtGrad)" filter="url(#mtDrop)" />
              <path d="M60,50 L60,70" stroke="#10B981" stroke-width="8" stroke-linecap="round" />
            </svg>
  `,

  "quota_management": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="qmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#3B82F6" />
                  <stop offset="100%" stop-color="#1E3A8A" />
                </linearGradient>
                <filter id="qmDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
                </filter>
              </defs>
              <path d="M20,100 L20,20 L100,20 L100,100 Z" fill="none" stroke="#E2E8F0" stroke-width="8" />
              <rect x="20" y="60" width="80" height="40" fill="url(#qmGrad)" filter="url(#qmDrop)" />
              <line x1="20" y1="60" x2="100" y2="60" stroke="#FFFFFF" stroke-width="4" stroke-dasharray="4 4" />
            </svg>
  `,

  "system_telemetry": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="stGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#EF4444" />
                  <stop offset="100%" stop-color="#991B1B" />
                </linearGradient>
                <filter id="stDrop" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
                </filter>
              </defs>
              <circle cx="60" cy="60" r="50" fill="none" stroke="url(#stGrad)" stroke-width="8" filter="url(#stDrop)" />
              <path d="M20,60 L40,60 L50,30 L70,90 L80,60 L100,60" fill="none" stroke="url(#stGrad)" stroke-width="6" stroke-linecap="round" />
            </svg>
  `,

  "cluster_sharding": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="csGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#6366F1" />
                <stop offset="100%" stop-color="#4338CA" />
              </linearGradient>
              <filter id="csDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <rect x="25" y="25" width="30" height="30" rx="4" fill="url(#csGrad)" filter="url(#csDrop)" />
            <rect x="65" y="25" width="30" height="30" rx="4" fill="url(#csGrad)" filter="url(#csDrop)" />
            <rect x="25" y="65" width="30" height="30" rx="4" fill="url(#csGrad)" filter="url(#csDrop)" />
            <rect x="65" y="65" width="30" height="30" rx="4" fill="url(#csGrad)" filter="url(#csDrop)" />
            <path d="M55,40 L65,40 M55,80 L65,80 M40,55 L40,65 M80,55 L80,65" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" />
          </svg>
  `,

  "leader_election_consensus": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="lecGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#F59E0B" />
                <stop offset="100%" stop-color="#B45309" />
              </linearGradient>
              <filter id="lecDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <circle cx="60" cy="60" r="45" fill="none" stroke="url(#lecGrad)" stroke-width="8" filter="url(#lecDrop)" />
            <path d="M60,15 L60,105 M15,60 L105,60 M40,40 L80,80 M40,80 L80,40" stroke="url(#lecGrad)" stroke-width="6" stroke-linecap="round" />
            <circle cx="60" cy="60" r="12" fill="#FFFFFF" />
            <path d="M50,55 L70,55 L60,75 Z" fill="#F59E0B" />
          </svg>
  `,

  "service_mesh_mtls_identity": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="mtlsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#10B981" />
                <stop offset="100%" stop-color="#047857" />
              </linearGradient>
              <filter id="mtlsDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <circle cx="40" cy="60" r="18" fill="url(#mtlsGrad)" filter="url(#mtlsDrop)" />
            <circle cx="80" cy="60" r="18" fill="url(#mtlsGrad)" filter="url(#mtlsDrop)" />
            <path d="M58,60 L62,60" stroke="#10B981" stroke-width="8" stroke-linecap="round" />
          </svg>
  `,

  "resource_quota": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="rqGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#3B82F6" />
                <stop offset="100%" stop-color="#1D4ED8" />
              </linearGradient>
              <filter id="rqDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <rect x="20" y="40" width="80" height="50" rx="4" fill="url(#rqGrad)" filter="url(#rqDrop)" />
            <rect x="20" y="20" width="80" height="10" rx="2" fill="#E2E8F0" />
            <line x1="20" y1="40" x2="100" y2="40" stroke="#FFFFFF" stroke-width="4" stroke-dasharray="4 4" />
          </svg>
  `,

  "system_performance": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="spGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#EF4444" />
                <stop offset="100%" stop-color="#991B1B" />
              </linearGradient>
              <filter id="spDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <circle cx="60" cy="60" r="45" fill="none" stroke="url(#spGrad)" stroke-width="8" filter="url(#spDrop)" />
            <path d="M30,60 L50,60 L60,30 L70,90 L80,60 L90,60" fill="none" stroke="url(#spGrad)" stroke-width="6" stroke-linecap="round" />
          </svg>
  `,

  "cluster_auto_scaling": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="casGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#8B5CF6" />
                <stop offset="100%" stop-color="#4C1D95" />
              </linearGradient>
              <filter id="casDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <path d="M20,90 L60,30 L100,90 Z" fill="url(#casGrad)" filter="url(#casDrop)" />
            <path d="M40,70 L60,50 L80,70" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" />
            <path d="M30,85 L50,85 M70,85 L90,85" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" />
          </svg>
  `,

  "distributed_consensus": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="dc2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#F59E0B" />
                <stop offset="100%" stop-color="#92400E" />
              </linearGradient>
              <filter id="dc2Drop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <circle cx="60" cy="60" r="45" fill="none" stroke="url(#dc2Grad)" stroke-width="8" filter="url(#dc2Drop)" />
            <path d="M60,15 L60,105 M15,60 L105,60 M40,40 L80,80 M40,80 L80,40" stroke="url(#dc2Grad)" stroke-width="6" stroke-linecap="round" />
            <circle cx="60" cy="60" r="10" fill="#FFFFFF" stroke="#F59E0B" stroke-width="4" />
          </svg>
  `,

  "service_mesh_proxy": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="smspGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#10B981" />
                <stop offset="100%" stop-color="#047857" />
              </linearGradient>
              <filter id="smspDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <rect x="20" y="30" width="80" height="60" rx="6" fill="#E2E8F0" />
            <rect x="70" y="30" width="30" height="60" rx="6" fill="url(#smspGrad)" filter="url(#smspDrop)" />
            <path d="M85,50 L85,70 M78,60 L92,60" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" />
          </svg>
  `,

  "multi_tenant_quota": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="mtqGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#3B82F6" />
                <stop offset="100%" stop-color="#1E3A8A" />
              </linearGradient>
              <filter id="mtqDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <rect x="20" y="30" width="80" height="60" rx="4" fill="none" stroke="#E2E8F0" stroke-width="8" />
            <rect x="20" y="65" width="80" height="25" fill="url(#mtqGrad)" filter="url(#mtqDrop)" />
            <line x1="20" y1="65" x2="100" y2="65" stroke="#FFFFFF" stroke-width="4" stroke-dasharray="4 4" />
          </svg>
  `,

  "realtime_telemetry": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="rtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#EF4444" />
                <stop offset="100%" stop-color="#991B1B" />
              </linearGradient>
              <filter id="rtDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <circle cx="60" cy="60" r="45" fill="none" stroke="url(#rtGrad)" stroke-width="8" filter="url(#rtDrop)" />
            <path d="M30,60 L50,60 L60,30 L70,90 L80,60 L90,60" fill="none" stroke="url(#rtGrad)" stroke-width="6" stroke-linecap="round" />
          </svg>
  `,

  "tracing_span": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="ts2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#8B5CF6" />
                <stop offset="100%" stop-color="#4C1D95" />
              </linearGradient>
              <filter id="ts2Drop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <rect x="20" y="50" width="80" height="20" rx="4" fill="url(#ts2Grad)" filter="url(#ts2Drop)" />
            <line x1="20" y1="40" x2="20" y2="80" stroke="#8B5CF6" stroke-width="4" />
            <line x1="100" y1="40" x2="100" y2="80" stroke="#8B5CF6" stroke-width="4" />
          </svg>
  `,

  "log_anomaly": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="laGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#F59E0B" />
                <stop offset="100%" stop-color="#92400E" />
              </linearGradient>
              <filter id="laDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <rect x="20" y="20" width="80" height="80" rx="6" fill="#E2E8F0" />
            <path d="M40,40 L60,80 L80,40" fill="none" stroke="url(#laGrad)" stroke-width="8" stroke-linecap="round" filter="url(#laDrop)" />
            <circle cx="60" cy="30" r="8" fill="#F59E0B" />
          </svg>
  `,

  "metric_baseline": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="mbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#10B981" />
                <stop offset="100%" stop-color="#047857" />
              </linearGradient>
              <filter id="mbDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <path d="M20,70 Q60,20 100,70" fill="none" stroke="url(#mbGrad)" stroke-width="8" stroke-linecap="round" filter="url(#mbDrop)" />
            <line x1="20" y1="70" x2="100" y2="70" stroke="#CBD5E1" stroke-width="4" stroke-dasharray="8 8" />
          </svg>
  `,

  "mtls_identity": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="mt2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#3B82F6" />
                <stop offset="100%" stop-color="#1E3A8A" />
              </linearGradient>
              <filter id="mt2Drop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <circle cx="40" cy="60" r="18" fill="url(#mt2Grad)" filter="url(#mt2Drop)" />
            <circle cx="80" cy="60" r="18" fill="url(#mt2Grad)" filter="url(#mt2Drop)" />
            <path d="M58,60 L62,60" stroke="#3B82F6" stroke-width="8" stroke-linecap="round" />
          </svg>
  `,

  "kubernetes_crd": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="kcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#EF4444" />
                <stop offset="100%" stop-color="#991B1B" />
              </linearGradient>
              <filter id="kcDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <path d="M60,10 L105,35 L105,85 L60,110 L15,85 L15,35 Z" fill="none" stroke="url(#kcGrad)" stroke-width="8" filter="url(#kcDrop)" />
            <path d="M60,30 L60,90 M30,60 L90,60" stroke="url(#kcGrad)" stroke-width="6" stroke-linecap="round" />
          </svg>
  `,

  "ai_neural_node": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <radialGradient id="anGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#C084FC" />
                <stop offset="100%" stop-color="#7E22CE" />
              </radialGradient>
              <filter id="anDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
              <filter id="anGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#A855F7" flood-opacity="0.6"/>
              </filter>
            </defs>
            <!-- Neural connections -->
            <path d="M60,60 L30,30 M60,60 L90,30 M60,60 L30,90 M60,60 L90,90 M60,60 L60,20 M60,60 L60,100" stroke="#E9D5FF" stroke-width="4" />
            <circle cx="30" cy="30" r="12" fill="url(#anGrad)" filter="url(#anDrop)" />
            <circle cx="90" cy="30" r="12" fill="url(#anGrad)" filter="url(#anDrop)" />
            <circle cx="30" cy="90" r="12" fill="url(#anGrad)" filter="url(#anDrop)" />
            <circle cx="90" cy="90" r="12" fill="url(#anGrad)" filter="url(#anDrop)" />
            <circle cx="60" cy="20" r="8" fill="url(#anGrad)" filter="url(#anDrop)" />
            <circle cx="60" cy="100" r="8" fill="url(#anGrad)" filter="url(#anDrop)" />
            <!-- Central Node -->
            <circle cx="60" cy="60" r="22" fill="#3B82F6" filter="url(#anGlow)" />
            <circle cx="60" cy="60" r="10" fill="#FFFFFF" />
          </svg>
  `,

  "edge_computing": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="ecGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#34D399" />
                <stop offset="100%" stop-color="#047857" />
              </linearGradient>
              <filter id="ecDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Data Center Core -->
            <rect x="40" y="40" width="40" height="40" rx="8" fill="#1E293B" filter="url(#ecDrop)" />
            <!-- Edge Devices -->
            <circle cx="20" cy="20" r="12" fill="url(#ecGrad)" filter="url(#ecDrop)" />
            <circle cx="100" cy="20" r="12" fill="url(#ecGrad)" filter="url(#ecDrop)" />
            <circle cx="20" cy="100" r="12" fill="url(#ecGrad)" filter="url(#ecDrop)" />
            <circle cx="100" cy="100" r="12" fill="url(#ecGrad)" filter="url(#ecDrop)" />
            <circle cx="60" cy="10" r="8" fill="url(#ecGrad)" filter="url(#ecDrop)" />
            <circle cx="60" cy="110" r="8" fill="url(#ecGrad)" filter="url(#ecDrop)" />
            <!-- Connectors -->
            <path d="M45,45 L28,28 M75,45 L92,28 M45,75 L28,92 M75,75 L92,92 M60,40 L60,18 M60,80 L60,102" stroke="#64748B" stroke-width="4" stroke-dasharray="4 4" />
          </svg>
  `,

  "data_lake": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="dlGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#38BDF8" />
                <stop offset="100%" stop-color="#0284C7" />
              </linearGradient>
              <filter id="dlDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Lake container -->
            <path d="M10,40 C10,10 110,10 110,40 L100,90 C100,110 20,110 20,90 Z" fill="#E2E8F0" filter="url(#dlDrop)" />
            <path d="M15,45 C15,25 105,25 105,45 L95,88 C95,100 25,100 25,88 Z" fill="url(#dlGrad)" />
            <!-- Data Drops -->
            <circle cx="40" cy="65" r="5" fill="#FFFFFF" opacity="0.8" />
            <circle cx="60" cy="75" r="6" fill="#FFFFFF" opacity="0.9" />
            <circle cx="80" cy="60" r="4" fill="#FFFFFF" opacity="0.7" />
            <ellipse cx="60" cy="40" rx="45" ry="15" fill="#BAE6FD" opacity="0.4" />
          </svg>
  `,

  "sensor_grid": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="sgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FCD34D" />
                <stop offset="100%" stop-color="#B45309" />
              </linearGradient>
              <filter id="sgDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Grid -->
            <path d="M20,40 L100,40 M20,60 L100,60 M20,80 L100,80 M40,20 L40,100 M60,20 L60,100 M80,20 L80,100" stroke="#CBD5E1" stroke-width="2" />
            <!-- Sensors -->
            <polygon points="40,30 45,40 35,40" fill="url(#sgGrad)" filter="url(#sgDrop)" />
            <polygon points="80,50 85,60 75,60" fill="url(#sgGrad)" filter="url(#sgDrop)" />
            <polygon points="60,70 65,80 55,80" fill="url(#sgGrad)" filter="url(#sgDrop)" />
            <polygon points="30,80 35,90 25,90" fill="url(#sgGrad)" filter="url(#sgDrop)" />
            <polygon points="90,90 95,100 85,100" fill="url(#sgGrad)" filter="url(#sgDrop)" />
          </svg>
  `,

  "biometric_scan": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="bsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#A78BFA" />
                <stop offset="100%" stop-color="#6D28D9" />
              </linearGradient>
              <filter id="bsDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
              <filter id="bsGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#8B5CF6" flood-opacity="0.6"/>
              </filter>
            </defs>
            <!-- Fingerprint outline -->
            <path d="M40,40 C40,20 80,20 80,40 C80,60 40,80 40,100" fill="none" stroke="url(#bsGrad)" stroke-width="8" stroke-linecap="round" filter="url(#bsDrop)" />
            <path d="M50,45 C50,30 70,30 70,45 C70,60 50,75 50,90" fill="none" stroke="url(#bsGrad)" stroke-width="8" stroke-linecap="round" />
            <path d="M60,50 C60,40 60,40 60,50 C60,60 60,70 60,80" fill="none" stroke="url(#bsGrad)" stroke-width="8" stroke-linecap="round" />
            <!-- Scanning line -->
            <rect x="20" y="60" width="80" height="4" fill="#38BDF8" filter="url(#bsGlow)" />
            <polygon points="60,65 50,75 70,75" fill="#38BDF8" opacity="0.5" />
          </svg>
  `,

  "firewall_shield": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="fwGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#EF4444" />
                <stop offset="100%" stop-color="#991B1B" />
              </linearGradient>
              <filter id="fwDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Brick wall -->
            <rect x="10" y="20" width="100" height="80" rx="4" fill="url(#fwGrad)" filter="url(#fwDrop)" />
            <path d="M10,40 L110,40 M10,60 L110,60 M10,80 L110,80" stroke="#7F1D1D" stroke-width="4" />
            <path d="M30,20 L30,40 M80,20 L80,40 M55,40 L55,60 M105,40 L105,60 M20,60 L20,80 M70,60 L70,80 M45,80 L45,100 M95,80 L95,100" stroke="#7F1D1D" stroke-width="4" />
            <!-- Shield over wall -->
            <path d="M60,10 L90,25 L90,60 C90,85 70,105 60,110 C50,105 30,85 30,60 L30,25 Z" fill="#3B82F6" stroke="#FFFFFF" stroke-width="4" filter="url(#fwDrop)" />
            <path d="M45,55 L55,65 L75,45" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" />
          </svg>
  `,

  "satellite_dish": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="sdGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#E2E8F0" />
                <stop offset="100%" stop-color="#94A3B8" />
              </linearGradient>
              <filter id="sdDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Base -->
            <path d="M40,100 L80,100 L70,70 L50,70 Z" fill="#475569" filter="url(#sdDrop)" />
            <!-- Dish -->
            <path d="M15,40 Q60,10 105,40 C105,70 60,90 15,40 Z" fill="url(#sdGrad)" filter="url(#sdDrop)" />
            <path d="M15,40 Q60,30 105,40" fill="none" stroke="#CBD5E1" stroke-width="4" />
            <!-- Receiver -->
            <line x1="60" y1="70" x2="60" y2="25" stroke="#1E293B" stroke-width="6" />
            <circle cx="60" cy="20" r="6" fill="#EF4444" />
            <!-- Signal waves -->
            <path d="M60,5 A20,20 0 0,0 80,-5" fill="none" stroke="#38BDF8" stroke-width="4" opacity="0.6" transform="rotate(-45 60 20)" />
            <path d="M60,10 A30,30 0 0,0 90,0" fill="none" stroke="#38BDF8" stroke-width="4" opacity="0.4" transform="rotate(-45 60 20)" />
          </svg>
  `,

  "robot_arm": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="raGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#F59E0B" />
                <stop offset="100%" stop-color="#B45309" />
              </linearGradient>
              <filter id="raDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Base -->
            <rect x="30" y="95" width="60" height="15" rx="4" fill="#1E293B" filter="url(#raDrop)" />
            <!-- Joints -->
            <circle cx="60" cy="85" r="15" fill="url(#raGrad)" filter="url(#raDrop)" />
            <circle cx="45" cy="50" r="12" fill="url(#raGrad)" filter="url(#raDrop)" />
            <circle cx="80" cy="30" r="10" fill="url(#raGrad)" filter="url(#raDrop)" />
            <!-- Arms -->
            <line x1="60" y1="85" x2="45" y2="50" stroke="#64748B" stroke-width="12" stroke-linecap="round" />
            <line x1="45" y1="50" x2="80" y2="30" stroke="#64748B" stroke-width="10" stroke-linecap="round" />
            <!-- Claw -->
            <path d="M80,30 L95,15 M80,30 L100,25" stroke="#1E293B" stroke-width="6" stroke-linecap="round" />
            <circle cx="60" cy="85" r="5" fill="#FFFFFF" />
            <circle cx="45" cy="50" r="4" fill="#FFFFFF" />
            <circle cx="80" cy="30" r="3" fill="#FFFFFF" />
          </svg>
  `,

  "game_controller": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="gcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#1E293B" />
                <stop offset="100%" stop-color="#020617" />
              </linearGradient>
              <filter id="gcDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <path d="M20,40 C10,30 10,90 25,95 C40,100 50,75 60,75 C70,75 80,100 95,95 C110,90 110,30 100,40 C90,50 30,50 20,40 Z" fill="url(#gcGrad)" filter="url(#gcDrop)" />
            <!-- D-Pad -->
            <rect x="25" y="55" width="20" height="6" rx="1" fill="#475569" />
            <rect x="32" y="48" width="6" height="20" rx="1" fill="#475569" />
            <!-- Buttons -->
            <circle cx="85" cy="50" r="4" fill="#EF4444" />
            <circle cx="95" cy="60" r="4" fill="#10B981" />
            <circle cx="85" cy="70" r="4" fill="#F59E0B" />
            <circle cx="75" cy="60" r="4" fill="#3B82F6" />
            <!-- Center options -->
            <rect x="50" y="55" width="8" height="4" rx="2" fill="#64748B" />
            <rect x="62" y="55" width="8" height="4" rx="2" fill="#64748B" />
          </svg>
  `,

  "microchip_ai": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="maiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#334155" />
                <stop offset="100%" stop-color="#0F172A" />
              </linearGradient>
              <filter id="maiDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
              <filter id="maiGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#FCD34D" flood-opacity="0.8"/>
              </filter>
            </defs>
            <!-- Pins -->
            <path d="M30,20 L30,10 M45,20 L45,10 M60,20 L60,10 M75,20 L75,10 M90,20 L90,10" stroke="#CBD5E1" stroke-width="4" />
            <path d="M30,100 L30,110 M45,100 L45,110 M60,100 L60,110 M75,100 L75,110 M90,100 L90,110" stroke="#CBD5E1" stroke-width="4" />
            <path d="M20,30 L10,30 M20,45 L10,45 M20,60 L10,60 M20,75 L10,75 M20,90 L10,90" stroke="#CBD5E1" stroke-width="4" />
            <path d="M100,30 L110,30 M100,45 L110,45 M100,60 L110,60 M100,75 L110,75 M100,90 L110,90" stroke="#CBD5E1" stroke-width="4" />
            <!-- Body -->
            <rect x="20" y="20" width="80" height="80" rx="8" fill="url(#maiGrad)" filter="url(#maiDrop)" />
            <!-- Inner Core AI Eye/Brain -->
            <circle cx="60" cy="60" r="20" fill="none" stroke="#FBBF24" stroke-width="4" filter="url(#maiGlow)" />
            <path d="M50,60 A10,10 0 1,0 70,60 A10,10 0 1,0 50,60 Z" fill="#FBBF24" filter="url(#maiGlow)" />
          </svg>
  `,

  "smart_home": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="shmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#38BDF8" />
                <stop offset="100%" stop-color="#0284C7" />
              </linearGradient>
              <filter id="shmDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
              <filter id="shmGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#7DD3FC" flood-opacity="0.8"/>
              </filter>
            </defs>
            <polygon points="60,15 20,50 20,105 100,105 100,50" fill="url(#shmGrad)" filter="url(#shmDrop)" />
            <polygon points="60,15 20,50 100,50" fill="#0284C7" />
            <rect x="45" y="65" width="30" height="40" fill="#1E293B" />
            <!-- WiFi Signal on House -->
            <path d="M45,40 A20,20 0 0,1 75,40" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" filter="url(#shmGlow)" />
            <path d="M52,48 A10,10 0 0,1 68,48" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" filter="url(#shmGlow)" />
            <circle cx="60" cy="55" r="3" fill="#FFFFFF" filter="url(#shmGlow)" />
          </svg>
  `,

  "fingerprint_lock": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="flGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FACC15" />
                <stop offset="100%" stop-color="#A16207" />
              </linearGradient>
              <filter id="flDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Lock Shackle -->
            <path d="M35,50 L35,35 C35,15 85,15 85,35 L85,50" fill="none" stroke="#E2E8F0" stroke-width="12" stroke-linecap="round" filter="url(#flDrop)" />
            <!-- Lock Body -->
            <rect x="20" y="50" width="80" height="60" rx="8" fill="url(#flGrad)" filter="url(#flDrop)" />
            <!-- Fingerprint Center -->
            <path d="M50,70 A10,10 0 0,1 70,70" fill="none" stroke="#1E293B" stroke-width="4" stroke-linecap="round" />
            <path d="M45,80 A15,15 0 0,1 75,80" fill="none" stroke="#1E293B" stroke-width="4" stroke-linecap="round" />
            <path d="M40,90 A20,20 0 0,1 80,90" fill="none" stroke="#1E293B" stroke-width="4" stroke-linecap="round" />
            <circle cx="60" cy="95" r="3" fill="#1E293B" />
          </svg>
  `,

  "radar": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="rdGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#10B981" />
                <stop offset="100%" stop-color="#047857" />
              </linearGradient>
              <filter id="rdDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
              <filter id="rdGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#34D399" flood-opacity="0.6"/>
              </filter>
            </defs>
            <!-- Display -->
            <circle cx="60" cy="60" r="50" fill="#022C22" stroke="url(#rdGrad)" stroke-width="8" filter="url(#rdDrop)" />
            <!-- Grid -->
            <circle cx="60" cy="60" r="30" fill="none" stroke="#047857" stroke-width="2" />
            <circle cx="60" cy="60" r="15" fill="none" stroke="#047857" stroke-width="2" />
            <line x1="10" y1="60" x2="110" y2="60" stroke="#047857" stroke-width="2" />
            <line x1="60" y1="10" x2="60" y2="110" stroke="#047857" stroke-width="2" />
            <!-- Sweep -->
            <path d="M60,60 L60,10 A50,50 0 0,1 110,60 Z" fill="#10B981" opacity="0.3" filter="url(#rdGlow)" />
            <!-- Targets -->
            <circle cx="80" cy="30" r="4" fill="#34D399" filter="url(#rdGlow)" />
            <circle cx="40" cy="40" r="3" fill="#34D399" filter="url(#rdGlow)" opacity="0.6" />
          </svg>
  `,

  "crypto_coin": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="cc3Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#F59E0B" />
                <stop offset="100%" stop-color="#B45309" />
              </linearGradient>
              <filter id="cc3Drop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
              <filter id="cc3Glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#FCD34D" flood-opacity="0.6"/>
              </filter>
            </defs>
            <!-- Outer coin -->
            <circle cx="60" cy="60" r="45" fill="url(#cc3Grad)" filter="url(#cc3Drop)" />
            <circle cx="60" cy="60" r="35" fill="none" stroke="#FEF3C7" stroke-width="2" opacity="0.5" />
            <!-- B symbol -->
            <path d="M45,40 L65,40 C75,40 75,55 65,55 C80,55 80,75 65,75 L45,75 Z" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" filter="url(#cc3Glow)" />
            <line x1="55" y1="30" x2="55" y2="85" stroke="#FFFFFF" stroke-width="4" filter="url(#cc3Glow)" />
            <line x1="65" y1="30" x2="65" y2="85" stroke="#FFFFFF" stroke-width="4" filter="url(#cc3Glow)" />
          </svg>
  `,

  "blockchain_node": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="bnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#3B82F6" />
                <stop offset="100%" stop-color="#1D4ED8" />
              </linearGradient>
              <filter id="bnDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Links -->
            <line x1="30" y1="60" x2="60" y2="30" stroke="#60A5FA" stroke-width="6" />
            <line x1="60" y1="30" x2="90" y2="60" stroke="#60A5FA" stroke-width="6" />
            <line x1="90" y1="60" x2="60" y2="90" stroke="#60A5FA" stroke-width="6" />
            <line x1="60" y1="90" x2="30" y2="60" stroke="#60A5FA" stroke-width="6" />
            <!-- Blocks -->
            <rect x="15" y="45" width="30" height="30" rx="4" fill="url(#bnGrad)" filter="url(#bnDrop)" />
            <rect x="45" y="15" width="30" height="30" rx="4" fill="url(#bnGrad)" filter="url(#bnDrop)" />
            <rect x="75" y="45" width="30" height="30" rx="4" fill="url(#bnGrad)" filter="url(#bnDrop)" />
            <rect x="45" y="75" width="30" height="30" rx="4" fill="url(#bnGrad)" filter="url(#bnDrop)" />
            <!-- Data details -->
            <circle cx="30" cy="60" r="4" fill="#FFFFFF" />
            <circle cx="60" cy="30" r="4" fill="#FFFFFF" />
            <circle cx="90" cy="60" r="4" fill="#FFFFFF" />
            <circle cx="60" cy="90" r="4" fill="#FFFFFF" />
          </svg>
  `,

  "nft_token": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="ntGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#EC4899" />
                <stop offset="100%" stop-color="#9D174D" />
              </linearGradient>
              <filter id="ntDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Hexagon base -->
            <polygon points="60,10 100,30 100,90 60,110 20,90 20,30" fill="url(#ntGrad)" filter="url(#ntDrop)" />
            <!-- Inner frame -->
            <polygon points="60,25 85,40 85,80 60,95 35,80 35,40" fill="none" stroke="#FBCFE8" stroke-width="4" opacity="0.6" />
            <!-- Art element -->
            <circle cx="60" cy="60" r="15" fill="#FFFFFF" />
            <polygon points="60,40 75,60 60,80 45,60" fill="#DB2777" />
          </svg>
  `,

  "deployment_rocket": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="dr2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#10B981" />
                <stop offset="100%" stop-color="#047857" />
              </linearGradient>
              <filter id="dr2Drop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Smoke/Cloud -->
            <circle cx="50" cy="95" r="15" fill="#E2E8F0" filter="url(#dr2Drop)" />
            <circle cx="70" cy="95" r="15" fill="#E2E8F0" filter="url(#dr2Drop)" />
            <circle cx="60" cy="105" r="15" fill="#CBD5E1" filter="url(#dr2Drop)" />
            <!-- Rocket Body -->
            <path d="M60,15 C80,40 80,70 60,85 C40,70 40,40 60,15 Z" fill="url(#dr2Grad)" filter="url(#dr2Drop)" />
            <!-- Window -->
            <circle cx="60" cy="50" r="8" fill="#FFFFFF" />
            <!-- Fins -->
            <polygon points="45,65 30,85 50,80" fill="#059669" filter="url(#dr2Drop)" />
            <polygon points="75,65 90,85 70,80" fill="#059669" filter="url(#dr2Drop)" />
            <!-- Engine Fire -->
            <polygon points="55,85 65,85 60,100" fill="#F59E0B" />
          </svg>
  `,

  "cloud_server": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="cs2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#38BDF8" />
                <stop offset="100%" stop-color="#0284C7" />
              </linearGradient>
              <filter id="cs2Drop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Cloud -->
            <path d="M40,60 a20,20 0 0,1 40,0 a15,15 0 0,1 0,30 l-40,0 a15,15 0 0,1 0,-30" fill="url(#cs2Grad)" filter="url(#cs2Drop)" />
            <!-- Servers -->
            <rect x="35" y="30" width="50" height="12" rx="2" fill="#1E293B" filter="url(#cs2Drop)" />
            <rect x="35" y="45" width="50" height="12" rx="2" fill="#1E293B" filter="url(#cs2Drop)" />
            <circle cx="45" cy="36" r="3" fill="#38BDF8" />
            <circle cx="45" cy="51" r="3" fill="#38BDF8" />
            <line x1="55" y1="36" x2="75" y2="36" stroke="#475569" stroke-width="2" />
            <line x1="55" y1="51" x2="75" y2="51" stroke="#475569" stroke-width="2" />
          </svg>
  `,

  "global_network": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="gnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#8B5CF6" />
                <stop offset="100%" stop-color="#4C1D95" />
              </linearGradient>
              <filter id="gnDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <circle cx="60" cy="60" r="45" fill="url(#gnGrad)" filter="url(#gnDrop)" />
            <!-- Lat/Lon Lines -->
            <ellipse cx="60" cy="60" rx="45" ry="15" fill="none" stroke="#C4B5FD" stroke-width="2" opacity="0.6" />
            <ellipse cx="60" cy="60" rx="15" ry="45" fill="none" stroke="#C4B5FD" stroke-width="2" opacity="0.6" />
            <line x1="15" y1="60" x2="105" y2="60" stroke="#C4B5FD" stroke-width="2" opacity="0.6" />
            <line x1="60" y1="15" x2="60" y2="105" stroke="#C4B5FD" stroke-width="2" opacity="0.6" />
            <!-- Nodes -->
            <circle cx="60" cy="45" r="5" fill="#FDE047" />
            <circle cx="45" cy="60" r="5" fill="#FDE047" />
            <circle cx="75" cy="75" r="5" fill="#FDE047" />
            <path d="M60,45 L45,60 L75,75 Z" fill="none" stroke="#FDE047" stroke-width="2" />
          </svg>
  `,

  "thermometer": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="tmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#F87171" />
                <stop offset="100%" stop-color="#B91C1C" />
              </linearGradient>
              <filter id="tmDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Glass Tube -->
            <rect x="45" y="15" width="30" height="70" rx="15" fill="#E2E8F0" filter="url(#tmDrop)" />
            <circle cx="60" cy="90" r="20" fill="#E2E8F0" filter="url(#tmDrop)" />
            <!-- Mercury/Liquid -->
            <circle cx="60" cy="90" r="14" fill="url(#tmGrad)" />
            <rect x="54" y="45" width="12" height="45" fill="url(#tmGrad)" />
            <!-- Markings -->
            <line x1="50" y1="30" x2="55" y2="30" stroke="#94A3B8" stroke-width="2" />
            <line x1="50" y1="45" x2="55" y2="45" stroke="#94A3B8" stroke-width="2" />
            <line x1="50" y1="60" x2="55" y2="60" stroke="#94A3B8" stroke-width="2" />
          </svg>
  `,

  "compass_direction": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="cdGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#334155" />
                <stop offset="100%" stop-color="#0F172A" />
              </linearGradient>
              <filter id="cdDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <circle cx="60" cy="60" r="45" fill="url(#cdGrad)" filter="url(#cdDrop)" />
            <circle cx="60" cy="60" r="35" fill="none" stroke="#64748B" stroke-width="4" />
            <!-- Points -->
            <polygon points="60,20 65,55 55,55" fill="#EF4444" />
            <polygon points="60,100 65,65 55,65" fill="#E2E8F0" />
            <!-- Center -->
            <circle cx="60" cy="60" r="6" fill="#FDE047" />
            <!-- Letters -->
            <text x="56" y="15" font-family="sans-serif" font-weight="bold" font-size="10" fill="#94A3B8">N</text>
            <text x="56" y="112" font-family="sans-serif" font-weight="bold" font-size="10" fill="#94A3B8">S</text>
            <text x="10" y="64" font-family="sans-serif" font-weight="bold" font-size="10" fill="#94A3B8">W</text>
            <text x="103" y="64" font-family="sans-serif" font-weight="bold" font-size="10" fill="#94A3B8">E</text>
          </svg>
  `,

  "loupe_inspect": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="liGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#38BDF8" />
                <stop offset="100%" stop-color="#0284C7" />
              </linearGradient>
              <filter id="liDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Handle -->
            <rect x="75" y="75" width="12" height="30" rx="6" fill="#1E293B" transform="rotate(-45 81 90)" filter="url(#liDrop)" />
            <!-- Frame -->
            <circle cx="50" cy="50" r="30" fill="none" stroke="url(#liGrad)" stroke-width="10" filter="url(#liDrop)" />
            <!-- Glass reflection -->
            <path d="M35,35 A20,20 0 0,1 65,35" fill="none" stroke="#BAE6FD" stroke-width="4" stroke-linecap="round" opacity="0.6" />
            <!-- Plus/Detail inside -->
            <line x1="45" y1="50" x2="55" y2="50" stroke="#0284C7" stroke-width="4" stroke-linecap="round" />
            <line x1="50" y1="45" x2="50" y2="55" stroke="#0284C7" stroke-width="4" stroke-linecap="round" />
          </svg>
  `,

  "bug_splat": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="bs2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#EF4444" />
                <stop offset="100%" stop-color="#991B1B" />
              </linearGradient>
              <filter id="bs2Drop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Splat/Error mark -->
            <path d="M20,20 L100,100 M100,20 L20,100" stroke="#FCA5A5" stroke-width="12" stroke-linecap="round" opacity="0.4" filter="url(#bs2Drop)" />
            <!-- Bug body -->
            <rect x="45" y="30" width="30" height="60" rx="15" fill="url(#bs2Grad)" filter="url(#bs2Drop)" />
            <!-- Legs -->
            <path d="M45,45 L30,40 M45,60 L25,60 M45,75 L30,80" stroke="url(#bs2Grad)" stroke-width="6" stroke-linecap="round" />
            <path d="M75,45 L90,40 M75,60 L95,60 M75,75 L90,80" stroke="url(#bs2Grad)" stroke-width="6" stroke-linecap="round" />
            <!-- Eyes -->
            <circle cx="53" cy="40" r="3" fill="#FFFFFF" />
            <circle cx="67" cy="40" r="3" fill="#FFFFFF" />
            <!-- Crack/Cross -->
            <path d="M55,55 L65,65 M65,55 L55,65" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" />
          </svg>
  `,

  "terminal_command": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="tcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#1E293B" />
                <stop offset="100%" stop-color="#020617" />
              </linearGradient>
              <filter id="tcDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
              <filter id="tcGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#22C55E" flood-opacity="0.8"/>
              </filter>
            </defs>
            <!-- Window -->
            <rect x="15" y="25" width="90" height="70" rx="6" fill="url(#tcGrad)" filter="url(#tcDrop)" />
            <!-- Top bar -->
            <rect x="15" y="25" width="90" height="15" fill="#334155" />
            <circle cx="25" cy="32" r="3" fill="#EF4444" />
            <circle cx="35" cy="32" r="3" fill="#F59E0B" />
            <circle cx="45" cy="32" r="3" fill="#10B981" />
            <!-- Prompt -->
            <polyline points="25,55 35,65 25,75" fill="none" stroke="#22C55E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" filter="url(#tcGlow)" />
            <line x1="45" y1="75" x2="65" y2="75" stroke="#22C55E" stroke-width="4" stroke-linecap="round" filter="url(#tcGlow)" />
          </svg>
  `,

  "api_connection": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="apGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#3B82F6" />
                <stop offset="100%" stop-color="#1D4ED8" />
              </linearGradient>
              <filter id="apDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Central Hub -->
            <rect x="40" y="40" width="40" height="40" rx="8" fill="url(#apGrad)" filter="url(#apDrop)" />
            <text x="60" y="65" font-family="sans-serif" font-weight="bold" font-size="16" fill="#FFFFFF" text-anchor="middle">API</text>
            <!-- Connections -->
            <line x1="60" y1="20" x2="60" y2="40" stroke="#94A3B8" stroke-width="4" />
            <line x1="60" y1="80" x2="60" y2="100" stroke="#94A3B8" stroke-width="4" />
            <line x1="20" y1="60" x2="40" y2="60" stroke="#94A3B8" stroke-width="4" />
            <line x1="80" y1="60" x2="100" y2="60" stroke="#94A3B8" stroke-width="4" />
            <!-- Nodes -->
            <circle cx="60" cy="20" r="6" fill="#10B981" />
            <circle cx="60" cy="100" r="6" fill="#F59E0B" />
            <circle cx="20" cy="60" r="6" fill="#EC4899" />
            <circle cx="100" cy="60" r="6" fill="#8B5CF6" />
          </svg>
  `,

  "webhook": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="whGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#F59E0B" />
                <stop offset="100%" stop-color="#92400E" />
              </linearGradient>
              <filter id="whDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Hook -->
            <path d="M40,90 C40,50 80,50 80,30" fill="none" stroke="url(#whGrad)" stroke-width="12" stroke-linecap="round" filter="url(#whDrop)" />
            <!-- Arrow -->
            <polygon points="80,15 90,35 70,35" fill="url(#whGrad)" filter="url(#whDrop)" />
            <!-- Base target -->
            <rect x="25" y="85" width="30" height="15" rx="4" fill="#1E293B" filter="url(#whDrop)" />
            <!-- Signal -->
            <circle cx="80" cy="30" r="30" fill="none" stroke="#FDE047" stroke-width="2" opacity="0.4" />
            <circle cx="80" cy="30" r="20" fill="none" stroke="#FDE047" stroke-width="2" opacity="0.6" />
          </svg>
  `,

  "branch_merge": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="bmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#8B5CF6" />
                <stop offset="100%" stop-color="#4C1D95" />
              </linearGradient>
              <filter id="bmDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Main trunk -->
            <line x1="40" y1="20" x2="40" y2="100" stroke="#1E293B" stroke-width="8" stroke-linecap="round" filter="url(#bmDrop)" />
            <!-- Branch curve -->
            <path d="M40,75 C70,75 80,55 80,45" fill="none" stroke="url(#bmGrad)" stroke-width="8" stroke-linecap="round" filter="url(#bmDrop)" />
            <!-- Nodes -->
            <circle cx="40" cy="25" r="8" fill="#1E293B" />
            <circle cx="40" cy="100" r="8" fill="#1E293B" />
            <circle cx="40" cy="75" r="8" fill="#1E293B" />
            <circle cx="80" cy="40" r="10" fill="url(#bmGrad)" filter="url(#bmDrop)" />
            <!-- Small merge arrow -->
            <polygon points="40,40 50,50 40,60" fill="#94A3B8" />
          </svg>
  `,

  "code_file": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="cfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#F1F5F9" />
                <stop offset="100%" stop-color="#94A3B8" />
              </linearGradient>
              <filter id="cfDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Document -->
            <polygon points="25,15 70,15 95,40 95,105 25,105" fill="url(#cfGrad)" filter="url(#cfDrop)" />
            <!-- Fold -->
            <polygon points="70,15 70,40 95,40" fill="#CBD5E1" />
            <!-- Code Brackets inside -->
            <polyline points="45,55 35,65 45,75" fill="none" stroke="#3B82F6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <polyline points="75,55 85,65 75,75" fill="none" stroke="#3B82F6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <line x1="65" y1="50" x2="55" y2="80" stroke="#3B82F6" stroke-width="4" stroke-linecap="round" />
          </svg>
  `,

  "dashboard_panel": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="dbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#3B82F6" />
                <stop offset="100%" stop-color="#1E3A8A" />
              </linearGradient>
              <filter id="dbDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <rect x="15" y="20" width="90" height="80" rx="6" fill="#1E293B" filter="url(#dbDrop)" />
            <!-- Sidebar -->
            <rect x="15" y="20" width="25" height="80" rx="6" fill="#0F172A" />
            <!-- Top header -->
            <rect x="45" y="25" width="55" height="15" rx="4" fill="#334155" />
            <!-- Main Content Cards -->
            <rect x="45" y="45" width="35" height="25" rx="4" fill="url(#dbGrad)" />
            <rect x="85" y="45" width="15" height="25" rx="4" fill="#334155" />
            <rect x="45" y="75" width="55" height="20" rx="4" fill="#334155" />
          </svg>
  `,

  "pipeline": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="plGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#10B981" />
                <stop offset="100%" stop-color="#047857" />
              </linearGradient>
              <filter id="plDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Track -->
            <path d="M20,60 L100,60" fill="none" stroke="#CBD5E1" stroke-width="8" stroke-dasharray="10 5" />
            <!-- Stages -->
            <circle cx="30" cy="60" r="15" fill="#1E293B" filter="url(#plDrop)" />
            <circle cx="60" cy="60" r="15" fill="url(#plGrad)" filter="url(#plDrop)" />
            <circle cx="90" cy="60" r="15" fill="#1E293B" filter="url(#plDrop)" />
            <!-- Indicators -->
            <circle cx="30" cy="60" r="6" fill="#94A3B8" />
            <path d="M55,60 L60,65 L68,55" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            <circle cx="90" cy="60" r="6" fill="#94A3B8" />
          </svg>
  `,

  "globe_web": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="gwGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#3B82F6" />
                <stop offset="100%" stop-color="#1E3A8A" />
              </linearGradient>
              <filter id="gwDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <circle cx="60" cy="60" r="45" fill="url(#gwGrad)" filter="url(#gwDrop)" />
            <!-- Latitude/Longitude -->
            <ellipse cx="60" cy="60" rx="45" ry="15" fill="none" stroke="#60A5FA" stroke-width="2" />
            <ellipse cx="60" cy="60" rx="15" ry="45" fill="none" stroke="#60A5FA" stroke-width="2" />
            <!-- Continents (abstract) -->
            <path d="M35,45 Q45,35 55,45 T75,45" fill="none" stroke="#60A5FA" stroke-width="4" stroke-linecap="round" />
            <path d="M45,75 Q55,65 65,75 T85,65" fill="none" stroke="#60A5FA" stroke-width="4" stroke-linecap="round" />
          </svg>
  `,

  "folder_secure": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="fsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#F59E0B" />
                <stop offset="100%" stop-color="#92400E" />
              </linearGradient>
              <filter id="fsDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Back flap -->
            <path d="M15,35 L40,35 L50,45 L105,45 L105,95 L15,95 Z" fill="#D97706" filter="url(#fsDrop)" />
            <!-- Front flap -->
            <path d="M15,50 L105,50 L100,95 L15,95 Z" fill="url(#fsGrad)" />
            <!-- Lock -->
            <rect x="50" y="55" width="20" height="15" rx="2" fill="#1E293B" />
            <path d="M55,55 L55,50 A5,5 0 0,1 65,50 L65,55" fill="none" stroke="#E2E8F0" stroke-width="3" />
            <circle cx="60" cy="62" r="2" fill="#FFFFFF" />
          </svg>
  `,

  "cloud_lock": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="clGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#94A3B8" />
                <stop offset="100%" stop-color="#475569" />
              </linearGradient>
              <filter id="clDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Cloud -->
            <path d="M40,55 A20,20 0 0,1 40,15 A25,25 0 0,1 85,25 A20,20 0 0,1 85,65 Z" fill="url(#clGrad)" filter="url(#clDrop)" />
            <!-- Lock Base -->
            <rect x="45" y="60" width="30" height="25" rx="4" fill="#10B981" filter="url(#clDrop)" />
            <path d="M52,60 L52,50 A8,8 0 0,1 68,50 L68,60" fill="none" stroke="#E2E8F0" stroke-width="4" stroke-linecap="round" />
            <!-- Keyhole -->
            <circle cx="60" cy="70" r="3" fill="#064E3B" />
            <polygon points="58,73 62,73 60,78" fill="#064E3B" />
          </svg>
  `,

  "network_switch": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="nsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#3B82F6" />
                <stop offset="100%" stop-color="#1E3A8A" />
              </linearGradient>
              <filter id="nsDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <rect x="15" y="40" width="90" height="40" rx="4" fill="url(#nsGrad)" filter="url(#nsDrop)" />
            <!-- Ports -->
            <rect x="25" y="55" width="10" height="10" fill="#0F172A" />
            <rect x="40" y="55" width="10" height="10" fill="#0F172A" />
            <rect x="55" y="55" width="10" height="10" fill="#0F172A" />
            <rect x="70" y="55" width="10" height="10" fill="#0F172A" />
            <rect x="85" y="55" width="10" height="10" fill="#0F172A" />
            <!-- Activity lights -->
            <circle cx="30" cy="50" r="2" fill="#10B981" />
            <circle cx="45" cy="50" r="2" fill="#10B981" />
            <circle cx="60" cy="50" r="2" fill="#F59E0B" />
            <circle cx="75" cy="50" r="2" fill="#10B981" />
            <circle cx="90" cy="50" r="2" fill="#3B82F6" />
          </svg>
  `,

  "laptop_code": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="lcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#E2E8F0" />
                <stop offset="100%" stop-color="#94A3B8" />
              </linearGradient>
              <filter id="lcDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Screen base -->
            <rect x="20" y="25" width="80" height="55" rx="4" fill="#1E293B" filter="url(#lcDrop)" />
            <!-- Screen display -->
            <rect x="25" y="30" width="70" height="45" fill="#0F172A" />
            <!-- Keyboard deck -->
            <polygon points="10,80 110,80 120,95 0,95" fill="url(#lcGrad)" filter="url(#lcDrop)" />
            <!-- Code on screen -->
            <line x1="30" y1="40" x2="60" y2="40" stroke="#38BDF8" stroke-width="3" />
            <line x1="30" y1="50" x2="80" y2="50" stroke="#A78BFA" stroke-width="3" />
            <line x1="30" y1="60" x2="50" y2="60" stroke="#34D399" stroke-width="3" />
          </svg>
  `,

  "music_note": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="mnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#EC4899" />
                <stop offset="100%" stop-color="#9D174D" />
              </linearGradient>
              <filter id="mnDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Note Base -->
            <circle cx="40" cy="85" r="15" fill="url(#mnGrad)" filter="url(#mnDrop)" />
            <circle cx="80" cy="75" r="15" fill="url(#mnGrad)" filter="url(#mnDrop)" />
            <!-- Stems -->
            <rect x="50" y="25" width="6" height="60" fill="url(#mnGrad)" />
            <rect x="90" y="15" width="6" height="60" fill="url(#mnGrad)" />
            <!-- Beam -->
            <polygon points="50,25 96,15 96,25 50,35" fill="url(#mnGrad)" filter="url(#mnDrop)" />
          </svg>
  `,

  "coffee_cup": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="cf2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FCD34D" />
                <stop offset="100%" stop-color="#B45309" />
              </linearGradient>
              <filter id="cf2Drop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Plate -->
            <ellipse cx="55" cy="95" rx="35" ry="10" fill="#E2E8F0" filter="url(#cf2Drop)" />
            <!-- Handle -->
            <path d="M75,45 A15,15 0 0,1 75,75" fill="none" stroke="url(#cf2Grad)" stroke-width="8" filter="url(#cf2Drop)" />
            <!-- Cup -->
            <path d="M30,30 L80,30 L75,85 C75,95 35,95 35,85 Z" fill="url(#cf2Grad)" filter="url(#cf2Drop)" />
            <!-- Steam -->
            <path d="M45,20 Q40,10 50,0" fill="none" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round" opacity="0.6" />
            <path d="M60,25 Q55,15 65,5" fill="none" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round" opacity="0.6" />
          </svg>
  `,

  "apple_fruit": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <radialGradient id="ap2Grad" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stop-color="#EF4444" />
                <stop offset="100%" stop-color="#991B1B" />
              </radialGradient>
              <filter id="ap2Drop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Body -->
            <path d="M60,30 C85,30 100,50 95,80 C90,110 70,105 60,95 C50,105 30,110 25,80 C20,50 35,30 60,30 Z" fill="url(#ap2Grad)" filter="url(#ap2Drop)" />
            <!-- Stem -->
            <path d="M60,30 Q65,15 75,10" fill="none" stroke="#654321" stroke-width="4" stroke-linecap="round" />
            <!-- Leaf -->
            <path d="M70,25 Q90,20 85,10 Q70,10 70,25 Z" fill="#10B981" />
          </svg>
  `,

  "bed_sleep": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="bd2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#38BDF8" />
                <stop offset="100%" stop-color="#0284C7" />
              </linearGradient>
              <filter id="bd2Drop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Headboard -->
            <rect x="15" y="30" width="10" height="60" rx="2" fill="#1E293B" filter="url(#bd2Drop)" />
            <!-- Mattress -->
            <rect x="25" y="65" width="80" height="15" fill="#E2E8F0" />
            <!-- Blanket -->
            <path d="M50,65 L105,65 L105,80 L50,80 Z" fill="url(#bd2Grad)" filter="url(#bd2Drop)" />
            <path d="M50,65 Q45,72 50,80" fill="url(#bd2Grad)" />
            <!-- Pillow -->
            <rect x="30" y="55" width="20" height="10" rx="4" fill="#FFFFFF" filter="url(#bd2Drop)" />
            <!-- Legs -->
            <rect x="25" y="80" width="5" height="10" fill="#1E293B" />
            <rect x="95" y="80" width="5" height="10" fill="#1E293B" />
          </svg>
  `,

  "planet_ring": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="pl2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#F59E0B" />
                <stop offset="100%" stop-color="#92400E" />
              </linearGradient>
              <filter id="pl2Drop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Planet -->
            <circle cx="60" cy="60" r="30" fill="url(#pl2Grad)" filter="url(#pl2Drop)" />
            <!-- Ring back -->
            <path d="M20,70 A50,15 0 0,1 100,50" fill="none" stroke="#E2E8F0" stroke-width="6" opacity="0.4" transform="rotate(-15 60 60)" />
            <!-- Ring front -->
            <path d="M100,50 A50,15 0 0,1 20,70" fill="none" stroke="#FDE047" stroke-width="6" filter="url(#pl2Drop)" transform="rotate(-15 60 60)" />
            <!-- Surface detail -->
            <path d="M40,50 Q60,40 80,50" fill="none" stroke="#B45309" stroke-width="4" opacity="0.6" />
            <path d="M35,65 Q60,55 85,65" fill="none" stroke="#B45309" stroke-width="4" opacity="0.6" />
          </svg>
  `,

  "cloud_database": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="cdbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#3B82F6" />
                <stop offset="100%" stop-color="#1E3A8A" />
              </linearGradient>
              <filter id="cdbDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Cloud -->
            <path d="M30,55 A20,20 0 0,1 40,20 A25,25 0 0,1 90,30 A20,20 0 0,1 90,70 L80,70" fill="url(#cdbGrad)" filter="url(#cdbDrop)" />
            <!-- Database Disks -->
            <ellipse cx="50" cy="70" rx="30" ry="10" fill="#1E293B" filter="url(#cdbDrop)" />
            <path d="M20,70 L20,85 A30,10 0 0,0 80,85 L80,70" fill="#334155" filter="url(#cdbDrop)" />
            <path d="M20,85 L20,100 A30,10 0 0,0 80,100 L80,85" fill="#1E293B" filter="url(#cdbDrop)" />
            <ellipse cx="50" cy="70" rx="30" ry="10" fill="#334155" />
            <path d="M35,70 L65,70" stroke="#0F172A" stroke-width="2" />
          </svg>
  `,

  "microchip_secure": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="mcsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#1E293B" />
                <stop offset="100%" stop-color="#020617" />
              </linearGradient>
              <filter id="mcsDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Pins -->
            <path d="M30,20 L30,10 M60,20 L60,10 M90,20 L90,10" stroke="#CBD5E1" stroke-width="6" />
            <path d="M30,100 L30,110 M60,100 L60,110 M90,100 L90,110" stroke="#CBD5E1" stroke-width="6" />
            <path d="M20,30 L10,30 M20,60 L10,60 M20,90 L10,90" stroke="#CBD5E1" stroke-width="6" />
            <path d="M100,30 L110,30 M100,60 L110,60 M100,90 L110,90" stroke="#CBD5E1" stroke-width="6" />
            <!-- Chip -->
            <rect x="20" y="20" width="80" height="80" rx="8" fill="url(#mcsGrad)" filter="url(#mcsDrop)" />
            <!-- Shield inside -->
            <path d="M60,35 L80,45 L80,65 C80,80 60,95 60,95 C60,95 40,80 40,65 L40,45 Z" fill="#10B981" />
            <path d="M55,65 L60,70 L70,55" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" />
          </svg>
  `,

  "smart_watch_health": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="swhGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#475569" />
                <stop offset="100%" stop-color="#1E293B" />
              </linearGradient>
              <filter id="swhDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
              <filter id="swhGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#F43F5E" flood-opacity="0.8"/>
              </filter>
            </defs>
            <!-- Straps -->
            <rect x="40" y="10" width="40" height="25" fill="#334155" />
            <rect x="40" y="85" width="40" height="25" fill="#334155" />
            <!-- Body -->
            <rect x="30" y="30" width="60" height="60" rx="15" fill="url(#swhGrad)" filter="url(#swhDrop)" />
            <!-- Screen -->
            <rect x="38" y="38" width="44" height="44" rx="8" fill="#020617" />
            <!-- Heartbeat -->
            <path d="M42,60 L50,60 L55,45 L65,75 L70,60 L78,60" fill="none" stroke="#F43F5E" stroke-width="3" stroke-linecap="round" filter="url(#swhGlow)" />
          </svg>
  `,

  "vr_controller": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="vrcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#1E293B" />
                <stop offset="100%" stop-color="#020617" />
              </linearGradient>
              <filter id="vrcDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Tracking Ring -->
            <circle cx="60" cy="40" r="25" fill="none" stroke="#E2E8F0" stroke-width="8" filter="url(#vrcDrop)" />
            <!-- Handle -->
            <path d="M50,45 L70,45 L65,100 A10,10 0 0,1 55,100 Z" fill="url(#vrcGrad)" filter="url(#vrcDrop)" />
            <!-- Buttons -->
            <circle cx="55" cy="55" r="4" fill="#3B82F6" />
            <circle cx="65" cy="62" r="4" fill="#EF4444" />
            <ellipse cx="60" cy="45" rx="8" ry="4" fill="#334155" />
          </svg>
  `,

  "biohazard_symbol": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <radialGradient id="bhGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#FACC15" />
                <stop offset="100%" stop-color="#CA8A04" />
              </radialGradient>
              <filter id="bhDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Base circle -->
            <circle cx="60" cy="60" r="50" fill="url(#bhGrad)" filter="url(#bhDrop)" />
            <!-- Symbol (simplified) -->
            <circle cx="60" cy="45" r="15" fill="none" stroke="#000000" stroke-width="6" />
            <circle cx="45" cy="70" r="15" fill="none" stroke="#000000" stroke-width="6" />
            <circle cx="75" cy="70" r="15" fill="none" stroke="#000000" stroke-width="6" />
            <circle cx="60" cy="60" r="5" fill="#000000" />
            <path d="M60,60 L60,30 M60,60 L40,80 M60,60 L80,80" stroke="#000000" stroke-width="4" />
          </svg>
  `,

  "radioactive_symbol": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <radialGradient id="rd2Grad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#FCD34D" />
                <stop offset="100%" stop-color="#B45309" />
              </radialGradient>
              <filter id="rd2Drop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <polygon points="60,10 110,95 10,95" fill="url(#rd2Grad)" filter="url(#rd2Drop)" />
            <circle cx="60" cy="65" r="5" fill="#000000" />
            <path d="M60,45 A20,20 0 0,1 78,55 L65,65 A5,5 0 0,0 60,60 Z" fill="#000000" />
            <path d="M42,55 A20,20 0 0,1 60,45 L60,60 A5,5 0 0,0 55,65 Z" fill="#000000" />
            <path d="M45,75 A20,20 0 0,0 75,75 L65,68 A5,5 0 0,1 55,68 Z" fill="#000000" />
          </svg>
  `,

  "magnet_tool": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="mgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#EF4444" />
                <stop offset="100%" stop-color="#991B1B" />
              </linearGradient>
              <filter id="mgDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Magnet Body -->
            <path d="M30,30 L30,60 A30,30 0 0,0 90,60 L90,30 L70,30 L70,60 A10,10 0 0,1 50,60 L50,30 Z" fill="url(#mgGrad)" filter="url(#mgDrop)" />
            <!-- Poles -->
            <rect x="30" y="15" width="20" height="15" fill="#E2E8F0" filter="url(#mgDrop)" />
            <rect x="70" y="15" width="20" height="15" fill="#E2E8F0" filter="url(#mgDrop)" />
            <!-- Attraction waves -->
            <path d="M40,5 A10,10 0 0,1 60,5 A10,10 0 0,1 80,5" fill="none" stroke="#60A5FA" stroke-width="3" stroke-linecap="round" opacity="0.6" />
          </svg>
  `,

  "dna_helix": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="dnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#8B5CF6" />
                <stop offset="100%" stop-color="#4C1D95" />
              </linearGradient>
              <filter id="dnDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
              <filter id="dnGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#C084FC" flood-opacity="0.6"/>
              </filter>
            </defs>
            <!-- Base connections -->
            <line x1="40" y1="20" x2="80" y2="20" stroke="#38BDF8" stroke-width="4" />
            <line x1="30" y1="40" x2="90" y2="40" stroke="#F472B6" stroke-width="4" />
            <line x1="40" y1="60" x2="80" y2="60" stroke="#34D399" stroke-width="4" />
            <line x1="30" y1="80" x2="90" y2="80" stroke="#FBBF24" stroke-width="4" />
            <line x1="40" y1="100" x2="80" y2="100" stroke="#38BDF8" stroke-width="4" />
            <!-- Helices -->
            <path d="M40,20 C10,40 10,80 40,100" fill="none" stroke="url(#dnGrad)" stroke-width="8" stroke-linecap="round" filter="url(#dnDrop)" />
            <path d="M80,20 C110,40 110,80 80,100" fill="none" stroke="url(#dnGrad)" stroke-width="8" stroke-linecap="round" filter="url(#dnDrop)" />
            <!-- Nodes -->
            <circle cx="40" cy="20" r="4" fill="#FFFFFF" filter="url(#dnGlow)" />
            <circle cx="30" cy="40" r="4" fill="#FFFFFF" filter="url(#dnGlow)" />
            <circle cx="40" cy="60" r="4" fill="#FFFFFF" filter="url(#dnGlow)" />
            <circle cx="30" cy="80" r="4" fill="#FFFFFF" filter="url(#dnGlow)" />
            <circle cx="40" cy="100" r="4" fill="#FFFFFF" filter="url(#dnGlow)" />
            
            <circle cx="80" cy="20" r="4" fill="#FFFFFF" filter="url(#dnGlow)" />
            <circle cx="90" cy="40" r="4" fill="#FFFFFF" filter="url(#dnGlow)" />
            <circle cx="80" cy="60" r="4" fill="#FFFFFF" filter="url(#dnGlow)" />
            <circle cx="90" cy="80" r="4" fill="#FFFFFF" filter="url(#dnGlow)" />
            <circle cx="80" cy="100" r="4" fill="#FFFFFF" filter="url(#dnGlow)" />
          </svg>
  `,

  "satellite_orbit": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="soGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#3B82F6" />
                <stop offset="100%" stop-color="#1E3A8A" />
              </linearGradient>
              <filter id="soDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Orbit path -->
            <ellipse cx="60" cy="60" rx="45" ry="20" fill="none" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="8 4" transform="rotate(-30 60 60)" />
            <!-- Central Body (Earth) -->
            <circle cx="60" cy="60" r="25" fill="url(#soGrad)" filter="url(#soDrop)" />
            <!-- Satellite -->
            <g transform="translate(85, 30) rotate(15)">
              <rect x="-10" y="-15" width="20" height="10" fill="#38BDF8" />
              <rect x="-10" y="5" width="20" height="10" fill="#38BDF8" />
              <rect x="-5" y="-5" width="10" height="10" fill="#E2E8F0" />
              <line x1="-5" y1="0" x2="-15" y2="0" stroke="#E2E8F0" stroke-width="2" />
              <line x1="5" y1="0" x2="15" y2="0" stroke="#E2E8F0" stroke-width="2" />
            </g>
          </svg>
  `,

  "rocket_launch": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="rlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#EF4444" />
                <stop offset="100%" stop-color="#991B1B" />
              </linearGradient>
              <filter id="rlDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
              <filter id="rlGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#F59E0B" flood-opacity="0.8"/>
              </filter>
            </defs>
            <!-- Fire -->
            <polygon points="50,85 70,85 60,110" fill="#F59E0B" filter="url(#rlGlow)" />
            <polygon points="55,85 65,85 60,100" fill="#FEF08A" />
            <!-- Body -->
            <path d="M60,15 C80,30 80,65 70,85 L50,85 C40,65 40,30 60,15 Z" fill="#E2E8F0" filter="url(#rlDrop)" />
            <!-- Window -->
            <circle cx="60" cy="50" r="8" fill="#3B82F6" stroke="#1E293B" stroke-width="2" />
            <!-- Fins -->
            <polygon points="50,75 35,90 50,85" fill="url(#rlGrad)" filter="url(#rlDrop)" />
            <polygon points="70,75 85,90 70,85" fill="url(#rlGrad)" filter="url(#rlDrop)" />
            <polygon points="60,85 55,95 65,95" fill="url(#rlGrad)" />
          </svg>
  `,

  "alien_ufo": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="auGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#8B5CF6" />
                <stop offset="100%" stop-color="#4C1D95" />
              </linearGradient>
              <filter id="auDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
              <filter id="auGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#34D399" flood-opacity="0.8"/>
              </filter>
            </defs>
            <!-- Beam -->
            <polygon points="50,75 70,75 85,110 35,110" fill="#34D399" opacity="0.3" filter="url(#auGlow)" />
            <!-- Dome -->
            <path d="M40,55 A20,15 0 0,1 80,55 Z" fill="#38BDF8" opacity="0.8" filter="url(#auDrop)" />
            <!-- Alien Head -->
            <ellipse cx="60" cy="50" rx="6" ry="8" fill="#10B981" />
            <circle cx="57" cy="49" r="1.5" fill="#000000" />
            <circle cx="63" cy="49" r="1.5" fill="#000000" />
            <!-- Saucer -->
            <ellipse cx="60" cy="65" rx="40" ry="10" fill="url(#auGrad)" filter="url(#auDrop)" />
            <!-- Lights -->
            <circle cx="35" cy="65" r="2" fill="#34D399" filter="url(#auGlow)" />
            <circle cx="60" cy="68" r="2" fill="#34D399" filter="url(#auGlow)" />
            <circle cx="85" cy="65" r="2" fill="#34D399" filter="url(#auGlow)" />
          </svg>
  `,

  "diamond_gem": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="dmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#38BDF8" />
                <stop offset="100%" stop-color="#0284C7" />
              </linearGradient>
              <filter id="dmDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <polygon points="60,105 20,40 40,20 80,20 100,40" fill="url(#dmGrad)" filter="url(#dmDrop)" />
            <!-- Facets -->
            <polygon points="60,105 20,40 40,40" fill="#7DD3FC" opacity="0.5" />
            <polygon points="60,105 100,40 80,40" fill="#0369A1" opacity="0.5" />
            <polygon points="60,105 40,40 80,40" fill="#38BDF8" />
            <polygon points="40,20 20,40 40,40" fill="#BAE6FD" />
            <polygon points="80,20 100,40 80,40" fill="#075985" />
            <polygon points="40,20 80,20 80,40 40,40" fill="#7DD3FC" />
          </svg>
  `,

  "crown_royal": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="cwGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FBBF24" />
                <stop offset="100%" stop-color="#B45309" />
              </linearGradient>
              <filter id="cwDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Base -->
            <rect x="25" y="85" width="70" height="10" rx="3" fill="#B45309" filter="url(#cwDrop)" />
            <!-- Crown peaks -->
            <polygon points="25,85 15,35 40,60 60,25 80,60 105,35 95,85" fill="url(#cwGrad)" filter="url(#cwDrop)" />
            <!-- Jewels -->
            <circle cx="15" cy="30" r="5" fill="#EF4444" />
            <circle cx="60" cy="20" r="6" fill="#3B82F6" />
            <circle cx="105" cy="30" r="5" fill="#EF4444" />
            <circle cx="40" cy="70" r="4" fill="#10B981" />
            <circle cx="80" cy="70" r="4" fill="#10B981" />
            <circle cx="60" cy="75" r="4" fill="#EF4444" />
          </svg>
  `,

  "magic_wand": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="mwGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#A78BFA" />
                <stop offset="100%" stop-color="#6D28D9" />
              </linearGradient>
              <filter id="mwDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
              <filter id="mwGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#FCD34D" flood-opacity="0.8"/>
              </filter>
            </defs>
            <!-- Wand stick -->
            <line x1="25" y1="95" x2="85" y2="35" stroke="url(#mwGrad)" stroke-width="10" stroke-linecap="round" filter="url(#mwDrop)" />
            <line x1="75" y1="45" x2="85" y2="35" stroke="#FDE047" stroke-width="10" stroke-linecap="round" />
            <!-- Star / Magic -->
            <path d="M95,15 L100,25 L110,25 L102,32 L105,42 L95,36 L85,42 L88,32 L80,25 L90,25 Z" fill="#FDE047" filter="url(#mwGlow)" />
            <circle cx="75" cy="15" r="3" fill="#FDE047" filter="url(#mwGlow)" />
            <circle cx="105" cy="50" r="2" fill="#FDE047" filter="url(#mwGlow)" />
          </svg>
  `,

  "gift_box": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="gbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#EF4444" />
                <stop offset="100%" stop-color="#991B1B" />
              </linearGradient>
              <filter id="gbDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Box -->
            <rect x="25" y="50" width="70" height="50" fill="url(#gbGrad)" filter="url(#gbDrop)" />
            <!-- Ribbon Vertical -->
            <rect x="50" y="50" width="20" height="50" fill="#FBBF24" />
            <!-- Lid -->
            <rect x="20" y="35" width="80" height="15" rx="2" fill="url(#gbGrad)" filter="url(#gbDrop)" />
            <!-- Lid Ribbon -->
            <rect x="50" y="35" width="20" height="15" fill="#FBBF24" />
            <!-- Bow -->
            <path d="M60,35 C40,15 20,30 50,35" fill="none" stroke="#FBBF24" stroke-width="8" stroke-linecap="round" filter="url(#gbDrop)" />
            <path d="M60,35 C80,15 100,30 70,35" fill="none" stroke="#FBBF24" stroke-width="8" stroke-linecap="round" filter="url(#gbDrop)" />
          </svg>
  `,

  "target_bullseye": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="tbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#EF4444" />
                <stop offset="100%" stop-color="#991B1B" />
              </linearGradient>
              <filter id="tbDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <circle cx="60" cy="60" r="45" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="4" filter="url(#tbDrop)" />
            <circle cx="60" cy="60" r="30" fill="url(#tbGrad)" />
            <circle cx="60" cy="60" r="15" fill="#FFFFFF" />
            <!-- Arrow -->
            <line x1="85" y1="35" x2="60" y2="60" stroke="#1E293B" stroke-width="6" stroke-linecap="round" filter="url(#tbDrop)" />
            <polygon points="85,35 95,25 90,40" fill="#3B82F6" />
            <polygon points="85,35 80,20 95,25" fill="#3B82F6" />
          </svg>
  `,

  "trophy_cup": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="trGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FBBF24" />
                <stop offset="100%" stop-color="#B45309" />
              </linearGradient>
              <filter id="trDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Base -->
            <rect x="40" y="90" width="40" height="15" rx="2" fill="#1E293B" filter="url(#trDrop)" />
            <path d="M55,90 L55,70 L65,70 L65,90 Z" fill="#FBBF24" />
            <!-- Handles -->
            <path d="M35,35 C15,35 15,60 45,55" fill="none" stroke="url(#trGrad)" stroke-width="6" stroke-linecap="round" filter="url(#trDrop)" />
            <path d="M85,35 C105,35 105,60 75,55" fill="none" stroke="url(#trGrad)" stroke-width="6" stroke-linecap="round" filter="url(#trDrop)" />
            <!-- Cup -->
            <path d="M30,20 L90,20 C90,50 75,70 60,70 C45,70 30,50 30,20 Z" fill="url(#trGrad)" filter="url(#trDrop)" />
            <!-- Star inside -->
            <polygon points="60,35 63,42 70,42 65,47 67,54 60,50 53,54 55,47 50,42 57,42" fill="#FEF3C7" />
          </svg>
  `,

  "medal_ribbon": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="mrGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FCD34D" />
                <stop offset="100%" stop-color="#B45309" />
              </linearGradient>
              <filter id="mrDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Ribbon -->
            <polygon points="40,20 60,45 80,20 70,100 60,90 50,100" fill="#EF4444" filter="url(#mrDrop)" />
            <!-- Medal -->
            <circle cx="60" cy="50" r="25" fill="url(#mrGrad)" filter="url(#mrDrop)" />
            <circle cx="60" cy="50" r="18" fill="none" stroke="#FEF3C7" stroke-width="2" opacity="0.6" />
            <text x="60" y="58" font-family="sans-serif" font-weight="bold" font-size="20" fill="#78350F" text-anchor="middle">1</text>
          </svg>
  `,

  "star_favorite": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="sfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FBBF24" />
                <stop offset="100%" stop-color="#D97706" />
              </linearGradient>
              <filter id="sfDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
              <filter id="sfGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#FDE047" flood-opacity="0.6"/>
              </filter>
            </defs>
            <polygon points="60,15 75,45 105,45 80,65 90,95 60,75 30,95 40,65 15,45 45,45" fill="url(#sfGrad)" filter="url(#sfDrop)" />
            <polygon points="60,25 70,48 93,48 74,63 82,85 60,70 38,85 46,63 27,48 50,48" fill="#FDE047" opacity="0.6" filter="url(#sfGlow)" />
          </svg>
  `,

  "heart_like": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="hlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#F43F5E" />
                <stop offset="100%" stop-color="#9F1239" />
              </linearGradient>
              <filter id="hlDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
              <filter id="hlGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#FDA4AF" flood-opacity="0.6"/>
              </filter>
            </defs>
            <path d="M60,105 C60,105 15,70 15,40 C15,20 40,15 60,35 C80,15 105,20 105,40 C105,70 60,105 60,105 Z" fill="url(#hlGrad)" filter="url(#hlDrop)" />
            <path d="M25,40 C25,28 38,25 50,35" fill="none" stroke="#FDA4AF" stroke-width="4" stroke-linecap="round" opacity="0.6" filter="url(#hlGlow)" />
          </svg>
  `,

  "thumbs_up": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="tuGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#3B82F6" />
                <stop offset="100%" stop-color="#1E3A8A" />
              </linearGradient>
              <filter id="tuDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Sleeve -->
            <rect x="15" y="55" width="25" height="45" rx="4" fill="#0F172A" filter="url(#tuDrop)" />
            <!-- Hand Base -->
            <path d="M40,55 L70,55 L75,70 L95,70 A10,10 0 0,1 100,85 L95,85 A10,10 0 0,1 90,100 L40,100 Z" fill="url(#tuGrad)" filter="url(#tuDrop)" />
            <!-- Thumb -->
            <path d="M65,55 L65,30 A10,10 0 0,0 45,30 L45,55 Z" fill="url(#tuGrad)" />
            <!-- Knuckle details -->
            <path d="M75,70 L85,70" stroke="#1E3A8A" stroke-width="3" stroke-linecap="round" />
            <path d="M75,85 L85,85" stroke="#1E3A8A" stroke-width="3" stroke-linecap="round" />
          </svg>
  `,

  "bell_alert": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="baGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FBBF24" />
                <stop offset="100%" stop-color="#B45309" />
              </linearGradient>
              <filter id="baDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
              <filter id="baGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#EF4444" flood-opacity="0.8"/>
              </filter>
            </defs>
            <!-- Bell Body -->
            <path d="M60,20 C40,20 35,45 35,65 C35,75 25,85 25,85 L95,85 C95,85 85,75 85,65 C85,45 80,20 60,20 Z" fill="url(#baGrad)" filter="url(#baDrop)" />
            <!-- Top loop -->
            <circle cx="60" cy="15" r="5" fill="none" stroke="#D97706" stroke-width="4" />
            <!-- Clapper -->
            <circle cx="60" cy="95" r="8" fill="#D97706" filter="url(#baDrop)" />
            <!-- Alert Dot -->
            <circle cx="85" cy="30" r="10" fill="#EF4444" filter="url(#baGlow)" />
            <circle cx="85" cy="30" r="4" fill="#FFFFFF" />
            <!-- Action lines -->
            <path d="M30,30 L20,20 M15,50 L25,50" stroke="#FBBF24" stroke-width="4" stroke-linecap="round" />
          </svg>
  `,

  "calendar_event": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="ceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#E2E8F0" />
                <stop offset="100%" stop-color="#94A3B8" />
              </linearGradient>
              <filter id="ceDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Back page -->
            <rect x="20" y="30" width="80" height="70" rx="6" fill="url(#ceGrad)" filter="url(#ceDrop)" />
            <!-- Red Header -->
            <rect x="20" y="30" width="80" height="20" rx="6" fill="#EF4444" />
            <rect x="20" y="45" width="80" height="5" fill="#EF4444" />
            <!-- Binders -->
            <rect x="35" y="15" width="8" height="25" rx="4" fill="#1E293B" filter="url(#ceDrop)" />
            <rect x="75" y="15" width="8" height="25" rx="4" fill="#1E293B" filter="url(#ceDrop)" />
            <!-- Dates / Grid -->
            <rect x="30" y="60" width="15" height="10" rx="2" fill="#3B82F6" />
            <rect x="50" y="60" width="15" height="10" rx="2" fill="#CBD5E1" />
            <rect x="70" y="60" width="15" height="10" rx="2" fill="#CBD5E1" />
            <rect x="30" y="75" width="15" height="10" rx="2" fill="#CBD5E1" />
            <rect x="50" y="75" width="15" height="10" rx="2" fill="#CBD5E1" />
            <rect x="70" y="75" width="15" height="10" rx="2" fill="#CBD5E1" />
          </svg>
  `,

  "checklist_clipboard": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="cbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#D97706" />
                <stop offset="100%" stop-color="#78350F" />
              </linearGradient>
              <filter id="cbDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Board -->
            <rect x="25" y="25" width="70" height="85" rx="4" fill="url(#cbGrad)" filter="url(#cbDrop)" />
            <!-- Paper -->
            <rect x="35" y="35" width="50" height="65" fill="#FFFFFF" />
            <!-- Clip -->
            <path d="M45,25 L75,25 L75,15 C75,10 45,10 45,15 Z" fill="#94A3B8" filter="url(#cbDrop)" />
            <!-- Checks & lines -->
            <path d="M40,50 L45,55 L52,45" fill="none" stroke="#10B981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            <line x1="58" y1="50" x2="75" y2="50" stroke="#CBD5E1" stroke-width="3" stroke-linecap="round" />
            <path d="M40,65 L45,70 L52,60" fill="none" stroke="#10B981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            <line x1="58" y1="65" x2="75" y2="65" stroke="#CBD5E1" stroke-width="3" stroke-linecap="round" />
            <!-- Empty box -->
            <rect x="42" y="78" width="6" height="6" fill="none" stroke="#94A3B8" stroke-width="2" />
            <line x1="58" y1="80" x2="75" y2="80" stroke="#CBD5E1" stroke-width="3" stroke-linecap="round" />
          </svg>
  `,

  "post_it_note": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="piGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FEF08A" />
                <stop offset="100%" stop-color="#FACC15" />
              </linearGradient>
              <filter id="piDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Shadow offset for curled corner -->
            <path d="M25,25 L95,25 L95,75 L75,95 L25,95 Z" fill="url(#piGrad)" filter="url(#piDrop)" />
            <!-- Fold -->
            <polygon points="95,75 75,75 75,95" fill="#EAB308" />
            <!-- Pin -->
            <circle cx="60" cy="15" r="8" fill="#EF4444" filter="url(#piDrop)" />
            <line x1="60" y1="23" x2="60" y2="35" stroke="#94A3B8" stroke-width="2" />
            <circle cx="60" cy="12" r="3" fill="#FFFFFF" opacity="0.6" />
            <!-- Text -->
            <line x1="35" y1="45" x2="85" y2="45" stroke="#A16207" stroke-width="4" stroke-linecap="round" opacity="0.5" />
            <line x1="35" y1="60" x2="75" y2="60" stroke="#A16207" stroke-width="4" stroke-linecap="round" opacity="0.5" />
          </svg>
  `,

  "book_open": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="bkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#3B82F6" />
                <stop offset="100%" stop-color="#1E3A8A" />
              </linearGradient>
              <filter id="bkDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Cover -->
            <path d="M15,25 Q35,20 60,30 Q85,20 105,25 L105,95 Q85,90 60,100 Q35,90 15,95 Z" fill="url(#bkGrad)" filter="url(#bkDrop)" />
            <!-- Pages -->
            <path d="M20,35 Q40,30 60,40 Q80,30 100,35 L100,85 Q80,80 60,90 Q40,80 20,85 Z" fill="#FFFFFF" />
            <!-- Spine line -->
            <line x1="60" y1="40" x2="60" y2="90" stroke="#CBD5E1" stroke-width="2" />
            <!-- Text lines -->
            <line x1="30" y1="50" x2="50" y2="55" stroke="#94A3B8" stroke-width="3" stroke-linecap="round" />
            <line x1="30" y1="60" x2="50" y2="65" stroke="#94A3B8" stroke-width="3" stroke-linecap="round" />
            <line x1="70" y1="55" x2="90" y2="50" stroke="#94A3B8" stroke-width="3" stroke-linecap="round" />
            <line x1="70" y1="65" x2="90" y2="60" stroke="#94A3B8" stroke-width="3" stroke-linecap="round" />
            <!-- Bookmark -->
            <polygon points="50,20 60,40 55,50 45,40" fill="#EF4444" />
          </svg>
  `,

  "paint_palette": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="ppGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FDE047" />
                <stop offset="100%" stop-color="#D97706" />
              </linearGradient>
              <filter id="ppDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Wooden Palette -->
            <path d="M25,60 C25,20 95,20 95,60 C95,95 70,100 50,100 C30,100 25,80 25,60 Z" fill="url(#ppGrad)" filter="url(#ppDrop)" />
            <!-- Thumb hole -->
            <circle cx="45" cy="75" r="10" fill="#000000" opacity="0.1" />
            <circle cx="43" cy="73" r="10" fill="#FFFFFF" />
            <!-- Paint globs -->
            <circle cx="40" cy="40" r="8" fill="#EF4444" filter="url(#ppDrop)" />
            <circle cx="60" cy="30" r="7" fill="#3B82F6" filter="url(#ppDrop)" />
            <circle cx="80" cy="45" r="9" fill="#10B981" filter="url(#ppDrop)" />
            <circle cx="75" cy="65" r="8" fill="#8B5CF6" filter="url(#ppDrop)" />
            <!-- Brush -->
            <line x1="95" y1="10" x2="65" y2="50" stroke="#475569" stroke-width="6" stroke-linecap="round" filter="url(#ppDrop)" />
            <polygon points="65,50 70,45 60,60" fill="#D97706" />
            <polygon points="60,60 55,65 52,70 65,58" fill="#EF4444" />
          </svg>
  `,

  "camera_lens": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="cl2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#1E293B" />
                <stop offset="100%" stop-color="#020617" />
              </linearGradient>
              <filter id="cl2Drop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
              <radialGradient id="clGlass" cx="40%" cy="40%" r="60%">
                <stop offset="0%" stop-color="#38BDF8" />
                <stop offset="50%" stop-color="#0284C7" />
                <stop offset="100%" stop-color="#0F172A" />
              </radialGradient>
            </defs>
            <!-- Body -->
            <rect x="20" y="30" width="80" height="60" rx="8" fill="#475569" filter="url(#cl2Drop)" />
            <rect x="20" y="30" width="80" height="20" rx="8" fill="#334155" />
            <circle cx="35" cy="40" r="5" fill="#EF4444" />
            <rect x="75" y="25" width="15" height="10" rx="2" fill="#1E293B" />
            <!-- Lens -->
            <circle cx="60" cy="60" r="25" fill="url(#cl2Grad)" filter="url(#cl2Drop)" />
            <circle cx="60" cy="60" r="18" fill="url(#clGlass)" />
            <!-- Reflection -->
            <path d="M45,55 A15,15 0 0,1 70,45" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.6" />
            <circle cx="55" cy="55" r="3" fill="#FFFFFF" opacity="0.8" />
          </svg>
  `,

  "video_clapper": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="vcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#1E293B" />
                <stop offset="100%" stop-color="#020617" />
              </linearGradient>
              <filter id="vcDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Bottom Board -->
            <rect x="20" y="45" width="80" height="55" rx="2" fill="url(#vcGrad)" filter="url(#vcDrop)" />
            <!-- Top Stick (angled) -->
            <g transform="rotate(-15 20 40)">
              <rect x="20" y="25" width="80" height="15" rx="2" fill="url(#vcGrad)" filter="url(#vcDrop)" />
              <polygon points="30,25 40,40 50,40 40,25" fill="#FFFFFF" />
              <polygon points="60,25 70,40 80,40 70,25" fill="#FFFFFF" />
              <polygon points="90,25 100,40 100,25" fill="#FFFFFF" />
            </g>
            <!-- Hinge -->
            <circle cx="25" cy="40" r="4" fill="#F59E0B" />
            <!-- Text lines -->
            <line x1="30" y1="65" x2="60" y2="65" stroke="#E2E8F0" stroke-width="4" stroke-linecap="round" />
            <line x1="30" y1="80" x2="75" y2="80" stroke="#E2E8F0" stroke-width="4" stroke-linecap="round" />
            <rect x="80" y="60" width="10" height="10" fill="#EF4444" />
          </svg>
  `,

  "microphone_studio": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="msGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#94A3B8" />
                <stop offset="100%" stop-color="#475569" />
              </linearGradient>
              <filter id="msDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Base & Stand -->
            <rect x="40" y="95" width="40" height="10" rx="4" fill="#1E293B" filter="url(#msDrop)" />
            <rect x="55" y="75" width="10" height="25" fill="#1E293B" />
            <!-- Mic mount -->
            <path d="M40,55 A20,20 0 0,0 80,55" fill="none" stroke="#64748B" stroke-width="6" stroke-linecap="round" />
            <line x1="60" y1="75" x2="60" y2="80" stroke="#64748B" stroke-width="6" />
            <!-- Mic Head -->
            <rect x="45" y="25" width="30" height="45" rx="15" fill="url(#msGrad)" filter="url(#msDrop)" />
            <path d="M45,40 L75,40 M45,55 L75,55" stroke="#1E293B" stroke-width="2" />
            <circle cx="60" cy="15" r="5" fill="#EF4444" />
          </svg>
  `,

  "map_pin": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="mp2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#EF4444" />
                <stop offset="100%" stop-color="#991B1B" />
              </linearGradient>
              <filter id="mp2Drop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Base map -->
            <polygon points="15,45 55,30 85,40 110,25 110,75 85,90 55,80 15,95" fill="#E2E8F0" filter="url(#mp2Drop)" />
            <line x1="55" y1="30" x2="55" y2="80" stroke="#CBD5E1" stroke-width="4" />
            <line x1="85" y1="40" x2="85" y2="90" stroke="#CBD5E1" stroke-width="4" />
            <!-- Pin -->
            <path d="M60,20 C45,20 35,30 35,45 C35,70 60,95 60,95 C60,95 85,70 85,45 C85,30 75,20 60,20 Z" fill="url(#mp2Grad)" filter="url(#mp2Drop)" />
            <circle cx="60" cy="45" r="10" fill="#FFFFFF" />
          </svg>
  `,

  "ticket_stub": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="tkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#F59E0B" />
                <stop offset="100%" stop-color="#B45309" />
              </linearGradient>
              <filter id="tkDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <path d="M20,40 L40,40 A10,10 0 0,0 60,40 L100,40 L100,80 L60,80 A10,10 0 0,0 40,80 L20,80 Z" fill="url(#tkGrad)" filter="url(#tkDrop)" />
            <line x1="50" y1="45" x2="50" y2="75" stroke="#FFFFFF" stroke-width="4" stroke-dasharray="6 4" />
            <rect x="70" y="55" width="20" height="10" fill="#FFFFFF" opacity="0.6" />
            <circle cx="30" cy="60" r="4" fill="#FFFFFF" />
          </svg>
  `,

  "shopping_bag": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="sbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#10B981" />
                <stop offset="100%" stop-color="#047857" />
              </linearGradient>
              <filter id="sbDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Handles -->
            <path d="M45,45 L45,30 A15,15 0 0,1 75,30 L75,45" fill="none" stroke="#E2E8F0" stroke-width="8" stroke-linecap="round" />
            <!-- Bag Body -->
            <path d="M30,45 L90,45 L95,100 L25,100 Z" fill="url(#sbGrad)" filter="url(#sbDrop)" />
            <path d="M30,45 L90,45 L85,65 L35,65 Z" fill="#047857" opacity="0.4" />
            <!-- Detail logo -->
            <circle cx="60" cy="75" r="8" fill="#FFFFFF" opacity="0.8" />
          </svg>
  `,

  "coin_stack": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="cs3Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FACC15" />
                <stop offset="100%" stop-color="#A16207" />
              </linearGradient>
              <filter id="cs3Drop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Bottom Coin -->
            <ellipse cx="60" cy="90" rx="35" ry="12" fill="#B45309" filter="url(#cs3Drop)" />
            <rect x="25" y="80" width="70" height="10" fill="url(#cs3Grad)" />
            <ellipse cx="60" cy="80" rx="35" ry="12" fill="url(#cs3Grad)" />
            <!-- Middle Coin -->
            <ellipse cx="60" cy="75" rx="35" ry="12" fill="#B45309" filter="url(#cs3Drop)" />
            <rect x="25" y="65" width="70" height="10" fill="url(#cs3Grad)" />
            <ellipse cx="60" cy="65" rx="35" ry="12" fill="url(#cs3Grad)" />
            <!-- Top Coin -->
            <ellipse cx="60" cy="60" rx="35" ry="12" fill="#B45309" filter="url(#cs3Drop)" />
            <rect x="25" y="50" width="70" height="10" fill="url(#cs3Grad)" />
            <ellipse cx="60" cy="50" rx="35" ry="12" fill="url(#cs3Grad)" />
            <!-- Symbol -->
            <text x="60" y="55" font-family="sans-serif" font-weight="bold" font-size="16" fill="#78350F" text-anchor="middle">$</text>
          </svg>
  `,

  "wallet_money": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="wmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#8B5CF6" />
                <stop offset="100%" stop-color="#4C1D95" />
              </linearGradient>
              <filter id="wmDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Bill inside -->
            <rect x="35" y="25" width="50" height="40" rx="4" fill="#10B981" filter="url(#wmDrop)" />
            <circle cx="60" cy="40" r="8" fill="#047857" />
            <text x="60" y="44" font-family="sans-serif" font-weight="bold" font-size="10" fill="#A7F3D0" text-anchor="middle">$</text>
            <!-- Wallet Back -->
            <rect x="20" y="45" width="80" height="50" rx="6" fill="#4C1D95" filter="url(#wmDrop)" />
            <!-- Wallet Front -->
            <path d="M20,65 L100,65 L100,90 A6,6 0 0,1 94,96 L26,96 A6,6 0 0,1 20,90 Z" fill="url(#wmGrad)" />
            <!-- Strap/Button -->
            <rect x="50" y="55" width="20" height="25" rx="4" fill="#1E293B" />
            <circle cx="60" cy="70" r="4" fill="#FDE047" />
          </svg>
  `,

  "umbrella_weather": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="umGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#EF4444" />
                <stop offset="100%" stop-color="#991B1B" />
              </linearGradient>
              <filter id="umDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Stick -->
            <line x1="60" y1="30" x2="60" y2="85" stroke="#1E293B" stroke-width="6" />
            <path d="M60,85 A10,10 0 0,0 75,85" fill="none" stroke="#1E293B" stroke-width="6" stroke-linecap="round" />
            <!-- Canopy -->
            <path d="M15,60 C15,30 40,15 60,15 C80,15 105,30 105,60 C90,50 80,60 60,50 C40,60 30,50 15,60 Z" fill="url(#umGrad)" filter="url(#umDrop)" />
            <!-- Rain drops -->
            <path d="M30,75 L30,85" stroke="#38BDF8" stroke-width="3" stroke-linecap="round" />
            <path d="M90,70 L90,80" stroke="#38BDF8" stroke-width="3" stroke-linecap="round" />
            <path d="M40,95 L40,105" stroke="#38BDF8" stroke-width="3" stroke-linecap="round" />
          </svg>
  `,

  "fire_flame": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="ffGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#F97316" />
                <stop offset="100%" stop-color="#EA580C" />
              </linearGradient>
              <filter id="ffDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
              <filter id="ffGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#F59E0B" flood-opacity="0.8"/>
              </filter>
            </defs>
            <!-- Outer flame -->
            <path d="M60,15 C90,45 90,95 60,95 C30,95 30,45 60,15 Z" fill="url(#ffGrad)" filter="url(#ffDrop)" />
            <!-- Inner flame -->
            <path d="M60,45 C75,65 75,85 60,85 C45,85 45,65 60,45 Z" fill="#FCD34D" filter="url(#ffGlow)" />
            <!-- Detail spark -->
            <path d="M60,15 C55,30 45,40 40,35 C45,25 55,20 60,15 Z" fill="#FB923C" />
          </svg>
  `,

  "snowflake_winter": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="sfwGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#BAE6FD" />
                <stop offset="100%" stop-color="#38BDF8" />
              </linearGradient>
              <filter id="sfwDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
              <filter id="sfwGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#7DD3FC" flood-opacity="0.8"/>
              </filter>
            </defs>
            <!-- Snowflake structure -->
            <g stroke="url(#sfwGrad)" stroke-width="6" stroke-linecap="round" filter="url(#sfwDrop)">
              <line x1="60" y1="20" x2="60" y2="100" />
              <line x1="20" y1="60" x2="100" y2="60" />
              <line x1="32" y1="32" x2="88" y2="88" />
              <line x1="32" y1="88" x2="88" y2="32" />
              
              <!-- Prongs (top/bottom) -->
              <polyline points="50,30 60,20 70,30" fill="none" />
              <polyline points="50,90 60,100 70,90" fill="none" />
              
              <!-- Prongs (left/right) -->
              <polyline points="30,50 20,60 30,70" fill="none" />
              <polyline points="90,50 100,60 90,70" fill="none" />
            </g>
            <!-- Center dot -->
            <circle cx="60" cy="60" r="6" fill="#FFFFFF" filter="url(#sfwGlow)" />
          </svg>
  `,

  "sun_day": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="sndGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FDE047" />
                <stop offset="100%" stop-color="#F59E0B" />
              </linearGradient>
              <filter id="sndDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
              <filter id="sndGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#FEF08A" flood-opacity="0.8"/>
              </filter>
            </defs>
            <circle cx="60" cy="60" r="25" fill="url(#sndGrad)" filter="url(#sndDrop)" />
            <g stroke="url(#sndGrad)" stroke-width="6" stroke-linecap="round" filter="url(#sndGlow)">
              <line x1="60" y1="15" x2="60" y2="25" />
              <line x1="60" y1="95" x2="60" y2="105" />
              <line x1="15" y1="60" x2="25" y2="60" />
              <line x1="95" y1="60" x2="105" y2="60" />
              <line x1="28" y1="28" x2="35" y2="35" />
              <line x1="85" y1="85" x2="92" y2="92" />
              <line x1="28" y1="92" x2="35" y2="85" />
              <line x1="85" y1="35" x2="92" y2="28" />
            </g>
          </svg>
  `,

  "moon_night": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="mnnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#F1F5F9" />
                <stop offset="100%" stop-color="#94A3B8" />
              </linearGradient>
              <filter id="mnnDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
              <filter id="mnnGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#F8FAFC" flood-opacity="0.6"/>
              </filter>
            </defs>
            <path d="M60,15 A45,45 0 1,0 100,85 A35,35 0 1,1 60,15 Z" fill="url(#mnnGrad)" filter="url(#mnnDrop)" />
            <!-- Craters -->
            <circle cx="35" cy="55" r="5" fill="#64748B" opacity="0.3" />
            <circle cx="45" cy="75" r="8" fill="#64748B" opacity="0.3" />
            <circle cx="25" cy="70" r="3" fill="#64748B" opacity="0.3" />
            <!-- Stars -->
            <circle cx="85" cy="30" r="2" fill="#FFFFFF" filter="url(#mnnGlow)" />
            <circle cx="100" cy="45" r="3" fill="#FFFFFF" filter="url(#mnnGlow)" />
            <circle cx="80" cy="55" r="1.5" fill="#FFFFFF" filter="url(#mnnGlow)" />
          </svg>
  `,

  "cloud_rain": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="cr2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#94A3B8" />
                <stop offset="100%" stop-color="#475569" />
              </linearGradient>
              <filter id="cr2Drop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Cloud -->
            <path d="M35,65 A15,15 0 0,1 45,35 A25,25 0 0,1 85,40 A15,15 0 0,1 90,65 Z" fill="url(#cr2Grad)" filter="url(#cr2Drop)" />
            <!-- Raindrops -->
            <path d="M45,75 L40,90" stroke="#38BDF8" stroke-width="4" stroke-linecap="round" filter="url(#cr2Drop)" />
            <path d="M60,75 L55,90" stroke="#38BDF8" stroke-width="4" stroke-linecap="round" filter="url(#cr2Drop)" />
            <path d="M75,75 L70,90" stroke="#38BDF8" stroke-width="4" stroke-linecap="round" filter="url(#cr2Drop)" />
            <path d="M50,95 L45,110" stroke="#38BDF8" stroke-width="4" stroke-linecap="round" filter="url(#cr2Drop)" />
            <path d="M65,95 L60,110" stroke="#38BDF8" stroke-width="4" stroke-linecap="round" filter="url(#cr2Drop)" />
          </svg>
  `,

  "lightning_bolt": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="lbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FDE047" />
                <stop offset="100%" stop-color="#F59E0B" />
              </linearGradient>
              <filter id="lbDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
              <filter id="lbGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#FDE047" flood-opacity="0.8"/>
              </filter>
            </defs>
            <polygon points="65,15 35,60 55,60 45,105 85,50 60,50" fill="url(#lbGrad)" filter="url(#lbDrop)" />
            <polygon points="62,25 42,55 58,55 50,90 75,50 55,50" fill="#FEF08A" filter="url(#lbGlow)" />
          </svg>
  `,

  "tree_pine": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="tpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#10B981" />
                <stop offset="100%" stop-color="#047857" />
              </linearGradient>
              <filter id="tpDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Trunk -->
            <rect x="52" y="80" width="16" height="30" fill="#78350F" filter="url(#tpDrop)" />
            <!-- Leaves -->
            <polygon points="60,15 30,50 45,50 20,85 100,85 75,50 90,50" fill="url(#tpGrad)" filter="url(#tpDrop)" />
            <polygon points="60,15 60,85 100,85 75,50 90,50" fill="#047857" opacity="0.4" />
          </svg>
  `,

  "flower_rose": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="frGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#F43F5E" />
                <stop offset="100%" stop-color="#9F1239" />
              </linearGradient>
              <filter id="frDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Stem & Leaves -->
            <path d="M60,60 C70,80 50,100 60,115" fill="none" stroke="#10B981" stroke-width="6" filter="url(#frDrop)" />
            <path d="M60,80 C40,80 40,65 40,65 C40,65 50,75 60,80 Z" fill="#10B981" />
            <path d="M62,95 C80,90 85,80 85,80 C85,80 75,95 62,95 Z" fill="#10B981" />
            <!-- Rose Bloom -->
            <circle cx="60" cy="45" r="25" fill="url(#frGrad)" filter="url(#frDrop)" />
            <path d="M50,35 C65,25 75,40 60,55 C45,40 50,25 50,35 Z" fill="#E11D48" />
            <path d="M60,40 A5,5 0 1,1 65,45 A10,10 0 1,1 55,50 A15,15 0 1,1 70,55" fill="none" stroke="#FDA4AF" stroke-width="3" stroke-linecap="round" />
          </svg>
  `,

  "leaf_plant": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="lpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#34D399" />
                <stop offset="100%" stop-color="#047857" />
              </linearGradient>
              <filter id="lpDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <path d="M60,105 C60,105 20,80 20,40 C20,20 60,15 60,15 C60,15 100,20 100,40 C100,80 60,105 60,105 Z" fill="url(#lpGrad)" filter="url(#lpDrop)" />
            <path d="M60,105 C60,105 100,80 100,40 C100,20 60,15 60,15 Z" fill="#10B981" opacity="0.6" />
            <!-- Veins -->
            <path d="M60,100 L60,20" stroke="#064E3B" stroke-width="4" stroke-linecap="round" />
            <path d="M60,80 L80,60" stroke="#064E3B" stroke-width="4" stroke-linecap="round" />
            <path d="M60,65 L40,50" stroke="#064E3B" stroke-width="4" stroke-linecap="round" />
            <path d="M60,50 L75,35" stroke="#064E3B" stroke-width="4" stroke-linecap="round" />
          </svg>
  `,

  "water_drop": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="wdGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#7DD3FC" />
                <stop offset="100%" stop-color="#0284C7" />
              </linearGradient>
              <filter id="wdDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
              <filter id="wdGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#BAE6FD" flood-opacity="0.7"/>
              </filter>
            </defs>
            <path d="M60,15 C85,50 95,70 95,85 C95,105 75,115 60,115 C45,115 25,105 25,85 C25,70 35,50 60,15 Z" fill="url(#wdGrad)" filter="url(#wdDrop)" />
            <!-- Highlight -->
            <path d="M40,80 A20,20 0 0,1 55,50" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" opacity="0.8" filter="url(#wdGlow)" />
            <circle cx="45" cy="40" r="4" fill="#FFFFFF" opacity="0.6" />
          </svg>
  `,

  "key_security": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="ksGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FBBF24" />
                <stop offset="100%" stop-color="#B45309" />
              </linearGradient>
              <filter id="ksDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Head -->
            <circle cx="35" cy="45" r="20" fill="url(#ksGrad)" filter="url(#ksDrop)" />
            <circle cx="35" cy="45" r="8" fill="#1E293B" />
            <!-- Shaft -->
            <rect x="50" y="40" width="50" height="10" rx="2" fill="url(#ksGrad)" filter="url(#ksDrop)" />
            <!-- Teeth -->
            <rect x="70" y="50" width="10" height="15" rx="2" fill="url(#ksGrad)" filter="url(#ksDrop)" />
            <rect x="90" y="50" width="10" height="15" rx="2" fill="url(#ksGrad)" filter="url(#ksDrop)" />
          </svg>
  `,

  "tent_camp": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="tc2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#F97316" />
                <stop offset="100%" stop-color="#C2410C" />
              </linearGradient>
              <filter id="tc2Drop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Back tent -->
            <polygon points="60,30 100,90 20,90" fill="#EA580C" filter="url(#tc2Drop)" />
            <!-- Front flaps -->
            <polygon points="60,30 60,90 20,90" fill="url(#tc2Grad)" />
            <polygon points="60,30 100,90 60,90" fill="#C2410C" />
            <!-- Opening -->
            <polygon points="60,45 75,90 45,90" fill="#1E293B" />
            <!-- Pegs/Ropes -->
            <line x1="60" y1="30" x2="10" y2="95" stroke="#CBD5E1" stroke-width="2" />
            <line x1="60" y1="30" x2="110" y2="95" stroke="#CBD5E1" stroke-width="2" />
          </svg>
  `,

  "compass_tool": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="cptGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#94A3B8" />
                <stop offset="100%" stop-color="#475569" />
              </linearGradient>
              <filter id="cptDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Joint -->
            <circle cx="60" cy="25" r="10" fill="#1E293B" filter="url(#cptDrop)" />
            <circle cx="60" cy="25" r="4" fill="#94A3B8" />
            <!-- Left Leg -->
            <path d="M55,30 L25,95 L30,100 L60,35 Z" fill="url(#cptGrad)" filter="url(#cptDrop)" />
            <!-- Right Leg (with pencil) -->
            <path d="M65,30 L95,90 L90,95 L60,35 Z" fill="url(#cptGrad)" filter="url(#cptDrop)" />
            <!-- Pencil tip -->
            <polygon points="95,90 90,95 100,105" fill="#FBBF24" />
            <polygon points="97,97 100,105 94,100" fill="#1E293B" />
            <!-- Point tip -->
            <polygon points="25,95 30,100 20,105" fill="#CBD5E1" />
          </svg>
  `,

  "measure_tape": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="mtpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FBBF24" />
                <stop offset="100%" stop-color="#B45309" />
              </linearGradient>
              <filter id="mtpDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Tape extended -->
            <path d="M60,85 L105,85 L105,75 L60,75 Z" fill="#FDE047" filter="url(#mtpDrop)" />
            <!-- Tape markings -->
            <line x1="70" y1="75" x2="70" y2="80" stroke="#1E293B" stroke-width="2" />
            <line x1="80" y1="75" x2="80" y2="82" stroke="#1E293B" stroke-width="2" />
            <line x1="90" y1="75" x2="90" y2="80" stroke="#1E293B" stroke-width="2" />
            <line x1="100" y1="75" x2="100" y2="82" stroke="#1E293B" stroke-width="2" />
            <!-- Case -->
            <rect x="15" y="30" width="60" height="60" rx="10" fill="url(#mtpGrad)" filter="url(#mtpDrop)" />
            <!-- Center label -->
            <circle cx="45" cy="60" r="15" fill="#1E293B" />
            <!-- Lock button -->
            <rect x="72" y="45" width="8" height="15" rx="2" fill="#1E293B" filter="url(#mtpDrop)" />
          </svg>
  `,

  "paint_roller": `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
            <defs>
              <linearGradient id="prGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#38BDF8" />
                <stop offset="100%" stop-color="#0284C7" />
              </linearGradient>
              <filter id="prDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
              </filter>
            </defs>
            <!-- Paint swipe on background -->
            <path d="M10,25 C30,15 50,35 70,25 C90,15 110,35 110,25" fill="none" stroke="#BAE6FD" stroke-width="20" stroke-linecap="round" opacity="0.3" />
            <!-- Handle -->
            <rect x="55" y="70" width="10" height="40" rx="4" fill="#1E293B" filter="url(#prDrop)" />
            <!-- Metal frame -->
            <path d="M60,70 L60,50 L95,50 L95,30" fill="none" stroke="#94A3B8" stroke-width="6" stroke-linecap="round" filter="url(#prDrop)" />
            <!-- Roller cylinder -->
            <rect x="25" y="20" width="70" height="20" rx="4" fill="url(#prGrad)" filter="url(#prDrop)" />
            <!-- Paint drops -->
            <circle cx="40" cy="50" r="3" fill="#0284C7" />
            <circle cx="55" cy="45" r="2" fill="#0284C7" />
            <circle cx="75" cy="55" r="4" fill="#0284C7" />
          </svg>
  `,

  });

  // Automatically construct formatted array
  const formattedLuxeIcons = Object.keys(window.AxiconsLuxe).map((key, index) => {
    
    let category = "general";
    const lowerKey = key.toLowerCase();
    
    // Categorization logic
    if (lowerKey.includes('brain') || lowerKey.includes('logic') || lowerKey.includes('system') || lowerKey.includes('code') || lowerKey.includes('server') || lowerKey.includes('keyboard') || lowerKey.includes('api') || lowerKey.includes('terminal') || lowerKey.includes('bug')) category = "development";
    else if (lowerKey.includes('design') || lowerKey.includes('palette') || lowerKey.includes('paint') || lowerKey.includes('brush') || lowerKey.includes('typography') || lowerKey.includes('pencil') || lowerKey.includes('eraser')) category = "design";
    else if (lowerKey.includes('rocket') || lowerKey.includes('launch') || lowerKey.includes('spaceship') || lowerKey.includes('bull') || lowerKey.includes('bear') || lowerKey.includes('invoice') || lowerKey.includes('store')) category = "business";
    else if (lowerKey.includes('crane') || lowerKey.includes('build') || lowerKey.includes('structure')) category = "infrastructure";
    else if (lowerKey.includes('home') || lowerKey.includes('house') || lowerKey.includes('dashboard') || lowerKey.includes('folder') || lowerKey.includes('settings') || lowerKey.includes('filter') || lowerKey.includes('menu') || lowerKey.includes('layout') || lowerKey.includes('cursor')) category = "ui";
    else if (lowerKey.includes('fire') || lowerKey.includes('flame') || lowerKey.includes('hot') || lowerKey.includes('share') || lowerKey.includes('heart')) category = "social";
    else if (lowerKey.includes('shield') || lowerKey.includes('security') || lowerKey.includes('lock') || lowerKey.includes('vault') || lowerKey.includes('bank') || lowerKey.includes('gear') || lowerKey.includes('cctv') || lowerKey.includes('firewall') || lowerKey.includes('password') || lowerKey.includes('police')) category = "security";
    else if (lowerKey.includes('finance') || lowerKey.includes('wealth') || lowerKey.includes('coin') || lowerKey.includes('money') || lowerKey.includes('piggy') || lowerKey.includes('wallet') || lowerKey.includes('credit')) category = "finance";
    else if (lowerKey.includes('media') || lowerKey.includes('video') || lowerKey.includes('music') || lowerKey.includes('gamepad') || lowerKey.includes('vr') || lowerKey.includes('smartwatch') || lowerKey.includes('laptop') || lowerKey.includes('mouse') || lowerKey.includes('smartphone') || lowerKey.includes('headphone') || lowerKey.includes('speaker') || lowerKey.includes('microphone')) category = "media";
    else if (lowerKey.includes('chart') || lowerKey.includes('candlestick') || lowerKey.includes('analytics') || lowerKey.includes('graph') || lowerKey.includes('node') || lowerKey.includes('database')) category = "data";
    else if (lowerKey.includes('verified') || lowerKey.includes('star') || lowerKey.includes('achievement') || lowerKey.includes('ticket') || lowerKey.includes('gift') || lowerKey.includes('ribbon') || lowerKey.includes('trophy')) category = "entertainment";
    else if (lowerKey.includes('cart') || lowerKey.includes('discount') || lowerKey.includes('receipt') || lowerKey.includes('basket') || lowerKey.includes('tag')) category = "commerce";
    else if (lowerKey.includes('flask') || lowerKey.includes('atom') || lowerKey.includes('microscope') || lowerKey.includes('telescope') || lowerKey.includes('dna') || lowerKey.includes('planet') || lowerKey.includes('magnet')) category = "science";
    else if (lowerKey.includes('pill') || lowerKey.includes('stethoscope') || lowerKey.includes('dumbbell') || lowerKey.includes('coffee') || lowerKey.includes('apple') || lowerKey.includes('leaf') || lowerKey.includes('bed') || lowerKey.includes('sun')) category = "lifestyle";
    else if (lowerKey.includes('globe') || lowerKey.includes('network') || lowerKey.includes('cloud') || lowerKey.includes('edge') || lowerKey.includes('hosting') || lowerKey.includes('container') || lowerKey.includes('gateway') || lowerKey.includes('router') || lowerKey.includes('plug') || lowerKey.includes('battery') || lowerKey.includes('microchip') || lowerKey.includes('printer')) category = "network";
    else if (lowerKey.includes('search')) category = "general";
    
    let nameToFormat = key;
    if (!nameToFormat.endsWith('Luxe') && !nameToFormat.endsWith('-Luxe')) {
      nameToFormat = nameToFormat.charAt(0).toUpperCase() + nameToFormat.slice(1) + '-Luxe';
    }

    return {
      id: 10000 + index,
      name: nameToFormat,
      category: category,
      svgContent: window.AxiconsLuxe[key]
    };
  });

  if (typeof window.axicons === 'undefined') window.axicons = [];
  window.axicons = window.axicons.concat(formattedLuxeIcons);
  
})();
