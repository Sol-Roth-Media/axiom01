/**
 * Axiom01 - Axicons Luxe Variant
 * Ultra-detailed, illustrative SVG icons with rich gradients, shadows, and depth.
 */

(function () {
if (window.__axiconsLuxeBundleLoaded) return;
window.__axiconsLuxeBundleLoaded = true;

// The raw SVG strings provided
const rawLuxe = {
  // 1. ROCKET (Launch, Startup, Fast Performance)
  rocket: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="rBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="100%" stop-color="#94A3B8" />
        </linearGradient>
        <linearGradient id="rWindow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#7DD3FC" />
          <stop offset="100%" stop-color="#0284C7" />
        </linearGradient>
        <linearGradient id="rFire" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FCD34D" />
          <stop offset="50%" stop-color="#F97316" />
          <stop offset="100%" stop-color="#DC2626" />
        </linearGradient>
        <filter id="rGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#EA580C" flood-opacity="0.5"/>
        </filter>
      </defs>
      <!-- Exhaust Flame -->
      <path d="M45,85 C45,100 60,115 60,115 C60,115 75,100 75,85 Z" fill="url(#rFire)" filter="url(#rGlow)" />
      <!-- Left Fin -->
      <path d="M45,65 L25,85 L45,85 Z" fill="#EF4444" />
      <!-- Right Fin -->
      <path d="M75,65 L95,85 L75,85 Z" fill="#DC2626" />
      <!-- Main Hull -->
      <path d="M60,15 C35,45 45,85 45,85 L75,85 C75,85 85,45 60,15 Z" fill="url(#rBody)" />
      <!-- Window -->
      <circle cx="60" cy="50" r="10" fill="url(#rWindow)" stroke="#475569" stroke-width="3" />
      <!-- Highlight -->
      <path d="M55,25 C45,40 50,60 50,60" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.6" />
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

  // 4. PLANET (Global, Network, Open Source)
  planet: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="pSphere" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#C084FC" />
          <stop offset="100%" stop-color="#6B21A8" />
        </linearGradient>
        <linearGradient id="pRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F472B6" />
          <stop offset="100%" stop-color="#38BDF8" />
        </linearGradient>
        <filter id="pGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#C084FC" flood-opacity="0.6"/>
        </filter>
      </defs>
      <!-- Back of Ring -->
      <ellipse cx="60" cy="60" rx="55" ry="15" fill="none" stroke="url(#pRing)" stroke-width="8" opacity="0.4" transform="rotate(-20 60 60)" />
      <!-- Planet Sphere -->
      <circle cx="60" cy="60" r="35" fill="url(#pSphere)" filter="url(#pGlow)" />
      <!-- Craters -->
      <circle cx="45" cy="50" r="6" fill="#4C1D95" opacity="0.4" />
      <circle cx="70" cy="70" r="4" fill="#4C1D95" opacity="0.4" />
      <circle cx="75" cy="45" r="8" fill="#4C1D95" opacity="0.4" />
      <!-- Front of Ring -->
      <path d="M 8 50 A 55 15 0 0 0 112 88" fill="none" stroke="url(#pRing)" stroke-width="8" stroke-linecap="round" transform="rotate(-20 60 60)" filter="url(#pGlow)" />
      <!-- Gloss Highlight -->
      <path d="M40,35 C50,25 65,25 75,35" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.5" />
    </svg>
  `,

  // 5. DIAMOND (Premium, Value, Quality)
  diamond: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="dTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E0F2FE" />
          <stop offset="100%" stop-color="#7DD3FC" />
        </linearGradient>
        <linearGradient id="dSideL" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="100%" stop-color="#0284C7" />
        </linearGradient>
        <linearGradient id="dSideR" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#BAE6FD" />
          <stop offset="100%" stop-color="#0369A1" />
        </linearGradient>
        <filter id="dGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#0284C7" flood-opacity="0.4"/>
        </filter>
      </defs>
      <!-- Glow Background -->
      <polygon points="60,105 15,45 35,20 85,20 105,45" fill="none" filter="url(#dGlow)" />
      <!-- Left Bottom -->
      <polygon points="60,105 15,45 60,45" fill="url(#dSideL)" />
      <!-- Right Bottom -->
      <polygon points="60,105 105,45 60,45" fill="url(#dSideR)" />
      <!-- Center Bottom -->
      <polygon points="60,105 40,45 80,45" fill="#0EA5E9" />
      <!-- Top Center -->
      <polygon points="40,45 80,45 70,20 50,20" fill="url(#dTop)" />
      <!-- Top Left -->
      <polygon points="15,45 40,45 50,20 35,20" fill="#BAE6FD" />
      <!-- Top Right -->
      <polygon points="105,45 80,45 70,20 85,20" fill="#7DD3FC" />
      <!-- Sparkle -->
      <path d="M25,25 L30,15 L35,25 L45,30 L35,35 L30,45 L25,35 L15,30 Z" fill="#FFFFFF" />
    </svg>
  `

  ,
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

  // 7. HEART (Like, Favorite, Health, Love Emoticon)
  heart: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <radialGradient id="hGlass" cx="35%" cy="35%" r="60%">
          <stop offset="0%" stop-color="#FF87A0" />
          <stop offset="40%" stop-color="#E11D48" />
          <stop offset="85%" stop-color="#9F1239" />
          <stop offset="100%" stop-color="#4C0519" />
        </radialGradient>
        <filter id="hShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#9F1239" flood-opacity="0.4"/>
        </filter>
      </defs>
      <!-- Main Heart Body -->
      <path d="M60,38 C60,38 53,20 35,20 C18,20 10,35 10,52 C10,78 42,102 60,110 C78,102 110,78 110,52 C110,35 102,20 85,20 C67,20 60,38 60,38 Z" fill="url(#hGlass)" filter="url(#hShadow)" />
      <!-- Volumetric 3D Glare Highlight -->
      <path d="M32,25 C20,25 16,36 16,48 C16,54 22,50 28,44 C35,38 42,35 50,35 C42,28 36,25 32,25 Z" fill="#FFFFFF" opacity="0.4" />
      <!-- Secondary Soft Bottom Reflection -->
      <path d="M35,98 C48,103 60,106 60,106 C60,106 72,103 85,98 C72,94 48,94 35,98 Z" fill="#FFA5B5" opacity="0.3" filter="blur(1px)" />
    </svg>
  `,

  // 8. WALLET (Billing, Checkout, Account Balance, Finance)
  wallet: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="wLeather" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1E293B" />
          <stop offset="100%" stop-color="#0F172A" />
        </linearGradient>
        <linearGradient id="wFlap" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#334155" />
          <stop offset="100%" stop-color="#1E293B" />
        </linearGradient>
        <linearGradient id="wCard" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F472B6" />
          <stop offset="100%" stop-color="#BE185D" />
        </linearGradient>
        <filter id="wDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <!-- Peeking Credit Card -->
      <rect x="35" y="20" width="50" height="30" rx="6" fill="url(#wCard)" transform="rotate(-5 60 35)" filter="url(#wDrop)" />
      <rect x="42" y="24" width="10" height="8" rx="1" fill="#FDE047" transform="rotate(-5 60 35)" opacity="0.8" />
      <!-- Main Wallet Body -->
      <rect x="15" y="38" width="90" height="66" rx="12" fill="url(#wLeather)" filter="url(#wDrop)" />
      <!-- Inner Fold Accent Line -->
      <path d="M15,48 L105,48" stroke="#334155" stroke-width="2" />
      <!-- Locking Flap -->
      <path d="M70,55 L105,55 C108,55 110,57 110,60 L110,78 C110,81 108,83 105,83 L70,83 C64,83 60,78 60,69 C60,60 64,55 70,55 Z" fill="url(#wFlap)" filter="url(#wDrop)" />
      <!-- Metallic Badge / Snap Button -->
      <circle cx="72" cy="69" r="5" fill="#E2E8F0" />
      <circle cx="72" cy="69" r="2.5" fill="#94A3B8" />
      <!-- Decorative Stitching Effect -->
      <rect x="19" y="42" width="82" height="58" rx="9" fill="none" stroke="#475569" stroke-width="1.5" stroke-dasharray="4 3" />
    </svg>
  `,

  // 9. TROPHY (Gamification, Rewards, Achievement, Milestones)
  trophy: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="tGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FEF08A" />
          <stop offset="30%" stop-color="#FDE047" />
          <stop offset="70%" stop-color="#EAB308" />
          <stop offset="100%" stop-color="#CA8A04" />
        </linearGradient>
        <linearGradient id="tBase" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#475569" />
          <stop offset="50%" stop-color="#64748B" />
          <stop offset="100%" stop-color="#334155" />
        </linearGradient>
        <filter id="tGlow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#EAB308" flood-opacity="0.35"/>
        </filter>
      </defs>
      <!-- Left Handle -->
      <path d="M35,35 C15,35 15,60 35,65 L35,55 C25,52 25,43 35,42 Z" fill="url(#tGold)" filter="url(#tGlow)" />
      <!-- Right Handle -->
      <path d="M85,35 C105,35 105,60 85,65 L85,55 C95,52 95,43 85,42 Z" fill="url(#tGold)" filter="url(#tGlow)" />
      <!-- Main Cup Body -->
      <path d="M35,20 L85,20 C85,20 90,55 80,70 C70,82 60,85 60,85 C60,85 50,82 40,70 C30,55 35,20 35,20 Z" fill="url(#tGold)" filter="url(#tGlow)" />
      <!-- Cup Stem -->
      <path d="M52,82 L68,82 L64,100 L56,100 Z" fill="url(#tGold)" />
      <!-- Heavy Pedestal Base -->
      <rect x="40" y="98" width="40" height="10" rx="3" fill="url(#tBase)" />
      <rect x="36" y="106" width="48" height="6" rx="2" fill="#1E293B" />
      <!-- High-Gloss Rim Highlight -->
      <ellipse cx="60" cy="21" rx="24" ry="3" fill="#FFFFFF" opacity="0.5" />
      <!-- Interior Cup Depth Shadow -->
      <ellipse cx="60" cy="22" rx="22" ry="2" fill="#A16207" opacity="0.6" />
      <!-- Star Sparkle Accent -->
      <path d="M82,30 L85,22 L88,30 L96,33 L88,36 L85,44 L82,36 L74,33 Z" fill="#FFFFFF" />
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

  // 11. SEARCH / MAGNIFYING GLASS (Discovery, Query, Focus)
  search: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <radialGradient id="mGlass" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#E0F2FE" stop-opacity="0.9" />
          <stop offset="70%" stop-color="#7DD3FC" stop-opacity="0.4" />
          <stop offset="100%" stop-color="#0284C7" stop-opacity="0.8" />
        </radialGradient>
        <linearGradient id="mHandle" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#334155" />
          <stop offset="50%" stop-color="#64748B" />
          <stop offset="100%" stop-color="#0F172A" />
        </linearGradient>
        <filter id="mDrop" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.25"/>
        </filter>
      </defs>
      <line x1="75" y1="75" x2="105" y2="105" stroke="url(#mHandle)" stroke-width="16" stroke-linecap="round" filter="url(#mDrop)" />
      <line x1="80" y1="80" x2="100" y2="100" stroke="#94A3B8" stroke-width="4" stroke-linecap="round" />
      <circle cx="50" cy="50" r="32" fill="none" stroke="#0284C7" stroke-width="8" filter="url(#mDrop)" />
      <circle cx="50" cy="50" r="28" fill="url(#mGlass)" />
      <path d="M30,35 C38,25 50,25 58,30" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.8" />
    </svg>
  `,

  // 12. SETTINGS / GEAR (Preferences, Configuration, Mechanical)
  settings: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="gMetal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F1F5F9" />
          <stop offset="50%" stop-color="#94A3B8" />
          <stop offset="100%" stop-color="#334155" />
        </linearGradient>
        <filter id="gShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="5" stdDeviation="4" flood-color="#000000" flood-opacity="0.4"/>
        </filter>
        <filter id="gInner" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#0F172A" flood-opacity="0.6" />
        </filter>
      </defs>
      <g filter="url(#gShadow)">
        <path d="M68.5,15.5 L73.2,27.1 C78.3,29.3 83.1,32.4 87.2,36.3 L98.5,31.7 L105.1,43.2 L95.6,52.3 C96.3,55.5 96.6,58.8 96.4,62.1 L105.7,71.5 L99.1,83 L87.7,78.2 C83.6,82 78.8,85 73.6,87.1 L68.6,98.5 L55.3,98.5 L50.6,87 C45.5,84.9 40.7,81.9 36.6,78 L25.3,82.6 L18.7,71.1 L28.2,62 C27.5,58.8 27.2,55.5 27.4,52.2 L18.1,42.8 L24.7,31.3 L36.1,36.1 C40.2,32.3 45,29.3 50.2,27.2 L55.2,15.8 Z" fill="url(#gMetal)" transform="translate(60,60) rotate(15) translate(-60,-60)"/>
      </g>
      <circle cx="60" cy="60" r="22" fill="#1E293B" filter="url(#gInner)" />
      <circle cx="60" cy="60" r="12" fill="url(#gMetal)" />
      <circle cx="60" cy="60" r="5" fill="#0F172A" />
      <path d="M50,22 C60,18 70,18 80,22" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.7" transform="translate(60,60) rotate(15) translate(-60,-60)" />
    </svg>
  `,

  // 13. FOLDER (Documents, Files, Organization, Storage)
  folder: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="foBack" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FCD34D" />
          <stop offset="100%" stop-color="#D97706" />
        </linearGradient>
        <linearGradient id="foFront" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE047" />
          <stop offset="100%" stop-color="#EAB308" />
        </linearGradient>
        <linearGradient id="foPaper" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="100%" stop-color="#F1F5F9" />
        </linearGradient>
        <filter id="foShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.25"/>
        </filter>
      </defs>
      <path d="M15,35 L40,35 L50,45 L105,45 C110,45 110,50 110,55 L110,95 C110,100 105,100 105,100 L15,100 C10,100 10,95 10,95 L10,40 C10,35 15,35 15,35 Z" fill="url(#foBack)" filter="url(#foShadow)" />
      <rect x="25" y="25" width="70" height="60" rx="2" fill="url(#foPaper)" filter="url(#foShadow)" />
      <line x1="35" y1="35" x2="65" y2="35" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round" />
      <line x1="35" y1="45" x2="85" y2="45" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round" />
      <line x1="35" y1="55" x2="75" y2="55" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round" />
      <path d="M10,55 L110,55 L105,100 C105,100 100,105 95,105 L25,105 C20,105 15,100 15,100 L10,55 Z" fill="url(#foFront)" filter="url(#foShadow)" />
      <path d="M15,58 L105,58" stroke="#FEF08A" stroke-width="3" stroke-linecap="round" />
    </svg>
  `,

  // 14. CALENDAR (Schedule, Time, Events, Planning)
  calendar: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="cRed" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#EF4444" />
          <stop offset="100%" stop-color="#B91C1C" />
        </linearGradient>
        <linearGradient id="cPaper" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="100%" stop-color="#E2E8F0" />
        </linearGradient>
        <filter id="cShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.2"/>
        </filter>
      </defs>
      <rect x="20" y="25" width="80" height="80" rx="8" fill="url(#cPaper)" filter="url(#cShadow)" />
      <path d="M20,33 C20,28 24,25 29,25 L91,25 C96,25 100,28 100,33 L100,45 L20,45 Z" fill="url(#cRed)" />
      <rect x="35" y="15" width="6" height="20" rx="3" fill="#94A3B8" filter="url(#cShadow)" />
      <rect x="79" y="15" width="6" height="20" rx="3" fill="#94A3B8" filter="url(#cShadow)" />
      <rect x="37" y="17" width="2" height="16" rx="1" fill="#F1F5F9" />
      <rect x="81" y="17" width="2" height="16" rx="1" fill="#F1F5F9" />
      <line x1="20" y1="65" x2="100" y2="65" stroke="#CBD5E1" stroke-width="2" />
      <line x1="20" y1="85" x2="100" y2="85" stroke="#CBD5E1" stroke-width="2" />
      <line x1="46" y1="45" x2="46" y2="105" stroke="#CBD5E1" stroke-width="2" />
      <line x1="73" y1="45" x2="73" y2="105" stroke="#CBD5E1" stroke-width="2" />
      <rect x="50" y="70" width="19" height="11" rx="2" fill="#38BDF8" opacity="0.8" />
      <circle cx="59.5" cy="75.5" r="3" fill="#FFFFFF" />
    </svg>
  `,

  // 15. USER / AVATAR (Profile, Account, Identity)
  user: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="uBack" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#8B5CF6" />
          <stop offset="100%" stop-color="#4C1D95" />
        </linearGradient>
        <linearGradient id="uPerson" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F8FAFC" />
          <stop offset="100%" stop-color="#94A3B8" />
        </linearGradient>
        <filter id="uShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#4C1D95" flood-opacity="0.4"/>
        </filter>
        <filter id="uDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" flood-color="#000000" flood-opacity="0.25"/>
        </filter>
      </defs>
      <circle cx="60" cy="60" r="45" fill="url(#uBack)" filter="url(#uShadow)" />
      <path d="M30,95 C30,75 40,65 60,65 C80,65 90,75 90,95 C90,100 85,105 60,105 C35,105 30,100 30,95 Z" fill="url(#uPerson)" filter="url(#uDrop)" />
      <circle cx="60" cy="42" r="17" fill="url(#uPerson)" filter="url(#uDrop)" />
      <circle cx="60" cy="60" r="45" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.2" />
      <path d="M25,40 C35,20 85,20 95,40" fill="none" stroke="#C4B5FD" stroke-width="4" stroke-linecap="round" opacity="0.4" />
    </svg>
  `,

  // 16. CAMERA (Media, Photography, Capture, Upload)
  camera: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="camBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#334155" />
          <stop offset="100%" stop-color="#0F172A" />
        </linearGradient>
        <linearGradient id="camLeather" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#475569" />
          <stop offset="100%" stop-color="#1E293B" />
        </linearGradient>
        <linearGradient id="camMetal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F1F5F9" />
          <stop offset="50%" stop-color="#94A3B8" />
          <stop offset="100%" stop-color="#475569" />
        </linearGradient>
        <radialGradient id="camLens" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="40%" stop-color="#3B82F6" />
          <stop offset="80%" stop-color="#4C1D95" />
          <stop offset="100%" stop-color="#000000" />
        </radialGradient>
        <filter id="camDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.4"/>
        </filter>
        <filter id="lensInner" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>
      <path d="M40,30 L50,18 L70,18 L80,30 Z" fill="url(#camMetal)" filter="url(#camDrop)" />
      <rect x="15" y="30" width="90" height="65" rx="10" fill="url(#camBody)" filter="url(#camDrop)" />
      <rect x="15" y="55" width="90" height="40" rx="10" fill="url(#camLeather)" />
      <rect x="25" y="24" width="12" height="8" rx="2" fill="#EF4444" />
      <rect x="27" y="21" width="8" height="4" rx="1" fill="#DC2626" />
      <circle cx="60" cy="60" r="28" fill="url(#camMetal)" filter="url(#camDrop)" />
      <circle cx="60" cy="60" r="24" fill="#0F172A" />
      <circle cx="60" cy="60" r="20" fill="url(#camLens)" filter="url(#lensInner)" />
      <path d="M48,48 C55,42 65,42 72,48" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.6" />
      <circle cx="50" cy="50" r="4" fill="#FFFFFF" opacity="0.8" />
    </svg>
  `,

  // 17. STAR (Favorites, Ratings, Premium, Featured)
  star: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="stGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FEF08A" />
          <stop offset="40%" stop-color="#FACC15" />
          <stop offset="80%" stop-color="#CA8A04" />
          <stop offset="100%" stop-color="#854D0E" />
        </linearGradient>
        <linearGradient id="stLight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.8" />
          <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
        </linearGradient>
        <filter id="stGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#CA8A04" flood-opacity="0.4"/>
        </filter>
      </defs>
      <path d="M60,10 L75,45 L112,45 L82,67 L94,102 L60,80 L26,102 L38,67 L8,45 L45,45 Z" fill="url(#stGold)" filter="url(#stGlow)" stroke="#CA8A04" stroke-width="1" stroke-linejoin="round" />
      <path d="M60,10 L75,45 L60,55 Z" fill="#FFFFFF" opacity="0.4" />
      <path d="M112,45 L82,67 L60,55 Z" fill="#FFFFFF" opacity="0.3" />
      <path d="M60,80 L26,102 L60,55 Z" fill="#FFFFFF" opacity="0.1" />
      <path d="M8,45 L45,45 L60,55 Z" fill="#FFFFFF" opacity="0.5" />
      <line x1="60" y1="10" x2="60" y2="55" stroke="#FFFFFF" stroke-width="2" opacity="0.6" stroke-linecap="round" />
      <line x1="112" y1="45" x2="60" y2="55" stroke="#FFFFFF" stroke-width="2" opacity="0.4" stroke-linecap="round" />
      <line x1="8" y1="45" x2="60" y2="55" stroke="#FFFFFF" stroke-width="2" opacity="0.7" stroke-linecap="round" />
      <circle cx="60" cy="55" r="4" fill="#FFFFFF" opacity="0.9" />
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

  // 19. LOCK (Security, Passwords, Encryption, Privacy)
  lock: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="lkShackle" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#E2E8F0" />
          <stop offset="50%" stop-color="#94A3B8" />
          <stop offset="100%" stop-color="#64748B" />
        </linearGradient>
        <linearGradient id="lkBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FCD34D" />
          <stop offset="50%" stop-color="#F59E0B" />
          <stop offset="100%" stop-color="#B45309" />
        </linearGradient>
        <linearGradient id="lkKeyhole" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#1E293B" />
          <stop offset="100%" stop-color="#000000" />
        </linearGradient>
        <filter id="lkDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="lkInner" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="3" stdDeviation="2" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>
      <path d="M35,55 L35,40 C35,22 45,15 60,15 C75,15 85,22 85,40 L85,55" fill="none" stroke="url(#lkShackle)" stroke-width="14" stroke-linecap="round" filter="url(#lkDrop)" />
      <path d="M40,55 L40,40 C40,28 48,22 60,22" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.6" />
      <rect x="20" y="50" width="80" height="60" rx="12" fill="url(#lkBody)" filter="url(#lkDrop)" />
      <rect x="22" y="52" width="76" height="56" rx="10" fill="none" stroke="#FEF08A" stroke-width="2" opacity="0.7" />
      <g filter="url(#lkInner)">
        <circle cx="60" cy="72" r="8" fill="url(#lkKeyhole)" />
        <polygon points="56,76 64,76 67,90 53,90" fill="url(#lkKeyhole)" />
      </g>
      <circle cx="60" cy="72" r="3" fill="#38BDF8" opacity="0.9" />
    </svg>
  `,

  // 20. MAIL / ENVELOPE (Email, Contact, Newsletter, Invites)
  mail: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="mlBack" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#E2E8F0" />
          <stop offset="100%" stop-color="#94A3B8" />
        </linearGradient>
        <linearGradient id="mlFront" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="100%" stop-color="#F1F5F9" />
        </linearGradient>
        <linearGradient id="mlFlap" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="100%" stop-color="#E2E8F0" />
        </linearGradient>
        <linearGradient id="mlWax" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#EF4444" />
          <stop offset="100%" stop-color="#991B1B" />
        </linearGradient>
        <filter id="mlDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.2"/>
        </filter>
        <filter id="mlShadowInner" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000000" flood-opacity="0.15"/>
        </filter>
      </defs>
      <rect x="10" y="30" width="100" height="65" rx="4" fill="url(#mlBack)" filter="url(#mlDrop)" />
      <rect x="18" y="15" width="84" height="40" rx="2" fill="#FFFFFF" />
      <line x1="28" y1="25" x2="60" y2="25" stroke="#CBD5E1" stroke-width="3" stroke-linecap="round" />
      <line x1="28" y1="35" x2="92" y2="35" stroke="#CBD5E1" stroke-width="3" stroke-linecap="round" />
      <path d="M10,95 L60,65 L110,95 Z" fill="url(#mlFront)" />
      <path d="M10,30 L60,65 L10,95 Z" fill="url(#mlFront)" filter="url(#mlShadowInner)" />
      <path d="M110,30 L60,65 L110,95 Z" fill="url(#mlFront)" filter="url(#mlShadowInner)" />
      <path d="M10,30 L60,65 L110,30 C105,25 15,25 10,30 Z" fill="url(#mlFlap)" filter="url(#mlShadowInner)" />
      <circle cx="60" cy="63" r="10" fill="url(#mlWax)" filter="url(#mlDrop)" />
      <circle cx="60" cy="63" r="6" fill="none" stroke="#7F1D1D" stroke-width="1.5" />
      <path d="M57,60 L63,66 M63,60 L57,66" stroke="#7F1D1D" stroke-width="2" stroke-linecap="round" />
    </svg>
  `,

  // 21. COMPASS (Navigation, Discovery, Travel, Direction)
  compass: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="cmBrass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FCD34D" />
          <stop offset="50%" stop-color="#D97706" />
          <stop offset="100%" stop-color="#78350F" />
        </linearGradient>
        <linearGradient id="cmGlass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F1F5F9" />
          <stop offset="100%" stop-color="#CBD5E1" />
        </linearGradient>
        <linearGradient id="cmNeedle" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#EF4444" />
          <stop offset="100%" stop-color="#991B1B" />
        </linearGradient>
        <filter id="cmDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="cmInner" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
      </defs>
      <!-- Base Shell -->
      <circle cx="60" cy="60" r="45" fill="url(#cmBrass)" filter="url(#cmDrop)" />
      <!-- Top Ring -->
      <path d="M52,15 C52,9 68,9 68,15" fill="none" stroke="url(#cmBrass)" stroke-width="6" stroke-linecap="round" />
      <!-- Inner Housing -->
      <circle cx="60" cy="60" r="35" fill="url(#cmGlass)" filter="url(#cmInner)" />
      <!-- Dial Ticks -->
      <path d="M60,30 L60,34 M60,86 L60,90 M30,60 L34,60 M86,60 L90,60" stroke="#475569" stroke-width="3" stroke-linecap="round" />
      <!-- Compass Needle Red/North -->
      <polygon points="60,35 65,60 55,60" fill="url(#cmNeedle)" filter="url(#cmDrop)" />
      <!-- Compass Needle Silver/South -->
      <polygon points="60,85 55,60 65,60" fill="#94A3B8" filter="url(#cmDrop)" />
      <!-- Center Pin -->
      <circle cx="60" cy="60" r="4" fill="#FCD34D" />
      <!-- Glass Glare Highlight -->
      <path d="M36,44 C42,34 55,30 65,33" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.6" />
    </svg>
  `,

  // 22. CROWN (Premium, Admin, Winner, VIP)
  crown: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="crGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FEF08A" />
          <stop offset="30%" stop-color="#FACC15" />
          <stop offset="70%" stop-color="#CA8A04" />
          <stop offset="100%" stop-color="#713F12" />
        </linearGradient>
        <linearGradient id="crRuby" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FCA5A5" />
          <stop offset="100%" stop-color="#991B1B" />
        </linearGradient>
        <filter id="crDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#CA8A04" flood-opacity="0.4"/>
        </filter>
        <filter id="crGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#FEF08A" flood-opacity="0.6"/>
        </filter>
      </defs>
      <!-- Crown Base -->
      <path d="M20,85 L100,85 C100,85 95,95 85,95 L35,95 C25,95 20,85 20,85 Z" fill="url(#crGold)" filter="url(#crDrop)" />
      <!-- Crown Peaks -->
      <path d="M20,85 L15,35 L40,65 L60,25 L80,65 L105,35 L100,85 Z" fill="url(#crGold)" filter="url(#crDrop)" stroke="#CA8A04" stroke-width="2" stroke-linejoin="round" />
      <!-- Velvet Insert -->
      <path d="M25,85 C35,75 50,70 60,70 C70,70 85,75 95,85 Z" fill="url(#crRuby)" />
      <!-- Jewels -->
      <circle cx="60" cy="50" r="6" fill="url(#crRuby)" filter="url(#crDrop)" />
      <circle cx="40" cy="70" r="4" fill="#38BDF8" />
      <circle cx="80" cy="70" r="4" fill="#38BDF8" />
      <!-- Jewels Highlights -->
      <circle cx="58" cy="48" r="2" fill="#FFFFFF" opacity="0.8" />
      <!-- Base Rim Highlight -->
      <path d="M25,88 L95,88" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.5" />
      <!-- Peak Orbs -->
      <circle cx="15" cy="35" r="5" fill="url(#crGold)" filter="url(#crGlow)" />
      <circle cx="60" cy="25" r="6" fill="url(#crGold)" filter="url(#crGlow)" />
      <circle cx="105" cy="35" r="5" fill="url(#crGold)" filter="url(#crGlow)" />
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

  // 24. MICROPHONE (Podcasts, Voice, Audio, Studio)
  microphone: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="miMic" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E2E8F0" />
          <stop offset="100%" stop-color="#64748B" />
        </linearGradient>
        <linearGradient id="miGrill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#94A3B8" />
          <stop offset="100%" stop-color="#334155" />
        </linearGradient>
        <filter id="miDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <!-- Base and Stand -->
      <path d="M45,100 L75,100" stroke="#475569" stroke-width="8" stroke-linecap="round" filter="url(#miDrop)" />
      <line x1="60" y1="80" x2="60" y2="100" stroke="#475569" stroke-width="8" />
      <!-- Outer Holder -->
      <path d="M40,55 C40,75 50,85 60,85 C70,85 80,75 80,55" fill="none" stroke="url(#miMic)" stroke-width="8" stroke-linecap="round" filter="url(#miDrop)" />
      <!-- Mic Body -->
      <rect x="45" y="20" width="30" height="55" rx="15" fill="url(#miGrill)" filter="url(#miDrop)" />
      <!-- Grill Lines -->
      <line x1="45" y1="35" x2="75" y2="35" stroke="#1E293B" stroke-width="2" />
      <line x1="45" y1="45" x2="75" y2="45" stroke="#1E293B" stroke-width="2" />
      <line x1="45" y1="55" x2="75" y2="55" stroke="#1E293B" stroke-width="2" />
      <line x1="45" y1="65" x2="75" y2="65" stroke="#1E293B" stroke-width="2" />
      <line x1="55" y1="20" x2="55" y2="75" stroke="#1E293B" stroke-width="2" opacity="0.5" />
      <line x1="65" y1="20" x2="65" y2="75" stroke="#1E293B" stroke-width="2" opacity="0.5" />
      <!-- Gloss Highlight -->
      <path d="M49,30 C49,25 55,23 60,23" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.5" />
    </svg>
  `,

  // 25. GIFT (Presents, Rewards, Bonus, Promotions)
  gift: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="gfBox" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#60A5FA" />
          <stop offset="50%" stop-color="#3B82F6" />
          <stop offset="100%" stop-color="#1D4ED8" />
        </linearGradient>
        <linearGradient id="gfRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FCA5A5" />
          <stop offset="50%" stop-color="#EF4444" />
          <stop offset="100%" stop-color="#991B1B" />
        </linearGradient>
        <filter id="gfDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#1D4ED8" flood-opacity="0.4"/>
        </filter>
        <filter id="gfBowDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <!-- Main Box -->
      <rect x="25" y="45" width="70" height="60" rx="4" fill="url(#gfBox)" filter="url(#gfDrop)" />
      <!-- Box Lid -->
      <rect x="20" y="40" width="80" height="15" rx="3" fill="url(#gfBox)" filter="url(#gfDrop)" />
      <line x1="20" y1="55" x2="100" y2="55" stroke="#1E3A8A" stroke-width="2" opacity="0.5" />
      <!-- Vertical Ribbon -->
      <rect x="52" y="40" width="16" height="65" fill="url(#gfRibbon)" filter="url(#gfBowDrop)" />
      <!-- Horizontal Ribbon -->
      <rect x="25" y="65" width="70" height="16" fill="url(#gfRibbon)" filter="url(#gfBowDrop)" />
      <!-- Left Bow Loop -->
      <path d="M60,40 C60,40 40,15 25,25 C10,35 40,40 60,40 Z" fill="url(#gfRibbon)" filter="url(#gfBowDrop)" />
      <path d="M55,38 C55,38 42,22 32,28 C22,34 42,38 55,38 Z" fill="#991B1B" opacity="0.6" />
      <!-- Right Bow Loop -->
      <path d="M60,40 C60,40 80,15 95,25 C110,35 80,40 60,40 Z" fill="url(#gfRibbon)" filter="url(#gfBowDrop)" />
      <path d="M65,38 C65,38 78,22 88,28 C98,34 78,38 65,38 Z" fill="#991B1B" opacity="0.6" />
      <!-- Bow Center Knot -->
      <circle cx="60" cy="40" r="8" fill="url(#gfRibbon)" filter="url(#gfBowDrop)" />
      <!-- Gloss Highlight Lid -->
      <line x1="25" y1="43" x2="95" y2="43" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.4" />
      <line x1="30" y1="50" x2="50" y2="50" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.2" />
    </svg>
  `
};

// Preserve exact user request for reference
window.AxiconsLuxe = rawLuxe;

// Map them into the unified axicons array so <span class="axicon render"> works natively
const formattedLuxeIcons = Object.entries(rawLuxe).map(([key, svg], index) => {
    // Capitalize key and append "-Luxe" (e.g., "Rocket-Luxe")
    const name = key.charAt(0).toUpperCase() + key.slice(1) + '-Luxe';
    return {
        id: 10000 + index,
        name: name,
        category: 'luxe',
        svgContent: svg.trim() // ensure it's a clean string
    };
});

if (!window.axicons) window.axicons = [];
window.axicons = window.axicons.concat(formattedLuxeIcons);

})();
