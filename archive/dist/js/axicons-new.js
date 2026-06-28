/**
 * Axicons - Ultra-Thin Hollow Outlined v2.4
 * Thin variants: 0.5px outlined/hollow icons (bubble characters)
 * 1,608 icons (536 concepts × 3 styles)
 *
 * Changes:
 * - Thin variants: 0.5px strokes (ultra-thin)
 * - All fills removed (pure outline/hollow)
 * - Wrapped in <g fill="none" stroke-width="0.5">
 * - Bubble/hollow appearance (empty insides)
 */



const axicons = [

// 01. Activity
    { id: 1, name: "Activity", category: "health", svgContent: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>' },
    { id: 2, name: "ActivityThin", category: "health", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></g>' },
    { id: 3, name: "ActivityInverted", category: "health", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></g>' },

// 02. Activity-Color
    { id: 4, name: "Activity-Color", category: "ui", svgContent: '<defs><linearGradient id="actGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#ff1744"/><stop offset="100%" stop-color="#d50000"/></linearGradient></defs><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" fill="none" stroke="url(#actGrad)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>' },
    { id: 5, name: "Activity-Thin-Color", category: "ui", svgContent: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12" fill="none" stroke="#ff1744" stroke-width="0.75"/>' },
    { id: 6, name: "Activity-Inverted-Color", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#d50000" rx="4"/><polyline points="20 12 16 12 13 19 9 5 7 12 4 12" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' },

// 03. Adjustments
    { id: 7, name: "Adjustments", category: "ui", svgContent: '<polygon points="4 6 4 2 8 6 8 10 4 6Z"/><polygon points="10 6 10 2 14 6 14 10 10 6Z"/><polygon points="16 6 16 2 20 6 20 10 16 6Z"/><line x1="4" y1="14" x2="20" y2="14"/>' },
    { id: 8, name: "AdjustmentsThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><polygon points="4 6 4 2 8 6 8 10 4 6Z"/><polygon points="10 6 10 2 14 6 14 10 10 6Z"/><polygon points="16 6 16 2 20 6 20 10 16 6Z"/><line x1="4" y1="14" x2="20" y2="14"/></g>' },
    { id: 9, name: "AdjustmentsInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><polygon points="4 6 4 2 8 6 8 10 4 6Z"/><polygon points="10 6 10 2 14 6 14 10 10 6Z"/><polygon points="16 6 16 2 20 6 20 10 16 6Z"/><line stroke="var(--ax-bg-inverse, white)" x1="4" y1="14" x2="20" y2="14"/>' },

// 04. AI
    { id: 10, name: "AI", category: "ai", svgContent: '<circle cx="8" cy="8" r="2" fill="currentColor" opacity="0.9"/><circle cx="16" cy="8" r="2" fill="currentColor" opacity="0.9"/><path d="M12 2v8M8 12c0 2.21 1.79 4 4 4s4-1.79 4-4M6 20h12M8 20v2M16 20v2"/>' },
    { id: 11, name: "AIThin", category: "ai", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="8" cy="8" r="2"/><circle cx="16" cy="8" r="2"/><path d="M12 2v8M8 12c0 2.21 1.79 4 4 4s4-1.79 4-4M6 20h12M8 20v2M16 20v2"/></g>' },
    { id: 12, name: "AIInverted", category: "ai", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="8" cy="8" r="2" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="16" cy="8" r="2" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><path stroke="var(--ax-bg-inverse, white)" d="M12 2v8M8 12c0 2.21 1.79 4 4 4s4-1.79 4-4M6 20h12M8 20v2M16 20v2"/>' },

// 05. Airplane-Color
    { id: 13, name: "Airplane-Color", category: "ai", svgContent: '<defs><linearGradient id="airGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#eceff1"/><stop offset="100%" stop-color="#b0bec5"/></linearGradient></defs><g><path d="M20 12l-10-6v4l-6-2v2l6 2v4l-6 2v2l6-2z" fill="url(#airGrad)" stroke="#546e7a" stroke-width="1.5"/></g>' },
    { id: 14, name: "Airplane-Thin-Color", category: "ai", svgContent: '<path d="M21 12l-11-7v3l-5-1v1l5 1v3l-5 1v1l5-1z" fill="none" stroke="#546e7a" stroke-width="0.75"/>' },
    { id: 15, name: "Airplane-Inverted-Color", category: "ai", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#546e7a" rx="4"/><path d="M21 12l-11-7v3l-5-1v1l5 1v3l-5 1v1l5-1z" fill="#ffffff"/>' },
    { id: 16, name: "Placeholder-Fill-1", category: "general", svgContent: '<rect width="24" height="24" fill="#eeeeee"/>' },

// 06. AirPods
    { id: 17, name: "AirPods", category: "media", svgContent: '<circle cx="7" cy="11" r="2"/><circle cx="17" cy="11" r="2"/><path d="M7 8V4a1 1 0 0 1 2 0v4M17 8V4a1 1 0 0 0-2 0v4M5 16c0 2-1 4-1 6a3 3 0 0 0 3 3M19 16c0 2 1 4 1 6a3 3 0 0 1-3 3"/>' },
    { id: 18, name: "AirPodsThin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="7" cy="11" r="2"/><circle cx="17" cy="11" r="2"/><path d="M7 8V4a1 1 0 0 1 2 0v4M17 8V4a1 1 0 0 0-2 0v4M5 16c0 2-1 4-1 6a3 3 0 0 0 3 3M19 16c0 2 1 4 1 6a3 3 0 0 1-3 3"/></g>' },
    { id: 19, name: "AirPodsInverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="7" cy="11" r="2"/><circle fill="var(--ax-bg-inverse, white)" cx="17" cy="11" r="2"/><path stroke="var(--ax-bg-inverse, white)" d="M7 8V4a1 1 0 0 1 2 0v4M17 8V4a1 1 0 0 0-2 0v4M5 16c0 2-1 4-1 6a3 3 0 0 0 3 3M19 16c0 2 1 4 1 6a3 3 0 0 1-3 3"/>' },

// 07. Alert-Circle
    { id: 20, name: "Alert-Circle", category: "ui", svgContent: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>' },
    { id: 21, name: "Alert-CircleThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></g>' },
    { id: 22, name: "Alert-CircleInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></g>' },

// 08. Alert-Octagon-Color
    { id: 23, name: "Alert-Octagon-Color", category: "ui", svgContent: '<defs><linearGradient id="octRed" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ef5350"/><stop offset="100%" stop-color="#b71c1c"/></linearGradient></defs><g><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" fill="url(#octRed)"/><line x1="12" y1="7" x2="12" y2="13" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/><circle cx="12" cy="17" r="1.25" fill="#ffffff"/></g>' },
    { id: 24, name: "Alert-Octagon-Thin-Color", category: "ui", svgContent: '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86" fill="none" stroke="#b71c1c" stroke-width="0.75"/>' },
    { id: 25, name: "Alert-Octagon-Inverted-Color", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#b71c1c" rx="4"/><polygon points="8 4 16 4 20 8 20 16 16 20 8 20 4 16 4 8" fill="#ffffff"/><circle cx="12" cy="15" r="1.5" fill="#b71c1c"/>' },

// 09. Alert-Triangle
    { id: 26, name: "Alert-Triangle", category: "ui", svgContent: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>' },
    { id: 27, name: "Alert-TriangleThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></g>' },
    { id: 28, name: "Alert-TriangleInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></g>' },

// 10. AlertBell
    { id: 29, name: "AlertBell", category: "ui", svgContent: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><circle cx="19" cy="4" r="2" fill="currentColor" opacity="0.9"/>' },
    { id: 30, name: "AlertBellThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><circle cx="19" cy="4" r="2"/></g>' },
    { id: 31, name: "AlertBellInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><circle fill="var(--ax-bg-inverse, white)" cx="19" cy="4" r="2" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 11. AlertCircle
    { id: 32, name: "AlertCircle", category: "ui", svgContent: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="16" r="0.5" fill="currentColor" opacity="0.9"/>' },
    { id: 33, name: "AlertCircleThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="16" r="0.5"/></g>' },
    { id: 34, name: "AlertCircleInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="10"/><line stroke="var(--ax-bg-inverse, white)" x1="12" y1="8" x2="12" y2="12"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="16" r="0.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 12. AlertCircleSolid
    { id: 35, name: "AlertCircleSolid", category: "ui", svgContent: '<circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.9"/><line x1="12" y1="8" x2="12" y2="12" stroke="white"/><circle cx="12" cy="16" r="0.8" fill="white"/>' },
    { id: 36, name: "AlertCircleSolidThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12" stroke="white"/><circle cx="12" cy="16" r="0.8"/></g>' },
    { id: 37, name: "AlertCircleSolidInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="10" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><line stroke="var(--ax-bg-inverse, white)" x1="12" y1="8" x2="12" y2="12" stroke="var(--ax-bg-inverse, white)" /><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="16" r="0.8" fill="var(--ax-bg-inverse, white)"/>' },

// 13. AlertDot
    { id: 38, name: "AlertDot", category: "ui", svgContent: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.9"/>' },
    { id: 39, name: "AlertDotThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></g>' },
    { id: 40, name: "AlertDotInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="10"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="4" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 14. Algorithm
    { id: 41, name: "Algorithm", category: "development", svgContent: '<path d="M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"/><path d="M9 8v8M15 8v8M9 12h6"/>' },
    { id: 42, name: "AlgorithmThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><path d="M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"/><path d="M9 8v8M15 8v8M9 12h6"/></g>' },
    { id: 43, name: "AlgorithmInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"/><path stroke="var(--ax-bg-inverse, white)" d="M9 8v8M15 8v8M9 12h6"/>' },

// 15. Amazon
    { id: 44, name: "Amazon", category: "brands", svgContent: '<path d="M2 18c0 1 .5 2 1.5 2h17c1 0 1.5-1 1.5-2V8h-20v10z"/><path d="M22 8H2v-2c0-1 .5-2 1.5-2h17c1 0 1.5 1 1.5 2v2z"/>' },
    { id: 45, name: "AmazonThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><path d="M2 18c0 1 .5 2 1.5 2h17c1 0 1.5-1 1.5-2V8h-20v10z"/><path d="M22 8H2v-2c0-1 .5-2 1.5-2h17c1 0 1.5 1 1.5 2v2z"/></g>' },
    { id: 46, name: "AmazonInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M2 18c0 1 .5 2 1.5 2h17c1 0 1.5-1 1.5-2V8h-20v10z"/><path stroke="var(--ax-bg-inverse, white)" d="M22 8H2v-2c0-1 .5-2 1.5-2h17c1 0 1.5 1 1.5 2v2z"/>' },

// 16. Amazon-Color
    { id: 47, name: "Amazon-Color", category: "brands", svgContent: '<defs><linearGradient id="amzBox" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#37474f"/><stop offset="100%" stop-color="#212121"/></linearGradient></defs><g><path d="M2 18c0 1 .5 2 1.5 2h17c1 0 1.5-1 1.5-2V8h-20v10z" fill="url(#amzBox)"/><path d="M22 8H2v-2c0-1 .5-2 1.5-2h17c1 0 1.5 1 1.5 2v2z" fill="#455a64"/><path d="M6 14s2 2 6 2 6-2 6-2" fill="none" stroke="#ff9800" stroke-width="2" stroke-linecap="round"/><polygon points="18 14 19 12 16 13" fill="#ff9800"/></g>' },

// 17. Ambulance-Color
    { id: 48, name: "Ambulance-Color", category: "general", svgContent: '<defs><linearGradient id="ambGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#cfd8dc"/></linearGradient></defs><g><rect x="2" y="10" width="16" height="8" rx="2" fill="url(#ambGrad)" stroke="#455a64" stroke-width="1.5"/><rect x="8" y="12" width="4" height="4" fill="#ef5350"/></g>' },
    { id: 49, name: "Ambulance-Thin-Color", category: "general", svgContent: '<rect x="3" y="11" width="14" height="6" rx="1" fill="none" stroke="#455a64" stroke-width="0.75"/>' },
    { id: 50, name: "Ambulance-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#455a64" rx="4"/><rect x="3" y="11" width="14" height="6" rx="1" fill="#ffffff"/>' },

// 18. AmEx
    { id: 51, name: "AmEx", category: "brands", svgContent: '<rect x="2" y="4" width="20" height="16" rx="2"/><text x="12" y="14" font-size="8">AMEX</text>' },
    { id: 52, name: "AmExThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><rect x="2" y="4" width="20" height="16" rx="2"/><text x="12" y="14" font-size="8">AMEX</text></g>' },
    { id: 53, name: "AmExInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="2" y="4" width="20" height="16" rx="2"/><text x="12" y="14" font-size="8">AMEX</text>' },

// 19. Anchor
    { id: 54, name: "Anchor", category: "objects", svgContent: '<circle cx="12" cy="5" r="3"/><line x1="12" y1="8" x2="12" y2="21"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>' },
    { id: 55, name: "AnchorThin", category: "objects", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="5" r="3"/><line x1="12" y1="8" x2="12" y2="21"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></g>' },
    { id: 56, name: "AnchorInverted", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><circle cx="12" cy="5" r="3"/><line x1="12" y1="8" x2="12" y2="21"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></g>' },

// 20. Anchor-Chain-Color
    { id: 57, name: "Anchor-Chain-Color", category: "ai", svgContent: '<defs><linearGradient id="chnGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#9e9e9e"/><stop offset="100%" stop-color="#616161"/></linearGradient></defs><g><path d="M12 2v6m-4 4a4 4 0 1 0 8 0 4 4 0 1 0-8 0z" fill="none" stroke="#616161" stroke-width="3" stroke-linecap="round"/><circle cx="12" cy="2" r="2" fill="#616161"/></g>' },
    { id: 58, name: "Anchor-Chain-Thin-Color", category: "ai", svgContent: '<path d="M12 3v5m-3 4a3 3 0 1 0 6 0 3 3 0 1 0-6 0z" fill="none" stroke="#616161" stroke-width="0.75"/>' },
    { id: 59, name: "Anchor-Chain-Inverted-Color", category: "ai", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#616161" rx="4"/><path d="M12 3v5m-3 4a3 3 0 1 0 6 0 3 3 0 1 0-6 0z" fill="none" stroke="#ffffff" stroke-width="1.5"/>' },
    { id: 60, name: "Placeholder-Fill-2", category: "general", svgContent: '<rect width="24" height="24" fill="#eeeeee"/>' },

// 21. Anchor-Color
    { id: 61, name: "Anchor-Color", category: "objects", svgContent: '<defs><linearGradient id="ancGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#90a4ae"/><stop offset="100%" stop-color="#455a64"/></linearGradient></defs><g fill="none" stroke="url(#ancGrad)" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="18"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/><circle cx="12" cy="5" r="2.5" stroke-width="2"/></g>' },
    { id: 62, name: "Anchor-Thin-Color", category: "objects", svgContent: '<circle cx="12" cy="5" r="2" fill="none" stroke="#455a64" stroke-width="0.5"/><path d="M12 7v11M5 12H2a10 10 0 0 0 20 0h-3" fill="none" stroke="#455a64" stroke-width="0.75"/>' },
    { id: 63, name: "Anchor-Inverted-Color", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#455a64" rx="4"/><g fill="none" stroke="#ffffff" stroke-width="2"><line x1="12" y1="6" x2="12" y2="17"/><path d="M6 11H3a9 9 0 0 0 18 0h-3"/><circle cx="12" cy="4" r="1.5"/></g>' },

// 22. Anonymous
    { id: 64, name: "Anonymous", category: "ui", svgContent: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>' },
    { id: 65, name: "AnonymousThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></g>' },
    { id: 66, name: "AnonymousInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>' },

// 23. Anthropic
    { id: 67, name: "Anthropic", category: "brands", svgContent: '<path d="M12 2L4 6v10l8 4 8-4V6l-8-4zm0 3l5 2.5v7L12 15l-5-2.5v-7L12 5z"/>' },
    { id: 68, name: "AnthropicThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 2L4 6v10l8 4 8-4V6l-8-4zm0 3l5 2.5v7L12 15l-5-2.5v-7L12 5z"/></g>' },
    { id: 69, name: "AnthropicInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M12 2L4 6v10l8 4 8-4V6l-8-4zm0 3l5 2.5v7L12 15l-5-2.5v-7L12 5z"/>' },

// 24. Apple
    { id: 70, name: "Apple", category: "brands", svgContent: '<path d="M12 2c1 0 2 .5 2 1v2c0 1-.5 1-1 1s-1-.5-1-1V3c0-.5 0-1 1-1z"/><path d="M6 5C4 5 2 7 2 9v8c0 2 2 4 4 4h12c2 0 4-2 4-4V9c0-2-2-4-4-4H6zm6 2c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2z"/>' },
    { id: 71, name: "AppleThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 2c1 0 2 .5 2 1v2c0 1-.5 1-1 1s-1-.5-1-1V3c0-.5 0-1 1-1z"/><path d="M6 5C4 5 2 7 2 9v8c0 2 2 4 4 4h12c2 0 4-2 4-4V9c0-2-2-4-4-4H6zm6 2c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2z"/></g>' },
    { id: 72, name: "AppleInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M12 2c1 0 2 .5 2 1v2c0 1-.5 1-1 1s-1-.5-1-1V3c0-.5 0-1 1-1z"/><path stroke="var(--ax-bg-inverse, white)" d="M6 5C4 5 2 7 2 9v8c0 2 2 4 4 4h12c2 0 4-2 4-4V9c0-2-2-4-4-4H6zm6 2c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2z"/>' },

// 25. Apple-Color
    { id: 73, name: "Apple-Color", category: "brands", svgContent: '<defs><linearGradient id="appleGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ff5252"/><stop offset="100%" stop-color="#b71c1c"/></linearGradient></defs><g><path d="M12 2c1 0 2 .5 2 1v2c0 1-.5 1-1 1s-1-.5-1-1V3c0-.5 0-1 1-1z" fill="#4caf50"/><path d="M6 5C4 5 2 7 2 9v8c0 2 2 4 4 4h12c2 0 4-2 4-4V9c0-2-2-4-4-4z" fill="url(#appleGrad)"/><path d="M18 5c1.5 0 3 1.5 3 3.5V11c0-3-1.5-6-3-6z" fill="#ffffff" opacity="0.25"/></g>' },

// 26. Archive
    { id: 74, name: "Archive", category: "development", svgContent: '<polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/>' },
    { id: 75, name: "ArchiveThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></g>' },
    { id: 76, name: "ArchiveInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></g>' },

// 27. Arm
    { id: 77, name: "Arm", category: "iot", svgContent: '<path d="M4 8h6v8H4zM10 8h8v2M18 8c2 0 2 2 2 4m-2-4c-2 0-2 2-2 4"/><line x1="14" y1="8" x2="14" y2="16"/>' },
    { id: 78, name: "ArmThin", category: "iot", svgContent: '<g fill="none" stroke-width="0.5"><path d="M4 8h6v8H4zM10 8h8v2M18 8c2 0 2 2 2 4m-2-4c-2 0-2 2-2 4"/><line x1="14" y1="8" x2="14" y2="16"/></g>' },
    { id: 79, name: "ArmInverted", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M4 8h6v8H4zM10 8h8v2M18 8c2 0 2 2 2 4m-2-4c-2 0-2 2-2 4"/><line stroke="var(--ax-bg-inverse, white)" x1="14" y1="8" x2="14" y2="16"/>' },

// 28. Armchair-Color
    { id: 80, name: "Armchair-Color", category: "ai", svgContent: '<defs><linearGradient id="armGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4db6ac"/><stop offset="100%" stop-color="#004d40"/></linearGradient></defs><g><path d="M4 11V7a3 3 0 0 1 6 0v2h4V7a3 3 0 0 1 6 0v4" fill="none" stroke="url(#armGrad)" stroke-width="2.5"/><rect x="2" y="11" width="20" height="8" rx="2" fill="url(#armGrad)"/><line x1="6" y1="19" x2="6" y2="22" stroke="#004d40" stroke-width="2.5"/><line x1="18" y1="19" x2="18" y2="22" stroke="#004d40" stroke-width="2.5"/></g>' },
    { id: 81, name: "Armchair-Thin-Color", category: "ai", svgContent: '<rect x="3" y="12" width="18" height="7" rx="1" fill="none" stroke="#004d40" stroke-width="0.75"/>' },
    { id: 82, name: "Armchair-Inverted-Color", category: "ai", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#004d40" rx="4"/><path d="M4 12V8h16v4H4z" fill="#ffffff"/><rect x="3" y="12" width="18" height="7" rx="1" fill="#ffffff"/>' },

// 29. Arrow-Down
    { id: 83, name: "Arrow-Down", category: "ui", svgContent: '<line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>' },
    { id: 84, name: "Arrow-DownThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></g>' },
    { id: 85, name: "Arrow-DownInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></g>' },

// 30. Arrow-Left
    { id: 86, name: "Arrow-Left", category: "ui", svgContent: '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 12"/>' },
    { id: 87, name: "Arrow-LeftThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 12"/></g>' },
    { id: 88, name: "Arrow-LeftInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 12"/></g>' },

// 31. Arrow-Right
    { id: 89, name: "Arrow-Right", category: "ui", svgContent: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>' },
    { id: 90, name: "Arrow-RightThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></g>' },
    { id: 91, name: "Arrow-RightInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></g>' },

// 32. Arrow-Up
    { id: 92, name: "Arrow-Up", category: "ui", svgContent: '<line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>' },
    { id: 93, name: "Arrow-UpThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></g>' },
    { id: 94, name: "Arrow-UpInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></g>' },

// 33. ArrowDownSmall
    { id: 95, name: "ArrowDownSmall", category: "ui", svgContent: '<polyline points="6 10 12 16 18 10"/>' },
    { id: 96, name: "ArrowDownSmallThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="6 10 12 16 18 10"/></g>' },
    { id: 97, name: "ArrowDownSmallInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><polyline points="6 10 12 16 18 10"/>' },

// 34. ArrowLeftSmall
    { id: 98, name: "ArrowLeftSmall", category: "ui", svgContent: '<polyline points="14 6 8 12 14 18"/>' },
    { id: 99, name: "ArrowLeftSmallThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="14 6 8 12 14 18"/></g>' },
    { id: 100, name: "ArrowLeftSmallInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><polyline points="14 6 8 12 14 18"/>' },

// 35. ArrowRightSmall
    { id: 101, name: "ArrowRightSmall", category: "ui", svgContent: '<polyline points="10 6 16 12 10 18"/>' },
    { id: 102, name: "ArrowRightSmallThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="10 6 16 12 10 18"/></g>' },
    { id: 103, name: "ArrowRightSmallInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><polyline points="10 6 16 12 10 18"/>' },

// 36. ArrowUpSmall
    { id: 104, name: "ArrowUpSmall", category: "ui", svgContent: '<polyline points="18 14 12 8 6 14"/>' },
    { id: 105, name: "ArrowUpSmallThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="18 14 12 8 6 14"/></g>' },
    { id: 106, name: "ArrowUpSmallInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><polyline points="18 14 12 8 6 14"/>' },

// 37. Aspect-Ratio-Color
    { id: 107, name: "Aspect-Ratio-Color", category: "general", svgContent: '<defs><linearGradient id="arGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#90caf9"/><stop offset="100%" stop-color="#1565c0"/></linearGradient></defs><g><rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="url(#arGrad)" stroke-width="2"/><path d="M7 8H5v2M17 16h2v-2M5 14v2h2M19 10V8h-2" fill="none" stroke="#1565c0" stroke-width="1.5"/></g>' },
    { id: 108, name: "Aspect-Ratio-Thin-Color", category: "general", svgContent: '<rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="#1565c0" stroke-width="0.75"/>' },
    { id: 109, name: "Aspect-Ratio-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#1565c0" rx="4"/><rect x="4" y="5" width="16" height="14" rx="1" fill="#ffffff"/><path d="M7 8H5v2M17 16h2v-2" fill="none" stroke="#1565c0" stroke-width="1.5"/>' },

// 38. AtSymbol
    { id: 110, name: "AtSymbol", category: "ui", svgContent: '<circle cx="12" cy="12" r="9"/><path d="M15 11a3 3 0 1 0-3 3m0 0v2.5"/>' },
    { id: 111, name: "AtSymbolThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="9"/><path d="M15 11a3 3 0 1 0-3 3m0 0v2.5"/></g>' },
    { id: 112, name: "AtSymbolInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="9"/><path stroke="var(--ax-bg-inverse, white)" d="M15 11a3 3 0 1 0-3 3m0 0v2.5"/>' },

// 39. Automation
    { id: 113, name: "Automation", category: "ai", svgContent: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M15.5 9.5L12 13l-3.5-3.5"/>' },
    { id: 114, name: "AutomationThin", category: "ai", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M15.5 9.5L12 13l-3.5-3.5"/></g>' },
    { id: 115, name: "AutomationInverted", category: "ai", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path stroke="var(--ax-bg-inverse, white)" d="M15.5 9.5L12 13l-3.5-3.5"/>' },

// 40. Avatar
    { id: 116, name: "Avatar", category: "ui", svgContent: '<circle cx="12" cy="8" r="4"/><path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6v1H6v-1z"/>' },
    { id: 117, name: "AvatarThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="8" r="4"/><path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6v1H6v-1z"/></g>' },
    { id: 118, name: "AvatarInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="8" r="4"/><path stroke="var(--ax-bg-inverse, white)" d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6v1H6v-1z"/>' },

// 41. AvatarFemale
    { id: 119, name: "AvatarFemale", category: "ui", svgContent: '<circle cx="12" cy="6" r="3.5"/><path d="M6 20c0-2.21 2.91-4 6-4s6 1.79 6 4v2M12 16l-3-2 6 0-3 2z" opacity="0.7"/>' },
    { id: 120, name: "AvatarFemaleThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="6" r="3.5"/><path d="M6 20c0-2.21 2.91-4 6-4s6 1.79 6 4v2M12 16l-3-2 6 0-3 2z"/></g>' },
    { id: 121, name: "AvatarFemaleInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="6" r="3.5"/><path stroke="var(--ax-bg-inverse, white)" d="M6 20c0-2.21 2.91-4 6-4s6 1.79 6 4v2M12 16l-3-2 6 0-3 2z" opacity="0.7"/>' },

// 42. AvatarMale
    { id: 122, name: "AvatarMale", category: "ui", svgContent: '<circle cx="12" cy="7" r="3.5"/><path d="M6 20c0-2.21 2.91-4 6-4s6 1.79 6 4v2H6v-2z"/>' },
    { id: 123, name: "AvatarMaleThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="7" r="3.5"/><path d="M6 20c0-2.21 2.91-4 6-4s6 1.79 6 4v2H6v-2z"/></g>' },
    { id: 124, name: "AvatarMaleInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="7" r="3.5"/><path stroke="var(--ax-bg-inverse, white)" d="M6 20c0-2.21 2.91-4 6-4s6 1.79 6 4v2H6v-2z"/>' },

// 43. Award
    { id: 125, name: "Award", category: "media", svgContent: '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.89"/>' },
    { id: 126, name: "AwardThin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.89"/></g>' },
    { id: 127, name: "AwardInverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.89"/></g>' },

// 44. Award-Color
    { id: 128, name: "Award-Color", category: "ui", svgContent: '<defs><linearGradient id="awdGold" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fff176"/><stop offset="100%" stop-color="#f57f17"/></linearGradient></defs><g><circle cx="12" cy="8" r="7" fill="url(#awdGold)"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" fill="none" stroke="#f57f17" stroke-width="2" stroke-linejoin="round"/><circle cx="12" cy="8" r="4" fill="none" stroke="#ffffff" stroke-width="1.5"/></g>' },
    { id: 129, name: "Award-Thin-Color", category: "ui", svgContent: '<circle cx="12" cy="8" r="6" fill="none" stroke="#f57f17" stroke-width="0.75"/>' },
    { id: 130, name: "Award-Inverted-Color", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#f57f17" rx="4"/><circle cx="12" cy="8" r="5" fill="#ffffff"/><polyline points="9 13 7 21 12 18 17 21 15 13" fill="none" stroke="#ffffff" stroke-width="2"/>' },

// 45. AWS
    { id: 131, name: "AWS", category: "brands", svgContent: '<path d="M3 10l3-2 3 2v4l-3 2-3-2v-4zm8 0l3-2 3 2v4l-3 2-3-2v-4zm8 0l3-2 3 2v4l-3 2-3-2v-4z"/>' },
    { id: 132, name: "AWSThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><path d="M3 10l3-2 3 2v4l-3 2-3-2v-4zm8 0l3-2 3 2v4l-3 2-3-2v-4zm8 0l3-2 3 2v4l-3 2-3-2v-4z"/></g>' },
    { id: 133, name: "AWSInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M3 10l3-2 3 2v4l-3 2-3-2v-4zm8 0l3-2 3 2v4l-3 2-3-2v-4zm8 0l3-2 3 2v4l-3 2-3-2v-4z"/>' },

// 46. Azure
    { id: 134, name: "Azure", category: "brands", svgContent: '<path d="M3 3h6v6H3zM11 3h6v6h-6zM3 11h6v6H3zM11 11h6v6h-6z"/>' },
    { id: 135, name: "AzureThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><path d="M3 3h6v6H3zM11 3h6v6h-6zM3 11h6v6H3zM11 11h6v6h-6z"/></g>' },
    { id: 136, name: "AzureInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M3 3h6v6H3zM11 3h6v6h-6zM3 11h6v6H3zM11 11h6v6h-6z"/>' },

// 47. Backpack-Color
    { id: 137, name: "Backpack-Color", category: "general", svgContent: '<defs><linearGradient id="bckGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#8d6e63"/><stop offset="100%" stop-color="#5d4037"/></linearGradient></defs><g><rect x="6" y="8" width="12" height="12" rx="2" fill="url(#bckGrad)" stroke="#5d4037" stroke-width="1.5"/><rect x="8" y="4" width="8" height="4" rx="2" fill="#5d4037"/><rect x="9" y="11" width="6" height="4" fill="#4e342e"/></g>' },
    { id: 138, name: "Backpack-Thin-Color", category: "general", svgContent: '<rect x="7" y="9" width="10" height="10" rx="1" fill="none" stroke="#5d4037" stroke-width="0.75"/>' },
    { id: 139, name: "Backpack-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#5d4037" rx="4"/><rect x="7" y="9" width="10" height="10" rx="1" fill="#ffffff"/>' },

// 48. BackSolid
    { id: 140, name: "BackSolid", category: "ui", svgContent: '<polyline points="19 12 5 12 11 6" fill="currentColor" opacity="0.9" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"/>' },
    { id: 141, name: "BackSolidThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="19 12 5 12 11 6" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"/></g>' },
    { id: 142, name: "BackSolidInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><polyline points="19 12 5 12 11 6" fill="var(--ax-bg-inverse, white)" opacity="0.9" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"/>' },

// 49. Badge2
    { id: 143, name: "Badge2", category: "ui", svgContent: '<path d="M3.85 8.75a4.84 4.84 0 0 1 7.3-7.3l8.6 8.6a4.84 4.84 0 0 1-6.84 6.84l-8.6-8.6z" fill="currentColor" opacity="0.9" opacity="0.5"/><circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.9"/>' },
    { id: 144, name: "Badge2Thin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M3.85 8.75a4.84 4.84 0 0 1 7.3-7.3l8.6 8.6a4.84 4.84 0 0 1-6.84 6.84l-8.6-8.6z"/><circle cx="12" cy="12" r="3"/></g>' },
    { id: 145, name: "Badge2Inverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M3.85 8.75a4.84 4.84 0 0 1 7.3-7.3l8.6 8.6a4.84 4.84 0 0 1-6.84 6.84l-8.6-8.6z" fill="var(--ax-bg-inverse, white)" opacity="0.9" opacity="0.5"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="3" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 50. BadgeCheck
    { id: 146, name: "BadgeCheck", category: "ui", svgContent: '<path d="M3.85 8.75a4.84 4.84 0 0 1 7.45-4.3 4.84 4.84 0 0 1 7.45 4.3 4.83 4.83 0 0 1 .3 7.48 4.84 4.84 0 0 1-7.45 4.31 4.84 4.84 0 0 1-7.45-4.3 4.83 4.83 0 0 1-.3-7.49 4.84 4.84 0 0 1 .33-0.4"/><polyline points="10 13 13 16 18 9"/>' },
    { id: 147, name: "BadgeCheckThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M3.85 8.75a4.84 4.84 0 0 1 7.45-4.3 4.84 4.84 0 0 1 7.45 4.3 4.83 4.83 0 0 1 .3 7.48 4.84 4.84 0 0 1-7.45 4.31 4.84 4.84 0 0 1-7.45-4.3 4.83 4.83 0 0 1-.3-7.49 4.84 4.84 0 0 1 .33-0.4"/><polyline points="10 13 13 16 18 9"/></g>' },
    { id: 148, name: "BadgeCheckInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M3.85 8.75a4.84 4.84 0 0 1 7.45-4.3 4.84 4.84 0 0 1 7.45 4.3 4.83 4.83 0 0 1 .3 7.48 4.84 4.84 0 0 1-7.45 4.31 4.84 4.84 0 0 1-7.45-4.3 4.83 4.83 0 0 1-.3-7.49 4.84 4.84 0 0 1 .33-0.4" stroke="var(--ax-bg-inverse, white)" /><polyline points="10 13 13 16 18 9" stroke="var(--ax-bg-inverse, white)" />' },

// 51. BadgeX
    { id: 149, name: "BadgeX", category: "ui", svgContent: '<path d="M3.85 8.75a4.84 4.84 0 0 1 7.45-4.3 4.84 4.84 0 0 1 7.45 4.3 4.83 4.83 0 0 1 .3 7.48 4.84 4.84 0 0 1-7.45 4.31 4.84 4.84 0 0 1-7.45-4.3 4.83 4.83 0 0 1-.3-7.49"/><line x1="10" y1="9" x2="16" y2="15"/><line x1="16" y1="9" x2="10" y2="15"/>' },
    { id: 150, name: "BadgeXThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M3.85 8.75a4.84 4.84 0 0 1 7.45-4.3 4.84 4.84 0 0 1 7.45 4.3 4.83 4.83 0 0 1 .3 7.48 4.84 4.84 0 0 1-7.45 4.31 4.84 4.84 0 0 1-7.45-4.3 4.83 4.83 0 0 1-.3-7.49"/><line x1="10" y1="9" x2="16" y2="15"/><line x1="16" y1="9" x2="10" y2="15"/></g>' },
    { id: 151, name: "BadgeXInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M3.85 8.75a4.84 4.84 0 0 1 7.45-4.3 4.84 4.84 0 0 1 7.45 4.3 4.83 4.83 0 0 1 .3 7.48 4.84 4.84 0 0 1-7.45 4.31 4.84 4.84 0 0 1-7.45-4.3 4.83 4.83 0 0 1-.3-7.49" stroke="var(--ax-bg-inverse, white)" /><line stroke="var(--ax-bg-inverse, white)" x1="10" y1="9" x2="16" y2="15" /><line stroke="var(--ax-bg-inverse, white)" x1="16" y1="9" x2="10" y2="15" />' },

// 52. Balloon-Color
    { id: 152, name: "Balloon-Color", category: "general", svgContent: '<defs><linearGradient id="blnGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ef5350"/><stop offset="100%" stop-color="#b71c1c"/></linearGradient></defs><g><ellipse cx="12" cy="10" rx="6" ry="8" fill="url(#blnGrad)" stroke="#b71c1c" stroke-width="1.5"/><path d="M12 18v4M10 22h4" stroke="#ffeb3b" stroke-width="2" stroke-linecap="round"/><path d="M12 18l-1-2" stroke="#b71c1c" stroke-width="1.5"/></g>' },
    { id: 153, name: "Balloon-Thin-Color", category: "general", svgContent: '<ellipse cx="12" cy="10" rx="5" ry="7" fill="none" stroke="#b71c1c" stroke-width="0.75"/>' },
    { id: 154, name: "Balloon-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#b71c1c" rx="4"/><ellipse cx="12" cy="10" rx="5" ry="7" fill="#ffffff"/>' },

// 53. Banana
    { id: 155, name: "Banana", category: "food", svgContent: '<path d="M4 16c8.5 0 12-8.5 12-12"/><path d="M4 16c0 4 4 6 12 6s8-4 8-8c0-8-12-8-12-8-8 0-8 8-8 8z"/>' },
    { id: 156, name: "BananaThin", category: "food", svgContent: '<g fill="none" stroke-width="0.5"><path d="M4 16c8.5 0 12-8.5 12-12"/><path d="M4 16c0 4 4 6 12 6s8-4 8-8c0-8-12-8-12-8-8 0-8 8-8 8z"/></g>' },
    { id: 157, name: "BananaInverted", category: "food", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M4 16c8.5 0 12-8.5 12-12"/><path d="M4 16c0 4 4 6 12 6s8-4 8-8c0-8-12-8-12-8-8 0-8 8-8 8z"/></g>' },

// 54. Bandwidth
    { id: 158, name: "Bandwidth", category: "development", svgContent: '<path d="M2 12c0 1 2 3 10 3s10-2 10-3M2 12c0-1 2-3 10-3s10 2 10 3M12 3v18M6 9h12"/>' },
    { id: 159, name: "BandwidthThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><path d="M2 12c0 1 2 3 10 3s10-2 10-3M2 12c0-1 2-3 10-3s10 2 10 3M12 3v18M6 9h12"/></g>' },
    { id: 160, name: "BandwidthInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M2 12c0 1 2 3 10 3s10-2 10-3M2 12c0-1 2-3 10-3s10 2 10 3M12 3v18M6 9h12"/>' },

// 55. Bank
    { id: 161, name: "Bank", category: "finance", svgContent: '<path d="M3 21h18"/><path d="M6 21V10"/><path d="M18 21V10"/><path d="M2 10h20"/><path d="M12 2l10 8H2z"/>' },
    { id: 162, name: "BankThin", category: "finance", svgContent: '<g fill="none" stroke-width="0.5"><path d="M3 21h18"/><path d="M6 21V10"/><path d="M18 21V10"/><path d="M2 10h20"/><path d="M12 2l10 8H2z"/></g>' },
    { id: 163, name: "BankInverted", category: "finance", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M3 21h18"/><path d="M6 21V10"/><path d="M18 21V10"/><path d="M2 10h20"/><path d="M12 2l10 8H2z"/></g>' },

// 56. Barbecue
    { id: 164, name: "Barbecue", category: "food", svgContent: '<path d="M12 21v-4"/><path d="M16 21v-4"/><path d="M8 21v-4"/><path d="M3 13h18"/><path d="M2 13a10 10 0 0 0 20 0H2z"/><path d="M4 13a8 8 0 0 1 16 0"/>' },
    { id: 165, name: "BarbecueThin", category: "food", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 21v-4"/><path d="M16 21v-4"/><path d="M8 21v-4"/><path d="M3 13h18"/><path d="M2 13a10 10 0 0 0 20 0H2z"/><path d="M4 13a8 8 0 0 1 16 0"/></g>' },
    { id: 166, name: "BarbecueInverted", category: "food", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M12 21v-4"/><path d="M16 21v-4"/><path d="M8 21v-4"/><path d="M3 13h18"/><path d="M2 13a10 10 0 0 0 20 0H2z"/><path d="M4 13a8 8 0 0 1 16 0"/></g>' },

// 57. BarChart
    { id: 167, name: "BarChart", category: "general", svgContent: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>' },
    { id: 168, name: "BarChartThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></g>' },
    { id: 169, name: "BarChartInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></g>' },

// 58. Bars
    { id: 170, name: "Bars", category: "ui", svgContent: '<line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>' },
    { id: 171, name: "BarsThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></g>' },
    { id: 172, name: "BarsInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><line stroke="var(--ax-bg-inverse, white)" x1="4" y1="6" x2="20" y2="6"/><line stroke="var(--ax-bg-inverse, white)" x1="4" y1="12" x2="20" y2="12"/><line stroke="var(--ax-bg-inverse, white)" x1="4" y1="18" x2="20" y2="18"/>' },

// 59. Basket
    { id: 173, name: "Basket", category: "objects", svgContent: '<path d="M6 10h12v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z"/><path d="M6 10L2 6M18 10l4-4"/><path d="M6 10l6 6 6-6"/>' },
    { id: 174, name: "BasketThin", category: "objects", svgContent: '<g fill="none" stroke-width="0.5"><path d="M6 10h12v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z"/><path d="M6 10L2 6M18 10l4-4"/><path d="M6 10l6 6 6-6"/></g>' },
    { id: 175, name: "BasketInverted", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M6 10h12v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z"/><path d="M6 10L2 6M18 10l4-4"/><path d="M6 10l6 6 6-6"/></g>' },

// 60. Battery
    { id: 176, name: "Battery", category: "iot", svgContent: '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"/><line x1="23" y1="13" x2="23" y2="11"/>' },
    { id: 177, name: "BatteryThin", category: "iot", svgContent: '<g fill="none" stroke-width="0.5"><rect x="1" y="6" width="18" height="12" rx="2" ry="2"/><line x1="23" y1="13" x2="23" y2="11"/></g>' },
    { id: 178, name: "BatteryInverted", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><rect x="1" y="6" width="18" height="12" rx="2" ry="2"/><line x1="23" y1="13" x2="23" y2="11"/></g>' },

// 61. Battery-Charging
    { id: 179, name: "Battery-Charging", category: "iot", svgContent: '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"/><line x1="23" y1="13" x2="23" y2="11"/><polyline points="11 6 7 12 13 12 9 18"/>' },
    { id: 180, name: "Battery-ChargingThin", category: "iot", svgContent: '<g fill="none" stroke-width="0.5"><path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"/><line x1="23" y1="13" x2="23" y2="11"/><polyline points="11 6 7 12 13 12 9 18"/></g>' },
    { id: 181, name: "Battery-ChargingInverted", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"/><line x1="23" y1="13" x2="23" y2="11"/><polyline points="11 6 7 12 13 12 9 18"/></g>' },

// 62. Battery-Charging-Color
    { id: 182, name: "Battery-Charging-Color", category: "ui", svgContent: '<g><rect x="1" y="6" width="18" height="12" rx="2" fill="none" stroke="#78909c" stroke-width="2"/><polygon points="11 7 6 13 10 13 9 17 14 11 10 11" fill="#ffeb3b"/><line x1="22" y1="11" x2="22" y2="13" stroke="#78909c" stroke-width="2"/></g>' },
    { id: 183, name: "Battery-Charging-Thin-Color", category: "ui", svgContent: '<polygon points="11 7 6 13 10 13 9 17 14 11 10 11" fill="none" stroke="#ffeb3b" stroke-width="0.75"/>' },
    { id: 184, name: "Battery-Charging-Inverted-Color", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#ffb300" rx="4"/><rect x="3" y="7" width="15" height="10" rx="1" fill="#ffffff"/><polygon points="11 8 7 13 10 13 9 16 13 11 10 11" fill="#ffb300"/>' },

// 63. Battery-Color
    { id: 185, name: "Battery-Color", category: "ui", svgContent: '<defs><linearGradient id="batGreen" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#66bb6a"/><stop offset="100%" stop-color="#2e7d32"/></linearGradient></defs><g><rect x="1" y="6" width="18" height="12" rx="2" fill="none" stroke="#78909c" stroke-width="2"/><rect x="3" y="8" width="11" height="8" rx="1" fill="url(#batGreen)"/><line x1="22" y1="11" x2="22" y2="13" stroke="#78909c" stroke-width="2" stroke-linecap="round"/></g>' },
    { id: 186, name: "Battery-Thin-Color", category: "ui", svgContent: '<rect x="2" y="6" width="16" height="12" rx="2" fill="none" stroke="#2e7d32" stroke-width="0.75"/>' },
    { id: 187, name: "Battery-Inverted-Color", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#2e7d32" rx="4"/><rect x="3" y="7" width="15" height="10" rx="1" fill="#ffffff"/>' },

// 64. Beach-Ball-Color
    { id: 188, name: "Beach-Ball-Color", category: "general", svgContent: '<defs><linearGradient id="bchGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffcc80"/><stop offset="100%" stop-color="#ff9800"/></linearGradient></defs><g><circle cx="12" cy="12" r="10" fill="url(#bchGrad)" stroke="#e65100" stroke-width="1.5"/><path d="M12 2v10l8 5M12 12l-8 5" stroke="#ffffff" stroke-width="2"/></g>' },
    { id: 189, name: "Beach-Ball-Thin-Color", category: "general", svgContent: '<circle cx="12" cy="12" r="9" fill="none" stroke="#e65100" stroke-width="0.75"/>' },
    { id: 190, name: "Beach-Ball-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#e65100" rx="4"/><circle cx="12" cy="12" r="9" fill="#ffffff"/>' },

// 65. Beaker
    { id: 191, name: "Beaker", category: "general", svgContent: '<path d="M9 3h6v2H9V3zm0 2h6v12a3 3 0 0 1-6 0V5zm-1 13a4 4 0 0 0 8 0h1v2H7v-2z"/>' },
    { id: 192, name: "BeakerThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M9 3h6v2H9V3zm0 2h6v12a3 3 0 0 1-6 0V5zm-1 13a4 4 0 0 0 8 0h1v2H7v-2z"/></g>' },
    { id: 193, name: "BeakerInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M9 3h6v2H9V3zm0 2h6v12a3 3 0 0 1-6 0V5zm-1 13a4 4 0 0 0 8 0h1v2H7v-2z"/>' },

// 66. Beauty
    { id: 194, name: "Beauty", category: "general", svgContent: '<circle cx="12" cy="10" r="4"/><path d="M18 5l1-2M6 5L5 3M12 16s-2 2-4 2-4-2-4-2M20 15s-2 2-4 2-4-2-4-2"/>' },
    { id: 195, name: "BeautyThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="10" r="4"/><path d="M18 5l1-2M6 5L5 3M12 16s-2 2-4 2-4-2-4-2M20 15s-2 2-4 2-4-2-4-2"/></g>' },
    { id: 196, name: "BeautyInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="10" r="4"/><path stroke="var(--ax-bg-inverse, white)" d="M18 5l1-2M6 5L5 3M12 16s-2 2-4 2-4-2-4-2M20 15s-2 2-4 2-4-2-4-2"/>' },

// 67. Beer
    { id: 197, name: "Beer", category: "food", svgContent: '<path d="M17 11h1a3 3 0 0 1 0 6h-1"/><path d="M9 12v6"/><path d="M13 12v6"/><path d="M17 11V7a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-4z"/>' },
    { id: 198, name: "BeerThin", category: "food", svgContent: '<g fill="none" stroke-width="0.5"><path d="M17 11h1a3 3 0 0 1 0 6h-1"/><path d="M9 12v6"/><path d="M13 12v6"/><path d="M17 11V7a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-4z"/></g>' },
    { id: 199, name: "BeerInverted", category: "food", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M17 11h1a3 3 0 0 1 0 6h-1"/><path d="M9 12v6"/><path d="M13 12v6"/><path d="M17 11V7a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-4z"/></g>' },

// 68. Beer-Color
    { id: 200, name: "Beer-Color", category: "food", svgContent: '<defs><linearGradient id="beerGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#ffb74d"/><stop offset="100%" stop-color="#ffa726"/></linearGradient></defs><g><path d="M17 9h2a3 3 0 0 1 0 6h-2" fill="none" stroke="#f57c00" stroke-width="2.5"/><path d="M5 22l1-14h10l1 14H5z" fill="url(#beerGrad)"/><path d="M4 8c0-2 2-3 4-3s4 1 5-1 3 1 4 1a3 3 0 0 1 0 3H4z" fill="#eceff1"/></g>' },
    { id: 201, name: "Beer-Thin-Color", category: "food", svgContent: '<path d="M6 21l1-13h8l1 13H6z" fill="none" stroke="#ffa726" stroke-width="0.75"/>' },
    { id: 202, name: "Beer-Inverted-Color", category: "food", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#ffa726" rx="4"/><path d="M7 21l1-12h7l1 12H7z" fill="#ffffff"/>' },

// 69. Bell
    { id: 203, name: "Bell", category: "ui", svgContent: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>' },
    { id: 204, name: "BellThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></g>' },
    { id: 205, name: "BellInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></g>' },

// 70. Bell-Color
    { id: 206, name: "Bell-Color", category: "ui", svgContent: '<defs><linearGradient id="bellGold" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fff176"/><stop offset="50%" stop-color="#fbc02d"/><stop offset="100%" stop-color="#f57f17"/></linearGradient></defs><g><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" fill="url(#bellGold)"/><path d="M13.73 21a2 2 0 0 1-3.46 0" fill="#f57f17"/><circle cx="10" cy="7" r="1" fill="#fff" opacity="0.5"/></g>' },

// 71. Bell-Off
    { id: 207, name: "Bell-Off", category: "ui", svgContent: '<path d="M13.73 21a2 2 0 0 1-3.46 0"/><path d="M18.63 13A17.89 17.89 0 0 1 18 8"/><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"/><path d="M18 8a6 6 0 0 0-9.33-5"/><line x1="1" y1="1" x2="23" y2="23"/>' },
    { id: 208, name: "Bell-OffThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M13.73 21a2 2 0 0 1-3.46 0"/><path d="M18.63 13A17.89 17.89 0 0 1 18 8"/><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"/><path d="M18 8a6 6 0 0 0-9.33-5"/><line x1="1" y1="1" x2="23" y2="23"/></g>' },
    { id: 209, name: "Bell-OffInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M13.73 21a2 2 0 0 1-3.46 0"/><path d="M18.63 13A17.89 17.89 0 0 1 18 8"/><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"/><path d="M18 8a6 6 0 0 0-9.33-5"/><line x1="1" y1="1" x2="23" y2="23"/></g>' },

// 72. Bell2
    { id: 210, name: "Bell2", category: "ui", svgContent: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/><circle cx="19" cy="5" r="3" fill="currentColor" opacity="0.9"/>' },
    { id: 211, name: "Bell2Thin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/><circle cx="19" cy="5" r="3"/></g>' },
    { id: 212, name: "Bell2Inverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path stroke="var(--ax-bg-inverse, white)" d="M13.73 21a2 2 0 0 1-3.46 0"/><circle fill="var(--ax-bg-inverse, white)" cx="19" cy="5" r="3" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 73. BellOff
    { id: 213, name: "BellOff", category: "ui", svgContent: '<path d="M13.73 21a2 2 0 0 1-3.46 0M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h2m14 0h2M1 1l22 22"/><path d="M9.89 9.89A6 6 0 0 1 21 8c0 7-3 9-3 9H3"/>' },
    { id: 214, name: "BellOffThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M13.73 21a2 2 0 0 1-3.46 0M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h2m14 0h2M1 1l22 22"/><path d="M9.89 9.89A6 6 0 0 1 21 8c0 7-3 9-3 9H3"/></g>' },
    { id: 215, name: "BellOffInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M13.73 21a2 2 0 0 1-3.46 0M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h2m14 0h2M1 1l22 22"/><path stroke="var(--ax-bg-inverse, white)" d="M9.89 9.89A6 6 0 0 1 21 8c0 7-3 9-3 9H3"/>' },

// 74. BellRinging
    { id: 216, name: "BellRinging", category: "ui", svgContent: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/><path d="M18.88 8a1 1 0 0 1 1.34-.34l1.58.79a1 1 0 0 1 .35 1.34M5.12 8a1 1 0 0 0-1.34-.34l-1.58.79a1 1 0 0 0-.35 1.34"/>' },
    { id: 217, name: "BellRingingThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/><path d="M18.88 8a1 1 0 0 1 1.34-.34l1.58.79a1 1 0 0 1 .35 1.34M5.12 8a1 1 0 0 0-1.34-.34l-1.58.79a1 1 0 0 0-.35 1.34"/></g>' },
    { id: 218, name: "BellRingingInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path stroke="var(--ax-bg-inverse, white)" d="M13.73 21a2 2 0 0 1-3.46 0"/><path stroke="var(--ax-bg-inverse, white)" d="M18.88 8a1 1 0 0 1 1.34-.34l1.58.79a1 1 0 0 1 .35 1.34M5.12 8a1 1 0 0 0-1.34-.34l-1.58.79a1 1 0 0 0-.35 1.34"/>' },

// 75. Bicycle-Color
    { id: 219, name: "Bicycle-Color", category: "general", svgContent: '<defs><linearGradient id="bicGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ef5350"/><stop offset="100%" stop-color="#b71c1c"/></linearGradient></defs><g stroke="#b71c1c" stroke-width="2" stroke-linecap="round"><circle cx="6" cy="18" r="4" fill="none"/><circle cx="18" cy="18" r="4" fill="none"/><path d="M10 18l4-8h4"/></g>' },
    { id: 220, name: "Bicycle-Thin-Color", category: "general", svgContent: '<circle cx="6" cy="18" r="3" fill="none" stroke="#b71c1c" stroke-width="0.75"/><circle cx="18" cy="18" r="3" fill="none" stroke="#b71c1c" stroke-width="0.75"/>' },
    { id: 221, name: "Bicycle-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#b71c1c" rx="4"/><circle cx="6" cy="18" r="3" fill="#ffffff"/><circle cx="18" cy="18" r="3" fill="#ffffff"/>' },

// 76. Bicycle-Road-Color
    { id: 222, name: "Bicycle-Road-Color", category: "general", svgContent: '<defs><linearGradient id="birGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#4caf50"/><stop offset="100%" stop-color="#2e7d32"/></linearGradient></defs><g stroke="#2e7d32" stroke-width="2"><circle cx="6" cy="18" r="4" fill="none"/><circle cx="18" cy="18" r="4" fill="none"/><path d="M10 18h8v-6" fill="none"/></g>' },
    { id: 223, name: "Bicycle-Road-Thin-Color", category: "general", svgContent: '<circle cx="6" cy="18" r="3" fill="none" stroke="#2e7d32" stroke-width="0.75"/><circle cx="18" cy="18" r="3" fill="none" stroke="#2e7d32" stroke-width="0.75"/>' },
    { id: 224, name: "Bicycle-Road-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#2e7d32" rx="4"/><circle cx="6" cy="18" r="3" fill="#ffffff"/><circle cx="18" cy="18" r="3" fill="#ffffff"/>' },

// 77. Binoculars-Color
    { id: 225, name: "Binoculars-Color", category: "general", svgContent: '<defs><linearGradient id="binGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#607d8b"/><stop offset="100%" stop-color="#37474f"/></linearGradient></defs><g><circle cx="7" cy="12" r="4" fill="url(#binGrad)" stroke="#37474f" stroke-width="1.5"/><circle cx="17" cy="12" r="4" fill="url(#binGrad)" stroke="#37474f" stroke-width="1.5"/><path d="M7 8l10-4M7 16l10 4" stroke="#37474f" stroke-width="2" stroke-linecap="round"/></g>' },
    { id: 226, name: "Binoculars-Thin-Color", category: "general", svgContent: '<circle cx="7" cy="12" r="3" fill="none" stroke="#37474f" stroke-width="0.75"/><circle cx="17" cy="12" r="3" fill="none" stroke="#37474f" stroke-width="0.75"/>' },
    { id: 227, name: "Binoculars-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#37474f" rx="4"/><circle cx="7" cy="12" r="3" fill="#ffffff"/><circle cx="17" cy="12" r="3" fill="#ffffff"/>' },

// 78. Binoculars-Nav-Color
    { id: 228, name: "Binoculars-Nav-Color", category: "general", svgContent: '<defs><linearGradient id="binNGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#607d8b"/><stop offset="100%" stop-color="#37474f"/></linearGradient></defs><g><circle cx="8" cy="12" r="5" fill="url(#binNGrad)" stroke="#37474f" stroke-width="1.5"/><circle cx="16" cy="12" r="5" fill="url(#binNGrad)" stroke="#37474f" stroke-width="1.5"/><line x1="8" y1="12" x2="16" y2="12" stroke="#37474f" stroke-width="1"/></g>' },
    { id: 229, name: "Binoculars-Nav-Thin-Color", category: "general", svgContent: '<circle cx="8" cy="12" r="4" fill="none" stroke="#37474f" stroke-width="0.75"/><circle cx="16" cy="12" r="4" fill="none" stroke="#37474f" stroke-width="0.75"/>' },
    { id: 230, name: "Binoculars-Nav-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#37474f" rx="4"/><circle cx="8" cy="12" r="4" fill="#ffffff"/><circle cx="16" cy="12" r="4" fill="#ffffff"/>' },

// 79. Bitcoin
    { id: 231, name: "Bitcoin", category: "brands", svgContent: '<circle cx="12" cy="12" r="10"/><path d="M12 7v10M9 9h6c1 0 1.5.5 1.5 1.5S16 12 15 12H9M9 12h6c1 0 1.5.5 1.5 1.5S16 15 15 15H9"/>' },
    { id: 232, name: "BitcoinThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><path d="M12 7v10M9 9h6c1 0 1.5.5 1.5 1.5S16 12 15 12H9M9 12h6c1 0 1.5.5 1.5 1.5S16 15 15 15H9"/></g>' },
    { id: 233, name: "BitcoinInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="10"/><path stroke="var(--ax-bg-inverse, white)" d="M12 7v10M9 9h6c1 0 1.5.5 1.5 1.5S16 12 15 12H9M9 12h6c1 0 1.5.5 1.5 1.5S16 15 15 15H9"/>' },

// 80. Blocks-Color
    { id: 234, name: "Blocks-Color", category: "development", svgContent: '<defs><linearGradient id="blkGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ff5252"/><stop offset="100%" stop-color="#ff7043"/></linearGradient></defs><g><rect x="3" y="11" width="8" height="10" rx="1" fill="url(#blkGrad)"/><rect x="13" y="11" width="8" height="10" rx="1" fill="#42a5f5"/><rect x="3" y="3" width="18" height="6" rx="1" fill="#ffca28"/></g>' },
    { id: 235, name: "Blocks-Thin-Color", category: "development", svgContent: '<rect x="3" y="3" width="18" height="6" rx="1" fill="none" stroke="#ffca28" stroke-width="0.75"/><rect x="3" y="11" width="8" height="10" rx="1" fill="none" stroke="#ff5252" stroke-width="0.75"/>' },
    { id: 236, name: "Blocks-Inverted-Color", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#ff5252" rx="4"/><rect x="4" y="4" width="16" height="5" fill="#ffffff"/><rect x="4" y="11" width="7" height="9" fill="#ffffff"/><rect x="13" y="11" width="7" height="9" fill="#ffffff"/>' },

// 81. Bluetooth
    { id: 237, name: "Bluetooth", category: "development", svgContent: '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"/>' },
    { id: 238, name: "BluetoothThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"/></g>' },
    { id: 239, name: "BluetoothInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"/></g>' },

// 82. Bluetooth-Color
    { id: 240, name: "Bluetooth-Color", category: "ui", svgContent: '<defs><linearGradient id="btGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#29b6f6"/><stop offset="100%" stop-color="#01579b"/></linearGradient></defs><polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5" fill="none" stroke="url(#btGrad)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>' },
    { id: 241, name: "Bluetooth-Thin-Color", category: "ui", svgContent: '<polyline points="7 7 17 17 12 22 12 2 17 7 7 17" fill="none" stroke="#01579b" stroke-width="0.75"/>' },
    { id: 242, name: "Bluetooth-Inverted-Color", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#01579b" rx="4"/><polyline points="7 7 17 17 12 22 12 2 17 7 7 17" fill="none" stroke="#ffffff" stroke-width="2"/>' },

// 83. Blur
    { id: 243, name: "Blur", category: "general", svgContent: '<path d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><circle cx="9" cy="9" r="1.5" opacity="0.5"/><circle cx="15" cy="9" r="1.5" opacity="0.3"/><circle cx="12" cy="15" r="1.5" opacity="0.4"/>' },
    { id: 244, name: "BlurThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><circle cx="9" cy="9" r="1.5"/><circle cx="15" cy="9" r="1.5"/><circle cx="12" cy="15" r="1.5"/></g>' },
    { id: 245, name: "BlurInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><circle fill="var(--ax-bg-inverse, white)" cx="9" cy="9" r="1.5" opacity="0.5"/><circle fill="var(--ax-bg-inverse, white)" cx="15" cy="9" r="1.5" opacity="0.3"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="15" r="1.5" opacity="0.4"/>' },

// 84. Blur-Color
    { id: 246, name: "Blur-Color", category: "general", svgContent: '<defs><linearGradient id="blurGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#e0e0e0"/><stop offset="100%" stop-color="#9e9e9e"/></linearGradient></defs><g fill="url(#blurGrad)"><circle cx="12" cy="12" r="9" opacity="0.3"/><circle cx="12" cy="12" r="6" opacity="0.6"/><circle cx="12" cy="12" r="3"/></g>' },
    { id: 247, name: "Blur-Thin-Color", category: "general", svgContent: '<circle cx="12" cy="12" r="8" fill="none" stroke="#9e9e9e" stroke-width="0.75" stroke-dasharray="2 2"/>' },
    { id: 248, name: "Blur-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#9e9e9e" rx="4"/><circle cx="12" cy="12" r="7" fill="#ffffff"/><circle cx="12" cy="12" r="4" fill="#9e9e9e" opacity="0.5"/>' },

// 85. Boat-Color
    { id: 249, name: "Boat-Color", category: "general", svgContent: '<defs><linearGradient id="botGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#cfd8dc"/></linearGradient></defs><g><path d="M2 14l20 2-4 6H6z" fill="url(#botGrad)" stroke="#455a64" stroke-width="1.5"/><path d="M12 14V4l6 6z" fill="#ef5350"/></g>' },
    { id: 250, name: "Boat-Thin-Color", category: "general", svgContent: '<path d="M3 15l18 2-3 5H6z" fill="none" stroke="#455a64" stroke-width="0.75"/>' },
    { id: 251, name: "Boat-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#455a64" rx="4"/><path d="M3 15l18 2-3 5H6z" fill="#ffffff"/>' },

// 86. Book
    { id: 252, name: "Book", category: "objects", svgContent: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>' },
    { id: 253, name: "BookThin", category: "objects", svgContent: '<g fill="none" stroke-width="0.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></g>' },
    { id: 254, name: "BookInverted", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></g>' },

// 87. Book-Color
    { id: 255, name: "Book-Color", category: "objects", svgContent: '<defs><linearGradient id="bookCover" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#0288d1"/><stop offset="100%" stop-color="#01579b"/></linearGradient></defs><g><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20v4H6.5A2.5 2.5 0 0 1 4 19.5z" fill="#eceff1"/><path d="M6.5 2H20v15H6.5A2.5 2.5 0 0 0 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" fill="url(#bookCover)"/><line x1="8" y1="6" x2="16" y2="6" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/></g>' },
    { id: 256, name: "Book-Thin-Color", category: "objects", svgContent: '<path d="M6.5 2H19v16H6.5A2.5 2.5 0 0 1 4 15.5v-11A2.5 2.5 0 0 1 6.5 2z" fill="none" stroke="#01579b" stroke-width="0.75"/>' },
    { id: 257, name: "Book-Inverted-Color", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#01579b" rx="4"/><path d="M6 4h13v13H6a2 2 0 0 0-2 2V6a2 2 0 0 1 2-2z" fill="#ffffff"/>' },

// 88. Book-Open
    { id: 258, name: "Book-Open", category: "objects", svgContent: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>' },
    { id: 259, name: "Book-OpenThin", category: "objects", svgContent: '<g fill="none" stroke-width="0.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></g>' },
    { id: 260, name: "Book-OpenInverted", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></g>' },

// 89. Bookmark
    { id: 261, name: "Bookmark", category: "objects", svgContent: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>' },
    { id: 262, name: "BookmarkThin", category: "objects", svgContent: '<g fill="none" stroke-width="0.5"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></g>' },
    { id: 263, name: "BookmarkInverted", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>' },

// 90. Bookmark-Color
    { id: 264, name: "Bookmark-Color", category: "objects", svgContent: '<defs><linearGradient id="bmkGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#66bb6a"/><stop offset="100%" stop-color="#2e7d32"/></linearGradient></defs><g><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" fill="url(#bmkGrad)" stroke="#2e7d32" stroke-width="1.5"/></g>' },
    { id: 265, name: "Bookmark-Thin-Color", category: "objects", svgContent: '<path d="M19 21l-7-5-7 5V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z" fill="none" stroke="#2e7d32" stroke-width="0.75"/>' },
    { id: 266, name: "Bookmark-Inverted-Color", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#2e7d32" rx="4"/><path d="M19 21l-7-5-7 5V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z" fill="#ffffff"/>' },

// 91. BookmarkPlus
    { id: 267, name: "BookmarkPlus", category: "objects", svgContent: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z M12 7v6M9 10h6"/>' },
    { id: 268, name: "BookmarkPlusThin", category: "objects", svgContent: '<g fill="none" stroke-width="0.5"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z M12 7v6M9 10h6"/></g>' },
    { id: 269, name: "BookmarkPlusInverted", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z M12 7v6M9 10h6"/>' },

// 92. Bottle
    { id: 270, name: "Bottle", category: "food", svgContent: '<path d="M10 2h4v5h-4z"/><path d="M12 7v15"/><path d="M8 7h8v15H8z"/>' },
    { id: 271, name: "BottleThin", category: "food", svgContent: '<g fill="none" stroke-width="0.5"><path d="M10 2h4v5h-4z"/><path d="M12 7v15"/><path d="M8 7h8v15H8z"/></g>' },
    { id: 272, name: "BottleInverted", category: "food", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M10 2h4v5h-4z"/><path d="M12 7v15"/><path d="M8 7h8v15H8z"/></g>' },

// 93. Bowl
    { id: 273, name: "Bowl", category: "food", svgContent: '<path d="M22 12a10 10 0 0 1-20 0z"/><path d="M6 12a6 6 0 0 0 12 0z"/>' },
    { id: 274, name: "BowlThin", category: "food", svgContent: '<g fill="none" stroke-width="0.5"><path d="M22 12a10 10 0 0 1-20 0z"/><path d="M6 12a6 6 0 0 0 12 0z"/></g>' },
    { id: 275, name: "BowlInverted", category: "food", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M22 12a10 10 0 0 1-20 0z"/><path d="M6 12a6 6 0 0 0 12 0z"/></g>' },

// 94. Box
    { id: 276, name: "Box", category: "objects", svgContent: '<polygon points="12 2 22 7.5 22 16.5 12 22 2 16.5 2 7.5 12 2"/><line x1="2" y1="7.5" x2="12" y2="13"/><line x1="22" y1="7.5" x2="12" y2="13"/><line x1="12" y1="22" x2="12" y2="13"/><line x1="12" y1="2" x2="12" y2="13"/>' },
    { id: 277, name: "BoxThin", category: "objects", svgContent: '<g fill="none" stroke-width="0.5"><polygon points="12 2 22 7.5 22 16.5 12 22 2 16.5 2 7.5 12 2"/><line x1="2" y1="7.5" x2="12" y2="13"/><line x1="22" y1="7.5" x2="12" y2="13"/><line x1="12" y1="22" x2="12" y2="13"/><line x1="12" y1="2" x2="12" y2="13"/></g>' },
    { id: 278, name: "BoxInverted", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polygon points="12 2 22 7.5 22 16.5 12 22 2 16.5 2 7.5 12 2"/><line x1="2" y1="7.5" x2="12" y2="13"/><line x1="22" y1="7.5" x2="12" y2="13"/><line x1="12" y1="22" x2="12" y2="13"/><line x1="12" y1="2" x2="12" y2="13"/></g>' },

// 95. Brackets-Color
    { id: 279, name: "Brackets-Color", category: "general", svgContent: '<defs><linearGradient id="brkGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#ff7043"/><stop offset="100%" stop-color="#f4511e"/></linearGradient></defs><g fill="none" stroke="url(#brkGrad)" stroke-width="2.5" stroke-linecap="round"><path d="M16 4h3v16h-3M8 4H5v16h3"/></g>' },
    { id: 280, name: "Brackets-Thin-Color", category: "general", svgContent: '<path d="M15 5h2v14h-2M9 5H7v14h2" fill="none" stroke="#f4511e" stroke-width="0.75"/>' },
    { id: 281, name: "Brackets-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#f4511e" rx="4"/><path d="M16 5h3v14h-3M8 5H5v14h3" fill="none" stroke="#ffffff" stroke-width="2"/>' },

// 96. Brain
    { id: 282, name: "Brain", category: "ai", svgContent: '<path d="M9.5 2A3.5 3.5 0 0 1 13 5.5v.006h.02a3.5 3.5 0 0 1 3.37 5.477A5.5 5.5 0 1 1 9.5 2z"/><circle cx="9" cy="9" r="1" fill="currentColor" opacity="0.9"/><circle cx="15" cy="9" r="1" fill="currentColor" opacity="0.9"/>' },
    { id: 283, name: "BrainThin", category: "ai", svgContent: '<g fill="none" stroke-width="0.5"><path d="M9.5 2A3.5 3.5 0 0 1 13 5.5v.006h.02a3.5 3.5 0 0 1 3.37 5.477A5.5 5.5 0 1 1 9.5 2z"/><circle cx="9" cy="9" r="1"/><circle cx="15" cy="9" r="1"/></g>' },
    { id: 284, name: "BrainInverted", category: "ai", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M9.5 2A3.5 3.5 0 0 1 13 5.5v.006h.02a3.5 3.5 0 0 1 3.37 5.477A5.5 5.5 0 1 1 9.5 2z"/><circle fill="var(--ax-bg-inverse, white)" cx="9" cy="9" r="1" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="15" cy="9" r="1" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 97. Brand-Instagram
    { id: 285, name: "Brand-Instagram", category: "brands", svgContent: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>' },

// 98. Briefcase
    { id: 286, name: "Briefcase", category: "finance", svgContent: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>' },
    { id: 287, name: "BriefcaseThin", category: "finance", svgContent: '<g fill="none" stroke-width="0.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></g>' },
    { id: 288, name: "BriefcaseInverted", category: "finance", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></g>' },

// 99. Briefcase-Color
    { id: 289, name: "Briefcase-Color", category: "objects", svgContent: '<defs><linearGradient id="caseGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#8d6e63"/><stop offset="100%" stop-color="#4e342e"/></linearGradient></defs><g><rect x="2" y="7" width="20" height="14" rx="2" fill="url(#caseGrad)"/><path d="M16 7V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3" fill="none" stroke="#4e342e" stroke-width="2"/><rect x="11" y="12" width="2" height="3" rx="0.5" fill="#ffd54f"/></g>' },
    { id: 290, name: "Briefcase-Thin-Color", category: "objects", svgContent: '<rect x="2" y="7" width="20" height="14" rx="2" fill="none" stroke="#4e342e" stroke-width="0.75"/>' },
    { id: 291, name: "Briefcase-Inverted-Color", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#4e342e" rx="4"/><rect x="3" y="8" width="18" height="12" rx="1" fill="#ffffff"/><path d="M15 8V5h-6v3" fill="none" stroke="#ffffff" stroke-width="2"/>' },

// 100. Brightness-Color
    { id: 292, name: "Brightness-Color", category: "general", svgContent: '<defs><linearGradient id="brtGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fff176"/><stop offset="100%" stop-color="#f57f17"/></linearGradient></defs><g stroke="url(#brtGrad)" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="5" fill="url(#brtGrad)"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></g>' },
    { id: 293, name: "Brightness-Thin-Color", category: "general", svgContent: '<circle cx="12" cy="12" r="5" fill="none" stroke="#f57f17" stroke-width="0.75"/>' },
    { id: 294, name: "Brightness-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#f57f17" rx="4"/><circle cx="12" cy="12" r="4" fill="#ffffff"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2" stroke="#ffffff" stroke-width="2"/>' },

// 101. Brush
    { id: 295, name: "Brush", category: "general", svgContent: '<path d="M19.4 7.34c.66-1.05.69-2.4 0-3.53-1.14-1.84-3.26-1.84-4.4 0L2 16c-.63.75-.63 1.92 0 2.64.9 1.32 2.67 1.84 4.29.84l.87-.52L21.47 6l-.87.52c-.72.43-1.79.22-2.2-.56z"/>' },
    { id: 296, name: "BrushThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M19.4 7.34c.66-1.05.69-2.4 0-3.53-1.14-1.84-3.26-1.84-4.4 0L2 16c-.63.75-.63 1.92 0 2.64.9 1.32 2.67 1.84 4.29.84l.87-.52L21.47 6l-.87.52c-.72.43-1.79.22-2.2-.56z"/></g>' },
    { id: 297, name: "BrushInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M19.4 7.34c.66-1.05.69-2.4 0-3.53-1.14-1.84-3.26-1.84-4.4 0L2 16c-.63.75-.63 1.92 0 2.64.9 1.32 2.67 1.84 4.29.84l.87-.52L21.47 6l-.87.52c-.72.43-1.79.22-2.2-.56z"/>' },

// 102. Brush-Color
    { id: 298, name: "Brush-Color", category: "general", svgContent: '<defs><linearGradient id="brshGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ba68c8"/><stop offset="100%" stop-color="#7b1fa2"/></linearGradient></defs><g><path d="M18 3l3 3-11 11H7v-3L18 3z" fill="url(#brshGrad)"/><path d="M7 14l-4 4v3h3l4-4" fill="#8d6e63"/><path d="M21 3c-1.5-1.5-4 1-4 1l3 3s2.5-2.5 1-4z" fill="#ff4081"/></g>' },
    { id: 299, name: "Brush-Thin-Color", category: "general", svgContent: '<path d="M18 3l3 3-11 11H7v-3z" fill="none" stroke="#7b1fa2" stroke-width="0.75"/>' },
    { id: 300, name: "Brush-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#7b1fa2" rx="4"/><path d="M17 4l3 3-10 10H7v-3L17 4z" fill="#ffffff"/><path d="M7 14l-3 3v3h3l3-3V14H7z" fill="#ffffff" opacity="0.6"/>' },

// 103. Bucket-Color
    { id: 301, name: "Bucket-Color", category: "general", svgContent: '<defs><linearGradient id="bktGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fff176"/><stop offset="100%" stop-color="#fbc02d"/></linearGradient></defs><g><path d="M5 6h14l-2 14H7L5 6z" fill="url(#bktGrad)" stroke="#f57f17" stroke-width="1.5"/><path d="M4 6c0-3 16-3 16 0" fill="none" stroke="#cfd8dc" stroke-width="2.5"/></g>' },
    { id: 302, name: "Bucket-Thin-Color", category: "general", svgContent: '<path d="M6 7l-1 12h14l-1-12H6z" fill="none" stroke="#f57f17" stroke-width="0.75"/>' },
    { id: 303, name: "Bucket-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#f57f17" rx="4"/><path d="M6 7l-1 12h14l-1-12H6z" fill="#ffffff"/>' },

// 104. Bug
    { id: 304, name: "Bug", category: "development", svgContent: '<path d="M12 14s3-2 3-6c0-2-1-4-3-4s-3 2-3 4c0 4 3 6 3 6zM9 9h6M6 14h12M12 20v2M8 22h8"/>' },
    { id: 305, name: "BugThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 14s3-2 3-6c0-2-1-4-3-4s-3 2-3 4c0 4 3 6 3 6zM9 9h6M6 14h12M12 20v2M8 22h8"/></g>' },
    { id: 306, name: "BugInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M12 14s3-2 3-6c0-2-1-4-3-4s-3 2-3 4c0 4 3 6 3 6zM9 9h6M6 14h12M12 20v2M8 22h8"/>' },

// 105. Bug-Color
    { id: 307, name: "Bug-Color", category: "objects", svgContent: '<defs><linearGradient id="bugRed" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#e53935"/><stop offset="100%" stop-color="#b71c1c"/></linearGradient></defs><g fill="none" stroke="#37474f" stroke-width="2" stroke-linecap="round"><rect x="6" y="7" width="12" height="11" rx="6" fill="url(#bugRed)" stroke="none"/><circle cx="12" cy="5" r="2" fill="#37474f" stroke="none"/><line x1="6" y1="10" x2="2" y2="9"/><line x1="6" y1="13" x2="2" y2="13"/><line x1="6" y1="16" x2="2" y2="17"/><line x1="18" y1="10" x2="22" y2="9"/><line x1="18" y1="13" x2="22" y2="13"/><line x1="18" y1="16" x2="22" y2="17"/><path d="M10 2c0 0-1-1-2-1m6 2c0 0 1-1 2-1"/></g>' },
    { id: 308, name: "Bug-Thin-Color", category: "objects", svgContent: '<rect x="7" y="7" width="10" height="11" rx="5" fill="none" stroke="#b71c1c" stroke-width="0.75"/>' },
    { id: 309, name: "Bug-Inverted-Color", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#b71c1c" rx="4"/><ellipse cx="12" cy="13" rx="5" ry="6" fill="#ffffff"/><circle cx="12" cy="6" r="1.5" fill="#ffffff"/>' },

// 106. Bulldozer-Color
    { id: 310, name: "Bulldozer-Color", category: "general", svgContent: '<defs><linearGradient id="bldGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#607d8b"/><stop offset="100%" stop-color="#37474f"/></linearGradient></defs><g><rect x="4" y="12" width="12" height="6" fill="url(#bldGrad)" stroke="#37474f" stroke-width="1.5"/><rect x="16" y="10" width="4" height="10" fill="#37474f"/></g>' },
    { id: 311, name: "Bulldozer-Thin-Color", category: "general", svgContent: '<rect x="5" y="13" width="10" height="4" fill="none" stroke="#37474f" stroke-width="0.75"/>' },
    { id: 312, name: "Bulldozer-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#37474f" rx="4"/><rect x="5" y="13" width="10" height="4" fill="#ffffff"/>' },

// 107. Burger
    { id: 313, name: "Burger", category: "food", svgContent: '<path d="M3 12h18"/><path d="M3 16h18"/><path d="M3 8h18"/><path d="M2 12a10 10 0 0 0 20 0H2z"/><path d="M4 12a8 8 0 0 1 16 0"/>' },
    { id: 314, name: "BurgerThin", category: "food", svgContent: '<g fill="none" stroke-width="0.5"><path d="M3 12h18"/><path d="M3 16h18"/><path d="M3 8h18"/><path d="M2 12a10 10 0 0 0 20 0H2z"/><path d="M4 12a8 8 0 0 1 16 0"/></g>' },
    { id: 315, name: "BurgerInverted", category: "food", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M3 12h18"/><path d="M3 16h18"/><path d="M3 8h18"/><path d="M2 12a10 10 0 0 0 20 0H2z"/><path d="M4 12a8 8 0 0 1 16 0"/></g>' },

// 108. Burger-Off
    { id: 316, name: "Burger-Off", category: "food", svgContent: '<path d="M3 12h18"/><path d="M3 16h18"/><path d="M3 8h18"/><path d="M2 12a10 10 0 0 0 20 0H2z"/><path d="M4 12a8 8 0 0 1 16 0"/><line x1="1" y1="1" x2="23" y2="23"/>' },
    { id: 317, name: "Burger-OffThin", category: "food", svgContent: '<g fill="none" stroke-width="0.5"><path d="M3 12h18"/><path d="M3 16h18"/><path d="M3 8h18"/><path d="M2 12a10 10 0 0 0 20 0H2z"/><path d="M4 12a8 8 0 0 1 16 0"/><line x1="1" y1="1" x2="23" y2="23"/></g>' },
    { id: 318, name: "Burger-OffInverted", category: "food", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M3 12h18"/><path d="M3 16h18"/><path d="M3 8h18"/><path d="M2 12a10 10 0 0 0 20 0H2z"/><path d="M4 12a8 8 0 0 1 16 0"/><line x1="1" y1="1" x2="23" y2="23"/></g>' },

// 109. Bus-Color
    { id: 319, name: "Bus-Color", category: "general", svgContent: '<defs><linearGradient id="busGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffeb3b"/><stop offset="100%" stop-color="#fbc02d"/></linearGradient></defs><g><rect x="4" y="6" width="16" height="12" rx="2" fill="url(#busGrad)" stroke="#f57f17" stroke-width="1.5"/><rect x="6" y="8" width="12" height="4" fill="#ffffff"/><circle cx="8" cy="18" r="2" fill="#455a64"/><circle cx="16" cy="18" r="2" fill="#455a64"/></g>' },
    { id: 320, name: "Bus-Thin-Color", category: "general", svgContent: '<rect x="5" y="7" width="14" height="10" rx="1" fill="none" stroke="#f57f17" stroke-width="0.75"/>' },
    { id: 321, name: "Bus-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#f57f17" rx="4"/><rect x="5" y="7" width="14" height="10" rx="1" fill="#ffffff"/>' },

// 110. Bus-School-Color
    { id: 322, name: "Bus-School-Color", category: "general", svgContent: '<defs><linearGradient id="bsGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ff9800"/><stop offset="100%" stop-color="#f57c00"/></linearGradient></defs><g><rect x="2" y="8" width="18" height="10" rx="2" fill="url(#bsGrad)" stroke="#f57c00" stroke-width="1.5"/><rect x="4" y="10" width="14" height="4" fill="#ffffff"/></g>' },
    { id: 323, name: "Bus-School-Thin-Color", category: "general", svgContent: '<rect x="3" y="9" width="16" height="8" rx="1" fill="none" stroke="#f57c00" stroke-width="0.75"/>' },
    { id: 324, name: "Bus-School-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#f57c00" rx="4"/><rect x="3" y="9" width="16" height="8" rx="1" fill="#ffffff"/>' },

// 111. Cable-Car-Color
    { id: 325, name: "Cable-Car-Color", category: "general", svgContent: '<defs><linearGradient id="cblGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#795548"/><stop offset="100%" stop-color="#4e342e"/></linearGradient></defs><g><rect x="6" y="8" width="12" height="10" rx="2" fill="url(#cblGrad)" stroke="#4e342e" stroke-width="1.5"/><line x1="12" y1="4" x2="12" y2="8" stroke="#4e342e" stroke-width="3"/></g>' },
    { id: 326, name: "Cable-Car-Thin-Color", category: "general", svgContent: '<rect x="7" y="9" width="10" height="8" rx="1" fill="none" stroke="#4e342e" stroke-width="0.75"/>' },
    { id: 327, name: "Cable-Car-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#4e342e" rx="4"/><rect x="7" y="9" width="10" height="8" rx="1" fill="#ffffff"/>' },

// 112. Cake
    { id: 328, name: "Cake", category: "food", svgContent: '<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16h16"/><path d="M2 21h20"/><path d="M7 8v3"/><path d="M12 8v3"/><path d="M17 8v3"/>' },
    { id: 329, name: "CakeThin", category: "food", svgContent: '<g fill="none" stroke-width="0.5"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16h16"/><path d="M2 21h20"/><path d="M7 8v3"/><path d="M12 8v3"/><path d="M17 8v3"/></g>' },
    { id: 330, name: "CakeInverted", category: "food", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16h16"/><path d="M2 21h20"/><path d="M7 8v3"/><path d="M12 8v3"/><path d="M17 8v3"/></g>' },

// 113. Cake-Color
    { id: 331, name: "Cake-Color", category: "food", svgContent: '<defs><linearGradient id="cakeGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#e8eaed"/><stop offset="100%" stop-color="#b0bec5"/></linearGradient></defs><g><rect x="3" y="11" width="18" height="10" rx="2" fill="url(#cakeGrad)"/><path d="M3 14c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 4 1" fill="none" stroke="#e91e63" stroke-width="2"/><line x1="12" y1="11" x2="12" y2="5" stroke="#ffb300" stroke-width="2"/><path d="M12 5c1-1 0-3 0-3s-1 2 0 3z" fill="#ff5252"/></g>' },
    { id: 332, name: "Cake-Thin-Color", category: "food", svgContent: '<rect x="3" y="11" width="18" height="10" rx="2" fill="none" stroke="#b0bec5" stroke-width="0.75"/>' },
    { id: 333, name: "Cake-Inverted-Color", category: "food", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#e91e63" rx="4"/><rect x="4" y="12" width="16" height="9" rx="1" fill="#ffffff"/>' },

// 114. Calculator
    { id: 334, name: "Calculator", category: "finance", svgContent: '<rect x="4" y="2" width="16" height="20" rx="2"/><rect x="6" y="4" width="12" height="6"/><line x1="6" y1="11" x2="18" y2="11"/><line x1="6" y1="15" x2="18" y2="15"/><line x1="6" y1="19" x2="18" y2="19"/>' },
    { id: 335, name: "CalculatorThin", category: "finance", svgContent: '<g fill="none" stroke-width="0.5"><rect x="4" y="2" width="16" height="20" rx="2"/><rect x="6" y="4" width="12" height="6"/><line x1="6" y1="11" x2="18" y2="11"/><line x1="6" y1="15" x2="18" y2="15"/><line x1="6" y1="19" x2="18" y2="19"/></g>' },
    { id: 336, name: "CalculatorInverted", category: "finance", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="4" y="2" width="16" height="20" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="6" y="4" width="12" height="6"/><line stroke="var(--ax-bg-inverse, white)" x1="6" y1="11" x2="18" y2="11"/><line stroke="var(--ax-bg-inverse, white)" x1="6" y1="15" x2="18" y2="15"/><line stroke="var(--ax-bg-inverse, white)" x1="6" y1="19" x2="18" y2="19"/>' },

// 115. Calculator-Color
    { id: 337, name: "Calculator-Color", category: "general", svgContent: '<defs><linearGradient id="clcGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#eceff1"/><stop offset="100%" stop-color="#b0bec5"/></linearGradient></defs><g><rect x="5" y="3" width="14" height="18" rx="2" fill="url(#clcGrad)" stroke="#b0bec5" stroke-width="1.5"/><rect x="7" y="5" width="10" height="4" fill="#37474f"/><g fill="#546e7a"><rect x="7" y="11" width="2" height="2"/><rect x="11" y="11" width="2" height="2"/><rect x="15" y="11" width="2" height="2"/><rect x="7" y="15" width="2" height="2"/><rect x="11" y="15" width="2" height="2"/><rect x="15" y="15" width="2" height="2"/></g></g>' },
    { id: 338, name: "Calculator-Thin-Color", category: "general", svgContent: '<rect x="6" y="4" width="12" height="16" rx="1" fill="none" stroke="#b0bec5" stroke-width="0.75"/>' },
    { id: 339, name: "Calculator-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#b0bec5" rx="4"/><rect x="6" y="4" width="12" height="16" rx="1" fill="#ffffff"/>' },

// 116. Calendar
    { id: 340, name: "Calendar", category: "objects", svgContent: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>' },
    { id: 341, name: "CalendarThin", category: "objects", svgContent: '<g fill="none" stroke-width="0.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></g>' },
    { id: 342, name: "CalendarInverted", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></g>' },

// 117. Calendar-Color
    { id: 343, name: "Calendar-Color", category: "general", svgContent: '<defs><linearGradient id="calHeader" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#e53935"/><stop offset="100%" stop-color="#c62828"/></linearGradient></defs><g><rect x="3" y="4" width="18" height="16" rx="2" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="1"/><path d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4H3V6z" fill="url(#calHeader)"/><line x1="16" y1="2" x2="16" y2="6" stroke="#cfd8dc" stroke-width="2" stroke-linecap="round"/><line x1="8" y1="2" x2="8" y2="6" stroke="#cfd8dc" stroke-width="2" stroke-linecap="round"/><circle cx="7" cy="13" r="1.5" fill="#e53935"/><circle cx="12" cy="13" r="1.5" fill="#78909c"/><circle cx="17" cy="13" r="1.5" fill="#78909c"/><circle cx="7" cy="17" r="1.5" fill="#78909c"/><circle cx="12" cy="17" r="1.5" fill="#78909c"/><circle cx="17" cy="17" r="1.5" fill="#78909c"/></g>' },

// 118. Calendar-Event-Color
    { id: 344, name: "Calendar-Event-Color", category: "general", svgContent: '<defs><linearGradient id="calEvGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ff5252"/><stop offset="100%" stop-color="#c62828"/></linearGradient></defs><g><rect x="3" y="4" width="18" height="17" rx="2" fill="none" stroke="url(#calEvGrad)" stroke-width="2"/><line x1="3" y1="9" x2="21" y2="9" stroke="url(#calEvGrad)" stroke-width="1.5"/><line x1="8" y1="2" x2="8" y2="5" stroke="#c62828" stroke-width="2" stroke-linecap="round"/><line x1="16" y1="2" x2="16" y2="5" stroke="#c62828" stroke-width="2" stroke-linecap="round"/><rect x="7" y="12" width="4" height="4" rx="1" fill="#ff5252"/></g>' },
    { id: 345, name: "Calendar-Event-Thin-Color", category: "general", svgContent: '<rect x="3" y="4" width="18" height="17" rx="2" fill="none" stroke="#c62828" stroke-width="0.75"/><circle cx="8" cy="13" r="1" fill="#c62828"/>' },
    { id: 346, name: "Calendar-Event-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#c62828" rx="4"/><rect x="4" y="5" width="16" height="15" rx="1" fill="#ffffff"/><rect x="4" y="5" width="16" height="4" fill="#c62828"/><circle cx="12" cy="14" r="2" fill="#c62828"/>' },

// 119. Camera
    { id: 347, name: "Camera", category: "media", svgContent: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>' },
    { id: 348, name: "CameraThin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></g>' },
    { id: 349, name: "CameraInverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></g>' },

// 120. Camera-Color
    { id: 350, name: "Camera-Color", category: "media", svgContent: '<defs><linearGradient id="camBody" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#78909c"/><stop offset="100%" stop-color="#37474f"/></linearGradient></defs><g><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2v10z" fill="url(#camBody)"/><circle cx="12" cy="13" r="4" fill="#263238" stroke="#ffffff" stroke-width="1.5"/><circle cx="12" cy="13" r="1.5" fill="#29b6f6"/></g>' },
    { id: 351, name: "Camera-Thin-Color", category: "media", svgContent: '<circle cx="12" cy="13" r="4" fill="none" stroke="#37474f" stroke-width="0.75"/>' },
    { id: 352, name: "Camera-Inverted-Color", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#37474f" rx="4"/><path d="M20 8h-3l-2-3H9L7 8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2z" fill="#ffffff"/><circle cx="12" cy="14" r="3.5" fill="#37474f"/>' },

// 121. Campfire-Color
    { id: 353, name: "Campfire-Color", category: "general", svgContent: '<defs><linearGradient id="cmpfGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ff9800"/><stop offset="100%" stop-color="#bf360c"/></linearGradient></defs><g><path d="M12 22l-4-4 4-8 4 8z" fill="#795548" stroke="#5d4037" stroke-width="1.5"/><path d="M12 12c0-6-6-10-6-16a6 6 0 1 0 12 0c0-6-6-10-6-16z" fill="url(#cmpfGrad)" stroke="#bf360c" stroke-width="1.5"/></g>' },
    { id: 354, name: "Campfire-Thin-Color", category: "general", svgContent: '<path d="M12 4c0 5-5 9-5 15a5 5 0 1 0 10 0c0-6-5-10-5-15z" fill="none" stroke="#bf360c" stroke-width="0.75"/>' },
    { id: 355, name: "Campfire-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#bf360c" rx="4"/><path d="M12 4c0 5-5 9-5 15a5 5 0 1 0 10 0c0-6-5-10-5-15z" fill="#ffffff"/>' },

// 122. Candy
    { id: 356, name: "Candy", category: "food", svgContent: '<path d="M12 12L2 2M12 12l10-10M12 12L2 22M12 12l10 10"/><path d="M7 7l10 10"/><path d="M17 7l-10 10"/><circle cx="12" cy="12" r="3"/>' },
    { id: 357, name: "CandyThin", category: "food", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 12L2 2M12 12l10-10M12 12L2 22M12 12l10 10"/><path d="M7 7l10 10"/><path d="M17 7l-10 10"/><circle cx="12" cy="12" r="3"/></g>' },
    { id: 358, name: "CandyInverted", category: "food", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M12 12L2 2M12 12l10-10M12 12L2 22M12 12l10 10"/><path d="M7 7l10 10"/><path d="M17 7l-10 10"/><circle cx="12" cy="12" r="3"/></g>' },

// 123. Car-Color
    { id: 359, name: "Car-Color", category: "general", svgContent: '<defs><linearGradient id="carGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#29b6f6"/><stop offset="100%" stop-color="#0288d1"/></linearGradient></defs><g><path d="M4 14l2-6h12l2 6z" fill="url(#carGrad)" stroke="#0288d1" stroke-width="1.5"/><rect x="6" y="8" width="12" height="4" fill="#ffffff" stroke="#0288d1" stroke-width="1.5"/><circle cx="8" cy="18" r="2" fill="#455a64"/><circle cx="16" cy="18" r="2" fill="#455a64"/></g>' },
    { id: 360, name: "Car-Thin-Color", category: "general", svgContent: '<path d="M5 14l1-5h12l1 5z" fill="none" stroke="#0288d1" stroke-width="0.75"/>' },
    { id: 361, name: "Car-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#0288d1" rx="4"/><path d="M5 14l1-5h12l1 5z" fill="#ffffff"/>' },

// 124. Card-Game-Color
    { id: 362, name: "Card-Game-Color", category: "general", svgContent: '<defs><linearGradient id="crdGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#eceff1"/></linearGradient></defs><g><rect x="4" y="3" width="16" height="18" rx="2" fill="url(#crdGrad)" stroke="#455a64" stroke-width="1.5"/><path d="M12 7c-2 0-3 2-3 3s1 3 3 3 3-2 3-3-1-3-3-3z" fill="#ff5252"/></g>' },
    { id: 363, name: "Card-Game-Thin-Color", category: "general", svgContent: '<rect x="5" y="4" width="14" height="16" rx="1" fill="none" stroke="#455a64" stroke-width="0.75"/>' },
    { id: 364, name: "Card-Game-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#455a64" rx="4"/><rect x="5" y="4" width="14" height="16" rx="1" fill="#ffffff"/>' },

// 125. Carrot
    { id: 365, name: "Carrot", category: "food", svgContent: '<path d="M2.5 12.5l7 7L21 8l-7-7-11.5 11.5z"/><path d="M2 13l4-4"/><path d="M15 9l-4 4"/>' },
    { id: 366, name: "CarrotThin", category: "food", svgContent: '<g fill="none" stroke-width="0.5"><path d="M2.5 12.5l7 7L21 8l-7-7-11.5 11.5z"/><path d="M2 13l4-4"/><path d="M15 9l-4 4"/></g>' },
    { id: 367, name: "CarrotInverted", category: "food", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M2.5 12.5l7 7L21 8l-7-7-11.5 11.5z"/><path d="M2 13l4-4"/><path d="M15 9l-4 4"/></g>' },

// 126. Cast
    { id: 368, name: "Cast", category: "media", svgContent: '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6M2 20h.01"/>' },
    { id: 369, name: "CastThin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6M2 20h.01"/></g>' },
    { id: 370, name: "CastInverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6M2 20h.01"/></g>' },

// 127. Cast-Color
    { id: 371, name: "Cast-Color", category: "communication", svgContent: '<defs><linearGradient id="castGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#90caf9"/><stop offset="100%" stop-color="#1e88e5"/></linearGradient></defs><g fill="none" stroke="url(#castGrad)" stroke-width="2" stroke-linecap="round"><rect x="2" y="4" width="20" height="16" rx="2" stroke="#b0bec5"/><path d="M2 20a4 4 0 0 1 4-4M2 16a8 8 0 0 1 8 8" stroke-width="2.5"/><circle cx="2" cy="20" r="1" fill="#1e88e5" stroke="none"/></g>' },
    { id: 372, name: "Cast-Thin-Color", category: "communication", svgContent: '<path d="M2 16a4 4 0 0 1 4 4" fill="none" stroke="#1e88e5" stroke-width="0.5"/>' },
    { id: 373, name: "Cast-Inverted-Color", category: "communication", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#1e88e5" rx="4"/><rect x="3" y="5" width="18" height="14" rx="1" fill="none" stroke="#ffffff" stroke-width="2"/><path d="M3 15a4 4 0 0 1 4 4" fill="none" stroke="#ffffff" stroke-width="2"/>' },

// 128. Castle-Block-Color
    { id: 374, name: "Castle-Block-Color", category: "communication", svgContent: '<defs><linearGradient id="blkGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffab91"/><stop offset="100%" stop-color="#d84315"/></linearGradient></defs><g><rect x="6" y="8" width="12" height="12" rx="1" fill="url(#blkGrad)" stroke="#bf360c" stroke-width="1.5"/><path d="M7 8V5h2v3M15 8V5h2v3" stroke="#bf360c" stroke-width="2" stroke-linecap="round"/></g>' },
    { id: 375, name: "Castle-Block-Thin-Color", category: "communication", svgContent: '<rect x="7" y="9" width="10" height="10" rx="1" fill="none" stroke="#bf360c" stroke-width="0.75"/>' },
    { id: 376, name: "Castle-Block-Inverted-Color", category: "communication", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#bf360c" rx="4"/><rect x="7" y="9" width="10" height="10" rx="1" fill="#ffffff"/>' },

// 129. Chart-Bar
    { id: 377, name: "Chart-Bar", category: "finance", svgContent: '<path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/><path d="M2 20h20"/>' },
    { id: 378, name: "Chart-BarThin", category: "finance", svgContent: '<g fill="none" stroke-width="0.5"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/><path d="M2 20h20"/></g>' },
    { id: 379, name: "Chart-BarInverted", category: "finance", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/><path d="M2 20h20"/></g>' },

// 130. Chart-Pie
    { id: 380, name: "Chart-Pie", category: "finance", svgContent: '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>' },
    { id: 381, name: "Chart-PieThin", category: "finance", svgContent: '<g fill="none" stroke-width="0.5"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></g>' },
    { id: 382, name: "Chart-PieInverted", category: "finance", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></g>' },

// 131. ChatGPT
    { id: 383, name: "ChatGPT", category: "ai", svgContent: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 7c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" fill="currentColor" opacity="0.9"/>' },
    { id: 384, name: "ChatGPTThin", category: "ai", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 7c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/></g>' },
    { id: 385, name: "ChatGPTInverted", category: "ai", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path stroke="var(--ax-bg-inverse, white)" d="M12 7c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 132. Check
    { id: 386, name: "Check", category: "ui", svgContent: '<polyline points="20 6 9 17 4 12"/>' },
    { id: 387, name: "CheckThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="20 6 9 17 4 12"/></g>' },
    { id: 388, name: "CheckInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polyline points="20 6 9 17 4 12"/></g>' },

// 133. Check-Circle
    { id: 389, name: "Check-Circle", category: "ui", svgContent: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>' },
    { id: 390, name: "Check-CircleThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></g>' },
    { id: 391, name: "Check-CircleInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></g>' },

// 134. Check-Circle-Color
    { id: 392, name: "Check-Circle-Color", category: "ui", svgContent: '<defs><linearGradient id="chkCirc" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#81c784"/><stop offset="100%" stop-color="#2e7d32"/></linearGradient></defs><g><circle cx="12" cy="12" r="10" fill="url(#chkCirc)"/><polyline points="16 9 11 14 8 11" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></g>' },

// 135. Check-Color
    { id: 393, name: "Check-Color", category: "ui", svgContent: '<defs><linearGradient id="chkGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#81c784"/><stop offset="100%" stop-color="#2e7d32"/></linearGradient></defs><polyline points="20 6 9 17 4 12" fill="none" stroke="url(#chkGrad)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>' },

// 136. Check-Square
    { id: 394, name: "Check-Square", category: "ui", svgContent: '<polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>' },
    { id: 395, name: "Check-SquareThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></g>' },
    { id: 396, name: "Check-SquareInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></g>' },

// 137. CheckBold
    { id: 397, name: "CheckBold", category: "ui", svgContent: '<polyline points="20 6 9 17 4 12"/>' },
    { id: 398, name: "CheckBoldThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="20 6 9 17 4 12"/></g>' },
    { id: 399, name: "CheckBoldInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><polyline points="20 6 9 17 4 12" />' },

// 138. CheckboxOff
    { id: 400, name: "CheckboxOff", category: "ui", svgContent: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>' },
    { id: 401, name: "CheckboxOffThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/></g>' },
    { id: 402, name: "CheckboxOffInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="4" y="4" width="16" height="16" rx="2" ry="2" stroke="var(--ax-bg-inverse, white)" />' },

// 139. CheckboxOn
    { id: 403, name: "CheckboxOn", category: "ui", svgContent: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><polyline points="8 12 11 15 16 8"/>' },
    { id: 404, name: "CheckboxOnThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><polyline points="8 12 11 15 16 8"/></g>' },
    { id: 405, name: "CheckboxOnInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="4" y="4" width="16" height="16" rx="2" ry="2"/><polyline points="8 12 11 15 16 8" stroke="var(--ax-bg-inverse, white)" />' },

// 140. CheckCircle
    { id: 406, name: "CheckCircle", category: "ui", svgContent: '<circle cx="12" cy="12" r="10"/><polyline points="16 8 10 14 8 12"/>' },
    { id: 407, name: "CheckCircleThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><polyline points="16 8 10 14 8 12"/></g>' },
    { id: 408, name: "CheckCircleInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="10"/><polyline points="16 8 10 14 8 12"/>' },

// 141. CheckCircleSolid
    { id: 409, name: "CheckCircleSolid", category: "ui", svgContent: '<circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.9"/><polyline points="16 8 10 14 8 12" stroke="white"/>' },
    { id: 410, name: "CheckCircleSolidThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><polyline points="16 8 10 14 8 12" stroke="white"/></g>' },
    { id: 411, name: "CheckCircleSolidInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="10" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><polyline points="16 8 10 14 8 12" stroke="var(--ax-bg-inverse, white)" />' },

// 142. CheckDouble
    { id: 412, name: "CheckDouble", category: "ui", svgContent: '<polyline points="2 12 8 18 14 12M8 12 14 18 20 12"/>' },
    { id: 413, name: "CheckDoubleThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="2 12 8 18 14 12M8 12 14 18 20 12"/></g>' },
    { id: 414, name: "CheckDoubleInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><polyline points="2 12 8 18 14 12M8 12 14 18 20 12" />' },

// 143. Chef-Hat
    { id: 415, name: "Chef-Hat", category: "food", svgContent: '<path d="M6 13.85A4 4 0 0 1 7.4 6a8 8 0 0 1 13.4 4a4 4 0 0 1 0 7.85"/><path d="M6 14h12a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3z"/>' },
    { id: 416, name: "Chef-HatThin", category: "food", svgContent: '<g fill="none" stroke-width="0.5"><path d="M6 13.85A4 4 0 0 1 7.4 6a8 8 0 0 1 13.4 4a4 4 0 0 1 0 7.85"/><path d="M6 14h12a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3z"/></g>' },
    { id: 417, name: "Chef-HatInverted", category: "food", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M6 13.85A4 4 0 0 1 7.4 6a8 8 0 0 1 13.4 4a4 4 0 0 1 0 7.85"/><path d="M6 14h12a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3z"/></g>' },

// 144. Chess-Piece-Color
    { id: 418, name: "Chess-Piece-Color", category: "general", svgContent: '<defs><linearGradient id="chsGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#cfd8dc"/></linearGradient></defs><g><path d="M12 3a3 3 0 0 0-3 3c0 2 2 3 2 5h4c0-2 2-3 2-5a3 3 0 0 0-3-3z" fill="url(#chsGrad)" stroke="#455a64" stroke-width="1.5"/><rect x="7" y="16" width="10" height="4" fill="#455a64"/></g>' },
    { id: 419, name: "Chess-Piece-Thin-Color", category: "general", svgContent: '<path d="M12 4a2 2 0 0 0-2 2c0 1 1 2 1 4h4c0-2 1-3 1-4a2 2 0 0 0-2-2z" fill="none" stroke="#455a64" stroke-width="0.75"/>' },
    { id: 420, name: "Chess-Piece-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#455a64" rx="4"/><path d="M12 4a2 2 0 0 0-2 2c0 1 1 2 1 4h4c0-2 1-3 1-4a2 2 0 0 0-2-2z" fill="#ffffff"/>' },

// 145. Chevron-Down
    { id: 421, name: "Chevron-Down", category: "ui", svgContent: '<polyline points="6 9 12 15 18 9"/>' },
    { id: 422, name: "Chevron-DownThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="6 9 12 15 18 9"/></g>' },
    { id: 423, name: "Chevron-DownInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polyline points="6 9 12 15 18 9"/></g>' },

// 146. Chevron-Left
    { id: 424, name: "Chevron-Left", category: "ui", svgContent: '<polyline points="15 18 9 12 15 6"/>' },
    { id: 425, name: "Chevron-LeftThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="15 18 9 12 15 6"/></g>' },
    { id: 426, name: "Chevron-LeftInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polyline points="15 18 9 12 15 6"/></g>' },

// 147. Chevron-Right
    { id: 427, name: "Chevron-Right", category: "ui", svgContent: '<polyline points="9 18 15 12 9 6"/>' },
    { id: 428, name: "Chevron-RightThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="9 18 15 12 9 6"/></g>' },
    { id: 429, name: "Chevron-RightInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polyline points="9 18 15 12 9 6"/></g>' },

// 148. Chevron-Up
    { id: 430, name: "Chevron-Up", category: "ui", svgContent: '<polyline points="18 15 12 9 6 15"/>' },
    { id: 431, name: "Chevron-UpThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="18 15 12 9 6 15"/></g>' },
    { id: 432, name: "Chevron-UpInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polyline points="18 15 12 9 6 15"/></g>' },

// 149. Chip
    { id: 433, name: "Chip", category: "ai", svgContent: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM6 9H3M6 15H3M18 9h3M18 15h3M9 6V3M15 6V3M9 21v-3M15 21v-3"/>' },
    { id: 434, name: "ChipThin", category: "ai", svgContent: '<g fill="none" stroke-width="0.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM6 9H3M6 15H3M18 9h3M18 15h3M9 6V3M15 6V3M9 21v-3M15 21v-3"/></g>' },
    { id: 435, name: "ChipInverted", category: "ai", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="3" y="3" width="18" height="18" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="3"/><path stroke="var(--ax-bg-inverse, white)" d="M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM6 9H3M6 15H3M18 9h3M18 15h3M9 6V3M15 6V3M9 21v-3M15 21v-3"/>' },

// 150. Chrome-Color
    { id: 436, name: "Chrome-Color", category: "brands", svgContent: '<defs><linearGradient id="chRed" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#ea4335"/><stop offset="100%" stop-color="#c5221f"/></linearGradient><linearGradient id="chGreen" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#34a853"/><stop offset="100%" stop-color="#137333"/></linearGradient><linearGradient id="chYellow" x1="100%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fabc05"/><stop offset="100%" stop-color="#e37400"/></linearGradient></defs><g><circle cx="12" cy="12" r="10" fill="url(#chYellow)"/><path d="M12 2a10 10 0 0 1 8.66 5H12z" fill="url(#chRed)"/><path d="M12 22a10 10 0 0 1-8.66-15L7.5 13z" fill="url(#chGreen)"/><circle cx="12" cy="12" r="4" fill="#ffffff"/><circle cx="12" cy="12" r="3" fill="#1a73e8"/></g>' },
    { id: 437, name: "Chrome-Thin-Color", category: "brands", svgContent: '<circle cx="12" cy="12" r="10" fill="none" stroke="#1a73e8" stroke-width="0.5"/><circle cx="12" cy="12" r="3" fill="none" stroke="#1a73e8" stroke-width="0.5"/>' },
    { id: 438, name: "Chrome-Inverted-Color", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#1a73e8" rx="4"/><circle cx="12" cy="12" r="8" fill="#ffffff"/><circle cx="12" cy="12" r="4" fill="#1a73e8"/>' },

// 151. Claude
    { id: 439, name: "Claude", category: "ai", svgContent: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="7" cy="9" r="1.5" fill="currentColor" opacity="0.9"/><circle cx="17" cy="9" r="1.5" fill="currentColor" opacity="0.9"/><path d="M7 15c2 1 6 1 8 0"/>' },
    { id: 440, name: "ClaudeThin", category: "ai", svgContent: '<g fill="none" stroke-width="0.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="7" cy="9" r="1.5"/><circle cx="17" cy="9" r="1.5"/><path d="M7 15c2 1 6 1 8 0"/></g>' },
    { id: 441, name: "ClaudeInverted", category: "ai", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="3" y="3" width="18" height="18" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="7" cy="9" r="1.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="17" cy="9" r="1.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><path stroke="var(--ax-bg-inverse, white)" d="M7 15c2 1 6 1 8 0"/>' },

// 152. Clipboard
    { id: 442, name: "Clipboard", category: "ui", svgContent: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/>' },
    { id: 443, name: "ClipboardThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></g>' },
    { id: 444, name: "ClipboardInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></g>' },

// 153. Clipboard-Color
    { id: 445, name: "Clipboard-Color", category: "general", svgContent: '<defs><linearGradient id="clipGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#b0bec5"/><stop offset="100%" stop-color="#607d8b"/></linearGradient></defs><g><rect x="4" y="4" width="16" height="16" rx="2" fill="#fff8e1" stroke="url(#clipGrad)" stroke-width="1.5"/><path d="M16 4h-2V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1H8a2 2 0 0 0-2 2v1h12V6a2 2 0 0 0-2-2z" fill="#ffb300"/><line x1="9" y1="10" x2="15" y2="10" stroke="#b0bec5" stroke-width="2" stroke-linecap="round"/></g>' },
    { id: 446, name: "Clipboard-Thin-Color", category: "general", svgContent: '<rect x="5" y="4" width="14" height="16" rx="2" fill="none" stroke="#607d8b" stroke-width="0.75"/>' },
    { id: 447, name: "Clipboard-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#607d8b" rx="4"/><rect x="6" y="5" width="12" height="14" rx="1" fill="#ffffff"/><path d="M14 5h-4V3h4v2z" fill="#ffb300"/>' },

// 154. Clock
    { id: 448, name: "Clock", category: "objects", svgContent: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>' },
    { id: 449, name: "ClockThin", category: "objects", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></g>' },
    { id: 450, name: "ClockInverted", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></g>' },

// 155. Cloud
    { id: 451, name: "Cloud", category: "development", svgContent: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>' },
    { id: 452, name: "CloudThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></g>' },
    { id: 453, name: "CloudInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></g>' },

// 156. Cloud-Color
    { id: 454, name: "Cloud-Color", category: "iot", svgContent: '<defs><linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3a7bd5"/><stop offset="100%" stop-color="#3a6073"/></linearGradient><filter id="cloudShadow" x="-10%" y="-10%" width="120%" height="120%"><feDropShadow dx="0" dy="1" stdDeviation="1" flood-opacity="0.15"/></filter></defs><g filter="url(#cloudShadow)"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" fill="url(#cloudGrad)"/><path d="M15.5 10.5c.3 0 .5.2.5.5a3.5 3.5 0 0 1-3.5 3.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5a2.5 2.5 0 0 0 2.5-2.5c0-.3.2-.5.5-.5z" fill="#ffffff" opacity="0.2"/></g>' },
    { id: 455, name: "Cloud-Thin-Color", category: "iot", svgContent: '<path d="M18 10A5.5 5.5 0 0 0 7.5 11a4.5 4.5 0 0 0-2.5 8.5h13a5 5 0 0 0 0-9.5z" fill="none" stroke="#b0bec5" stroke-width="0.75"/>' },
    { id: 456, name: "Cloud-Inverted-Color", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#b0bec5" rx="4"/><path d="M17.5 10A4.5 4.5 0 0 0 9 11a3.5 3.5 0 0 0-2 6.5h10.5a4 4 0 0 0 0-7.5z" fill="#ffffff"/>' },

// 157. Cloud-Drizzle
    { id: 457, name: "Cloud-Drizzle", category: "development", svgContent: '<line x1="8" y1="19" x2="8" y2="21"/><line x1="8" y1="13" x2="8" y2="15"/><line x1="16" y1="19" x2="16" y2="21"/><line x1="16" y1="13" x2="16" y2="15"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="12" y1="15" x2="12" y2="17"/><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/>' },
    { id: 458, name: "Cloud-DrizzleThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><line x1="8" y1="19" x2="8" y2="21"/><line x1="8" y1="13" x2="8" y2="15"/><line x1="16" y1="19" x2="16" y2="21"/><line x1="16" y1="13" x2="16" y2="15"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="12" y1="15" x2="12" y2="17"/><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/></g>' },
    { id: 459, name: "Cloud-DrizzleInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><line x1="8" y1="19" x2="8" y2="21"/><line x1="8" y1="13" x2="8" y2="15"/><line x1="16" y1="19" x2="16" y2="21"/><line x1="16" y1="13" x2="16" y2="15"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="12" y1="15" x2="12" y2="17"/><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/></g>' },

// 158. Cloud-Fog
    { id: 460, name: "Cloud-Fog", category: "development", svgContent: '<path d="M4 14.89A5 5 0 1 1 9 5h7.5a4 4 0 0 1 0 8H4"/><line x1="4" y1="18" x2="20" y2="18"/><line x1="8" y1="22" x2="16" y2="22"/>' },
    { id: 461, name: "Cloud-FogThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><path d="M4 14.89A5 5 0 1 1 9 5h7.5a4 4 0 0 1 0 8H4"/><line x1="4" y1="18" x2="20" y2="18"/><line x1="8" y1="22" x2="16" y2="22"/></g>' },
    { id: 462, name: "Cloud-FogInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M4 14.89A5 5 0 1 1 9 5h7.5a4 4 0 0 1 0 8H4"/><line x1="4" y1="18" x2="20" y2="18"/><line x1="8" y1="22" x2="16" y2="22"/></g>' },

// 159. Cloud-Hail
    { id: 463, name: "Cloud-Hail", category: "development", svgContent: '<path d="M16 13h.01M12 13h.01M8 13h.01M16 17h.01M12 17h.01M8 17h.01M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/>' },
    { id: 464, name: "Cloud-HailThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><path d="M16 13h.01M12 13h.01M8 13h.01M16 17h.01M12 17h.01M8 17h.01M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/></g>' },
    { id: 465, name: "Cloud-HailInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M16 13h.01M12 13h.01M8 13h.01M16 17h.01M12 17h.01M8 17h.01M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/></g>' },

// 160. Cloud-Lightning
    { id: 466, name: "Cloud-Lightning", category: "development", svgContent: '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"/><polyline points="13 11 9 17 15 17 11 23"/>' },
    { id: 467, name: "Cloud-LightningThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"/><polyline points="13 11 9 17 15 17 11 23"/></g>' },
    { id: 468, name: "Cloud-LightningInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"/><polyline points="13 11 9 17 15 17 11 23"/></g>' },

// 161. Cloud-Lightning-Color
    { id: 469, name: "Cloud-Lightning-Color", category: "iot", svgContent: '<defs><linearGradient id="cloudGradL" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#90a4ae"/><stop offset="100%" stop-color="#37474f"/></linearGradient></defs><g><path d="M19 11a4.5 4.5 0 0 0-8.5-1.5A6 6 0 0 0 3 14a4 4 0 0 0 4 4h3" fill="url(#cloudGradL)"/><polygon points="13 12 9 18 12 18 10 23 16 16 13 16" fill="#ffeb3b"/></g>' },
    { id: 470, name: "Cloud-Lightning-Thin-Color", category: "iot", svgContent: '<g fill="none" stroke="#37474f" stroke-width="0.75"><path d="M19 11a4.5 4.5 0 0 0-8.5-1.5A6 6 0 0 0 3 14a4 4 0 0 0 4 4h3"/><polygon points="13 12 9 18 12 18 10 23 16 16 13 16" stroke="#ffc107" stroke-width="0.5"/></g>' },
    { id: 471, name: "Cloud-Lightning-Inverted-Color", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#37474f" rx="4"/><path d="M18 10.5a3.5 3.5 0 0 0-6.6-1.2A4.5 4.5 0 0 0 3 13a3 3 0 0 0 3 3h2" fill="none" stroke="#ffffff" stroke-width="1.5"/><polygon points="14 11 10 16 12 16 10 21 16 14 13 14" fill="#ffeb3b"/>' },

// 162. Cloud-Rain
    { id: 472, name: "Cloud-Rain", category: "development", svgContent: '<path d="M16 13v8M8 13v8M12 15v8M2 14.82A5 5 0 1 1 7 5h.09A7 7 0 0 1 22 12a7 7 0 0 1-7 7H2"/>' },
    { id: 473, name: "Cloud-RainThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><path d="M16 13v8M8 13v8M12 15v8M2 14.82A5 5 0 1 1 7 5h.09A7 7 0 0 1 22 12a7 7 0 0 1-7 7H2"/></g>' },
    { id: 474, name: "Cloud-RainInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M16 13v8M8 13v8M12 15v8M2 14.82A5 5 0 1 1 7 5h.09A7 7 0 0 1 22 12a7 7 0 0 1-7 7H2"/></g>' },

// 163. Cloud-Rain-Color
    { id: 475, name: "Cloud-Rain-Color", category: "ai", svgContent: '<defs><linearGradient id="cldRain" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#cfd8dc"/><stop offset="100%" stop-color="#90a4ae"/></linearGradient></defs><g><path d="M19 11a4.5 4.5 0 0 0-8.5-1.5A6 6 0 0 0 3 14a4 4 0 0 0 4 4h10a4.5 4.5 0 0 0 2-8.5z" fill="url(#cldRain)"/><line x1="8" y1="20" x2="6" y2="23" stroke="#29b6f6" stroke-width="2" stroke-linecap="round"/><line x1="12" y1="20" x2="10" y2="23" stroke="#29b6f6" stroke-width="2" stroke-linecap="round"/><line x1="16" y1="20" x2="14" y2="23" stroke="#29b6f6" stroke-width="2" stroke-linecap="round"/></g>' },
    { id: 476, name: "Cloud-Rain-Thin-Color", category: "ai", svgContent: '<path d="M19 11a4.5 4.5 0 0 0-8.5-1.5A6 6 0 0 0 3 14a4 4 0 0 0 4 4h10" fill="none" stroke="#90a4ae" stroke-width="0.75"/><line x1="10" y1="20" x2="8" y2="23" stroke="#29b6f6" stroke-width="0.5"/>' },
    { id: 477, name: "Cloud-Rain-Inverted-Color", category: "ai", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#29b6f6" rx="4"/><path d="M17 12a3.5 3.5 0 0 0-6.6-1.2A4.5 4.5 0 0 0 3 14a3 3 0 0 0 3 3h10a3.5 3.5 0 0 0 1-6.8z" fill="#ffffff"/>' },

// 164. Cloud-Snow
    { id: 478, name: "Cloud-Snow", category: "development", svgContent: '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="12" y1="16" x2="12.01" y2="16"/><line x1="16" y1="16" x2="16.01" y2="16"/><line x1="10" y1="20" x2="10.01" y2="20"/><line x1="14" y1="20" x2="14.01" y2="20"/>' },
    { id: 479, name: "Cloud-SnowThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="12" y1="16" x2="12.01" y2="16"/><line x1="16" y1="16" x2="16.01" y2="16"/><line x1="10" y1="20" x2="10.01" y2="20"/><line x1="14" y1="20" x2="14.01" y2="20"/></g>' },
    { id: 480, name: "Cloud-SnowInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="12" y1="16" x2="12.01" y2="16"/><line x1="16" y1="16" x2="16.01" y2="16"/><line x1="10" y1="20" x2="10.01" y2="20"/><line x1="14" y1="20" x2="14.01" y2="20"/></g>' },

// 165. Cloud-Snow-Color
    { id: 481, name: "Cloud-Snow-Color", category: "iot", svgContent: '<defs><linearGradient id="cldSnow" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#e1f5fe"/><stop offset="100%" stop-color="#b3e5fc"/></linearGradient></defs><g><path d="M19 11a4.5 4.5 0 0 0-8.5-1.5A6 6 0 0 0 3 14a4 4 0 0 0 4 4h10a4.5 4.5 0 0 0 2-8.5z" fill="url(#cldSnow)"/><circle cx="8" cy="21" r="1" fill="#ffffff"/><circle cx="12" cy="21" r="1" fill="#ffffff"/><circle cx="16" cy="21" r="1" fill="#ffffff"/></g>' },
    { id: 482, name: "Cloud-Snow-Thin-Color", category: "iot", svgContent: '<path d="M19 11a4.5 4.5 0 0 0-8.5-1.5A6 6 0 0 0 3 14a4 4 0 0 0 4 4h10" fill="none" stroke="#b3e5fc" stroke-width="0.75"/>' },
    { id: 483, name: "Cloud-Snow-Inverted-Color", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#90caf9" rx="4"/><path d="M17 12a3.5 3.5 0 0 0-6.6-1.2A4.5 4.5 0 0 0 3 14a3 3 0 0 0 3 3h10a3.5 3.5 0 0 0 1-6.8z" fill="#ffffff"/>' },

// 166. Cloud-Sun
    { id: 484, name: "Cloud-Sun", category: "development", svgContent: '<path d="M12 2v2"/><path d="M12 22v-2"/><path d="M4.9 4.9l1.4 1.4"/><path d="M17.7 17.7l1.4 1.4"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M6.3 17.7l-1.4 1.4"/><path d="M17.7 6.3l-1.4-1.4"/><path d="M16 13a4 4 0 0 0-4-4 4 4 0 0 0-3.1 1.5"/><path d="M16 13a4 4 0 0 1 0 8H6a5 5 0 0 1-1.8-9.6"/>' },
    { id: 485, name: "Cloud-SunThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 2v2"/><path d="M12 22v-2"/><path d="M4.9 4.9l1.4 1.4"/><path d="M17.7 17.7l1.4 1.4"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M6.3 17.7l-1.4 1.4"/><path d="M17.7 6.3l-1.4-1.4"/><path d="M16 13a4 4 0 0 0-4-4 4 4 0 0 0-3.1 1.5"/><path d="M16 13a4 4 0 0 1 0 8H6a5 5 0 0 1-1.8-9.6"/></g>' },
    { id: 486, name: "Cloud-SunInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M12 2v2"/><path d="M12 22v-2"/><path d="M4.9 4.9l1.4 1.4"/><path d="M17.7 17.7l1.4 1.4"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M6.3 17.7l-1.4 1.4"/><path d="M17.7 6.3l-1.4-1.4"/><path d="M16 13a4 4 0 0 0-4-4 4 4 0 0 0-3.1 1.5"/><path d="M16 13a4 4 0 0 1 0 8H6a5 5 0 0 1-1.8-9.6"/></g>' },

// 167. Cloud3
    { id: 487, name: "Cloud3", category: "development", svgContent: '<path d="M20 17a5 5 0 0 0-8-4 4 4 0 0 0-4.5 7 5 5 0 0 0 10 2z"/>' },
    { id: 488, name: "Cloud3Thin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><path d="M20 17a5 5 0 0 0-8-4 4 4 0 0 0-4.5 7 5 5 0 0 0 10 2z"/></g>' },
    { id: 489, name: "Cloud3Inverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M20 17a5 5 0 0 0-8-4 4 4 0 0 0-4.5 7 5 5 0 0 0 10 2z"/>' },

// 168. CloudOff
    { id: 490, name: "CloudOff", category: "development", svgContent: '<path d="M17 16.5V13a4 4 0 0 0-4-4 4 4 0 0 0-3.5 2M2 2l20 20M5.64 5.64A8 8 0 0 1 17 12"/>' },
    { id: 491, name: "CloudOffThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><path d="M17 16.5V13a4 4 0 0 0-4-4 4 4 0 0 0-3.5 2M2 2l20 20M5.64 5.64A8 8 0 0 1 17 12"/></g>' },
    { id: 492, name: "CloudOffInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M17 16.5V13a4 4 0 0 0-4-4 4 4 0 0 0-3.5 2M2 2l20 20M5.64 5.64A8 8 0 0 1 17 12"/>' },

// 169. Cloudy
    { id: 493, name: "Cloudy", category: "development", svgContent: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/><path d="M12 2v2"/><path d="M12 22v-2"/><path d="M4.9 4.9l1.4 1.4"/><path d="M17.7 17.7l1.4 1.4"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M6.3 17.7l-1.4 1.4"/><path d="M17.7 6.3l-1.4-1.4"/>' },
    { id: 494, name: "CloudyThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/><path d="M12 2v2"/><path d="M12 22v-2"/><path d="M4.9 4.9l1.4 1.4"/><path d="M17.7 17.7l1.4 1.4"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M6.3 17.7l-1.4 1.4"/><path d="M17.7 6.3l-1.4-1.4"/></g>' },
    { id: 495, name: "CloudyInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/><path d="M12 2v2"/><path d="M12 22v-2"/><path d="M4.9 4.9l1.4 1.4"/><path d="M17.7 17.7l1.4 1.4"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M6.3 17.7l-1.4 1.4"/><path d="M17.7 6.3l-1.4-1.4"/></g>' },

// 170. Cocktail
    { id: 496, name: "Cocktail", category: "general", svgContent: '<path d="M4 2L20 2"/><path d="M12 2l4 19"/><path d="M12 2l-4 19"/><path d="M10 2l2 19M14 2l-2 19"/>' },
    { id: 497, name: "CocktailThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M4 2L20 2"/><path d="M12 2l4 19"/><path d="M12 2l-4 19"/><path d="M10 2l2 19M14 2l-2 19"/></g>' },
    { id: 498, name: "CocktailInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M4 2L20 2"/><path d="M12 2l4 19"/><path d="M12 2l-4 19"/><path d="M10 2l2 19M14 2l-2 19"/></g>' },

// 171. Code
    { id: 499, name: "Code", category: "development", svgContent: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>' },
    { id: 500, name: "CodeThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></g>' },
    { id: 501, name: "CodeInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></g>' },

// 172. Code-Color
    { id: 502, name: "Code-Color", category: "development", svgContent: '<defs><linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#00e676"/><stop offset="100%" stop-color="#00b0ff"/></linearGradient></defs><g fill="none" stroke="url(#codeGrad)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></g>' },
    { id: 503, name: "Code-Thin-Color", category: "development", svgContent: '<polyline points="16 18 22 12 16 6" fill="none" stroke="#00b0ff" stroke-width="0.75"/>' },
    { id: 504, name: "Code-Inverted-Color", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#212121" rx="4"/><g fill="none" stroke="#00e676" stroke-width="2"><polyline points="15 17 20 12 15 7"/><polyline points="9 7 4 12 9 17"/></g>' },

// 173. Code-Square-Color
    { id: 505, name: "Code-Square-Color", category: "development", svgContent: '<defs><linearGradient id="codeSqGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#7e57c2"/><stop offset="100%" stop-color="#4527a0"/></linearGradient></defs><g><rect x="3" y="3" width="18" height="18" rx="3" fill="url(#codeSqGrad)"/><polyline points="8 10 6 12 8 14" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="16 10 18 12 16 14" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="13" y1="9" x2="11" y2="15" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/></g>' },
    { id: 506, name: "Code-Square-Thin-Color", category: "development", svgContent: '<rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="#4527a0" stroke-width="0.75"/>' },
    { id: 507, name: "Code-Square-Inverted-Color", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#4527a0" rx="4"/><rect x="4" y="4" width="16" height="16" rx="2" fill="#ffffff"/><path d="M8 10l-2 2 2 2M16 10l2 2-2 2" fill="none" stroke="#4527a0" stroke-width="1.5"/>' },

// 174. Coffee
    { id: 508, name: "Coffee", category: "food", svgContent: '<path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>' },
    { id: 509, name: "CoffeeThin", category: "food", svgContent: '<g fill="none" stroke-width="0.5"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></g>' },
    { id: 510, name: "CoffeeInverted", category: "food", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></g>' },

// 175. Coffee-Color
    { id: 511, name: "Coffee-Color", category: "food", svgContent: '<defs><linearGradient id="cupGradC" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#4e342e"/><stop offset="100%" stop-color="#3e2723"/></linearGradient></defs><g><path d="M4 9h13v5c0 3.3-2.7 6-6 6H10c-3.3 0-6-2.7-6-6V9z" fill="url(#cupGradC)"/><path d="M17 11h2a2 2 0 0 1 0 4h-2v-4z" fill="none" stroke="#4e342e" stroke-width="2"/><path d="M7 2h1v3H7zm4 0h1v3h-1zm4 0h1v3h-1z" fill="#cfd8dc" opacity="0.6"/><line x1="2" y1="22" x2="20" y2="22" stroke="#d7ccc8" stroke-width="2" stroke-linecap="round"/></g>' },
    { id: 512, name: "Coffee-Thin-Color", category: "food", svgContent: '<path d="M4 9h12v5c0 3-2.5 5.5-5.5 5.5S5 17 5 14V9z" fill="none" stroke="#4e342e" stroke-width="0.75"/>' },
    { id: 513, name: "Coffee-Inverted-Color", category: "food", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#4e342e" rx="4"/><path d="M5 10h11v4c0 2.5-2 4.5-4.5 4.5S7 16.5 7 14v-4z" fill="#ffffff"/><path d="M16 12h2a1.5 1.5 0 0 1 0 3h-2v-3z" fill="#ffffff"/>' },

// 176. Cog
    { id: 514, name: "Cog", category: "general", svgContent: '<circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/>' },
    { id: 515, name: "CogThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/></g>' },
    { id: 516, name: "CogInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="3"/><path stroke="var(--ax-bg-inverse, white)" d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/>' },

// 177. Cog2
    { id: 517, name: "Cog2", category: "general", svgContent: '<circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.9"/><path d="M12.5 2.5L11 8.5M12.5 21.5L11 15.5M21.5 12.5L15.5 13M2.5 12.5L8.5 13M19.07 4.93L14.65 9.35M9.35 14.65L4.93 19.07M19.07 19.07L14.65 14.65M9.35 9.35L4.93 4.93"/>' },
    { id: 518, name: "Cog2Thin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="1.5"/><path d="M12.5 2.5L11 8.5M12.5 21.5L11 15.5M21.5 12.5L15.5 13M2.5 12.5L8.5 13M19.07 4.93L14.65 9.35M9.35 14.65L4.93 19.07M19.07 19.07L14.65 14.65M9.35 9.35L4.93 4.93"/></g>' },
    { id: 519, name: "Cog2Inverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="1.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><path stroke="var(--ax-bg-inverse, white)" d="M12.5 2.5L11 8.5M12.5 21.5L11 15.5M21.5 12.5L15.5 13M2.5 12.5L8.5 13M19.07 4.93L14.65 9.35M9.35 14.65L4.93 19.07M19.07 19.07L14.65 14.65M9.35 9.35L4.93 4.93"/>' },

// 178. Collapse
    { id: 520, name: "Collapse", category: "general", svgContent: '<polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" y1="10" x2="4" y2="20"/><line x1="10" y1="14" x2="20" y2="4"/>' },
    { id: 521, name: "CollapseThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" y1="10" x2="4" y2="20"/><line x1="10" y1="14" x2="20" y2="4"/></g>' },
    { id: 522, name: "CollapseInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line stroke="var(--ax-bg-inverse, white)" x1="14" y1="10" x2="4" y2="20"/><line stroke="var(--ax-bg-inverse, white)" x1="10" y1="14" x2="20" y2="4"/>' },

// 179. CollapseAlt
    { id: 523, name: "CollapseAlt", category: "general", svgContent: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="8" y1="12" x2="16" y2="12"/>' },
    { id: 524, name: "CollapseAltThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="8" y1="12" x2="16" y2="12"/></g>' },
    { id: 525, name: "CollapseAltInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="3" y="3" width="18" height="18" rx="2" ry="2"/><line stroke="var(--ax-bg-inverse, white)" x1="8" y1="12" x2="16" y2="12"/>' },

// 180. Columns
    { id: 526, name: "Columns", category: "general", svgContent: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="3" x2="12" y2="21"/>' },
    { id: 527, name: "ColumnsThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="3" x2="12" y2="21"/></g>' },
    { id: 528, name: "ColumnsInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="3" x2="12" y2="21"/></g>' },

// 181. Columns-Color
    { id: 529, name: "Columns-Color", category: "development", svgContent: '<defs><linearGradient id="colGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#b0bec5"/><stop offset="100%" stop-color="#78909c"/></linearGradient></defs><g><rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="url(#colGrad)" stroke-width="2"/><rect x="5" y="5" width="6" height="14" fill="#78909c" opacity="0.25"/><rect x="13" y="5" width="6" height="14" fill="#78909c" opacity="0.25"/></g>' },
    { id: 530, name: "Columns-Thin-Color", category: "development", svgContent: '<rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="#78909c" stroke-width="0.75"/><line x1="12" y1="3" x2="12" y2="21" stroke="#78909c" stroke-width="0.5"/>' },
    { id: 531, name: "Columns-Inverted-Color", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#78909c" rx="4"/><rect x="4" y="4" width="7" height="16" rx="1" fill="#ffffff"/><rect x="13" y="4" width="7" height="16" rx="1" fill="#ffffff"/>' },

// 182. Command
    { id: 532, name: "Command", category: "ui", svgContent: '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 6 0v-3a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v3a3 3 0 0 0 6 0V6a3 3 0 0 0-6 0v3a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z"/>' },
    { id: 533, name: "CommandThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 6 0v-3a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v3a3 3 0 0 0 6 0V6a3 3 0 0 0-6 0v3a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z"/></g>' },
    { id: 534, name: "CommandInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 6 0v-3a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v3a3 3 0 0 0 6 0V6a3 3 0 0 0-6 0v3a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z"/></g>' },

// 183. Compass
    { id: 535, name: "Compass", category: "objects", svgContent: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>' },
    { id: 536, name: "CompassThin", category: "objects", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></g>' },
    { id: 537, name: "CompassInverted", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></g>' },

// 184. Compass-Color
    { id: 538, name: "Compass-Color", category: "iot", svgContent: '<defs><linearGradient id="compRim" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#cfd8dc"/><stop offset="100%" stop-color="#78909c"/></linearGradient></defs><g><circle cx="12" cy="12" r="10" fill="#f5f7fa" stroke="url(#compRim)" stroke-width="2"/><polygon points="12 12 14 7 17 7 12 12" fill="#ff5252"/><polygon points="12 12 10 17 7 17 12 12" fill="#cfd8dc"/><circle cx="12" cy="12" r="1.5" fill="#37474f"/></g>' },
    { id: 539, name: "Compass-Thin-Color", category: "iot", svgContent: '<circle cx="12" cy="12" r="10" fill="none" stroke="#78909c" stroke-width="0.75"/><line x1="12" y1="2" x2="12" y2="22" stroke="#78909c" stroke-width="0.25"/><line x1="2" y1="12" x2="22" y2="12" stroke="#78909c" stroke-width="0.25"/>' },
    { id: 540, name: "Compass-Inverted-Color", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#37474f" rx="4"/><circle cx="12" cy="12" r="8" fill="none" stroke="#ffffff" stroke-width="1.5"/><polygon points="12 6 14 12 12 14 10 12" fill="#ff5252"/><polygon points="12 18 10 12 12 10 14 12" fill="#ffffff"/>' },

// 185. Compass-Tool-Color
    { id: 541, name: "Compass-Tool-Color", category: "iot", svgContent: '<defs><linearGradient id="cmptGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#b0bec5"/><stop offset="100%" stop-color="#455a64"/></linearGradient></defs><g><path d="M12 2l-4 18h8l-4-18z" fill="url(#cmptGrad)" stroke="#455a64" stroke-width="1.5"/><circle cx="12" cy="2" r="1.5" fill="#455a64"/></g>' },
    { id: 542, name: "Compass-Tool-Thin-Color", category: "iot", svgContent: '<path d="M12 3l-3 17h6l-3-17z" fill="none" stroke="#455a64" stroke-width="0.75"/>' },
    { id: 543, name: "Compass-Tool-Inverted-Color", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#455a64" rx="4"/><path d="M12 3l-3 17h6l-3-17z" fill="#ffffff"/>' },

// 186. Component-Color
    { id: 544, name: "Component-Color", category: "development", svgContent: '<defs><linearGradient id="compGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#29b6f6"/><stop offset="100%" stop-color="#0288d1"/></linearGradient></defs><g fill="url(#compGrad)" stroke="#0288d1" stroke-width="1.5"><polygon points="12 2 22 7 12 12 2 7"/><polygon points="12 12 22 17 12 22 2 17" opacity="0.6"/><line x1="12" y1="12" x2="12" y2="22" stroke="#ffffff" opacity="0.4"/></g>' },
    { id: 545, name: "Component-Thin-Color", category: "development", svgContent: '<polygon points="12 3 21 7 12 11 3 7" fill="none" stroke="#0288d1" stroke-width="0.75"/>' },
    { id: 546, name: "Component-Inverted-Color", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#0288d1" rx="4"/><polygon points="12 4 20 8 12 12 4 8" fill="#ffffff"/><polygon points="12 12 20 16 12 20 4 16" fill="#ffffff" opacity="0.5"/>' },

// 187. Confetti-Color
    { id: 547, name: "Confetti-Color", category: "general", svgContent: '<g><rect x="4" y="4" width="3" height="3" fill="#ff5252" transform="rotate(20 5.5 5.5)"/><rect x="18" y="5" width="4" height="2" fill="#29b6f6" transform="rotate(-30 20 6)"/><rect x="10" y="18" width="3" height="4" fill="#ffeb3b" transform="rotate(45 11.5 20)"/><circle cx="16" cy="12" r="1.5" fill="#66bb6a"/></g>' },
    { id: 548, name: "Confetti-Thin-Color", category: "general", svgContent: '<rect x="5" y="5" width="2" height="2" fill="none" stroke="#78909c" stroke-width="0.75"/>' },
    { id: 549, name: "Confetti-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#78909c" rx="4"/><rect x="5" y="5" width="2" height="2" fill="#ffffff"/><rect x="15" y="15" width="2" height="2" fill="#ffffff"/>' },

// 188. Contrast
    { id: 550, name: "Contrast", category: "general", svgContent: '<circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 0 0 20 10 10 0 0 0 0-20zm0 2v16a8 8 0 0 1 0-16z"/>' },
    { id: 551, name: "ContrastThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 0 0 20 10 10 0 0 0 0-20zm0 2v16a8 8 0 0 1 0-16z"/></g>' },
    { id: 552, name: "ContrastInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="10"/><path stroke="var(--ax-bg-inverse, white)" d="M12 2a10 10 0 0 0 0 20 10 10 0 0 0 0-20zm0 2v16a8 8 0 0 1 0-16z"/>' },

// 189. Contrast-Color
    { id: 553, name: "Contrast-Color", category: "general", svgContent: '<defs><linearGradient id="cntGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#78909c"/><stop offset="100%" stop-color="#263238"/></linearGradient></defs><g><circle cx="12" cy="12" r="10" fill="none" stroke="url(#cntGrad)" stroke-width="2"/><path d="M12 2a10 10 0 0 1 0 20V2z" fill="url(#cntGrad)"/></g>' },
    { id: 554, name: "Contrast-Thin-Color", category: "general", svgContent: '<circle cx="12" cy="12" r="10" fill="none" stroke="#263238" stroke-width="0.75"/><path d="M12 2v20" stroke="#263238" stroke-width="0.5"/>' },
    { id: 555, name: "Contrast-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#263238" rx="4"/><circle cx="12" cy="12" r="8" fill="#ffffff"/><path d="M12 4a8 8 0 0 1 0 16V4z" fill="#263238"/>' },

// 190. Copy
    { id: 556, name: "Copy", category: "ui", svgContent: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="4" y="4" width="12" height="12" rx="1"/>' },
    { id: 557, name: "CopyThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="4" y="4" width="12" height="12" rx="1"/></g>' },
    { id: 558, name: "CopyInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect fill="var(--ax-bg-inverse, white)" x="4" y="4" width="12" height="12" rx="1"/>' },

// 191. Copy2
    { id: 559, name: "Copy2", category: "ui", svgContent: '<polyline points="20 8 4 8 4 20 20 20 20 8"/><polyline points="4 4 4 8 20 8 20 4"/>' },
    { id: 560, name: "Copy2Thin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="20 8 4 8 4 20 20 20 20 8"/><polyline points="4 4 4 8 20 8 20 4"/></g>' },
    { id: 561, name: "Copy2Inverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><polyline points="20 8 4 8 4 20 20 20 20 8"/><polyline points="4 4 4 8 20 8 20 4"/>' },

// 192. CopyCheck
    { id: 562, name: "CopyCheck", category: "ui", svgContent: '<rect x="9" y="9" width="13" height="13" rx="1"/><rect x="2" y="2" width="13" height="13" rx="1" opacity="0.5"/><polyline points="14 10 16 12 19 9"/>' },
    { id: 563, name: "CopyCheckThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><rect x="9" y="9" width="13" height="13" rx="1"/><rect x="2" y="2" width="13" height="13" rx="1"/><polyline points="14 10 16 12 19 9"/></g>' },
    { id: 564, name: "CopyCheckInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="9" y="9" width="13" height="13" rx="1" stroke="var(--ax-bg-inverse, white)" /><rect fill="var(--ax-bg-inverse, white)" x="2" y="2" width="13" height="13" rx="1" stroke="var(--ax-bg-inverse, white)" opacity="0.5"/><polyline points="14 10 16 12 19 9" />' },

// 193. CopyError
    { id: 565, name: "CopyError", category: "ui", svgContent: '<rect x="9" y="9" width="13" height="13" rx="1"/><rect x="2" y="2" width="13" height="13" rx="1" opacity="0.5"/><line x1="16" y1="9" x2="18" y2="13"/><line x1="18" y1="9" x2="16" y2="13"/>' },
    { id: 566, name: "CopyErrorThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><rect x="9" y="9" width="13" height="13" rx="1"/><rect x="2" y="2" width="13" height="13" rx="1"/><line x1="16" y1="9" x2="18" y2="13"/><line x1="18" y1="9" x2="16" y2="13"/></g>' },
    { id: 567, name: "CopyErrorInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="9" y="9" width="13" height="13" rx="1" stroke="var(--ax-bg-inverse, white)" /><rect fill="var(--ax-bg-inverse, white)" x="2" y="2" width="13" height="13" rx="1" stroke="var(--ax-bg-inverse, white)" opacity="0.5"/><line stroke="var(--ax-bg-inverse, white)" x1="16" y1="9" x2="18" y2="13"/><line stroke="var(--ax-bg-inverse, white)" x1="18" y1="9" x2="16" y2="13"/>' },

// 194. Cpu
    { id: 568, name: "Cpu", category: "development", svgContent: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>' },
    { id: 569, name: "CpuThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="1" y1="9" x2="4" y2="9"/></g>' },
    { id: 570, name: "CpuInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="4" y="4" width="16" height="16" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="9" y="9" width="6" height="6"/><line stroke="var(--ax-bg-inverse, white)" x1="9" y1="1" x2="9" y2="4"/><line stroke="var(--ax-bg-inverse, white)" x1="15" y1="1" x2="15" y2="4"/><line stroke="var(--ax-bg-inverse, white)" x1="9" y1="20" x2="9" y2="23"/><line stroke="var(--ax-bg-inverse, white)" x1="15" y1="20" x2="15" y2="23"/><line stroke="var(--ax-bg-inverse, white)" x1="20" y1="9" x2="23" y2="9"/><line stroke="var(--ax-bg-inverse, white)" x1="20" y1="14" x2="23" y2="14"/><line stroke="var(--ax-bg-inverse, white)" x1="1" y1="9" x2="4" y2="9"/><line stroke="var(--ax-bg-inverse, white)" x1="1" y1="14" x2="4" y2="14"/>' },

// 195. CPU-Color
    { id: 571, name: "CPU-Color", category: "development", svgContent: '<defs><linearGradient id="cpuBody" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#37474f"/><stop offset="100%" stop-color="#212121"/></linearGradient><linearGradient id="cpuCore" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ffb300"/><stop offset="100%" stop-color="#ff6f00"/></linearGradient></defs><g><rect x="4" y="4" width="16" height="16" rx="2" fill="url(#cpuBody)"/><rect x="9" y="9" width="6" height="6" rx="1" fill="url(#cpuCore)"/><path d="M9 1v3M12 1v3M15 1v3M9 20v3M12 20v3M15 20v3M1 9h3M1 12h3M1 15h3M20 9h3M20 12h3M20 15h3" stroke="#ffb300" stroke-width="1.5" stroke-linecap="round"/></g>' },
    { id: 572, name: "CPU-Thin-Color", category: "development", svgContent: '<rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="#ffb300" stroke-width="0.75"/><rect x="9" y="9" width="6" height="6" rx="1" fill="none" stroke="#ffb300" stroke-width="0.5"/>' },
    { id: 573, name: "CPU-Inverted-Color", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#212121" rx="4"/><rect x="5" y="5" width="14" height="14" rx="1" fill="#ffffff"/><rect x="9" y="9" width="6" height="6" fill="#ffb300"/>' },

// 196. Cpu2
    { id: 574, name: "Cpu2", category: "development", svgContent: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6" rx="1"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/>' },
    { id: 575, name: "Cpu2Thin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6" rx="1"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="1" y1="9" x2="4" y2="9"/></g>' },
    { id: 576, name: "Cpu2Inverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="4" y="4" width="16" height="16" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="9" y="9" width="6" height="6" rx="1"/><line stroke="var(--ax-bg-inverse, white)" x1="9" y1="1" x2="9" y2="4"/><line stroke="var(--ax-bg-inverse, white)" x1="15" y1="1" x2="15" y2="4"/><line stroke="var(--ax-bg-inverse, white)" x1="9" y1="20" x2="9" y2="23"/><line stroke="var(--ax-bg-inverse, white)" x1="15" y1="20" x2="15" y2="23"/><line stroke="var(--ax-bg-inverse, white)" x1="20" y1="9" x2="23" y2="9"/><line stroke="var(--ax-bg-inverse, white)" x1="20" y1="15" x2="23" y2="15"/><line stroke="var(--ax-bg-inverse, white)" x1="1" y1="9" x2="4" y2="9"/><line stroke="var(--ax-bg-inverse, white)" x1="1" y1="15" x2="4" y2="15"/>' },

// 197. Crane-Color
    { id: 577, name: "Crane-Color", category: "general", svgContent: '<defs><linearGradient id="crnGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ff9800"/><stop offset="100%" stop-color="#e65100"/></linearGradient></defs><g><path d="M2 22h20M12 22V6l8 4" fill="none" stroke="#e65100" stroke-width="3" stroke-linecap="round"/></g>' },
    { id: 578, name: "Crane-Thin-Color", category: "general", svgContent: '<path d="M3 21h18M12 21V7l7 3" fill="none" stroke="#e65100" stroke-width="0.75"/>' },
    { id: 579, name: "Crane-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#e65100" rx="4"/><path d="M3 21h18M12 21V7l7 3" fill="none" stroke="#ffffff" stroke-width="1.5"/>' },

// 198. Credit-Card
    { id: 580, name: "Credit-Card", category: "finance", svgContent: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>' },
    { id: 581, name: "Credit-CardThin", category: "finance", svgContent: '<g fill="none" stroke-width="0.5"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></g>' },
    { id: 582, name: "Credit-CardInverted", category: "finance", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></g>' },

// 199. Credit-Card-Color
    { id: 583, name: "Credit-Card-Color", category: "ui", svgContent: '<defs><linearGradient id="cardGradC" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#673ab7"/><stop offset="100%" stop-color="#432278"/></linearGradient></defs><g><rect x="2" y="5" width="20" height="14" rx="2" fill="url(#cardGradC)"/><rect x="2" y="8" width="20" height="3" fill="#212121"/><rect x="4" y="14" width="4" height="2" fill="#ffd54f" rx="0.5"/><line x1="16" y1="15" x2="19" y2="15" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/></g>' },
    { id: 584, name: "Credit-Card-Thin-Color", category: "ui", svgContent: '<rect x="2" y="5" width="20" height="14" rx="2" fill="none" stroke="#673ab7" stroke-width="0.75"/><line x1="2" y1="9" x2="22" y2="9" stroke="#673ab7" stroke-width="0.5"/>' },
    { id: 585, name: "Credit-Card-Inverted-Color", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#673ab7" rx="4"/><rect x="2" y="5" width="20" height="14" rx="2" fill="#ffffff"/><rect x="2" y="8" width="20" height="3" fill="#673ab7"/>' },

// 200. CreditCard
    { id: 586, name: "CreditCard", category: "finance", svgContent: '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>' },
    { id: 587, name: "CreditCardThin", category: "finance", svgContent: '<g fill="none" stroke-width="0.5"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></g>' },
    { id: 588, name: "CreditCardInverted", category: "finance", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></g>' },

// 201. Crop-Color
    { id: 589, name: "Crop-Color", category: "general", svgContent: '<defs><linearGradient id="crpGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ff7043"/><stop offset="100%" stop-color="#bf360c"/></linearGradient></defs><g fill="none" stroke="url(#crpGrad)" stroke-width="2.5" stroke-linecap="round"><path d="M6 1H6v17h17M18 23v-5H1v0"/></g>' },
    { id: 590, name: "Crop-Thin-Color", category: "general", svgContent: '<path d="M6 2v16h16M18 22v-4H2" fill="none" stroke="#bf360c" stroke-width="0.75"/>' },
    { id: 591, name: "Crop-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#bf360c" rx="4"/><path d="M7 2v15h15M17 22v-3H2" fill="none" stroke="#ffffff" stroke-width="2"/>' },

// 202. Crown-Color
    { id: 592, name: "Crown-Color", category: "general", svgContent: '<defs><linearGradient id="crnGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffca28"/><stop offset="100%" stop-color="#ff6f00"/></linearGradient></defs><g><polygon points="2 18 5 7 12 12 19 7 22 18" fill="url(#crnGrad)" stroke="#ff6f00" stroke-width="1.5" stroke-linejoin="round"/><circle cx="5" cy="6" r="1" fill="#ffca28"/><circle cx="12" cy="11" r="1" fill="#ffca28"/><circle cx="19" cy="6" r="1" fill="#ffca28"/></g>' },
    { id: 593, name: "Crown-Thin-Color", category: "general", svgContent: '<polygon points="2 18 5 7 12 12 19 7 22 18" fill="none" stroke="#ff6f00" stroke-width="0.75"/>' },
    { id: 594, name: "Crown-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#ff6f00" rx="4"/><polygon points="3 19 6 8 12 13 18 8 21 19" fill="#ffffff"/>' },

// 203. Crypto
    { id: 595, name: "Crypto", category: "general", svgContent: '<circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.9"/><path d="M6 8h12M6 16h12M8 6v12M16 6v12"/>' },
    { id: 596, name: "CryptoThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="2"/><path d="M6 8h12M6 16h12M8 6v12M16 6v12"/></g>' },
    { id: 597, name: "CryptoInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="2" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><path stroke="var(--ax-bg-inverse, white)" d="M6 8h12M6 16h12M8 6v12M16 6v12"/>' },

// 204. Cup-Straw
    { id: 598, name: "Cup-Straw", category: "food", svgContent: '<path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M6 8h12v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8z"/><path d="M6 8l4-6"/><path d="M10 2l4 4"/>' },
    { id: 599, name: "Cup-StrawThin", category: "food", svgContent: '<g fill="none" stroke-width="0.5"><path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M6 8h12v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8z"/><path d="M6 8l4-6"/><path d="M10 2l4 4"/></g>' },
    { id: 600, name: "Cup-StrawInverted", category: "food", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M6 8h12v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8z"/><path d="M6 8l4-6"/><path d="M10 2l4 4"/></g>' },

// 205. Cutlery
    { id: 601, name: "Cutlery", category: "general", svgContent: '<path d="M6 2v14a2 2 0 0 0 4 0V2"/><path d="M14 2v14a2 2 0 0 0 4 0V2"/><path d="M6 22h12"/></g>' },
    { id: 602, name: "CutleryThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M6 2v14a2 2 0 0 0 4 0V2"/><path d="M14 2v14a2 2 0 0 0 4 0V2"/><path d="M6 22h12"/></g>' },
    { id: 603, name: "CutleryInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M6 2v14a2 2 0 0 0 4 0V2"/><path d="M14 2v14a2 2 0 0 0 4 0V2"/><path d="M6 22h12"/></g>' },

// 206. Database
    { id: 604, name: "Database", category: "development", svgContent: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>' },
    { id: 605, name: "DatabaseThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></g>' },
    { id: 606, name: "DatabaseInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><ellipse cx="12" cy="5" rx="9" ry="3"/><path stroke="var(--ax-bg-inverse, white)" d="M3 5v14a9 3 0 0 0 18 0V5"/><path stroke="var(--ax-bg-inverse, white)" d="M3 12a9 3 0 0 0 18 0"/>' },

// 207. Database-Color
    { id: 607, name: "Database-Color", category: "development", svgContent: '<defs><linearGradient id="dbGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#4eafec"/><stop offset="100%" stop-color="#1a73e8"/></linearGradient></defs><g fill="url(#dbGrad)"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6"/><ellipse cx="12" cy="11" rx="9" ry="3" fill="#64b5f6" opacity="0.5"/><ellipse cx="12" cy="17" rx="9" ry="3" fill="#64b5f6" opacity="0.5"/></g>' },
    { id: 608, name: "Database-Thin-Color", category: "development", svgContent: '<g fill="none" stroke="#1a73e8" stroke-width="0.75"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6"/></g>' },
    { id: 609, name: "Database-Inverted-Color", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#1a73e8" rx="4"/><g fill="none" stroke="#ffffff" stroke-width="1.5"><ellipse cx="12" cy="6" rx="7" ry="2.5"/><path d="M5 6v5c0 1.5 3.1 2.5 7 2.5s7-1 7-2.5V6M5 11v5c0 1.5 3.1 2.5 7 2.5s7-1 7-2.5v-5"/></g>' },

// 208. Dice-Color
    { id: 610, name: "Dice-Color", category: "general", svgContent: '<defs><linearGradient id="dceGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#cfd8dc"/></linearGradient></defs><g><rect x="4" y="4" width="16" height="16" rx="2" fill="url(#dceGrad)" stroke="#455a64" stroke-width="1.5"/><circle cx="8" cy="8" r="1" fill="#455a64"/><circle cx="16" cy="16" r="1" fill="#455a64"/><circle cx="12" cy="12" r="1" fill="#455a64"/></g>' },
    { id: 611, name: "Dice-Thin-Color", category: "general", svgContent: '<rect x="5" y="5" width="14" height="14" rx="1" fill="none" stroke="#455a64" stroke-width="0.75"/>' },
    { id: 612, name: "Dice-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#455a64" rx="4"/><rect x="5" y="5" width="14" height="14" rx="1" fill="#ffffff"/>' },

// 209. Disc-Color
    { id: 613, name: "Disc-Color", category: "media", svgContent: '<defs><linearGradient id="discGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#b0ff00"/><stop offset="50%" stop-color="#00e676"/><stop offset="100%" stop-color="#00b0ff"/></linearGradient></defs><g><circle cx="12" cy="12" r="10" fill="url(#discGrad)"/><circle cx="12" cy="12" r="3" fill="#ffffff"/><circle cx="12" cy="12" r="1" fill="#212121"/></g>' },
    { id: 614, name: "Disc-Thin-Color", category: "media", svgContent: '<circle cx="12" cy="12" r="10" fill="none" stroke="#00e676" stroke-width="0.75"/><circle cx="12" cy="12" r="3" fill="none" stroke="#00e676" stroke-width="0.5"/>' },
    { id: 615, name: "Disc-Inverted-Color", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#00e676" rx="4"/><circle cx="12" cy="12" r="8" fill="#ffffff"/><circle cx="12" cy="12" r="2" fill="#00e676"/>' },

// 210. Discord
    { id: 616, name: "Discord", category: "brands", svgContent: '<path d="M18 1H2v20h16l3-4V1zm-5.5 10c1.33 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm-7 0c1.33 0 2.5 1.12 2.5 2.5S7.33 16 6 16s-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z"/>' },
    { id: 617, name: "DiscordThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><path d="M18 1H2v20h16l3-4V1zm-5.5 10c1.33 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm-7 0c1.33 0 2.5 1.12 2.5 2.5S7.33 16 6 16s-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z"/></g>' },
    { id: 618, name: "DiscordInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M18 1H2v20h16l3-4V1zm-5.5 10c1.33 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm-7 0c1.33 0 2.5 1.12 2.5 2.5S7.33 16 6 16s-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z"/>' },

// 211. Disney
    { id: 619, name: "Disney", category: "general", svgContent: '<path d="M12 2L7 5v6l5 3 5-3V5l-5-3z"/><path d="M9 9l3 2 3-2M9 13l3 2 3-2"/>' },
    { id: 620, name: "DisneyThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 2L7 5v6l5 3 5-3V5l-5-3z"/><path d="M9 9l3 2 3-2M9 13l3 2 3-2"/></g>' },
    { id: 621, name: "DisneyInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M12 2L7 5v6l5 3 5-3V5l-5-3z"/><path stroke="var(--ax-bg-inverse, white)" d="M9 9l3 2 3-2M9 13l3 2 3-2"/>' },

// 212. Docker
    { id: 622, name: "Docker", category: "brands", svgContent: '<rect x="2" y="6" width="4" height="4"/><rect x="8" y="6" width="4" height="4"/><rect x="14" y="6" width="4" height="4"/><rect x="2" y="12" width="4" height="4"/><rect x="8" y="12" width="4" height="4"/><rect x="14" y="12" width="4" height="4"/>' },
    { id: 623, name: "DockerThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><rect x="2" y="6" width="4" height="4"/><rect x="8" y="6" width="4" height="4"/><rect x="14" y="6" width="4" height="4"/><rect x="2" y="12" width="4" height="4"/><rect x="8" y="12" width="4" height="4"/><rect x="14" y="12" width="4" height="4"/></g>' },
    { id: 624, name: "DockerInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="2" y="6" width="4" height="4"/><rect fill="var(--ax-bg-inverse, white)" x="8" y="6" width="4" height="4"/><rect fill="var(--ax-bg-inverse, white)" x="14" y="6" width="4" height="4"/><rect fill="var(--ax-bg-inverse, white)" x="2" y="12" width="4" height="4"/><rect fill="var(--ax-bg-inverse, white)" x="8" y="12" width="4" height="4"/><rect fill="var(--ax-bg-inverse, white)" x="14" y="12" width="4" height="4"/>' },

// 213. Docker-Color
    { id: 625, name: "Docker-Color", category: "brands", svgContent: '<defs><linearGradient id="dockBlue" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#0298f3"/><stop offset="100%" stop-color="#01579b"/></linearGradient></defs><g fill="url(#dockBlue)"><path d="M2 13.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2zM7 9.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"/><path d="M23 14c-1.5 0-3.5 1-4.5 2.5C17 14 14 13 11 13H1v3c0 3 2.5 5 5.5 5h10c3 0 5.5-2 6-5 .5-.5.5-2 .5-2z"/></g>' },

// 214. DocumentCheck
    { id: 626, name: "DocumentCheck", category: "development", svgContent: '<path d="M9 2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-6-7z"/><polyline points="16 12 12 16 10 14"/>' },
    { id: 627, name: "DocumentCheckThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><path d="M9 2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-6-7z"/><polyline points="16 12 12 16 10 14"/></g>' },
    { id: 628, name: "DocumentCheckInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M9 2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-6-7z"/><polyline points="16 12 12 16 10 14"/>' },

// 215. DocumentMinus
    { id: 629, name: "DocumentMinus", category: "development", svgContent: '<path d="M9 2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-6-7z"/><line x1="10" y1="15" x2="16" y2="15"/>' },
    { id: 630, name: "DocumentMinusThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><path d="M9 2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-6-7z"/><line x1="10" y1="15" x2="16" y2="15"/></g>' },
    { id: 631, name: "DocumentMinusInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M9 2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-6-7z"/><line stroke="var(--ax-bg-inverse, white)" x1="10" y1="15" x2="16" y2="15"/>' },

// 216. DocumentText
    { id: 632, name: "DocumentText", category: "development", svgContent: '<path d="M9 2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-6-7z"/><line x1="7" y1="13" x2="17" y2="13"/><line x1="7" y1="17" x2="13" y2="17"/><line x1="9" y1="9" x2="12" y2="6"/>' },
    { id: 633, name: "DocumentTextThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><path d="M9 2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-6-7z"/><line x1="7" y1="13" x2="17" y2="13"/><line x1="7" y1="17" x2="13" y2="17"/><line x1="9" y1="9" x2="12" y2="6"/></g>' },
    { id: 634, name: "DocumentTextInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M9 2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-6-7z"/><line stroke="var(--ax-bg-inverse, white)" x1="7" y1="13" x2="17" y2="13"/><line stroke="var(--ax-bg-inverse, white)" x1="7" y1="17" x2="13" y2="17"/><line stroke="var(--ax-bg-inverse, white)" x1="9" y1="9" x2="12" y2="6"/>' },

// 217. Dollar-Sign
    { id: 635, name: "Dollar-Sign", category: "finance", svgContent: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>' },
    { id: 636, name: "Dollar-SignThin", category: "finance", svgContent: '<g fill="none" stroke-width="0.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></g>' },
    { id: 637, name: "Dollar-SignInverted", category: "finance", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></g>' },

// 218. DollarSign
    { id: 638, name: "DollarSign", category: "finance", svgContent: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>' },
    { id: 639, name: "DollarSignThin", category: "finance", svgContent: '<g fill="none" stroke-width="0.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></g>' },
    { id: 640, name: "DollarSignInverted", category: "finance", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></g>' },

// 219. Door-Color
    { id: 641, name: "Door-Color", category: "objects", svgContent: '<defs><linearGradient id="dorGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#a1887f"/><stop offset="100%" stop-color="#795548"/></linearGradient></defs><g><rect x="4" y="2" width="16" height="20" rx="1" fill="url(#dorGrad)"/><circle cx="16" cy="12" r="1" fill="#ffb300"/><line x1="2" y1="22" x2="22" y2="22" stroke="#4e342e" stroke-width="2" stroke-linecap="round"/></g>' },
    { id: 642, name: "Door-Thin-Color", category: "objects", svgContent: '<rect x="5" y="2" width="14" height="20" rx="1" fill="none" stroke="#795548" stroke-width="0.75"/>' },
    { id: 643, name: "Door-Inverted-Color", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#795548" rx="4"/><rect x="6" y="3" width="12" height="19" rx="1" fill="#ffffff"/><circle cx="15" cy="12" r="1" fill="#795548"/>' },

// 220. DoorLock
    { id: 644, name: "DoorLock", category: "objects", svgContent: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/>' },
    { id: 645, name: "DoorLockThin", category: "objects", svgContent: '<g fill="none" stroke-width="0.5"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></g>' },
    { id: 646, name: "DoorLockInverted", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="3" y="4" width="18" height="16" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="3"/><path stroke="var(--ax-bg-inverse, white)" d="M9 9V6a3 3 0 0 1 6 0v3"/>' },

// 221. Dot
    { id: 647, name: "Dot", category: "ui", svgContent: '<circle cx="12" cy="12" r="1" fill="currentColor" opacity="0.9"/>' },
    { id: 648, name: "DotThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="1"/></g>' },
    { id: 649, name: "DotInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="1" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 222. Download
    { id: 650, name: "Download", category: "ui", svgContent: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>' },
    { id: 651, name: "DownloadThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></g>' },
    { id: 652, name: "DownloadInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></g>' },

// 223. Download-Color
    { id: 653, name: "Download-Color", category: "ui", svgContent: '<defs><linearGradient id="downArrow" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#29b6f6"/><stop offset="100%" stop-color="#0288d1"/></linearGradient></defs><g><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" fill="none" stroke="#78909c" stroke-width="2.5" stroke-linecap="round"/><polyline points="7 10 12 15 17 10" fill="none" stroke="url(#downArrow)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="15" x2="12" y2="3" stroke="url(#downArrow)" stroke-width="3" stroke-linecap="round"/></g>' },

// 224. Drone
    { id: 654, name: "Drone", category: "iot", svgContent: '<rect x="9" y="11" width="6" height="2"/><circle cx="6" cy="11" r="1.5" fill="currentColor" opacity="0.9"/><circle cx="18" cy="11" r="1.5" fill="currentColor" opacity="0.9"/><path d="M5 5l2 6M19 5l-2 6M12 1v4m0 10v4"/>' },
    { id: 655, name: "DroneThin", category: "iot", svgContent: '<g fill="none" stroke-width="0.5"><rect x="9" y="11" width="6" height="2"/><circle cx="6" cy="11" r="1.5"/><circle cx="18" cy="11" r="1.5"/><path d="M5 5l2 6M19 5l-2 6M12 1v4m0 10v4"/></g>' },
    { id: 656, name: "DroneInverted", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="9" y="11" width="6" height="2"/><circle fill="var(--ax-bg-inverse, white)" cx="6" cy="11" r="1.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="18" cy="11" r="1.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><path stroke="var(--ax-bg-inverse, white)" d="M5 5l2 6M19 5l-2 6M12 1v4m0 10v4"/>' },

// 225. Drone-Color
    { id: 657, name: "Drone-Color", category: "general", svgContent: '<defs><linearGradient id="drnGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#607d8b"/><stop offset="100%" stop-color="#37474f"/></linearGradient></defs><g stroke="#37474f" stroke-width="2"><path d="M4 4l4 4M20 4l-4 4M4 20l4-4M20 20l-4-4"/><rect x="8" y="8" width="8" height="8" rx="2" fill="url(#drnGrad)"/></g>' },
    { id: 658, name: "Drone-Thin-Color", category: "general", svgContent: '<rect x="9" y="9" width="6" height="6" rx="1" fill="none" stroke="#37474f" stroke-width="0.75"/>' },
    { id: 659, name: "Drone-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#37474f" rx="4"/><rect x="9" y="9" width="6" height="6" rx="1" fill="#ffffff"/>' },

// 226. Droplet
    { id: 660, name: "Droplet", category: "weather", svgContent: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>' },
    { id: 661, name: "DropletThin", category: "weather", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></g>' },
    { id: 662, name: "DropletInverted", category: "weather", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></g>' },

// 227. Droplet-Color
    { id: 663, name: "Droplet-Color", category: "general", svgContent: '<defs><linearGradient id="drpGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#4fc3f7"/><stop offset="100%" stop-color="#0288d1"/></linearGradient></defs><g><path d="M12 2s-7 6.5-7 11.5a7 7 0 0 0 14 0C19 8.5 12 2 12 2z" fill="url(#drpGrad)"/><path d="M9 12c0-2 1.5-4 1.5-4" fill="none" stroke="#ffffff" opacity="0.4" stroke-width="1.5" stroke-linecap="round"/></g>' },
    { id: 664, name: "Droplet-Thin-Color", category: "general", svgContent: '<path d="M12 3s-6.5 6-6.5 11a6.5 6.5 0 0 0 13 0c0-5-6.5-11-6.5-11z" fill="none" stroke="#0288d1" stroke-width="0.75"/>' },
    { id: 665, name: "Droplet-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#0288d1" rx="4"/><path d="M12 4s-6 6-6 11a6 6 0 0 0 12 0c0-5-6-11-6-11z" fill="#ffffff"/>' },

// 228. Drum-Color
    { id: 666, name: "Drum-Color", category: "general", svgContent: '<defs><linearGradient id="drmGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffb74d"/><stop offset="100%" stop-color="#f57c00"/></linearGradient></defs><g><ellipse cx="12" cy="6" rx="8" ry="3" fill="#cfd8dc" stroke="#455a64" stroke-width="1.5"/><rect x="4" y="6" width="16" height="12" fill="url(#drmGrad)" stroke="#455a64" stroke-width="1.5"/><ellipse cx="12" cy="18" rx="8" ry="3" fill="#cfd8dc" stroke="#455a64" stroke-width="1.5"/></g>' },
    { id: 667, name: "Drum-Thin-Color", category: "general", svgContent: '<rect x="5" y="7" width="14" height="10" fill="none" stroke="#455a64" stroke-width="0.75"/>' },
    { id: 668, name: "Drum-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#455a64" rx="4"/><rect x="5" y="7" width="14" height="10" fill="#ffffff"/>' },

// 229. Drumstick
    { id: 669, name: "Drumstick", category: "food", svgContent: '<path d="M20.2 12.2L12.8 4.8a4 4 0 0 0-5.6 0L2 10l8 8 2.2-2.2a2 2 0 0 1 3.2 0l3 3c1 1 3.8 0 5-1.2s2.2-4 1.2-5z"/><path d="M2 10l4 4"/>' },
    { id: 670, name: "DrumstickThin", category: "food", svgContent: '<g fill="none" stroke-width="0.5"><path d="M20.2 12.2L12.8 4.8a4 4 0 0 0-5.6 0L2 10l8 8 2.2-2.2a2 2 0 0 1 3.2 0l3 3c1 1 3.8 0 5-1.2s2.2-4 1.2-5z"/><path d="M2 10l4 4"/></g>' },
    { id: 671, name: "DrumstickInverted", category: "food", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M20.2 12.2L12.8 4.8a4 4 0 0 0-5.6 0L2 10l8 8 2.2-2.2a2 2 0 0 1 3.2 0l3 3c1 1 3.8 0 5-1.2s2.2-4 1.2-5z"/><path d="M2 10l4 4"/></g>' },

// 230. Duplicate
    { id: 672, name: "Duplicate", category: "general", svgContent: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 3"/>' },
    { id: 673, name: "DuplicateThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 3"/></g>' },
    { id: 674, name: "DuplicateInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" stroke="white"/><polyline points="17 21 17 13 7 13 7 3"/>' },

// 231. Earbuds
    { id: 675, name: "Earbuds", category: "media", svgContent: '<circle cx="8" cy="10" r="3"/><circle cx="16" cy="10" r="3"/><path d="M8 7V4a2 2 0 0 1 2-2M16 7V4a2 2 0 0 1-2-2"/><path d="M6 14c-1 2-2 4-2 6a4 4 0 0 0 4 4M18 14c1 2 2 4 2 6a4 4 0 0 1-4 4"/>' },
    { id: 676, name: "EarbudsThin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="8" cy="10" r="3"/><circle cx="16" cy="10" r="3"/><path d="M8 7V4a2 2 0 0 1 2-2M16 7V4a2 2 0 0 1-2-2"/><path d="M6 14c-1 2-2 4-2 6a4 4 0 0 0 4 4M18 14c1 2 2 4 2 6a4 4 0 0 1-4 4"/></g>' },
    { id: 677, name: "EarbudsInverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="8" cy="10" r="3"/><circle fill="var(--ax-bg-inverse, white)" cx="16" cy="10" r="3"/><path stroke="var(--ax-bg-inverse, white)" d="M8 7V4a2 2 0 0 1 2-2M16 7V4a2 2 0 0 1-2-2"/><path stroke="var(--ax-bg-inverse, white)" d="M6 14c-1 2-2 4-2 6a4 4 0 0 0 4 4M18 14c1 2 2 4 2 6a4 4 0 0 1-4 4"/>' },

// 232. Edit
    { id: 678, name: "Edit", category: "ui", svgContent: '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>' },
    { id: 679, name: "EditThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></g>' },
    { id: 680, name: "EditInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>' },

// 233. Edit-2
    { id: 681, name: "Edit-2", category: "ui", svgContent: '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>' },
    { id: 682, name: "Edit-2Thin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></g>' },
    { id: 683, name: "Edit-2Inverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></g>' },

// 234. Edit-Color
    { id: 684, name: "Edit-Color", category: "ui", svgContent: '<defs><linearGradient id="penBody" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ffb74d"/><stop offset="70%" stop-color="#f57c00"/><stop offset="100%" stop-color="#d84315"/></linearGradient></defs><g><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" fill="none" stroke="#b0bec5" stroke-width="2" stroke-linecap="round"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z" fill="url(#penBody)"/><path d="M12 15l3-3 1 1-3 3-1-1z" fill="#cfd8dc"/></g>' },

// 235. EditCircle
    { id: 685, name: "EditCircle", category: "ui", svgContent: '<circle cx="12" cy="12" r="10"/><path d="M12 8l3 3M9 15h6"/>' },
    { id: 686, name: "EditCircleThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><path d="M12 8l3 3M9 15h6"/></g>' },
    { id: 687, name: "EditCircleInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="10"/><path stroke="var(--ax-bg-inverse, white)" d="M12 8l3 3M9 15h6"/>' },

// 236. EditSquare
    { id: 688, name: "EditSquare", category: "ui", svgContent: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8l4 4M8 16h8"/>' },
    { id: 689, name: "EditSquareThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8l4 4M8 16h8"/></g>' },
    { id: 690, name: "EditSquareInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="3" y="3" width="18" height="18" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M12 8l4 4M8 16h8"/>' },

// 237. Efficiency
    { id: 691, name: "Efficiency", category: "general", svgContent: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H17a2 2 0 0 1 2 2v.5a2.5 2.5 0 0 1-2.5 2.5H7a2 2 0 0 1-2-2v-.5a2.5 2.5 0 0 1 1-2M6 11l6-6 6 6"/>' },
    { id: 692, name: "EfficiencyThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H17a2 2 0 0 1 2 2v.5a2.5 2.5 0 0 1-2.5 2.5H7a2 2 0 0 1-2-2v-.5a2.5 2.5 0 0 1 1-2M6 11l6-6 6 6"/></g>' },
    { id: 693, name: "EfficiencyInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M4 19.5A2.5 2.5 0 0 1 6.5 17H17a2 2 0 0 1 2 2v.5a2.5 2.5 0 0 1-2.5 2.5H7a2 2 0 0 1-2-2v-.5a2.5 2.5 0 0 1 1-2M6 11l6-6 6 6"/>' },

// 238. Egg
    { id: 694, name: "Egg", category: "food", svgContent: '<path d="M12 2a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0V8a6 6 0 0 0-6-6z"/>' },
    { id: 695, name: "EggThin", category: "food", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 2a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0V8a6 6 0 0 0-6-6z"/></g>' },
    { id: 696, name: "EggInverted", category: "food", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M12 2a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0V8a6 6 0 0 0-6-6z"/></g>' },

// 239. EmojiSad
    { id: 697, name: "EmojiSad", category: "general", svgContent: '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5-2 4-2 4 2 4 2M9 9h.01M15 9h.01"/>' },
    { id: 698, name: "EmojiSadThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5-2 4-2 4 2 4 2M9 9h.01M15 9h.01"/></g>' },
    { id: 699, name: "EmojiSadInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="10"/><path stroke="var(--ax-bg-inverse, white)" d="M8 14s1.5-2 4-2 4 2 4 2M9 9h.01M15 9h.01"/>' },

// 240. EmojiSmile
    { id: 700, name: "EmojiSmile", category: "general", svgContent: '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>' },
    { id: 701, name: "EmojiSmileThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></g>' },
    { id: 702, name: "EmojiSmileInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="10"/><path stroke="var(--ax-bg-inverse, white)" d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>' },

// 241. Eraser
    { id: 703, name: "Eraser", category: "objects", svgContent: '<path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/><path d="M9 9h6v6H9z"/>' },
    { id: 704, name: "EraserThin", category: "objects", svgContent: '<g fill="none" stroke-width="0.5"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/><path d="M9 9h6v6H9z"/></g>' },
    { id: 705, name: "EraserInverted", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/><path stroke="var(--ax-bg-inverse, white)" d="M9 9h6v6H9z"/>' },

// 242. Eraser-Color
    { id: 706, name: "Eraser-Color", category: "general", svgContent: '<defs><linearGradient id="ersGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ff8a80"/><stop offset="100%" stop-color="#ff5252"/></linearGradient></defs><g><path d="M20 11l-7 7H2v-4L9 7l11 4z" fill="url(#ersGrad)" stroke="#ff5252" stroke-width="1.5"/><path d="M13 11L9 7M2 18h20" stroke="#ff5252" stroke-width="2" stroke-linecap="round"/></g>' },
    { id: 707, name: "Eraser-Thin-Color", category: "general", svgContent: '<path d="M19 11l-6 6H3v-3l6-6 10 3z" fill="none" stroke="#ff5252" stroke-width="0.75"/>' },
    { id: 708, name: "Eraser-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#ff5252" rx="4"/><path d="M19 10l-6 6H4v-3l6-6 9 3z" fill="#ffffff"/>' },

// 243. Ethereum
    { id: 709, name: "Ethereum", category: "brands", svgContent: '<circle cx="12" cy="12" r="10"/><path d="M12 5L8 10L12 13L8 16L12 19L16 16L12 13L16 10L12 5M12 5L8 8L12 11L8 14L12 17L16 14L12 11L16 8L12 5" stroke-width="0.5"/>' },
    { id: 710, name: "EthereumThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><path d="M12 5L8 10L12 13L8 16L12 19L16 16L12 13L16 10L12 5M12 5L8 8L12 11L8 14L12 17L16 14L12 11L16 8L12 5"/></g>' },
    { id: 711, name: "EthereumInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="10"/><path stroke="var(--ax-bg-inverse, white)" d="M12 5L8 10L12 13L8 16L12 19L16 16L12 13L16 10L12 5M12 5L8 8L12 11L8 14L12 17L16 14L12 11L16 8L12 5" />' },

// 244. Euro-Sign
    { id: 712, name: "Euro-Sign", category: "finance", svgContent: '<path d="M4 10h12"/><path d="M4 14h12"/><path d="M16 6a8 8 0 0 1 0 12"/>' },
    { id: 713, name: "Euro-SignThin", category: "finance", svgContent: '<g fill="none" stroke-width="0.5"><path d="M4 10h12"/><path d="M4 14h12"/><path d="M16 6a8 8 0 0 1 0 12"/></g>' },
    { id: 714, name: "Euro-SignInverted", category: "finance", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M4 10h12"/><path d="M4 14h12"/><path d="M16 6a8 8 0 0 1 0 12"/></g>' },

// 245. Excavator-Color
    { id: 715, name: "Excavator-Color", category: "ui", svgContent: '<defs><linearGradient id="excGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffeb3b"/><stop offset="100%" stop-color="#fbc02d"/></linearGradient></defs><g><rect x="2" y="12" width="12" height="6" fill="url(#excGrad)" stroke="#fbc02d" stroke-width="1.5"/><path d="M14 14l8-6v4l-4 4z" fill="#fbc02d" stroke="#fbc02d" stroke-width="1.5"/></g>' },
    { id: 716, name: "Excavator-Thin-Color", category: "ui", svgContent: '<rect x="3" y="13" width="10" height="4" fill="none" stroke="#fbc02d" stroke-width="0.75"/>' },
    { id: 717, name: "Excavator-Inverted-Color", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#fbc02d" rx="4"/><rect x="3" y="13" width="10" height="4" fill="#ffffff"/>' },

// 246. ExclamationTriangle
    { id: 718, name: "ExclamationTriangle", category: "general", svgContent: '<path d="M12 2L2 20h20L12 2z"/><line x1="12" y1="9" x2="12" y2="13"/><circle cx="12" cy="17" r="0.5" fill="currentColor" opacity="0.9"/>' },
    { id: 719, name: "ExclamationTriangleThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 2L2 20h20L12 2z"/><line x1="12" y1="9" x2="12" y2="13"/><circle cx="12" cy="17" r="0.5"/></g>' },
    { id: 720, name: "ExclamationTriangleInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M12 2L2 20h20L12 2z"/><line stroke="var(--ax-bg-inverse, white)" x1="12" y1="9" x2="12" y2="13"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="17" r="0.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 247. Expand
    { id: 721, name: "Expand", category: "general", svgContent: '<polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="3" y2="21"/>' },
    { id: 722, name: "ExpandThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="3" y2="21"/></g>' },
    { id: 723, name: "ExpandInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line stroke="var(--ax-bg-inverse, white)" x1="21" y1="3" x2="3" y2="21"/>' },

// 248. ExpandAlt
    { id: 724, name: "ExpandAlt", category: "general", svgContent: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>' },
    { id: 725, name: "ExpandAltThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></g>' },
    { id: 726, name: "ExpandAltInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="3" y="3" width="18" height="18" rx="2" ry="2"/><line stroke="var(--ax-bg-inverse, white)" x1="12" y1="8" x2="12" y2="16"/><line stroke="var(--ax-bg-inverse, white)" x1="8" y1="12" x2="16" y2="12"/>' },

// 249. External-Link
    { id: 727, name: "External-Link", category: "ui", svgContent: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>' },
    { id: 728, name: "External-LinkThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></g>' },
    { id: 729, name: "External-LinkInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></g>' },

// 250. Eye
    { id: 730, name: "Eye", category: "ui", svgContent: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>' },
    { id: 731, name: "EyeThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></g>' },
    { id: 732, name: "EyeInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></g>' },

// 251. Eye-Color
    { id: 733, name: "Eye-Color", category: "iot", svgContent: '<defs><radialGradient id="irisBlue" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#4fc3f7"/><stop offset="100%" stop-color="#0288d1"/></radialGradient></defs><g><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" fill="#ffffff" stroke="#b0bec5" stroke-width="1.5"/><circle cx="12" cy="12" r="4" fill="url(#irisBlue)"/><circle cx="12" cy="12" r="1.5" fill="#212121"/><circle cx="13.5" cy="10.5" r="0.75" fill="#ffffff"/></g>' },
    { id: 734, name: "Eye-Thin-Color", category: "iot", svgContent: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" fill="none" stroke="#0288d1" stroke-width="0.75"/><circle cx="12" cy="12" r="2" fill="none" stroke="#0288d1" stroke-width="0.5"/>' },
    { id: 735, name: "Eye-Inverted-Color", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#0288d1" rx="4"/><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" fill="#ffffff"/><circle cx="12" cy="12" r="3.5" fill="#212121"/>' },

// 252. Eye-Off
    { id: 736, name: "Eye-Off", category: "ui", svgContent: '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>' },
    { id: 737, name: "Eye-OffThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></g>' },
    { id: 738, name: "Eye-OffInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></g>' },

// 253. Eye-Off-Color
    { id: 739, name: "Eye-Off-Color", category: "iot", svgContent: '<defs><radialGradient id="irisBlueO" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#4fc3f7"/><stop offset="100%" stop-color="#0288d1"/></radialGradient></defs><g><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" fill="#ffffff" stroke="#b0bec5" stroke-width="1.5"/><circle cx="12" cy="12" r="4" fill="url(#irisBlueO)" opacity="0.4"/><line x1="2" y1="2" x2="22" y2="22" stroke="#ef5350" stroke-width="2" stroke-linecap="round"/></g>' },
    { id: 740, name: "Eye-Off-Thin-Color", category: "iot", svgContent: '<path d="M3 3l18 18" stroke="#ef5350" stroke-width="0.75"/>' },
    { id: 741, name: "Eye-Off-Inverted-Color", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#0288d1" rx="4"/><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" fill="#ffffff"/><line x1="4" y1="4" x2="20" y2="20" stroke="#212121" stroke-width="2"/>' },

// 254. Eye-Off2-Color
    { id: 742, name: "Eye-Off2-Color", category: "iot", svgContent: '<defs><linearGradient id="eyeSlash" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ef5350"/><stop offset="100%" stop-color="#b71c1c"/></linearGradient></defs><g><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" fill="none" stroke="#b0bec5" stroke-width="1.5"/><path d="M10 10a3 3 0 0 1 4 4" fill="none" stroke="#0288d1" stroke-width="2"/><line x1="1" y1="1" x2="23" y2="23" stroke="url(#eyeSlash)" stroke-width="2.5"/></g>' },
    { id: 743, name: "Eye-Off2-Thin-Color", category: "iot", svgContent: '<line x1="2" y1="2" x2="22" y2="22" stroke="#b71c1c" stroke-width="0.75"/>' },
    { id: 744, name: "Eye-Off2-Inverted-Color", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#212121" rx="4"/><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" fill="#ffffff"/><line x1="2" y1="2" x2="22" y2="22" stroke="#ef5350" stroke-width="2"/>' },

// 255. EyeOff
    { id: 745, name: "EyeOff", category: "ui", svgContent: '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>' },
    { id: 746, name: "EyeOffThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></g>' },
    { id: 747, name: "EyeOffInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></g>' },

// 256. Fast-Forward
    { id: 748, name: "Fast-Forward", category: "media", svgContent: '<polygon points="13 19 22 12 13 5 13 19"/><polygon points="2 19 11 12 2 5 2 19"/>' },
    { id: 749, name: "Fast-ForwardThin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><polygon points="13 19 22 12 13 5 13 19"/><polygon points="2 19 11 12 2 5 2 19"/></g>' },
    { id: 750, name: "Fast-ForwardInverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polygon points="13 19 22 12 13 5 13 19"/><polygon points="2 19 11 12 2 5 2 19"/></g>' },

// 257. Figma
    { id: 751, name: "Figma", category: "brands", svgContent: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2.5" fill="currentColor" opacity="0.9"/><path d="M14 9c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5z"/>' },
    { id: 752, name: "FigmaThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2.5"/><path d="M14 9c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5z"/></g>' },
    { id: 753, name: "FigmaInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="3" y="3" width="18" height="18" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="9" cy="9" r="2.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><path stroke="var(--ax-bg-inverse, white)" d="M14 9c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5z"/>' },

// 258. File
    { id: 754, name: "File", category: "development", svgContent: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>' },
    { id: 755, name: "FileThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></g>' },
    { id: 756, name: "FileInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></g>' },

// 259. File-Color
    { id: 757, name: "File-Color", category: "objects", svgContent: '<defs><linearGradient id="filePage" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#eceff1"/></linearGradient></defs><g><polygon points="14 2 6 2 6 22 18 22 18 6 14 2" fill="url(#filePage)" stroke="#b0bec5" stroke-width="1"/><polygon points="14 2 14 6 18 6" fill="#cfd8dc"/><line x1="9" y1="11" x2="15" y2="11" stroke="#90a4ae" stroke-width="2" stroke-linecap="round"/><line x1="9" y1="15" x2="15" y2="15" stroke="#90a4ae" stroke-width="2" stroke-linecap="round"/></g>' },

// 260. File-Minus
    { id: 758, name: "File-Minus", category: "development", svgContent: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="15" x2="15" y2="15"/>' },
    { id: 759, name: "File-MinusThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="15" x2="15" y2="15"/></g>' },
    { id: 760, name: "File-MinusInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="15" x2="15" y2="15"/></g>' },

// 261. File-Plus
    { id: 761, name: "File-Plus", category: "development", svgContent: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/>' },
    { id: 762, name: "File-PlusThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></g>' },
    { id: 763, name: "File-PlusInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></g>' },

// 262. File-Text
    { id: 764, name: "File-Text", category: "development", svgContent: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>' },
    { id: 765, name: "File-TextThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></g>' },
    { id: 766, name: "File-TextInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></g>' },

// 263. File-Text-Color
    { id: 767, name: "File-Text-Color", category: "ui", svgContent: '<defs><linearGradient id="fltGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#eceff1"/></linearGradient></defs><g><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="url(#fltGrad)" stroke="#546e7a" stroke-width="1.5"/><path d="M14 2v6h6M8 12h8M8 16h8" stroke="#546e7a" stroke-width="1.5" stroke-linecap="round"/></g>' },
    { id: 768, name: "File-Text-Thin-Color", category: "ui", svgContent: '<path d="M14 3v5h6M7 12h10M7 16h10" fill="none" stroke="#546e7a" stroke-width="0.75"/>' },
    { id: 769, name: "File-Text-Inverted-Color", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#546e7a" rx="4"/><path d="M14 3v5h6M7 12h10M7 16h10" fill="none" stroke="#ffffff" stroke-width="1.5"/>' },

// 264. Film
    { id: 770, name: "Film", category: "media", svgContent: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/><line x1="17" y1="17" x2="22" y2="17"/>' },
    { id: 771, name: "FilmThin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/><line x1="17" y1="17" x2="22" y2="17"/></g>' },
    { id: 772, name: "FilmInverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/><line x1="17" y1="17" x2="22" y2="17"/></g>' },

// 265. Film-Roll-Color
    { id: 773, name: "Film-Roll-Color", category: "general", svgContent: '<defs><linearGradient id="flmGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#455a64"/><stop offset="100%" stop-color="#263238"/></linearGradient></defs><g><circle cx="12" cy="12" r="8" fill="url(#flmGrad)" stroke="#263238" stroke-width="1.5"/><rect x="10" y="4" width="4" height="2" fill="#263238"/><rect x="10" y="18" width="4" height="2" fill="#263238"/></g>' },
    { id: 774, name: "Film-Roll-Thin-Color", category: "general", svgContent: '<circle cx="12" cy="12" r="7" fill="none" stroke="#263238" stroke-width="0.75"/>' },
    { id: 775, name: "Film-Roll-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#263238" rx="4"/><circle cx="12" cy="12" r="7" fill="#ffffff"/>' },

// 266. Filter
    { id: 776, name: "Filter", category: "ui", svgContent: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/><circle cx="12" cy="10" r="2" fill="currentColor" opacity="0.9"/>' },
    { id: 777, name: "FilterThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/><circle cx="12" cy="10" r="2"/></g>' },
    { id: 778, name: "FilterInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="10" r="2" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 267. FilterActive
    { id: 779, name: "FilterActive", category: "ui", svgContent: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/><circle cx="14" cy="8" r="2" fill="currentColor" opacity="0.9"/>' },
    { id: 780, name: "FilterActiveThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/><circle cx="14" cy="8" r="2"/></g>' },
    { id: 781, name: "FilterActiveInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/><circle fill="var(--ax-bg-inverse, white)" cx="14" cy="8" r="2" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 268. FilterClear
    { id: 782, name: "FilterClear", category: "ui", svgContent: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/><line x1="2" y1="2" x2="22" y2="22"/>' },
    { id: 783, name: "FilterClearThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/><line x1="2" y1="2" x2="22" y2="22"/></g>' },
    { id: 784, name: "FilterClearInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/><line stroke="var(--ax-bg-inverse, white)" x1="2" y1="2" x2="22" y2="22" />' },

// 269. Fingerprint
    { id: 785, name: "Fingerprint", category: "general", svgContent: '<path d="M2 12a10 10 0 1 1 20 0"/><path d="M5 15a7 7 0 1 1 14 0"/><path d="M8 18a4 4 0 1 1 8 0"/><path d="M12 21v-2"/><path d="M12 18v-2"/><path d="M12 15v-2"/><path d="M12 12v-2"/>' },
    { id: 786, name: "FingerprintThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M2 12a10 10 0 1 1 20 0"/><path d="M5 15a7 7 0 1 1 14 0"/><path d="M8 18a4 4 0 1 1 8 0"/><path d="M12 21v-2"/><path d="M12 18v-2"/><path d="M12 15v-2"/><path d="M12 12v-2"/></g>' },
    { id: 787, name: "FingerprintInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M2 12a10 10 0 1 1 20 0"/><path d="M5 15a7 7 0 1 1 14 0"/><path d="M8 18a4 4 0 1 1 8 0"/><path d="M12 21v-2"/><path d="M12 18v-2"/><path d="M12 15v-2"/><path d="M12 12v-2"/></g>' },

// 270. Fire
    { id: 788, name: "Fire", category: "weather", svgContent: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.144-.22-4.098 3-5 1 0 3 1 3 3 0 1.25-.5 2-1 3-1.072 2.144-.22 4.098 3 5-1.5 2-4 3-6 3-3.333 0-5-2-5-5z"/>' },
    { id: 789, name: "FireThin", category: "weather", svgContent: '<g fill="none" stroke-width="0.5"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.144-.22-4.098 3-5 1 0 3 1 3 3 0 1.25-.5 2-1 3-1.072 2.144-.22 4.098 3 5-1.5 2-4 3-6 3-3.333 0-5-2-5-5z"/></g>' },
    { id: 790, name: "FireInverted", category: "weather", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.144-.22-4.098 3-5 1 0 3 1 3 3 0 1.25-.5 2-1 3-1.072 2.144-.22 4.098 3 5-1.5 2-4 3-6 3-3.333 0-5-2-5-5z"/></g>' },

// 271. Fire-Color
    { id: 791, name: "Fire-Color", category: "general", svgContent: '<defs><linearGradient id="fireOuter" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stop-color="#e65100"/><stop offset="50%" stop-color="#f57c00"/><stop offset="100%" stop-color="#ffcc80"/></linearGradient><linearGradient id="fireInner" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stop-color="#ff3d00"/><stop offset="100%" stop-color="#ffea00"/></linearGradient></defs><g><path d="M18.5 14.5c-1.5 2-4 3-6 3-3.33 0-5-2-5-5 0-1.38.5-2 1-3 1.07-2.14.22-4.1 3-5-1 0-3 1-3 3 0 1.25.5 2 1 3 1.07 2.14.22 4.1-3 5z" fill="url(#fireOuter)"/><path d="M15 15.5c-.8 1.2-2.2 1.8-3.3 1.8-1.8 0-2.7-1.2-2.7-3 0-.8.3-1.2.5-1.8.6-1.3.1-2.5 1.6-3-.5 0-1.6.6-1.6 1.8 0 .8.3 1.2.5 1.8.6 1.3.1 2.5-1.6 3z" fill="url(#fireInner)" opacity="0.9"/></g>' },
    { id: 792, name: "Fire-Thin-Color", category: "general", svgContent: '<path d="M12 3c0 5-5 9-5 15a5 5 0 1 0 10 0c0-6-5-10-5-15z" fill="none" stroke="#bf360c" stroke-width="0.75"/>' },
    { id: 793, name: "Fire-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#bf360c" rx="4"/><path d="M12 3c0 5-5 9-5 15a5 5 0 1 0 10 0c0-6-5-10-5-15z" fill="#ffffff"/>' },

// 272. Fire-Truck-Color
    { id: 794, name: "Fire-Truck-Color", category: "general", svgContent: '<defs><linearGradient id="ftkGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#f44336"/><stop offset="100%" stop-color="#b71c1c"/></linearGradient></defs><g><rect x="2" y="10" width="16" height="8" rx="2" fill="url(#ftkGrad)" stroke="#b71c1c" stroke-width="1.5"/><path d="M18 12h4v2h-4z" fill="#ffffff"/></g>' },
    { id: 795, name: "Fire-Truck-Thin-Color", category: "general", svgContent: '<rect x="3" y="11" width="14" height="6" rx="1" fill="none" stroke="#b71c1c" stroke-width="0.75"/>' },
    { id: 796, name: "Fire-Truck-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#b71c1c" rx="4"/><rect x="3" y="11" width="14" height="6" rx="1" fill="#ffffff"/>' },

// 273. Firebase
    { id: 797, name: "Firebase", category: "brands", svgContent: '<polygon points="12 2 6 6 8 14 12 18 16 14 18 6 12 2"/><path d="M12 6v8M8 8l4 4M16 8l-4 4"/>' },
    { id: 798, name: "FirebaseThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><polygon points="12 2 6 6 8 14 12 18 16 14 18 6 12 2"/><path d="M12 6v8M8 8l4 4M16 8l-4 4"/></g>' },
    { id: 799, name: "FirebaseInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><polygon points="12 2 6 6 8 14 12 18 16 14 18 6 12 2"/><path stroke="var(--ax-bg-inverse, white)" d="M12 6v8M8 8l4 4M16 8l-4 4"/>' },

// 274. Fireworks-Color
    { id: 800, name: "Fireworks-Color", category: "general", svgContent: '<g stroke-width="2" stroke-linecap="round"><line x1="12" y1="2" x2="12" y2="6" stroke="#ffeb3b"/><line x1="12" y1="18" x2="12" y2="22" stroke="#ffeb3b"/><line x1="2" y1="12" x2="6" y2="12" stroke="#ffeb3b"/><line x1="18" y1="12" x2="22" y2="12" stroke="#ffeb3b"/><circle cx="12" cy="12" r="3" fill="#ff5252"/></g>' },
    { id: 801, name: "Fireworks-Thin-Color", category: "general", svgContent: '<line x1="12" y1="3" x2="12" y2="7" stroke="#ffeb3b" stroke-width="0.75"/>' },
    { id: 802, name: "Fireworks-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#ffeb3b" rx="4"/><circle cx="12" cy="12" r="4" fill="#ff5252"/>' },

// 275. Fish
    { id: 803, name: "Fish", category: "food", svgContent: '<path d="M6 12h12"/><path d="M12 12c-4 0-8 4-8 4V8s4 4 8 4z"/><path d="M12 12c4 0 8 4 8 4V8s-4 4-8 4z"/><path d="M22 12h-4"/><path d="M18 12l2-2M18 12l2 2"/>' },
    { id: 804, name: "FishThin", category: "food", svgContent: '<g fill="none" stroke-width="0.5"><path d="M6 12h12"/><path d="M12 12c-4 0-8 4-8 4V8s4 4 8 4z"/><path d="M12 12c4 0 8 4 8 4V8s-4 4-8 4z"/><path d="M22 12h-4"/><path d="M18 12l2-2M18 12l2 2"/></g>' },
    { id: 805, name: "FishInverted", category: "food", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M6 12h12"/><path d="M12 12c-4 0-8 4-8 4V8s4 4 8 4z"/><path d="M12 12c4 0 8 4 8 4V8s-4 4-8 4z"/><path d="M22 12h-4"/><path d="M18 12l2-2M18 12l2 2"/></g>' },

// 276. Fishing-Rod-Color
    { id: 806, name: "Fishing-Rod-Color", category: "general", svgContent: '<defs><linearGradient id="rodGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#8d6e63"/><stop offset="100%" stop-color="#5d4037"/></linearGradient></defs><g><path d="M22 2L2 22M15 2h5v5" fill="none" stroke="#5d4037" stroke-width="3" stroke-linecap="round"/></g>' },
    { id: 807, name: "Fishing-Rod-Thin-Color", category: "general", svgContent: '<path d="M21 3L3 21" fill="none" stroke="#5d4037" stroke-width="0.75"/>' },
    { id: 808, name: "Fishing-Rod-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#5d4037" rx="4"/><path d="M21 3L3 21" fill="none" stroke="#ffffff" stroke-width="1.5"/>' },

// 277. Fitness
    { id: 809, name: "Fitness", category: "health", svgContent: '<path d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="M9 9h6M9 13h6M9 17h2"/>' },
    { id: 810, name: "FitnessThin", category: "health", svgContent: '<g fill="none" stroke-width="0.5"><path d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="M9 9h6M9 13h6M9 17h2"/></g>' },
    { id: 811, name: "FitnessInverted", category: "health", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path stroke="var(--ax-bg-inverse, white)" d="M9 9h6M9 13h6M9 17h2"/>' },

// 278. FitnessTracker
    { id: 812, name: "FitnessTracker", category: "health", svgContent: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="6" cy="12" r="1" fill="currentColor" opacity="0.9"/><circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.9"/><circle cx="18" cy="12" r="1" fill="currentColor" opacity="0.9"/>' },
    { id: 813, name: "FitnessTrackerThin", category: "health", svgContent: '<g fill="none" stroke-width="0.5"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="6" cy="12" r="1"/><circle cx="12" cy="12" r="1.5"/><circle cx="18" cy="12" r="1"/></g>' },
    { id: 814, name: "FitnessTrackerInverted", category: "health", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="2" y="6" width="20" height="12" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="6" cy="12" r="1" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="1.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="18" cy="12" r="1" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 279. Flag
    { id: 815, name: "Flag", category: "objects", svgContent: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>' },
    { id: 816, name: "FlagThin", category: "objects", svgContent: '<g fill="none" stroke-width="0.5"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></g>' },
    { id: 817, name: "FlagInverted", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></g>' },

// 280. Flag-Color
    { id: 818, name: "Flag-Color", category: "ui", svgContent: '<defs><linearGradient id="flagBlue" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#29b6f6"/><stop offset="100%" stop-color="#0288d1"/></linearGradient></defs><g><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" fill="url(#flagBlue)"/><line x1="4" y1="22" x2="4" y2="15" stroke="#455a64" stroke-width="2" stroke-linecap="round"/></g>' },
    { id: 819, name: "Flag-Thin-Color", category: "ui", svgContent: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" fill="none" stroke="#0288d1" stroke-width="0.75"/><line x1="4" y1="22" x2="4" y2="15" stroke="#455a64" stroke-width="0.5"/>' },
    { id: 820, name: "Flag-Inverted-Color", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#0288d1" rx="4"/><path d="M5 4v16" stroke="#ffffff" stroke-width="2"/><path d="M5 4s2 1 5 1 4-2 7-2 3 1 3 1v9s-1-1-3-1-5 2-7 2-5-1-5-1V4z" fill="#ffffff"/>' },

// 281. Flame
    { id: 821, name: "Flame", category: "weather", svgContent: '<path d="M12 2c1 0 2 .5 2 1.5 0 2-2 4-2 7s2 3 2 5-1 3-3 3-3-1-3-3 2-3 2-5c0-3-2-5-2-7 0-1 1-1.5 2-1.5z"/>' },
    { id: 822, name: "FlameThin", category: "weather", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 2c1 0 2 .5 2 1.5 0 2-2 4-2 7s2 3 2 5-1 3-3 3-3-1-3-3 2-3 2-5c0-3-2-5-2-7 0-1 1-1.5 2-1.5z"/></g>' },
    { id: 823, name: "FlameInverted", category: "weather", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M12 2c1 0 2 .5 2 1.5 0 2-2 4-2 7s2 3 2 5-1 3-3 3-3-1-3-3 2-3 2-5c0-3-2-5-2-7 0-1 1-1.5 2-1.5z"/>' },

// 282. Flame-Color
    { id: 824, name: "Flame-Color", category: "general", svgContent: '<defs><linearGradient id="flmGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ff9100"/><stop offset="100%" stop-color="#ff3d00"/></linearGradient></defs><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3.5-.5 1.5-2 2.5-2 4a1.5 1.5 0 0 0 1.5 1.5z" fill="#ffea00"/><path d="M12 2c0 0-4 4.5-4 8.5a4 4 0 0 0 8 0c0-3-4-6.5-4-8.5z" fill="url(#flmGrad)" opacity="0.85"/>' },
    { id: 825, name: "Flame-Thin-Color", category: "general", svgContent: '<path d="M12 3c0 0-4 4-4 8a4 4 0 0 0 8 0c0-4-4-8-4-8z" fill="none" stroke="#ff3d00" stroke-width="0.75"/>' },
    { id: 826, name: "Flame-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#ff3d00" rx="4"/><path d="M12 4s-4 4-4 8a4 4 0 0 0 8 0c0-4-4-8-4-8z" fill="#ffffff"/>' },

// 283. Flame-Kindling-Color
    { id: 827, name: "Flame-Kindling-Color", category: "general", svgContent: '<defs><linearGradient id="fkGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffb74d"/><stop offset="100%" stop-color="#e65100"/></linearGradient></defs><g><path d="M5 20l14-4M19 20l-14-4" stroke="#8d6e63" stroke-width="2.5" stroke-linecap="round"/><path d="M12 3c0 0-3.5 4-3.5 7s1.5 5 3.5 5 3.5-2 3.5-5-3.5-7-3.5-7z" fill="url(#fkGrad)"/></g>' },
    { id: 828, name: "Flame-Kindling-Thin-Color", category: "general", svgContent: '<path d="M12 4s-3 3.5-3 6.5A3 3 0 0 0 15 11c0-3-3-6.5-3-6.5z" fill="none" stroke="#e65100" stroke-width="0.75"/>' },
    { id: 829, name: "Flame-Kindling-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#e65100" rx="4"/><path d="M12 4s-4 4-4 7a4 4 0 0 0 8 0c0-3-4-7-4-7z" fill="#ffffff"/><line x1="4" y1="19" x2="20" y2="17" stroke="#ffffff" stroke-width="2"/>' },

// 284. Flash-Color
    { id: 830, name: "Flash-Color", category: "general", svgContent: '<g fill="none" stroke-width="2" stroke-linecap="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#ffeb3b" stroke="#fbc02d" stroke-width="1.5"/></g>' },
    { id: 831, name: "Flash-Thin-Color", category: "general", svgContent: '<path d="M13 3L4 14h8l-1 7 9-11h-8l1-7z" fill="none" stroke="#fbc02d" stroke-width="0.75"/>' },
    { id: 832, name: "Flash-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#fbc02d" rx="4"/><path d="M13 3L4 14h8l-1 7 9-11h-8l1-7z" fill="#ffffff"/>' },

// 285. Flashlight
    { id: 833, name: "Flashlight", category: "iot", svgContent: '<path d="M15 2H9v3l-3 4v4h12V9l-3-3V2z"/><path d="M9 13v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-6"/>' },
    { id: 834, name: "FlashlightThin", category: "iot", svgContent: '<g fill="none" stroke-width="0.5"><path d="M15 2H9v3l-3 4v4h12V9l-3-3V2z"/><path d="M9 13v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-6"/></g>' },
    { id: 835, name: "FlashlightInverted", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M15 2H9v3l-3 4v4h12V9l-3-3V2z"/><path d="M9 13v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-6"/></g>' },

// 286. Flashlight-Color
    { id: 836, name: "Flashlight-Color", category: "iot", svgContent: '<defs><linearGradient id="flshGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#78909c"/><stop offset="100%" stop-color="#37474f"/></linearGradient></defs><g><path d="M18 2H6v4l3 3v11a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9l3-3V2z" fill="url(#flshGrad)"/><ellipse cx="12" cy="2" rx="6" ry="1" fill="#fff59d"/><circle cx="12" cy="13" r="1" fill="#00e676"/></g>' },
    { id: 837, name: "Flashlight-Thin-Color", category: "iot", svgContent: '<path d="M16 2H8v4l3 3v11h2V9l3-3V2z" fill="none" stroke="#37474f" stroke-width="0.75"/>' },
    { id: 838, name: "Flashlight-Inverted-Color", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#37474f" rx="4"/><path d="M16 4H8v3l3 3v9h2v-9l3-3V4z" fill="#ffffff"/>' },

// 287. Flashlight2
    { id: 839, name: "Flashlight2", category: "iot", svgContent: '<path d="M6 9l6-6 6 6v3H6V9z"/><rect x="8" y="13" width="8" height="8" rx="1"/><line x1="12" y1="13" x2="12" y2="21"/>' },
    { id: 840, name: "Flashlight2Thin", category: "iot", svgContent: '<g fill="none" stroke-width="0.5"><path d="M6 9l6-6 6 6v3H6V9z"/><rect x="8" y="13" width="8" height="8" rx="1"/><line x1="12" y1="13" x2="12" y2="21"/></g>' },
    { id: 841, name: "Flashlight2Inverted", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M6 9l6-6 6 6v3H6V9z"/><rect fill="var(--ax-bg-inverse, white)" x="8" y="13" width="8" height="8" rx="1"/><line stroke="var(--ax-bg-inverse, white)" x1="12" y1="13" x2="12" y2="21"/>' },

// 288. Flower-Color
    { id: 842, name: "Flower-Color", category: "general", svgContent: '<defs><linearGradient id="flwGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ff4081"/><stop offset="100%" stop-color="#c2185b"/></linearGradient></defs><g fill="url(#flwGrad)"><circle cx="12" cy="7" r="3.5"/><circle cx="12" cy="17" r="3.5"/><circle cx="7" cy="12" r="3.5"/><circle cx="17" cy="12" r="3.5"/><circle cx="12" cy="12" r="3" fill="#ffeb3b"/></g>' },
    { id: 843, name: "Flower-Thin-Color", category: "general", svgContent: '<circle cx="12" cy="12" r="3" fill="none" stroke="#c2185b" stroke-width="0.75"/>' },
    { id: 844, name: "Flower-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#c2185b" rx="4"/><circle cx="12" cy="8" r="3" fill="#ffffff"/><circle cx="12" cy="16" r="3" fill="#ffffff"/><circle cx="8" cy="12" r="3" fill="#ffffff"/><circle cx="16" cy="12" r="3" fill="#ffffff"/><circle cx="12" cy="12" r="2.5" fill="#ffeb3b"/>' },

// 289. Flower-Small-Color
    { id: 845, name: "Flower-Small-Color", category: "general", svgContent: '<defs><linearGradient id="flsGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#f8bbd0"/><stop offset="100%" stop-color="#e91e63"/></linearGradient></defs><g><circle cx="12" cy="12" r="3" fill="#ffeb3b" stroke="#fbc02d" stroke-width="1.5"/><path d="M12 2a4 4 0 0 1 0 8 4 4 0 0 1 0-8zM12 14a4 4 0 0 1 0 8 4 4 0 0 1 0-8zM2 12a4 4 0 0 1 8 0 4 4 0 0 1-8 0zM14 12a4 4 0 0 1 8 0 4 4 0 0 1-8 0z" fill="url(#flsGrad)" stroke="#e91e63" stroke-width="1.5"/></g>' },
    { id: 846, name: "Flower-Small-Thin-Color", category: "general", svgContent: '<circle cx="12" cy="12" r="2" fill="none" stroke="#fbc02d" stroke-width="0.75"/>' },
    { id: 847, name: "Flower-Small-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#e91e63" rx="4"/><circle cx="12" cy="12" r="2" fill="#ffffff"/>' },

// 290. Folder
    { id: 848, name: "Folder", category: "development", svgContent: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>' },
    { id: 849, name: "FolderThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></g>' },
    { id: 850, name: "FolderInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></g>' },

// 291. Folder-Color
    { id: 851, name: "Folder-Color", category: "objects", svgContent: '<defs><linearGradient id="fldGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffb74d"/><stop offset="100%" stop-color="#f57c00"/></linearGradient></defs><g><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" fill="url(#fldGrad)" stroke="#e65100" stroke-width="1.5"/></g>' },
    { id: 852, name: "Folder-Thin-Color", category: "objects", svgContent: '<path d="M21 19V8H11l-2-3H4v14h17z" fill="none" stroke="#e65100" stroke-width="0.75"/>' },
    { id: 853, name: "Folder-Inverted-Color", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#e65100" rx="4"/><path d="M21 19V8H11l-2-3H4v14h17z" fill="#ffffff"/>' },

// 292. Folder-Minus
    { id: 854, name: "Folder-Minus", category: "development", svgContent: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="9" y1="14" x2="15" y2="14"/>' },
    { id: 855, name: "Folder-MinusThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="9" y1="14" x2="15" y2="14"/></g>' },
    { id: 856, name: "Folder-MinusInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="9" y1="14" x2="15" y2="14"/></g>' },

// 293. Folder-Minus-Color
    { id: 857, name: "Folder-Minus-Color", category: "ui", svgContent: '<defs><linearGradient id="foldBaseM" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffe082"/><stop offset="100%" stop-color="#ffa000"/></linearGradient></defs><g><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" fill="url(#foldBaseM)"/><path d="M2 8h20v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8z" fill="#ffb300"/><line x1="9" y1="14" x2="15" y2="14" stroke="#f44336" stroke-width="2.5" stroke-linecap="round"/></g>' },

// 294. Folder-Plus
    { id: 858, name: "Folder-Plus", category: "development", svgContent: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/>' },
    { id: 859, name: "Folder-PlusThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></g>' },
    { id: 860, name: "Folder-PlusInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></g>' },

// 295. Folder-Plus-Color
    { id: 861, name: "Folder-Plus-Color", category: "ui", svgContent: '<defs><linearGradient id="foldBase" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffe082"/><stop offset="100%" stop-color="#ffa000"/></linearGradient></defs><g><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" fill="url(#foldBase)"/><path d="M2 8h20v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8z" fill="#ffb300"/><line x1="12" y1="11" x2="12" y2="17" stroke="#4caf50" stroke-width="2.5" stroke-linecap="round"/><line x1="9" y1="14" x2="15" y2="14" stroke="#4caf50" stroke-width="2.5" stroke-linecap="round"/></g>' },

// 296. FolderOpen
    { id: 862, name: "FolderOpen", category: "development", svgContent: '<path d="M20 6a2 2 0 0 0-2-2H8l-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z"/>' },
    { id: 863, name: "FolderOpenThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><path d="M20 6a2 2 0 0 0-2-2H8l-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z"/></g>' },
    { id: 864, name: "FolderOpenInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M20 6a2 2 0 0 0-2-2H8l-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z"/>' },

// 297. Fork
    { id: 865, name: "Fork", category: "general", svgContent: '<path d="M18 2v10a4 4 0 0 1-8 0V2"/><path d="M14 2v10"/><path d="M6 2v10a2 2 0 0 0 4 0V2"/><path d="M18 22H6"/>' },
    { id: 866, name: "ForkThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M18 2v10a4 4 0 0 1-8 0V2"/><path d="M14 2v10"/><path d="M6 2v10a2 2 0 0 0 4 0V2"/><path d="M18 22H6"/></g>' },
    { id: 867, name: "ForkInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M18 2v10a4 4 0 0 1-8 0V2"/><path d="M14 2v10"/><path d="M6 2v10a2 2 0 0 0 4 0V2"/><path d="M18 22H6"/></g>' },

// 298. Forklift-Color
    { id: 868, name: "Forklift-Color", category: "general", svgContent: '<defs><linearGradient id="frkGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ff9800"/><stop offset="100%" stop-color="#f57c00"/></linearGradient></defs><g><rect x="4" y="12" width="8" height="6" fill="url(#frkGrad)" stroke="#f57c00" stroke-width="1.5"/><path d="M12 10h4v10h-2v-8h-2z" fill="#f57c00" stroke="#f57c00" stroke-width="1.5"/></g>' },
    { id: 869, name: "Forklift-Thin-Color", category: "general", svgContent: '<rect x="5" y="13" width="6" height="4" fill="none" stroke="#f57c00" stroke-width="0.75"/>' },
    { id: 870, name: "Forklift-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#f57c00" rx="4"/><rect x="5" y="13" width="6" height="4" fill="#ffffff"/>' },

// 299. ForwardSolid
    { id: 871, name: "ForwardSolid", category: "ui", svgContent: '<polyline points="5 12 19 12 13 6" fill="currentColor" opacity="0.9" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"/>' },
    { id: 872, name: "ForwardSolidThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="5 12 19 12 13 6" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"/></g>' },
    { id: 873, name: "ForwardSolidInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><polyline points="5 12 19 12 13 6" fill="var(--ax-bg-inverse, white)" opacity="0.9" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"/>' },

// 300. Frown
    { id: 874, name: "Frown", category: "general", svgContent: '<circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>' },
    { id: 875, name: "FrownThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></g>' },
    { id: 876, name: "FrownInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></g>' },

// 301. Frown-Color
    { id: 877, name: "Frown-Color", category: "ui", svgContent: '<defs><linearGradient id="faceSad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffb74d"/><stop offset="100%" stop-color="#f57c00"/></linearGradient></defs><g><circle cx="12" cy="12" r="10" fill="url(#faceSad)"/><path d="M16 16s-1.5-2-4-2-4 2-4 2" fill="none" stroke="#5d4037" stroke-width="2" stroke-linecap="round"/><circle cx="9" cy="9" r="1.5" fill="#5d4037"/><circle cx="15" cy="9" r="1.5" fill="#5d4037"/></g>' },

// 302. Frown-Off
    { id: 878, name: "Frown-Off", category: "general", svgContent: '<circle cx="12" cy="12" r="10"/><path d="M8 16s1.5-2 4-2 4 2 4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><line x1="1" y1="1" x2="23" y2="23"/>' },
    { id: 879, name: "Frown-OffThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><path d="M8 16s1.5-2 4-2 4 2 4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><line x1="1" y1="1" x2="23" y2="23"/></g>' },
    { id: 880, name: "Frown-OffInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><circle cx="12" cy="12" r="10"/><path d="M8 16s1.5-2 4-2 4 2 4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><line x1="1" y1="1" x2="23" y2="23"/></g>' },

// 303. Game-Controller-Color
    { id: 881, name: "Game-Controller-Color", category: "general", svgContent: '<defs><linearGradient id="conGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#455a64"/><stop offset="100%" stop-color="#263238"/></linearGradient></defs><g><path d="M20 8h-4l-2-3h-4l-2 3H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z" fill="url(#conGrad)" stroke="#263238" stroke-width="1.5"/><circle cx="16" cy="13" r="1.5" fill="#ff5252"/></g>' },
    { id: 882, name: "Game-Controller-Thin-Color", category: "general", svgContent: '<rect x="3" y="9" width="18" height="8" rx="2" fill="none" stroke="#263238" stroke-width="0.75"/>' },
    { id: 883, name: "Game-Controller-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#263238" rx="4"/><rect x="3" y="9" width="18" height="8" rx="2" fill="#ffffff"/>' },

// 304. Gauge2
    { id: 884, name: "Gauge2", category: "general", svgContent: '<circle cx="12" cy="12" r="10"/><polyline points="12 16 12 12 9 9"/><line x1="12" y1="6" x2="12" y2="2"/>' },
    { id: 885, name: "Gauge2Thin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><polyline points="12 16 12 12 9 9"/><line x1="12" y1="6" x2="12" y2="2"/></g>' },
    { id: 886, name: "Gauge2Inverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="10"/><polyline points="12 16 12 12 9 9"/><line stroke="var(--ax-bg-inverse, white)" x1="12" y1="6" x2="12" y2="2"/>' },

// 305. GCP
    { id: 887, name: "GCP", category: "general", svgContent: '<circle cx="12" cy="12" r="9"/><path d="M12 5a7 7 0 0 1 7 7M12 19a7 7 0 0 1-7-7"/>' },
    { id: 888, name: "GCPThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="9"/><path d="M12 5a7 7 0 0 1 7 7M12 19a7 7 0 0 1-7-7"/></g>' },
    { id: 889, name: "GCPInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="9" stroke="var(--ax-bg-inverse, white)" /><path stroke="var(--ax-bg-inverse, white)" d="M12 5a7 7 0 0 1 7 7M12 19a7 7 0 0 1-7-7" stroke="var(--ax-bg-inverse, white)" />' },

// 306. Gear
    { id: 890, name: "Gear", category: "general", svgContent: '<circle cx="12" cy="12" r="1" fill="currentColor" opacity="0.9"/><path d="M12 1v2m0 16v2M23 12h-2M3 12H1M20.49 3.51l-1.41 1.41M4.93 19.07l-1.41 1.41M20.49 20.49l-1.41-1.41M4.93 4.93l-1.41-1.41"/><circle cx="12" cy="12" r="4"/>' },
    { id: 891, name: "GearThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="1"/><path d="M12 1v2m0 16v2M23 12h-2M3 12H1M20.49 3.51l-1.41 1.41M4.93 19.07l-1.41 1.41M20.49 20.49l-1.41-1.41M4.93 4.93l-1.41-1.41"/><circle cx="12" cy="12" r="4"/></g>' },
    { id: 892, name: "GearInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="1" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><path stroke="var(--ax-bg-inverse, white)" d="M12 1v2m0 16v2M23 12h-2M3 12H1M20.49 3.51l-1.41 1.41M4.93 19.07l-1.41 1.41M20.49 20.49l-1.41-1.41M4.93 4.93l-1.41-1.41"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="4"/>' },

// 307. Gemini
    { id: 893, name: "Gemini", category: "ai", svgContent: '<path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 3l7 3.5v7L12 17l-7-3.5v-7L12 5z"/><circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.9"/>' },
    { id: 894, name: "GeminiThin", category: "ai", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 3l7 3.5v7L12 17l-7-3.5v-7L12 5z"/><circle cx="12" cy="12" r="2"/></g>' },
    { id: 895, name: "GeminiInverted", category: "ai", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 3l7 3.5v7L12 17l-7-3.5v-7L12 5z"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="2" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 308. Gift
    { id: 896, name: "Gift", category: "objects", svgContent: '<polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>' },
    { id: 897, name: "GiftThin", category: "objects", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></g>' },
    { id: 898, name: "GiftInverted", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></g>' },

// 309. Gift-Color
    { id: 899, name: "Gift-Color", category: "finance", svgContent: '<defs><linearGradient id="giftRed" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ef5350"/><stop offset="100%" stop-color="#d32f2f"/></linearGradient></defs><g><rect x="3" y="9" width="18" height="12" rx="1" fill="url(#giftRed)"/><rect x="2" y="7" width="20" height="3" fill="#e53935" rx="1"/><path d="M12 7c-2-3-5-2-5 0s3 2 5 0c2 2 5 0 5-2s-3-3-5 0z" fill="#fff176"/><line x1="12" y1="7" x2="12" y2="21" stroke="#fff176" stroke-width="2.5"/></g>' },
    { id: 900, name: "Gift-Thin-Color", category: "finance", svgContent: '<rect x="3" y="9" width="18" height="12" rx="1" fill="none" stroke="#d32f2f" stroke-width="0.75"/><path d="M12 9c-1-2-3-2-3 0s2 2 3 0c1 2 3 0 3-2s-2-2-3 0z" fill="none" stroke="#d32f2f" stroke-width="0.5"/>' },
    { id: 901, name: "Gift-Inverted-Color", category: "finance", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#d32f2f" rx="4"/><rect x="4" y="10" width="16" height="10" fill="#ffffff"/><path d="M12 10c-1.5-2.5-4-1.5-4 1s2.5 1.5 4-1c1.5 2.5 4 1 4-1s-2.5-3.5-4 1z" fill="#ffffff"/><line x1="12" y1="6" x2="12" y2="20" stroke="#d32f2f" stroke-width="2"/>' },

// 310. GitHub
    { id: 902, name: "GitHub", category: "brands", svgContent: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>' },
    { id: 903, name: "GitHubThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></g>' },
    { id: 904, name: "GitHubInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>' },

// 311. GitHub-Color
    { id: 905, name: "GitHub-Color", category: "brands", svgContent: '<defs><linearGradient id="gitHubGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#333333"/><stop offset="100%" stop-color="#111111"/></linearGradient></defs><g><path d="M12 2A10 10 0 0 0 8.8 21.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.7 9.7 0 0 1 5.1 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.6 4.9.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z" fill="url(#gitHubGrad)"/><path d="M6.4 17.7c-.1 0-.2-.1-.2-.2s.1-.2.2-.2.2.1.2.2-.1.2-.2.2zm-.4-.4c0-.1 0-.2-.1-.2s-.2 0-.2.1 0 .2.1.2.2 0 .2-.1z" fill="#ffffff" opacity="0.5"/></g>' },
    { id: 906, name: "GitHub-Thin-Color", category: "brands", svgContent: '<g fill="none" stroke="#24292e" stroke-width="0.75"><path d="M12 2A10 10 0 0 0 8.8 21.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3" /></g>' },
    { id: 907, name: "GitHub-Inverted-Color", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#24292e" rx="4"/><path d="M12 4a8 8 0 0 0-2.5 15.6c.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1.1-2.7-1.1-.4-1-1-1.2-1-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.7-.9-3.7-4 0-.9.3-1.6.8-2.2-.1-.2-.3-1 .1-2.1 0 0 .7-.2 2.2.8a7.8 7.8 0 0 1 4.2 0c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.2 0 3.1-1.9 3.8-3.7 4 .3.3.6.8.6 1.5v2.2c0 .2.1.5.5.4A8 8 0 0 0 12 4z" fill="#ffffff"/>' },

// 312. GitLab
    { id: 908, name: "GitLab", category: "brands", svgContent: '<path d="M12 2L3 8l2 7-2 7 9 5 9-5-2-7 2-7-9-6z"/>' },
    { id: 909, name: "GitLabThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 2L3 8l2 7-2 7 9 5 9-5-2-7 2-7-9-6z"/></g>' },
    { id: 910, name: "GitLabInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M12 2L3 8l2 7-2 7 9 5 9-5-2-7 2-7-9-6z"/>' },

// 313. Glass-Water
    { id: 911, name: "Glass-Water", category: "food", svgContent: '<path d="M5 2h14l-2 20H7L5 2z"/><path d="M5 2h14"/><path d="M7 6h10"/>' },
    { id: 912, name: "Glass-WaterThin", category: "food", svgContent: '<g fill="none" stroke-width="0.5"><path d="M5 2h14l-2 20H7L5 2z"/><path d="M5 2h14"/><path d="M7 6h10"/></g>' },
    { id: 913, name: "Glass-WaterInverted", category: "food", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M5 2h14l-2 20H7L5 2z"/><path d="M5 2h14"/><path d="M7 6h10"/></g>' },

// 314. Glasses
    { id: 914, name: "Glasses", category: "food", svgContent: '<circle cx="6" cy="12" r="3"/><circle cx="18" cy="12" r="3"/><line x1="9" y1="12" x2="15" y2="12"/><path d="M6 8v8M18 8v8"/>' },
    { id: 915, name: "GlassesThin", category: "food", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="6" cy="12" r="3"/><circle cx="18" cy="12" r="3"/><line x1="9" y1="12" x2="15" y2="12"/><path d="M6 8v8M18 8v8"/></g>' },
    { id: 916, name: "GlassesInverted", category: "food", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="6" cy="12" r="3"/><circle fill="var(--ax-bg-inverse, white)" cx="18" cy="12" r="3"/><line stroke="var(--ax-bg-inverse, white)" x1="9" y1="12" x2="15" y2="12"/><path stroke="var(--ax-bg-inverse, white)" d="M6 8v8M18 8v8"/>' },

// 315. Globe
    { id: 917, name: "Globe", category: "development", svgContent: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>' },
    { id: 918, name: "GlobeThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></g>' },
    { id: 919, name: "GlobeInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></g>' },

// 316. Globe-Color
    { id: 920, name: "Globe-Color", category: "iot", svgContent: '<defs><linearGradient id="globeGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4fc3f7"/><stop offset="100%" stop-color="#0288d1"/></linearGradient></defs><g fill="none" stroke="#b0bec5" stroke-width="1.5"><circle cx="12" cy="12" r="10" fill="url(#globeGrad)" stroke="url(#globeGrad)" stroke-width="2"/><path d="M12 2a15.3 15.3 0 0 1 0 20 15.3 15.3 0 0 1 0-20z"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 0 0 20" stroke="#ffffff" opacity="0.4"/></g>' },
    { id: 921, name: "Globe-Thin-Color", category: "iot", svgContent: '<circle cx="12" cy="12" r="10" fill="none" stroke="#0288d1" stroke-width="0.75"/>' },
    { id: 922, name: "Globe-Inverted-Color", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#0288d1" rx="4"/><circle cx="12" cy="12" r="8" fill="none" stroke="#ffffff" stroke-width="1.5"/><path d="M12 4a12 12 0 0 0 0 16M4 12h16" fill="none" stroke="#ffffff" stroke-width="1"/>' },

// 317. Glue-Color
    { id: 923, name: "Glue-Color", category: "general", svgContent: '<defs><linearGradient id="gluGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#cfd8dc"/></linearGradient></defs><g><rect x="7" y="6" width="10" height="14" rx="2" fill="url(#gluGrad)" stroke="#546e7a" stroke-width="1.5"/><rect x="9" y="3" width="6" height="3" fill="#ff5252"/></g>' },
    { id: 924, name: "Glue-Thin-Color", category: "general", svgContent: '<rect x="8" y="7" width="8" height="12" rx="1" fill="none" stroke="#546e7a" stroke-width="0.75"/>' },
    { id: 925, name: "Glue-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#546e7a" rx="4"/><rect x="8" y="7" width="8" height="12" rx="1" fill="#ffffff"/>' },

// 318. Google
    { id: 926, name: "Google", category: "brands", svgContent: '<circle cx="12" cy="12" r="10"/><path d="M8 12a4 4 0 1 0 8 0M12 8V4M12 20v-4"/>' },
    { id: 927, name: "GoogleThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><path d="M8 12a4 4 0 1 0 8 0M12 8V4M12 20v-4"/></g>' },
    { id: 928, name: "GoogleInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="10"/><path stroke="var(--ax-bg-inverse, white)" d="M8 12a4 4 0 1 0 8 0M12 8V4M12 20v-4"/>' },

// 319. Graph-Bar-Color
    { id: 929, name: "Graph-Bar-Color", category: "general", svgContent: '<defs><linearGradient id="grbGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#4caf50"/><stop offset="100%" stop-color="#2e7d32"/></linearGradient></defs><g><rect x="4" y="14" width="4" height="6" fill="url(#grbGrad)"/><rect x="10" y="10" width="4" height="10" fill="url(#grbGrad)"/><rect x="16" y="6" width="4" height="14" fill="url(#grbGrad)"/><path d="M2 22h20" stroke="#37474f" stroke-width="2"/></g>' },
    { id: 930, name: "Graph-Bar-Thin-Color", category: "general", svgContent: '<path d="M3 21h18" fill="none" stroke="#37474f" stroke-width="0.75"/>' },
    { id: 931, name: "Graph-Bar-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#37474f" rx="4"/><path d="M3 21h18" fill="none" stroke="#ffffff" stroke-width="1.5"/>' },

// 320. GraphQL
    { id: 932, name: "GraphQL", category: "finance", svgContent: '<polygon points="12 2 20.5 8.5 20.5 15.5 12 22 3.5 15.5 3.5 8.5 12 2"/><circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.9"/><circle cx="18.5" cy="5.75" r="1" fill="currentColor" opacity="0.9"/><circle cx="18.5" cy="18.25" r="1" fill="currentColor" opacity="0.9"/><circle cx="5.5" cy="18.25" r="1" fill="currentColor" opacity="0.9"/><circle cx="5.5" cy="5.75" r="1" fill="currentColor" opacity="0.9"/>' },
    { id: 933, name: "GraphQLThin", category: "finance", svgContent: '<g fill="none" stroke-width="0.5"><polygon points="12 2 20.5 8.5 20.5 15.5 12 22 3.5 15.5 3.5 8.5 12 2"/><circle cx="12" cy="12" r="2"/><circle cx="18.5" cy="5.75" r="1"/><circle cx="18.5" cy="18.25" r="1"/><circle cx="5.5" cy="18.25" r="1"/><circle cx="5.5" cy="5.75" r="1"/></g>' },
    { id: 934, name: "GraphQLInverted", category: "finance", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><polygon points="12 2 20.5 8.5 20.5 15.5 12 22 3.5 15.5 3.5 8.5 12 2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="2" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="18.5" cy="5.75" r="1" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="18.5" cy="18.25" r="1" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="5.5" cy="18.25" r="1" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="5.5" cy="5.75" r="1" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 321. GraphQL-Color
    { id: 935, name: "GraphQL-Color", category: "brands", svgContent: '<defs><linearGradient id="gqlPink" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#e10098"/><stop offset="100%" stop-color="#800056"/></linearGradient></defs><g stroke="url(#gqlPink)" stroke-width="1.5" fill="none"><polygon points="12 2 21 7 21 17 12 22 3 17 3 7" stroke-width="2"/><polygon points="12 22 12 2"/><polygon points="3 7 21 17"/><polygon points="3 17 21 7"/><circle cx="12" cy="2" r="2" fill="#e10098" stroke="none"/><circle cx="21" cy="7" r="2" fill="#e10098" stroke="none"/><circle cx="21" cy="17" r="2" fill="#e10098" stroke="none"/><circle cx="12" cy="22" r="2" fill="#e10098" stroke="none"/><circle cx="3" cy="17" r="2" fill="#e10098" stroke="none"/><circle cx="3" cy="7" r="2" fill="#e10098" stroke="none"/></g>' },

// 322. Grayscale
    { id: 936, name: "Grayscale", category: "general", svgContent: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8" cy="8" r="1.5" fill="currentColor" opacity="0.9"/><circle cx="16" cy="8" r="1.5" fill="currentColor" opacity="0.9"/><path d="M8 14a4 4 0 0 0 8 0"/>' },
    { id: 937, name: "GrayscaleThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8" cy="8" r="1.5"/><circle cx="16" cy="8" r="1.5"/><path d="M8 14a4 4 0 0 0 8 0"/></g>' },
    { id: 938, name: "GrayscaleInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="3" y="3" width="18" height="18" rx="2" stroke="var(--ax-bg-inverse, white)" /><circle fill="var(--ax-bg-inverse, white)" cx="8" cy="8" r="1.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="16" cy="8" r="1.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><path stroke="var(--ax-bg-inverse, white)" d="M8 14a4 4 0 0 0 8 0"/>' },

// 323. Grid
    { id: 939, name: "Grid", category: "ui", svgContent: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>' },
    { id: 940, name: "GridThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></g>' },
    { id: 941, name: "GridInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></g>' },

// 324. Grid-Color
    { id: 942, name: "Grid-Color", category: "development", svgContent: '<defs><linearGradient id="gridGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ab47bc"/><stop offset="100%" stop-color="#7b1fa2"/></linearGradient></defs><g><rect x="3" y="3" width="7" height="7" rx="1" fill="url(#gridGrad)"/><rect x="14" y="3" width="7" height="7" rx="1" fill="url(#gridGrad)"/><rect x="3" y="14" width="7" height="7" rx="1" fill="url(#gridGrad)"/><rect x="14" y="14" width="7" height="7" rx="1" fill="url(#gridGrad)"/></g>' },
    { id: 943, name: "Grid-Thin-Color", category: "development", svgContent: '<rect x="3" y="3" width="6" height="6" rx="1" fill="none" stroke="#7b1fa2" stroke-width="0.75"/><rect x="15" y="3" width="6" height="6" rx="1" fill="none" stroke="#7b1fa2" stroke-width="0.75"/><rect x="3" y="15" width="6" height="6" rx="1" fill="none" stroke="#7b1fa2" stroke-width="0.75"/><rect x="15" y="15" width="6" height="6" rx="1" fill="none" stroke="#7b1fa2" stroke-width="0.75"/>' },
    { id: 944, name: "Grid-Inverted-Color", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#7b1fa2" rx="4"/><rect x="4" y="4" width="6" height="6" fill="#ffffff"/><rect x="14" y="4" width="6" height="6" fill="#ffffff"/><rect x="4" y="14" width="6" height="6" fill="#ffffff"/><rect x="14" y="14" width="6" height="6" fill="#ffffff"/>' },

// 325. Grill
    { id: 945, name: "Grill", category: "general", svgContent: '<path d="M3 14h18"/><path d="M3 10h18"/><path d="M3 6h18"/><path d="M2 14a10 10 0 0 0 20 0H2z"/><path d="M4 14a8 8 0 0 1 16 0"/>' },
    { id: 946, name: "GrillThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M3 14h18"/><path d="M3 10h18"/><path d="M3 6h18"/><path d="M2 14a10 10 0 0 0 20 0H2z"/><path d="M4 14a8 8 0 0 1 16 0"/></g>' },
    { id: 947, name: "GrillInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M3 14h18"/><path d="M3 10h18"/><path d="M3 6h18"/><path d="M2 14a10 10 0 0 0 20 0H2z"/><path d="M4 14a8 8 0 0 1 16 0"/></g>' },

// 326. Group
    { id: 948, name: "Group", category: "ui", svgContent: '<circle cx="5" cy="7" r="2" fill="currentColor" opacity="0.9"/><circle cx="19" cy="7" r="2" fill="currentColor" opacity="0.9"/><circle cx="12" cy="6" r="2.5" fill="currentColor" opacity="0.9"/><path d="M3 18c0-2 1-4 3-5M18 13c2 1 3 3 3 5M8 21h8M12 18v3"/>' },
    { id: 949, name: "GroupThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="5" cy="7" r="2"/><circle cx="19" cy="7" r="2"/><circle cx="12" cy="6" r="2.5"/><path d="M3 18c0-2 1-4 3-5M18 13c2 1 3 3 3 5M8 21h8M12 18v3"/></g>' },
    { id: 950, name: "GroupInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="5" cy="7" r="2" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="19" cy="7" r="2" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="6" r="2.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><path stroke="var(--ax-bg-inverse, white)" d="M3 18c0-2 1-4 3-5M18 13c2 1 3 3 3 5M8 21h8M12 18v3"/>' },

// 327. Guitar-Color
    { id: 951, name: "Guitar-Color", category: "general", svgContent: '<defs><linearGradient id="gtrGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#a1887f"/><stop offset="100%" stop-color="#5d4037"/></linearGradient></defs><g><path d="M12 2c-5 0-8 3-8 8s3 8 8 8 8-3 8-8-3-8-8-8z" fill="url(#gtrGrad)" stroke="#5d4037" stroke-width="1.5"/><rect x="11" y="10" width="2" height="12" fill="#5d4037"/><circle cx="12" cy="10" r="1.5" fill="#121212"/></g>' },
    { id: 952, name: "Guitar-Thin-Color", category: "general", svgContent: '<path d="M12 3c-4 0-7 2-7 7s3 7 7 7 7-2 7-7-3-7-7-7z" fill="none" stroke="#5d4037" stroke-width="0.75"/>' },
    { id: 953, name: "Guitar-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#5d4037" rx="4"/><path d="M12 3c-4 0-7 2-7 7s3 7 7 7 7-2 7-7-3-7-7-7z" fill="#ffffff"/>' },

// 328. Hand-Stop
    { id: 954, name: "Hand-Stop", category: "objects", svgContent: '<path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>' },
    { id: 955, name: "Hand-StopThin", category: "objects", svgContent: '<g fill="none" stroke-width="0.5"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></g>' },
    { id: 956, name: "Hand-StopInverted", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></g>' },

// 329. Hard-Drive
    { id: 957, name: "Hard-Drive", category: "development", svgContent: '<line x1="22" y1="12" x2="2" y2="12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" y1="16" x2="6.01" y2="16"/><line x1="10" y1="16" x2="10.01" y2="16"/>' },
    { id: 958, name: "Hard-DriveThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><line x1="22" y1="12" x2="2" y2="12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" y1="16" x2="6.01" y2="16"/><line x1="10" y1="16" x2="10.01" y2="16"/></g>' },
    { id: 959, name: "Hard-DriveInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><line x1="22" y1="12" x2="2" y2="12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" y1="16" x2="6.01" y2="16"/><line x1="10" y1="16" x2="10.01" y2="16"/></g>' },

// 330. Hard-Drive-Color
    { id: 960, name: "Hard-Drive-Color", category: "development", svgContent: '<defs><linearGradient id="hdGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#b0bec5"/><stop offset="100%" stop-color="#78909c"/></linearGradient></defs><g><rect x="3" y="2" width="18" height="20" rx="2" fill="url(#hdGrad)"/><line x1="3" y1="16" x2="21" y2="16" stroke="#455a64" stroke-width="1.5"/><circle cx="6" cy="19" r="1" fill="#4caf50"/><circle cx="12" cy="9" r="4" fill="#cfd8dc" stroke="#455a64" stroke-width="1.5"/><circle cx="12" cy="9" r="1" fill="#455a64"/></g>' },
    { id: 961, name: "Hard-Drive-Thin-Color", category: "development", svgContent: '<rect x="4" y="2" width="16" height="20" rx="2" fill="none" stroke="#78909c" stroke-width="0.75"/><circle cx="12" cy="8" r="3" fill="none" stroke="#78909c" stroke-width="0.5"/>' },
    { id: 962, name: "Hard-Drive-Inverted-Color", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#455a64" rx="4"/><rect x="4" y="3" width="16" height="18" rx="1" fill="#ffffff"/><line x1="4" y1="15" x2="20" y2="15" stroke="#455a64" stroke-width="1.5"/>' },

// 331. Hashtag
    { id: 963, name: "Hashtag", category: "ui", svgContent: '<line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/>' },
    { id: 964, name: "HashtagThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><line x1="4" y1="9" x2="20" y2="9"/><line x1="10" y1="3" x2="8" y2="21"/></g>' },
    { id: 965, name: "HashtagInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><line stroke="var(--ax-bg-inverse, white)" x1="4" y1="9" x2="20" y2="9"/><line stroke="var(--ax-bg-inverse, white)" x1="4" y1="15" x2="20" y2="15"/><line stroke="var(--ax-bg-inverse, white)" x1="10" y1="3" x2="8" y2="21"/><line stroke="var(--ax-bg-inverse, white)" x1="16" y1="3" x2="14" y2="21"/>' },

// 332. HBO
    { id: 966, name: "HBO", category: "general", svgContent: '<rect x="2" y="2" width="20" height="20" rx="2"/><path d="M6 8h2v8H6zM10 8h2v8h-2zM14 8h4v2h-4zM14 12h4v2h-4zM14 14h4v2h-4z"/>' },
    { id: 967, name: "HBOThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M6 8h2v8H6zM10 8h2v8h-2zM14 8h4v2h-4zM14 12h4v2h-4zM14 14h4v2h-4z"/></g>' },
    { id: 968, name: "HBOInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="2" y="2" width="20" height="20" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M6 8h2v8H6zM10 8h2v8h-2zM14 8h4v2h-4zM14 12h4v2h-4zM14 14h4v2h-4z"/>' },

// 333. Heading1
    { id: 969, name: "Heading1", category: "general", svgContent: '<line x1="4" y1="9" x2="4" y2="21"/><line x1="4" y1="9" x2="12" y2="9"/><line x1="12" y1="9" x2="12" y2="21"/><line x1="12" y1="15" x2="20" y2="9"/><line x1="20" y1="9" x2="20" y2="21"/>' },
    { id: 970, name: "Heading1Thin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><line x1="4" y1="9" x2="4" y2="21"/><line x1="12" y1="9" x2="12" y2="21"/><line x1="20" y1="9" x2="20" y2="21"/></g>' },
    { id: 971, name: "Heading1Inverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><line stroke="var(--ax-bg-inverse, white)" x1="4" y1="9" x2="4" y2="21"/><line stroke="var(--ax-bg-inverse, white)" x1="4" y1="9" x2="12" y2="9"/><line stroke="var(--ax-bg-inverse, white)" x1="12" y1="9" x2="12" y2="21"/><line stroke="var(--ax-bg-inverse, white)" x1="12" y1="15" x2="20" y2="9"/><line stroke="var(--ax-bg-inverse, white)" x1="20" y1="9" x2="20" y2="21"/>' },

// 334. Heading2
    { id: 972, name: "Heading2", category: "general", svgContent: '<line x1="4" y1="12" x2="4" y2="18"/><path d="M4 9c0-1 .895-2 2-2s2 .895 2 2c0 1-.895 2-2 2s-2-.895-2-2"/><path d="M10 9h8c0 4-4 8-4 8s-4-4-4-8z"/><line x1="18" y1="12" x2="18" y2="18"/>' },
    { id: 973, name: "Heading2Thin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><line x1="4" y1="12" x2="4" y2="18"/><path d="M4 9c0-1 .895-2 2-2s2 .895 2 2c0 1-.895 2-2 2s-2-.895-2-2"/><path d="M10 9h8c0 4-4 8-4 8s-4-4-4-8z"/><line x1="18" y1="12" x2="18" y2="18"/></g>' },
    { id: 974, name: "Heading2Inverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><line stroke="var(--ax-bg-inverse, white)" x1="4" y1="12" x2="4" y2="18"/><path stroke="var(--ax-bg-inverse, white)" d="M4 9c0-1 .895-2 2-2s2 .895 2 2c0 1-.895 2-2 2s-2-.895-2-2"/><path stroke="var(--ax-bg-inverse, white)" d="M10 9h8c0 4-4 8-4 8s-4-4-4-8z"/><line stroke="var(--ax-bg-inverse, white)" x1="18" y1="12" x2="18" y2="18"/>' },

// 335. Headphone
    { id: 975, name: "Headphone", category: "general", svgContent: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>' },
    { id: 976, name: "HeadphoneThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></g>' },
    { id: 977, name: "HeadphoneInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></g>' },

// 336. Headphones
    { id: 978, name: "Headphones", category: "media", svgContent: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>' },
    { id: 979, name: "HeadphonesThin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></g>' },
    { id: 980, name: "HeadphonesInverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></g>' },

// 337. Headphones-Color
    { id: 981, name: "Headphones-Color", category: "communication", svgContent: '<defs><linearGradient id="hpGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#ec407a"/><stop offset="100%" stop-color="#9c27b0"/></linearGradient></defs><g><path d="M3 18v-6c0-5 4-9 9-9s9 4 9 9v6" fill="none" stroke="url(#hpGrad)" stroke-width="2.5" stroke-linecap="round"/><rect x="2" y="14" width="4" height="6" rx="1.5" fill="#212121"/><rect x="18" y="14" width="4" height="6" rx="1.5" fill="#212121"/></g>' },
    { id: 982, name: "Headphones-Thin-Color", category: "communication", svgContent: '<path d="M3 17v-5c0-5 4-9 9-9s9 4 9 9v5" fill="none" stroke="#9c27b0" stroke-width="0.75"/>' },
    { id: 983, name: "Headphones-Inverted-Color", category: "communication", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#9c27b0" rx="4"/><path d="M4 17v-5c0-4.4 3.6-8 8-8s8 3.6 8 8v5" fill="none" stroke="#ffffff" stroke-width="2"/><rect x="3" y="13" width="3" height="5" fill="#ffffff"/><rect x="18" y="13" width="3" height="5" fill="#ffffff"/>' },

// 338. Headset
    { id: 984, name: "Headset", category: "communication", svgContent: '<path d="M3 9l2 12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2l2-12M3 9h18M7 9a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4"/><line x1="9" y1="6" x2="9" y2="4"/><line x1="15" y1="6" x2="15" y2="4"/>' },
    { id: 985, name: "HeadsetThin", category: "communication", svgContent: '<g fill="none" stroke-width="0.5"><path d="M3 9l2 12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2l2-12M3 9h18M7 9a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4"/><line x1="9" y1="6" x2="9" y2="4"/><line x1="15" y1="6" x2="15" y2="4"/></g>' },
    { id: 986, name: "HeadsetInverted", category: "communication", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M3 9l2 12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2l2-12M3 9h18M7 9a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4"/><line stroke="var(--ax-bg-inverse, white)" x1="9" y1="6" x2="9" y2="4"/><line stroke="var(--ax-bg-inverse, white)" x1="15" y1="6" x2="15" y2="4"/>' },

// 339. Heart
    { id: 987, name: "Heart", category: "media", svgContent: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>' },
    { id: 988, name: "HeartThin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></g>' },
    { id: 989, name: "HeartInverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></g>' },

// 340. Heart-Broken-Color
    { id: 990, name: "Heart-Broken-Color", category: "ui", svgContent: '<defs><linearGradient id="hbRed" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ff5252"/><stop offset="100%" stop-color="#b71c1c"/></linearGradient></defs><g><path d="M12 6.2v10.3l1.45 1.32C18.6 13.14 22 10.06 22 6.28 22 3.2 19.58.78 16.5.78c-1.74 0-3.41.81-4.5 2.09V6.2z" fill="url(#hbRed)"/><path d="M12 6.2L10 9l3 3-2 3.5 1 1.5v-1.7L4.5 12C1.4 8.6 1 5.4 1 3c0-1.5 1.5-3 4.5-3 1.7 0 3.4.8 4.5 2.1V6.2z" fill="#e53935"/><path d="M12 6.2L10 9l3 3-2 3.5 1 1.5V6.2z" fill="none" stroke="#ffffff" stroke-width="1.25"/></g>' },
    { id: 991, name: "Heart-Broken-Thin-Color", category: "ui", svgContent: '<path d="M12 5v14M12 5c-1.1-1.2-2.8-2-4.5-2C4.4 3 2 5.4 2 8.5c0 3.8 3.4 6.9 8.5 11.5l1.5 1.3 1.5-1.3c5.1-4.6 8.5-7.7 8.5-11.5C22 5.4 19.6 3 16.5 3c-1.7 0-3.4.8-4.5 2z" fill="none" stroke="#b71c1c" stroke-width="0.75"/>' },
    { id: 992, name: "Heart-Broken-Inverted-Color", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#b71c1c" rx="4"/><path d="M12 21.4l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.4z" fill="#ffffff"/><path d="M12 5l-2 3 3 3-2 3.5 1 2V5z" fill="#b71c1c"/>' },

// 341. Heart-Color
    { id: 993, name: "Heart-Color", category: "ui", svgContent: '<defs><linearGradient id="heartRed" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ff5252"/><stop offset="100%" stop-color="#c62828"/></linearGradient></defs><g><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="url(#heartRed)"/><path d="M7.5 5c-2 0-3.5 1.5-3.5 3.5 0 2.5 2.5 5 6.5 8.5V6.2C10 5.4 8.8 5 7.5 5z" fill="#ff8a80" opacity="0.3"/></g>' },
    { id: 994, name: "Heart-Thin-Color", category: "ui", svgContent: '<path d="M12 20l-1-1C5 14 2 11 2 8a5 5 0 0 1 10-3 5 5 0 0 1 10 3c0 3-3 6-9 11z" fill="none" stroke="#b71c1c" stroke-width="0.75"/>' },
    { id: 995, name: "Heart-Inverted-Color", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#b71c1c" rx="4"/><path d="M12 20l-1-1C5 14 2 11 2 8a5 5 0 0 1 10-3 5 5 0 0 1 10 3c0 3-3 6-9 11z" fill="#ffffff"/>' },

// 342. Helicopter-Color
    { id: 996, name: "Helicopter-Color", category: "general", svgContent: '<defs><linearGradient id="hlcGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#b0bec5"/><stop offset="100%" stop-color="#78909c"/></linearGradient></defs><g><ellipse cx="12" cy="12" rx="8" ry="4" fill="url(#hlcGrad)" stroke="#78909c" stroke-width="1.5"/><line x1="12" y1="8" x2="12" y2="4" stroke="#455a64" stroke-width="2"/><line x1="4" y1="4" x2="20" y2="4" stroke="#455a64" stroke-width="2" stroke-linecap="round"/></g>' },
    { id: 997, name: "Helicopter-Thin-Color", category: "general", svgContent: '<ellipse cx="12" cy="12" rx="7" ry="3" fill="none" stroke="#78909c" stroke-width="0.75"/>' },
    { id: 998, name: "Helicopter-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#78909c" rx="4"/><ellipse cx="12" cy="12" rx="7" ry="3" fill="#ffffff"/>' },

// 343. Help-Circle
    { id: 999, name: "Help-Circle", category: "ui", svgContent: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>' },
    { id: 1000, name: "Help-CircleThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></g>' },
    { id: 1001, name: "Help-CircleInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></g>' },

// 344. Help-Circle-Color
    { id: 1002, name: "Help-Circle-Color", category: "ui", svgContent: '<defs><linearGradient id="helpCirc" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#64b5f6"/><stop offset="100%" stop-color="#1565c0"/></linearGradient></defs><g><circle cx="12" cy="12" r="10" fill="url(#helpCirc)"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/><circle cx="12" cy="17" r="1.25" fill="#ffffff"/></g>' },

// 345. Highlighter
    { id: 1003, name: "Highlighter", category: "general", svgContent: '<path d="M17 3a2.828 2.828 0 1 1 4 4l-7.07 7.07-4-4L17 3z"/><path d="M2 21h20M3 21l3-9h12l3 9"/>' },
    { id: 1004, name: "HighlighterThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M17 3a2.828 2.828 0 1 1 4 4l-7.07 7.07-4-4L17 3z"/><path d="M2 21h20M3 21l3-9h12l3 9"/></g>' },
    { id: 1005, name: "HighlighterInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M17 3a2.828 2.828 0 1 1 4 4l-7.07 7.07-4-4L17 3z"/><path stroke="var(--ax-bg-inverse, white)" d="M2 21h20M3 21l3-9h12l3 9"/>' },

// 346. Home
    { id: 1006, name: "Home", category: "ui", svgContent: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>' },
    { id: 1007, name: "HomeThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></g>' },
    { id: 1008, name: "HomeInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></g>' },

// 347. Home-Color
    { id: 1009, name: "Home-Color", category: "iot", svgContent: '<defs><linearGradient id="roofGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#e53935"/><stop offset="100%" stop-color="#b71c1c"/></linearGradient><linearGradient id="wallGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fff8e1"/><stop offset="100%" stop-color="#ffe082"/></linearGradient></defs><g><polygon points="12 2 2 11 4 11 4 22 20 22 20 11 22 11" fill="url(#wallGrad)"/><polygon points="12 2 1 11 3 13 12 5 21 13 23 11" fill="url(#roofGrad)"/><rect x="10" y="14" width="4" height="8" fill="#795548"/><circle cx="11" cy="18" r="0.5" fill="#ffd54f"/></g>' },

// 348. HomeSolid
    { id: 1010, name: "HomeSolid", category: "ui", svgContent: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="currentColor" opacity="0.9"/><rect x="9" y="12" width="6" height="10" fill="currentColor" opacity="0.9" opacity="0.2"/>' },
    { id: 1011, name: "HomeSolidThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><rect x="9" y="12" width="6" height="10"/></g>' },
    { id: 1012, name: "HomeSolidInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><rect fill="var(--ax-bg-inverse, white)" x="9" y="12" width="6" height="10" fill="var(--ax-bg-inverse, white)" opacity="0.9" opacity="0.2"/>' },

// 349. Hot-Air-Balloon-Color
    { id: 1013, name: "Hot-Air-Balloon-Color", category: "ai", svgContent: '<defs><linearGradient id="habGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#f44336"/><stop offset="100%" stop-color="#b71c1c"/></linearGradient></defs><g><path d="M12 2a6 6 0 0 0-6 6c0 4 2 6 6 6s6-2 6-6a6 6 0 0 0-6-6z" fill="url(#habGrad)" stroke="#b71c1c" stroke-width="1.5"/><rect x="10" y="14" width="4" height="4" fill="#795548"/></g>' },
    { id: 1014, name: "Hot-Air-Balloon-Thin-Color", category: "ai", svgContent: '<path d="M12 3a5 5 0 0 0-5 5c0 3 2 5 5 5s5-2 5-5a5 5 0 0 0-5-5z" fill="none" stroke="#b71c1c" stroke-width="0.75"/>' },
    { id: 1015, name: "Hot-Air-Balloon-Inverted-Color", category: "ai", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#b71c1c" rx="4"/><path d="M12 3a5 5 0 0 0-5 5c0 3 2 5 5 5s5-2 5-5a5 5 0 0 0-5-5z" fill="#ffffff"/>' },

// 350. Hot-Dog
    { id: 1016, name: "Hot-Dog", category: "general", svgContent: '<path d="M22 13H2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z"/><path d="M20 13V8a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v5"/>' },
    { id: 1017, name: "Hot-DogThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M22 13H2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z"/><path d="M20 13V8a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v5"/></g>' },
    { id: 1018, name: "Hot-DogInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M22 13H2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z"/><path d="M20 13V8a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v5"/></g>' },

// 351. Hulu
    { id: 1019, name: "Hulu", category: "general", svgContent: '<rect x="2" y="2" width="20" height="20" rx="2"/><circle cx="9" cy="12" r="3" fill="currentColor" opacity="0.9"/>' },
    { id: 1020, name: "HuluThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><rect x="2" y="2" width="20" height="20" rx="2"/><circle cx="9" cy="12" r="3"/></g>' },
    { id: 1021, name: "HuluInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="2" y="2" width="20" height="20" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="9" cy="12" r="3" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 352. Hurricane
    { id: 1022, name: "Hurricane", category: "general", svgContent: '<path d="M4 12a8 8 0 0 1 16 0 8 8 0 0 1-16 0z"/><path d="M6.34 6.34l2.83 2.83M14.83 14.83l2.83 2.83M17.66 6.34l-2.83 2.83M9.17 14.83l-2.83 2.83"/>' },
    { id: 1023, name: "HurricaneThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M4 12a8 8 0 0 1 16 0 8 8 0 0 1-16 0z"/><path d="M6.34 6.34l2.83 2.83M14.83 14.83l2.83 2.83M17.66 6.34l-2.83 2.83M9.17 14.83l-2.83 2.83"/></g>' },
    { id: 1024, name: "HurricaneInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M4 12a8 8 0 0 1 16 0 8 8 0 0 1-16 0z"/><path d="M6.34 6.34l2.83 2.83M14.83 14.83l2.83 2.83M17.66 6.34l-2.83 2.83M9.17 14.83l-2.83 2.83"/></g>' },

// 353. Image
    { id: 1025, name: "Image", category: "general", svgContent: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polygon points="21 15 16 10 5 21"/>' },
    { id: 1026, name: "ImageThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polygon points="21 15 16 10 5 21"/></g>' },
    { id: 1027, name: "ImageInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polygon points="21 15 16 10 5 21"/></g>' },

// 354. ImageAdd
    { id: 1028, name: "ImageAdd", category: "general", svgContent: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/><line x1="12" y1="5" x2="12" y2="11"/><line x1="9" y1="8" x2="15" y2="8"/>' },
    { id: 1029, name: "ImageAddThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/><line x1="12" y1="5" x2="12" y2="11"/><line x1="9" y1="8" x2="15" y2="8"/></g>' },
    { id: 1030, name: "ImageAddInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle fill="var(--ax-bg-inverse, white)" cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/><line stroke="var(--ax-bg-inverse, white)" x1="12" y1="5" x2="12" y2="11"/><line stroke="var(--ax-bg-inverse, white)" x1="9" y1="8" x2="15" y2="8"/>' },

// 355. ImageRemove
    { id: 1031, name: "ImageRemove", category: "general", svgContent: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/><line x1="19" y1="5" x2="5" y2="19"/>' },
    { id: 1032, name: "ImageRemoveThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/><line x1="19" y1="5" x2="5" y2="19"/></g>' },
    { id: 1033, name: "ImageRemoveInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle fill="var(--ax-bg-inverse, white)" cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/><line stroke="var(--ax-bg-inverse, white)" x1="19" y1="5" x2="5" y2="19"/>' },

// 356. Inbox
    { id: 1034, name: "Inbox", category: "communication", svgContent: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>' },
    { id: 1035, name: "InboxThin", category: "communication", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></g>' },
    { id: 1036, name: "InboxInverted", category: "communication", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></g>' },

// 357. Inbox2
    { id: 1037, name: "Inbox2", category: "communication", svgContent: '<polyline points="22 12 18 12 15 21 9 21 6 12 2 12"/><line x1="6" y1="5" x2="18" y2="5"/>' },
    { id: 1038, name: "Inbox2Thin", category: "communication", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="22 12 18 12 15 21 9 21 6 12 2 12"/><line x1="6" y1="5" x2="18" y2="5"/></g>' },
    { id: 1039, name: "Inbox2Inverted", category: "communication", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><polyline points="22 12 18 12 15 21 9 21 6 12 2 12"/><line stroke="var(--ax-bg-inverse, white)" x1="6" y1="5" x2="18" y2="5"/>' },

// 358. Info
    { id: 1040, name: "Info", category: "ui", svgContent: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>' },
    { id: 1041, name: "InfoThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></g>' },
    { id: 1042, name: "InfoInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></g>' },

// 359. Info-Color
    { id: 1043, name: "Info-Color", category: "ui", svgContent: '<defs><linearGradient id="infoCirc" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4db6ac"/><stop offset="100%" stop-color="#00695c"/></linearGradient></defs><g><circle cx="12" cy="12" r="10" fill="url(#infoCirc)"/><line x1="12" y1="16" x2="12" y2="12" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/><line x1="12" y1="8" x2="12.01" y2="8" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/></g>' },

// 360. InfoAlt
    { id: 1044, name: "InfoAlt", category: "ui", svgContent: '<path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12z"/><line x1="12" y1="16" x2="12" y2="12"/><circle cx="12" cy="8" r="0.8" fill="currentColor" opacity="0.9"/>' },
    { id: 1045, name: "InfoAltThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12z"/><line x1="12" y1="16" x2="12" y2="12"/><circle cx="12" cy="8" r="0.8"/></g>' },
    { id: 1046, name: "InfoAltInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12z"/><line stroke="var(--ax-bg-inverse, white)" x1="12" y1="16" x2="12" y2="12" /><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="8" r="0.8" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 361. InfoSolid
    { id: 1047, name: "InfoSolid", category: "ui", svgContent: '<circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.9" opacity="0.1"/><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><circle cx="12" cy="8" r="0.8" fill="currentColor" opacity="0.9"/>' },
    { id: 1048, name: "InfoSolidThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><circle cx="12" cy="8" r="0.8"/></g>' },
    { id: 1049, name: "InfoSolidInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="10" fill="var(--ax-bg-inverse, white)" opacity="0.9" opacity="0.1"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="10" stroke="white"/><line stroke="var(--ax-bg-inverse, white)" x1="12" y1="16" x2="12" y2="12" /><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="8" r="0.8" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 362. Ink-Color
    { id: 1050, name: "Ink-Color", category: "general", svgContent: '<defs><linearGradient id="inkGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#455a64"/><stop offset="100%" stop-color="#1a237e"/></linearGradient></defs><g><path d="M12 2C7 2 5 7 5 11c0 4 3 7 7 11 4-4 7-7 7-11 0-4-2-9-7-9z" fill="url(#inkGrad)"/><path d="M12 5c-2 0-4 2.5-4 5.5" fill="none" stroke="#ffffff" opacity="0.3" stroke-width="1.5" stroke-linecap="round"/></g>' },
    { id: 1051, name: "Ink-Thin-Color", category: "general", svgContent: '<path d="M12 3C8 3 6 7 6 11c0 3.5 2.5 6.5 6 10 3.5-3.5 6-6.5 6-11 0-4-2-8-6-8z" fill="none" stroke="#1a237e" stroke-width="0.75"/>' },
    { id: 1052, name: "Ink-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#1a237e" rx="4"/><path d="M12 4c-4 0-6 4-6 8 0 3.5 2.5 6.5 6 9.5 3.5-3 6-6.5 6-9.5 0-4-2-8-6-8z" fill="#ffffff"/>' },

// 363. Instagram
    { id: 1053, name: "Instagram", category: "brands", svgContent: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="18" cy="6" r="1" fill="currentColor" opacity="0.9"/>' },
    { id: 1054, name: "InstagramThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="18" cy="6" r="1"/></g>' },
    { id: 1055, name: "InstagramInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="2" y="2" width="20" height="20" rx="5"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="4"/><circle fill="var(--ax-bg-inverse, white)" cx="18" cy="6" r="1" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 364. Jenkins
    { id: 1056, name: "Jenkins", category: "general", svgContent: '<rect x="2" y="2" width="20" height="20" rx="2"/><circle cx="6" cy="6" r="1.5" fill="currentColor" opacity="0.9"/><circle cx="12" cy="6" r="1.5" fill="currentColor" opacity="0.9"/><circle cx="18" cy="6" r="1.5" fill="currentColor" opacity="0.9"/><circle cx="6" cy="12" r="1.5" fill="currentColor" opacity="0.9"/><circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.9"/><circle cx="18" cy="12" r="1.5" fill="currentColor" opacity="0.9"/>' },
    { id: 1057, name: "JenkinsThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><rect x="2" y="2" width="20" height="20" rx="2"/><circle cx="6" cy="6" r="1.5"/><circle cx="12" cy="6" r="1.5"/><circle cx="18" cy="6" r="1.5"/><circle cx="6" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="18" cy="12" r="1.5"/></g>' },
    { id: 1058, name: "JenkinsInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="2" y="2" width="20" height="20" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="6" cy="6" r="1.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="6" r="1.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="18" cy="6" r="1.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="6" cy="12" r="1.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="1.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="18" cy="12" r="1.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 365. Juice
    { id: 1059, name: "Juice", category: "general", svgContent: '<path d="M2 13h20v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"/><path d="M7 13V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"/><path d="M12 2v5"/>' },
    { id: 1060, name: "JuiceThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M2 13h20v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"/><path d="M7 13V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"/><path d="M12 2v5"/></g>' },
    { id: 1061, name: "JuiceInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M2 13h20v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"/><path d="M7 13V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"/><path d="M12 2v5"/></g>' },

// 366. Kanban-Color
    { id: 1062, name: "Kanban-Color", category: "development", svgContent: '<defs><linearGradient id="kbGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#26a69a"/><stop offset="100%" stop-color="#00695c"/></linearGradient></defs><g fill="url(#kbGrad)"><rect x="3" y="3" width="4" height="18" rx="1" opacity="0.4"/><rect x="10" y="3" width="4" height="18" rx="1" opacity="0.7"/><rect x="17" y="3" width="4" height="18" rx="1"/><rect x="11" y="5" width="2" height="4" fill="#ffffff"/><rect x="18" y="5" width="2" height="7" fill="#ffffff"/></g>' },
    { id: 1063, name: "Kanban-Thin-Color", category: "development", svgContent: '<rect x="3" y="3" width="4" height="18" rx="1" fill="none" stroke="#00695c" stroke-width="0.75"/><rect x="10" y="3" width="4" height="18" rx="1" fill="none" stroke="#00695c" stroke-width="0.75"/><rect x="17" y="3" width="4" height="18" rx="1" fill="none" stroke="#00695c" stroke-width="0.75"/>' },
    { id: 1064, name: "Kanban-Inverted-Color", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#00695c" rx="4"/><rect x="4" y="4" width="3" height="16" fill="#ffffff"/><rect x="10" y="4" width="3" height="12" fill="#ffffff"/><rect x="16" y="4" width="3" height="8" fill="#ffffff"/>' },

// 367. Key
    { id: 1065, name: "Key", category: "ui", svgContent: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.778-7.778z"/><line x1="14.34" y1="8.34" x2="18.34" y2="12.34"/><line x1="24" y1="0" x2="21" y2="3"/>' },
    { id: 1066, name: "KeyThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.778-7.778z"/><line x1="14.34" y1="8.34" x2="18.34" y2="12.34"/><line x1="24" y1="0" x2="21" y2="3"/></g>' },
    { id: 1067, name: "KeyInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.778-7.778z"/><line x1="14.34" y1="8.34" x2="18.34" y2="12.34"/><line x1="24" y1="0" x2="21" y2="3"/></g>' },

// 368. Key-Color
    { id: 1068, name: "Key-Color", category: "iot", svgContent: '<defs><linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ffe082"/><stop offset="50%" stop-color="#ffb300"/><stop offset="100%" stop-color="#ff8f00"/></linearGradient></defs><g fill="url(#goldGrad)"><path d="M21 2h-6a1 1 0 0 0-1 1v3h-2v2h-2v2H8a7 7 0 1 0 6 6v-4h2v-2h2V6h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-13 16a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"/><circle cx="8" cy="15" r="1" fill="#fff" opacity="0.5"/></g>' },
    { id: 1069, name: "Key-Thin-Color", category: "iot", svgContent: '<path d="M21 21l-6-6m0 0V9a5 5 0 1 0-7 7h6z" fill="none" stroke="#ffa000" stroke-width="0.75"/>' },
    { id: 1070, name: "Key-Inverted-Color", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#ffa000" rx="4"/><path d="M12.7 11.3a4 4 0 1 0-1.4 1.4L4 20v2h2v-2h2v-2h2.3l2.4-2.7z" fill="#ffffff"/>' },

// 369. Keyhole-Color
    { id: 1071, name: "Keyhole-Color", category: "iot", svgContent: '<defs><linearGradient id="khGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#cfd8dc"/><stop offset="100%" stop-color="#90a4ae"/></linearGradient></defs><g><circle cx="12" cy="12" r="10" fill="url(#khGrad)"/><path d="M12 7a2.5 2.5 0 0 0-1.5 4.5l-1 4.5h5l-1-4.5A2.5 2.5 0 0 0 12 7z" fill="#212121"/></g>' },
    { id: 1072, name: "Keyhole-Thin-Color", category: "iot", svgContent: '<circle cx="12" cy="12" r="10" fill="none" stroke="#90a4ae" stroke-width="0.75"/><circle cx="12" cy="10" r="2" fill="none" stroke="#90a4ae" stroke-width="0.5"/>' },
    { id: 1073, name: "Keyhole-Inverted-Color", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#212121" rx="4"/><circle cx="12" cy="12" r="8" fill="#ffffff"/><path d="M12 9a2 2 0 0 0-1 3.7l-.5 3.3h3l-.5-3.3a2 2 0 0 0-1-3.7z" fill="#212121"/>' },

// 370. Keypad
    { id: 1074, name: "Keypad", category: "ui", svgContent: '<rect x="3" y="3" width="4" height="4" rx="1"/><rect x="10" y="3" width="4" height="4" rx="1"/><rect x="17" y="3" width="4" height="4" rx="1"/><rect x="3" y="10" width="4" height="4" rx="1"/><rect x="10" y="10" width="4" height="4" rx="1"/><rect x="17" y="10" width="4" height="4" rx="1"/><rect x="3" y="17" width="4" height="4" rx="1"/><rect x="10" y="17" width="4" height="4" rx="1"/><rect x="17" y="17" width="4" height="4" rx="1"/>' },
    { id: 1075, name: "KeypadThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><rect x="3" y="3" width="4" height="4" rx="1"/><rect x="10" y="3" width="4" height="4" rx="1"/><rect x="17" y="3" width="4" height="4" rx="1"/><rect x="3" y="10" width="4" height="4" rx="1"/><rect x="10" y="10" width="4" height="4" rx="1"/><rect x="17" y="10" width="4" height="4" rx="1"/><rect x="3" y="17" width="4" height="4" rx="1"/><rect x="10" y="17" width="4" height="4" rx="1"/><rect x="17" y="17" width="4" height="4" rx="1"/></g>' },
    { id: 1076, name: "KeypadInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><rect x="3" y="3" width="4" height="4" rx="1"/><rect x="10" y="3" width="4" height="4" rx="1"/><rect x="17" y="3" width="4" height="4" rx="1"/><rect x="3" y="10" width="4" height="4" rx="1"/><rect x="10" y="10" width="4" height="4" rx="1"/><rect x="17" y="10" width="4" height="4" rx="1"/><rect x="3" y="17" width="4" height="4" rx="1"/><rect x="10" y="17" width="4" height="4" rx="1"/><rect x="17" y="17" width="4" height="4" rx="1"/></g>' },

// 371. Kite-Color
    { id: 1077, name: "Kite-Color", category: "general", svgContent: '<defs><linearGradient id="ktGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#80cbc4"/><stop offset="100%" stop-color="#00695c"/></linearGradient></defs><g><path d="M12 2l8 8-8 12-8-12z" fill="url(#ktGrad)" stroke="#00695c" stroke-width="1.5"/><line x1="12" y1="2" x2="12" y2="22" stroke="#00695c" stroke-width="1"/><path d="M12 22l3 2" stroke="#00695c" stroke-width="1"/></g>' },
    { id: 1078, name: "Kite-Thin-Color", category: "general", svgContent: '<path d="M12 3l7 7-7 11-7-11z" fill="none" stroke="#00695c" stroke-width="0.75"/>' },
    { id: 1079, name: "Kite-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#00695c" rx="4"/><path d="M12 3l7 7-7 11-7-11z" fill="#ffffff"/>' },

// 372. Knife
    { id: 1080, name: "Knife", category: "food", svgContent: '<path d="M12 2v20"/><path d="M15 2v14a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V2z"/><path d="M12 2l3 0"/>' },
    { id: 1081, name: "KnifeThin", category: "food", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 2v20"/><path d="M15 2v14a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V2z"/><path d="M12 2l3 0"/></g>' },
    { id: 1082, name: "KnifeInverted", category: "food", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M12 2v20"/><path d="M15 2v14a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V2z"/><path d="M12 2l3 0"/></g>' },

// 373. Kubernetes
    { id: 1083, name: "Kubernetes", category: "brands", svgContent: '<circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.9"/><path d="M12 4v3M12 17v3M6 12H3M21 12h-3M6.5 6.5l-2.1-2.1M19.6 19.6l-2.1-2.1M17.5 6.5l2.1-2.1M4.4 19.6l2.1-2.1"/>' },
    { id: 1084, name: "KubernetesThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="2"/><path d="M12 4v3M12 17v3M6 12H3M21 12h-3M6.5 6.5l-2.1-2.1M19.6 19.6l-2.1-2.1M17.5 6.5l2.1-2.1M4.4 19.6l2.1-2.1"/></g>' },
    { id: 1085, name: "KubernetesInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="2" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><path stroke="var(--ax-bg-inverse, white)" d="M12 4v3M12 17v3M6 12H3M21 12h-3M6.5 6.5l-2.1-2.1M19.6 19.6l-2.1-2.1M17.5 6.5l2.1-2.1M4.4 19.6l2.1-2.1"/>' },

// 374. Kubernetes-Color
    { id: 1086, name: "Kubernetes-Color", category: "brands", svgContent: '<defs><linearGradient id="k8sBlue" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#326ce5"/><stop offset="100%" stop-color="#1f4087"/></linearGradient></defs><g fill="url(#k8sBlue)"><polygon points="12 2 22 6.5 22 17.5 12 22 2 17.5 2 6.5"/><polygon points="12 5 19 8.2 19 15.8 12 19 5 15.8 5 8.2" fill="#ffffff" opacity="0.2"/><circle cx="12" cy="12" r="3" fill="#ffffff"/></g>' },

// 375. Laptop
    { id: 1087, name: "Laptop", category: "development", svgContent: '<polyline points="4 18 1 18 1 20 23 20 23 18 20 18"/><rect x="4" y="4" width="16" height="14" rx="2"/>' },
    { id: 1088, name: "LaptopThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="4 18 1 18 1 20 23 20 23 18 20 18"/><rect x="4" y="4" width="16" height="14" rx="2"/></g>' },
    { id: 1089, name: "LaptopInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polyline points="4 18 1 18 1 20 23 20 23 18 20 18"/><rect x="4" y="4" width="16" height="14" rx="2"/></g>' },

// 376. Layers
    { id: 1090, name: "Layers", category: "ui", svgContent: '<polygon points="12 2 2 7 12 12 22 7"/><polygon points="2 17 12 22 22 17"/><polygon points="2 12 12 17 22 12"/>' },
    { id: 1091, name: "LayersThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><polygon points="12 2 2 7 12 12 22 7"/><polygon points="2 17 12 22 22 17"/><polygon points="2 12 12 17 22 12"/></g>' },
    { id: 1092, name: "LayersInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polygon points="12 2 2 7 12 12 22 7"/><polygon points="2 17 12 22 22 17"/><polygon points="2 12 12 17 22 12"/></g>' },

// 377. Layers-3-Color
    { id: 1093, name: "Layers-3-Color", category: "development", svgContent: '<defs><linearGradient id="lay3Grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#7e57c2"/><stop offset="100%" stop-color="#512da8"/></linearGradient></defs><g fill="none" stroke="url(#lay3Grad)" stroke-width="2" stroke-linejoin="round"><polygon points="12 2 21 6 12 10 3 6" fill="url(#lay3Grad)" stroke="none"/><path d="M3 11l9 4 9-4M3 16l9 4 9-4"/></g>' },

// 378. Layers-3-Thin-Color
    { id: 1094, name: "Layers-3-Thin-Color", category: "development", svgContent: '<polygon points="12 4 21 8 12 12 3 8" fill="none" stroke="#512da8" stroke-width="0.75"/><path d="M3 13l9 4 9-4M3 18l9 4 9-4" fill="none" stroke="#512da8" stroke-width="0.75"/>' },
    { id: 1095, name: "Layers-3-Inverted-Color", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#512da8" rx="4"/><polygon points="12 4 21 8 12 12 3 8" fill="#ffffff"/><polygon points="12 9 21 13 12 17 3 13" fill="#ffffff" opacity="0.6"/><polygon points="12 14 21 18 12 22 3 18" fill="#ffffff" opacity="0.3"/>' },

// 379. Layers-Color
    { id: 1096, name: "Layers-Color", category: "development", svgContent: '<defs><linearGradient id="layGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4db6ac"/><stop offset="100%" stop-color="#00695c"/></linearGradient></defs><g fill="none" stroke="url(#layGrad)" stroke-width="2"><polygon points="12 2 22 7 12 12 2 7" fill="url(#layGrad)" stroke="none"/><path d="M2 12l10 5 10-5M2 17l10 5 10-5" stroke-linecap="round"/></g>' },
    { id: 1097, name: "Layers-Thin-Color", category: "development", svgContent: '<polygon points="12 4 21 8 12 12 3 8" fill="none" stroke="#00695c" stroke-width="0.75"/><path d="M3 14l9 4 9-4" fill="none" stroke="#00695c" stroke-width="0.75"/>' },
    { id: 1098, name: "Layers-Inverted-Color", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#00695c" rx="4"/><polygon points="12 4 21 8 12 12 3 8" fill="#ffffff"/><polygon points="12 11 21 15 12 19 3 15" fill="#ffffff" opacity="0.6"/>' },

// 380. Layout
    { id: 1099, name: "Layout", category: "general", svgContent: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>' },
    { id: 1100, name: "LayoutThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></g>' },
    { id: 1101, name: "LayoutInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></g>' },

// 381. Layout-Color
    { id: 1102, name: "Layout-Color", category: "development", svgContent: '<defs><linearGradient id="layGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#90caf9"/><stop offset="100%" stop-color="#1e88e5"/></linearGradient></defs><g><rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="url(#layGrad)" stroke-width="2"/><rect x="5" y="5" width="14" height="4" fill="#1e88e5" opacity="0.3"/><rect x="5" y="11" width="6" height="8" fill="#1e88e5" opacity="0.15"/><rect x="13" y="11" width="6" height="8" fill="#1e88e5" opacity="0.15"/></g>' },
    { id: 1103, name: "Layout-Thin-Color", category: "development", svgContent: '<rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="#1e88e5" stroke-width="0.75"/>' },
    { id: 1104, name: "Layout-Inverted-Color", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#1e88e5" rx="4"/><rect x="4" y="4" width="16" height="16" rx="1" fill="#ffffff"/>' },

// 382. Leaf-Color
    { id: 1105, name: "Leaf-Color", category: "general", svgContent: '<defs><linearGradient id="lefGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#66bb6a"/><stop offset="100%" stop-color="#1b5e20"/></linearGradient></defs><g><path d="M2 22c0-5.52 4.48-10 10-10H22V2c0 5.52-4.48 10-10 10H2v10z" fill="url(#lefGrad)"/><line x1="2" y1="22" x2="22" y2="2" stroke="#ffffff" opacity="0.3" stroke-width="1.5"/></g>' },
    { id: 1106, name: "Leaf-Thin-Color", category: "general", svgContent: '<path d="M3 21c0-5 4-9 9-9h9V3c0 5-4 9-9 9H3v9z" fill="none" stroke="#1b5e20" stroke-width="0.75"/>' },
    { id: 1107, name: "Leaf-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#1b5e20" rx="4"/><path d="M4 20c0-5 4-9 9-9h7V4c0 5-4 9-9 9H4v7z" fill="#ffffff"/>' },

// 383. Leaf-Small-Color
    { id: 1108, name: "Leaf-Small-Color", category: "general", svgContent: '<defs><linearGradient id="lfsGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#81c784"/><stop offset="100%" stop-color="#2e7d32"/></linearGradient></defs><g><path d="M12 2a10 10 0 0 1 10 10c0 10-10 10-10 10S2 22 2 12A10 10 0 0 1 12 2z" fill="url(#lfsGrad)" stroke="#2e7d32" stroke-width="1.5"/><path d="M12 2v20" stroke="#2e7d32" stroke-width="1.5"/></g>' },
    { id: 1109, name: "Leaf-Small-Thin-Color", category: "general", svgContent: '<path d="M12 3a9 9 0 0 1 9 9c0 9-9 9-9 9S3 21 3 12A9 9 0 0 1 12 3z" fill="none" stroke="#2e7d32" stroke-width="0.75"/>' },
    { id: 1110, name: "Leaf-Small-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#2e7d32" rx="4"/><path d="M12 3a9 9 0 0 1 9 9c0 9-9 9-9 9S3 21 3 12A9 9 0 0 1 12 3z" fill="#ffffff"/>' },

// 384. Lightbulb-Color
    { id: 1111, name: "Lightbulb-Color", category: "general", svgContent: '<defs><linearGradient id="blbGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fff176"/><stop offset="100%" stop-color="#fbc02d"/></linearGradient></defs><g><path d="M12 2a7 7 0 0 1 7 7c0 4-3 6-3 6v2a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2s-3-2-3-6a7 7 0 0 1 7-7z" fill="url(#blbGrad)" stroke="#fbc02d" stroke-width="1.5"/><line x1="10" y1="20" x2="14" y2="20" stroke="#fbc02d" stroke-width="2"/></g>' },
    { id: 1112, name: "Lightbulb-Thin-Color", category: "general", svgContent: '<path d="M12 3a6 6 0 0 1 6 6c0 3-2 5-2 5v2a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1v-2s-2-2-2-5a6 6 0 0 1 6-6z" fill="none" stroke="#fbc02d" stroke-width="0.75"/>' },
    { id: 1113, name: "Lightbulb-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#fbc02d" rx="4"/><path d="M12 3a6 6 0 0 1 6 6c0 3-2 5-2 5v2a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1v-2s-2-2-2-5a6 6 0 0 1 6-6z" fill="#ffffff"/>' },

// 385. Lightbulb4
    { id: 1114, name: "Lightbulb4", category: "objects", svgContent: '<path d="M9 21H3v-2h.75a3 3 0 0 1 3-3h.5a3 3 0 0 1 3 3h.75v2zm0-4h-6V9a6 6 0 0 1 6-6 6 6 0 0 1 6 6v8zm0 4h6v2H9v-2z"/>' },
    { id: 1115, name: "Lightbulb4Thin", category: "objects", svgContent: '<g fill="none" stroke-width="0.5"><path d="M9 21H3v-2h.75a3 3 0 0 1 3-3h.5a3 3 0 0 1 3 3h.75v2zm0-4h-6V9a6 6 0 0 1 6-6 6 6 0 0 1 6 6v8zm0 4h6v2H9v-2z"/></g>' },
    { id: 1116, name: "Lightbulb4Inverted", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M9 21H3v-2h.75a3 3 0 0 1 3-3h.5a3 3 0 0 1 3 3h.75v2zm0-4h-6V9a6 6 0 0 1 6-6 6 6 0 0 1 6 6v8zm0 4h6v2H9v-2z"/>' },

// 386. LightBulbSmart
    { id: 1117, name: "LightBulbSmart", category: "objects", svgContent: '<path d="M9 21H3v-2h.75a3 3 0 0 1 3-3h.5a3 3 0 0 1 3 3h.75v2zm0-4H3V9a6 6 0 0 1 6-6 6 6 0 0 1 6 6v8zm0 4h6v2H9v-2z"/><path d="M12 3v2M15 5l-1.4 1.4M9 5L10.4 6.4"/>' },
    { id: 1118, name: "LightBulbSmartThin", category: "objects", svgContent: '<g fill="none" stroke-width="0.5"><path d="M9 21H3v-2h.75a3 3 0 0 1 3-3h.5a3 3 0 0 1 3 3h.75v2zm0-4H3V9a6 6 0 0 1 6-6 6 6 0 0 1 6 6v8zm0 4h6v2H9v-2z"/><path d="M12 3v2M15 5l-1.4 1.4M9 5L10.4 6.4"/></g>' },
    { id: 1119, name: "LightBulbSmartInverted", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M9 21H3v-2h.75a3 3 0 0 1 3-3h.5a3 3 0 0 1 3 3h.75v2zm0-4H3V9a6 6 0 0 1 6-6 6 6 0 0 1 6 6v8zm0 4h6v2H9v-2z"/><path stroke="var(--ax-bg-inverse, white)" d="M12 3v2M15 5l-1.4 1.4M9 5L10.4 6.4"/>' },

// 387. Lighthouse-Color
    { id: 1120, name: "Lighthouse-Color", category: "general", svgContent: '<defs><linearGradient id="lghGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#cfd8dc"/></linearGradient></defs><g><path d="M9 22h6l-1-18h-4z" fill="url(#lghGrad)" stroke="#455a64" stroke-width="1.5"/><rect x="10" y="4" width="4" height="4" fill="#ef5350"/></g>' },
    { id: 1121, name: "Lighthouse-Thin-Color", category: "general", svgContent: '<path d="M10 21h4l-1-16h-2z" fill="none" stroke="#455a64" stroke-width="0.75"/>' },
    { id: 1122, name: "Lighthouse-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#455a64" rx="4"/><path d="M10 21h4l-1-16h-2z" fill="#ffffff"/>' },

// 388. Lightning
    { id: 1123, name: "Lightning", category: "objects", svgContent: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>' },
    { id: 1124, name: "LightningThin", category: "objects", svgContent: '<g fill="none" stroke-width="0.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></g>' },
    { id: 1125, name: "LightningInverted", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></g>' },

// 389. Lightning-Color
    { id: 1126, name: "Lightning-Color", category: "iot", svgContent: '<defs><linearGradient id="ltgGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fff176"/><stop offset="100%" stop-color="#fbc02d"/></linearGradient></defs><g><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="url(#ltgGrad)" stroke="#f57f17" stroke-width="1.5"/></g>' },
    { id: 1127, name: "Lightning-Thin-Color", category: "iot", svgContent: '<path d="M13 3L4 14h8l-1 7 9-11h-8l1-7z" fill="none" stroke="#fbc02d" stroke-width="0.75"/>' },
    { id: 1128, name: "Lightning-Inverted-Color", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#fbc02d" rx="4"/><path d="M13 3L4 14h8l-1 7 9-11h-8l1-7z" fill="#ffffff"/>' },

// 390. LineChart
    { id: 1129, name: "LineChart", category: "general", svgContent: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>' },
    { id: 1130, name: "LineChartThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></g>' },
    { id: 1131, name: "LineChartInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></g>' },

// 391. Link
    { id: 1132, name: "Link", category: "ui", svgContent: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>' },
    { id: 1133, name: "LinkThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></g>' },
    { id: 1134, name: "LinkInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path stroke="var(--ax-bg-inverse, white)" d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>' },

// 392. Link-2
    { id: 1135, name: "Link-2", category: "ui", svgContent: '<path d="M15 7h3a5 5 0 0 1 5 5s0 5-5 5h-3m-6 0H6a5 5 0 0 1-5-5s0-5 5-5h3m3 5h6"/>' },
    { id: 1136, name: "Link-2Thin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M15 7h3a5 5 0 0 1 5 5s0 5-5 5h-3m-6 0H6a5 5 0 0 1-5-5s0-5 5-5h3m3 5h6"/></g>' },
    { id: 1137, name: "Link-2Inverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M15 7h3a5 5 0 0 1 5 5s0 5-5 5h-3m-6 0H6a5 5 0 0 1-5-5s0-5 5-5h3m3 5h6"/></g>' },

// 393. LinkedIn
    { id: 1138, name: "LinkedIn", category: "brands", svgContent: '<rect x="2" y="2" width="20" height="20" rx="2"/><path d="M6 8v10M10 8v10M10 11c0-1 1-2 2-2s2 1 2 2v7M6 6v.01"/>' },
    { id: 1139, name: "LinkedInThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M6 8v10M10 8v10M10 11c0-1 1-2 2-2s2 1 2 2v7M6 6v.01"/></g>' },
    { id: 1140, name: "LinkedInInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="2" y="2" width="20" height="20" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M6 8v10M10 8v10M10 11c0-1 1-2 2-2s2 1 2 2v7M6 6v.01"/>' },

// 394. LinkExternal
    { id: 1141, name: "LinkExternal", category: "ui", svgContent: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>' },
    { id: 1142, name: "LinkExternalThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></g>' },
    { id: 1143, name: "LinkExternalInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line stroke="var(--ax-bg-inverse, white)" x1="10" y1="14" x2="21" y2="3"/>' },

// 395. Loader2
    { id: 1144, name: "Loader2", category: "general", svgContent: '<path d="M21 12a9 9 0 1 1-9-9m9 0a9 9 0 0 0-9 9"/>' },
    { id: 1145, name: "Loader2Thin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M21 12a9 9 0 1 1-9-9m9 0a9 9 0 0 0-9 9"/></g>' },
    { id: 1146, name: "Loader2Inverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M21 12a9 9 0 1 1-9-9m9 0a9 9 0 0 0-9 9"/>' },

// 396. Loader3
    { id: 1147, name: "Loader3", category: "general", svgContent: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 2c5.52 0 10 4.48 10 10" stroke-dasharray="15.7 15.7" stroke-dashoffset="-15.7"/>' },
    { id: 1148, name: "Loader3Thin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 2c5.52 0 10 4.48 10 10" stroke-dasharray="15.7 15.7" stroke-dashoffset="-15.7"/></g>' },
    { id: 1149, name: "Loader3Inverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path stroke="var(--ax-bg-inverse, white)" d="M12 2c5.52 0 10 4.48 10 10" stroke-dasharray="15.7 15.7" stroke-dashoffset="-15.7"/>' },

// 397. Location-Pin-Color
    { id: 1150, name: "Location-Pin-Color", category: "iot", svgContent: '<defs><linearGradient id="pinGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ef5350"/><stop offset="100%" stop-color="#b71c1c"/></linearGradient></defs><g><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z" fill="url(#pinGrad)" stroke="#b71c1c" stroke-width="1.5"/><circle cx="12" cy="9" r="2" fill="#ffffff"/></g>' },
    { id: 1151, name: "Location-Pin-Thin-Color", category: "iot", svgContent: '<path d="M12 3a6 6 0 0 0-6 6c0 4 6 11 6 11s6-7 6-11a6 6 0 0 0-6-6z" fill="none" stroke="#b71c1c" stroke-width="0.75"/>' },
    { id: 1152, name: "Location-Pin-Inverted-Color", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#b71c1c" rx="4"/><path d="M12 3a6 6 0 0 0-6 6c0 4 6 11 6 11s6-7 6-11a6 6 0 0 0-6-6z" fill="#ffffff"/>' },

// 398. Lock
    { id: 1153, name: "Lock", category: "ui", svgContent: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>' },
    { id: 1154, name: "LockThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></g>' },
    { id: 1155, name: "LockInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></g>' },

// 399. Lock-Color
    { id: 1156, name: "Lock-Color", category: "iot", svgContent: '<defs><linearGradient id="lockBody" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffd54f"/><stop offset="100%" stop-color="#ffb300"/></linearGradient><linearGradient id="shackleGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#cfd8dc"/><stop offset="50%" stop-color="#b0bec5"/><stop offset="100%" stop-color="#78909c"/></linearGradient></defs><g><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="url(#shackleGrad)" stroke-width="3" stroke-linecap="round" fill="none"/><rect x="3" y="11" width="18" height="11" rx="2" fill="url(#lockBody)"/><circle cx="12" cy="16" r="2" fill="#5d4037"/><path d="M12 18v2" stroke="#5d4037" stroke-width="2" stroke-linecap="round"/><circle cx="9" cy="14" r="1" fill="#fff" opacity="0.4"/></g>' },
    { id: 1157, name: "Lock-Thin-Color", category: "iot", svgContent: '<rect x="5" y="11" width="14" height="10" rx="1" fill="none" stroke="#37474f" stroke-width="0.75"/>' },
    { id: 1158, name: "Lock-Inverted-Color", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#37474f" rx="4"/><rect x="5" y="11" width="14" height="10" rx="1" fill="#ffffff"/>' },

// 400. LockClosed
    { id: 1159, name: "LockClosed", category: "ui", svgContent: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2" fill="currentColor" opacity="0.9" opacity="0.1"/><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1" fill="currentColor" opacity="0.9"/>' },
    { id: 1160, name: "LockClosedThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1"/></g>' },
    { id: 1161, name: "LockClosedInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="3" y="11" width="18" height="11" rx="2" ry="2" fill="var(--ax-bg-inverse, white)" opacity="0.9" opacity="0.1"/><rect fill="var(--ax-bg-inverse, white)" x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="var(--ax-bg-inverse, white)" /><path stroke="var(--ax-bg-inverse, white)" d="M7 11V7a5 5 0 0 1 10 0v4" stroke="var(--ax-bg-inverse, white)" /><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="16" r="1" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 401. LockOpen
    { id: 1162, name: "LockOpen", category: "ui", svgContent: '<path d="M3 11v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V11M7 11V7a5 5 0 0 1 10 0" stroke-linecap="round"/><circle cx="12" cy="16" r="1" fill="currentColor" opacity="0.9"/>' },
    { id: 1163, name: "LockOpenThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M3 11v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V11M7 11V7a5 5 0 0 1 10 0" stroke-linecap="round"/><circle cx="12" cy="16" r="1"/></g>' },
    { id: 1164, name: "LockOpenInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M3 11v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V11M7 11V7a5 5 0 0 1 10 0" stroke="var(--ax-bg-inverse, white)" stroke-linecap="round"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="16" r="1" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 402. LogIn
    { id: 1165, name: "LogIn", category: "general", svgContent: '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 12 15 12 12 9"/><polyline points="10 12 15 12 12 15"/>' },
    { id: 1166, name: "LogInThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 12 15 12 12 9"/><polyline points="10 12 15 12 12 15"/></g>' },
    { id: 1167, name: "LogInInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 12 15 12 12 9"/><polyline points="10 12 15 12 12 15"/>' },

// 403. LogOut
    { id: 1168, name: "LogOut", category: "general", svgContent: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 12 9 12 12 15"/><polyline points="16 12 9 12 12 9"/>' },
    { id: 1169, name: "LogOutThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 12 9 12 12 15"/><polyline points="16 12 9 12 12 9"/></g>' },
    { id: 1170, name: "LogOutInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 12 9 12 12 15"/><polyline points="16 12 9 12 12 9"/>' },

// 404. Magic
    { id: 1171, name: "Magic", category: "ai", svgContent: '<path d="M15 4v7a3 3 0 1 1-6 0V4m3-2v2M6 20h12M9 20v2M15 20v2M3 16h18M3 8h18M6 4h12M9 2h6"/>' },
    { id: 1172, name: "MagicThin", category: "ai", svgContent: '<g fill="none" stroke-width="0.5"><path d="M15 4v7a3 3 0 1 1-6 0V4m3-2v2M6 20h12M9 20v2M15 20v2M3 16h18M3 8h18M6 4h12M9 2h6"/></g>' },
    { id: 1173, name: "MagicInverted", category: "ai", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M15 4v7a3 3 0 1 1-6 0V4m3-2v2M6 20h12M9 20v2M15 20v2M3 16h18M3 8h18M6 4h12M9 2h6"/>' },

// 405. Magic-Wand-Color
    { id: 1174, name: "Magic-Wand-Color", category: "general", svgContent: '<defs><linearGradient id="wndGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#7e57c2"/><stop offset="100%" stop-color="#311b92"/></linearGradient></defs><g><path d="M18 3l3 3L6 21H3v-3L18 3z" fill="url(#wndGrad)"/><path d="M18 3l3 3-3-3z" fill="#ffeb3b"/><circle cx="5" cy="5" r="1" fill="#ffeb3b"/><circle cx="12" cy="4" r="1.5" fill="#ffeb3b"/><circle cx="19" cy="11" r="1" fill="#ffeb3b"/></g>' },
    { id: 1175, name: "Magic-Wand-Thin-Color", category: "general", svgContent: '<path d="M18 3l3 3L6 21H3v-3z" fill="none" stroke="#311b92" stroke-width="0.75"/>' },
    { id: 1176, name: "Magic-Wand-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#311b92" rx="4"/><path d="M17 4l3 3-13 13H4v-3L17 4z" fill="#ffffff"/>' },

// 406. Magnet-Color
    { id: 1177, name: "Magnet-Color", category: "general", svgContent: '<defs><linearGradient id="magGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ff5252"/><stop offset="100%" stop-color="#b71c1c"/></linearGradient></defs><g><path d="M4 3h4v8a4 4 0 0 0 8 0V3h4v8a8 8 0 0 1-16 0V3z" fill="url(#magGrad)"/><rect x="4" y="3" width="4" height="3" fill="#cfd8dc"/><rect x="16" y="3" width="4" height="3" fill="#cfd8dc"/></g>' },
    { id: 1178, name: "Magnet-Thin-Color", category: "general", svgContent: '<path d="M5 3h3v8a4 4 0 0 0 8 0V3h3v8a7 7 0 0 1-14 0V3z" fill="none" stroke="#b71c1c" stroke-width="0.75"/>' },
    { id: 1179, name: "Magnet-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#b71c1c" rx="4"/><path d="M5 4h4v7a3 3 0 0 0 6 0V4h4v7a7 7 0 0 1-14 0V4z" fill="#ffffff"/>' },

// 407. Magnifying-Glass-Color
    { id: 1180, name: "Magnifying-Glass-Color", category: "food", svgContent: '<defs><linearGradient id="mngGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#b0bec5"/><stop offset="100%" stop-color="#546e7a"/></linearGradient></defs><g><circle cx="10" cy="10" r="7" fill="none" stroke="#546e7a" stroke-width="3"/><line x1="15" y1="15" x2="21" y2="21" stroke="#546e7a" stroke-width="3" stroke-linecap="round"/></g>' },
    { id: 1181, name: "Magnifying-Glass-Thin-Color", category: "food", svgContent: '<circle cx="10" cy="10" r="6" fill="none" stroke="#546e7a" stroke-width="0.75"/><line x1="14" y1="14" x2="20" y2="20" stroke="#546e7a" stroke-width="0.75"/>' },
    { id: 1182, name: "Magnifying-Glass-Inverted-Color", category: "food", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#546e7a" rx="4"/><circle cx="10" cy="10" r="6" fill="#ffffff"/><line x1="14" y1="14" x2="20" y2="20" stroke="#ffffff" stroke-width="2"/>' },

// 408. Mail
    { id: 1183, name: "Mail", category: "communication", svgContent: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>' },
    { id: 1184, name: "MailThin", category: "communication", svgContent: '<g fill="none" stroke-width="0.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></g>' },
    { id: 1185, name: "MailInverted", category: "communication", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></g>' },

// 409. Mail-Color
    { id: 1186, name: "Mail-Color", category: "ai", svgContent: '<defs><linearGradient id="mailBack" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#90caf9"/><stop offset="100%" stop-color="#42a5f5"/></linearGradient></defs><g><rect x="2" y="4" width="20" height="16" rx="2" fill="url(#mailBack)"/><polygon points="22 4 12 12 2 4" fill="#bbdefb" opacity="0.85"/><polygon points="2 20 10 12 2 4" fill="#64b5f6" opacity="0.3"/><polygon points="22 20 14 12 22 4" fill="#64b5f6" opacity="0.3"/></g>' },

// 410. Makeup
    { id: 1187, name: "Makeup", category: "general", svgContent: '<path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><circle cx="12" cy="8" r="1.5" fill="currentColor" opacity="0.9"/><line x1="10" y1="13" x2="14" y2="13"/><path d="M8 18h8"/>' },
    { id: 1188, name: "MakeupThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><circle cx="12" cy="8" r="1.5"/><line x1="10" y1="13" x2="14" y2="13"/><path d="M8 18h8"/></g>' },
    { id: 1189, name: "MakeupInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="8" r="1.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><line stroke="var(--ax-bg-inverse, white)" x1="10" y1="13" x2="14" y2="13"/><path stroke="var(--ax-bg-inverse, white)" d="M8 18h8"/>' },

// 411. Map
    { id: 1190, name: "Map", category: "objects", svgContent: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>' },
    { id: 1191, name: "MapThin", category: "objects", svgContent: '<g fill="none" stroke-width="0.5"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></g>' },
    { id: 1192, name: "MapInverted", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></g>' },

// 412. Map-Color
    { id: 1193, name: "Map-Color", category: "iot", svgContent: '<defs><linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#a5d6a7"/><stop offset="50%" stop-color="#81c784"/><stop offset="100%" stop-color="#66bb6a"/></linearGradient></defs><g><polygon points="1 6 8 2 16 6 23 2 23 18 16 22 8 18 1 22" fill="url(#mapGrad)" stroke="#4caf50" stroke-width="1"/><line x1="8" y1="2" x2="8" y2="18" stroke="#ffffff" stroke-width="1.5"/><line x1="16" y1="6" x2="16" y2="22" stroke="#ffffff" stroke-width="1.5"/></g>' },
    { id: 1194, name: "Map-Thin-Color", category: "iot", svgContent: '<polygon points="2 6 8 3 16 6 22 3 22 18 16 21 8 18 2 21" fill="none" stroke="#4caf50" stroke-width="0.75"/>' },
    { id: 1195, name: "Map-Inverted-Color", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#4caf50" rx="4"/><polygon points="3 6 8 3 16 6 21 3 21 18 16 21 8 18 3 21" fill="#ffffff"/>' },

// 413. Map-Folded-Color
    { id: 1196, name: "Map-Folded-Color", category: "iot", svgContent: '<defs><linearGradient id="mapFGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#d7ccc8"/><stop offset="100%" stop-color="#a1887f"/></linearGradient></defs><g><path d="M4 4l8 2 8-2v16l-8-2-8 2z" fill="url(#mapFGrad)" stroke="#a1887f" stroke-width="1.5"/><line x1="12" y1="4" x2="12" y2="20" stroke="#ffffff" stroke-width="1.5"/></g>' },
    { id: 1197, name: "Map-Folded-Thin-Color", category: "iot", svgContent: '<path d="M5 5l7 1 7-1v14l-7-1-7 1z" fill="none" stroke="#a1887f" stroke-width="0.75"/>' },
    { id: 1198, name: "Map-Folded-Inverted-Color", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#a1887f" rx="4"/><path d="M5 5l7 1 7-1v14l-7-1-7 1z" fill="#ffffff"/>' },

// 414. Map-Pin
    { id: 1199, name: "Map-Pin", category: "objects", svgContent: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>' },
    { id: 1200, name: "Map-PinThin", category: "objects", svgContent: '<g fill="none" stroke-width="0.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></g>' },
    { id: 1201, name: "Map-PinInverted", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></g>' },

// 415. Map-Pin-Color
    { id: 1202, name: "Map-Pin-Color", category: "iot", svgContent: '<defs><linearGradient id="pinRed" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ff5252"/><stop offset="100%" stop-color="#d50000"/></linearGradient></defs><g><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="url(#pinRed)"/><circle cx="12" cy="10" r="3" fill="#ffffff"/><ellipse cx="12" cy="22" rx="4" ry="1" fill="#000000" opacity="0.2"/></g>' },
    { id: 1203, name: "Map-Pin-Thin-Color", category: "iot", svgContent: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="none" stroke="#d50000" stroke-width="0.75"/><circle cx="12" cy="10" r="3" fill="none" stroke="#d50000" stroke-width="0.5"/>' },
    { id: 1204, name: "Map-Pin-Inverted-Color", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#d50000" rx="4"/><path d="M12 2C7.6 2 4 5.6 4 10c0 5.3 8 12 8 12s8-6.7 8-12c0-4.4-3.6-10-8-10zm0 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" fill="#ffffff"/>' },

// 416. Martini
    { id: 1205, name: "Martini", category: "general", svgContent: '<path d="M21 21H3"/><path d="M12 21V10"/><path d="M19 3L5 10"/><path d="M19 3H5"/><path d="M12 10l7-7M12 10L5 3"/>' },
    { id: 1206, name: "MartiniThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M21 21H3"/><path d="M12 21V10"/><path d="M19 3L5 10"/><path d="M19 3H5"/><path d="M12 10l7-7M12 10L5 3"/></g>' },
    { id: 1207, name: "MartiniInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M21 21H3"/><path d="M12 21V10"/><path d="M19 3L5 10"/><path d="M19 3H5"/><path d="M12 10l7-7M12 10L5 3"/></g>' },

// 417. MasterCard
    { id: 1208, name: "MasterCard", category: "brands", svgContent: '<circle cx="8" cy="12" r="5"/><circle cx="16" cy="12" r="5"/><circle cx="12" cy="12" r="3"/>' },
    { id: 1209, name: "MasterCardThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="8" cy="12" r="5"/><circle cx="16" cy="12" r="5"/><circle cx="12" cy="12" r="3"/></g>' },
    { id: 1210, name: "MasterCardInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="8" cy="12" r="5" stroke="var(--ax-bg-inverse, white)" /><circle fill="var(--ax-bg-inverse, white)" cx="16" cy="12" r="5" stroke="var(--ax-bg-inverse, white)" /><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="3"/>' },

// 418. Maximize
    { id: 1211, name: "Maximize", category: "ui", svgContent: '<path d="M15 3h6v6m-6 6h6v-6M9 21H3v-6m6-6H3v6"/>' },
    { id: 1212, name: "MaximizeThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M15 3h6v6m-6 6h6v-6M9 21H3v-6m6-6H3v6"/></g>' },
    { id: 1213, name: "MaximizeInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M15 3h6v6m-6 6h6v-6M9 21H3v-6m6-6H3v6"/></g>' },

// 419. Maximize2
    { id: 1214, name: "Maximize2", category: "ui", svgContent: '<polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="15" y1="9" x2="3" y2="21"/>' },
    { id: 1215, name: "Maximize2Thin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="15" y1="9" x2="3" y2="21"/></g>' },
    { id: 1216, name: "Maximize2Inverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line stroke="var(--ax-bg-inverse, white)" x1="15" y1="9" x2="3" y2="21"/>' },

// 420. Mechanical
    { id: 1217, name: "Mechanical", category: "general", svgContent: '<circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="18" x2="16" y2="18"/><line x1="6" y1="8" x2="6" y2="16"/><line x1="18" y1="8" x2="18" y2="16"/>' },
    { id: 1218, name: "MechanicalThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="6" y1="8" x2="6" y2="16"/></g>' },
    { id: 1219, name: "MechanicalInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="6" cy="6" r="2"/><circle fill="var(--ax-bg-inverse, white)" cx="18" cy="6" r="2"/><circle fill="var(--ax-bg-inverse, white)" cx="6" cy="18" r="2"/><circle fill="var(--ax-bg-inverse, white)" cx="18" cy="18" r="2"/><line stroke="var(--ax-bg-inverse, white)" x1="8" y1="6" x2="16" y2="6"/><line stroke="var(--ax-bg-inverse, white)" x1="8" y1="18" x2="16" y2="18"/><line stroke="var(--ax-bg-inverse, white)" x1="6" y1="8" x2="6" y2="16"/><line stroke="var(--ax-bg-inverse, white)" x1="18" y1="8" x2="18" y2="16"/>' },

// 421. Medal-Color
    { id: 1220, name: "Medal-Color", category: "general", svgContent: '<defs><linearGradient id="mdlGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffeb3b"/><stop offset="100%" stop-color="#fbc02d"/></linearGradient></defs><g><circle cx="12" cy="14" r="7" fill="url(#mdlGrad)" stroke="#f57f17" stroke-width="1.5"/><path d="M10 2l2 4-2 2h4l-2-2 2-4" fill="#fbc02d" stroke="#f57f17" stroke-width="1.5"/></g>' },
    { id: 1221, name: "Medal-Thin-Color", category: "general", svgContent: '<circle cx="12" cy="15" r="6" fill="none" stroke="#fbc02d" stroke-width="0.75"/>' },
    { id: 1222, name: "Medal-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#fbc02d" rx="4"/><circle cx="12" cy="15" r="6" fill="#ffffff"/>' },

// 422. Meh
    { id: 1223, name: "Meh", category: "general", svgContent: '<circle cx="12" cy="12" r="10"/><line x1="8" y1="15" x2="16" y2="15"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>' },
    { id: 1224, name: "MehThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><line x1="8" y1="15" x2="16" y2="15"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></g>' },
    { id: 1225, name: "MehInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><circle cx="12" cy="12" r="10"/><line x1="8" y1="15" x2="16" y2="15"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></g>' },

// 423. Meh-Off
    { id: 1226, name: "Meh-Off", category: "general", svgContent: '<circle cx="12" cy="12" r="10"/><line x1="8" y1="15" x2="16" y2="15"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><line x1="1" y1="1" x2="23" y2="23"/>' },
    { id: 1227, name: "Meh-OffThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><line x1="8" y1="15" x2="16" y2="15"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><line x1="1" y1="1" x2="23" y2="23"/></g>' },
    { id: 1228, name: "Meh-OffInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><circle cx="12" cy="12" r="10"/><line x1="8" y1="15" x2="16" y2="15"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><line x1="1" y1="1" x2="23" y2="23"/></g>' },

// 424. Menu
    { id: 1229, name: "Menu", category: "ui", svgContent: '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>' },
    { id: 1230, name: "MenuThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></g>' },
    { id: 1231, name: "MenuInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><line stroke="var(--ax-bg-inverse, white)" x1="3" y1="6" x2="21" y2="6"/><line stroke="var(--ax-bg-inverse, white)" x1="3" y1="12" x2="21" y2="12"/><line stroke="var(--ax-bg-inverse, white)" x1="3" y1="18" x2="21" y2="18"/>' },

// 425. Menu-Color
    { id: 1232, name: "Menu-Color", category: "ui", svgContent: '<defs><linearGradient id="barGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#78909c"/><stop offset="100%" stop-color="#37474f"/></linearGradient></defs><g stroke="url(#barGrad)" stroke-width="3" stroke-linecap="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></g>' },

// 426. MenuAlt
    { id: 1233, name: "MenuAlt", category: "ui", svgContent: '<line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>' },
    { id: 1234, name: "MenuAltThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></g>' },
    { id: 1235, name: "MenuAltInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><line stroke="var(--ax-bg-inverse, white)" x1="4" y1="6" x2="20" y2="6" /><line stroke="var(--ax-bg-inverse, white)" x1="4" y1="12" x2="20" y2="12" /><line stroke="var(--ax-bg-inverse, white)" x1="4" y1="18" x2="20" y2="18" />' },

// 427. MenuDots
    { id: 1236, name: "MenuDots", category: "ui", svgContent: '<circle cx="5" cy="12" r="1.5" fill="currentColor" opacity="0.9"/><circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.9"/><circle cx="19" cy="12" r="1.5" fill="currentColor" opacity="0.9"/>' },
    { id: 1237, name: "MenuDotsThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></g>' },
    { id: 1238, name: "MenuDotsInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="5" cy="12" r="1.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="1.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="19" cy="12" r="1.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 428. MenuExpand
    { id: 1239, name: "MenuExpand", category: "ui", svgContent: '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/><circle cx="12" cy="12" r="1" fill="currentColor" opacity="0.9"/>' },
    { id: 1240, name: "MenuExpandThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/><circle cx="12" cy="12" r="1"/></g>' },
    { id: 1241, name: "MenuExpandInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><line stroke="var(--ax-bg-inverse, white)" x1="3" y1="6" x2="21" y2="6" /><line stroke="var(--ax-bg-inverse, white)" x1="3" y1="12" x2="21" y2="12" /><line stroke="var(--ax-bg-inverse, white)" x1="3" y1="18" x2="21" y2="18" /><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="1" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 429. MenuIcon
    { id: 1242, name: "MenuIcon", category: "ui", svgContent: '<line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/>' },
    { id: 1243, name: "MenuIconThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></g>' },
    { id: 1244, name: "MenuIconInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><line stroke="var(--ax-bg-inverse, white)" x1="4" y1="12" x2="20" y2="12"/><line stroke="var(--ax-bg-inverse, white)" x1="4" y1="6" x2="20" y2="6"/><line stroke="var(--ax-bg-inverse, white)" x1="4" y1="18" x2="20" y2="18"/>' },

// 430. MessageSquare2
    { id: 1245, name: "MessageSquare2", category: "communication", svgContent: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="14" y2="14"/>' },
    { id: 1246, name: "MessageSquare2Thin", category: "communication", svgContent: '<g fill="none" stroke-width="0.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="14" y2="14"/></g>' },
    { id: 1247, name: "MessageSquare2Inverted", category: "communication", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line stroke="var(--ax-bg-inverse, white)" x1="8" y1="10" x2="16" y2="10"/><line stroke="var(--ax-bg-inverse, white)" x1="8" y1="14" x2="14" y2="14"/>' },

// 431. Messenger
    { id: 1248, name: "Messenger", category: "general", svgContent: '<circle cx="12" cy="12" r="10"/><path d="M8 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm8 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>' },
    { id: 1249, name: "MessengerThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><path d="M8 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm8 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></g>' },
    { id: 1250, name: "MessengerInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="10"/><path stroke="var(--ax-bg-inverse, white)" d="M8 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm8 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>' },

// 432. Meta
    { id: 1251, name: "Meta", category: "general", svgContent: '<path d="M7 3a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4zm10 0a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4zM7 15c0-2.2 1.8-4 4-4s4 1.8 4 4v4H7v-4z"/>' },
    { id: 1252, name: "MetaThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M7 3a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4zm10 0a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4zM7 15c0-2.2 1.8-4 4-4s4 1.8 4 4v4H7v-4z"/></g>' },
    { id: 1253, name: "MetaInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M7 3a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4zm10 0a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4zM7 15c0-2.2 1.8-4 4-4s4 1.8 4 4v4H7v-4z"/>' },

// 433. Mic
    { id: 1254, name: "Mic", category: "communication", svgContent: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/>' },
    { id: 1255, name: "MicThin", category: "communication", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/></g>' },
    { id: 1256, name: "MicInverted", category: "communication", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/></g>' },

// 434. Mic-Color
    { id: 1257, name: "Mic-Color", category: "communication", svgContent: '<defs><linearGradient id="micBody" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#78909c"/><stop offset="100%" stop-color="#37474f"/></linearGradient></defs><g><rect x="9" y="2" width="6" height="12" rx="3" fill="url(#micBody)"/><path d="M19 10v1a7 7 0 0 1-14 0v-1" fill="none" stroke="#455a64" stroke-width="2" stroke-linecap="round"/><line x1="12" y1="18" x2="12" y2="22" stroke="#455a64" stroke-width="2"/><line x1="8" y1="22" x2="16" y2="22" stroke="#455a64" stroke-width="2" stroke-linecap="round"/><rect x="10" y="4" width="4" height="3" rx="1" fill="#cfd8dc" opacity="0.3"/></g>' },

// 435. Mic-Off
    { id: 1258, name: "Mic-Off", category: "communication", svgContent: '<line x1="1" y1="1" x2="23" y2="23"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/><path d="M17 11a7 7 0 0 1-12 0v-1M19 10v1a6.93 6.93 0 0 1-.46 2.5"/><line x1="12" y1="18" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>' },
    { id: 1259, name: "Mic-OffThin", category: "communication", svgContent: '<g fill="none" stroke-width="0.5"><line x1="1" y1="1" x2="23" y2="23"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/><path d="M17 11a7 7 0 0 1-12 0v-1M19 10v1a6.93 6.93 0 0 1-.46 2.5"/><line x1="12" y1="18" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></g>' },
    { id: 1260, name: "Mic-OffInverted", category: "communication", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><line x1="1" y1="1" x2="23" y2="23"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/><path d="M17 11a7 7 0 0 1-12 0v-1M19 10v1a6.93 6.93 0 0 1-.46 2.5"/><line x1="12" y1="18" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></g>' },

// 436. Microphone
    { id: 1261, name: "Microphone", category: "communication", svgContent: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2m14 0H5m7 11v4m-4 0h8"/>' },
    { id: 1262, name: "MicrophoneThin", category: "communication", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2m14 0H5m7 11v4m-4 0h8"/></g>' },
    { id: 1263, name: "MicrophoneInverted", category: "communication", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path stroke="var(--ax-bg-inverse, white)" d="M19 10v2a7 7 0 0 1-14 0v-2m14 0H5m7 11v4m-4 0h8"/>' },

// 437. Microphone-Color
    { id: 1264, name: "Microphone-Color", category: "communication", svgContent: '<defs><linearGradient id="micGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#cfd8dc"/><stop offset="100%" stop-color="#78909c"/></linearGradient></defs><g><path d="M12 2a4 4 0 0 0-4 4v6a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4z" fill="url(#micGrad)" stroke="#546e7a" stroke-width="1.5"/><line x1="12" y1="16" x2="12" y2="22" stroke="#546e7a" stroke-width="3" stroke-linecap="round"/></g>' },
    { id: 1265, name: "Microphone-Thin-Color", category: "communication", svgContent: '<path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z" fill="none" stroke="#546e7a" stroke-width="0.75"/>' },
    { id: 1266, name: "Microphone-Inverted-Color", category: "communication", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#546e7a" rx="4"/><path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z" fill="#ffffff"/>' },

// 438. Microsoft
    { id: 1267, name: "Microsoft", category: "brands", svgContent: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>' },
    { id: 1268, name: "MicrosoftThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></g>' },
    { id: 1269, name: "MicrosoftInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="3" y="3" width="7" height="7"/><rect fill="var(--ax-bg-inverse, white)" x="14" y="3" width="7" height="7"/><rect fill="var(--ax-bg-inverse, white)" x="3" y="14" width="7" height="7"/><rect fill="var(--ax-bg-inverse, white)" x="14" y="14" width="7" height="7"/>' },

// 439. Milk
    { id: 1270, name: "Milk", category: "general", svgContent: '<path d="M8 2h8v20H8z"/><path d="M16 4h4v18h-4z"/><path d="M4 4h4v18H4z"/>' },
    { id: 1271, name: "MilkThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M8 2h8v20H8z"/><path d="M16 4h4v18h-4z"/><path d="M4 4h4v18H4z"/></g>' },
    { id: 1272, name: "MilkInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M8 2h8v20H8z"/><path d="M16 4h4v18h-4z"/><path d="M4 4h4v18H4z"/></g>' },

// 440. Minimize
    { id: 1273, name: "Minimize", category: "ui", svgContent: '<path d="M4 14h6v6m10-6h-6v6M4 10h6V4m10 6h-6V4"/>' },
    { id: 1274, name: "MinimizeThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M4 14h6v6m10-6h-6v6M4 10h6V4m10 6h-6V4"/></g>' },
    { id: 1275, name: "MinimizeInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M4 14h6v6m10-6h-6v6M4 10h6V4m10 6h-6V4"/></g>' },

// 441. Minus
    { id: 1276, name: "Minus", category: "ui", svgContent: '<line x1="5" y1="12" x2="19" y2="12"/>' },
    { id: 1277, name: "MinusThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><line x1="5" y1="12" x2="19" y2="12"/></g>' },
    { id: 1278, name: "MinusInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><line stroke="var(--ax-bg-inverse, white)" x1="5" y1="12" x2="19" y2="12"/>' },

// 442. Monero
    { id: 1279, name: "Monero", category: "general", svgContent: '<path d="M12 2L4 8v8l8 4 8-4v-8l-8-6zm0 4l4 2v4l-4 2-4-2v-4l4-2z"/>' },
    { id: 1280, name: "MoneroThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 2L4 8v8l8 4 8-4v-8l-8-6zm0 4l4 2v4l-4 2-4-2v-4l4-2z"/></g>' },
    { id: 1281, name: "MoneroInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M12 2L4 8v8l8 4 8-4v-8l-8-6zm0 4l4 2v4l-4 2-4-2v-4l4-2z"/>' },

// 443. Monitor
    { id: 1282, name: "Monitor", category: "media", svgContent: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>' },
    { id: 1283, name: "MonitorThin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></g>' },
    { id: 1284, name: "MonitorInverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></g>' },

// 444. Monitor-Color
    { id: 1285, name: "Monitor-Color", category: "general", svgContent: '<defs><linearGradient id="monGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#37474f"/><stop offset="100%" stop-color="#212121"/></linearGradient></defs><g><rect x="2" y="3" width="20" height="14" rx="2" fill="url(#monGrad)"/><line x1="8" y1="21" x2="16" y2="21" stroke="#455a64" stroke-width="2" stroke-linecap="round"/><line x1="12" y1="17" x2="12" y2="21" stroke="#455a64" stroke-width="3"/><rect x="4" y="5" width="16" height="10" fill="#00b0ff" opacity="0.15"/></g>' },
    { id: 1286, name: "Monitor-Thin-Color", category: "general", svgContent: '<rect x="2" y="3" width="20" height="14" rx="2" fill="none" stroke="#37474f" stroke-width="0.75"/>' },
    { id: 1287, name: "Monitor-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#37474f" rx="4"/><rect x="3" y="4" width="18" height="11" rx="1" fill="#ffffff"/>' },

// 445. Moon
    { id: 1288, name: "Moon", category: "ui", svgContent: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>' },
    { id: 1289, name: "MoonThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></g>' },
    { id: 1290, name: "MoonInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></g>' },

// 446. Moon-Cloud
    { id: 1291, name: "Moon-Cloud", category: "ui", svgContent: '<path d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z"/><path d="M16 13a4 4 0 0 1 0 8H6a5 5 0 0 1-1.8-9.6"/>' },
    { id: 1292, name: "Moon-CloudThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z"/><path d="M16 13a4 4 0 0 1 0 8H6a5 5 0 0 1-1.8-9.6"/></g>' },
    { id: 1293, name: "Moon-CloudInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z"/><path d="M16 13a4 4 0 0 1 0 8H6a5 5 0 0 1-1.8-9.6"/></g>' },

// 447. Moon-Color
    { id: 1294, name: "Moon-Color", category: "iot", svgContent: '<defs><linearGradient id="moonGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fff59d"/><stop offset="100%" stop-color="#fbc02d"/></linearGradient></defs><g><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="url(#moonGrad)"/><circle cx="12" cy="8" r="1" fill="#f57f17" opacity="0.3"/><circle cx="16" cy="14" r="1.5" fill="#f57f17" opacity="0.3"/></g>' },
    { id: 1295, name: "Moon-Thin-Color", category: "iot", svgContent: '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" fill="none" stroke="#fbc02d" stroke-width="0.75"/>' },
    { id: 1296, name: "Moon-Inverted-Color", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#1a237e" rx="4"/><path d="M19 11.5A7.5 7.5 0 1 1 10.5 3a5.8 5.8 0 0 0 8.5 8.5z" fill="#fff59d"/>' },

// 448. Moon-Full-Color
    { id: 1297, name: "Moon-Full-Color", category: "iot", svgContent: '<defs><linearGradient id="monFGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#cfd8dc"/><stop offset="100%" stop-color="#90a4ae"/></linearGradient></defs><g><circle cx="12" cy="12" r="10" fill="url(#monFGrad)" stroke="#546e7a" stroke-width="1.5"/></g>' },
    { id: 1298, name: "Moon-Full-Thin-Color", category: "iot", svgContent: '<circle cx="12" cy="12" r="9" fill="none" stroke="#546e7a" stroke-width="0.75"/>' },
    { id: 1299, name: "Moon-Full-Inverted-Color", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#546e7a" rx="4"/><circle cx="12" cy="12" r="9" fill="#ffffff"/>' },

// 449. Moon-Stars
    { id: 1300, name: "Moon-Stars", category: "ui", svgContent: '<path d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z"/><path d="M18 3l2 4 4 2-4 2-2 4-2-4-4-2 4-2z"/>' },
    { id: 1301, name: "Moon-StarsThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z"/><path d="M18 3l2 4 4 2-4 2-2 4-2-4-4-2 4-2z"/></g>' },
    { id: 1302, name: "Moon-StarsInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z"/><path d="M18 3l2 4 4 2-4 2-2 4-2-4-4-2 4-2z"/></g>' },

// 450. MoreHorizontal
    { id: 1303, name: "MoreHorizontal", category: "general", svgContent: '<circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/>' },
    { id: 1304, name: "MoreHorizontalThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></g>' },
    { id: 1305, name: "MoreHorizontalInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="5" cy="12" r="1.5" stroke="var(--ax-bg-inverse, white)" /><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="1.5" stroke="var(--ax-bg-inverse, white)" /><circle fill="var(--ax-bg-inverse, white)" cx="19" cy="12" r="1.5" stroke="var(--ax-bg-inverse, white)" />' },

// 451. MoreVertical
    { id: 1306, name: "MoreVertical", category: "general", svgContent: '<circle cx="12" cy="5" r="1" fill="currentColor" opacity="0.9"/><circle cx="12" cy="12" r="1" fill="currentColor" opacity="0.9"/><circle cx="12" cy="19" r="1" fill="currentColor" opacity="0.9"/>' },
    { id: 1307, name: "MoreVerticalThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></g>' },
    { id: 1308, name: "MoreVerticalInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="5" r="1" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="1" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="19" r="1" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 452. Motorbike-Color
    { id: 1309, name: "Motorbike-Color", category: "general", svgContent: '<defs><linearGradient id="mtbGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#455a64"/><stop offset="100%" stop-color="#263238"/></linearGradient></defs><g stroke="#263238" stroke-width="2"><circle cx="6" cy="18" r="4" fill="none"/><circle cx="18" cy="18" r="4" fill="none"/><path d="M10 18h4v-4l4-2" fill="none"/></g>' },
    { id: 1310, name: "Motorbike-Thin-Color", category: "general", svgContent: '<circle cx="6" cy="18" r="3" fill="none" stroke="#263238" stroke-width="0.75"/><circle cx="18" cy="18" r="3" fill="none" stroke="#263238" stroke-width="0.75"/>' },
    { id: 1311, name: "Motorbike-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#263238" rx="4"/><circle cx="6" cy="18" r="3" fill="#ffffff"/><circle cx="18" cy="18" r="3" fill="#ffffff"/>' },

// 453. Motorcycle-Color
    { id: 1312, name: "Motorcycle-Color", category: "general", svgContent: '<defs><linearGradient id="motGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#455a64"/><stop offset="100%" stop-color="#263238"/></linearGradient></defs><g stroke="#263238" stroke-width="2" stroke-linecap="round"><circle cx="6" cy="18" r="4" fill="none"/><circle cx="18" cy="18" r="4" fill="none"/><path d="M10 18h4v-4l4-2"/></g>' },
    { id: 1313, name: "Motorcycle-Thin-Color", category: "general", svgContent: '<circle cx="6" cy="18" r="3" fill="none" stroke="#263238" stroke-width="0.75"/><circle cx="18" cy="18" r="3" fill="none" stroke="#263238" stroke-width="0.75"/>' },
    { id: 1314, name: "Motorcycle-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#263238" rx="4"/><circle cx="6" cy="18" r="3" fill="#ffffff"/><circle cx="18" cy="18" r="3" fill="#ffffff"/>' },

// 454. Mountain-Color
    { id: 1315, name: "Mountain-Color", category: "ai", svgContent: '<defs><linearGradient id="mtnGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#78909c"/><stop offset="100%" stop-color="#37474f"/></linearGradient></defs><g><polygon points="12 4 2 20 22 20" fill="url(#mtnGrad)"/><polygon points="12 4 9 9 12 11 14 9" fill="#ffffff"/><polygon points="17 11 13 18 21 18" fill="#455a64" opacity="0.7"/></g>' },
    { id: 1316, name: "Mountain-Thin-Color", category: "ai", svgContent: '<polygon points="12 5 3 20 21 20" fill="none" stroke="#37474f" stroke-width="0.75"/>' },
    { id: 1317, name: "Mountain-Inverted-Color", category: "ai", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#546e7a" rx="4"/><path d="M3 21l7-13 5 5 6 8z" fill="#ffffff"/>' },

// 455. Mountain-Small-Color
    { id: 1318, name: "Mountain-Small-Color", category: "ai", svgContent: '<defs><linearGradient id="mtsGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#b0bec5"/><stop offset="100%" stop-color="#546e7a"/></linearGradient></defs><g><path d="M2 22l8-15 5 5 7 10z" fill="url(#mtsGrad)" stroke="#546e7a" stroke-width="1.5"/><path d="M10 7l5 5 3-3" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/></g>' },
    { id: 1319, name: "Mountain-Small-Thin-Color", category: "ai", svgContent: '<path d="M3 21l7-13 5 5 6 8z" fill="none" stroke="#546e7a" stroke-width="0.75"/>' },
    { id: 1320, name: "Mountain-Small-Inverted-Color", category: "ai", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#546e7a" rx="4"/><path d="M3 21l7-13 5 5 6 8z" fill="#ffffff"/>' },

// 456. Mug
    { id: 1321, name: "Mug", category: "food", svgContent: '<path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>' },
    { id: 1322, name: "MugThin", category: "food", svgContent: '<g fill="none" stroke-width="0.5"><path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></g>' },
    { id: 1323, name: "MugInverted", category: "food", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></g>' },

// 457. Music
    { id: 1324, name: "Music", category: "media", svgContent: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>' },
    { id: 1325, name: "MusicThin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></g>' },
    { id: 1326, name: "MusicInverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></g>' },

// 458. Music-Note-Color
    { id: 1327, name: "Music-Note-Color", category: "media", svgContent: '<defs><linearGradient id="mscGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#2979ff"/><stop offset="100%" stop-color="#1565c0"/></linearGradient></defs><g><path d="M9 18V5l10-2v13" fill="none" stroke="url(#mscGrad)" stroke-width="3" stroke-linecap="round"/><circle cx="7" cy="18" r="2" fill="#1565c0"/><circle cx="17" cy="16" r="2" fill="#1565c0"/></g>' },
    { id: 1328, name: "Music-Note-Thin-Color", category: "media", svgContent: '<path d="M10 18V6l8-2v12" fill="none" stroke="#1565c0" stroke-width="0.75"/>' },
    { id: 1329, name: "Music-Note-Inverted-Color", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#1565c0" rx="4"/><path d="M10 18V6l8-2v12" fill="none" stroke="#ffffff" stroke-width="2"/>' },

// 459. Music-Score-Color
    { id: 1330, name: "Music-Score-Color", category: "media", svgContent: '<defs><linearGradient id="mscSGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#cfd8dc"/></linearGradient></defs><g><rect x="4" y="3" width="16" height="18" rx="1" fill="url(#mscSGrad)" stroke="#455a64" stroke-width="1.5"/><path d="M6 7h12M6 11h12M6 15h12M6 19h12" stroke="#455a64" stroke-width="1.5" stroke-linecap="round"/></g>' },
    { id: 1331, name: "Music-Score-Thin-Color", category: "media", svgContent: '<rect x="5" y="4" width="14" height="16" rx="1" fill="none" stroke="#455a64" stroke-width="0.75"/>' },
    { id: 1332, name: "Music-Score-Inverted-Color", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#455a64" rx="4"/><rect x="5" y="4" width="14" height="16" rx="1" fill="#ffffff"/>' },

// 460. Mute
    { id: 1333, name: "Mute", category: "general", svgContent: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>' },
    { id: 1334, name: "MuteThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></g>' },
    { id: 1335, name: "MuteInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></g>' },

// 461. Navigation
    { id: 1336, name: "Navigation", category: "iot", svgContent: '<polygon points="3 11 22 2 13 21 11 13 3 11"/>' },
    { id: 1337, name: "NavigationThin", category: "iot", svgContent: '<g fill="none" stroke-width="0.5"><polygon points="3 11 22 2 13 21 11 13 3 11"/></g>' },
    { id: 1338, name: "NavigationInverted", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polygon points="3 11 22 2 13 21 11 13 3 11"/></g>' },

// 462. Netflix
    { id: 1339, name: "Netflix", category: "brands", svgContent: '<rect x="2" y="2" width="20" height="20" rx="2"/><path d="M6 6h3v12H6zM11 6h3v12h-3zM16 6h3v12h-3z"/>' },
    { id: 1340, name: "NetflixThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M6 6h3v12H6zM11 6h3v12h-3zM16 6h3v12h-3z"/></g>' },
    { id: 1341, name: "NetflixInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="2" y="2" width="20" height="20" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M6 6h3v12H6zM11 6h3v12h-3zM16 6h3v12h-3z"/>' },

// 463. Newspaper
    { id: 1342, name: "Newspaper", category: "general", svgContent: '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="6" y1="9" x2="18" y2="9"/><line x1="6" y1="13" x2="18" y2="13"/><line x1="6" y1="17" x2="14" y2="17"/>' },
    { id: 1343, name: "NewspaperThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="6" y1="9" x2="18" y2="9"/><line x1="6" y1="13" x2="18" y2="13"/><line x1="6" y1="17" x2="14" y2="17"/></g>' },
    { id: 1344, name: "NewspaperInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="3" y="3" width="18" height="18" rx="2"/><line stroke="var(--ax-bg-inverse, white)" x1="6" y1="9" x2="18" y2="9"/><line stroke="var(--ax-bg-inverse, white)" x1="6" y1="13" x2="18" y2="13"/><line stroke="var(--ax-bg-inverse, white)" x1="6" y1="17" x2="14" y2="17"/>' },

// 464. NoSymbol
    { id: 1345, name: "NoSymbol", category: "general", svgContent: '<circle cx="12" cy="12" r="10"/><path d="M4 4l16 16"/>' },
    { id: 1346, name: "NoSymbolThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><path d="M4 4l16 16"/></g>' },
    { id: 1347, name: "NoSymbolInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="10"/><path stroke="var(--ax-bg-inverse, white)" d="M4 4l16 16"/>' },

// 465. Note-Color
    { id: 1348, name: "Note-Color", category: "general", svgContent: '<defs><linearGradient id="notGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fff59d"/><stop offset="100%" stop-color="#fbc02d"/></linearGradient></defs><g><path d="M3 3h12l6 6v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3z" fill="url(#notGrad)"/><path d="M15 3v4a2 2 0 0 0 2 2h4" fill="#f57f17" opacity="0.3"/></g>' },
    { id: 1349, name: "Note-Thin-Color", category: "general", svgContent: '<path d="M3 3h12l6 6v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3z" fill="none" stroke="#fbc02d" stroke-width="0.75"/>' },
    { id: 1350, name: "Note-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#fbc02d" rx="4"/><path d="M5 4h10l5 5v11H5V4z" fill="#ffffff"/>' },

// 466. Notebook-Color
    { id: 1351, name: "Notebook-Color", category: "objects", svgContent: '<defs><linearGradient id="ntbGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffcc80"/><stop offset="100%" stop-color="#f57c00"/></linearGradient></defs><g><rect x="6" y="3" width="14" height="18" rx="1" fill="url(#ntbGrad)" stroke="#f57c00" stroke-width="1.5"/><path d="M6 3h2v18H6z" fill="#f57c00"/><path d="M10 7h8M10 11h8M10 15h8" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/></g>' },
    { id: 1352, name: "Notebook-Thin-Color", category: "objects", svgContent: '<rect x="7" y="4" width="12" height="16" rx="1" fill="none" stroke="#f57c00" stroke-width="0.75"/>' },
    { id: 1353, name: "Notebook-Inverted-Color", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#f57c00" rx="4"/><rect x="7" y="4" width="12" height="16" rx="1" fill="#ffffff"/>' },

// 467. Notion
    { id: 1354, name: "Notion", category: "general", svgContent: '<path d="M3 3h18v18H3z"/><circle cx="6" cy="6" r="1" fill="currentColor" opacity="0.9"/><circle cx="12" cy="6" r="1" fill="currentColor" opacity="0.9"/><path d="M3 10h18M3 14h18M3 18h18"/>' },
    { id: 1355, name: "NotionThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M3 3h18v18H3z"/><circle cx="6" cy="6" r="1"/><circle cx="12" cy="6" r="1"/><path d="M3 10h18M3 14h18M3 18h18"/></g>' },
    { id: 1356, name: "NotionInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M3 3h18v18H3z"/><circle fill="var(--ax-bg-inverse, white)" cx="6" cy="6" r="1" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="6" r="1" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><path stroke="var(--ax-bg-inverse, white)" d="M3 10h18M3 14h18M3 18h18"/>' },

// 468. Oil-Platform-Color
    { id: 1357, name: "Oil-Platform-Color", category: "general", svgContent: '<defs><linearGradient id="oilGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffcc80"/><stop offset="100%" stop-color="#d84315"/></linearGradient></defs><g><rect x="4" y="6" width="16" height="4" fill="url(#oilGrad)" stroke="#d84315" stroke-width="1.5"/><path d="M6 10v12M18 10v12" stroke="#d84315" stroke-width="3" stroke-linecap="round"/></g>' },
    { id: 1358, name: "Oil-Platform-Thin-Color", category: "general", svgContent: '<rect x="5" y="7" width="14" height="2" fill="none" stroke="#d84315" stroke-width="0.75"/>' },
    { id: 1359, name: "Oil-Platform-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#d84315" rx="4"/><rect x="5" y="7" width="14" height="2" fill="#ffffff"/>' },

// 469. OpenAI
    { id: 1360, name: "OpenAI", category: "general", svgContent: '<circle cx="12" cy="12" r="9"/><path d="M12 4a8 8 0 0 1 0 16 8 8 0 0 1 0-16z" fill="currentColor" opacity="0.9" opacity="0.3"/><circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.9"/>' },
    { id: 1361, name: "OpenAIThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="9"/><path d="M12 4a8 8 0 0 1 0 16 8 8 0 0 1 0-16z"/><circle cx="12" cy="12" r="3"/></g>' },
    { id: 1362, name: "OpenAIInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="9" stroke="var(--ax-bg-inverse, white)" /><path stroke="var(--ax-bg-inverse, white)" d="M12 4a8 8 0 0 1 0 16 8 8 0 0 1 0-16z" fill="var(--ax-bg-inverse, white)" opacity="0.9" opacity="0.3"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="3" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 470. Optimize
    { id: 1363, name: "Optimize", category: "general", svgContent: '<circle cx="12" cy="12" r="1" fill="currentColor" opacity="0.9"/><path d="M12 1v4m0 10v4M23 12h-4M5 12H1M19.07 4.93l-2.83 2.83M7.76 17.24l-2.83 2.83M19.07 19.07l-2.83-2.83M7.76 7.76l-2.83-2.83"/>' },
    { id: 1364, name: "OptimizeThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="1"/><path d="M12 1v4m0 10v4M23 12h-4M5 12H1M19.07 4.93l-2.83 2.83M7.76 17.24l-2.83 2.83M19.07 19.07l-2.83-2.83M7.76 7.76l-2.83-2.83"/></g>' },
    { id: 1365, name: "OptimizeInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="1" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><path stroke="var(--ax-bg-inverse, white)" d="M12 1v4m0 10v4M23 12h-4M5 12H1M19.07 4.93l-2.83 2.83M7.76 17.24l-2.83 2.83M19.07 19.07l-2.83-2.83M7.76 7.76l-2.83-2.83"/>' },

// 471. Package-Color
    { id: 1366, name: "Package-Color", category: "development", svgContent: '<defs><linearGradient id="pkgGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ffb74d"/><stop offset="100%" stop-color="#a1887f"/></linearGradient></defs><g fill="url(#pkgGrad)" stroke="#5d4037" stroke-width="1.5"><polygon points="12 2 22 7 12 12 2 7"/><polygon points="2 7 12 12 12 22 2 17"/><polygon points="22 7 12 12 12 22 22 17"/><line x1="12" y1="2" x2="12" y2="12" stroke="#ffffff" opacity="0.5"/></g>' },
    { id: 1367, name: "Package-Thin-Color", category: "development", svgContent: '<polygon points="12 3 21 7 12 11 3 7" fill="none" stroke="#5d4037" stroke-width="0.75"/><line x1="12" y1="11" x2="12" y2="21" stroke="#5d4037" stroke-width="0.5"/>' },
    { id: 1368, name: "Package-Inverted-Color", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#8d6e63" rx="4"/><polygon points="12 4 20 8 12 12 4 8" fill="#ffffff"/><path d="M4 8v8l8 4v-8z" fill="#ffffff" opacity="0.7"/>' },

// 472. Paint-Can-Color
    { id: 1369, name: "Paint-Can-Color", category: "ai", svgContent: '<defs><linearGradient id="pntCGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#eceff1"/><stop offset="100%" stop-color="#90a4ae"/></linearGradient></defs><g><rect x="6" y="8" width="12" height="12" rx="1" fill="url(#pntCGrad)" stroke="#546e7a" stroke-width="1.5"/><path d="M6 8h12M7 5h10l-1 3H8z" fill="#cfd8dc" stroke="#546e7a" stroke-width="1.5"/><path d="M12 11l-2 4 4-2z" fill="#ff5252"/></g>' },
    { id: 1370, name: "Paint-Can-Thin-Color", category: "ai", svgContent: '<rect x="7" y="9" width="10" height="10" rx="1" fill="none" stroke="#546e7a" stroke-width="0.75"/>' },
    { id: 1371, name: "Paint-Can-Inverted-Color", category: "ai", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#546e7a" rx="4"/><rect x="7" y="9" width="10" height="10" rx="1" fill="#ffffff"/>' },

// 473. Paintbrush
    { id: 1372, name: "Paintbrush", category: "general", svgContent: '<path d="M6 9c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2z"/><path d="M12.5 9a5.5 5.5 0 0 1 5.5 5.5v2a5 5 0 0 1-5 5h-1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h-1a5 5 0 0 0-5 5v2a5.5 5.5 0 0 0 5.5 5.5z"/>' },
    { id: 1373, name: "PaintbrushThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M6 9c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2z"/><path d="M12.5 9a5.5 5.5 0 0 1 5.5 5.5v2a5 5 0 0 1-5 5h-1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h-1a5 5 0 0 0-5 5v2a5.5 5.5 0 0 0 5.5 5.5z"/></g>' },
    { id: 1374, name: "PaintbrushInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M6 9c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2z"/><path stroke="var(--ax-bg-inverse, white)" d="M12.5 9a5.5 5.5 0 0 1 5.5 5.5v2a5 5 0 0 1-5 5h-1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h-1a5 5 0 0 0-5 5v2a5.5 5.5 0 0 0 5.5 5.5z"/>' },

// 474. Paintbrush-Color
    { id: 1375, name: "Paintbrush-Color", category: "ai", svgContent: '<defs><linearGradient id="pntGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#b0bec5"/><stop offset="100%" stop-color="#546e7a"/></linearGradient></defs><g><rect x="11" y="10" width="2" height="12" fill="#8d6e63"/><path d="M10 10h4l1-6-6-2-1 8z" fill="url(#pntGrad)" stroke="#546e7a" stroke-width="1.5"/><path d="M9 4l-2-2M11 3l-2-2M13 3l-2-2" stroke="#ff5252" stroke-width="1.5" stroke-linecap="round"/></g>' },
    { id: 1376, name: "Paintbrush-Thin-Color", category: "ai", svgContent: '<path d="M11 10h2l1-7-5-2-1 7z" fill="none" stroke="#546e7a" stroke-width="0.75"/>' },
    { id: 1377, name: "Paintbrush-Inverted-Color", category: "ai", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#546e7a" rx="4"/><path d="M11 10h2l1-7-5-2-1 7z" fill="#ffffff"/>' },

// 475. Palette
    { id: 1378, name: "Palette", category: "general", svgContent: '<circle cx="12" cy="12" r="10"/><circle cx="7" cy="7" r="1.5" fill="currentColor" opacity="0.9"/><circle cx="17" cy="7" r="1.5" fill="currentColor" opacity="0.9"/><circle cx="17" cy="17" r="1.5" fill="currentColor" opacity="0.9"/><circle cx="7" cy="17" r="1.5" fill="currentColor" opacity="0.9"/><circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.9"/>' },
    { id: 1379, name: "PaletteThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><circle cx="7" cy="7" r="1.5"/><circle cx="17" cy="7" r="1.5"/><circle cx="17" cy="17" r="1.5"/><circle cx="7" cy="17" r="1.5"/><circle cx="12" cy="12" r="1.5"/></g>' },
    { id: 1380, name: "PaletteInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="10"/><circle fill="var(--ax-bg-inverse, white)" cx="7" cy="7" r="1.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="17" cy="7" r="1.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="17" cy="17" r="1.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="7" cy="17" r="1.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="1.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 476. Palette-Artist-Color
    { id: 1381, name: "Palette-Artist-Color", category: "general", svgContent: '<defs><linearGradient id="artGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#f8bbd0"/><stop offset="100%" stop-color="#c2185b"/></linearGradient></defs><g><path d="M22 12c0 5-4 9-9 9h-7l3-3 2-2z" fill="url(#artGrad)" stroke="#c2185b" stroke-width="1.5"/><circle cx="10" cy="10" r="2" fill="#ff5252"/><circle cx="16" cy="10" r="2" fill="#29b6f6"/></g>' },
    { id: 1382, name: "Palette-Artist-Thin-Color", category: "general", svgContent: '<path d="M21 12c0 4-4 8-8 8h-6l2-2 2-2z" fill="none" stroke="#c2185b" stroke-width="0.75"/>' },
    { id: 1383, name: "Palette-Artist-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#c2185b" rx="4"/><path d="M21 12c0 4-4 8-8 8h-6l2-2 2-2z" fill="#ffffff"/>' },

// 477. Palette-Color
    { id: 1384, name: "Palette-Color", category: "general", svgContent: '<defs><linearGradient id="palGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ffb74d"/><stop offset="100%" stop-color="#ff8f00"/></linearGradient></defs><g><path d="M12 2A10 10 0 0 0 2 12c0 5.52 4.48 10 10 10a3 3 0 0 0 3-3c0-.38-.07-.75-.21-1.09.43.06.87.09 1.32.09 4.97 0 9-4.03 9-9 0-4.97-4.03-9-9-9z" fill="url(#palGrad)"/><circle cx="6.5" cy="11.5" r="1.5" fill="#e91e63"/><circle cx="9.5" cy="6.5" r="1.5" fill="#2196f3"/><circle cx="14.5" cy="6.5" r="1.5" fill="#4caf50"/><circle cx="18.5" cy="11.5" r="1.5" fill="#ffeb3b"/></g>' },
    { id: 1385, name: "Palette-Thin-Color", category: "general", svgContent: '<path d="M12 21a9 9 0 0 1-9-9 9 9 0 0 1 15.5-6" fill="none" stroke="#ff8f00" stroke-width="0.75"/>' },
    { id: 1386, name: "Palette-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#ff8f00" rx="4"/><path d="M12 3a9 9 0 0 0-9 9c0 5 4 9 9 9s4-2 4-4c0-.5-.2-.8-.4-1.2h.4a8 8 0 0 0 8-8c0-4.8-4-8.8-9-8.8z" fill="#ffffff"/>' },

// 478. Pan
    { id: 1387, name: "Pan", category: "general", svgContent: '<path d="M17.5 17.5L21 21"/><circle cx="12" cy="12" r="7"/><path d="M12 5V2h4"/><path d="M17 12l2 2"/>' },
    { id: 1388, name: "PanThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M17.5 17.5L21 21"/><circle cx="12" cy="12" r="7"/><path d="M12 5V2h4"/><path d="M17 12l2 2"/></g>' },
    { id: 1389, name: "PanInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M17.5 17.5L21 21"/><circle cx="12" cy="12" r="7"/><path d="M12 5V2h4"/><path d="M17 12l2 2"/></g>' },

// 479. Paperclip
    { id: 1390, name: "Paperclip", category: "communication", svgContent: '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>' },
    { id: 1391, name: "PaperclipThin", category: "communication", svgContent: '<g fill="none" stroke-width="0.5"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></g>' },
    { id: 1392, name: "PaperclipInverted", category: "communication", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></g>' },

// 480. Paperclip-Color
    { id: 1393, name: "Paperclip-Color", category: "general", svgContent: '<g fill="none" stroke="#78909c" stroke-width="3" stroke-linecap="round"><path d="M14 2a3 3 0 0 1 3 3v12a5 5 0 0 1-10 0V5a2 2 0 1 1 4 0v10"/></g>' },
    { id: 1394, name: "Paperclip-Thin-Color", category: "general", svgContent: '<path d="M15 3a2 2 0 0 1 2 2v10a4 4 0 0 1-8 0V5a1 1 0 1 1 2 0v8" fill="none" stroke="#78909c" stroke-width="0.75"/>' },
    { id: 1395, name: "Paperclip-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#78909c" rx="4"/><path d="M15 3a2 2 0 0 1 2 2v10a4 4 0 0 1-8 0V5a1 1 0 1 1 2 0v8" fill="none" stroke="#ffffff" stroke-width="2"/>' },

// 481. Parachute-Color
    { id: 1396, name: "Parachute-Color", category: "general", svgContent: '<defs><linearGradient id="prcGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#9c27b0"/><stop offset="100%" stop-color="#7b1fa2"/></linearGradient></defs><g><path d="M2 12a10 10 0 0 1 20 0H2z" fill="url(#prcGrad)" stroke="#7b1fa2" stroke-width="1.5"/><path d="M4 12l2 8h12l2-8" fill="none" stroke="#7b1fa2" stroke-width="1.5"/></g>' },
    { id: 1397, name: "Parachute-Thin-Color", category: "general", svgContent: '<path d="M3 12a9 9 0 0 1 18 0H3z" fill="none" stroke="#7b1fa2" stroke-width="0.75"/>' },
    { id: 1398, name: "Parachute-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#7b1fa2" rx="4"/><path d="M3 12a9 9 0 0 1 18 0H3z" fill="#ffffff"/>' },

// 482. Party-Hat-Color
    { id: 1399, name: "Party-Hat-Color", category: "general", svgContent: '<defs><linearGradient id="hatGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ba68c8"/><stop offset="100%" stop-color="#4a148c"/></linearGradient></defs><g><polygon points="12 3 4 21 20 21" fill="url(#hatGrad)" stroke="#4a148c" stroke-width="1.5"/><circle cx="12" cy="3" r="1.5" fill="#ffeb3b"/><path d="M6 18l12-4" stroke="#ffeb3b" stroke-width="1.5"/></g>' },
    { id: 1400, name: "Party-Hat-Thin-Color", category: "general", svgContent: '<polygon points="12 4 5 20 19 20" fill="none" stroke="#4a148c" stroke-width="0.75"/>' },
    { id: 1401, name: "Party-Hat-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#4a148c" rx="4"/><polygon points="12 4 5 20 19 20" fill="#ffffff"/>' },

// 483. Paste
    { id: 1402, name: "Paste", category: "general", svgContent: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="9" y="2" width="6" height="4" rx="1"/>' },
    { id: 1403, name: "PasteThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="9" y="2" width="6" height="4" rx="1"/></g>' },
    { id: 1404, name: "PasteInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect fill="var(--ax-bg-inverse, white)" x="9" y="2" width="6" height="4" rx="1"/>' },

// 484. Pause
    { id: 1405, name: "Pause", category: "media", svgContent: '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>' },
    { id: 1406, name: "PauseThin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></g>' },
    { id: 1407, name: "PauseInverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></g>' },

// 485. PauseSolid
    { id: 1408, name: "PauseSolid", category: "media", svgContent: '<rect x="6" y="4" width="3" height="16" fill="currentColor" opacity="0.9"/><rect x="15" y="4" width="3" height="16" fill="currentColor" opacity="0.9"/>' },
    { id: 1409, name: "PauseSolidThin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><rect x="6" y="4" width="3" height="16"/><rect x="15" y="4" width="3" height="16"/></g>' },
    { id: 1410, name: "PauseSolidInverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="6" y="4" width="3" height="16" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><rect fill="var(--ax-bg-inverse, white)" x="15" y="4" width="3" height="16" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 486. PayPal
    { id: 1411, name: "PayPal", category: "brands", svgContent: '<path d="M3 12c0-2 2-3 4-3h4c2 0 4 1 4 3s-2 3-4 3H7c-2 0-4-1-4-3zm4 4c0-2 2-3 4-3h2c2 0 4 1 4 3s-2 3-4 3h-2c-2 0-4-1-4-3z"/>' },
    { id: 1412, name: "PayPalThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><path d="M3 12c0-2 2-3 4-3h4c2 0 4 1 4 3s-2 3-4 3H7c-2 0-4-1-4-3zm4 4c0-2 2-3 4-3h2c2 0 4 1 4 3s-2 3-4 3h-2c-2 0-4-1-4-3z"/></g>' },
    { id: 1413, name: "PayPalInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M3 12c0-2 2-3 4-3h4c2 0 4 1 4 3s-2 3-4 3H7c-2 0-4-1-4-3zm4 4c0-2 2-3 4-3h2c2 0 4 1 4 3s-2 3-4 3h-2c-2 0-4-1-4-3z"/>' },

// 487. Pen
    { id: 1414, name: "Pen", category: "objects", svgContent: '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>' },
    { id: 1415, name: "PenThin", category: "objects", svgContent: '<g fill="none" stroke-width="0.5"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></g>' },
    { id: 1416, name: "PenInverted", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></g>' },

// 488. Pen-Color
    { id: 1417, name: "Pen-Color", category: "general", svgContent: '<defs><linearGradient id="penGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#cfd8dc"/><stop offset="100%" stop-color="#78909c"/></linearGradient></defs><g><rect x="11" y="2" width="2" height="16" fill="url(#penGrad)" stroke="#546e7a" stroke-width="1.5"/><path d="M12 18l-2 4h4l-2-4z" fill="#121212"/></g>' },
    { id: 1418, name: "Pen-Thin-Color", category: "general", svgContent: '<rect x="12" y="3" width="1" height="15" fill="none" stroke="#546e7a" stroke-width="0.75"/>' },
    { id: 1419, name: "Pen-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#546e7a" rx="4"/><rect x="12" y="3" width="1" height="15" fill="#ffffff"/>' },

// 489. Pencil
    { id: 1420, name: "Pencil", category: "objects", svgContent: '<path d="M12 3l9 9-12 9H3v-6l9-12z"/><line x1="9" y1="9" x2="15" y2="15"/>' },
    { id: 1421, name: "PencilThin", category: "objects", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 3l9 9-12 9H3v-6l9-12z"/><line x1="9" y1="9" x2="15" y2="15"/></g>' },
    { id: 1422, name: "PencilInverted", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M12 3l9 9-12 9H3v-6l9-12z"/><line stroke="var(--ax-bg-inverse, white)" x1="9" y1="9" x2="15" y2="15"/>' },

// 490. Pencil-Color
    { id: 1423, name: "Pencil-Color", category: "general", svgContent: '<defs><linearGradient id="pclGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fff176"/><stop offset="100%" stop-color="#fbc02d"/></linearGradient></defs><g><path d="M18 2l4 4-13 13-4-4 13-13z" fill="url(#pclGrad)" stroke="#fbc02d" stroke-width="1.5"/><polygon points="5 18 8 21 5 21" fill="#121212"/><line x1="21" y1="5" x2="19" y2="3" stroke="#fbc02d" stroke-width="1.5"/></g>' },
    { id: 1424, name: "Pencil-Thin-Color", category: "general", svgContent: '<path d="M19 3l3 3-12 12-3-3 12-12z" fill="none" stroke="#fbc02d" stroke-width="0.75"/>' },
    { id: 1425, name: "Pencil-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#fbc02d" rx="4"/><path d="M19 3l3 3-12 12-3-3 12-12z" fill="#ffffff"/>' },

// 491. Pendant
    { id: 1426, name: "Pendant", category: "objects", svgContent: '<circle cx="12" cy="8" r="2" fill="currentColor" opacity="0.9"/><path d="M12 10v6a3 3 0 0 1-3 3v0a3 3 0 0 0 3 3 3 3 0 0 0 3-3v0a3 3 0 0 1-3-3v-6"/>' },
    { id: 1427, name: "PendantThin", category: "objects", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="8" r="2"/><path d="M12 10v6a3 3 0 0 1-3 3v0a3 3 0 0 0 3 3 3 3 0 0 0 3-3v0a3 3 0 0 1-3-3v-6"/></g>' },
    { id: 1428, name: "PendantInverted", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="8" r="2" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><path stroke="var(--ax-bg-inverse, white)" d="M12 10v6a3 3 0 0 1-3 3v0a3 3 0 0 0 3 3 3 3 0 0 0 3-3v0a3 3 0 0 1-3-3v-6"/>' },

// 492. People
    { id: 1429, name: "People", category: "general", svgContent: '<circle cx="8" cy="9" r="2.5"/><circle cx="16" cy="9" r="2.5"/><path d="M6 20c0-1.66 1.79-3 4-3s4 1.34 4 3M14 20c0-1.66 1.79-3 4-3s4 1.34 4 3"/>' },
    { id: 1430, name: "PeopleThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="8" cy="9" r="2.5"/><circle cx="16" cy="9" r="2.5"/><path d="M6 20c0-1.66 1.79-3 4-3s4 1.34 4 3M14 20c0-1.66 1.79-3 4-3s4 1.34 4 3"/></g>' },
    { id: 1431, name: "PeopleInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="8" cy="9" r="2.5"/><circle fill="var(--ax-bg-inverse, white)" cx="16" cy="9" r="2.5"/><path stroke="var(--ax-bg-inverse, white)" d="M6 20c0-1.66 1.79-3 4-3s4 1.34 4 3M14 20c0-1.66 1.79-3 4-3s4 1.34 4 3"/>' },

// 493. Pepper
    { id: 1432, name: "Pepper", category: "general", svgContent: '<path d="M12 2v3"/><path d="M12 19v3"/><path d="M22 12h-3"/><path d="M5 12H2"/><path d="M18.36 5.64L16.24 7.76"/><path d="M7.76 16.24L5.64 18.36"/><path d="M18.36 18.36l-2.12-2.12"/><path d="M7.76 7.76L5.64 5.64"/><circle cx="12" cy="12" r="5"/>' },
    { id: 1433, name: "PepperThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 2v3"/><path d="M12 19v3"/><path d="M22 12h-3"/><path d="M5 12H2"/><path d="M18.36 5.64L16.24 7.76"/><path d="M7.76 16.24L5.64 18.36"/><path d="M18.36 18.36l-2.12-2.12"/><path d="M7.76 7.76L5.64 5.64"/><circle cx="12" cy="12" r="5"/></g>' },
    { id: 1434, name: "PepperInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M12 2v3"/><path d="M12 19v3"/><path d="M22 12h-3"/><path d="M5 12H2"/><path d="M18.36 5.64L16.24 7.76"/><path d="M7.76 16.24L5.64 18.36"/><path d="M18.36 18.36l-2.12-2.12"/><path d="M7.76 7.76L5.64 5.64"/><circle cx="12" cy="12" r="5"/></g>' },

// 494. Percent
    { id: 1435, name: "Percent", category: "general", svgContent: '<line x1="19" y1="5" x2="5" y2="19"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/>' },
    { id: 1436, name: "PercentThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/></g>' },
    { id: 1437, name: "PercentInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><line stroke="var(--ax-bg-inverse, white)" x1="19" y1="5" x2="5" y2="19"/><circle fill="var(--ax-bg-inverse, white)" cx="6" cy="6" r="3"/><circle fill="var(--ax-bg-inverse, white)" cx="18" cy="18" r="3"/>' },

// 495. Performance
    { id: 1438, name: "Performance", category: "general", svgContent: '<path d="M13 2H9c-1 0-2 1-2 2v16c0 1 1 2 2 2h4c1 0 2-1 2-2V4c0-1-1-2-2-2z"/><rect x="6" y="9" width="12" height="9" rx="1"/>' },
    { id: 1439, name: "PerformanceThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M13 2H9c-1 0-2 1-2 2v16c0 1 1 2 2 2h4c1 0 2-1 2-2V4c0-1-1-2-2-2z"/><rect x="6" y="9" width="12" height="9" rx="1"/></g>' },
    { id: 1440, name: "PerformanceInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M13 2H9c-1 0-2 1-2 2v16c0 1 1 2 2 2h4c1 0 2-1 2-2V4c0-1-1-2-2-2z"/><rect fill="var(--ax-bg-inverse, white)" x="6" y="9" width="12" height="9" rx="1"/>' },

// 496. PersonCheck
    { id: 1441, name: "PersonCheck", category: "general", svgContent: '<circle cx="12" cy="8" r="4"/><path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6v1H6v-1z"/><polyline points="14 12 16 14 20 10"/>' },
    { id: 1442, name: "PersonCheckThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="8" r="4"/><path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6v1H6v-1z"/><polyline points="14 12 16 14 20 10"/></g>' },
    { id: 1443, name: "PersonCheckInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="8" r="4"/><path stroke="var(--ax-bg-inverse, white)" d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6v1H6v-1z"/><polyline points="14 12 16 14 20 10"/>' },

// 497. PersonPlus
    { id: 1444, name: "PersonPlus", category: "general", svgContent: '<circle cx="12" cy="8" r="4"/><path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6v1H6v-1z"/><line x1="16" y1="10" x2="16" y2="14"/><line x1="14" y1="12" x2="18" y2="12"/>' },
    { id: 1445, name: "PersonPlusThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="8" r="4"/><path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6v1H6v-1z"/><line x1="16" y1="10" x2="16" y2="14"/><line x1="14" y1="12" x2="18" y2="12"/></g>' },
    { id: 1446, name: "PersonPlusInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="8" r="4"/><path stroke="var(--ax-bg-inverse, white)" d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6v1H6v-1z"/><line stroke="var(--ax-bg-inverse, white)" x1="16" y1="10" x2="16" y2="14"/><line stroke="var(--ax-bg-inverse, white)" x1="14" y1="12" x2="18" y2="12"/>' },

// 498. PersonX
    { id: 1447, name: "PersonX", category: "general", svgContent: '<circle cx="12" cy="8" r="4"/><path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6v1H6v-1z"/><line x1="14" y1="10" x2="18" y2="14"/><line x1="18" y1="10" x2="14" y2="14"/>' },
    { id: 1448, name: "PersonXThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="8" r="4"/><path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6v1H6v-1z"/><line x1="14" y1="10" x2="18" y2="14"/><line x1="18" y1="10" x2="14" y2="14"/></g>' },
    { id: 1449, name: "PersonXInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="8" r="4"/><path stroke="var(--ax-bg-inverse, white)" d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6v1H6v-1z"/><line stroke="var(--ax-bg-inverse, white)" x1="14" y1="10" x2="18" y2="14"/><line stroke="var(--ax-bg-inverse, white)" x1="18" y1="10" x2="14" y2="14"/>' },

// 499. Phone
    { id: 1450, name: "Phone", category: "communication", svgContent: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke-linecap="round" stroke-linejoin="round"/>' },
    { id: 1451, name: "PhoneThin", category: "communication", svgContent: '<g fill="none" stroke-width="0.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke-linecap="round" stroke-linejoin="round"/></g>' },
    { id: 1452, name: "PhoneInverted", category: "communication", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="var(--ax-bg-inverse, white)" stroke-linecap="round" stroke-linejoin="round"/>' },

// 500. PhoneCall
    { id: 1453, name: "PhoneCall", category: "communication", svgContent: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><polyline points="23 7 23 1 17 1" stroke-linecap="round" stroke-linejoin="round"/>' },
    { id: 1454, name: "PhoneCallThin", category: "communication", svgContent: '<g fill="none" stroke-width="0.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><polyline points="23 7 23 1 17 1" stroke-linecap="round" stroke-linejoin="round"/></g>' },
    { id: 1455, name: "PhoneCallInverted", category: "communication", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="white"/><polyline points="23 7 23 1 17 1" stroke="var(--ax-bg-inverse, white)" stroke-linecap="round" stroke-linejoin="round"/>' },

// 501. PhoneIncoming
    { id: 1456, name: "PhoneIncoming", category: "communication", svgContent: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><polyline points="17 1 23 1 23 7" stroke-linecap="round" stroke-linejoin="round"/>' },
    { id: 1457, name: "PhoneIncomingThin", category: "communication", svgContent: '<g fill="none" stroke-width="0.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><polyline points="17 1 23 1 23 7" stroke-linecap="round" stroke-linejoin="round"/></g>' },
    { id: 1458, name: "PhoneIncomingInverted", category: "communication", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="white"/><polyline points="17 1 23 1 23 7" stroke="var(--ax-bg-inverse, white)" stroke-linecap="round" stroke-linejoin="round"/>' },

// 502. PhoneOff
    { id: 1459, name: "PhoneOff", category: "communication", svgContent: '<path d="M10.68 13.31a16 16 0 0 0 5.02 5.02m2.11-2.11l1.27 1.27a2 2 0 0 0 2.11.45 12.84 12.84 0 0 0 2.81-.7 2 2 0 0 0 1.72-2v-3a2 2 0 0 0-2.18-2 19.79 19.79 0 0 1-8.63 3.07" stroke-linecap="round"/><line x1="1" y1="1" x2="23" y2="23" stroke-linecap="round" stroke-linejoin="round"/>' },
    { id: 1460, name: "PhoneOffThin", category: "communication", svgContent: '<g fill="none" stroke-width="0.5"><path d="M10.68 13.31a16 16 0 0 0 5.02 5.02m2.11-2.11l1.27 1.27a2 2 0 0 0 2.11.45 12.84 12.84 0 0 0 2.81-.7 2 2 0 0 0 1.72-2v-3a2 2 0 0 0-2.18-2 19.79 19.79 0 0 1-8.63 3.07" stroke-linecap="round"/><line x1="1" y1="1" x2="23" y2="23" stroke-linecap="round" stroke-linejoin="round"/></g>' },
    { id: 1461, name: "PhoneOffInverted", category: "communication", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M10.68 13.31a16 16 0 0 0 5.02 5.02m2.11-2.11l1.27 1.27a2 2 0 0 0 2.11.45 12.84 12.84 0 0 0 2.81-.7 2 2 0 0 0 1.72-2v-3a2 2 0 0 0-2.18-2 19.79 19.79 0 0 1-8.63 3.07" stroke="var(--ax-bg-inverse, white)" stroke-linecap="round"/><line stroke="var(--ax-bg-inverse, white)" x1="1" y1="1" x2="23" y2="23" stroke-linecap="round" stroke-linejoin="round"/>' },

// 503. Photo-Frame-Color
    { id: 1462, name: "Photo-Frame-Color", category: "general", svgContent: '<defs><linearGradient id="frmGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#8d6e63"/><stop offset="100%" stop-color="#5d4037"/></linearGradient></defs><g><rect x="4" y="4" width="16" height="16" rx="1" fill="url(#frmGrad)" stroke="#5d4037" stroke-width="1.5"/><rect x="7" y="7" width="10" height="10" fill="#ffffff"/><circle cx="15" cy="9" r="1.5" fill="#4fc3f7"/></g>' },
    { id: 1463, name: "Photo-Frame-Thin-Color", category: "general", svgContent: '<rect x="5" y="5" width="14" height="14" rx="1" fill="none" stroke="#5d4037" stroke-width="0.75"/>' },
    { id: 1464, name: "Photo-Frame-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#5d4037" rx="4"/><rect x="5" y="5" width="14" height="14" rx="1" fill="#ffffff"/>' },

// 504. Piano-Keys-Color
    { id: 1465, name: "Piano-Keys-Color", category: "iot", svgContent: '<defs><linearGradient id="pnoGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#e0e0e0"/></linearGradient></defs><g><rect x="3" y="6" width="18" height="12" rx="2" fill="url(#pnoGrad)" stroke="#424242" stroke-width="1.5"/><path d="M7 6v8M11 6v8M15 6v8M19 6v8" stroke="#424242" stroke-width="1.5"/><rect x="6" y="6" width="2" height="6" fill="#212121"/><rect x="10" y="6" width="2" height="6" fill="#212121"/><rect x="14" y="6" width="2" height="6" fill="#212121"/></g>' },
    { id: 1466, name: "Piano-Keys-Thin-Color", category: "iot", svgContent: '<rect x="4" y="7" width="16" height="10" rx="1" fill="none" stroke="#424242" stroke-width="0.75"/>' },
    { id: 1467, name: "Piano-Keys-Inverted-Color", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#424242" rx="4"/><rect x="4" y="7" width="16" height="10" rx="1" fill="#ffffff"/>' },

// 505. Pie-Chart-Color
    { id: 1468, name: "Pie-Chart-Color", category: "general", svgContent: '<defs><linearGradient id="pieGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ff9800"/><stop offset="100%" stop-color="#f57c00"/></linearGradient></defs><g><circle cx="12" cy="12" r="10" fill="url(#pieGrad)" stroke="#f57c00" stroke-width="1.5"/><path d="M12 12l8-6a10 10 0 0 1 2 6z" fill="#ffffff"/></g>' },
    { id: 1469, name: "Pie-Chart-Thin-Color", category: "general", svgContent: '<circle cx="12" cy="12" r="9" fill="none" stroke="#f57c00" stroke-width="0.75"/>' },
    { id: 1470, name: "Pie-Chart-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#f57c00" rx="4"/><circle cx="12" cy="12" r="9" fill="#ffffff"/>' },

// 506. PieChart
    { id: 1471, name: "PieChart", category: "food", svgContent: '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>' },
    { id: 1472, name: "PieChartThin", category: "food", svgContent: '<g fill="none" stroke-width="0.5"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></g>' },
    { id: 1473, name: "PieChartInverted", category: "food", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></g>' },

// 507. Pin-Color
    { id: 1474, name: "Pin-Color", category: "iot", svgContent: '<defs><linearGradient id="pinGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ff5252"/><stop offset="100%" stop-color="#b71c1c"/></linearGradient></defs><g><path d="M12 2a5 5 0 0 0-5 5c0 3.5 5 11 5 11s5-7.5 5-5a5 5 0 0 0-5-5z" fill="url(#pinGrad)"/><circle cx="12" cy="7" r="2" fill="#ffffff"/></g>' },
    { id: 1475, name: "Pin-Thin-Color", category: "iot", svgContent: '<path d="M12 21s-7-7.5-7-12a7 7 0 1 1 14 0c0 4.5-7 12-7 12z" fill="none" stroke="#b71c1c" stroke-width="0.75"/>' },
    { id: 1476, name: "Pin-Inverted-Color", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#b71c1c" rx="4"/><path d="M12 3a6 6 0 0 0-6 6c0 4.5 6 12 6 12s6-7.5 6-12a6 6 0 0 0-6-6z" fill="#ffffff"/><circle cx="12" cy="9" r="2" fill="#b71c1c"/>' },

// 508. Pizza
    { id: 1477, name: "Pizza", category: "food", svgContent: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>' },
    { id: 1478, name: "PizzaThin", category: "food", svgContent: '<g fill="none" stroke-width="0.5"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></g>' },
    { id: 1479, name: "PizzaInverted", category: "food", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></g>' },

// 509. Placeholder-Fill-3
    { id: 1480, name: "Placeholder-Fill-3", category: "general", svgContent: '<rect width="24" height="24" fill="#eeeeee"/>' },
    { id: 1481, name: "Placeholder-Fill-4", category: "general", svgContent: '<rect width="24" height="24" fill="#eeeeee"/>' },
    { id: 1482, name: "Placeholder-Fill-5", category: "general", svgContent: '<rect width="24" height="24" fill="#eeeeee"/>' },

// 510. Planet-Color
    { id: 1483, name: "Planet-Color", category: "general", svgContent: '<defs><linearGradient id="plnGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffcc80"/><stop offset="100%" stop-color="#e65100"/></linearGradient></defs><g><circle cx="12" cy="12" r="7" fill="url(#plnGrad)" stroke="#e65100" stroke-width="1.5"/><ellipse cx="12" cy="12" rx="10" ry="3" fill="none" stroke="#ffcc80" stroke-width="1.5" transform="rotate(20 12 12)"/></g>' },
    { id: 1484, name: "Planet-Thin-Color", category: "general", svgContent: '<circle cx="12" cy="12" r="6" fill="none" stroke="#e65100" stroke-width="0.75"/>' },
    { id: 1485, name: "Planet-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#e65100" rx="4"/><circle cx="12" cy="12" r="6" fill="#ffffff"/>' },

// 511. Plate
    { id: 1486, name: "Plate", category: "general", svgContent: '<circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20"/><path d="M12 5a7 7 0 0 0 0 14"/>' },
    { id: 1487, name: "PlateThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20"/><path d="M12 5a7 7 0 0 0 0 14"/></g>' },
    { id: 1488, name: "PlateInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20"/><path d="M12 5a7 7 0 0 0 0 14"/></g>' },

// 512. Play
    { id: 1489, name: "Play", category: "media", svgContent: '<polygon points="5 3 19 12 5 21 5 3"/>' },
    { id: 1490, name: "PlayThin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><polygon points="5 3 19 12 5 21 5 3"/></g>' },
    { id: 1491, name: "PlayInverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polygon points="5 3 19 12 5 21 5 3"/></g>' },

// 513. PlaySolid
    { id: 1492, name: "PlaySolid", category: "media", svgContent: '<polygon points="5 3 19 12 5 21 5 3" fill="currentColor" opacity="0.9"/>' },
    { id: 1493, name: "PlaySolidThin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><polygon points="5 3 19 12 5 21 5 3"/></g>' },
    { id: 1494, name: "PlaySolidInverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><polygon points="5 3 19 12 5 21 5 3" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 514. Plug
    { id: 1495, name: "Plug", category: "iot", svgContent: '<circle cx="12" cy="13" r="1" fill="currentColor" opacity="0.9"/><path d="M12 1v4m0 8v4M6 12h-2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2v8zm8-8h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2V4z"/>' },
    { id: 1496, name: "PlugThin", category: "iot", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="13" r="1"/><path d="M12 1v4m0 8v4M6 12h-2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2v8zm8-8h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2V4z"/></g>' },
    { id: 1497, name: "PlugInverted", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="13" r="1" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><path stroke="var(--ax-bg-inverse, white)" d="M12 1v4m0 8v4M6 12h-2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2v8zm8-8h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2V4z"/>' },

// 515. Plus
    { id: 1498, name: "Plus", category: "ui", svgContent: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>' },
    { id: 1499, name: "PlusThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></g>' },
    { id: 1500, name: "PlusInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><line stroke="var(--ax-bg-inverse, white)" x1="12" y1="5" x2="12" y2="19"/><line stroke="var(--ax-bg-inverse, white)" x1="5" y1="12" x2="19" y2="12"/>' },

// 516. Pocket-Knife
    { id: 1501, name: "Pocket-Knife", category: "general", svgContent: '<path d="M12 18h8"/><path d="M12 15h8"/><path d="M12 12h8"/><path d="M12 9h8"/><path d="M12 6h8"/><path d="M12 3h8"/><path d="M3 21h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z"/>' },
    { id: 1502, name: "Pocket-KnifeThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 18h8"/><path d="M12 15h8"/><path d="M12 12h8"/><path d="M12 9h8"/><path d="M12 6h8"/><path d="M12 3h8"/><path d="M3 21h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z"/></g>' },
    { id: 1503, name: "Pocket-KnifeInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M12 18h8"/><path d="M12 15h8"/><path d="M12 12h8"/><path d="M12 9h8"/><path d="M12 6h8"/><path d="M12 3h8"/><path d="M3 21h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z"/></g>' },

// 517. Police-Car-Color
    { id: 1504, name: "Police-Car-Color", category: "general", svgContent: '<defs><linearGradient id="polGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#eceff1"/><stop offset="100%" stop-color="#cfd8dc"/></linearGradient></defs><g><rect x="2" y="10" width="16" height="8" rx="2" fill="url(#polGrad)" stroke="#455a64" stroke-width="1.5"/><rect x="8" y="12" width="4" height="2" fill="#2196f3"/></g>' },
    { id: 1505, name: "Police-Car-Thin-Color", category: "general", svgContent: '<rect x="3" y="11" width="14" height="6" rx="1" fill="none" stroke="#455a64" stroke-width="0.75"/>' },
    { id: 1506, name: "Police-Car-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#455a64" rx="4"/><rect x="3" y="11" width="14" height="6" rx="1" fill="#ffffff"/>' },

// 518. Pot
    { id: 1507, name: "Pot", category: "general", svgContent: '<path d="M17 14h3a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3"/><path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/><path d="M12 2v4"/>' },
    { id: 1508, name: "PotThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M17 14h3a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3"/><path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/><path d="M12 2v4"/></g>' },
    { id: 1509, name: "PotInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M17 14h3a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3"/><path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/><path d="M12 2v4"/></g>' },

// 519. Pound-Sign
    { id: 1510, name: "Pound-Sign", category: "finance", svgContent: '<path d="M18 16a6 6 0 0 1-6 6H6"/><path d="M6 16h12"/><path d="M6 10h12"/><path d="M12 2a4 4 0 0 1 4 4v4"/>' },
    { id: 1511, name: "Pound-SignThin", category: "finance", svgContent: '<g fill="none" stroke-width="0.5"><path d="M18 16a6 6 0 0 1-6 6H6"/><path d="M6 16h12"/><path d="M6 10h12"/><path d="M12 2a4 4 0 0 1 4 4v4"/></g>' },
    { id: 1512, name: "Pound-SignInverted", category: "finance", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M18 16a6 6 0 0 1-6 6H6"/><path d="M6 16h12"/><path d="M6 10h12"/><path d="M12 2a4 4 0 0 1 4 4v4"/></g>' },

// 520. Power
    { id: 1513, name: "Power", category: "iot", svgContent: '<path d="M18.36 6.64a9 9 0 1 1-12.73 0M12 2v10"/>' },
    { id: 1514, name: "PowerThin", category: "iot", svgContent: '<g fill="none" stroke-width="0.5"><path d="M18.36 6.64a9 9 0 1 1-12.73 0M12 2v10"/></g>' },
    { id: 1515, name: "PowerInverted", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M18.36 6.64a9 9 0 1 1-12.73 0M12 2v10"/>' },

// 521. Present-Color
    { id: 1516, name: "Present-Color", category: "general", svgContent: '<defs><linearGradient id="pstGrad2" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#f44336"/><stop offset="100%" stop-color="#b71c1c"/></linearGradient></defs><g><rect x="4" y="8" width="16" height="12" rx="1" fill="url(#pstGrad2)" stroke="#b71c1c" stroke-width="1.5"/><rect x="11" y="8" width="2" height="12" fill="#ffeb3b"/><rect x="4" y="13" width="16" height="2" fill="#ffeb3b"/><path d="M12 8l-2-4h2a2 2 0 0 1 2 2" fill="none" stroke="#ffeb3b" stroke-width="2"/></g>' },
    { id: 1517, name: "Present-Thin-Color", category: "general", svgContent: '<rect x="5" y="9" width="14" height="10" rx="1" fill="none" stroke="#b71c1c" stroke-width="0.75"/>' },
    { id: 1518, name: "Present-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#b71c1c" rx="4"/><rect x="5" y="9" width="14" height="10" rx="1" fill="#ffffff"/><rect x="11" y="9" width="2" height="10" fill="#b71c1c"/><rect x="5" y="13" width="14" height="2" fill="#b71c1c"/>' },

// 522. PrimeVideo
    { id: 1519, name: "PrimeVideo", category: "general", svgContent: '<path d="M2 4h20v16H2z"/><polygon points="8 10 8 14 12 12 8 10M14 9h4v6h-4z"/>' },
    { id: 1520, name: "PrimeVideoThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M2 4h20v16H2z"/><polygon points="8 10 8 14 12 12 8 10M14 9h4v6h-4z"/></g>' },
    { id: 1521, name: "PrimeVideoInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M2 4h20v16H2z"/><polygon points="8 10 8 14 12 12 8 10M14 9h4v6h-4z"/>' },

// 523. Processor
    { id: 1522, name: "Processor", category: "development", svgContent: '<rect x="6" y="4" width="12" height="16" rx="1"/><rect x="8" y="6" width="3" height="3"/><rect x="13" y="6" width="3" height="3"/><rect x="8" y="11" width="3" height="3"/><rect x="13" y="11" width="3" height="3"/><rect x="8" y="16" width="3" height="2"/><rect x="13" y="16" width="3" height="2"/>' },
    { id: 1523, name: "ProcessorThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><rect x="6" y="4" width="12" height="16" rx="1"/><rect x="8" y="6" width="3" height="3"/><rect x="13" y="6" width="3" height="3"/><rect x="8" y="11" width="3" height="3"/><rect x="13" y="11" width="3" height="3"/><rect x="8" y="16" width="3" height="2"/><rect x="13" y="16" width="3" height="2"/></g>' },
    { id: 1524, name: "ProcessorInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="6" y="4" width="12" height="16" rx="1"/><rect fill="var(--ax-bg-inverse, white)" x="8" y="6" width="3" height="3"/><rect fill="var(--ax-bg-inverse, white)" x="13" y="6" width="3" height="3"/><rect fill="var(--ax-bg-inverse, white)" x="8" y="11" width="3" height="3"/><rect fill="var(--ax-bg-inverse, white)" x="13" y="11" width="3" height="3"/><rect fill="var(--ax-bg-inverse, white)" x="8" y="16" width="3" height="2"/><rect fill="var(--ax-bg-inverse, white)" x="13" y="16" width="3" height="2"/>' },

// 524. Profile
    { id: 1525, name: "Profile", category: "ui", svgContent: '<circle cx="12" cy="10" r="3"/><path d="M7 20c0-2.76 2.24-5 5-5s5 2.24 5 5"/>' },
    { id: 1526, name: "ProfileThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="10" r="3"/><path d="M7 20c0-2.76 2.24-5 5-5s5 2.24 5 5"/></g>' },
    { id: 1527, name: "ProfileInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="10" r="3" stroke="var(--ax-bg-inverse, white)" /><path stroke="var(--ax-bg-inverse, white)" d="M7 20c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="var(--ax-bg-inverse, white)" />' },

// 525. Puzzle-Color
    { id: 1528, name: "Puzzle-Color", category: "development", svgContent: '<defs><linearGradient id="puzGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#26a69a"/><stop offset="100%" stop-color="#00796b"/></linearGradient></defs><path d="M11.5 5.5a2.5 2.5 0 0 1 5 0V7h2.5A1.5 1.5 0 0 1 20.5 8.5V11h-1.5a2.5 2.5 0 0 0 0 5h1.5v2.5a1.5 1.5 0 0 1-1.5 1.5H16.5v-1.5a2.5 2.5 0 0 0-5 0v1.5H9a1.5 1.5 0 0 1-1.5-1.5V16.5H9a2.5 2.5 0 0 0 0-5H7.5V8.5A1.5 1.5 0 0 1 9 7h2.5V5.5z" fill="url(#puzGrad)"/>' },
    { id: 1529, name: "Puzzle-Thin-Color", category: "development", svgContent: '<rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="#00796b" stroke-width="0.75"/>' },
    { id: 1530, name: "Puzzle-Inverted-Color", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#00796b" rx="4"/><rect x="5" y="5" width="14" height="14" rx="2" fill="#ffffff"/>' },

// 526. Puzzle-Piece-Color
    { id: 1531, name: "Puzzle-Piece-Color", category: "development", svgContent: '<defs><linearGradient id="pzlGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#4fc3f7"/><stop offset="100%" stop-color="#0288d1"/></linearGradient></defs><g><path d="M16 11a3 3 0 0 0-3-3H8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h4v-4h-4z" fill="url(#pzlGrad)" stroke="#0288d1" stroke-width="1.5"/></g>' },
    { id: 1532, name: "Puzzle-Piece-Thin-Color", category: "development", svgContent: '<path d="M16 12a2 2 0 0 0-2-2H9a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-1h3v-2h-3z" fill="none" stroke="#0288d1" stroke-width="0.75"/>' },
    { id: 1533, name: "Puzzle-Piece-Inverted-Color", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#0288d1" rx="4"/><path d="M16 12a2 2 0 0 0-2-2H9a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-1h3v-2h-3z" fill="#ffffff"/>' },

// 527. QuestionMark
    { id: 1534, name: "QuestionMark", category: "general", svgContent: '<circle cx="12" cy="12" r="10"/><path d="M12 8a2.5 2.5 0 0 0-2.5 2.5c0 1.5 1 2 1.5 3M12 18h.01"/>' },
    { id: 1535, name: "QuestionMarkThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><path d="M12 8a2.5 2.5 0 0 0-2.5 2.5c0 1.5 1 2 1.5 3M12 18h.01"/></g>' },
    { id: 1536, name: "QuestionMarkInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="10"/><path stroke="var(--ax-bg-inverse, white)" d="M12 8a2.5 2.5 0 0 0-2.5 2.5c0 1.5 1 2 1.5 3M12 18h.01" />' },

// 528. Radio
    { id: 1537, name: "Radio", category: "media", svgContent: '<circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/>' },
    { id: 1538, name: "RadioThin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/></g>' },
    { id: 1539, name: "RadioInverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/></g>' },

// 529. Radio-Color
    { id: 1540, name: "Radio-Color", category: "media", svgContent: '<defs><linearGradient id="radBody" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffb74d"/><stop offset="100%" stop-color="#f57c00"/></linearGradient></defs><g><rect x="2" y="6" width="20" height="15" rx="2" fill="url(#radBody)"/><line x1="6" y1="6" x2="18" y2="1" stroke="#78909c" stroke-width="2" stroke-linecap="round"/><circle cx="7" cy="13.5" r="4.5" fill="#37474f"/><circle cx="7" cy="13.5" r="1.5" fill="#cfd8dc"/><rect x="14" y="9" width="5" height="3" fill="#212121" rx="0.5"/><circle cx="15.5" cy="16" r="1" fill="#212121"/><circle cx="18.5" cy="16" r="1" fill="#212121"/></g>' },
    { id: 1541, name: "Radio-Thin-Color", category: "media", svgContent: '<rect x="2" y="6" width="20" height="15" rx="2" fill="none" stroke="#f57c00" stroke-width="0.75"/><circle cx="7" cy="13.5" r="3" fill="none" stroke="#f57c00" stroke-width="0.5"/>' },
    { id: 1542, name: "Radio-Inverted-Color", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#f57c00" rx="4"/><rect x="3" y="7" width="18" height="13" rx="1" fill="#ffffff"/><circle cx="8" cy="13" r="3" fill="#f57c00"/>' },

// 530. RadioOff
    { id: 1543, name: "RadioOff", category: "media", svgContent: '<circle cx="12" cy="12" r="10"/>' },
    { id: 1544, name: "RadioOffThin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/></g>' },
    { id: 1545, name: "RadioOffInverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="10" stroke="var(--ax-bg-inverse, white)" />' },

// 531. RadioOn
    { id: 1546, name: "RadioOn", category: "media", svgContent: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="5" fill="currentColor" opacity="0.9"/>' },
    { id: 1547, name: "RadioOnThin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="5"/></g>' },
    { id: 1548, name: "RadioOnInverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="10"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 532. Rain
    { id: 1549, name: "Rain", category: "weather", svgContent: '<path d="M16 13v8M8 13v8M12 15v8M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/>' },
    { id: 1550, name: "RainThin", category: "weather", svgContent: '<g fill="none" stroke-width="0.5"><path d="M16 13v8M8 13v8M12 15v8M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/></g>' },
    { id: 1551, name: "RainInverted", category: "weather", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M16 13v8M8 13v8M12 15v8M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/></g>' },

// 533. Rain-Color
    { id: 1552, name: "Rain-Color", category: "ai", svgContent: '<defs><linearGradient id="rnGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#4fc3f7"/><stop offset="100%" stop-color="#0288d1"/></linearGradient></defs><g><path d="M18 10a5 5 0 0 0-9-3 4 4 0 0 0-4 4 4 4 0 0 0 2 8h11a4 4 0 0 0 0-8z" fill="#eceff1" stroke="#455a64" stroke-width="1.5"/><path d="M8 18l1 3M12 18l1 3M16 18l1 3" stroke="url(#rnGrad)" stroke-width="2" stroke-linecap="round"/></g>' },
    { id: 1553, name: "Rain-Thin-Color", category: "ai", svgContent: '<path d="M17 11a4 4 0 0 0-8-2 3 3 0 0 0-3 3 3 3 0 0 0 2 6h10a3 3 0 0 0 0-6z" fill="none" stroke="#455a64" stroke-width="0.75"/>' },
    { id: 1554, name: "Rain-Inverted-Color", category: "ai", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#455a64" rx="4"/><path d="M17 11a4 4 0 0 0-8-2 3 3 0 0 0-3 3 3 3 0 0 0 2 6h10a3 3 0 0 0 0-6z" fill="#ffffff"/>' },

// 534. Rain-Drop-Color
    { id: 1555, name: "Rain-Drop-Color", category: "ai", svgContent: '<defs><linearGradient id="rdrGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#4fc3f7"/><stop offset="100%" stop-color="#0288d1"/></linearGradient></defs><g><path d="M12 2a8 8 0 0 0-8 8c0 4 8 12 8 12s8-8 8-12a8 8 0 0 0-8-8z" fill="url(#rdrGrad)" stroke="#0288d1" stroke-width="1.5"/></g>' },
    { id: 1556, name: "Rain-Drop-Thin-Color", category: "ai", svgContent: '<path d="M12 3a7 7 0 0 0-7 7c0 3 7 10 7 10s7-7 7-10a7 7 0 0 0-7-7z" fill="none" stroke="#0288d1" stroke-width="0.75"/>' },
    { id: 1557, name: "Rain-Drop-Inverted-Color", category: "ai", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#0288d1" rx="4"/><path d="M12 3a7 7 0 0 0-7 7c0 3 7 10 7 10s7-7 7-10a7 7 0 0 0-7-7z" fill="#ffffff"/>' },

// 535. Reddit
    { id: 1558, name: "Reddit", category: "general", svgContent: '<circle cx="12" cy="12" r="10"/><circle cx="8" cy="10" r="1.5" fill="currentColor" opacity="0.9"/><circle cx="16" cy="10" r="1.5" fill="currentColor" opacity="0.9"/><path d="M8 14c1 1 3 2 4 2s3-1 4-2"/>' },
    { id: 1559, name: "RedditThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><circle cx="8" cy="10" r="1.5"/><circle cx="16" cy="10" r="1.5"/><path d="M8 14c1 1 3 2 4 2s3-1 4-2"/></g>' },
    { id: 1560, name: "RedditInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="10"/><circle fill="var(--ax-bg-inverse, white)" cx="8" cy="10" r="1.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="16" cy="10" r="1.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><path stroke="var(--ax-bg-inverse, white)" d="M8 14c1 1 3 2 4 2s3-1 4-2"/>' },

// 536. REST
    { id: 1561, name: "REST", category: "general", svgContent: '<rect x="3" y="4" width="18" height="2"/><rect x="3" y="9" width="18" height="2"/><rect x="3" y="14" width="18" height="2"/><rect x="3" y="19" width="18" height="2"/>' },
    { id: 1562, name: "RESTThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><rect x="3" y="4" width="18" height="2"/><rect x="3" y="9" width="18" height="2"/><rect x="3" y="14" width="18" height="2"/><rect x="3" y="19" width="18" height="2"/></g>' },
    { id: 1563, name: "RESTInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="3" y="4" width="18" height="2"/><rect fill="var(--ax-bg-inverse, white)" x="3" y="9" width="18" height="2"/><rect fill="var(--ax-bg-inverse, white)" x="3" y="14" width="18" height="2"/><rect fill="var(--ax-bg-inverse, white)" x="3" y="19" width="18" height="2"/>' },

// 537. Rewind
    { id: 1564, name: "Rewind", category: "media", svgContent: '<polygon points="11 19 2 12 11 5 11 19"/><polygon points="22 19 13 12 22 5 22 19"/>' },
    { id: 1565, name: "RewindThin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><polygon points="11 19 2 12 11 5 11 19"/><polygon points="22 19 13 12 22 5 22 19"/></g>' },
    { id: 1566, name: "RewindInverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polygon points="11 19 2 12 11 5 11 19"/><polygon points="22 19 13 12 22 5 22 19"/></g>' },

// 538. Ring
    { id: 1567, name: "Ring", category: "general", svgContent: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="16" cy="8" r="1.5" fill="currentColor" opacity="0.9"/>' },
    { id: 1568, name: "RingThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="16" cy="8" r="1.5"/></g>' },
    { id: 1569, name: "RingInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="8"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="4" stroke="var(--ax-bg-inverse, white)" /><circle fill="var(--ax-bg-inverse, white)" cx="16" cy="8" r="1.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 539. Ripple
    { id: 1570, name: "Ripple", category: "brands", svgContent: '<circle cx="12" cy="12" r="1" fill="currentColor" opacity="0.9"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="7"/>' },
    { id: 1571, name: "RippleThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="7"/></g>' },
    { id: 1572, name: "RippleInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="1" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="4" stroke="var(--ax-bg-inverse, white)" /><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="7" stroke="var(--ax-bg-inverse, white)" />' },

// 540. Robot
    { id: 1573, name: "Robot", category: "ai", svgContent: '<rect x="3" y="4" width="18" height="14" rx="2"/><rect x="5" y="2" width="3" height="4"/><rect x="16" y="2" width="3" height="4"/><circle cx="7" cy="10" r="1" fill="currentColor" opacity="0.9"/><circle cx="17" cy="10" r="1" fill="currentColor" opacity="0.9"/><path d="M9 14h6M7 16h10"/>' },
    { id: 1574, name: "RobotThin", category: "ai", svgContent: '<g fill="none" stroke-width="0.5"><rect x="3" y="4" width="18" height="14" rx="2"/><rect x="5" y="2" width="3" height="4"/><rect x="16" y="2" width="3" height="4"/><circle cx="7" cy="10" r="1"/><circle cx="17" cy="10" r="1"/><path d="M9 14h6M7 16h10"/></g>' },
    { id: 1575, name: "RobotInverted", category: "ai", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="3" y="4" width="18" height="14" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="5" y="2" width="3" height="4"/><rect fill="var(--ax-bg-inverse, white)" x="16" y="2" width="3" height="4"/><circle fill="var(--ax-bg-inverse, white)" cx="7" cy="10" r="1" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="17" cy="10" r="1" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><path stroke="var(--ax-bg-inverse, white)" d="M9 14h6M7 16h10"/>' },

// 541. Rocket
    { id: 1576, name: "Rocket", category: "general", svgContent: '<path d="M4.5 16.5c-1.5-1-2-2.5-2-4s.5-3 2-4l7-12 7 12c1.5 1 2 2.5 2 4s-.5 3-2 4l-7 4-7-4z"/><circle cx="12" cy="9" r="2" fill="currentColor" opacity="0.9"/>' },
    { id: 1577, name: "RocketThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M4.5 16.5c-1.5-1-2-2.5-2-4s.5-3 2-4l7-12 7 12c1.5 1 2 2.5 2 4s-.5 3-2 4l-7 4-7-4z"/><circle cx="12" cy="9" r="2"/></g>' },
    { id: 1578, name: "RocketInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M4.5 16.5c-1.5-1-2-2.5-2-4s.5-3 2-4l7-12 7 12c1.5 1 2 2.5 2 4s-.5 3-2 4l-7 4-7-4z"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="9" r="2" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 542. Rocket-Color
    { id: 1579, name: "Rocket-Color", category: "general", svgContent: '<defs><linearGradient id="rockBody" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#eceff1"/><stop offset="100%" stop-color="#b0bec5"/></linearGradient></defs><g><path d="M12 2C9 6 9 13 9 17h6c0-4 0-11-3-15z" fill="url(#rockBody)"/><path d="M9 14c-2 1-4 4-4 6h4v-6zm6 0c2 1 4 4 4 6h-4v-6z" fill="#ef5350"/><polygon points="10 17 12 23 14 17" fill="#ff9800"/><circle cx="12" cy="8" r="2" fill="#29b6f6"/></g>' },
    { id: 1580, name: "Rocket-Thin-Color", category: "general", svgContent: '<path d="M12 2C9 6 9 13 9 17h6c0-4 0-11-3-15z" fill="none" stroke="#b0bec5" stroke-width="0.75"/>' },
    { id: 1581, name: "Rocket-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#b0bec5" rx="4"/><path d="M12 4c-2 3-2 8-2 11h4c0-3 0-8-2-11z" fill="#ffffff"/><polygon points="8 15 5 19 10 19" fill="#ef5350"/><polygon points="16 15 19 19 14 19" fill="#ef5350"/>' },

// 543. Rocket-Launch-Color
    { id: 1582, name: "Rocket-Launch-Color", category: "general", svgContent: '<defs><linearGradient id="rlcGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffcc80"/><stop offset="100%" stop-color="#f4511e"/></linearGradient></defs><g><path d="M12 2l3 7v10a2 2 0 0 1-4 0V9z" fill="url(#rlcGrad)" stroke="#bf360c" stroke-width="1.5"/><path d="M9 19l-3 4M15 19l3 4" stroke="#f4511e" stroke-width="3" stroke-linecap="round"/></g>' },
    { id: 1583, name: "Rocket-Launch-Thin-Color", category: "general", svgContent: '<path d="M12 3l2 6v10a1 1 0 0 1-2 0V9z" fill="none" stroke="#bf360c" stroke-width="0.75"/>' },
    { id: 1584, name: "Rocket-Launch-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#bf360c" rx="4"/><path d="M12 3l2 6v10a1 1 0 0 1-2 0V9z" fill="#ffffff"/>' },

// 544. Rocket-Mini-Color
    { id: 1585, name: "Rocket-Mini-Color", category: "general", svgContent: '<defs><linearGradient id="rkmGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#eceff1"/><stop offset="100%" stop-color="#b0bec5"/></linearGradient></defs><g><path d="M12 2l4 8v10a2 2 0 0 1-4 0 2 2 0 0 1-4 0V10z" fill="url(#rkmGrad)" stroke="#546e7a" stroke-width="1.5"/><path d="M6 18l-2 4h4l-2-4z" fill="#ff5252"/></g>' },
    { id: 1586, name: "Rocket-Mini-Thin-Color", category: "general", svgContent: '<path d="M12 3l3 7v10a1 1 0 0 1-2 0 1 1 0 0 1-2 0V10z" fill="none" stroke="#546e7a" stroke-width="0.75"/>' },
    { id: 1587, name: "Rocket-Mini-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#546e7a" rx="4"/><path d="M12 3l3 7v10a1 1 0 0 1-2 0 1 1 0 0 1-2 0V10z" fill="#ffffff"/>' },

// 545. Roller-Skate-Color
    { id: 1588, name: "Roller-Skate-Color", category: "general", svgContent: '<defs><linearGradient id="rlsGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#e91e63"/><stop offset="100%" stop-color="#ad1457"/></linearGradient></defs><g><path d="M4 14h16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" fill="url(#rlsGrad)" stroke="#ad1457" stroke-width="1.5"/><circle cx="8" cy="20" r="2" fill="#ad1457"/><circle cx="16" cy="20" r="2" fill="#ad1457"/></g>' },
    { id: 1589, name: "Roller-Skate-Thin-Color", category: "general", svgContent: '<rect x="5" y="15" width="14" height="4" rx="1" fill="none" stroke="#ad1457" stroke-width="0.75"/>' },
    { id: 1590, name: "Roller-Skate-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#ad1457" rx="4"/><rect x="5" y="15" width="14" height="4" rx="1" fill="#ffffff"/>' },

// 546. Router
    { id: 1591, name: "Router", category: "general", svgContent: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="6" cy="12" r="1" fill="currentColor" opacity="0.9"/><circle cx="12" cy="12" r="1" fill="currentColor" opacity="0.9"/><circle cx="18" cy="12" r="1" fill="currentColor" opacity="0.9"/><path d="M12 18l-2-2m4 0l2-2M8 18l1-1m6 0l1 1"/>' },
    { id: 1592, name: "RouterThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="6" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18" cy="12" r="1"/><path d="M12 18l-2-2m4 0l2-2M8 18l1-1m6 0l1 1"/></g>' },
    { id: 1593, name: "RouterInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="2" y="6" width="20" height="12" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="6" cy="12" r="1" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="1" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="18" cy="12" r="1" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><path stroke="var(--ax-bg-inverse, white)" d="M12 18l-2-2m4 0l2-2M8 18l1-1m6 0l1 1"/>' },

// 547. Rows-Color
    { id: 1594, name: "Rows-Color", category: "development", svgContent: '<defs><linearGradient id="rowsGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#b0bec5"/><stop offset="100%" stop-color="#78909c"/></linearGradient></defs><g><rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="url(#rowsGrad)" stroke-width="2"/><rect x="5" y="5" width="14" height="6" fill="#78909c" opacity="0.25"/><rect x="5" y="13" width="14" height="6" fill="#78909c" opacity="0.25"/></g>' },
    { id: 1595, name: "Rows-Thin-Color", category: "development", svgContent: '<rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="#78909c" stroke-width="0.75"/><line x1="3" y1="12" x2="21" y2="12" stroke="#78909c" stroke-width="0.5"/>' },
    { id: 1596, name: "Rows-Inverted-Color", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#78909c" rx="4"/><rect x="4" y="4" width="16" height="7" rx="1" fill="#ffffff"/><rect x="4" y="13" width="16" height="7" rx="1" fill="#ffffff"/>' },

// 548. Ruler-Color
    { id: 1597, name: "Ruler-Color", category: "general", svgContent: '<defs><linearGradient id="rlrGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#fff176"/><stop offset="100%" stop-color="#fbc02d"/></linearGradient></defs><g><rect x="2" y="8" width="20" height="8" rx="1" fill="url(#rlrGrad)" stroke="#fbc02d" stroke-width="1.5"/><path d="M4 12h1M8 12h1M12 12h1M16 12h1M20 12h1" stroke="#37474f" stroke-width="1.5" stroke-linecap="round"/></g>' },
    { id: 1598, name: "Ruler-Thin-Color", category: "general", svgContent: '<rect x="3" y="9" width="18" height="6" rx="1" fill="none" stroke="#fbc02d" stroke-width="0.75"/>' },
    { id: 1599, name: "Ruler-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#fbc02d" rx="4"/><rect x="3" y="9" width="18" height="6" rx="1" fill="#ffffff"/>' },

// 549. Salt
    { id: 1600, name: "Salt", category: "general", svgContent: '<path d="M10 2l4 4"/><path d="M12 2l4 4"/><path d="M14 2l4 4"/><path d="M20 22V10a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12h16z"/>' },
    { id: 1601, name: "SaltThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M10 2l4 4"/><path d="M12 2l4 4"/><path d="M14 2l4 4"/><path d="M20 22V10a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12h16z"/></g>' },
    { id: 1602, name: "SaltInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M10 2l4 4"/><path d="M12 2l4 4"/><path d="M14 2l4 4"/><path d="M20 22V10a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12h16z"/></g>' },

// 550. Sandwich
    { id: 1603, name: "Sandwich", category: "general", svgContent: '<path d="M21 16H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2z"/><path d="M1 8h22M1 12h22"/><path d="M6 2L3 6M12 2L9 6M18 2L15 6"/>' },
    { id: 1604, name: "SandwichThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M21 16H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2z"/><path d="M1 8h22M1 12h22"/><path d="M6 2L3 6M12 2L9 6M18 2L15 6"/></g>' },
    { id: 1605, name: "SandwichInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M21 16H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2z"/><path d="M1 8h22M1 12h22"/><path d="M6 2L3 6M12 2L9 6M18 2L15 6"/></g>' },

// 551. Satelite-Color
    { id: 1606, name: "Satelite-Color", category: "general", svgContent: '<defs><linearGradient id="satGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#cfd8dc"/><stop offset="100%" stop-color="#90a4ae"/></linearGradient></defs><g><rect x="8" y="8" width="8" height="8" fill="url(#satGrad)" stroke="#455a64" stroke-width="1.5"/><rect x="2" y="11" width="6" height="2" fill="#455a64"/><rect x="16" y="11" width="6" height="2" fill="#455a64"/></g>' },
    { id: 1607, name: "Satelite-Thin-Color", category: "general", svgContent: '<rect x="9" y="9" width="6" height="6" fill="none" stroke="#455a64" stroke-width="0.75"/>' },
    { id: 1608, name: "Satelite-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#455a64" rx="4"/><rect x="9" y="9" width="6" height="6" fill="#ffffff"/>' },

// 552. Saturation
    { id: 1609, name: "Saturation", category: "general", svgContent: '<circle cx="12" cy="12" r="1" fill="currentColor" opacity="0.9"/><path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0-4a9 9 0 1 1 0 18 9 9 0 0 1 0-18z"/>' },
    { id: 1610, name: "SaturationThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="1"/><path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0-4a9 9 0 1 1 0 18 9 9 0 0 1 0-18z"/></g>' },
    { id: 1611, name: "SaturationInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="1" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><path stroke="var(--ax-bg-inverse, white)" d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0-4a9 9 0 1 1 0 18 9 9 0 0 1 0-18z"/>' },

// 553. Saturation-Color
    { id: 1612, name: "Saturation-Color", category: "general", svgContent: '<defs><linearGradient id="satGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ff4081"/><stop offset="100%" stop-color="#f50057"/></linearGradient></defs><g><path d="M12 22a10 10 0 0 0 10-10C22 6 12 2 12 2S2 6 2 12a10 10 0 0 0 10 10z" fill="none" stroke="url(#satGrad)" stroke-width="2"/><path d="M12 22a10 10 0 0 0 10-10C22 6 12 2V22z" fill="url(#satGrad)"/></g>' },
    { id: 1613, name: "Saturation-Thin-Color", category: "general", svgContent: '<path d="M12 21a9 9 0 0 0 9-9C21 7 12 3 12 3S3 7 3 12a9 9 0 0 0 9 9z" fill="none" stroke="#f50057" stroke-width="0.75"/>' },
    { id: 1614, name: "Saturation-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#f50057" rx="4"/><path d="M12 21a9 9 0 0 0 9-9C21 7 12 3V21z" fill="#ffffff"/>' },

// 554. Save
    { id: 1615, name: "Save", category: "general", svgContent: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>' },
    { id: 1616, name: "SaveThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></g>' },
    { id: 1617, name: "SaveInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></g>' },

// 555. Saxophone-Color
    { id: 1618, name: "Saxophone-Color", category: "ui", svgContent: '<defs><linearGradient id="saxGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fff9c4"/><stop offset="100%" stop-color="#ffd600"/></linearGradient></defs><g><path d="M20 16c0 3-3 5-6 5s-6-2-6-5V8c0-3 2-6 5-6h2" fill="none" stroke="url(#saxGrad)" stroke-width="4" stroke-linecap="round"/><circle cx="18" cy="16" r="3" fill="none" stroke="#ffd600" stroke-width="3"/></g>' },
    { id: 1619, name: "Saxophone-Thin-Color", category: "ui", svgContent: '<path d="M19 16c0 2-2 4-5 4s-5-2-5-4V9c0-2 1-5 4-5h2" fill="none" stroke="#ffd600" stroke-width="0.75"/>' },
    { id: 1620, name: "Saxophone-Inverted-Color", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#ffd600" rx="4"/><path d="M19 16c0 2-2 4-5 4s-5-2-5-4V9c0-2 1-5 4-5h2" fill="none" stroke="#ffffff" stroke-width="2"/>' },

// 556. Scissors
    { id: 1621, name: "Scissors", category: "objects", svgContent: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/>' },
    { id: 1622, name: "ScissorsThin", category: "objects", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></g>' },
    { id: 1623, name: "ScissorsInverted", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></g>' },

// 557. Scissors-Color
    { id: 1624, name: "Scissors-Color", category: "objects", svgContent: '<defs><linearGradient id="scisGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#ff5252"/><stop offset="100%" stop-color="#ff1744"/></linearGradient></defs><g fill="none" stroke="#78909c" stroke-width="2"><circle cx="6" cy="6" r="3" fill="url(#scisGrad)" stroke="none"/><circle cx="6" cy="18" r="3" fill="url(#scisGrad)" stroke="none"/><line x1="9.8" y1="8.2" x2="22" y2="14.3" stroke-linecap="round"/><line x1="9.8" y1="15.8" x2="22" y2="9.7" stroke-linecap="round"/></g>' },
    { id: 1625, name: "Scissors-Thin-Color", category: "objects", svgContent: '<circle cx="6" cy="6" r="2" fill="none" stroke="#ff1744" stroke-width="0.75"/><line x1="8" y1="8" x2="20" y2="14" stroke="#78909c" stroke-width="0.5"/>' },
    { id: 1626, name: "Scissors-Inverted-Color", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#ff1744" rx="4"/><g stroke="#ffffff" stroke-width="2" fill="none"><circle cx="7" cy="7" r="2"/><circle cx="7" cy="17" r="2"/><line x1="10" y1="9" x2="20" y2="15"/></g>' },

// 558. Scissors-Off
    { id: 1627, name: "Scissors-Off", category: "objects", svgContent: '<circle cx="6" cy="6" r="3"/><path d="M8.12 8.12L12 12"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20"/><line x1="1" y1="1" x2="23" y2="23"/>' },
    { id: 1628, name: "Scissors-OffThin", category: "objects", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12L12 12"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20"/><line x1="1" y1="1" x2="23" y2="23"/></g>' },
    { id: 1629, name: "Scissors-OffInverted", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12L12 12"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20"/><line x1="1" y1="1" x2="23" y2="23"/></g>' },

// 559. Scooter-Color
    { id: 1630, name: "Scooter-Color", category: "general", svgContent: '<defs><linearGradient id="sctGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#b71c1c"/><stop offset="100%" stop-color="#8e0000"/></linearGradient></defs><g stroke="#8e0000" stroke-width="2"><circle cx="6" cy="20" r="3" fill="none"/><circle cx="18" cy="20" r="3" fill="none"/><path d="M9 20h6M12 20V10h4l2-4" fill="none"/></g>' },
    { id: 1631, name: "Scooter-Thin-Color", category: "general", svgContent: '<circle cx="6" cy="20" r="2" fill="none" stroke="#8e0000" stroke-width="0.75"/><circle cx="18" cy="20" r="2" fill="none" stroke="#8e0000" stroke-width="0.75"/>' },
    { id: 1632, name: "Scooter-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#8e0000" rx="4"/><circle cx="6" cy="20" r="2" fill="#ffffff"/><circle cx="18" cy="20" r="2" fill="#ffffff"/>' },

// 560. Sculpture-Color
    { id: 1633, name: "Sculpture-Color", category: "general", svgContent: '<defs><linearGradient id="sclGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffcc80"/><stop offset="100%" stop-color="#795548"/></linearGradient></defs><g><rect x="8" y="18" width="8" height="4" fill="#5d4037"/><path d="M12 4c-3 0-5 2-5 5v5h10V9c0-3-2-5-5-5z" fill="url(#sclGrad)" stroke="#795548" stroke-width="1.5"/></g>' },
    { id: 1634, name: "Sculpture-Thin-Color", category: "general", svgContent: '<path d="M13 5c-2 0-4 1-4 4v4h8V9c0-3-2-4-4-4z" fill="none" stroke="#795548" stroke-width="0.75"/>' },
    { id: 1635, name: "Sculpture-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#795548" rx="4"/><path d="M13 5c-2 0-4 1-4 4v4h8V9c0-3-2-4-4-4z" fill="#ffffff"/>' },

// 561. Search
    { id: 1636, name: "Search", category: "ui", svgContent: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>' },
    { id: 1637, name: "SearchThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></g>' },
    { id: 1638, name: "SearchInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></g>' },

// 562. Search-Color
    { id: 1639, name: "Search-Color", category: "ui", svgContent: '<defs><linearGradient id="glassRim" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#90caf9"/><stop offset="100%" stop-color="#1e88e5"/></linearGradient><linearGradient id="handleGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8d6e63"/><stop offset="100%" stop-color="#4e342e"/></linearGradient></defs><g><circle cx="11" cy="11" r="7" fill="#e3f2fd" stroke="url(#glassRim)" stroke-width="3"/><line x1="21" y1="21" x2="16.65" y2="16.65" stroke="url(#handleGrad)" stroke-width="4" stroke-linecap="round"/><circle cx="9" cy="9" r="4" fill="#ffffff" opacity="0.4"/></g>' },

// 563. SearchMinus
    { id: 1640, name: "SearchMinus", category: "ui", svgContent: '<circle cx="10" cy="10" r="6"/><path d="M14 14l4 4"/><line x1="6" y1="10" x2="14" y2="10"/>' },
    { id: 1641, name: "SearchMinusThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="10" cy="10" r="6"/><path d="M14 14l4 4"/><line x1="6" y1="10" x2="14" y2="10"/></g>' },
    { id: 1642, name: "SearchMinusInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="10" cy="10" r="6" stroke="var(--ax-bg-inverse, white)" /><path stroke="var(--ax-bg-inverse, white)" d="M14 14l4 4" /><line stroke="var(--ax-bg-inverse, white)" x1="6" y1="10" x2="14" y2="10" />' },

// 564. SearchPlus
    { id: 1643, name: "SearchPlus", category: "ui", svgContent: '<circle cx="10" cy="10" r="6"/><path d="M14 14l4 4"/><line x1="10" y1="7" x2="10" y2="13"/><line x1="7" y1="10" x2="13" y2="10"/>' },
    { id: 1644, name: "SearchPlusThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="10" cy="10" r="6"/><path d="M14 14l4 4"/><line x1="10" y1="7" x2="10" y2="13"/><line x1="7" y1="10" x2="13" y2="10"/></g>' },
    { id: 1645, name: "SearchPlusInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="10" cy="10" r="6" stroke="var(--ax-bg-inverse, white)" /><path stroke="var(--ax-bg-inverse, white)" d="M14 14l4 4" /><line stroke="var(--ax-bg-inverse, white)" x1="10" y1="7" x2="10" y2="13"/><line stroke="var(--ax-bg-inverse, white)" x1="7" y1="10" x2="13" y2="10"/>' },

// 565. Send
    { id: 1646, name: "Send", category: "communication", svgContent: '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>' },
    { id: 1647, name: "SendThin", category: "communication", svgContent: '<g fill="none" stroke-width="0.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></g>' },
    { id: 1648, name: "SendInverted", category: "communication", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></g>' },

// 566. SendSolid
    { id: 1649, name: "SendSolid", category: "communication", svgContent: '<path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.9429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.01449263 C3.34915502,0.9 2.40734225,0.9 1.77946707,1.4429026 C0.994623095,2.10604706 0.837654326,3.0486314 1.15159189,3.98722009 L3.03521743,10.4282132 C3.03521743,10.5853106 3.19218622,10.7424081 3.50612381,10.7424081 L16.6915026,11.5278949 C16.6915026,11.5278949 17.1624089,11.5278949 17.1624089,12.0011027 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" fill="currentColor" opacity="0.9"/>' },
    { id: 1650, name: "SendSolidThin", category: "communication", svgContent: '<g fill="none" stroke-width="0.5"><path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.9429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.01449263 C3.34915502,0.9 2.40734225,0.9 1.77946707,1.4429026 C0.994623095,2.10604706 0.837654326,3.0486314 1.15159189,3.98722009 L3.03521743,10.4282132 C3.03521743,10.5853106 3.19218622,10.7424081 3.50612381,10.7424081 L16.6915026,11.5278949 C16.6915026,11.5278949 17.1624089,11.5278949 17.1624089,12.0011027 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z"/></g>' },
    { id: 1651, name: "SendSolidInverted", category: "communication", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.9429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.01449263 C3.34915502,0.9 2.40734225,0.9 1.77946707,1.4429026 C0.994623095,2.10604706 0.837654326,3.0486314 1.15159189,3.98722009 L3.03521743,10.4282132 C3.03521743,10.5853106 3.19218622,10.7424081 3.50612381,10.7424081 L16.6915026,11.5278949 C16.6915026,11.5278949 17.1624089,11.5278949 17.1624089,12.0011027 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 567. Sensor
    { id: 1652, name: "Sensor", category: "iot", svgContent: '<circle cx="12" cy="12" r="3"/><path d="M12 1v2m0 16v2M23 12h-2M3 12H1M6.22 6.22l1.41 1.41M16.37 16.37l1.41 1.41M6.22 17.78l1.41-1.41M16.37 7.63l1.41-1.41"/>' },
    { id: 1653, name: "SensorThin", category: "iot", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v2m0 16v2M23 12h-2M3 12H1M6.22 6.22l1.41 1.41M16.37 16.37l1.41 1.41M6.22 17.78l1.41-1.41M16.37 7.63l1.41-1.41"/></g>' },
    { id: 1654, name: "SensorInverted", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="3"/><path stroke="var(--ax-bg-inverse, white)" d="M12 1v2m0 16v2M23 12h-2M3 12H1M6.22 6.22l1.41 1.41M16.37 16.37l1.41 1.41M6.22 17.78l1.41-1.41M16.37 7.63l1.41-1.41"/>' },

// 568. Sepia
    { id: 1655, name: "Sepia", category: "general", svgContent: '<rect x="2" y="2" width="20" height="20" rx="2"/><circle cx="8" cy="8" r="1.5" fill="currentColor" opacity="0.9"/><circle cx="16" cy="8" r="1.5" fill="currentColor" opacity="0.9"/><path d="M8 14c2 2 4 2 8 0" opacity="0.7"/>' },
    { id: 1656, name: "SepiaThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><rect x="2" y="2" width="20" height="20" rx="2"/><circle cx="8" cy="8" r="1.5"/><circle cx="16" cy="8" r="1.5"/><path d="M8 14c2 2 4 2 8 0"/></g>' },
    { id: 1657, name: "SepiaInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="2" y="2" width="20" height="20" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="8" cy="8" r="1.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="16" cy="8" r="1.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><path stroke="var(--ax-bg-inverse, white)" d="M8 14c2 2 4 2 8 0" opacity="0.7"/>' },

// 569. Server
    { id: 1658, name: "Server", category: "development", svgContent: '<rect x="2" y="2" width="20" height="8" rx="1" ry="1"/><rect x="2" y="14" width="20" height="8" rx="1" ry="1"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>' },
    { id: 1659, name: "ServerThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><rect x="2" y="2" width="20" height="8" rx="1" ry="1"/><rect x="2" y="14" width="20" height="8" rx="1" ry="1"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></g>' },
    { id: 1660, name: "ServerInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="2" y="2" width="20" height="8" rx="1" ry="1"/><rect fill="var(--ax-bg-inverse, white)" x="2" y="14" width="20" height="8" rx="1" ry="1"/><line stroke="var(--ax-bg-inverse, white)" x1="6" y1="6" x2="6.01" y2="6"/><line stroke="var(--ax-bg-inverse, white)" x1="6" y1="18" x2="6.01" y2="18"/>' },

// 570. Settings
    { id: 1661, name: "Settings", category: "ui", svgContent: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>' },
    { id: 1662, name: "SettingsThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></g>' },
    { id: 1663, name: "SettingsInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></g>' },

// 571. Settings-Color
    { id: 1664, name: "Settings-Color", category: "ui", svgContent: '<defs><linearGradient id="gearGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#b0bec5"/><stop offset="50%" stop-color="#78909c"/><stop offset="100%" stop-color="#455a64"/></linearGradient></defs><g fill="url(#gearGrad)"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.48.48 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84a.48.48 0 0 0-.48.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.48.48 0 0 0-.59.22L1.99 8.87a.48.48 0 0 0 .12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.48-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.48.48 0 0 0-.12-.61l-2.03-1.58zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></g>' },

// 572. Settings2
    { id: 1665, name: "Settings2", category: "ui", svgContent: '<circle cx="12" cy="12" r="3"/><path d="M12 1v2m0 16v2M4.22 4.22l1.41 1.41m9.74 9.74l1.41 1.41M1 12h2m16 0h2M4.22 19.78l1.41-1.41m9.74-9.74l1.41-1.41"/>' },
    { id: 1666, name: "Settings2Thin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v2m0 16v2M4.22 4.22l1.41 1.41m9.74 9.74l1.41 1.41M1 12h2m16 0h2M4.22 19.78l1.41-1.41m9.74-9.74l1.41-1.41"/></g>' },
    { id: 1667, name: "Settings2Inverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="3"/><path stroke="var(--ax-bg-inverse, white)" d="M12 1v2m0 16v2M4.22 4.22l1.41 1.41m9.74 9.74l1.41 1.41M1 12h2m16 0h2M4.22 19.78l1.41-1.41m9.74-9.74l1.41-1.41"/>' },

// 573. SettingsAdvanced
    { id: 1668, name: "SettingsAdvanced", category: "ui", svgContent: '<circle cx="12" cy="12" r="2.5" fill="currentColor" opacity="0.9"/><path d="M12 1v2m0 16v2M23 12h-2M3 12H1M20.49 3.51l-1.41 1.41M4.93 19.07l-1.41 1.41M20.49 20.49l-1.41-1.41M4.93 4.93l-1.41-1.41"/><circle cx="12" cy="12" r="5" opacity="0.5"/>' },
    { id: 1669, name: "SettingsAdvancedThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="2.5"/><path d="M12 1v2m0 16v2M23 12h-2M3 12H1M20.49 3.51l-1.41 1.41M4.93 19.07l-1.41 1.41M20.49 20.49l-1.41-1.41M4.93 4.93l-1.41-1.41"/><circle cx="12" cy="12" r="5"/></g>' },
    { id: 1670, name: "SettingsAdvancedInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="2.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><path stroke="var(--ax-bg-inverse, white)" d="M12 1v2m0 16v2M23 12h-2M3 12H1M20.49 3.51l-1.41 1.41M4.93 19.07l-1.41 1.41M20.49 20.49l-1.41-1.41M4.93 4.93l-1.41-1.41"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="5" stroke="var(--ax-bg-inverse, white)" opacity="0.5"/>' },

// 574. SettingsOff
    { id: 1671, name: "SettingsOff", category: "ui", svgContent: '<circle cx="12" cy="12" r="3"/><path d="M12 1v2m0 16v2M23 12h-2M3 12H1M20.49 3.51l-1.41 1.41M4.93 19.07l-1.41 1.41M20.49 20.49l-1.41-1.41M4.93 4.93l-1.41-1.41"/><line x1="1" y1="1" x2="23" y2="23"/>' },
    { id: 1672, name: "SettingsOffThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v2m0 16v2M23 12h-2M3 12H1M20.49 3.51l-1.41 1.41M4.93 19.07l-1.41 1.41M20.49 20.49l-1.41-1.41M4.93 4.93l-1.41-1.41"/><line x1="1" y1="1" x2="23" y2="23"/></g>' },
    { id: 1673, name: "SettingsOffInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="3"/><path stroke="var(--ax-bg-inverse, white)" d="M12 1v2m0 16v2M23 12h-2M3 12H1M20.49 3.51l-1.41 1.41M4.93 19.07l-1.41 1.41M20.49 20.49l-1.41-1.41M4.93 4.93l-1.41-1.41"/><line stroke="var(--ax-bg-inverse, white)" x1="1" y1="1" x2="23" y2="23"/>' },

// 575. Share
    { id: 1674, name: "Share", category: "ui", svgContent: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>' },
    { id: 1675, name: "ShareThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></g>' },
    { id: 1676, name: "ShareInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></g>' },

// 576. Share-Color
    { id: 1677, name: "Share-Color", category: "ui", svgContent: '<defs><linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4fc3f7"/><stop offset="100%" stop-color="#0288d1"/></linearGradient></defs><g><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke="#b0bec5" stroke-width="2"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke="#b0bec5" stroke-width="2"/><circle cx="18" cy="5" r="3" fill="url(#nodeGrad)"/><circle cx="6" cy="12" r="3" fill="url(#nodeGrad)"/><circle cx="18" cy="19" r="3" fill="url(#nodeGrad)"/></g>' },

// 577. ShareCircle
    { id: 1678, name: "ShareCircle", category: "ui", svgContent: '<circle cx="12" cy="12" r="10"/><circle cx="16" cy="8" r="2"/><circle cx="16" cy="16" r="2"/><line x1="14.5" y1="9.5" x2="13.5" y2="14.5"/>' },
    { id: 1679, name: "ShareCircleThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><circle cx="16" cy="8" r="2"/><circle cx="16" cy="16" r="2"/><line x1="14.5" y1="9.5" x2="13.5" y2="14.5"/></g>' },
    { id: 1680, name: "ShareCircleInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="10"/><circle fill="var(--ax-bg-inverse, white)" cx="16" cy="8" r="2" stroke="var(--ax-bg-inverse, white)" /><circle fill="var(--ax-bg-inverse, white)" cx="16" cy="16" r="2" stroke="var(--ax-bg-inverse, white)" /><line stroke="var(--ax-bg-inverse, white)" x1="14.5" y1="9.5" x2="13.5" y2="14.5" />' },

// 578. Sharpen
    { id: 1681, name: "Sharpen", category: "general", svgContent: '<path d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="M10 8h4M8 10h8M9 14h6"/>' },
    { id: 1682, name: "SharpenThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="M10 8h4M8 10h8M9 14h6"/></g>' },
    { id: 1683, name: "SharpenInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path stroke="var(--ax-bg-inverse, white)" d="M10 8h4M8 10h8M9 14h6"/>' },

// 579. Shield
    { id: 1684, name: "Shield", category: "ui", svgContent: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>' },
    { id: 1685, name: "ShieldThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></g>' },
    { id: 1686, name: "ShieldInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></g>' },

// 580. Shield-Alert
    { id: 1687, name: "Shield-Alert", category: "ui", svgContent: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>' },
    { id: 1688, name: "Shield-AlertThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></g>' },
    { id: 1689, name: "Shield-AlertInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></g>' },

// 581. Shield-Alert-Color
    { id: 1690, name: "Shield-Alert-Color", category: "ui", svgContent: '<defs><linearGradient id="shdAlert" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ef5350"/><stop offset="100%" stop-color="#b71c1c"/></linearGradient></defs><g><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="url(#shdAlert)"/><line x1="12" y1="8" x2="12" y2="13" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.25" fill="#ffffff"/></g>' },
    { id: 1691, name: "Shield-Alert-Thin-Color", category: "ui", svgContent: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="#b71c1c" stroke-width="0.75"/><line x1="12" y1="8" x2="12" y2="13" stroke="#b71c1c" stroke-width="0.75"/>' },
    { id: 1692, name: "Shield-Alert-Inverted-Color", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#b71c1c" rx="4"/><path d="M12 20s6.5-3.2 6.5-8.2V6.2L12 3.8 5.5 6.2V11.8c0 5 6.5 8.2 6.5 8.2z" fill="#ffffff"/><circle cx="12" cy="15" r="1.5" fill="#b71c1c"/>' },

// 582. Shield-Check
    { id: 1693, name: "Shield-Check", category: "ui", svgContent: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>' },
    { id: 1694, name: "Shield-CheckThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></g>' },
    { id: 1695, name: "Shield-CheckInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></g>' },

// 583. Shield-Check-Color
    { id: 1696, name: "Shield-Check-Color", category: "ui", svgContent: '<defs><linearGradient id="shdCheck" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#66bb6a"/><stop offset="100%" stop-color="#1b5e20"/></linearGradient></defs><g><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="url(#shdCheck)"/><polyline points="9 11 11 13 15 9" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></g>' },
    { id: 1697, name: "Shield-Check-Thin-Color", category: "ui", svgContent: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="#1b5e20" stroke-width="0.75"/>' },
    { id: 1698, name: "Shield-Check-Inverted-Color", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#1b5e20" rx="4"/><path d="M12 20s6.5-3.2 6.5-8.2V6.2L12 3.8 5.5 6.2V11.8c0 5 6.5 8.2 6.5 8.2z" fill="#ffffff"/><polyline points="9 11 11 13 15 9" fill="none" stroke="#1b5e20" stroke-width="2"/>' },

// 584. Shield-Color
    { id: 1699, name: "Shield-Color", category: "general", svgContent: '<defs><linearGradient id="shieldLeft" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#4fc3f7"/><stop offset="100%" stop-color="#0288d1"/></linearGradient><linearGradient id="shieldRight" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#0288d1"/><stop offset="100%" stop-color="#01579b"/></linearGradient></defs><g><path d="M12 22s8-4 8-10V5l-8-3v20z" fill="url(#shieldRight)"/><path d="M12 22V2L4 5v7c0 6 8 10 8 10z" fill="url(#shieldLeft)"/><path d="M12 5l2.5 5h5.5l-4 4 1.5 5.5-5.5-3.5-5.5 3.5 1.5-5.5-4-4h5.5z" fill="#ffffff" opacity="0.25"/></g>' },
    { id: 1700, name: "Shield-Thin-Color", category: "general", svgContent: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="#0288d1" stroke-width="0.75"/>' },
    { id: 1701, name: "Shield-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#002171" rx="4"/><path d="M12 20s6.5-3.2 6.5-8.2V6.2L12 3.8 5.5 6.2V11.8c0 5 6.5 8.2 6.5 8.2z" fill="#ffffff"/>' },

// 585. Shield-Off
    { id: 1702, name: "Shield-Off", category: "ui", svgContent: '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"/><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a15.29 15.29 0 0 0 3.72-1.5"/><line x1="1" y1="1" x2="23" y2="23"/>' },
    { id: 1703, name: "Shield-OffThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"/><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a15.29 15.29 0 0 0 3.72-1.5"/><line x1="1" y1="1" x2="23" y2="23"/></g>' },
    { id: 1704, name: "Shield-OffInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"/><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a15.29 15.29 0 0 0 3.72-1.5"/><line x1="1" y1="1" x2="23" y2="23"/></g>' },

// 586. Shield-Off-Color
    { id: 1705, name: "Shield-Off-Color", category: "general", svgContent: '<defs><linearGradient id="shdOff" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#b0bec5"/><stop offset="100%" stop-color="#78909c"/></linearGradient></defs><g><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="url(#shdOff)" opacity="0.4"/><line x1="1" y1="1" x2="23" y2="23" stroke="#ef5350" stroke-width="2.5"/></g>' },
    { id: 1706, name: "Shield-Off-Thin-Color", category: "general", svgContent: '<line x1="2" y1="2" x2="22" y2="22" stroke="#ef5350" stroke-width="0.75"/>' },
    { id: 1707, name: "Shield-Off-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#37474f" rx="4"/><line x1="2" y1="2" x2="22" y2="22" stroke="#ffffff" stroke-width="2"/>' },

// 587. Shield-Off-Duplicate
    { id: 1708, name: "Shield-Off-Duplicate", category: "ui", svgContent: '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"/><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a15.29 15.29 0 0 0 3.72-1.5"/><line x1="1" y1="1" x2="23" y2="23"/>' },
    { id: 1709, name: "Shield-Off-DuplicateThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"/><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a15.29 15.29 0 0 0 3.72-1.5"/><line x1="1" y1="1" x2="23" y2="23"/></g>' },
    { id: 1710, name: "Shield-Off-DuplicateInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"/><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a15.29 15.29 0 0 0 3.72-1.5"/><line x1="1" y1="1" x2="23" y2="23"/></g>' },

// 588. ShieldCheck
    { id: 1711, name: "ShieldCheck", category: "ui", svgContent: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="16 12 12 16 8 12"/>' },
    { id: 1712, name: "ShieldCheckThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="16 12 12 16 8 12"/></g>' },
    { id: 1713, name: "ShieldCheckInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="16 12 12 16 8 12"/>' },

// 589. ShieldQuestion
    { id: 1714, name: "ShieldQuestion", category: "ui", svgContent: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="9" x2="12" y2="13"/><circle cx="12" cy="17" r="0.5" fill="currentColor" opacity="0.9"/>' },
    { id: 1715, name: "ShieldQuestionThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="9" x2="12" y2="13"/><circle cx="12" cy="17" r="0.5"/></g>' },
    { id: 1716, name: "ShieldQuestionInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line stroke="var(--ax-bg-inverse, white)" x1="12" y1="9" x2="12" y2="13"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="17" r="0.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 590. ShieldX
    { id: 1717, name: "ShieldX", category: "ui", svgContent: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="9.5" y1="9.5" x2="14.5" y2="14.5"/><line x1="14.5" y1="9.5" x2="9.5" y2="14.5"/>' },
    { id: 1718, name: "ShieldXThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="9.5" y1="9.5" x2="14.5" y2="14.5"/><line x1="14.5" y1="9.5" x2="9.5" y2="14.5"/></g>' },
    { id: 1719, name: "ShieldXInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line stroke="var(--ax-bg-inverse, white)" x1="9.5" y1="9.5" x2="14.5" y2="14.5"/><line stroke="var(--ax-bg-inverse, white)" x1="14.5" y1="9.5" x2="9.5" y2="14.5"/>' },

// 591. Ship-Color
    { id: 1720, name: "Ship-Color", category: "general", svgContent: '<defs><linearGradient id="shpGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#eceff1"/><stop offset="100%" stop-color="#cfd8dc"/></linearGradient></defs><g><path d="M2 16l20 2-2 6H4z" fill="url(#shpGrad)" stroke="#455a64" stroke-width="1.5"/><rect x="8" y="10" width="8" height="6" fill="#455a64"/><rect x="10" y="6" width="4" height="4" fill="#455a64"/></g>' },
    { id: 1721, name: "Ship-Thin-Color", category: "general", svgContent: '<path d="M3 17l18 2-1 4H5z" fill="none" stroke="#455a64" stroke-width="0.75"/>' },
    { id: 1722, name: "Ship-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#455a64" rx="4"/><path d="M3 17l18 2-1 4H5z" fill="#ffffff"/>' },

// 592. Shopify
    { id: 1723, name: "Shopify", category: "general", svgContent: '<path d="M12 2c1 0 2 .5 2 1.5V8h-4V3.5C10 2.5 11 2 12 2zm-2 6h4v12c0 1-1 2-2 2s-2-1-2-2v-12z"/>' },
    { id: 1724, name: "ShopifyThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 2c1 0 2 .5 2 1.5V8h-4V3.5C10 2.5 11 2 12 2zm-2 6h4v12c0 1-1 2-2 2s-2-1-2-2v-12z"/></g>' },
    { id: 1725, name: "ShopifyInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M12 2c1 0 2 .5 2 1.5V8h-4V3.5C10 2.5 11 2 12 2zm-2 6h4v12c0 1-1 2-2 2s-2-1-2-2v-12z"/>' },

// 593. Shopping-Bag
    { id: 1726, name: "Shopping-Bag", category: "finance", svgContent: '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>' },
    { id: 1727, name: "Shopping-BagThin", category: "finance", svgContent: '<g fill="none" stroke-width="0.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></g>' },
    { id: 1728, name: "Shopping-BagInverted", category: "finance", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></g>' },

// 594. Shopping-Cart
    { id: 1729, name: "Shopping-Cart", category: "finance", svgContent: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>' },
    { id: 1730, name: "Shopping-CartThin", category: "finance", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></g>' },
    { id: 1731, name: "Shopping-CartInverted", category: "finance", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></g>' },

// 595. Shopping-Cart-Color
    { id: 1732, name: "Shopping-Cart-Color", category: "finance", svgContent: '<defs><linearGradient id="cartMet" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#0288d1"/><stop offset="100%" stop-color="#01579b"/></linearGradient></defs><g><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" fill="none" stroke="url(#cartMet)" stroke-width="2" stroke-linecap="round"/><circle cx="9.5" cy="20.5" r="1.5" fill="#37474f"/><circle cx="19.5" cy="20.5" r="1.5" fill="#37474f"/></g>' },
    { id: 1733, name: "Shopping-Cart-Thin-Color", category: "finance", svgContent: '<path d="M1 1h4l2.68 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" fill="none" stroke="#0288d1" stroke-width="0.75"/><circle cx="9.5" cy="20.5" r="1" fill="none" stroke="#0288d1" stroke-width="0.5"/>' },
    { id: 1734, name: "Shopping-Cart-Inverted-Color", category: "finance", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#0288d1" rx="4"/><path d="M7 15h11.2c.6 0 1-.4 1.1-.9l1.6-7.2c.1-.6-.3-1.1-.9-1.1H5.2L4.3 2.6C4.1 2.2 3.7 2 3.3 2H1v2h1.5l3.4 13.7c-.5.4-.9 1-.9 1.8 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-.4-.1-.7-.3-1h4.6c-.2.3-.3.6-.3 1 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-1.1-.7-2-1.7-2.3l-.3-1.2z" fill="#ffffff"/>' },

// 596. ShoppingBag
    { id: 1735, name: "ShoppingBag", category: "finance", svgContent: '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>' },
    { id: 1736, name: "ShoppingBagThin", category: "finance", svgContent: '<g fill="none" stroke-width="0.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></g>' },
    { id: 1737, name: "ShoppingBagInverted", category: "finance", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></g>' },

// 597. ShoppingCart
    { id: 1738, name: "ShoppingCart", category: "finance", svgContent: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>' },
    { id: 1739, name: "ShoppingCartThin", category: "finance", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></g>' },
    { id: 1740, name: "ShoppingCartInverted", category: "finance", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></g>' },

// 598. Sidebar
    { id: 1741, name: "Sidebar", category: "general", svgContent: '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/>' },
    { id: 1742, name: "SidebarThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/></g>' },
    { id: 1743, name: "SidebarInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="3" y="3" width="18" height="18" rx="2"/><line stroke="var(--ax-bg-inverse, white)" x1="9" y1="3" x2="9" y2="21"/>' },

// 599. Sidebar-Color
    { id: 1744, name: "Sidebar-Color", category: "development", svgContent: '<defs><linearGradient id="sideGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#cfd8dc"/><stop offset="100%" stop-color="#78909c"/></linearGradient></defs><g><rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="url(#sideGrad)" stroke-width="2"/><rect x="5" y="5" width="5" height="14" fill="#78909c" opacity="0.3"/></g>' },
    { id: 1745, name: "Sidebar-Thin-Color", category: "development", svgContent: '<rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="#78909c" stroke-width="0.75"/><line x1="9" y1="3" x2="9" y2="21" stroke="#78909c" stroke-width="0.5"/>' },
    { id: 1746, name: "Sidebar-Inverted-Color", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#78909c" rx="4"/><rect x="4" y="4" width="16" height="16" rx="1" fill="#ffffff"/><rect x="5" y="5" width="4" height="14" fill="#78909c"/>' },

// 600. Signal
    { id: 1747, name: "Signal", category: "iot", svgContent: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 4c-1.88 0-3.5-1.12-3.5-2.5h7c0 1.38-1.62 2.5-3.5 2.5z"/>' },
    { id: 1748, name: "SignalThin", category: "iot", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 4c-1.88 0-3.5-1.12-3.5-2.5h7c0 1.38-1.62 2.5-3.5 2.5z"/></g>' },
    { id: 1749, name: "SignalInverted", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 4c-1.88 0-3.5-1.12-3.5-2.5h7c0 1.38-1.62 2.5-3.5 2.5z"/>' },

// 601. SignIn
    { id: 1750, name: "SignIn", category: "general", svgContent: '<polyline points="15 3 21 3 21 9"/><path d="M3 21c1.66-2.5 2.66-4 2.66-4v-4c0-1 1-2 2-2h13V3M21 3v18M3 6h8"/>' },
    { id: 1751, name: "SignInThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="15 3 21 3 21 9"/><path d="M3 21c1.66-2.5 2.66-4 2.66-4v-4c0-1 1-2 2-2h13V3M21 3v18M3 6h8"/></g>' },
    { id: 1752, name: "SignInInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><polyline points="15 3 21 3 21 9"/><path stroke="var(--ax-bg-inverse, white)" d="M3 21c1.66-2.5 2.66-4 2.66-4v-4c0-1 1-2 2-2h13V3M21 3v18M3 6h8"/>' },

// 602. Skateboard-Color
    { id: 1753, name: "Skateboard-Color", category: "general", svgContent: '<defs><linearGradient id="skbGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#8bc34a"/><stop offset="100%" stop-color="#558b2f"/></linearGradient></defs><g><rect x="3" y="12" width="18" height="4" rx="2" fill="url(#skbGrad)" stroke="#558b2f" stroke-width="1.5"/><circle cx="6" cy="18" r="2" fill="#558b2f"/><circle cx="18" cy="18" r="2" fill="#558b2f"/></g>' },
    { id: 1754, name: "Skateboard-Thin-Color", category: "general", svgContent: '<rect x="4" y="13" width="16" height="2" rx="1" fill="none" stroke="#558b2f" stroke-width="0.75"/>' },
    { id: 1755, name: "Skateboard-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#558b2f" rx="4"/><rect x="4" y="13" width="16" height="2" rx="1" fill="#ffffff"/>' },

// 603. Skip-Back
    { id: 1756, name: "Skip-Back", category: "general", svgContent: '<polygon points="19 20 9 12 19 4 19 20"/><line x1="5" y1="5" x2="5" y2="19"/>' },
    { id: 1757, name: "Skip-BackThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><polygon points="19 20 9 12 19 4 19 20"/><line x1="5" y1="5" x2="5" y2="19"/></g>' },
    { id: 1758, name: "Skip-BackInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polygon points="19 20 9 12 19 4 19 20"/><line x1="5" y1="5" x2="5" y2="19"/></g>' },

// 604. Skip-Forward
    { id: 1759, name: "Skip-Forward", category: "general", svgContent: '<polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/>' },
    { id: 1760, name: "Skip-ForwardThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/></g>' },
    { id: 1761, name: "Skip-ForwardInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/></g>' },

// 605. Slack
    { id: 1762, name: "Slack", category: "brands", svgContent: '<circle cx="5" cy="5" r="1.5" fill="currentColor" opacity="0.9"/><circle cx="19" cy="5" r="1.5" fill="currentColor" opacity="0.9"/><circle cx="5" cy="19" r="1.5" fill="currentColor" opacity="0.9"/><circle cx="19" cy="19" r="1.5" fill="currentColor" opacity="0.9"/><line x1="5" y1="6.5" x2="5" y2="17.5"/><line x1="19" y1="6.5" x2="19" y2="17.5"/><line x1="6.5" y1="5" x2="17.5" y2="5"/><line x1="6.5" y1="19" x2="17.5" y2="19"/>' },
    { id: 1763, name: "SlackThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="5" cy="5" r="1.5"/><circle cx="19" cy="5" r="1.5"/><circle cx="5" cy="19" r="1.5"/><circle cx="19" cy="19" r="1.5"/><line x1="5" y1="6.5" x2="5" y2="17.5"/><line x1="6.5" y1="5" x2="17.5" y2="5"/></g>' },
    { id: 1764, name: "SlackInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="5" cy="5" r="1.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="19" cy="5" r="1.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="5" cy="19" r="1.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><circle fill="var(--ax-bg-inverse, white)" cx="19" cy="19" r="1.5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/><line stroke="var(--ax-bg-inverse, white)" x1="5" y1="6.5" x2="5" y2="17.5" /><line stroke="var(--ax-bg-inverse, white)" x1="19" y1="6.5" x2="19" y2="17.5" /><line stroke="var(--ax-bg-inverse, white)" x1="6.5" y1="5" x2="17.5" y2="5" /><line stroke="var(--ax-bg-inverse, white)" x1="6.5" y1="19" x2="17.5" y2="19" />' },

// 606. Slack2
    { id: 1765, name: "Slack2", category: "brands", svgContent: '<path d="M6 2a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zm12 0a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h2z"/>' },
    { id: 1766, name: "Slack2Thin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><path d="M6 2a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zm12 0a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h2z"/></g>' },
    { id: 1767, name: "Slack2Inverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M6 2a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zm12 0a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h2z"/>' },

// 607. Slash
    { id: 1768, name: "Slash", category: "ui", svgContent: '<line x1="19" y1="4" x2="5" y2="20"/>' },
    { id: 1769, name: "SlashThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><line x1="19" y1="4" x2="5" y2="20"/></g>' },
    { id: 1770, name: "SlashInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><line stroke="var(--ax-bg-inverse, white)" x1="19" y1="4" x2="5" y2="20"/>' },

// 608. Sliders
    { id: 1771, name: "Sliders", category: "general", svgContent: '<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>' },
    { id: 1772, name: "SlidersThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></g>' },
    { id: 1773, name: "SlidersInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></g>' },

// 609. Sliders-Color
    { id: 1774, name: "Sliders-Color", category: "ui", svgContent: '<defs><linearGradient id="sldGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#78909c"/><stop offset="100%" stop-color="#37474f"/></linearGradient></defs><g fill="none" stroke="url(#sldGrad)" stroke-width="2.5" stroke-linecap="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><circle cx="4" cy="12" r="2" fill="#00e676" stroke="none"/><circle cx="12" cy="10" r="2" fill="#00e676" stroke="none"/><circle cx="20" cy="14" r="2" fill="#00e676" stroke="none"/></g>' },
    { id: 1775, name: "Sliders-Thin-Color", category: "ui", svgContent: '<line x1="4" y1="20" x2="4" y2="4" stroke="#37474f" stroke-width="0.75"/>' },
    { id: 1776, name: "Sliders-Inverted-Color", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#37474f" rx="4"/><circle cx="6" cy="12" r="2" fill="#ffffff"/><circle cx="12" cy="8" r="2" fill="#ffffff"/><circle cx="18" cy="16" r="2" fill="#ffffff"/>' },

// 610. SmartHome
    { id: 1777, name: "SmartHome", category: "general", svgContent: '<path d="M2 12l10-10 10 10v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8z"/><path d="M9 21v-10h6v10M12 3v4"/><circle cx="15" cy="15" r="1" fill="currentColor" opacity="0.9"/>' },
    { id: 1778, name: "SmartHomeThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M2 12l10-10 10 10v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8z"/><path d="M9 21v-10h6v10M12 3v4"/><circle cx="15" cy="15" r="1"/></g>' },
    { id: 1779, name: "SmartHomeInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M2 12l10-10 10 10v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8z"/><path stroke="var(--ax-bg-inverse, white)" d="M9 21v-10h6v10M12 3v4"/><circle fill="var(--ax-bg-inverse, white)" cx="15" cy="15" r="1" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 611. Smartphone
    { id: 1780, name: "Smartphone", category: "communication", svgContent: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12" y2="18"/>' },
    { id: 1781, name: "SmartphoneThin", category: "communication", svgContent: '<g fill="none" stroke-width="0.5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12" y2="18"/></g>' },
    { id: 1782, name: "SmartphoneInverted", category: "communication", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12" y2="18"/></g>' },

// 612. Smartphone-Color
    { id: 1783, name: "Smartphone-Color", category: "communication", svgContent: '<defs><linearGradient id="phoneGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#212121"/><stop offset="100%" stop-color="#000000"/></linearGradient></defs><g><rect x="5" y="2" width="14" height="20" rx="3" fill="url(#phoneGrad)"/><circle cx="12" cy="19" r="1" fill="#ffffff" opacity="0.8"/><rect x="7" y="4" width="10" height="13" fill="#64b5f6" opacity="0.15"/></g>' },
    { id: 1784, name: "Smartphone-Thin-Color", category: "communication", svgContent: '<rect x="6" y="2" width="12" height="20" rx="3" fill="none" stroke="#212121" stroke-width="0.75"/>' },
    { id: 1785, name: "Smartphone-Inverted-Color", category: "communication", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#212121" rx="4"/><rect x="6" y="3" width="12" height="18" rx="2" fill="#ffffff"/><circle cx="12" cy="18" r="1" fill="#212121"/>' },

// 613. Smartphone2
    { id: 1786, name: "Smartphone2", category: "communication", svgContent: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/><line x1="8" y1="5" x2="16" y2="5"/><line x1="8" y1="22" x2="16" y2="22"/>' },
    { id: 1787, name: "Smartphone2Thin", category: "communication", svgContent: '<g fill="none" stroke-width="0.5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/><line x1="8" y1="5" x2="16" y2="5"/><line x1="8" y1="22" x2="16" y2="22"/></g>' },
    { id: 1788, name: "Smartphone2Inverted", category: "communication", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="5" y="2" width="14" height="20" rx="2" ry="2"/><line stroke="var(--ax-bg-inverse, white)" x1="12" y1="18" x2="12.01" y2="18"/><line stroke="var(--ax-bg-inverse, white)" x1="8" y1="5" x2="16" y2="5"/><line stroke="var(--ax-bg-inverse, white)" x1="8" y1="22" x2="16" y2="22"/>' },

// 614. Smartwatch
    { id: 1789, name: "Smartwatch", category: "iot", svgContent: '<rect x="4" y="2" width="16" height="20" rx="3"/><circle cx="12" cy="12" r="6"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="12" x2="14" y2="12"/>' },
    { id: 1790, name: "SmartwatchThin", category: "iot", svgContent: '<g fill="none" stroke-width="0.5"><rect x="4" y="2" width="16" height="20" rx="3"/><circle cx="12" cy="12" r="6"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="12" x2="14" y2="12"/></g>' },
    { id: 1791, name: "SmartwatchInverted", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="4" y="2" width="16" height="20" rx="3"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="6"/><line stroke="var(--ax-bg-inverse, white)" x1="12" y1="8" x2="12" y2="12"/><line stroke="var(--ax-bg-inverse, white)" x1="12" y1="12" x2="14" y2="12"/>' },

// 615. Smile
    { id: 1792, name: "Smile", category: "general", svgContent: '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>' },
    { id: 1793, name: "SmileThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></g>' },
    { id: 1794, name: "SmileInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></g>' },

// 616. Smile-Color
    { id: 1795, name: "Smile-Color", category: "ui", svgContent: '<defs><linearGradient id="faceHappy" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fff176"/><stop offset="100%" stop-color="#fbc02d"/></linearGradient></defs><g><circle cx="12" cy="12" r="10" fill="url(#faceHappy)"/><path d="M8 14s1.5 2 4 2 4-2 4-2" fill="none" stroke="#5d4037" stroke-width="2" stroke-linecap="round"/><circle cx="9" cy="9" r="1.5" fill="#5d4037"/><circle cx="15" cy="9" r="1.5" fill="#5d4037"/></g>' },

// 617. Snow
    { id: 1796, name: "Snow", category: "weather", svgContent: '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="12" y1="18" x2="12" y2="18"/><line x1="16" y1="16" x2="16" y2="16"/><line x1="10" y1="20" x2="10" y2="20"/><line x1="14" y1="20" x2="14" y2="20"/>' },
    { id: 1797, name: "SnowThin", category: "weather", svgContent: '<g fill="none" stroke-width="0.5"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="12" y1="18" x2="12" y2="18"/><line x1="16" y1="16" x2="16" y2="16"/><line x1="10" y1="20" x2="10" y2="20"/><line x1="14" y1="20" x2="14" y2="20"/></g>' },
    { id: 1798, name: "SnowInverted", category: "weather", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="12" y1="18" x2="12" y2="18"/><line x1="16" y1="16" x2="16" y2="16"/><line x1="10" y1="20" x2="10" y2="20"/><line x1="14" y1="20" x2="14" y2="20"/></g>' },

// 618. Snow-Color
    { id: 1799, name: "Snow-Color", category: "iot", svgContent: '<defs><linearGradient id="snwGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#e1f5fe"/><stop offset="100%" stop-color="#81d4fa"/></linearGradient></defs><g stroke="#0288d1" stroke-width="2"><path d="M12 2v20M2 12h20M5 5l14 14M5 19l14-14"/></g>' },
    { id: 1800, name: "Snow-Thin-Color", category: "iot", svgContent: '<path d="M12 3v18M3 12h18" fill="none" stroke="#0288d1" stroke-width="0.75"/>' },
    { id: 1801, name: "Snow-Inverted-Color", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#0288d1" rx="4"/><path d="M12 3v18M3 12h18" fill="none" stroke="#ffffff" stroke-width="1.5"/>' },

// 619. Snowboard-Color
    { id: 1802, name: "Snowboard-Color", category: "iot", svgContent: '<defs><linearGradient id="snbGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#03a9f4"/><stop offset="100%" stop-color="#0277bd"/></linearGradient></defs><g><path d="M4 4l16 16" stroke="#0277bd" stroke-width="6" stroke-linecap="round"/><rect x="8" y="8" width="4" height="2" fill="#ffffff"/><rect x="12" y="14" width="4" height="2" fill="#ffffff"/></g>' },
    { id: 1803, name: "Snowboard-Thin-Color", category: "iot", svgContent: '<path d="M5 5l14 14" fill="none" stroke="#0277bd" stroke-width="0.75"/>' },
    { id: 1804, name: "Snowboard-Inverted-Color", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#0277bd" rx="4"/><path d="M5 5l14 14" fill="none" stroke="#ffffff" stroke-width="1.5"/>' },

// 620. Snowflake
    { id: 1805, name: "Snowflake", category: "weather", svgContent: '<line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="5.64" y1="5.64" x2="18.36" y2="18.36"/><line x1="5.64" y1="18.36" x2="18.36" y2="5.64"/><line x1="12" y1="2" x2="15" y2="6"/><line x1="12" y1="2" x2="9" y2="6"/><line x1="22" y1="12" x2="18" y2="15"/><line x1="22" y1="12" x2="18" y2="9"/><line x1="12" y1="22" x2="9" y2="18"/><line x1="12" y1="22" x2="15" y2="18"/><line x1="2" y1="12" x2="6" y2="9"/><line x1="2" y1="12" x2="6" y2="15"/>' },
    { id: 1806, name: "SnowflakeThin", category: "weather", svgContent: '<g fill="none" stroke-width="0.5"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="5.64" y1="5.64" x2="18.36" y2="18.36"/><line x1="5.64" y1="18.36" x2="18.36" y2="5.64"/><line x1="12" y1="2" x2="15" y2="6"/><line x1="12" y1="2" x2="9" y2="6"/><line x1="22" y1="12" x2="18" y2="15"/><line x1="22" y1="12" x2="18" y2="9"/><line x1="12" y1="22" x2="9" y2="18"/><line x1="12" y1="22" x2="15" y2="18"/><line x1="2" y1="12" x2="6" y2="9"/><line x1="2" y1="12" x2="6" y2="15"/></g>' },
    { id: 1807, name: "SnowflakeInverted", category: "weather", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="5.64" y1="5.64" x2="18.36" y2="18.36"/><line x1="5.64" y1="18.36" x2="18.36" y2="5.64"/><line x1="12" y1="2" x2="15" y2="6"/><line x1="12" y1="2" x2="9" y2="6"/><line x1="22" y1="12" x2="18" y2="15"/><line x1="22" y1="12" x2="18" y2="9"/><line x1="12" y1="22" x2="9" y2="18"/><line x1="12" y1="22" x2="15" y2="18"/><line x1="2" y1="12" x2="6" y2="9"/><line x1="2" y1="12" x2="6" y2="15"/></g>' },

// 621. Snowflake-Color
    { id: 1808, name: "Snowflake-Color", category: "iot", svgContent: '<defs><linearGradient id="snwGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#e0f7fa"/><stop offset="100%" stop-color="#4dd0e1"/></linearGradient></defs><g stroke="url(#snwGrad)" stroke-width="2" stroke-linecap="round"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/><line x1="4.93" y1="19.07" x2="19.07" y2="4.93"/><polyline points="10 5 12 3 14 5"/><polyline points="19 10 21 12 19 14"/></g>' },
    { id: 1809, name: "Snowflake-Thin-Color", category: "iot", svgContent: '<line x1="12" y1="3" x2="12" y2="21" stroke="#4dd0e1" stroke-width="0.75"/><line x1="3" y1="12" x2="21" y2="12" stroke="#4dd0e1" stroke-width="0.75"/>' },
    { id: 1810, name: "Snowflake-Inverted-Color", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#4dd0e1" rx="4"/><line x1="12" y1="4" x2="12" y2="20" stroke="#ffffff" stroke-width="2"/><line x1="4" y1="12" x2="20" y2="12" stroke="#ffffff" stroke-width="2"/>' },

// 622. Soda
    { id: 1811, name: "Soda", category: "general", svgContent: '<path d="M17 2v20H7V2z"/><path d="M17 2h-5h-5"/><path d="M17 22h-5h-5"/>' },
    { id: 1812, name: "SodaThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M17 2v20H7V2z"/><path d="M17 2h-5h-5"/><path d="M17 22h-5h-5"/></g>' },
    { id: 1813, name: "SodaInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M17 2v20H7V2z"/><path d="M17 2h-5h-5"/><path d="M17 22h-5h-5"/></g>' },

// 623. Spaceship-Color
    { id: 1814, name: "Spaceship-Color", category: "general", svgContent: '<defs><linearGradient id="spcGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#cfd8dc"/></linearGradient></defs><g><path d="M12 2l8 16-8-4-8 4z" fill="url(#spcGrad)" stroke="#455a64" stroke-width="1.5"/><circle cx="12" cy="10" r="2" fill="#455a64"/></g>' },
    { id: 1815, name: "Spaceship-Thin-Color", category: "general", svgContent: '<path d="M12 3l7 14-7-3-7 3z" fill="none" stroke="#455a64" stroke-width="0.75"/>' },
    { id: 1816, name: "Spaceship-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#455a64" rx="4"/><path d="M12 3l7 14-7-3-7 3z" fill="#ffffff"/>' },

// 624. Spade-Color
    { id: 1817, name: "Spade-Color", category: "general", svgContent: '<defs><linearGradient id="spdGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#cfd8dc"/><stop offset="100%" stop-color="#90a4ae"/></linearGradient></defs><g><path d="M12 2l-6 10 2 2h8l2-2-6-10z" fill="url(#spdGrad)" stroke="#546e7a" stroke-width="1.5"/><line x1="12" y1="14" x2="12" y2="22" stroke="#5d4037" stroke-width="3" stroke-linecap="round"/></g>' },
    { id: 1818, name: "Spade-Thin-Color", category: "general", svgContent: '<path d="M12 3l-5 8 1 2h8l1-2-5-8z" fill="none" stroke="#546e7a" stroke-width="0.75"/>' },
    { id: 1819, name: "Spade-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#546e7a" rx="4"/><path d="M12 3l-5 8 1 2h8l1-2-5-8z" fill="#ffffff"/>' },

// 625. Sparkle
    { id: 1820, name: "Sparkle", category: "general", svgContent: '<path d="M12 3v2m0 14v2M3 12h2m14 0h2M5.64 5.64l1.41 1.41M16.95 16.95l1.41 1.41M16.95 7.05l-1.41 1.41M7.05 16.95L5.64 15.54"/><circle cx="12" cy="12" r="2"/>' },
    { id: 1821, name: "SparkleThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 3v2m0 14v2M3 12h2m14 0h2M5.64 5.64l1.41 1.41M16.95 16.95l1.41 1.41M16.95 7.05l-1.41 1.41M7.05 16.95L5.64 15.54"/><circle cx="12" cy="12" r="2"/></g>' },
    { id: 1822, name: "SparkleInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M12 3v2m0 14v2M3 12h2m14 0h2M5.64 5.64l1.41 1.41M16.95 16.95l1.41 1.41M16.95 7.05l-1.41 1.41M7.05 16.95L5.64 15.54"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="2"/>' },

// 626. Sparkles
    { id: 1823, name: "Sparkles", category: "ai", svgContent: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" opacity="0.5"/>' },
    { id: 1824, name: "SparklesThin", category: "ai", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></g>' },
    { id: 1825, name: "SparklesInverted", category: "ai", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/><path stroke="var(--ax-bg-inverse, white)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" opacity="0.5"/>' },

// 627. Sparkles-Color
    { id: 1826, name: "Sparkles-Color", category: "general", svgContent: '<defs><linearGradient id="spGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fff59d"/><stop offset="100%" stop-color="#fbc02d"/></linearGradient></defs><g fill="url(#spGrad)"><path d="M10 2l2 4 4 2-4 2-2 4-2-4-4-2 4-2z"/><path d="M19 13l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" opacity="0.75"/><path d="M4 14l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" opacity="0.6"/></g>' },
    { id: 1827, name: "Sparkles-Thin-Color", category: "general", svgContent: '<path d="M10 3l1.5 3.5 3.5 1.5-3.5 1.5-1.5 3.5-1.5-3.5-3.5-1.5 3.5-1.5z" fill="none" stroke="#fbc02d" stroke-width="0.75"/>' },
    { id: 1828, name: "Sparkles-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#fbc02d" rx="4"/><path d="M12 4l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#ffffff"/>' },

// 628. Speaker
    { id: 1829, name: "Speaker", category: "communication", svgContent: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><circle cx="12" cy="13" r="5"/><circle cx="12" cy="13" r="2"/>' },
    { id: 1830, name: "SpeakerThin", category: "communication", svgContent: '<g fill="none" stroke-width="0.5"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><circle cx="12" cy="13" r="5"/><circle cx="12" cy="13" r="2"/></g>' },
    { id: 1831, name: "SpeakerInverted", category: "communication", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="4" y="2" width="16" height="20" rx="2" ry="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="13" r="5"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="13" r="2"/>' },

// 629. Speaker-Color
    { id: 1832, name: "Speaker-Color", category: "media", svgContent: '<defs><linearGradient id="spkGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#b0bec5"/><stop offset="100%" stop-color="#455a64"/></linearGradient></defs><g><rect x="6" y="4" width="12" height="16" rx="2" fill="url(#spkGrad)" stroke="#455a64" stroke-width="1.5"/><circle cx="12" cy="12" r="4" fill="#37474f"/><circle cx="12" cy="12" r="1.5" fill="#cfd8dc"/></g>' },
    { id: 1833, name: "Speaker-Thin-Color", category: "media", svgContent: '<rect x="7" y="5" width="10" height="14" rx="1" fill="none" stroke="#455a64" stroke-width="0.75"/>' },
    { id: 1834, name: "Speaker-Inverted-Color", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#455a64" rx="4"/><rect x="7" y="5" width="10" height="14" rx="1" fill="#ffffff"/>' },

// 630. Speedometer
    { id: 1835, name: "Speedometer", category: "general", svgContent: '<circle cx="12" cy="12" r="10"/><path d="M12 7v8M12 15l3 0m-6 0l3 0"/><path d="M7 12a5 5 0 0 1 10 0"/>' },
    { id: 1836, name: "SpeedometerThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><path d="M12 7v8M12 15l3 0m-6 0l3 0"/><path d="M7 12a5 5 0 0 1 10 0"/></g>' },
    { id: 1837, name: "SpeedometerInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="10"/><path stroke="var(--ax-bg-inverse, white)" d="M12 7v8M12 15l3 0m-6 0l3 0"/><path stroke="var(--ax-bg-inverse, white)" d="M7 12a5 5 0 0 1 10 0"/>' },

// 631. Spoon
    { id: 1838, name: "Spoon", category: "food", svgContent: '<path d="M16.1 4.1l3.8 3.8"/><path d="M12.9 7.3L7.3 12.9a2 2 0 0 0 0 2.8l2.8 2.8a2 2 0 0 0 2.8 0l5.6-5.6"/><path d="M10 20l4-4M10 20l-2-2"/>' },
    { id: 1839, name: "SpoonThin", category: "food", svgContent: '<g fill="none" stroke-width="0.5"><path d="M16.1 4.1l3.8 3.8"/><path d="M12.9 7.3L7.3 12.9a2 2 0 0 0 0 2.8l2.8 2.8a2 2 0 0 0 2.8 0l5.6-5.6"/><path d="M10 20l4-4M10 20l-2-2"/></g>' },
    { id: 1840, name: "SpoonInverted", category: "food", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M16.1 4.1l3.8 3.8"/><path d="M12.9 7.3L7.3 12.9a2 2 0 0 0 0 2.8l2.8 2.8a2 2 0 0 0 2.8 0l5.6-5.6"/><path d="M10 20l4-4M10 20l-2-2"/></g>' },

// 632. Spotify
    { id: 1841, name: "Spotify", category: "brands", svgContent: '<circle cx="12" cy="12" r="10"/><path d="M7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0z"/>' },
    { id: 1842, name: "SpotifyThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><path d="M7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0z"/></g>' },
    { id: 1843, name: "SpotifyInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="10"/><path stroke="var(--ax-bg-inverse, white)" d="M7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0z"/>' },

// 633. Square
    { id: 1844, name: "Square", category: "ui", svgContent: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>' },
    { id: 1845, name: "SquareThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></g>' },
    { id: 1846, name: "SquareInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></g>' },

// 634. Stapler-Color
    { id: 1847, name: "Stapler-Color", category: "general", svgContent: '<defs><linearGradient id="stpGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#b0bec5"/><stop offset="100%" stop-color="#455a64"/></linearGradient></defs><g><path d="M4 14l16-2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" fill="url(#stpGrad)" stroke="#455a64" stroke-width="1.5"/><rect x="14" y="8" width="4" height="6" fill="#37474f"/></g>' },
    { id: 1848, name: "Stapler-Thin-Color", category: "general", svgContent: '<path d="M5 14l14-2v3a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" fill="none" stroke="#455a64" stroke-width="0.75"/>' },
    { id: 1849, name: "Stapler-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#455a64" rx="4"/><path d="M5 14l14-2v3a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" fill="#ffffff"/>' },

// 635. Star
    { id: 1850, name: "Star", category: "media", svgContent: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>' },
    { id: 1851, name: "StarThin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></g>' },
    { id: 1852, name: "StarInverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></g>' },

// 636. Star-Color
    { id: 1853, name: "Star-Color", category: "ui", svgContent: '<defs><linearGradient id="starGold" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fff59d"/><stop offset="60%" stop-color="#ffca28"/><stop offset="100%" stop-color="#ff8f00"/></linearGradient></defs><g><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="url(#starGold)"/><polygon points="12 2 8.91 8.26 2 9.27 7 14.14 5.82 21.02 12 17.77" fill="#ffe082" opacity="0.4"/></g>' },
    { id: 1854, name: "Star-Thin-Color", category: "ui", svgContent: '<path d="M12 3l2 6h7l-5 4 2 6-5-3-5 3 2-6-5-4h7z" fill="none" stroke="#fbc02d" stroke-width="0.75"/>' },
    { id: 1855, name: "Star-Inverted-Color", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#fbc02d" rx="4"/><path d="M12 3l2 6h7l-5 4 2 6-5-3-5 3 2-6-5-4h7z" fill="#ffffff"/>' },

// 637. Star-Fill-Color
    { id: 1856, name: "Star-Fill-Color", category: "ui", svgContent: '<defs><linearGradient id="strFGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fff176"/><stop offset="100%" stop-color="#fbc02d"/></linearGradient></defs><g><path d="M12 2l3 7h8l-6 5 2 7-6-4-6 4 2-7-6-5h8z" fill="url(#strFGrad)" stroke="#f57f17" stroke-width="1.5"/></g>' },
    { id: 1857, name: "Star-Fill-Thin-Color", category: "ui", svgContent: '<path d="M12 3l2 6h7l-5 4 2 6-5-3-5 3 2-6-5-4h7z" fill="none" stroke="#f57f17" stroke-width="0.75"/>' },
    { id: 1858, name: "Star-Fill-Inverted-Color", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#f57f17" rx="4"/><path d="M12 3l2 6h7l-5 4 2 6-5-3-5 3 2-6-5-4h7z" fill="#ffffff"/>' },

// 638. Star-Mini-Color
    { id: 1859, name: "Star-Mini-Color", category: "ui", svgContent: '<defs><linearGradient id="stmGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fff176"/><stop offset="100%" stop-color="#fbc02d"/></linearGradient></defs><g><path d="M12 2l3 7h8l-6 5 2 7-6-4-6 4 2-7-6-5h8z" fill="url(#stmGrad)" stroke="#f57f17" stroke-width="1.5"/></g>' },
    { id: 1860, name: "Star-Mini-Thin-Color", category: "ui", svgContent: '<path d="M12 3l2 6h7l-5 4 2 6-5-3-5 3 2-6-5-4h7z" fill="none" stroke="#fbc02d" stroke-width="0.75"/>' },
    { id: 1861, name: "Star-Mini-Inverted-Color", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#fbc02d" rx="4"/><path d="M12 3l2 6h7l-5 4 2 6-5-3-5 3 2-6-5-4h7z" fill="#ffffff"/>' },

// 639. StarHalf
    { id: 1862, name: "StarHalf", category: "media", svgContent: '<path d="M12 18l3.79 2.01-0.88-4.66L19 10.3H14.2l-2.2-4.6v13.3z"/><path d="M12 2v14.5"/>' },
    { id: 1863, name: "StarHalfThin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 18l3.79 2.01-0.88-4.66L19 10.3H14.2l-2.2-4.6v13.3z"/><path d="M12 2v14.5"/></g>' },
    { id: 1864, name: "StarHalfInverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M12 18l3.79 2.01-0.88-4.66L19 10.3H14.2l-2.2-4.6v13.3z"/><path stroke="var(--ax-bg-inverse, white)" d="M12 2v14.5"/>' },

// 640. StatusDnd
    { id: 1865, name: "StatusDnd", category: "general", svgContent: '<circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/>' },
    { id: 1866, name: "StatusDndThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/></g>' },
    { id: 1867, name: "StatusDndInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="10"/><line stroke="var(--ax-bg-inverse, white)" x1="8" y1="12" x2="16" y2="12"/>' },

// 641. StatusOffline
    { id: 1868, name: "StatusOffline", category: "general", svgContent: '<circle cx="18" cy="18" r="4"/><path d="M12 2a10 10 0 1 0 10 10M12 6v6l4 2"/>' },
    { id: 1869, name: "StatusOfflineThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="18" cy="18" r="4"/><path d="M12 2a10 10 0 1 0 10 10M12 6v6l4 2"/></g>' },
    { id: 1870, name: "StatusOfflineInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="18" cy="18" r="4"/><path stroke="var(--ax-bg-inverse, white)" d="M12 2a10 10 0 1 0 10 10M12 6v6l4 2"/>' },

// 642. Steering-Wheel-Color
    { id: 1871, name: "Steering-Wheel-Color", category: "general", svgContent: '<defs><linearGradient id="stgGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#8d6e63"/><stop offset="100%" stop-color="#5d4037"/></linearGradient></defs><g><circle cx="12" cy="12" r="10" fill="none" stroke="#5d4037" stroke-width="3"/><path d="M12 2v4m0 12v4m-10-10h4m12 0h4" stroke="#5d4037" stroke-width="3" stroke-linecap="round"/><circle cx="12" cy="12" r="2" fill="#5d4037"/></g>' },
    { id: 1872, name: "Steering-Wheel-Thin-Color", category: "general", svgContent: '<circle cx="12" cy="12" r="9" fill="none" stroke="#5d4037" stroke-width="0.75"/>' },
    { id: 1873, name: "Steering-Wheel-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#5d4037" rx="4"/><circle cx="12" cy="12" r="9" fill="#ffffff"/>' },

// 643. Stop
    { id: 1874, name: "Stop", category: "media", svgContent: '<rect x="6" y="6" width="12" height="12"/>' },
    { id: 1875, name: "StopThin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><rect x="6" y="6" width="12" height="12"/></g>' },
    { id: 1876, name: "StopInverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><rect x="6" y="6" width="12" height="12"/></g>' },

// 644. StopSolid
    { id: 1877, name: "StopSolid", category: "media", svgContent: '<rect x="5" y="5" width="14" height="14" fill="currentColor" opacity="0.9"/>' },
    { id: 1878, name: "StopSolidThin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><rect x="5" y="5" width="14" height="14"/></g>' },
    { id: 1879, name: "StopSolidInverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="5" y="5" width="14" height="14" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 645. Stripe
    { id: 1880, name: "Stripe", category: "brands", svgContent: '<path d="M2 8c0-1 1-2 2-2h16c1 0 2 1 2 2v8c0 1-1 2-2 2H4c-1 0-2-1-2-2V8z"/><line x1="6" y1="12" x2="10" y2="12"/>' },
    { id: 1881, name: "StripeThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><path d="M2 8c0-1 1-2 2-2h16c1 0 2 1 2 2v8c0 1-1 2-2 2H4c-1 0-2-1-2-2V8z"/><line x1="6" y1="12" x2="10" y2="12"/></g>' },
    { id: 1882, name: "StripeInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M2 8c0-1 1-2 2-2h16c1 0 2 1 2 2v8c0 1-1 2-2 2H4c-1 0-2-1-2-2V8z"/><line stroke="var(--ax-bg-inverse, white)" x1="6" y1="12" x2="10" y2="12" />' },

// 646. Stripe2
    { id: 1883, name: "Stripe2", category: "brands", svgContent: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 10h12M6 14h8"/>' },
    { id: 1884, name: "Stripe2Thin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 10h12M6 14h8"/></g>' },
    { id: 1885, name: "Stripe2Inverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="2" y="4" width="20" height="16" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M6 10h12M6 14h8"/>' },

// 647. Submarine-Color
    { id: 1886, name: "Submarine-Color", category: "general", svgContent: '<defs><linearGradient id="submGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#78909c"/><stop offset="100%" stop-color="#455a64"/></linearGradient></defs><g><path d="M2 12a10 4 0 1 0 20 0 10 4 0 1 0-20 0z" fill="url(#submGrad)" stroke="#455a64" stroke-width="1.5"/><rect x="10" y="6" width="4" height="4" fill="#455a64"/></g>' },
    { id: 1887, name: "Submarine-Thin-Color", category: "general", svgContent: '<path d="M3 13a9 3 0 1 0 18 0 9 3 0 1 0-18 0z" fill="none" stroke="#455a64" stroke-width="0.75"/>' },
    { id: 1888, name: "Submarine-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#455a64" rx="4"/><path d="M3 13a9 3 0 1 0 18 0 9 3 0 1 0-18 0z" fill="#ffffff"/>' },

// 648. Subway-Color
    { id: 1889, name: "Subway-Color", category: "general", svgContent: '<defs><linearGradient id="subGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#9e9e9e"/><stop offset="100%" stop-color="#616161"/></linearGradient></defs><g><rect x="4" y="6" width="16" height="12" rx="2" fill="url(#subGrad)" stroke="#212121" stroke-width="1.5"/><rect x="6" y="8" width="4" height="4" fill="#ffffff"/><rect x="14" y="8" width="4" height="4" fill="#ffffff"/></g>' },
    { id: 1890, name: "Subway-Thin-Color", category: "general", svgContent: '<rect x="5" y="7" width="14" height="10" rx="1" fill="none" stroke="#212121" stroke-width="0.75"/>' },
    { id: 1891, name: "Subway-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#212121" rx="4"/><rect x="5" y="7" width="14" height="10" rx="1" fill="#ffffff"/>' },

// 649. Sun
    { id: 1892, name: "Sun", category: "ui", svgContent: '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>' },
    { id: 1893, name: "SunThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></g>' },
    { id: 1894, name: "SunInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></g>' },

// 650. Sun-Cloud
    { id: 1895, name: "Sun-Cloud", category: "ui", svgContent: '<path d="M16 13a4 4 0 0 0-4-4 4 4 0 0 0-3.1 1.5M12 2v2M12 22v-2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M17.7 6.3l-1.4-1.4"/><path d="M16 13a4 4 0 0 1 0 8H6a5 5 0 0 1-1.8-9.6"/>' },
    { id: 1896, name: "Sun-CloudThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M16 13a4 4 0 0 0-4-4 4 4 0 0 0-3.1 1.5M12 2v2M12 22v-2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M17.7 6.3l-1.4-1.4"/><path d="M16 13a4 4 0 0 1 0 8H6a5 5 0 0 1-1.8-9.6"/></g>' },
    { id: 1897, name: "Sun-CloudInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M16 13a4 4 0 0 0-4-4 4 4 0 0 0-3.1 1.5M12 2v2M12 22v-2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M17.7 6.3l-1.4-1.4"/><path d="M16 13a4 4 0 0 1 0 8H6a5 5 0 0 1-1.8-9.6"/></g>' },

// 651. Sun-Cloud-Color
    { id: 1898, name: "Sun-Cloud-Color", category: "iot", svgContent: '<defs><linearGradient id="scGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#cfd8dc"/></linearGradient></defs><g><circle cx="16" cy="9" r="4" fill="#ffb300"/><path d="M19 13h-1.2A5.5 5.5 0 1 0 9 19h10a4 4 0 0 0 0-8z" fill="url(#scGrad)"/></g>' },
    { id: 1899, name: "Sun-Cloud-Thin-Color", category: "iot", svgContent: '<circle cx="16" cy="9" r="4" fill="none" stroke="#ffb300" stroke-width="0.5"/><path d="M19 13h-1.2A5.5 5.5 0 1 0 9 19h10a4 4 0 0 0 0-8z" fill="none" stroke="#b0bec5" stroke-width="0.75"/>' },
    { id: 1900, name: "Sun-Cloud-Inverted-Color", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#0288d1" rx="4"/><circle cx="15" cy="8" r="3" fill="#ffea00"/><path d="M17 13.5A3.5 3.5 0 0 0 10.4 11 4.5 4.5 0 0 0 5 15.5 3.5 3.5 0 0 0 8.5 19h8.5a3.5 3.5 0 0 0 0-7z" fill="#ffffff"/>' },

// 652. Sun-Color
    { id: 1901, name: "Sun-Color", category: "iot", svgContent: '<defs><radialGradient id="sunGrad" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ffeb3b"/><stop offset="85%" stop-color="#ff9800"/><stop offset="100%" stop-color="#e65100"/></radialGradient></defs><g><circle cx="12" cy="12" r="6" fill="url(#sunGrad)"/><path d="M12 2v2m0 16v2M4 12H2m20 0h-2m-2.12-7.88l-1.42 1.42m-8.96 8.96l-1.42 1.42m0-11.8l1.42 1.42m8.96 8.96l1.42 1.42" stroke="#ff9800" stroke-width="2" stroke-linecap="round"/></g>' },
    { id: 1902, name: "Sun-Thin-Color", category: "iot", svgContent: '<circle cx="12" cy="12" r="5" fill="none" stroke="#ff9800" stroke-width="0.75"/>' },
    { id: 1903, name: "Sun-Inverted-Color", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#ff9800" rx="4"/><circle cx="12" cy="12" r="6" fill="#ffffff"/>' },

// 653. Sunglasses-Color
    { id: 1904, name: "Sunglasses-Color", category: "food", svgContent: '<defs><linearGradient id="sunGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#263238"/><stop offset="100%" stop-color="#121212"/></linearGradient></defs><g><rect x="3" y="10" width="8" height="6" rx="1" fill="url(#sunGrad)" stroke="#121212" stroke-width="1.5"/><rect x="13" y="10" width="8" height="6" rx="1" fill="url(#sunGrad)" stroke="#121212" stroke-width="1.5"/><path d="M11 13h2" stroke="#121212" stroke-width="2"/></g>' },
    { id: 1905, name: "Sunglasses-Thin-Color", category: "food", svgContent: '<rect x="4" y="11" width="7" height="4" rx="1" fill="none" stroke="#121212" stroke-width="0.75"/><rect x="13" y="11" width="7" height="4" rx="1" fill="none" stroke="#121212" stroke-width="0.75"/>' },
    { id: 1906, name: "Sunglasses-Inverted-Color", category: "food", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#121212" rx="4"/><rect x="4" y="11" width="7" height="4" rx="1" fill="#ffffff"/><rect x="13" y="11" width="7" height="4" rx="1" fill="#ffffff"/>' },

// 654. Surfboard-Color
    { id: 1907, name: "Surfboard-Color", category: "general", svgContent: '<defs><linearGradient id="srfGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ff9800"/><stop offset="100%" stop-color="#f57c00"/></linearGradient></defs><g><path d="M12 2c-4 0-8 2-8 8v8c0 4 4 6 8 6s8-2 8-6V10c0-6-4-8-8-8z" fill="url(#srfGrad)" stroke="#f57c00" stroke-width="1.5"/><path d="M8 10h8" stroke="#ffffff" stroke-width="2"/></g>' },
    { id: 1908, name: "Surfboard-Thin-Color", category: "general", svgContent: '<path d="M12 3c-3 0-7 2-7 7v7c0 3 3 5 7 5s7-2 7-5V10c0-5-3-7-7-7z" fill="none" stroke="#f57c00" stroke-width="0.75"/>' },
    { id: 1909, name: "Surfboard-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#f57c00" rx="4"/><path d="M12 3c-3 0-7 2-7 7v7c0 3 3 5 7 5s7-2 7-5V10c0-5-3-7-7-7z" fill="#ffffff"/>' },

// 655. Table-Color
    { id: 1910, name: "Table-Color", category: "development", svgContent: '<defs><linearGradient id="tblGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#90caf9"/><stop offset="100%" stop-color="#42a5f5"/></linearGradient></defs><g><rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="url(#tblGrad)" stroke-width="2"/><line x1="3" y1="9" x2="21" y2="9" stroke="#42a5f5" stroke-width="1.5"/><line x1="3" y1="15" x2="21" y2="15" stroke="#42a5f5" stroke-width="1.5"/><line x1="9" y1="3" x2="9" y2="21" stroke="#42a5f5" stroke-width="1.5"/></g>' },
    { id: 1911, name: "Table-Thin-Color", category: "development", svgContent: '<rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="#42a5f5" stroke-width="0.75"/><line x1="3" y1="10" x2="21" y2="10" stroke="#42a5f5" stroke-width="0.5"/><line x1="10" y1="3" x2="10" y2="21" stroke="#42a5f5" stroke-width="0.5"/>' },
    { id: 1912, name: "Table-Inverted-Color", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#42a5f5" rx="4"/><rect x="4" y="4" width="16" height="16" rx="1" fill="#ffffff"/><line x1="4" y1="9" x2="20" y2="9" stroke="#42a5f5" stroke-width="1.5"/><line x1="10" y1="4" x2="10" y2="20" stroke="#42a5f5" stroke-width="1.5"/>' },

// 656. Tablet
    { id: 1913, name: "Tablet", category: "iot", svgContent: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12" y2="18"/>' },
    { id: 1914, name: "TabletThin", category: "iot", svgContent: '<g fill="none" stroke-width="0.5"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12" y2="18"/></g>' },
    { id: 1915, name: "TabletInverted", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12" y2="18"/></g>' },

// 657. Tag
    { id: 1916, name: "Tag", category: "ui", svgContent: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12a2 2 0 0 1 0-2.83l7.17-7.17a2 2 0 0 1 2.83 0L20.59 9.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>' },
    { id: 1917, name: "TagThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12a2 2 0 0 1 0-2.83l7.17-7.17a2 2 0 0 1 2.83 0L20.59 9.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></g>' },
    { id: 1918, name: "TagInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12a2 2 0 0 1 0-2.83l7.17-7.17a2 2 0 0 1 2.83 0L20.59 9.59a2 2 0 0 1 0 2.82z"/><line stroke="var(--ax-bg-inverse, white)" x1="7" y1="7" x2="7.01" y2="7"/>' },

// 658. Tag-Color
    { id: 1919, name: "Tag-Color", category: "general", svgContent: '<defs><linearGradient id="tagGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#00e676"/><stop offset="100%" stop-color="#00c853"/></linearGradient></defs><g><path d="M21.4 11.6l-9-9A2 2 0 0 0 11 2H3a2 2 0 0 0-2 2v8a2 2 0 0 0 .6 1.4l9 9a2 2 0 0 0 2.8 0l8-8a2 2 0 0 0 0-2.8z" fill="url(#tagGrad)"/><circle cx="6" cy="6" r="1.5" fill="#ffffff"/></g>' },
    { id: 1920, name: "Tag-Thin-Color", category: "general", svgContent: '<path d="M21 11.5l-9-9H3v9l9 9z" fill="none" stroke="#00c853" stroke-width="0.75"/>' },
    { id: 1921, name: "Tag-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#00c853" rx="4"/><path d="M20 11l-8-8H4v8l8 8z" fill="#ffffff"/><circle cx="7" cy="7" r="1.5" fill="#00c853"/>' },

// 659. Tags
    { id: 1922, name: "Tags", category: "ui", svgContent: '<path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2m7 8h.01"/>' },
    { id: 1923, name: "TagsThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2m7 8h.01"/></g>' },
    { id: 1924, name: "TagsInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2m7 8h.01"/>' },

// 660. Tape-Color
    { id: 1925, name: "Tape-Color", category: "general", svgContent: '<defs><linearGradient id="tpeGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffeb3b"/><stop offset="100%" stop-color="#fbc02d"/></linearGradient></defs><g><circle cx="12" cy="12" r="8" fill="url(#tpeGrad)" stroke="#fbc02d" stroke-width="1.5"/><circle cx="12" cy="12" r="3" fill="#ffffff"/><path d="M12 12l8-8" stroke="#fbc02d" stroke-width="2" stroke-linecap="round"/></g>' },
    { id: 1926, name: "Tape-Thin-Color", category: "general", svgContent: '<circle cx="12" cy="12" r="7" fill="none" stroke="#fbc02d" stroke-width="0.75"/>' },
    { id: 1927, name: "Tape-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#fbc02d" rx="4"/><circle cx="12" cy="12" r="7" fill="#ffffff"/>' },

// 661. Target
    { id: 1928, name: "Target", category: "general", svgContent: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>' },
    { id: 1929, name: "TargetThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></g>' },
    { id: 1930, name: "TargetInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></g>' },

// 662. Target-Color
    { id: 1931, name: "Target-Color", category: "ui", svgContent: '<defs><linearGradient id="tgtGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ff5252"/><stop offset="100%" stop-color="#b71c1c"/></linearGradient></defs><g><circle cx="12" cy="12" r="10" fill="none" stroke="url(#tgtGrad)" stroke-width="2"/><circle cx="12" cy="12" r="6" fill="none" stroke="#b0bec5" stroke-width="1.5"/><circle cx="12" cy="12" r="2.5" fill="url(#tgtGrad)"/></g>' },
    { id: 1932, name: "Target-Thin-Color", category: "ui", svgContent: '<circle cx="12" cy="12" r="10" fill="none" stroke="#b71c1c" stroke-width="0.75"/><circle cx="12" cy="12" r="2" fill="none" stroke="#b71c1c" stroke-width="0.5"/>' },
    { id: 1933, name: "Target-Inverted-Color", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#b71c1c" rx="4"/><circle cx="12" cy="12" r="8" fill="#ffffff"/><circle cx="12" cy="12" r="5" fill="#b71c1c"/><circle cx="12" cy="12" r="2" fill="#ffffff"/>' },

// 663. Target-Cross
    { id: 1934, name: "Target-Cross", category: "general", svgContent: '<circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/>' },
    { id: 1935, name: "Target-CrossThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></g>' },
    { id: 1936, name: "Target-CrossInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></g>' },

// 664. Taxi-Color
    { id: 1937, name: "Taxi-Color", category: "ui", svgContent: '<defs><linearGradient id="txiGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffeb3b"/><stop offset="100%" stop-color="#fbc02d"/></linearGradient></defs><g><rect x="2" y="10" width="16" height="8" rx="2" fill="url(#txiGrad)" stroke="#fbc02d" stroke-width="1.5"/><rect x="6" y="8" width="8" height="2" fill="#000000"/></g>' },
    { id: 1938, name: "Taxi-Thin-Color", category: "ui", svgContent: '<rect x="3" y="11" width="14" height="6" rx="1" fill="none" stroke="#fbc02d" stroke-width="0.75"/>' },
    { id: 1939, name: "Taxi-Inverted-Color", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#fbc02d" rx="4"/><rect x="3" y="11" width="14" height="6" rx="1" fill="#ffffff"/>' },

// 665. Tea
    { id: 1940, name: "Tea", category: "general", svgContent: '<path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><path d="M12 21v-4"/><path d="M8 21v-4"/><path d="M16 21v-4"/>' },
    { id: 1941, name: "TeaThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><path d="M12 21v-4"/><path d="M8 21v-4"/><path d="M16 21v-4"/></g>' },
    { id: 1942, name: "TeaInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><path d="M12 21v-4"/><path d="M8 21v-4"/><path d="M16 21v-4"/></g>' },

// 666. Team
    { id: 1943, name: "Team", category: "ui", svgContent: '<circle cx="6" cy="8" r="2.5"/><circle cx="18" cy="8" r="2.5"/><circle cx="12" cy="5" r="2.5"/><path d="M4 18c0-1.5 1.5-3 3-3M16 18c0-1.5-1.5-3-3-3M12 18c0-2 2-3 3-3s3 1 3 3"/>' },
    { id: 1944, name: "TeamThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="6" cy="8" r="2.5"/><circle cx="18" cy="8" r="2.5"/><circle cx="12" cy="5" r="2.5"/><path d="M4 18c0-1.5 1.5-3 3-3M16 18c0-1.5-1.5-3-3-3M12 18c0-2 2-3 3-3s3 1 3 3"/></g>' },
    { id: 1945, name: "TeamInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="6" cy="8" r="2.5"/><circle fill="var(--ax-bg-inverse, white)" cx="18" cy="8" r="2.5"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="5" r="2.5"/><path stroke="var(--ax-bg-inverse, white)" d="M4 18c0-1.5 1.5-3 3-3M16 18c0-1.5-1.5-3-3-3M12 18c0-2 2-3 3-3s3 1 3 3"/>' },

// 667. Telegram
    { id: 1946, name: "Telegram", category: "brands", svgContent: '<path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm9-4l-4 6 5 3 4-8-5 3z"/>' },
    { id: 1947, name: "TelegramThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm9-4l-4 6 5 3 4-8-5 3z"/></g>' },
    { id: 1948, name: "TelegramInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm9-4l-4 6 5 3 4-8-5 3z"/>' },

// 668. Telephone
    { id: 1949, name: "Telephone", category: "general", svgContent: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke-linecap="round" stroke-linejoin="round"/>' },
    { id: 1950, name: "TelephoneThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke-linecap="round" stroke-linejoin="round"/></g>' },
    { id: 1951, name: "TelephoneInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="var(--ax-bg-inverse, white)" stroke-linecap="round" stroke-linejoin="round"/>' },

// 669. Telescope-Color
    { id: 1952, name: "Telescope-Color", category: "general", svgContent: '<defs><linearGradient id="telGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#455a64"/><stop offset="100%" stop-color="#263238"/></linearGradient></defs><g><rect x="3" y="10" width="18" height="6" rx="1" fill="url(#telGrad)" stroke="#263238" stroke-width="1.5"/><path d="M21 11l2 1-2 1z" fill="#263238"/><line x1="3" y1="13" x2="18" y2="13" stroke="#546e7a" stroke-width="1"/></g>' },
    { id: 1953, name: "Telescope-Thin-Color", category: "general", svgContent: '<rect x="4" y="11" width="16" height="4" rx="1" fill="none" stroke="#263238" stroke-width="0.75"/>' },
    { id: 1954, name: "Telescope-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#263238" rx="4"/><rect x="4" y="11" width="16" height="4" rx="1" fill="#ffffff"/>' },

// 670. Telescope-View-Color
    { id: 1955, name: "Telescope-View-Color", category: "general", svgContent: '<defs><linearGradient id="telVGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#263238"/><stop offset="100%" stop-color="#121212"/></linearGradient></defs><g><circle cx="12" cy="12" r="10" fill="url(#telVGrad)" stroke="#121212" stroke-width="1.5"/><circle cx="12" cy="12" r="3" fill="#ffeb3b"/></g>' },
    { id: 1956, name: "Telescope-View-Thin-Color", category: "general", svgContent: '<circle cx="12" cy="12" r="9" fill="none" stroke="#121212" stroke-width="0.75"/>' },
    { id: 1957, name: "Telescope-View-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#121212" rx="4"/><circle cx="12" cy="12" r="9" fill="#ffffff"/>' },

// 671. Tent-Color
    { id: 1958, name: "Tent-Color", category: "general", svgContent: '<defs><linearGradient id="tntGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ef5350"/><stop offset="100%" stop-color="#b71c1c"/></linearGradient></defs><g><path d="M12 3l-9 18h18z" fill="url(#tntGrad)" stroke="#b71c1c" stroke-width="1.5"/><path d="M12 3l2 18M12 3l-2 18" stroke="#b71c1c" stroke-width="1.5"/></g>' },
    { id: 1959, name: "Tent-Thin-Color", category: "general", svgContent: '<path d="M12 4l-8 17h16z" fill="none" stroke="#b71c1c" stroke-width="0.75"/>' },
    { id: 1960, name: "Tent-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#b71c1c" rx="4"/><path d="M12 4l-8 17h16z" fill="#ffffff"/>' },

// 672. Terminal
    { id: 1961, name: "Terminal", category: "ui", svgContent: '<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>' },
    { id: 1962, name: "TerminalThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></g>' },
    { id: 1963, name: "TerminalInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></g>' },

// 673. Terminal-Color
    { id: 1964, name: "Terminal-Color", category: "brands", svgContent: '<defs><linearGradient id="termBg" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#2d3748"/><stop offset="100%" stop-color="#1a202c"/></linearGradient></defs><g><rect x="2" y="3" width="20" height="18" rx="3" fill="url(#termBg)"/><polyline points="6 8 10 11 6 14" fill="none" stroke="#48bb78" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="14" x2="18" y2="14" stroke="#48bb78" stroke-width="2.5" stroke-linecap="round"/></g>' },
    { id: 1965, name: "Terminal-Thin-Color", category: "brands", svgContent: '<rect x="2" y="3" width="20" height="18" rx="3" fill="none" stroke="#48bb78" stroke-width="0.75"/><polyline points="7 9 10 11 7 13" fill="none" stroke="#48bb78" stroke-width="0.75"/>' },
    { id: 1966, name: "Terminal-Inverted-Color", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#1a202c" rx="4"/><rect x="2" y="3" width="20" height="18" rx="2" fill="none" stroke="#ffffff" stroke-width="1"/><polyline points="6 9 9 12 6 15" fill="none" stroke="#ffffff" stroke-width="2"/><line x1="11" y1="15" x2="16" y2="15" stroke="#ffffff" stroke-width="2"/>' },

// 674. Tesla
    { id: 1967, name: "Tesla", category: "general", svgContent: '<path d="M3 12h18M6 8h12v8H6zM9 3v4M15 3v4M6 18v2M18 18v2"/>' },
    { id: 1968, name: "TeslaThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M3 12h18M6 8h12v8H6zM9 3v4M15 3v4M6 18v2M18 18v2"/></g>' },
    { id: 1969, name: "TeslaInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M3 12h18M6 8h12v8H6zM9 3v4M15 3v4M6 18v2M18 18v2"/>' },

// 675. TextColor
    { id: 1970, name: "TextColor", category: "general", svgContent: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12a2 2 0 0 1 0-2.83l7.17-7.17a2 2 0 0 1 2.83 0L20.59 9.59a2 2 0 0 1 0 2.82z"/><line x1="5" y1="5" x2="19" y2="19"/>' },
    { id: 1971, name: "TextColorThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12a2 2 0 0 1 0-2.83l7.17-7.17a2 2 0 0 1 2.83 0L20.59 9.59a2 2 0 0 1 0 2.82z"/><line x1="5" y1="5" x2="19" y2="19"/></g>' },
    { id: 1972, name: "TextColorInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12a2 2 0 0 1 0-2.83l7.17-7.17a2 2 0 0 1 2.83 0L20.59 9.59a2 2 0 0 1 0 2.82z"/><line stroke="var(--ax-bg-inverse, white)" x1="5" y1="5" x2="19" y2="19"/>' },

// 676. Theater-Masks-Color
    { id: 1973, name: "Theater-Masks-Color", category: "general", svgContent: '<defs><linearGradient id="mskGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fff9c4"/><stop offset="100%" stop-color="#fbc02d"/></linearGradient></defs><g><path d="M7 6a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0v-4a4 4 0 0 0-4-4z" fill="url(#mskGrad)" stroke="#f57c00" stroke-width="1.5"/><path d="M17 10a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0v-4a4 4 0 0 0-4-4z" fill="url(#mskGrad)" stroke="#f57c00" stroke-width="1.5"/></g>' },
    { id: 1974, name: "Theater-Masks-Thin-Color", category: "general", svgContent: '<path d="M7 7a3 3 0 0 0-3 3v3a3 3 0 0 0 6 0v-3a3 3 0 0 0-3-3z" fill="none" stroke="#f57c00" stroke-width="0.75"/>' },
    { id: 1975, name: "Theater-Masks-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#f57c00" rx="4"/><path d="M7 7a3 3 0 0 0-3 3v3a3 3 0 0 0 6 0v-3a3 3 0 0 0-3-3z" fill="#ffffff"/>' },

// 677. Thermometer
    { id: 1976, name: "Thermometer", category: "health", svgContent: '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>' },
    { id: 1977, name: "ThermometerThin", category: "health", svgContent: '<g fill="none" stroke-width="0.5"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></g>' },
    { id: 1978, name: "ThermometerInverted", category: "health", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></g>' },

// 678. Thermometer-Cold
    { id: 1979, name: "Thermometer-Cold", category: "health", svgContent: '<path d="M2 12.5a5 5 0 1 0 10 0V3a3 3 0 1 0-6 0v9.5"/><line x1="6" y1="3" x2="6" y2="3"/><line x1="8" y1="5" x2="8" y2="5"/><line x1="4" y1="5" x2="4" y2="5"/><line x1="9" y1="8" x2="9" y2="8"/><line x1="3" y1="8" x2="3" y2="8"/>' },
    { id: 1980, name: "Thermometer-ColdThin", category: "health", svgContent: '<g fill="none" stroke-width="0.5"><path d="M2 12.5a5 5 0 1 0 10 0V3a3 3 0 1 0-6 0v9.5"/><line x1="6" y1="3" x2="6" y2="3"/><line x1="8" y1="5" x2="8" y2="5"/><line x1="4" y1="5" x2="4" y2="5"/><line x1="9" y1="8" x2="9" y2="8"/><line x1="3" y1="8" x2="3" y2="8"/></g>' },
    { id: 1981, name: "Thermometer-ColdInverted", category: "health", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M2 12.5a5 5 0 1 0 10 0V3a3 3 0 1 0-6 0v9.5"/><line x1="6" y1="3" x2="6" y2="3"/><line x1="8" y1="5" x2="8" y2="5"/><line x1="4" y1="5" x2="4" y2="5"/><line x1="9" y1="8" x2="9" y2="8"/><line x1="3" y1="8" x2="3" y2="8"/></g>' },

// 679. Thermometer-Color
    { id: 1982, name: "Thermometer-Color", category: "general", svgContent: '<defs><linearGradient id="thmGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ef5350"/><stop offset="100%" stop-color="#c62828"/></linearGradient></defs><g><path d="M14 4v10a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" fill="url(#thmGrad)" stroke="#b71c1c" stroke-width="1.5"/><line x1="12" y1="4" x2="12" y2="10" stroke="#ffffff" stroke-width="2"/></g>' },
    { id: 1983, name: "Thermometer-Thin-Color", category: "general", svgContent: '<path d="M14 5v9a3 3 0 1 1-3 0V5a1 1 0 0 1 3 0z" fill="none" stroke="#b71c1c" stroke-width="0.75"/>' },
    { id: 1984, name: "Thermometer-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#b71c1c" rx="4"/><path d="M14 5v9a3 3 0 1 1-3 0V5a1 1 0 0 1 3 0z" fill="#ffffff"/>' },

// 680. Thermometer-Hot
    { id: 1985, name: "Thermometer-Hot", category: "health", svgContent: '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/><path d="M12 9V5"/><path d="M12 12v1"/><line x1="12" y1="16" x2="12" y2="16"/>' },
    { id: 1986, name: "Thermometer-HotThin", category: "health", svgContent: '<g fill="none" stroke-width="0.5"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/><path d="M12 9V5"/><path d="M12 12v1"/><line x1="12" y1="16" x2="12" y2="16"/></g>' },
    { id: 1987, name: "Thermometer-HotInverted", category: "health", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/><path d="M12 9V5"/><path d="M12 12v1"/><line x1="12" y1="16" x2="12" y2="16"/></g>' },

// 681. Thermostat
    { id: 1988, name: "Thermostat", category: "general", svgContent: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><path d="M12 6V3m0 18v-3"/><path d="M18 12h3M3 12h3"/>' },
    { id: 1989, name: "ThermostatThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><path d="M12 6V3m0 18v-3"/><path d="M18 12h3M3 12h3"/></g>' },
    { id: 1990, name: "ThermostatInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="8"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="4"/><path stroke="var(--ax-bg-inverse, white)" d="M12 6V3m0 18v-3"/><path stroke="var(--ax-bg-inverse, white)" d="M18 12h3M3 12h3"/>' },

// 682. Thumbs-Down
    { id: 1991, name: "Thumbs-Down", category: "general", svgContent: '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zM17 2h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"/>' },
    { id: 1992, name: "Thumbs-DownThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zM17 2h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"/></g>' },
    { id: 1993, name: "Thumbs-DownInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zM17 2h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"/></g>' },

// 683. Thumbs-Up
    { id: 1994, name: "Thumbs-Up", category: "general", svgContent: '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>' },
    { id: 1995, name: "Thumbs-UpThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></g>' },
    { id: 1996, name: "Thumbs-UpInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></g>' },

// 684. ThumbsDown
    { id: 1997, name: "ThumbsDown", category: "general", svgContent: '<path d="M10 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4M10 1h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z"/><path d="M21 21h2a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z"/>' },
    { id: 1998, name: "ThumbsDownThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M10 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4M10 1h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z"/><path d="M21 21h2a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z"/></g>' },
    { id: 1999, name: "ThumbsDownInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M10 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4M10 1h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z"/><path stroke="var(--ax-bg-inverse, white)" d="M21 21h2a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z"/>' },

// 685. ThumbsUp
    { id: 2000, name: "ThumbsUp", category: "general", svgContent: '<path d="M14 9V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5.5a2.5 2.5 0 0 0-2.5-2.5z"/><path d="M3 21h2a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z"/>' },
    { id: 2001, name: "ThumbsUpThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M14 9V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5.5a2.5 2.5 0 0 0-2.5-2.5z"/><path d="M3 21h2a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z"/></g>' },
    { id: 2002, name: "ThumbsUpInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M14 9V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5.5a2.5 2.5 0 0 0-2.5-2.5z"/><path stroke="var(--ax-bg-inverse, white)" d="M3 21h2a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z"/>' },

// 686. Ticket-Color
    { id: 2003, name: "Ticket-Color", category: "finance", svgContent: '<defs><linearGradient id="tktGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ffb74d"/><stop offset="100%" stop-color="#f57c00"/></linearGradient></defs><g><path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2 2 2 0 0 0 0 10 2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 2 2 0 0 0 0-10z" fill="url(#tktGrad)"/><line x1="6" y1="8" x2="6" y2="16" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="2 2"/></g>' },
    { id: 2004, name: "Ticket-Thin-Color", category: "finance", svgContent: '<path d="M2 8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2" fill="none" stroke="#f57c00" stroke-width="0.75"/>' },
    { id: 2005, name: "Ticket-Inverted-Color", category: "finance", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#f57c00" rx="4"/><path d="M3 8a2 2 0 0 0 2-2h14a2 2 0 0 0 2 2v8a2 2 0 0 0-2 2H5a2 2 0 0 0-2-2V8z" fill="#ffffff"/>' },

// 687. TikTok
    { id: 2006, name: "TikTok", category: "brands", svgContent: '<path d="M9 2v15M9 10a5 5 0 0 0 5 5 5 5 0 0 0 5-5M15 2a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3"/>' },
    { id: 2007, name: "TikTokThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><path d="M9 2v15M9 10a5 5 0 0 0 5 5 5 5 0 0 0 5-5M15 2a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3"/></g>' },
    { id: 2008, name: "TikTokInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M9 2v15M9 10a5 5 0 0 0 5 5 5 5 0 0 0 5-5M15 2a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3"/>' },

// 688. Timeline-Color
    { id: 2009, name: "Timeline-Color", category: "development", svgContent: '<defs><linearGradient id="tlGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#ff7043"/><stop offset="100%" stop-color="#d84315"/></linearGradient></defs><g><line x1="2" y1="12" x2="22" y2="12" stroke="url(#tlGrad)" stroke-width="2.5" stroke-linecap="round"/><circle cx="6" cy="12" r="3" fill="#ff7043"/><circle cx="14" cy="12" r="4" fill="#d84315"/><rect x="12" y="4" width="4" height="4" rx="1" fill="#ff7043"/></g>' },
    { id: 2010, name: "Timeline-Thin-Color", category: "development", svgContent: '<line x1="2" y1="12" x2="22" y2="12" stroke="#d84315" stroke-width="0.75"/><circle cx="12" cy="12" r="2" fill="#d84315"/>' },
    { id: 2011, name: "Timeline-Inverted-Color", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#d84315" rx="4"/><line x1="3" y1="12" x2="21" y2="12" stroke="#ffffff" stroke-width="2"/><circle cx="8" cy="12" r="3" fill="#ffffff"/><circle cx="16" cy="12" r="3" fill="#ffffff"/>' },

// 689. Toggle-Left
    { id: 2012, name: "Toggle-Left", category: "iot", svgContent: '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"/><circle cx="8" cy="12" r="3"/>' },
    { id: 2013, name: "Toggle-LeftThin", category: "iot", svgContent: '<g fill="none" stroke-width="0.5"><rect x="1" y="5" width="22" height="14" rx="7" ry="7"/><circle cx="8" cy="12" r="3"/></g>' },
    { id: 2014, name: "Toggle-LeftInverted", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><rect x="1" y="5" width="22" height="14" rx="7" ry="7"/><circle cx="8" cy="12" r="3"/></g>' },

// 690. Toggle-Right
    { id: 2015, name: "Toggle-Right", category: "iot", svgContent: '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"/><circle cx="16" cy="12" r="3"/>' },
    { id: 2016, name: "Toggle-RightThin", category: "iot", svgContent: '<g fill="none" stroke-width="0.5"><rect x="1" y="5" width="22" height="14" rx="7" ry="7"/><circle cx="16" cy="12" r="3"/></g>' },
    { id: 2017, name: "Toggle-RightInverted", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><rect x="1" y="5" width="22" height="14" rx="7" ry="7"/><circle cx="16" cy="12" r="3"/></g>' },

// 691. ToggleOff
    { id: 2018, name: "ToggleOff", category: "iot", svgContent: '<rect x="1" y="5" width="22" height="14" rx="7"/><circle cx="8" cy="12" r="5" fill="currentColor" opacity="0.9"/>' },
    { id: 2019, name: "ToggleOffThin", category: "iot", svgContent: '<g fill="none" stroke-width="0.5"><rect x="1" y="5" width="22" height="14" rx="7"/><circle cx="8" cy="12" r="5"/></g>' },
    { id: 2020, name: "ToggleOffInverted", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="1" y="5" width="22" height="14" rx="7" stroke="var(--ax-bg-inverse, white)" /><circle fill="var(--ax-bg-inverse, white)" cx="8" cy="12" r="5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 692. ToggleOn
    { id: 2021, name: "ToggleOn", category: "iot", svgContent: '<rect x="1" y="5" width="22" height="14" rx="7"/><circle cx="16" cy="12" r="5" fill="currentColor" opacity="0.9"/>' },
    { id: 2022, name: "ToggleOnThin", category: "iot", svgContent: '<g fill="none" stroke-width="0.5"><rect x="1" y="5" width="22" height="14" rx="7"/><circle cx="16" cy="12" r="5"/></g>' },
    { id: 2023, name: "ToggleOnInverted", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="1" y="5" width="22" height="14" rx="7" stroke="var(--ax-bg-inverse, white)" /><circle fill="var(--ax-bg-inverse, white)" cx="16" cy="12" r="5" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 693. Tool
    { id: 2024, name: "Tool", category: "development", svgContent: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>' },
    { id: 2025, name: "ToolThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></g>' },
    { id: 2026, name: "ToolInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></g>' },

// 694. Tool-Color
    { id: 2027, name: "Tool-Color", category: "objects", svgContent: '<defs><linearGradient id="toolGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#cfd8dc"/><stop offset="100%" stop-color="#546e7a"/></linearGradient></defs><g><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l4.3-4.3a4.2 4.2 0 0 0-5.9-5.9l-4.3 4.3z" fill="url(#toolGrad)"/><path d="M14.7 6.3L2 19a2.1 2.1 0 0 0 3 3l12.7-12.7" fill="none" stroke="#546e7a" stroke-width="2.5" stroke-linecap="round"/><rect x="2" y="19" width="3" height="3" rx="0.5" fill="#ffb300"/></g>' },
    { id: 2028, name: "Tool-Thin-Color", category: "objects", svgContent: '<line x1="3" y1="21" x2="21" y2="3" stroke="#546e7a" stroke-width="0.75"/>' },
    { id: 2029, name: "Tool-Inverted-Color", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#546e7a" rx="4"/><path d="M6 19L19 6M5 20s-2-2 0-4" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>' },

// 695. Tornado
    { id: 2030, name: "Tornado", category: "general", svgContent: '<path d="M21 4H3"/><path d="M18 8H6"/><path d="M19.5 12H4.5"/><path d="M16 16H8"/><path d="M12 20h-4"/><path d="M14 20h2"/>' },
    { id: 2031, name: "TornadoThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M21 4H3"/><path d="M18 8H6"/><path d="M19.5 12H4.5"/><path d="M16 16H8"/><path d="M12 20h-4"/><path d="M14 20h2"/></g>' },
    { id: 2032, name: "TornadoInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M21 4H3"/><path d="M18 8H6"/><path d="M19.5 12H4.5"/><path d="M16 16H8"/><path d="M12 20h-4"/><path d="M14 20h2"/></g>' },

// 696. Tractor-Color
    { id: 2033, name: "Tractor-Color", category: "general", svgContent: '<defs><linearGradient id="trcGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#4caf50"/><stop offset="100%" stop-color="#2e7d32"/></linearGradient></defs><g><rect x="4" y="10" width="8" height="6" fill="url(#trcGrad)" stroke="#2e7d32" stroke-width="1.5"/><circle cx="6" cy="20" r="3" fill="#37474f"/><circle cx="16" cy="20" r="3" fill="#37474f"/></g>' },
    { id: 2034, name: "Tractor-Thin-Color", category: "general", svgContent: '<rect x="5" y="11" width="6" height="4" fill="none" stroke="#2e7d32" stroke-width="0.75"/>' },
    { id: 2035, name: "Tractor-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#2e7d32" rx="4"/><rect x="5" y="11" width="6" height="4" fill="#ffffff"/>' },

// 697. Train-Color
    { id: 2036, name: "Train-Color", category: "ai", svgContent: '<defs><linearGradient id="trnGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#f44336"/><stop offset="100%" stop-color="#b71c1c"/></linearGradient></defs><g><rect x="4" y="8" width="16" height="10" rx="2" fill="url(#trnGrad)" stroke="#b71c1c" stroke-width="1.5"/><rect x="6" y="10" width="4" height="4" fill="#ffffff"/><circle cx="8" cy="20" r="2" fill="#455a64"/><circle cx="16" cy="20" r="2" fill="#455a64"/></g>' },
    { id: 2037, name: "Train-Thin-Color", category: "ai", svgContent: '<rect x="5" y="9" width="14" height="8" rx="1" fill="none" stroke="#b71c1c" stroke-width="0.75"/>' },
    { id: 2038, name: "Train-Inverted-Color", category: "ai", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#b71c1c" rx="4"/><rect x="5" y="9" width="14" height="8" rx="1" fill="#ffffff"/>' },

// 698. Tram-Color
    { id: 2039, name: "Tram-Color", category: "general", svgContent: '<defs><linearGradient id="trmGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#2196f3"/><stop offset="100%" stop-color="#1565c0"/></linearGradient></defs><g><rect x="4" y="6" width="16" height="12" rx="2" fill="url(#trmGrad)" stroke="#1565c0" stroke-width="1.5"/><line x1="4" y1="12" x2="20" y2="12" stroke="#ffffff" stroke-width="2"/></g>' },
    { id: 2040, name: "Tram-Thin-Color", category: "general", svgContent: '<rect x="5" y="7" width="14" height="10" rx="1" fill="none" stroke="#1565c0" stroke-width="0.75"/>' },
    { id: 2041, name: "Tram-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#1565c0" rx="4"/><rect x="5" y="7" width="14" height="10" rx="1" fill="#ffffff"/>' },

// 699. Transmission
    { id: 2042, name: "Transmission", category: "general", svgContent: '<circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="18" x2="16" y2="18"/><line x1="6" y1="8" x2="6" y2="16"/><line x1="18" y1="8" x2="18" y2="16"/><path d="M12 10v4"/>' },
    { id: 2043, name: "TransmissionThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="6" y1="8" x2="6" y2="16"/><path d="M12 10v4"/></g>' },
    { id: 2044, name: "TransmissionInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="6" cy="6" r="2"/><circle fill="var(--ax-bg-inverse, white)" cx="18" cy="6" r="2"/><circle fill="var(--ax-bg-inverse, white)" cx="6" cy="18" r="2"/><circle fill="var(--ax-bg-inverse, white)" cx="18" cy="18" r="2"/><line stroke="var(--ax-bg-inverse, white)" x1="8" y1="6" x2="16" y2="6"/><line stroke="var(--ax-bg-inverse, white)" x1="8" y1="18" x2="16" y2="18"/><line stroke="var(--ax-bg-inverse, white)" x1="6" y1="8" x2="6" y2="16"/><line stroke="var(--ax-bg-inverse, white)" x1="18" y1="8" x2="18" y2="16"/><path stroke="var(--ax-bg-inverse, white)" d="M12 10v4"/>' },

// 700. Trash
    { id: 2045, name: "Trash", category: "ui", svgContent: '<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>' },
    { id: 2046, name: "TrashThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></g>' },
    { id: 2047, name: "TrashInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><polyline points="3 6 5 6 21 6"/><path stroke="var(--ax-bg-inverse, white)" d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line stroke="var(--ax-bg-inverse, white)" x1="10" y1="11" x2="10" y2="17"/><line stroke="var(--ax-bg-inverse, white)" x1="14" y1="11" x2="14" y2="17"/>' },

// 701. Trash-2
    { id: 2048, name: "Trash-2", category: "ui", svgContent: '<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>' },
    { id: 2049, name: "Trash-2Thin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></g>' },
    { id: 2050, name: "Trash-2Inverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></g>' },

// 702. Trash-Color
    { id: 2051, name: "Trash-Color", category: "ui", svgContent: '<defs><linearGradient id="trashGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#e53935"/><stop offset="100%" stop-color="#b71c1c"/></linearGradient></defs><g fill="none" stroke="url(#trashGrad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></g>' },
    { id: 2052, name: "Trash-Thin-Color", category: "ui", svgContent: '<path d="M4 6h16M17 6v14H7V6M9 6V4h6v2" fill="none" stroke="#d32f2f" stroke-width="0.75"/>' },
    { id: 2053, name: "Trash-Inverted-Color", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#d32f2f" rx="4"/><path d="M5 6h14v13H5V6zm4-3h6v3H9V3z" fill="#ffffff"/>' },

// 703. Trash2
    { id: 2054, name: "Trash2", category: "ui", svgContent: '<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>' },
    { id: 2055, name: "Trash2Thin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></g>' },
    { id: 2056, name: "Trash2Inverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><polyline points="3 6 5 6 21 6"/><path stroke="var(--ax-bg-inverse, white)" d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>' },

// 704. TrashSolid
    { id: 2057, name: "TrashSolid", category: "ui", svgContent: '<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>' },
    { id: 2058, name: "TrashSolidThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></g>' },
    { id: 2059, name: "TrashSolidInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><polyline points="3 6 5 6 21 6"/><path stroke="var(--ax-bg-inverse, white)" d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="var(--ax-bg-inverse, white)" /><line stroke="var(--ax-bg-inverse, white)" x1="10" y1="11" x2="10" y2="17" /><line stroke="var(--ax-bg-inverse, white)" x1="14" y1="11" x2="14" y2="17" />' },

// 705. Tree-Color
    { id: 2060, name: "Tree-Color", category: "general", svgContent: '<defs><linearGradient id="treGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#81c784"/><stop offset="100%" stop-color="#2e7d32"/></linearGradient></defs><g><rect x="11" y="16" width="2" height="6" fill="#5d4037"/><path d="M12 2A6 6 0 0 0 6 8c0 3 3 5 6 9 3-4 6-6 6-9a6 6 0 0 0-6-6z" fill="url(#treGrad)"/></g>' },
    { id: 2061, name: "Tree-Thin-Color", category: "general", svgContent: '<path d="M12 3a5 5 0 0 0-5 5c0 2.5 2.5 4.5 5 8 2.5-3.5 5-5.5 5-5a5 5 0 0 0-5-5z" fill="none" stroke="#2e7d32" stroke-width="0.75"/>' },
    { id: 2062, name: "Tree-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#2e7d32" rx="4"/><path d="M12 4a5 5 0 0 0-5 5c0 2.5 2.5 4.5 5 8.5 2.5-4 5-6 5-8.5a5 5 0 0 0-5-5z" fill="#ffffff"/>' },

// 706. Tree-Small-Color
    { id: 2063, name: "Tree-Small-Color", category: "general", svgContent: '<defs><linearGradient id="trsGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#66bb6a"/><stop offset="100%" stop-color="#1b5e20"/></linearGradient></defs><g><path d="M12 2l7 10h-3l5 8H3l5-8H5z" fill="url(#trsGrad)" stroke="#1b5e20" stroke-width="1.5"/><rect x="11" y="20" width="2" height="2" fill="#5d4037"/></g>' },
    { id: 2064, name: "Tree-Small-Thin-Color", category: "general", svgContent: '<path d="M12 3l6 9h-2l4 7H4l4-7H6z" fill="none" stroke="#1b5e20" stroke-width="0.75"/>' },
    { id: 2065, name: "Tree-Small-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#1b5e20" rx="4"/><path d="M12 3l6 9h-2l4 7H4l4-7H6z" fill="#ffffff"/>' },

// 707. Trending-Down
    { id: 2066, name: "Trending-Down", category: "finance", svgContent: '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>' },
    { id: 2067, name: "Trending-DownThin", category: "finance", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></g>' },
    { id: 2068, name: "Trending-DownInverted", category: "finance", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></g>' },

// 708. Trending-Up
    { id: 2069, name: "Trending-Up", category: "finance", svgContent: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>' },
    { id: 2070, name: "Trending-UpThin", category: "finance", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></g>' },
    { id: 2071, name: "Trending-UpInverted", category: "finance", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></g>' },

// 709. TrendingDown
    { id: 2072, name: "TrendingDown", category: "finance", svgContent: '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>' },
    { id: 2073, name: "TrendingDownThin", category: "finance", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></g>' },
    { id: 2074, name: "TrendingDownInverted", category: "finance", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></g>' },

// 710. TrendingUp
    { id: 2075, name: "TrendingUp", category: "finance", svgContent: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>' },
    { id: 2076, name: "TrendingUpThin", category: "finance", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></g>' },
    { id: 2077, name: "TrendingUpInverted", category: "finance", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></g>' },

// 711. Trophy
    { id: 2078, name: "Trophy", category: "media", svgContent: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6m12 5h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16m-8-7v7m6-18H6v7a6 6 0 0 0 12 0V2z"/>' },
    { id: 2079, name: "TrophyThin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6m12 5h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16m-8-7v7m6-18H6v7a6 6 0 0 0 12 0V2z"/></g>' },
    { id: 2080, name: "TrophyInverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6m12 5h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16m-8-7v7m6-18H6v7a6 6 0 0 0 12 0V2z"/></g>' },

// 712. Trophy-Color
    { id: 2081, name: "Trophy-Color", category: "ui", svgContent: '<defs><linearGradient id="goldTr" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fff176"/><stop offset="60%" stop-color="#fbc02d"/><stop offset="100%" stop-color="#f57f17"/></linearGradient></defs><g><path d="M6 4h12v5c0 3.3-2.7 6-6 6s-6-2.7-6-6V4z" fill="url(#goldTr)"/><path d="M6 6H3v2c0 2 1.5 3 3 3V6zm12 0h3v2c0 2-1.5 3-3 3V6z" fill="#fbc02d"/><path d="M12 15v4m-4 3h8" stroke="#fbc02d" stroke-width="2" fill="none"/><rect x="7" y="20" width="10" height="2" rx="0.5" fill="#5d4037"/></g>' },
    { id: 2082, name: "Trophy-Thin-Color", category: "ui", svgContent: '<path d="M6 4h12v5c0 3.3-2.7 6-6 6s-6-2.7-6-6V4z" fill="none" stroke="#fbc02d" stroke-width="0.75"/>' },
    { id: 2083, name: "Trophy-Inverted-Color", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#fbc02d" rx="4"/><path d="M6 5h12v5c0 3 2.5 5 5.5 5S6 13 6 10V5z" fill="#ffffff"/><rect x="9" y="17" width="6" height="3" fill="#ffffff"/>' },

// 713. Truck-Delivery-Color
    { id: 2084, name: "Truck-Delivery-Color", category: "general", svgContent: '<defs><linearGradient id="trkGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#78909c"/><stop offset="100%" stop-color="#455a64"/></linearGradient></defs><g><rect x="2" y="10" width="16" height="8" rx="2" fill="url(#trkGrad)" stroke="#455a64" stroke-width="1.5"/><rect x="18" y="12" width="4" height="6" rx="1" fill="#455a64"/><circle cx="6" cy="20" r="2" fill="#37474f"/><circle cx="14" cy="20" r="2" fill="#37474f"/></g>' },
    { id: 2085, name: "Truck-Delivery-Thin-Color", category: "general", svgContent: '<rect x="3" y="11" width="14" height="6" rx="1" fill="none" stroke="#455a64" stroke-width="0.75"/>' },
    { id: 2086, name: "Truck-Delivery-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#455a64" rx="4"/><rect x="3" y="11" width="14" height="6" rx="1" fill="#ffffff"/>' },

// 714. Trumpet-Color
    { id: 2087, name: "Trumpet-Color", category: "general", svgContent: '<defs><linearGradient id="trpGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fff176"/><stop offset="100%" stop-color="#fbc02d"/></linearGradient></defs><g><path d="M4 14l16-8 2 2-16 8z" fill="url(#trpGrad)" stroke="#fbc02d" stroke-width="1.5"/><rect x="8" y="9" width="3" height="3" fill="#ffeb3b"/><rect x="12" y="7" width="3" height="3" fill="#ffeb3b"/></g>' },
    { id: 2088, name: "Trumpet-Thin-Color", category: "general", svgContent: '<path d="M5 13l15-7 1 1-15 7z" fill="none" stroke="#fbc02d" stroke-width="0.75"/>' },
    { id: 2089, name: "Trumpet-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#fbc02d" rx="4"/><path d="M5 13l15-7 1 1-15 7z" fill="#ffffff"/>' },

// 715. Tv
    { id: 2090, name: "Tv", category: "media", svgContent: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/>' },
    { id: 2091, name: "TvThin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></g>' },
    { id: 2092, name: "TvInverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></g>' },

// 716. Twitch
    { id: 2093, name: "Twitch", category: "brands", svgContent: '<rect x="3" y="2" width="18" height="20" rx="2"/><rect x="6" y="5" width="3" height="10"/><rect x="12" y="5" width="3" height="10"/>' },
    { id: 2094, name: "TwitchThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><rect x="3" y="2" width="18" height="20" rx="2"/><rect x="6" y="5" width="3" height="10"/><rect x="12" y="5" width="3" height="10"/></g>' },
    { id: 2095, name: "TwitchInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="3" y="2" width="18" height="20" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="6" y="5" width="3" height="10"/><rect fill="var(--ax-bg-inverse, white)" x="12" y="5" width="3" height="10"/>' },

// 717. Twitch2
    { id: 2096, name: "Twitch2", category: "brands", svgContent: '<rect x="3" y="2" width="4" height="16"/><rect x="9" y="2" width="4" height="16"/><rect x="15" y="7" width="4" height="11"/>' },
    { id: 2097, name: "Twitch2Thin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><rect x="3" y="2" width="4" height="16"/><rect x="9" y="2" width="4" height="16"/><rect x="15" y="7" width="4" height="11"/></g>' },
    { id: 2098, name: "Twitch2Inverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="3" y="2" width="4" height="16"/><rect fill="var(--ax-bg-inverse, white)" x="9" y="2" width="4" height="16"/><rect fill="var(--ax-bg-inverse, white)" x="15" y="7" width="4" height="11"/>' },

// 718. Twitch2-Color
    { id: 2099, name: "Twitch2-Color", category: "brands", svgContent: '<defs><linearGradient id="twitchPurple" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#a970ff"/><stop offset="100%" stop-color="#6441a5"/></linearGradient></defs><g><path d="M3 2th16l4 4v12h-6l-4 4h-4l-4-4H3V2z" fill="url(#twitchPurple)"/><rect x="16" y="7" width="2" height="6" fill="#ffffff"/><rect x="11" y="7" width="2" height="6" fill="#ffffff"/></g>' },
    { id: 2100, name: "Twitch2-Thin-Color", category: "brands", svgContent: '<defs><linearGradient id="twitchThinGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#bf94ff"/><stop offset="100%" stop-color="#7d5bbe"/></linearGradient></defs><g fill="none" stroke="url(#twitchThinGrad)" stroke-width="1"><path d="M3 2h16l4 4v12h-6l-4 4h-4l-4-4H3V2z"/><rect x="16" y="7" width="1" height="6"/><rect x="11" y="7" width="1" height="6"/></g>' },
    { id: 2101, name: "Twitch2-Inverted-Color", category: "brands", svgContent: '<defs><linearGradient id="twitchInv" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#6441a5"/><stop offset="100%" stop-color="#4b367c"/></linearGradient></defs><g><rect x="0" y="0" width="24" height="24" fill="url(#twitchInv)" rx="4"/><path d="M5 4h12l3 3v9h-4l-3 3h-3l-3-3H5V4z" fill="#ffffff"/><rect x="14" y="8" width="2" height="4" fill="url(#twitchInv)"/><rect x="10" y="8" width="2" height="4" fill="url(#twitchInv)"/></g>' },

// 719. Twitter
    { id: 2102, name: "Twitter", category: "brands", svgContent: '<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z"/>' },
    { id: 2103, name: "TwitterThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z"/></g>' },
    { id: 2104, name: "TwitterInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z"/>' },

// 720. Type
    { id: 2105, name: "Type", category: "general", svgContent: '<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20 x2="15 y2="20"/><line x1="12" y1="4 x2="12 y2="20"/>' },
    { id: 2106, name: "TypeThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20 x2="15 y2="20"/><line x1="12" y1="4 x2="12 y2="20"/></g>' },
    { id: 2107, name: "TypeInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><polyline points="4 7 4 4 20 4 20 7"/><line stroke="var(--ax-bg-inverse, white)" x1="9" y1="20 x2="15 y2="20"/><line stroke="var(--ax-bg-inverse, white)" x1="12" y1="4 x2="12 y2="20"/>' },

// 721. Type2
    { id: 2108, name: "Type2", category: "general", svgContent: '<polyline points="4 7h16M9 20h6M12 3v14"/><line x1="3" y1="20" x2="21" y2="20"/>' },
    { id: 2109, name: "Type2Thin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><polyline points="4 7h16M9 20h6M12 3v14"/><line x1="3" y1="20" x2="21" y2="20"/></g>' },
    { id: 2110, name: "Type2Inverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><polyline points="4 7h16M9 20h6M12 3v14"/><line stroke="var(--ax-bg-inverse, white)" x1="3" y1="20" x2="21" y2="20"/>' },

// 722. UFO-Color
    { id: 2111, name: "UFO-Color", category: "general", svgContent: '<defs><linearGradient id="ufoGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#81d4fa"/><stop offset="100%" stop-color="#0288d1"/></linearGradient></defs><g><ellipse cx="12" cy="12" rx="10" ry="4" fill="url(#ufoGrad)" stroke="#0288d1" stroke-width="1.5"/><circle cx="12" cy="10" r="3" fill="#ffffff" stroke="#0288d1" stroke-width="1.5"/></g>' },
    { id: 2112, name: "UFO-Thin-Color", category: "general", svgContent: '<ellipse cx="12" cy="12" rx="9" ry="3" fill="none" stroke="#0288d1" stroke-width="0.75"/>' },
    { id: 2113, name: "UFO-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#0288d1" rx="4"/><ellipse cx="12" cy="12" rx="9" ry="3" fill="#ffffff"/>' },

// 723. UFO-Mini-Color
    { id: 2114, name: "UFO-Mini-Color", category: "general", svgContent: '<defs><linearGradient id="ufmGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#81d4fa"/><stop offset="100%" stop-color="#0288d1"/></linearGradient></defs><g><ellipse cx="12" cy="12" rx="10" ry="4" fill="url(#ufmGrad)" stroke="#0288d1" stroke-width="1.5"/><circle cx="12" cy="10" r="3" fill="#ffffff" stroke="#0288d1" stroke-width="1.5"/></g>' },
    { id: 2115, name: "UFO-Mini-Thin-Color", category: "general", svgContent: '<ellipse cx="12" cy="12" rx="9" ry="3" fill="none" stroke="#0288d1" stroke-width="0.75"/>' },
    { id: 2116, name: "UFO-Mini-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#0288d1" rx="4"/><ellipse cx="12" cy="12" rx="9" ry="3" fill="#ffffff"/>' },

// 724. Umbrella
    { id: 2117, name: "Umbrella", category: "objects", svgContent: '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-7 7a3 3 0 0 1-5 0"/><line x1="12" y1="12" x2="12" y2="19"/>' },
    { id: 2118, name: "UmbrellaThin", category: "objects", svgContent: '<g fill="none" stroke-width="0.5"><path d="M23 12a11.05 11.05 0 0 0-22 0zm-7 7a3 3 0 0 1-5 0"/><line x1="12" y1="12" x2="12" y2="19"/></g>' },
    { id: 2119, name: "UmbrellaInverted", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M23 12a11.05 11.05 0 0 0-22 0zm-7 7a3 3 0 0 1-5 0"/><line x1="12" y1="12" x2="12" y2="19"/></g>' },

// 725. Umbrella-Color
    { id: 2120, name: "Umbrella-Color", category: "iot", svgContent: '<defs><linearGradient id="umbGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#ab47bc"/><stop offset="100%" stop-color="#7b1fa2"/></linearGradient></defs><g><path d="M23 12a11 11 0 0 0-22 0h22z" fill="url(#umbGrad)"/><path d="M12 12v7a2 2 0 0 0 4 0" fill="none" stroke="#4e342e" stroke-width="2.5" stroke-linecap="round"/><line x1="12" y1="12" x2="12" y2="2" stroke="#4e342e" stroke-width="2.5"/></g>' },
    { id: 2121, name: "Umbrella-Thin-Color", category: "iot", svgContent: '<path d="M22 12a10 10 0 0 0-20 0z" fill="none" stroke="#7b1fa2" stroke-width="0.75"/>' },
    { id: 2122, name: "Umbrella-Inverted-Color", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#7b1fa2" rx="4"/><path d="M3 13h18a9 9 0 0 0-18 0z" fill="#ffffff"/><line x1="12" y1="13" x2="12" y2="20" stroke="#ffffff" stroke-width="2"/>' },

// 726. Umbrella-Off
    { id: 2123, name: "Umbrella-Off", category: "objects", svgContent: '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-7 7a3 3 0 0 1-5 0"/><line x1="12" y1="12" x2="12" y2="19"/><line x1="2" y1="2" x2="22" y2="22"/>' },
    { id: 2124, name: "Umbrella-OffThin", category: "objects", svgContent: '<g fill="none" stroke-width="0.5"><path d="M23 12a11.05 11.05 0 0 0-22 0zm-7 7a3 3 0 0 1-5 0"/><line x1="12" y1="12" x2="12" y2="19"/><line x1="2" y1="2" x2="22" y2="22"/></g>' },
    { id: 2125, name: "Umbrella-OffInverted", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M23 12a11.05 11.05 0 0 0-22 0zm-7 7a3 3 0 0 1-5 0"/><line x1="12" y1="12" x2="12" y2="19"/><line x1="2" y1="2" x2="22" y2="22"/></g>' },

// 727. Umbrella-Rain
    { id: 2126, name: "Umbrella-Rain", category: "objects", svgContent: '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-7 7a3 3 0 0 1-5 0"/><line x1="12" y1="12" x2="12" y2="19"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="16" y1="3" x2="16" y2="5"/><line x1="8" y1="3" x2="8" y2="5"/>' },
    { id: 2127, name: "Umbrella-RainThin", category: "objects", svgContent: '<g fill="none" stroke-width="0.5"><path d="M23 12a11.05 11.05 0 0 0-22 0zm-7 7a3 3 0 0 1-5 0"/><line x1="12" y1="12" x2="12" y2="19"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="16" y1="3" x2="16" y2="5"/><line x1="8" y1="3" x2="8" y2="5"/></g>' },
    { id: 2128, name: "Umbrella-RainInverted", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M23 12a11.05 11.05 0 0 0-22 0zm-7 7a3 3 0 0 1-5 0"/><line x1="12" y1="12" x2="12" y2="19"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="16" y1="3" x2="16" y2="5"/><line x1="8" y1="3" x2="8" y2="5"/></g>' },

// 728. Umbrellas
    { id: 2129, name: "Umbrellas", category: "objects", svgContent: '<path d="M22 12a10.05 10.05 0 0 0-20 0zm-6 6a3 3 0 0 1-5 0"/><line x1="12" y1="12" x2="12" y2="19"/><path d="M15 8l-2-4 2-4-2 4-2-4 2 4z"/>' },
    { id: 2130, name: "UmbrellasThin", category: "objects", svgContent: '<g fill="none" stroke-width="0.5"><path d="M22 12a10.05 10.05 0 0 0-20 0zm-6 6a3 3 0 0 1-5 0"/><line x1="12" y1="12" x2="12" y2="19"/><path d="M15 8l-2-4 2-4-2 4-2-4 2 4z"/></g>' },
    { id: 2131, name: "UmbrellasInverted", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M22 12a10.05 10.05 0 0 0-20 0zm-6 6a3 3 0 0 1-5 0"/><line x1="12" y1="12" x2="12" y2="19"/><path d="M15 8l-2-4 2-4-2 4-2-4 2 4z"/></g>' },

// 729. Unlink
    { id: 2132, name: "Unlink", category: "general", svgContent: '<path d="M10 14l-2-2M14 10l2-2M6 3h4M14 3h4M18 9v4M6 13v4"/><circle cx="12" cy="12" r="1" fill="currentColor" opacity="0.9"/>' },
    { id: 2133, name: "UnlinkThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M10 14l-2-2M14 10l2-2M6 3h4M14 3h4M18 9v4M6 13v4"/><circle cx="12" cy="12" r="1"/></g>' },
    { id: 2134, name: "UnlinkInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M10 14l-2-2M14 10l2-2M6 3h4M14 3h4M18 9v4M6 13v4"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="1" fill="var(--ax-bg-inverse, white)" opacity="0.9"/>' },

// 730. Unlock
    { id: 2135, name: "Unlock", category: "ui", svgContent: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>' },
    { id: 2136, name: "UnlockThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></g>' },
    { id: 2137, name: "UnlockInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></g>' },

// 731. Unlock-Color
    { id: 2138, name: "Unlock-Color", category: "iot", svgContent: '<defs><linearGradient id="lockBodyUn" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffd54f"/><stop offset="100%" stop-color="#ffb300"/></linearGradient><linearGradient id="shackleGradUn" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#cfd8dc"/><stop offset="50%" stop-color="#b0bec5"/><stop offset="100%" stop-color="#78909c"/></linearGradient></defs><g><path d="M7 11V7a5 5 0 0 1 9.9-1" stroke="url(#shackleGradUn)" stroke-width="3" stroke-linecap="round" fill="none"/><rect x="3" y="11" width="18" height="11" rx="2" fill="url(#lockBodyUn)"/><circle cx="12" cy="16" r="2" fill="#5d4037"/><path d="M12 18v2" stroke="#5d4037" stroke-width="2" stroke-linecap="round"/><circle cx="9" cy="14" r="1" fill="#fff" opacity="0.4"/></g>' },
    { id: 2139, name: "Unlock-Thin-Color", category: "iot", svgContent: '<rect x="5" y="11" width="14" height="10" rx="1" fill="none" stroke="#558b2f" stroke-width="0.75"/>' },
    { id: 2140, name: "Unlock-Inverted-Color", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#558b2f" rx="4"/><rect x="5" y="11" width="14" height="10" rx="1" fill="#ffffff"/>' },

// 732. Upload
    { id: 2141, name: "Upload", category: "ui", svgContent: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 9 12 4 7 9"/><line x1="12" y1="4" x2="12" y2="15"/>' },
    { id: 2142, name: "UploadThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 9 12 4 7 9"/><line x1="12" y1="4" x2="12" y2="15"/></g>' },
    { id: 2143, name: "UploadInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 9 12 4 7 9"/><line stroke="var(--ax-bg-inverse, white)" x1="12" y1="4" x2="12" y2="15"/>' },

// 733. Upload-Color
    { id: 2144, name: "Upload-Color", category: "ui", svgContent: '<defs><linearGradient id="upArrow" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stop-color="#0288d1"/><stop offset="100%" stop-color="#29b6f6"/></linearGradient></defs><g><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" fill="none" stroke="#78909c" stroke-width="2.5" stroke-linecap="round"/><polyline points="17 8 12 3 7 8" fill="none" stroke="url(#upArrow)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="3" x2="12" y2="15" stroke="url(#upArrow)" stroke-width="3" stroke-linecap="round"/></g>' },

// 734. User
    { id: 2145, name: "User", category: "ui", svgContent: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>' },
    { id: 2146, name: "UserThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></g>' },
    { id: 2147, name: "UserInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></g>' },

// 735. User-Check
    { id: 2148, name: "User-Check", category: "ui", svgContent: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/>' },
    { id: 2149, name: "User-CheckThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></g>' },
    { id: 2150, name: "User-CheckInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></g>' },

// 736. User-Minus
    { id: 2151, name: "User-Minus", category: "ui", svgContent: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="23" y1="11" x2="17" y2="11"/>' },
    { id: 2152, name: "User-MinusThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="23" y1="11" x2="17" y2="11"/></g>' },
    { id: 2153, name: "User-MinusInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="23" y1="11" x2="17" y2="11"/></g>' },

// 737. User-Plus
    { id: 2154, name: "User-Plus", category: "ui", svgContent: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/>' },
    { id: 2155, name: "User-PlusThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></g>' },
    { id: 2156, name: "User-PlusInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></g>' },

// 738. User-X
    { id: 2157, name: "User-X", category: "ui", svgContent: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="18" y1="8" x2="23" y2="13"/><line x1="23" y1="8" x2="18" y2="13"/>' },
    { id: 2158, name: "User-XThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="18" y1="8" x2="23" y2="13"/><line x1="23" y1="8" x2="18" y2="13"/></g>' },
    { id: 2159, name: "User-XInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="18" y1="8" x2="23" y2="13"/><line x1="23" y1="8" x2="18" y2="13"/></g>' },

// 739. UserBlock
    { id: 2160, name: "UserBlock", category: "ui", svgContent: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="8" r="2"/><path d="M7 18c0-2 2-4 5-4s5 2 5 4M16 8l4 4M20 8l-4 4"/>' },
    { id: 2161, name: "UserBlockThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="8" r="2"/><path d="M7 18c0-2 2-4 5-4s5 2 5 4M16 8l4 4M20 8l-4 4"/></g>' },
    { id: 2162, name: "UserBlockInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="10"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="8" r="2"/><path stroke="var(--ax-bg-inverse, white)" d="M7 18c0-2 2-4 5-4s5 2 5 4M16 8l4 4M20 8l-4 4"/>' },

// 740. UserCircle
    { id: 2163, name: "UserCircle", category: "ui", svgContent: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="9" r="2.5"/><path d="M7 18c0-2.21 2.24-4 5-4s5 1.79 5 4"/>' },
    { id: 2164, name: "UserCircleThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="9" r="2.5"/><path d="M7 18c0-2.21 2.24-4 5-4s5 1.79 5 4"/></g>' },
    { id: 2165, name: "UserCircleInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="10"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="9" r="2.5"/><path stroke="var(--ax-bg-inverse, white)" d="M7 18c0-2.21 2.24-4 5-4s5 1.79 5 4"/>' },

// 741. Users
    { id: 2166, name: "Users", category: "ui", svgContent: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>' },
    { id: 2167, name: "UsersThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></g>' },
    { id: 2168, name: "UsersInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></g>' },

// 742. Video
    { id: 2169, name: "Video", category: "media", svgContent: '<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>' },
    { id: 2170, name: "VideoThin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></g>' },
    { id: 2171, name: "VideoInverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></g>' },

// 743. Video-Off
    { id: 2172, name: "Video-Off", category: "media", svgContent: '<path d="M10.66 6H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10l-3.33-2.5"/><path d="M16 16a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1.34"/><line x1="1" y1="1" x2="23" y2="23"/>' },
    { id: 2173, name: "Video-OffThin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><path d="M10.66 6H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10l-3.33-2.5"/><path d="M16 16a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1.34"/><line x1="1" y1="1" x2="23" y2="23"/></g>' },
    { id: 2174, name: "Video-OffInverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M10.66 6H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10l-3.33-2.5"/><path d="M16 16a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1.34"/><line x1="1" y1="1" x2="23" y2="23"/></g>' },

// 744. Vimeo
    { id: 2175, name: "Vimeo", category: "general", svgContent: '<circle cx="12" cy="12" r="10"/><path d="M9 9l4 3-4 3v-6zM18 7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1"/>' },
    { id: 2176, name: "VimeoThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><path d="M9 9l4 3-4 3v-6zM18 7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1"/></g>' },
    { id: 2177, name: "VimeoInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="10"/><path stroke="var(--ax-bg-inverse, white)" d="M9 9l4 3-4 3v-6zM18 7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1"/>' },

// 745. Violin-Color
    { id: 2178, name: "Violin-Color", category: "general", svgContent: '<defs><linearGradient id="vlnGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#d7ccc8"/><stop offset="100%" stop-color="#5d4037"/></linearGradient></defs><g><path d="M12 2c-3 0-5 2-5 5v10c0 3 2 5 5 5s5-2 5-5V7c0-3-2-5-5-5z" fill="url(#vlnGrad)" stroke="#5d4037" stroke-width="1.5"/><path d="M12 7v10M10 5l4 1" stroke="#3e2723" stroke-width="1.5"/></g>' },
    { id: 2179, name: "Violin-Thin-Color", category: "general", svgContent: '<path d="M13 3c-2 0-4 1-4 4v10c0 2 2 4 4 4s4-2 4-4V7c0-2-2-4-4-4z" fill="none" stroke="#5d4037" stroke-width="0.75"/>' },
    { id: 2180, name: "Violin-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#5d4037" rx="4"/><path d="M13 3c-2 0-4 1-4 4v10c0 2 2 4 4 4s4-2 4-4V7c0-2-2-4-4-4z" fill="#ffffff"/>' },

// 746. VirtualReality
    { id: 2181, name: "VirtualReality", category: "general", svgContent: '<path d="M23 11.5a1.5 1.5 0 0 1-3 0v-1a6 6 0 0 0-12 0v1a1.5 1.5 0 0 1-3 0v-1A9 9 0 0 1 23 12.5v-1z"/><circle cx="9" cy="13" r="2"/><circle cx="15" cy="13" r="2"/>' },
    { id: 2182, name: "VirtualRealityThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M23 11.5a1.5 1.5 0 0 1-3 0v-1a6 6 0 0 0-12 0v1a1.5 1.5 0 0 1-3 0v-1A9 9 0 0 1 23 12.5v-1z"/><circle cx="9" cy="13" r="2"/><circle cx="15" cy="13" r="2"/></g>' },
    { id: 2183, name: "VirtualRealityInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M23 11.5a1.5 1.5 0 0 1-3 0v-1a6 6 0 0 0-12 0v1a1.5 1.5 0 0 1-3 0v-1A9 9 0 0 1 23 12.5v-1z"/><circle fill="var(--ax-bg-inverse, white)" cx="9" cy="13" r="2"/><circle fill="var(--ax-bg-inverse, white)" cx="15" cy="13" r="2"/>' },

// 747. Visa
    { id: 2184, name: "Visa", category: "brands", svgContent: '<rect x="2" y="4" width="20" height="16" rx="2"/><rect x="4" y="14" width="16" height="2"/>' },
    { id: 2185, name: "VisaThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><rect x="2" y="4" width="20" height="16" rx="2"/><rect x="4" y="14" width="16" height="2"/></g>' },
    { id: 2186, name: "VisaInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="2" y="4" width="20" height="16" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="4" y="14" width="16" height="2"/>' },

// 748. Volume
    { id: 2187, name: "Volume", category: "media", svgContent: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>' },
    { id: 2188, name: "VolumeThin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></g>' },
    { id: 2189, name: "VolumeInverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></g>' },

// 749. Volume-1
    { id: 2190, name: "Volume-1", category: "media", svgContent: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>' },
    { id: 2191, name: "Volume-1Thin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></g>' },
    { id: 2192, name: "Volume-1Inverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></g>' },

// 750. Volume-2
    { id: 2193, name: "Volume-2", category: "media", svgContent: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>' },
    { id: 2194, name: "Volume-2Thin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></g>' },
    { id: 2195, name: "Volume-2Inverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></g>' },

// 751. Volume-2-Color
    { id: 2196, name: "Volume-2-Color", category: "ui", svgContent: '<g><path d="M11 5L6 9H2v6h4l5 4V5z" fill="#78909c"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14" fill="none" stroke="#29b6f6" stroke-width="2" stroke-linecap="round"/></g>' },
    { id: 2197, name: "Volume-2-Thin-Color", category: "ui", svgContent: '<path d="M15 9a3 3 0 0 1 0 6" fill="none" stroke="#29b6f6" stroke-width="0.75"/>' },
    { id: 2198, name: "Volume-2-Inverted-Color", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#29b6f6" rx="4"/><path d="M9 5L5 9H2v6h3l4 4V5z" fill="#ffffff"/><path d="M13 9c1.5 0 2.5 1 2.5 2.5s-1 2.5-2.5 2.5" fill="none" stroke="#ffffff" stroke-width="1.5"/>' },

// 752. Volume-Color
    { id: 2199, name: "Volume-Color", category: "ui", svgContent: '<defs><linearGradient id="volGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#78909c"/><stop offset="100%" stop-color="#455a64"/></linearGradient></defs><g><path d="M11 5L6 9H2v6h4l5 4V5z" fill="url(#volGrad)"/></g>' },
    { id: 2200, name: "Volume-Thin-Color", category: "ui", svgContent: '<path d="M11 5L6 9H2v6h4l5 4V5z" fill="none" stroke="#455a64" stroke-width="0.75"/>' },
    { id: 2201, name: "Volume-Inverted-Color", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#455a64" rx="4"/><path d="M12 5L7 9H4v6h3l5 4V5z" fill="#ffffff"/>' },

// 753. Volume-Down
    { id: 2202, name: "Volume-Down", category: "media", svgContent: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="21" y1="12" x2="15" y2="12"/>' },
    { id: 2203, name: "Volume-DownThin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="21" y1="12" x2="15" y2="12"/></g>' },
    { id: 2204, name: "Volume-DownInverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="21" y1="12" x2="15" y2="12"/></g>' },

// 754. Volume-Up
    { id: 2205, name: "Volume-Up", category: "media", svgContent: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>' },
    { id: 2206, name: "Volume-UpThin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></g>' },
    { id: 2207, name: "Volume-UpInverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></g>' },

// 755. Volume-X
    { id: 2208, name: "Volume-X", category: "media", svgContent: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>' },
    { id: 2209, name: "Volume-XThin", category: "media", svgContent: '<g fill="none" stroke-width="0.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></g>' },
    { id: 2210, name: "Volume-XInverted", category: "media", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></g>' },

// 756. Volume-X-Color
    { id: 2211, name: "Volume-X-Color", category: "ui", svgContent: '<g><path d="M11 5L6 9H2v6h4l5 4V5z" fill="#78909c"/><line x1="23" y1="9" x2="17" y2="15" stroke="#ef5350" stroke-width="2.5" stroke-linecap="round"/><line x1="17" y1="9" x2="23" y2="15" stroke="#ef5350" stroke-width="2.5" stroke-linecap="round"/></g>' },
    { id: 2212, name: "Volume-X-Thin-Color", category: "ui", svgContent: '<line x1="22" y1="10" x2="18" y2="14" stroke="#ef5350" stroke-width="0.75"/>' },
    { id: 2213, name: "Volume-X-Inverted-Color", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#ef5350" rx="4"/><path d="M10 5L6 9H3v6h3l4 4V5z" fill="#ffffff"/>' },

// 757. Wallet
    { id: 2214, name: "Wallet", category: "finance", svgContent: '<path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/><path d="M4 6v12c0 1.1.9 2 2 2h14v-8H4z"/><circle cx="18" cy="15" r="1"/>' },
    { id: 2215, name: "WalletThin", category: "finance", svgContent: '<g fill="none" stroke-width="0.5"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/><path d="M4 6v12c0 1.1.9 2 2 2h14v-8H4z"/><circle cx="18" cy="15" r="1"/></g>' },
    { id: 2216, name: "WalletInverted", category: "finance", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/><path d="M4 6v12c0 1.1.9 2 2 2h14v-8H4z"/><circle cx="18" cy="15" r="1"/></g>' },

// 758. Wallet-Color
    { id: 2217, name: "Wallet-Color", category: "finance", svgContent: '<defs><linearGradient id="walletBody" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8d6e63"/><stop offset="100%" stop-color="#4e342e"/></linearGradient></defs><g><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" fill="#a1887f"/><path d="M4 6v12c0 1.1.9 2 2 2h14v-8H4z" fill="url(#walletBody)"/><path d="M15 10h6v6h-6z" fill="#5d4037" rx="1"/><circle cx="18" cy="13" r="1.5" fill="#ffd54f"/></g>' },

// 759. Wallet2
    { id: 2218, name: "Wallet2", category: "finance", svgContent: '<rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22M20 10v8"/>' },
    { id: 2219, name: "Wallet2Thin", category: "finance", svgContent: '<g fill="none" stroke-width="0.5"><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22M20 10v8"/></g>' },
    { id: 2220, name: "Wallet2Inverted", category: "finance", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="1" y="4" width="22" height="16" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M1 10h22M20 10v8"/>' },

// 760. Wand2
    { id: 2221, name: "Wand2", category: "general", svgContent: '<path d="M15 4V2m0 2a2 2 0 1 0 0 4m0-4a2 2 0 0 1 0 4m6-11l-3.5 3.5m3.5-3.5a2 2 0 1 0-3.5 3.5m3.5-3.5a2 2 0 0 1-3.5 3.5M9 11l3.5-3.5m-3.5 3.5a2 2 0 1 1 3.5-3.5m-3.5 3.5a2 2 0 0 0 3.5-3.5m-9 1l-3.5 3.5m3.5-3.5a2 2 0 1 0-3.5 3.5m3.5-3.5a2 2 0 0 1-3.5 3.5M3 11l3.5 3.5m-3.5-3.5a2 2 0 1 1 3.5 3.5m-3.5-3.5a2 2 0 0 0 3.5 3.5m18 11l-3.5-3.5m3.5 3.5a2 2 0 1 0-3.5-3.5m3.5 3.5a2 2 0 0 1-3.5-3.5m-9-1l3.5-3.5m-3.5 3.5a2 2 0 1 1 3.5-3.5m-3.5 3.5a2 2 0 0 0 3.5-3.5"/>' },
    { id: 2222, name: "Wand2Thin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M15 4V2m0 2a2 2 0 1 0 0 4m0-4a2 2 0 0 1 0 4m6-11l-3.5 3.5m3.5-3.5a2 2 0 1 0-3.5 3.5m3.5-3.5a2 2 0 0 1-3.5 3.5M9 11l3.5-3.5m-3.5 3.5a2 2 0 1 1 3.5-3.5m-3.5 3.5a2 2 0 0 0 3.5-3.5m-9 1l-3.5 3.5m3.5-3.5a2 2 0 1 0-3.5 3.5m3.5-3.5a2 2 0 0 1-3.5 3.5M3 11l3.5 3.5m-3.5-3.5a2 2 0 1 1 3.5 3.5m-3.5-3.5a2 2 0 0 0 3.5 3.5m18 11l-3.5-3.5m3.5 3.5a2 2 0 1 0-3.5-3.5m3.5 3.5a2 2 0 0 1-3.5-3.5m-9-1l3.5-3.5m-3.5 3.5a2 2 0 1 1 3.5-3.5m-3.5 3.5a2 2 0 0 0 3.5-3.5"/></g>' },
    { id: 2223, name: "Wand2Inverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M15 4V2m0 2a2 2 0 1 0 0 4m0-4a2 2 0 0 1 0 4m6-11l-3.5 3.5m3.5-3.5a2 2 0 1 0-3.5 3.5m3.5-3.5a2 2 0 0 1-3.5 3.5M9 11l3.5-3.5m-3.5 3.5a2 2 0 1 1 3.5-3.5m-3.5 3.5a2 2 0 0 0 3.5-3.5m-9 1l-3.5 3.5m3.5-3.5a2 2 0 1 0-3.5 3.5m3.5-3.5a2 2 0 0 1-3.5 3.5M3 11l3.5 3.5m-3.5-3.5a2 2 0 1 1 3.5 3.5m-3.5-3.5a2 2 0 0 0 3.5 3.5m18 11l-3.5-3.5m3.5 3.5a2 2 0 1 0-3.5-3.5m3.5 3.5a2 2 0 0 1-3.5-3.5m-9-1l3.5-3.5m-3.5 3.5a2 2 0 1 1 3.5-3.5m-3.5 3.5a2 2 0 0 0 3.5-3.5"/>' },

// 761. Watch
    { id: 2224, name: "Watch", category: "iot", svgContent: '<circle cx="12" cy="12" r="7"/><polyline points="12 9 12 12 14 13"/><path d="M12 5V1m0 22v-4"/>' },
    { id: 2225, name: "WatchThin", category: "iot", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="7"/><polyline points="12 9 12 12 14 13"/><path d="M12 5V1m0 22v-4"/></g>' },
    { id: 2226, name: "WatchInverted", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><circle cx="12" cy="12" r="7"/><polyline points="12 9 12 12 14 13"/><path d="M12 5V1m0 22v-4"/></g>' },

// 762. Water-Color
    { id: 2227, name: "Water-Color", category: "general", svgContent: '<defs><linearGradient id="wtrGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#4fc3f7"/><stop offset="100%" stop-color="#0288d1"/></linearGradient></defs><g><path d="M2 14c4-4 8 4 10 0s6-8 10 0" fill="none" stroke="#0288d1" stroke-width="3" stroke-linecap="round"/><path d="M2 18c4-4 8 4 10 0s6-8 10 0" fill="none" stroke="#0288d1" stroke-width="3" stroke-linecap="round"/></g>' },
    { id: 2228, name: "Water-Thin-Color", category: "general", svgContent: '<path d="M3 15c3-3 7 3 9 0s5-6 9 0" fill="none" stroke="#0288d1" stroke-width="0.75"/>' },
    { id: 2229, name: "Water-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#0288d1" rx="4"/><path d="M3 15c3-3 7 3 9 0s5-6 9 0" fill="none" stroke="#ffffff" stroke-width="1.5"/>' },

// 763. Water-Drop-Color
    { id: 2230, name: "Water-Drop-Color", category: "general", svgContent: '<defs><linearGradient id="drpGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#4fc3f7"/><stop offset="100%" stop-color="#0288d1"/></linearGradient></defs><g><path d="M12 2a8 8 0 0 0-8 8c0 4 8 12 8 12s8-8 8-12a8 8 0 0 0-8-8z" fill="url(#drpGrad)" stroke="#0288d1" stroke-width="1.5"/></g>' },
    { id: 2231, name: "Water-Drop-Thin-Color", category: "general", svgContent: '<path d="M12 3a7 7 0 0 0-7 7c0 3 7 10 7 10s7-7 7-10a7 7 0 0 0-7-7z" fill="none" stroke="#0288d1" stroke-width="0.75"/>' },
    { id: 2232, name: "Water-Drop-Inverted-Color", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#0288d1" rx="4"/><path d="M12 3a7 7 0 0 0-7 7c0 3 7 10 7 10s7-7 7-10a7 7 0 0 0-7-7z" fill="#ffffff"/>' },

// 764. WeChat
    { id: 2233, name: "WeChat", category: "general", svgContent: '<path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.33 3 .9 4.32L2 22l6.26-2.36C10.6 20.97 11.29 21 12 21c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.06 0-2.09-.18-3.08-.5l-.98-.32-3.68 1.39 1.04-3.8-.32-.98C4.18 14.09 4 13.06 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>' },
    { id: 2234, name: "WeChatThin", category: "general", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.33 3 .9 4.32L2 22l6.26-2.36C10.6 20.97 11.29 21 12 21c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.06 0-2.09-.18-3.08-.5l-.98-.32-3.68 1.39 1.04-3.8-.32-.98C4.18 14.09 4 13.06 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/></g>' },
    { id: 2235, name: "WeChatInverted", category: "general", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M12 2C6.48 2 2 6.48 2 12c0 1.54.33 3 .9 4.32L2 22l6.26-2.36C10.6 20.97 11.29 21 12 21c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.06 0-2.09-.18-3.08-.5l-.98-.32-3.68 1.39 1.04-3.8-.32-.98C4.18 14.09 4 13.06 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>' },

// 765. WhatsApp
    { id: 2236, name: "WhatsApp", category: "brands", svgContent: '<circle cx="12" cy="12" r="10" fill="currentColor"/><path d="M8 14s1 2 4 3 4-1 4-1M7 7c.5-2.5 2-4 5-4 3 0 4 1.5 4.5 4" stroke-width="1.5" stroke="white" stroke-linecap="round"/>' },
    { id: 2237, name: "WhatsAppThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1 2 4 3 4-1 4-1M7 7c.5-2.5 2-4 5-4 3 0 4 1.5 4.5 4" stroke="white" stroke-linecap="round"/></g>' },
    { id: 2238, name: "WhatsAppInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="10" fill="var(--ax-bg-inverse, white)"/><path stroke="var(--ax-bg-inverse, white)" d="M8 14s1 2 4 3 4-1 4-1M7 7c.5-2.5 2-4 5-4 3 0 4 1.5 4.5 4" stroke="var(--ax-bg-inverse, white)" stroke-linecap="round"/>' },

// 766. Wifi
    { id: 2239, name: "Wifi", category: "development", svgContent: '<path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>' },
    { id: 2240, name: "WifiThin", category: "development", svgContent: '<g fill="none" stroke-width="0.5"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></g>' },
    { id: 2241, name: "WifiInverted", category: "development", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></g>' },

// 767. Wifi-Color
    { id: 2242, name: "Wifi-Color", category: "ui", svgContent: '<defs><linearGradient id="wifiGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#66bb6a"/><stop offset="100%" stop-color="#2e7d32"/></linearGradient></defs><g fill="none" stroke="url(#wifiGrad)" stroke-width="2.5" stroke-linecap="round"><path d="M5 8.55a12 12 0 0 1 14 0M1.42 4.97a17 17 0 0 1 21.16 0M8.53 12.11a7 7 0 0 1 6.94 0"/><circle cx="12" cy="17" r="1" fill="#2e7d32" stroke="none"/></g>' },
    { id: 2243, name: "Wifi-Thin-Color", category: "ui", svgContent: '<circle cx="12" cy="18" r="1" fill="#2e7d32"/>' },
    { id: 2244, name: "Wifi-Inverted-Color", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#2e7d32" rx="4"/><path d="M4 9a11 11 0 0 1 16 0M7 12a7 7 0 0 1 10 0" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>' },

// 768. Wifi-Off-Color
    { id: 2245, name: "Wifi-Off-Color", category: "ui", svgContent: '<g fill="none" stroke="#b0bec5" stroke-width="2.5" stroke-linecap="round"><path d="M1 1l22 22" stroke="#ef5350"/><path d="M16.72 11.06A7 7 0 0 0 8.53 12.1M5 8.55a12 12 0 0 1 11.33-1.55"/></g>' },
    { id: 2246, name: "Wifi-Off-Thin-Color", category: "ui", svgContent: '<line x1="2" y1="2" x2="22" y2="22" stroke="#ef5350" stroke-width="0.75"/>' },
    { id: 2247, name: "Wifi-Off-Inverted-Color", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#37474f" rx="4"/><line x1="3" y1="3" x2="21" y2="21" stroke="#ffffff" stroke-width="2"/>' },

// 769. Wind
    { id: 2248, name: "Wind", category: "weather", svgContent: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>' },
    { id: 2249, name: "WindThin", category: "weather", svgContent: '<g fill="none" stroke-width="0.5"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></g>' },
    { id: 2250, name: "WindInverted", category: "weather", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></g>' },

// 770. Wind-Color
    { id: 2251, name: "Wind-Color", category: "iot", svgContent: '<defs><linearGradient id="wndGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#e0f7fa"/><stop offset="100%" stop-color="#00acc1"/></linearGradient></defs><g fill="none" stroke="url(#wndGrad)" stroke-width="2.5" stroke-linecap="round"><path d="M9.5 8H2m16.5 0A2.5 2.5 0 1 0 16 5.5M6 12h16M14 16h-12m17 0a2.5 2.5 0 1 1-2 4.5"/></g>' },
    { id: 2252, name: "Wind-Thin-Color", category: "iot", svgContent: '<path d="M2 12h18" fill="none" stroke="#00acc1" stroke-width="0.75"/>' },
    { id: 2253, name: "Wind-Inverted-Color", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#00acc1" rx="4"/><path d="M3 9h12M2 13h17M4 17h10" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>' },

// 771. Window-Color
    { id: 2254, name: "Window-Color", category: "iot", svgContent: '<defs><linearGradient id="winGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4fc3f7"/><stop offset="100%" stop-color="#0288d1"/></linearGradient></defs><g><rect x="3" y="3" width="18" height="18" rx="2" fill="url(#winGrad)" stroke="#455a64" stroke-width="2"/><line x1="12" y1="3" x2="12" y2="21" stroke="#455a64" stroke-width="2"/><line x1="3" y1="12" x2="21" y2="12" stroke="#455a64" stroke-width="2"/></g>' },
    { id: 2255, name: "Window-Thin-Color", category: "iot", svgContent: '<rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="#0288d1" stroke-width="0.75"/><line x1="12" y1="3" x2="12" y2="21" stroke="#0288d1" stroke-width="0.5"/>' },
    { id: 2256, name: "Window-Inverted-Color", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#0288d1" rx="4"/><rect x="5" y="5" width="6" height="6" fill="#ffffff"/><rect x="13" y="5" width="6" height="6" fill="#ffffff"/><rect x="5" y="13" width="6" height="6" fill="#ffffff"/><rect x="13" y="13" width="6" height="6" fill="#ffffff"/>' },

// 772. Window-Maximize-Color
    { id: 2257, name: "Window-Maximize-Color", category: "ui", svgContent: '<defs><linearGradient id="wmxGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#cfd8dc"/><stop offset="100%" stop-color="#78909c"/></linearGradient></defs><g><rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="url(#wmxGrad)" stroke-width="2"/><path d="M3 8h18" stroke="#78909c" stroke-width="1.5"/><rect x="6" y="11" width="7" height="4" fill="#42a5f5"/><polygon points="18 10 18 13 15 10" fill="#78909c"/></g>' },
    { id: 2258, name: "Window-Maximize-Thin-Color", category: "ui", svgContent: '<rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="#78909c" stroke-width="0.75"/><rect x="6" y="11" width="4" height="4" fill="none" stroke="#78909c" stroke-width="0.5"/>' },
    { id: 2259, name: "Window-Maximize-Inverted-Color", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#78909c" rx="4"/><rect x="4" y="4" width="16" height="16" rx="1" fill="#ffffff"/><rect x="4" y="4" width="16" height="4" fill="#78909c"/><rect x="7" y="11" width="10" height="6" fill="none" stroke="#78909c" stroke-width="1.5"/>' },

// 773. Window-Minimize-Color
    { id: 2260, name: "Window-Minimize-Color", category: "ui", svgContent: '<defs><linearGradient id="wmnGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#cfd8dc"/><stop offset="100%" stop-color="#78909c"/></linearGradient></defs><g><rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="url(#wmnGrad)" stroke-width="2"/><path d="M3 8h18" stroke="#78909c" stroke-width="1.5"/><line x1="6" y1="15" x2="12" y2="15" stroke="#ff7043" stroke-width="2" stroke-linecap="round"/></g>' },
    { id: 2261, name: "Window-Minimize-Thin-Color", category: "ui", svgContent: '<rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="#78909c" stroke-width="0.75"/><line x1="6" y1="15" x2="11" y2="15" stroke="#78909c" stroke-width="0.5"/>' },
    { id: 2262, name: "Window-Minimize-Inverted-Color", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#78909c" rx="4"/><rect x="4" y="4" width="16" height="16" rx="1" fill="#ffffff"/><line x1="7" y1="14" x2="13" y2="14" stroke="#78909c" stroke-width="2"/>' },

// 774. Window-Restore-Color
    { id: 2263, name: "Window-Restore-Color", category: "iot", svgContent: '<defs><linearGradient id="wrGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#90caf9"/><stop offset="100%" stop-color="#42a5f5"/></linearGradient></defs><g stroke="#42a5f5" fill="none" stroke-width="1.5"><rect x="7" y="7" width="14" height="14" rx="1" stroke="url(#wrGrad)" stroke-width="2"/><path d="M7 11H3v10h10v-4" opacity="0.6"/></g>' },
    { id: 2264, name: "Window-Restore-Thin-Color", category: "iot", svgContent: '<rect x="8" y="8" width="13" height="13" rx="1" fill="none" stroke="#42a5f5" stroke-width="0.75"/><path d="M8 12H4v9h9v-4" fill="none" stroke="#42a5f5" stroke-width="0.5"/>' },
    { id: 2265, name: "Window-Restore-Inverted-Color", category: "iot", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#42a5f5" rx="4"/><rect x="4" y="4" width="11" height="11" fill="#ffffff"/><rect x="9" y="9" width="11" height="11" fill="#ffffff" opacity="0.8" stroke="#42a5f5" stroke-width="1.5"/>' },

// 775. WindowMaximize
    { id: 2266, name: "WindowMaximize", category: "objects", svgContent: '<rect x="3" y="3" width="18" height="18" rx="1"/><line x1="3" y1="8" x2="21" y2="8"/><polyline points="15 3 21 3 21 9"/>' },
    { id: 2267, name: "WindowMaximizeThin", category: "objects", svgContent: '<g fill="none" stroke-width="0.5"><rect x="3" y="3" width="18" height="18" rx="1"/><line x1="3" y1="8" x2="21" y2="8"/><polyline points="15 3 21 3 21 9"/></g>' },
    { id: 2268, name: "WindowMaximizeInverted", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="3" y="3" width="18" height="18" rx="1"/><line stroke="var(--ax-bg-inverse, white)" x1="3" y1="8" x2="21" y2="8"/><polyline points="15 3 21 3 21 9"/>' },

// 776. WindowMinimize
    { id: 2269, name: "WindowMinimize", category: "objects", svgContent: '<rect x="2" y="2" width="20" height="20" rx="2"/><line x1="2" y1="7" x2="22" y2="7"/><line x1="7" y1="16" x2="17" y2="16"/>' },
    { id: 2270, name: "WindowMinimizeThin", category: "objects", svgContent: '<g fill="none" stroke-width="0.5"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="2" y1="7" x2="22" y2="7"/><line x1="7" y1="16" x2="17" y2="16"/></g>' },
    { id: 2271, name: "WindowMinimizeInverted", category: "objects", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="2" y="2" width="20" height="20" rx="2"/><line stroke="var(--ax-bg-inverse, white)" x1="2" y1="7" x2="22" y2="7"/><line stroke="var(--ax-bg-inverse, white)" x1="7" y1="16" x2="17" y2="16"/>' },

// 777. Wine
    { id: 2272, name: "Wine", category: "food", svgContent: '<path d="M21 21H3"/><path d="M12 21V10"/><path d="M19 10H5"/><path d="M18 10L12 2 6 10z"/>' },
    { id: 2273, name: "WineThin", category: "food", svgContent: '<g fill="none" stroke-width="0.5"><path d="M21 21H3"/><path d="M12 21V10"/><path d="M19 10H5"/><path d="M18 10L12 2 6 10z"/></g>' },
    { id: 2274, name: "WineInverted", category: "food", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M21 21H3"/><path d="M12 21V10"/><path d="M19 10H5"/><path d="M18 10L12 2 6 10z"/></g>' },

// 778. Wine-Color
    { id: 2275, name: "Wine-Color", category: "food", svgContent: '<defs><linearGradient id="wineGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ff1744"/><stop offset="100%" stop-color="#880e4f"/></linearGradient></defs><g><path d="M12 15v7M8 22h8" stroke="#880e4f" stroke-width="2" stroke-linecap="round"/><path d="M6 3h12v6c0 3.3-2.7 6-6 6s-6-2.7-6-6V3z" fill="url(#wineGrad)"/><path d="M6 7h12" stroke="#ffffff" opacity="0.4" stroke-width="1.5"/></g>' },
    { id: 2276, name: "Wine-Thin-Color", category: "food", svgContent: '<path d="M6 3h12v6c0 3.3-2.7 6-6 6s-6-2.7-6-6V3z" fill="none" stroke="#880e4f" stroke-width="0.75"/>' },
    { id: 2277, name: "Wine-Inverted-Color", category: "food", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#880e4f" rx="4"/><path d="M7 4h10v5c0 2.8-2.2 5-5 5s-5-2.2-5-5V4z" fill="#ffffff"/><path d="M12 14v6M9 20h6" stroke="#ffffff" stroke-width="1.5"/>' },

// 779. Wine-Glass
    { id: 2278, name: "Wine-Glass", category: "food", svgContent: '<path d="M8 22h8"/><path d="M12 22V10"/><path d="M20 10c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 2.5 1.2 4.7 3 6.1"/>' },
    { id: 2279, name: "Wine-GlassThin", category: "food", svgContent: '<g fill="none" stroke-width="0.5"><path d="M8 22h8"/><path d="M12 22V10"/><path d="M20 10c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 2.5 1.2 4.7 3 6.1"/></g>' },
    { id: 2280, name: "Wine-GlassInverted", category: "food", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M8 22h8"/><path d="M12 22V10"/><path d="M20 10c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 2.5 1.2 4.7 3 6.1"/></g>' },

// 780. X
    { id: 2281, name: "X", category: "brands", svgContent: '<path d="M4 4l16 16M20 4L4 20" stroke-linecap="round"/>' },
    { id: 2282, name: "XThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><path d="M4 4l16 16M20 4L4 20" stroke-linecap="round"/></g>' },
    { id: 2283, name: "XInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path stroke="var(--ax-bg-inverse, white)" d="M4 4l16 16M20 4L4 20" stroke="var(--ax-bg-inverse, white)" stroke-linecap="round"/>' },

// 781. X-Circle
    { id: 2284, name: "X-Circle", category: "brands", svgContent: '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>' },
    { id: 2285, name: "X-CircleThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></g>' },
    { id: 2286, name: "X-CircleInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></g>' },

// 782. X-Circle-Color
    { id: 2287, name: "X-Circle-Color", category: "ui", svgContent: '<defs><linearGradient id="xCirc" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#e57373"/><stop offset="100%" stop-color="#c62828"/></linearGradient></defs><g><circle cx="12" cy="12" r="10" fill="url(#xCirc)"/><line x1="15" y1="9" x2="9" y2="15" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/><line x1="9" y1="9" x2="15" y2="15" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/></g>' },

// 783. X-Color
    { id: 2288, name: "X-Color", category: "ui", svgContent: '<defs><linearGradient id="xGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#e57373"/><stop offset="100%" stop-color="#c62828"/></linearGradient></defs><g stroke="url(#xGrad)" stroke-width="4" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></g>' },

// 784. XBold
    { id: 2289, name: "XBold", category: "brands", svgContent: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>' },
    { id: 2290, name: "XBoldThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></g>' },
    { id: 2291, name: "XBoldInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><line stroke="var(--ax-bg-inverse, white)" x1="18" y1="6" x2="6" y2="18" /><line stroke="var(--ax-bg-inverse, white)" x1="6" y1="6" x2="18" y2="18" />' },

// 785. XCircle
    { id: 2292, name: "XCircle", category: "brands", svgContent: '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>' },
    { id: 2293, name: "XCircleThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></g>' },
    { id: 2294, name: "XCircleInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><circle fill="var(--ax-bg-inverse, white)" cx="12" cy="12" r="10"/><line stroke="var(--ax-bg-inverse, white)" x1="15" y1="9" x2="9" y2="15"/><line stroke="var(--ax-bg-inverse, white)" x1="9" y1="9" x2="15" y2="15"/>' },

// 786. Yen-Sign
    { id: 2295, name: "Yen-Sign", category: "finance", svgContent: '<path d="M12 11V2M8 11l4-4 4 4"/><path d="M8 15h8"/><path d="M8 19h8"/>' },
    { id: 2296, name: "Yen-SignThin", category: "finance", svgContent: '<g fill="none" stroke-width="0.5"><path d="M12 11V2M8 11l4-4 4 4"/><path d="M8 15h8"/><path d="M8 19h8"/></g>' },
    { id: 2297, name: "Yen-SignInverted", category: "finance", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><path d="M12 11V2M8 11l4-4 4 4"/><path d="M8 15h8"/><path d="M8 19h8"/></g>' },

// 787. YouTube
    { id: 2298, name: "YouTube", category: "brands", svgContent: '<rect x="2" y="3" width="20" height="18" rx="2"/><polygon points="9 9 9 15 15 12 9 9"/>' },
    { id: 2299, name: "YouTubeThin", category: "brands", svgContent: '<g fill="none" stroke-width="0.5"><rect x="2" y="3" width="20" height="18" rx="2"/><polygon points="9 9 9 15 15 12 9 9"/></g>' },
    { id: 2300, name: "YouTubeInverted", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><rect fill="var(--ax-bg-inverse, white)" x="2" y="3" width="20" height="18" rx="2"/><polygon points="9 9 9 15 15 12 9 9"/>' },

// 788. Youtube-Color
    { id: 2301, name: "Youtube-Color", category: "brands", svgContent: '<defs><linearGradient id="ytGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ff4b4b"/><stop offset="100%" stop-color="#cc0000"/></linearGradient></defs><g><rect x="2" y="4" width="20" height="16" rx="5" fill="url(#ytGrad)"/><polygon points="10 9 16 12 10 15" fill="#ffffff"/><path d="M2 9c0-2 2-3 5-3h10c3 0 5 1 5 3" fill="#ffffff" opacity="0.15"/></g>' },
    { id: 2302, name: "Youtube-Thin-Color", category: "brands", svgContent: '<rect x="2" y="4" width="20" height="16" rx="5" fill="none" stroke="#ff0000" stroke-width="0.75"/><polygon points="10 9 16 12 10 15" fill="none" stroke="#ff0000" stroke-width="0.75"/>' },
    { id: 2303, name: "Youtube-Inverted-Color", category: "brands", svgContent: '<rect x="0" y="0" width="24" height="24" fill="#ff0000" rx="4"/><path d="M20 6H4a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zM10 15V9l5 3-5 3z" fill="#ffffff"/>' },

// 789. Zap
    { id: 2304, name: "Zap", category: "ui", svgContent: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>' },
    { id: 2305, name: "ZapThin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></g>' },
    { id: 2306, name: "ZapInverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="4"/><g stroke="var(--ax-bg-inverse, #ffffff)" fill="none"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></g>' },

// 790. Zap3
    { id: 2307, name: "Zap3", category: "ui", svgContent: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/><path d="M12 8l0 6M15 11l-6 0"/>' },
    { id: 2308, name: "Zap3Thin", category: "ui", svgContent: '<g fill="none" stroke-width="0.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/><path d="M12 8l0 6M15 11l-6 0"/></g>' },
    { id: 2309, name: "Zap3Inverted", category: "ui", svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/><path stroke="var(--ax-bg-inverse, white)" d="M12 8l0 6M15 11l-6 0"/>' },
];

module.exports = axicons;
