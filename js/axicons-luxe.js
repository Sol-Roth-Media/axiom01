/**
 * Axiom01 - Axicons Luxe Variant
 * Ultra-detailed, illustrative SVG icons with rich gradients, shadows, and depth.
 */

(function() {
  if (typeof window === 'undefined') window = {};
  if (!window.AxiconsLuxe) window.AxiconsLuxe = {};

  Object.assign(window.AxiconsLuxe, {

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

  // 11. SEARCH (Explore, Find, Focus, Query)
  search: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="scLens" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="100%" stop-color="#0284C7" />
        </linearGradient>
        <linearGradient id="scHandle" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FEF08A" />
          <stop offset="50%" stop-color="#FACC15" />
          <stop offset="100%" stop-color="#B45309" />
        </linearGradient>
        <filter id="scDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="scGlow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#38BDF8" flood-opacity="0.5"/>
        </filter>
      </defs>
      <circle cx="50" cy="50" r="35" fill="none" stroke="url(#scLens)" stroke-width="12" filter="url(#scDrop)" />
      <circle cx="50" cy="50" r="32" fill="#BAE6FD" opacity="0.3" />
      <circle cx="50" cy="50" r="30" fill="url(#scLens)" filter="url(#scGlow)" opacity="0.8"/>
      <path d="M85,85 L105,105 C110,110 115,105 110,100 L90,80 Z" fill="url(#scHandle)" filter="url(#scDrop)" />
      <path d="M92,86 L100,94" fill="none" stroke="#A16207" stroke-width="1.5" stroke-linecap="round" />
      <path d="M30,30 C30,30 40,25 50,25 C60,25 70,30 70,30" fill="none" stroke="#FFFFFF" stroke-width="2.5" opacity="0.4" />
    </svg>
  `,

  // 12. SETTINGS (Configurations, Preferences, Gears, Interweave Gears, Multi-Gears)
  settings: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="seGear1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FEF08A" />
          <stop offset="50%" stop-color="#EAB308" />
          <stop offset="100%" stop-color="#A16207" />
        </linearGradient>
        <linearGradient id="seGear2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FECACA" />
          <stop offset="50%" stop-color="#EF4444" />
          <stop offset="100%" stop-color="#991B1B" />
        </linearGradient>
        <filter id="seDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="seGearGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#FBBF24" flood-opacity="0.6"/>
        </filter>
      </defs>
      <g filter="url(#seDrop)">
        <path d="M50,15 L70,15 L75,25 L85,30 L90,25 L105,35 L100,50 L105,65 L95,75 L105,90 L95,105 L80,100 L65,105 L50,100 L35,105 L25,95 L15,80 L25,65 L15,50 L25,35 L20,20 L35,15 Z" fill="url(#seGear1)" filter="url(#seGearGlow)" />
        <circle cx="60" cy="60" r="18" fill="#FDE047" stroke="#A16207" stroke-width="2" />
        <g transform="translate(30, 60)">
          <path d="M25,0 L35,15 L50,10 L60,25 L75,20 L85,35 L80,50 L85,65 L75,70 L70,85 L55,80 L45,95 L30,90 L20,105 L10,100 L0,115 L-10,105 L-20,110 L-35,100 L-45,115 L-60,110 L-70,100 L-65,85 L-70,70 L-65,55 L-70,40 L-65,25 L-70,10 L-65,0 Z" fill="url(#seGear2)" />
          <circle cx="25" cy="25" r="12" fill="#FECACA" stroke="#991B1B" stroke-width="1.5" />
        </g>
      </g>
      <circle cx="60" cy="60" r="6" fill="#A16207" />
      <circle cx="60" cy="60" r="2" fill="#FDE047" />
      <path d="M30,30 C30,30 40,25 50,25 C60,25 70,30 70,30" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.4" />
    </svg>
  `,

  // 13. FOLDER (Organization, Documents, Files, Stacked Folders)
  folder: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="foBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE047" />
          <stop offset="50%" stop-color="#F59E0B" />
          <stop offset="100%" stop-color="#B45309" />
        </linearGradient>
        <linearGradient id="foTab" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#BAE6FD" />
          <stop offset="100%" stop-color="#38BDF8" />
        </linearGradient>
        <linearGradient id="foPaper" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="100%" stop-color="#E2E8F0" />
        </linearGradient>
        <filter id="foDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="foTabGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#38BDF8" flood-opacity="0.5"/>
        </filter>
      </defs>
      <g filter="url(#foDrop)">
        <rect x="25" y="25" width="80" height="60" rx="3" fill="#A16207" transform="rotate(-5, 60, 60)" />
        <g filter="url(#foDrop)">
          <path d="M15,40 L105,40 L100,105 L20,105 Z" fill="url(#foBody)" />
          <rect x="20" y="30" width="20" height="10" rx="2" fill="url(#foTab)" filter="url(#foTabGlow)" />
          <rect x="15" y="40" width="90" height="65" rx="3" fill="none" stroke="#FDE047" stroke-width="1.5" opacity="0.6"/>
        </g>
      </g>
      <rect x="35" y="15" width="60" height="40" rx="2" fill="url(#foPaper)" filter="url(#foDrop)" transform="rotate(2, 65, 35)" />
      <line x1="45" y1="25" x2="85" y2="25" stroke="#CBD5E1" stroke-width="3" stroke-linecap="round" />
      <line x1="45" y1="35" x2="75" y2="35" stroke="#CBD5E1" stroke-width="3" stroke-linecap="round" />
      <path d="M22,42 C30,35 45,35 60,35 C75,35 90,35 98,42" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.4" />
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

  // 25. GIFT (Rewards, Entertainment, Bonuses, Promotions)
  gift: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="gfBox" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FDE047" />
                  <stop offset="50%" stop-color="#EAB308" />
                  <stop offset="100%" stop-color="#A16207" />
                </linearGradient>
                <linearGradient id="gfRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FCA5A5" />
                  <stop offset="50%" stop-color="#EF4444" />
                  <stop offset="100%" stop-color="#7F1D1D" />
                </linearGradient>
                <filter id="gfDrop" x="-10%" y="-10%" width="125%" height="125%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
                </filter>
                <filter id="gfInnerShadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#000000" flood-opacity="0.4"/>
                </filter>
              </defs>
              <!-- Base Box -->
              <rect x="25" y="55" width="70" height="50" rx="4" fill="url(#gfBox)" filter="url(#gfDrop)" />
              <!-- Vertical Ribbon -->
              <rect x="52" y="55" width="16" height="50" fill="url(#gfRibbon)" />
              <!-- Lid Structure -->
              <rect x="20" y="40" width="80" height="15" rx="3" fill="url(#gfBox)" filter="url(#gfInnerShadow)" />
              <path d="M22,42 L98,42" stroke="#FEF08A" stroke-width="2" stroke-linecap="round" opacity="0.7" />
              <!-- Lid Ribbon -->
              <rect x="52" y="40" width="16" height="15" fill="url(#gfRibbon)" />
              <!-- Intricate Bow -->
              <path d="M60,40 C50,20 25,20 35,35 C40,42 55,40 60,40 Z" fill="url(#gfRibbon)" filter="url(#gfInnerShadow)" />
              <path d="M60,40 C70,20 95,20 85,35 C80,42 65,40 60,40 Z" fill="url(#gfRibbon)" filter="url(#gfInnerShadow)" />
              <!-- Bow Highlights -->
              <path d="M40,28 C35,28 32,32 35,35" fill="none" stroke="#FCA5A5" stroke-width="2" stroke-linecap="round" />
              <path d="M80,28 C85,28 88,32 85,35" fill="none" stroke="#FCA5A5" stroke-width="2" stroke-linecap="round" />
              <!-- Center Knot -->
              <circle cx="60" cy="38" r="6" fill="url(#gfRibbon)" filter="url(#gfInnerShadow)" />
              <circle cx="59" cy="37" r="2" fill="#FCA5A5" opacity="0.6" />
            </svg>
  `,

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

  // 28. GLOBE (Social Media, Language, Network, Web)
  globe: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <radialGradient id="glOcean" cx="40%" cy="40%" r="60%">
                  <stop offset="0%" stop-color="#38BDF8" />
                  <stop offset="60%" stop-color="#0284C7" />
                  <stop offset="100%" stop-color="#0C4A6E" />
                </radialGradient>
                <linearGradient id="glLand" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#34D399" />
                  <stop offset="100%" stop-color="#047857" />
                </linearGradient>
                <filter id="glDrop" x="-10%" y="-10%" width="125%" height="125%">
                  <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#0284C7" flood-opacity="0.3"/>
                </filter>
                <filter id="glAtmosphere" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#38BDF8" flood-opacity="0.5"/>
                </filter>
              </defs>
              <!-- Glowing Atmosphere Outer Ring -->
              <circle cx="60" cy="60" r="46" fill="none" stroke="#BAE6FD" stroke-width="2" filter="url(#glAtmosphere)" opacity="0.6" />
              <!-- Ocean Sphere -->
              <circle cx="60" cy="60" r="45" fill="url(#glOcean)" filter="url(#glDrop)" />
              <!-- Latitude / Longitude Grid Lines (Curved for 3D) -->
              <ellipse cx="60" cy="60" rx="20" ry="45" fill="none" stroke="#7DD3FC" stroke-width="1.5" opacity="0.3" />
              <ellipse cx="60" cy="60" rx="45" ry="15" fill="none" stroke="#7DD3FC" stroke-width="1.5" opacity="0.3" />
              <path d="M17,45 Q60,65 103,45" fill="none" stroke="#7DD3FC" stroke-width="1.5" opacity="0.3" />
              <path d="M17,75 Q60,55 103,75" fill="none" stroke="#7DD3FC" stroke-width="1.5" opacity="0.3" />
              <!-- Landmasses (Abstracted Continents) -->
              <path d="M40,25 C50,20 60,30 55,40 C50,50 35,45 25,50 C20,40 30,30 40,25 Z" fill="url(#glLand)" />
              <path d="M85,35 C95,45 90,65 75,70 C60,75 70,50 85,35 Z" fill="url(#glLand)" />
              <path d="M45,75 C55,70 65,85 55,95 C45,100 35,90 45,75 Z" fill="url(#glLand)" />
              <!-- 3D Glare -->
              <path d="M25,40 C35,22 55,18 75,25 C55,22 35,30 25,40 Z" fill="#FFFFFF" opacity="0.3" />
            </svg>
  `,

  // 29. KEY (Access, Authentication, Security, Passwords)
  key: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="kyGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FEF08A" />
                  <stop offset="40%" stop-color="#FACC15" />
                  <stop offset="75%" stop-color="#EAB308" />
                  <stop offset="100%" stop-color="#854D0E" />
                </linearGradient>
                <linearGradient id="kyHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.8" />
                  <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
                </linearGradient>
                <filter id="kyDrop" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#854D0E" flood-opacity="0.35"/>
                </filter>
              </defs>
              <g transform="rotate(-45 60 60)" filter="url(#kyDrop)">
                <rect x="52" y="45" width="45" height="12" rx="2" fill="url(#kyGold)" />
                <path d="M82,57 L82,72 L88,72 L88,57 Z M91,57 L91,68 L97,68 L97,57 Z" fill="url(#kyGold)" />
                <circle cx="35" cy="51" r="22" fill="url(#kyGold)" />
                <circle cx="35" cy="51" r="10" fill="#1e293b" /> 
                <circle cx="35" cy="43" r="3" fill="#1e293b" />
                <circle cx="28" cy="55" r="3" fill="#1e293b" />
                <circle cx="42" cy="55" r="3" fill="#1e293b" />
                <path d="M15,51 C15,35 30,29 45,40 L95,46" fill="none" stroke="url(#kyHighlight)" stroke-width="1.5" opacity="0.6" />
              </g>
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
  `,

  // 31. LAPTOP (Desktop, Software, Workstation, Programming)
  laptop: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="lpSilver" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F8FAFC" />
          <stop offset="50%" stop-color="#CBD5E1" />
          <stop offset="100%" stop-color="#94A3B8" />
        </linearGradient>
        <linearGradient id="lpScreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0284C7" />
          <stop offset="100%" stop-color="#1E3A8A" />
        </linearGradient>
        <filter id="lpDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="lpScreenGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#38BDF8" flood-opacity="0.6"/>
        </filter>
      </defs>
      <rect x="15" y="20" width="90" height="60" rx="4" fill="#64748B" filter="url(#lpDrop)" />
      <rect x="18" y="23" width="84" height="54" rx="2" fill="url(#lpScreen)" />
      <rect x="25" y="30" width="40" height="30" rx="2" fill="#0F172A" filter="url(#lpScreenGlow)" />
      <line x1="28" y1="35" x2="45" y2="35" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" />
      <line x1="28" y1="42" x2="60" y2="42" stroke="#34D399" stroke-width="2" stroke-linecap="round" />
      <line x1="28" y1="49" x2="50" y2="49" stroke="#FBBF24" stroke-width="2" stroke-linecap="round" />
      <rect x="70" y="35" width="25" height="40" rx="2" fill="#FFFFFF" opacity="0.9" />
      <rect x="74" y="55" width="4" height="15" fill="#8B5CF6" />
      <rect x="80" y="48" width="4" height="22" fill="#3B82F6" />
      <rect x="86" y="40" width="4" height="30" fill="#10B981" />
      <path d="M10,80 L110,80 L116,92 L4,92 Z" fill="url(#lpSilver)" filter="url(#lpDrop)" />
      <rect x="50" y="85" width="20" height="5" rx="1" fill="#94A3B8" />
      <path d="M20,82 L100,82 L102,84 L18,84 Z" fill="#475569" />
      <path d="M6,93 L114,93 L114,95 L6,95 Z" fill="#64748B" />
      <path d="M10,80 L110,80" fill="none" stroke="#FFFFFF" stroke-width="1.5" opacity="0.8" />
    </svg>
  `,

  // 32. SMARTPHONE (Mobile, App Development, Devices, Communication)
  smartphone: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="smRim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E2E8F0" />
          <stop offset="50%" stop-color="#94A3B8" />
          <stop offset="100%" stop-color="#475569" />
        </linearGradient>
        <linearGradient id="smScreen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0F172A" />
          <stop offset="50%" stop-color="#1E293B" />
          <stop offset="100%" stop-color="#020617" />
        </linearGradient>
        <linearGradient id="smApp1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8" /><stop offset="100%" stop-color="#0284C7" />
        </linearGradient>
        <linearGradient id="smApp2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F472B6" /><stop offset="100%" stop-color="#BE185D" />
        </linearGradient>
        <filter id="smDrop" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="smGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#38BDF8" flood-opacity="0.5"/>
        </filter>
      </defs>
      <rect x="25" y="10" width="70" height="100" rx="12" fill="url(#smRim)" filter="url(#smDrop)" />
      <rect x="27" y="12" width="66" height="96" rx="10" fill="#334155" />
      <rect x="29" y="14" width="62" height="92" rx="8" fill="url(#smScreen)" />
      <rect x="36" y="35" width="12" height="12" rx="3" fill="url(#smApp1)" filter="url(#smGlow)" />
      <rect x="54" y="35" width="12" height="12" rx="3" fill="url(#smApp2)" />
      <rect x="72" y="35" width="12" height="12" rx="3" fill="#FBBF24" />
      <rect x="36" y="55" width="12" height="12" rx="3" fill="#34D399" />
      <rect x="54" y="55" width="12" height="12" rx="3" fill="#A78BFA" />
      <rect x="72" y="55" width="12" height="12" rx="3" fill="url(#smApp1)" />
      <rect x="34" y="85" width="52" height="16" rx="6" fill="#FFFFFF" opacity="0.1" />
      <rect x="38" y="87" width="12" height="12" rx="3" fill="#F87171" />
      <rect x="54" y="87" width="12" height="12" rx="3" fill="#60A5FA" />
      <rect x="70" y="87" width="12" height="12" rx="3" fill="#34D399" />
      <rect x="50" y="18" width="20" height="6" rx="3" fill="#000000" />
      <circle cx="66" cy="21" r="1.5" fill="#1D4ED8" />
      <path d="M29,45 L91,14 L91,14 L29,14 Z" fill="#FFFFFF" opacity="0.05" />
      <rect x="23" y="35" width="2" height="12" rx="1" fill="#64748B" />
      <rect x="23" y="50" width="2" height="12" rx="1" fill="#64748B" />
      <rect x="95" y="40" width="2" height="18" rx="1" fill="#64748B" />
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

  // 36. GAMEPAD (Gaming, Entertainment, Interactive, Media)
  gamepad: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="gpBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4C1D95" />
          <stop offset="50%" stop-color="#2E1065" />
          <stop offset="100%" stop-color="#0F172A" />
        </linearGradient>
        <radialGradient id="gpGrip" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#7C3AED" />
          <stop offset="100%" stop-color="#4C1D95" />
        </radialGradient>
        <filter id="gpDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.4"/>
        </filter>
        <filter id="gpNeon" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#F472B6" flood-opacity="0.8"/>
        </filter>
      </defs>
      <path d="M25,35 C45,25 75,25 95,35 C105,40 115,60 110,85 C108,95 95,95 85,85 C80,80 75,70 60,70 C45,70 40,80 35,85 C25,95 12,95 10,85 C5,60 15,40 25,35 Z" fill="url(#gpBody)" filter="url(#gpDrop)" />
      <path d="M25,35 C15,40 5,60 10,85 C12,95 25,95 35,85 C30,75 25,60 25,35 Z" fill="url(#gpGrip)" opacity="0.6" />
      <path d="M95,35 C105,40 115,60 110,85 C108,95 95,95 85,85 C90,75 95,60 95,35 Z" fill="url(#gpGrip)" opacity="0.6" />
      <path d="M28,48 L34,48 L34,42 L40,42 L40,48 L46,48 L46,54 L40,54 L40,60 L34,60 L34,54 L28,54 Z" fill="#1E293B" stroke="#0F172A" stroke-width="1.5" />
      <circle cx="85" cy="45" r="4" fill="#34D399" filter="url(#gpNeon)" />
      <circle cx="75" cy="55" r="4" fill="#60A5FA" />
      <circle cx="95" cy="55" r="4" fill="#F87171" />
      <circle cx="85" cy="65" r="4" fill="#FBBF24" />
      <circle cx="45" cy="70" r="10" fill="#334155" stroke="#0F172A" stroke-width="2" />
      <circle cx="45" cy="70" r="6" fill="#1E293B" />
      <circle cx="75" cy="70" r="10" fill="#334155" stroke="#0F172A" stroke-width="2" />
      <circle cx="75" cy="70" r="6" fill="#1E293B" />
      <rect x="52" y="45" width="6" height="3" rx="1" fill="#94A3B8" />
      <rect x="62" y="45" width="6" height="3" rx="1" fill="#94A3B8" />
      <circle cx="60" cy="55" r="4" fill="#FFFFFF" opacity="0.8" filter="url(#gpNeon)" />
      <path d="M25,35 C45,25 75,25 95,35" fill="none" stroke="#A78BFA" stroke-width="2" stroke-linecap="round" opacity="0.5" />
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

  // 66. BRIEFCASE (Work, Jobs, Portfolio, Business Management)
  briefcase: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="bfLeather" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#4B5563" />
                  <stop offset="100%" stop-color="#1F2937" />
                </linearGradient>
                <linearGradient id="bfGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FDE047" />
                  <stop offset="100%" stop-color="#CA8A04" />
                </linearGradient>
                <filter id="bfDrop" x="-10%" y="-10%" width="125%" height="125%">
                  <feDropShadow dx="0" dy="7" stdDeviation="5" flood-color="#000000" flood-opacity="0.3"/>
                </filter>
              </defs>
              <path d="M45,30 L45,20 C45,17 48,15 52,15 L68,15 C72,15 75,17 75,20 L75,30" fill="none" stroke="url(#bfLeather)" stroke-width="6" stroke-linecap="round" filter="url(#bfDrop)" />
              <rect x="15" y="30" width="90" height="65" rx="10" fill="url(#bfLeather)" filter="url(#bfDrop)" />
              <path d="M15,55 L45,55 C48,55 50,57 52,60 L55,66 C57,70 63,70 65,66 L68,60 C70,57 72,55 75,55 L105,55" fill="none" stroke="#374151" stroke-width="3" />
              <path d="M15,45 L15,38 C15,34 19,30 23,30 L30,30 Z" fill="#111827" />
              <path d="M105,45 L105,38 C105,34 101,30 97,30 L90,30 Z" fill="#111827" />
              <rect x="30" y="52" width="10" height="14" rx="2" fill="url(#bfGold)" />
              <circle cx="35" cy="59" r="2" fill="#854D0E" />
              <rect x="80" y="52" width="10" height="14" rx="2" fill="url(#bfGold)" />
              <circle cx="85" cy="59" r="2" fill="#854D0E" />
              <circle cx="60" cy="65" r="6" fill="url(#bfGold)" />
              <rect x="58" y="65" width="4" height="8" fill="url(#bfGold)" />
              <rect x="19" y="34" width="82" height="57" rx="7" fill="none" stroke="#6B7280" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.4" />
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
  `,

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

  // 83. COFFEE (Community, Dev Culture, Perks, Breaks)
  coffee: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="cfMug" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#F472B6" />
                  <stop offset="100%" stop-color="#9D174D" />
                </linearGradient>
                <radialGradient id="cfBrew" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#EDE9FE" />
                  <stop offset="40%" stop-color="#D97706" />
                  <stop offset="90%" stop-color="#451A03" />
                  <stop offset="100%" stop-color="#1C0D02" />
                </radialGradient>
                <filter id="cfDrop" x="-15%" y="-15%" width="130%" height="130%">
                  <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.25"/>
                </filter>
              </defs>
              <path d="M40,25 Q35,15 45,5 Q55,15 50,25" fill="none" stroke="#E2E8F0" stroke-width="3" stroke-linecap="round" opacity="0.3" filter="blur(1px)" />
              <path d="M60,25 Q55,12 65,5 Q75,12 70,25" fill="none" stroke="#E2E8F0" stroke-width="4" stroke-linecap="round" opacity="0.4" filter="blur(1px)" />
              <path d="M80,50 C100,50 100,85 80,85" fill="none" stroke="url(#cfMug)" stroke-width="12" stroke-linecap="round" filter="url(#cfDrop)" />
              <path d="M25,45 L85,45 L80,90 C78,102 32,102 30,90 Z" fill="url(#cfMug)" filter="url(#cfDrop)" />
              <ellipse cx="55" cy="45" rx="30" ry="8" fill="#78113E" />
              <ellipse cx="55" cy="47" rx="27" ry="6" fill="url(#cfBrew)" />
              <path d="M45,47 Q55,51 65,46 Q55,44 45,47 Z" fill="#FFFFFF" opacity="0.4" />
              <path d="M32,58 C32,75 36,88 42,92" fill="none" stroke="#FBCFE8" stroke-width="3" stroke-linecap="round" opacity="0.4" />
            </svg>
  `,

  // 84. MEDAL (Placement, Achievement, Rewards, Ranks)
  medal: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="mdRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#EF4444" />
                  <stop offset="35%" stop-color="#DC2626" />
                  <stop offset="36%" stop-color="#3B82F6" />
                  <stop offset="64%" stop-color="#1D4ED8" />
                  <stop offset="65%" stop-color="#EF4444" />
                  <stop offset="100%" stop-color="#B91C1C" />
                </linearGradient>
                <radialGradient id="mdGold" cx="38%" cy="38%" r="65%">
                  <stop offset="0%" stop-color="#FFFBEB" />
                  <stop offset="25%" stop-color="#FDE047" />
                  <stop offset="75%" stop-color="#EAB308" />
                  <stop offset="100%" stop-color="#854D0E" />
                </radialGradient>
                <filter id="mdDrop" x="-15%" y="-15%" width="130%" height="130%">
                  <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.3"/>
                </filter>
              </defs>
              <polygon points="30,10 60,55 90,10 70,10 60,40 50,10" fill="url(#mdRibbon)" filter="url(#mdDrop)" />
              <rect x="52" y="48" width="16" height="10" rx="2" fill="#CA8A04" />
              <circle cx="60" cy="75" r="30" fill="url(#mdGold)" filter="url(#mdDrop)" />
              <circle cx="60" cy="75" r="25" fill="none" stroke="#CA8A04" stroke-width="2" stroke-dasharray="4 2" />
              <polygon points="60,57 65,68 77,68 68,76 71,88 60,80 49,88 52,76 43,68 55,68" fill="#FFFBEB" opacity="0.9" />
              <path d="M38,62 C48,50 72,50 82,62 C70,54 50,54 38,62 Z" fill="#FFFFFF" opacity="0.4" />
            </svg>
  `,

  // 85. TICKET (Entertainment, Vouchers, Booking, Marketing Coupons)
  ticket: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <linearGradient id="tkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#F472B6" />
                  <stop offset="50%" stop-color="#EC4899" />
                  <stop offset="100%" stop-color="#BE185D" />
                </linearGradient>
                <filter id="tkDrop" x="-15%" y="-15%" width="130%" height="130%">
                  <feDropShadow dx="0" dy="7" stdDeviation="6" flood-color="#BE185D" flood-opacity="0.35"/>
                </filter>
              </defs>
              <g transform="rotate(-15 60 60)" filter="url(#tkDrop)">
                <path d="M15,35 L105,35 C105,42 110,45 115,45 L115,75 C110,75 105,78 105,85 L15,85 C15,78 10,75 5,75 L5,45 C10,45 15,42 15,35 Z" fill="url(#tkGrad)" />
                <path d="M19,39 L101,39 C99,45 104,49 109,49 L109,71 C104,71 99,75 101,81 L19,81 C21,75 16,71 11,71 L11,49 C16,49 21,45 19,39 Z" fill="none" stroke="#FBCFE8" stroke-width="1.5" stroke-dasharray="4 2" opacity="0.6" />
                <line x1="85" y1="35" x2="85" y2="85" stroke="#FFF0F6" stroke-width="3" stroke-dasharray="4 4" opacity="0.8" />
                <polygon points="45,52 48,58 55,58 50,62 52,69 45,65 38,69 40,62 35,58 42,58" fill="#FFFFFF" opacity="0.9" />
                <line x1="93" y1="48" x2="93" y2="72" stroke="#FFFFFF" stroke-width="2" opacity="0.7" />
                <line x1="97" y1="48" x2="97" y2="72" stroke="#FFFFFF" stroke-width="4" opacity="0.7" />
                <line x1="102" y1="48" x2="102" y2="72" stroke="#FFFFFF" stroke-width="1" opacity="0.7" />
              </g>
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

  // 103. KEYBOARD (Input, Technical Workspace, Interactive Controls, Coding Execution)
  keyboard: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="kbChassis" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#334155" />
          <stop offset="100%" stop-color="#0F172A" />
        </linearGradient>
        <linearGradient id="kbKey" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#64748B" />
          <stop offset="100%" stop-color="#475569" />
        </linearGradient>
        <linearGradient id="kbAccentKey" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="100%" stop-color="#0284C7" />
        </linearGradient>
        <filter id="kbDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="7" stdDeviation="5" flood-color="#000000" flood-opacity="0.35"/>
        </filter>
        <filter id="kbNeonGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#38BDF8" flood-opacity="0.5"/>
        </filter>
      </defs>
      <path d="M12,42 L108,42 L100,88 L20,88 Z" fill="url(#kbChassis)" filter="url(#kbDrop)" />
      <path d="M16,46 L104,46 L97,84 L23,84 Z" fill="#0F172A" />
      <path d="M18,48 L102,48 L95,82 L25,82 Z" fill="none" stroke="#38BDF8" stroke-width="1" filter="url(#kbNeonGlow)" opacity="0.4" />
      <rect x="23" y="50" width="10" height="8" rx="2" fill="url(#kbKey)" />
      <rect x="36" y="50" width="10" height="8" rx="2" fill="url(#kbKey)" />
      <rect x="49" y="50" width="10" height="8" rx="2" fill="url(#kbKey)" />
      <rect x="62" y="50" width="10" height="8" rx="2" fill="url(#kbKey)" />
      <rect x="75" y="50" width="10" height="8" rx="2" fill="url(#kbKey)" />
      <rect x="88" y="50" width="10" height="8" rx="2" fill="url(#kbAccentKey)" />
      <rect x="21" y="61" width="12" height="8" rx="2" fill="url(#kbKey)" />
      <rect x="36" y="61" width="10" height="8" rx="2" fill="url(#kbKey)" />
      <rect x="49" y="61" width="10" height="8" rx="2" fill="url(#kbKey)" />
      <rect x="62" y="61" width="10" height="8" rx="2" fill="url(#kbKey)" />
      <rect x="75" y="61" width="10" height="8" rx="2" fill="url(#kbKey)" />
      <rect x="88" y="61" width="9" height="8" rx="2" fill="url(#kbKey)" />
      <rect x="20" y="72" width="14" height="8" rx="2" fill="url(#kbKey)" />
      <rect x="37" y="72" width="48" height="8" rx="2" fill="url(#kbKey)" /> <rect x="88" y="72" width="7" height="8" rx="2" fill="url(#kbKey)" />
      <path d="M38,73 L83,73" stroke="#94A3B8" stroke-width="1" opacity="0.4" />
      <path d="M89,51 L97,51" stroke="#BAE6FD" stroke-width="1" opacity="0.6" />
    </svg>
  `,

  // 104. MOUSE (Precision Tracking, Navigation, System Interaction, Click Triggers)
  mouse: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="msBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#475569" />
          <stop offset="50%" stop-color="#334155" />
          <stop offset="100%" stop-color="#0F172A" />
        </linearGradient>
        <linearGradient id="msWheel" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FCD34D" />
          <stop offset="100%" stop-color="#D97706" />
        </linearGradient>
        <filter id="msDrop" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <filter id="msCoreGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#FBBF24" flood-opacity="0.6"/>
        </filter>
      </defs>
      <path d="M60,15 C40,15 30,35 30,65 C30,95 42,108 60,108 C78,108 90,95 90,65 C90,35 80,15 60,15 Z" fill="url(#msBody)" filter="url(#msDrop)" />
      <path d="M60,15 L60,52" fill="none" stroke="#1E293B" stroke-width="2" />
      <path d="M30,58 C40,58 42,65 42,75 C42,85 38,98 60,98 C82,98 78,85 78,75 C78,65 80,58 90,58" fill="none" stroke="#1E293B" stroke-width="1.5" opacity="0.6" />
      <rect x="56" y="28" width="8" height="16" rx="4" fill="url(#msWheel)" filter="url(#msCoreGlow)" />
      <line x1="56" y1="32" x2="64" y2="32" stroke="#451A03" stroke-width="1.5" />
      <line x1="56" y1="36" x2="64" y2="36" stroke="#451A03" stroke-width="1.5" />
      <line x1="56" y1="40" x2="64" y2="40" stroke="#451A03" stroke-width="1.5" />
      <path d="M36,50 C34,68 38,82 45,92" fill="none" stroke="#94A3B8" stroke-width="2.5" stroke-linecap="round" opacity="0.4" />
      <rect x="57" y="48" width="6" height="6" rx="1.5" fill="#94A3B8" />
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

  // 107. COIN (Currency, Wealth, Crypto, Transactions)
  coin: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <radialGradient id="cnGoldOuter" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#FEF08A" />
          <stop offset="50%" stop-color="#EAB308" />
          <stop offset="100%" stop-color="#854D0E" />
        </radialGradient>
        <radialGradient id="cnGoldInner" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FDE047" />
          <stop offset="70%" stop-color="#CA8A04" />
          <stop offset="100%" stop-color="#713F12" />
        </radialGradient>
        <filter id="cnDrop" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#713F12" flood-opacity="0.4"/>
        </filter>
        <filter id="cnInnerGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#422006" flood-opacity="0.5"/>
        </filter>
      </defs>
      <circle cx="60" cy="60" r="45" fill="url(#cnGoldOuter)" filter="url(#cnDrop)" />
      <circle cx="60" cy="60" r="34" fill="url(#cnGoldInner)" filter="url(#cnInnerGlow)" />
      <circle cx="60" cy="60" r="39" fill="none" stroke="#FEF08A" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.8" />
      <path d="M60,30 L60,90 M50,42 C65,42 70,50 60,55 C50,60 45,68 60,78" fill="none" stroke="#FFFBEB" stroke-width="8" stroke-linecap="round" filter="url(#cnDrop)" />
      <path d="M50,42 C65,42 70,50 60,55 C50,60 45,68 60,78" fill="none" stroke="#FBBF24" stroke-width="4" stroke-linecap="round" />
      <path d="M22,42 C30,24 55,18 78,24 C55,20 32,28 22,42 Z" fill="#FFFFFF" opacity="0.5" />
      <path d="M30,30 L33,22 L36,30 L44,33 L36,36 L33,44 L30,36 L22,33 Z" fill="#FFFFFF" />
    </svg>
  `,

  // 108. VAULT (Security, Storage, Banking, Protection)
  vault: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="vlSteel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#94A3B8" />
          <stop offset="50%" stop-color="#475569" />
          <stop offset="100%" stop-color="#1E293B" />
        </linearGradient>
        <radialGradient id="vlDoor" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#E2E8F0" />
          <stop offset="70%" stop-color="#64748B" />
          <stop offset="100%" stop-color="#334155" />
        </radialGradient>
        <linearGradient id="vlGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE047" />
          <stop offset="100%" stop-color="#A16207" />
        </linearGradient>
        <filter id="vlDrop" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.4"/>
        </filter>
        <filter id="vlInner" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>
      <rect x="10" y="10" width="100" height="100" rx="8" fill="url(#vlSteel)" filter="url(#vlDrop)" />
      <rect x="15" y="15" width="90" height="90" rx="4" fill="none" stroke="#CBD5E1" stroke-width="2" opacity="0.3" />
      <circle cx="20" cy="20" r="2" fill="#0F172A" /><circle cx="100" cy="20" r="2" fill="#0F172A" />
      <circle cx="20" cy="100" r="2" fill="#0F172A" /><circle cx="100" cy="100" r="2" fill="#0F172A" />
      <circle cx="60" cy="60" r="40" fill="#0F172A" filter="url(#vlInner)" />
      <circle cx="60" cy="60" r="36" fill="url(#vlDoor)" filter="url(#vlDrop)" />
      <circle cx="60" cy="60" r="34" fill="none" stroke="#FFFFFF" stroke-width="1.5" opacity="0.4" />
      <circle cx="60" cy="60" r="16" fill="url(#vlSteel)" filter="url(#vlDrop)" />
      <path d="M60,35 L60,85 M35,60 L85,60 M42,42 L78,78 M42,78 L78,42" stroke="url(#vlGold)" stroke-width="5" stroke-linecap="round" filter="url(#vlDrop)" />
      <circle cx="60" cy="60" r="8" fill="url(#vlGold)" filter="url(#vlDrop)" />
      <circle cx="60" cy="60" r="4" fill="#713F12" />
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

  // 110. BANK (Institutions, Government, Enterprise, Security)
  bank: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="bkMarble" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#F8FAFC" />
          <stop offset="100%" stop-color="#94A3B8" />
        </linearGradient>
        <linearGradient id="bkGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE047" />
          <stop offset="100%" stop-color="#B45309" />
        </linearGradient>
        <filter id="bkDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.25"/>
        </filter>
        <filter id="bkInner" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="3" stdDeviation="2" flood-color="#0F172A" flood-opacity="0.4"/>
        </filter>
      </defs>
      <rect x="15" y="45" width="90" height="50" fill="#334155" filter="url(#bkInner)" />
      <path d="M10,95 L110,95 L115,105 L5,105 Z" fill="url(#bkMarble)" filter="url(#bkDrop)" />
      <path d="M15,85 L105,85 L110,95 L10,95 Z" fill="url(#bkMarble)" filter="url(#bkDrop)" />
      <rect x="22" y="45" width="12" height="40" fill="url(#bkMarble)" filter="url(#bkDrop)" />
      <rect x="44" y="45" width="12" height="40" fill="url(#bkMarble)" filter="url(#bkDrop)" />
      <rect x="66" y="45" width="12" height="40" fill="url(#bkMarble)" filter="url(#bkDrop)" />
      <rect x="88" y="45" width="12" height="40" fill="url(#bkMarble)" filter="url(#bkDrop)" />
      <line x1="26" y1="45" x2="26" y2="85" stroke="#CBD5E1" stroke-width="2" />
      <line x1="30" y1="45" x2="30" y2="85" stroke="#CBD5E1" stroke-width="2" />
      <line x1="48" y1="45" x2="48" y2="85" stroke="#CBD5E1" stroke-width="2" />
      <line x1="52" y1="45" x2="52" y2="85" stroke="#CBD5E1" stroke-width="2" />
      <line x1="70" y1="45" x2="70" y2="85" stroke="#CBD5E1" stroke-width="2" />
      <line x1="74" y1="45" x2="74" y2="85" stroke="#CBD5E1" stroke-width="2" />
      <line x1="92" y1="45" x2="92" y2="85" stroke="#CBD5E1" stroke-width="2" />
      <line x1="96" y1="45" x2="96" y2="85" stroke="#CBD5E1" stroke-width="2" />
      <polygon points="60,15 10,45 110,45" fill="url(#bkMarble)" filter="url(#bkDrop)" />
      <polygon points="60,25 25,40 95,40" fill="#334155" filter="url(#bkInner)" />
      <circle cx="60" cy="35" r="5" fill="url(#bkGold)" filter="url(#bkDrop)" />
      <path d="M12,43 L60,17 L108,43" stroke="#FFFFFF" stroke-width="2" fill="none" opacity="0.7" />
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

  // 112. SMARTWATCH (Wearables, Health, Fitness, Notifications)
  smartwatch: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="swStrap" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0284C7" />
          <stop offset="100%" stop-color="#082F49" />
        </linearGradient>
        <linearGradient id="swBezel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E2E8F0" />
          <stop offset="50%" stop-color="#94A3B8" />
          <stop offset="100%" stop-color="#334155" />
        </linearGradient>
        <linearGradient id="swScreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0F172A" />
          <stop offset="100%" stop-color="#000000" />
        </linearGradient>
        <filter id="swDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.35"/>
        </filter>
        <filter id="swNeonRing" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#10B981" flood-opacity="0.8"/>
        </filter>
      </defs>
      <path d="M45,35 L45,10 C45,5 50,5 50,5 L70,5 C70,5 75,5 75,10 L75,35 Z" fill="url(#swStrap)" filter="url(#swDrop)" />
      <path d="M45,85 L45,110 C45,115 50,115 50,115 L70,115 C70,115 75,115 75,110 L75,85 Z" fill="url(#swStrap)" filter="url(#swDrop)" />
      <circle cx="60" cy="95" r="2" fill="#0F172A" />
      <circle cx="60" cy="105" r="2" fill="#0F172A" />
      <rect x="30" y="30" width="60" height="60" rx="16" fill="url(#swBezel)" filter="url(#swDrop)" />
      <rect x="90" y="50" width="4" height="12" rx="2" fill="#94A3B8" />
      <rect x="90" y="68" width="3" height="8" rx="1.5" fill="#475569" />
      <rect x="34" y="34" width="52" height="52" rx="12" fill="url(#swScreen)" />
      <circle cx="60" cy="60" r="18" fill="none" stroke="#1E293B" stroke-width="4" />
      <circle cx="60" cy="60" r="18" fill="none" stroke="#EF4444" stroke-width="4" stroke-dasharray="100 13" stroke-linecap="round" transform="rotate(-90 60 60)" />
      
      <circle cx="60" cy="60" r="12" fill="none" stroke="#1E293B" stroke-width="4" />
      <circle cx="60" cy="60" r="12" fill="none" stroke="#10B981" stroke-width="4" stroke-dasharray="60 15" stroke-linecap="round" transform="rotate(-40 60 60)" filter="url(#swNeonRing)" />
      
      <circle cx="60" cy="60" r="6" fill="none" stroke="#1E293B" stroke-width="4" />
      <circle cx="60" cy="60" r="6" fill="none" stroke="#38BDF8" stroke-width="4" stroke-dasharray="30 7" stroke-linecap="round" transform="rotate(20 60 60)" />
      <path d="M34,46 C45,35 60,34 75,34 L86,34 L86,40 C70,40 50,45 34,55 Z" fill="#FFFFFF" opacity="0.1" />
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

  });

  // Automatically construct formatted array
  const formattedLuxeIcons = Object.keys(window.AxiconsLuxe).map((key, index) => {
    
    let category = "general";
    const lowerKey = key.toLowerCase();
    
    // Categorization logic
    if (lowerKey.includes('brain') || lowerKey.includes('logic') || lowerKey.includes('system') || lowerKey.includes('code') || lowerKey.includes('server') || lowerKey.includes('keyboard')) category = "development";
    else if (lowerKey.includes('design') || lowerKey.includes('palette') || lowerKey.includes('paint') || lowerKey.includes('brush') || lowerKey.includes('typography')) category = "design";
    else if (lowerKey.includes('rocket') || lowerKey.includes('launch') || lowerKey.includes('spaceship')) category = "business";
    else if (lowerKey.includes('crane') || lowerKey.includes('build') || lowerKey.includes('structure')) category = "infrastructure";
    else if (lowerKey.includes('home') || lowerKey.includes('house') || lowerKey.includes('dashboard') || lowerKey.includes('folder') || lowerKey.includes('settings')) category = "ui";
    else if (lowerKey.includes('fire') || lowerKey.includes('flame') || lowerKey.includes('hot')) category = "social";
    else if (lowerKey.includes('shield') || lowerKey.includes('security') || lowerKey.includes('lock') || lowerKey.includes('vault') || lowerKey.includes('bank') || lowerKey.includes('gear')) category = "security";
    else if (lowerKey.includes('finance') || lowerKey.includes('wealth') || lowerKey.includes('coin') || lowerKey.includes('money') || lowerKey.includes('piggy')) category = "finance";
    else if (lowerKey.includes('media') || lowerKey.includes('video') || lowerKey.includes('music') || lowerKey.includes('gamepad') || lowerKey.includes('vr') || lowerKey.includes('smartwatch') || lowerKey.includes('laptop') || lowerKey.includes('mouse') || lowerKey.includes('smartphone')) category = "media";
    else if (lowerKey.includes('chart') || lowerKey.includes('candlestick') || lowerKey.includes('analytics') || lowerKey.includes('graph') || lowerKey.includes('node')) category = "data";
    else if (lowerKey.includes('verified') || lowerKey.includes('star') || lowerKey.includes('achievement')) category = "entertainment";
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
