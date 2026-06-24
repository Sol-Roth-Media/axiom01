// Axicons Color Variants (Optional)
// 1351 icons with gradients
// Mix with base or use alone

const colorIcons =
    [
        {
            "id": 1,
            "name": "Activity-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"actGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#ff1744\"/><stop offset=\"100%\" stop-color=\"#d50000\"/></linearGradient></defs><polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\" fill=\"none\" stroke=\"url(#actGrad)\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"
        },
        {
            "id": 2,
            "name": "Activity-Inverted-Color",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#d50000\" rx=\"4\"/><polyline points=\"20 12 16 12 13 19 9 5 7 12 4 12\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"
        },
        {
            "id": 3,
            "name": "ActivityInverted",
            "category": "health",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"/></g>"
        },
        {
            "id": 4,
            "name": "AdjustmentsInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><polygon points=\"4 6 4 2 8 6 8 10 4 6Z\"/><polygon points=\"10 6 10 2 14 6 14 10 10 6Z\"/><polygon points=\"16 6 16 2 20 6 20 10 16 6Z\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"4\" y1=\"14\" x2=\"20\" y2=\"14\"/>"
        },
        {
            "id": 5,
            "name": "AI",
            "category": "ai",
            "svgContent": "<circle cx=\"8\" cy=\"8\" r=\"2\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"16\" cy=\"8\" r=\"2\" fill=\"currentColor\" opacity=\"0.9\"/><path d=\"M12 2v8M8 12c0 2.21 1.79 4 4 4s4-1.79 4-4M6 20h12M8 20v2M16 20v2\"/>"
        },
        {
            "id": 6,
            "name": "AIInverted",
            "category": "ai",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle  cx=\"16\" cy=\"8\" r=\"2\"  opacity=\"0.9\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 2v8M8 12c0 2.21 1.79 4 4 4s4-1.79 4-4M6 20h12M8 20v2M16 20v2\"/>"
        },
        {
            "id": 7,
            "name": "Airplane-Color",
            "category": "ai",
            "svgContent": "<defs><linearGradient id=\"airGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#eceff1\"/><stop offset=\"100%\" stop-color=\"#b0bec5\"/></linearGradient></defs><g><path d=\"M20 12l-10-6v4l-6-2v2l6 2v4l-6 2v2l6-2z\" fill=\"url(#airGrad)\" stroke=\"#546e7a\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 8,
            "name": "Airplane-Inverted-Color",
            "category": "ai",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#546e7a\" rx=\"4\"/><path d=\"M21 12l-11-7v3l-5-1v1l5 1v3l-5 1v1l5-1z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 9,
            "name": "AirPodsInverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"7\" cy=\"11\" r=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"17\" cy=\"11\" r=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M7 8V4a1 1 0 0 1 2 0v4M17 8V4a1 1 0 0 0-2 0v4M5 16c0 2-1 4-1 6a3 3 0 0 0 3 3M19 16c0 2 1 4 1 6a3 3 0 0 1-3 3\"/>"
        },
        {
            "id": 10,
            "name": "Alert-CircleInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"/><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"/></g>"
        },
        {
            "id": 11,
            "name": "Alert-Octagon-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"octRed\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ef5350\"/><stop offset=\"100%\" stop-color=\"#b71c1c\"/></linearGradient></defs><g><polygon points=\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\" fill=\"url(#octRed)\"/><line x1=\"12\" y1=\"7\" x2=\"12\" y2=\"13\" stroke=\"#ffffff\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"12\" cy=\"17\" r=\"1.25\" fill=\"#ffffff\"/></g>"
        },
        {
            "id": 12,
            "name": "Alert-Octagon-Inverted-Color",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#b71c1c\" rx=\"4\"/><polygon points=\"8 4 16 4 20 8 20 16 16 20 8 20 4 16 4 8\" fill=\"#ffffff\"/><circle cx=\"12\" cy=\"15\" r=\"1.5\" fill=\"#b71c1c\"/>"
        },
        {
            "id": 13,
            "name": "Alert-TriangleInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"/><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"/><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"/></g>"
        },
        {
            "id": 14,
            "name": "AlertBell",
            "category": "ui",
            "svgContent": "<path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"/><circle cx=\"19\" cy=\"4\" r=\"2\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 15,
            "name": "AlertBellInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"19\" cy=\"4\" r=\"2\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 16,
            "name": "AlertCircle",
            "category": "ui",
            "svgContent": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"/><circle cx=\"12\" cy=\"16\" r=\"0.5\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 17,
            "name": "AlertCircleInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"10\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"16\" r=\"0.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 18,
            "name": "AlertCircleSolid",
            "category": "ui",
            "svgContent": "<circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"currentColor\" opacity=\"0.9\"/><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\" stroke=\"white\"/><circle cx=\"12\" cy=\"16\" r=\"0.8\" fill=\"white\"/>"
        },
        {
            "id": 19,
            "name": "AlertCircleSolidInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"10\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\" stroke=\"var(--ax-bg-inverse, white)\" /><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"16\" r=\"0.8\" fill=\"var(--ax-bg-inverse, white)\"/>"
        },
        {
            "id": 20,
            "name": "AlertDot",
            "category": "ui",
            "svgContent": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"4\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 21,
            "name": "AlertDotInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"10\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"4\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 22,
            "name": "AlgorithmInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M9 8v8M15 8v8M9 12h6\"/>"
        },
        {
            "id": 23,
            "name": "Amazon-Color",
            "category": "brands",
            "svgContent": "<defs><linearGradient id=\"amzBox\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#37474f\"/><stop offset=\"100%\" stop-color=\"#212121\"/></linearGradient></defs><g><path d=\"M2 18c0 1 .5 2 1.5 2h17c1 0 1.5-1 1.5-2V8h-20v10z\" fill=\"url(#amzBox)\"/><path d=\"M22 8H2v-2c0-1 .5-2 1.5-2h17c1 0 1.5 1 1.5 2v2z\" fill=\"#455a64\"/><path d=\"M6 14s2 2 6 2 6-2 6-2\" fill=\"none\" stroke=\"#ff9800\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"18 14 19 12 16 13\" fill=\"#ff9800\"/></g>"
        },
        {
            "id": 24,
            "name": "AmazonInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M2 18c0 1 .5 2 1.5 2h17c1 0 1.5-1 1.5-2V8h-20v10z\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M22 8H2v-2c0-1 .5-2 1.5-2h17c1 0 1.5 1 1.5 2v2z\"/>"
        },
        {
            "id": 25,
            "name": "Ambulance-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"ambGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffffff\"/><stop offset=\"100%\" stop-color=\"#cfd8dc\"/></linearGradient></defs><g><rect x=\"2\" y=\"10\" width=\"16\" height=\"8\" rx=\"2\" fill=\"url(#ambGrad)\" stroke=\"#455a64\" stroke-width=\"1.5\"/><rect x=\"8\" y=\"12\" width=\"4\" height=\"4\" fill=\"#ef5350\"/></g>"
        },
        {
            "id": 26,
            "name": "Ambulance-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#455a64\" rx=\"4\"/><rect x=\"3\" y=\"11\" width=\"14\" height=\"6\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 27,
            "name": "AmExInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\"/><text x=\"12\" y=\"14\" font-size=\"8\">AMEX</text>"
        },
        {
            "id": 28,
            "name": "Anchor-Chain-Color",
            "category": "ai",
            "svgContent": "<defs><linearGradient id=\"chnGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#9e9e9e\"/><stop offset=\"100%\" stop-color=\"#616161\"/></linearGradient></defs><g><path d=\"M12 2v6m-4 4a4 4 0 1 0 8 0 4 4 0 1 0-8 0z\" fill=\"none\" stroke=\"#616161\" stroke-width=\"3\" stroke-linecap=\"round\"/><circle cx=\"12\" cy=\"2\" r=\"2\" fill=\"#616161\"/></g>"
        },
        {
            "id": 29,
            "name": "Anchor-Chain-Inverted-Color",
            "category": "ai",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#616161\" rx=\"4\"/><path d=\"M12 3v5m-3 4a3 3 0 1 0 6 0 3 3 0 1 0-6 0z\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>"
        },
        {
            "id": 30,
            "name": "Anchor-Color",
            "category": "objects",
            "svgContent": "<defs><linearGradient id=\"ancGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#90a4ae\"/><stop offset=\"100%\" stop-color=\"#455a64\"/></linearGradient></defs><g fill=\"none\" stroke=\"url(#ancGrad)\" stroke-width=\"2.5\" stroke-linecap=\"round\"><line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"18\"/><path d=\"M5 12H2a10 10 0 0 0 20 0h-3\"/><circle cx=\"12\" cy=\"5\" r=\"2.5\" stroke-width=\"2\"/></g>"
        },
        {
            "id": 31,
            "name": "Anchor-Inverted-Color",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#455a64\" rx=\"4\"/><g fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\"><line x1=\"12\" y1=\"6\" x2=\"12\" y2=\"17\"/><path d=\"M6 11H3a9 9 0 0 0 18 0h-3\"/><circle cx=\"12\" cy=\"4\" r=\"1.5\"/></g>"
        },
        {
            "id": 32,
            "name": "AnchorInverted",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><circle cx=\"12\" cy=\"5\" r=\"3\"/><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"21\"/><path d=\"M5 12H2a10 10 0 0 0 20 0h-3\"/></g>"
        },
        {
            "id": 33,
            "name": "AnonymousInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z\"/>"
        },
        {
            "id": 34,
            "name": "AnthropicInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 2L4 6v10l8 4 8-4V6l-8-4zm0 3l5 2.5v7L12 15l-5-2.5v-7L12 5z\"/>"
        },
        {
            "id": 35,
            "name": "Apple-Color",
            "category": "brands",
            "svgContent": "<defs><linearGradient id=\"appleGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ff5252\"/><stop offset=\"100%\" stop-color=\"#b71c1c\"/></linearGradient></defs><g><path d=\"M12 2c1 0 2 .5 2 1v2c0 1-.5 1-1 1s-1-.5-1-1V3c0-.5 0-1 1-1z\" fill=\"#4caf50\"/><path d=\"M6 5C4 5 2 7 2 9v8c0 2 2 4 4 4h12c2 0 4-2 4-4V9c0-2-2-4-4-4z\" fill=\"url(#appleGrad)\"/><path d=\"M18 5c1.5 0 3 1.5 3 3.5V11c0-3-1.5-6-3-6z\" fill=\"#ffffff\" opacity=\"0.25\"/></g>"
        },
        {
            "id": 36,
            "name": "AppleInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 2c1 0 2 .5 2 1v2c0 1-.5 1-1 1s-1-.5-1-1V3c0-.5 0-1 1-1z\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M6 5C4 5 2 7 2 9v8c0 2 2 4 4 4h12c2 0 4-2 4-4V9c0-2-2-4-4-4H6zm6 2c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2z\"/>"
        },
        {
            "id": 37,
            "name": "ArchiveInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polyline points=\"21 8 21 21 3 21 3 8\"/><rect x=\"1\" y=\"3\" width=\"22\" height=\"5\"/><line x1=\"10\" y1=\"12\" x2=\"14\" y2=\"12\"/></g>"
        },
        {
            "id": 38,
            "name": "Armchair-Color",
            "category": "ai",
            "svgContent": "<defs><linearGradient id=\"armGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#4db6ac\"/><stop offset=\"100%\" stop-color=\"#004d40\"/></linearGradient></defs><g><path d=\"M4 11V7a3 3 0 0 1 6 0v2h4V7a3 3 0 0 1 6 0v4\" fill=\"none\" stroke=\"url(#armGrad)\" stroke-width=\"2.5\"/><rect x=\"2\" y=\"11\" width=\"20\" height=\"8\" rx=\"2\" fill=\"url(#armGrad)\"/><line x1=\"6\" y1=\"19\" x2=\"6\" y2=\"22\" stroke=\"#004d40\" stroke-width=\"2.5\"/><line x1=\"18\" y1=\"19\" x2=\"18\" y2=\"22\" stroke=\"#004d40\" stroke-width=\"2.5\"/></g>"
        },
        {
            "id": 39,
            "name": "Armchair-Inverted-Color",
            "category": "ai",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#004d40\" rx=\"4\"/><path d=\"M4 12V8h16v4H4z\" fill=\"#ffffff\"/><rect x=\"3\" y=\"12\" width=\"18\" height=\"7\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 40,
            "name": "ArmInverted",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M4 8h6v8H4zM10 8h8v2M18 8c2 0 2 2 2 4m-2-4c-2 0-2 2-2 4\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"14\" y1=\"8\" x2=\"14\" y2=\"16\"/>"
        },
        {
            "id": 41,
            "name": "Arrow-DownInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"/><polyline points=\"19 12 12 19 5 12\"/></g>"
        },
        {
            "id": 42,
            "name": "Arrow-LeftInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><line x1=\"19\" y1=\"12\" x2=\"5\" y2=\"12\"/><polyline points=\"12 19 5 12 12 12\"/></g>"
        },
        {
            "id": 43,
            "name": "Arrow-RightInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"/><polyline points=\"12 5 19 12 12 19\"/></g>"
        },
        {
            "id": 44,
            "name": "Arrow-UpInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"5\"/><polyline points=\"5 12 12 5 19 12\"/></g>"
        },
        {
            "id": 45,
            "name": "ArrowDownSmallInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><polyline points=\"6 10 12 16 18 10\"/>"
        },
        {
            "id": 46,
            "name": "ArrowLeftSmallInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><polyline points=\"14 6 8 12 14 18\"/>"
        },
        {
            "id": 47,
            "name": "ArrowRightSmallInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><polyline points=\"10 6 16 12 10 18\"/>"
        },
        {
            "id": 48,
            "name": "ArrowUpSmallInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><polyline points=\"18 14 12 8 6 14\"/>"
        },
        {
            "id": 49,
            "name": "Aspect-Ratio-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"arGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#90caf9\"/><stop offset=\"100%\" stop-color=\"#1565c0\"/></linearGradient></defs><g><rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"2\" fill=\"none\" stroke=\"url(#arGrad)\" stroke-width=\"2\"/><path d=\"M7 8H5v2M17 16h2v-2M5 14v2h2M19 10V8h-2\" fill=\"none\" stroke=\"#1565c0\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 50,
            "name": "Aspect-Ratio-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#1565c0\" rx=\"4\"/><rect x=\"4\" y=\"5\" width=\"16\" height=\"14\" rx=\"1\" fill=\"#ffffff\"/><path d=\"M7 8H5v2M17 16h2v-2\" fill=\"none\" stroke=\"#1565c0\" stroke-width=\"1.5\"/>"
        },
        {
            "id": 51,
            "name": "AtSymbolInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"9\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M15 11a3 3 0 1 0-3 3m0 0v2.5\"/>"
        },
        {
            "id": 52,
            "name": "AutomationInverted",
            "category": "ai",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M15.5 9.5L12 13l-3.5-3.5\"/>"
        },
        {
            "id": 53,
            "name": "AvatarFemaleInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"6\" r=\"3.5\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M6 20c0-2.21 2.91-4 6-4s6 1.79 6 4v2M12 16l-3-2 6 0-3 2z\" opacity=\"0.7\"/>"
        },
        {
            "id": 54,
            "name": "AvatarInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"8\" r=\"4\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6v1H6v-1z\"/>"
        },
        {
            "id": 55,
            "name": "AvatarMaleInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"7\" r=\"3.5\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M6 20c0-2.21 2.91-4 6-4s6 1.79 6 4v2H6v-2z\"/>"
        },
        {
            "id": 56,
            "name": "Award-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"awdGold\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#fff176\"/><stop offset=\"100%\" stop-color=\"#f57f17\"/></linearGradient></defs><g><circle cx=\"12\" cy=\"8\" r=\"7\" fill=\"url(#awdGold)\"/><polyline points=\"8.21 13.89 7 23 12 20 17 23 15.79 13.88\" fill=\"none\" stroke=\"#f57f17\" stroke-width=\"2\" stroke-linejoin=\"round\"/><circle cx=\"12\" cy=\"8\" r=\"4\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 57,
            "name": "Award-Inverted-Color",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#f57f17\" rx=\"4\"/><circle cx=\"12\" cy=\"8\" r=\"5\" fill=\"#ffffff\"/><polyline points=\"9 13 7 21 12 18 17 21 15 13\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\"/>"
        },
        {
            "id": 58,
            "name": "AwardInverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><circle cx=\"12\" cy=\"8\" r=\"7\"/><polyline points=\"8.21 13.89 7 23 12 20 17 23 15.79 13.89\"/></g>"
        },
        {
            "id": 59,
            "name": "AWSInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M3 10l3-2 3 2v4l-3 2-3-2v-4zm8 0l3-2 3 2v4l-3 2-3-2v-4zm8 0l3-2 3 2v4l-3 2-3-2v-4z\"/>"
        },
        {
            "id": 60,
            "name": "AzureInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M3 3h6v6H3zM11 3h6v6h-6zM3 11h6v6H3zM11 11h6v6h-6z\"/>"
        },
        {
            "id": 61,
            "name": "Backpack-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"bckGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#8d6e63\"/><stop offset=\"100%\" stop-color=\"#5d4037\"/></linearGradient></defs><g><rect x=\"6\" y=\"8\" width=\"12\" height=\"12\" rx=\"2\" fill=\"url(#bckGrad)\" stroke=\"#5d4037\" stroke-width=\"1.5\"/><rect x=\"8\" y=\"4\" width=\"8\" height=\"4\" rx=\"2\" fill=\"#5d4037\"/><rect x=\"9\" y=\"11\" width=\"6\" height=\"4\" fill=\"#4e342e\"/></g>"
        },
        {
            "id": 62,
            "name": "Backpack-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#5d4037\" rx=\"4\"/><rect x=\"7\" y=\"9\" width=\"10\" height=\"10\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 63,
            "name": "BackSolid",
            "category": "ui",
            "svgContent": "<polyline points=\"19 12 5 12 11 6\" fill=\"currentColor\" opacity=\"0.9\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/>"
        },
        {
            "id": 64,
            "name": "BackSolidInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><polyline points=\"19 12 5 12 11 6\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/>"
        },
        {
            "id": 65,
            "name": "BackSolidThin",
            "category": "ui",
            "svgContent": "<g fill=\"none\" stroke-width=\"0.5\"><polyline points=\"19 12 5 12 11 6\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 66,
            "name": "Badge2",
            "category": "ui",
            "svgContent": "<path d=\"M3.85 8.75a4.84 4.84 0 0 1 7.3-7.3l8.6 8.6a4.84 4.84 0 0 1-6.84 6.84l-8.6-8.6z\" fill=\"currentColor\" opacity=\"0.9\" opacity=\"0.5\"/><circle cx=\"12\" cy=\"12\" r=\"3\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 67,
            "name": "Badge2Inverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M3.85 8.75a4.84 4.84 0 0 1 7.3-7.3l8.6 8.6a4.84 4.84 0 0 1-6.84 6.84l-8.6-8.6z\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\" opacity=\"0.5\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"3\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 68,
            "name": "BadgeCheckInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M3.85 8.75a4.84 4.84 0 0 1 7.45-4.3 4.84 4.84 0 0 1 7.45 4.3 4.83 4.83 0 0 1 .3 7.48 4.84 4.84 0 0 1-7.45 4.31 4.84 4.84 0 0 1-7.45-4.3 4.83 4.83 0 0 1-.3-7.49 4.84 4.84 0 0 1 .33-0.4\" stroke=\"var(--ax-bg-inverse, white)\" /><polyline points=\"10 13 13 16 18 9\" stroke=\"var(--ax-bg-inverse, white)\" />"
        },
        {
            "id": 69,
            "name": "BadgeXInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M3.85 8.75a4.84 4.84 0 0 1 7.45-4.3 4.84 4.84 0 0 1 7.45 4.3 4.83 4.83 0 0 1 .3 7.48 4.84 4.84 0 0 1-7.45 4.31 4.84 4.84 0 0 1-7.45-4.3 4.83 4.83 0 0 1-.3-7.49\" stroke=\"var(--ax-bg-inverse, white)\" /><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"10\" y1=\"9\" x2=\"16\" y2=\"15\" /><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"16\" y1=\"9\" x2=\"10\" y2=\"15\" />"
        },
        {
            "id": 70,
            "name": "Balloon-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"blnGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ef5350\"/><stop offset=\"100%\" stop-color=\"#b71c1c\"/></linearGradient></defs><g><ellipse cx=\"12\" cy=\"10\" rx=\"6\" ry=\"8\" fill=\"url(#blnGrad)\" stroke=\"#b71c1c\" stroke-width=\"1.5\"/><path d=\"M12 18v4M10 22h4\" stroke=\"#ffeb3b\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M12 18l-1-2\" stroke=\"#b71c1c\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 71,
            "name": "Balloon-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#b71c1c\" rx=\"4\"/><ellipse cx=\"12\" cy=\"10\" rx=\"5\" ry=\"7\" fill=\"#ffffff\"/>"
        },
        {
            "id": 72,
            "name": "BananaInverted",
            "category": "food",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M4 16c8.5 0 12-8.5 12-12\"/><path d=\"M4 16c0 4 4 6 12 6s8-4 8-8c0-8-12-8-12-8-8 0-8 8-8 8z\"/></g>"
        },
        {
            "id": 73,
            "name": "BandwidthInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M2 12c0 1 2 3 10 3s10-2 10-3M2 12c0-1 2-3 10-3s10 2 10 3M12 3v18M6 9h12\"/>"
        },
        {
            "id": 74,
            "name": "BankInverted",
            "category": "finance",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M3 21h18\"/><path d=\"M6 21V10\"/><path d=\"M18 21V10\"/><path d=\"M2 10h20\"/><path d=\"M12 2l10 8H2z\"/></g>"
        },
        {
            "id": 75,
            "name": "BarbecueInverted",
            "category": "food",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M12 21v-4\"/><path d=\"M16 21v-4\"/><path d=\"M8 21v-4\"/><path d=\"M3 13h18\"/><path d=\"M2 13a10 10 0 0 0 20 0H2z\"/><path d=\"M4 13a8 8 0 0 1 16 0\"/></g>"
        },
        {
            "id": 76,
            "name": "BarChartInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"/><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"/></g>"
        },
        {
            "id": 77,
            "name": "BarsInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"4\" y1=\"6\" x2=\"20\" y2=\"6\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"4\" y1=\"12\" x2=\"20\" y2=\"12\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"4\" y1=\"18\" x2=\"20\" y2=\"18\"/>"
        },
        {
            "id": 78,
            "name": "BasketInverted",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M6 10h12v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z\"/><path d=\"M6 10L2 6M18 10l4-4\"/><path d=\"M6 10l6 6 6-6\"/></g>"
        },
        {
            "id": 79,
            "name": "Battery-Charging-Color",
            "category": "ui",
            "svgContent": "<g><rect x=\"1\" y=\"6\" width=\"18\" height=\"12\" rx=\"2\" fill=\"none\" stroke=\"#78909c\" stroke-width=\"2\"/><polygon points=\"11 7 6 13 10 13 9 17 14 11 10 11\" fill=\"#ffeb3b\"/><line x1=\"22\" y1=\"11\" x2=\"22\" y2=\"13\" stroke=\"#78909c\" stroke-width=\"2\"/></g>"
        },
        {
            "id": 80,
            "name": "Battery-Charging-Inverted-Color",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#ffb300\" rx=\"4\"/><rect x=\"3\" y=\"7\" width=\"15\" height=\"10\" rx=\"1\" fill=\"#ffffff\"/><polygon points=\"11 8 7 13 10 13 9 16 13 11 10 11\" fill=\"#ffb300\"/>"
        },
        {
            "id": 81,
            "name": "Battery-ChargingInverted",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19\"/><line x1=\"23\" y1=\"13\" x2=\"23\" y2=\"11\"/><polyline points=\"11 6 7 12 13 12 9 18\"/></g>"
        },
        {
            "id": 82,
            "name": "Battery-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"batGreen\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#66bb6a\"/><stop offset=\"100%\" stop-color=\"#2e7d32\"/></linearGradient></defs><g><rect x=\"1\" y=\"6\" width=\"18\" height=\"12\" rx=\"2\" fill=\"none\" stroke=\"#78909c\" stroke-width=\"2\"/><rect x=\"3\" y=\"8\" width=\"11\" height=\"8\" rx=\"1\" fill=\"url(#batGreen)\"/><line x1=\"22\" y1=\"11\" x2=\"22\" y2=\"13\" stroke=\"#78909c\" stroke-width=\"2\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 83,
            "name": "Battery-Inverted-Color",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#2e7d32\" rx=\"4\"/><rect x=\"3\" y=\"7\" width=\"15\" height=\"10\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 84,
            "name": "BatteryInverted",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><rect x=\"1\" y=\"6\" width=\"18\" height=\"12\" rx=\"2\" ry=\"2\"/><line x1=\"23\" y1=\"13\" x2=\"23\" y2=\"11\"/></g>"
        },
        {
            "id": 85,
            "name": "Beach-Ball-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"bchGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffcc80\"/><stop offset=\"100%\" stop-color=\"#ff9800\"/></linearGradient></defs><g><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"url(#bchGrad)\" stroke=\"#e65100\" stroke-width=\"1.5\"/><path d=\"M12 2v10l8 5M12 12l-8 5\" stroke=\"#ffffff\" stroke-width=\"2\"/></g>"
        },
        {
            "id": 86,
            "name": "Beach-Ball-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#e65100\" rx=\"4\"/><circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"#ffffff\"/>"
        },
        {
            "id": 87,
            "name": "BeakerInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M9 3h6v2H9V3zm0 2h6v12a3 3 0 0 1-6 0V5zm-1 13a4 4 0 0 0 8 0h1v2H7v-2z\"/>"
        },
        {
            "id": 88,
            "name": "BeautyInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"10\" r=\"4\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M18 5l1-2M6 5L5 3M12 16s-2 2-4 2-4-2-4-2M20 15s-2 2-4 2-4-2-4-2\"/>"
        },
        {
            "id": 89,
            "name": "Beer-Color",
            "category": "food",
            "svgContent": "<defs><linearGradient id=\"beerGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#ffb74d\"/><stop offset=\"100%\" stop-color=\"#ffa726\"/></linearGradient></defs><g><path d=\"M17 9h2a3 3 0 0 1 0 6h-2\" fill=\"none\" stroke=\"#f57c00\" stroke-width=\"2.5\"/><path d=\"M5 22l1-14h10l1 14H5z\" fill=\"url(#beerGrad)\"/><path d=\"M4 8c0-2 2-3 4-3s4 1 5-1 3 1 4 1a3 3 0 0 1 0 3H4z\" fill=\"#eceff1\"/></g>"
        },
        {
            "id": 90,
            "name": "Beer-Inverted-Color",
            "category": "food",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#ffa726\" rx=\"4\"/><path d=\"M7 21l1-12h7l1 12H7z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 91,
            "name": "BeerInverted",
            "category": "food",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M17 11h1a3 3 0 0 1 0 6h-1\"/><path d=\"M9 12v6\"/><path d=\"M13 12v6\"/><path d=\"M17 11V7a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-4z\"/></g>"
        },
        {
            "id": 92,
            "name": "Bell-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"bellGold\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#fff176\"/><stop offset=\"50%\" stop-color=\"#fbc02d\"/><stop offset=\"100%\" stop-color=\"#f57f17\"/></linearGradient></defs><g><path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\" fill=\"url(#bellGold)\"/><path d=\"M13.73 21a2 2 0 0 1-3.46 0\" fill=\"#f57f17\"/><circle cx=\"10\" cy=\"7\" r=\"1\" fill=\"#fff\" opacity=\"0.5\"/></g>"
        },
        {
            "id": 93,
            "name": "Bell-OffInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"/><path d=\"M18.63 13A17.89 17.89 0 0 1 18 8\"/><path d=\"M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14\"/><path d=\"M18 8a6 6 0 0 0-9.33-5\"/><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"/></g>"
        },
        {
            "id": 94,
            "name": "Bell2",
            "category": "ui",
            "svgContent": "<path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"/><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"/><circle cx=\"19\" cy=\"5\" r=\"3\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 95,
            "name": "Bell2Inverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M13.73 21a2 2 0 0 1-3.46 0\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"19\" cy=\"5\" r=\"3\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 96,
            "name": "BellInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9\"/><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"/></g>"
        },
        {
            "id": 97,
            "name": "BellOffInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M13.73 21a2 2 0 0 1-3.46 0M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h2m14 0h2M1 1l22 22\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M9.89 9.89A6 6 0 0 1 21 8c0 7-3 9-3 9H3\"/>"
        },
        {
            "id": 98,
            "name": "BellRingingInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M13.73 21a2 2 0 0 1-3.46 0\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M18.88 8a1 1 0 0 1 1.34-.34l1.58.79a1 1 0 0 1 .35 1.34M5.12 8a1 1 0 0 0-1.34-.34l-1.58.79a1 1 0 0 0-.35 1.34\"/>"
        },
        {
            "id": 99,
            "name": "Bicycle-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"bicGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ef5350\"/><stop offset=\"100%\" stop-color=\"#b71c1c\"/></linearGradient></defs><g stroke=\"#b71c1c\" stroke-width=\"2\" stroke-linecap=\"round\"><circle cx=\"6\" cy=\"18\" r=\"4\" fill=\"none\"/><circle cx=\"18\" cy=\"18\" r=\"4\" fill=\"none\"/><path d=\"M10 18l4-8h4\"/></g>"
        },
        {
            "id": 100,
            "name": "Bicycle-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#b71c1c\" rx=\"4\"/><circle cx=\"6\" cy=\"18\" r=\"3\" fill=\"#ffffff\"/><circle cx=\"18\" cy=\"18\" r=\"3\" fill=\"#ffffff\"/>"
        },
        {
            "id": 101,
            "name": "Bicycle-Road-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"birGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#4caf50\"/><stop offset=\"100%\" stop-color=\"#2e7d32\"/></linearGradient></defs><g stroke=\"#2e7d32\" stroke-width=\"2\"><circle cx=\"6\" cy=\"18\" r=\"4\" fill=\"none\"/><circle cx=\"18\" cy=\"18\" r=\"4\" fill=\"none\"/><path d=\"M10 18h8v-6\" fill=\"none\"/></g>"
        },
        {
            "id": 102,
            "name": "Bicycle-Road-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#2e7d32\" rx=\"4\"/><circle cx=\"6\" cy=\"18\" r=\"3\" fill=\"#ffffff\"/><circle cx=\"18\" cy=\"18\" r=\"3\" fill=\"#ffffff\"/>"
        },
        {
            "id": 103,
            "name": "Binoculars-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"binGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#607d8b\"/><stop offset=\"100%\" stop-color=\"#37474f\"/></linearGradient></defs><g><circle cx=\"7\" cy=\"12\" r=\"4\" fill=\"url(#binGrad)\" stroke=\"#37474f\" stroke-width=\"1.5\"/><circle cx=\"17\" cy=\"12\" r=\"4\" fill=\"url(#binGrad)\" stroke=\"#37474f\" stroke-width=\"1.5\"/><path d=\"M7 8l10-4M7 16l10 4\" stroke=\"#37474f\" stroke-width=\"2\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 104,
            "name": "Binoculars-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#37474f\" rx=\"4\"/><circle cx=\"7\" cy=\"12\" r=\"3\" fill=\"#ffffff\"/><circle cx=\"17\" cy=\"12\" r=\"3\" fill=\"#ffffff\"/>"
        },
        {
            "id": 105,
            "name": "Binoculars-Nav-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"binNGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#607d8b\"/><stop offset=\"100%\" stop-color=\"#37474f\"/></linearGradient></defs><g><circle cx=\"8\" cy=\"12\" r=\"5\" fill=\"url(#binNGrad)\" stroke=\"#37474f\" stroke-width=\"1.5\"/><circle cx=\"16\" cy=\"12\" r=\"5\" fill=\"url(#binNGrad)\" stroke=\"#37474f\" stroke-width=\"1.5\"/><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\" stroke=\"#37474f\" stroke-width=\"1\"/></g>"
        },
        {
            "id": 106,
            "name": "Binoculars-Nav-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#37474f\" rx=\"4\"/><circle cx=\"8\" cy=\"12\" r=\"4\" fill=\"#ffffff\"/><circle cx=\"16\" cy=\"12\" r=\"4\" fill=\"#ffffff\"/>"
        },
        {
            "id": 107,
            "name": "BitcoinInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"10\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 7v10M9 9h6c1 0 1.5.5 1.5 1.5S16 12 15 12H9M9 12h6c1 0 1.5.5 1.5 1.5S16 15 15 15H9\"/>"
        },
        {
            "id": 108,
            "name": "Blocks-Color",
            "category": "development",
            "svgContent": "<defs><linearGradient id=\"blkGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ff5252\"/><stop offset=\"100%\" stop-color=\"#ff7043\"/></linearGradient></defs><g><rect x=\"3\" y=\"11\" width=\"8\" height=\"10\" rx=\"1\" fill=\"url(#blkGrad)\"/><rect x=\"13\" y=\"11\" width=\"8\" height=\"10\" rx=\"1\" fill=\"#42a5f5\"/><rect x=\"3\" y=\"3\" width=\"18\" height=\"6\" rx=\"1\" fill=\"#ffca28\"/></g>"
        },
        {
            "id": 109,
            "name": "Blocks-Inverted-Color",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#ff5252\" rx=\"4\"/><rect x=\"4\" y=\"4\" width=\"16\" height=\"5\" fill=\"#ffffff\"/><rect x=\"4\" y=\"11\" width=\"7\" height=\"9\" fill=\"#ffffff\"/><rect x=\"13\" y=\"11\" width=\"7\" height=\"9\" fill=\"#ffffff\"/>"
        },
        {
            "id": 110,
            "name": "Bluetooth-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"btGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#29b6f6\"/><stop offset=\"100%\" stop-color=\"#01579b\"/></linearGradient></defs><polyline points=\"6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5\" fill=\"none\" stroke=\"url(#btGrad)\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"
        },
        {
            "id": 111,
            "name": "Bluetooth-Inverted-Color",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#01579b\" rx=\"4\"/><polyline points=\"7 7 17 17 12 22 12 2 17 7 7 17\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\"/>"
        },
        {
            "id": 112,
            "name": "BluetoothInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polyline points=\"6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5\"/></g>"
        },
        {
            "id": 113,
            "name": "Blur-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"blurGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#e0e0e0\"/><stop offset=\"100%\" stop-color=\"#9e9e9e\"/></linearGradient></defs><g fill=\"url(#blurGrad)\"><circle cx=\"12\" cy=\"12\" r=\"9\" opacity=\"0.3\"/><circle cx=\"12\" cy=\"12\" r=\"6\" opacity=\"0.6\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></g>"
        },
        {
            "id": 114,
            "name": "Blur-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#9e9e9e\" rx=\"4\"/><circle cx=\"12\" cy=\"12\" r=\"7\" fill=\"#ffffff\"/><circle cx=\"12\" cy=\"12\" r=\"4\" fill=\"#9e9e9e\" opacity=\"0.5\"/>"
        },
        {
            "id": 115,
            "name": "BlurInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"9\" cy=\"9\" r=\"1.5\" opacity=\"0.5\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"15\" cy=\"9\" r=\"1.5\" opacity=\"0.3\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"15\" r=\"1.5\" opacity=\"0.4\"/>"
        },
        {
            "id": 116,
            "name": "Boat-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"botGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffffff\"/><stop offset=\"100%\" stop-color=\"#cfd8dc\"/></linearGradient></defs><g><path d=\"M2 14l20 2-4 6H6z\" fill=\"url(#botGrad)\" stroke=\"#455a64\" stroke-width=\"1.5\"/><path d=\"M12 14V4l6 6z\" fill=\"#ef5350\"/></g>"
        },
        {
            "id": 117,
            "name": "Boat-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#455a64\" rx=\"4\"/><path d=\"M3 15l18 2-3 5H6z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 118,
            "name": "Book-Color",
            "category": "objects",
            "svgContent": "<defs><linearGradient id=\"bookCover\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#0288d1\"/><stop offset=\"100%\" stop-color=\"#01579b\"/></linearGradient></defs><g><path d=\"M4 19.5A2.5 2.5 0 0 1 6.5 17H20v4H6.5A2.5 2.5 0 0 1 4 19.5z\" fill=\"#eceff1\"/><path d=\"M6.5 2H20v15H6.5A2.5 2.5 0 0 0 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z\" fill=\"url(#bookCover)\"/><line x1=\"8\" y1=\"6\" x2=\"16\" y2=\"6\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 119,
            "name": "Book-Inverted-Color",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#01579b\" rx=\"4\"/><path d=\"M6 4h13v13H6a2 2 0 0 0-2 2V6a2 2 0 0 1 2-2z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 120,
            "name": "Book-OpenInverted",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z\"/><path d=\"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z\"/></g>"
        },
        {
            "id": 121,
            "name": "BookInverted",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M4 19.5A2.5 2.5 0 0 1 6.5 17H20\"/><path d=\"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z\"/></g>"
        },
        {
            "id": 122,
            "name": "Bookmark-Color",
            "category": "objects",
            "svgContent": "<defs><linearGradient id=\"bmkGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#66bb6a\"/><stop offset=\"100%\" stop-color=\"#2e7d32\"/></linearGradient></defs><g><path d=\"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z\" fill=\"url(#bmkGrad)\" stroke=\"#2e7d32\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 123,
            "name": "Bookmark-Inverted-Color",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#2e7d32\" rx=\"4\"/><path d=\"M19 21l-7-5-7 5V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 124,
            "name": "BookmarkInverted",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z\"/>"
        },
        {
            "id": 125,
            "name": "BookmarkPlusInverted",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z M12 7v6M9 10h6\"/>"
        },
        {
            "id": 126,
            "name": "BottleInverted",
            "category": "food",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M10 2h4v5h-4z\"/><path d=\"M12 7v15\"/><path d=\"M8 7h8v15H8z\"/></g>"
        },
        {
            "id": 127,
            "name": "BowlInverted",
            "category": "food",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M22 12a10 10 0 0 1-20 0z\"/><path d=\"M6 12a6 6 0 0 0 12 0z\"/></g>"
        },
        {
            "id": 128,
            "name": "BoxInverted",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polygon points=\"12 2 22 7.5 22 16.5 12 22 2 16.5 2 7.5 12 2\"/><line x1=\"2\" y1=\"7.5\" x2=\"12\" y2=\"13\"/><line x1=\"22\" y1=\"7.5\" x2=\"12\" y2=\"13\"/><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"13\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"13\"/></g>"
        },
        {
            "id": 129,
            "name": "Brackets-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"brkGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#ff7043\"/><stop offset=\"100%\" stop-color=\"#f4511e\"/></linearGradient></defs><g fill=\"none\" stroke=\"url(#brkGrad)\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M16 4h3v16h-3M8 4H5v16h3\"/></g>"
        },
        {
            "id": 130,
            "name": "Brackets-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#f4511e\" rx=\"4\"/><path d=\"M16 5h3v14h-3M8 5H5v14h3\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\"/>"
        },
        {
            "id": 131,
            "name": "Brain",
            "category": "ai",
            "svgContent": "<path d=\"M9.5 2A3.5 3.5 0 0 1 13 5.5v.006h.02a3.5 3.5 0 0 1 3.37 5.477A5.5 5.5 0 1 1 9.5 2z\"/><circle cx=\"9\" cy=\"9\" r=\"1\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"15\" cy=\"9\" r=\"1\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 132,
            "name": "BrainInverted",
            "category": "ai",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M9.5 2A3.5 3.5 0 0 1 13 5.5v.006h.02a3.5 3.5 0 0 1 3.37 5.477A5.5 5.5 0 1 1 9.5 2z\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"9\" cy=\"9\" r=\"1\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"15\" cy=\"9\" r=\"1\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 133,
            "name": "Briefcase-Color",
            "category": "objects",
            "svgContent": "<defs><linearGradient id=\"caseGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#8d6e63\"/><stop offset=\"100%\" stop-color=\"#4e342e\"/></linearGradient></defs><g><rect x=\"2\" y=\"7\" width=\"20\" height=\"14\" rx=\"2\" fill=\"url(#caseGrad)\"/><path d=\"M16 7V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3\" fill=\"none\" stroke=\"#4e342e\" stroke-width=\"2\"/><rect x=\"11\" y=\"12\" width=\"2\" height=\"3\" rx=\"0.5\" fill=\"#ffd54f\"/></g>"
        },
        {
            "id": 134,
            "name": "Briefcase-Inverted-Color",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#4e342e\" rx=\"4\"/><rect x=\"3\" y=\"8\" width=\"18\" height=\"12\" rx=\"1\" fill=\"#ffffff\"/><path d=\"M15 8V5h-6v3\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\"/>"
        },
        {
            "id": 135,
            "name": "BriefcaseInverted",
            "category": "finance",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><rect x=\"2\" y=\"7\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"/><path d=\"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\"/></g>"
        },
        {
            "id": 136,
            "name": "Brightness-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"brtGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#fff176\"/><stop offset=\"100%\" stop-color=\"#f57f17\"/></linearGradient></defs><g stroke=\"url(#brtGrad)\" stroke-width=\"2\" stroke-linecap=\"round\"><circle cx=\"12\" cy=\"12\" r=\"5\" fill=\"url(#brtGrad)\"/><path d=\"M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42\"/></g>"
        },
        {
            "id": 137,
            "name": "Brightness-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#f57f17\" rx=\"4\"/><circle cx=\"12\" cy=\"12\" r=\"4\" fill=\"#ffffff\"/><path d=\"M12 3v2M12 19v2M3 12h2M19 12h2\" stroke=\"#ffffff\" stroke-width=\"2\"/>"
        },
        {
            "id": 138,
            "name": "Brush-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"brshGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ba68c8\"/><stop offset=\"100%\" stop-color=\"#7b1fa2\"/></linearGradient></defs><g><path d=\"M18 3l3 3-11 11H7v-3L18 3z\" fill=\"url(#brshGrad)\"/><path d=\"M7 14l-4 4v3h3l4-4\" fill=\"#8d6e63\"/><path d=\"M21 3c-1.5-1.5-4 1-4 1l3 3s2.5-2.5 1-4z\" fill=\"#ff4081\"/></g>"
        },
        {
            "id": 139,
            "name": "Brush-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#7b1fa2\" rx=\"4\"/><path d=\"M17 4l3 3-10 10H7v-3L17 4z\" fill=\"#ffffff\"/><path d=\"M7 14l-3 3v3h3l3-3V14H7z\" fill=\"#ffffff\" opacity=\"0.6\"/>"
        },
        {
            "id": 140,
            "name": "BrushInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M19.4 7.34c.66-1.05.69-2.4 0-3.53-1.14-1.84-3.26-1.84-4.4 0L2 16c-.63.75-.63 1.92 0 2.64.9 1.32 2.67 1.84 4.29.84l.87-.52L21.47 6l-.87.52c-.72.43-1.79.22-2.2-.56z\"/>"
        },
        {
            "id": 141,
            "name": "Bucket-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"bktGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#fff176\"/><stop offset=\"100%\" stop-color=\"#fbc02d\"/></linearGradient></defs><g><path d=\"M5 6h14l-2 14H7L5 6z\" fill=\"url(#bktGrad)\" stroke=\"#f57f17\" stroke-width=\"1.5\"/><path d=\"M4 6c0-3 16-3 16 0\" fill=\"none\" stroke=\"#cfd8dc\" stroke-width=\"2.5\"/></g>"
        },
        {
            "id": 142,
            "name": "Bucket-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#f57f17\" rx=\"4\"/><path d=\"M6 7l-1 12h14l-1-12H6z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 143,
            "name": "Bug-Color",
            "category": "objects",
            "svgContent": "<defs><linearGradient id=\"bugRed\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#e53935\"/><stop offset=\"100%\" stop-color=\"#b71c1c\"/></linearGradient></defs><g fill=\"none\" stroke=\"#37474f\" stroke-width=\"2\" stroke-linecap=\"round\"><rect x=\"6\" y=\"7\" width=\"12\" height=\"11\" rx=\"6\" fill=\"url(#bugRed)\" stroke=\"none\"/><circle cx=\"12\" cy=\"5\" r=\"2\" fill=\"#37474f\" stroke=\"none\"/><line x1=\"6\" y1=\"10\" x2=\"2\" y2=\"9\"/><line x1=\"6\" y1=\"13\" x2=\"2\" y2=\"13\"/><line x1=\"6\" y1=\"16\" x2=\"2\" y2=\"17\"/><line x1=\"18\" y1=\"10\" x2=\"22\" y2=\"9\"/><line x1=\"18\" y1=\"13\" x2=\"22\" y2=\"13\"/><line x1=\"18\" y1=\"16\" x2=\"22\" y2=\"17\"/><path d=\"M10 2c0 0-1-1-2-1m6 2c0 0 1-1 2-1\"/></g>"
        },
        {
            "id": 144,
            "name": "Bug-Inverted-Color",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#b71c1c\" rx=\"4\"/><ellipse cx=\"12\" cy=\"13\" rx=\"5\" ry=\"6\" fill=\"#ffffff\"/><circle cx=\"12\" cy=\"6\" r=\"1.5\" fill=\"#ffffff\"/>"
        },
        {
            "id": 145,
            "name": "BugInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 14s3-2 3-6c0-2-1-4-3-4s-3 2-3 4c0 4 3 6 3 6zM9 9h6M6 14h12M12 20v2M8 22h8\"/>"
        },
        {
            "id": 146,
            "name": "Bulldozer-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"bldGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#607d8b\"/><stop offset=\"100%\" stop-color=\"#37474f\"/></linearGradient></defs><g><rect x=\"4\" y=\"12\" width=\"12\" height=\"6\" fill=\"url(#bldGrad)\" stroke=\"#37474f\" stroke-width=\"1.5\"/><rect x=\"16\" y=\"10\" width=\"4\" height=\"10\" fill=\"#37474f\"/></g>"
        },
        {
            "id": 147,
            "name": "Bulldozer-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#37474f\" rx=\"4\"/><rect x=\"5\" y=\"13\" width=\"10\" height=\"4\" fill=\"#ffffff\"/>"
        },
        {
            "id": 148,
            "name": "Burger-OffInverted",
            "category": "food",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M3 12h18\"/><path d=\"M3 16h18\"/><path d=\"M3 8h18\"/><path d=\"M2 12a10 10 0 0 0 20 0H2z\"/><path d=\"M4 12a8 8 0 0 1 16 0\"/><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"/></g>"
        },
        {
            "id": 149,
            "name": "BurgerInverted",
            "category": "food",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M3 12h18\"/><path d=\"M3 16h18\"/><path d=\"M3 8h18\"/><path d=\"M2 12a10 10 0 0 0 20 0H2z\"/><path d=\"M4 12a8 8 0 0 1 16 0\"/></g>"
        },
        {
            "id": 150,
            "name": "Bus-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"busGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffeb3b\"/><stop offset=\"100%\" stop-color=\"#fbc02d\"/></linearGradient></defs><g><rect x=\"4\" y=\"6\" width=\"16\" height=\"12\" rx=\"2\" fill=\"url(#busGrad)\" stroke=\"#f57f17\" stroke-width=\"1.5\"/><rect x=\"6\" y=\"8\" width=\"12\" height=\"4\" fill=\"#ffffff\"/><circle cx=\"8\" cy=\"18\" r=\"2\" fill=\"#455a64\"/><circle cx=\"16\" cy=\"18\" r=\"2\" fill=\"#455a64\"/></g>"
        },
        {
            "id": 151,
            "name": "Bus-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#f57f17\" rx=\"4\"/><rect x=\"5\" y=\"7\" width=\"14\" height=\"10\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 152,
            "name": "Bus-School-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"bsGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ff9800\"/><stop offset=\"100%\" stop-color=\"#f57c00\"/></linearGradient></defs><g><rect x=\"2\" y=\"8\" width=\"18\" height=\"10\" rx=\"2\" fill=\"url(#bsGrad)\" stroke=\"#f57c00\" stroke-width=\"1.5\"/><rect x=\"4\" y=\"10\" width=\"14\" height=\"4\" fill=\"#ffffff\"/></g>"
        },
        {
            "id": 153,
            "name": "Bus-School-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#f57c00\" rx=\"4\"/><rect x=\"3\" y=\"9\" width=\"16\" height=\"8\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 154,
            "name": "Cable-Car-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"cblGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#795548\"/><stop offset=\"100%\" stop-color=\"#4e342e\"/></linearGradient></defs><g><rect x=\"6\" y=\"8\" width=\"12\" height=\"10\" rx=\"2\" fill=\"url(#cblGrad)\" stroke=\"#4e342e\" stroke-width=\"1.5\"/><line x1=\"12\" y1=\"4\" x2=\"12\" y2=\"8\" stroke=\"#4e342e\" stroke-width=\"3\"/></g>"
        },
        {
            "id": 155,
            "name": "Cable-Car-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#4e342e\" rx=\"4\"/><rect x=\"7\" y=\"9\" width=\"10\" height=\"8\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 156,
            "name": "Cake-Color",
            "category": "food",
            "svgContent": "<defs><linearGradient id=\"cakeGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#e8eaed\"/><stop offset=\"100%\" stop-color=\"#b0bec5\"/></linearGradient></defs><g><rect x=\"3\" y=\"11\" width=\"18\" height=\"10\" rx=\"2\" fill=\"url(#cakeGrad)\"/><path d=\"M3 14c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 4 1\" fill=\"none\" stroke=\"#e91e63\" stroke-width=\"2\"/><line x1=\"12\" y1=\"11\" x2=\"12\" y2=\"5\" stroke=\"#ffb300\" stroke-width=\"2\"/><path d=\"M12 5c1-1 0-3 0-3s-1 2 0 3z\" fill=\"#ff5252\"/></g>"
        },
        {
            "id": 157,
            "name": "Cake-Inverted-Color",
            "category": "food",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#e91e63\" rx=\"4\"/><rect x=\"4\" y=\"12\" width=\"16\" height=\"9\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 158,
            "name": "CakeInverted",
            "category": "food",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8\"/><path d=\"M4 16h16\"/><path d=\"M2 21h20\"/><path d=\"M7 8v3\"/><path d=\"M12 8v3\"/><path d=\"M17 8v3\"/></g>"
        },
        {
            "id": 159,
            "name": "Calculator-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"clcGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#eceff1\"/><stop offset=\"100%\" stop-color=\"#b0bec5\"/></linearGradient></defs><g><rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"2\" fill=\"url(#clcGrad)\" stroke=\"#b0bec5\" stroke-width=\"1.5\"/><rect x=\"7\" y=\"5\" width=\"10\" height=\"4\" fill=\"#37474f\"/><g fill=\"#546e7a\"><rect x=\"7\" y=\"11\" width=\"2\" height=\"2\"/><rect x=\"11\" y=\"11\" width=\"2\" height=\"2\"/><rect x=\"15\" y=\"11\" width=\"2\" height=\"2\"/><rect x=\"7\" y=\"15\" width=\"2\" height=\"2\"/><rect x=\"11\" y=\"15\" width=\"2\" height=\"2\"/><rect x=\"15\" y=\"15\" width=\"2\" height=\"2\"/></g></g>"
        },
        {
            "id": 160,
            "name": "Calculator-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#b0bec5\" rx=\"4\"/><rect x=\"6\" y=\"4\" width=\"12\" height=\"16\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 161,
            "name": "CalculatorInverted",
            "category": "finance",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"6\" y=\"4\" width=\"12\" height=\"6\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"6\" y1=\"11\" x2=\"18\" y2=\"11\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"6\" y1=\"15\" x2=\"18\" y2=\"15\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"6\" y1=\"19\" x2=\"18\" y2=\"19\"/>"
        },
        {
            "id": 162,
            "name": "Calendar-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"calHeader\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#e53935\"/><stop offset=\"100%\" stop-color=\"#c62828\"/></linearGradient></defs><g><rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"2\" fill=\"#f5f5f5\" stroke=\"#e0e0e0\" stroke-width=\"1\"/><path d=\"M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4H3V6z\" fill=\"url(#calHeader)\"/><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\" stroke=\"#cfd8dc\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\" stroke=\"#cfd8dc\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"7\" cy=\"13\" r=\"1.5\" fill=\"#e53935\"/><circle cx=\"12\" cy=\"13\" r=\"1.5\" fill=\"#78909c\"/><circle cx=\"17\" cy=\"13\" r=\"1.5\" fill=\"#78909c\"/><circle cx=\"7\" cy=\"17\" r=\"1.5\" fill=\"#78909c\"/><circle cx=\"12\" cy=\"17\" r=\"1.5\" fill=\"#78909c\"/><circle cx=\"17\" cy=\"17\" r=\"1.5\" fill=\"#78909c\"/></g>"
        },
        {
            "id": 163,
            "name": "Calendar-Event-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"calEvGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ff5252\"/><stop offset=\"100%\" stop-color=\"#c62828\"/></linearGradient></defs><g><rect x=\"3\" y=\"4\" width=\"18\" height=\"17\" rx=\"2\" fill=\"none\" stroke=\"url(#calEvGrad)\" stroke-width=\"2\"/><line x1=\"3\" y1=\"9\" x2=\"21\" y2=\"9\" stroke=\"url(#calEvGrad)\" stroke-width=\"1.5\"/><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"5\" stroke=\"#c62828\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"5\" stroke=\"#c62828\" stroke-width=\"2\" stroke-linecap=\"round\"/><rect x=\"7\" y=\"12\" width=\"4\" height=\"4\" rx=\"1\" fill=\"#ff5252\"/></g>"
        },
        {
            "id": 164,
            "name": "Calendar-Event-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#c62828\" rx=\"4\"/><rect x=\"4\" y=\"5\" width=\"16\" height=\"15\" rx=\"1\" fill=\"#ffffff\"/><rect x=\"4\" y=\"5\" width=\"16\" height=\"4\" fill=\"#c62828\"/><circle cx=\"12\" cy=\"14\" r=\"2\" fill=\"#c62828\"/>"
        },
        {
            "id": 165,
            "name": "CalendarInverted",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"/><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"/><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"/></g>"
        },
        {
            "id": 166,
            "name": "Camera-Color",
            "category": "media",
            "svgContent": "<defs><linearGradient id=\"camBody\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#78909c\"/><stop offset=\"100%\" stop-color=\"#37474f\"/></linearGradient></defs><g><path d=\"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2v10z\" fill=\"url(#camBody)\"/><circle cx=\"12\" cy=\"13\" r=\"4\" fill=\"#263238\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"12\" cy=\"13\" r=\"1.5\" fill=\"#29b6f6\"/></g>"
        },
        {
            "id": 167,
            "name": "Camera-Inverted-Color",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#37474f\" rx=\"4\"/><path d=\"M20 8h-3l-2-3H9L7 8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2z\" fill=\"#ffffff\"/><circle cx=\"12\" cy=\"14\" r=\"3.5\" fill=\"#37474f\"/>"
        },
        {
            "id": 168,
            "name": "CameraInverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z\"/><circle cx=\"12\" cy=\"13\" r=\"4\"/></g>"
        },
        {
            "id": 169,
            "name": "Campfire-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"cmpfGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ff9800\"/><stop offset=\"100%\" stop-color=\"#bf360c\"/></linearGradient></defs><g><path d=\"M12 22l-4-4 4-8 4 8z\" fill=\"#795548\" stroke=\"#5d4037\" stroke-width=\"1.5\"/><path d=\"M12 12c0-6-6-10-6-16a6 6 0 1 0 12 0c0-6-6-10-6-16z\" fill=\"url(#cmpfGrad)\" stroke=\"#bf360c\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 170,
            "name": "Campfire-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#bf360c\" rx=\"4\"/><path d=\"M12 4c0 5-5 9-5 15a5 5 0 1 0 10 0c0-6-5-10-5-15z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 171,
            "name": "CandyInverted",
            "category": "food",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M12 12L2 2M12 12l10-10M12 12L2 22M12 12l10 10\"/><path d=\"M7 7l10 10\"/><path d=\"M17 7l-10 10\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></g>"
        },
        {
            "id": 172,
            "name": "Car-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"carGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#29b6f6\"/><stop offset=\"100%\" stop-color=\"#0288d1\"/></linearGradient></defs><g><path d=\"M4 14l2-6h12l2 6z\" fill=\"url(#carGrad)\" stroke=\"#0288d1\" stroke-width=\"1.5\"/><rect x=\"6\" y=\"8\" width=\"12\" height=\"4\" fill=\"#ffffff\" stroke=\"#0288d1\" stroke-width=\"1.5\"/><circle cx=\"8\" cy=\"18\" r=\"2\" fill=\"#455a64\"/><circle cx=\"16\" cy=\"18\" r=\"2\" fill=\"#455a64\"/></g>"
        },
        {
            "id": 173,
            "name": "Car-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#0288d1\" rx=\"4\"/><path d=\"M5 14l1-5h12l1 5z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 174,
            "name": "Card-Game-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"crdGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffffff\"/><stop offset=\"100%\" stop-color=\"#eceff1\"/></linearGradient></defs><g><rect x=\"4\" y=\"3\" width=\"16\" height=\"18\" rx=\"2\" fill=\"url(#crdGrad)\" stroke=\"#455a64\" stroke-width=\"1.5\"/><path d=\"M12 7c-2 0-3 2-3 3s1 3 3 3 3-2 3-3-1-3-3-3z\" fill=\"#ff5252\"/></g>"
        },
        {
            "id": 175,
            "name": "Card-Game-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#455a64\" rx=\"4\"/><rect x=\"5\" y=\"4\" width=\"14\" height=\"16\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 176,
            "name": "CarrotInverted",
            "category": "food",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M2.5 12.5l7 7L21 8l-7-7-11.5 11.5z\"/><path d=\"M2 13l4-4\"/><path d=\"M15 9l-4 4\"/></g>"
        },
        {
            "id": 177,
            "name": "Cast-Color",
            "category": "communication",
            "svgContent": "<defs><linearGradient id=\"castGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#90caf9\"/><stop offset=\"100%\" stop-color=\"#1e88e5\"/></linearGradient></defs><g fill=\"none\" stroke=\"url(#castGrad)\" stroke-width=\"2\" stroke-linecap=\"round\"><rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\" stroke=\"#b0bec5\"/><path d=\"M2 20a4 4 0 0 1 4-4M2 16a8 8 0 0 1 8 8\" stroke-width=\"2.5\"/><circle cx=\"2\" cy=\"20\" r=\"1\" fill=\"#1e88e5\" stroke=\"none\"/></g>"
        },
        {
            "id": 178,
            "name": "Cast-Inverted-Color",
            "category": "communication",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#1e88e5\" rx=\"4\"/><rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"1\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\"/><path d=\"M3 15a4 4 0 0 1 4 4\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\"/>"
        },
        {
            "id": 179,
            "name": "CastInverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6M2 20h.01\"/></g>"
        },
        {
            "id": 180,
            "name": "Castle-Block-Color",
            "category": "communication",
            "svgContent": "<defs><linearGradient id=\"blkGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffab91\"/><stop offset=\"100%\" stop-color=\"#d84315\"/></linearGradient></defs><g><rect x=\"6\" y=\"8\" width=\"12\" height=\"12\" rx=\"1\" fill=\"url(#blkGrad)\" stroke=\"#bf360c\" stroke-width=\"1.5\"/><path d=\"M7 8V5h2v3M15 8V5h2v3\" stroke=\"#bf360c\" stroke-width=\"2\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 181,
            "name": "Castle-Block-Inverted-Color",
            "category": "communication",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#bf360c\" rx=\"4\"/><rect x=\"7\" y=\"9\" width=\"10\" height=\"10\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 182,
            "name": "Chart-BarInverted",
            "category": "finance",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M18 20V10\"/><path d=\"M12 20V4\"/><path d=\"M6 20v-6\"/><path d=\"M2 20h20\"/></g>"
        },
        {
            "id": 183,
            "name": "Chart-PieInverted",
            "category": "finance",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M21.21 15.89A10 10 0 1 1 8 2.83\"/><path d=\"M22 12A10 10 0 0 0 12 2v10z\"/></g>"
        },
        {
            "id": 184,
            "name": "ChatGPT",
            "category": "ai",
            "svgContent": "<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"/><path d=\"M12 7c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 185,
            "name": "ChatGPTInverted",
            "category": "ai",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 7c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 186,
            "name": "Check-Circle-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"chkCirc\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#81c784\"/><stop offset=\"100%\" stop-color=\"#2e7d32\"/></linearGradient></defs><g><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"url(#chkCirc)\"/><polyline points=\"16 9 11 14 8 11\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></g>"
        },
        {
            "id": 187,
            "name": "Check-CircleInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\"/><polyline points=\"22 4 12 14.01 9 11.01\"/></g>"
        },
        {
            "id": 188,
            "name": "Check-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"chkGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#81c784\"/><stop offset=\"100%\" stop-color=\"#2e7d32\"/></linearGradient></defs><polyline points=\"20 6 9 17 4 12\" fill=\"none\" stroke=\"url(#chkGrad)\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"
        },
        {
            "id": 189,
            "name": "Check-SquareInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polyline points=\"9 11 12 14 22 4\"/><path d=\"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11\"/></g>"
        },
        {
            "id": 190,
            "name": "CheckBoldInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><polyline points=\"20 6 9 17 4 12\" />"
        },
        {
            "id": 191,
            "name": "CheckboxOffInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" ry=\"2\" stroke=\"var(--ax-bg-inverse, white)\" />"
        },
        {
            "id": 192,
            "name": "CheckboxOnInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" ry=\"2\"/><polyline points=\"8 12 11 15 16 8\" stroke=\"var(--ax-bg-inverse, white)\" />"
        },
        {
            "id": 193,
            "name": "CheckCircleInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"16 8 10 14 8 12\"/>"
        },
        {
            "id": 194,
            "name": "CheckCircleSolid",
            "category": "ui",
            "svgContent": "<circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"currentColor\" opacity=\"0.9\"/><polyline points=\"16 8 10 14 8 12\" stroke=\"white\"/>"
        },
        {
            "id": 195,
            "name": "CheckCircleSolidInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"10\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><polyline points=\"16 8 10 14 8 12\" stroke=\"var(--ax-bg-inverse, white)\" />"
        },
        {
            "id": 196,
            "name": "CheckDoubleInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><polyline points=\"2 12 8 18 14 12M8 12 14 18 20 12\" />"
        },
        {
            "id": 197,
            "name": "CheckInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polyline points=\"20 6 9 17 4 12\"/></g>"
        },
        {
            "id": 198,
            "name": "Chef-HatInverted",
            "category": "food",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M6 13.85A4 4 0 0 1 7.4 6a8 8 0 0 1 13.4 4a4 4 0 0 1 0 7.85\"/><path d=\"M6 14h12a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3z\"/></g>"
        },
        {
            "id": 199,
            "name": "Chess-Piece-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"chsGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffffff\"/><stop offset=\"100%\" stop-color=\"#cfd8dc\"/></linearGradient></defs><g><path d=\"M12 3a3 3 0 0 0-3 3c0 2 2 3 2 5h4c0-2 2-3 2-5a3 3 0 0 0-3-3z\" fill=\"url(#chsGrad)\" stroke=\"#455a64\" stroke-width=\"1.5\"/><rect x=\"7\" y=\"16\" width=\"10\" height=\"4\" fill=\"#455a64\"/></g>"
        },
        {
            "id": 200,
            "name": "Chess-Piece-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#455a64\" rx=\"4\"/><path d=\"M12 4a2 2 0 0 0-2 2c0 1 1 2 1 4h4c0-2 1-3 1-4a2 2 0 0 0-2-2z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 201,
            "name": "Chevron-DownInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polyline points=\"6 9 12 15 18 9\"/></g>"
        },
        {
            "id": 202,
            "name": "Chevron-LeftInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polyline points=\"15 18 9 12 15 6\"/></g>"
        },
        {
            "id": 203,
            "name": "Chevron-RightInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polyline points=\"9 18 15 12 9 6\"/></g>"
        },
        {
            "id": 204,
            "name": "Chevron-UpInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polyline points=\"18 15 12 9 6 15\"/></g>"
        },
        {
            "id": 205,
            "name": "ChipInverted",
            "category": "ai",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"3\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM6 9H3M6 15H3M18 9h3M18 15h3M9 6V3M15 6V3M9 21v-3M15 21v-3\"/>"
        },
        {
            "id": 206,
            "name": "Chrome-Color",
            "category": "brands",
            "svgContent": "<defs><linearGradient id=\"chRed\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#ea4335\"/><stop offset=\"100%\" stop-color=\"#c5221f\"/></linearGradient><linearGradient id=\"chGreen\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#34a853\"/><stop offset=\"100%\" stop-color=\"#137333\"/></linearGradient><linearGradient id=\"chYellow\" x1=\"100%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#fabc05\"/><stop offset=\"100%\" stop-color=\"#e37400\"/></linearGradient></defs><g><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"url(#chYellow)\"/><path d=\"M12 2a10 10 0 0 1 8.66 5H12z\" fill=\"url(#chRed)\"/><path d=\"M12 22a10 10 0 0 1-8.66-15L7.5 13z\" fill=\"url(#chGreen)\"/><circle cx=\"12\" cy=\"12\" r=\"4\" fill=\"#ffffff\"/><circle cx=\"12\" cy=\"12\" r=\"3\" fill=\"#1a73e8\"/></g>"
        },
        {
            "id": 207,
            "name": "Chrome-Inverted-Color",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#1a73e8\" rx=\"4\"/><circle cx=\"12\" cy=\"12\" r=\"8\" fill=\"#ffffff\"/><circle cx=\"12\" cy=\"12\" r=\"4\" fill=\"#1a73e8\"/>"
        },
        {
            "id": 208,
            "name": "Claude",
            "category": "ai",
            "svgContent": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/><circle cx=\"7\" cy=\"9\" r=\"1.5\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"17\" cy=\"9\" r=\"1.5\" fill=\"currentColor\" opacity=\"0.9\"/><path d=\"M7 15c2 1 6 1 8 0\"/>"
        },
        {
            "id": 209,
            "name": "ClaudeInverted",
            "category": "ai",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"7\" cy=\"9\" r=\"1.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"17\" cy=\"9\" r=\"1.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M7 15c2 1 6 1 8 0\"/>"
        },
        {
            "id": 210,
            "name": "Clipboard-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"clipGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#b0bec5\"/><stop offset=\"100%\" stop-color=\"#607d8b\"/></linearGradient></defs><g><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#fff8e1\" stroke=\"url(#clipGrad)\" stroke-width=\"1.5\"/><path d=\"M16 4h-2V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1H8a2 2 0 0 0-2 2v1h12V6a2 2 0 0 0-2-2z\" fill=\"#ffb300\"/><line x1=\"9\" y1=\"10\" x2=\"15\" y2=\"10\" stroke=\"#b0bec5\" stroke-width=\"2\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 211,
            "name": "Clipboard-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#607d8b\" rx=\"4\"/><rect x=\"6\" y=\"5\" width=\"12\" height=\"14\" rx=\"1\" fill=\"#ffffff\"/><path d=\"M14 5h-4V3h4v2z\" fill=\"#ffb300\"/>"
        },
        {
            "id": 212,
            "name": "ClipboardInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"/><rect x=\"8\" y=\"2\" width=\"8\" height=\"4\" rx=\"1\"/></g>"
        },
        {
            "id": 213,
            "name": "ClockInverted",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/></g>"
        },
        {
            "id": 214,
            "name": "Cloud-Color",
            "category": "iot",
            "svgContent": "<defs><linearGradient id=\"cloudGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#3a7bd5\"/><stop offset=\"100%\" stop-color=\"#3a6073\"/></linearGradient><filter id=\"cloudShadow\" x=\"-10%\" y=\"-10%\" width=\"120%\" height=\"120%\"><feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"1\" flood-opacity=\"0.15\"/></filter></defs><g filter=\"url(#cloudShadow)\"><path d=\"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z\" fill=\"url(#cloudGrad)\"/><path d=\"M15.5 10.5c.3 0 .5.2.5.5a3.5 3.5 0 0 1-3.5 3.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5a2.5 2.5 0 0 0 2.5-2.5c0-.3.2-.5.5-.5z\" fill=\"#ffffff\" opacity=\"0.2\"/></g>"
        },
        {
            "id": 215,
            "name": "Cloud-DrizzleInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><line x1=\"8\" y1=\"19\" x2=\"8\" y2=\"21\"/><line x1=\"8\" y1=\"13\" x2=\"8\" y2=\"15\"/><line x1=\"16\" y1=\"19\" x2=\"16\" y2=\"21\"/><line x1=\"16\" y1=\"13\" x2=\"16\" y2=\"15\"/><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"/><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"17\"/><path d=\"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\"/></g>"
        },
        {
            "id": 216,
            "name": "Cloud-FogInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M4 14.89A5 5 0 1 1 9 5h7.5a4 4 0 0 1 0 8H4\"/><line x1=\"4\" y1=\"18\" x2=\"20\" y2=\"18\"/><line x1=\"8\" y1=\"22\" x2=\"16\" y2=\"22\"/></g>"
        },
        {
            "id": 217,
            "name": "Cloud-HailInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M16 13h.01M12 13h.01M8 13h.01M16 17h.01M12 17h.01M8 17h.01M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\"/></g>"
        },
        {
            "id": 218,
            "name": "Cloud-Inverted-Color",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#b0bec5\" rx=\"4\"/><path d=\"M17.5 10A4.5 4.5 0 0 0 9 11a3.5 3.5 0 0 0-2 6.5h10.5a4 4 0 0 0 0-7.5z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 219,
            "name": "Cloud-Lightning-Color",
            "category": "iot",
            "svgContent": "<defs><linearGradient id=\"cloudGradL\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#90a4ae\"/><stop offset=\"100%\" stop-color=\"#37474f\"/></linearGradient></defs><g><path d=\"M19 11a4.5 4.5 0 0 0-8.5-1.5A6 6 0 0 0 3 14a4 4 0 0 0 4 4h3\" fill=\"url(#cloudGradL)\"/><polygon points=\"13 12 9 18 12 18 10 23 16 16 13 16\" fill=\"#ffeb3b\"/></g>"
        },
        {
            "id": 220,
            "name": "Cloud-Lightning-Inverted-Color",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#37474f\" rx=\"4\"/><path d=\"M18 10.5a3.5 3.5 0 0 0-6.6-1.2A4.5 4.5 0 0 0 3 13a3 3 0 0 0 3 3h2\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><polygon points=\"14 11 10 16 12 16 10 21 16 14 13 14\" fill=\"#ffeb3b\"/>"
        },
        {
            "id": 221,
            "name": "Cloud-LightningInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9\"/><polyline points=\"13 11 9 17 15 17 11 23\"/></g>"
        },
        {
            "id": 222,
            "name": "Cloud-Rain-Color",
            "category": "ai",
            "svgContent": "<defs><linearGradient id=\"cldRain\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#cfd8dc\"/><stop offset=\"100%\" stop-color=\"#90a4ae\"/></linearGradient></defs><g><path d=\"M19 11a4.5 4.5 0 0 0-8.5-1.5A6 6 0 0 0 3 14a4 4 0 0 0 4 4h10a4.5 4.5 0 0 0 2-8.5z\" fill=\"url(#cldRain)\"/><line x1=\"8\" y1=\"20\" x2=\"6\" y2=\"23\" stroke=\"#29b6f6\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"12\" y1=\"20\" x2=\"10\" y2=\"23\" stroke=\"#29b6f6\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"16\" y1=\"20\" x2=\"14\" y2=\"23\" stroke=\"#29b6f6\" stroke-width=\"2\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 223,
            "name": "Cloud-Rain-Inverted-Color",
            "category": "ai",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#29b6f6\" rx=\"4\"/><path d=\"M17 12a3.5 3.5 0 0 0-6.6-1.2A4.5 4.5 0 0 0 3 14a3 3 0 0 0 3 3h10a3.5 3.5 0 0 0 1-6.8z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 224,
            "name": "Cloud-RainInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M16 13v8M8 13v8M12 15v8M2 14.82A5 5 0 1 1 7 5h.09A7 7 0 0 1 22 12a7 7 0 0 1-7 7H2\"/></g>"
        },
        {
            "id": 225,
            "name": "Cloud-Snow-Color",
            "category": "iot",
            "svgContent": "<defs><linearGradient id=\"cldSnow\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#e1f5fe\"/><stop offset=\"100%\" stop-color=\"#b3e5fc\"/></linearGradient></defs><g><path d=\"M19 11a4.5 4.5 0 0 0-8.5-1.5A6 6 0 0 0 3 14a4 4 0 0 0 4 4h10a4.5 4.5 0 0 0 2-8.5z\" fill=\"url(#cldSnow)\"/><circle cx=\"8\" cy=\"21\" r=\"1\" fill=\"#ffffff\"/><circle cx=\"12\" cy=\"21\" r=\"1\" fill=\"#ffffff\"/><circle cx=\"16\" cy=\"21\" r=\"1\" fill=\"#ffffff\"/></g>"
        },
        {
            "id": 226,
            "name": "Cloud-Snow-Inverted-Color",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#90caf9\" rx=\"4\"/><path d=\"M17 12a3.5 3.5 0 0 0-6.6-1.2A4.5 4.5 0 0 0 3 14a3 3 0 0 0 3 3h10a3.5 3.5 0 0 0 1-6.8z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 227,
            "name": "Cloud-SnowInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25\"/><line x1=\"8\" y1=\"16\" x2=\"8.01\" y2=\"16\"/><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"/><line x1=\"16\" y1=\"16\" x2=\"16.01\" y2=\"16\"/><line x1=\"10\" y1=\"20\" x2=\"10.01\" y2=\"20\"/><line x1=\"14\" y1=\"20\" x2=\"14.01\" y2=\"20\"/></g>"
        },
        {
            "id": 228,
            "name": "Cloud-SunInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M12 2v2\"/><path d=\"M12 22v-2\"/><path d=\"M4.9 4.9l1.4 1.4\"/><path d=\"M17.7 17.7l1.4 1.4\"/><path d=\"M2 12h2\"/><path d=\"M20 12h2\"/><path d=\"M6.3 17.7l-1.4 1.4\"/><path d=\"M17.7 6.3l-1.4-1.4\"/><path d=\"M16 13a4 4 0 0 0-4-4 4 4 0 0 0-3.1 1.5\"/><path d=\"M16 13a4 4 0 0 1 0 8H6a5 5 0 0 1-1.8-9.6\"/></g>"
        },
        {
            "id": 229,
            "name": "Cloud3Inverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M20 17a5 5 0 0 0-8-4 4 4 0 0 0-4.5 7 5 5 0 0 0 10 2z\"/>"
        },
        {
            "id": 230,
            "name": "CloudInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z\"/></g>"
        },
        {
            "id": 231,
            "name": "CloudOffInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M17 16.5V13a4 4 0 0 0-4-4 4 4 0 0 0-3.5 2M2 2l20 20M5.64 5.64A8 8 0 0 1 17 12\"/>"
        },
        {
            "id": 232,
            "name": "CloudyInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z\"/><path d=\"M12 2v2\"/><path d=\"M12 22v-2\"/><path d=\"M4.9 4.9l1.4 1.4\"/><path d=\"M17.7 17.7l1.4 1.4\"/><path d=\"M2 12h2\"/><path d=\"M20 12h2\"/><path d=\"M6.3 17.7l-1.4 1.4\"/><path d=\"M17.7 6.3l-1.4-1.4\"/></g>"
        },
        {
            "id": 233,
            "name": "CocktailInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M4 2L20 2\"/><path d=\"M12 2l4 19\"/><path d=\"M12 2l-4 19\"/><path d=\"M10 2l2 19M14 2l-2 19\"/></g>"
        },
        {
            "id": 234,
            "name": "Code-Color",
            "category": "development",
            "svgContent": "<defs><linearGradient id=\"codeGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#00e676\"/><stop offset=\"100%\" stop-color=\"#00b0ff\"/></linearGradient></defs><g fill=\"none\" stroke=\"url(#codeGrad)\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"16 18 22 12 16 6\"/><polyline points=\"8 6 2 12 8 18\"/></g>"
        },
        {
            "id": 235,
            "name": "Code-Inverted-Color",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#212121\" rx=\"4\"/><g fill=\"none\" stroke=\"#00e676\" stroke-width=\"2\"><polyline points=\"15 17 20 12 15 7\"/><polyline points=\"9 7 4 12 9 17\"/></g>"
        },
        {
            "id": 236,
            "name": "Code-Square-Color",
            "category": "development",
            "svgContent": "<defs><linearGradient id=\"codeSqGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#7e57c2\"/><stop offset=\"100%\" stop-color=\"#4527a0\"/></linearGradient></defs><g><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"3\" fill=\"url(#codeSqGrad)\"/><polyline points=\"8 10 6 12 8 14\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><polyline points=\"16 10 18 12 16 14\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"13\" y1=\"9\" x2=\"11\" y2=\"15\" stroke=\"#ffffff\" stroke-width=\"2\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 237,
            "name": "Code-Square-Inverted-Color",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#4527a0\" rx=\"4\"/><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#ffffff\"/><path d=\"M8 10l-2 2 2 2M16 10l2 2-2 2\" fill=\"none\" stroke=\"#4527a0\" stroke-width=\"1.5\"/>"
        },
        {
            "id": 238,
            "name": "CodeInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polyline points=\"16 18 22 12 16 6\"/><polyline points=\"8 6 2 12 8 18\"/></g>"
        },
        {
            "id": 239,
            "name": "Coffee-Color",
            "category": "food",
            "svgContent": "<defs><linearGradient id=\"cupGradC\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#4e342e\"/><stop offset=\"100%\" stop-color=\"#3e2723\"/></linearGradient></defs><g><path d=\"M4 9h13v5c0 3.3-2.7 6-6 6H10c-3.3 0-6-2.7-6-6V9z\" fill=\"url(#cupGradC)\"/><path d=\"M17 11h2a2 2 0 0 1 0 4h-2v-4z\" fill=\"none\" stroke=\"#4e342e\" stroke-width=\"2\"/><path d=\"M7 2h1v3H7zm4 0h1v3h-1zm4 0h1v3h-1z\" fill=\"#cfd8dc\" opacity=\"0.6\"/><line x1=\"2\" y1=\"22\" x2=\"20\" y2=\"22\" stroke=\"#d7ccc8\" stroke-width=\"2\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 240,
            "name": "Coffee-Inverted-Color",
            "category": "food",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#4e342e\" rx=\"4\"/><path d=\"M5 10h11v4c0 2.5-2 4.5-4.5 4.5S7 16.5 7 14v-4z\" fill=\"#ffffff\"/><path d=\"M16 12h2a1.5 1.5 0 0 1 0 3h-2v-3z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 241,
            "name": "CoffeeInverted",
            "category": "food",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M18 8h1a4 4 0 0 1 0 8h-1\"/><path d=\"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z\"/><line x1=\"6\" y1=\"1\" x2=\"6\" y2=\"4\"/><line x1=\"10\" y1=\"1\" x2=\"10\" y2=\"4\"/><line x1=\"14\" y1=\"1\" x2=\"14\" y2=\"4\"/></g>"
        },
        {
            "id": 242,
            "name": "Cog2",
            "category": "general",
            "svgContent": "<circle cx=\"12\" cy=\"12\" r=\"1.5\" fill=\"currentColor\" opacity=\"0.9\"/><path d=\"M12.5 2.5L11 8.5M12.5 21.5L11 15.5M21.5 12.5L15.5 13M2.5 12.5L8.5 13M19.07 4.93L14.65 9.35M9.35 14.65L4.93 19.07M19.07 19.07L14.65 14.65M9.35 9.35L4.93 4.93\"/>"
        },
        {
            "id": 243,
            "name": "Cog2Inverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"1.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12.5 2.5L11 8.5M12.5 21.5L11 15.5M21.5 12.5L15.5 13M2.5 12.5L8.5 13M19.07 4.93L14.65 9.35M9.35 14.65L4.93 19.07M19.07 19.07L14.65 14.65M9.35 9.35L4.93 4.93\"/>"
        },
        {
            "id": 244,
            "name": "CogInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"3\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 1v6m0 6v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24\"/>"
        },
        {
            "id": 245,
            "name": "CollapseAltInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"/>"
        },
        {
            "id": 246,
            "name": "CollapseInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><polyline points=\"4 14 10 14 10 20\"/><polyline points=\"20 10 14 10 14 4\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"14\" y1=\"10\" x2=\"4\" y2=\"20\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"10\" y1=\"14\" x2=\"20\" y2=\"4\"/>"
        },
        {
            "id": 247,
            "name": "Color-Palette-Premium",
            "category": "arts",
            "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M52 32C52 43.0457 43.0457 52 32 52C20.9543 52 12 43.0457 12 32C12 20.9543 20.9543 12 32 12C37.5228 12 42 16.4772 42 22C42 24.7614 39.7614 27 37 27C35.8954 27 35 26.1046 35 25C35 24.4477 35.4477 24 36 24C36.5523 24 37 23.5523 37 23C37 21.8954 36.1046 21 35 21C33.8954 21 33 21.8954 33 23C33 24.1046 33.8954 25 35 25\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
        },
        {
            "id": 248,
            "name": "Columns-Color",
            "category": "development",
            "svgContent": "<defs><linearGradient id=\"colGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#b0bec5\"/><stop offset=\"100%\" stop-color=\"#78909c\"/></linearGradient></defs><g><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" fill=\"none\" stroke=\"url(#colGrad)\" stroke-width=\"2\"/><rect x=\"5\" y=\"5\" width=\"6\" height=\"14\" fill=\"#78909c\" opacity=\"0.25\"/><rect x=\"13\" y=\"5\" width=\"6\" height=\"14\" fill=\"#78909c\" opacity=\"0.25\"/></g>"
        },
        {
            "id": 249,
            "name": "Columns-Inverted-Color",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#78909c\" rx=\"4\"/><rect x=\"4\" y=\"4\" width=\"7\" height=\"16\" rx=\"1\" fill=\"#ffffff\"/><rect x=\"13\" y=\"4\" width=\"7\" height=\"16\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 250,
            "name": "ColumnsInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><line x1=\"12\" y1=\"3\" x2=\"12\" y2=\"21\"/></g>"
        },
        {
            "id": 251,
            "name": "CommandInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 6 0v-3a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v3a3 3 0 0 0 6 0V6a3 3 0 0 0-6 0v3a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z\"/></g>"
        },
        {
            "id": 252,
            "name": "Compass-Color",
            "category": "iot",
            "svgContent": "<defs><linearGradient id=\"compRim\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#cfd8dc\"/><stop offset=\"100%\" stop-color=\"#78909c\"/></linearGradient></defs><g><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"#f5f7fa\" stroke=\"url(#compRim)\" stroke-width=\"2\"/><polygon points=\"12 12 14 7 17 7 12 12\" fill=\"#ff5252\"/><polygon points=\"12 12 10 17 7 17 12 12\" fill=\"#cfd8dc\"/><circle cx=\"12\" cy=\"12\" r=\"1.5\" fill=\"#37474f\"/></g>"
        },
        {
            "id": 253,
            "name": "Compass-Inverted-Color",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#37474f\" rx=\"4\"/><circle cx=\"12\" cy=\"12\" r=\"8\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><polygon points=\"12 6 14 12 12 14 10 12\" fill=\"#ff5252\"/><polygon points=\"12 18 10 12 12 10 14 12\" fill=\"#ffffff\"/>"
        },
        {
            "id": 254,
            "name": "Compass-Tool-Color",
            "category": "iot",
            "svgContent": "<defs><linearGradient id=\"cmptGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#b0bec5\"/><stop offset=\"100%\" stop-color=\"#455a64\"/></linearGradient></defs><g><path d=\"M12 2l-4 18h8l-4-18z\" fill=\"url(#cmptGrad)\" stroke=\"#455a64\" stroke-width=\"1.5\"/><circle cx=\"12\" cy=\"2\" r=\"1.5\" fill=\"#455a64\"/></g>"
        },
        {
            "id": 255,
            "name": "Compass-Tool-Inverted-Color",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#455a64\" rx=\"4\"/><path d=\"M12 3l-3 17h6l-3-17z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 256,
            "name": "CompassInverted",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polygon points=\"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76\"/></g>"
        },
        {
            "id": 257,
            "name": "Component-Color",
            "category": "development",
            "svgContent": "<defs><linearGradient id=\"compGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#29b6f6\"/><stop offset=\"100%\" stop-color=\"#0288d1\"/></linearGradient></defs><g fill=\"url(#compGrad)\" stroke=\"#0288d1\" stroke-width=\"1.5\"><polygon points=\"12 2 22 7 12 12 2 7\"/><polygon points=\"12 12 22 17 12 22 2 17\" opacity=\"0.6\"/><line x1=\"12\" y1=\"12\" x2=\"12\" y2=\"22\" stroke=\"#ffffff\" opacity=\"0.4\"/></g>"
        },
        {
            "id": 258,
            "name": "Component-Inverted-Color",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#0288d1\" rx=\"4\"/><polygon points=\"12 4 20 8 12 12 4 8\" fill=\"#ffffff\"/><polygon points=\"12 12 20 16 12 20 4 16\" fill=\"#ffffff\" opacity=\"0.5\"/>"
        },
        {
            "id": 259,
            "name": "Confetti-Color",
            "category": "general",
            "svgContent": "<g><rect x=\"4\" y=\"4\" width=\"3\" height=\"3\" fill=\"#ff5252\" transform=\"rotate(20 5.5 5.5)\"/><rect x=\"18\" y=\"5\" width=\"4\" height=\"2\" fill=\"#29b6f6\" transform=\"rotate(-30 20 6)\"/><rect x=\"10\" y=\"18\" width=\"3\" height=\"4\" fill=\"#ffeb3b\" transform=\"rotate(45 11.5 20)\"/><circle cx=\"16\" cy=\"12\" r=\"1.5\" fill=\"#66bb6a\"/></g>"
        },
        {
            "id": 260,
            "name": "Confetti-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#78909c\" rx=\"4\"/><rect x=\"5\" y=\"5\" width=\"2\" height=\"2\" fill=\"#ffffff\"/><rect x=\"15\" y=\"15\" width=\"2\" height=\"2\" fill=\"#ffffff\"/>"
        },
        {
            "id": 261,
            "name": "Contrast-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"cntGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#78909c\"/><stop offset=\"100%\" stop-color=\"#263238\"/></linearGradient></defs><g><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"none\" stroke=\"url(#cntGrad)\" stroke-width=\"2\"/><path d=\"M12 2a10 10 0 0 1 0 20V2z\" fill=\"url(#cntGrad)\"/></g>"
        },
        {
            "id": 262,
            "name": "Contrast-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#263238\" rx=\"4\"/><circle cx=\"12\" cy=\"12\" r=\"8\" fill=\"#ffffff\"/><path d=\"M12 4a8 8 0 0 1 0 16V4z\" fill=\"#263238\"/>"
        },
        {
            "id": 263,
            "name": "ContrastInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"10\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 2a10 10 0 0 0 0 20 10 10 0 0 0 0-20zm0 2v16a8 8 0 0 1 0-16z\"/>"
        },
        {
            "id": 264,
            "name": "Copy2Inverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><polyline points=\"20 8 4 8 4 20 20 20 20 8\"/><polyline points=\"4 4 4 8 20 8 20 4\"/>"
        },
        {
            "id": 265,
            "name": "CopyCheckInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"1\" stroke=\"var(--ax-bg-inverse, white)\" /><rect fill=\"var(--ax-bg-inverse, white)\" x=\"2\" y=\"2\" width=\"13\" height=\"13\" rx=\"1\" stroke=\"var(--ax-bg-inverse, white)\" opacity=\"0.5\"/><polyline points=\"14 10 16 12 19 9\" />"
        },
        {
            "id": 266,
            "name": "CopyErrorInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"1\" stroke=\"var(--ax-bg-inverse, white)\" /><rect fill=\"var(--ax-bg-inverse, white)\" x=\"2\" y=\"2\" width=\"13\" height=\"13\" rx=\"1\" stroke=\"var(--ax-bg-inverse, white)\" opacity=\"0.5\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"16\" y1=\"9\" x2=\"18\" y2=\"13\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"18\" y1=\"9\" x2=\"16\" y2=\"13\"/>"
        },
        {
            "id": 267,
            "name": "CopyInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"4\" y=\"4\" width=\"12\" height=\"12\" rx=\"1\"/>"
        },
        {
            "id": 268,
            "name": "CPU-Color",
            "category": "development",
            "svgContent": "<defs><linearGradient id=\"cpuBody\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#37474f\"/><stop offset=\"100%\" stop-color=\"#212121\"/></linearGradient><linearGradient id=\"cpuCore\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffb300\"/><stop offset=\"100%\" stop-color=\"#ff6f00\"/></linearGradient></defs><g><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"url(#cpuBody)\"/><rect x=\"9\" y=\"9\" width=\"6\" height=\"6\" rx=\"1\" fill=\"url(#cpuCore)\"/><path d=\"M9 1v3M12 1v3M15 1v3M9 20v3M12 20v3M15 20v3M1 9h3M1 12h3M1 15h3M20 9h3M20 12h3M20 15h3\" stroke=\"#ffb300\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 269,
            "name": "CPU-Inverted-Color",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#212121\" rx=\"4\"/><rect x=\"5\" y=\"5\" width=\"14\" height=\"14\" rx=\"1\" fill=\"#ffffff\"/><rect x=\"9\" y=\"9\" width=\"6\" height=\"6\" fill=\"#ffb300\"/>"
        },
        {
            "id": 270,
            "name": "Cpu2Inverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"9\" y=\"9\" width=\"6\" height=\"6\" rx=\"1\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"9\" y1=\"1\" x2=\"9\" y2=\"4\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"15\" y1=\"1\" x2=\"15\" y2=\"4\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"9\" y1=\"20\" x2=\"9\" y2=\"23\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"15\" y1=\"20\" x2=\"15\" y2=\"23\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"20\" y1=\"9\" x2=\"23\" y2=\"9\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"20\" y1=\"15\" x2=\"23\" y2=\"15\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"1\" y1=\"9\" x2=\"4\" y2=\"9\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"1\" y1=\"15\" x2=\"4\" y2=\"15\"/>"
        },
        {
            "id": 271,
            "name": "CpuInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"9\" y=\"9\" width=\"6\" height=\"6\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"9\" y1=\"1\" x2=\"9\" y2=\"4\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"15\" y1=\"1\" x2=\"15\" y2=\"4\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"9\" y1=\"20\" x2=\"9\" y2=\"23\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"15\" y1=\"20\" x2=\"15\" y2=\"23\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"20\" y1=\"9\" x2=\"23\" y2=\"9\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"20\" y1=\"14\" x2=\"23\" y2=\"14\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"1\" y1=\"9\" x2=\"4\" y2=\"9\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"1\" y1=\"14\" x2=\"4\" y2=\"14\"/>"
        },
        {
            "id": 272,
            "name": "Crane-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"crnGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ff9800\"/><stop offset=\"100%\" stop-color=\"#e65100\"/></linearGradient></defs><g><path d=\"M2 22h20M12 22V6l8 4\" fill=\"none\" stroke=\"#e65100\" stroke-width=\"3\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 273,
            "name": "Crane-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#e65100\" rx=\"4\"/><path d=\"M3 21h18M12 21V7l7 3\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>"
        },
        {
            "id": 274,
            "name": "Credit-Card-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"cardGradC\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#673ab7\"/><stop offset=\"100%\" stop-color=\"#432278\"/></linearGradient></defs><g><rect x=\"2\" y=\"5\" width=\"20\" height=\"14\" rx=\"2\" fill=\"url(#cardGradC)\"/><rect x=\"2\" y=\"8\" width=\"20\" height=\"3\" fill=\"#212121\"/><rect x=\"4\" y=\"14\" width=\"4\" height=\"2\" fill=\"#ffd54f\" rx=\"0.5\"/><line x1=\"16\" y1=\"15\" x2=\"19\" y2=\"15\" stroke=\"#ffffff\" stroke-width=\"2\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 275,
            "name": "Credit-Card-Inverted-Color",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#673ab7\" rx=\"4\"/><rect x=\"2\" y=\"5\" width=\"20\" height=\"14\" rx=\"2\" fill=\"#ffffff\"/><rect x=\"2\" y=\"8\" width=\"20\" height=\"3\" fill=\"#673ab7\"/>"
        },
        {
            "id": 276,
            "name": "Credit-CardInverted",
            "category": "finance",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><rect x=\"2\" y=\"5\" width=\"20\" height=\"14\" rx=\"2\"/><path d=\"M2 10h20\"/></g>"
        },
        {
            "id": 277,
            "name": "CreditCardInverted",
            "category": "finance",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><rect x=\"1\" y=\"4\" width=\"22\" height=\"16\" rx=\"2\" ry=\"2\"/><line x1=\"1\" y1=\"10\" x2=\"23\" y2=\"10\"/></g>"
        },
        {
            "id": 278,
            "name": "Crop-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"crpGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ff7043\"/><stop offset=\"100%\" stop-color=\"#bf360c\"/></linearGradient></defs><g fill=\"none\" stroke=\"url(#crpGrad)\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M6 1H6v17h17M18 23v-5H1v0\"/></g>"
        },
        {
            "id": 279,
            "name": "Crop-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#bf360c\" rx=\"4\"/><path d=\"M7 2v15h15M17 22v-3H2\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\"/>"
        },
        {
            "id": 280,
            "name": "Crown-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"crnGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffca28\"/><stop offset=\"100%\" stop-color=\"#ff6f00\"/></linearGradient></defs><g><polygon points=\"2 18 5 7 12 12 19 7 22 18\" fill=\"url(#crnGrad)\" stroke=\"#ff6f00\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><circle cx=\"5\" cy=\"6\" r=\"1\" fill=\"#ffca28\"/><circle cx=\"12\" cy=\"11\" r=\"1\" fill=\"#ffca28\"/><circle cx=\"19\" cy=\"6\" r=\"1\" fill=\"#ffca28\"/></g>"
        },
        {
            "id": 281,
            "name": "Crown-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#ff6f00\" rx=\"4\"/><polygon points=\"3 19 6 8 12 13 18 8 21 19\" fill=\"#ffffff\"/>"
        },
        {
            "id": 282,
            "name": "Crypto",
            "category": "general",
            "svgContent": "<circle cx=\"12\" cy=\"12\" r=\"2\" fill=\"currentColor\" opacity=\"0.9\"/><path d=\"M6 8h12M6 16h12M8 6v12M16 6v12\"/>"
        },
        {
            "id": 283,
            "name": "CryptoInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"2\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M6 8h12M6 16h12M8 6v12M16 6v12\"/>"
        },
        {
            "id": 284,
            "name": "Cup-StrawInverted",
            "category": "food",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M17 8h1a4 4 0 0 1 0 8h-1\"/><path d=\"M6 8h12v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8z\"/><path d=\"M6 8l4-6\"/><path d=\"M10 2l4 4\"/></g>"
        },
        {
            "id": 285,
            "name": "CutleryInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M6 2v14a2 2 0 0 0 4 0V2\"/><path d=\"M14 2v14a2 2 0 0 0 4 0V2\"/><path d=\"M6 22h12\"/></g>"
        },
        {
            "id": 286,
            "name": "Database-Color",
            "category": "development",
            "svgContent": "<defs><linearGradient id=\"dbGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#4eafec\"/><stop offset=\"100%\" stop-color=\"#1a73e8\"/></linearGradient></defs><g fill=\"url(#dbGrad)\"><ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"/><path d=\"M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5\"/><path d=\"M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6\"/><ellipse cx=\"12\" cy=\"11\" rx=\"9\" ry=\"3\" fill=\"#64b5f6\" opacity=\"0.5\"/><ellipse cx=\"12\" cy=\"17\" rx=\"9\" ry=\"3\" fill=\"#64b5f6\" opacity=\"0.5\"/></g>"
        },
        {
            "id": 287,
            "name": "Database-Inverted-Color",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#1a73e8\" rx=\"4\"/><g fill=\"none\" stroke=\"#ffffff\" stroke-width=\"1.5\"><ellipse cx=\"12\" cy=\"6\" rx=\"7\" ry=\"2.5\"/><path d=\"M5 6v5c0 1.5 3.1 2.5 7 2.5s7-1 7-2.5V6M5 11v5c0 1.5 3.1 2.5 7 2.5s7-1 7-2.5v-5\"/></g>"
        },
        {
            "id": 288,
            "name": "DatabaseInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M3 5v14a9 3 0 0 0 18 0V5\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M3 12a9 3 0 0 0 18 0\"/>"
        },
        {
            "id": 289,
            "name": "Dice-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"dceGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffffff\"/><stop offset=\"100%\" stop-color=\"#cfd8dc\"/></linearGradient></defs><g><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"url(#dceGrad)\" stroke=\"#455a64\" stroke-width=\"1.5\"/><circle cx=\"8\" cy=\"8\" r=\"1\" fill=\"#455a64\"/><circle cx=\"16\" cy=\"16\" r=\"1\" fill=\"#455a64\"/><circle cx=\"12\" cy=\"12\" r=\"1\" fill=\"#455a64\"/></g>"
        },
        {
            "id": 290,
            "name": "Dice-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#455a64\" rx=\"4\"/><rect x=\"5\" y=\"5\" width=\"14\" height=\"14\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 291,
            "name": "Disc-Color",
            "category": "media",
            "svgContent": "<defs><linearGradient id=\"discGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#b0ff00\"/><stop offset=\"50%\" stop-color=\"#00e676\"/><stop offset=\"100%\" stop-color=\"#00b0ff\"/></linearGradient></defs><g><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"url(#discGrad)\"/><circle cx=\"12\" cy=\"12\" r=\"3\" fill=\"#ffffff\"/><circle cx=\"12\" cy=\"12\" r=\"1\" fill=\"#212121\"/></g>"
        },
        {
            "id": 292,
            "name": "Disc-Inverted-Color",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#00e676\" rx=\"4\"/><circle cx=\"12\" cy=\"12\" r=\"8\" fill=\"#ffffff\"/><circle cx=\"12\" cy=\"12\" r=\"2\" fill=\"#00e676\"/>"
        },
        {
            "id": 293,
            "name": "DiscordInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M18 1H2v20h16l3-4V1zm-5.5 10c1.33 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm-7 0c1.33 0 2.5 1.12 2.5 2.5S7.33 16 6 16s-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z\"/>"
        },
        {
            "id": 294,
            "name": "DisneyInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 2L7 5v6l5 3 5-3V5l-5-3z\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M9 9l3 2 3-2M9 13l3 2 3-2\"/>"
        },
        {
            "id": 295,
            "name": "Docker-Color",
            "category": "brands",
            "svgContent": "<defs><linearGradient id=\"dockBlue\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#0298f3\"/><stop offset=\"100%\" stop-color=\"#01579b\"/></linearGradient></defs><g fill=\"url(#dockBlue)\"><path d=\"M2 13.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2zM7 9.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z\"/><path d=\"M23 14c-1.5 0-3.5 1-4.5 2.5C17 14 14 13 11 13H1v3c0 3 2.5 5 5.5 5h10c3 0 5.5-2 6-5 .5-.5.5-2 .5-2z\"/></g>"
        },
        {
            "id": 296,
            "name": "DockerInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"2\" y=\"6\" width=\"4\" height=\"4\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"8\" y=\"6\" width=\"4\" height=\"4\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"14\" y=\"6\" width=\"4\" height=\"4\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"2\" y=\"12\" width=\"4\" height=\"4\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"8\" y=\"12\" width=\"4\" height=\"4\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"14\" y=\"12\" width=\"4\" height=\"4\"/>"
        },
        {
            "id": 297,
            "name": "DocumentCheckInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M9 2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-6-7z\"/><polyline points=\"16 12 12 16 10 14\"/>"
        },
        {
            "id": 298,
            "name": "DocumentMinusInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M9 2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-6-7z\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"10\" y1=\"15\" x2=\"16\" y2=\"15\"/>"
        },
        {
            "id": 299,
            "name": "DocumentTextInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M9 2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-6-7z\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"7\" y1=\"13\" x2=\"17\" y2=\"13\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"7\" y1=\"17\" x2=\"13\" y2=\"17\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"9\" y1=\"9\" x2=\"12\" y2=\"6\"/>"
        },
        {
            "id": 300,
            "name": "Dollar-SignInverted",
            "category": "finance",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"/><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"/></g>"
        },
        {
            "id": 301,
            "name": "DollarSignInverted",
            "category": "finance",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"/><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"/></g>"
        },
        {
            "id": 302,
            "name": "Door-Color",
            "category": "objects",
            "svgContent": "<defs><linearGradient id=\"dorGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#a1887f\"/><stop offset=\"100%\" stop-color=\"#795548\"/></linearGradient></defs><g><rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"1\" fill=\"url(#dorGrad)\"/><circle cx=\"16\" cy=\"12\" r=\"1\" fill=\"#ffb300\"/><line x1=\"2\" y1=\"22\" x2=\"22\" y2=\"22\" stroke=\"#4e342e\" stroke-width=\"2\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 303,
            "name": "Door-Inverted-Color",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#795548\" rx=\"4\"/><rect x=\"6\" y=\"3\" width=\"12\" height=\"19\" rx=\"1\" fill=\"#ffffff\"/><circle cx=\"15\" cy=\"12\" r=\"1\" fill=\"#795548\"/>"
        },
        {
            "id": 304,
            "name": "DoorLockInverted",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"3\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M9 9V6a3 3 0 0 1 6 0v3\"/>"
        },
        {
            "id": 305,
            "name": "Dot",
            "category": "ui",
            "svgContent": "<circle cx=\"12\" cy=\"12\" r=\"1\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 306,
            "name": "DotInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"1\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 307,
            "name": "Download-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"downArrow\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#29b6f6\"/><stop offset=\"100%\" stop-color=\"#0288d1\"/></linearGradient></defs><g><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4\" fill=\"none\" stroke=\"#78909c\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><polyline points=\"7 10 12 15 17 10\" fill=\"none\" stroke=\"url(#downArrow)\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\" stroke=\"url(#downArrow)\" stroke-width=\"3\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 308,
            "name": "DownloadInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><polyline points=\"7 10 12 15 17 10\"/><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"/></g>"
        },
        {
            "id": 309,
            "name": "Drone",
            "category": "iot",
            "svgContent": "<rect x=\"9\" y=\"11\" width=\"6\" height=\"2\"/><circle cx=\"6\" cy=\"11\" r=\"1.5\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"18\" cy=\"11\" r=\"1.5\" fill=\"currentColor\" opacity=\"0.9\"/><path d=\"M5 5l2 6M19 5l-2 6M12 1v4m0 10v4\"/>"
        },
        {
            "id": 310,
            "name": "Drone-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"drnGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#607d8b\"/><stop offset=\"100%\" stop-color=\"#37474f\"/></linearGradient></defs><g stroke=\"#37474f\" stroke-width=\"2\"><path d=\"M4 4l4 4M20 4l-4 4M4 20l4-4M20 20l-4-4\"/><rect x=\"8\" y=\"8\" width=\"8\" height=\"8\" rx=\"2\" fill=\"url(#drnGrad)\"/></g>"
        },
        {
            "id": 311,
            "name": "Drone-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#37474f\" rx=\"4\"/><rect x=\"9\" y=\"9\" width=\"6\" height=\"6\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 312,
            "name": "DroneInverted",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"9\" y=\"11\" width=\"6\" height=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"6\" cy=\"11\" r=\"1.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"18\" cy=\"11\" r=\"1.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M5 5l2 6M19 5l-2 6M12 1v4m0 10v4\"/>"
        },
        {
            "id": 313,
            "name": "Droplet-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"drpGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#4fc3f7\"/><stop offset=\"100%\" stop-color=\"#0288d1\"/></linearGradient></defs><g><path d=\"M12 2s-7 6.5-7 11.5a7 7 0 0 0 14 0C19 8.5 12 2 12 2z\" fill=\"url(#drpGrad)\"/><path d=\"M9 12c0-2 1.5-4 1.5-4\" fill=\"none\" stroke=\"#ffffff\" opacity=\"0.4\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 314,
            "name": "Droplet-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#0288d1\" rx=\"4\"/><path d=\"M12 4s-6 6-6 11a6 6 0 0 0 12 0c0-5-6-11-6-11z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 315,
            "name": "DropletInverted",
            "category": "weather",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z\"/></g>"
        },
        {
            "id": 316,
            "name": "Drum-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"drmGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffb74d\"/><stop offset=\"100%\" stop-color=\"#f57c00\"/></linearGradient></defs><g><ellipse cx=\"12\" cy=\"6\" rx=\"8\" ry=\"3\" fill=\"#cfd8dc\" stroke=\"#455a64\" stroke-width=\"1.5\"/><rect x=\"4\" y=\"6\" width=\"16\" height=\"12\" fill=\"url(#drmGrad)\" stroke=\"#455a64\" stroke-width=\"1.5\"/><ellipse cx=\"12\" cy=\"18\" rx=\"8\" ry=\"3\" fill=\"#cfd8dc\" stroke=\"#455a64\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 317,
            "name": "Drum-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#455a64\" rx=\"4\"/><rect x=\"5\" y=\"7\" width=\"14\" height=\"10\" fill=\"#ffffff\"/>"
        },
        {
            "id": 318,
            "name": "DrumstickInverted",
            "category": "food",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M20.2 12.2L12.8 4.8a4 4 0 0 0-5.6 0L2 10l8 8 2.2-2.2a2 2 0 0 1 3.2 0l3 3c1 1 3.8 0 5-1.2s2.2-4 1.2-5z\"/><path d=\"M2 10l4 4\"/></g>"
        },
        {
            "id": 319,
            "name": "DuplicateInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z\" stroke=\"white\"/><polyline points=\"17 21 17 13 7 13 7 3\"/>"
        },
        {
            "id": 320,
            "name": "EarbudsInverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"8\" cy=\"10\" r=\"3\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"16\" cy=\"10\" r=\"3\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M8 7V4a2 2 0 0 1 2-2M16 7V4a2 2 0 0 1-2-2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M6 14c-1 2-2 4-2 6a4 4 0 0 0 4 4M18 14c1 2 2 4 2 6a4 4 0 0 1-4 4\"/>"
        },
        {
            "id": 321,
            "name": "Edit-2Inverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z\"/></g>"
        },
        {
            "id": 322,
            "name": "Edit-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"penBody\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffb74d\"/><stop offset=\"70%\" stop-color=\"#f57c00\"/><stop offset=\"100%\" stop-color=\"#d84315\"/></linearGradient></defs><g><path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\" fill=\"none\" stroke=\"#b0bec5\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z\" fill=\"url(#penBody)\"/><path d=\"M12 15l3-3 1 1-3 3-1-1z\" fill=\"#cfd8dc\"/></g>"
        },
        {
            "id": 323,
            "name": "EditCircleInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"10\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 8l3 3M9 15h6\"/>"
        },
        {
            "id": 324,
            "name": "EditInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z\"/>"
        },
        {
            "id": 325,
            "name": "EditSquareInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 8l4 4M8 16h8\"/>"
        },
        {
            "id": 326,
            "name": "EfficiencyInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M4 19.5A2.5 2.5 0 0 1 6.5 17H17a2 2 0 0 1 2 2v.5a2.5 2.5 0 0 1-2.5 2.5H7a2 2 0 0 1-2-2v-.5a2.5 2.5 0 0 1 1-2M6 11l6-6 6 6\"/>"
        },
        {
            "id": 327,
            "name": "EggInverted",
            "category": "food",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M12 2a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0V8a6 6 0 0 0-6-6z\"/></g>"
        },
        {
            "id": 328,
            "name": "EmojiSadInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"10\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M8 14s1.5-2 4-2 4 2 4 2M9 9h.01M15 9h.01\"/>"
        },
        {
            "id": 329,
            "name": "EmojiSmileInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"10\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01\"/>"
        },
        {
            "id": 330,
            "name": "Eraser-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"ersGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ff8a80\"/><stop offset=\"100%\" stop-color=\"#ff5252\"/></linearGradient></defs><g><path d=\"M20 11l-7 7H2v-4L9 7l11 4z\" fill=\"url(#ersGrad)\" stroke=\"#ff5252\" stroke-width=\"1.5\"/><path d=\"M13 11L9 7M2 18h20\" stroke=\"#ff5252\" stroke-width=\"2\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 331,
            "name": "Eraser-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#ff5252\" rx=\"4\"/><path d=\"M19 10l-6 6H4v-3l6-6 9 3z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 332,
            "name": "EraserInverted",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M9 9h6v6H9z\"/>"
        },
        {
            "id": 333,
            "name": "EthereumInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"10\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 5L8 10L12 13L8 16L12 19L16 16L12 13L16 10L12 5M12 5L8 8L12 11L8 14L12 17L16 14L12 11L16 8L12 5\" />"
        },
        {
            "id": 334,
            "name": "Euro-SignInverted",
            "category": "finance",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M4 10h12\"/><path d=\"M4 14h12\"/><path d=\"M16 6a8 8 0 0 1 0 12\"/></g>"
        },
        {
            "id": 335,
            "name": "Excavator-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"excGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffeb3b\"/><stop offset=\"100%\" stop-color=\"#fbc02d\"/></linearGradient></defs><g><rect x=\"2\" y=\"12\" width=\"12\" height=\"6\" fill=\"url(#excGrad)\" stroke=\"#fbc02d\" stroke-width=\"1.5\"/><path d=\"M14 14l8-6v4l-4 4z\" fill=\"#fbc02d\" stroke=\"#fbc02d\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 336,
            "name": "Excavator-Inverted-Color",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#fbc02d\" rx=\"4\"/><rect x=\"3\" y=\"13\" width=\"10\" height=\"4\" fill=\"#ffffff\"/>"
        },
        {
            "id": 337,
            "name": "ExclamationTriangle",
            "category": "general",
            "svgContent": "<path d=\"M12 2L2 20h20L12 2z\"/><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"/><circle cx=\"12\" cy=\"17\" r=\"0.5\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 338,
            "name": "ExclamationTriangleInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 2L2 20h20L12 2z\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"17\" r=\"0.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 339,
            "name": "ExpandAltInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"/>"
        },
        {
            "id": 340,
            "name": "ExpandInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><polyline points=\"15 3 21 3 21 9\"/><polyline points=\"9 21 3 21 3 15\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"21\" y1=\"3\" x2=\"3\" y2=\"21\"/>"
        },
        {
            "id": 341,
            "name": "External-LinkInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"/><polyline points=\"15 3 21 3 21 9\"/><line x1=\"10\" y1=\"14\" x2=\"21\" y2=\"3\"/></g>"
        },
        {
            "id": 342,
            "name": "Eye-Color",
            "category": "iot",
            "svgContent": "<defs><radialGradient id=\"irisBlue\" cx=\"50%\" cy=\"50%\" r=\"50%\"><stop offset=\"0%\" stop-color=\"#4fc3f7\"/><stop offset=\"100%\" stop-color=\"#0288d1\"/></radialGradient></defs><g><path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\" fill=\"#ffffff\" stroke=\"#b0bec5\" stroke-width=\"1.5\"/><circle cx=\"12\" cy=\"12\" r=\"4\" fill=\"url(#irisBlue)\"/><circle cx=\"12\" cy=\"12\" r=\"1.5\" fill=\"#212121\"/><circle cx=\"13.5\" cy=\"10.5\" r=\"0.75\" fill=\"#ffffff\"/></g>"
        },
        {
            "id": 343,
            "name": "Eye-Inverted-Color",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#0288d1\" rx=\"4\"/><path d=\"M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z\" fill=\"#ffffff\"/><circle cx=\"12\" cy=\"12\" r=\"3.5\" fill=\"#212121\"/>"
        },
        {
            "id": 344,
            "name": "Eye-Off-Color",
            "category": "iot",
            "svgContent": "<defs><radialGradient id=\"irisBlueO\" cx=\"50%\" cy=\"50%\" r=\"50%\"><stop offset=\"0%\" stop-color=\"#4fc3f7\"/><stop offset=\"100%\" stop-color=\"#0288d1\"/></radialGradient></defs><g><path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\" fill=\"#ffffff\" stroke=\"#b0bec5\" stroke-width=\"1.5\"/><circle cx=\"12\" cy=\"12\" r=\"4\" fill=\"url(#irisBlueO)\" opacity=\"0.4\"/><line x1=\"2\" y1=\"2\" x2=\"22\" y2=\"22\" stroke=\"#ef5350\" stroke-width=\"2\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 345,
            "name": "Eye-Off-Inverted-Color",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#0288d1\" rx=\"4\"/><path d=\"M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z\" fill=\"#ffffff\"/><line x1=\"4\" y1=\"4\" x2=\"20\" y2=\"20\" stroke=\"#212121\" stroke-width=\"2\"/>"
        },
        {
            "id": 346,
            "name": "Eye-Off2-Color",
            "category": "iot",
            "svgContent": "<defs><linearGradient id=\"eyeSlash\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ef5350\"/><stop offset=\"100%\" stop-color=\"#b71c1c\"/></linearGradient></defs><g><path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\" fill=\"none\" stroke=\"#b0bec5\" stroke-width=\"1.5\"/><path d=\"M10 10a3 3 0 0 1 4 4\" fill=\"none\" stroke=\"#0288d1\" stroke-width=\"2\"/><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\" stroke=\"url(#eyeSlash)\" stroke-width=\"2.5\"/></g>"
        },
        {
            "id": 347,
            "name": "Eye-Off2-Inverted-Color",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#212121\" rx=\"4\"/><path d=\"M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z\" fill=\"#ffffff\"/><line x1=\"2\" y1=\"2\" x2=\"22\" y2=\"22\" stroke=\"#ef5350\" stroke-width=\"2\"/>"
        },
        {
            "id": 348,
            "name": "Eye-OffInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24\"/><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"/></g>"
        },
        {
            "id": 349,
            "name": "EyeInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></g>"
        },
        {
            "id": 350,
            "name": "EyeOffInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24\"/><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"/></g>"
        },
        {
            "id": 351,
            "name": "Fast-ForwardInverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polygon points=\"13 19 22 12 13 5 13 19\"/><polygon points=\"2 19 11 12 2 5 2 19\"/></g>"
        },
        {
            "id": 352,
            "name": "Figma",
            "category": "brands",
            "svgContent": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/><circle cx=\"9\" cy=\"9\" r=\"2.5\" fill=\"currentColor\" opacity=\"0.9\"/><path d=\"M14 9c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5z\"/>"
        },
        {
            "id": 353,
            "name": "FigmaInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"9\" cy=\"9\" r=\"2.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M14 9c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5z\"/>"
        },
        {
            "id": 354,
            "name": "File-Color",
            "category": "objects",
            "svgContent": "<defs><linearGradient id=\"filePage\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffffff\"/><stop offset=\"100%\" stop-color=\"#eceff1\"/></linearGradient></defs><g><polygon points=\"14 2 6 2 6 22 18 22 18 6 14 2\" fill=\"url(#filePage)\" stroke=\"#b0bec5\" stroke-width=\"1\"/><polygon points=\"14 2 14 6 18 6\" fill=\"#cfd8dc\"/><line x1=\"9\" y1=\"11\" x2=\"15\" y2=\"11\" stroke=\"#90a4ae\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"9\" y1=\"15\" x2=\"15\" y2=\"15\" stroke=\"#90a4ae\" stroke-width=\"2\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 355,
            "name": "File-MinusInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/><line x1=\"9\" y1=\"15\" x2=\"15\" y2=\"15\"/></g>"
        },
        {
            "id": 356,
            "name": "File-PlusInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"12\"/><line x1=\"9\" y1=\"15\" x2=\"15\" y2=\"15\"/></g>"
        },
        {
            "id": 357,
            "name": "File-Text-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"fltGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffffff\"/><stop offset=\"100%\" stop-color=\"#eceff1\"/></linearGradient></defs><g><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\" fill=\"url(#fltGrad)\" stroke=\"#546e7a\" stroke-width=\"1.5\"/><path d=\"M14 2v6h6M8 12h8M8 16h8\" stroke=\"#546e7a\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 358,
            "name": "File-Text-Inverted-Color",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#546e7a\" rx=\"4\"/><path d=\"M14 3v5h6M7 12h10M7 16h10\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>"
        },
        {
            "id": 359,
            "name": "File-TextInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/><polyline points=\"10 9 9 9 8 9\"/></g>"
        },
        {
            "id": 360,
            "name": "FileInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/></g>"
        },
        {
            "id": 361,
            "name": "Film-Roll-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"flmGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#455a64\"/><stop offset=\"100%\" stop-color=\"#263238\"/></linearGradient></defs><g><circle cx=\"12\" cy=\"12\" r=\"8\" fill=\"url(#flmGrad)\" stroke=\"#263238\" stroke-width=\"1.5\"/><rect x=\"10\" y=\"4\" width=\"4\" height=\"2\" fill=\"#263238\"/><rect x=\"10\" y=\"18\" width=\"4\" height=\"2\" fill=\"#263238\"/></g>"
        },
        {
            "id": 362,
            "name": "Film-Roll-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#263238\" rx=\"4\"/><circle cx=\"12\" cy=\"12\" r=\"7\" fill=\"#ffffff\"/>"
        },
        {
            "id": 363,
            "name": "FilmInverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"2.18\" ry=\"2.18\"/><line x1=\"7\" y1=\"2\" x2=\"7\" y2=\"22\"/><line x1=\"17\" y1=\"2\" x2=\"17\" y2=\"22\"/><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"/><line x1=\"2\" y1=\"7\" x2=\"7\" y2=\"7\"/><line x1=\"2\" y1=\"17\" x2=\"7\" y2=\"17\"/><line x1=\"17\" y1=\"7\" x2=\"22\" y2=\"7\"/><line x1=\"17\" y1=\"17\" x2=\"22\" y2=\"17\"/></g>"
        },
        {
            "id": 364,
            "name": "Filter",
            "category": "ui",
            "svgContent": "<polygon points=\"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3\"/><circle cx=\"12\" cy=\"10\" r=\"2\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 365,
            "name": "FilterActive",
            "category": "ui",
            "svgContent": "<polygon points=\"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3\"/><circle cx=\"14\" cy=\"8\" r=\"2\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 366,
            "name": "FilterActiveInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><polygon points=\"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"14\" cy=\"8\" r=\"2\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 367,
            "name": "FilterClearInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><polygon points=\"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"2\" y1=\"2\" x2=\"22\" y2=\"22\" />"
        },
        {
            "id": 368,
            "name": "FilterInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><polygon points=\"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"10\" r=\"2\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 369,
            "name": "FingerprintInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M2 12a10 10 0 1 1 20 0\"/><path d=\"M5 15a7 7 0 1 1 14 0\"/><path d=\"M8 18a4 4 0 1 1 8 0\"/><path d=\"M12 21v-2\"/><path d=\"M12 18v-2\"/><path d=\"M12 15v-2\"/><path d=\"M12 12v-2\"/></g>"
        },
        {
            "id": 370,
            "name": "Fire-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"fireOuter\" x1=\"0%\" y1=\"100%\" x2=\"0%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#e65100\"/><stop offset=\"50%\" stop-color=\"#f57c00\"/><stop offset=\"100%\" stop-color=\"#ffcc80\"/></linearGradient><linearGradient id=\"fireInner\" x1=\"0%\" y1=\"100%\" x2=\"0%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#ff3d00\"/><stop offset=\"100%\" stop-color=\"#ffea00\"/></linearGradient></defs><g><path d=\"M18.5 14.5c-1.5 2-4 3-6 3-3.33 0-5-2-5-5 0-1.38.5-2 1-3 1.07-2.14.22-4.1 3-5-1 0-3 1-3 3 0 1.25.5 2 1 3 1.07 2.14.22 4.1-3 5z\" fill=\"url(#fireOuter)\"/><path d=\"M15 15.5c-.8 1.2-2.2 1.8-3.3 1.8-1.8 0-2.7-1.2-2.7-3 0-.8.3-1.2.5-1.8.6-1.3.1-2.5 1.6-3-.5 0-1.6.6-1.6 1.8 0 .8.3 1.2.5 1.8.6 1.3.1 2.5-1.6 3z\" fill=\"url(#fireInner)\" opacity=\"0.9\"/></g>"
        },
        {
            "id": 371,
            "name": "Fire-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#bf360c\" rx=\"4\"/><path d=\"M12 3c0 5-5 9-5 15a5 5 0 1 0 10 0c0-6-5-10-5-15z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 372,
            "name": "Fire-Truck-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"ftkGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#f44336\"/><stop offset=\"100%\" stop-color=\"#b71c1c\"/></linearGradient></defs><g><rect x=\"2\" y=\"10\" width=\"16\" height=\"8\" rx=\"2\" fill=\"url(#ftkGrad)\" stroke=\"#b71c1c\" stroke-width=\"1.5\"/><path d=\"M18 12h4v2h-4z\" fill=\"#ffffff\"/></g>"
        },
        {
            "id": 373,
            "name": "Fire-Truck-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#b71c1c\" rx=\"4\"/><rect x=\"3\" y=\"11\" width=\"14\" height=\"6\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 374,
            "name": "FirebaseInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><polygon points=\"12 2 6 6 8 14 12 18 16 14 18 6 12 2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 6v8M8 8l4 4M16 8l-4 4\"/>"
        },
        {
            "id": 375,
            "name": "FireInverted",
            "category": "weather",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.144-.22-4.098 3-5 1 0 3 1 3 3 0 1.25-.5 2-1 3-1.072 2.144-.22 4.098 3 5-1.5 2-4 3-6 3-3.333 0-5-2-5-5z\"/></g>"
        },
        {
            "id": 376,
            "name": "Fireworks-Color",
            "category": "general",
            "svgContent": "<g stroke-width=\"2\" stroke-linecap=\"round\"><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"6\" stroke=\"#ffeb3b\"/><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"22\" stroke=\"#ffeb3b\"/><line x1=\"2\" y1=\"12\" x2=\"6\" y2=\"12\" stroke=\"#ffeb3b\"/><line x1=\"18\" y1=\"12\" x2=\"22\" y2=\"12\" stroke=\"#ffeb3b\"/><circle cx=\"12\" cy=\"12\" r=\"3\" fill=\"#ff5252\"/></g>"
        },
        {
            "id": 377,
            "name": "Fireworks-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#ffeb3b\" rx=\"4\"/><circle cx=\"12\" cy=\"12\" r=\"4\" fill=\"#ff5252\"/>"
        },
        {
            "id": 378,
            "name": "Fishing-Rod-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"rodGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#8d6e63\"/><stop offset=\"100%\" stop-color=\"#5d4037\"/></linearGradient></defs><g><path d=\"M22 2L2 22M15 2h5v5\" fill=\"none\" stroke=\"#5d4037\" stroke-width=\"3\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 379,
            "name": "Fishing-Rod-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#5d4037\" rx=\"4\"/><path d=\"M21 3L3 21\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>"
        },
        {
            "id": 380,
            "name": "FishInverted",
            "category": "food",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M6 12h12\"/><path d=\"M12 12c-4 0-8 4-8 4V8s4 4 8 4z\"/><path d=\"M12 12c4 0 8 4 8 4V8s-4 4-8 4z\"/><path d=\"M22 12h-4\"/><path d=\"M18 12l2-2M18 12l2 2\"/></g>"
        },
        {
            "id": 381,
            "name": "FitnessInverted",
            "category": "health",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M9 9h6M9 13h6M9 17h2\"/>"
        },
        {
            "id": 382,
            "name": "FitnessTracker",
            "category": "health",
            "svgContent": "<rect x=\"2\" y=\"6\" width=\"20\" height=\"12\" rx=\"2\"/><circle cx=\"6\" cy=\"12\" r=\"1\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"12\" cy=\"12\" r=\"1.5\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"18\" cy=\"12\" r=\"1\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 383,
            "name": "FitnessTrackerInverted",
            "category": "health",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"2\" y=\"6\" width=\"20\" height=\"12\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"6\" cy=\"12\" r=\"1\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"1.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"18\" cy=\"12\" r=\"1\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 384,
            "name": "Flag-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"flagBlue\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#29b6f6\"/><stop offset=\"100%\" stop-color=\"#0288d1\"/></linearGradient></defs><g><path d=\"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z\" fill=\"url(#flagBlue)\"/><line x1=\"4\" y1=\"22\" x2=\"4\" y2=\"15\" stroke=\"#455a64\" stroke-width=\"2\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 385,
            "name": "Flag-Inverted-Color",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#0288d1\" rx=\"4\"/><path d=\"M5 4v16\" stroke=\"#ffffff\" stroke-width=\"2\"/><path d=\"M5 4s2 1 5 1 4-2 7-2 3 1 3 1v9s-1-1-3-1-5 2-7 2-5-1-5-1V4z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 386,
            "name": "FlagInverted",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z\"/><line x1=\"4\" y1=\"22\" x2=\"4\" y2=\"15\"/></g>"
        },
        {
            "id": 387,
            "name": "Flame-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"flmGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ff9100\"/><stop offset=\"100%\" stop-color=\"#ff3d00\"/></linearGradient></defs><path d=\"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3.5-.5 1.5-2 2.5-2 4a1.5 1.5 0 0 0 1.5 1.5z\" fill=\"#ffea00\"/><path d=\"M12 2c0 0-4 4.5-4 8.5a4 4 0 0 0 8 0c0-3-4-6.5-4-8.5z\" fill=\"url(#flmGrad)\" opacity=\"0.85\"/>"
        },
        {
            "id": 388,
            "name": "Flame-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#ff3d00\" rx=\"4\"/><path d=\"M12 4s-4 4-4 8a4 4 0 0 0 8 0c0-4-4-8-4-8z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 389,
            "name": "Flame-Kindling-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"fkGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffb74d\"/><stop offset=\"100%\" stop-color=\"#e65100\"/></linearGradient></defs><g><path d=\"M5 20l14-4M19 20l-14-4\" stroke=\"#8d6e63\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><path d=\"M12 3c0 0-3.5 4-3.5 7s1.5 5 3.5 5 3.5-2 3.5-5-3.5-7-3.5-7z\" fill=\"url(#fkGrad)\"/></g>"
        },
        {
            "id": 390,
            "name": "Flame-Kindling-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#e65100\" rx=\"4\"/><path d=\"M12 4s-4 4-4 7a4 4 0 0 0 8 0c0-3-4-7-4-7z\" fill=\"#ffffff\"/><line x1=\"4\" y1=\"19\" x2=\"20\" y2=\"17\" stroke=\"#ffffff\" stroke-width=\"2\"/>"
        },
        {
            "id": 391,
            "name": "FlameInverted",
            "category": "weather",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 2c1 0 2 .5 2 1.5 0 2-2 4-2 7s2 3 2 5-1 3-3 3-3-1-3-3 2-3 2-5c0-3-2-5-2-7 0-1 1-1.5 2-1.5z\"/>"
        },
        {
            "id": 392,
            "name": "Flash-Color",
            "category": "general",
            "svgContent": "<g fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"><path d=\"M13 2L3 14h9l-1 8 10-12h-9l1-8z\" fill=\"#ffeb3b\" stroke=\"#fbc02d\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 393,
            "name": "Flash-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#fbc02d\" rx=\"4\"/><path d=\"M13 3L4 14h8l-1 7 9-11h-8l1-7z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 394,
            "name": "Flashlight-Color",
            "category": "iot",
            "svgContent": "<defs><linearGradient id=\"flshGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#78909c\"/><stop offset=\"100%\" stop-color=\"#37474f\"/></linearGradient></defs><g><path d=\"M18 2H6v4l3 3v11a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9l3-3V2z\" fill=\"url(#flshGrad)\"/><ellipse cx=\"12\" cy=\"2\" rx=\"6\" ry=\"1\" fill=\"#fff59d\"/><circle cx=\"12\" cy=\"13\" r=\"1\" fill=\"#00e676\"/></g>"
        },
        {
            "id": 395,
            "name": "Flashlight-Inverted-Color",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#37474f\" rx=\"4\"/><path d=\"M16 4H8v3l3 3v9h2v-9l3-3V4z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 396,
            "name": "Flashlight2Inverted",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M6 9l6-6 6 6v3H6V9z\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"8\" y=\"13\" width=\"8\" height=\"8\" rx=\"1\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"12\" y1=\"13\" x2=\"12\" y2=\"21\"/>"
        },
        {
            "id": 397,
            "name": "FlashlightInverted",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M15 2H9v3l-3 4v4h12V9l-3-3V2z\"/><path d=\"M9 13v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-6\"/></g>"
        },
        {
            "id": 398,
            "name": "Flower-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"flwGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ff4081\"/><stop offset=\"100%\" stop-color=\"#c2185b\"/></linearGradient></defs><g fill=\"url(#flwGrad)\"><circle cx=\"12\" cy=\"7\" r=\"3.5\"/><circle cx=\"12\" cy=\"17\" r=\"3.5\"/><circle cx=\"7\" cy=\"12\" r=\"3.5\"/><circle cx=\"17\" cy=\"12\" r=\"3.5\"/><circle cx=\"12\" cy=\"12\" r=\"3\" fill=\"#ffeb3b\"/></g>"
        },
        {
            "id": 399,
            "name": "Flower-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#c2185b\" rx=\"4\"/><circle cx=\"12\" cy=\"8\" r=\"3\" fill=\"#ffffff\"/><circle cx=\"12\" cy=\"16\" r=\"3\" fill=\"#ffffff\"/><circle cx=\"8\" cy=\"12\" r=\"3\" fill=\"#ffffff\"/><circle cx=\"16\" cy=\"12\" r=\"3\" fill=\"#ffffff\"/><circle cx=\"12\" cy=\"12\" r=\"2.5\" fill=\"#ffeb3b\"/>"
        },
        {
            "id": 400,
            "name": "Flower-Small-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"flsGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#f8bbd0\"/><stop offset=\"100%\" stop-color=\"#e91e63\"/></linearGradient></defs><g><circle cx=\"12\" cy=\"12\" r=\"3\" fill=\"#ffeb3b\" stroke=\"#fbc02d\" stroke-width=\"1.5\"/><path d=\"M12 2a4 4 0 0 1 0 8 4 4 0 0 1 0-8zM12 14a4 4 0 0 1 0 8 4 4 0 0 1 0-8zM2 12a4 4 0 0 1 8 0 4 4 0 0 1-8 0zM14 12a4 4 0 0 1 8 0 4 4 0 0 1-8 0z\" fill=\"url(#flsGrad)\" stroke=\"#e91e63\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 401,
            "name": "Flower-Small-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#e91e63\" rx=\"4\"/><circle cx=\"12\" cy=\"12\" r=\"2\" fill=\"#ffffff\"/>"
        },
        {
            "id": 402,
            "name": "Folder-Color",
            "category": "objects",
            "svgContent": "<defs><linearGradient id=\"fldGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffb74d\"/><stop offset=\"100%\" stop-color=\"#f57c00\"/></linearGradient></defs><g><path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\" fill=\"url(#fldGrad)\" stroke=\"#e65100\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 403,
            "name": "Folder-Inverted-Color",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#e65100\" rx=\"4\"/><path d=\"M21 19V8H11l-2-3H4v14h17z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 404,
            "name": "Folder-Minus-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"foldBaseM\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffe082\"/><stop offset=\"100%\" stop-color=\"#ffa000\"/></linearGradient></defs><g><path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\" fill=\"url(#foldBaseM)\"/><path d=\"M2 8h20v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8z\" fill=\"#ffb300\"/><line x1=\"9\" y1=\"14\" x2=\"15\" y2=\"14\" stroke=\"#f44336\" stroke-width=\"2.5\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 405,
            "name": "Folder-MinusInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"/><line x1=\"9\" y1=\"14\" x2=\"15\" y2=\"14\"/></g>"
        },
        {
            "id": 406,
            "name": "Folder-Plus-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"foldBase\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffe082\"/><stop offset=\"100%\" stop-color=\"#ffa000\"/></linearGradient></defs><g><path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\" fill=\"url(#foldBase)\"/><path d=\"M2 8h20v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8z\" fill=\"#ffb300\"/><line x1=\"12\" y1=\"11\" x2=\"12\" y2=\"17\" stroke=\"#4caf50\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><line x1=\"9\" y1=\"14\" x2=\"15\" y2=\"14\" stroke=\"#4caf50\" stroke-width=\"2.5\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 407,
            "name": "Folder-PlusInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"/><line x1=\"12\" y1=\"11\" x2=\"12\" y2=\"17\"/><line x1=\"9\" y1=\"14\" x2=\"15\" y2=\"14\"/></g>"
        },
        {
            "id": 408,
            "name": "FolderInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"/></g>"
        },
        {
            "id": 409,
            "name": "FolderOpenInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M20 6a2 2 0 0 0-2-2H8l-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z\"/>"
        },
        {
            "id": 410,
            "name": "ForkInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M18 2v10a4 4 0 0 1-8 0V2\"/><path d=\"M14 2v10\"/><path d=\"M6 2v10a2 2 0 0 0 4 0V2\"/><path d=\"M18 22H6\"/></g>"
        },
        {
            "id": 411,
            "name": "Forklift-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"frkGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ff9800\"/><stop offset=\"100%\" stop-color=\"#f57c00\"/></linearGradient></defs><g><rect x=\"4\" y=\"12\" width=\"8\" height=\"6\" fill=\"url(#frkGrad)\" stroke=\"#f57c00\" stroke-width=\"1.5\"/><path d=\"M12 10h4v10h-2v-8h-2z\" fill=\"#f57c00\" stroke=\"#f57c00\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 412,
            "name": "Forklift-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#f57c00\" rx=\"4\"/><rect x=\"5\" y=\"13\" width=\"6\" height=\"4\" fill=\"#ffffff\"/>"
        },
        {
            "id": 413,
            "name": "ForwardSolid",
            "category": "ui",
            "svgContent": "<polyline points=\"5 12 19 12 13 6\" fill=\"currentColor\" opacity=\"0.9\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/>"
        },
        {
            "id": 414,
            "name": "ForwardSolidInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><polyline points=\"5 12 19 12 13 6\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/>"
        },
        {
            "id": 415,
            "name": "ForwardSolidThin",
            "category": "ui",
            "svgContent": "<g fill=\"none\" stroke-width=\"0.5\"><polyline points=\"5 12 19 12 13 6\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 416,
            "name": "Frown-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"faceSad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffb74d\"/><stop offset=\"100%\" stop-color=\"#f57c00\"/></linearGradient></defs><g><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"url(#faceSad)\"/><path d=\"M16 16s-1.5-2-4-2-4 2-4 2\" fill=\"none\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"9\" cy=\"9\" r=\"1.5\" fill=\"#5d4037\"/><circle cx=\"15\" cy=\"9\" r=\"1.5\" fill=\"#5d4037\"/></g>"
        },
        {
            "id": 417,
            "name": "Frown-OffInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M8 16s1.5-2 4-2 4 2 4 2\"/><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"/><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"/><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"/></g>"
        },
        {
            "id": 418,
            "name": "FrownInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M16 16s-1.5-2-4-2-4 2-4 2\"/><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"/><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"/></g>"
        },
        {
            "id": 419,
            "name": "Game-Controller-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"conGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#455a64\"/><stop offset=\"100%\" stop-color=\"#263238\"/></linearGradient></defs><g><path d=\"M20 8h-4l-2-3h-4l-2 3H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z\" fill=\"url(#conGrad)\" stroke=\"#263238\" stroke-width=\"1.5\"/><circle cx=\"16\" cy=\"13\" r=\"1.5\" fill=\"#ff5252\"/></g>"
        },
        {
            "id": 420,
            "name": "Game-Controller-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#263238\" rx=\"4\"/><rect x=\"3\" y=\"9\" width=\"18\" height=\"8\" rx=\"2\" fill=\"#ffffff\"/>"
        },
        {
            "id": 421,
            "name": "Gauge2Inverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 16 12 12 9 9\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"12\" y1=\"6\" x2=\"12\" y2=\"2\"/>"
        },
        {
            "id": 422,
            "name": "GCPInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"9\" stroke=\"var(--ax-bg-inverse, white)\" /><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 5a7 7 0 0 1 7 7M12 19a7 7 0 0 1-7-7\" stroke=\"var(--ax-bg-inverse, white)\" />"
        },
        {
            "id": 423,
            "name": "Gear",
            "category": "general",
            "svgContent": "<circle cx=\"12\" cy=\"12\" r=\"1\" fill=\"currentColor\" opacity=\"0.9\"/><path d=\"M12 1v2m0 16v2M23 12h-2M3 12H1M20.49 3.51l-1.41 1.41M4.93 19.07l-1.41 1.41M20.49 20.49l-1.41-1.41M4.93 4.93l-1.41-1.41\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/>"
        },
        {
            "id": 424,
            "name": "GearInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"1\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 1v2m0 16v2M23 12h-2M3 12H1M20.49 3.51l-1.41 1.41M4.93 19.07l-1.41 1.41M20.49 20.49l-1.41-1.41M4.93 4.93l-1.41-1.41\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"4\"/>"
        },
        {
            "id": 425,
            "name": "Gemini",
            "category": "ai",
            "svgContent": "<path d=\"M12 2L2 7v10l10 5 10-5V7l-10-5zm0 3l7 3.5v7L12 17l-7-3.5v-7L12 5z\"/><circle cx=\"12\" cy=\"12\" r=\"2\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 426,
            "name": "GeminiInverted",
            "category": "ai",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 2L2 7v10l10 5 10-5V7l-10-5zm0 3l7 3.5v7L12 17l-7-3.5v-7L12 5z\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"2\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 427,
            "name": "Gift-Color",
            "category": "finance",
            "svgContent": "<defs><linearGradient id=\"giftRed\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ef5350\"/><stop offset=\"100%\" stop-color=\"#d32f2f\"/></linearGradient></defs><g><rect x=\"3\" y=\"9\" width=\"18\" height=\"12\" rx=\"1\" fill=\"url(#giftRed)\"/><rect x=\"2\" y=\"7\" width=\"20\" height=\"3\" fill=\"#e53935\" rx=\"1\"/><path d=\"M12 7c-2-3-5-2-5 0s3 2 5 0c2 2 5 0 5-2s-3-3-5 0z\" fill=\"#fff176\"/><line x1=\"12\" y1=\"7\" x2=\"12\" y2=\"21\" stroke=\"#fff176\" stroke-width=\"2.5\"/></g>"
        },
        {
            "id": 428,
            "name": "Gift-Inverted-Color",
            "category": "finance",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#d32f2f\" rx=\"4\"/><rect x=\"4\" y=\"10\" width=\"16\" height=\"10\" fill=\"#ffffff\"/><path d=\"M12 10c-1.5-2.5-4-1.5-4 1s2.5 1.5 4-1c1.5 2.5 4 1 4-1s-2.5-3.5-4 1z\" fill=\"#ffffff\"/><line x1=\"12\" y1=\"6\" x2=\"12\" y2=\"20\" stroke=\"#d32f2f\" stroke-width=\"2\"/>"
        },
        {
            "id": 429,
            "name": "GiftInverted",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polyline points=\"20 12 20 22 4 22 4 12\"/><rect x=\"2\" y=\"7\" width=\"20\" height=\"5\"/><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"7\"/><path d=\"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z\"/></g>"
        },
        {
            "id": 430,
            "name": "GitHub-Color",
            "category": "brands",
            "svgContent": "<defs><linearGradient id=\"gitHubGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#333333\"/><stop offset=\"100%\" stop-color=\"#111111\"/></linearGradient></defs><g><path d=\"M12 2A10 10 0 0 0 8.8 21.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.7 9.7 0 0 1 5.1 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.6 4.9.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z\" fill=\"url(#gitHubGrad)\"/><path d=\"M6.4 17.7c-.1 0-.2-.1-.2-.2s.1-.2.2-.2.2.1.2.2-.1.2-.2.2zm-.4-.4c0-.1 0-.2-.1-.2s-.2 0-.2.1 0 .2.1.2.2 0 .2-.1z\" fill=\"#ffffff\" opacity=\"0.5\"/></g>"
        },
        {
            "id": 431,
            "name": "GitHub-Inverted-Color",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#24292e\" rx=\"4\"/><path d=\"M12 4a8 8 0 0 0-2.5 15.6c.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1.1-2.7-1.1-.4-1-1-1.2-1-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.7-.9-3.7-4 0-.9.3-1.6.8-2.2-.1-.2-.3-1 .1-2.1 0 0 .7-.2 2.2.8a7.8 7.8 0 0 1 4.2 0c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.2 0 3.1-1.9 3.8-3.7 4 .3.3.6.8.6 1.5v2.2c0 .2.1.5.5.4A8 8 0 0 0 12 4z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 432,
            "name": "GitHubInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z\"/>"
        },
        {
            "id": 433,
            "name": "GitLabInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 2L3 8l2 7-2 7 9 5 9-5-2-7 2-7-9-6z\"/>"
        },
        {
            "id": 434,
            "name": "Glass-WaterInverted",
            "category": "food",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M5 2h14l-2 20H7L5 2z\"/><path d=\"M5 2h14\"/><path d=\"M7 6h10\"/></g>"
        },
        {
            "id": 435,
            "name": "GlassesInverted",
            "category": "food",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"6\" cy=\"12\" r=\"3\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"18\" cy=\"12\" r=\"3\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"9\" y1=\"12\" x2=\"15\" y2=\"12\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M6 8v8M18 8v8\"/>"
        },
        {
            "id": 436,
            "name": "Globe-Color",
            "category": "iot",
            "svgContent": "<defs><linearGradient id=\"globeGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#4fc3f7\"/><stop offset=\"100%\" stop-color=\"#0288d1\"/></linearGradient></defs><g fill=\"none\" stroke=\"#b0bec5\" stroke-width=\"1.5\"><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"url(#globeGrad)\" stroke=\"url(#globeGrad)\" stroke-width=\"2\"/><path d=\"M12 2a15.3 15.3 0 0 1 0 20 15.3 15.3 0 0 1 0-20z\"/><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"/><path d=\"M12 2a15.3 15.3 0 0 0 0 20\" stroke=\"#ffffff\" opacity=\"0.4\"/></g>"
        },
        {
            "id": 437,
            "name": "Globe-Inverted-Color",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#0288d1\" rx=\"4\"/><circle cx=\"12\" cy=\"12\" r=\"8\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><path d=\"M12 4a12 12 0 0 0 0 16M4 12h16\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"1\"/>"
        },
        {
            "id": 438,
            "name": "GlobeInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"/><path d=\"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z\"/></g>"
        },
        {
            "id": 439,
            "name": "Glue-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"gluGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffffff\"/><stop offset=\"100%\" stop-color=\"#cfd8dc\"/></linearGradient></defs><g><rect x=\"7\" y=\"6\" width=\"10\" height=\"14\" rx=\"2\" fill=\"url(#gluGrad)\" stroke=\"#546e7a\" stroke-width=\"1.5\"/><rect x=\"9\" y=\"3\" width=\"6\" height=\"3\" fill=\"#ff5252\"/></g>"
        },
        {
            "id": 440,
            "name": "Glue-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#546e7a\" rx=\"4\"/><rect x=\"8\" y=\"7\" width=\"8\" height=\"12\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 441,
            "name": "GoogleInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"10\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M8 12a4 4 0 1 0 8 0M12 8V4M12 20v-4\"/>"
        },
        {
            "id": 442,
            "name": "Graph-Bar-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"grbGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#4caf50\"/><stop offset=\"100%\" stop-color=\"#2e7d32\"/></linearGradient></defs><g><rect x=\"4\" y=\"14\" width=\"4\" height=\"6\" fill=\"url(#grbGrad)\"/><rect x=\"10\" y=\"10\" width=\"4\" height=\"10\" fill=\"url(#grbGrad)\"/><rect x=\"16\" y=\"6\" width=\"4\" height=\"14\" fill=\"url(#grbGrad)\"/><path d=\"M2 22h20\" stroke=\"#37474f\" stroke-width=\"2\"/></g>"
        },
        {
            "id": 443,
            "name": "Graph-Bar-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#37474f\" rx=\"4\"/><path d=\"M3 21h18\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>"
        },
        {
            "id": 444,
            "name": "GraphQL",
            "category": "finance",
            "svgContent": "<polygon points=\"12 2 20.5 8.5 20.5 15.5 12 22 3.5 15.5 3.5 8.5 12 2\"/><circle cx=\"12\" cy=\"12\" r=\"2\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"18.5\" cy=\"5.75\" r=\"1\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"18.5\" cy=\"18.25\" r=\"1\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"5.5\" cy=\"18.25\" r=\"1\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"5.5\" cy=\"5.75\" r=\"1\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 445,
            "name": "GraphQL-Color",
            "category": "brands",
            "svgContent": "<defs><linearGradient id=\"gqlPink\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#e10098\"/><stop offset=\"100%\" stop-color=\"#800056\"/></linearGradient></defs><g stroke=\"url(#gqlPink)\" stroke-width=\"1.5\" fill=\"none\"><polygon points=\"12 2 21 7 21 17 12 22 3 17 3 7\" stroke-width=\"2\"/><polygon points=\"12 22 12 2\"/><polygon points=\"3 7 21 17\"/><polygon points=\"3 17 21 7\"/><circle cx=\"12\" cy=\"2\" r=\"2\" fill=\"#e10098\" stroke=\"none\"/><circle cx=\"21\" cy=\"7\" r=\"2\" fill=\"#e10098\" stroke=\"none\"/><circle cx=\"21\" cy=\"17\" r=\"2\" fill=\"#e10098\" stroke=\"none\"/><circle cx=\"12\" cy=\"22\" r=\"2\" fill=\"#e10098\" stroke=\"none\"/><circle cx=\"3\" cy=\"17\" r=\"2\" fill=\"#e10098\" stroke=\"none\"/><circle cx=\"3\" cy=\"7\" r=\"2\" fill=\"#e10098\" stroke=\"none\"/></g>"
        },
        {
            "id": 446,
            "name": "GraphQLInverted",
            "category": "finance",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><polygon points=\"12 2 20.5 8.5 20.5 15.5 12 22 3.5 15.5 3.5 8.5 12 2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"2\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"18.5\" cy=\"5.75\" r=\"1\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"18.5\" cy=\"18.25\" r=\"1\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"5.5\" cy=\"18.25\" r=\"1\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"5.5\" cy=\"5.75\" r=\"1\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 447,
            "name": "Grayscale",
            "category": "general",
            "svgContent": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/><circle cx=\"8\" cy=\"8\" r=\"1.5\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"16\" cy=\"8\" r=\"1.5\" fill=\"currentColor\" opacity=\"0.9\"/><path d=\"M8 14a4 4 0 0 0 8 0\"/>"
        },
        {
            "id": 448,
            "name": "GrayscaleInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" stroke=\"var(--ax-bg-inverse, white)\" /><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"8\" cy=\"8\" r=\"1.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"16\" cy=\"8\" r=\"1.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M8 14a4 4 0 0 0 8 0\"/>"
        },
        {
            "id": 449,
            "name": "Grid-Color",
            "category": "development",
            "svgContent": "<defs><linearGradient id=\"gridGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ab47bc\"/><stop offset=\"100%\" stop-color=\"#7b1fa2\"/></linearGradient></defs><g><rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\" fill=\"url(#gridGrad)\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\" fill=\"url(#gridGrad)\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\" fill=\"url(#gridGrad)\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\" fill=\"url(#gridGrad)\"/></g>"
        },
        {
            "id": 450,
            "name": "Grid-Inverted-Color",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#7b1fa2\" rx=\"4\"/><rect x=\"4\" y=\"4\" width=\"6\" height=\"6\" fill=\"#ffffff\"/><rect x=\"14\" y=\"4\" width=\"6\" height=\"6\" fill=\"#ffffff\"/><rect x=\"4\" y=\"14\" width=\"6\" height=\"6\" fill=\"#ffffff\"/><rect x=\"14\" y=\"14\" width=\"6\" height=\"6\" fill=\"#ffffff\"/>"
        },
        {
            "id": 451,
            "name": "GridInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"/></g>"
        },
        {
            "id": 452,
            "name": "GrillInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M3 14h18\"/><path d=\"M3 10h18\"/><path d=\"M3 6h18\"/><path d=\"M2 14a10 10 0 0 0 20 0H2z\"/><path d=\"M4 14a8 8 0 0 1 16 0\"/></g>"
        },
        {
            "id": 453,
            "name": "Group",
            "category": "ui",
            "svgContent": "<circle cx=\"5\" cy=\"7\" r=\"2\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"19\" cy=\"7\" r=\"2\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"12\" cy=\"6\" r=\"2.5\" fill=\"currentColor\" opacity=\"0.9\"/><path d=\"M3 18c0-2 1-4 3-5M18 13c2 1 3 3 3 5M8 21h8M12 18v3\"/>"
        },
        {
            "id": 454,
            "name": "GroupInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"5\" cy=\"7\" r=\"2\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"19\" cy=\"7\" r=\"2\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"6\" r=\"2.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M3 18c0-2 1-4 3-5M18 13c2 1 3 3 3 5M8 21h8M12 18v3\"/>"
        },
        {
            "id": 455,
            "name": "Guitar-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"gtrGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#a1887f\"/><stop offset=\"100%\" stop-color=\"#5d4037\"/></linearGradient></defs><g><path d=\"M12 2c-5 0-8 3-8 8s3 8 8 8 8-3 8-8-3-8-8-8z\" fill=\"url(#gtrGrad)\" stroke=\"#5d4037\" stroke-width=\"1.5\"/><rect x=\"11\" y=\"10\" width=\"2\" height=\"12\" fill=\"#5d4037\"/><circle cx=\"12\" cy=\"10\" r=\"1.5\" fill=\"#121212\"/></g>"
        },
        {
            "id": 456,
            "name": "Guitar-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#5d4037\" rx=\"4\"/><path d=\"M12 3c-4 0-7 2-7 7s3 7 7 7 7-2 7-7-3-7-7-7z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 457,
            "name": "Hand-StopInverted",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0\"/><path d=\"M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2\"/><path d=\"M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8\"/><path d=\"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15\"/></g>"
        },
        {
            "id": 458,
            "name": "Hard-Drive-Color",
            "category": "development",
            "svgContent": "<defs><linearGradient id=\"hdGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#b0bec5\"/><stop offset=\"100%\" stop-color=\"#78909c\"/></linearGradient></defs><g><rect x=\"3\" y=\"2\" width=\"18\" height=\"20\" rx=\"2\" fill=\"url(#hdGrad)\"/><line x1=\"3\" y1=\"16\" x2=\"21\" y2=\"16\" stroke=\"#455a64\" stroke-width=\"1.5\"/><circle cx=\"6\" cy=\"19\" r=\"1\" fill=\"#4caf50\"/><circle cx=\"12\" cy=\"9\" r=\"4\" fill=\"#cfd8dc\" stroke=\"#455a64\" stroke-width=\"1.5\"/><circle cx=\"12\" cy=\"9\" r=\"1\" fill=\"#455a64\"/></g>"
        },
        {
            "id": 459,
            "name": "Hard-Drive-Inverted-Color",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#455a64\" rx=\"4\"/><rect x=\"4\" y=\"3\" width=\"16\" height=\"18\" rx=\"1\" fill=\"#ffffff\"/><line x1=\"4\" y1=\"15\" x2=\"20\" y2=\"15\" stroke=\"#455a64\" stroke-width=\"1.5\"/>"
        },
        {
            "id": 460,
            "name": "Hard-DriveInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><line x1=\"22\" y1=\"12\" x2=\"2\" y2=\"12\"/><path d=\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"/><line x1=\"6\" y1=\"16\" x2=\"6.01\" y2=\"16\"/><line x1=\"10\" y1=\"16\" x2=\"10.01\" y2=\"16\"/></g>"
        },
        {
            "id": 461,
            "name": "HashtagInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"4\" y1=\"9\" x2=\"20\" y2=\"9\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"4\" y1=\"15\" x2=\"20\" y2=\"15\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"10\" y1=\"3\" x2=\"8\" y2=\"21\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"16\" y1=\"3\" x2=\"14\" y2=\"21\"/>"
        },
        {
            "id": 462,
            "name": "HBOInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M6 8h2v8H6zM10 8h2v8h-2zM14 8h4v2h-4zM14 12h4v2h-4zM14 14h4v2h-4z\"/>"
        },
        {
            "id": 463,
            "name": "Heading1Inverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"4\" y1=\"9\" x2=\"4\" y2=\"21\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"4\" y1=\"9\" x2=\"12\" y2=\"9\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"12\" y1=\"9\" x2=\"12\" y2=\"21\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"12\" y1=\"15\" x2=\"20\" y2=\"9\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"20\" y1=\"9\" x2=\"20\" y2=\"21\"/>"
        },
        {
            "id": 464,
            "name": "Heading2Inverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"4\" y1=\"12\" x2=\"4\" y2=\"18\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M4 9c0-1 .895-2 2-2s2 .895 2 2c0 1-.895 2-2 2s-2-.895-2-2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M10 9h8c0 4-4 8-4 8s-4-4-4-8z\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"18\" y1=\"12\" x2=\"18\" y2=\"18\"/>"
        },
        {
            "id": 465,
            "name": "HeadphoneInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M3 18v-6a9 9 0 0 1 18 0v6\"/><path d=\"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z\"/></g>"
        },
        {
            "id": 466,
            "name": "Headphones-Color",
            "category": "communication",
            "svgContent": "<defs><linearGradient id=\"hpGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#ec407a\"/><stop offset=\"100%\" stop-color=\"#9c27b0\"/></linearGradient></defs><g><path d=\"M3 18v-6c0-5 4-9 9-9s9 4 9 9v6\" fill=\"none\" stroke=\"url(#hpGrad)\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><rect x=\"2\" y=\"14\" width=\"4\" height=\"6\" rx=\"1.5\" fill=\"#212121\"/><rect x=\"18\" y=\"14\" width=\"4\" height=\"6\" rx=\"1.5\" fill=\"#212121\"/></g>"
        },
        {
            "id": 467,
            "name": "Headphones-Inverted-Color",
            "category": "communication",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#9c27b0\" rx=\"4\"/><path d=\"M4 17v-5c0-4.4 3.6-8 8-8s8 3.6 8 8v5\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\"/><rect x=\"3\" y=\"13\" width=\"3\" height=\"5\" fill=\"#ffffff\"/><rect x=\"18\" y=\"13\" width=\"3\" height=\"5\" fill=\"#ffffff\"/>"
        },
        {
            "id": 468,
            "name": "HeadphonesInverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M3 18v-6a9 9 0 0 1 18 0v6\"/><path d=\"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z\"/></g>"
        },
        {
            "id": 469,
            "name": "HeadsetInverted",
            "category": "communication",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M3 9l2 12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2l2-12M3 9h18M7 9a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"9\" y1=\"6\" x2=\"9\" y2=\"4\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"15\" y1=\"6\" x2=\"15\" y2=\"4\"/>"
        },
        {
            "id": 470,
            "name": "Heart-Broken-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"hbRed\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ff5252\"/><stop offset=\"100%\" stop-color=\"#b71c1c\"/></linearGradient></defs><g><path d=\"M12 6.2v10.3l1.45 1.32C18.6 13.14 22 10.06 22 6.28 22 3.2 19.58.78 16.5.78c-1.74 0-3.41.81-4.5 2.09V6.2z\" fill=\"url(#hbRed)\"/><path d=\"M12 6.2L10 9l3 3-2 3.5 1 1.5v-1.7L4.5 12C1.4 8.6 1 5.4 1 3c0-1.5 1.5-3 4.5-3 1.7 0 3.4.8 4.5 2.1V6.2z\" fill=\"#e53935\"/><path d=\"M12 6.2L10 9l3 3-2 3.5 1 1.5V6.2z\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"1.25\"/></g>"
        },
        {
            "id": 471,
            "name": "Heart-Broken-Inverted-Color",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#b71c1c\" rx=\"4\"/><path d=\"M12 21.4l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.4z\" fill=\"#ffffff\"/><path d=\"M12 5l-2 3 3 3-2 3.5 1 2V5z\" fill=\"#b71c1c\"/>"
        },
        {
            "id": 472,
            "name": "Heart-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"heartRed\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ff5252\"/><stop offset=\"100%\" stop-color=\"#c62828\"/></linearGradient></defs><g><path d=\"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z\" fill=\"url(#heartRed)\"/><path d=\"M7.5 5c-2 0-3.5 1.5-3.5 3.5 0 2.5 2.5 5 6.5 8.5V6.2C10 5.4 8.8 5 7.5 5z\" fill=\"#ff8a80\" opacity=\"0.3\"/></g>"
        },
        {
            "id": 473,
            "name": "Heart-Inverted-Color",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#b71c1c\" rx=\"4\"/><path d=\"M12 20l-1-1C5 14 2 11 2 8a5 5 0 0 1 10-3 5 5 0 0 1 10 3c0 3-3 6-9 11z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 474,
            "name": "HeartInverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\"/></g>"
        },
        {
            "id": 475,
            "name": "Helicopter-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"hlcGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#b0bec5\"/><stop offset=\"100%\" stop-color=\"#78909c\"/></linearGradient></defs><g><ellipse cx=\"12\" cy=\"12\" rx=\"8\" ry=\"4\" fill=\"url(#hlcGrad)\" stroke=\"#78909c\" stroke-width=\"1.5\"/><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"4\" stroke=\"#455a64\" stroke-width=\"2\"/><line x1=\"4\" y1=\"4\" x2=\"20\" y2=\"4\" stroke=\"#455a64\" stroke-width=\"2\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 476,
            "name": "Helicopter-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#78909c\" rx=\"4\"/><ellipse cx=\"12\" cy=\"12\" rx=\"7\" ry=\"3\" fill=\"#ffffff\"/>"
        },
        {
            "id": 477,
            "name": "Help-Circle-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"helpCirc\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#64b5f6\"/><stop offset=\"100%\" stop-color=\"#1565c0\"/></linearGradient></defs><g><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"url(#helpCirc)\"/><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"12\" cy=\"17\" r=\"1.25\" fill=\"#ffffff\"/></g>"
        },
        {
            "id": 478,
            "name": "Help-CircleInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\"/><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"/></g>"
        },
        {
            "id": 479,
            "name": "HighlighterInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M17 3a2.828 2.828 0 1 1 4 4l-7.07 7.07-4-4L17 3z\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M2 21h20M3 21l3-9h12l3 9\"/>"
        },
        {
            "id": 480,
            "name": "Home-Color",
            "category": "iot",
            "svgContent": "<defs><linearGradient id=\"roofGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#e53935\"/><stop offset=\"100%\" stop-color=\"#b71c1c\"/></linearGradient><linearGradient id=\"wallGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#fff8e1\"/><stop offset=\"100%\" stop-color=\"#ffe082\"/></linearGradient></defs><g><polygon points=\"12 2 2 11 4 11 4 22 20 22 20 11 22 11\" fill=\"url(#wallGrad)\"/><polygon points=\"12 2 1 11 3 13 12 5 21 13 23 11\" fill=\"url(#roofGrad)\"/><rect x=\"10\" y=\"14\" width=\"4\" height=\"8\" fill=\"#795548\"/><circle cx=\"11\" cy=\"18\" r=\"0.5\" fill=\"#ffd54f\"/></g>"
        },
        {
            "id": 481,
            "name": "HomeInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/><polyline points=\"9 22 9 12 15 12 15 22\"/></g>"
        },
        {
            "id": 482,
            "name": "HomeSolid",
            "category": "ui",
            "svgContent": "<path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\" fill=\"currentColor\" opacity=\"0.9\"/><rect x=\"9\" y=\"12\" width=\"6\" height=\"10\" fill=\"currentColor\" opacity=\"0.9\" opacity=\"0.2\"/>"
        },
        {
            "id": 483,
            "name": "HomeSolidInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"9\" y=\"12\" width=\"6\" height=\"10\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\" opacity=\"0.2\"/>"
        },
        {
            "id": 484,
            "name": "Hot-Air-Balloon-Color",
            "category": "ai",
            "svgContent": "<defs><linearGradient id=\"habGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#f44336\"/><stop offset=\"100%\" stop-color=\"#b71c1c\"/></linearGradient></defs><g><path d=\"M12 2a6 6 0 0 0-6 6c0 4 2 6 6 6s6-2 6-6a6 6 0 0 0-6-6z\" fill=\"url(#habGrad)\" stroke=\"#b71c1c\" stroke-width=\"1.5\"/><rect x=\"10\" y=\"14\" width=\"4\" height=\"4\" fill=\"#795548\"/></g>"
        },
        {
            "id": 485,
            "name": "Hot-Air-Balloon-Inverted-Color",
            "category": "ai",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#b71c1c\" rx=\"4\"/><path d=\"M12 3a5 5 0 0 0-5 5c0 3 2 5 5 5s5-2 5-5a5 5 0 0 0-5-5z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 486,
            "name": "Hot-DogInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M22 13H2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z\"/><path d=\"M20 13V8a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v5\"/></g>"
        },
        {
            "id": 487,
            "name": "Hulu",
            "category": "general",
            "svgContent": "<rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"2\"/><circle cx=\"9\" cy=\"12\" r=\"3\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 488,
            "name": "HuluInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"9\" cy=\"12\" r=\"3\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 489,
            "name": "HurricaneInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M4 12a8 8 0 0 1 16 0 8 8 0 0 1-16 0z\"/><path d=\"M6.34 6.34l2.83 2.83M14.83 14.83l2.83 2.83M17.66 6.34l-2.83 2.83M9.17 14.83l-2.83 2.83\"/></g>"
        },
        {
            "id": 490,
            "name": "ImageAddInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"8.5\" cy=\"8.5\" r=\"1.5\"/><polyline points=\"21 15 16 10 5 21\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"12\" y1=\"5\" x2=\"12\" y2=\"11\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"9\" y1=\"8\" x2=\"15\" y2=\"8\"/>"
        },
        {
            "id": 491,
            "name": "ImageInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"/><polygon points=\"21 15 16 10 5 21\"/></g>"
        },
        {
            "id": 492,
            "name": "ImageRemoveInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"8.5\" cy=\"8.5\" r=\"1.5\"/><polyline points=\"21 15 16 10 5 21\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"19\" y1=\"5\" x2=\"5\" y2=\"19\"/>"
        },
        {
            "id": 493,
            "name": "Inbox2Inverted",
            "category": "communication",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><polyline points=\"22 12 18 12 15 21 9 21 6 12 2 12\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"6\" y1=\"5\" x2=\"18\" y2=\"5\"/>"
        },
        {
            "id": 494,
            "name": "InboxInverted",
            "category": "communication",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polyline points=\"22 12 16 12 14 15 10 15 8 12 2 12\"/><path d=\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"/></g>"
        },
        {
            "id": 495,
            "name": "Info-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"infoCirc\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#4db6ac\"/><stop offset=\"100%\" stop-color=\"#00695c\"/></linearGradient></defs><g><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"url(#infoCirc)\"/><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"12\" stroke=\"#ffffff\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><line x1=\"12\" y1=\"8\" x2=\"12.01\" y2=\"8\" stroke=\"#ffffff\" stroke-width=\"3\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 496,
            "name": "InfoAlt",
            "category": "ui",
            "svgContent": "<path d=\"M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12z\"/><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"12\"/><circle cx=\"12\" cy=\"8\" r=\"0.8\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 497,
            "name": "InfoAltInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12z\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"12\" y1=\"16\" x2=\"12\" y2=\"12\" /><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"8\" r=\"0.8\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 498,
            "name": "InfoInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"12\"/><line x1=\"12\" y1=\"8\" x2=\"12.01\" y2=\"8\"/></g>"
        },
        {
            "id": 499,
            "name": "InfoSolid",
            "category": "ui",
            "svgContent": "<circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"currentColor\" opacity=\"0.9\" opacity=\"0.1\"/><circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"12\"/><circle cx=\"12\" cy=\"8\" r=\"0.8\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 500,
            "name": "InfoSolidInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"10\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\" opacity=\"0.1\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"white\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"12\" y1=\"16\" x2=\"12\" y2=\"12\" /><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"8\" r=\"0.8\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 501,
            "name": "Ink-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"inkGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#455a64\"/><stop offset=\"100%\" stop-color=\"#1a237e\"/></linearGradient></defs><g><path d=\"M12 2C7 2 5 7 5 11c0 4 3 7 7 11 4-4 7-7 7-11 0-4-2-9-7-9z\" fill=\"url(#inkGrad)\"/><path d=\"M12 5c-2 0-4 2.5-4 5.5\" fill=\"none\" stroke=\"#ffffff\" opacity=\"0.3\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 502,
            "name": "Ink-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#1a237e\" rx=\"4\"/><path d=\"M12 4c-4 0-6 4-6 8 0 3.5 2.5 6.5 6 9.5 3.5-3 6-6.5 6-9.5 0-4-2-8-6-8z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 503,
            "name": "Instagram",
            "category": "brands",
            "svgContent": "<rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"5\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/><circle cx=\"18\" cy=\"6\" r=\"1\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 504,
            "name": "InstagramInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"5\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"4\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"18\" cy=\"6\" r=\"1\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 505,
            "name": "Jenkins",
            "category": "general",
            "svgContent": "<rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"2\"/><circle cx=\"6\" cy=\"6\" r=\"1.5\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"12\" cy=\"6\" r=\"1.5\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"18\" cy=\"6\" r=\"1.5\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"6\" cy=\"12\" r=\"1.5\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"12\" cy=\"12\" r=\"1.5\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"18\" cy=\"12\" r=\"1.5\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 506,
            "name": "JenkinsInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"6\" cy=\"6\" r=\"1.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"6\" r=\"1.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"18\" cy=\"6\" r=\"1.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"6\" cy=\"12\" r=\"1.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"1.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"18\" cy=\"12\" r=\"1.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 507,
            "name": "JuiceInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M2 13h20v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z\"/><path d=\"M7 13V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4\"/><path d=\"M12 2v5\"/></g>"
        },
        {
            "id": 508,
            "name": "Kanban-Color",
            "category": "development",
            "svgContent": "<defs><linearGradient id=\"kbGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#26a69a\"/><stop offset=\"100%\" stop-color=\"#00695c\"/></linearGradient></defs><g fill=\"url(#kbGrad)\"><rect x=\"3\" y=\"3\" width=\"4\" height=\"18\" rx=\"1\" opacity=\"0.4\"/><rect x=\"10\" y=\"3\" width=\"4\" height=\"18\" rx=\"1\" opacity=\"0.7\"/><rect x=\"17\" y=\"3\" width=\"4\" height=\"18\" rx=\"1\"/><rect x=\"11\" y=\"5\" width=\"2\" height=\"4\" fill=\"#ffffff\"/><rect x=\"18\" y=\"5\" width=\"2\" height=\"7\" fill=\"#ffffff\"/></g>"
        },
        {
            "id": 509,
            "name": "Kanban-Inverted-Color",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#00695c\" rx=\"4\"/><rect x=\"4\" y=\"4\" width=\"3\" height=\"16\" fill=\"#ffffff\"/><rect x=\"10\" y=\"4\" width=\"3\" height=\"12\" fill=\"#ffffff\"/><rect x=\"16\" y=\"4\" width=\"3\" height=\"8\" fill=\"#ffffff\"/>"
        },
        {
            "id": 510,
            "name": "Key-Color",
            "category": "iot",
            "svgContent": "<defs><linearGradient id=\"goldGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffe082\"/><stop offset=\"50%\" stop-color=\"#ffb300\"/><stop offset=\"100%\" stop-color=\"#ff8f00\"/></linearGradient></defs><g fill=\"url(#goldGrad)\"><path d=\"M21 2h-6a1 1 0 0 0-1 1v3h-2v2h-2v2H8a7 7 0 1 0 6 6v-4h2v-2h2V6h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-13 16a3 3 0 1 1 3-3 3 3 0 0 1-3 3z\"/><circle cx=\"8\" cy=\"15\" r=\"1\" fill=\"#fff\" opacity=\"0.5\"/></g>"
        },
        {
            "id": 511,
            "name": "Key-Inverted-Color",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#ffa000\" rx=\"4\"/><path d=\"M12.7 11.3a4 4 0 1 0-1.4 1.4L4 20v2h2v-2h2v-2h2.3l2.4-2.7z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 512,
            "name": "Keyhole-Color",
            "category": "iot",
            "svgContent": "<defs><linearGradient id=\"khGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#cfd8dc\"/><stop offset=\"100%\" stop-color=\"#90a4ae\"/></linearGradient></defs><g><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"url(#khGrad)\"/><path d=\"M12 7a2.5 2.5 0 0 0-1.5 4.5l-1 4.5h5l-1-4.5A2.5 2.5 0 0 0 12 7z\" fill=\"#212121\"/></g>"
        },
        {
            "id": 513,
            "name": "Keyhole-Inverted-Color",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#212121\" rx=\"4\"/><circle cx=\"12\" cy=\"12\" r=\"8\" fill=\"#ffffff\"/><path d=\"M12 9a2 2 0 0 0-1 3.7l-.5 3.3h3l-.5-3.3a2 2 0 0 0-1-3.7z\" fill=\"#212121\"/>"
        },
        {
            "id": 514,
            "name": "KeyInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.778-7.778z\"/><line x1=\"14.34\" y1=\"8.34\" x2=\"18.34\" y2=\"12.34\"/><line x1=\"24\" y1=\"0\" x2=\"21\" y2=\"3\"/></g>"
        },
        {
            "id": 515,
            "name": "KeypadInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><rect x=\"3\" y=\"3\" width=\"4\" height=\"4\" rx=\"1\"/><rect x=\"10\" y=\"3\" width=\"4\" height=\"4\" rx=\"1\"/><rect x=\"17\" y=\"3\" width=\"4\" height=\"4\" rx=\"1\"/><rect x=\"3\" y=\"10\" width=\"4\" height=\"4\" rx=\"1\"/><rect x=\"10\" y=\"10\" width=\"4\" height=\"4\" rx=\"1\"/><rect x=\"17\" y=\"10\" width=\"4\" height=\"4\" rx=\"1\"/><rect x=\"3\" y=\"17\" width=\"4\" height=\"4\" rx=\"1\"/><rect x=\"10\" y=\"17\" width=\"4\" height=\"4\" rx=\"1\"/><rect x=\"17\" y=\"17\" width=\"4\" height=\"4\" rx=\"1\"/></g>"
        },
        {
            "id": 516,
            "name": "Kite-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"ktGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#80cbc4\"/><stop offset=\"100%\" stop-color=\"#00695c\"/></linearGradient></defs><g><path d=\"M12 2l8 8-8 12-8-12z\" fill=\"url(#ktGrad)\" stroke=\"#00695c\" stroke-width=\"1.5\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"22\" stroke=\"#00695c\" stroke-width=\"1\"/><path d=\"M12 22l3 2\" stroke=\"#00695c\" stroke-width=\"1\"/></g>"
        },
        {
            "id": 517,
            "name": "Kite-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#00695c\" rx=\"4\"/><path d=\"M12 3l7 7-7 11-7-11z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 518,
            "name": "KnifeInverted",
            "category": "food",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M12 2v20\"/><path d=\"M15 2v14a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V2z\"/><path d=\"M12 2l3 0\"/></g>"
        },
        {
            "id": 519,
            "name": "Kubernetes",
            "category": "brands",
            "svgContent": "<circle cx=\"12\" cy=\"12\" r=\"2\" fill=\"currentColor\" opacity=\"0.9\"/><path d=\"M12 4v3M12 17v3M6 12H3M21 12h-3M6.5 6.5l-2.1-2.1M19.6 19.6l-2.1-2.1M17.5 6.5l2.1-2.1M4.4 19.6l2.1-2.1\"/>"
        },
        {
            "id": 520,
            "name": "Kubernetes-Color",
            "category": "brands",
            "svgContent": "<defs><linearGradient id=\"k8sBlue\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#326ce5\"/><stop offset=\"100%\" stop-color=\"#1f4087\"/></linearGradient></defs><g fill=\"url(#k8sBlue)\"><polygon points=\"12 2 22 6.5 22 17.5 12 22 2 17.5 2 6.5\"/><polygon points=\"12 5 19 8.2 19 15.8 12 19 5 15.8 5 8.2\" fill=\"#ffffff\" opacity=\"0.2\"/><circle cx=\"12\" cy=\"12\" r=\"3\" fill=\"#ffffff\"/></g>"
        },
        {
            "id": 521,
            "name": "KubernetesInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"2\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 4v3M12 17v3M6 12H3M21 12h-3M6.5 6.5l-2.1-2.1M19.6 19.6l-2.1-2.1M17.5 6.5l2.1-2.1M4.4 19.6l2.1-2.1\"/>"
        },
        {
            "id": 522,
            "name": "LaptopInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polyline points=\"4 18 1 18 1 20 23 20 23 18 20 18\"/><rect x=\"4\" y=\"4\" width=\"16\" height=\"14\" rx=\"2\"/></g>"
        },
        {
            "id": 523,
            "name": "Layers-3-Color",
            "category": "development",
            "svgContent": "<defs><linearGradient id=\"lay3Grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#7e57c2\"/><stop offset=\"100%\" stop-color=\"#512da8\"/></linearGradient></defs><g fill=\"none\" stroke=\"url(#lay3Grad)\" stroke-width=\"2\" stroke-linejoin=\"round\"><polygon points=\"12 2 21 6 12 10 3 6\" fill=\"url(#lay3Grad)\" stroke=\"none\"/><path d=\"M3 11l9 4 9-4M3 16l9 4 9-4\"/></g>"
        },
        {
            "id": 524,
            "name": "Layers-3-Inverted-Color",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#512da8\" rx=\"4\"/><polygon points=\"12 4 21 8 12 12 3 8\" fill=\"#ffffff\"/><polygon points=\"12 9 21 13 12 17 3 13\" fill=\"#ffffff\" opacity=\"0.6\"/><polygon points=\"12 14 21 18 12 22 3 18\" fill=\"#ffffff\" opacity=\"0.3\"/>"
        },
        {
            "id": 525,
            "name": "Layers-Color",
            "category": "development",
            "svgContent": "<defs><linearGradient id=\"layGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#4db6ac\"/><stop offset=\"100%\" stop-color=\"#00695c\"/></linearGradient></defs><g fill=\"none\" stroke=\"url(#layGrad)\" stroke-width=\"2\"><polygon points=\"12 2 22 7 12 12 2 7\" fill=\"url(#layGrad)\" stroke=\"none\"/><path d=\"M2 12l10 5 10-5M2 17l10 5 10-5\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 526,
            "name": "Layers-Inverted-Color",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#00695c\" rx=\"4\"/><polygon points=\"12 4 21 8 12 12 3 8\" fill=\"#ffffff\"/><polygon points=\"12 11 21 15 12 19 3 15\" fill=\"#ffffff\" opacity=\"0.6\"/>"
        },
        {
            "id": 527,
            "name": "LayersInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polygon points=\"12 2 2 7 12 12 22 7\"/><polygon points=\"2 17 12 22 22 17\"/><polygon points=\"2 12 12 17 22 12\"/></g>"
        },
        {
            "id": 528,
            "name": "Layout-Color",
            "category": "development",
            "svgContent": "<defs><linearGradient id=\"layGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#90caf9\"/><stop offset=\"100%\" stop-color=\"#1e88e5\"/></linearGradient></defs><g><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" fill=\"none\" stroke=\"url(#layGrad)\" stroke-width=\"2\"/><rect x=\"5\" y=\"5\" width=\"14\" height=\"4\" fill=\"#1e88e5\" opacity=\"0.3\"/><rect x=\"5\" y=\"11\" width=\"6\" height=\"8\" fill=\"#1e88e5\" opacity=\"0.15\"/><rect x=\"13\" y=\"11\" width=\"6\" height=\"8\" fill=\"#1e88e5\" opacity=\"0.15\"/></g>"
        },
        {
            "id": 529,
            "name": "Layout-Inverted-Color",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#1e88e5\" rx=\"4\"/><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 530,
            "name": "LayoutInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><line x1=\"3\" y1=\"9\" x2=\"21\" y2=\"9\"/><line x1=\"9\" y1=\"21\" x2=\"9\" y2=\"9\"/></g>"
        },
        {
            "id": 531,
            "name": "Leaf-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"lefGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#66bb6a\"/><stop offset=\"100%\" stop-color=\"#1b5e20\"/></linearGradient></defs><g><path d=\"M2 22c0-5.52 4.48-10 10-10H22V2c0 5.52-4.48 10-10 10H2v10z\" fill=\"url(#lefGrad)\"/><line x1=\"2\" y1=\"22\" x2=\"22\" y2=\"2\" stroke=\"#ffffff\" opacity=\"0.3\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 532,
            "name": "Leaf-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#1b5e20\" rx=\"4\"/><path d=\"M4 20c0-5 4-9 9-9h7V4c0 5-4 9-9 9H4v7z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 533,
            "name": "Leaf-Small-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"lfsGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#81c784\"/><stop offset=\"100%\" stop-color=\"#2e7d32\"/></linearGradient></defs><g><path d=\"M12 2a10 10 0 0 1 10 10c0 10-10 10-10 10S2 22 2 12A10 10 0 0 1 12 2z\" fill=\"url(#lfsGrad)\" stroke=\"#2e7d32\" stroke-width=\"1.5\"/><path d=\"M12 2v20\" stroke=\"#2e7d32\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 534,
            "name": "Leaf-Small-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#2e7d32\" rx=\"4\"/><path d=\"M12 3a9 9 0 0 1 9 9c0 9-9 9-9 9S3 21 3 12A9 9 0 0 1 12 3z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 535,
            "name": "Lightbulb-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"blbGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#fff176\"/><stop offset=\"100%\" stop-color=\"#fbc02d\"/></linearGradient></defs><g><path d=\"M12 2a7 7 0 0 1 7 7c0 4-3 6-3 6v2a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2s-3-2-3-6a7 7 0 0 1 7-7z\" fill=\"url(#blbGrad)\" stroke=\"#fbc02d\" stroke-width=\"1.5\"/><line x1=\"10\" y1=\"20\" x2=\"14\" y2=\"20\" stroke=\"#fbc02d\" stroke-width=\"2\"/></g>"
        },
        {
            "id": 536,
            "name": "Lightbulb-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#fbc02d\" rx=\"4\"/><path d=\"M12 3a6 6 0 0 1 6 6c0 3-2 5-2 5v2a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1v-2s-2-2-2-5a6 6 0 0 1 6-6z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 537,
            "name": "Lightbulb4Inverted",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M9 21H3v-2h.75a3 3 0 0 1 3-3h.5a3 3 0 0 1 3 3h.75v2zm0-4h-6V9a6 6 0 0 1 6-6 6 6 0 0 1 6 6v8zm0 4h6v2H9v-2z\"/>"
        },
        {
            "id": 538,
            "name": "LightBulbSmartInverted",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M9 21H3v-2h.75a3 3 0 0 1 3-3h.5a3 3 0 0 1 3 3h.75v2zm0-4H3V9a6 6 0 0 1 6-6 6 6 0 0 1 6 6v8zm0 4h6v2H9v-2z\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 3v2M15 5l-1.4 1.4M9 5L10.4 6.4\"/>"
        },
        {
            "id": 539,
            "name": "Lighthouse-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"lghGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffffff\"/><stop offset=\"100%\" stop-color=\"#cfd8dc\"/></linearGradient></defs><g><path d=\"M9 22h6l-1-18h-4z\" fill=\"url(#lghGrad)\" stroke=\"#455a64\" stroke-width=\"1.5\"/><rect x=\"10\" y=\"4\" width=\"4\" height=\"4\" fill=\"#ef5350\"/></g>"
        },
        {
            "id": 540,
            "name": "Lighthouse-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#455a64\" rx=\"4\"/><path d=\"M10 21h4l-1-16h-2z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 541,
            "name": "Lightning-Color",
            "category": "iot",
            "svgContent": "<defs><linearGradient id=\"ltgGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#fff176\"/><stop offset=\"100%\" stop-color=\"#fbc02d\"/></linearGradient></defs><g><path d=\"M13 2L3 14h9l-1 8 10-12h-9l1-8z\" fill=\"url(#ltgGrad)\" stroke=\"#f57f17\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 542,
            "name": "Lightning-Inverted-Color",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#fbc02d\" rx=\"4\"/><path d=\"M13 3L4 14h8l-1 7 9-11h-8l1-7z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 543,
            "name": "LightningInverted",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M13 2L3 14h9l-1 8 10-12h-9l1-8z\"/></g>"
        },
        {
            "id": 544,
            "name": "LineChartInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polyline points=\"23 6 13.5 15.5 8.5 10.5 1 18\"/><polyline points=\"17 6 23 6 23 12\"/></g>"
        },
        {
            "id": 545,
            "name": "Link-2Inverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M15 7h3a5 5 0 0 1 5 5s0 5-5 5h-3m-6 0H6a5 5 0 0 1-5-5s0-5 5-5h3m3 5h6\"/></g>"
        },
        {
            "id": 546,
            "name": "LinkedInInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M6 8v10M10 8v10M10 11c0-1 1-2 2-2s2 1 2 2v7M6 6v.01\"/>"
        },
        {
            "id": 547,
            "name": "LinkExternalInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6\"/><polyline points=\"15 3 21 3 21 9\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"10\" y1=\"14\" x2=\"21\" y2=\"3\"/>"
        },
        {
            "id": 548,
            "name": "LinkInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\"/>"
        },
        {
            "id": 549,
            "name": "Loader2Inverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M21 12a9 9 0 1 1-9-9m9 0a9 9 0 0 0-9 9\"/>"
        },
        {
            "id": 550,
            "name": "Loader3Inverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 2c5.52 0 10 4.48 10 10\" stroke-dasharray=\"15.7 15.7\" stroke-dashoffset=\"-15.7\"/>"
        },
        {
            "id": 551,
            "name": "Location-Pin-Color",
            "category": "iot",
            "svgContent": "<defs><linearGradient id=\"pinGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ef5350\"/><stop offset=\"100%\" stop-color=\"#b71c1c\"/></linearGradient></defs><g><path d=\"M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z\" fill=\"url(#pinGrad)\" stroke=\"#b71c1c\" stroke-width=\"1.5\"/><circle cx=\"12\" cy=\"9\" r=\"2\" fill=\"#ffffff\"/></g>"
        },
        {
            "id": 552,
            "name": "Location-Pin-Inverted-Color",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#b71c1c\" rx=\"4\"/><path d=\"M12 3a6 6 0 0 0-6 6c0 4 6 11 6 11s6-7 6-11a6 6 0 0 0-6-6z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 553,
            "name": "Lock-Color",
            "category": "iot",
            "svgContent": "<defs><linearGradient id=\"lockBody\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffd54f\"/><stop offset=\"100%\" stop-color=\"#ffb300\"/></linearGradient><linearGradient id=\"shackleGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#cfd8dc\"/><stop offset=\"50%\" stop-color=\"#b0bec5\"/><stop offset=\"100%\" stop-color=\"#78909c\"/></linearGradient></defs><g><path d=\"M7 11V7a5 5 0 0 1 10 0v4\" stroke=\"url(#shackleGrad)\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/><rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" fill=\"url(#lockBody)\"/><circle cx=\"12\" cy=\"16\" r=\"2\" fill=\"#5d4037\"/><path d=\"M12 18v2\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"9\" cy=\"14\" r=\"1\" fill=\"#fff\" opacity=\"0.4\"/></g>"
        },
        {
            "id": 554,
            "name": "Lock-Inverted-Color",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#37474f\" rx=\"4\"/><rect x=\"5\" y=\"11\" width=\"14\" height=\"10\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 555,
            "name": "LockClosed",
            "category": "ui",
            "svgContent": "<rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\" fill=\"currentColor\" opacity=\"0.9\" opacity=\"0.1\"/><rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/><circle cx=\"12\" cy=\"16\" r=\"1\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 556,
            "name": "LockClosedInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\" opacity=\"0.1\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\" stroke=\"var(--ax-bg-inverse, white)\" /><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M7 11V7a5 5 0 0 1 10 0v4\" stroke=\"var(--ax-bg-inverse, white)\" /><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"16\" r=\"1\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 557,
            "name": "LockInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/></g>"
        },
        {
            "id": 558,
            "name": "LockOpen",
            "category": "ui",
            "svgContent": "<path d=\"M3 11v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V11M7 11V7a5 5 0 0 1 10 0\" stroke-linecap=\"round\"/><circle cx=\"12\" cy=\"16\" r=\"1\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 559,
            "name": "LockOpenInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M3 11v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V11M7 11V7a5 5 0 0 1 10 0\" stroke=\"var(--ax-bg-inverse, white)\" stroke-linecap=\"round\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"16\" r=\"1\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 560,
            "name": "LogInInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4\"/><polyline points=\"10 12 15 12 12 9\"/><polyline points=\"10 12 15 12 12 15\"/>"
        },
        {
            "id": 561,
            "name": "LogOutInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"/><polyline points=\"16 12 9 12 12 15\"/><polyline points=\"16 12 9 12 12 9\"/>"
        },
        {
            "id": 562,
            "name": "Magic-Wand-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"wndGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#7e57c2\"/><stop offset=\"100%\" stop-color=\"#311b92\"/></linearGradient></defs><g><path d=\"M18 3l3 3L6 21H3v-3L18 3z\" fill=\"url(#wndGrad)\"/><path d=\"M18 3l3 3-3-3z\" fill=\"#ffeb3b\"/><circle cx=\"5\" cy=\"5\" r=\"1\" fill=\"#ffeb3b\"/><circle cx=\"12\" cy=\"4\" r=\"1.5\" fill=\"#ffeb3b\"/><circle cx=\"19\" cy=\"11\" r=\"1\" fill=\"#ffeb3b\"/></g>"
        },
        {
            "id": 563,
            "name": "Magic-Wand-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#311b92\" rx=\"4\"/><path d=\"M17 4l3 3-13 13H4v-3L17 4z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 564,
            "name": "MagicInverted",
            "category": "ai",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M15 4v7a3 3 0 1 1-6 0V4m3-2v2M6 20h12M9 20v2M15 20v2M3 16h18M3 8h18M6 4h12M9 2h6\"/>"
        },
        {
            "id": 565,
            "name": "Magnet-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"magGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ff5252\"/><stop offset=\"100%\" stop-color=\"#b71c1c\"/></linearGradient></defs><g><path d=\"M4 3h4v8a4 4 0 0 0 8 0V3h4v8a8 8 0 0 1-16 0V3z\" fill=\"url(#magGrad)\"/><rect x=\"4\" y=\"3\" width=\"4\" height=\"3\" fill=\"#cfd8dc\"/><rect x=\"16\" y=\"3\" width=\"4\" height=\"3\" fill=\"#cfd8dc\"/></g>"
        },
        {
            "id": 566,
            "name": "Magnet-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#b71c1c\" rx=\"4\"/><path d=\"M5 4h4v7a3 3 0 0 0 6 0V4h4v7a7 7 0 0 1-14 0V4z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 567,
            "name": "Magnifying-Glass-Color",
            "category": "food",
            "svgContent": "<defs><linearGradient id=\"mngGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#b0bec5\"/><stop offset=\"100%\" stop-color=\"#546e7a\"/></linearGradient></defs><g><circle cx=\"10\" cy=\"10\" r=\"7\" fill=\"none\" stroke=\"#546e7a\" stroke-width=\"3\"/><line x1=\"15\" y1=\"15\" x2=\"21\" y2=\"21\" stroke=\"#546e7a\" stroke-width=\"3\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 568,
            "name": "Magnifying-Glass-Inverted-Color",
            "category": "food",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#546e7a\" rx=\"4\"/><circle cx=\"10\" cy=\"10\" r=\"6\" fill=\"#ffffff\"/><line x1=\"14\" y1=\"14\" x2=\"20\" y2=\"20\" stroke=\"#ffffff\" stroke-width=\"2\"/>"
        },
        {
            "id": 569,
            "name": "Mail-Color",
            "category": "ai",
            "svgContent": "<defs><linearGradient id=\"mailBack\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#90caf9\"/><stop offset=\"100%\" stop-color=\"#42a5f5\"/></linearGradient></defs><g><rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\" fill=\"url(#mailBack)\"/><polygon points=\"22 4 12 12 2 4\" fill=\"#bbdefb\" opacity=\"0.85\"/><polygon points=\"2 20 10 12 2 4\" fill=\"#64b5f6\" opacity=\"0.3\"/><polygon points=\"22 20 14 12 22 4\" fill=\"#64b5f6\" opacity=\"0.3\"/></g>"
        },
        {
            "id": 570,
            "name": "MailInverted",
            "category": "communication",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\"/><polyline points=\"22,6 12,13 2,6\"/></g>"
        },
        {
            "id": 571,
            "name": "Makeup",
            "category": "general",
            "svgContent": "<path d=\"M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z\"/><circle cx=\"12\" cy=\"8\" r=\"1.5\" fill=\"currentColor\" opacity=\"0.9\"/><line x1=\"10\" y1=\"13\" x2=\"14\" y2=\"13\"/><path d=\"M8 18h8\"/>"
        },
        {
            "id": 572,
            "name": "MakeupInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"8\" r=\"1.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"10\" y1=\"13\" x2=\"14\" y2=\"13\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M8 18h8\"/>"
        },
        {
            "id": 573,
            "name": "Map-Color",
            "category": "iot",
            "svgContent": "<defs><linearGradient id=\"mapGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#a5d6a7\"/><stop offset=\"50%\" stop-color=\"#81c784\"/><stop offset=\"100%\" stop-color=\"#66bb6a\"/></linearGradient></defs><g><polygon points=\"1 6 8 2 16 6 23 2 23 18 16 22 8 18 1 22\" fill=\"url(#mapGrad)\" stroke=\"#4caf50\" stroke-width=\"1\"/><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"18\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><line x1=\"16\" y1=\"6\" x2=\"16\" y2=\"22\" stroke=\"#ffffff\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 574,
            "name": "Map-Folded-Color",
            "category": "iot",
            "svgContent": "<defs><linearGradient id=\"mapFGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#d7ccc8\"/><stop offset=\"100%\" stop-color=\"#a1887f\"/></linearGradient></defs><g><path d=\"M4 4l8 2 8-2v16l-8-2-8 2z\" fill=\"url(#mapFGrad)\" stroke=\"#a1887f\" stroke-width=\"1.5\"/><line x1=\"12\" y1=\"4\" x2=\"12\" y2=\"20\" stroke=\"#ffffff\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 575,
            "name": "Map-Folded-Inverted-Color",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#a1887f\" rx=\"4\"/><path d=\"M5 5l7 1 7-1v14l-7-1-7 1z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 576,
            "name": "Map-Inverted-Color",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#4caf50\" rx=\"4\"/><polygon points=\"3 6 8 3 16 6 21 3 21 18 16 21 8 18 3 21\" fill=\"#ffffff\"/>"
        },
        {
            "id": 577,
            "name": "Map-Pin-Color",
            "category": "iot",
            "svgContent": "<defs><linearGradient id=\"pinRed\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ff5252\"/><stop offset=\"100%\" stop-color=\"#d50000\"/></linearGradient></defs><g><path d=\"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z\" fill=\"url(#pinRed)\"/><circle cx=\"12\" cy=\"10\" r=\"3\" fill=\"#ffffff\"/><ellipse cx=\"12\" cy=\"22\" rx=\"4\" ry=\"1\" fill=\"#000000\" opacity=\"0.2\"/></g>"
        },
        {
            "id": 578,
            "name": "Map-Pin-Inverted-Color",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#d50000\" rx=\"4\"/><path d=\"M12 2C7.6 2 4 5.6 4 10c0 5.3 8 12 8 12s8-6.7 8-12c0-4.4-3.6-10-8-10zm0 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 579,
            "name": "Map-PinInverted",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/></g>"
        },
        {
            "id": 580,
            "name": "MapInverted",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polygon points=\"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6\"/><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"18\"/><line x1=\"16\" y1=\"6\" x2=\"16\" y2=\"22\"/></g>"
        },
        {
            "id": 581,
            "name": "MartiniInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M21 21H3\"/><path d=\"M12 21V10\"/><path d=\"M19 3L5 10\"/><path d=\"M19 3H5\"/><path d=\"M12 10l7-7M12 10L5 3\"/></g>"
        },
        {
            "id": 582,
            "name": "MasterCardInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"8\" cy=\"12\" r=\"5\" stroke=\"var(--ax-bg-inverse, white)\" /><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"16\" cy=\"12\" r=\"5\" stroke=\"var(--ax-bg-inverse, white)\" /><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"3\"/>"
        },
        {
            "id": 583,
            "name": "Maximize2Inverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><polyline points=\"15 3 21 3 21 9\"/><polyline points=\"9 21 3 21 3 15\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"15\" y1=\"9\" x2=\"3\" y2=\"21\"/>"
        },
        {
            "id": 584,
            "name": "MaximizeInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M15 3h6v6m-6 6h6v-6M9 21H3v-6m6-6H3v6\"/></g>"
        },
        {
            "id": 585,
            "name": "MechanicalInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"6\" cy=\"6\" r=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"18\" cy=\"6\" r=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"6\" cy=\"18\" r=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"18\" cy=\"18\" r=\"2\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"8\" y1=\"6\" x2=\"16\" y2=\"6\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"8\" y1=\"18\" x2=\"16\" y2=\"18\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"6\" y1=\"8\" x2=\"6\" y2=\"16\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"18\" y1=\"8\" x2=\"18\" y2=\"16\"/>"
        },
        {
            "id": 586,
            "name": "Medal-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"mdlGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffeb3b\"/><stop offset=\"100%\" stop-color=\"#fbc02d\"/></linearGradient></defs><g><circle cx=\"12\" cy=\"14\" r=\"7\" fill=\"url(#mdlGrad)\" stroke=\"#f57f17\" stroke-width=\"1.5\"/><path d=\"M10 2l2 4-2 2h4l-2-2 2-4\" fill=\"#fbc02d\" stroke=\"#f57f17\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 587,
            "name": "Medal-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#fbc02d\" rx=\"4\"/><circle cx=\"12\" cy=\"15\" r=\"6\" fill=\"#ffffff\"/>"
        },
        {
            "id": 588,
            "name": "Meh-OffInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"8\" y1=\"15\" x2=\"16\" y2=\"15\"/><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"/><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"/><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"/></g>"
        },
        {
            "id": 589,
            "name": "MehInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"8\" y1=\"15\" x2=\"16\" y2=\"15\"/><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"/><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"/></g>"
        },
        {
            "id": 590,
            "name": "Menu-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"barGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#78909c\"/><stop offset=\"100%\" stop-color=\"#37474f\"/></linearGradient></defs><g stroke=\"url(#barGrad)\" stroke-width=\"3\" stroke-linecap=\"round\"><line x1=\"3\" y1=\"12\" x2=\"21\" y2=\"12\"/><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"/><line x1=\"3\" y1=\"18\" x2=\"21\" y2=\"18\"/></g>"
        },
        {
            "id": 591,
            "name": "MenuAltInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"4\" y1=\"6\" x2=\"20\" y2=\"6\" /><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"4\" y1=\"12\" x2=\"20\" y2=\"12\" /><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"4\" y1=\"18\" x2=\"20\" y2=\"18\" />"
        },
        {
            "id": 592,
            "name": "MenuDots",
            "category": "ui",
            "svgContent": "<circle cx=\"5\" cy=\"12\" r=\"1.5\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"12\" cy=\"12\" r=\"1.5\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"19\" cy=\"12\" r=\"1.5\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 593,
            "name": "MenuDotsInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"5\" cy=\"12\" r=\"1.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"1.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"19\" cy=\"12\" r=\"1.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 594,
            "name": "MenuExpand",
            "category": "ui",
            "svgContent": "<line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"/><line x1=\"3\" y1=\"12\" x2=\"21\" y2=\"12\"/><line x1=\"3\" y1=\"18\" x2=\"21\" y2=\"18\"/><circle cx=\"12\" cy=\"12\" r=\"1\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 595,
            "name": "MenuExpandInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\" /><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"3\" y1=\"12\" x2=\"21\" y2=\"12\" /><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"3\" y1=\"18\" x2=\"21\" y2=\"18\" /><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"1\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 596,
            "name": "MenuIconInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"4\" y1=\"12\" x2=\"20\" y2=\"12\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"4\" y1=\"6\" x2=\"20\" y2=\"6\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"4\" y1=\"18\" x2=\"20\" y2=\"18\"/>"
        },
        {
            "id": 597,
            "name": "MenuInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"3\" y1=\"12\" x2=\"21\" y2=\"12\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"3\" y1=\"18\" x2=\"21\" y2=\"18\"/>"
        },
        {
            "id": 598,
            "name": "MessageSquare2Inverted",
            "category": "communication",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"8\" y1=\"10\" x2=\"16\" y2=\"10\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"8\" y1=\"14\" x2=\"14\" y2=\"14\"/>"
        },
        {
            "id": 599,
            "name": "MessengerInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"10\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M8 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm8 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z\"/>"
        },
        {
            "id": 600,
            "name": "MetaInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M7 3a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4zm10 0a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4zM7 15c0-2.2 1.8-4 4-4s4 1.8 4 4v4H7v-4z\"/>"
        },
        {
            "id": 601,
            "name": "Mic-Color",
            "category": "communication",
            "svgContent": "<defs><linearGradient id=\"micBody\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#78909c\"/><stop offset=\"100%\" stop-color=\"#37474f\"/></linearGradient></defs><g><rect x=\"9\" y=\"2\" width=\"6\" height=\"12\" rx=\"3\" fill=\"url(#micBody)\"/><path d=\"M19 10v1a7 7 0 0 1-14 0v-1\" fill=\"none\" stroke=\"#455a64\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"22\" stroke=\"#455a64\" stroke-width=\"2\"/><line x1=\"8\" y1=\"22\" x2=\"16\" y2=\"22\" stroke=\"#455a64\" stroke-width=\"2\" stroke-linecap=\"round\"/><rect x=\"10\" y=\"4\" width=\"4\" height=\"3\" rx=\"1\" fill=\"#cfd8dc\" opacity=\"0.3\"/></g>"
        },
        {
            "id": 602,
            "name": "Mic-OffInverted",
            "category": "communication",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"/><path d=\"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6\"/><path d=\"M17 11a7 7 0 0 1-12 0v-1M19 10v1a6.93 6.93 0 0 1-.46 2.5\"/><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"23\"/><line x1=\"8\" y1=\"23\" x2=\"16\" y2=\"23\"/></g>"
        },
        {
            "id": 603,
            "name": "MicInverted",
            "category": "communication",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z\"/><path d=\"M19 10v2a7 7 0 0 1-14 0v-2\"/><line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"23\"/></g>"
        },
        {
            "id": 604,
            "name": "Microphone-Color",
            "category": "communication",
            "svgContent": "<defs><linearGradient id=\"micGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#cfd8dc\"/><stop offset=\"100%\" stop-color=\"#78909c\"/></linearGradient></defs><g><path d=\"M12 2a4 4 0 0 0-4 4v6a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4z\" fill=\"url(#micGrad)\" stroke=\"#546e7a\" stroke-width=\"1.5\"/><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"22\" stroke=\"#546e7a\" stroke-width=\"3\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 605,
            "name": "Microphone-Inverted-Color",
            "category": "communication",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#546e7a\" rx=\"4\"/><path d=\"M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 606,
            "name": "MicrophoneInverted",
            "category": "communication",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M19 10v2a7 7 0 0 1-14 0v-2m14 0H5m7 11v4m-4 0h8\"/>"
        },
        {
            "id": 607,
            "name": "MicrosoftInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"3\" y=\"3\" width=\"7\" height=\"7\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"14\" y=\"3\" width=\"7\" height=\"7\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"3\" y=\"14\" width=\"7\" height=\"7\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"14\" y=\"14\" width=\"7\" height=\"7\"/>"
        },
        {
            "id": 608,
            "name": "MilkInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M8 2h8v20H8z\"/><path d=\"M16 4h4v18h-4z\"/><path d=\"M4 4h4v18H4z\"/></g>"
        },
        {
            "id": 609,
            "name": "MinimizeInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M4 14h6v6m10-6h-6v6M4 10h6V4m10 6h-6V4\"/></g>"
        },
        {
            "id": 610,
            "name": "MinusInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"/>"
        },
        {
            "id": 611,
            "name": "MoneroInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 2L4 8v8l8 4 8-4v-8l-8-6zm0 4l4 2v4l-4 2-4-2v-4l4-2z\"/>"
        },
        {
            "id": 612,
            "name": "Monitor-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"monGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#37474f\"/><stop offset=\"100%\" stop-color=\"#212121\"/></linearGradient></defs><g><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" fill=\"url(#monGrad)\"/><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\" stroke=\"#455a64\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\" stroke=\"#455a64\" stroke-width=\"3\"/><rect x=\"4\" y=\"5\" width=\"16\" height=\"10\" fill=\"#00b0ff\" opacity=\"0.15\"/></g>"
        },
        {
            "id": 613,
            "name": "Monitor-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#37474f\" rx=\"4\"/><rect x=\"3\" y=\"4\" width=\"18\" height=\"11\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 614,
            "name": "MonitorInverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"/><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\"/><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\"/></g>"
        },
        {
            "id": 615,
            "name": "Moon-CloudInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z\"/><path d=\"M16 13a4 4 0 0 1 0 8H6a5 5 0 0 1-1.8-9.6\"/></g>"
        },
        {
            "id": 616,
            "name": "Moon-Color",
            "category": "iot",
            "svgContent": "<defs><linearGradient id=\"moonGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#fff59d\"/><stop offset=\"100%\" stop-color=\"#fbc02d\"/></linearGradient></defs><g><path d=\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\" fill=\"url(#moonGrad)\"/><circle cx=\"12\" cy=\"8\" r=\"1\" fill=\"#f57f17\" opacity=\"0.3\"/><circle cx=\"16\" cy=\"14\" r=\"1.5\" fill=\"#f57f17\" opacity=\"0.3\"/></g>"
        },
        {
            "id": 617,
            "name": "Moon-Full-Color",
            "category": "iot",
            "svgContent": "<defs><linearGradient id=\"monFGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#cfd8dc\"/><stop offset=\"100%\" stop-color=\"#90a4ae\"/></linearGradient></defs><g><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"url(#monFGrad)\" stroke=\"#546e7a\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 618,
            "name": "Moon-Full-Inverted-Color",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#546e7a\" rx=\"4\"/><circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"#ffffff\"/>"
        },
        {
            "id": 619,
            "name": "Moon-Inverted-Color",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#1a237e\" rx=\"4\"/><path d=\"M19 11.5A7.5 7.5 0 1 1 10.5 3a5.8 5.8 0 0 0 8.5 8.5z\" fill=\"#fff59d\"/>"
        },
        {
            "id": 620,
            "name": "Moon-StarsInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z\"/><path d=\"M18 3l2 4 4 2-4 2-2 4-2-4-4-2 4-2z\"/></g>"
        },
        {
            "id": 621,
            "name": "MoonInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\"/></g>"
        },
        {
            "id": 622,
            "name": "MoreHorizontalInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"5\" cy=\"12\" r=\"1.5\" stroke=\"var(--ax-bg-inverse, white)\" /><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"1.5\" stroke=\"var(--ax-bg-inverse, white)\" /><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"19\" cy=\"12\" r=\"1.5\" stroke=\"var(--ax-bg-inverse, white)\" />"
        },
        {
            "id": 623,
            "name": "MoreVertical",
            "category": "general",
            "svgContent": "<circle cx=\"12\" cy=\"5\" r=\"1\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"12\" cy=\"12\" r=\"1\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"12\" cy=\"19\" r=\"1\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 624,
            "name": "MoreVerticalInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"5\" r=\"1\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"1\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"19\" r=\"1\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 625,
            "name": "Motorbike-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"mtbGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#455a64\"/><stop offset=\"100%\" stop-color=\"#263238\"/></linearGradient></defs><g stroke=\"#263238\" stroke-width=\"2\"><circle cx=\"6\" cy=\"18\" r=\"4\" fill=\"none\"/><circle cx=\"18\" cy=\"18\" r=\"4\" fill=\"none\"/><path d=\"M10 18h4v-4l4-2\" fill=\"none\"/></g>"
        },
        {
            "id": 626,
            "name": "Motorbike-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#263238\" rx=\"4\"/><circle cx=\"6\" cy=\"18\" r=\"3\" fill=\"#ffffff\"/><circle cx=\"18\" cy=\"18\" r=\"3\" fill=\"#ffffff\"/>"
        },
        {
            "id": 627,
            "name": "Motorcycle-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"motGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#455a64\"/><stop offset=\"100%\" stop-color=\"#263238\"/></linearGradient></defs><g stroke=\"#263238\" stroke-width=\"2\" stroke-linecap=\"round\"><circle cx=\"6\" cy=\"18\" r=\"4\" fill=\"none\"/><circle cx=\"18\" cy=\"18\" r=\"4\" fill=\"none\"/><path d=\"M10 18h4v-4l4-2\"/></g>"
        },
        {
            "id": 628,
            "name": "Motorcycle-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#263238\" rx=\"4\"/><circle cx=\"6\" cy=\"18\" r=\"3\" fill=\"#ffffff\"/><circle cx=\"18\" cy=\"18\" r=\"3\" fill=\"#ffffff\"/>"
        },
        {
            "id": 629,
            "name": "Mountain-Color",
            "category": "ai",
            "svgContent": "<defs><linearGradient id=\"mtnGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#78909c\"/><stop offset=\"100%\" stop-color=\"#37474f\"/></linearGradient></defs><g><polygon points=\"12 4 2 20 22 20\" fill=\"url(#mtnGrad)\"/><polygon points=\"12 4 9 9 12 11 14 9\" fill=\"#ffffff\"/><polygon points=\"17 11 13 18 21 18\" fill=\"#455a64\" opacity=\"0.7\"/></g>"
        },
        {
            "id": 630,
            "name": "Mountain-Inverted-Color",
            "category": "ai",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#546e7a\" rx=\"4\"/><path d=\"M3 21l7-13 5 5 6 8z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 631,
            "name": "Mountain-Small-Color",
            "category": "ai",
            "svgContent": "<defs><linearGradient id=\"mtsGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#b0bec5\"/><stop offset=\"100%\" stop-color=\"#546e7a\"/></linearGradient></defs><g><path d=\"M2 22l8-15 5 5 7 10z\" fill=\"url(#mtsGrad)\" stroke=\"#546e7a\" stroke-width=\"1.5\"/><path d=\"M10 7l5 5 3-3\" stroke=\"#ffffff\" stroke-width=\"2\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 632,
            "name": "Mountain-Small-Inverted-Color",
            "category": "ai",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#546e7a\" rx=\"4\"/><path d=\"M3 21l7-13 5 5 6 8z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 633,
            "name": "MugInverted",
            "category": "food",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M17 8h1a4 4 0 0 1 0 8h-1\"/><path d=\"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z\"/></g>"
        },
        {
            "id": 634,
            "name": "Music-Note-Color",
            "category": "media",
            "svgContent": "<defs><linearGradient id=\"mscGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#2979ff\"/><stop offset=\"100%\" stop-color=\"#1565c0\"/></linearGradient></defs><g><path d=\"M9 18V5l10-2v13\" fill=\"none\" stroke=\"url(#mscGrad)\" stroke-width=\"3\" stroke-linecap=\"round\"/><circle cx=\"7\" cy=\"18\" r=\"2\" fill=\"#1565c0\"/><circle cx=\"17\" cy=\"16\" r=\"2\" fill=\"#1565c0\"/></g>"
        },
        {
            "id": 635,
            "name": "Music-Note-Inverted-Color",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#1565c0\" rx=\"4\"/><path d=\"M10 18V6l8-2v12\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\"/>"
        },
        {
            "id": 636,
            "name": "Music-Score-Color",
            "category": "media",
            "svgContent": "<defs><linearGradient id=\"mscSGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffffff\"/><stop offset=\"100%\" stop-color=\"#cfd8dc\"/></linearGradient></defs><g><rect x=\"4\" y=\"3\" width=\"16\" height=\"18\" rx=\"1\" fill=\"url(#mscSGrad)\" stroke=\"#455a64\" stroke-width=\"1.5\"/><path d=\"M6 7h12M6 11h12M6 15h12M6 19h12\" stroke=\"#455a64\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 637,
            "name": "Music-Score-Inverted-Color",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#455a64\" rx=\"4\"/><rect x=\"5\" y=\"4\" width=\"14\" height=\"16\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 638,
            "name": "MusicInverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M9 18V5l12-2v13\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><circle cx=\"18\" cy=\"16\" r=\"3\"/></g>"
        },
        {
            "id": 639,
            "name": "MuteInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"/><line x1=\"23\" y1=\"9\" x2=\"17\" y2=\"15\"/><line x1=\"17\" y1=\"9\" x2=\"23\" y2=\"15\"/></g>"
        },
        {
            "id": 640,
            "name": "NavigationInverted",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polygon points=\"3 11 22 2 13 21 11 13 3 11\"/></g>"
        },
        {
            "id": 641,
            "name": "NetflixInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M6 6h3v12H6zM11 6h3v12h-3zM16 6h3v12h-3z\"/>"
        },
        {
            "id": 642,
            "name": "NewspaperInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"6\" y1=\"9\" x2=\"18\" y2=\"9\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"6\" y1=\"13\" x2=\"18\" y2=\"13\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"6\" y1=\"17\" x2=\"14\" y2=\"17\"/>"
        },
        {
            "id": 643,
            "name": "NoSymbolInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"10\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M4 4l16 16\"/>"
        },
        {
            "id": 644,
            "name": "Note-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"notGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#fff59d\"/><stop offset=\"100%\" stop-color=\"#fbc02d\"/></linearGradient></defs><g><path d=\"M3 3h12l6 6v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3z\" fill=\"url(#notGrad)\"/><path d=\"M15 3v4a2 2 0 0 0 2 2h4\" fill=\"#f57f17\" opacity=\"0.3\"/></g>"
        },
        {
            "id": 645,
            "name": "Note-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#fbc02d\" rx=\"4\"/><path d=\"M5 4h10l5 5v11H5V4z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 646,
            "name": "Notebook-Color",
            "category": "objects",
            "svgContent": "<defs><linearGradient id=\"ntbGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffcc80\"/><stop offset=\"100%\" stop-color=\"#f57c00\"/></linearGradient></defs><g><rect x=\"6\" y=\"3\" width=\"14\" height=\"18\" rx=\"1\" fill=\"url(#ntbGrad)\" stroke=\"#f57c00\" stroke-width=\"1.5\"/><path d=\"M6 3h2v18H6z\" fill=\"#f57c00\"/><path d=\"M10 7h8M10 11h8M10 15h8\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 647,
            "name": "Notebook-Inverted-Color",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#f57c00\" rx=\"4\"/><rect x=\"7\" y=\"4\" width=\"12\" height=\"16\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 648,
            "name": "Notion",
            "category": "general",
            "svgContent": "<path d=\"M3 3h18v18H3z\"/><circle cx=\"6\" cy=\"6\" r=\"1\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"12\" cy=\"6\" r=\"1\" fill=\"currentColor\" opacity=\"0.9\"/><path d=\"M3 10h18M3 14h18M3 18h18\"/>"
        },
        {
            "id": 649,
            "name": "NotionInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M3 3h18v18H3z\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"6\" cy=\"6\" r=\"1\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"6\" r=\"1\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M3 10h18M3 14h18M3 18h18\"/>"
        },
        {
            "id": 650,
            "name": "Oil-Platform-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"oilGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffcc80\"/><stop offset=\"100%\" stop-color=\"#d84315\"/></linearGradient></defs><g><rect x=\"4\" y=\"6\" width=\"16\" height=\"4\" fill=\"url(#oilGrad)\" stroke=\"#d84315\" stroke-width=\"1.5\"/><path d=\"M6 10v12M18 10v12\" stroke=\"#d84315\" stroke-width=\"3\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 651,
            "name": "Oil-Platform-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#d84315\" rx=\"4\"/><rect x=\"5\" y=\"7\" width=\"14\" height=\"2\" fill=\"#ffffff\"/>"
        },
        {
            "id": 652,
            "name": "OpenAI",
            "category": "general",
            "svgContent": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 4a8 8 0 0 1 0 16 8 8 0 0 1 0-16z\" fill=\"currentColor\" opacity=\"0.9\" opacity=\"0.3\"/><circle cx=\"12\" cy=\"12\" r=\"3\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 653,
            "name": "OpenAIInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"9\" stroke=\"var(--ax-bg-inverse, white)\" /><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 4a8 8 0 0 1 0 16 8 8 0 0 1 0-16z\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\" opacity=\"0.3\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"3\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 654,
            "name": "Optimize",
            "category": "general",
            "svgContent": "<circle cx=\"12\" cy=\"12\" r=\"1\" fill=\"currentColor\" opacity=\"0.9\"/><path d=\"M12 1v4m0 10v4M23 12h-4M5 12H1M19.07 4.93l-2.83 2.83M7.76 17.24l-2.83 2.83M19.07 19.07l-2.83-2.83M7.76 7.76l-2.83-2.83\"/>"
        },
        {
            "id": 655,
            "name": "OptimizeInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"1\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 1v4m0 10v4M23 12h-4M5 12H1M19.07 4.93l-2.83 2.83M7.76 17.24l-2.83 2.83M19.07 19.07l-2.83-2.83M7.76 7.76l-2.83-2.83\"/>"
        },
        {
            "id": 656,
            "name": "Package-Color",
            "category": "development",
            "svgContent": "<defs><linearGradient id=\"pkgGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffb74d\"/><stop offset=\"100%\" stop-color=\"#a1887f\"/></linearGradient></defs><g fill=\"url(#pkgGrad)\" stroke=\"#5d4037\" stroke-width=\"1.5\"><polygon points=\"12 2 22 7 12 12 2 7\"/><polygon points=\"2 7 12 12 12 22 2 17\"/><polygon points=\"22 7 12 12 12 22 22 17\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"12\" stroke=\"#ffffff\" opacity=\"0.5\"/></g>"
        },
        {
            "id": 657,
            "name": "Package-Inverted-Color",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#8d6e63\" rx=\"4\"/><polygon points=\"12 4 20 8 12 12 4 8\" fill=\"#ffffff\"/><path d=\"M4 8v8l8 4v-8z\" fill=\"#ffffff\" opacity=\"0.7\"/>"
        },
        {
            "id": 658,
            "name": "Paint-Can-Color",
            "category": "ai",
            "svgContent": "<defs><linearGradient id=\"pntCGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#eceff1\"/><stop offset=\"100%\" stop-color=\"#90a4ae\"/></linearGradient></defs><g><rect x=\"6\" y=\"8\" width=\"12\" height=\"12\" rx=\"1\" fill=\"url(#pntCGrad)\" stroke=\"#546e7a\" stroke-width=\"1.5\"/><path d=\"M6 8h12M7 5h10l-1 3H8z\" fill=\"#cfd8dc\" stroke=\"#546e7a\" stroke-width=\"1.5\"/><path d=\"M12 11l-2 4 4-2z\" fill=\"#ff5252\"/></g>"
        },
        {
            "id": 659,
            "name": "Paint-Can-Inverted-Color",
            "category": "ai",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#546e7a\" rx=\"4\"/><rect x=\"7\" y=\"9\" width=\"10\" height=\"10\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 660,
            "name": "Paintbrush-Color",
            "category": "ai",
            "svgContent": "<defs><linearGradient id=\"pntGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#b0bec5\"/><stop offset=\"100%\" stop-color=\"#546e7a\"/></linearGradient></defs><g><rect x=\"11\" y=\"10\" width=\"2\" height=\"12\" fill=\"#8d6e63\"/><path d=\"M10 10h4l1-6-6-2-1 8z\" fill=\"url(#pntGrad)\" stroke=\"#546e7a\" stroke-width=\"1.5\"/><path d=\"M9 4l-2-2M11 3l-2-2M13 3l-2-2\" stroke=\"#ff5252\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 661,
            "name": "Paintbrush-Inverted-Color",
            "category": "ai",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#546e7a\" rx=\"4\"/><path d=\"M11 10h2l1-7-5-2-1 7z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 662,
            "name": "PaintbrushInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M6 9c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2z\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12.5 9a5.5 5.5 0 0 1 5.5 5.5v2a5 5 0 0 1-5 5h-1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h-1a5 5 0 0 0-5 5v2a5.5 5.5 0 0 0 5.5 5.5z\"/>"
        },
        {
            "id": 663,
            "name": "Palette",
            "category": "general",
            "svgContent": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"7\" cy=\"7\" r=\"1.5\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"17\" cy=\"7\" r=\"1.5\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"17\" cy=\"17\" r=\"1.5\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"7\" cy=\"17\" r=\"1.5\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"12\" cy=\"12\" r=\"1.5\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 664,
            "name": "Palette-Artist-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"artGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#f8bbd0\"/><stop offset=\"100%\" stop-color=\"#c2185b\"/></linearGradient></defs><g><path d=\"M22 12c0 5-4 9-9 9h-7l3-3 2-2z\" fill=\"url(#artGrad)\" stroke=\"#c2185b\" stroke-width=\"1.5\"/><circle cx=\"10\" cy=\"10\" r=\"2\" fill=\"#ff5252\"/><circle cx=\"16\" cy=\"10\" r=\"2\" fill=\"#29b6f6\"/></g>"
        },
        {
            "id": 665,
            "name": "Palette-Artist-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#c2185b\" rx=\"4\"/><path d=\"M21 12c0 4-4 8-8 8h-6l2-2 2-2z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 666,
            "name": "Palette-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"palGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffb74d\"/><stop offset=\"100%\" stop-color=\"#ff8f00\"/></linearGradient></defs><g><path d=\"M12 2A10 10 0 0 0 2 12c0 5.52 4.48 10 10 10a3 3 0 0 0 3-3c0-.38-.07-.75-.21-1.09.43.06.87.09 1.32.09 4.97 0 9-4.03 9-9 0-4.97-4.03-9-9-9z\" fill=\"url(#palGrad)\"/><circle cx=\"6.5\" cy=\"11.5\" r=\"1.5\" fill=\"#e91e63\"/><circle cx=\"9.5\" cy=\"6.5\" r=\"1.5\" fill=\"#2196f3\"/><circle cx=\"14.5\" cy=\"6.5\" r=\"1.5\" fill=\"#4caf50\"/><circle cx=\"18.5\" cy=\"11.5\" r=\"1.5\" fill=\"#ffeb3b\"/></g>"
        },
        {
            "id": 667,
            "name": "Palette-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#ff8f00\" rx=\"4\"/><path d=\"M12 3a9 9 0 0 0-9 9c0 5 4 9 9 9s4-2 4-4c0-.5-.2-.8-.4-1.2h.4a8 8 0 0 0 8-8c0-4.8-4-8.8-9-8.8z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 668,
            "name": "PaletteInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"10\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"7\" cy=\"7\" r=\"1.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"17\" cy=\"7\" r=\"1.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"17\" cy=\"17\" r=\"1.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"7\" cy=\"17\" r=\"1.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"1.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 669,
            "name": "PanInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M17.5 17.5L21 21\"/><circle cx=\"12\" cy=\"12\" r=\"7\"/><path d=\"M12 5V2h4\"/><path d=\"M17 12l2 2\"/></g>"
        },
        {
            "id": 670,
            "name": "Paperclip-Color",
            "category": "general",
            "svgContent": "<g fill=\"none\" stroke=\"#78909c\" stroke-width=\"3\" stroke-linecap=\"round\"><path d=\"M14 2a3 3 0 0 1 3 3v12a5 5 0 0 1-10 0V5a2 2 0 1 1 4 0v10\"/></g>"
        },
        {
            "id": 671,
            "name": "Paperclip-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#78909c\" rx=\"4\"/><path d=\"M15 3a2 2 0 0 1 2 2v10a4 4 0 0 1-8 0V5a1 1 0 1 1 2 0v8\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\"/>"
        },
        {
            "id": 672,
            "name": "PaperclipInverted",
            "category": "communication",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48\"/></g>"
        },
        {
            "id": 673,
            "name": "Parachute-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"prcGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#9c27b0\"/><stop offset=\"100%\" stop-color=\"#7b1fa2\"/></linearGradient></defs><g><path d=\"M2 12a10 10 0 0 1 20 0H2z\" fill=\"url(#prcGrad)\" stroke=\"#7b1fa2\" stroke-width=\"1.5\"/><path d=\"M4 12l2 8h12l2-8\" fill=\"none\" stroke=\"#7b1fa2\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 674,
            "name": "Parachute-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#7b1fa2\" rx=\"4\"/><path d=\"M3 12a9 9 0 0 1 18 0H3z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 675,
            "name": "Party-Hat-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"hatGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ba68c8\"/><stop offset=\"100%\" stop-color=\"#4a148c\"/></linearGradient></defs><g><polygon points=\"12 3 4 21 20 21\" fill=\"url(#hatGrad)\" stroke=\"#4a148c\" stroke-width=\"1.5\"/><circle cx=\"12\" cy=\"3\" r=\"1.5\" fill=\"#ffeb3b\"/><path d=\"M6 18l12-4\" stroke=\"#ffeb3b\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 676,
            "name": "Party-Hat-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#4a148c\" rx=\"4\"/><polygon points=\"12 4 5 20 19 20\" fill=\"#ffffff\"/>"
        },
        {
            "id": 677,
            "name": "PasteInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"9\" y=\"2\" width=\"6\" height=\"4\" rx=\"1\"/>"
        },
        {
            "id": 678,
            "name": "PauseInverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><rect x=\"6\" y=\"4\" width=\"4\" height=\"16\"/><rect x=\"14\" y=\"4\" width=\"4\" height=\"16\"/></g>"
        },
        {
            "id": 679,
            "name": "PauseSolid",
            "category": "media",
            "svgContent": "<rect x=\"6\" y=\"4\" width=\"3\" height=\"16\" fill=\"currentColor\" opacity=\"0.9\"/><rect x=\"15\" y=\"4\" width=\"3\" height=\"16\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 680,
            "name": "PauseSolidInverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"6\" y=\"4\" width=\"3\" height=\"16\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"15\" y=\"4\" width=\"3\" height=\"16\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 681,
            "name": "PayPalInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M3 12c0-2 2-3 4-3h4c2 0 4 1 4 3s-2 3-4 3H7c-2 0-4-1-4-3zm4 4c0-2 2-3 4-3h2c2 0 4 1 4 3s-2 3-4 3h-2c-2 0-4-1-4-3z\"/>"
        },
        {
            "id": 682,
            "name": "Pen-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"penGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#cfd8dc\"/><stop offset=\"100%\" stop-color=\"#78909c\"/></linearGradient></defs><g><rect x=\"11\" y=\"2\" width=\"2\" height=\"16\" fill=\"url(#penGrad)\" stroke=\"#546e7a\" stroke-width=\"1.5\"/><path d=\"M12 18l-2 4h4l-2-4z\" fill=\"#121212\"/></g>"
        },
        {
            "id": 683,
            "name": "Pen-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#546e7a\" rx=\"4\"/><rect x=\"12\" y=\"3\" width=\"1\" height=\"15\" fill=\"#ffffff\"/>"
        },
        {
            "id": 684,
            "name": "Pencil-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"pclGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#fff176\"/><stop offset=\"100%\" stop-color=\"#fbc02d\"/></linearGradient></defs><g><path d=\"M18 2l4 4-13 13-4-4 13-13z\" fill=\"url(#pclGrad)\" stroke=\"#fbc02d\" stroke-width=\"1.5\"/><polygon points=\"5 18 8 21 5 21\" fill=\"#121212\"/><line x1=\"21\" y1=\"5\" x2=\"19\" y2=\"3\" stroke=\"#fbc02d\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 685,
            "name": "Pencil-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#fbc02d\" rx=\"4\"/><path d=\"M19 3l3 3-12 12-3-3 12-12z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 686,
            "name": "PencilInverted",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 3l9 9-12 9H3v-6l9-12z\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"/>"
        },
        {
            "id": 687,
            "name": "Pendant",
            "category": "objects",
            "svgContent": "<circle cx=\"12\" cy=\"8\" r=\"2\" fill=\"currentColor\" opacity=\"0.9\"/><path d=\"M12 10v6a3 3 0 0 1-3 3v0a3 3 0 0 0 3 3 3 3 0 0 0 3-3v0a3 3 0 0 1-3-3v-6\"/>"
        },
        {
            "id": 688,
            "name": "PendantInverted",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"8\" r=\"2\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 10v6a3 3 0 0 1-3 3v0a3 3 0 0 0 3 3 3 3 0 0 0 3-3v0a3 3 0 0 1-3-3v-6\"/>"
        },
        {
            "id": 689,
            "name": "PenInverted",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z\"/></g>"
        },
        {
            "id": 690,
            "name": "PeopleInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"8\" cy=\"9\" r=\"2.5\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"16\" cy=\"9\" r=\"2.5\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M6 20c0-1.66 1.79-3 4-3s4 1.34 4 3M14 20c0-1.66 1.79-3 4-3s4 1.34 4 3\"/>"
        },
        {
            "id": 691,
            "name": "PepperInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M12 2v3\"/><path d=\"M12 19v3\"/><path d=\"M22 12h-3\"/><path d=\"M5 12H2\"/><path d=\"M18.36 5.64L16.24 7.76\"/><path d=\"M7.76 16.24L5.64 18.36\"/><path d=\"M18.36 18.36l-2.12-2.12\"/><path d=\"M7.76 7.76L5.64 5.64\"/><circle cx=\"12\" cy=\"12\" r=\"5\"/></g>"
        },
        {
            "id": 692,
            "name": "PercentInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"19\" y1=\"5\" x2=\"5\" y2=\"19\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"6\" cy=\"6\" r=\"3\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"18\" cy=\"18\" r=\"3\"/>"
        },
        {
            "id": 693,
            "name": "PerformanceInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M13 2H9c-1 0-2 1-2 2v16c0 1 1 2 2 2h4c1 0 2-1 2-2V4c0-1-1-2-2-2z\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"6\" y=\"9\" width=\"12\" height=\"9\" rx=\"1\"/>"
        },
        {
            "id": 694,
            "name": "PersonCheckInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"8\" r=\"4\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6v1H6v-1z\"/><polyline points=\"14 12 16 14 20 10\"/>"
        },
        {
            "id": 695,
            "name": "PersonPlusInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"8\" r=\"4\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6v1H6v-1z\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"16\" y1=\"10\" x2=\"16\" y2=\"14\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"14\" y1=\"12\" x2=\"18\" y2=\"12\"/>"
        },
        {
            "id": 696,
            "name": "PersonXInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"8\" r=\"4\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6v1H6v-1z\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"14\" y1=\"10\" x2=\"18\" y2=\"14\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"18\" y1=\"10\" x2=\"14\" y2=\"14\"/>"
        },
        {
            "id": 697,
            "name": "PhoneCallInverted",
            "category": "communication",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\" stroke=\"white\"/><polyline points=\"23 7 23 1 17 1\" stroke=\"var(--ax-bg-inverse, white)\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"
        },
        {
            "id": 698,
            "name": "PhoneIncomingInverted",
            "category": "communication",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\" stroke=\"white\"/><polyline points=\"17 1 23 1 23 7\" stroke=\"var(--ax-bg-inverse, white)\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"
        },
        {
            "id": 699,
            "name": "PhoneInverted",
            "category": "communication",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\" stroke=\"var(--ax-bg-inverse, white)\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"
        },
        {
            "id": 700,
            "name": "PhoneOffInverted",
            "category": "communication",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M10.68 13.31a16 16 0 0 0 5.02 5.02m2.11-2.11l1.27 1.27a2 2 0 0 0 2.11.45 12.84 12.84 0 0 0 2.81-.7 2 2 0 0 0 1.72-2v-3a2 2 0 0 0-2.18-2 19.79 19.79 0 0 1-8.63 3.07\" stroke=\"var(--ax-bg-inverse, white)\" stroke-linecap=\"round\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"
        },
        {
            "id": 701,
            "name": "Photo-Frame-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"frmGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#8d6e63\"/><stop offset=\"100%\" stop-color=\"#5d4037\"/></linearGradient></defs><g><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"1\" fill=\"url(#frmGrad)\" stroke=\"#5d4037\" stroke-width=\"1.5\"/><rect x=\"7\" y=\"7\" width=\"10\" height=\"10\" fill=\"#ffffff\"/><circle cx=\"15\" cy=\"9\" r=\"1.5\" fill=\"#4fc3f7\"/></g>"
        },
        {
            "id": 702,
            "name": "Photo-Frame-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#5d4037\" rx=\"4\"/><rect x=\"5\" y=\"5\" width=\"14\" height=\"14\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 703,
            "name": "Piano-Keys-Color",
            "category": "iot",
            "svgContent": "<defs><linearGradient id=\"pnoGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffffff\"/><stop offset=\"100%\" stop-color=\"#e0e0e0\"/></linearGradient></defs><g><rect x=\"3\" y=\"6\" width=\"18\" height=\"12\" rx=\"2\" fill=\"url(#pnoGrad)\" stroke=\"#424242\" stroke-width=\"1.5\"/><path d=\"M7 6v8M11 6v8M15 6v8M19 6v8\" stroke=\"#424242\" stroke-width=\"1.5\"/><rect x=\"6\" y=\"6\" width=\"2\" height=\"6\" fill=\"#212121\"/><rect x=\"10\" y=\"6\" width=\"2\" height=\"6\" fill=\"#212121\"/><rect x=\"14\" y=\"6\" width=\"2\" height=\"6\" fill=\"#212121\"/></g>"
        },
        {
            "id": 704,
            "name": "Piano-Keys-Inverted-Color",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#424242\" rx=\"4\"/><rect x=\"4\" y=\"7\" width=\"16\" height=\"10\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 705,
            "name": "Pie-Chart-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"pieGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ff9800\"/><stop offset=\"100%\" stop-color=\"#f57c00\"/></linearGradient></defs><g><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"url(#pieGrad)\" stroke=\"#f57c00\" stroke-width=\"1.5\"/><path d=\"M12 12l8-6a10 10 0 0 1 2 6z\" fill=\"#ffffff\"/></g>"
        },
        {
            "id": 706,
            "name": "Pie-Chart-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#f57c00\" rx=\"4\"/><circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"#ffffff\"/>"
        },
        {
            "id": 707,
            "name": "PieChartInverted",
            "category": "food",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M21.21 15.89A10 10 0 1 1 8 2.83\"/><path d=\"M22 12A10 10 0 0 0 12 2v10z\"/></g>"
        },
        {
            "id": 708,
            "name": "Pin-Color",
            "category": "iot",
            "svgContent": "<defs><linearGradient id=\"pinGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ff5252\"/><stop offset=\"100%\" stop-color=\"#b71c1c\"/></linearGradient></defs><g><path d=\"M12 2a5 5 0 0 0-5 5c0 3.5 5 11 5 11s5-7.5 5-5a5 5 0 0 0-5-5z\" fill=\"url(#pinGrad)\"/><circle cx=\"12\" cy=\"7\" r=\"2\" fill=\"#ffffff\"/></g>"
        },
        {
            "id": 709,
            "name": "Pin-Inverted-Color",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#b71c1c\" rx=\"4\"/><path d=\"M12 3a6 6 0 0 0-6 6c0 4.5 6 12 6 12s6-7.5 6-12a6 6 0 0 0-6-6z\" fill=\"#ffffff\"/><circle cx=\"12\" cy=\"9\" r=\"2\" fill=\"#b71c1c\"/>"
        },
        {
            "id": 710,
            "name": "PizzaInverted",
            "category": "food",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z\"/><line x1=\"7\" y1=\"7\" x2=\"7.01\" y2=\"7\"/></g>"
        },
        {
            "id": 711,
            "name": "Planet-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"plnGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffcc80\"/><stop offset=\"100%\" stop-color=\"#e65100\"/></linearGradient></defs><g><circle cx=\"12\" cy=\"12\" r=\"7\" fill=\"url(#plnGrad)\" stroke=\"#e65100\" stroke-width=\"1.5\"/><ellipse cx=\"12\" cy=\"12\" rx=\"10\" ry=\"3\" fill=\"none\" stroke=\"#ffcc80\" stroke-width=\"1.5\" transform=\"rotate(20 12 12)\"/></g>"
        },
        {
            "id": 712,
            "name": "Planet-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#e65100\" rx=\"4\"/><circle cx=\"12\" cy=\"12\" r=\"6\" fill=\"#ffffff\"/>"
        },
        {
            "id": 713,
            "name": "PlateInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 2a10 10 0 0 1 0 20\"/><path d=\"M12 5a7 7 0 0 0 0 14\"/></g>"
        },
        {
            "id": 714,
            "name": "PlayInverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polygon points=\"5 3 19 12 5 21 5 3\"/></g>"
        },
        {
            "id": 715,
            "name": "PlaySolid",
            "category": "media",
            "svgContent": "<polygon points=\"5 3 19 12 5 21 5 3\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 716,
            "name": "PlaySolidInverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><polygon points=\"5 3 19 12 5 21 5 3\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 717,
            "name": "Plug",
            "category": "iot",
            "svgContent": "<circle cx=\"12\" cy=\"13\" r=\"1\" fill=\"currentColor\" opacity=\"0.9\"/><path d=\"M12 1v4m0 8v4M6 12h-2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2v8zm8-8h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2V4z\"/>"
        },
        {
            "id": 718,
            "name": "PlugInverted",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"13\" r=\"1\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 1v4m0 8v4M6 12h-2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2v8zm8-8h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2V4z\"/>"
        },
        {
            "id": 719,
            "name": "PlusInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"/>"
        },
        {
            "id": 720,
            "name": "Pocket-KnifeInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M12 18h8\"/><path d=\"M12 15h8\"/><path d=\"M12 12h8\"/><path d=\"M12 9h8\"/><path d=\"M12 6h8\"/><path d=\"M12 3h8\"/><path d=\"M3 21h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z\"/></g>"
        },
        {
            "id": 721,
            "name": "Police-Car-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"polGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#eceff1\"/><stop offset=\"100%\" stop-color=\"#cfd8dc\"/></linearGradient></defs><g><rect x=\"2\" y=\"10\" width=\"16\" height=\"8\" rx=\"2\" fill=\"url(#polGrad)\" stroke=\"#455a64\" stroke-width=\"1.5\"/><rect x=\"8\" y=\"12\" width=\"4\" height=\"2\" fill=\"#2196f3\"/></g>"
        },
        {
            "id": 722,
            "name": "Police-Car-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#455a64\" rx=\"4\"/><rect x=\"3\" y=\"11\" width=\"14\" height=\"6\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 723,
            "name": "PotInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M17 14h3a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3\"/><path d=\"M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4\"/><path d=\"M12 2v4\"/></g>"
        },
        {
            "id": 724,
            "name": "Pound-SignInverted",
            "category": "finance",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M18 16a6 6 0 0 1-6 6H6\"/><path d=\"M6 16h12\"/><path d=\"M6 10h12\"/><path d=\"M12 2a4 4 0 0 1 4 4v4\"/></g>"
        },
        {
            "id": 725,
            "name": "PowerInverted",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M18.36 6.64a9 9 0 1 1-12.73 0M12 2v10\"/>"
        },
        {
            "id": 726,
            "name": "Present-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"pstGrad2\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#f44336\"/><stop offset=\"100%\" stop-color=\"#b71c1c\"/></linearGradient></defs><g><rect x=\"4\" y=\"8\" width=\"16\" height=\"12\" rx=\"1\" fill=\"url(#pstGrad2)\" stroke=\"#b71c1c\" stroke-width=\"1.5\"/><rect x=\"11\" y=\"8\" width=\"2\" height=\"12\" fill=\"#ffeb3b\"/><rect x=\"4\" y=\"13\" width=\"16\" height=\"2\" fill=\"#ffeb3b\"/><path d=\"M12 8l-2-4h2a2 2 0 0 1 2 2\" fill=\"none\" stroke=\"#ffeb3b\" stroke-width=\"2\"/></g>"
        },
        {
            "id": 727,
            "name": "Present-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#b71c1c\" rx=\"4\"/><rect x=\"5\" y=\"9\" width=\"14\" height=\"10\" rx=\"1\" fill=\"#ffffff\"/><rect x=\"11\" y=\"9\" width=\"2\" height=\"10\" fill=\"#b71c1c\"/><rect x=\"5\" y=\"13\" width=\"14\" height=\"2\" fill=\"#b71c1c\"/>"
        },
        {
            "id": 728,
            "name": "PrimeVideoInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M2 4h20v16H2z\"/><polygon points=\"8 10 8 14 12 12 8 10M14 9h4v6h-4z\"/>"
        },
        {
            "id": 729,
            "name": "ProcessorInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"6\" y=\"4\" width=\"12\" height=\"16\" rx=\"1\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"8\" y=\"6\" width=\"3\" height=\"3\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"13\" y=\"6\" width=\"3\" height=\"3\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"8\" y=\"11\" width=\"3\" height=\"3\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"13\" y=\"11\" width=\"3\" height=\"3\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"8\" y=\"16\" width=\"3\" height=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"13\" y=\"16\" width=\"3\" height=\"2\"/>"
        },
        {
            "id": 730,
            "name": "ProfileInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"10\" r=\"3\" stroke=\"var(--ax-bg-inverse, white)\" /><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M7 20c0-2.76 2.24-5 5-5s5 2.24 5 5\" stroke=\"var(--ax-bg-inverse, white)\" />"
        },
        {
            "id": 731,
            "name": "Puzzle-Color",
            "category": "development",
            "svgContent": "<defs><linearGradient id=\"puzGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#26a69a\"/><stop offset=\"100%\" stop-color=\"#00796b\"/></linearGradient></defs><path d=\"M11.5 5.5a2.5 2.5 0 0 1 5 0V7h2.5A1.5 1.5 0 0 1 20.5 8.5V11h-1.5a2.5 2.5 0 0 0 0 5h1.5v2.5a1.5 1.5 0 0 1-1.5 1.5H16.5v-1.5a2.5 2.5 0 0 0-5 0v1.5H9a1.5 1.5 0 0 1-1.5-1.5V16.5H9a2.5 2.5 0 0 0 0-5H7.5V8.5A1.5 1.5 0 0 1 9 7h2.5V5.5z\" fill=\"url(#puzGrad)\"/>"
        },
        {
            "id": 732,
            "name": "Puzzle-Inverted-Color",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#00796b\" rx=\"4\"/><rect x=\"5\" y=\"5\" width=\"14\" height=\"14\" rx=\"2\" fill=\"#ffffff\"/>"
        },
        {
            "id": 733,
            "name": "Puzzle-Piece-Color",
            "category": "development",
            "svgContent": "<defs><linearGradient id=\"pzlGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#4fc3f7\"/><stop offset=\"100%\" stop-color=\"#0288d1\"/></linearGradient></defs><g><path d=\"M16 11a3 3 0 0 0-3-3H8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h4v-4h-4z\" fill=\"url(#pzlGrad)\" stroke=\"#0288d1\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 734,
            "name": "Puzzle-Piece-Inverted-Color",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#0288d1\" rx=\"4\"/><path d=\"M16 12a2 2 0 0 0-2-2H9a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-1h3v-2h-3z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 735,
            "name": "QuestionMarkInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"10\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 8a2.5 2.5 0 0 0-2.5 2.5c0 1.5 1 2 1.5 3M12 18h.01\" />"
        },
        {
            "id": 736,
            "name": "Radio-Color",
            "category": "media",
            "svgContent": "<defs><linearGradient id=\"radBody\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffb74d\"/><stop offset=\"100%\" stop-color=\"#f57c00\"/></linearGradient></defs><g><rect x=\"2\" y=\"6\" width=\"20\" height=\"15\" rx=\"2\" fill=\"url(#radBody)\"/><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"1\" stroke=\"#78909c\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"7\" cy=\"13.5\" r=\"4.5\" fill=\"#37474f\"/><circle cx=\"7\" cy=\"13.5\" r=\"1.5\" fill=\"#cfd8dc\"/><rect x=\"14\" y=\"9\" width=\"5\" height=\"3\" fill=\"#212121\" rx=\"0.5\"/><circle cx=\"15.5\" cy=\"16\" r=\"1\" fill=\"#212121\"/><circle cx=\"18.5\" cy=\"16\" r=\"1\" fill=\"#212121\"/></g>"
        },
        {
            "id": 737,
            "name": "Radio-Inverted-Color",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#f57c00\" rx=\"4\"/><rect x=\"3\" y=\"7\" width=\"18\" height=\"13\" rx=\"1\" fill=\"#ffffff\"/><circle cx=\"8\" cy=\"13\" r=\"3\" fill=\"#f57c00\"/>"
        },
        {
            "id": 738,
            "name": "RadioInverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><circle cx=\"12\" cy=\"12\" r=\"2\"/><path d=\"M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14\"/></g>"
        },
        {
            "id": 739,
            "name": "RadioOffInverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"var(--ax-bg-inverse, white)\" />"
        },
        {
            "id": 740,
            "name": "RadioOn",
            "category": "media",
            "svgContent": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"5\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 741,
            "name": "RadioOnInverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"10\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 742,
            "name": "Rain-Color",
            "category": "ai",
            "svgContent": "<defs><linearGradient id=\"rnGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#4fc3f7\"/><stop offset=\"100%\" stop-color=\"#0288d1\"/></linearGradient></defs><g><path d=\"M18 10a5 5 0 0 0-9-3 4 4 0 0 0-4 4 4 4 0 0 0 2 8h11a4 4 0 0 0 0-8z\" fill=\"#eceff1\" stroke=\"#455a64\" stroke-width=\"1.5\"/><path d=\"M8 18l1 3M12 18l1 3M16 18l1 3\" stroke=\"url(#rnGrad)\" stroke-width=\"2\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 743,
            "name": "Rain-Drop-Color",
            "category": "ai",
            "svgContent": "<defs><linearGradient id=\"rdrGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#4fc3f7\"/><stop offset=\"100%\" stop-color=\"#0288d1\"/></linearGradient></defs><g><path d=\"M12 2a8 8 0 0 0-8 8c0 4 8 12 8 12s8-8 8-12a8 8 0 0 0-8-8z\" fill=\"url(#rdrGrad)\" stroke=\"#0288d1\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 744,
            "name": "Rain-Drop-Inverted-Color",
            "category": "ai",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#0288d1\" rx=\"4\"/><path d=\"M12 3a7 7 0 0 0-7 7c0 3 7 10 7 10s7-7 7-10a7 7 0 0 0-7-7z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 745,
            "name": "Rain-Inverted-Color",
            "category": "ai",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#455a64\" rx=\"4\"/><path d=\"M17 11a4 4 0 0 0-8-2 3 3 0 0 0-3 3 3 3 0 0 0 2 6h10a3 3 0 0 0 0-6z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 746,
            "name": "RainInverted",
            "category": "weather",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M16 13v8M8 13v8M12 15v8M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\"/></g>"
        },
        {
            "id": 747,
            "name": "Reddit",
            "category": "general",
            "svgContent": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"8\" cy=\"10\" r=\"1.5\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"16\" cy=\"10\" r=\"1.5\" fill=\"currentColor\" opacity=\"0.9\"/><path d=\"M8 14c1 1 3 2 4 2s3-1 4-2\"/>"
        },
        {
            "id": 748,
            "name": "RedditInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"10\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"8\" cy=\"10\" r=\"1.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"16\" cy=\"10\" r=\"1.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M8 14c1 1 3 2 4 2s3-1 4-2\"/>"
        },
        {
            "id": 749,
            "name": "RESTInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"3\" y=\"4\" width=\"18\" height=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"3\" y=\"9\" width=\"18\" height=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"3\" y=\"14\" width=\"18\" height=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"3\" y=\"19\" width=\"18\" height=\"2\"/>"
        },
        {
            "id": 750,
            "name": "RewindInverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polygon points=\"11 19 2 12 11 5 11 19\"/><polygon points=\"22 19 13 12 22 5 22 19\"/></g>"
        },
        {
            "id": 751,
            "name": "Ring",
            "category": "general",
            "svgContent": "<circle cx=\"12\" cy=\"12\" r=\"8\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/><circle cx=\"16\" cy=\"8\" r=\"1.5\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 752,
            "name": "RingInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"8\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"4\" stroke=\"var(--ax-bg-inverse, white)\" /><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"16\" cy=\"8\" r=\"1.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 753,
            "name": "Ripple",
            "category": "brands",
            "svgContent": "<circle cx=\"12\" cy=\"12\" r=\"1\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/><circle cx=\"12\" cy=\"12\" r=\"7\"/>"
        },
        {
            "id": 754,
            "name": "RippleInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"1\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"4\" stroke=\"var(--ax-bg-inverse, white)\" /><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"7\" stroke=\"var(--ax-bg-inverse, white)\" />"
        },
        {
            "id": 755,
            "name": "Robot",
            "category": "ai",
            "svgContent": "<rect x=\"3\" y=\"4\" width=\"18\" height=\"14\" rx=\"2\"/><rect x=\"5\" y=\"2\" width=\"3\" height=\"4\"/><rect x=\"16\" y=\"2\" width=\"3\" height=\"4\"/><circle cx=\"7\" cy=\"10\" r=\"1\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"17\" cy=\"10\" r=\"1\" fill=\"currentColor\" opacity=\"0.9\"/><path d=\"M9 14h6M7 16h10\"/>"
        },
        {
            "id": 756,
            "name": "RobotInverted",
            "category": "ai",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"3\" y=\"4\" width=\"18\" height=\"14\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"5\" y=\"2\" width=\"3\" height=\"4\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"16\" y=\"2\" width=\"3\" height=\"4\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"7\" cy=\"10\" r=\"1\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"17\" cy=\"10\" r=\"1\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M9 14h6M7 16h10\"/>"
        },
        {
            "id": 757,
            "name": "Rocket",
            "category": "general",
            "svgContent": "<path d=\"M4.5 16.5c-1.5-1-2-2.5-2-4s.5-3 2-4l7-12 7 12c1.5 1 2 2.5 2 4s-.5 3-2 4l-7 4-7-4z\"/><circle cx=\"12\" cy=\"9\" r=\"2\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 758,
            "name": "Rocket-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"rockBody\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#eceff1\"/><stop offset=\"100%\" stop-color=\"#b0bec5\"/></linearGradient></defs><g><path d=\"M12 2C9 6 9 13 9 17h6c0-4 0-11-3-15z\" fill=\"url(#rockBody)\"/><path d=\"M9 14c-2 1-4 4-4 6h4v-6zm6 0c2 1 4 4 4 6h-4v-6z\" fill=\"#ef5350\"/><polygon points=\"10 17 12 23 14 17\" fill=\"#ff9800\"/><circle cx=\"12\" cy=\"8\" r=\"2\" fill=\"#29b6f6\"/></g>"
        },
        {
            "id": 759,
            "name": "Rocket-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#b0bec5\" rx=\"4\"/><path d=\"M12 4c-2 3-2 8-2 11h4c0-3 0-8-2-11z\" fill=\"#ffffff\"/><polygon points=\"8 15 5 19 10 19\" fill=\"#ef5350\"/><polygon points=\"16 15 19 19 14 19\" fill=\"#ef5350\"/>"
        },
        {
            "id": 760,
            "name": "Rocket-Launch-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"rlcGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffcc80\"/><stop offset=\"100%\" stop-color=\"#f4511e\"/></linearGradient></defs><g><path d=\"M12 2l3 7v10a2 2 0 0 1-4 0V9z\" fill=\"url(#rlcGrad)\" stroke=\"#bf360c\" stroke-width=\"1.5\"/><path d=\"M9 19l-3 4M15 19l3 4\" stroke=\"#f4511e\" stroke-width=\"3\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 761,
            "name": "Rocket-Launch-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#bf360c\" rx=\"4\"/><path d=\"M12 3l2 6v10a1 1 0 0 1-2 0V9z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 762,
            "name": "Rocket-Mini-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"rkmGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#eceff1\"/><stop offset=\"100%\" stop-color=\"#b0bec5\"/></linearGradient></defs><g><path d=\"M12 2l4 8v10a2 2 0 0 1-4 0 2 2 0 0 1-4 0V10z\" fill=\"url(#rkmGrad)\" stroke=\"#546e7a\" stroke-width=\"1.5\"/><path d=\"M6 18l-2 4h4l-2-4z\" fill=\"#ff5252\"/></g>"
        },
        {
            "id": 763,
            "name": "Rocket-Mini-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#546e7a\" rx=\"4\"/><path d=\"M12 3l3 7v10a1 1 0 0 1-2 0 1 1 0 0 1-2 0V10z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 764,
            "name": "RocketInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M4.5 16.5c-1.5-1-2-2.5-2-4s.5-3 2-4l7-12 7 12c1.5 1 2 2.5 2 4s-.5 3-2 4l-7 4-7-4z\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"9\" r=\"2\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 765,
            "name": "Roller-Skate-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"rlsGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#e91e63\"/><stop offset=\"100%\" stop-color=\"#ad1457\"/></linearGradient></defs><g><path d=\"M4 14h16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\" fill=\"url(#rlsGrad)\" stroke=\"#ad1457\" stroke-width=\"1.5\"/><circle cx=\"8\" cy=\"20\" r=\"2\" fill=\"#ad1457\"/><circle cx=\"16\" cy=\"20\" r=\"2\" fill=\"#ad1457\"/></g>"
        },
        {
            "id": 766,
            "name": "Roller-Skate-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#ad1457\" rx=\"4\"/><rect x=\"5\" y=\"15\" width=\"14\" height=\"4\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 767,
            "name": "Router",
            "category": "general",
            "svgContent": "<rect x=\"2\" y=\"6\" width=\"20\" height=\"12\" rx=\"2\"/><circle cx=\"6\" cy=\"12\" r=\"1\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"12\" cy=\"12\" r=\"1\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"18\" cy=\"12\" r=\"1\" fill=\"currentColor\" opacity=\"0.9\"/><path d=\"M12 18l-2-2m4 0l2-2M8 18l1-1m6 0l1 1\"/>"
        },
        {
            "id": 768,
            "name": "RouterInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"2\" y=\"6\" width=\"20\" height=\"12\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"6\" cy=\"12\" r=\"1\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"1\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"18\" cy=\"12\" r=\"1\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 18l-2-2m4 0l2-2M8 18l1-1m6 0l1 1\"/>"
        },
        {
            "id": 769,
            "name": "Rows-Color",
            "category": "development",
            "svgContent": "<defs><linearGradient id=\"rowsGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#b0bec5\"/><stop offset=\"100%\" stop-color=\"#78909c\"/></linearGradient></defs><g><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" fill=\"none\" stroke=\"url(#rowsGrad)\" stroke-width=\"2\"/><rect x=\"5\" y=\"5\" width=\"14\" height=\"6\" fill=\"#78909c\" opacity=\"0.25\"/><rect x=\"5\" y=\"13\" width=\"14\" height=\"6\" fill=\"#78909c\" opacity=\"0.25\"/></g>"
        },
        {
            "id": 770,
            "name": "Rows-Inverted-Color",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#78909c\" rx=\"4\"/><rect x=\"4\" y=\"4\" width=\"16\" height=\"7\" rx=\"1\" fill=\"#ffffff\"/><rect x=\"4\" y=\"13\" width=\"16\" height=\"7\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 771,
            "name": "Ruler-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"rlrGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#fff176\"/><stop offset=\"100%\" stop-color=\"#fbc02d\"/></linearGradient></defs><g><rect x=\"2\" y=\"8\" width=\"20\" height=\"8\" rx=\"1\" fill=\"url(#rlrGrad)\" stroke=\"#fbc02d\" stroke-width=\"1.5\"/><path d=\"M4 12h1M8 12h1M12 12h1M16 12h1M20 12h1\" stroke=\"#37474f\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 772,
            "name": "Ruler-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#fbc02d\" rx=\"4\"/><rect x=\"3\" y=\"9\" width=\"18\" height=\"6\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 773,
            "name": "SaltInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M10 2l4 4\"/><path d=\"M12 2l4 4\"/><path d=\"M14 2l4 4\"/><path d=\"M20 22V10a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12h16z\"/></g>"
        },
        {
            "id": 774,
            "name": "SandwichInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M21 16H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2z\"/><path d=\"M1 8h22M1 12h22\"/><path d=\"M6 2L3 6M12 2L9 6M18 2L15 6\"/></g>"
        },
        {
            "id": 775,
            "name": "Satelite-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"satGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#cfd8dc\"/><stop offset=\"100%\" stop-color=\"#90a4ae\"/></linearGradient></defs><g><rect x=\"8\" y=\"8\" width=\"8\" height=\"8\" fill=\"url(#satGrad)\" stroke=\"#455a64\" stroke-width=\"1.5\"/><rect x=\"2\" y=\"11\" width=\"6\" height=\"2\" fill=\"#455a64\"/><rect x=\"16\" y=\"11\" width=\"6\" height=\"2\" fill=\"#455a64\"/></g>"
        },
        {
            "id": 776,
            "name": "Satelite-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#455a64\" rx=\"4\"/><rect x=\"9\" y=\"9\" width=\"6\" height=\"6\" fill=\"#ffffff\"/>"
        },
        {
            "id": 777,
            "name": "Saturation",
            "category": "general",
            "svgContent": "<circle cx=\"12\" cy=\"12\" r=\"1\" fill=\"currentColor\" opacity=\"0.9\"/><path d=\"M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0-4a9 9 0 1 1 0 18 9 9 0 0 1 0-18z\"/>"
        },
        {
            "id": 778,
            "name": "Saturation-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"satGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ff4081\"/><stop offset=\"100%\" stop-color=\"#f50057\"/></linearGradient></defs><g><path d=\"M12 22a10 10 0 0 0 10-10C22 6 12 2 12 2S2 6 2 12a10 10 0 0 0 10 10z\" fill=\"none\" stroke=\"url(#satGrad)\" stroke-width=\"2\"/><path d=\"M12 22a10 10 0 0 0 10-10C22 6 12 2V22z\" fill=\"url(#satGrad)\"/></g>"
        },
        {
            "id": 779,
            "name": "Saturation-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#f50057\" rx=\"4\"/><path d=\"M12 21a9 9 0 0 0 9-9C21 7 12 3V21z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 780,
            "name": "SaturationInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"1\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0-4a9 9 0 1 1 0 18 9 9 0 0 1 0-18z\"/>"
        },
        {
            "id": 781,
            "name": "SaveInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z\"/><polyline points=\"17 21 17 13 7 13 7 21\"/><polyline points=\"7 3 7 8 15 8\"/></g>"
        },
        {
            "id": 782,
            "name": "Saxophone-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"saxGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#fff9c4\"/><stop offset=\"100%\" stop-color=\"#ffd600\"/></linearGradient></defs><g><path d=\"M20 16c0 3-3 5-6 5s-6-2-6-5V8c0-3 2-6 5-6h2\" fill=\"none\" stroke=\"url(#saxGrad)\" stroke-width=\"4\" stroke-linecap=\"round\"/><circle cx=\"18\" cy=\"16\" r=\"3\" fill=\"none\" stroke=\"#ffd600\" stroke-width=\"3\"/></g>"
        },
        {
            "id": 783,
            "name": "Saxophone-Inverted-Color",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#ffd600\" rx=\"4\"/><path d=\"M19 16c0 2-2 4-5 4s-5-2-5-4V9c0-2 1-5 4-5h2\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\"/>"
        },
        {
            "id": 784,
            "name": "Scissors-Color",
            "category": "objects",
            "svgContent": "<defs><linearGradient id=\"scisGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#ff5252\"/><stop offset=\"100%\" stop-color=\"#ff1744\"/></linearGradient></defs><g fill=\"none\" stroke=\"#78909c\" stroke-width=\"2\"><circle cx=\"6\" cy=\"6\" r=\"3\" fill=\"url(#scisGrad)\" stroke=\"none\"/><circle cx=\"6\" cy=\"18\" r=\"3\" fill=\"url(#scisGrad)\" stroke=\"none\"/><line x1=\"9.8\" y1=\"8.2\" x2=\"22\" y2=\"14.3\" stroke-linecap=\"round\"/><line x1=\"9.8\" y1=\"15.8\" x2=\"22\" y2=\"9.7\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 785,
            "name": "Scissors-Inverted-Color",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#ff1744\" rx=\"4\"/><g stroke=\"#ffffff\" stroke-width=\"2\" fill=\"none\"><circle cx=\"7\" cy=\"7\" r=\"2\"/><circle cx=\"7\" cy=\"17\" r=\"2\"/><line x1=\"10\" y1=\"9\" x2=\"20\" y2=\"15\"/></g>"
        },
        {
            "id": 786,
            "name": "Scissors-OffInverted",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><circle cx=\"6\" cy=\"6\" r=\"3\"/><path d=\"M8.12 8.12L12 12\"/><path d=\"M20 4L8.12 15.88M14.47 14.48L20 20\"/><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"/></g>"
        },
        {
            "id": 787,
            "name": "ScissorsInverted",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><circle cx=\"6\" cy=\"6\" r=\"3\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><line x1=\"20\" y1=\"4\" x2=\"8.12\" y2=\"15.88\"/><line x1=\"14.47\" y1=\"14.48\" x2=\"20\" y2=\"20\"/><line x1=\"8.12\" y1=\"8.12\" x2=\"12\" y2=\"12\"/></g>"
        },
        {
            "id": 788,
            "name": "Scooter-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"sctGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#b71c1c\"/><stop offset=\"100%\" stop-color=\"#8e0000\"/></linearGradient></defs><g stroke=\"#8e0000\" stroke-width=\"2\"><circle cx=\"6\" cy=\"20\" r=\"3\" fill=\"none\"/><circle cx=\"18\" cy=\"20\" r=\"3\" fill=\"none\"/><path d=\"M9 20h6M12 20V10h4l2-4\" fill=\"none\"/></g>"
        },
        {
            "id": 789,
            "name": "Scooter-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#8e0000\" rx=\"4\"/><circle cx=\"6\" cy=\"20\" r=\"2\" fill=\"#ffffff\"/><circle cx=\"18\" cy=\"20\" r=\"2\" fill=\"#ffffff\"/>"
        },
        {
            "id": 790,
            "name": "Sculpture-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"sclGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffcc80\"/><stop offset=\"100%\" stop-color=\"#795548\"/></linearGradient></defs><g><rect x=\"8\" y=\"18\" width=\"8\" height=\"4\" fill=\"#5d4037\"/><path d=\"M12 4c-3 0-5 2-5 5v5h10V9c0-3-2-5-5-5z\" fill=\"url(#sclGrad)\" stroke=\"#795548\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 791,
            "name": "Sculpture-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#795548\" rx=\"4\"/><path d=\"M13 5c-2 0-4 1-4 4v4h8V9c0-3-2-4-4-4z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 792,
            "name": "Search-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"glassRim\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#90caf9\"/><stop offset=\"100%\" stop-color=\"#1e88e5\"/></linearGradient><linearGradient id=\"handleGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#8d6e63\"/><stop offset=\"100%\" stop-color=\"#4e342e\"/></linearGradient></defs><g><circle cx=\"11\" cy=\"11\" r=\"7\" fill=\"#e3f2fd\" stroke=\"url(#glassRim)\" stroke-width=\"3\"/><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\" stroke=\"url(#handleGrad)\" stroke-width=\"4\" stroke-linecap=\"round\"/><circle cx=\"9\" cy=\"9\" r=\"4\" fill=\"#ffffff\" opacity=\"0.4\"/></g>"
        },
        {
            "id": 793,
            "name": "SearchInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><circle cx=\"11\" cy=\"11\" r=\"8\"/><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"/></g>"
        },
        {
            "id": 794,
            "name": "SearchMinusInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"10\" cy=\"10\" r=\"6\" stroke=\"var(--ax-bg-inverse, white)\" /><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M14 14l4 4\" /><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"6\" y1=\"10\" x2=\"14\" y2=\"10\" />"
        },
        {
            "id": 795,
            "name": "SearchPlusInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"10\" cy=\"10\" r=\"6\" stroke=\"var(--ax-bg-inverse, white)\" /><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M14 14l4 4\" /><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"10\" y1=\"7\" x2=\"10\" y2=\"13\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"7\" y1=\"10\" x2=\"13\" y2=\"10\"/>"
        },
        {
            "id": 796,
            "name": "SendInverted",
            "category": "communication",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><line x1=\"22\" y1=\"2\" x2=\"11\" y2=\"13\"/><polygon points=\"22 2 15 22 11 13 2 9 22 2\"/></g>"
        },
        {
            "id": 797,
            "name": "SendSolid",
            "category": "communication",
            "svgContent": "<path d=\"M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.9429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.01449263 C3.34915502,0.9 2.40734225,0.9 1.77946707,1.4429026 C0.994623095,2.10604706 0.837654326,3.0486314 1.15159189,3.98722009 L3.03521743,10.4282132 C3.03521743,10.5853106 3.19218622,10.7424081 3.50612381,10.7424081 L16.6915026,11.5278949 C16.6915026,11.5278949 17.1624089,11.5278949 17.1624089,12.0011027 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 798,
            "name": "SendSolidInverted",
            "category": "communication",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.9429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.01449263 C3.34915502,0.9 2.40734225,0.9 1.77946707,1.4429026 C0.994623095,2.10604706 0.837654326,3.0486314 1.15159189,3.98722009 L3.03521743,10.4282132 C3.03521743,10.5853106 3.19218622,10.7424081 3.50612381,10.7424081 L16.6915026,11.5278949 C16.6915026,11.5278949 17.1624089,11.5278949 17.1624089,12.0011027 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 799,
            "name": "SensorInverted",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"3\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 1v2m0 16v2M23 12h-2M3 12H1M6.22 6.22l1.41 1.41M16.37 16.37l1.41 1.41M6.22 17.78l1.41-1.41M16.37 7.63l1.41-1.41\"/>"
        },
        {
            "id": 800,
            "name": "Sepia",
            "category": "general",
            "svgContent": "<rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"2\"/><circle cx=\"8\" cy=\"8\" r=\"1.5\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"16\" cy=\"8\" r=\"1.5\" fill=\"currentColor\" opacity=\"0.9\"/><path d=\"M8 14c2 2 4 2 8 0\" opacity=\"0.7\"/>"
        },
        {
            "id": 801,
            "name": "SepiaInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"8\" cy=\"8\" r=\"1.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"16\" cy=\"8\" r=\"1.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M8 14c2 2 4 2 8 0\" opacity=\"0.7\"/>"
        },
        {
            "id": 802,
            "name": "ServerInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"2\" y=\"2\" width=\"20\" height=\"8\" rx=\"1\" ry=\"1\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"2\" y=\"14\" width=\"20\" height=\"8\" rx=\"1\" ry=\"1\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"6\" y1=\"6\" x2=\"6.01\" y2=\"6\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"6\" y1=\"18\" x2=\"6.01\" y2=\"18\"/>"
        },
        {
            "id": 803,
            "name": "Settings-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"gearGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#b0bec5\"/><stop offset=\"50%\" stop-color=\"#78909c\"/><stop offset=\"100%\" stop-color=\"#455a64\"/></linearGradient></defs><g fill=\"url(#gearGrad)\"><path d=\"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.48.48 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84a.48.48 0 0 0-.48.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.48.48 0 0 0-.59.22L1.99 8.87a.48.48 0 0 0 .12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.48-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.48.48 0 0 0-.12-.61l-2.03-1.58zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z\"/></g>"
        },
        {
            "id": 804,
            "name": "Settings2Inverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"3\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 1v2m0 16v2M4.22 4.22l1.41 1.41m9.74 9.74l1.41 1.41M1 12h2m16 0h2M4.22 19.78l1.41-1.41m9.74-9.74l1.41-1.41\"/>"
        },
        {
            "id": 805,
            "name": "SettingsAdvanced",
            "category": "ui",
            "svgContent": "<circle cx=\"12\" cy=\"12\" r=\"2.5\" fill=\"currentColor\" opacity=\"0.9\"/><path d=\"M12 1v2m0 16v2M23 12h-2M3 12H1M20.49 3.51l-1.41 1.41M4.93 19.07l-1.41 1.41M20.49 20.49l-1.41-1.41M4.93 4.93l-1.41-1.41\"/><circle cx=\"12\" cy=\"12\" r=\"5\" opacity=\"0.5\"/>"
        },
        {
            "id": 806,
            "name": "SettingsAdvancedInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"2.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 1v2m0 16v2M23 12h-2M3 12H1M20.49 3.51l-1.41 1.41M4.93 19.07l-1.41 1.41M20.49 20.49l-1.41-1.41M4.93 4.93l-1.41-1.41\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"5\" stroke=\"var(--ax-bg-inverse, white)\" opacity=\"0.5\"/>"
        },
        {
            "id": 807,
            "name": "SettingsInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z\"/></g>"
        },
        {
            "id": 808,
            "name": "SettingsOffInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"3\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 1v2m0 16v2M23 12h-2M3 12H1M20.49 3.51l-1.41 1.41M4.93 19.07l-1.41 1.41M20.49 20.49l-1.41-1.41M4.93 4.93l-1.41-1.41\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"/>"
        },
        {
            "id": 809,
            "name": "Share-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"nodeGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#4fc3f7\"/><stop offset=\"100%\" stop-color=\"#0288d1\"/></linearGradient></defs><g><line x1=\"8.59\" y1=\"13.51\" x2=\"15.42\" y2=\"17.49\" stroke=\"#b0bec5\" stroke-width=\"2\"/><line x1=\"15.41\" y1=\"6.51\" x2=\"8.59\" y2=\"10.49\" stroke=\"#b0bec5\" stroke-width=\"2\"/><circle cx=\"18\" cy=\"5\" r=\"3\" fill=\"url(#nodeGrad)\"/><circle cx=\"6\" cy=\"12\" r=\"3\" fill=\"url(#nodeGrad)\"/><circle cx=\"18\" cy=\"19\" r=\"3\" fill=\"url(#nodeGrad)\"/></g>"
        },
        {
            "id": 810,
            "name": "ShareCircleInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"10\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"16\" cy=\"8\" r=\"2\" stroke=\"var(--ax-bg-inverse, white)\" /><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"16\" cy=\"16\" r=\"2\" stroke=\"var(--ax-bg-inverse, white)\" /><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"14.5\" y1=\"9.5\" x2=\"13.5\" y2=\"14.5\" />"
        },
        {
            "id": 811,
            "name": "ShareInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><circle cx=\"18\" cy=\"5\" r=\"3\"/><circle cx=\"6\" cy=\"12\" r=\"3\"/><circle cx=\"18\" cy=\"19\" r=\"3\"/><line x1=\"8.59\" y1=\"13.51\" x2=\"15.42\" y2=\"17.49\"/><line x1=\"15.41\" y1=\"6.51\" x2=\"8.59\" y2=\"10.49\"/></g>"
        },
        {
            "id": 812,
            "name": "SharpenInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M10 8h4M8 10h8M9 14h6\"/>"
        },
        {
            "id": 813,
            "name": "Shield-Alert-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"shdAlert\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ef5350\"/><stop offset=\"100%\" stop-color=\"#b71c1c\"/></linearGradient></defs><g><path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\" fill=\"url(#shdAlert)\"/><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"13\" stroke=\"#ffffff\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"12\" cy=\"16.5\" r=\"1.25\" fill=\"#ffffff\"/></g>"
        },
        {
            "id": 814,
            "name": "Shield-Alert-Inverted-Color",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#b71c1c\" rx=\"4\"/><path d=\"M12 20s6.5-3.2 6.5-8.2V6.2L12 3.8 5.5 6.2V11.8c0 5 6.5 8.2 6.5 8.2z\" fill=\"#ffffff\"/><circle cx=\"12\" cy=\"15\" r=\"1.5\" fill=\"#b71c1c\"/>"
        },
        {
            "id": 815,
            "name": "Shield-AlertInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"/><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"/><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"/></g>"
        },
        {
            "id": 816,
            "name": "Shield-Check-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"shdCheck\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#66bb6a\"/><stop offset=\"100%\" stop-color=\"#1b5e20\"/></linearGradient></defs><g><path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\" fill=\"url(#shdCheck)\"/><polyline points=\"9 11 11 13 15 9\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></g>"
        },
        {
            "id": 817,
            "name": "Shield-Check-Inverted-Color",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#1b5e20\" rx=\"4\"/><path d=\"M12 20s6.5-3.2 6.5-8.2V6.2L12 3.8 5.5 6.2V11.8c0 5 6.5 8.2 6.5 8.2z\" fill=\"#ffffff\"/><polyline points=\"9 11 11 13 15 9\" fill=\"none\" stroke=\"#1b5e20\" stroke-width=\"2\"/>"
        },
        {
            "id": 818,
            "name": "Shield-CheckInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"/><path d=\"M9 12l2 2 4-4\"/></g>"
        },
        {
            "id": 819,
            "name": "Shield-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"shieldLeft\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#4fc3f7\"/><stop offset=\"100%\" stop-color=\"#0288d1\"/></linearGradient><linearGradient id=\"shieldRight\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#0288d1\"/><stop offset=\"100%\" stop-color=\"#01579b\"/></linearGradient></defs><g><path d=\"M12 22s8-4 8-10V5l-8-3v20z\" fill=\"url(#shieldRight)\"/><path d=\"M12 22V2L4 5v7c0 6 8 10 8 10z\" fill=\"url(#shieldLeft)\"/><path d=\"M12 5l2.5 5h5.5l-4 4 1.5 5.5-5.5-3.5-5.5 3.5 1.5-5.5-4-4h5.5z\" fill=\"#ffffff\" opacity=\"0.25\"/></g>"
        },
        {
            "id": 820,
            "name": "Shield-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#002171\" rx=\"4\"/><path d=\"M12 20s6.5-3.2 6.5-8.2V6.2L12 3.8 5.5 6.2V11.8c0 5 6.5 8.2 6.5 8.2z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 821,
            "name": "Shield-Off-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"shdOff\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#b0bec5\"/><stop offset=\"100%\" stop-color=\"#78909c\"/></linearGradient></defs><g><path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\" fill=\"url(#shdOff)\" opacity=\"0.4\"/><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\" stroke=\"#ef5350\" stroke-width=\"2.5\"/></g>"
        },
        {
            "id": 822,
            "name": "Shield-Off-DuplicateInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18\"/><path d=\"M4.73 4.73L4 5v7c0 6 8 10 8 10a15.29 15.29 0 0 0 3.72-1.5\"/><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"/></g>"
        },
        {
            "id": 823,
            "name": "Shield-Off-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#37474f\" rx=\"4\"/><line x1=\"2\" y1=\"2\" x2=\"22\" y2=\"22\" stroke=\"#ffffff\" stroke-width=\"2\"/>"
        },
        {
            "id": 824,
            "name": "Shield-OffInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18\"/><path d=\"M4.73 4.73L4 5v7c0 6 8 10 8 10a15.29 15.29 0 0 0 3.72-1.5\"/><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"/></g>"
        },
        {
            "id": 825,
            "name": "ShieldCheckInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"/><polyline points=\"16 12 12 16 8 12\"/>"
        },
        {
            "id": 826,
            "name": "ShieldInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"/></g>"
        },
        {
            "id": 827,
            "name": "ShieldQuestion",
            "category": "ui",
            "svgContent": "<path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"/><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"/><circle cx=\"12\" cy=\"17\" r=\"0.5\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 828,
            "name": "ShieldQuestionInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"17\" r=\"0.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 829,
            "name": "ShieldXInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"9.5\" y1=\"9.5\" x2=\"14.5\" y2=\"14.5\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"14.5\" y1=\"9.5\" x2=\"9.5\" y2=\"14.5\"/>"
        },
        {
            "id": 830,
            "name": "Ship-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"shpGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#eceff1\"/><stop offset=\"100%\" stop-color=\"#cfd8dc\"/></linearGradient></defs><g><path d=\"M2 16l20 2-2 6H4z\" fill=\"url(#shpGrad)\" stroke=\"#455a64\" stroke-width=\"1.5\"/><rect x=\"8\" y=\"10\" width=\"8\" height=\"6\" fill=\"#455a64\"/><rect x=\"10\" y=\"6\" width=\"4\" height=\"4\" fill=\"#455a64\"/></g>"
        },
        {
            "id": 831,
            "name": "Ship-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#455a64\" rx=\"4\"/><path d=\"M3 17l18 2-1 4H5z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 832,
            "name": "ShopifyInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 2c1 0 2 .5 2 1.5V8h-4V3.5C10 2.5 11 2 12 2zm-2 6h4v12c0 1-1 2-2 2s-2-1-2-2v-12z\"/>"
        },
        {
            "id": 833,
            "name": "Shopping-BagInverted",
            "category": "finance",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\"/><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"/><path d=\"M16 10a4 4 0 0 1-8 0\"/></g>"
        },
        {
            "id": 834,
            "name": "Shopping-Cart-Color",
            "category": "finance",
            "svgContent": "<defs><linearGradient id=\"cartMet\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#0288d1\"/><stop offset=\"100%\" stop-color=\"#01579b\"/></linearGradient></defs><g><path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\" fill=\"none\" stroke=\"url(#cartMet)\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"9.5\" cy=\"20.5\" r=\"1.5\" fill=\"#37474f\"/><circle cx=\"19.5\" cy=\"20.5\" r=\"1.5\" fill=\"#37474f\"/></g>"
        },
        {
            "id": 835,
            "name": "Shopping-Cart-Inverted-Color",
            "category": "finance",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#0288d1\" rx=\"4\"/><path d=\"M7 15h11.2c.6 0 1-.4 1.1-.9l1.6-7.2c.1-.6-.3-1.1-.9-1.1H5.2L4.3 2.6C4.1 2.2 3.7 2 3.3 2H1v2h1.5l3.4 13.7c-.5.4-.9 1-.9 1.8 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-.4-.1-.7-.3-1h4.6c-.2.3-.3.6-.3 1 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-1.1-.7-2-1.7-2.3l-.3-1.2z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 836,
            "name": "Shopping-CartInverted",
            "category": "finance",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><circle cx=\"9\" cy=\"21\" r=\"1\"/><circle cx=\"20\" cy=\"21\" r=\"1\"/><path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"/></g>"
        },
        {
            "id": 837,
            "name": "ShoppingBagInverted",
            "category": "finance",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\"/><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"/><path d=\"M16 10a4 4 0 0 1-8 0\"/></g>"
        },
        {
            "id": 838,
            "name": "ShoppingCartInverted",
            "category": "finance",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><circle cx=\"9\" cy=\"21\" r=\"1\"/><circle cx=\"20\" cy=\"21\" r=\"1\"/><path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"/></g>"
        },
        {
            "id": 839,
            "name": "Sidebar-Color",
            "category": "development",
            "svgContent": "<defs><linearGradient id=\"sideGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#cfd8dc\"/><stop offset=\"100%\" stop-color=\"#78909c\"/></linearGradient></defs><g><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" fill=\"none\" stroke=\"url(#sideGrad)\" stroke-width=\"2\"/><rect x=\"5\" y=\"5\" width=\"5\" height=\"14\" fill=\"#78909c\" opacity=\"0.3\"/></g>"
        },
        {
            "id": 840,
            "name": "Sidebar-Inverted-Color",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#78909c\" rx=\"4\"/><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"1\" fill=\"#ffffff\"/><rect x=\"5\" y=\"5\" width=\"4\" height=\"14\" fill=\"#78909c\"/>"
        },
        {
            "id": 841,
            "name": "SidebarInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"9\" y1=\"3\" x2=\"9\" y2=\"21\"/>"
        },
        {
            "id": 842,
            "name": "SignalInverted",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 4c-1.88 0-3.5-1.12-3.5-2.5h7c0 1.38-1.62 2.5-3.5 2.5z\"/>"
        },
        {
            "id": 843,
            "name": "SignInInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><polyline points=\"15 3 21 3 21 9\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M3 21c1.66-2.5 2.66-4 2.66-4v-4c0-1 1-2 2-2h13V3M21 3v18M3 6h8\"/>"
        },
        {
            "id": 844,
            "name": "Skateboard-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"skbGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#8bc34a\"/><stop offset=\"100%\" stop-color=\"#558b2f\"/></linearGradient></defs><g><rect x=\"3\" y=\"12\" width=\"18\" height=\"4\" rx=\"2\" fill=\"url(#skbGrad)\" stroke=\"#558b2f\" stroke-width=\"1.5\"/><circle cx=\"6\" cy=\"18\" r=\"2\" fill=\"#558b2f\"/><circle cx=\"18\" cy=\"18\" r=\"2\" fill=\"#558b2f\"/></g>"
        },
        {
            "id": 845,
            "name": "Skateboard-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#558b2f\" rx=\"4\"/><rect x=\"4\" y=\"13\" width=\"16\" height=\"2\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 846,
            "name": "Skip-BackInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polygon points=\"19 20 9 12 19 4 19 20\"/><line x1=\"5\" y1=\"5\" x2=\"5\" y2=\"19\"/></g>"
        },
        {
            "id": 847,
            "name": "Skip-ForwardInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polygon points=\"5 4 15 12 5 20 5 4\"/><line x1=\"19\" y1=\"5\" x2=\"19\" y2=\"19\"/></g>"
        },
        {
            "id": 848,
            "name": "Slack",
            "category": "brands",
            "svgContent": "<circle cx=\"5\" cy=\"5\" r=\"1.5\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"19\" cy=\"5\" r=\"1.5\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"5\" cy=\"19\" r=\"1.5\" fill=\"currentColor\" opacity=\"0.9\"/><circle cx=\"19\" cy=\"19\" r=\"1.5\" fill=\"currentColor\" opacity=\"0.9\"/><line x1=\"5\" y1=\"6.5\" x2=\"5\" y2=\"17.5\"/><line x1=\"19\" y1=\"6.5\" x2=\"19\" y2=\"17.5\"/><line x1=\"6.5\" y1=\"5\" x2=\"17.5\" y2=\"5\"/><line x1=\"6.5\" y1=\"19\" x2=\"17.5\" y2=\"19\"/>"
        },
        {
            "id": 849,
            "name": "Slack2Inverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M6 2a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zm12 0a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h2z\"/>"
        },
        {
            "id": 850,
            "name": "SlackInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"5\" cy=\"5\" r=\"1.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"19\" cy=\"5\" r=\"1.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"5\" cy=\"19\" r=\"1.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"19\" cy=\"19\" r=\"1.5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"5\" y1=\"6.5\" x2=\"5\" y2=\"17.5\" /><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"19\" y1=\"6.5\" x2=\"19\" y2=\"17.5\" /><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"6.5\" y1=\"5\" x2=\"17.5\" y2=\"5\" /><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"6.5\" y1=\"19\" x2=\"17.5\" y2=\"19\" />"
        },
        {
            "id": 851,
            "name": "SlashInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"19\" y1=\"4\" x2=\"5\" y2=\"20\"/>"
        },
        {
            "id": 852,
            "name": "Sliders-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"sldGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#78909c\"/><stop offset=\"100%\" stop-color=\"#37474f\"/></linearGradient></defs><g fill=\"none\" stroke=\"url(#sldGrad)\" stroke-width=\"2.5\" stroke-linecap=\"round\"><line x1=\"4\" y1=\"21\" x2=\"4\" y2=\"14\"/><line x1=\"4\" y1=\"10\" x2=\"4\" y2=\"3\"/><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"12\"/><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"3\"/><line x1=\"20\" y1=\"21\" x2=\"20\" y2=\"16\"/><line x1=\"20\" y1=\"12\" x2=\"20\" y2=\"3\"/><circle cx=\"4\" cy=\"12\" r=\"2\" fill=\"#00e676\" stroke=\"none\"/><circle cx=\"12\" cy=\"10\" r=\"2\" fill=\"#00e676\" stroke=\"none\"/><circle cx=\"20\" cy=\"14\" r=\"2\" fill=\"#00e676\" stroke=\"none\"/></g>"
        },
        {
            "id": 853,
            "name": "Sliders-Inverted-Color",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#37474f\" rx=\"4\"/><circle cx=\"6\" cy=\"12\" r=\"2\" fill=\"#ffffff\"/><circle cx=\"12\" cy=\"8\" r=\"2\" fill=\"#ffffff\"/><circle cx=\"18\" cy=\"16\" r=\"2\" fill=\"#ffffff\"/>"
        },
        {
            "id": 854,
            "name": "SlidersInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><line x1=\"4\" y1=\"21\" x2=\"4\" y2=\"14\"/><line x1=\"4\" y1=\"10\" x2=\"4\" y2=\"3\"/><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"12\"/><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"3\"/><line x1=\"20\" y1=\"21\" x2=\"20\" y2=\"16\"/><line x1=\"20\" y1=\"12\" x2=\"20\" y2=\"3\"/><line x1=\"1\" y1=\"14\" x2=\"7\" y2=\"14\"/><line x1=\"9\" y1=\"8\" x2=\"15\" y2=\"8\"/><line x1=\"17\" y1=\"16\" x2=\"23\" y2=\"16\"/></g>"
        },
        {
            "id": 855,
            "name": "SmartHome",
            "category": "general",
            "svgContent": "<path d=\"M2 12l10-10 10 10v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8z\"/><path d=\"M9 21v-10h6v10M12 3v4\"/><circle cx=\"15\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 856,
            "name": "SmartHomeInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M2 12l10-10 10 10v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8z\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M9 21v-10h6v10M12 3v4\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"15\" cy=\"15\" r=\"1\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 857,
            "name": "Smartphone-Color",
            "category": "communication",
            "svgContent": "<defs><linearGradient id=\"phoneGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#212121\"/><stop offset=\"100%\" stop-color=\"#000000\"/></linearGradient></defs><g><rect x=\"5\" y=\"2\" width=\"14\" height=\"20\" rx=\"3\" fill=\"url(#phoneGrad)\"/><circle cx=\"12\" cy=\"19\" r=\"1\" fill=\"#ffffff\" opacity=\"0.8\"/><rect x=\"7\" y=\"4\" width=\"10\" height=\"13\" fill=\"#64b5f6\" opacity=\"0.15\"/></g>"
        },
        {
            "id": 858,
            "name": "Smartphone-Inverted-Color",
            "category": "communication",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#212121\" rx=\"4\"/><rect x=\"6\" y=\"3\" width=\"12\" height=\"18\" rx=\"2\" fill=\"#ffffff\"/><circle cx=\"12\" cy=\"18\" r=\"1\" fill=\"#212121\"/>"
        },
        {
            "id": 859,
            "name": "Smartphone2Inverted",
            "category": "communication",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"5\" y=\"2\" width=\"14\" height=\"20\" rx=\"2\" ry=\"2\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"8\" y1=\"5\" x2=\"16\" y2=\"5\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"8\" y1=\"22\" x2=\"16\" y2=\"22\"/>"
        },
        {
            "id": 860,
            "name": "SmartphoneInverted",
            "category": "communication",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><rect x=\"5\" y=\"2\" width=\"14\" height=\"20\" rx=\"2\" ry=\"2\"/><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"18\"/></g>"
        },
        {
            "id": 861,
            "name": "SmartwatchInverted",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"3\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"6\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"12\" y1=\"12\" x2=\"14\" y2=\"12\"/>"
        },
        {
            "id": 862,
            "name": "Smile-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"faceHappy\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#fff176\"/><stop offset=\"100%\" stop-color=\"#fbc02d\"/></linearGradient></defs><g><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"url(#faceHappy)\"/><path d=\"M8 14s1.5 2 4 2 4-2 4-2\" fill=\"none\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"9\" cy=\"9\" r=\"1.5\" fill=\"#5d4037\"/><circle cx=\"15\" cy=\"9\" r=\"1.5\" fill=\"#5d4037\"/></g>"
        },
        {
            "id": 863,
            "name": "SmileInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M8 14s1.5 2 4 2 4-2 4-2\"/><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"/><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"/></g>"
        },
        {
            "id": 864,
            "name": "Snow-Color",
            "category": "iot",
            "svgContent": "<defs><linearGradient id=\"snwGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#e1f5fe\"/><stop offset=\"100%\" stop-color=\"#81d4fa\"/></linearGradient></defs><g stroke=\"#0288d1\" stroke-width=\"2\"><path d=\"M12 2v20M2 12h20M5 5l14 14M5 19l14-14\"/></g>"
        },
        {
            "id": 865,
            "name": "Snow-Inverted-Color",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#0288d1\" rx=\"4\"/><path d=\"M12 3v18M3 12h18\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>"
        },
        {
            "id": 866,
            "name": "Snowboard-Color",
            "category": "iot",
            "svgContent": "<defs><linearGradient id=\"snbGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#03a9f4\"/><stop offset=\"100%\" stop-color=\"#0277bd\"/></linearGradient></defs><g><path d=\"M4 4l16 16\" stroke=\"#0277bd\" stroke-width=\"6\" stroke-linecap=\"round\"/><rect x=\"8\" y=\"8\" width=\"4\" height=\"2\" fill=\"#ffffff\"/><rect x=\"12\" y=\"14\" width=\"4\" height=\"2\" fill=\"#ffffff\"/></g>"
        },
        {
            "id": 867,
            "name": "Snowboard-Inverted-Color",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#0277bd\" rx=\"4\"/><path d=\"M5 5l14 14\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>"
        },
        {
            "id": 868,
            "name": "Snowflake-Color",
            "category": "iot",
            "svgContent": "<defs><linearGradient id=\"snwGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#e0f7fa\"/><stop offset=\"100%\" stop-color=\"#4dd0e1\"/></linearGradient></defs><g stroke=\"url(#snwGrad)\" stroke-width=\"2\" stroke-linecap=\"round\"><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"22\"/><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"/><line x1=\"4.93\" y1=\"4.93\" x2=\"19.07\" y2=\"19.07\"/><line x1=\"4.93\" y1=\"19.07\" x2=\"19.07\" y2=\"4.93\"/><polyline points=\"10 5 12 3 14 5\"/><polyline points=\"19 10 21 12 19 14\"/></g>"
        },
        {
            "id": 869,
            "name": "Snowflake-Inverted-Color",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#4dd0e1\" rx=\"4\"/><line x1=\"12\" y1=\"4\" x2=\"12\" y2=\"20\" stroke=\"#ffffff\" stroke-width=\"2\"/><line x1=\"4\" y1=\"12\" x2=\"20\" y2=\"12\" stroke=\"#ffffff\" stroke-width=\"2\"/>"
        },
        {
            "id": 870,
            "name": "SnowflakeInverted",
            "category": "weather",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"22\"/><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"/><line x1=\"5.64\" y1=\"5.64\" x2=\"18.36\" y2=\"18.36\"/><line x1=\"5.64\" y1=\"18.36\" x2=\"18.36\" y2=\"5.64\"/><line x1=\"12\" y1=\"2\" x2=\"15\" y2=\"6\"/><line x1=\"12\" y1=\"2\" x2=\"9\" y2=\"6\"/><line x1=\"22\" y1=\"12\" x2=\"18\" y2=\"15\"/><line x1=\"22\" y1=\"12\" x2=\"18\" y2=\"9\"/><line x1=\"12\" y1=\"22\" x2=\"9\" y2=\"18\"/><line x1=\"12\" y1=\"22\" x2=\"15\" y2=\"18\"/><line x1=\"2\" y1=\"12\" x2=\"6\" y2=\"9\"/><line x1=\"2\" y1=\"12\" x2=\"6\" y2=\"15\"/></g>"
        },
        {
            "id": 871,
            "name": "SnowInverted",
            "category": "weather",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25\"/><line x1=\"8\" y1=\"16\" x2=\"8\" y2=\"16\"/><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"18\"/><line x1=\"16\" y1=\"16\" x2=\"16\" y2=\"16\"/><line x1=\"10\" y1=\"20\" x2=\"10\" y2=\"20\"/><line x1=\"14\" y1=\"20\" x2=\"14\" y2=\"20\"/></g>"
        },
        {
            "id": 872,
            "name": "SodaInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M17 2v20H7V2z\"/><path d=\"M17 2h-5h-5\"/><path d=\"M17 22h-5h-5\"/></g>"
        },
        {
            "id": 873,
            "name": "Spaceship-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"spcGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffffff\"/><stop offset=\"100%\" stop-color=\"#cfd8dc\"/></linearGradient></defs><g><path d=\"M12 2l8 16-8-4-8 4z\" fill=\"url(#spcGrad)\" stroke=\"#455a64\" stroke-width=\"1.5\"/><circle cx=\"12\" cy=\"10\" r=\"2\" fill=\"#455a64\"/></g>"
        },
        {
            "id": 874,
            "name": "Spaceship-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#455a64\" rx=\"4\"/><path d=\"M12 3l7 14-7-3-7 3z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 875,
            "name": "Spade-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"spdGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#cfd8dc\"/><stop offset=\"100%\" stop-color=\"#90a4ae\"/></linearGradient></defs><g><path d=\"M12 2l-6 10 2 2h8l2-2-6-10z\" fill=\"url(#spdGrad)\" stroke=\"#546e7a\" stroke-width=\"1.5\"/><line x1=\"12\" y1=\"14\" x2=\"12\" y2=\"22\" stroke=\"#5d4037\" stroke-width=\"3\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 876,
            "name": "Spade-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#546e7a\" rx=\"4\"/><path d=\"M12 3l-5 8 1 2h8l1-2-5-8z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 877,
            "name": "SparkleInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 3v2m0 14v2M3 12h2m14 0h2M5.64 5.64l1.41 1.41M16.95 16.95l1.41 1.41M16.95 7.05l-1.41 1.41M7.05 16.95L5.64 15.54\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"2\"/>"
        },
        {
            "id": 878,
            "name": "Sparkles-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"spGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#fff59d\"/><stop offset=\"100%\" stop-color=\"#fbc02d\"/></linearGradient></defs><g fill=\"url(#spGrad)\"><path d=\"M10 2l2 4 4 2-4 2-2 4-2-4-4-2 4-2z\"/><path d=\"M19 13l1 2 2 1-2 1-1 2-1-2-2-1 2-1z\" opacity=\"0.75\"/><path d=\"M4 14l1 2 2 1-2 1-1 2-1-2-2-1 2-1z\" opacity=\"0.6\"/></g>"
        },
        {
            "id": 879,
            "name": "Sparkles-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#fbc02d\" rx=\"4\"/><path d=\"M12 4l2 5 5 2-5 2-2 5-2-5-5-2 5-2z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 880,
            "name": "SparklesInverted",
            "category": "ai",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z\" opacity=\"0.5\"/>"
        },
        {
            "id": 881,
            "name": "Speaker-Color",
            "category": "media",
            "svgContent": "<defs><linearGradient id=\"spkGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#b0bec5\"/><stop offset=\"100%\" stop-color=\"#455a64\"/></linearGradient></defs><g><rect x=\"6\" y=\"4\" width=\"12\" height=\"16\" rx=\"2\" fill=\"url(#spkGrad)\" stroke=\"#455a64\" stroke-width=\"1.5\"/><circle cx=\"12\" cy=\"12\" r=\"4\" fill=\"#37474f\"/><circle cx=\"12\" cy=\"12\" r=\"1.5\" fill=\"#cfd8dc\"/></g>"
        },
        {
            "id": 882,
            "name": "Speaker-Inverted-Color",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#455a64\" rx=\"4\"/><rect x=\"7\" y=\"5\" width=\"10\" height=\"14\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 883,
            "name": "SpeakerInverted",
            "category": "communication",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\" ry=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"13\" r=\"5\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"13\" r=\"2\"/>"
        },
        {
            "id": 884,
            "name": "SpeedometerInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"10\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 7v8M12 15l3 0m-6 0l3 0\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M7 12a5 5 0 0 1 10 0\"/>"
        },
        {
            "id": 885,
            "name": "SpoonInverted",
            "category": "food",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M16.1 4.1l3.8 3.8\"/><path d=\"M12.9 7.3L7.3 12.9a2 2 0 0 0 0 2.8l2.8 2.8a2 2 0 0 0 2.8 0l5.6-5.6\"/><path d=\"M10 20l4-4M10 20l-2-2\"/></g>"
        },
        {
            "id": 886,
            "name": "SpotifyInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"10\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0z\"/>"
        },
        {
            "id": 887,
            "name": "SquareInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/></g>"
        },
        {
            "id": 888,
            "name": "Stapler-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"stpGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#b0bec5\"/><stop offset=\"100%\" stop-color=\"#455a64\"/></linearGradient></defs><g><path d=\"M4 14l16-2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\" fill=\"url(#stpGrad)\" stroke=\"#455a64\" stroke-width=\"1.5\"/><rect x=\"14\" y=\"8\" width=\"4\" height=\"6\" fill=\"#37474f\"/></g>"
        },
        {
            "id": 889,
            "name": "Stapler-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#455a64\" rx=\"4\"/><path d=\"M5 14l14-2v3a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 890,
            "name": "Star-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"starGold\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#fff59d\"/><stop offset=\"60%\" stop-color=\"#ffca28\"/><stop offset=\"100%\" stop-color=\"#ff8f00\"/></linearGradient></defs><g><polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\" fill=\"url(#starGold)\"/><polygon points=\"12 2 8.91 8.26 2 9.27 7 14.14 5.82 21.02 12 17.77\" fill=\"#ffe082\" opacity=\"0.4\"/></g>"
        },
        {
            "id": 891,
            "name": "Star-Fill-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"strFGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#fff176\"/><stop offset=\"100%\" stop-color=\"#fbc02d\"/></linearGradient></defs><g><path d=\"M12 2l3 7h8l-6 5 2 7-6-4-6 4 2-7-6-5h8z\" fill=\"url(#strFGrad)\" stroke=\"#f57f17\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 892,
            "name": "Star-Fill-Inverted-Color",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#f57f17\" rx=\"4\"/><path d=\"M12 3l2 6h7l-5 4 2 6-5-3-5 3 2-6-5-4h7z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 893,
            "name": "Star-Inverted-Color",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#fbc02d\" rx=\"4\"/><path d=\"M12 3l2 6h7l-5 4 2 6-5-3-5 3 2-6-5-4h7z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 894,
            "name": "Star-Mini-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"stmGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#fff176\"/><stop offset=\"100%\" stop-color=\"#fbc02d\"/></linearGradient></defs><g><path d=\"M12 2l3 7h8l-6 5 2 7-6-4-6 4 2-7-6-5h8z\" fill=\"url(#stmGrad)\" stroke=\"#f57f17\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 895,
            "name": "Star-Mini-Inverted-Color",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#fbc02d\" rx=\"4\"/><path d=\"M12 3l2 6h7l-5 4 2 6-5-3-5 3 2-6-5-4h7z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 896,
            "name": "StarHalfInverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 18l3.79 2.01-0.88-4.66L19 10.3H14.2l-2.2-4.6v13.3z\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 2v14.5\"/>"
        },
        {
            "id": 897,
            "name": "StarInverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\"/></g>"
        },
        {
            "id": 898,
            "name": "StatusDndInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"10\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"/>"
        },
        {
            "id": 899,
            "name": "StatusOfflineInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"18\" cy=\"18\" r=\"4\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 2a10 10 0 1 0 10 10M12 6v6l4 2\"/>"
        },
        {
            "id": 900,
            "name": "Steering-Wheel-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"stgGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#8d6e63\"/><stop offset=\"100%\" stop-color=\"#5d4037\"/></linearGradient></defs><g><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"none\" stroke=\"#5d4037\" stroke-width=\"3\"/><path d=\"M12 2v4m0 12v4m-10-10h4m12 0h4\" stroke=\"#5d4037\" stroke-width=\"3\" stroke-linecap=\"round\"/><circle cx=\"12\" cy=\"12\" r=\"2\" fill=\"#5d4037\"/></g>"
        },
        {
            "id": 901,
            "name": "Steering-Wheel-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#5d4037\" rx=\"4\"/><circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"#ffffff\"/>"
        },
        {
            "id": 902,
            "name": "StopInverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><rect x=\"6\" y=\"6\" width=\"12\" height=\"12\"/></g>"
        },
        {
            "id": 903,
            "name": "StopSolid",
            "category": "media",
            "svgContent": "<rect x=\"5\" y=\"5\" width=\"14\" height=\"14\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 904,
            "name": "StopSolidInverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"5\" y=\"5\" width=\"14\" height=\"14\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 905,
            "name": "Stripe2Inverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M6 10h12M6 14h8\"/>"
        },
        {
            "id": 906,
            "name": "StripeInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M2 8c0-1 1-2 2-2h16c1 0 2 1 2 2v8c0 1-1 2-2 2H4c-1 0-2-1-2-2V8z\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"6\" y1=\"12\" x2=\"10\" y2=\"12\" />"
        },
        {
            "id": 907,
            "name": "Submarine-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"submGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#78909c\"/><stop offset=\"100%\" stop-color=\"#455a64\"/></linearGradient></defs><g><path d=\"M2 12a10 4 0 1 0 20 0 10 4 0 1 0-20 0z\" fill=\"url(#submGrad)\" stroke=\"#455a64\" stroke-width=\"1.5\"/><rect x=\"10\" y=\"6\" width=\"4\" height=\"4\" fill=\"#455a64\"/></g>"
        },
        {
            "id": 908,
            "name": "Submarine-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#455a64\" rx=\"4\"/><path d=\"M3 13a9 3 0 1 0 18 0 9 3 0 1 0-18 0z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 909,
            "name": "Subway-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"subGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#9e9e9e\"/><stop offset=\"100%\" stop-color=\"#616161\"/></linearGradient></defs><g><rect x=\"4\" y=\"6\" width=\"16\" height=\"12\" rx=\"2\" fill=\"url(#subGrad)\" stroke=\"#212121\" stroke-width=\"1.5\"/><rect x=\"6\" y=\"8\" width=\"4\" height=\"4\" fill=\"#ffffff\"/><rect x=\"14\" y=\"8\" width=\"4\" height=\"4\" fill=\"#ffffff\"/></g>"
        },
        {
            "id": 910,
            "name": "Subway-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#212121\" rx=\"4\"/><rect x=\"5\" y=\"7\" width=\"14\" height=\"10\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 911,
            "name": "Sun-Cloud-Color",
            "category": "iot",
            "svgContent": "<defs><linearGradient id=\"scGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffffff\"/><stop offset=\"100%\" stop-color=\"#cfd8dc\"/></linearGradient></defs><g><circle cx=\"16\" cy=\"9\" r=\"4\" fill=\"#ffb300\"/><path d=\"M19 13h-1.2A5.5 5.5 0 1 0 9 19h10a4 4 0 0 0 0-8z\" fill=\"url(#scGrad)\"/></g>"
        },
        {
            "id": 912,
            "name": "Sun-Cloud-Inverted-Color",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#0288d1\" rx=\"4\"/><circle cx=\"15\" cy=\"8\" r=\"3\" fill=\"#ffea00\"/><path d=\"M17 13.5A3.5 3.5 0 0 0 10.4 11 4.5 4.5 0 0 0 5 15.5 3.5 3.5 0 0 0 8.5 19h8.5a3.5 3.5 0 0 0 0-7z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 913,
            "name": "Sun-CloudInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M16 13a4 4 0 0 0-4-4 4 4 0 0 0-3.1 1.5M12 2v2M12 22v-2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M17.7 6.3l-1.4-1.4\"/><path d=\"M16 13a4 4 0 0 1 0 8H6a5 5 0 0 1-1.8-9.6\"/></g>"
        },
        {
            "id": 914,
            "name": "Sun-Color",
            "category": "iot",
            "svgContent": "<defs><radialGradient id=\"sunGrad\" cx=\"50%\" cy=\"50%\" r=\"50%\"><stop offset=\"0%\" stop-color=\"#ffeb3b\"/><stop offset=\"85%\" stop-color=\"#ff9800\"/><stop offset=\"100%\" stop-color=\"#e65100\"/></radialGradient></defs><g><circle cx=\"12\" cy=\"12\" r=\"6\" fill=\"url(#sunGrad)\"/><path d=\"M12 2v2m0 16v2M4 12H2m20 0h-2m-2.12-7.88l-1.42 1.42m-8.96 8.96l-1.42 1.42m0-11.8l1.42 1.42m8.96 8.96l1.42 1.42\" stroke=\"#ff9800\" stroke-width=\"2\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 915,
            "name": "Sun-Inverted-Color",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#ff9800\" rx=\"4\"/><circle cx=\"12\" cy=\"12\" r=\"6\" fill=\"#ffffff\"/>"
        },
        {
            "id": 916,
            "name": "Sunglasses-Color",
            "category": "food",
            "svgContent": "<defs><linearGradient id=\"sunGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#263238\"/><stop offset=\"100%\" stop-color=\"#121212\"/></linearGradient></defs><g><rect x=\"3\" y=\"10\" width=\"8\" height=\"6\" rx=\"1\" fill=\"url(#sunGrad)\" stroke=\"#121212\" stroke-width=\"1.5\"/><rect x=\"13\" y=\"10\" width=\"8\" height=\"6\" rx=\"1\" fill=\"url(#sunGrad)\" stroke=\"#121212\" stroke-width=\"1.5\"/><path d=\"M11 13h2\" stroke=\"#121212\" stroke-width=\"2\"/></g>"
        },
        {
            "id": 917,
            "name": "Sunglasses-Inverted-Color",
            "category": "food",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#121212\" rx=\"4\"/><rect x=\"4\" y=\"11\" width=\"7\" height=\"4\" rx=\"1\" fill=\"#ffffff\"/><rect x=\"13\" y=\"11\" width=\"7\" height=\"4\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 918,
            "name": "SunInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><circle cx=\"12\" cy=\"12\" r=\"5\"/><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"3\"/><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"/><line x1=\"4.22\" y1=\"4.22\" x2=\"5.64\" y2=\"5.64\"/><line x1=\"18.36\" y1=\"18.36\" x2=\"19.78\" y2=\"19.78\"/><line x1=\"1\" y1=\"12\" x2=\"3\" y2=\"12\"/><line x1=\"21\" y1=\"12\" x2=\"23\" y2=\"12\"/><line x1=\"4.22\" y1=\"19.78\" x2=\"5.64\" y2=\"18.36\"/><line x1=\"18.36\" y1=\"5.64\" x2=\"19.78\" y2=\"4.22\"/></g>"
        },
        {
            "id": 919,
            "name": "Surfboard-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"srfGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ff9800\"/><stop offset=\"100%\" stop-color=\"#f57c00\"/></linearGradient></defs><g><path d=\"M12 2c-4 0-8 2-8 8v8c0 4 4 6 8 6s8-2 8-6V10c0-6-4-8-8-8z\" fill=\"url(#srfGrad)\" stroke=\"#f57c00\" stroke-width=\"1.5\"/><path d=\"M8 10h8\" stroke=\"#ffffff\" stroke-width=\"2\"/></g>"
        },
        {
            "id": 920,
            "name": "Surfboard-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#f57c00\" rx=\"4\"/><path d=\"M12 3c-3 0-7 2-7 7v7c0 3 3 5 7 5s7-2 7-5V10c0-5-3-7-7-7z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 921,
            "name": "Table-Color",
            "category": "development",
            "svgContent": "<defs><linearGradient id=\"tblGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#90caf9\"/><stop offset=\"100%\" stop-color=\"#42a5f5\"/></linearGradient></defs><g><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" fill=\"none\" stroke=\"url(#tblGrad)\" stroke-width=\"2\"/><line x1=\"3\" y1=\"9\" x2=\"21\" y2=\"9\" stroke=\"#42a5f5\" stroke-width=\"1.5\"/><line x1=\"3\" y1=\"15\" x2=\"21\" y2=\"15\" stroke=\"#42a5f5\" stroke-width=\"1.5\"/><line x1=\"9\" y1=\"3\" x2=\"9\" y2=\"21\" stroke=\"#42a5f5\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 922,
            "name": "Table-Inverted-Color",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#42a5f5\" rx=\"4\"/><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"1\" fill=\"#ffffff\"/><line x1=\"4\" y1=\"9\" x2=\"20\" y2=\"9\" stroke=\"#42a5f5\" stroke-width=\"1.5\"/><line x1=\"10\" y1=\"4\" x2=\"10\" y2=\"20\" stroke=\"#42a5f5\" stroke-width=\"1.5\"/>"
        },
        {
            "id": 923,
            "name": "TabletInverted",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\" ry=\"2\"/><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"18\"/></g>"
        },
        {
            "id": 924,
            "name": "Tag-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"tagGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#00e676\"/><stop offset=\"100%\" stop-color=\"#00c853\"/></linearGradient></defs><g><path d=\"M21.4 11.6l-9-9A2 2 0 0 0 11 2H3a2 2 0 0 0-2 2v8a2 2 0 0 0 .6 1.4l9 9a2 2 0 0 0 2.8 0l8-8a2 2 0 0 0 0-2.8z\" fill=\"url(#tagGrad)\"/><circle cx=\"6\" cy=\"6\" r=\"1.5\" fill=\"#ffffff\"/></g>"
        },
        {
            "id": 925,
            "name": "Tag-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#00c853\" rx=\"4\"/><path d=\"M20 11l-8-8H4v8l8 8z\" fill=\"#ffffff\"/><circle cx=\"7\" cy=\"7\" r=\"1.5\" fill=\"#00c853\"/>"
        },
        {
            "id": 926,
            "name": "TagInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12a2 2 0 0 1 0-2.83l7.17-7.17a2 2 0 0 1 2.83 0L20.59 9.59a2 2 0 0 1 0 2.82z\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"7\" y1=\"7\" x2=\"7.01\" y2=\"7\"/>"
        },
        {
            "id": 927,
            "name": "TagsInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2m7 8h.01\"/>"
        },
        {
            "id": 928,
            "name": "Tape-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"tpeGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffeb3b\"/><stop offset=\"100%\" stop-color=\"#fbc02d\"/></linearGradient></defs><g><circle cx=\"12\" cy=\"12\" r=\"8\" fill=\"url(#tpeGrad)\" stroke=\"#fbc02d\" stroke-width=\"1.5\"/><circle cx=\"12\" cy=\"12\" r=\"3\" fill=\"#ffffff\"/><path d=\"M12 12l8-8\" stroke=\"#fbc02d\" stroke-width=\"2\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 929,
            "name": "Tape-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#fbc02d\" rx=\"4\"/><circle cx=\"12\" cy=\"12\" r=\"7\" fill=\"#ffffff\"/>"
        },
        {
            "id": 930,
            "name": "Target-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"tgtGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ff5252\"/><stop offset=\"100%\" stop-color=\"#b71c1c\"/></linearGradient></defs><g><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"none\" stroke=\"url(#tgtGrad)\" stroke-width=\"2\"/><circle cx=\"12\" cy=\"12\" r=\"6\" fill=\"none\" stroke=\"#b0bec5\" stroke-width=\"1.5\"/><circle cx=\"12\" cy=\"12\" r=\"2.5\" fill=\"url(#tgtGrad)\"/></g>"
        },
        {
            "id": 931,
            "name": "Target-CrossInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"22\" y1=\"12\" x2=\"18\" y2=\"12\"/><line x1=\"6\" y1=\"12\" x2=\"2\" y2=\"12\"/><line x1=\"12\" y1=\"6\" x2=\"12\" y2=\"2\"/><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"18\"/></g>"
        },
        {
            "id": 932,
            "name": "Target-Inverted-Color",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#b71c1c\" rx=\"4\"/><circle cx=\"12\" cy=\"12\" r=\"8\" fill=\"#ffffff\"/><circle cx=\"12\" cy=\"12\" r=\"5\" fill=\"#b71c1c\"/><circle cx=\"12\" cy=\"12\" r=\"2\" fill=\"#ffffff\"/>"
        },
        {
            "id": 933,
            "name": "TargetInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"6\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/></g>"
        },
        {
            "id": 934,
            "name": "Taxi-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"txiGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffeb3b\"/><stop offset=\"100%\" stop-color=\"#fbc02d\"/></linearGradient></defs><g><rect x=\"2\" y=\"10\" width=\"16\" height=\"8\" rx=\"2\" fill=\"url(#txiGrad)\" stroke=\"#fbc02d\" stroke-width=\"1.5\"/><rect x=\"6\" y=\"8\" width=\"8\" height=\"2\" fill=\"#000000\"/></g>"
        },
        {
            "id": 935,
            "name": "Taxi-Inverted-Color",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#fbc02d\" rx=\"4\"/><rect x=\"3\" y=\"11\" width=\"14\" height=\"6\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 936,
            "name": "TeaInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M18 8h1a4 4 0 0 1 0 8h-1\"/><path d=\"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z\"/><path d=\"M12 21v-4\"/><path d=\"M8 21v-4\"/><path d=\"M16 21v-4\"/></g>"
        },
        {
            "id": 937,
            "name": "TeamInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"6\" cy=\"8\" r=\"2.5\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"18\" cy=\"8\" r=\"2.5\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"5\" r=\"2.5\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M4 18c0-1.5 1.5-3 3-3M16 18c0-1.5-1.5-3-3-3M12 18c0-2 2-3 3-3s3 1 3 3\"/>"
        },
        {
            "id": 938,
            "name": "TelegramInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm9-4l-4 6 5 3 4-8-5 3z\"/>"
        },
        {
            "id": 939,
            "name": "TelephoneInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\" stroke=\"var(--ax-bg-inverse, white)\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"
        },
        {
            "id": 940,
            "name": "Telescope-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"telGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#455a64\"/><stop offset=\"100%\" stop-color=\"#263238\"/></linearGradient></defs><g><rect x=\"3\" y=\"10\" width=\"18\" height=\"6\" rx=\"1\" fill=\"url(#telGrad)\" stroke=\"#263238\" stroke-width=\"1.5\"/><path d=\"M21 11l2 1-2 1z\" fill=\"#263238\"/><line x1=\"3\" y1=\"13\" x2=\"18\" y2=\"13\" stroke=\"#546e7a\" stroke-width=\"1\"/></g>"
        },
        {
            "id": 941,
            "name": "Telescope-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#263238\" rx=\"4\"/><rect x=\"4\" y=\"11\" width=\"16\" height=\"4\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 942,
            "name": "Telescope-View-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"telVGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#263238\"/><stop offset=\"100%\" stop-color=\"#121212\"/></linearGradient></defs><g><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"url(#telVGrad)\" stroke=\"#121212\" stroke-width=\"1.5\"/><circle cx=\"12\" cy=\"12\" r=\"3\" fill=\"#ffeb3b\"/></g>"
        },
        {
            "id": 943,
            "name": "Telescope-View-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#121212\" rx=\"4\"/><circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"#ffffff\"/>"
        },
        {
            "id": 944,
            "name": "Tent-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"tntGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ef5350\"/><stop offset=\"100%\" stop-color=\"#b71c1c\"/></linearGradient></defs><g><path d=\"M12 3l-9 18h18z\" fill=\"url(#tntGrad)\" stroke=\"#b71c1c\" stroke-width=\"1.5\"/><path d=\"M12 3l2 18M12 3l-2 18\" stroke=\"#b71c1c\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 945,
            "name": "Tent-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#b71c1c\" rx=\"4\"/><path d=\"M12 4l-8 17h16z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 946,
            "name": "Terminal-Color",
            "category": "brands",
            "svgContent": "<defs><linearGradient id=\"termBg\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#2d3748\"/><stop offset=\"100%\" stop-color=\"#1a202c\"/></linearGradient></defs><g><rect x=\"2\" y=\"3\" width=\"20\" height=\"18\" rx=\"3\" fill=\"url(#termBg)\"/><polyline points=\"6 8 10 11 6 14\" fill=\"none\" stroke=\"#48bb78\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"12\" y1=\"14\" x2=\"18\" y2=\"14\" stroke=\"#48bb78\" stroke-width=\"2.5\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 947,
            "name": "Terminal-Inverted-Color",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#1a202c\" rx=\"4\"/><rect x=\"2\" y=\"3\" width=\"20\" height=\"18\" rx=\"2\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"1\"/><polyline points=\"6 9 9 12 6 15\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\"/><line x1=\"11\" y1=\"15\" x2=\"16\" y2=\"15\" stroke=\"#ffffff\" stroke-width=\"2\"/>"
        },
        {
            "id": 948,
            "name": "TerminalInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polyline points=\"4 17 10 11 4 5\"/><line x1=\"12\" y1=\"19\" x2=\"20\" y2=\"19\"/></g>"
        },
        {
            "id": 949,
            "name": "TeslaInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M3 12h18M6 8h12v8H6zM9 3v4M15 3v4M6 18v2M18 18v2\"/>"
        },
        {
            "id": 950,
            "name": "TextColor",
            "category": "general",
            "svgContent": "<path d=\"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12a2 2 0 0 1 0-2.83l7.17-7.17a2 2 0 0 1 2.83 0L20.59 9.59a2 2 0 0 1 0 2.82z\"/><line x1=\"5\" y1=\"5\" x2=\"19\" y2=\"19\"/>"
        },
        {
            "id": 951,
            "name": "TextColorInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12a2 2 0 0 1 0-2.83l7.17-7.17a2 2 0 0 1 2.83 0L20.59 9.59a2 2 0 0 1 0 2.82z\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"5\" y1=\"5\" x2=\"19\" y2=\"19\"/>"
        },
        {
            "id": 952,
            "name": "TextColorThin",
            "category": "general",
            "svgContent": "<g fill=\"none\" stroke-width=\"0.5\"><path d=\"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12a2 2 0 0 1 0-2.83l7.17-7.17a2 2 0 0 1 2.83 0L20.59 9.59a2 2 0 0 1 0 2.82z\"/><line x1=\"5\" y1=\"5\" x2=\"19\" y2=\"19\"/></g>"
        },
        {
            "id": 953,
            "name": "Theater-Masks-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"mskGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#fff9c4\"/><stop offset=\"100%\" stop-color=\"#fbc02d\"/></linearGradient></defs><g><path d=\"M7 6a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0v-4a4 4 0 0 0-4-4z\" fill=\"url(#mskGrad)\" stroke=\"#f57c00\" stroke-width=\"1.5\"/><path d=\"M17 10a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0v-4a4 4 0 0 0-4-4z\" fill=\"url(#mskGrad)\" stroke=\"#f57c00\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 954,
            "name": "Theater-Masks-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#f57c00\" rx=\"4\"/><path d=\"M7 7a3 3 0 0 0-3 3v3a3 3 0 0 0 6 0v-3a3 3 0 0 0-3-3z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 955,
            "name": "Thermometer-ColdInverted",
            "category": "health",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M2 12.5a5 5 0 1 0 10 0V3a3 3 0 1 0-6 0v9.5\"/><line x1=\"6\" y1=\"3\" x2=\"6\" y2=\"3\"/><line x1=\"8\" y1=\"5\" x2=\"8\" y2=\"5\"/><line x1=\"4\" y1=\"5\" x2=\"4\" y2=\"5\"/><line x1=\"9\" y1=\"8\" x2=\"9\" y2=\"8\"/><line x1=\"3\" y1=\"8\" x2=\"3\" y2=\"8\"/></g>"
        },
        {
            "id": 956,
            "name": "Thermometer-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"thmGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ef5350\"/><stop offset=\"100%\" stop-color=\"#c62828\"/></linearGradient></defs><g><path d=\"M14 4v10a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z\" fill=\"url(#thmGrad)\" stroke=\"#b71c1c\" stroke-width=\"1.5\"/><line x1=\"12\" y1=\"4\" x2=\"12\" y2=\"10\" stroke=\"#ffffff\" stroke-width=\"2\"/></g>"
        },
        {
            "id": 957,
            "name": "Thermometer-HotInverted",
            "category": "health",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z\"/><path d=\"M12 9V5\"/><path d=\"M12 12v1\"/><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"16\"/></g>"
        },
        {
            "id": 958,
            "name": "Thermometer-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#b71c1c\" rx=\"4\"/><path d=\"M14 5v9a3 3 0 1 1-3 0V5a1 1 0 0 1 3 0z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 959,
            "name": "ThermometerInverted",
            "category": "health",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z\"/></g>"
        },
        {
            "id": 960,
            "name": "ThermostatInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"8\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"4\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 6V3m0 18v-3\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M18 12h3M3 12h3\"/>"
        },
        {
            "id": 961,
            "name": "Thumbs-DownInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zM17 2h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3\"/></g>"
        },
        {
            "id": 962,
            "name": "Thumbs-UpInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3\"/></g>"
        },
        {
            "id": 963,
            "name": "ThumbsDownInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M10 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4M10 1h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M21 21h2a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z\"/>"
        },
        {
            "id": 964,
            "name": "ThumbsUpInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M14 9V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5.5a2.5 2.5 0 0 0-2.5-2.5z\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M3 21h2a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z\"/>"
        },
        {
            "id": 965,
            "name": "Ticket-Color",
            "category": "finance",
            "svgContent": "<defs><linearGradient id=\"tktGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffb74d\"/><stop offset=\"100%\" stop-color=\"#f57c00\"/></linearGradient></defs><g><path d=\"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2 2 2 0 0 0 0 10 2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 2 2 0 0 0 0-10z\" fill=\"url(#tktGrad)\"/><line x1=\"6\" y1=\"8\" x2=\"6\" y2=\"16\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-dasharray=\"2 2\"/></g>"
        },
        {
            "id": 966,
            "name": "Ticket-Inverted-Color",
            "category": "finance",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#f57c00\" rx=\"4\"/><path d=\"M3 8a2 2 0 0 0 2-2h14a2 2 0 0 0 2 2v8a2 2 0 0 0-2 2H5a2 2 0 0 0-2-2V8z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 967,
            "name": "TikTokInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M9 2v15M9 10a5 5 0 0 0 5 5 5 5 0 0 0 5-5M15 2a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3\"/>"
        },
        {
            "id": 968,
            "name": "Timeline-Color",
            "category": "development",
            "svgContent": "<defs><linearGradient id=\"tlGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#ff7043\"/><stop offset=\"100%\" stop-color=\"#d84315\"/></linearGradient></defs><g><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\" stroke=\"url(#tlGrad)\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"6\" cy=\"12\" r=\"3\" fill=\"#ff7043\"/><circle cx=\"14\" cy=\"12\" r=\"4\" fill=\"#d84315\"/><rect x=\"12\" y=\"4\" width=\"4\" height=\"4\" rx=\"1\" fill=\"#ff7043\"/></g>"
        },
        {
            "id": 969,
            "name": "Timeline-Inverted-Color",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#d84315\" rx=\"4\"/><line x1=\"3\" y1=\"12\" x2=\"21\" y2=\"12\" stroke=\"#ffffff\" stroke-width=\"2\"/><circle cx=\"8\" cy=\"12\" r=\"3\" fill=\"#ffffff\"/><circle cx=\"16\" cy=\"12\" r=\"3\" fill=\"#ffffff\"/>"
        },
        {
            "id": 970,
            "name": "Toggle-LeftInverted",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><rect x=\"1\" y=\"5\" width=\"22\" height=\"14\" rx=\"7\" ry=\"7\"/><circle cx=\"8\" cy=\"12\" r=\"3\"/></g>"
        },
        {
            "id": 971,
            "name": "Toggle-RightInverted",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><rect x=\"1\" y=\"5\" width=\"22\" height=\"14\" rx=\"7\" ry=\"7\"/><circle cx=\"16\" cy=\"12\" r=\"3\"/></g>"
        },
        {
            "id": 972,
            "name": "ToggleOff",
            "category": "iot",
            "svgContent": "<rect x=\"1\" y=\"5\" width=\"22\" height=\"14\" rx=\"7\"/><circle cx=\"8\" cy=\"12\" r=\"5\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 973,
            "name": "ToggleOffInverted",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"1\" y=\"5\" width=\"22\" height=\"14\" rx=\"7\" stroke=\"var(--ax-bg-inverse, white)\" /><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"8\" cy=\"12\" r=\"5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 974,
            "name": "ToggleOn",
            "category": "iot",
            "svgContent": "<rect x=\"1\" y=\"5\" width=\"22\" height=\"14\" rx=\"7\"/><circle cx=\"16\" cy=\"12\" r=\"5\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 975,
            "name": "ToggleOnInverted",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"1\" y=\"5\" width=\"22\" height=\"14\" rx=\"7\" stroke=\"var(--ax-bg-inverse, white)\" /><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"16\" cy=\"12\" r=\"5\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 976,
            "name": "Tool-Color",
            "category": "objects",
            "svgContent": "<defs><linearGradient id=\"toolGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#cfd8dc\"/><stop offset=\"100%\" stop-color=\"#546e7a\"/></linearGradient></defs><g><path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l4.3-4.3a4.2 4.2 0 0 0-5.9-5.9l-4.3 4.3z\" fill=\"url(#toolGrad)\"/><path d=\"M14.7 6.3L2 19a2.1 2.1 0 0 0 3 3l12.7-12.7\" fill=\"none\" stroke=\"#546e7a\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><rect x=\"2\" y=\"19\" width=\"3\" height=\"3\" rx=\"0.5\" fill=\"#ffb300\"/></g>"
        },
        {
            "id": 977,
            "name": "Tool-Inverted-Color",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#546e7a\" rx=\"4\"/><path d=\"M6 19L19 6M5 20s-2-2 0-4\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
        },
        {
            "id": 978,
            "name": "ToolInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z\"/></g>"
        },
        {
            "id": 979,
            "name": "TornadoInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M21 4H3\"/><path d=\"M18 8H6\"/><path d=\"M19.5 12H4.5\"/><path d=\"M16 16H8\"/><path d=\"M12 20h-4\"/><path d=\"M14 20h2\"/></g>"
        },
        {
            "id": 980,
            "name": "Tractor-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"trcGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#4caf50\"/><stop offset=\"100%\" stop-color=\"#2e7d32\"/></linearGradient></defs><g><rect x=\"4\" y=\"10\" width=\"8\" height=\"6\" fill=\"url(#trcGrad)\" stroke=\"#2e7d32\" stroke-width=\"1.5\"/><circle cx=\"6\" cy=\"20\" r=\"3\" fill=\"#37474f\"/><circle cx=\"16\" cy=\"20\" r=\"3\" fill=\"#37474f\"/></g>"
        },
        {
            "id": 981,
            "name": "Tractor-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#2e7d32\" rx=\"4\"/><rect x=\"5\" y=\"11\" width=\"6\" height=\"4\" fill=\"#ffffff\"/>"
        },
        {
            "id": 982,
            "name": "Train-Color",
            "category": "ai",
            "svgContent": "<defs><linearGradient id=\"trnGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#f44336\"/><stop offset=\"100%\" stop-color=\"#b71c1c\"/></linearGradient></defs><g><rect x=\"4\" y=\"8\" width=\"16\" height=\"10\" rx=\"2\" fill=\"url(#trnGrad)\" stroke=\"#b71c1c\" stroke-width=\"1.5\"/><rect x=\"6\" y=\"10\" width=\"4\" height=\"4\" fill=\"#ffffff\"/><circle cx=\"8\" cy=\"20\" r=\"2\" fill=\"#455a64\"/><circle cx=\"16\" cy=\"20\" r=\"2\" fill=\"#455a64\"/></g>"
        },
        {
            "id": 983,
            "name": "Train-Inverted-Color",
            "category": "ai",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#b71c1c\" rx=\"4\"/><rect x=\"5\" y=\"9\" width=\"14\" height=\"8\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 984,
            "name": "Tram-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"trmGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#2196f3\"/><stop offset=\"100%\" stop-color=\"#1565c0\"/></linearGradient></defs><g><rect x=\"4\" y=\"6\" width=\"16\" height=\"12\" rx=\"2\" fill=\"url(#trmGrad)\" stroke=\"#1565c0\" stroke-width=\"1.5\"/><line x1=\"4\" y1=\"12\" x2=\"20\" y2=\"12\" stroke=\"#ffffff\" stroke-width=\"2\"/></g>"
        },
        {
            "id": 985,
            "name": "Tram-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#1565c0\" rx=\"4\"/><rect x=\"5\" y=\"7\" width=\"14\" height=\"10\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 986,
            "name": "TransmissionInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"6\" cy=\"6\" r=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"18\" cy=\"6\" r=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"6\" cy=\"18\" r=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"18\" cy=\"18\" r=\"2\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"8\" y1=\"6\" x2=\"16\" y2=\"6\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"8\" y1=\"18\" x2=\"16\" y2=\"18\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"6\" y1=\"8\" x2=\"6\" y2=\"16\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"18\" y1=\"8\" x2=\"18\" y2=\"16\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 10v4\"/>"
        },
        {
            "id": 987,
            "name": "Trash-2Inverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polyline points=\"3 6 5 6 21 6\"/><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"/><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"/><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"/></g>"
        },
        {
            "id": 988,
            "name": "Trash-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"trashGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#e53935\"/><stop offset=\"100%\" stop-color=\"#b71c1c\"/></linearGradient></defs><g fill=\"none\" stroke=\"url(#trashGrad)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"3 6 5 6 21 6\"/><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"/><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"/><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"/></g>"
        },
        {
            "id": 989,
            "name": "Trash-Inverted-Color",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#d32f2f\" rx=\"4\"/><path d=\"M5 6h14v13H5V6zm4-3h6v3H9V3z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 990,
            "name": "Trash2Inverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><polyline points=\"3 6 5 6 21 6\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"/>"
        },
        {
            "id": 991,
            "name": "TrashInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><polyline points=\"3 6 5 6 21 6\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"/>"
        },
        {
            "id": 992,
            "name": "TrashSolidInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><polyline points=\"3 6 5 6 21 6\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\" stroke=\"var(--ax-bg-inverse, white)\" /><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\" /><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\" />"
        },
        {
            "id": 993,
            "name": "Tree-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"treGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#81c784\"/><stop offset=\"100%\" stop-color=\"#2e7d32\"/></linearGradient></defs><g><rect x=\"11\" y=\"16\" width=\"2\" height=\"6\" fill=\"#5d4037\"/><path d=\"M12 2A6 6 0 0 0 6 8c0 3 3 5 6 9 3-4 6-6 6-9a6 6 0 0 0-6-6z\" fill=\"url(#treGrad)\"/></g>"
        },
        {
            "id": 994,
            "name": "Tree-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#2e7d32\" rx=\"4\"/><path d=\"M12 4a5 5 0 0 0-5 5c0 2.5 2.5 4.5 5 8.5 2.5-4 5-6 5-8.5a5 5 0 0 0-5-5z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 995,
            "name": "Tree-Small-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"trsGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#66bb6a\"/><stop offset=\"100%\" stop-color=\"#1b5e20\"/></linearGradient></defs><g><path d=\"M12 2l7 10h-3l5 8H3l5-8H5z\" fill=\"url(#trsGrad)\" stroke=\"#1b5e20\" stroke-width=\"1.5\"/><rect x=\"11\" y=\"20\" width=\"2\" height=\"2\" fill=\"#5d4037\"/></g>"
        },
        {
            "id": 996,
            "name": "Tree-Small-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#1b5e20\" rx=\"4\"/><path d=\"M12 3l6 9h-2l4 7H4l4-7H6z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 997,
            "name": "Trending-DownInverted",
            "category": "finance",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polyline points=\"23 18 13.5 8.5 8.5 13.5 1 6\"/><polyline points=\"17 18 23 18 23 12\"/></g>"
        },
        {
            "id": 998,
            "name": "Trending-UpInverted",
            "category": "finance",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polyline points=\"23 6 13.5 15.5 8.5 10.5 1 18\"/><polyline points=\"17 6 23 6 23 12\"/></g>"
        },
        {
            "id": 999,
            "name": "TrendingDownInverted",
            "category": "finance",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polyline points=\"23 18 13.5 8.5 8.5 13.5 1 6\"/><polyline points=\"17 18 23 18 23 12\"/></g>"
        },
        {
            "id": 1000,
            "name": "TrendingUpInverted",
            "category": "finance",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polyline points=\"23 6 13.5 15.5 8.5 10.5 1 18\"/><polyline points=\"17 6 23 6 23 12\"/></g>"
        },
        {
            "id": 1001,
            "name": "Trophy-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"goldTr\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#fff176\"/><stop offset=\"60%\" stop-color=\"#fbc02d\"/><stop offset=\"100%\" stop-color=\"#f57f17\"/></linearGradient></defs><g><path d=\"M6 4h12v5c0 3.3-2.7 6-6 6s-6-2.7-6-6V4z\" fill=\"url(#goldTr)\"/><path d=\"M6 6H3v2c0 2 1.5 3 3 3V6zm12 0h3v2c0 2-1.5 3-3 3V6z\" fill=\"#fbc02d\"/><path d=\"M12 15v4m-4 3h8\" stroke=\"#fbc02d\" stroke-width=\"2\" fill=\"none\"/><rect x=\"7\" y=\"20\" width=\"10\" height=\"2\" rx=\"0.5\" fill=\"#5d4037\"/></g>"
        },
        {
            "id": 1002,
            "name": "Trophy-Inverted-Color",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#fbc02d\" rx=\"4\"/><path d=\"M6 5h12v5c0 3 2.5 5 5.5 5S6 13 6 10V5z\" fill=\"#ffffff\"/><rect x=\"9\" y=\"17\" width=\"6\" height=\"3\" fill=\"#ffffff\"/>"
        },
        {
            "id": 1003,
            "name": "TrophyInverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M6 9H4.5a2.5 2.5 0 0 1 0-5H6m12 5h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16m-8-7v7m6-18H6v7a6 6 0 0 0 12 0V2z\"/></g>"
        },
        {
            "id": 1004,
            "name": "Truck-Delivery-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"trkGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#78909c\"/><stop offset=\"100%\" stop-color=\"#455a64\"/></linearGradient></defs><g><rect x=\"2\" y=\"10\" width=\"16\" height=\"8\" rx=\"2\" fill=\"url(#trkGrad)\" stroke=\"#455a64\" stroke-width=\"1.5\"/><rect x=\"18\" y=\"12\" width=\"4\" height=\"6\" rx=\"1\" fill=\"#455a64\"/><circle cx=\"6\" cy=\"20\" r=\"2\" fill=\"#37474f\"/><circle cx=\"14\" cy=\"20\" r=\"2\" fill=\"#37474f\"/></g>"
        },
        {
            "id": 1005,
            "name": "Truck-Delivery-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#455a64\" rx=\"4\"/><rect x=\"3\" y=\"11\" width=\"14\" height=\"6\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 1006,
            "name": "Trumpet-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"trpGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#fff176\"/><stop offset=\"100%\" stop-color=\"#fbc02d\"/></linearGradient></defs><g><path d=\"M4 14l16-8 2 2-16 8z\" fill=\"url(#trpGrad)\" stroke=\"#fbc02d\" stroke-width=\"1.5\"/><rect x=\"8\" y=\"9\" width=\"3\" height=\"3\" fill=\"#ffeb3b\"/><rect x=\"12\" y=\"7\" width=\"3\" height=\"3\" fill=\"#ffeb3b\"/></g>"
        },
        {
            "id": 1007,
            "name": "Trumpet-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#fbc02d\" rx=\"4\"/><path d=\"M5 13l15-7 1 1-15 7z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 1008,
            "name": "TvInverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><rect x=\"2\" y=\"7\" width=\"20\" height=\"15\" rx=\"2\" ry=\"2\"/><polyline points=\"17 2 12 7 7 2\"/></g>"
        },
        {
            "id": 1009,
            "name": "Twitch2-Color",
            "category": "brands",
            "svgContent": "<defs><linearGradient id=\"twitchPurple\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#a970ff\"/><stop offset=\"100%\" stop-color=\"#6441a5\"/></linearGradient></defs><g><path d=\"M3 2th16l4 4v12h-6l-4 4h-4l-4-4H3V2z\" fill=\"url(#twitchPurple)\"/><rect x=\"16\" y=\"7\" width=\"2\" height=\"6\" fill=\"#ffffff\"/><rect x=\"11\" y=\"7\" width=\"2\" height=\"6\" fill=\"#ffffff\"/></g>"
        },
        {
            "id": 1010,
            "name": "Twitch2-Inverted-Color",
            "category": "brands",
            "svgContent": "<defs><linearGradient id=\"twitchInv\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#6441a5\"/><stop offset=\"100%\" stop-color=\"#4b367c\"/></linearGradient></defs><g><rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"url(#twitchInv)\" rx=\"4\"/><path d=\"M5 4h12l3 3v9h-4l-3 3h-3l-3-3H5V4z\" fill=\"#ffffff\"/><rect x=\"14\" y=\"8\" width=\"2\" height=\"4\" fill=\"url(#twitchInv)\"/><rect x=\"10\" y=\"8\" width=\"2\" height=\"4\" fill=\"url(#twitchInv)\"/></g>"
        },
        {
            "id": 1011,
            "name": "Twitch2Inverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"3\" y=\"2\" width=\"4\" height=\"16\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"9\" y=\"2\" width=\"4\" height=\"16\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"15\" y=\"7\" width=\"4\" height=\"11\"/>"
        },
        {
            "id": 1012,
            "name": "TwitchInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"3\" y=\"2\" width=\"18\" height=\"20\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"6\" y=\"5\" width=\"3\" height=\"10\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"12\" y=\"5\" width=\"3\" height=\"10\"/>"
        },
        {
            "id": 1013,
            "name": "TwitterInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z\"/>"
        },
        {
            "id": 1014,
            "name": "Type2Inverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><polyline points=\"4 7h16M9 20h6M12 3v14\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"3\" y1=\"20\" x2=\"21\" y2=\"20\"/>"
        },
        {
            "id": 1015,
            "name": "TypeInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><polyline points=\"4 7 4 4 20 4 20 7\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"9\" y1=\"20 x2=\"15 y2=\"20\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"12\" y1=\"4 x2=\"12 y2=\"20\"/>"
        },
        {
            "id": 1016,
            "name": "UFO-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"ufoGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#81d4fa\"/><stop offset=\"100%\" stop-color=\"#0288d1\"/></linearGradient></defs><g><ellipse cx=\"12\" cy=\"12\" rx=\"10\" ry=\"4\" fill=\"url(#ufoGrad)\" stroke=\"#0288d1\" stroke-width=\"1.5\"/><circle cx=\"12\" cy=\"10\" r=\"3\" fill=\"#ffffff\" stroke=\"#0288d1\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 1017,
            "name": "UFO-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#0288d1\" rx=\"4\"/><ellipse cx=\"12\" cy=\"12\" rx=\"9\" ry=\"3\" fill=\"#ffffff\"/>"
        },
        {
            "id": 1018,
            "name": "UFO-Mini-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"ufmGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#81d4fa\"/><stop offset=\"100%\" stop-color=\"#0288d1\"/></linearGradient></defs><g><ellipse cx=\"12\" cy=\"12\" rx=\"10\" ry=\"4\" fill=\"url(#ufmGrad)\" stroke=\"#0288d1\" stroke-width=\"1.5\"/><circle cx=\"12\" cy=\"10\" r=\"3\" fill=\"#ffffff\" stroke=\"#0288d1\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 1019,
            "name": "UFO-Mini-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#0288d1\" rx=\"4\"/><ellipse cx=\"12\" cy=\"12\" rx=\"9\" ry=\"3\" fill=\"#ffffff\"/>"
        },
        {
            "id": 1020,
            "name": "Umbrella-Color",
            "category": "iot",
            "svgContent": "<defs><linearGradient id=\"umbGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#ab47bc\"/><stop offset=\"100%\" stop-color=\"#7b1fa2\"/></linearGradient></defs><g><path d=\"M23 12a11 11 0 0 0-22 0h22z\" fill=\"url(#umbGrad)\"/><path d=\"M12 12v7a2 2 0 0 0 4 0\" fill=\"none\" stroke=\"#4e342e\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><line x1=\"12\" y1=\"12\" x2=\"12\" y2=\"2\" stroke=\"#4e342e\" stroke-width=\"2.5\"/></g>"
        },
        {
            "id": 1021,
            "name": "Umbrella-Inverted-Color",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#7b1fa2\" rx=\"4\"/><path d=\"M3 13h18a9 9 0 0 0-18 0z\" fill=\"#ffffff\"/><line x1=\"12\" y1=\"13\" x2=\"12\" y2=\"20\" stroke=\"#ffffff\" stroke-width=\"2\"/>"
        },
        {
            "id": 1022,
            "name": "Umbrella-OffInverted",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M23 12a11.05 11.05 0 0 0-22 0zm-7 7a3 3 0 0 1-5 0\"/><line x1=\"12\" y1=\"12\" x2=\"12\" y2=\"19\"/><line x1=\"2\" y1=\"2\" x2=\"22\" y2=\"22\"/></g>"
        },
        {
            "id": 1023,
            "name": "Umbrella-RainInverted",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M23 12a11.05 11.05 0 0 0-22 0zm-7 7a3 3 0 0 1-5 0\"/><line x1=\"12\" y1=\"12\" x2=\"12\" y2=\"19\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"6\"/><line x1=\"16\" y1=\"3\" x2=\"16\" y2=\"5\"/><line x1=\"8\" y1=\"3\" x2=\"8\" y2=\"5\"/></g>"
        },
        {
            "id": 1024,
            "name": "UmbrellaInverted",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M23 12a11.05 11.05 0 0 0-22 0zm-7 7a3 3 0 0 1-5 0\"/><line x1=\"12\" y1=\"12\" x2=\"12\" y2=\"19\"/></g>"
        },
        {
            "id": 1025,
            "name": "UmbrellasInverted",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M22 12a10.05 10.05 0 0 0-20 0zm-6 6a3 3 0 0 1-5 0\"/><line x1=\"12\" y1=\"12\" x2=\"12\" y2=\"19\"/><path d=\"M15 8l-2-4 2-4-2 4-2-4 2 4z\"/></g>"
        },
        {
            "id": 1026,
            "name": "Unlink",
            "category": "general",
            "svgContent": "<path d=\"M10 14l-2-2M14 10l2-2M6 3h4M14 3h4M18 9v4M6 13v4\"/><circle cx=\"12\" cy=\"12\" r=\"1\" fill=\"currentColor\" opacity=\"0.9\"/>"
        },
        {
            "id": 1027,
            "name": "UnlinkInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M10 14l-2-2M14 10l2-2M6 3h4M14 3h4M18 9v4M6 13v4\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"1\" fill=\"var(--ax-bg-inverse, white)\" opacity=\"0.9\"/>"
        },
        {
            "id": 1028,
            "name": "Unlock-Color",
            "category": "iot",
            "svgContent": "<defs><linearGradient id=\"lockBodyUn\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffd54f\"/><stop offset=\"100%\" stop-color=\"#ffb300\"/></linearGradient><linearGradient id=\"shackleGradUn\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#cfd8dc\"/><stop offset=\"50%\" stop-color=\"#b0bec5\"/><stop offset=\"100%\" stop-color=\"#78909c\"/></linearGradient></defs><g><path d=\"M7 11V7a5 5 0 0 1 9.9-1\" stroke=\"url(#shackleGradUn)\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/><rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" fill=\"url(#lockBodyUn)\"/><circle cx=\"12\" cy=\"16\" r=\"2\" fill=\"#5d4037\"/><path d=\"M12 18v2\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"9\" cy=\"14\" r=\"1\" fill=\"#fff\" opacity=\"0.4\"/></g>"
        },
        {
            "id": 1029,
            "name": "Unlock-Inverted-Color",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#558b2f\" rx=\"4\"/><rect x=\"5\" y=\"11\" width=\"14\" height=\"10\" rx=\"1\" fill=\"#ffffff\"/>"
        },
        {
            "id": 1030,
            "name": "UnlockInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 9.9-1\"/></g>"
        },
        {
            "id": 1031,
            "name": "Upload-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"upArrow\" x1=\"0%\" y1=\"100%\" x2=\"0%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#0288d1\"/><stop offset=\"100%\" stop-color=\"#29b6f6\"/></linearGradient></defs><g><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4\" fill=\"none\" stroke=\"#78909c\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><polyline points=\"17 8 12 3 7 8\" fill=\"none\" stroke=\"url(#upArrow)\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"12\" y1=\"3\" x2=\"12\" y2=\"15\" stroke=\"url(#upArrow)\" stroke-width=\"3\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 1032,
            "name": "UploadInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><polyline points=\"17 9 12 4 7 9\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"12\" y1=\"4\" x2=\"12\" y2=\"15\"/>"
        },
        {
            "id": 1033,
            "name": "User-CheckInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"/><circle cx=\"8.5\" cy=\"7\" r=\"4\"/><polyline points=\"17 11 19 13 23 9\"/></g>"
        },
        {
            "id": 1034,
            "name": "User-MinusInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"/><circle cx=\"8.5\" cy=\"7\" r=\"4\"/><line x1=\"23\" y1=\"11\" x2=\"17\" y2=\"11\"/></g>"
        },
        {
            "id": 1035,
            "name": "User-PlusInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"/><circle cx=\"8.5\" cy=\"7\" r=\"4\"/><line x1=\"20\" y1=\"8\" x2=\"20\" y2=\"14\"/><line x1=\"23\" y1=\"11\" x2=\"17\" y2=\"11\"/></g>"
        },
        {
            "id": 1036,
            "name": "User-XInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"/><circle cx=\"8.5\" cy=\"7\" r=\"4\"/><line x1=\"18\" y1=\"8\" x2=\"23\" y2=\"13\"/><line x1=\"23\" y1=\"8\" x2=\"18\" y2=\"13\"/></g>"
        },
        {
            "id": 1037,
            "name": "UserBlockInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"10\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"8\" r=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M7 18c0-2 2-4 5-4s5 2 5 4M16 8l4 4M20 8l-4 4\"/>"
        },
        {
            "id": 1038,
            "name": "UserCircleInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"10\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"9\" r=\"2.5\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M7 18c0-2.21 2.24-4 5-4s5 1.79 5 4\"/>"
        },
        {
            "id": 1039,
            "name": "UserInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\"/><circle cx=\"12\" cy=\"7\" r=\"4\"/></g>"
        },
        {
            "id": 1040,
            "name": "UsersInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"/><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"/></g>"
        },
        {
            "id": 1041,
            "name": "Video-OffInverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M10.66 6H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10l-3.33-2.5\"/><path d=\"M16 16a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1.34\"/><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"/></g>"
        },
        {
            "id": 1042,
            "name": "VideoInverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polygon points=\"23 7 16 12 23 17 23 7\"/><rect x=\"1\" y=\"5\" width=\"15\" height=\"14\" rx=\"2\" ry=\"2\"/></g>"
        },
        {
            "id": 1043,
            "name": "VimeoInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"10\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M9 9l4 3-4 3v-6zM18 7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1\"/>"
        },
        {
            "id": 1044,
            "name": "Violin-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"vlnGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#d7ccc8\"/><stop offset=\"100%\" stop-color=\"#5d4037\"/></linearGradient></defs><g><path d=\"M12 2c-3 0-5 2-5 5v10c0 3 2 5 5 5s5-2 5-5V7c0-3-2-5-5-5z\" fill=\"url(#vlnGrad)\" stroke=\"#5d4037\" stroke-width=\"1.5\"/><path d=\"M12 7v10M10 5l4 1\" stroke=\"#3e2723\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 1045,
            "name": "Violin-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#5d4037\" rx=\"4\"/><path d=\"M13 3c-2 0-4 1-4 4v10c0 2 2 4 4 4s4-2 4-4V7c0-2-2-4-4-4z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 1046,
            "name": "VirtualRealityInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M23 11.5a1.5 1.5 0 0 1-3 0v-1a6 6 0 0 0-12 0v1a1.5 1.5 0 0 1-3 0v-1A9 9 0 0 1 23 12.5v-1z\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"9\" cy=\"13\" r=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"15\" cy=\"13\" r=\"2\"/>"
        },
        {
            "id": 1047,
            "name": "VisaInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"4\" y=\"14\" width=\"16\" height=\"2\"/>"
        },
        {
            "id": 1048,
            "name": "Volume-1Inverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"/><path d=\"M15.54 8.46a5 5 0 0 1 0 7.07\"/></g>"
        },
        {
            "id": 1049,
            "name": "Volume-2-Color",
            "category": "ui",
            "svgContent": "<g><path d=\"M11 5L6 9H2v6h4l5 4V5z\" fill=\"#78909c\"/><path d=\"M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14\" fill=\"none\" stroke=\"#29b6f6\" stroke-width=\"2\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 1050,
            "name": "Volume-2-Inverted-Color",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#29b6f6\" rx=\"4\"/><path d=\"M9 5L5 9H2v6h3l4 4V5z\" fill=\"#ffffff\"/><path d=\"M13 9c1.5 0 2.5 1 2.5 2.5s-1 2.5-2.5 2.5\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>"
        },
        {
            "id": 1051,
            "name": "Volume-2Inverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"/><path d=\"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07\"/></g>"
        },
        {
            "id": 1052,
            "name": "Volume-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"volGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#78909c\"/><stop offset=\"100%\" stop-color=\"#455a64\"/></linearGradient></defs><g><path d=\"M11 5L6 9H2v6h4l5 4V5z\" fill=\"url(#volGrad)\"/></g>"
        },
        {
            "id": 1053,
            "name": "Volume-DownInverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"/><line x1=\"21\" y1=\"12\" x2=\"15\" y2=\"12\"/></g>"
        },
        {
            "id": 1054,
            "name": "Volume-Inverted-Color",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#455a64\" rx=\"4\"/><path d=\"M12 5L7 9H4v6h3l5 4V5z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 1055,
            "name": "Volume-UpInverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"/><path d=\"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07\"/></g>"
        },
        {
            "id": 1056,
            "name": "Volume-X-Color",
            "category": "ui",
            "svgContent": "<g><path d=\"M11 5L6 9H2v6h4l5 4V5z\" fill=\"#78909c\"/><line x1=\"23\" y1=\"9\" x2=\"17\" y2=\"15\" stroke=\"#ef5350\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><line x1=\"17\" y1=\"9\" x2=\"23\" y2=\"15\" stroke=\"#ef5350\" stroke-width=\"2.5\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 1057,
            "name": "Volume-X-Inverted-Color",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#ef5350\" rx=\"4\"/><path d=\"M10 5L6 9H3v6h3l4 4V5z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 1058,
            "name": "Volume-XInverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"/><line x1=\"23\" y1=\"9\" x2=\"17\" y2=\"15\"/><line x1=\"17\" y1=\"9\" x2=\"23\" y2=\"15\"/></g>"
        },
        {
            "id": 1059,
            "name": "VolumeInverted",
            "category": "media",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"/><path d=\"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07\"/></g>"
        },
        {
            "id": 1060,
            "name": "Wallet-Color",
            "category": "finance",
            "svgContent": "<defs><linearGradient id=\"walletBody\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#8d6e63\"/><stop offset=\"100%\" stop-color=\"#4e342e\"/></linearGradient></defs><g><path d=\"M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4\" fill=\"#a1887f\"/><path d=\"M4 6v12c0 1.1.9 2 2 2h14v-8H4z\" fill=\"url(#walletBody)\"/><path d=\"M15 10h6v6h-6z\" fill=\"#5d4037\" rx=\"1\"/><circle cx=\"18\" cy=\"13\" r=\"1.5\" fill=\"#ffd54f\"/></g>"
        },
        {
            "id": 1061,
            "name": "Wallet2Inverted",
            "category": "finance",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"1\" y=\"4\" width=\"22\" height=\"16\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M1 10h22M20 10v8\"/>"
        },
        {
            "id": 1062,
            "name": "WalletInverted",
            "category": "finance",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4\"/><path d=\"M4 6v12c0 1.1.9 2 2 2h14v-8H4z\"/><circle cx=\"18\" cy=\"15\" r=\"1\"/></g>"
        },
        {
            "id": 1063,
            "name": "Wand2Inverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M15 4V2m0 2a2 2 0 1 0 0 4m0-4a2 2 0 0 1 0 4m6-11l-3.5 3.5m3.5-3.5a2 2 0 1 0-3.5 3.5m3.5-3.5a2 2 0 0 1-3.5 3.5M9 11l3.5-3.5m-3.5 3.5a2 2 0 1 1 3.5-3.5m-3.5 3.5a2 2 0 0 0 3.5-3.5m-9 1l-3.5 3.5m3.5-3.5a2 2 0 1 0-3.5 3.5m3.5-3.5a2 2 0 0 1-3.5 3.5M3 11l3.5 3.5m-3.5-3.5a2 2 0 1 1 3.5 3.5m-3.5-3.5a2 2 0 0 0 3.5 3.5m18 11l-3.5-3.5m3.5 3.5a2 2 0 1 0-3.5-3.5m3.5 3.5a2 2 0 0 1-3.5-3.5m-9-1l3.5-3.5m-3.5 3.5a2 2 0 1 1 3.5-3.5m-3.5 3.5a2 2 0 0 0 3.5-3.5\"/>"
        },
        {
            "id": 1064,
            "name": "WatchInverted",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><circle cx=\"12\" cy=\"12\" r=\"7\"/><polyline points=\"12 9 12 12 14 13\"/><path d=\"M12 5V1m0 22v-4\"/></g>"
        },
        {
            "id": 1065,
            "name": "Water-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"wtrGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#4fc3f7\"/><stop offset=\"100%\" stop-color=\"#0288d1\"/></linearGradient></defs><g><path d=\"M2 14c4-4 8 4 10 0s6-8 10 0\" fill=\"none\" stroke=\"#0288d1\" stroke-width=\"3\" stroke-linecap=\"round\"/><path d=\"M2 18c4-4 8 4 10 0s6-8 10 0\" fill=\"none\" stroke=\"#0288d1\" stroke-width=\"3\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 1066,
            "name": "Water-Drop-Color",
            "category": "general",
            "svgContent": "<defs><linearGradient id=\"drpGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#4fc3f7\"/><stop offset=\"100%\" stop-color=\"#0288d1\"/></linearGradient></defs><g><path d=\"M12 2a8 8 0 0 0-8 8c0 4 8 12 8 12s8-8 8-12a8 8 0 0 0-8-8z\" fill=\"url(#drpGrad)\" stroke=\"#0288d1\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 1067,
            "name": "Water-Drop-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#0288d1\" rx=\"4\"/><path d=\"M12 3a7 7 0 0 0-7 7c0 3 7 10 7 10s7-7 7-10a7 7 0 0 0-7-7z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 1068,
            "name": "Water-Inverted-Color",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#0288d1\" rx=\"4\"/><path d=\"M3 15c3-3 7 3 9 0s5-6 9 0\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>"
        },
        {
            "id": 1069,
            "name": "WeChatInverted",
            "category": "general",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 2C6.48 2 2 6.48 2 12c0 1.54.33 3 .9 4.32L2 22l6.26-2.36C10.6 20.97 11.29 21 12 21c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.06 0-2.09-.18-3.08-.5l-.98-.32-3.68 1.39 1.04-3.8-.32-.98C4.18 14.09 4 13.06 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z\"/>"
        },
        {
            "id": 1070,
            "name": "WhatsApp",
            "category": "brands",
            "svgContent": "<circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"currentColor\"/><path d=\"M8 14s1 2 4 3 4-1 4-1M7 7c.5-2.5 2-4 5-4 3 0 4 1.5 4.5 4\" stroke-width=\"1.5\" stroke=\"white\" stroke-linecap=\"round\"/>"
        },
        {
            "id": 1071,
            "name": "WhatsAppInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"10\" fill=\"var(--ax-bg-inverse, white)\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M8 14s1 2 4 3 4-1 4-1M7 7c.5-2.5 2-4 5-4 3 0 4 1.5 4.5 4\" stroke=\"var(--ax-bg-inverse, white)\" stroke-linecap=\"round\"/>"
        },
        {
            "id": 1072,
            "name": "Wifi-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"wifiGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#66bb6a\"/><stop offset=\"100%\" stop-color=\"#2e7d32\"/></linearGradient></defs><g fill=\"none\" stroke=\"url(#wifiGrad)\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M5 8.55a12 12 0 0 1 14 0M1.42 4.97a17 17 0 0 1 21.16 0M8.53 12.11a7 7 0 0 1 6.94 0\"/><circle cx=\"12\" cy=\"17\" r=\"1\" fill=\"#2e7d32\" stroke=\"none\"/></g>"
        },
        {
            "id": 1073,
            "name": "Wifi-Inverted-Color",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#2e7d32\" rx=\"4\"/><path d=\"M4 9a11 11 0 0 1 16 0M7 12a7 7 0 0 1 10 0\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
        },
        {
            "id": 1074,
            "name": "Wifi-Off-Color",
            "category": "ui",
            "svgContent": "<g fill=\"none\" stroke=\"#b0bec5\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M1 1l22 22\" stroke=\"#ef5350\"/><path d=\"M16.72 11.06A7 7 0 0 0 8.53 12.1M5 8.55a12 12 0 0 1 11.33-1.55\"/></g>"
        },
        {
            "id": 1075,
            "name": "Wifi-Off-Inverted-Color",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#37474f\" rx=\"4\"/><line x1=\"3\" y1=\"3\" x2=\"21\" y2=\"21\" stroke=\"#ffffff\" stroke-width=\"2\"/>"
        },
        {
            "id": 1076,
            "name": "WifiInverted",
            "category": "development",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M5 12.55a11 11 0 0 1 14.08 0\"/><path d=\"M1.42 9a16 16 0 0 1 21.16 0\"/><path d=\"M8.53 16.11a6 6 0 0 1 6.95 0\"/><line x1=\"12\" y1=\"20\" x2=\"12.01\" y2=\"20\"/></g>"
        },
        {
            "id": 1077,
            "name": "Wind-Color",
            "category": "iot",
            "svgContent": "<defs><linearGradient id=\"wndGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#e0f7fa\"/><stop offset=\"100%\" stop-color=\"#00acc1\"/></linearGradient></defs><g fill=\"none\" stroke=\"url(#wndGrad)\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M9.5 8H2m16.5 0A2.5 2.5 0 1 0 16 5.5M6 12h16M14 16h-12m17 0a2.5 2.5 0 1 1-2 4.5\"/></g>"
        },
        {
            "id": 1078,
            "name": "Wind-Inverted-Color",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#00acc1\" rx=\"4\"/><path d=\"M3 9h12M2 13h17M4 17h10\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
        },
        {
            "id": 1079,
            "name": "WindInverted",
            "category": "weather",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2\"/></g>"
        },
        {
            "id": 1080,
            "name": "Window-Color",
            "category": "iot",
            "svgContent": "<defs><linearGradient id=\"winGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#4fc3f7\"/><stop offset=\"100%\" stop-color=\"#0288d1\"/></linearGradient></defs><g><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" fill=\"url(#winGrad)\" stroke=\"#455a64\" stroke-width=\"2\"/><line x1=\"12\" y1=\"3\" x2=\"12\" y2=\"21\" stroke=\"#455a64\" stroke-width=\"2\"/><line x1=\"3\" y1=\"12\" x2=\"21\" y2=\"12\" stroke=\"#455a64\" stroke-width=\"2\"/></g>"
        },
        {
            "id": 1081,
            "name": "Window-Inverted-Color",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#0288d1\" rx=\"4\"/><rect x=\"5\" y=\"5\" width=\"6\" height=\"6\" fill=\"#ffffff\"/><rect x=\"13\" y=\"5\" width=\"6\" height=\"6\" fill=\"#ffffff\"/><rect x=\"5\" y=\"13\" width=\"6\" height=\"6\" fill=\"#ffffff\"/><rect x=\"13\" y=\"13\" width=\"6\" height=\"6\" fill=\"#ffffff\"/>"
        },
        {
            "id": 1082,
            "name": "Window-Maximize-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"wmxGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#cfd8dc\"/><stop offset=\"100%\" stop-color=\"#78909c\"/></linearGradient></defs><g><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" fill=\"none\" stroke=\"url(#wmxGrad)\" stroke-width=\"2\"/><path d=\"M3 8h18\" stroke=\"#78909c\" stroke-width=\"1.5\"/><rect x=\"6\" y=\"11\" width=\"7\" height=\"4\" fill=\"#42a5f5\"/><polygon points=\"18 10 18 13 15 10\" fill=\"#78909c\"/></g>"
        },
        {
            "id": 1083,
            "name": "Window-Maximize-Inverted-Color",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#78909c\" rx=\"4\"/><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"1\" fill=\"#ffffff\"/><rect x=\"4\" y=\"4\" width=\"16\" height=\"4\" fill=\"#78909c\"/><rect x=\"7\" y=\"11\" width=\"10\" height=\"6\" fill=\"none\" stroke=\"#78909c\" stroke-width=\"1.5\"/>"
        },
        {
            "id": 1084,
            "name": "Window-Minimize-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"wmnGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#cfd8dc\"/><stop offset=\"100%\" stop-color=\"#78909c\"/></linearGradient></defs><g><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" fill=\"none\" stroke=\"url(#wmnGrad)\" stroke-width=\"2\"/><path d=\"M3 8h18\" stroke=\"#78909c\" stroke-width=\"1.5\"/><line x1=\"6\" y1=\"15\" x2=\"12\" y2=\"15\" stroke=\"#ff7043\" stroke-width=\"2\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 1085,
            "name": "Window-Minimize-Inverted-Color",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#78909c\" rx=\"4\"/><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"1\" fill=\"#ffffff\"/><line x1=\"7\" y1=\"14\" x2=\"13\" y2=\"14\" stroke=\"#78909c\" stroke-width=\"2\"/>"
        },
        {
            "id": 1086,
            "name": "Window-Restore-Color",
            "category": "iot",
            "svgContent": "<defs><linearGradient id=\"wrGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#90caf9\"/><stop offset=\"100%\" stop-color=\"#42a5f5\"/></linearGradient></defs><g stroke=\"#42a5f5\" fill=\"none\" stroke-width=\"1.5\"><rect x=\"7\" y=\"7\" width=\"14\" height=\"14\" rx=\"1\" stroke=\"url(#wrGrad)\" stroke-width=\"2\"/><path d=\"M7 11H3v10h10v-4\" opacity=\"0.6\"/></g>"
        },
        {
            "id": 1087,
            "name": "Window-Restore-Inverted-Color",
            "category": "iot",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#42a5f5\" rx=\"4\"/><rect x=\"4\" y=\"4\" width=\"11\" height=\"11\" fill=\"#ffffff\"/><rect x=\"9\" y=\"9\" width=\"11\" height=\"11\" fill=\"#ffffff\" opacity=\"0.8\" stroke=\"#42a5f5\" stroke-width=\"1.5\"/>"
        },
        {
            "id": 1088,
            "name": "WindowMaximizeInverted",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"1\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"3\" y1=\"8\" x2=\"21\" y2=\"8\"/><polyline points=\"15 3 21 3 21 9\"/>"
        },
        {
            "id": 1089,
            "name": "WindowMinimizeInverted",
            "category": "objects",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"2\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"2\" y1=\"7\" x2=\"22\" y2=\"7\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"7\" y1=\"16\" x2=\"17\" y2=\"16\"/>"
        },
        {
            "id": 1090,
            "name": "Wine-Color",
            "category": "food",
            "svgContent": "<defs><linearGradient id=\"wineGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ff1744\"/><stop offset=\"100%\" stop-color=\"#880e4f\"/></linearGradient></defs><g><path d=\"M12 15v7M8 22h8\" stroke=\"#880e4f\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M6 3h12v6c0 3.3-2.7 6-6 6s-6-2.7-6-6V3z\" fill=\"url(#wineGrad)\"/><path d=\"M6 7h12\" stroke=\"#ffffff\" opacity=\"0.4\" stroke-width=\"1.5\"/></g>"
        },
        {
            "id": 1091,
            "name": "Wine-GlassInverted",
            "category": "food",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M8 22h8\"/><path d=\"M12 22V10\"/><path d=\"M20 10c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 2.5 1.2 4.7 3 6.1\"/></g>"
        },
        {
            "id": 1092,
            "name": "Wine-Inverted-Color",
            "category": "food",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#880e4f\" rx=\"4\"/><path d=\"M7 4h10v5c0 2.8-2.2 5-5 5s-5-2.2-5-5V4z\" fill=\"#ffffff\"/><path d=\"M12 14v6M9 20h6\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>"
        },
        {
            "id": 1093,
            "name": "WineInverted",
            "category": "food",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M21 21H3\"/><path d=\"M12 21V10\"/><path d=\"M19 10H5\"/><path d=\"M18 10L12 2 6 10z\"/></g>"
        },
        {
            "id": 1094,
            "name": "X-Circle-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"xCirc\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#e57373\"/><stop offset=\"100%\" stop-color=\"#c62828\"/></linearGradient></defs><g><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"url(#xCirc)\"/><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\" stroke=\"#ffffff\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\" stroke=\"#ffffff\" stroke-width=\"2.5\" stroke-linecap=\"round\"/></g>"
        },
        {
            "id": 1095,
            "name": "X-CircleInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"/><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"/></g>"
        },
        {
            "id": 1096,
            "name": "X-Color",
            "category": "ui",
            "svgContent": "<defs><linearGradient id=\"xGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#e57373\"/><stop offset=\"100%\" stop-color=\"#c62828\"/></linearGradient></defs><g stroke=\"url(#xGrad)\" stroke-width=\"4\" stroke-linecap=\"round\"><line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"/><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"/></g>"
        },
        {
            "id": 1097,
            "name": "XBoldInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\" /><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\" />"
        },
        {
            "id": 1098,
            "name": "XCircleInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><circle fill=\"var(--ax-bg-inverse, white)\" cx=\"12\" cy=\"12\" r=\"10\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"/><line stroke=\"var(--ax-bg-inverse, white)\" x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"/>"
        },
        {
            "id": 1099,
            "name": "XInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M4 4l16 16M20 4L4 20\" stroke=\"var(--ax-bg-inverse, white)\" stroke-linecap=\"round\"/>"
        },
        {
            "id": 1100,
            "name": "Yen-SignInverted",
            "category": "finance",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><path d=\"M12 11V2M8 11l4-4 4 4\"/><path d=\"M8 15h8\"/><path d=\"M8 19h8\"/></g>"
        },
        {
            "id": 1101,
            "name": "Youtube-Color",
            "category": "brands",
            "svgContent": "<defs><linearGradient id=\"ytGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ff4b4b\"/><stop offset=\"100%\" stop-color=\"#cc0000\"/></linearGradient></defs><g><rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"5\" fill=\"url(#ytGrad)\"/><polygon points=\"10 9 16 12 10 15\" fill=\"#ffffff\"/><path d=\"M2 9c0-2 2-3 5-3h10c3 0 5 1 5 3\" fill=\"#ffffff\" opacity=\"0.15\"/></g>"
        },
        {
            "id": 1102,
            "name": "Youtube-Inverted-Color",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#ff0000\" rx=\"4\"/><path d=\"M20 6H4a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zM10 15V9l5 3-5 3z\" fill=\"#ffffff\"/>"
        },
        {
            "id": 1103,
            "name": "YouTubeInverted",
            "category": "brands",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><rect fill=\"var(--ax-bg-inverse, white)\" x=\"2\" y=\"3\" width=\"20\" height=\"18\" rx=\"2\"/><polygon points=\"9 9 9 15 15 12 9 9\"/>"
        },
        {
            "id": 1104,
            "name": "Zap3Inverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"2\"/><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/><path stroke=\"var(--ax-bg-inverse, white)\" d=\"M12 8l0 6M15 11l-6 0\"/>"
        },
        {
            "id": 1105,
            "name": "ZapInverted",
            "category": "ui",
            "svgContent": "<rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"currentColor\" rx=\"4\"/><g stroke=\"var(--ax-bg-inverse, #ffffff)\" fill=\"none\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/></g>"
        }
    ];

if (!window.axicons) window.axicons = [];
window.axicons = window.axicons.concat(colorIcons);
