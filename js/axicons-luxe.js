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
    
  ,
  // 26. CLOCK (Time, History, Schedule, Watch)
  clock: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="clRim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="50%" stop-color="#0284C7" />
          <stop offset="100%" stop-color="#0F172A" />
        </linearGradient>
        <linearGradient id="clFace" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="100%" stop-color="#E2E8F0" />
        </linearGradient>
        <filter id="clDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.25"/>
        </filter>
        <filter id="clInner" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#0284C7" flood-opacity="0.4"/>
        </filter>
      </defs>
      <circle cx="60" cy="60" r="45" fill="url(#clRim)" filter="url(#clDrop)" />
      <circle cx="60" cy="60" r="35" fill="url(#clFace)" filter="url(#clInner)" />
      <path d="M60,28 L60,32 M60,88 L60,92 M28,60 L32,60 M88,60 L92,60" stroke="#0F172A" stroke-width="4" stroke-linecap="round" />
      <path d="M42,42 L45,45 M78,42 L75,45 M42,78 L45,75 M78,78 L75,75" stroke="#94A3B8" stroke-width="3" stroke-linecap="round" />
      <line x1="60" y1="60" x2="60" y2="35" stroke="#0F172A" stroke-width="5" stroke-linecap="round" filter="url(#clDrop)" />
      <line x1="60" y1="60" x2="75" y2="75" stroke="#475569" stroke-width="5" stroke-linecap="round" filter="url(#clDrop)" />
      <line x1="60" y1="60" x2="45" y2="70" stroke="#EF4444" stroke-width="2" stroke-linecap="round" filter="url(#clDrop)" />
      <circle cx="60" cy="60" r="4" fill="#EF4444" />
      <circle cx="60" cy="60" r="2" fill="#FFFFFF" />
      <path d="M35,45 C45,35 65,30 75,35" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.6" />
    </svg>
  `,

  // 27. LIGHTNING (Energy, Fast, Flash, Power)
  lightning: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="ltGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FEF08A" />
          <stop offset="50%" stop-color="#F59E0B" />
          <stop offset="100%" stop-color="#9A3412" />
        </linearGradient>
        <filter id="ltGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#F59E0B" flood-opacity="0.6"/>
        </filter>
      </defs>
      <polygon points="70,10 25,65 55,65 40,110 95,50 60,50" fill="url(#ltGold)" filter="url(#ltGlow)" stroke="#FCD34D" stroke-width="2" stroke-linejoin="round" />
      <polygon points="70,10 25,65 55,65 40,110 95,50 60,50" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.6" />
      <path d="M60,25 L38,60 L50,60 M80,60 L62,80 L70,70" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.8" />
    </svg>
  `,

  // 28. GLOBE (World, Web, Languages, Network)
  globe: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <radialGradient id="glWater" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="60%" stop-color="#2563EB" />
          <stop offset="100%" stop-color="#1E3A8A" />
        </radialGradient>
        <linearGradient id="glLand" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#A3E635" />
          <stop offset="50%" stop-color="#16A34A" />
          <stop offset="100%" stop-color="#064E3B" />
        </linearGradient>
        <filter id="glDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#1E3A8A" flood-opacity="0.4"/>
        </filter>
      </defs>
      <circle cx="60" cy="60" r="45" fill="url(#glWater)" filter="url(#glDrop)" />
      <!-- Grid Lines -->
      <path d="M15,60 C35,80 85,80 105,60" fill="none" stroke="#60A5FA" stroke-width="2" opacity="0.4" />
      <path d="M15,60 C35,40 85,40 105,60" fill="none" stroke="#60A5FA" stroke-width="2" opacity="0.4" />
      <path d="M60,15 C40,35 40,85 60,105" fill="none" stroke="#60A5FA" stroke-width="2" opacity="0.4" />
      <path d="M60,15 C80,35 80,85 60,105" fill="none" stroke="#60A5FA" stroke-width="2" opacity="0.4" />
      <line x1="15" y1="60" x2="105" y2="60" stroke="#60A5FA" stroke-width="2" opacity="0.3" />
      <line x1="60" y1="15" x2="60" y2="105" stroke="#60A5FA" stroke-width="2" opacity="0.3" />
      <!-- Landmasses -->
      <path d="M40,25 C45,20 55,20 60,25 C65,30 65,40 55,45 C45,50 35,45 35,35 C35,30 38,28 40,25 Z" fill="url(#glLand)" opacity="0.9" />
      <path d="M75,35 C85,35 90,45 85,55 C80,65 70,75 60,75 C50,75 55,65 65,55 C70,50 72,45 75,35 Z" fill="url(#glLand)" opacity="0.9" />
      <path d="M45,65 C55,60 55,80 45,90 C35,100 25,85 30,75 C35,65 40,68 45,65 Z" fill="url(#glLand)" opacity="0.9" />
      <path d="M30,35 C45,25 60,22 75,25" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.6" />
    </svg>
  `,

  // 29. KEY (Security, Access, Unlock, Authentication)
  key: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="kyGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE047" />
          <stop offset="50%" stop-color="#D97706" />
          <stop offset="100%" stop-color="#78350F" />
        </linearGradient>
        <filter id="kyDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="kyInner" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
      </defs>
      <path d="M85,35 C95,25 110,35 105,45 L45,105 L35,95 L40,90 L30,80 L40,70 L30,60 L45,45 Z" fill="url(#kyGold)" filter="url(#kyDrop)" />
      <circle cx="85" cy="35" r="22" fill="url(#kyGold)" filter="url(#kyDrop)" />
      <circle cx="85" cy="35" r="10" fill="#1E293B" filter="url(#kyInner)" />
      <path d="M72,25 C82,18 95,20 102,28" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.5" />
      <line x1="45" y1="105" x2="35" y2="95" stroke="#FFFFFF" stroke-width="2" opacity="0.4" />
      <line x1="40" y1="90" x2="30" y2="80" stroke="#FFFFFF" stroke-width="2" opacity="0.4" />
    </svg>
  `,

  // 30. SUN (Light, Morning, Theme, Brightness)
  sun: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <radialGradient id="snCore" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#FEF08A" />
          <stop offset="70%" stop-color="#F59E0B" />
          <stop offset="100%" stop-color="#B45309" />
        </radialGradient>
        <linearGradient id="snRay" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE047" />
          <stop offset="100%" stop-color="#D97706" />
        </linearGradient>
        <filter id="snGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#F59E0B" flood-opacity="0.8"/>
        </filter>
      </defs>
      <!-- Rays -->
      <g stroke="url(#snRay)" stroke-width="8" stroke-linecap="round" filter="url(#snGlow)">
        <line x1="60" y1="15" x2="60" y2="25" />
        <line x1="60" y1="95" x2="60" y2="105" />
        <line x1="15" y1="60" x2="25" y2="60" />
        <line x1="95" y1="60" x2="105" y2="60" />
        <line x1="28" y1="28" x2="35" y2="35" />
        <line x1="85" y1="85" x2="92" y2="92" />
        <line x1="28" y1="92" x2="35" y2="85" />
        <line x1="85" y1="28" x2="92" y2="35" />
      </g>
      <!-- Core -->
      <circle cx="60" cy="60" r="28" fill="url(#snCore)" filter="url(#snGlow)" />
      <!-- Highlight -->
      <path d="M42,42 C50,34 65,34 72,42" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.6" />
      <circle cx="48" cy="48" r="3" fill="#FFFFFF" opacity="0.8" />
    </svg>
  `

  ,
  // 31. LAPTOP (Code, Workspace, Device)
  laptop: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="lpScreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0F172A" />
          <stop offset="100%" stop-color="#1E293B" />
        </linearGradient>
        <linearGradient id="lpChassis" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E2E8F0" />
          <stop offset="100%" stop-color="#94A3B8" />
        </linearGradient>
        <filter id="lpDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="lpGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#38BDF8" flood-opacity="0.5"/>
        </filter>
      </defs>
      <!-- Base Keyboard -->
      <path d="M10,85 L110,85 C115,85 115,95 110,95 L10,95 C5,95 5,85 10,85 Z" fill="url(#lpChassis)" filter="url(#lpDrop)" />
      <!-- Screen Backing -->
      <rect x="25" y="25" width="70" height="58" rx="4" fill="url(#lpChassis)" />
      <!-- Display -->
      <rect x="28" y="28" width="64" height="50" rx="2" fill="url(#lpScreen)" />
      <!-- Screen Glare -->
      <path d="M28,28 L60,28 L28,60 Z" fill="#FFFFFF" opacity="0.1" />
      <!-- Code Snippet Glow on Screen -->
      <rect x="35" y="40" width="20" height="4" rx="2" fill="#38BDF8" filter="url(#lpGlow)" />
      <rect x="35" y="50" width="40" height="4" rx="2" fill="#F472B6" />
      <rect x="35" y="60" width="30" height="4" rx="2" fill="#A3E635" />
      <!-- Trackpad -->
      <rect x="52" y="87" width="16" height="5" rx="1" fill="#64748B" />
    </svg>
  `,

  // 32. SMARTPHONE (Mobile, App, Communication)
  smartphone: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="spBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#334155" />
          <stop offset="100%" stop-color="#0F172A" />
        </linearGradient>
        <linearGradient id="spScreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0369A1" />
          <stop offset="100%" stop-color="#8B5CF6" />
        </linearGradient>
        <filter id="spDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.35"/>
        </filter>
      </defs>
      <!-- Phone Body -->
      <rect x="35" y="15" width="50" height="90" rx="12" fill="url(#spBody)" filter="url(#spDrop)" />
      <rect x="36" y="16" width="48" height="88" rx="11" fill="none" stroke="#64748B" stroke-width="1.5" />
      <!-- Screen -->
      <rect x="39" y="22" width="42" height="76" rx="6" fill="url(#spScreen)" />
      <!-- Screen Glare -->
      <path d="M39,22 L81,22 L39,60 Z" fill="#FFFFFF" opacity="0.15" />
      <!-- Notch / Camera -->
      <rect x="52" y="24" width="16" height="4" rx="2" fill="#0F172A" />
      <!-- App Icons (Widgets) -->
      <rect x="44" y="35" width="12" height="12" rx="3" fill="#FFFFFF" opacity="0.8" />
      <rect x="64" y="35" width="12" height="12" rx="3" fill="#FDE047" opacity="0.8" />
      <rect x="44" y="55" width="32" height="18" rx="4" fill="#F472B6" opacity="0.8" />
    </svg>
  `,

  // 33. DATABASE (Hosting, Data, Infrastructure)
  database: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="dbBody" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#3B82F6" />
          <stop offset="100%" stop-color="#1D4ED8" />
        </linearGradient>
        <linearGradient id="dbTop" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#60A5FA" />
          <stop offset="100%" stop-color="#2563EB" />
        </linearGradient>
        <filter id="dbDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#1D4ED8" flood-opacity="0.3"/>
        </filter>
        <filter id="dbGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#A7F3D0" flood-opacity="0.8"/>
        </filter>
      </defs>
      <!-- Bottom Disc -->
      <path d="M30,70 L30,90 C30,100 90,100 90,90 L90,70" fill="url(#dbBody)" filter="url(#dbDrop)" />
      <ellipse cx="60" cy="90" rx="30" ry="10" fill="url(#dbTop)" />
      <!-- Middle Disc -->
      <path d="M30,45 L30,65 C30,75 90,75 90,65 L90,45" fill="url(#dbBody)" filter="url(#dbDrop)" />
      <ellipse cx="60" cy="65" rx="30" ry="10" fill="url(#dbTop)" />
      <!-- Top Disc -->
      <path d="M30,20 L30,40 C30,50 90,50 90,40 L90,20" fill="url(#dbBody)" filter="url(#dbDrop)" />
      <ellipse cx="60" cy="40" rx="30" ry="10" fill="url(#dbTop)" />
      <ellipse cx="60" cy="20" rx="30" ry="10" fill="url(#dbTop)" />
      <!-- Status Lights -->
      <circle cx="50" cy="35" r="3" fill="#10B981" filter="url(#dbGlow)" />
      <circle cx="50" cy="60" r="3" fill="#10B981" filter="url(#dbGlow)" />
      <circle cx="50" cy="85" r="3" fill="#EF4444" />
      <path d="M35,25 C40,20 50,15 60,18" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.5" />
    </svg>
  `,

  // 34. CLOUD (SaaS, Storage, Sync)
  cloud: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="clGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E0F2FE" />
          <stop offset="50%" stop-color="#38BDF8" />
          <stop offset="100%" stop-color="#0284C7" />
        </linearGradient>
        <filter id="clCloudDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#0284C7" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M40,85 L85,85 C100,85 105,70 95,60 C95,45 75,40 65,50 C60,30 35,35 35,55 C20,55 15,75 25,80 C25,85 30,85 40,85 Z" fill="url(#clGradient)" filter="url(#clCloudDrop)" />
      <path d="M45,50 C50,40 60,40 65,50" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.6" />
      <!-- Data Sync Arrows -->
      <path d="M45,100 L55,100 L50,90 Z" fill="#38BDF8" />
      <path d="M75,90 L65,90 L70,100 Z" fill="#0284C7" />
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

  // 36. GAMEPAD (Gaming, Entertainment, Interactive)
  gamepad: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="gpBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#475569" />
          <stop offset="100%" stop-color="#0F172A" />
        </linearGradient>
        <linearGradient id="gpAccent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10B981" />
          <stop offset="100%" stop-color="#047857" />
        </linearGradient>
        <filter id="gpDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.4"/>
        </filter>
        <filter id="gpInner" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
      </defs>
      <!-- Main Controller Body -->
      <path d="M15,50 C15,25 35,25 50,35 C55,38 65,38 70,35 C85,25 105,25 105,50 C105,80 95,95 80,90 C70,87 65,75 60,75 C55,75 50,87 40,90 C25,95 15,80 15,50 Z" fill="url(#gpBody)" filter="url(#gpDrop)" />
      <!-- D-Pad -->
      <path d="M30,45 L36,45 L36,39 L42,39 L42,45 L48,45 L48,51 L42,51 L42,57 L36,57 L36,51 L30,51 Z" fill="#1E293B" filter="url(#gpInner)" />
      <!-- Buttons -->
      <circle cx="85" cy="42" r="4" fill="#EF4444" />
      <circle cx="93" cy="50" r="4" fill="#3B82F6" />
      <circle cx="77" cy="50" r="4" fill="#F59E0B" />
      <circle cx="85" cy="58" r="4" fill="url(#gpAccent)" />
      <!-- Joysticks -->
      <circle cx="45" cy="65" r="8" fill="#1E293B" filter="url(#gpInner)" />
      <circle cx="45" cy="65" r="4" fill="#334155" />
      <circle cx="75" cy="65" r="8" fill="#1E293B" filter="url(#gpInner)" />
      <circle cx="75" cy="65" r="4" fill="#334155" />
      <!-- Highlight -->
      <path d="M25,45 C25,35 35,35 45,40" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.3" />
    </svg>
  `,

  // 37. BATTERY (Power, Energy, Status)
  battery: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="btCase" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#E2E8F0" />
          <stop offset="100%" stop-color="#94A3B8" />
        </linearGradient>
        <linearGradient id="btCharge" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#34D399" />
          <stop offset="100%" stop-color="#059669" />
        </linearGradient>
        <filter id="btDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="btGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#10B981" flood-opacity="0.5"/>
        </filter>
      </defs>
      <!-- Battery Terminal -->
      <path d="M50,15 L70,15 L70,25 L50,25 Z" fill="#475569" filter="url(#btDrop)" />
      <!-- Main Case -->
      <rect x="30" y="25" width="60" height="75" rx="8" fill="url(#btCase)" filter="url(#btDrop)" />
      <rect x="35" y="30" width="50" height="65" rx="4" fill="#0F172A" />
      <!-- Charge Level -->
      <rect x="40" y="60" width="40" height="30" rx="2" fill="url(#btCharge)" filter="url(#btGlow)" />
      <rect x="40" y="45" width="40" height="10" rx="2" fill="#1E293B" />
      <!-- Lightning Bolt inside Charge -->
      <polygon points="62,65 52,78 60,78 58,88 68,75 60,75" fill="#FEF08A" />
      <!-- Glare -->
      <path d="M35,35 L45,35 L35,85 Z" fill="#FFFFFF" opacity="0.1" />
    </svg>
  `,

  // 38. HEADPHONES (Music, Audio, Podcast)
  headphones: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="hpBand" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F1F5F9" />
          <stop offset="100%" stop-color="#64748B" />
        </linearGradient>
        <linearGradient id="hpCushion" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1E293B" />
          <stop offset="100%" stop-color="#000000" />
        </linearGradient>
        <filter id="hpDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <!-- Headband -->
      <path d="M25,60 C25,20 95,20 95,60" fill="none" stroke="url(#hpBand)" stroke-width="12" stroke-linecap="round" filter="url(#hpDrop)" />
      <!-- Ear Cups -->
      <rect x="15" y="55" width="20" height="40" rx="10" fill="url(#hpCushion)" filter="url(#hpDrop)" />
      <rect x="85" y="55" width="20" height="40" rx="10" fill="url(#hpCushion)" filter="url(#hpDrop)" />
      <!-- Ear Cup Accents -->
      <rect x="10" y="60" width="8" height="30" rx="4" fill="#38BDF8" />
      <rect x="102" y="60" width="8" height="30" rx="4" fill="#38BDF8" />
      <circle cx="25" cy="75" r="5" fill="#334155" />
      <circle cx="95" cy="75" r="5" fill="#334155" />
      <!-- Highlight -->
      <path d="M35,32 C45,20 75,20 85,32" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.6" />
    </svg>
  `,

  // 39. MICROCHIP (Hardware, AI Processing, Speed)
  microchip: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="mcBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0F172A" />
          <stop offset="100%" stop-color="#334155" />
        </linearGradient>
        <linearGradient id="mcTrace" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10B981" />
          <stop offset="100%" stop-color="#047857" />
        </linearGradient>
        <filter id="mcDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.4"/>
        </filter>
        <filter id="mcGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#34D399" flood-opacity="0.6"/>
        </filter>
      </defs>
      <!-- Pins -->
      <path d="M25,35 L15,35 M25,50 L15,50 M25,65 L15,65 M25,80 L15,80 M95,35 L105,35 M95,50 L105,50 M95,65 L105,65 M95,80 L105,80" stroke="#94A3B8" stroke-width="6" stroke-linecap="round" />
      <path d="M35,25 L35,15 M50,25 L50,15 M65,25 L65,15 M80,25 L80,15 M35,95 L35,105 M50,95 L50,105 M65,95 L65,105 M80,95 L80,105" stroke="#94A3B8" stroke-width="6" stroke-linecap="round" />
      <!-- Main Die -->
      <rect x="25" y="25" width="70" height="70" rx="6" fill="url(#mcBody)" filter="url(#mcDrop)" />
      <!-- Inner Core -->
      <rect x="40" y="40" width="40" height="40" rx="4" fill="#000000" />
      <!-- Traces -->
      <path d="M60,40 L60,30 M40,60 L30,60 M80,60 L90,60 M60,80 L60,90" stroke="url(#mcTrace)" stroke-width="3" filter="url(#mcGlow)" />
      <circle cx="60" cy="60" r="10" fill="url(#mcTrace)" filter="url(#mcGlow)" />
      <circle cx="60" cy="60" r="4" fill="#FFFFFF" />
      <circle cx="33" cy="33" r="3" fill="#64748B" />
      <circle cx="87" cy="87" r="3" fill="#64748B" />
    </svg>
  `,

  // 40. SATELLITE (Signal, Connection, Global)
  satellite: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="stPanel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0284C7" />
          <stop offset="100%" stop-color="#1E3A8A" />
        </linearGradient>
        <linearGradient id="stBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#CBD5E1" />
          <stop offset="100%" stop-color="#475569" />
        </linearGradient>
        <filter id="stDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="stSignalGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#38BDF8" flood-opacity="0.7"/>
        </filter>
      </defs>
      <!-- Solar Panels -->
      <g transform="rotate(-45 60 60)">
        <rect x="10" y="50" width="35" height="20" rx="2" fill="url(#stPanel)" filter="url(#stDrop)" />
        <rect x="75" y="50" width="35" height="20" rx="2" fill="url(#stPanel)" filter="url(#stDrop)" />
        <!-- Panel Grid Lines -->
        <line x1="22" y1="50" x2="22" y2="70" stroke="#38BDF8" stroke-width="1.5" opacity="0.6" />
        <line x1="33" y1="50" x2="33" y2="70" stroke="#38BDF8" stroke-width="1.5" opacity="0.6" />
        <line x1="87" y1="50" x2="87" y2="70" stroke="#38BDF8" stroke-width="1.5" opacity="0.6" />
        <line x1="98" y1="50" x2="98" y2="70" stroke="#38BDF8" stroke-width="1.5" opacity="0.6" />
        <!-- Main Body -->
        <rect x="45" y="45" width="30" height="30" rx="6" fill="url(#stBody)" filter="url(#stDrop)" />
        <!-- Antenna Dish Base -->
        <path d="M60,45 L60,25" stroke="#94A3B8" stroke-width="4" />
        <path d="M50,25 C50,15 70,15 70,25 Z" fill="#F1F5F9" filter="url(#stDrop)" />
        <circle cx="60" cy="20" r="3" fill="#EF4444" filter="url(#stSignalGlow)" />
      </g>
      <!-- Signal Waves -->
      <path d="M75,25 C82,20 90,20 97,25" fill="none" stroke="#38BDF8" stroke-width="3" stroke-linecap="round" filter="url(#stSignalGlow)" />
      <path d="M85,15 C95,10 105,10 115,15" fill="none" stroke="#38BDF8" stroke-width="3" stroke-linecap="round" filter="url(#stSignalGlow)" />
    </svg>
  `

  ,
  // 41. SHOPPING CART (Checkout, Store, Buy)
  cart: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="ctBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="100%" stop-color="#0284C7" />
        </linearGradient>
        <linearGradient id="ctWheel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#475569" />
          <stop offset="100%" stop-color="#0F172A" />
        </linearGradient>
        <filter id="ctDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#0284C7" flood-opacity="0.3"/>
        </filter>
        <filter id="ctGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#38BDF8" flood-opacity="0.4"/>
        </filter>
      </defs>
      <!-- Cart Handle & Frame -->
      <path d="M15,25 L30,25 L40,75 L95,75" fill="none" stroke="#64748B" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M15,25 L30,25" fill="none" stroke="#1E293B" stroke-width="8" stroke-linecap="round" />
      <!-- Cart Basket -->
      <path d="M35,35 L105,35 L95,70 L40,70 Z" fill="url(#ctBody)" filter="url(#ctDrop)" stroke="#0369A1" stroke-width="2" />
      <!-- Basket Grid -->
      <path d="M50,35 L45,70 M65,35 L60,70 M80,35 L75,70" stroke="#0EA5E9" stroke-width="2" />
      <path d="M38,45 L102,45 M39,55 L99,55" stroke="#0EA5E9" stroke-width="2" />
      <!-- Wheels -->
      <circle cx="50" cy="95" r="10" fill="url(#ctWheel)" />
      <circle cx="50" cy="95" r="4" fill="#94A3B8" />
      <circle cx="85" cy="95" r="10" fill="url(#ctWheel)" />
      <circle cx="85" cy="95" r="4" fill="#94A3B8" />
      <!-- Highlight -->
      <path d="M45,40 L95,40" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.6" filter="url(#ctGlow)" />
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

  // 48. RECEIPT / INVOICE (Billing, Records, Tax)
  receipt: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="rcPaper" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="100%" stop-color="#E2E8F0" />
        </linearGradient>
        <linearGradient id="rcAccent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="100%" stop-color="#2563EB" />
        </linearGradient>
        <filter id="rcDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.2"/>
        </filter>
      </defs>
      <!-- Receipt Paper -->
      <path d="M25,20 L95,20 L95,95 L85,105 L75,95 L65,105 L55,95 L45,105 L35,95 L25,105 Z" fill="url(#rcPaper)" filter="url(#rcDrop)" />
      <!-- Top Tear -->
      <path d="M25,20 L35,15 L45,20 L55,15 L65,20 L75,15 L85,20 L95,15 L95,20 L25,20 Z" fill="#CBD5E1" />
      <!-- Text Lines -->
      <rect x="35" y="35" width="50" height="4" rx="2" fill="#64748B" />
      <rect x="35" y="45" width="40" height="4" rx="2" fill="#94A3B8" />
      <rect x="35" y="55" width="45" height="4" rx="2" fill="#94A3B8" />
      <!-- Divider -->
      <line x1="35" y1="65" x2="85" y2="65" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="4 4" />
      <!-- Total -->
      <rect x="35" y="75" width="20" height="6" rx="2" fill="#475569" />
      <rect x="65" y="75" width="20" height="6" rx="2" fill="url(#rcAccent)" />
      <!-- Checkmark -->
      <circle cx="80" cy="40" r="8" fill="#10B981" />
      <path d="M77,40 L79,42 L83,38" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" />
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
  `

  ,
  // 51. HOME (Dashboard, Real Estate, Main)
  home: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="hmRoof" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F43F5E" />
          <stop offset="100%" stop-color="#9F1239" />
        </linearGradient>
        <linearGradient id="hmWall" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F8FAFC" />
          <stop offset="100%" stop-color="#94A3B8" />
        </linearGradient>
        <filter id="hmDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="hmGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#FDE047" flood-opacity="0.6"/>
        </filter>
      </defs>
      <!-- Base Walls -->
      <path d="M25,50 L95,50 L95,100 L25,100 Z" fill="url(#hmWall)" filter="url(#hmDrop)" />
      <!-- Door -->
      <rect x="45" y="65" width="30" height="35" fill="#1E293B" />
      <!-- Window -->
      <rect x="30" y="60" width="10" height="10" fill="#FDE047" filter="url(#hmGlow)" />
      <rect x="80" y="60" width="10" height="10" fill="#FDE047" filter="url(#hmGlow)" />
      <!-- Roof -->
      <path d="M10,55 L60,15 L110,55 Z" fill="url(#hmRoof)" filter="url(#hmDrop)" stroke="#BE123C" stroke-width="2" stroke-linejoin="round" />
      <!-- Chimney -->
      <rect x="75" y="25" width="12" height="15" fill="#475569" filter="url(#hmDrop)" />
      <!-- Door Knob -->
      <circle cx="70" cy="85" r="2" fill="#FCD34D" />
      <!-- Edge Highlight -->
      <path d="M20,50 L60,18 L100,50" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.4" />
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

  // 53. TRASH CAN (Delete, Remove, Clear)
  trash: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="trBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E2E8F0" />
          <stop offset="100%" stop-color="#64748B" />
        </linearGradient>
        <linearGradient id="trLid" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F1F5F9" />
          <stop offset="100%" stop-color="#94A3B8" />
        </linearGradient>
        <filter id="trDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <!-- Can Body -->
      <path d="M35,45 L85,45 L75,105 L45,105 Z" fill="url(#trBody)" filter="url(#trDrop)" stroke="#475569" stroke-width="2" />
      <!-- Ribs -->
      <line x1="48" y1="55" x2="51" y2="95" stroke="#94A3B8" stroke-width="3" stroke-linecap="round" />
      <line x1="60" y1="55" x2="60" y2="95" stroke="#94A3B8" stroke-width="3" stroke-linecap="round" />
      <line x1="72" y1="55" x2="69" y2="95" stroke="#94A3B8" stroke-width="3" stroke-linecap="round" />
      <!-- Lid -->
      <path d="M25,40 L95,40 L95,30 L25,30 Z" fill="url(#trLid)" filter="url(#trDrop)" />
      <!-- Handle -->
      <path d="M50,30 L50,20 L70,20 L70,30" fill="none" stroke="#475569" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <!-- Highlight -->
      <path d="M27,33 L93,33" stroke="#FFFFFF" stroke-width="2" opacity="0.6" />
      <path d="M38,48 L82,48" stroke="#FFFFFF" stroke-width="2" opacity="0.4" />
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

  // 59. CHECKMARK / BADGE (Verified, Success, Approved)
  badge: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="bgRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="100%" stop-color="#0369A1" />
        </linearGradient>
        <linearGradient id="bgMedal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FCD34D" />
          <stop offset="50%" stop-color="#F59E0B" />
          <stop offset="100%" stop-color="#92400E" />
        </linearGradient>
        <filter id="bgDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.4"/>
        </filter>
        <filter id="bgGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#FCD34D" flood-opacity="0.6"/>
        </filter>
      </defs>
      <!-- Ribbons -->
      <polygon points="35,60 25,105 45,95 60,110 50,60" fill="url(#bgRibbon)" filter="url(#bgDrop)" />
      <polygon points="85,60 95,105 75,95 60,110 70,60" fill="url(#bgRibbon)" filter="url(#bgDrop)" />
      <!-- Medal Base -->
      <circle cx="60" cy="45" r="35" fill="url(#bgMedal)" filter="url(#bgDrop)" />
      <!-- Inner Ring -->
      <circle cx="60" cy="45" r="25" fill="#1E293B" filter="url(#bgDrop)" />
      <!-- Checkmark -->
      <path d="M45,45 L55,55 L75,35" fill="none" stroke="url(#bgMedal)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" filter="url(#bgGlow)" />
      <!-- Highlights -->
      <circle cx="60" cy="45" r="33" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.5" />
      <path d="M48,42 L55,49 L72,32" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.8" />
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
  `

  ,
  // 61. PAINT PALETTE (Design, Colors, Art)
  palette: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="plWood" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE68A" />
          <stop offset="50%" stop-color="#D97706" />
          <stop offset="100%" stop-color="#92400E" />
        </linearGradient>
        <filter id="plDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="plGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#FFFFFF" flood-opacity="0.4"/>
        </filter>
      </defs>
      <!-- Palette Body -->
      <path d="M75,15 C95,15 105,30 105,55 C105,80 85,100 60,100 C30,100 15,85 15,55 C15,35 30,15 50,15 C60,15 65,25 75,15 Z" fill="url(#plWood)" filter="url(#plDrop)" />
      <!-- Thumb Hole -->
      <circle cx="80" cy="75" r="10" fill="#1E293B" filter="url(#plGlow)" />
      <!-- Paint Dollops -->
      <circle cx="35" cy="40" r="8" fill="#EF4444" filter="url(#plDrop)" />
      <circle cx="50" cy="30" r="7" fill="#F59E0B" filter="url(#plDrop)" />
      <circle cx="70" cy="35" r="9" fill="#10B981" filter="url(#plDrop)" />
      <circle cx="45" cy="65" r="8" fill="#3B82F6" filter="url(#plDrop)" />
      <circle cx="65" cy="55" r="7" fill="#8B5CF6" filter="url(#plDrop)" />
      <!-- Highlights on Paint -->
      <circle cx="33" cy="38" r="2" fill="#FFFFFF" opacity="0.8" />
      <circle cx="48" cy="28" r="2" fill="#FFFFFF" opacity="0.8" />
      <circle cx="68" cy="33" r="2.5" fill="#FFFFFF" opacity="0.8" />
      <circle cx="43" cy="63" r="2" fill="#FFFFFF" opacity="0.8" />
      <circle cx="63" cy="53" r="2" fill="#FFFFFF" opacity="0.8" />
    </svg>
  `,

  // 62. BOOK / JOURNAL (Education, Reading, Knowledge)
  book: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="bkCover" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3B82F6" />
          <stop offset="100%" stop-color="#1D4ED8" />
        </linearGradient>
        <linearGradient id="bkPages" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="100%" stop-color="#E2E8F0" />
        </linearGradient>
        <filter id="bkDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.4"/>
        </filter>
        <filter id="bkGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#FCD34D" flood-opacity="0.6"/>
        </filter>
      </defs>
      <!-- Back Cover (Right) -->
      <path d="M60,15 L105,25 L105,95 L60,85 Z" fill="#1E3A8A" filter="url(#bkDrop)" />
      <!-- Back Cover (Left) -->
      <path d="M60,15 L15,25 L15,95 L60,85 Z" fill="url(#bkCover)" filter="url(#bkDrop)" />
      <!-- Pages (Right) -->
      <path d="M60,22 L100,30 L100,90 L60,82 Z" fill="url(#bkPages)" />
      <!-- Pages (Left) -->
      <path d="M60,22 L20,30 L20,90 L60,82 Z" fill="url(#bkPages)" />
      <!-- Spine Shadow -->
      <path d="M58,21 L62,21 L62,83 L58,83 Z" fill="#94A3B8" opacity="0.8" />
      <path d="M60,15 L60,85" stroke="#0F172A" stroke-width="3" stroke-linecap="round" />
      <!-- Bookmark -->
      <path d="M65,23 L75,25 L75,55 L70,50 L65,55 Z" fill="#EF4444" filter="url(#bkDrop)" />
      <!-- Text Lines (Left) -->
      <line x1="28" y1="40" x2="52" y2="35" stroke="#94A3B8" stroke-width="3" stroke-linecap="round" />
      <line x1="28" y1="50" x2="52" y2="45" stroke="#94A3B8" stroke-width="3" stroke-linecap="round" />
      <line x1="28" y1="60" x2="45" y2="56" stroke="#94A3B8" stroke-width="3" stroke-linecap="round" />
      <!-- Floating Magic Particles -->
      <circle cx="35" cy="20" r="3" fill="#FCD34D" filter="url(#bkGlow)" />
      <circle cx="85" cy="15" r="4" fill="#FCD34D" filter="url(#bkGlow)" />
      <circle cx="105" cy="40" r="2" fill="#FCD34D" filter="url(#bkGlow)" />
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

  // 65. MUSIC NOTE (Audio, Sound, Entertainment)
  music: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="muNote" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#C084FC" />
          <stop offset="50%" stop-color="#9333EA" />
          <stop offset="100%" stop-color="#4C1D95" />
        </linearGradient>
        <filter id="muDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#4C1D95" flood-opacity="0.4"/>
        </filter>
        <filter id="muGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#C084FC" flood-opacity="0.5"/>
        </filter>
      </defs>
      <!-- Note Base 1 -->
      <ellipse cx="35" cy="85" rx="15" ry="10" fill="url(#muNote)" filter="url(#muDrop)" transform="rotate(-15 35 85)" />
      <circle cx="33" cy="83" r="3" fill="#FFFFFF" opacity="0.6" />
      <!-- Note Base 2 -->
      <ellipse cx="85" cy="75" rx="15" ry="10" fill="url(#muNote)" filter="url(#muDrop)" transform="rotate(-15 85 75)" />
      <circle cx="83" cy="73" r="3" fill="#FFFFFF" opacity="0.6" />
      <!-- Stems -->
      <path d="M48,80 L48,25 M98,70 L98,15" stroke="url(#muNote)" stroke-width="8" stroke-linecap="round" filter="url(#muDrop)" />
      <!-- Beam -->
      <path d="M48,35 L48,20 L98,10 L98,25 Z" fill="url(#muNote)" filter="url(#muDrop)" />
      <!-- Sound Waves -->
      <path d="M15,50 Q25,35 15,20" fill="none" stroke="#F472B6" stroke-width="4" stroke-linecap="round" filter="url(#muGlow)" />
      <path d="M105,95 Q115,80 105,65" fill="none" stroke="#38BDF8" stroke-width="4" stroke-linecap="round" filter="url(#muGlow)" />
    </svg>
  `,

  // 66. BRIEFCASE (Business, Corporate, Portfolio)
  briefcase: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="bcLeather" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#D97706" />
          <stop offset="100%" stop-color="#78350F" />
        </linearGradient>
        <linearGradient id="bcGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE047" />
          <stop offset="100%" stop-color="#B45309" />
        </linearGradient>
        <filter id="bcDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.4"/>
        </filter>
      </defs>
      <!-- Handle -->
      <path d="M45,35 L45,20 C45,15 75,15 75,20 L75,35" fill="none" stroke="#1E293B" stroke-width="8" stroke-linecap="round" filter="url(#bcDrop)" />
      <!-- Main Body -->
      <rect x="15" y="35" width="90" height="65" rx="6" fill="url(#bcLeather)" filter="url(#bcDrop)" />
      <rect x="15" y="35" width="90" height="30" rx="6" fill="#F59E0B" opacity="0.3" />
      <!-- Locks / Latches -->
      <rect x="30" y="55" width="15" height="10" rx="2" fill="url(#bcGold)" filter="url(#bcDrop)" />
      <rect x="75" y="55" width="15" height="10" rx="2" fill="url(#bcGold)" filter="url(#bcDrop)" />
      <!-- Keyholes -->
      <circle cx="37.5" cy="60" r="2" fill="#451A03" />
      <circle cx="82.5" cy="60" r="2" fill="#451A03" />
      <!-- Stitching -->
      <path d="M20,40 L100,40 M20,95 L100,95" stroke="#FEF3C7" stroke-width="2" stroke-dasharray="4 4" opacity="0.5" />
      <!-- Highlight -->
      <path d="M18,40 C35,33 85,33 102,40" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.4" />
    </svg>
  `,

  // 67. CLIPBOARD (Tasks, Management, Survey)
  clipboard: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="cbBoard" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#94A3B8" />
          <stop offset="100%" stop-color="#475569" />
        </linearGradient>
        <linearGradient id="cbPaper" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="100%" stop-color="#E2E8F0" />
        </linearGradient>
        <linearGradient id="cbClip" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#CBD5E1" />
          <stop offset="100%" stop-color="#64748B" />
        </linearGradient>
        <filter id="cbDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <!-- Board -->
      <rect x="20" y="20" width="80" height="90" rx="6" fill="url(#cbBoard)" filter="url(#cbDrop)" />
      <!-- Paper -->
      <rect x="30" y="35" width="60" height="70" rx="2" fill="url(#cbPaper)" filter="url(#cbDrop)" />
      <!-- Clip -->
      <path d="M40,25 L80,25 L85,15 L35,15 Z" fill="url(#cbClip)" filter="url(#cbDrop)" stroke="#334155" stroke-width="2" stroke-linejoin="round" />
      <circle cx="60" cy="20" r="3" fill="#1E293B" />
      <!-- Checkmarks & Lines -->
      <circle cx="42" cy="50" r="5" fill="#10B981" />
      <path d="M40,50 L42,52 L45,48" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" />
      <rect x="55" y="48" width="25" height="4" rx="2" fill="#94A3B8" />
      
      <circle cx="42" cy="65" r="5" fill="#1E293B" />
      <rect x="55" y="63" width="20" height="4" rx="2" fill="#94A3B8" />

      <circle cx="42" cy="80" r="5" fill="#1E293B" />
      <rect x="55" y="78" width="15" height="4" rx="2" fill="#94A3B8" />
      <!-- Highlight -->
      <path d="M25,25 L25,105" stroke="#FFFFFF" stroke-width="3" opacity="0.3" stroke-linecap="round" />
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

  // 69. PRINTER (Documents, Office, Output)
  printer: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="prBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E2E8F0" />
          <stop offset="100%" stop-color="#94A3B8" />
        </linearGradient>
        <linearGradient id="prTop" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#334155" />
          <stop offset="100%" stop-color="#0F172A" />
        </linearGradient>
        <filter id="prDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="prGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#10B981" flood-opacity="0.6"/>
        </filter>
      </defs>
      <!-- Top Paper -->
      <path d="M35,45 L85,45 L80,15 L40,15 Z" fill="#FFFFFF" filter="url(#prDrop)" />
      <line x1="45" y1="25" x2="75" y2="25" stroke="#CBD5E1" stroke-width="3" />
      <line x1="45" y1="35" x2="65" y2="35" stroke="#CBD5E1" stroke-width="3" />
      <!-- Main Printer Body -->
      <rect x="20" y="45" width="80" height="45" rx="6" fill="url(#prBody)" filter="url(#prDrop)" />
      <!-- Scanner / Top Lid -->
      <rect x="15" y="45" width="90" height="15" rx="4" fill="url(#prTop)" />
      <rect x="85" y="48" width="10" height="4" rx="2" fill="#0EA5E9" />
      <circle cx="25" cy="52" r="3" fill="#10B981" filter="url(#prGlow)" />
      <!-- Output Tray Opening -->
      <rect x="35" y="70" width="50" height="10" rx="3" fill="#1E293B" />
      <!-- Output Paper -->
      <path d="M40,75 L80,75 L85,105 L35,105 Z" fill="#F8FAFC" filter="url(#prDrop)" />
      <line x1="45" y1="85" x2="75" y2="85" stroke="#94A3B8" stroke-width="3" />
      <line x1="45" y1="95" x2="60" y2="95" stroke="#94A3B8" stroke-width="3" />
      <!-- Brand Line Highlight -->
      <path d="M22,63 L98,63" stroke="#FFFFFF" stroke-width="2" opacity="0.6" />
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
  `

  ,
  // 71. MICROSCOPE (Research, Science, Lab)
  microscope: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="msBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E2E8F0" />
          <stop offset="100%" stop-color="#94A3B8" />
        </linearGradient>
        <linearGradient id="msDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#334155" />
          <stop offset="100%" stop-color="#0F172A" />
        </linearGradient>
        <filter id="msDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="msGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#10B981" flood-opacity="0.5"/>
        </filter>
      </defs>
      <!-- Base -->
      <path d="M25,100 L95,100 L95,90 L85,85 L35,85 L25,90 Z" fill="url(#msDark)" filter="url(#msDrop)" />
      <!-- Stand / Arm -->
      <path d="M40,85 C20,65 30,35 45,35 L60,35 C40,45 40,75 55,85 Z" fill="url(#msBody)" filter="url(#msDrop)" />
      <!-- Eyepiece Tube -->
      <polygon points="50,35 65,35 80,65 65,65" fill="url(#msBody)" filter="url(#msDrop)" />
      <polygon points="45,25 60,25 55,35 40,35" fill="url(#msDark)" />
      <!-- Stage -->
      <rect x="55" y="65" width="30" height="4" rx="2" fill="url(#msDark)" />
      <!-- Lenses -->
      <polygon points="65,65 80,65 75,75 70,75" fill="url(#msDark)" />
      <!-- Glowing Sample -->
      <ellipse cx="70" cy="63" rx="8" ry="2" fill="#10B981" filter="url(#msGlow)" />
      <circle cx="70" cy="63" r="2" fill="#FFFFFF" opacity="0.8" />
      <!-- Highlight -->
      <path d="M38,80 C25,65 33,42 45,37" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.5" />
    </svg>
  `,

  // 72. TELESCOPE (Space, Exploration, Vision)
  telescope: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="tsBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="100%" stop-color="#0284C7" />
        </linearGradient>
        <linearGradient id="tsDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#475569" />
          <stop offset="100%" stop-color="#1E293B" />
        </linearGradient>
        <filter id="tsDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.4"/>
        </filter>
        <filter id="tsStarGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#FCD34D" flood-opacity="0.6"/>
        </filter>
      </defs>
      <!-- Tripod -->
      <line x1="60" y1="75" x2="35" y2="105" stroke="url(#tsDark)" stroke-width="6" stroke-linecap="round" filter="url(#tsDrop)" />
      <line x1="60" y1="75" x2="85" y2="105" stroke="url(#tsDark)" stroke-width="6" stroke-linecap="round" filter="url(#tsDrop)" />
      <line x1="60" y1="75" x2="60" y2="110" stroke="url(#tsDark)" stroke-width="6" stroke-linecap="round" filter="url(#tsDrop)" />
      <!-- Mount -->
      <circle cx="60" cy="70" r="8" fill="#CBD5E1" />
      <path d="M55,65 L65,65 L65,75 L55,75 Z" fill="#94A3B8" />
      <!-- Telescope Tube -->
      <polygon points="35,65 95,25 105,35 45,75" fill="url(#tsBody)" filter="url(#tsDrop)" />
      <!-- Lenses & Rims -->
      <polygon points="90,20 100,15 110,30 100,35" fill="url(#tsDark)" />
      <polygon points="30,70 40,65 45,75 35,80" fill="url(#tsDark)" />
      <!-- Star / Discovery -->
      <circle cx="100" cy="20" r="3" fill="#FFFFFF" filter="url(#tsStarGlow)" />
      <path d="M90,10 Q100,20 110,10 Q100,0 90,10 Z" fill="#FDE047" filter="url(#tsStarGlow)" />
      <circle cx="10" cy="30" r="2" fill="#FFFFFF" filter="url(#tsStarGlow)" />
      <!-- Highlight -->
      <line x1="45" y1="63" x2="95" y2="30" stroke="#FFFFFF" stroke-width="2" opacity="0.4" />
    </svg>
  `,

  // 73. LEAF / PLANT (Eco, Nature, Growth)
  leaf: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="lfGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#34D399" />
          <stop offset="50%" stop-color="#10B981" />
          <stop offset="100%" stop-color="#047857" />
        </linearGradient>
        <filter id="lfDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#047857" flood-opacity="0.3"/>
        </filter>
        <filter id="lfGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#A7F3D0" flood-opacity="0.5"/>
        </filter>
      </defs>
      <!-- Main Leaf -->
      <path d="M95,25 C95,25 25,25 25,95 C25,95 95,95 95,25 Z" fill="url(#lfGreen)" filter="url(#lfDrop)" stroke="#065F46" stroke-width="2" />
      <!-- Leaf Veins -->
      <path d="M25,95 C45,75 70,45 95,25" fill="none" stroke="#6EE7B7" stroke-width="4" stroke-linecap="round" />
      <path d="M55,65 Q65,55 75,65" fill="none" stroke="#6EE7B7" stroke-width="3" stroke-linecap="round" />
      <path d="M40,80 Q50,70 60,80" fill="none" stroke="#6EE7B7" stroke-width="3" stroke-linecap="round" />
      <path d="M70,50 Q80,40 90,50" fill="none" stroke="#6EE7B7" stroke-width="3" stroke-linecap="round" />
      <!-- Dew Drop -->
      <circle cx="80" cy="40" r="5" fill="#E0F2FE" filter="url(#lfGlow)" />
      <path d="M78,38 C80,35 82,35 83,38" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" />
      <!-- Highlight Edge -->
      <path d="M35,90 C35,50 80,32 90,30" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.3" />
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

  // 79. ATOM (Physics, React, Core)
  atom: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="atOrbit" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="100%" stop-color="#8B5CF6" />
        </linearGradient>
        <radialGradient id="atCore" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#FDE047" />
          <stop offset="70%" stop-color="#F59E0B" />
          <stop offset="100%" stop-color="#B45309" />
        </radialGradient>
        <filter id="atGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#8B5CF6" flood-opacity="0.6"/>
        </filter>
        <filter id="atCoreGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#FDE047" flood-opacity="0.8"/>
        </filter>
      </defs>
      <!-- Nucleus -->
      <circle cx="60" cy="60" r="12" fill="url(#atCore)" filter="url(#atCoreGlow)" />
      <!-- Orbits -->
      <ellipse cx="60" cy="60" rx="45" ry="15" fill="none" stroke="url(#atOrbit)" stroke-width="3" filter="url(#atGlow)" />
      <ellipse cx="60" cy="60" rx="45" ry="15" fill="none" stroke="url(#atOrbit)" stroke-width="3" filter="url(#atGlow)" transform="rotate(60 60 60)" />
      <ellipse cx="60" cy="60" rx="45" ry="15" fill="none" stroke="url(#atOrbit)" stroke-width="3" filter="url(#atGlow)" transform="rotate(120 60 60)" />
      <!-- Electrons -->
      <circle cx="15" cy="60" r="5" fill="#38BDF8" filter="url(#atGlow)" />
      <circle cx="82" cy="22" r="5" fill="#8B5CF6" filter="url(#atGlow)" />
      <circle cx="82" cy="98" r="5" fill="#E879F9" filter="url(#atGlow)" />
      <!-- Core Highlight -->
      <circle cx="56" cy="56" r="3" fill="#FFFFFF" opacity="0.9" />
    </svg>
  `,

  // 80. MAGNET (Attraction, Leads, Inbound)
  magnet: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="mgRed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F43F5E" />
          <stop offset="100%" stop-color="#9F1239" />
        </linearGradient>
        <linearGradient id="mgSteel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E2E8F0" />
          <stop offset="100%" stop-color="#64748B" />
        </linearGradient>
        <filter id="mgDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="mgFieldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#38BDF8" flood-opacity="0.5"/>
        </filter>
      </defs>
      <!-- Main Magnet U-Shape -->
      <path d="M30,30 L30,65 C30,85 90,85 90,65 L90,30 L70,30 L70,65 C70,75 50,75 50,65 L50,30 Z" fill="url(#mgRed)" filter="url(#mgDrop)" stroke="#BE123C" stroke-width="2" />
      <!-- Poles (Silver Tips) -->
      <rect x="29" y="15" width="22" height="15" fill="url(#mgSteel)" filter="url(#mgDrop)" />
      <rect x="69" y="15" width="22" height="15" fill="url(#mgSteel)" filter="url(#mgDrop)" />
      <!-- Highlights on Red Body -->
      <path d="M35,30 L35,65 C35,78 45,85 60,85" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.4" />
      <!-- Magnetic Field Lines -->
      <path d="M25,10 Q40,0 60,10" fill="none" stroke="#38BDF8" stroke-width="3" stroke-linecap="round" filter="url(#mgFieldGlow)" />
      <path d="M15,15 Q40,-10 70,15" fill="none" stroke="#38BDF8" stroke-width="3" stroke-linecap="round" opacity="0.6" filter="url(#mgFieldGlow)" />
      <path d="M5,20 Q40,-20 80,20" fill="none" stroke="#38BDF8" stroke-width="3" stroke-linecap="round" opacity="0.3" filter="url(#mgFieldGlow)" />
      <!-- Field Particles -->
      <circle cx="40" cy="5" r="2" fill="#FFFFFF" filter="url(#mgFieldGlow)" />
      <circle cx="60" cy="-5" r="3" fill="#FFFFFF" filter="url(#mgFieldGlow)" />
    </svg>
  `
};
});

if (!window.axicons) window.axicons = [];
window.axicons = window.axicons.concat(formattedLuxeIcons);

})();
