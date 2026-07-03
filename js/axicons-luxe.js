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
