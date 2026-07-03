// Axicons Premium (Optional)
// 622 exclusive premium icons
// Load on-demand for advanced features

const premiumIcons =

[
    {
        "id": 1,
        "name": "Abstract-Nexus-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 32l64 64M32 96l64-64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/><circle cx=\"64\" cy=\"64\" r=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 2,
        "name": "Access-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"88\" r=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M52 76l44-44M84 20l24 24\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 3,
        "name": "Accordion-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"32\" width=\"80\" height=\"24\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><rect x=\"24\" y=\"72\" width=\"80\" height=\"24\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 4,
        "name": "Accounting-Ledger-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"24\" width=\"64\" height=\"80\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 40h32M48 56h32M48 72h32M48 88h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 5,
        "name": "Achievements-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#FFD600\" stroke-width=\"6\"/><path d=\"M64 32v32l24 24\" stroke=\"#FFD600\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 6,
        "name": "Action-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"32\" width=\"40\" height=\"12\" fill=\"#455A64\"/><path d=\"M12 32L20 16H44L52 32\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 7,
        "name": "Active-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"20\" r=\"10\" fill=\"#455A64\"/><path d=\"M16 54C16 44 24 36 32 36C40 36 48 44 48 54\" fill=\"#455A64\"/><circle cx=\"52\" cy=\"52\" r=\"8\" fill=\"#00E676\"/></svg>"
    },
    {
        "id": 8,
        "name": "Add-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 32v64M32 64h64\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 9,
        "name": "Adjust-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 32h80M24 64h80M24 96h80\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/><circle cx=\"72\" cy=\"32\" r=\"8\" fill=\"#00E5FF\"/><circle cx=\"44\" cy=\"64\" r=\"8\" fill=\"#00E676\"/><circle cx=\"88\" cy=\"96\" r=\"8\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 10,
        "name": "Admin-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"24\" r=\"12\" fill=\"#455A64\"/><path d=\"M16 52C16 42 24 36 32 36C40 36 48 42 48 52\" fill=\"#455A64\"/><circle cx=\"52\" cy=\"52\" r=\"8\" stroke=\"#00E5FF\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 11,
        "name": "Adobe-Premium",
        "category": "brand",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><polygon points=\"32,6 10,54 22,54 32,32 42,54 54,54\" fill=\"#FF1744\"/></g></svg>"
    },
    {
        "id": 12,
        "name": "Adventure-Compass-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 32v64M32 64h64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 13,
        "name": "Adventure-Expedition-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l48 32-16 48H32L16 48 64 16zM48 48l32 32\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 14,
        "name": "Agronomist-Premium",
        "category": "occupations",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 44L32 20L44 44H20Z\" fill=\"#00E676\"/><path d=\"M32 20V12\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 15,
        "name": "Airbnb-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l48 48-16 48H32L16 64 64 16z\" stroke=\"#FF385C\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 16,
        "name": "Airport-Terminal-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"64\" width=\"96\" height=\"32\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 64V32m-16 0h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 17,
        "name": "Airtable-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 32h64v64H32V32zM32 48h64M48 32v64M80 32v64\" stroke=\"#18BFFF\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 18,
        "name": "Alert-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M32 10L10 50H54L32 10Z\" stroke=\"#FF1744\" stroke-width=\"4\"/><path d=\"M32 26V38\" stroke=\"#455A64\" stroke-width=\"4\" stroke-linecap=\"round\"/><circle cx=\"32\" cy=\"44\" r=\"2\" fill=\"#455A64\"/></g></svg>"
    },
    {
        "id": 19,
        "name": "Algorithmic-Flow-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16v32M64 80v32M48 48l32 32M48 80l32-32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 20,
        "name": "Alien-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"32\" cy=\"32\" rx=\"24\" ry=\"16\" fill=\"#455A64\"/><circle cx=\"24\" cy=\"28\" r=\"6\" fill=\"#00E676\"/><circle cx=\"40\" cy=\"28\" r=\"6\" fill=\"#00E676\"/></svg>"
    },
    {
        "id": 21,
        "name": "Alliance-Premium",
        "category": "government",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 20H48V44H16V20Z\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M24 28H40\" stroke=\"#00E676\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 22,
        "name": "Alpha-Layer-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"16\" stroke=\"#455A64\" stroke-width=\"4\" stroke-dasharray=\"8 8\"/></svg>"
    },
    {
        "id": 23,
        "name": "Amazon-Premium",
        "category": "brand",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M12 36C18 42 30 46 42 42C48 38 52 30 52 24C44 28 32 30 20 26C16 22 14 18 16 14C20 12 28 14 36 18C44 22 52 24 56 22\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M48 34C52 38 58 40 60 38\" stroke=\"#FF1744\" stroke-width=\"4\"/></g></svg>"
    },
    {
        "id": 24,
        "name": "Amendment-Premium",
        "category": "government",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 20H52M12 32H52M12 44H32\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 25,
        "name": "American-Football-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"64\" cy=\"64\" rx=\"32\" ry=\"56\" stroke=\"#795548\" stroke-width=\"6\"/><path d=\"M64 32v64M40 64h48\" stroke=\"#FFFFFF\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 26,
        "name": "Analyst-Premium",
        "category": "occupations",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 20H52V44H12V20Z\" stroke=\"#00E5FF\" stroke-width=\"4\"/><path d=\"M20 28H44\" stroke=\"#00E5FF\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 27,
        "name": "Analytics-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"32\" width=\"10\" height=\"20\" fill=\"#455A64\"/><rect x=\"27\" y=\"20\" width=\"10\" height=\"32\" fill=\"#455A64\"/><rect x=\"42\" y=\"12\" width=\"10\" height=\"40\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 28,
        "name": "Analyze-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 96l32-48 24 24 40-48\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/><circle cx=\"24\" cy=\"96\" r=\"8\" fill=\"#455A64\"/><circle cx=\"120\" cy=\"24\" r=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 29,
        "name": "Anchor-Point-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"16\" stroke=\"#455A64\" stroke-width=\"8\"/><circle cx=\"32\" cy=\"32\" r=\"4\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 30,
        "name": "Anchor-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 10V40M16 32H48M20 32C20 44 26 50 32 50C38 50 44 44 44 32\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 31,
        "name": "Angry-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M24 22L28 26M40 22L36 26\" stroke=\"#FF1744\" stroke-width=\"4\"/><path d=\"M22 44C26 38 38 38 42 44\" stroke=\"#FF1744\" stroke-width=\"4\" stroke-linecap=\"round\"/></g></svg>"
    },
    {
        "id": 32,
        "name": "Animation-Timeline-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 64h64M48 48v32M80 48v32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 33,
        "name": "Announcement-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 20L44 12V52L20 44V20Z\" fill=\"#455A64\"/><path d=\"M20 20L12 32L20 44\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 34,
        "name": "API-Key-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 48l32 32-16 16-32-32-16 16L32 64l32-16z\" fill=\"#00E5FF\"/><circle cx=\"88\" cy=\"40\" r=\"8\" stroke=\"#00E5FF\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 35,
        "name": "API-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 48l16 32h16l16-32M56 64h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 36,
        "name": "App-Notification-Premium",
        "category": "app",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M20 44V26C20 19 25 14 32 14C39 14 44 19 44 26V44H20Z\" fill=\"#455A64\"/><path d=\"M26 50H38\" stroke=\"#00E5FF\" stroke-width=\"4\" stroke-linecap=\"round\"/><circle cx=\"32\" cy=\"20\" r=\"3\" fill=\"#FF1744\"/></g></svg>"
    },
    {
        "id": 37,
        "name": "App-Settings-Premium",
        "category": "app",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><circle cx=\"32\" cy=\"32\" r=\"12\" stroke=\"#455A64\" stroke-width=\"8\"/><circle cx=\"32\" cy=\"32\" r=\"4\" fill=\"#00E5FF\"/><path d=\"M32 6V12M32 52V58M6 32H12M52 32H58\" stroke=\"#00E676\" stroke-width=\"4\" stroke-linecap=\"round\"/></g></svg>"
    },
    {
        "id": 38,
        "name": "Apple-Music-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" fill=\"#FA2D48\"/></svg>"
    },
    {
        "id": 39,
        "name": "Apple-Premium",
        "category": "brand",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M44 20C40 20 36 22 34 26C32 22 28 20 24 20C18 20 14 24 14 32C14 42 24 54 32 54C40 54 50 42 50 32C50 24 48 20 44 20Z\" fill=\"#455A64\"/><path d=\"M38 10C38 14 36 16 32 16C32 12 36 10 38 10Z\" fill=\"#00E5FF\"/></g></svg>"
    },
    {
        "id": 40,
        "name": "Approval-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"44\" width=\"32\" height=\"8\" fill=\"#455A64\"/><rect x=\"24\" y=\"20\" width=\"16\" height=\"24\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 41,
        "name": "AR-Lens-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#00E676\" stroke-width=\"6\"/><path d=\"M64 32v64M32 64h64\" stroke=\"#00E676\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 42,
        "name": "Arc-Browser-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16c24 0 48 24 48 48s-24 48-48 48-48-24-48-48 24-48 48-48z\" stroke=\"#FF6363\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 43,
        "name": "Arc-Premium",
        "category": "shapes",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 12C32 12 52 32 52 52V12H12Z\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 44,
        "name": "Arcade-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"24\" width=\"32\" height=\"24\" rx=\"4\" fill=\"#455A64\"/><circle cx=\"32\" cy=\"20\" r=\"8\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 45,
        "name": "Architect-Premium",
        "category": "occupations",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 52H52M20 52V20L44 32V52\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 46,
        "name": "Archive-Premium",
        "category": "government",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"16\" width=\"32\" height=\"32\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M24 24H40\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 47,
        "name": "Archivist-Premium",
        "category": "occupations",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 12H44V52H20V12Z\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M28 20V44M36 20V44\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 48,
        "name": "Arena-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 44C12 32 20 24 32 24C44 24 52 32 52 44\" stroke=\"#455A64\" stroke-width=\"4\"/><ellipse cx=\"32\" cy=\"44\" rx=\"20\" ry=\"8\" fill=\"#00E676\"/></svg>"
    },
    {
        "id": 49,
        "name": "Array-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 40l-16 48M88 40l16 48M24 88h80M24 40h80\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 50,
        "name": "Art-Exhibition-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 80l16-16 16 16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 51,
        "name": "Asana-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"40\" r=\"16\" fill=\"#F06A6A\"/><circle cx=\"32\" cy=\"88\" r=\"16\" fill=\"#75C68D\"/><circle cx=\"96\" cy=\"88\" r=\"16\" fill=\"#6F6F6F\"/></svg>"
    },
    {
        "id": 52,
        "name": "Asset-Allocation-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 64l48-16M64 64l16-48M64 64V16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 53,
        "name": "Athletic-Performance-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96l32-64 32 64\" stroke=\"#00E676\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 54,
        "name": "ATM-Withdrawal-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 48v32M48 64h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 55,
        "name": "Atom-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"8\" fill=\"#00E5FF\"/><ellipse cx=\"32\" cy=\"32\" rx=\"24\" ry=\"12\" stroke=\"#455A64\" stroke-width=\"4\"/><ellipse cx=\"32\" cy=\"32\" rx=\"12\" ry=\"24\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 56,
        "name": "Attach-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12C24 12 18 18 18 26V46C18 50 22 54 26 54C30 54 34 50 34 46V22C34 18 36 16 38 16C40 16 42 18 42 22V42\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 57,
        "name": "Audible-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" fill=\"#F8991C\"/></svg>"
    },
    {
        "id": 58,
        "name": "Audience-Applaud-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 64l-16-16M80 64l16-16M64 48l16-16M64 48l-16-16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 59,
        "name": "Audio-Mute-Alt-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 48h24l24-24v80L56 80H32V48zM96 48l16 16M112 48l-16 16\" stroke=\"#FF1744\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 60,
        "name": "Audio-Mute-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 48h24l24-24v80L56 80H32V48zM96 48l16 16M112 48l-16 16\" stroke=\"#FF1744\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 61,
        "name": "Audio-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 40V32C16 20 26 10 32 10C38 10 48 20 48 32V40\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 62,
        "name": "Audio-Wave-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 64h16l16-32 16 64 16-32h16\" stroke=\"#00E5FF\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 63,
        "name": "Audit-Compliance-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 32l32 32-32 32M96 32v64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 64,
        "name": "Audit-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"12\" width=\"32\" height=\"40\" rx=\"2\" fill=\"#455A64\"/><path d=\"M24 24H40M24 34H40\" stroke=\"#FFFFFF\" stroke-width=\"4\"/><rect x=\"24\" y=\"42\" width=\"16\" height=\"4\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 65,
        "name": "Author-Premium",
        "category": "occupations",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 12H48V52H16V12Z\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M24 24H40M24 32H40\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 66,
        "name": "Authority-Premium",
        "category": "government",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"20\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M32 16V48M16 32H48\" stroke=\"#455A64\" stroke-width=\"2\"/></svg>"
    },
    {
        "id": 67,
        "name": "Auto-Scale-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 88l24-48 24 48M32 40l16 16-16 16M96 40l-16 16 16 16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 68,
        "name": "Automation-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16c24 0 40 16 40 40s-16 40-40 40-40-16-40-40M64 16v16M64 80v16M16 64h16M96 64h16\" stroke=\"#00E676\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 69,
        "name": "Avatar-Placeholder-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"56\" r=\"16\" fill=\"#455A64\"/><path d=\"M32 112c0-16 32-16 64 0\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 70,
        "name": "Aviator-Premium",
        "category": "occupations",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 32L32 12L52 32L32 52L12 32Z\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M24 32H40\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 71,
        "name": "Award-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"32\" stroke=\"#FFD600\" stroke-width=\"8\"/><path d=\"M40 16l24 24 24-24\" fill=\"#FFD600\"/></svg>"
    },
    {
        "id": 72,
        "name": "Away-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"20\" r=\"10\" fill=\"#455A64\"/><path d=\"M16 54C16 44 24 36 32 36C40 36 48 44 48 54\" fill=\"#455A64\"/><circle cx=\"52\" cy=\"52\" r=\"8\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 73,
        "name": "Axiom-System-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16L16 112h96L64 16z\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linejoin=\"round\"/><path d=\"M64 48v32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 74,
        "name": "Axis-Anchor-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12V52M12 32H52\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"32\" cy=\"32\" r=\"4\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 75,
        "name": "Backlog-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 40h64M32 64h48M32 88h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/><path d=\"M104 40v48\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 76,
        "name": "Backstage-Pass-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"32\" width=\"48\" height=\"64\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"64\" r=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 77,
        "name": "Badge-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"48\" width=\"64\" height=\"32\" rx=\"16\" fill=\"#FF1744\"/><text x=\"64\" y=\"72\" fill=\"white\" font-size=\"24\" text-anchor=\"middle\">5</text></svg>"
    },
    {
        "id": 78,
        "name": "Badminton-Shuttle-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 32l32 64H32L64 32z\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"40\" r=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 79,
        "name": "Bag-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"48\" width=\"64\" height=\"56\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 48V32c0-8.8 7.2-16 16-16s16 7.2 16 16v16\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 80,
        "name": "Balance-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 32H52\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"20\" cy=\"24\" r=\"8\" fill=\"#00E5FF\"/><circle cx=\"44\" cy=\"28\" r=\"8\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 81,
        "name": "Balance-Scale-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 64h64M64 32v64M48 32h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 82,
        "name": "Balance-Sheet-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 40h64M32 64h64M32 88h64M64 24v80\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 83,
        "name": "Balloon-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"24\" r=\"16\" fill=\"#FF1744\"/><line x1=\"32\" y1=\"40\" x2=\"32\" y2=\"54\" stroke=\"#455A64\" stroke-width=\"2\"/></svg>"
    },
    {
        "id": 84,
        "name": "Bandcamp-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" fill=\"#629AA9\"/></svg>"
    },
    {
        "id": 85,
        "name": "Bank-Building-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 104V56l40-32 40 32v48H24z\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M40 72h16v32H40V72zM72 72h16v32H72V72z\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 86,
        "name": "Bank-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 104h96M24 104V56l40-24 40 24v48M48 56h32M48 72h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 87,
        "name": "Banking-App-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"24\" width=\"48\" height=\"80\" rx=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 96h8\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 88,
        "name": "Bar-Chart-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 104V40M56 104V24M80 104V56M104 104V72\" stroke=\"#00E676\" stroke-width=\"12\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 89,
        "name": "Barcode-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 40h8M48 40h8M64 40h16M88 40h8M32 88h8M48 88h24M80 88h16M32 48v32M48 48v32M64 48v32M80 48v32M96 48v32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 90,
        "name": "Baseball-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 24l8 16M64 48l8 16M64 72l8 16\" stroke=\"#FF1744\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 91,
        "name": "Basketball-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#FF9800\" stroke-width=\"6\"/><path d=\"M64 16v96M16 64h96\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 92,
        "name": "Battery-Charging-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"44\" width=\"72\" height=\"40\" rx=\"4\" stroke=\"#00E676\" stroke-width=\"4\"/><path d=\"M64 48l-16 32h16l-16 32\" stroke=\"#00E676\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 93,
        "name": "Battery-Full-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"20\" width=\"40\" height=\"24\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"4\"/><rect x=\"16\" y=\"24\" width=\"32\" height=\"16\" fill=\"#00E676\"/></svg>"
    },
    {
        "id": 94,
        "name": "Battery-Low-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"20\" width=\"40\" height=\"24\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"4\"/><rect x=\"16\" y=\"24\" width=\"8\" height=\"16\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 95,
        "name": "Behance-Premium",
        "category": "brand",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 20H36V28H20V20Z\" fill=\"#455A64\"/><path d=\"M20 36H40V44H20V36Z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 96,
        "name": "Bell-Ring-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16c-13 0-24 11-24 24v24l-12 24h72l-12-24V40c0-13-11-24-24-24zM104 40l8-8M104 64l16-8\" stroke=\"#FF1744\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 97,
        "name": "Bezier-Curve-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96s32-64 64 0\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/><circle cx=\"32\" cy=\"96\" r=\"6\" fill=\"#455A64\"/><circle cx=\"96\" cy=\"96\" r=\"6\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 98,
        "name": "Bicycle-Touring-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"88\" r=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"88\" cy=\"88\" r=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M40 88l24-32h32M64 56h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 99,
        "name": "Billiards-Cue-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96l64-64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/><circle cx=\"96\" cy=\"32\" r=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 100,
        "name": "Binary-Pulse-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 64h16v32h16V32h16v32h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 101,
        "name": "Binary-Search-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l48 48-48 48-48-48 48-48z\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"64\" r=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 102,
        "name": "Bingo-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"20\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"32\" cy=\"32\" r=\"6\" fill=\"#00E676\"/></svg>"
    },
    {
        "id": 103,
        "name": "Binoculars-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"64\" r=\"24\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"88\" cy=\"64\" r=\"24\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 64h-8M64 64h8\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 104,
        "name": "Birdie-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12L40 44H24L32 12Z\" fill=\"#00E5FF\"/><circle cx=\"32\" cy=\"44\" r=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 105,
        "name": "Bit-Operation-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"48\" width=\"64\" height=\"32\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 56v16M80 56v16\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 106,
        "name": "Blockchain-Node-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l48 32-16 48H32L16 48 64 16z\" stroke=\"#00E5FF\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"64\" r=\"16\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 107,
        "name": "Bluetooth-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 32l32 64-32-32 32-32-32 64\" stroke=\"#00E5FF\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 108,
        "name": "Board-Meeting-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"48\" width=\"96\" height=\"32\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"40\" cy=\"64\" r=\"8\" fill=\"#455A64\"/><circle cx=\"88\" cy=\"64\" r=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 109,
        "name": "Boardgame-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"16\" width=\"32\" height=\"32\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"32\" cy=\"32\" r=\"4\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 110,
        "name": "Bolt-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10L20 34H32L24 54L44 30H32L40 10Z\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 111,
        "name": "Bonds-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"48\" width=\"64\" height=\"32\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 64h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 112,
        "name": "Book-Open-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 32l32-8v64l-32 8V32zM104 32l-32-8v64l32 8V32z\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 113,
        "name": "Book-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"12\" width=\"32\" height=\"40\" rx=\"2\" fill=\"#455A64\"/><rect x=\"20\" y=\"16\" width=\"24\" height=\"32\" fill=\"#FFFFFF\"/></svg>"
    },
    {
        "id": 114,
        "name": "Booking-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" fill=\"#003580\"/></svg>"
    },
    {
        "id": 115,
        "name": "Bookmark-Premium",
        "category": "share",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M16 10H48V54L32 40L16 54V10Z\" fill=\"#455A64\"/><circle cx=\"32\" cy=\"24\" r=\"4\" fill=\"#00E5FF\"/></g></svg>"
    },
    {
        "id": 116,
        "name": "Border-Cross-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16v96M32 48l64 32M96 48l-64 32\" stroke=\"#FF1744\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 117,
        "name": "Boss-Fight-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 32l64 64M96 32l-64 64\" stroke=\"#FF1744\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"64\" r=\"16\" stroke=\"#FF1744\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 118,
        "name": "Bowling-Ball-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"56\" cy=\"48\" r=\"6\" fill=\"#455A64\"/><circle cx=\"72\" cy=\"48\" r=\"6\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 119,
        "name": "Bowling-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"32\" cy=\"40\" rx=\"12\" ry=\"16\" fill=\"#455A64\"/><circle cx=\"32\" cy=\"20\" r=\"6\" fill=\"#455A64\"/><rect x=\"30\" y=\"26\" width=\"4\" height=\"4\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 120,
        "name": "Box-Open-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 64l16-32h64l16 32M32 64v32h80V64M48 80h48\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 121,
        "name": "Box-Plot-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 32v64M80 32v64M48 48h32v32H48zM64 32v16M64 80v16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 122,
        "name": "Box-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"12\" width=\"40\" height=\"40\" rx=\"4\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 123,
        "name": "Boxing-Gloves-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 40h32v48H48V40z\" stroke=\"#FF1744\" stroke-width=\"6\"/><path d=\"M48 88l-16 16M80 88l16 16\" stroke=\"#FF1744\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 124,
        "name": "Branch-Merge-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 32c16 0 24 8 24 24v16M40 96c16 0 24-8 24-24V56M88 64h-24\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 125,
        "name": "Brand-Apple-Premium",
        "category": "brand",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M42 12C38 12 34 14 32 18C30 14 26 12 22 12C15 12 10 18 10 28C10 42 22 56 32 56C42 56 54 42 54 28C54 18 49 12 42 12Z\" fill=\"#455A64\"/><path d=\"M38 6C38 10 35 12 32 12C32 8 35 6 38 6Z\" fill=\"#00E5FF\"/><circle cx=\"46\" cy=\"32\" r=\"3\" fill=\"#00E676\"/></g></svg>"
    },
    {
        "id": 126,
        "name": "Brand-GitHub-Premium",
        "category": "brand",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M32 6C17 6 6 17 6 32C6 44 14 55 25 59C26 59 27 58 27 57V53C27 51 26 50 25 50C20 50 18 47 18 47C17 44 15 43 15 43C13 42 15 42 15 42C17 42 18 44 18 44C20 47 23 46 24 46C24 44 25 43 26 42C21 42 16 39 16 31C16 29 17 27 18 26C18 25 17 23 18 21C20 21 22 22 23 23C25 22 28 22 30 22C32 22 34 22 36 23C38 22 40 21 42 21C42 23 41 25 41 26C42 27 43 29 43 31C43 39 38 42 33 42C34 43 35 45 35 48V57C35 58 36 59 37 59C48 55 56 44 56 32C56 17 45 6 32 6Z\" fill=\"#455A64\"/><circle cx=\"22\" cy=\"30\" r=\"2\" fill=\"#00E5FF\"/><circle cx=\"40\" cy=\"30\" r=\"2\" fill=\"#00E676\"/></g></svg>"
    },
    {
        "id": 127,
        "name": "Brand-Google-Premium",
        "category": "brand",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M58 32C58 29.5 57.8 27.2 57.4 25H32V36H47C46.5 39 44.5 44 40 47.5L50 55C56 50 58 41 58 32Z\" fill=\"#00E5FF\"/><path d=\"M32 58C39.5 58 46 55.5 50 51L40 43.5C38 45 35 46 32 46C26 46 21 42 19 36H9V43C13.5 52 22 58 32 58Z\" fill=\"#00E676\"/><path d=\"M19 36C18.5 34.5 18 33 18 32C18 31 18.5 29.5 19 28V21H9C7 25 6 30 6 32C6 34 7 39 9 43L19 36Z\" fill=\"#FF1744\"/><path d=\"M32 18C36 18 39 19.5 41 21L49 13C44 8.5 38 6 32 6C22 6 13.5 12 9 21L19 28C21 22 26 18 32 18Z\" fill=\"#455A64\"/></g></svg>"
    },
    {
        "id": 128,
        "name": "Breadcrumb-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"24\" cy=\"64\" r=\"8\" fill=\"#455A64\"/><circle cx=\"64\" cy=\"64\" r=\"8\" fill=\"#455A64\"/><circle cx=\"104\" cy=\"64\" r=\"8\" fill=\"#455A64\"/><path d=\"M32 64h24M72 64h24\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 129,
        "name": "Briefcase-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"24\" width=\"40\" height=\"28\" rx=\"2\" fill=\"#455A64\"/><rect x=\"24\" y=\"20\" width=\"16\" height=\"4\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 130,
        "name": "Briefing-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 32h48v64H40V32zM48 48h32M48 64h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 131,
        "name": "Brightness-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"24\" stroke=\"#FFD600\" stroke-width=\"6\"/><path d=\"M64 16v16M64 96v16M16 64h16M96 64h16M32 32l16 16M80 80l16 16M32 96l16-16M80 32l16-16\" stroke=\"#FFD600\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 132,
        "name": "Broadcast-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"20\" width=\"32\" height=\"24\" rx=\"4\" fill=\"#455A64\"/><circle cx=\"32\" cy=\"32\" r=\"6\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 133,
        "name": "Broadcast-Tower-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16v96M40 32l24 16 24-16M40 80l24-16 24 16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 134,
        "name": "Broken-Heart-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 54L12 30C12 20 20 12 32 18V54Z\" fill=\"#FF1744\"/><path d=\"M32 18V54L52 30C52 20 44 12 32 18Z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 135,
        "name": "Brush-Premium",
        "category": "arts",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"28\" y=\"24\" width=\"8\" height=\"32\" fill=\"#455A64\"/><path d=\"M32 24L24 12H40L32 24Z\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 136,
        "name": "Bubble-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 16H48V40C48 44 44 48 40 48H28L20 56V48H16C12 48 8 44 8 40V24C8 20 12 16 16 16Z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 137,
        "name": "Budget-Alert-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"48\" width=\"80\" height=\"48\" rx=\"8\" stroke=\"#FF1744\" stroke-width=\"6\"/><path d=\"M64 32v16M64 96v8\" stroke=\"#FF1744\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 138,
        "name": "Budget-Allocation-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16c24 0 48 24 48 48s-24 48-48 48-48-24-48-48 24-48 48-48z\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 64l48-16\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 139,
        "name": "Budget-Planner-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 64h64M64 32v64M48 48l32 32M80 48l-32 32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 140,
        "name": "Budget-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"48\" width=\"80\" height=\"48\" rx=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 32v16M48 48v8M80 48v8\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 141,
        "name": "Bug-Fix-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"24\" stroke=\"#00E676\" stroke-width=\"6\"/><path d=\"M48 64l16 16 32-32M40 40l16 16M88 40l-16 16\" stroke=\"#00E676\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 142,
        "name": "Bug-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"72\" r=\"16\" fill=\"#FF1744\"/><path d=\"M48 72H32M80 72h16M52 48l-8-16M76 48l8-16M64 56V40\" stroke=\"#FF1744\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 143,
        "name": "Build-Log-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 24h48v80H40V24zM56 40h16M56 56h32M56 72h16M56 88h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 144,
        "name": "Build-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 96h48V48l-24-24-24 24v48z\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M56 64h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 145,
        "name": "Builder-Premium",
        "category": "occupations",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 16L44 48M44 16L20 48\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 146,
        "name": "Building-Bank-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 104h80M32 104V64l32-24 32 24v40M48 64h32M48 80h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 147,
        "name": "Building-Office-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"24\" width=\"64\" height=\"80\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 40h8M48 56h8M48 72h8M72 40h8M72 56h8M72 72h8\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 148,
        "name": "Burst-Premium",
        "category": "shapes",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12L38 24H52L42 32L48 48L32 38L16 48L22 32L12 24H26L32 12Z\" fill=\"#00E676\"/></svg>"
    },
    {
        "id": 149,
        "name": "Cactus-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 54V30C24 26 28 22 32 22C36 22 40 26 40 30V54H24Z\" fill=\"#00E676\"/><path d=\"M40 34H48V30C48 26 44 22 40 22\" stroke=\"#00E676\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 150,
        "name": "Calculator-Advanced-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"24\" width=\"64\" height=\"80\" rx=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 40h32M48 60h32M48 80h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 151,
        "name": "Calculator-Basic-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"24\" width=\"64\" height=\"80\" rx=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 48h32M48 64h32M48 80h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 152,
        "name": "Calculator-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"24\" width=\"64\" height=\"80\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 40h32M48 56h32M48 72h32M48 88h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 153,
        "name": "Calendar-Check-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"24\" width=\"80\" height=\"80\" rx=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 64l16 16 32-32\" stroke=\"#00E676\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 154,
        "name": "Calendar-Day-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M32 48h64M64 48v48\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 155,
        "name": "Calendar-Premium",
        "category": "app",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><rect x=\"12\" y=\"16\" width=\"40\" height=\"36\" rx=\"4\" fill=\"#455A64\"/><rect x=\"12\" y=\"16\" width=\"40\" height=\"10\" fill=\"#FF1744\"/><circle cx=\"22\" cy=\"34\" r=\"3\" fill=\"#00E5FF\"/><circle cx=\"32\" cy=\"34\" r=\"3\" fill=\"#00E5FF\"/></g></svg>"
    },
    {
        "id": 156,
        "name": "Call-Missed-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 32l48 48M88 32l-48 48M32 96l16 16 16-16-16-16-16 16z\" stroke=\"#FF1744\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 157,
        "name": "Calligraphy-Premium",
        "category": "arts",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 52L24 40L44 20L52 12L44 20L32 40L12 52Z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 158,
        "name": "Camcorder-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"24\" width=\"40\" height=\"20\" rx=\"4\" fill=\"#455A64\"/><rect x=\"48\" y=\"28\" width=\"8\" height=\"12\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 159,
        "name": "Camera-Flash-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"40\" width=\"80\" height=\"64\" rx=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"72\" r=\"20\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M96 40l-16 16\" stroke=\"#FFD600\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 160,
        "name": "Camera-Premium",
        "category": "app",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><rect x=\"10\" y=\"16\" width=\"44\" height=\"32\" rx=\"4\" fill=\"#455A64\"/><circle cx=\"32\" cy=\"32\" r=\"10\" fill=\"#00E5FF\"/></g></svg>"
    },
    {
        "id": 161,
        "name": "Campaign-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 32v64M64 32L32 64l32 32M96 64H64\" stroke=\"#FF1744\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 162,
        "name": "Camping-Tent-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 32l48 64H16L64 32z\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 163,
        "name": "Canvas-Premium",
        "category": "arts",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"12\" width=\"32\" height=\"24\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M24 36L12 52M40 36L52 52\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 164,
        "name": "Capital-Growth-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96l64-64M80 96H96V80\" stroke=\"#00E676\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 165,
        "name": "Capital-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 24H44V52C44 54 42 56 40 56H24C22 56 20 54 20 52V24Z\" fill=\"#00E676\"/><circle cx=\"32\" cy=\"24\" r=\"8\" stroke=\"#00E676\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 166,
        "name": "Capturer-Premium",
        "category": "occupations",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"24\" width=\"32\" height=\"24\" rx=\"4\" fill=\"#455A64\"/><circle cx=\"32\" cy=\"36\" r=\"8\" fill=\"#FFFFFF\"/></svg>"
    },
    {
        "id": 167,
        "name": "Card-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><rect x=\"6\" y=\"16\" width=\"52\" height=\"32\" rx=\"4\" fill=\"#455A64\"/><rect x=\"6\" y=\"22\" width=\"52\" height=\"6\" fill=\"#FF1744\"/></g></svg>"
    },
    {
        "id": 168,
        "name": "Cards-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"16\" width=\"32\" height=\"40\" rx=\"2\" fill=\"#455A64\"/><rect x=\"20\" y=\"20\" width=\"32\" height=\"40\" rx=\"2\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 169,
        "name": "Cart-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 32h16l16 48h48l16-32H40\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"56\" cy=\"104\" r=\"8\" fill=\"#455A64\"/><circle cx=\"88\" cy=\"104\" r=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 170,
        "name": "Cash-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"20\" width=\"40\" height=\"24\" rx=\"2\" fill=\"#00E676\"/><path d=\"M32 20V44M20 20L52 44\" stroke=\"#FFFFFF\" stroke-width=\"2\"/></svg>"
    },
    {
        "id": 171,
        "name": "Catch-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 52L40 24L52 36\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 172,
        "name": "CDN-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 80a24 24 0 010-48h8a24 24 0 0148 0h8a24 24 0 010 48H40zM64 48v32M48 64h32\" stroke=\"#00E5FF\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 173,
        "name": "Ceramic-Premium",
        "category": "arts",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 16C20 12 24 8 32 8C40 8 44 12 44 16V24L52 32V44H12V32L20 24V16Z\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 174,
        "name": "Champion-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 16H48V24C48 32 40 40 32 40C24 40 16 32 16 24V16Z\" fill=\"#FF1744\"/><path d=\"M12 16L8 8H56L52 16\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 175,
        "name": "Character-Customization-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"40\" r=\"24\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 96l16-16 16 16M64 80v32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 176,
        "name": "Chart-Bar-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"64\" width=\"20\" height=\"40\" fill=\"#00E676\"/><rect x=\"54\" y=\"40\" width=\"20\" height=\"64\" fill=\"#00E676\"/><rect x=\"84\" y=\"24\" width=\"20\" height=\"80\" fill=\"#00E676\"/></svg>"
    },
    {
        "id": 177,
        "name": "Chart-Pie-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#00E676\" stroke-width=\"6\"/><path d=\"M64 64V16c26.5 0 48 21.5 48 48H64z\" fill=\"#00E676\"/><path d=\"M64 64l32-36\" stroke=\"#FFFFFF\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 178,
        "name": "Chat-Dots-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 32h80v56H56l-16 12V32z\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"48\" cy=\"60\" r=\"4\" fill=\"#455A64\"/><circle cx=\"64\" cy=\"60\" r=\"4\" fill=\"#455A64\"/><circle cx=\"80\" cy=\"60\" r=\"4\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 179,
        "name": "Chat-Group-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 40h64v56H56l-16 12V40z\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 64h32M48 80h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 180,
        "name": "Chat-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 16H48V40C48 44 44 48 40 48H28L20 56V48H16C12 48 8 44 8 40V24C8 20 12 16 16 16Z\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 181,
        "name": "Check-Circle-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#00E676\" stroke-width=\"6\"/><path d=\"M48 64l12 12 24-24\" stroke=\"#00E676\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 182,
        "name": "Check-Double-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 64l16 16 32-32M56 80l16 16 32-48\" stroke=\"#00E676\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 183,
        "name": "Check-List-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 32h64M40 64h64M40 96h64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/><path d=\"M24 32l8 8 16-16\" stroke=\"#00E676\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 184,
        "name": "Check-Payment-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"40\" width=\"80\" height=\"48\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M40 56h48M40 72h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 185,
        "name": "Check-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M16 32L28 44L48 20\" stroke=\"#00E676\" stroke-width=\"8\" stroke-linecap=\"round\"/></g></svg>"
    },
    {
        "id": 186,
        "name": "Checkbox-Checked-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" rx=\"4\" fill=\"#00E676\"/><path d=\"M48 64l16 16 32-32\" stroke=\"#FFFFFF\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 187,
        "name": "Checkbox-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"12\" width=\"40\" height=\"40\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M20 32L30 42L44 22\" stroke=\"#00E676\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 188,
        "name": "Chess-Piece-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 32c-16 0-16 16 0 16s16-16 0-16zM48 80h32M40 96h48\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 189,
        "name": "Chess-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 52H40L36 36L44 28C44 16 32 12 28 12C20 12 16 20 16 28L24 52Z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 190,
        "name": "Chevron-Down-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 48l32 32 32-32\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 191,
        "name": "Chevron-Left-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M80 32L48 64l32 32\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 192,
        "name": "Chevron-Premium",
        "category": "shapes",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 24L32 40L48 24\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 193,
        "name": "Chevron-Right-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 32l32 32-32 32\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 194,
        "name": "Chevron-Up-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 80l32-32 32 32\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 195,
        "name": "CI-CD-Pipeline-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 64h80M40 48l16 16-16 16M88 48l-16 16 16 16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 196,
        "name": "Cinema-Premium",
        "category": "arts",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"20\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"32\" cy=\"32\" r=\"4\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 197,
        "name": "Cinema-Projector-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 40h64v48H32V40z\"/><circle cx=\"48\" cy=\"64\" r=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"80\" cy=\"64\" r=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 198,
        "name": "Cipher-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"24\" width=\"32\" height=\"24\" rx=\"4\" stroke=\"#FF1744\" stroke-width=\"4\"/><path d=\"M24 24V16C24 12 28 8 32 8C36 8 40 12 40 16V24\" stroke=\"#FF1744\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 199,
        "name": "Citizen-Portal-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"48\" r=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M32 112v-16c0-24 32-32 32-32s32 8 32 32v16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 200,
        "name": "Citizenship-Office-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 48l16 16 32-32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 201,
        "name": "City-Growth-Report-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96l32-48 32 32 32-64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 202,
        "name": "City-Hall-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 104V56l40-32 40 32v48H24z\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M56 104V72h16v32\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 203,
        "name": "City-Infrastructure-Map-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M32 64h64M64 32v64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-dasharray=\"4 4\"/></svg>"
    },
    {
        "id": 204,
        "name": "City-Transportation-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96h64M48 64l16-16 16 16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 205,
        "name": "Civic-Engagement-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"32\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 32v64M32 64h64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 206,
        "name": "Civic-Premium",
        "category": "government",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12L52 24V40L32 52L12 40V24L32 12Z\" fill=\"#00E5FF\"/><circle cx=\"32\" cy=\"32\" r=\"8\" fill=\"#FFFFFF\"/></svg>"
    },
    {
        "id": 207,
        "name": "Clapper-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"24\" width=\"40\" height=\"28\" rx=\"2\" fill=\"#455A64\"/><path d=\"M12 24L20 12H44L52 24\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 208,
        "name": "Clear-Cache-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 48l32 32M80 48l-32 32\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 209,
        "name": "Climbing-Hook-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 32v64c0 16-32 16-32 0V64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 210,
        "name": "Clock-Alarm-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"40\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 24v24l16 16M32 24l-8-8M96 24l8-8\" stroke=\"#FF1744\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 211,
        "name": "Clock-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><line x1=\"32\" y1=\"32\" x2=\"32\" y2=\"20\" stroke=\"#455A64\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"32\" y1=\"32\" x2=\"42\" y2=\"32\" stroke=\"#00E5FF\" stroke-width=\"4\" stroke-linecap=\"round\"/></g></svg>"
    },
    {
        "id": 212,
        "name": "Close-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 40l48 48M88 40l-48 48\" stroke=\"#FF1744\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 213,
        "name": "Cloud-Download-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 80a24 24 0 010-48h8a24 24 0 0148 0h8a24 24 0 010 48H40zM64 56v24M56 72l8 8 8-8\" stroke=\"#00E5FF\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 214,
        "name": "Cloud-Gaming-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 48c0-16 16-16 32 0s16 16 32 0\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/><rect x=\"32\" y=\"64\" width=\"64\" height=\"32\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 215,
        "name": "Cloud-Premium",
        "category": "app",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M20 44C14 44 10 40 10 34C10 28 16 24 20 24C22 18 28 14 36 14C44 14 50 20 50 28C54 28 58 32 58 36C58 40 54 44 50 44H20Z\" fill=\"#455A64\"/></g></svg>"
    },
    {
        "id": 216,
        "name": "Cloud-Rain-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M96 72c0-13.2-10.8-24-24-24-7.6 0-14.4 3.6-18.8 9.2C50.4 54.4 46.4 54 42 54c-11 0-20 9-20 20s9 20 20 20h54c8.8 0 16-7.2 16-16s-7.2-16-16-16z\" stroke=\"#00E5FF\" stroke-width=\"4\"/><path d=\"M48 88v16M72 88v16M96 88v16\" stroke=\"#00E5FF\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 217,
        "name": "Cloud-Sync-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 40C14 40 10 36 10 30C10 24 14 20 20 20C22 14 28 10 34 10C42 10 48 16 48 24C52 24 54 28 54 32C54 36 50 40 46 40H32\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M32 50C28 50 24 48 24 44M40 44C40 48 36 50 32 50\" stroke=\"#00E676\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 218,
        "name": "Cloud-Upload-Premium",
        "category": "app",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 48C14 48 10 44 10 38C10 32 16 28 20 28C22 22 28 18 36 18C44 18 50 24 50 32C54 32 58 36 58 40C58 44 54 48 50 48H20Z\" fill=\"#455A64\"/><path d=\"M36 44V26M36 26L30 32M36 26L42 32\" stroke=\"#00E676\" stroke-width=\"4\" stroke-linecap=\"round\"/></g></svg>"
    },
    {
        "id": 219,
        "name": "Cloudflare-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 64c0-16 16-32 32-32s32 16 32 32-16 32-32 32-32-16-32-32z\" fill=\"#F38020\"/></svg>"
    },
    {
        "id": 220,
        "name": "Clown-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"22\" cy=\"24\" r=\"3\" fill=\"#FF1744\"/><circle cx=\"42\" cy=\"24\" r=\"3\" fill=\"#FF1744\"/><circle cx=\"32\" cy=\"32\" r=\"4\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 221,
        "name": "Code-Branch-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"8\" fill=\"#455A64\"/><circle cx=\"32\" cy=\"96\" r=\"8\" fill=\"#455A64\"/><path d=\"M32 40v48M64 64h16a16 16 0 0016-16V32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 222,
        "name": "Code-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 32l-24 32 24 32M88 32l24 32-24 32M72 24l-16 80\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 223,
        "name": "Code-Snippet-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 40l-16 24 16 24M88 40l16 24-16 24\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 224,
        "name": "Coffee-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"24\" width=\"32\" height=\"28\" rx=\"4\" fill=\"#455A64\"/><path d=\"M48 30C56 30 56 40 48 40\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 225,
        "name": "Coin-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"32\" stroke=\"#00E676\" stroke-width=\"8\"/><path d=\"M64 48v32M52 56h24M52 72h24\" stroke=\"#00E676\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 226,
        "name": "Collapse-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 48V32h16M96 48V32H80M32 80v16h16M96 80v16H80\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 227,
        "name": "Color-Palette-Premium",
        "category": "arts",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M52 32C52 43.0457 43.0457 52 32 52C20.9543 52 12 43.0457 12 32C12 20.9543 20.9543 12 32 12C37.5228 12 42 16.4772 42 22C42 24.7614 39.7614 27 37 27C35.8954 27 35 26.1046 35 25C35 24.4477 35.4477 24 36 24C36.5523 24 37 23.5523 37 23C37 21.8954 36.1046 21 35 21C33.8954 21 33 21.8954 33 23C33 24.1046 33.8954 25 35 25\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 228,
        "name": "Color-Picker-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 88l48-48M32 104l24-8L40 88z\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/><circle cx=\"88\" cy=\"40\" r=\"16\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 229,
        "name": "Comedy-Club-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 40c0 24 16 32 48 0\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 230,
        "name": "Comment-Add-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 32h80v56H56L40 104V88H24V32zM64 48v32M48 64h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 231,
        "name": "Comment-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 32h64v52H48l-16 12V32z\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 232,
        "name": "Commit-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"24\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M32 64h8M88 64h8\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 233,
        "name": "Commodity-Trading-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96l24-48 24 24 24-48\" stroke=\"#FF9800\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 234,
        "name": "Community-Center-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"48\" cy=\"64\" r=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"80\" cy=\"64\" r=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 48v32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 235,
        "name": "Compass-Needle-North-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 24l16 40-16-8-16 8 16-40z\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 236,
        "name": "Compass-Needle-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 24L88 64 64 40 40 64z\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 237,
        "name": "Compass-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M32 10V54M10 32H54\" stroke=\"#455A64\" stroke-width=\"2\"/><polygon points=\"32,20 36,32 32,28 28,32\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 238,
        "name": "Competitor-Premium",
        "category": "occupations",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"20\" r=\"8\" fill=\"#455A64\"/><path d=\"M32 28V44M20 36L32 28L44 36\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 239,
        "name": "Compiler-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 32l48 32-48 32V32z\" fill=\"#455A64\"/><path d=\"M32 112h64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 240,
        "name": "Compliance-Premium",
        "category": "government",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 24L32 40L48 16\" stroke=\"#00E676\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 241,
        "name": "Compute-Loop-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12C44 12 52 20 52 32C52 44 44 52 32 52C20 52 12 44 12 32C12 20 20 12 32 12Z\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M32 20V32L40 40\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 242,
        "name": "Concentric-Ring-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"64\" r=\"24\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 243,
        "name": "Concert-Lights-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l32 96H32L64 16z\" fill=\"#FFD600\"/><path d=\"M64 16l32 96H32L64 16z\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 244,
        "name": "Concierge-Desk-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 96h80M40 96V48l48-16v64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 245,
        "name": "Configure-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"64\" r=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 246,
        "name": "Connect-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 40C12 28 20 20 32 20C44 20 52 28 52 40\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"32\" cy=\"32\" r=\"8\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 247,
        "name": "Console-Controller-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 64c0-24 32-32 80 0\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"48\" cy=\"64\" r=\"8\" fill=\"#455A64\"/><circle cx=\"80\" cy=\"64\" r=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 248,
        "name": "Console-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"12\" width=\"40\" height=\"40\" rx=\"4\" fill=\"#455A64\"/><rect x=\"20\" y=\"20\" width=\"24\" height=\"24\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 249,
        "name": "Contact-Book-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"24\" width=\"64\" height=\"80\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"56\" r=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 96c0-16 16-16 32 0\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 250,
        "name": "Container-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" rx=\"4\" stroke=\"#00E676\" stroke-width=\"6\"/><path d=\"M32 48h64M32 80h64\" stroke=\"#00E676\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 251,
        "name": "Container-Registry-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 48h32M48 64h32M48 80h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/><circle cx=\"80\" cy=\"80\" r=\"8\" fill=\"#00E676\"/></svg>"
    },
    {
        "id": 252,
        "name": "Content-Library-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 48h32M48 64h32M48 80h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 253,
        "name": "Contract-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"12\" width=\"32\" height=\"40\" rx=\"2\" fill=\"#455A64\"/><path d=\"M24 20H40M24 30H40M24 40H32\" stroke=\"#FFFFFF\" stroke-width=\"2\"/><path d=\"M36 48L40 52L48 44\" stroke=\"#00E676\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 254,
        "name": "Contrast-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 16v96c26 0 48-22 48-48s-22-48-48-48z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 255,
        "name": "Cook-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"40\" r=\"10\" fill=\"#455A64\"/><path d=\"M24 16H40V24H24V16Z\" fill=\"#FFFFFF\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 256,
        "name": "Cool-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><rect x=\"18\" y=\"22\" width=\"12\" height=\"6\" fill=\"#455A64\"/><rect x=\"34\" y=\"22\" width=\"12\" height=\"6\" fill=\"#455A64\"/><path d=\"M24 40C28 44 36 44 40 40\" stroke=\"#00E5FF\" stroke-width=\"4\" stroke-linecap=\"round\"/></g></svg>"
    },
    {
        "id": 257,
        "name": "Core-Density-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"8\" fill=\"#455A64\"/><circle cx=\"32\" cy=\"32\" r=\"20\" stroke=\"#455A64\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/></svg>"
    },
    {
        "id": 258,
        "name": "Core-Essence-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"32\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"64\" r=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"64\" r=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 259,
        "name": "Corporate-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"16\" width=\"32\" height=\"36\" fill=\"#455A64\"/><rect x=\"20\" y=\"24\" width=\"8\" height=\"8\" fill=\"#FFFFFF\"/><rect x=\"36\" y=\"24\" width=\"8\" height=\"8\" fill=\"#FFFFFF\"/></svg>"
    },
    {
        "id": 260,
        "name": "Counsel-Premium",
        "category": "occupations",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12L52 24V40L32 52L12 40V24L32 12Z\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M24 32H40\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 261,
        "name": "Court-Gavel-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 64h64M48 64V32h32v32M48 80h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 262,
        "name": "Court-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"32\" cy=\"24\" rx=\"16\" ry=\"20\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M32 44V56\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 263,
        "name": "Cowboy-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><rect x=\"12\" y=\"14\" width=\"40\" height=\"8\" fill=\"#455A64\"/><circle cx=\"22\" cy=\"30\" r=\"3\" fill=\"#455A64\"/><circle cx=\"42\" cy=\"30\" r=\"3\" fill=\"#455A64\"/><path d=\"M22 42C26 46 38 46 42 42\" stroke=\"#455A64\" stroke-width=\"4\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 264,
        "name": "CPU-Chip-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" rx=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 16v16M64 96v16M16 64h16M96 64h16\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 265,
        "name": "Creative-Cloud-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"32\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M40 64h48\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 266,
        "name": "Creative-Premium",
        "category": "occupations",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 48L24 20L40 28L48 16L56 24L44 36L48 52H16Z\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 267,
        "name": "Creator-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"20\" r=\"10\" fill=\"#455A64\"/><path d=\"M20 40H44L40 60H24L20 40Z\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 268,
        "name": "Credit-Card-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"40\" width=\"80\" height=\"48\" rx=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M24 56h80\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 269,
        "name": "Credit-Score-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 64l16 16 32-32\" stroke=\"#00E676\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 270,
        "name": "Cricket-Bat-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M80 16l32 32-48 64-32-32L80 16z\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 271,
        "name": "Crop-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 80H16V16h64v16M96 48v64H32V96\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 272,
        "name": "Crop-Rotate-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 32h48v48M32 96V48h48\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/><path d=\"M80 80l16 16-16 16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 273,
        "name": "Cross-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M20 20L44 44M44 20L20 44\" stroke=\"#FF1744\" stroke-width=\"8\" stroke-linecap=\"round\"/></g></svg>"
    },
    {
        "id": 274,
        "name": "Crowd-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"16\" cy=\"24\" r=\"6\" fill=\"#455A64\"/><circle cx=\"32\" cy=\"24\" r=\"6\" fill=\"#455A64\"/><circle cx=\"48\" cy=\"24\" r=\"6\" fill=\"#455A64\"/><path d=\"M8 56C8 44 16 36 24 36C32 36 40 44 40 56M24 56C24 44 32 36 40 36C48 36 56 44 56 56\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 275,
        "name": "Crowdfunding-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"48\" r=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M32 112v-16c0-24 32-32 32-32s32 8 32 32v16M96 80h16M104 72v16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 276,
        "name": "Crown-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 44L16 20L28 32L32 10L36 32L48 20L54 44H10Z\" fill=\"#00E676\"/></svg>"
    },
    {
        "id": 277,
        "name": "Cruise-Ship-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 80h80l-8-16H32l-8 16zM48 64V48h32v16\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 278,
        "name": "Crying-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"22\" cy=\"24\" r=\"3\" fill=\"#455A64\"/><circle cx=\"42\" cy=\"24\" r=\"3\" fill=\"#455A64\"/><path d=\"M22 44C26 38 38 38 42 44\" stroke=\"#FF1744\" stroke-width=\"4\" stroke-linecap=\"round\"/><path d=\"M20 30V40M44 30V40\" stroke=\"#00E5FF\" stroke-width=\"2\"/></g></svg>"
    },
    {
        "id": 279,
        "name": "Crypto-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l48 48-48 48-48-48 48-48z\" stroke=\"#00E676\" stroke-width=\"6\"/><path d=\"M64 40v48\" stroke=\"#00E676\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 280,
        "name": "Crypto-Wallet-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"40\" width=\"64\" height=\"48\" rx=\"8\" stroke=\"#FF9800\" stroke-width=\"6\"/><circle cx=\"56\" cy=\"64\" r=\"8\" fill=\"#FF9800\"/></svg>"
    },
    {
        "id": 281,
        "name": "Culinary-Premium",
        "category": "occupations",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 24C20 16 28 12 32 12C36 12 44 16 44 24H20Z\" fill=\"#455A64\"/><rect x=\"24\" y=\"28\" width=\"16\" height=\"24\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 282,
        "name": "Cultural-Heritage-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96V48l32-16 32 16v48M64 96V64\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 283,
        "name": "Currency-Dollar-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16v96M88 40c0-12-16-16-24-16-12 0-24 4-24 16 0 12 16 16 24 16 8 0 24 4 24 16 0 12-12 16-24 16-12 0-24-8-24-16\" stroke=\"#00E676\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 284,
        "name": "Currency-Exchange-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 32l32 32-32 32M80 96L48 64l32-32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 285,
        "name": "Currency-Local-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"32\" stroke=\"#FFD600\" stroke-width=\"6\"/><path d=\"M64 40v48M48 64h32\" stroke=\"#FFD600\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 286,
        "name": "Cursor-Pointer-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 24l16 72 20-32 32-8L40 24z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 287,
        "name": "Cursor-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 24l16 72 20-32 32-8L40 24z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 288,
        "name": "Curtains-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"12\" width=\"20\" height=\"40\" fill=\"#FF1744\"/><rect x=\"32\" y=\"12\" width=\"20\" height=\"40\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 289,
        "name": "Customer-Support-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 88V64a32 32 0 0164 0v24M32 88v16h16V88M96 88v16h-16V88\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 290,
        "name": "Cycling-Helmet-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 64c0-32 32-48 64-48v48H32z\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 291,
        "name": "Dance-Performance-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 32c16-16 32-16 48 0s32 16 48 0\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 292,
        "name": "Dark-Mode-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16a48 48 0 000 96 48 48 0 010-96z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 293,
        "name": "Darts-Game-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"64\" r=\"24\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"64\" r=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 294,
        "name": "Dashboard-Config-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 32h64v64H32V32zM48 48h32M48 64h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 295,
        "name": "Dashboard-Metrics-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96l24-24 24 24 24-48\" stroke=\"#00E676\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 296,
        "name": "Dashboard-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"12\" width=\"40\" height=\"40\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M20 20H32V32H20V20Z\" fill=\"#00E5FF\"/><path d=\"M36 20H44V44H36V20Z\" fill=\"#00E676\"/><path d=\"M20 36H32V44H20V36Z\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 297,
        "name": "Data-Bucket-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 32h80l-16 64H40L24 32z\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M40 32l8 16M88 32l-8 16\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 298,
        "name": "Data-Center-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"24\" width=\"64\" height=\"80\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 40h32M48 64h32M48 88h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 299,
        "name": "Data-Stream-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 48c16 0 24 16 40 16s24-16 40-16M24 80c16 0 24 16 40 16s24-16 40-16\" stroke=\"#00E5FF\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 300,
        "name": "Data-Topology-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"8\" fill=\"#455A64\"/><circle cx=\"96\" cy=\"32\" r=\"8\" fill=\"#455A64\"/><circle cx=\"64\" cy=\"96\" r=\"8\" fill=\"#455A64\"/><path d=\"M32 32l32 64M96 32l-32 64M32 32h64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 301,
        "name": "Data-Transfer-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 56h64M72 32l24 24-24 24M96 72h-64M56 96L32 72l24-24\" stroke=\"#00E676\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 302,
        "name": "Database-Add-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"64\" cy=\"32\" rx=\"40\" ry=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M24 32v64c0 8 18 16 40 16s40-8 40-16V32M64 88v16M56 96h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 303,
        "name": "Database-Delete-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"64\" cy=\"32\" rx=\"40\" ry=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M24 32v64c0 8 18 16 40 16s40-8 40-16V32M56 96l16 16M72 96l-16 16\" stroke=\"#FF1744\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 304,
        "name": "Database-Locked-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"64\" cy=\"32\" rx=\"40\" ry=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M24 32v64c0 8 18 16 40 16s40-8 40-16V32M96 96v-16a16 16 0 00-32 0v16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 305,
        "name": "Database-Premium",
        "category": "app",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"32\" cy=\"14\" rx=\"20\" ry=\"8\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M12 14V50C12 54 22 58 32 58C42 58 52 54 52 50V14\" stroke=\"#455A64\" stroke-width=\"4\"/><ellipse cx=\"32\" cy=\"50\" rx=\"20\" ry=\"8\" stroke=\"#00E5FF\" stroke-width=\"4\"/></g></svg>"
    },
    {
        "id": 306,
        "name": "Database-Sync-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"64\" cy=\"32\" rx=\"40\" ry=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M24 32v64c0 8 18 16 40 16s40-8 40-16V32M56 80l16-16 16 16M72 80V64M56 48l16 16 16-16M72 48v16\" stroke=\"#00E676\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 307,
        "name": "Date-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"16\" width=\"40\" height=\"40\" rx=\"4\" fill=\"#455A64\"/><rect x=\"12\" y=\"16\" width=\"40\" height=\"12\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 308,
        "name": "Deal-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 40L32 32L24 24M40 32L52 20M32 32L40 40\" stroke=\"#455A64\" stroke-width=\"4\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 309,
        "name": "Debt-Management-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 32l64 64M96 32l-64 64\" stroke=\"#FF1744\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 310,
        "name": "Debug-Premium",
        "category": "system",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><circle cx=\"32\" cy=\"32\" r=\"16\" stroke=\"#455A64\" stroke-width=\"4\"/><line x1=\"32\" y1=\"12\" x2=\"32\" y2=\"20\" stroke=\"#FF1744\" stroke-width=\"4\"/><circle cx=\"32\" cy=\"32\" r=\"4\" fill=\"#00E5FF\"/></g></svg>"
    },
    {
        "id": 311,
        "name": "Deck-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"16\" width=\"32\" height=\"40\" rx=\"2\" fill=\"#FFFFFF\" stroke=\"#455A64\" stroke-width=\"2\"/><path d=\"M32 24L36 32L32 40L28 32L32 24Z\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 312,
        "name": "DeFi-Protocol-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 32h64v64H32V32zM64 32v64M32 64h64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 313,
        "name": "Delegation-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 64h32M64 48l16 16-16 16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/><circle cx=\"48\" cy=\"64\" r=\"8\" fill=\"#455A64\"/><circle cx=\"88\" cy=\"64\" r=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 314,
        "name": "Delete-All-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 32l64 64M96 32L32 96M40 88l16 16M72 88l16 16\" stroke=\"#FF1744\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 315,
        "name": "Delete-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"20\" width=\"24\" height=\"32\" fill=\"#455A64\"/><rect x=\"16\" y=\"12\" width=\"32\" height=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 316,
        "name": "Dependency-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"8\" fill=\"#455A64\"/><path d=\"M64 32v24M64 72v24M48 64h8M72 64h8\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 317,
        "name": "Deploy-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"24\" width=\"12\" height=\"12\" fill=\"#455A64\"/><rect x=\"26\" y=\"24\" width=\"12\" height=\"12\" fill=\"#00E676\"/><rect x=\"40\" y=\"24\" width=\"12\" height=\"12\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 318,
        "name": "Destination-Pin-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16c-16 0-32 16-32 32 0 32 32 64 32 64s32-32 32-64c0-16-16-32-32-32z\" stroke=\"#FF1744\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"48\" r=\"8\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 319,
        "name": "Diagonal-Premium",
        "category": "shapes",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M44 12L20 52\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 320,
        "name": "Diamond-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 10L10 24L32 54L54 24L32 10Z\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 321,
        "name": "Dice-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"12\" width=\"40\" height=\"40\" rx=\"4\" fill=\"#455A64\"/><circle cx=\"24\" cy=\"24\" r=\"4\" fill=\"#FFFFFF\"/><circle cx=\"40\" cy=\"40\" r=\"4\" fill=\"#FFFFFF\"/></svg>"
    },
    {
        "id": 322,
        "name": "Digital-Art-Premium",
        "category": "arts",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"20\" width=\"8\" height=\"8\" fill=\"#00E5FF\"/><rect x=\"28\" y=\"28\" width=\"8\" height=\"8\" fill=\"#00E5FF\"/><rect x=\"36\" y=\"36\" width=\"8\" height=\"8\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 323,
        "name": "Digital-Canvas-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 48l32 32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 324,
        "name": "Digital-Government-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 48h32M48 64h32M48 80h16\" stroke=\"#00E5FF\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 325,
        "name": "Digital-Nomad-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"48\" width=\"64\" height=\"40\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M56 64h16M56 80h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 326,
        "name": "Dimension-Shift-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"48\" height=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><rect x=\"48\" y=\"48\" width=\"48\" height=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 327,
        "name": "Director-Premium",
        "category": "occupations",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12V52M12 20H52M12 44H52\" stroke=\"#FF1744\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 328,
        "name": "Discord-Alt-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M96 32c-16-8-32-8-48 0-8 8-16 24-16 48 8 16 24 24 40 24 16 0 32-8 40-24 0-24-8-40-16-48z\" fill=\"#5865F2\"/><circle cx=\"56\" cy=\"64\" r=\"6\" fill=\"#FFF\"/><circle cx=\"80\" cy=\"64\" r=\"6\" fill=\"#FFF\"/></svg>"
    },
    {
        "id": 329,
        "name": "Discord-Premium",
        "category": "social",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M48 12H16C12 12 10 16 10 20V44C10 48 12 52 16 52H44L40 46L46 40L40 34L46 28L40 22L48 12Z\" fill=\"#455A64\"/><circle cx=\"22\" cy=\"32\" r=\"4\" fill=\"#00E5FF\"/><circle cx=\"34\" cy=\"32\" r=\"4\" fill=\"#00E676\"/></g></svg>"
    },
    {
        "id": 330,
        "name": "Dislike-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M44 16V32H52V16H44Z\" fill=\"#455A64\"/><path d=\"M40 32H32V44C32 48 28 52 24 52C20 52 18 50 18 48V36H12C10 36 8 34 8 32L12 16H40V32Z\" fill=\"#FF1744\"/></g></svg>"
    },
    {
        "id": 331,
        "name": "Disney-Plus-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16c24 0 48 24 48 48s-24 48-48 48-48-24-48-48 24-48 48-48z\" fill=\"#113CCF\"/></svg>"
    },
    {
        "id": 332,
        "name": "Dividend-Yield-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16v96M40 80l24 16 24-16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 333,
        "name": "DJ-Deck-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"16\" width=\"40\" height=\"32\" rx=\"4\" fill=\"#455A64\"/><circle cx=\"32\" cy=\"32\" r=\"12\" stroke=\"#FFFFFF\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 334,
        "name": "DLC-Expansion-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"40\" width=\"48\" height=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 40v48M40 64h48\" stroke=\"#00E676\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 335,
        "name": "DNS-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 48h32M48 64h32M48 80h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\" stroke-dasharray=\"12 12\"/></svg>"
    },
    {
        "id": 336,
        "name": "Dock-Bottom-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"24\" width=\"80\" height=\"80\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M24 88h80\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 337,
        "name": "Docker-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 64h64v32H32V64z\" fill=\"#2496ED\"/></svg>"
    },
    {
        "id": 338,
        "name": "Donut-Premium",
        "category": "shapes",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"20\" stroke=\"#455A64\" stroke-width=\"12\"/></svg>"
    },
    {
        "id": 339,
        "name": "DoorDash-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l48 48-48 48-48-48 48-48z\" fill=\"#FF3008\"/></svg>"
    },
    {
        "id": 340,
        "name": "Download-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 40C14 40 10 36 10 30C10 24 14 20 20 20C22 14 28 10 34 10C42 10 48 16 48 24C52 24 54 28 54 32C54 36 50 40 46 40H32M32 10V40M32 40L24 32M32 40L40 32\" stroke=\"#00E5FF\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 341,
        "name": "DPad-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"28\" y=\"16\" width=\"8\" height=\"32\" fill=\"#455A64\"/><rect x=\"16\" y=\"28\" width=\"32\" height=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 342,
        "name": "Draft-Doc-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 16h48l24 24v72H32V16z\"/><path d=\"M64 48l32 32-16 16-32-32 16-16z\" fill=\"#FFD600\"/></svg>"
    },
    {
        "id": 343,
        "name": "Draft-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 24h48l24 24v56H32V24zM64 48l32 32-16 16-32-32 16-16z\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 344,
        "name": "Drafting-Compass-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 24l-24 80M64 24l24 80M32 88h64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 345,
        "name": "Drama-Premium",
        "category": "arts",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 20C20 12 28 8 32 8C36 8 44 12 44 20V44C44 52 36 56 32 56C28 56 20 52 20 44V20Z\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 346,
        "name": "Dribbble-Premium",
        "category": "brand",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"20\" stroke=\"#FF1744\" stroke-width=\"4\"/><path d=\"M16 32C16 24 24 16 32 16C40 16 48 24 48 32C48 40 40 48 32 48\" fill=\"none\" stroke=\"#FF1744\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 347,
        "name": "Drop-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16c-24 24-44 44-44 64 0 24 20 44 44 44s44-20 44-44c0-20-20-40-44-64z\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 348,
        "name": "Dropdown-Menu-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"40\" width=\"80\" height=\"48\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M88 64l-16 16-16-16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 349,
        "name": "Drums-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"20\" cy=\"32\" r=\"8\" fill=\"#455A64\"/><circle cx=\"44\" cy=\"32\" r=\"8\" fill=\"#455A64\"/><rect x=\"28\" y=\"28\" width=\"8\" height=\"8\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 350,
        "name": "Dunk-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"20\" width=\"24\" height=\"12\" fill=\"#FF1744\"/><path d=\"M24 32L28 48H36L40 32\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 351,
        "name": "Dynamic-Triangle-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l48 80H16L64 16z\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 32v48\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 352,
        "name": "E-Sports-Trophy-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 32v32c0 16 16 32 32 32s32-16 32-32V32H48z\" stroke=\"#FFD600\" stroke-width=\"6\"/><path d=\"M32 48l16 16M96 48l-16 16\" stroke=\"#FFD600\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 353,
        "name": "E-Voting-System-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"48\" width=\"64\" height=\"32\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 64h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 354,
        "name": "eBay-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 80c0 16 16 16 32 0s16-16 32 0\" stroke=\"#E53238\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 355,
        "name": "Economic-Indicator-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96l64-64M64 16v96\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 356,
        "name": "Edit-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 16L32 32L16 48H32L48 32L48 16Z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 357,
        "name": "Edit-Text-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 32h64v64H32V32zM48 48h32M48 64h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 358,
        "name": "Educator-Premium",
        "category": "occupations",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"20\" width=\"32\" height=\"24\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M24 36H40\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 359,
        "name": "Emergency-Services-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l48 32-16 48H32L16 48 64 16zM64 48v32M48 64h32\" stroke=\"#FF1744\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 360,
        "name": "Entertainment-Portal-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"16\" width=\"96\" height=\"96\" rx=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M56 56l32 16-32 16V56z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 361,
        "name": "Entropy-Disorder-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 48l32 32M80 48l-32 32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\" stroke-dasharray=\"8 8\"/></svg>"
    },
    {
        "id": 362,
        "name": "Entropy-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12V28L44 16M32 52V36L20 48M12 32H28L16 20M52 32H36L48 44\" stroke=\"#FF1744\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 363,
        "name": "Environment-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 48l32-24 32 24v32l-32 24-32-24V48z\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 48v32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 364,
        "name": "Envoy-Premium",
        "category": "occupations",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"20\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M20 32H44\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 365,
        "name": "Epic-Games-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 32h64v64H32V32z\" fill=\"#000000\"/></svg>"
    },
    {
        "id": 366,
        "name": "EQ-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"32\" width=\"8\" height=\"20\" fill=\"#00E5FF\"/><rect x=\"28\" y=\"16\" width=\"8\" height=\"36\" fill=\"#00E676\"/><rect x=\"44\" y=\"24\" width=\"8\" height=\"28\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 367,
        "name": "Error-Report-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 24l48 80H16L64 24z\"/><path d=\"M64 56v16M64 96v8\" stroke=\"#FFFFFF\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 368,
        "name": "Ethernet-Port-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"40\" width=\"64\" height=\"48\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 56h32M48 72h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 369,
        "name": "Ethernet-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 32l16 16-16 16M72 32l16 16-16 16M56 64v32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 370,
        "name": "Etsy-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 40h48v16H40V40zM40 72h48v16H40V72z\" fill=\"#D1410C\"/></svg>"
    },
    {
        "id": 371,
        "name": "Excited-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"22\" cy=\"24\" r=\"4\" fill=\"#00E5FF\"/><circle cx=\"42\" cy=\"24\" r=\"4\" fill=\"#00E5FF\"/><path d=\"M20 40C26 48 38 48 44 40\" stroke=\"#00E676\" stroke-width=\"4\" stroke-linecap=\"round\"/></g></svg>"
    },
    {
        "id": 372,
        "name": "Expand-Alt-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 24v80M32 64h64M32 64l16-16M32 64l16 16M96 64l-16-16M96 64l-16 16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 373,
        "name": "Expand-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 32H32v16M80 32h16v16M48 96H32V80M80 96h16V80\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 374,
        "name": "Expense-Tracking-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96l64-64M48 96H32V80\" stroke=\"#FF1744\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 375,
        "name": "Explorer-Premium",
        "category": "occupations",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"20\" fill=\"#00E5FF\"/><circle cx=\"32\" cy=\"32\" r=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 376,
        "name": "Export-Premium",
        "category": "share",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M32 54V10M32 10L18 24M32 10L46 24\" stroke=\"#455A64\" stroke-width=\"4\" stroke-linecap=\"round\"/><rect x=\"18\" y=\"44\" width=\"28\" height=\"10\" rx=\"2\" fill=\"#00E5FF\"/></g></svg>"
    },
    {
        "id": 377,
        "name": "Extractor-Premium",
        "category": "occupations",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 24L32 12L52 24L32 44L12 24Z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 378,
        "name": "Eye-Off-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 64c20-40 76-40 96 0-20 40-76 40-96 0z\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M32 32l64 64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 379,
        "name": "Eye-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 32C10 32 22 12 32 12C42 12 54 32 54 32C54 32 42 52 32 52C22 52 10 32 10 32Z\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"32\" cy=\"32\" r=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 380,
        "name": "Facebook-Premium",
        "category": "social",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M42 6H22C13 6 6 13 6 22V42C6 51 13 58 22 58H42C51 58 58 51 58 42V22C58 13 51 6 42 6Z\" fill=\"#455A64\"/><path d=\"M42 34H36V52H28V34H24V26H28V22C28 18 30 16 36 16H42V24H36V26H42V34Z\" fill=\"#00E5FF\"/></g></svg>"
    },
    {
        "id": 381,
        "name": "Facepalm-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"38\" r=\"20\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M16 26L24 18M48 26L40 18\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 382,
        "name": "Family-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"16\" r=\"8\" fill=\"#455A64\"/><circle cx=\"16\" cy=\"24\" r=\"6\" fill=\"#455A64\"/><circle cx=\"48\" cy=\"24\" r=\"6\" fill=\"#455A64\"/><path d=\"M8 56C8 44 24 36 32 36C40 36 56 44 56 56\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 383,
        "name": "Favor-Premium",
        "category": "shapes",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 52L16 36C12 32 12 24 16 20C20 16 28 16 32 20C36 16 44 16 48 20C52 24 52 32 48 36L32 52Z\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 384,
        "name": "Feedback-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 32h80v56H56L40 104V88H24V32zM56 56c8 8 24 8 32 0\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 385,
        "name": "Fiber-Optic-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 64c32 0 32 32 64 32M24 64c32 0 32-32 64-32\" stroke=\"#00E5FF\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 386,
        "name": "Fight-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 24C20 16 28 12 36 12C44 12 52 20 52 40C52 48 44 52 36 52H20V24Z\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 387,
        "name": "Figma-Premium",
        "category": "brand",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M26 6H38V18H26V6Z\" fill=\"#FF1744\"/><path d=\"M38 6H50V18H38V6Z\" fill=\"#00E5FF\"/><path d=\"M26 18H38V30H26V18Z\" fill=\"#455A64\"/><path d=\"M38 18H50V30H38V18Z\" fill=\"#00E676\"/><path d=\"M32 30C32 36 38 42 44 42V54H32V42C26 42 20 36 20 30H32Z\" fill=\"#455A64\"/></g></svg>"
    },
    {
        "id": 388,
        "name": "File-Archive-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 48h32M48 64h32M48 80h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/><path d=\"M24 32h8M24 96h8M104 32h8M104 96h8\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 389,
        "name": "File-Code-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 16h48l24 24v72H32V16z\"/><path d=\"M48 56l-8 8 8 8M64 56l8 16-8 8\" stroke=\"#FFFFFF\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 390,
        "name": "File-Text-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 16h48l24 24v72H32V16z\"/><path d=\"M48 48h32M48 64h32M48 80h16\" stroke=\"#FFFFFF\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 391,
        "name": "Files-Premium",
        "category": "app",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M14 10H34L44 20V54H14V10Z\" fill=\"#455A64\"/><path d=\"M34 10V20H44\" stroke=\"#00E676\" stroke-width=\"4\"/></g></svg>"
    },
    {
        "id": 392,
        "name": "Film-Festival-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l48 32-16 48H32L16 48 64 16z\"/><circle cx=\"64\" cy=\"64\" r=\"16\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 393,
        "name": "Film-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"24\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"32\" cy=\"32\" r=\"8\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M32 8V16M32 48V56M8 32H16M48 32H56\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 394,
        "name": "Filter-List-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 40h64M48 64h32M64 88h0\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/><path d=\"M56 88h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 395,
        "name": "Filter-Photo-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 16c26 0 48 22 48 48s-22 48-48 48V16z\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 396,
        "name": "Filter-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 16H52L36 32V48L28 44V32L12 16Z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 397,
        "name": "Finance-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"12\" width=\"32\" height=\"40\" rx=\"4\" fill=\"#455A64\"/><rect x=\"20\" y=\"20\" width=\"24\" height=\"8\" fill=\"#FFFFFF\"/></svg>"
    },
    {
        "id": 398,
        "name": "Financial-Forecasting-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96l32-48 32 16 32-48\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 399,
        "name": "Financial-Risk-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l48 80H16L64 16z\" stroke=\"#FF1744\" stroke-width=\"6\"/><path d=\"M64 48v24M64 88v4\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 400,
        "name": "Fingerprint-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 96c0-26 12-48 24-48s24 22 24 48M56 80c0-13 4-24 8-24s8 11 8 24\" stroke=\"#00E5FF\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 401,
        "name": "Fingerprint-Scan-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 96c0-26 12-48 24-48s24 22 24 48M56 80c0-13 4-24 8-24s8 11 8 24M64 32v64\" stroke=\"#00E5FF\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 402,
        "name": "FinTech-Innovation-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96l64-64M80 32h16v16M32 64l16-16 16 16 32-32\" stroke=\"#00E5FF\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 403,
        "name": "Fire-Department-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l48 64-16 32H32L16 80 64 16z\" stroke=\"#FF1744\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 404,
        "name": "Fire-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 10C24 20 20 30 20 40C20 50 26 54 32 54C38 54 44 50 44 40C44 30 40 20 32 10Z\" fill=\"#FF1744\"/><path d=\"M32 18C28 26 26 32 26 38C26 42 28 44 32 44C36 44 38 42 38 38C38 32 36 26 32 18Z\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 405,
        "name": "Firewall-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 24l40 16v48l-40 16-40-16V40l40-16z\" stroke=\"#FF1744\" stroke-width=\"6\"/><path d=\"M48 48h32M48 64h32M48 80h32\" stroke=\"#FF1744\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 406,
        "name": "Fireworks-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 32L32 10M32 32L10 32M32 32L54 32M32 32L32 54\" stroke=\"#FF1744\" stroke-width=\"4\"/><circle cx=\"32\" cy=\"32\" r=\"6\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 407,
        "name": "Fiscal-Premium",
        "category": "government",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 24H52M12 40H52M32 12V52\" stroke=\"#00E676\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 408,
        "name": "Fiscal-Year-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 48h64M48 32v64M80 32v64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 409,
        "name": "Fishing-Rod-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96l64-64M96 32v32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 410,
        "name": "Fitness-Tracker-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"32\" width=\"48\" height=\"64\" rx=\"8\" stroke=\"#00E676\" stroke-width=\"6\"/><path d=\"M48 64h32\" stroke=\"#00E676\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 411,
        "name": "Flag-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M16 54V10L48 20L16 30\" fill=\"#455A64\"/></g></svg>"
    },
    {
        "id": 412,
        "name": "Flame-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16s16 28 4 48c-12 20-36 12-28-12 8-24 16-36 24-36z\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 413,
        "name": "Flash-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M88 24L40 72h24l-8 32 48-48h-24l8-32z\" fill=\"#FFD600\"/></svg>"
    },
    {
        "id": 414,
        "name": "Flashlight-On-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"48\" y=\"32\" width=\"32\" height=\"64\" rx=\"4\" fill=\"#455A64\"/><path d=\"M64 32l16-16M64 32l-16-16M64 32l24-8\" stroke=\"#FFD600\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 415,
        "name": "Flashlight-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"48\" y=\"32\" width=\"32\" height=\"64\" rx=\"4\" fill=\"#455A64\"/><path d=\"M40 24l48 8-8 8-48-8 8-8z\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 416,
        "name": "Floodlight-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 10L54 10L44 54H20L10 10Z\" fill=\"#455A64\"/><path d=\"M32 20V44\" stroke=\"#FF1744\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 417,
        "name": "Flow-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 20H28M12 32H40M12 44H52\" stroke=\"#455A64\" stroke-width=\"4\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 418,
        "name": "Flow-State-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 64c16-32 32-32 48 0s32 32 48 0\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 419,
        "name": "Flower-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"16\" fill=\"#00E5FF\"/><path d=\"M64 32V16M64 112v-16M32 64H16M112 64H96\" stroke=\"#00E5FF\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 420,
        "name": "Fluid-Premium",
        "category": "arts",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12C20 12 12 20 12 32C12 44 24 52 32 52C40 52 52 44 52 32C52 20 44 12 32 12Z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 421,
        "name": "Focus-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"24\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M24 64h16M88 64h16M64 24v16M64 88v16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 422,
        "name": "Folder-Add-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 32h32l8 12h48v52H20V32z\" stroke=\"#00E676\" stroke-width=\"4\"/><path d=\"M84 56h16M92 48v16\" stroke=\"#00E676\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 423,
        "name": "Folder-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 20H28L34 26H54V44H10V20Z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 424,
        "name": "Football-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"24\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M32 8L20 24L32 40L44 24L32 8Z\" fill=\"#00E676\"/></svg>"
    },
    {
        "id": 425,
        "name": "Forex-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 24L12 32L20 40M44 24L52 32L44 40\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M32 20V44\" stroke=\"#00E676\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 426,
        "name": "Form-Field-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"48\" width=\"80\" height=\"32\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M40 64h48\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 427,
        "name": "Form-Premium",
        "category": "arts",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12L44 24L24 44L12 32L32 12Z\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 428,
        "name": "Form-Study-Premium",
        "category": "arts",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 32C12 20 20 12 32 12C44 12 52 20 52 32C52 44 44 52 32 52\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 429,
        "name": "FPS-Crosshair-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"32\" stroke=\"#FF1744\" stroke-width=\"6\"/><path d=\"M64 16v32M64 80v32M16 64h32M80 64h32\" stroke=\"#FF1744\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 430,
        "name": "Fractal-Structure-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l32 32-16 16 32 32M64 16l-32 32 16 16-32 32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 431,
        "name": "Frame-Triangle-Premium",
        "category": "shapes",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 8L56 48H8L32 8Z\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 432,
        "name": "Framer-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 32h64v32H32V32zM32 64h32v32H32V64z\" fill=\"#000\"/></svg>"
    },
    {
        "id": 433,
        "name": "Frown-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M44 52h8M76 52h8M44 96c10-10 30-10 40 0\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 434,
        "name": "Fullscreen-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 32h24M32 32v24M96 32h-24M96 32v24M32 96h24M32 96v-24M96 96h-24M96 96v-24\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 435,
        "name": "Function-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 32c16 0 32 16 32 32s-16 32-32 32M80 64h16\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 436,
        "name": "Funnel-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 32h64L72 56v40H56V56L32 32z\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 437,
        "name": "Gallery-Premium",
        "category": "arts",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"12\" width=\"40\" height=\"40\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M20 20H44V44H20V20Z\" stroke=\"#455A64\" stroke-width=\"2\"/></svg>"
    },
    {
        "id": 438,
        "name": "Game-Controller-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 64c0-16 16-24 40-24s40 8 40 24v16c0 16-16 24-40 24s-40-8-40-24V64z\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"48\" cy=\"64\" r=\"8\" fill=\"#455A64\"/><circle cx=\"80\" cy=\"64\" r=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 439,
        "name": "Game-Developer-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M40 48l16-16M40 80l48-48\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 440,
        "name": "Game-Settings-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 16v32M64 80v32M16 64h32M80 64h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 441,
        "name": "Game-Streaming-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 40l48 32-48 32V40z\" fill=\"#FF1744\"/><path d=\"M40 40l48 32-48 32V40z\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 442,
        "name": "Gamepad-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 56h80v32H24V56z\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"40\" cy=\"72\" r=\"8\" fill=\"#455A64\"/><circle cx=\"88\" cy=\"72\" r=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 443,
        "name": "Gamer-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 44V32C20 20 30 10 40 10C50 10 60 20 60 32V44\" stroke=\"#455A64\" stroke-width=\"4\"/><rect x=\"12\" y=\"32\" width=\"8\" height=\"24\" rx=\"2\" fill=\"#00E5FF\"/><rect x=\"60\" y=\"32\" width=\"8\" height=\"24\" rx=\"2\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 444,
        "name": "Gaming-Lobby-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 32v32l32 32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 445,
        "name": "Gantt-Chart-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 32h64M32 56h48M32 80h32\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 446,
        "name": "Gate-Logic-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 20H28C36 20 44 28 44 32C44 36 36 44 28 44H12\" stroke=\"#FF1744\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 447,
        "name": "Gauge-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96a48 48 0 0164 0\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/><path d=\"M64 96l-32-32\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 448,
        "name": "Gavel-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 40h48l-8 16H32L24 40zM56 40l16-16M64 48l32 32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 449,
        "name": "Geometric-Fusion-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"32\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 16l32 32-32 32-32-32 32-32z\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 450,
        "name": "Geometry-Premium",
        "category": "arts",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12L20 52M32 12L44 52\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 451,
        "name": "Gesture-Control-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 80l16-48 16 16 16-16 16 48\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 452,
        "name": "Ghost-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 24C16 12 24 6 32 6C40 6 48 12 48 24V54L40 46L32 54L24 46L16 54V24Z\" fill=\"#455A64\"/><circle cx=\"24\" cy=\"24\" r=\"4\" fill=\"#FFFFFF\"/><circle cx=\"40\" cy=\"24\" r=\"4\" fill=\"#FFFFFF\"/></svg>"
    },
    {
        "id": 453,
        "name": "Gift-Open-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 64h80v40H24V64zM64 64V32c0-8 16-8 16 0M64 64l-16-32c0-8-16-8-16 0\" stroke=\"#FF1744\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 454,
        "name": "Gift-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"24\" width=\"40\" height=\"28\" rx=\"2\" fill=\"#455A64\"/><rect x=\"28\" y=\"16\" width=\"8\" height=\"36\" fill=\"#FF1744\"/><rect x=\"12\" y=\"24\" width=\"40\" height=\"8\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 455,
        "name": "Git-Branch-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"32\" r=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"40\" cy=\"96\" r=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M40 40v48M72 64c16 0 24-8 24-24\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 456,
        "name": "GitHub-Premium",
        "category": "brand",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12C20 12 12 20 12 32C12 40 16 48 24 52C25 52 26 50 26 48V40C20 42 18 38 18 38C17 35 15 34 15 34C13 33 16 33 16 33C19 33 21 36 21 36C23 40 27 39 29 38C29 36 30 35 31 34C26 33 21 31 21 23C21 21 22 19 23 18C23 16 23 14 24 12C24 12 26 12 28 13C29 13 31 13 32 13C33 13 35 13 36 13C38 12 40 12 40 12C41 14 41 16 41 18C42 19 43 21 43 23C43 31 38 33 33 34C34 35 34 37 34 40V48C34 50 35 52 36 52C44 48 48 40 48 32C48 20 40 12 32 12Z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 457,
        "name": "Global-Bus-Transit-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"48\" width=\"64\" height=\"40\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"48\" cy=\"96\" r=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"80\" cy=\"96\" r=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 458,
        "name": "Global-Connection-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M32 64h64M64 32v64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 459,
        "name": "Global-Economy-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 16v96M16 64h96\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 460,
        "name": "Global-Network-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 16v96M16 64h96M40 28l48 72M88 28l-48 72\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 461,
        "name": "Global-Trade-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16L32 64l32 48 32-48L64 16z\" stroke=\"#00E5FF\" stroke-width=\"6\"/><path d=\"M40 64h48\" stroke=\"#00E5FF\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 462,
        "name": "Global-Traffic-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 16v96M16 64h96\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/><path d=\"M32 32l64 64M32 96l64-64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 463,
        "name": "Globe-Data-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M16 64h96M64 16v96\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 64l32 32\" stroke=\"#00E5FF\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 464,
        "name": "Globe-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M32 6C20 18 20 46 32 58M32 6C44 18 44 46 32 58M6 32H58\" stroke=\"#455A64\" stroke-width=\"2\"/></svg>"
    },
    {
        "id": 465,
        "name": "Globe-Search-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"40\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M32 64h64M64 24v80M80 80l24 24\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 466,
        "name": "Goal-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"24\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"32\" cy=\"32\" r=\"12\" stroke=\"#FF1744\" stroke-width=\"4\"/><circle cx=\"32\" cy=\"32\" r=\"4\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 467,
        "name": "Golden-Ratio-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16v96M64 64h48M64 64l48-48M64 64l-32 48\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 468,
        "name": "Golf-Club-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M96 32L32 96h16l64-64-16-16z\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"24\" cy=\"104\" r=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 469,
        "name": "Google-Premium",
        "category": "brand",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M52 32H32V44H48C45 50 38 54 32 54C22 54 14 46 14 36C14 26 22 18 32 18C36 18 40 20 42 22L50 14C45 10 38 8 32 8C16 8 4 20 4 32C4 44 16 56 32 56C48 56 58 44 58 32H52Z\" fill=\"#455A64\"/></g></svg>"
    },
    {
        "id": 470,
        "name": "Government-Grant-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16v96M40 80l24 16 24-16\" stroke=\"#00E676\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 471,
        "name": "Graffiti-Premium",
        "category": "arts",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"20\" width=\"16\" height=\"32\" fill=\"#455A64\"/><rect x=\"28\" y=\"12\" width=\"8\" height=\"8\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 472,
        "name": "Graph-Database-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"8\" fill=\"#455A64\"/><circle cx=\"96\" cy=\"32\" r=\"8\" fill=\"#455A64\"/><circle cx=\"64\" cy=\"96\" r=\"8\" fill=\"#455A64\"/><path d=\"M38 38l18 48M90 38l-18 48\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 473,
        "name": "Graph-Down-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 32l32 32 24-24 40 48\" stroke=\"#FF1744\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 474,
        "name": "Graph-Up-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96l32-32 24 24 40-48\" stroke=\"#00E676\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 475,
        "name": "Graphics-Card-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"40\" width=\"80\" height=\"48\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"56\" cy=\"64\" r=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"88\" cy=\"64\" r=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 476,
        "name": "Green-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 16L32 32L44 44L56 32L48 16Z\" fill=\"#455A64\"/><path d=\"M32 32L12 52\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 477,
        "name": "Grid-Alignment-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 48h64M32 80h64M48 32v64M80 32v64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 478,
        "name": "Grid-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 32v64M88 32v64M32 40h64M32 88h64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 479,
        "name": "Grimace-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><line x1=\"22\" y1=\"24\" x2=\"26\" y2=\"28\" stroke=\"#455A64\" stroke-width=\"4\"/><line x1=\"42\" y1=\"24\" x2=\"38\" y2=\"28\" stroke=\"#455A64\" stroke-width=\"4\"/><line x1=\"24\" y1=\"42\" x2=\"40\" y2=\"42\" stroke=\"#FF1744\" stroke-width=\"4\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 480,
        "name": "Group-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"20\" cy=\"24\" r=\"8\" fill=\"#455A64\"/><circle cx=\"44\" cy=\"24\" r=\"8\" fill=\"#455A64\"/><path d=\"M10 54C10 44 16 36 24 36C32 36 40 44 40 54M34 54C34 44 40 36 48 36C56 36 62 44 62 54\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 481,
        "name": "Grower-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"40\" r=\"10\" fill=\"#455A64\"/><rect x=\"16\" y=\"20\" width=\"32\" height=\"12\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 482,
        "name": "Growth-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 52H52M12 52L24 32L36 40L52 12\" stroke=\"#00E676\" stroke-width=\"4\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 483,
        "name": "Guard-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"20\" r=\"10\" fill=\"#455A64\"/><rect x=\"24\" y=\"32\" width=\"16\" height=\"16\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 484,
        "name": "Guitar-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12C20 12 12 20 12 32C12 44 20 52 32 52C44 52 52 44 52 32C52 20 44 12 32 12Z\" fill=\"#455A64\"/><circle cx=\"32\" cy=\"32\" r=\"4\" fill=\"#FFFFFF\"/></svg>"
    },
    {
        "id": 485,
        "name": "Hammer-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M88 24l16 16-48 48-16-16 48-48zM32 80L16 96\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 486,
        "name": "Handshake-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 88l32-32M72 72l32-32M40 72l32-32M56 88l32-32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 487,
        "name": "Haptic-Feedback-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"24\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 16v16M64 96v16M16 64h16M96 64h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 488,
        "name": "Hash-Map-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 48h8M48 64h8M48 80h8M72 48h8M72 64h8M72 80h8\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 489,
        "name": "HBO-Max-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" fill=\"#5D20D6\"/></svg>"
    },
    {
        "id": 490,
        "name": "Headphones-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 72v16a32 32 0 0064 0V72M32 72a32 32 0 0164 0\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 491,
        "name": "Headset-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 64v32a32 32 0 0064 0V64\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/><path d=\"M32 64a32 32 0 0164 0\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 492,
        "name": "Health-Bar-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"48\" width=\"80\" height=\"32\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><rect x=\"24\" y=\"48\" width=\"56\" height=\"32\" rx=\"4\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 493,
        "name": "Health-Check-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 64h16l16-32 16 64 16-32h16\" stroke=\"#00E5FF\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 494,
        "name": "Heart-Eyes-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M22 22C20 20 18 22 18 24C18 26 22 28 22 28C22 28 26 26 26 24C26 22 24 20 22 22Z\" fill=\"#FF1744\"/><path d=\"M42 22C40 20 38 22 38 24C38 26 42 28 42 28C42 28 46 26 46 24C46 22 44 20 42 22Z\" fill=\"#FF1744\"/></g></svg>"
    },
    {
        "id": 495,
        "name": "Heart-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 54L12 30C12 20 20 12 32 18C44 12 52 20 52 30L32 54Z\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 496,
        "name": "Heatmap-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"24\" height=\"24\" fill=\"#FF1744\"/><rect x=\"72\" y=\"32\" width=\"24\" height=\"24\" fill=\"#FFD600\"/><rect x=\"32\" y=\"72\" width=\"24\" height=\"24\" fill=\"#00E5FF\"/><rect x=\"72\" y=\"72\" width=\"24\" height=\"24\" fill=\"#00E676\"/></svg>"
    },
    {
        "id": 497,
        "name": "Hedge-Fund-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96l64-64M48 32h32M48 96h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 498,
        "name": "Help-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M32 20C28 20 26 22 26 26M32 30V34M32 40H32.01\" stroke=\"#455A64\" stroke-width=\"4\" stroke-linecap=\"round\"/></g></svg>"
    },
    {
        "id": 499,
        "name": "Heptagon-Premium",
        "category": "shapes",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12L52 24L48 44H16L12 24L32 12Z\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 500,
        "name": "Heritage-Premium",
        "category": "government",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 52H40V20L32 8L24 20V52Z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 501,
        "name": "Hexagon-Premium",
        "category": "shapes",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12L52 24V40L32 52L12 40V24L32 12Z\" stroke=\"#00E5FF\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 502,
        "name": "Hexagonal-Grid-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l32 16v32l-32 16-32-16V32l32-16z\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 503,
        "name": "Hide-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 32C10 32 22 12 32 12C42 12 54 32 54 32C54 32 42 52 32 52C22 52 10 32 10 32Z\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M16 16L48 48\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 504,
        "name": "High-Speed-Train-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 80h64v-16c0-16-16-32-32-32s-32 16-32 32v16zM48 96h32\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 505,
        "name": "Hiking-Backpack-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 40h48v64H40V40z\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 40v-16h32v16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 506,
        "name": "Histogram-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96h64M32 96V32M40 80h16v16H40zM64 48h16v48H64zM80 64h16v32H80z\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 507,
        "name": "Hockey-Stick-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M80 16l-32 80h32l16-16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 508,
        "name": "HomeOffice-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"24\" width=\"40\" height=\"24\" rx=\"4\" fill=\"#455A64\"/><path d=\"M28 48L32 56H36L32 48\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 509,
        "name": "Hoop-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"20\" fill=\"#FF1744\"/><path d=\"M32 12V52M12 32H52\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 510,
        "name": "Hotel-Check-In-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 48h32M48 64h32M48 80h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 511,
        "name": "Hub-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"8\" fill=\"#455A64\"/><path d=\"M32 12V24M32 40V52M12 32H24M40 32H52\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 512,
        "name": "Hulu-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" fill=\"#1CE783\"/></svg>"
    },
    {
        "id": 513,
        "name": "Ice-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 12L32 28H12\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 514,
        "name": "Ice-Skate-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 80l48-16v16H32z\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M32 96h64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 515,
        "name": "ID-Card-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"32\" width=\"80\" height=\"64\" rx=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"48\" cy=\"64\" r=\"12\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M72 60h24M72 72h24\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 516,
        "name": "Idea-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 10C24 10 18 16 18 24C18 32 26 36 26 44H38C38 36 46 32 46 24C46 16 40 10 32 10Z\" fill=\"#00E5FF\"/><rect x=\"28\" y=\"44\" width=\"8\" height=\"8\" fill=\"#455A64\"/><rect x=\"24\" y=\"52\" width=\"16\" height=\"4\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 517,
        "name": "Identity-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"16\" width=\"32\" height=\"40\" rx=\"2\" fill=\"#455A64\"/><circle cx=\"32\" cy=\"30\" r=\"8\" fill=\"#FFFFFF\"/></svg>"
    },
    {
        "id": 518,
        "name": "Image-Edit-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M32 64l32-32 32 32M64 96l32-32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 519,
        "name": "Immersion-Level-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96l32-48 32 48\" stroke=\"#00E5FF\" stroke-width=\"6\" stroke-linecap=\"round\"/><path d=\"M64 96V64\" stroke=\"#00E5FF\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 520,
        "name": "Import-Premium",
        "category": "share",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M32 10V54M32 54L18 40M32 54L46 40\" stroke=\"#455A64\" stroke-width=\"4\" stroke-linecap=\"round\"/><rect x=\"18\" y=\"10\" width=\"28\" height=\"10\" rx=\"2\" fill=\"#00E676\"/></g></svg>"
    },
    {
        "id": 521,
        "name": "In-Game-Chat-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"40\" width=\"64\" height=\"48\" rx=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 64h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 522,
        "name": "Inbox-Premium",
        "category": "app",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M10 20V50H54V20L32 40L10 20Z\" fill=\"#455A64\"/><path d=\"M10 20L32 35L54 20\" stroke=\"#00E5FF\" stroke-width=\"4\"/></g></svg>"
    },
    {
        "id": 523,
        "name": "Industry-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"24\" width=\"40\" height=\"28\" fill=\"#455A64\"/><rect x=\"44\" y=\"8\" width=\"8\" height=\"16\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 524,
        "name": "Infinite-Loop-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 64c0-24 16-48 48-48s48 24 48 48-16 48-48 48-48-24-48-48z\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 525,
        "name": "Infinity-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 64c0-20 16-36 32-36s32 16 32 36-16 36-32 36-32-16-32-36z\" stroke=\"#455A64\" stroke-width=\"8\"/><path d=\"M64 64c16-20 32-36 32-36s32 16 32 36-16 36-32 36-32-16-32-36z\" stroke=\"#455A64\" stroke-width=\"8\"/></svg>"
    },
    {
        "id": 526,
        "name": "Info-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M32 24V28M32 34V42\" stroke=\"#455A64\" stroke-width=\"4\" stroke-linecap=\"round\"/></g></svg>"
    },
    {
        "id": 527,
        "name": "Infrastructure-Code-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 40l32-16 32 16-32 16-32-16zM24 40v48l32 16 32-16V40\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 528,
        "name": "Infrastructure-Premium",
        "category": "government",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"32\" width=\"12\" height=\"20\" fill=\"#455A64\"/><rect x=\"26\" y=\"20\" width=\"12\" height=\"32\" fill=\"#455A64\"/><rect x=\"40\" y=\"12\" width=\"12\" height=\"40\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 529,
        "name": "Initiative-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 52L20 20L32 32L52 12\" stroke=\"#00E676\" stroke-width=\"4\" stroke-linecap=\"round\"/><circle cx=\"52\" cy=\"12\" r=\"8\" fill=\"#00E676\"/></svg>"
    },
    {
        "id": 530,
        "name": "Instagram-Premium",
        "category": "social",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><rect x=\"12\" y=\"12\" width=\"40\" height=\"40\" rx=\"10\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"32\" cy=\"32\" r=\"8\" stroke=\"#00E5FF\" stroke-width=\"4\"/><circle cx=\"44\" cy=\"20\" r=\"3\" fill=\"#FF1744\"/></g></svg>"
    },
    {
        "id": 531,
        "name": "Install-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 24v64M40 64l24 24 24-24\" stroke=\"#00E676\" stroke-width=\"6\" stroke-linecap=\"round\"/><path d=\"M32 104h64\" stroke=\"#00E676\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 532,
        "name": "Instrument-Premium",
        "category": "arts",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 12V52H44L20 12Z\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 533,
        "name": "Integrity-Premium",
        "category": "government",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 44L28 52L44 36\" stroke=\"#00E676\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 534,
        "name": "Interest-Rate-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96l64-64M80 32h16v16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 535,
        "name": "International-Flight-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 80l48-48 16 16-32 48\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/><path d=\"M64 48l16-16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 536,
        "name": "International-Premium",
        "category": "government",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"20\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M32 12V52M12 32H52\" stroke=\"#455A64\" stroke-width=\"2\"/></svg>"
    },
    {
        "id": 537,
        "name": "Intersection-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 28H52M28 12V52\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 538,
        "name": "Inventory-Bag-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 40h48v64H40V40z\"/><path d=\"M56 24c0-8 16-8 16 0\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 539,
        "name": "Inventory-Grid-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 32v64M32 64h64\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 540,
        "name": "Invert-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 32H44L32 20M32 44L44 32\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 541,
        "name": "Investment-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 52H40V24H24V52Z\" fill=\"#455A64\"/><path d=\"M32 12V24\" stroke=\"#00E676\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 542,
        "name": "Invite-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"24\" cy=\"20\" r=\"8\" fill=\"#455A64\"/><path d=\"M12 52C12 42 20 36 24 36C28 36 36 42 36 52M48 20V32M42 26H54\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 543,
        "name": "Invoice-Management-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"24\" width=\"48\" height=\"80\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M56 40h16M56 56h16M56 72h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 544,
        "name": "Invoice-Paid-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"24\" width=\"64\" height=\"80\" rx=\"4\" stroke=\"#00E676\" stroke-width=\"6\"/><path d=\"M48 48h32M48 64h32M48 80l16 16 16-32\" stroke=\"#00E676\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 545,
        "name": "Invoice-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"24\" width=\"64\" height=\"80\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 48h32M48 64h32M48 80h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 546,
        "name": "Isometry-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l48 32-48 32-48-32 48-32zM64 80v32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 547,
        "name": "Jackpot-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"20\" width=\"44\" height=\"24\" rx=\"4\" fill=\"#455A64\"/><circle cx=\"22\" cy=\"32\" r=\"6\" fill=\"#FF1744\"/><circle cx=\"42\" cy=\"32\" r=\"6\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 548,
        "name": "JetBrains-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" fill=\"#000\"/></svg>"
    },
    {
        "id": 549,
        "name": "Journal-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 24h64v80H32V24z\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M64 24v80M40 36h48M40 52h48M40 68h48\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 550,
        "name": "Joystick-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"44\" width=\"24\" height=\"8\" fill=\"#455A64\"/><path d=\"M32 44V24L40 16M32 24L24 16\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 551,
        "name": "Justice-Premium",
        "category": "government",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 52H52M16 52V32H48V52M20 32V20H44V32M24 20H40\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 552,
        "name": "Kanban-Board-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"32\" width=\"24\" height=\"64\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><rect x=\"52\" y=\"32\" width=\"24\" height=\"64\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><rect x=\"80\" y=\"32\" width=\"24\" height=\"64\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 553,
        "name": "Karaoke-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"20\" r=\"10\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M32 30V50\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M24 40L40 40\" stroke=\"#FF1744\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 554,
        "name": "Key-Identifier-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 20H52M20 44H52M32 12V52M40 12V52\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 555,
        "name": "Key-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"20\" cy=\"20\" r=\"10\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M28 28L48 48\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 556,
        "name": "Key-Secure-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"88\" r=\"16\" stroke=\"#00E676\" stroke-width=\"6\"/><path d=\"M52 76l44-44M88 24l16 16\" stroke=\"#00E676\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 557,
        "name": "Keyboard-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"24\" width=\"44\" height=\"20\" rx=\"4\" fill=\"#455A64\"/><rect x=\"16\" y=\"28\" width=\"4\" height=\"4\" fill=\"#00E676\"/><rect x=\"24\" y=\"28\" width=\"4\" height=\"4\" fill=\"#00E5FF\"/><rect x=\"32\" y=\"28\" width=\"4\" height=\"4\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 558,
        "name": "Kindle-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" fill=\"#000\"/></svg>"
    },
    {
        "id": 559,
        "name": "Kiss-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"44\" cy=\"52\" r=\"6\" fill=\"#455A64\"/><circle cx=\"84\" cy=\"52\" r=\"6\" fill=\"#455A64\"/><path d=\"M56 88c8-8 16-8 24 0M64 80h8v8h-8z\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 560,
        "name": "Kubernetes-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l48 32-48 32-48-32L64 16z\" stroke=\"#326CE5\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 561,
        "name": "Labor-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M32 16V32H44\" stroke=\"#00E5FF\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 562,
        "name": "Language-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16L40 112h16l8-32h24l8 32h16L64 16zm8 24l16 48H56l16-48z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 563,
        "name": "Language-Translation-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 48h48M40 64h48M40 80h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 564,
        "name": "Laptop-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 24h96v64H16V24zM8 104h112\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 565,
        "name": "Latency-Monitor-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 64h64M64 32v64\" stroke=\"#FF1744\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"64\" r=\"8\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 566,
        "name": "Laugh-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M44 48l12 12M72 60l12-12M40 80c8 16 40 16 48 0\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 567,
        "name": "Laughing-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M20 22L26 28M38 22L44 28\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M20 38C24 46 40 46 44 38\" stroke=\"#00E676\" stroke-width=\"4\" stroke-linecap=\"round\"/></g></svg>"
    },
    {
        "id": 568,
        "name": "Law-Premium",
        "category": "government",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"12\" width=\"32\" height=\"40\" rx=\"2\" fill=\"#455A64\"/><path d=\"M24 20H40M24 28H40M24 36H40\" stroke=\"#FFFFFF\" stroke-width=\"2\"/></svg>"
    },
    {
        "id": 569,
        "name": "Layer-Stack-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 80l32 16 32-16M32 64l32 16 32-16M32 48l32 16 32-16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 570,
        "name": "Layers-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 72l40 24 40-24-40-24-40 24zM24 88l40 24 40-24M24 56l40 24 40-24\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 571,
        "name": "Layers-Stack-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"72\" width=\"64\" height=\"24\" stroke=\"#455A64\" stroke-width=\"6\"/><rect x=\"32\" y=\"52\" width=\"64\" height=\"24\" stroke=\"#455A64\" stroke-width=\"6\"/><rect x=\"32\" y=\"32\" width=\"64\" height=\"24\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 572,
        "name": "Layout-Columns-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"24\" width=\"80\" height=\"80\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 24v80\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 573,
        "name": "Layout-Rows-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"24\" width=\"80\" height=\"80\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M24 64h80\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 574,
        "name": "Lead-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"16\" r=\"8\" fill=\"#FF1744\"/><path d=\"M12 56C12 44 24 36 32 36C40 36 52 44 52 56\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 575,
        "name": "Leaderboard-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 48h32M48 64h32M48 80h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 576,
        "name": "Leadership-Premium",
        "category": "government",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"20\" width=\"24\" height=\"24\" rx=\"2\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M12 52H52\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 577,
        "name": "Leaf-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 10C32 10 54 20 54 42C54 42 44 20 32 10Z\" fill=\"#00E676\"/><path d=\"M32 54C32 54 10 44 10 22C10 22 20 44 32 54Z\" fill=\"#00E676\"/></svg>"
    },
    {
        "id": 578,
        "name": "Legislative-Council-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 32v64M32 64h64M48 48l32 32M80 48l-32 32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 579,
        "name": "Legislature-Premium",
        "category": "government",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 52H48L44 32C44 20 36 12 32 12C28 12 20 20 20 32L16 52Z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 580,
        "name": "Lens-Premium",
        "category": "arts",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"20\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"32\" cy=\"32\" r=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 581,
        "name": "Level-Up-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96l64-64M80 32h16v16\" stroke=\"#00E676\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 582,
        "name": "Library-Services-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96h64M40 96V32h16v64M72 96V32h16v64\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 583,
        "name": "Life-Ring-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"64\" r=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 16v16M64 96v16M16 64h16M96 64h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 584,
        "name": "Lift-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"24\" width=\"12\" height=\"16\" fill=\"#455A64\"/><rect x=\"40\" y=\"24\" width=\"12\" height=\"16\" fill=\"#455A64\"/><rect x=\"24\" y=\"28\" width=\"16\" height=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 585,
        "name": "Light-Mode-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"24\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 16v16M64 96v16M16 64h16M96 64h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 586,
        "name": "Lightbulb-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 24c-22 0-40 18-40 40 0 20 16 32 16 48h48c0-16 16-28 16-48 0-22-18-40-40-40zM56 112h16\" stroke=\"#FFD600\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 587,
        "name": "Like-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M20 48V32H12V48H20Z\" fill=\"#455A64\"/><path d=\"M24 32H32V20C32 16 36 12 40 12C44 12 46 14 46 16V28H52C54 28 56 30 56 32L52 48H24V32Z\" fill=\"#00E676\"/></g></svg>"
    },
    {
        "id": 588,
        "name": "Linear-Alt-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 32h64v64H32V32z\" stroke=\"#5E6AD2\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 589,
        "name": "Linear-App-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 32l64 32-64 32V32z\" fill=\"#5E6AD2\"/></svg>"
    },
    {
        "id": 590,
        "name": "Linear-Perspective-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 32l96 64M16 96l96-64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 591,
        "name": "Linear-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 32l64 32-64 32V32z\" fill=\"#5E6AD2\"/></svg>"
    },
    {
        "id": 592,
        "name": "Link-Broken-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M52 76l12-12M64 64l12-12M84 44l-4 4\" stroke=\"#FF1744\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 593,
        "name": "Link-Premium",
        "category": "share",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M20 44L44 20\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/><circle cx=\"20\" cy=\"44\" r=\"6\" fill=\"#00E5FF\"/><circle cx=\"44\" cy=\"20\" r=\"6\" fill=\"#00E676\"/></g></svg>"
    },
    {
        "id": 594,
        "name": "Linked-List-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"64\" r=\"8\" fill=\"#455A64\"/><circle cx=\"64\" cy=\"64\" r=\"8\" fill=\"#455A64\"/><circle cx=\"96\" cy=\"64\" r=\"8\" fill=\"#455A64\"/><path d=\"M40 64h16M72 64h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 595,
        "name": "LinkedIn-Premium",
        "category": "social",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><rect x=\"10\" y=\"24\" width=\"10\" height=\"30\" fill=\"#455A64\"/><rect x=\"28\" y=\"24\" width=\"10\" height=\"30\" fill=\"#455A64\"/><rect x=\"46\" y=\"24\" width=\"10\" height=\"30\" fill=\"#455A64\"/><rect x=\"10\" y=\"10\" width=\"10\" height=\"8\" rx=\"2\" fill=\"#00E5FF\"/></g></svg>"
    },
    {
        "id": 596,
        "name": "List-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 40h48M48 64h48M48 88h48M32 40h8M32 64h8M32 88h8\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 597,
        "name": "Live-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"24\" stroke=\"#FF1744\" stroke-width=\"4\"/><circle cx=\"32\" cy=\"32\" r=\"8\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 598,
        "name": "Live-Stream-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#FF1744\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"64\" r=\"16\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 599,
        "name": "Load-Balancer-Alt-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 24v16M64 88v16M40 56h48M56 56l-16-16M56 56l-16 16M72 56l16-16M72 56l16 16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 600,
        "name": "Load-Balancer-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 24v24M40 48l24 24 24-24M32 96h64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/><circle cx=\"64\" cy=\"96\" r=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 601,
        "name": "Loading-Dots-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"64\" r=\"8\" fill=\"#455A64\"/><circle cx=\"64\" cy=\"64\" r=\"8\" fill=\"#455A64\"/><circle cx=\"96\" cy=\"64\" r=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 602,
        "name": "Loan-Approval-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96l32-64 32 64M48 64h32\" stroke=\"#00E676\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 603,
        "name": "Lobby-Lounge-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"32\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M40 80l48-48\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 604,
        "name": "Location-Arrow-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 24l48 80-48-24-48 24 48-80z\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 605,
        "name": "Location-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16C44 16 28 32 28 52c0 24 36 60 36 60s36-36 36-60c0-20-16-36-36-36z\" fill=\"#FF1744\"/><circle cx=\"64\" cy=\"52\" r=\"12\" fill=\"#FFFFFF\"/></svg>"
    },
    {
        "id": 606,
        "name": "Lock-Open-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"64\" width=\"64\" height=\"48\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 64V40c0-8 8-16 16-16s16 8 16 16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 607,
        "name": "Lock-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"30\" width=\"32\" height=\"24\" rx=\"4\" fill=\"#455A64\"/><path d=\"M22 30V20C22 14 26 10 32 10C38 10 42 14 42 20V30\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 608,
        "name": "Lock-Private-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"64\" width=\"64\" height=\"40\" rx=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 64V40c0-8.8 7.2-16 16-16s16 7.2 16 16v24M64 76v16\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 609,
        "name": "Log-File-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"24\" width=\"64\" height=\"80\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 40h32M48 56h32M48 72h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 610,
        "name": "Logarithmic-Curve-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96c32 0 64-16 64-64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 611,
        "name": "Logic-Branch-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 64h24M64 64l32-32M64 64l32 32\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/><circle cx=\"32\" cy=\"64\" r=\"8\" fill=\"#455A64\"/><circle cx=\"96\" cy=\"32\" r=\"8\" fill=\"#455A64\"/><circle cx=\"96\" cy=\"96\" r=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 612,
        "name": "Logic-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 32h48v48H40V32zm0 16h48m-48 16h48\" stroke=\"#00E5FF\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 613,
        "name": "LogiState-Abstract-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 16h96v96H16V16zM64 16v96M16 64h96\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 614,
        "name": "LogiState-Brand-Final-Master",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 16v96M16 64h96M48 32l32 64M80 32l-32 64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 615,
        "name": "LogiState-Brand-Master",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M32 64h64M64 32v64M48 48l32 32M80 48l-32 32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 616,
        "name": "LogiState-Civic-Master",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l48 32-16 48H32L16 48 64 16zM64 32v64M32 64h64\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 617,
        "name": "LogiState-Core-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16L16 64l48 48 48-48L64 16z\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 48l16 16-16 16-16-16 16-16z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 618,
        "name": "LogiState-Finance-Master",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 32l48-16 48 16-48 80-48-80z\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 48v32M48 64h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 619,
        "name": "LogiState-Gaming-Master",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 48h64L64 16 32 48zM32 80h64L64 112 32 80z\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"64\" r=\"16\" stroke=\"#00E5FF\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 620,
        "name": "LogiState-Master-Entertainment",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 48l32 32M80 48l-32 32\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 621,
        "name": "LogiState-Sports-Master",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M32 64c0 32 32 32 32 0s32-32 32 0\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 622,
        "name": "LogiState-Travel-Master",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 16v96M16 64h96M48 32l32 64M80 32l-32 64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 623,
        "name": "Loop-Premium",
        "category": "shapes",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 32C24 24 16 24 16 32C16 40 24 40 32 32C40 24 48 24 48 32C48 40 40 40 32 32C24 24 24 16 32 16C40 16 48 24 48 32\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 624,
        "name": "Low-Power-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"44\" width=\"72\" height=\"40\" rx=\"4\" stroke=\"#FF1744\" stroke-width=\"4\"/><path d=\"M104 56h4v16h-4z\" stroke=\"#FF1744\" stroke-width=\"4\"/><rect x=\"32\" y=\"52\" width=\"16\" height=\"24\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 625,
        "name": "Luggage-Storage-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"40\" width=\"48\" height=\"64\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M56 40v-8h16v8\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 626,
        "name": "Magnet-Down-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 32v40c0 13 11 24 24 24s24-11 24-24V32M40 32h16M72 32h16\" stroke=\"#00E5FF\" stroke-width=\"8\"/></svg>"
    },
    {
        "id": 627,
        "name": "Magnet-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 16V40C20 48 26 54 32 54C38 54 44 48 44 40V16H34V40C34 42 32 44 32 44C30 44 28 42 28 40V16H20Z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 628,
        "name": "Magnet-U-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 16H30V40C30 46 34 50 40 50C46 50 50 46 50 40V16H60V40C60 52 50 60 40 60C30 60 20 52 20 40V16Z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 629,
        "name": "Magnet-Up-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 96V56c0-13 11-24 24-24s24 11 24 24v40M40 96h16M72 96h16\" stroke=\"#00E5FF\" stroke-width=\"8\"/></svg>"
    },
    {
        "id": 630,
        "name": "Mail-Open-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 48l40 32 40-32v40H24V48zM24 48l40 24 40-24\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 631,
        "name": "Mail-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 20V44H54V20L32 36L10 20Z\" fill=\"#455A64\"/><path d=\"M10 20L32 36L54 20\" stroke=\"#FFFFFF\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 632,
        "name": "Mailbox-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 24H52V48C52 50 50 52 48 52H16C14 52 12 50 12 48V24Z\" fill=\"#455A64\"/><rect x=\"12\" y=\"16\" width=\"40\" height=\"8\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 633,
        "name": "Maintenance-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l48 24-16 64H32l-16-64L64 16z\"/><path d=\"M64 48v32M48 64h32\" stroke=\"#FFFFFF\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 634,
        "name": "Mana-Potion-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 32h32v32l-16 32-16-32V32z\" stroke=\"#2979FF\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 635,
        "name": "Management-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"20\" r=\"10\" fill=\"#455A64\"/><path d=\"M16 54C16 44 24 36 32 36C40 36 48 44 48 54\" fill=\"#455A64\"/><path d=\"M32 20V32\" stroke=\"#FFFFFF\" stroke-width=\"2\"/></svg>"
    },
    {
        "id": 636,
        "name": "Map-Marker-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 24c-24 0-40 16-40 40 0 32 40 56 40 56s40-24 40-56c0-24-16-40-40-40z\" stroke=\"#FF1744\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"64\" r=\"8\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 637,
        "name": "Map-Pin-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 10C24 10 18 16 18 24C18 36 32 54 32 54C32 54 46 36 46 24C46 16 40 10 32 10Z\" fill=\"#FF1744\"/><circle cx=\"32\" cy=\"24\" r=\"6\" fill=\"#FFFFFF\"/></svg>"
    },
    {
        "id": 638,
        "name": "Map-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 32l32-16 40 16 16-8v64L80 112l-40-16-16 8V32z\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 639,
        "name": "Margin-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"24\" width=\"12\" height=\"24\" fill=\"#00E676\"/><rect x=\"36\" y=\"32\" width=\"12\" height=\"16\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 640,
        "name": "Market-Sentiment-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"48\" cy=\"48\" r=\"8\" fill=\"#455A64\"/><circle cx=\"80\" cy=\"48\" r=\"8\" fill=\"#455A64\"/><path d=\"M40 80c16 16 32 16 48 0\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 641,
        "name": "MartialArts-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"28\" width=\"40\" height=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 642,
        "name": "Mask-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><rect x=\"16\" y=\"30\" width=\"32\" height=\"12\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 643,
        "name": "Match-Analysis-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96l32-48 32 48M64 32v64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 644,
        "name": "Maximize-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 32h64v64H32V32z\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M96 64h-32M64 96V64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 645,
        "name": "Medal-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"24\" r=\"16\" fill=\"#00E5FF\"/><rect x=\"24\" y=\"36\" width=\"16\" height=\"16\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 646,
        "name": "Medic-Premium",
        "category": "occupations",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"24\" width=\"16\" height=\"16\" fill=\"#455A64\"/><path d=\"M32 20V44M20 32H44\" stroke=\"#FF1744\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 647,
        "name": "Medium-Logo-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 64c0-24 24-48 48-48s48 24 48 48-24 48-48 48-48-24-48-48z\" fill=\"#000\"/><text x=\"40\" y=\"80\" fill=\"#FFF\" font-size=\"48\" font-weight=\"bold\">M</text></svg>"
    },
    {
        "id": 648,
        "name": "Medium-Premium",
        "category": "brand",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"12\" width=\"40\" height=\"40\" fill=\"#455A64\"/><path d=\"M24 20C28 20 32 24 32 32C32 40 28 44 24 44C20 44 16 40 16 32C16 24 20 20 24 20Z\" fill=\"#FFFFFF\"/></svg>"
    },
    {
        "id": 649,
        "name": "Meeting-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"32\" cy=\"32\" rx=\"24\" ry=\"12\" fill=\"#455A64\"/><circle cx=\"16\" cy=\"32\" r=\"6\" fill=\"#00E5FF\"/><circle cx=\"48\" cy=\"32\" r=\"6\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 650,
        "name": "Melody-Premium",
        "category": "arts",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 16V44M24 44C24 48 28 52 32 52C36 52 40 48 40 44C40 40 36 36 32 36C28 36 24 40 24 44\" stroke=\"#00E676\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 651,
        "name": "Menu-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 40h64M32 64h64M32 88h64\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 652,
        "name": "Merge-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 88c16 0 16-32 32-32h16M40 40c16 0 16 32 32 32h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 653,
        "name": "Message-Queue-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 48h80M24 80h80M48 32v64M80 32v64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 654,
        "name": "Messenger-Premium",
        "category": "brand",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 44V20C12 12 24 8 32 8C40 8 52 12 52 20V44C52 48 48 52 44 52H20L12 44Z\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 655,
        "name": "Meta-Premium",
        "category": "brand",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M32 20C26 20 20 26 20 32C20 38 26 44 32 44C38 44 44 38 44 32C44 26 38 20 32 20Z\" fill=\"#00E5FF\"/><path d=\"M44 32C44 26 38 20 32 20V44C38 44 44 38 44 32Z\" fill=\"#FF1744\"/><path d=\"M20 32C20 38 26 44 32 44V20C26 20 20 26 20 32Z\" fill=\"#00E676\"/></g></svg>"
    },
    {
        "id": 656,
        "name": "Mic-Off-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"48\" y=\"16\" width=\"32\" height=\"64\" rx=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M32 112l64-64\" stroke=\"#FF1744\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 657,
        "name": "Mic-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"24\" r=\"12\" fill=\"#455A64\"/><rect x=\"28\" y=\"36\" width=\"8\" height=\"16\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 658,
        "name": "Mic-Studio-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"12\" width=\"16\" height=\"24\" rx=\"8\" fill=\"#455A64\"/><rect x=\"30\" y=\"36\" width=\"4\" height=\"16\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 659,
        "name": "Microchip-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" rx=\"8\" stroke=\"#00E5FF\" stroke-width=\"6\"/><path d=\"M32 48h-8M32 80h-8M96 48h8M96 80h8M48 32v-8M80 32v-8M48 96v8M80 96v8\" stroke=\"#00E5FF\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 660,
        "name": "Microphone-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"48\" y=\"16\" width=\"32\" height=\"64\" rx=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 80v32M40 112h48\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 661,
        "name": "Microphone-Stand-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"40\" r=\"24\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 64v48M48 112h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 662,
        "name": "Microservice-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"24\" stroke=\"#00E5FF\" stroke-width=\"6\"/><path d=\"M64 24v16M64 88v16M24 64h16M88 64h16\" stroke=\"#00E5FF\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 663,
        "name": "Microsoft-Premium",
        "category": "brand",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><rect x=\"6\" y=\"6\" width=\"24\" height=\"24\" fill=\"#00E5FF\"/><rect x=\"34\" y=\"6\" width=\"24\" height=\"24\" fill=\"#00E676\"/><rect x=\"6\" y=\"34\" width=\"24\" height=\"24\" fill=\"#FF1744\"/><rect x=\"34\" y=\"34\" width=\"24\" height=\"24\" fill=\"#455A64\"/></g></svg>"
    },
    {
        "id": 664,
        "name": "Microsoft-Teams-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 48H16v48h64V64H48z\" fill=\"#6264A7\"/><path d=\"M80 32l32 16-32 16-32-16 32-16z\" fill=\"#464775\"/></svg>"
    },
    {
        "id": 665,
        "name": "Milestone-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16v96M64 32l32 32-32 32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/><circle cx=\"64\" cy=\"64\" r=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 666,
        "name": "Mindblown-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"20\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M32 12V2M48 20L58 10M52 32H62M48 44L58 54M32 52V62M16 44L6 54M12 32H2M16 20L6 10\" stroke=\"#FF1744\" stroke-width=\"4\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 667,
        "name": "Minimize-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 64h64\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 668,
        "name": "Minus-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 32H48\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 669,
        "name": "Modal-Window-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"24\" width=\"80\" height=\"80\" rx=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><rect x=\"40\" y=\"40\" width=\"48\" height=\"48\" fill=\"#E0E0E0\"/></svg>"
    },
    {
        "id": 670,
        "name": "Monday-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"16\" fill=\"#FF3D57\"/><circle cx=\"32\" cy=\"96\" r=\"16\" fill=\"#00C875\"/><circle cx=\"96\" cy=\"64\" r=\"16\" fill=\"#579BFC\"/></svg>"
    },
    {
        "id": 671,
        "name": "Money-Bag-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"48\" width=\"64\" height=\"56\" rx=\"8\" stroke=\"#00E676\" stroke-width=\"6\"/><path d=\"M56 48v-8c0-8 8-16 16-16s16 8 16 16v8\" stroke=\"#00E676\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 672,
        "name": "Monitor-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"24\" width=\"96\" height=\"64\" rx=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 88v16M48 104h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 673,
        "name": "Monitoring-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 96l24-48 24 32 24-48 24 16\" stroke=\"#00E5FF\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 674,
        "name": "Moon-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 10C44 10 54 20 54 32C54 44 44 54 32 54C20 54 10 44 10 32C10 20 20 10 32 10Z\" fill=\"#455A64\"/><path d=\"M32 14C22 14 14 22 14 32C14 42 22 50 32 50C42 50 50 42 50 32C50 22 42 14 32 14Z\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 675,
        "name": "Motherboard-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"24\" width=\"80\" height=\"80\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"64\" r=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M40 40h16M72 40h16M40 88h16M72 88h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 676,
        "name": "Motion-Sensor-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"40\" width=\"48\" height=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 32v64M32 64h64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-dasharray=\"4 4\"/></svg>"
    },
    {
        "id": 677,
        "name": "Mountain-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 104l32-64 24 24 24-40 24 80H24z\" fill=\"#00E676\"/></svg>"
    },
    {
        "id": 678,
        "name": "Movie-Clapper-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"40\" width=\"80\" height=\"56\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M24 64l80-24\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 679,
        "name": "Multiplayer-Lobby-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"48\" cy=\"64\" r=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"80\" cy=\"64\" r=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 64h8\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 680,
        "name": "Multiplayer-Queue-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"48\" cy=\"64\" r=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"80\" cy=\"64\" r=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 64h8\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 681,
        "name": "Municipality-Premium",
        "category": "government",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"24\" width=\"40\" height=\"28\" fill=\"#455A64\"/><path d=\"M32 12L12 24H52L32 12Z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 682,
        "name": "Mural-Premium",
        "category": "arts",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"20\" width=\"24\" height=\"8\" fill=\"#455A64\"/><path d=\"M32 28V52\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 683,
        "name": "Music-Album-Art-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"64\" r=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 684,
        "name": "Music-Festival-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 32v64M32 64h64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 685,
        "name": "Music-Note-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M56 24v56c0 16-16 16-16 16s-16 0-16-16 16-16 16-16h32V24h32\" stroke=\"#00E5FF\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 686,
        "name": "Music-Playlist-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 40h64M32 64h64M32 88h32\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 687,
        "name": "Music-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 16V44C24 48 20 52 16 52C12 52 8 48 8 44C8 40 12 36 16 36V24H32V44C32 48 28 52 24 52C20 52 16 48 16 44\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 688,
        "name": "Music-Production-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 48h64M32 80h64M48 32v64M80 32v64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 689,
        "name": "Mute-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"24\" r=\"12\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M16 16L48 48\" stroke=\"#455A64\" stroke-width=\"4\"/><rect x=\"28\" y=\"36\" width=\"8\" height=\"12\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 690,
        "name": "Mutual-Fund-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"48\" cy=\"64\" r=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"80\" cy=\"64\" r=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"32\" r=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 691,
        "name": "Nation-Premium",
        "category": "government",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 12V52M20 12H44L36 24L44 36H20\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 692,
        "name": "Navigate-Premium",
        "category": "shapes",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 32H52M40 20L52 32L40 44\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 693,
        "name": "Navigation-Menu-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 40h64M32 64h64M32 88h64\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 694,
        "name": "Navigation-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16L32 112l32-16 32 16L64 16z\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 695,
        "name": "Navigator-Premium",
        "category": "occupations",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 44L32 12L44 44H20Z\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M24 36H40\" stroke=\"#455A64\" stroke-width=\"2\"/></svg>"
    },
    {
        "id": 696,
        "name": "Nerd-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><rect x=\"18\" y=\"24\" width=\"28\" height=\"8\" stroke=\"#455A64\" stroke-width=\"2\"/><line x1=\"32\" y1=\"24\" x2=\"32\" y2=\"32\" stroke=\"#455A64\" stroke-width=\"2\"/><path d=\"M26 42C30 46 34 46 38 42\" stroke=\"#455A64\" stroke-width=\"4\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 697,
        "name": "Net-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"20\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M32 12V52M12 32H52\" stroke=\"#455A64\" stroke-width=\"2\"/></svg>"
    },
    {
        "id": 698,
        "name": "Netflix-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 32v64h16V48l32 48h16V32H80v48L48 32H32z\" fill=\"#E50914\"/></svg>"
    },
    {
        "id": 699,
        "name": "Network-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M32 6V58M6 32H58\" stroke=\"#00E5FF\" stroke-width=\"2\"/></svg>"
    },
    {
        "id": 700,
        "name": "Neural-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 32C12 20 20 12 32 12C44 12 52 20 52 32C52 44 44 52 32 52\" stroke=\"#00E5FF\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 701,
        "name": "Neutral-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"22\" cy=\"24\" r=\"3\" fill=\"#455A64\"/><circle cx=\"42\" cy=\"24\" r=\"3\" fill=\"#455A64\"/><line x1=\"22\" y1=\"42\" x2=\"42\" y2=\"42\" stroke=\"#455A64\" stroke-width=\"4\" stroke-linecap=\"round\"/></g></svg>"
    },
    {
        "id": 702,
        "name": "NFT-Asset-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l48 32-16 48H32L16 48 64 16z\" stroke=\"#9C27B0\" stroke-width=\"6\"/><path d=\"M48 48l32 32\" stroke=\"#9C27B0\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 703,
        "name": "Nintendo-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" rx=\"8\" fill=\"#E60012\"/></svg>"
    },
    {
        "id": 704,
        "name": "Node-Connect-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"16\" cy=\"16\" r=\"6\" fill=\"#455A64\"/><circle cx=\"48\" cy=\"16\" r=\"6\" fill=\"#455A64\"/><circle cx=\"32\" cy=\"48\" r=\"6\" fill=\"#455A64\"/><path d=\"M16 22L32 42M48 22L32 42\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 705,
        "name": "Node-Link-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"64\" r=\"8\" fill=\"#455A64\"/><circle cx=\"96\" cy=\"64\" r=\"8\" fill=\"#455A64\"/><path d=\"M40 64h48\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 706,
        "name": "Note-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 16V44C24 48 20 52 16 52C12 52 8 48 8 44C8 40 12 36 16 36V24H32V44C32 48 28 52 24 52C20 52 16 48 16 44\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 707,
        "name": "Notes-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"24\" width=\"64\" height=\"80\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 40h32M48 56h32M48 72h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 708,
        "name": "Notification-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16c-16 0-32 16-32 32v32l-16 16v8h96v-8l-16-16V48c0-16-16-32-32-32zM48 112h32\" stroke=\"#FFD600\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 709,
        "name": "Notifications-Premium",
        "category": "app",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M22 44V26C22 18 28 12 36 12C44 12 50 18 50 26V44H22Z\" fill=\"#455A64\"/><path d=\"M28 50H44\" stroke=\"#00E5FF\" stroke-width=\"4\" stroke-linecap=\"round\"/><circle cx=\"36\" cy=\"18\" r=\"3\" fill=\"#FF1744\"/></g></svg>"
    },
    {
        "id": 710,
        "name": "Notion-Premium",
        "category": "brand",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"16\" width=\"24\" height=\"32\" rx=\"2\" fill=\"#455A64\"/><path d=\"M24 20L40 48\" stroke=\"#FFFFFF\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 711,
        "name": "Null-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"20\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M18 46L46 18\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 712,
        "name": "Object-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" rx=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 48h32M48 64h32M48 80h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 713,
        "name": "Obsidian-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l48 32-16 64H32L16 48 64 16z\" fill=\"#7B3FE4\"/></svg>"
    },
    {
        "id": 714,
        "name": "Octagon-Premium",
        "category": "shapes",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 12H40L52 24V40L40 52H24L12 40V24L24 12Z\" stroke=\"#FF1744\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 715,
        "name": "Officer-Premium",
        "category": "occupations",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12L52 20V36C52 46 32 52 32 52C32 52 12 46 12 36V20L32 12Z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 716,
        "name": "Offline-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 48C36 48 40 44 40 40C40 36 36 32 32 32C28 32 24 36 24 40C24 44 28 48 32 48Z\" fill=\"#455A64\"/><path d=\"M16 16L48 48\" stroke=\"#FF1744\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 717,
        "name": "OpenSource-Premium",
        "category": "brand",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"20\" stroke=\"#00E676\" stroke-width=\"6\"/><circle cx=\"32\" cy=\"32\" r=\"8\" fill=\"#00E676\"/></svg>"
    },
    {
        "id": 718,
        "name": "Optimize-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l32 32-32 32-32-32 32-32zM64 80v32\" stroke=\"#00E676\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 719,
        "name": "Organization-Chart-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"32\" r=\"16\" fill=\"#455A64\"/><path d=\"M64 48v16M32 64h64M32 64v16M64 64v16M96 64v16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 720,
        "name": "Orthodontist-Premium",
        "category": "occupations",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 28C20 20 28 16 32 16C36 16 44 20 44 28V48H20V28Z\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 721,
        "name": "Package-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 40l32-16 32 16v48l-32 16-32-16V40z\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M32 40l32 16 32-16M64 56v48\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 722,
        "name": "Pad-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"24\" width=\"44\" height=\"20\" rx=\"6\" fill=\"#455A64\"/><circle cx=\"22\" cy=\"34\" r=\"4\" fill=\"#00E5FF\"/><circle cx=\"42\" cy=\"34\" r=\"4\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 723,
        "name": "Pagination-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"64\" r=\"8\" fill=\"#455A64\"/><circle cx=\"64\" cy=\"64\" r=\"8\" fill=\"#455A64\"/><circle cx=\"96\" cy=\"64\" r=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 724,
        "name": "Pair-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"20\" cy=\"24\" r=\"8\" fill=\"#455A64\"/><circle cx=\"44\" cy=\"24\" r=\"8\" fill=\"#455A64\"/><path d=\"M8 56C8 44 20 36 28 36C36 36 48 44 48 56M36 56C36 44 44 36 52 36C60 36 68 44 68 56\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 725,
        "name": "Palette-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 6C18 6 6 18 6 32C6 46 18 58 32 58C46 58 58 46 58 32C58 18 46 6 32 6Z\" fill=\"#455A64\"/><circle cx=\"20\" cy=\"24\" r=\"4\" fill=\"#FF1744\"/><circle cx=\"36\" cy=\"20\" r=\"4\" fill=\"#00E676\"/><circle cx=\"44\" cy=\"36\" r=\"4\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 726,
        "name": "Paper-Fold-Premium",
        "category": "arts",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 32L32 12L52 32L32 52L12 32Z\" stroke=\"#00E676\" stroke-width=\"4\"/><path d=\"M32 12V52\" stroke=\"#00E676\" stroke-width=\"2\"/></svg>"
    },
    {
        "id": 727,
        "name": "Parallax-Depth-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" stroke=\"#455A64\" stroke-width=\"6\"/><rect x=\"40\" y=\"40\" width=\"48\" height=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 728,
        "name": "Paramount-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16c24 0 48 24 48 48s-24 48-48 48-48-24-48-48 24-48 48-48z\" fill=\"#0064FF\"/></svg>"
    },
    {
        "id": 729,
        "name": "Park-Maintenance-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l32 32-16 64H48L32 48 64 16z\" stroke=\"#00E676\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 730,
        "name": "Partnership-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"48\" cy=\"64\" r=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"80\" cy=\"64\" r=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 80v16M80 80v16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 731,
        "name": "Party-Balloon-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"24\" r=\"16\" fill=\"#00E5FF\"/><path d=\"M32 40V56\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 732,
        "name": "Party-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 54L32 32L54 54L32 10L10 54Z\" fill=\"#FF1744\"/><circle cx=\"32\" cy=\"32\" r=\"6\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 733,
        "name": "Passport-Control-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"24\" width=\"64\" height=\"80\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><rect x=\"48\" y=\"40\" width=\"32\" height=\"32\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 734,
        "name": "Password-Field-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"48\" width=\"80\" height=\"32\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"40\" cy=\"64\" r=\"6\" fill=\"#455A64\"/><circle cx=\"56\" cy=\"64\" r=\"6\" fill=\"#455A64\"/><circle cx=\"72\" cy=\"64\" r=\"6\" fill=\"#455A64\"/><circle cx=\"88\" cy=\"64\" r=\"6\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 735,
        "name": "Patch-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"40\" width=\"48\" height=\"48\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 40v48M40 64h48\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 736,
        "name": "Path-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"16\" cy=\"48\" r=\"4\" fill=\"#455A64\"/><circle cx=\"48\" cy=\"16\" r=\"4\" fill=\"#455A64\"/><path d=\"M20 44C32 44 32 20 44 20\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 737,
        "name": "Patreon-Premium",
        "category": "brand",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"16\" width=\"8\" height=\"32\" fill=\"#455A64\"/><circle cx=\"36\" cy=\"24\" r=\"12\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 738,
        "name": "Pattern-Premium",
        "category": "arts",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"12\" width=\"40\" height=\"40\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"32\" cy=\"32\" r=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 739,
        "name": "Pause-Premium",
        "category": "media",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><rect x=\"18\" y=\"16\" width=\"10\" height=\"32\" fill=\"#455A64\"/><rect x=\"36\" y=\"16\" width=\"10\" height=\"32\" fill=\"#455A64\"/></g></svg>"
    },
    {
        "id": 740,
        "name": "PayPal-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 40h16c16 0 24 8 24 24s-8 24-24 24H48v24H24V16h40c24 0 40 8 40 32s-16 32-40 32H48V40z\" fill=\"#00457C\"/></svg>"
    },
    {
        "id": 741,
        "name": "Payroll-Processing-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 48h64M48 64v32M80 64v32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 742,
        "name": "PC-Gaming-Rig-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 48h32M48 64h32M48 80h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 743,
        "name": "PDF-File-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 16h48l24 24v72H32V16z\"/><path d=\"M56 64h16c8 0 8 16 0 16H56V64zM56 64v16M80 64h8v8h-8\" stroke=\"#FFFFFF\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 744,
        "name": "Peace-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M32 10V32M32 32L14 50M32 32L50 50\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 745,
        "name": "Peacock-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16c-32 0-48 32-48 48s16 48 48 48 48-32 48-48-16-48-48-48z\" fill=\"#000\"/></svg>"
    },
    {
        "id": 746,
        "name": "Pen-Brush-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 88L88 40l16 16-48 48L40 88z\" fill=\"#00E5FF\"/><path d=\"M32 96l16 16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 747,
        "name": "Pen-Tool-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 88L88 40l16 16-48 48L40 88z\" fill=\"#00E5FF\"/><circle cx=\"40\" cy=\"88\" r=\"8\" stroke=\"#00E5FF\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 748,
        "name": "Pentagon-Premium",
        "category": "shapes",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12L52 28L44 52H20L12 28L32 12Z\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 749,
        "name": "Percentage-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"40\" r=\"8\" fill=\"#455A64\"/><circle cx=\"88\" cy=\"88\" r=\"8\" fill=\"#455A64\"/><path d=\"M96 32L32 96\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 750,
        "name": "Performer-Premium",
        "category": "occupations",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 16V44C24 48 28 52 32 52C36 52 40 48 40 44V24\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"20\" cy=\"44\" r=\"4\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 751,
        "name": "Phase-Shift-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 64h32l32-32h32M24 64h32l32 32h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 752,
        "name": "Phone-Portrait-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"16\" width=\"48\" height=\"96\" rx=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"100\" r=\"4\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 753,
        "name": "Phone-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M44 24c0-4 4-8 8-8h24c4 0 8 4 8 8v80c0 4-4 8-8 8H52c-4 0-8-4-8-8V24z\" stroke=\"#00E676\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"100\" r=\"4\" fill=\"#00E676\"/></svg>"
    },
    {
        "id": 754,
        "name": "Piano-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"20\" width=\"40\" height=\"24\" rx=\"2\" fill=\"#455A64\"/><rect x=\"16\" y=\"20\" width=\"4\" height=\"16\" fill=\"#FFFFFF\"/><rect x=\"24\" y=\"20\" width=\"4\" height=\"16\" fill=\"#FFFFFF\"/></svg>"
    },
    {
        "id": 755,
        "name": "Pie-Chart-Segment-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 64l48-24A48 48 0 0164 16v48z\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 756,
        "name": "Pie-Chart-Split-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 64L112 64A48 48 0 0064 16V64z\" fill=\"#00E676\"/></svg>"
    },
    {
        "id": 757,
        "name": "Piggy-Bank-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M80 48c0 16-16 32-48 32-16 0-16-16-16-16s0-16 16-16c8 0 16 8 16 8l16-8z\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M72 40l8-8\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 758,
        "name": "Pill-Premium",
        "category": "shapes",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"12\" width=\"24\" height=\"40\" rx=\"20\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 759,
        "name": "Pin-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><circle cx=\"32\" cy=\"24\" r=\"10\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M32 34V54\" stroke=\"#455A64\" stroke-width=\"4\" stroke-linecap=\"round\"/></g></svg>"
    },
    {
        "id": 760,
        "name": "Pinned-Heart-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 54L12 30C12 20 20 12 32 18C44 12 52 20 52 30L32 54Z\" fill=\"#FF1744\"/><circle cx=\"32\" cy=\"24\" r=\"6\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 761,
        "name": "Pinterest-Premium",
        "category": "social",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><circle cx=\"32\" cy=\"32\" r=\"26\" fill=\"#FF1744\"/><path d=\"M36 20C32 20 28 22 28 28C28 32 30 34 32 34C34 34 36 32 36 30C36 28 34 26 30 26C28 26 26 28 26 32C26 38 30 42 36 42C42 42 46 36 46 28C46 22 42 20 36 20Z\" fill=\"#FFFFFF\"/></g></svg>"
    },
    {
        "id": 762,
        "name": "Pinterest-Standard-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16C36 16 16 36 16 64c0 24 16 48 40 48 16 0 24-8 24-24 0-16-16-16-16-32 0-8 8-16 16-16 8 0 16 8 16 24 0 24-16 40-40 40-24 0-48-24-48-56 0-32 24-56 56-56 24 0 40 8 40 32 0 24-16 40-32 40-8 0-16-8-16-16\" fill=\"#E60023\"/></svg>"
    },
    {
        "id": 763,
        "name": "Pipeline-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"40\" r=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"64\" r=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"96\" cy=\"88\" r=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M40 40l16 16M72 64l16 16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 764,
        "name": "Pitch-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"16\" width=\"40\" height=\"28\" rx=\"2\" fill=\"#455A64\"/><path d=\"M20 44V56M44 44V56\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 765,
        "name": "Pizza-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 10L10 54H54L32 10Z\" fill=\"#FF1744\"/><path d=\"M32 20L20 44H44L32 20Z\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 766,
        "name": "Plan-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 12H52V52H12V12Z\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M12 24H52M24 12V52\" stroke=\"#455A64\" stroke-width=\"2\"/></svg>"
    },
    {
        "id": 767,
        "name": "Plane-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 32L54 10L32 54L24 32L10 32Z\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 768,
        "name": "Platformer-Jump-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96h64M48 64l32-32 32 32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 769,
        "name": "Play-Circle-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M56 56l24 8-24 8V56z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 770,
        "name": "Play-Premium",
        "category": "media",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><polygon points=\"20,16 50,32 20,48\" fill=\"#455A64\"/></g></svg>"
    },
    {
        "id": 771,
        "name": "Play-Queue-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 48h64M32 64h48M32 80h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 772,
        "name": "Play-Session-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 32l64 64M96 32l-64 64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 773,
        "name": "PlayStation-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 64l32-16 32 16-32 48-32-48z\" fill=\"#003791\"/></svg>"
    },
    {
        "id": 774,
        "name": "Plus-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 16V48M16 32H48\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 775,
        "name": "Plus-Sign-Premium",
        "category": "shapes",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12V52M12 32H52\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 776,
        "name": "Podcast-Audio-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 32v32c0 16 16 32 32 32s32-16 32-32V32\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M32 64v16M96 64v16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 777,
        "name": "Podium-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"20\" r=\"8\" fill=\"#455A64\"/><rect x=\"30\" y=\"28\" width=\"4\" height=\"24\" fill=\"#455A64\"/><rect x=\"20\" y=\"52\" width=\"24\" height=\"4\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 778,
        "name": "Police-Station-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l48 32v32l-48 32-48-32V48l48-32z\" stroke=\"#2979FF\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 779,
        "name": "Policy-Premium",
        "category": "government",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"24\" width=\"40\" height=\"28\" rx=\"2\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M24 20H40\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 780,
        "name": "Poll-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"16\" width=\"32\" height=\"32\" rx=\"4\" fill=\"#455A64\"/><path d=\"M24 24H40M24 32H32\" stroke=\"#FFFFFF\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 781,
        "name": "Popcorn-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 20L24 54H40L44 20H20Z\" fill=\"#455A64\"/><path d=\"M28 12C24 16 26 20 30 20C34 20 36 16 32 12Z\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 782,
        "name": "Portfolio-Management-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 48l32 32M48 80l32-32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 783,
        "name": "Postal-Services-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"40\" width=\"80\" height=\"48\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M24 48l40 24 40-24\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 784,
        "name": "Postman-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l48 32-16 64H32L16 48 64 16z\" fill=\"#FF6C37\"/></svg>"
    },
    {
        "id": 785,
        "name": "Power-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 24v40M44 32c-12 8-20 20-20 36 0 22 18 40 40 40s40-18 40-40c0-16-8-28-20-36\" stroke=\"#FF1744\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 786,
        "name": "Precision-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"24\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"32\" cy=\"32\" r=\"12\" stroke=\"#FF1744\" stroke-width=\"4\"/><circle cx=\"32\" cy=\"32\" r=\"4\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 787,
        "name": "Presentation-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"24\" width=\"80\" height=\"64\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 88v16M48 104h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 788,
        "name": "Press-Premium",
        "category": "arts",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"16\" width=\"32\" height=\"32\" fill=\"#455A64\"/><path d=\"M24 24H40M24 32H40M24 40H40\" stroke=\"#FFFFFF\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 789,
        "name": "Price-Tag-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 32l56 56-24 24L16 56V32h24z\" stroke=\"#00E676\" stroke-width=\"6\"/><circle cx=\"72\" cy=\"56\" r=\"8\" fill=\"#00E676\"/></svg>"
    },
    {
        "id": 790,
        "name": "Print-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"24\" width=\"32\" height=\"24\" fill=\"#455A64\"/><rect x=\"20\" y=\"12\" width=\"24\" height=\"12\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 791,
        "name": "Print-Preview-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 48h32M48 64h32M48 80h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/><path d=\"M96 32l16-16M96 96l16 16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 792,
        "name": "Privacy-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16L24 32v32c0 24 16 48 40 64 24-16 40-40 40-64V32L64 16z\" stroke=\"#00E676\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"64\" r=\"16\" fill=\"#00E676\"/></svg>"
    },
    {
        "id": 793,
        "name": "Pro-Gaming-Team-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 32l32 64H32L64 32z\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 794,
        "name": "Probability-Distribution-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96c16-64 48-64 64 0\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 795,
        "name": "Professional-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"20\" r=\"10\" fill=\"#455A64\"/><rect x=\"24\" y=\"36\" width=\"16\" height=\"24\" rx=\"2\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 796,
        "name": "Progress-Circle-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#E0E0E0\" stroke-width=\"6\"/><path d=\"M64 16a48 48 0 0148 48\" stroke=\"#00E5FF\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 797,
        "name": "Projector-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"24\" width=\"40\" height=\"20\" rx=\"4\" fill=\"#455A64\"/><circle cx=\"20\" cy=\"34\" r=\"6\" stroke=\"#FFFFFF\" stroke-width=\"2\"/></svg>"
    },
    {
        "id": 798,
        "name": "Proxy-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" rx=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 48h32M48 64h32M48 80h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 799,
        "name": "Pub-Sub-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"24\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 16v24M64 88v24M16 64h24M88 64h24\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 800,
        "name": "Public-Education-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l48 32-48 32-48-32 48-32zM48 64v32l16 16 16-16V64\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 801,
        "name": "Public-Health-Clinic-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 48v32M48 64h32\" stroke=\"#FF1744\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 802,
        "name": "Public-Housing-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l48 48H16L64 16zM32 64v32h64V64\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 803,
        "name": "Public-Parking-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" stroke=\"#455A64\" stroke-width=\"6\"/><text x=\"48\" y=\"80\" fill=\"#455A64\" font-size=\"48\">P</text></svg>"
    },
    {
        "id": 804,
        "name": "Public-Policy-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"24\" width=\"64\" height=\"80\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 48h32M48 64h32M48 80h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 805,
        "name": "Public-Records-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 48h32M48 64h32M48 80h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 806,
        "name": "Public-Safety-Alert-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l48 80H16L64 16zM64 48v24M64 96v4\" stroke=\"#FF1744\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 807,
        "name": "Public-Utilities-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16v96M32 64h64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 808,
        "name": "Public-Works-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96l64-64M48 96H32V80\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 809,
        "name": "Publish-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16v64M40 40l24-24 24 24M32 104h64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 810,
        "name": "Pull-Request-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"8\" fill=\"#455A64\"/><circle cx=\"32\" cy=\"96\" r=\"8\" fill=\"#455A64\"/><path d=\"M32 40v48M64 64l32 32M96 32v64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 811,
        "name": "Pulse-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 32H22L28 12L36 52L42 32H54\" stroke=\"#FF1744\" stroke-width=\"4\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 812,
        "name": "Puzzle-Block-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"40\" width=\"48\" height=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M40 40l48 48M88 40l-48 48\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 813,
        "name": "Puzzle-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 16H40V24H48V40H40V48H24V40H16V24H24V16Z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 814,
        "name": "QR-Code-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 48h16v16H48zM64 64h16v16H64zM48 80h16v16H48zM80 80h16v16H80z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 815,
        "name": "Quality-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l16 32h32l-24 24 8 32-24-16-24 16 8-32-24-24h32l16-32z\" stroke=\"#00E676\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 816,
        "name": "Quantum-Node-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\" stroke-dasharray=\"16 16\"/><circle cx=\"64\" cy=\"64\" r=\"16\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 817,
        "name": "Query-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 32l32 32-32 32M88 32v64\" stroke=\"#00E676\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 818,
        "name": "Quest-Log-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"24\" width=\"64\" height=\"80\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 48h32M48 64h32M48 80h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 819,
        "name": "Quest-Marker-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l32 48-32 48-32-48L64 16z\" stroke=\"#FFD600\" stroke-width=\"6\"/><path d=\"M64 48v16\" stroke=\"#FFD600\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 820,
        "name": "Queue-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"20\" r=\"10\" fill=\"#455A64\"/><path d=\"M16 54C16 44 24 36 32 36C40 36 48 44 48 54\"/><path d=\"M52 36V52H60\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 821,
        "name": "Quora-Premium",
        "category": "brand",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12C20 12 12 20 12 32C12 44 24 52 32 52C40 52 44 48 48 40L40 32C36 36 32 36 32 32C32 28 36 28 40 32L48 40C48 36 52 24 44 16C40 12 36 12 32 12Z\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 822,
        "name": "Racing-Telemetry-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96l32-48 32 32 32-64\" stroke=\"#FF1744\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 823,
        "name": "Radar-Chart-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l40 32-16 48H40L24 48 64 16z\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/><path d=\"M64 16v48M24 48l40 16M104 48l-40 16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 824,
        "name": "Radial-Symmetry-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 16v16M64 96v16M16 64h16M96 64h16M32 32l16 16M80 80l16 16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 825,
        "name": "Radio-Button-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"32\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"64\" r=\"16\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 826,
        "name": "Radius-Premium",
        "category": "arts",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"20\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M32 32L48 48\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 827,
        "name": "Rain-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 32C16 24 22 18 32 18C42 18 48 24 48 32C48 40 40 44 32 44\" stroke=\"#455A64\" stroke-width=\"4\"/><line x1=\"20\" y1=\"46\" x2=\"20\" y2=\"54\" stroke=\"#00E5FF\" stroke-width=\"4\"/><line x1=\"32\" y1=\"46\" x2=\"32\" y2=\"54\" stroke=\"#00E5FF\" stroke-width=\"4\"/><line x1=\"44\" y1=\"46\" x2=\"44\" y2=\"54\" stroke=\"#00E5FF\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 828,
        "name": "RAM-Module-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"48\" width=\"80\" height=\"32\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M40 56v16M56 56v16M72 56v16M88 56v16\" stroke=\"#455A64\" stroke-width=\"4\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 829,
        "name": "Rated-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 10L38 24H52L40 32L44 46L32 38L20 46L24 32L12 24H26L32 10Z\" fill=\"#00E676\"/></svg>"
    },
    {
        "id": 830,
        "name": "Rating-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12L38 26H52L40 34L44 48L32 40L20 48L24 34L12 26H26L32 12Z\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M28 44V56\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 831,
        "name": "Ratio-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"24\" width=\"16\" height=\"16\" fill=\"#455A64\"/><rect x=\"36\" y=\"16\" width=\"16\" height=\"32\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 832,
        "name": "Raycast-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" fill=\"#FF6363\"/></svg>"
    },
    {
        "id": 833,
        "name": "Receipt-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"16\" width=\"64\" height=\"96\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 40h32M48 64h32M48 88h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 834,
        "name": "Recursion-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 20C40 20 44 24 44 32C44 40 40 44 32 44C24 44 20 40 20 32C20 24 24 20 32 20Z\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M44 32H52\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 835,
        "name": "Recursive-Structure-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"40\" width=\"48\" height=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><rect x=\"56\" y=\"56\" width=\"16\" height=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 836,
        "name": "Recycle-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 64c0 17.7 14.3 32 32 32h32M96 64c0-17.7-14.3-32-32-32H32\" stroke=\"#00E676\" stroke-width=\"8\" stroke-linecap=\"round\"/><path d=\"M48 48L32 64l16 16M80 80l16-16-16-16\" stroke=\"#00E676\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 837,
        "name": "Reddit-Premium",
        "category": "social",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><circle cx=\"32\" cy=\"32\" r=\"22\" fill=\"#FF1744\"/><circle cx=\"22\" cy=\"26\" r=\"4\" fill=\"#FFFFFF\"/><circle cx=\"42\" cy=\"26\" r=\"4\" fill=\"#FFFFFF\"/><path d=\"M24 40C24 40 28 44 32 44C36 44 40 40 40 40\" stroke=\"#FFFFFF\" stroke-width=\"4\"/></g></svg>"
    },
    {
        "id": 838,
        "name": "Ref-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 24C40 32 32 40 24 40C16 40 8 32 8 24C8 16 16 8 24 8H40V24Z\" fill=\"#455A64\"/><rect x=\"40\" y=\"16\" width=\"16\" height=\"8\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 839,
        "name": "Referee-Whistle-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 64c0-16 16-16 16-16s16 0 16 16-8 16-16 16-16 0-16-16z\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M80 64h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 840,
        "name": "Refresh-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M52 32C52 43 43 52 32 52C21 52 12 43 12 32C12 21 21 12 32 12V20M12 32C12 21 21 12 32 12C43 12 52 21 52 32V24\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 841,
        "name": "Regional-Settings-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l48 32-16 48H32L16 48 64 16zM64 32v64M32 64h64\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 842,
        "name": "Registry-Premium",
        "category": "government",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"24\" r=\"8\" fill=\"#455A64\"/><rect x=\"16\" y=\"40\" width=\"32\" height=\"12\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 843,
        "name": "Reject-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" rx=\"4\" stroke=\"#FF1744\" stroke-width=\"6\"/><path d=\"M48 48l32 32M80 48l-32 32\" stroke=\"#FF1744\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 844,
        "name": "Release-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12L40 28H24L32 12Z\" fill=\"#FF1744\"/><rect x=\"24\" y=\"32\" width=\"16\" height=\"16\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 845,
        "name": "Remove-User-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"24\" r=\"10\" fill=\"#455A64\"/><path d=\"M16 56C16 46 24 40 32 40C40 40 48 46 48 56M44 8L56 20M56 8L44 20\" stroke=\"#FF1744\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 846,
        "name": "Rental-Car-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 80l16-32h48l16 32H24z\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"40\" cy=\"88\" r=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"88\" cy=\"88\" r=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 847,
        "name": "Repair-Premium",
        "category": "occupations",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 24L40 40M40 24L24 40\" stroke=\"#FF1744\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 848,
        "name": "Repository-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 24h48v80H32V40l16-16z\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 24v16h16\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 849,
        "name": "Researcher-Premium",
        "category": "occupations",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 12H40M32 12V44M20 44H44M24 52H40\" stroke=\"#00E5FF\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 850,
        "name": "Resort-Booking-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96l64-64-32-32L32 64v32z\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"80\" cy=\"48\" r=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 851,
        "name": "Resources-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 48h32M48 64h32M48 80h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 852,
        "name": "Restore-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 40c-16 0-32 16-32 32s16 32 32 32 32-16 32-32M40 16v24h24\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 853,
        "name": "Retirement-Planning-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 32v32l32 32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 854,
        "name": "Revenue-Premium",
        "category": "government",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"12\" width=\"32\" height=\"40\" rx=\"2\" fill=\"#00E676\"/><path d=\"M24 24H40M24 32H32\" stroke=\"#FFFFFF\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 855,
        "name": "Rhombus-Premium",
        "category": "shapes",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12L52 32L32 52L12 32L32 12Z\" stroke=\"#00E676\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 856,
        "name": "Ride-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 40C16 24 24 16 32 16C40 16 48 24 48 40H16Z\" fill=\"#455A64\"/><rect x=\"24\" y=\"24\" width=\"16\" height=\"8\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 857,
        "name": "Robot-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"16\" width=\"32\" height=\"32\" rx=\"4\" fill=\"#455A64\"/><circle cx=\"24\" cy=\"28\" r=\"4\" fill=\"#00E5FF\"/><circle cx=\"40\" cy=\"28\" r=\"4\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 858,
        "name": "Rocket-Launch-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l32 64-32-16-32 16L64 16z\" fill=\"#00E5FF\"/><path d=\"M64 80l16 32M64 80l-16 32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 859,
        "name": "Rocket-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 10L20 40H44L32 10Z\" fill=\"#455A64\"/><path d=\"M20 40L12 54H24L32 40\" fill=\"#00E5FF\"/><path d=\"M44 40L52 54H40L32 40\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 860,
        "name": "Roku-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" fill=\"#662D91\"/></svg>"
    },
    {
        "id": 861,
        "name": "Rollback-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 104V40M40 64l24 24 24-24M32 24h64\" stroke=\"#FF1744\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 862,
        "name": "Room-Service-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 48h64M48 64l16 16 32-32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 863,
        "name": "Rotation-Matrix-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"40\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 24l16-16M64 24l-16-16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 864,
        "name": "Router-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 96h80c8 0 8-16 0-16H24c-8 0-8 16 0 16z\" fill=\"#455A64\"/><path d=\"M48 80V48M80 80V48\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 865,
        "name": "RPG-Character-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"40\" r=\"24\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M40 80l48-16v48L40 80z\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 866,
        "name": "RSS-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"96\" r=\"8\" fill=\"#FFD600\"/><path d=\"M32 64c24 0 40 16 40 40M32 32c40 0 64 24 64 64\" stroke=\"#FFD600\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 867,
        "name": "Rugby-Ball-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"64\" cy=\"64\" rx=\"56\" ry=\"32\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 868,
        "name": "Ruler-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"48\" width=\"80\" height=\"32\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M40 48v32M56 48v32M72 48v32M88 48v32\" stroke=\"#455A64\" stroke-width=\"4\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 869,
        "name": "Runner-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"16\" r=\"8\" fill=\"#455A64\"/><path d=\"M24 32L32 24L48 40L40 56\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 870,
        "name": "Running-Shoes-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 80l48-16 32 32H24V80z\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 871,
        "name": "Sad-Mask-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 40C16 28 24 20 32 20C40 20 48 28 48 40C48 52 40 56 32 56C24 56 16 52 16 40Z\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 872,
        "name": "Sad-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"22\" cy=\"24\" r=\"3\" fill=\"#455A64\"/><circle cx=\"42\" cy=\"24\" r=\"3\" fill=\"#455A64\"/><path d=\"M22 44C26 38 38 38 42 44\" stroke=\"#FF1744\" stroke-width=\"4\" stroke-linecap=\"round\"/></g></svg>"
    },
    {
        "id": 873,
        "name": "Safe-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"22\" y=\"16\" width=\"20\" height=\"32\" rx=\"4\" fill=\"#FF1744\"/><rect x=\"28\" y=\"10\" width=\"8\" height=\"6\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 874,
        "name": "Sale-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 32l56 56-24 24L16 56V32h24z\" stroke=\"#FF1744\" stroke-width=\"6\"/><circle cx=\"72\" cy=\"56\" r=\"8\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 875,
        "name": "Salute-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M20 20L44 12L36 24\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 876,
        "name": "Satellite-Dish-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 64a40 40 0 0140 40M64 64V32M64 64h32\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/><circle cx=\"64\" cy=\"32\" r=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 877,
        "name": "Satellite-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M88 40l-48 48M64 16l48 48-24 24-48-48 24-24z\" fill=\"#00E5FF\"/><path d=\"M40 88L16 112\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 878,
        "name": "Saturation-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16L32 96h64L64 16z\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 24l24 64H40l24-64z\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 879,
        "name": "Save-Point-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l48 32-16 48H32L16 48 64 16z\" stroke=\"#00E676\" stroke-width=\"6\"/><path d=\"M48 48l16 16 32-32\" stroke=\"#00E676\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 880,
        "name": "Savings-Account-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"32\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 48v32M48 64h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 881,
        "name": "Sax-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M44 12V32C44 44 36 52 24 52V44\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 882,
        "name": "Scalar-Field-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 32h80M24 64h80M24 96h80M64 16v96\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 883,
        "name": "Scale-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 52L28 36L40 44L52 20\" stroke=\"#00E676\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 884,
        "name": "Scatter-Plot-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96h64M32 96V32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/><circle cx=\"48\" cy=\"80\" r=\"4\" fill=\"#455A64\"/><circle cx=\"64\" cy=\"56\" r=\"4\" fill=\"#455A64\"/><circle cx=\"80\" cy=\"40\" r=\"4\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 885,
        "name": "Schedule-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"24\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M32 32L44 44\" stroke=\"#FF1744\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 886,
        "name": "Schema-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 40h24v24H32zM72 40h24v24H72zM32 80h24v24H32zM72 80h24v24H72zM56 52h16M64 44v16M64 76v16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 887,
        "name": "Scope-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 40L24 28L52 56L40 64L12 40Z\" fill=\"#455A64\"/><rect x=\"36\" y=\"16\" width=\"16\" height=\"16\" transform=\"rotate(45 36 16)\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 888,
        "name": "Scoreboard-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"40\" width=\"80\" height=\"48\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 56h32M48 72h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 889,
        "name": "Screwdriver-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96l64-64M80 48l16 16M64 64L48 80\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 890,
        "name": "Script-Premium",
        "category": "arts",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"32\" width=\"24\" height=\"20\" fill=\"#455A64\"/><path d=\"M24 32V24C24 20 28 16 32 16C36 16 40 20 40 24V32\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 891,
        "name": "Scrum-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"32\" cy=\"32\" rx=\"16\" ry=\"24\" fill=\"#FF1744\"/><path d=\"M32 12V52\" stroke=\"#FFFFFF\" stroke-width=\"2\"/></svg>"
    },
    {
        "id": 892,
        "name": "Search-Algorithm-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16v96M40 40l48 48M88 40l-48 48\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 893,
        "name": "Search-Premium",
        "category": "app",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><circle cx=\"28\" cy=\"28\" r=\"12\" stroke=\"#455A64\" stroke-width=\"4\"/><line x1=\"38\" y1=\"38\" x2=\"54\" y2=\"54\" stroke=\"#00E5FF\" stroke-width=\"6\" stroke-linecap=\"round\"/></g></svg>"
    },
    {
        "id": 894,
        "name": "Seat-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"24\" width=\"24\" height=\"16\" rx=\"2\" fill=\"#455A64\"/><path d=\"M32 40V56M20 56H44\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 895,
        "name": "Secure-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M12 12H52V28C52 44 32 54 32 54C32 54 12 44 12 28V12Z\" fill=\"#455A64\"/><path d=\"M24 32L30 38L40 26\" stroke=\"#00E676\" stroke-width=\"4\" stroke-linecap=\"round\"/></g></svg>"
    },
    {
        "id": 896,
        "name": "Secure-User-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"24\" r=\"8\" fill=\"#455A64\"/><path d=\"M16 52C16 42 24 36 32 36C40 36 48 42 48 52M44 32L32 40L20 32V20L32 12L44 20V32Z\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 897,
        "name": "Security-Premium",
        "category": "government",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12V52M12 32H52\" stroke=\"#FF1744\" stroke-width=\"4\"/><circle cx=\"32\" cy=\"32\" r=\"12\" stroke=\"#FF1744\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 898,
        "name": "Segment-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 20L44 20L32 44L20 20Z\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 899,
        "name": "Send-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 32L24 40L54 10L32 54L30 38L10 32Z\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 900,
        "name": "Server-Cluster-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"32\" width=\"32\" height=\"32\" stroke=\"#455A64\" stroke-width=\"6\"/><rect x=\"72\" y=\"32\" width=\"32\" height=\"32\" stroke=\"#455A64\" stroke-width=\"6\"/><rect x=\"24\" y=\"80\" width=\"32\" height=\"32\" stroke=\"#455A64\" stroke-width=\"6\"/><rect x=\"72\" y=\"80\" width=\"32\" height=\"32\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 901,
        "name": "Server-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"24\" width=\"64\" height=\"24\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><rect x=\"32\" y=\"80\" width=\"64\" height=\"24\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 48v32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 902,
        "name": "Server-Rack-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"24\" width=\"64\" height=\"80\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 32h32M48 48h32M48 64h32M48 80h32M48 96h32\" stroke=\"#455A64\" stroke-width=\"4\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 903,
        "name": "Serverless-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l48 48-48 48-48-48 48-48z\" stroke=\"#FFD600\" stroke-width=\"6\"/><path d=\"M64 48v32\" stroke=\"#FFD600\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 904,
        "name": "Service-Mesh-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"8\" fill=\"#455A64\"/><path d=\"M64 32v24M64 72v24M40 40l16 16M72 72l16 16M88 40l-16 16M56 72l-16 16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 905,
        "name": "Service-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 32C12 20 20 12 32 12C44 12 52 20 52 32V44C52 48 48 52 44 52H20C16 52 12 48 12 44V32Z\" fill=\"#455A64\"/><path d=\"M24 24H26M38 24H40\" fill=\"#FFFFFF\"/></svg>"
    },
    {
        "id": 906,
        "name": "Settings-Premium",
        "category": "app",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><circle cx=\"32\" cy=\"32\" r=\"10\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"32\" cy=\"32\" r=\"4\" fill=\"#00E5FF\"/><path d=\"M32 10V16M32 48V54M10 32H16M48 32H54\" stroke=\"#00E676\" stroke-width=\"4\" stroke-linecap=\"round\"/></g></svg>"
    },
    {
        "id": 907,
        "name": "Shades-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><rect x=\"18\" y=\"24\" width=\"12\" height=\"10\" fill=\"#455A64\"/><rect x=\"34\" y=\"24\" width=\"12\" height=\"10\" fill=\"#455A64\"/><line x1=\"30\" y1=\"28\" x2=\"34\" y2=\"28\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 908,
        "name": "Share-Alt-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"64\" r=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"96\" cy=\"32\" r=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"96\" cy=\"96\" r=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M40 64h48\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 909,
        "name": "Share-Folder-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 20H28L34 26H54V44H10V20Z\" fill=\"#455A64\"/><circle cx=\"44\" cy=\"36\" r=\"6\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 910,
        "name": "Share-Nodes-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"64\" r=\"8\" fill=\"#455A64\"/><circle cx=\"88\" cy=\"40\" r=\"8\" fill=\"#455A64\"/><circle cx=\"88\" cy=\"88\" r=\"8\" fill=\"#455A64\"/><path d=\"M48 64l32-16M48 64l32 16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 911,
        "name": "Share-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M44 20L20 32L44 44V36H52V28H44V20Z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 912,
        "name": "Share-Square-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M80 32h24v24M48 80l48-48M80 80h16v-16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 913,
        "name": "SheetMusic-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"12\" width=\"32\" height=\"40\" fill=\"#455A64\"/><path d=\"M20 20H44M20 30H44M20 40H44\" stroke=\"#FFFFFF\" stroke-width=\"2\"/></svg>"
    },
    {
        "id": 914,
        "name": "Shield-Check-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 24h80v32c0 32-40 56-40 56S24 88 24 56V24z\"/><path d=\"M48 64l16 16 32-32\" stroke=\"#00E676\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 915,
        "name": "Shield-Premium",
        "category": "app",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M12 12H52V28C52 44 32 54 32 54C32 54 12 44 12 28V12Z\" fill=\"#455A64\"/><circle cx=\"32\" cy=\"32\" r=\"6\" fill=\"#00E5FF\"/></g></svg>"
    },
    {
        "id": 916,
        "name": "Shift-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 20H44V44H20L20 20Z\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M44 20L52 12M44 44L52 52\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 917,
        "name": "Shock-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"48\" cy=\"52\" r=\"8\" fill=\"#455A64\"/><circle cx=\"80\" cy=\"52\" r=\"8\" fill=\"#455A64\"/><circle cx=\"64\" cy=\"92\" r=\"12\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 918,
        "name": "Shopify-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 32l32 16-16 64-32-16 16-64z\" fill=\"#96BF48\"/></svg>"
    },
    {
        "id": 919,
        "name": "Show-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 10L10 54H54L32 10Z\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 920,
        "name": "Shrug-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"24\" r=\"16\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M10 40L20 48M54 40L44 48\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 921,
        "name": "Sidebar-Left-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"24\" width=\"80\" height=\"80\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 24v80\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 922,
        "name": "Sidebar-Right-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"24\" width=\"80\" height=\"80\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M80 24v80\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 923,
        "name": "Sightseeing-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"24\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 32V16M64 112V96M32 64H16M112 64H96\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 924,
        "name": "Signal-Interference-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 64c16-16 32-16 48 0s32 16 48 0M32 80c16-16 32-16 48 0s32 16 48 0\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 925,
        "name": "Signal-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 48C36 48 40 44 40 40C40 36 36 32 32 32C28 32 24 36 24 40C24 44 28 48 32 48Z\" fill=\"#455A64\"/><path d=\"M22 30C26 26 38 26 42 30\" stroke=\"#00E676\" stroke-width=\"4\"/><path d=\"M16 24C22 18 42 18 48 24\" stroke=\"#00E676\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 926,
        "name": "Signal-Pulse-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 32H20L28 16L36 48L44 32H52\" stroke=\"#FF1744\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 927,
        "name": "Signal-Strength-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 104V72M44 104V56M64 104V40M84 104V24M104 104V8\" stroke=\"#00E676\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 928,
        "name": "Signature-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 80c16-32 32-32 48 0M48 48c8 16 24 16 32 0\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 929,
        "name": "Silent-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 24H28L44 8V56L28 40H16V24Z\" fill=\"#455A64\"/><path d=\"M40 24L56 40M56 24L40 40\" stroke=\"#FF1744\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 930,
        "name": "Simulation-Vehicle-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96l32-48 32 48H32z\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"40\" r=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 931,
        "name": "Skate-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"32\" width=\"40\" height=\"8\" rx=\"4\" fill=\"#455A64\"/><circle cx=\"20\" cy=\"48\" r=\"6\" fill=\"#00E5FF\"/><circle cx=\"44\" cy=\"48\" r=\"6\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 932,
        "name": "Skateboard-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 64c0 16 80 16 80 0\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"40\" cy=\"80\" r=\"8\" fill=\"#455A64\"/><circle cx=\"88\" cy=\"80\" r=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 933,
        "name": "Sketch-Premium",
        "category": "arts",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M44 12L52 20L20 52L12 44L44 12Z\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 934,
        "name": "Skew-Premium",
        "category": "shapes",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 20H52L44 44H12L20 20Z\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 935,
        "name": "Skiing-Poles-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 16l32 96M80 16l-32 96\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 936,
        "name": "Skill-Tree-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"32\" r=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 40l-32 32M64 40l32 32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 937,
        "name": "Skull-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 24C20 16 26 10 32 10C38 10 44 16 44 24V40C44 48 38 54 32 54C26 54 20 48 20 40V24Z\" fill=\"#455A64\"/><circle cx=\"26\" cy=\"28\" r=\"4\" fill=\"#FFFFFF\"/><circle cx=\"38\" cy=\"28\" r=\"4\" fill=\"#FFFFFF\"/></svg>"
    },
    {
        "id": 938,
        "name": "Slack-Premium",
        "category": "social",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><rect x=\"20\" y=\"10\" width=\"10\" height=\"10\" fill=\"#FF1744\"/><rect x=\"34\" y=\"10\" width=\"10\" height=\"10\" fill=\"#00E5FF\"/><rect x=\"10\" y=\"24\" width=\"10\" height=\"10\" fill=\"#00E676\"/><rect x=\"44\" y=\"30\" width=\"10\" height=\"10\" fill=\"#455A64\"/><rect x=\"20\" y=\"44\" width=\"10\" height=\"10\" fill=\"#00E5FF\"/><rect x=\"34\" y=\"44\" width=\"10\" height=\"10\" fill=\"#FF1744\"/></g></svg>"
    },
    {
        "id": 939,
        "name": "Sleeping-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M40 52l16 8M72 60l16-8M104 40l-8 8M112 32l-8 8\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 940,
        "name": "Sleepy-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M20 24L26 30M26 24L20 30\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M38 24L44 30M44 24L38 30\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M28 42C32 38 36 38 40 42\" stroke=\"#455A64\" stroke-width=\"4\" stroke-linecap=\"round\"/></g></svg>"
    },
    {
        "id": 941,
        "name": "Slider-Handle-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 64h80\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/><circle cx=\"64\" cy=\"64\" r=\"16\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 942,
        "name": "Sliders-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 32h64M32 64h64M32 96h64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/><circle cx=\"48\" cy=\"32\" r=\"8\" fill=\"#455A64\"/><circle cx=\"80\" cy=\"64\" r=\"8\" fill=\"#455A64\"/><circle cx=\"64\" cy=\"96\" r=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 943,
        "name": "Smart-City-Data-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#00E5FF\" stroke-width=\"6\"/><path d=\"M64 32v64M32 64h64\" stroke=\"#00E5FF\" stroke-width=\"6\" stroke-dasharray=\"4 4\"/></svg>"
    },
    {
        "id": 944,
        "name": "Smile-Beam-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"24\" cy=\"26\" r=\"3\" fill=\"#455A64\"/><circle cx=\"40\" cy=\"26\" r=\"3\" fill=\"#455A64\"/><path d=\"M22 36C26 42 38 42 42 36\" stroke=\"#00E676\" stroke-width=\"4\" stroke-linecap=\"round\"/><path d=\"M32 42V48\" stroke=\"#00E676\" stroke-width=\"4\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 945,
        "name": "Smile-Mask-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 24C16 36 24 44 32 44C40 44 48 36 48 24C48 12 40 8 32 8C24 8 16 12 16 24Z\" fill=\"#00E676\"/></svg>"
    },
    {
        "id": 946,
        "name": "Smile-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"22\" cy=\"24\" r=\"3\" fill=\"#455A64\"/><circle cx=\"42\" cy=\"24\" r=\"3\" fill=\"#455A64\"/><path d=\"M22 40C26 46 38 46 42 40\" stroke=\"#00E676\" stroke-width=\"4\" stroke-linecap=\"round\"/></g></svg>"
    },
    {
        "id": 947,
        "name": "Snapchat-Premium",
        "category": "social",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M32 6C16 6 10 16 10 32C10 48 20 58 32 58C44 58 54 48 54 32C54 16 48 6 32 6Z\" fill=\"#00E676\"/><path d=\"M24 32C24 36 28 40 32 40C36 40 40 36 40 32\" stroke=\"#455A64\" stroke-width=\"4\"/></g></svg>"
    },
    {
        "id": 948,
        "name": "Snow-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"16\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M32 16V48M16 32H48M22 22L42 42M22 42L42 22\" stroke=\"#00E5FF\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 949,
        "name": "Snowflake-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 24v80M24 64h80M32 32l64 64M32 96l64-64\" stroke=\"#00E5FF\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 950,
        "name": "Soccer-Ball-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 16v48l32 32M64 64l-32 32M64 64H16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 951,
        "name": "Social-Instagram-Premium",
        "category": "social",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><rect x=\"10\" y=\"10\" width=\"44\" height=\"44\" rx=\"10\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"32\" cy=\"32\" r=\"10\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"44\" cy=\"20\" r=\"3\" fill=\"#FF1744\"/><circle cx=\"32\" cy=\"32\" r=\"4\" fill=\"#00E5FF\"/></g></svg>"
    },
    {
        "id": 952,
        "name": "Social-LinkedIn-Premium",
        "category": "social",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><rect x=\"8\" y=\"24\" width=\"10\" height=\"32\" fill=\"#455A64\"/><rect x=\"26\" y=\"24\" width=\"10\" height=\"32\" fill=\"#455A64\"/><rect x=\"44\" y=\"24\" width=\"10\" height=\"32\" fill=\"#455A64\"/><rect x=\"8\" y=\"10\" width=\"10\" height=\"8\" rx=\"2\" fill=\"#00E5FF\"/><circle cx=\"31\" cy=\"14\" r=\"4\" fill=\"#FF1744\"/><circle cx=\"49\" cy=\"14\" r=\"4\" fill=\"#00E676\"/></g></svg>"
    },
    {
        "id": 953,
        "name": "Social-Security-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 64h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 954,
        "name": "Social-Share-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 88l32-48 32 48M64 40v64\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 955,
        "name": "Social-Sharing-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l48 48-48 48M32 64h80\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 956,
        "name": "Social-X-Premium",
        "category": "social",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M52 10L34 34L54 54H48L32 38L16 54H10L30 32L10 10H16L30 26L44 10H52Z\" fill=\"#455A64\"/><circle cx=\"20\" cy=\"20\" r=\"3\" fill=\"#00E5FF\"/><circle cx=\"44\" cy=\"44\" r=\"3\" fill=\"#00E676\"/></g></svg>"
    },
    {
        "id": 957,
        "name": "Sol-Roth-Personal-Brand-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 48c0 16 16 16 32 0s16-16 32 0\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 958,
        "name": "Solid-Hex-Premium",
        "category": "shapes",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12L52 24V40L32 52L12 40V24L32 12Z\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 959,
        "name": "Sort-Algorithm-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 96V48l16 16M72 32v48l16-16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 960,
        "name": "Sort-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 20L32 10L44 20M20 44L32 54L44 44\" stroke=\"#455A64\" stroke-width=\"4\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 961,
        "name": "Sorting-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 40h48M48 64h32M48 88h16M104 40l-8-8-8 8M104 88l-8 8-8-8\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 962,
        "name": "SoundCloud-Premium",
        "category": "brand",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 40H20V24H28V44H12V40Z\" fill=\"#FF1744\"/><path d=\"M32 20H40V44H32V20Z\" fill=\"#FF1744\"/><path d=\"M44 28H52V44H44V28Z\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 963,
        "name": "SoundCloud-Standard-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96h64M48 80h48M64 64h32M80 48h16\" stroke=\"#FF5500\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 964,
        "name": "Souvenir-Market-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96l16-48 64 16-16 48-64-16z\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 965,
        "name": "Sparkles-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 10L36 22L48 26L36 30L32 42L28 30L16 26L28 22L32 10Z\" fill=\"#00E5FF\"/><circle cx=\"52\" cy=\"12\" r=\"4\" fill=\"#00E676\"/><circle cx=\"12\" cy=\"48\" r=\"3\" fill=\"#00E676\"/></svg>"
    },
    {
        "id": 966,
        "name": "Spatial-Audio-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 32v16M64 80v16M32 64h16M80 64h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 967,
        "name": "Spatial-Reference-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l32 32M64 16L32 48M64 112l32-32M64 112L32 80\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 968,
        "name": "Speaker-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"20\" r=\"10\" fill=\"#455A64\"/><path d=\"M16 54C16 44 24 36 32 36C40 36 48 44 48 54\"/><path d=\"M48 20L60 12V28L48 20Z\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 969,
        "name": "Speech-Bubble-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 32h80v48H56l-16 16V80H24V32z\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 56h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 970,
        "name": "Split-Horizontal-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"32\" width=\"80\" height=\"64\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M24 64h80\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 971,
        "name": "Split-Vertical-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"24\" width=\"64\" height=\"80\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 24v80\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 972,
        "name": "Sports-News-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 48h32M48 64h32M48 80h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 973,
        "name": "Sports-Timer-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 64V32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 974,
        "name": "Spotify-Premium",
        "category": "brand",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"20\" fill=\"#00E676\"/><path d=\"M24 24C32 24 40 28 40 36M24 32C32 32 36 36 36 40\" stroke=\"#FFFFFF\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 975,
        "name": "Spotlight-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 10L10 54H54L32 10Z\" fill=\"#FF1744\"/><path d=\"M32 20L28 32H36L32 20Z\" fill=\"#FFFFFF\"/></svg>"
    },
    {
        "id": 976,
        "name": "Sprint-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 40L24 24H44L52 40V48H12V40Z\" fill=\"#455A64\"/><path d=\"M20 44H32\" stroke=\"#FFFFFF\" stroke-width=\"2\"/></svg>"
    },
    {
        "id": 977,
        "name": "SSD-Drive-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"40\" width=\"80\" height=\"48\" rx=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M40 56h48\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 978,
        "name": "SSL-Certificate-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"24\" width=\"64\" height=\"80\" rx=\"4\" stroke=\"#00E676\" stroke-width=\"6\"/><path d=\"M64 48v16M56 56h16\" stroke=\"#00E676\" stroke-width=\"6\" stroke-linecap=\"round\"/><circle cx=\"64\" cy=\"56\" r=\"8\" stroke=\"#00E676\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 979,
        "name": "Stable-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 32H48M32 16V40C32 48 38 54 44 54M32 16V40C32 48 26 54 20 54\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 980,
        "name": "Stack-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"48\" y=\"24\" width=\"32\" height=\"80\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M56 40h16M56 56h16M56 72h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 981,
        "name": "Stadium-Map-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" rx=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 982,
        "name": "Stamp-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 32h48l-8 24H48l-8-24z\" fill=\"#FF1744\"/><path d=\"M64 56v32M48 104h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 983,
        "name": "Star-Five-Premium",
        "category": "shapes",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12L38 24L52 26L42 36L44 52L32 44L20 52L22 36L12 26L26 24L32 12Z\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 984,
        "name": "Star-Four-Premium",
        "category": "shapes",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12L36 28L52 32L36 36L32 52L28 36L12 32L28 28L32 12Z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 985,
        "name": "Star-Outline-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l16 32h36l-28 24 12 36-36-24-36 24 12-36-28-24h36L64 16z\" stroke=\"#FFD600\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 986,
        "name": "Star-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M32 10L38 24H52L40 32L44 46L32 38L20 46L24 32L12 24H26L32 10Z\" fill=\"#00E5FF\"/></g></svg>"
    },
    {
        "id": 987,
        "name": "Stars-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M32 20L34 26H40L35 30L37 36L32 32L27 36L29 30L24 26H30L32 20Z\" fill=\"#00E5FF\"/></g></svg>"
    },
    {
        "id": 988,
        "name": "Status-Offline-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"32\" fill=\"#455A64\"/><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 989,
        "name": "Status-Online-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"32\" fill=\"#00E676\"/><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#00E676\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 990,
        "name": "Stay-Extended-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"48\" width=\"64\" height=\"32\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 64h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 991,
        "name": "Steam-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#1B2838\" stroke-width=\"6\"/><path d=\"M64 48v32\" stroke=\"#1B2838\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 992,
        "name": "Step-Complete-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#00E676\" stroke-width=\"6\"/><path d=\"M48 64l16 16 32-32\" stroke=\"#00E676\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 993,
        "name": "Stock-Market-Chart-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96l32-48 32 32 32-64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 994,
        "name": "Storage-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" rx=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 48h32M48 64h32M48 80h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 995,
        "name": "Story-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"12\" width=\"32\" height=\"40\" rx=\"2\" fill=\"#455A64\"/><path d=\"M20 20H44M20 30H44M20 40H32\" stroke=\"#FFFFFF\" stroke-width=\"2\"/></svg>"
    },
    {
        "id": 996,
        "name": "Strategy-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"24\" cy=\"24\" r=\"8\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M30 30L48 48\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 997,
        "name": "Strategy-Tactics-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 32h64v64H32V32zM64 32v64M32 64h64\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 998,
        "name": "Stream-Flow-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 24H52M12 32H44M12 40H36\" stroke=\"#00E5FF\" stroke-width=\"4\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 999,
        "name": "Streaming-Quality-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96l32-48 32 48M64 32v64\" stroke=\"#00E676\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1000,
        "name": "Street-Lighting-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16v96M48 32h32\" stroke=\"#FFD600\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1001,
        "name": "Strike-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"20\" fill=\"#455A64\"/><circle cx=\"38\" cy=\"26\" r=\"4\" fill=\"#FFFFFF\"/><circle cx=\"26\" cy=\"26\" r=\"4\" fill=\"#FFFFFF\"/><circle cx=\"32\" cy=\"38\" r=\"4\" fill=\"#FFFFFF\"/></svg>"
    },
    {
        "id": 1002,
        "name": "Stripe-Premium",
        "category": "brand",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M6 22C6 18 12 16 16 16H48C52 16 58 18 58 22V42C58 46 52 48 48 48H16C12 48 6 46 6 42V22Z\" fill=\"#00E5FF\"/><circle cx=\"20\" cy=\"32\" r=\"4\" fill=\"#FFFFFF\"/><circle cx=\"32\" cy=\"32\" r=\"4\" fill=\"#FFFFFF\"/><circle cx=\"44\" cy=\"32\" r=\"4\" fill=\"#FFFFFF\"/></g></svg>"
    },
    {
        "id": 1003,
        "name": "Structure-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"16\" r=\"6\" fill=\"#455A64\"/><path d=\"M32 22V30H16V40M32 22V30H48V40\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 1004,
        "name": "Student-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"30\" r=\"8\" fill=\"#455A64\"/><path d=\"M12 24L32 12L52 24L32 36L12 24Z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 1005,
        "name": "Studio-Microphone-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"48\" r=\"24\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 72v32M48 104h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1006,
        "name": "Stylist-Premium",
        "category": "occupations",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 20L40 44M40 20L24 44\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1007,
        "name": "Sublime-Text-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" fill=\"#444\"/></svg>"
    },
    {
        "id": 1008,
        "name": "Subscription-Model-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"48\" width=\"64\" height=\"32\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 64h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1009,
        "name": "Substack-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" fill=\"#FF6000\"/></svg>"
    },
    {
        "id": 1010,
        "name": "Subtitle-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"32\" width=\"80\" height=\"64\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><rect x=\"40\" y=\"72\" width=\"48\" height=\"8\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 1011,
        "name": "Subway-Network-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M32 64h64M64 32v64M48 48l32 32M80 48l-32 32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1012,
        "name": "Suit-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 10L54 32L32 54L10 32L32 10Z\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 1013,
        "name": "Sun-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"12\" fill=\"#00E5FF\"/><path d=\"M32 6V14M32 50V58M6 32H14M50 32H58\" stroke=\"#00E5FF\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 1014,
        "name": "Superposition-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"24\" cy=\"32\" r=\"8\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"40\" cy=\"32\" r=\"8\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 1015,
        "name": "Support-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 20L28 28L20 44L44 44L36 28L44 20\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 1016,
        "name": "Surfing-Board-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16c-16 32-16 96 0 96s16-64 0-96z\" stroke=\"#00E5FF\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 1017,
        "name": "Surprised-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"22\" cy=\"24\" r=\"3\" fill=\"#455A64\"/><circle cx=\"42\" cy=\"24\" r=\"3\" fill=\"#455A64\"/><circle cx=\"32\" cy=\"42\" r=\"6\" stroke=\"#00E5FF\" stroke-width=\"4\"/></g></svg>"
    },
    {
        "id": 1018,
        "name": "Sustainability-Premium",
        "category": "government",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12C20 12 12 20 12 32C12 44 20 52 32 52C44 52 52 44 52 32C52 20 44 12 32 12Z\" fill=\"#00E676\"/></svg>"
    },
    {
        "id": 1019,
        "name": "Swim-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"24\" width=\"16\" height=\"16\" rx=\"4\" fill=\"#00E5FF\"/><rect x=\"36\" y=\"24\" width=\"16\" height=\"16\" rx=\"4\" fill=\"#00E5FF\"/><path d=\"M28 32H36\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 1020,
        "name": "Swimming-Goggles-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"48\" cy=\"64\" r=\"16\" stroke=\"#00E5FF\" stroke-width=\"6\"/><circle cx=\"80\" cy=\"64\" r=\"16\" stroke=\"#00E5FF\" stroke-width=\"6\"/><path d=\"M64 64h8\" stroke=\"#00E5FF\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1021,
        "name": "Sync-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M52 32C52 43 43 52 32 52C21 52 12 43 12 32C12 21 21 12 32 12V20M12 32C12 21 21 12 32 12C43 12 52 21 52 32V24\" stroke=\"#00E676\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 1022,
        "name": "Sync-State-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 16C16 16 12 24 12 32C12 40 16 48 24 48M40 48C48 48 52 40 52 32C52 24 48 16 40 16\" stroke=\"#00E676\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 1023,
        "name": "Synthesis-Merge-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 32l32 32-32 32M96 32l-32 32 32 32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1024,
        "name": "System-Builder-Premium",
        "category": "occupations",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 48L24 40L40 56L48 48L32 32L40 24L24 8L16 16L32 32L16 48Z\" fill=\"#00E676\"/></svg>"
    },
    {
        "id": 1025,
        "name": "System-Monitor-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"6\" y=\"10\" width=\"52\" height=\"36\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"4\"/><line x1=\"12\" y1=\"20\" x2=\"52\" y2=\"20\" stroke=\"#00E5FF\" stroke-width=\"2\"/><line x1=\"12\" y1=\"30\" x2=\"52\" y2=\"30\" stroke=\"#00E676\" stroke-width=\"2\"/><circle cx=\"32\" cy=\"54\" r=\"6\" fill=\"#FF1744\"/></g></svg>"
    },
    {
        "id": 1026,
        "name": "System-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"20\" width=\"40\" height=\"24\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"24\" cy=\"32\" r=\"4\" fill=\"#00E676\"/><circle cx=\"32\" cy=\"32\" r=\"4\" fill=\"#00E5FF\"/><circle cx=\"40\" cy=\"32\" r=\"4\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 1027,
        "name": "Tab-Active-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 104V40c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v64H24z\" fill=\"#00E5FF\"/><path d=\"M40 64h48\" stroke=\"#FFFFFF\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1028,
        "name": "Tab-Inactive-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 104V40c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v64H24z\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 1029,
        "name": "Table-Tennis-Paddle-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"56\" r=\"32\" stroke=\"#FF1744\" stroke-width=\"6\"/><path d=\"M64 88v24\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1030,
        "name": "Tablet-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"24\" width=\"80\" height=\"80\" rx=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M60 100h8\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1031,
        "name": "TableTennis-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"36\" cy=\"28\" r=\"16\" fill=\"#FF1744\"/><rect x=\"20\" y=\"40\" width=\"8\" height=\"16\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 1032,
        "name": "Tag-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 10H54V44L30 54L20 44V10Z\" fill=\"#00E676\"/><circle cx=\"44\" cy=\"20\" r=\"4\" fill=\"#FFFFFF\"/></svg>"
    },
    {
        "id": 1033,
        "name": "Tape-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"20\" width=\"40\" height=\"24\" rx=\"4\" fill=\"#455A64\"/><circle cx=\"24\" cy=\"32\" r=\"4\" fill=\"#FFFFFF\"/><circle cx=\"40\" cy=\"32\" r=\"4\" fill=\"#FFFFFF\"/></svg>"
    },
    {
        "id": 1034,
        "name": "Target-Bullseye-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#FF1744\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"64\" r=\"24\" stroke=\"#FF1744\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"64\" r=\"8\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 1035,
        "name": "Target-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"32\" cy=\"32\" r=\"14\" stroke=\"#FF1744\" stroke-width=\"4\"/><circle cx=\"32\" cy=\"32\" r=\"4\" fill=\"#455A64\"/></g></svg>"
    },
    {
        "id": 1036,
        "name": "Task-Pending-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#FFD600\" stroke-width=\"6\"/><path d=\"M64 40v24l16 16\" stroke=\"#FFD600\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1037,
        "name": "Task-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"12\" width=\"32\" height=\"44\" rx=\"2\" fill=\"#455A64\"/><rect x=\"24\" y=\"8\" width=\"16\" height=\"4\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 1038,
        "name": "Tax-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16L32 64h64L64 16z\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 48v32M64 96v8\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1039,
        "name": "Tax-Return-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"24\" width=\"64\" height=\"80\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 48h32M48 64h32M48 80h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1040,
        "name": "Tax-Revenue-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16v96M32 64h64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1041,
        "name": "Team-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"48\" cy=\"56\" r=\"16\" fill=\"#455A64\"/><circle cx=\"80\" cy=\"56\" r=\"16\" fill=\"#455A64\"/><path d=\"M32 112c0-16 16-16 32-16s32 0 32 16\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 1042,
        "name": "Technician-Premium",
        "category": "occupations",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12L20 32H44L32 52\" stroke=\"#FF1744\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 1043,
        "name": "Telegram-Premium",
        "category": "brand",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 32L52 12L40 52L32 32L16 32Z\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 1044,
        "name": "Telescope-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 40l64-24M24 56l64-24M40 40L24 56M104 16l16 16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1045,
        "name": "Tennis-Racket-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"48\" r=\"32\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 80v32M48 48h32M64 32v32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1046,
        "name": "Terminal-Premium",
        "category": "system",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><rect x=\"6\" y=\"10\" width=\"52\" height=\"44\" rx=\"4\" fill=\"#455A64\"/><path d=\"M14 20L22 28L14 36\" stroke=\"#00E5FF\" stroke-width=\"4\" stroke-linecap=\"round\"/></g></svg>"
    },
    {
        "id": 1047,
        "name": "Terminal-Window-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"24\" width=\"80\" height=\"80\" rx=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M40 48l16 16-16 16M64 80h24\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1048,
        "name": "Terraform-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l48 32-16 64H32L16 48 64 16z\" fill=\"#7B42BC\"/></svg>"
    },
    {
        "id": 1049,
        "name": "Test-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"24\" width=\"80\" height=\"80\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 48h32M48 64h32M48 80h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1050,
        "name": "Textile-Premium",
        "category": "arts",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 52L52 12M52 12L44 4L32 16\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 1051,
        "name": "Theater-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 24C16 12 24 8 32 8C40 8 48 12 48 24V40C48 48 40 52 32 52C24 52 16 48 16 40V24Z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 1052,
        "name": "Theater-Stage-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 40l80 8M24 96l80-8M24 40v56\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1053,
        "name": "Thermometer-Full-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 24v64c0 12-8 20-20 20s-20-8-20-20V24c0-12 8-20 20-20s20 8 20 20z\" fill=\"#FF1744\"/><path d=\"M64 40v32\" stroke=\"#FFFFFF\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1054,
        "name": "Thermometer-Half-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 24v64c0 12-8 20-20 20s-20-8-20-20V24c0-12 8-20 20-20s20 8 20 20z\" fill=\"#FFD600\"/><path d=\"M64 56v16\" stroke=\"#FFFFFF\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1055,
        "name": "Thermometer-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 24v64c0 12-8 20-20 20s-20-8-20-20V24c0-12 8-20 20-20s20 8 20 20z\" stroke=\"#FF1744\" stroke-width=\"6\"/><path d=\"M64 40v32\" stroke=\"#FF1744\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1056,
        "name": "Thinking-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"22\" cy=\"24\" r=\"3\" fill=\"#455A64\"/><circle cx=\"42\" cy=\"24\" r=\"3\" fill=\"#455A64\"/><path d=\"M28 42H36M32 38V42\" stroke=\"#00E5FF\" stroke-width=\"4\" stroke-linecap=\"round\"/></g></svg>"
    },
    {
        "id": 1057,
        "name": "Thread-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"16\" width=\"8\" height=\"32\" fill=\"#455A64\"/><rect x=\"28\" y=\"16\" width=\"8\" height=\"32\" fill=\"#455A64\"/><rect x=\"40\" y=\"16\" width=\"8\" height=\"32\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 1058,
        "name": "Threads-Premium",
        "category": "brand",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12C20 12 12 20 12 32C12 44 24 52 32 52C40 52 48 48 48 40C48 32 40 28 32 28C28 28 24 32 24 36\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 1059,
        "name": "Ticket-Booking-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"48\" width=\"64\" height=\"32\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 64h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1060,
        "name": "Ticket-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"16\" width=\"40\" height=\"32\" rx=\"4\" fill=\"#455A64\"/><circle cx=\"32\" cy=\"32\" r=\"8\" fill=\"#FFFFFF\"/></svg>"
    },
    {
        "id": 1061,
        "name": "Tidal-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 32l32 32-32 32L64 64 32 32zm32 0l32 32-32 32L96 64 64 32z\" fill=\"#000\"/></svg>"
    },
    {
        "id": 1062,
        "name": "TikTok-Premium",
        "category": "social",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M38 10V40C38 46 32 50 26 50C20 50 16 46 16 40C16 34 20 30 26 30V38C24 38 22 39 22 40C22 42 24 44 26 44C28 44 30 42 30 40V16H38Z\" fill=\"#00E676\"/><path d=\"M38 16H46C46 22 50 26 54 26V18C50 18 48 16 48 10V2H38V16Z\" fill=\"#00E5FF\"/></g></svg>"
    },
    {
        "id": 1063,
        "name": "Time-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 10H48V20L32 32L48 44V54H16V44L32 32L16 20V10Z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 1064,
        "name": "Time-Zone-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 32v32l32 32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1065,
        "name": "Timeline-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 64h80M32 48v32M64 48v32M96 48v32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1066,
        "name": "Timer-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"20\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M32 12V32L44 44\" stroke=\"#FF1744\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 1067,
        "name": "To-Do-List-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"24\" width=\"64\" height=\"80\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 40h32M48 64h32M48 88h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/><path d=\"M40 40l8 8 16-16\" stroke=\"#00E676\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1068,
        "name": "Toggle-Off-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"40\" width=\"80\" height=\"48\" rx=\"24\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"48\" cy=\"64\" r=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 1069,
        "name": "Toggle-On-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"40\" width=\"80\" height=\"48\" rx=\"24\" fill=\"#00E676\"/><circle cx=\"80\" cy=\"64\" r=\"16\" fill=\"#FFFFFF\"/></svg>"
    },
    {
        "id": 1070,
        "name": "Tongue-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"22\" cy=\"24\" r=\"3\" fill=\"#455A64\"/><circle cx=\"42\" cy=\"24\" r=\"3\" fill=\"#455A64\"/><path d=\"M30 40H34V48C34 50 30 50 30 48V40Z\" fill=\"#FF1744\"/></svg>"
    },
    {
        "id": 1071,
        "name": "Tooltip-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 32h80v48H64l-16 16v-16H24V32z\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 56h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1072,
        "name": "Tourist-Guide-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 48h32M48 64h32M48 80h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1073,
        "name": "Tournament-Bracket-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 32h32v64M32 96h32M64 48h32M64 80h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1074,
        "name": "Tournament-Brackets-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 32h32v64M32 96h32M64 48h32M64 80h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1075,
        "name": "Traffic-Control-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"40\" r=\"16\" stroke=\"#FF1744\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"88\" r=\"16\" stroke=\"#00E676\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 1076,
        "name": "Transform-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 32h64v64H32V32zM32 32l-16-16M112 32l16-16M32 96l-16 16M112 96l16 16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1077,
        "name": "Transformation-Axis-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16v96M16 64h96M48 48l32 32M48 80l32-32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1078,
        "name": "Transit-Hub-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l48 32-16 48H32L16 48 64 16zM64 48v32\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 1079,
        "name": "Trash-Can-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 40v64M80 40v64M32 40h64M40 104l8 16h32l8-16\" stroke=\"#FF1744\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1080,
        "name": "Trash-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 40h32v64H48V40z\"/><path d=\"M32 40h64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1081,
        "name": "Travel-Budget-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96l64-64M80 96H96V80\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1082,
        "name": "Travel-Docs-Premium",
        "category": "government",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"12\" width=\"24\" height=\"40\" rx=\"2\" fill=\"#455A64\"/><circle cx=\"32\" cy=\"32\" r=\"8\" stroke=\"#FFFFFF\" stroke-width=\"2\"/></svg>"
    },
    {
        "id": 1083,
        "name": "Travel-Documents-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"24\" width=\"48\" height=\"80\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M56 40h16M56 56h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1084,
        "name": "Travel-Insurance-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"32\" width=\"48\" height=\"64\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 48v32M48 64h32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1085,
        "name": "Travel-Rewards-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l16 32 32 4-24 20 8 32-28-16-28 16 8-32-24-20 32-4z\" stroke=\"#FFD600\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 1086,
        "name": "Travel-Vlog-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"40\" width=\"80\" height=\"48\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M56 56l24 16-24 16V56z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 1087,
        "name": "Tree-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l48 64H80l32 40H16l32-40H16l48-64z\" fill=\"#00E676\"/></svg>"
    },
    {
        "id": 1088,
        "name": "Tree-Structure-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"24\" r=\"8\" fill=\"#455A64\"/><circle cx=\"32\" cy=\"96\" r=\"8\" fill=\"#455A64\"/><circle cx=\"96\" cy=\"96\" r=\"8\" fill=\"#455A64\"/><path d=\"M64 32l-24 56M64 32l24 56\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1089,
        "name": "Trello-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"24\" height=\"64\" fill=\"#0079BF\"/><rect x=\"72\" y=\"32\" width=\"24\" height=\"32\" fill=\"#0079BF\"/></svg>"
    },
    {
        "id": 1090,
        "name": "Trend-Down-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 32l32 32 24-24 40 48\" stroke=\"#FF1744\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1091,
        "name": "Trend-Up-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 96l32-32 24 24 40-48\" stroke=\"#00E676\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1092,
        "name": "Trending-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><polyline points=\"10,50 26,34 38,46 54,18\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/><circle cx=\"54\" cy=\"18\" r=\"4\" fill=\"#00E5FF\"/></g></svg>"
    },
    {
        "id": 1093,
        "name": "Trending-Up-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 96l32-32 24 24 48-48\" stroke=\"#00E676\" stroke-width=\"8\" stroke-linecap=\"round\"/><path d=\"M96 24h24v24\" stroke=\"#00E676\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1094,
        "name": "Triangle-Down-Premium",
        "category": "shapes",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 52L12 16H52L32 52Z\" stroke=\"#00E676\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 1095,
        "name": "Triangle-Up-Premium",
        "category": "shapes",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12L52 48H12L32 12Z\" stroke=\"#00E676\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 1096,
        "name": "Trophy-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 16H48V24C48 32 40 40 32 40C24 40 16 32 16 24V16Z\" fill=\"#455A64\"/><rect x=\"28\" y=\"40\" width=\"8\" height=\"12\" fill=\"#455A64\"/><rect x=\"20\" y=\"52\" width=\"24\" height=\"4\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 1097,
        "name": "Tube-Premium",
        "category": "shapes",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"32\" cy=\"16\" rx=\"20\" ry=\"8\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M12 16V48M52 16V48\" stroke=\"#455A64\" stroke-width=\"4\"/><ellipse cx=\"32\" cy=\"48\" rx=\"20\" ry=\"8\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 1098,
        "name": "Tumblr-Premium",
        "category": "brand",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"16\" width=\"24\" height=\"32\" rx=\"4\" fill=\"#455A64\"/><path d=\"M36 24V40H28C28 32 32 32 32 28H36Z\" fill=\"#FFFFFF\"/></svg>"
    },
    {
        "id": 1099,
        "name": "Twitch-Premium",
        "category": "brand",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 12L24 20H48V48H20V24L16 12Z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 1100,
        "name": "Typography-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M48 32l-24 64h16l8-24h32l8 24h16L80 32H48zm8 32l16-48 16 48H56z\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1101,
        "name": "UberEats-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 48h64v32H32V48z\" fill=\"#000000\"/><text x=\"40\" y=\"76\" fill=\"#FFFFFF\" font-size=\"24\">E</text></svg>"
    },
    {
        "id": 1102,
        "name": "Umbrella-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 10C16 10 10 26 10 26H54C54 26 48 10 32 10Z\" fill=\"#FF1744\"/><path d=\"M32 26V50\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 1103,
        "name": "Unlock-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"30\" width=\"32\" height=\"24\" rx=\"4\" fill=\"#455A64\"/><path d=\"M22 30V20C22 14 26 10 32 10C36 10 38 12 40 14\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 1104,
        "name": "Up-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 48L32 32L40 40L56 16\" stroke=\"#00E676\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1105,
        "name": "Upload-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 40C14 40 10 36 10 30C10 24 14 20 20 20C22 14 28 10 34 10C42 10 48 16 48 24C52 24 54 28 54 32C54 36 50 40 46 40H32M32 20V50M32 20L24 28M32 20L40 28\" stroke=\"#00E5FF\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 1106,
        "name": "Urban-Planning-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M32 32l64 64M96 32l-64 64\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 1107,
        "name": "Urban-Sustainability-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l32 32-16 64H48L32 48 64 16zM64 48v48\" stroke=\"#00E676\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 1108,
        "name": "USB-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"48\" y=\"32\" width=\"32\" height=\"64\" rx=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M40 32h48M56 24h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1109,
        "name": "User-Check-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 48c11 0 20-9 20-20S75 8 64 8s-20 9-20 20 9 20 20 20zM32 96c0-16 16-24 32-24 8 0 12 2 16 4M88 88l16 16 24-24\" stroke=\"#00E676\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1110,
        "name": "User-Circle-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"52\" r=\"20\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M32 104c0-20 16-32 32-32s32 12 32 32\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 1111,
        "name": "User-Default-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"20\" r=\"10\" fill=\"#455A64\"/><path d=\"M16 54C16 44 24 36 32 36C40 36 48 44 48 54\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 1112,
        "name": "User-Delete-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"48\" r=\"24\" stroke=\"#FF1744\" stroke-width=\"6\"/><path d=\"M32 112c0-16 16-24 32-24s32 8 32 24M96 40l16 16M112 40l-16 16\" stroke=\"#FF1744\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1113,
        "name": "User-Group-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"48\" cy=\"48\" r=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"80\" cy=\"48\" r=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M32 112c0-16 16-24 32-24s32 8 32 24\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 1114,
        "name": "User-Plus-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 48c11 0 20-9 20-20S75 8 64 8s-20 9-20 20 9 20 20 20zM32 96c0-16 16-24 32-24s32 8 32 24M96 64h16M104 56v16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1115,
        "name": "User-Premium",
        "category": "app",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><circle cx=\"32\" cy=\"20\" r=\"8\" fill=\"#455A64\"/><path d=\"M16 54C16 42 24 36 32 36C40 36 48 42 48 54\" fill=\"#455A64\"/></g></svg>"
    },
    {
        "id": 1116,
        "name": "User-Secret-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 64h64M40 64V40c0-13 11-24 24-24s24 11 24 24v24\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"32\" r=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 1117,
        "name": "User-Settings-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"20\" r=\"10\" fill=\"#455A64\"/><path d=\"M16 54C16 44 24 36 32 36C40 36 48 44 48 54\"/><circle cx=\"52\" cy=\"52\" r=\"8\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 1118,
        "name": "User-Shield-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"40\" r=\"24\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M24 72c0-24 40-32 40-32s40 8 40 32v16c0 16-16 32-40 32s-40-16-40-32V72z\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 1119,
        "name": "User-Tie-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"40\" r=\"24\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M40 64c0 16 8 32 24 32s24-16 24-32M56 88l8 32 8-32\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 1120,
        "name": "User-Verified-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"48\" r=\"24\" stroke=\"#00E676\" stroke-width=\"6\"/><path d=\"M32 112c0-16 16-24 32-24s32 8 32 24M88 48l8 8 16-16\" stroke=\"#00E676\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1121,
        "name": "Users-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"56\" r=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"88\" cy=\"56\" r=\"16\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M24 104c0-16 16-24 40-24s40 8 40 24\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 1122,
        "name": "Vacation-Rental-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l48 48H16L64 16zM32 64v32h64V64\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 1123,
        "name": "Validate-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"24\" cy=\"24\" r=\"8\" fill=\"#455A64\"/><path d=\"M32 48C32 38 40 32 48 32C56 32 64 38 64 48\" fill=\"#455A64\"/><path d=\"M40 52L44 56L52 48\" stroke=\"#00E676\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 1124,
        "name": "Variable-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 32l48 64M88 32l-48 64\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1125,
        "name": "Variable-Weight-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 32v64M88 32v64M64 48v32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1126,
        "name": "Vector-Magnitude-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96l64-64M80 32h16v16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1127,
        "name": "Vector-Path-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96c32-64 64-64 96 0\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1128,
        "name": "Vector-Pen-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96l16-48 48-16-16 48-48 16zM32 96l16 16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1129,
        "name": "Vector-Projection-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 96l64-32M32 96h64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1130,
        "name": "Vercel-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 32l48 80H16L64 32z\" fill=\"#000\"/></svg>"
    },
    {
        "id": 1131,
        "name": "Verdict-Premium",
        "category": "government",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"44\" width=\"40\" height=\"8\" fill=\"#455A64\"/><path d=\"M44 20L32 32H44L56 20L44 8V20Z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 1132,
        "name": "Verified-User-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"24\" r=\"10\" fill=\"#455A64\"/><path d=\"M16 56C16 46 24 40 32 40C40 40 48 46 48 56M44 12L48 16L56 8\" stroke=\"#00E676\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 1133,
        "name": "Verify-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"12\" width=\"40\" height=\"40\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M20 24H36M20 32H36M20 40H36\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 1134,
        "name": "Vertex-Point-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"12\" fill=\"#455A64\"/><path d=\"M64 64l48-48M64 64l-48-48M64 64l48 48M64 64l-48 48\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1135,
        "name": "Victory-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12L38 26H52L40 34L44 48L32 40L20 48L24 34L12 26H26L32 12Z\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 1136,
        "name": "Video-Call-Premium",
        "category": "people",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"40\" width=\"72\" height=\"48\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M88 56l24-16v56l-24-16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1137,
        "name": "Video-Camera-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"40\" width=\"72\" height=\"48\" rx=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M88 56l24-16v56l-24-16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1138,
        "name": "Video-Editor-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 48h64M48 64l32-16v32L48 64z\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1139,
        "name": "Video-On-Demand-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"40\" width=\"80\" height=\"48\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M56 56l24 16-24 16V56z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 1140,
        "name": "Video-Play-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"32\" width=\"80\" height=\"64\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M56 56l32 16-32 16V56z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 1141,
        "name": "Video-Player-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"32\" width=\"80\" height=\"64\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M56 56l24 16-24 16V56z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 1142,
        "name": "Video-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"40\" width=\"72\" height=\"48\" rx=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M88 56l24-16v56l-24-16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linejoin=\"round\"/></svg>"
    },
    {
        "id": 1143,
        "name": "View-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 64c20-40 76-40 96 0-20 40-76 40-96 0z\" stroke=\"#455A64\" stroke-width=\"6\"/><circle cx=\"64\" cy=\"64\" r=\"16\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 1144,
        "name": "View-Quilt-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"24\" width=\"80\" height=\"80\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 24v80M24 64h80\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 1145,
        "name": "Vimeo-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 48c0-16 8-32 32-32 16 0 32 16 24 40-8 24-32 40-40 64-8 16-16 16-16 0V48z\" fill=\"#1AB7EA\"/></svg>"
    },
    {
        "id": 1146,
        "name": "Vinyl-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"32\" cy=\"32\" r=\"10\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"32\" cy=\"32\" r=\"4\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 1147,
        "name": "Virtual-World-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#00E5FF\" stroke-width=\"6\"/><path d=\"M32 64h64M64 32v64\" stroke=\"#00E5FF\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1148,
        "name": "Visa-Application-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"24\" width=\"64\" height=\"80\" rx=\"4\" stroke=\"#00E676\" stroke-width=\"6\"/><path d=\"M48 48h32M48 64h32\" stroke=\"#00E676\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1149,
        "name": "Visual-Effects-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l32 32-32 32-32-32 32-32z\" stroke=\"#00E5FF\" stroke-width=\"6\"/><path d=\"M64 80v32\" stroke=\"#00E5FF\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1150,
        "name": "Visual-Fx-Premium",
        "category": "arts",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"20\" stroke=\"#00E5FF\" stroke-width=\"4\"/><path d=\"M20 32H44\" stroke=\"#00E5FF\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 1151,
        "name": "Voice-Premium",
        "category": "government",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 20H44M20 32H44M20 44H36\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M44 40L52 48\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 1152,
        "name": "Volleyball-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 16l32 48-32 48-32-48L64 16z\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 1153,
        "name": "Volume-High-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 48h24l24-24v80L56 80H32V48zM80 48c16 16 16 32 0 48\" stroke=\"#455A64\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1154,
        "name": "Volume-Premium",
        "category": "media",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M12 24H22L36 10V54L22 40H12V24Z\" fill=\"#455A64\"/><path d=\"M42 24C46 28 46 36 42 40\" stroke=\"#00E5FF\" stroke-width=\"4\"/></g></svg>"
    },
    {
        "id": 1155,
        "name": "Volume-Up-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 48h24l32-24v80L56 80H32V48zM88 48c8 8 8 32 0 40M96 40c16 16 16 48 0 64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1156,
        "name": "Vote-Premium",
        "category": "government",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"24\" width=\"32\" height=\"28\" fill=\"#455A64\"/><path d=\"M24 32H40M24 40H32\" stroke=\"#FFFFFF\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 1157,
        "name": "Voter-Ballot-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"48\" width=\"64\" height=\"48\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M48 64h32M64 64v32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1158,
        "name": "VPN-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 24l48 24-48 24-48-24 48-24zM64 72v32M48 104h32\" stroke=\"#FF1744\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1159,
        "name": "VPN-Tunnel-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 64c0 32 32 32 32 32s32 0 32-32M64 32v64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1160,
        "name": "VR-Controller-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 24l-16 48h32L64 24z\" stroke=\"#00E5FF\" stroke-width=\"6\"/><path d=\"M64 72v32\" stroke=\"#00E5FF\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1161,
        "name": "VR-Headset-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"48\" width=\"80\" height=\"32\" rx=\"8\" stroke=\"#00E5FF\" stroke-width=\"6\"/><circle cx=\"52\" cy=\"64\" r=\"8\" fill=\"#00E5FF\"/><circle cx=\"76\" cy=\"64\" r=\"8\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 1162,
        "name": "VR-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"24\" width=\"40\" height=\"16\" rx=\"4\" fill=\"#455A64\"/><rect x=\"16\" y=\"28\" width=\"12\" height=\"8\" fill=\"#00E5FF\"/><rect x=\"36\" y=\"28\" width=\"12\" height=\"8\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 1163,
        "name": "VR-Room-Scale-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M32 32l64 64M96 32l-64 64\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 1164,
        "name": "Vscode-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 32l64 32-64 32V32z\" fill=\"#007ACC\"/></svg>"
    },
    {
        "id": 1165,
        "name": "Walking-Tour-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 32c-8 0-16 8-16 16v32M64 48l16 16M64 80l16 16M48 80l-16 16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1166,
        "name": "Wallet-Premium",
        "category": "app",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><rect x=\"10\" y=\"20\" width=\"44\" height=\"24\" rx=\"4\" fill=\"#455A64\"/><rect x=\"44\" y=\"24\" width=\"10\" height=\"16\" fill=\"#00E676\"/></g></svg>"
    },
    {
        "id": 1167,
        "name": "Warning-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 10L54 50H10L32 10Z\" stroke=\"#FF1744\" stroke-width=\"4\"/><path d=\"M32 26V38M32 44V46\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 1168,
        "name": "Warning-Shield-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l40 16v32c0 24-16 40-40 40-24-16-40-32-40-40V32l40-16z\" stroke=\"#FFD600\" stroke-width=\"6\"/><path d=\"M64 48v24M64 88v8\" stroke=\"#FFD600\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1169,
        "name": "Waste-Management-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"40\" width=\"48\" height=\"64\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M56 40v-8h16v8\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1170,
        "name": "Water-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 24c0 0-40 40-40 72s18 32 40 32 40-8 40-32-40-72-40-72z\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 1171,
        "name": "Water-Treatment-Premium",
        "category": "government_city",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16v96M48 48l32 32M80 48l-32 32\" stroke=\"#00E5FF\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1172,
        "name": "Wave-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"32\" cy=\"32\" rx=\"12\" ry=\"24\" fill=\"#00E5FF\"/></svg>"
    },
    {
        "id": 1173,
        "name": "Webflow-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 48h64l-16 32-32-32-16 32\" stroke=\"#4353FF\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 1174,
        "name": "Weight-Lifting-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"56\" width=\"16\" height=\"16\" fill=\"#455A64\"/><rect x=\"96\" y=\"56\" width=\"16\" height=\"16\" fill=\"#455A64\"/><path d=\"M32 64h64\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1175,
        "name": "Welfare-Premium",
        "category": "government",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 12C20 12 12 20 12 32C12 44 20 52 32 52C44 52 52 44 52 32C52 20 44 12 32 12Z\" fill=\"#00E5FF\"/><path d=\"M32 24V40M24 32H40\" stroke=\"#FFFFFF\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 1176,
        "name": "WhatsApp-Premium",
        "category": "social",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><circle cx=\"32\" cy=\"32\" r=\"24\" stroke=\"#00E676\" stroke-width=\"6\"/><path d=\"M22 22C20 28 22 36 28 42C34 48 42 46 44 42L48 46L44 50\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"32\" cy=\"32\" r=\"4\" fill=\"#00E5FF\"/></g></svg>"
    },
    {
        "id": 1177,
        "name": "Wifi-Off-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 32l64 64M96 32l-64 64\" stroke=\"#FF1744\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1178,
        "name": "Wifi-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 96c16 0 32-16 32-32M48 80c24 0 48-24 48-48M32 64c32 0 64-32 64-64\" stroke=\"#00E676\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1179,
        "name": "Wifi-Signal-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 104c16 0 32-12 32-28 0-8-4-16-12-20l-20 20L64 76l-20 20c-8 4-12 12-12 20 0 16 16 28 32 28z\" fill=\"#00E676\"/></svg>"
    },
    {
        "id": 1180,
        "name": "Wifi-Slash-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 32l64 64M96 32l-64 64\" stroke=\"#FF1744\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1181,
        "name": "Window-Close-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"24\" width=\"80\" height=\"80\" rx=\"8\" stroke=\"#FF1744\" stroke-width=\"6\"/><path d=\"M52 52l24 24M76 52l-24 24\" stroke=\"#FF1744\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1182,
        "name": "Window-Maximize-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"24\" width=\"80\" height=\"80\" rx=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M24 40h80\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 1183,
        "name": "Window-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"24\" width=\"96\" height=\"80\" rx=\"8\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M16 48h96M40 24v24\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 1184,
        "name": "Window-Restore-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M24 64h8v32h32v8h-40z\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 1185,
        "name": "Wink-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><line x1=\"20\" y1=\"24\" x2=\"26\" y2=\"28\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"42\" cy=\"26\" r=\"3\" fill=\"#455A64\"/><path d=\"M22 40C26 46 38 46 42 40\" stroke=\"#00E676\" stroke-width=\"4\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1186,
        "name": "Winner-Premium",
        "category": "entertainment",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 16H48V24C48 32 40 40 32 40C24 40 16 32 16 24V16Z\" fill=\"#FF1744\"/><rect x=\"28\" y=\"40\" width=\"8\" height=\"12\" fill=\"#455A64\"/><rect x=\"20\" y=\"52\" width=\"24\" height=\"4\" fill=\"#455A64\"/></svg>"
    },
    {
        "id": 1187,
        "name": "Winter-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 12L40 52\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M40 12L24 52\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 1188,
        "name": "Wire-Transfer-Premium",
        "category": "finance",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 48l64 32M96 48l-64 32\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1189,
        "name": "Woozy-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"26\" stroke=\"#455A64\" stroke-width=\"4\"/><circle cx=\"22\" cy=\"26\" r=\"3\" fill=\"#455A64\"/><circle cx=\"42\" cy=\"28\" r=\"3\" fill=\"#455A64\"/><path d=\"M26 40C30 36 34 44 38 40\" stroke=\"#00E5FF\" stroke-width=\"4\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1190,
        "name": "WordPress-Premium",
        "category": "brand",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"20\" fill=\"#455A64\"/><path d=\"M20 32C24 40 32 40 32 32C32 24 24 24 20 32Z\" fill=\"#FFFFFF\"/></svg>"
    },
    {
        "id": 1191,
        "name": "Workflow-Premium",
        "category": "business",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"8\" fill=\"#455A64\"/><circle cx=\"64\" cy=\"64\" r=\"8\" fill=\"#455A64\"/><circle cx=\"96\" cy=\"96\" r=\"8\" fill=\"#455A64\"/><path d=\"M40 40l16 16M72 72l16 16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1192,
        "name": "World-Map-Premium",
        "category": "travel",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M64 16c24 0 48 16 48 48s-24 48-48 48-48-16-48-48 24-48 48-48z\" stroke=\"#455A64\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 1193,
        "name": "Wrench-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M88 40l16 16-48 48-16-16 48-48zM40 88L24 104\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1194,
        "name": "Write-Premium",
        "category": "high-fidelity",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M96 24L32 88l16 16 64-64-16-16z\" fill=\"#455A64\"/><path d=\"M24 96l8 8\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1195,
        "name": "X-Box-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"12\" width=\"40\" height=\"40\" rx=\"4\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M24 24L40 40M40 24L24 40\" stroke=\"#FF1744\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1196,
        "name": "X-Mark-Premium",
        "category": "shapes",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"20\" stroke=\"#FF1744\" stroke-width=\"4\"/><path d=\"M24 24L40 40M40 24L24 40\" stroke=\"#FF1744\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 1197,
        "name": "X-Premium",
        "category": "social",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M50 12L34 32L52 52H44L30 36L16 52H8L26 30L10 12H18L32 28L44 12H50Z\" fill=\"#455A64\"/></g></svg>"
    },
    {
        "id": 1198,
        "name": "Xbox-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"64\" cy=\"64\" r=\"48\" fill=\"#107C10\"/></svg>"
    },
    {
        "id": 1199,
        "name": "XP-Points-Premium",
        "category": "gaming_vr",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M64 16l32 32-32 32-32-32 32-32z\" stroke=\"#FFD600\" stroke-width=\"6\"/><text x=\"56\" y=\"70\" fill=\"#FFD600\" font-size=\"24\">+</text></svg>"
    },
    {
        "id": 1200,
        "name": "Yarn-Premium",
        "category": "arts",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 12L44 36M44 12L20 36\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 1201,
        "name": "Yoga-Mat-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"64\" height=\"16\" stroke=\"#00E676\" stroke-width=\"6\"/><rect x=\"32\" y=\"56\" width=\"64\" height=\"16\" stroke=\"#00E676\" stroke-width=\"6\"/></svg>"
    },
    {
        "id": 1202,
        "name": "YouTube-Premium",
        "category": "social",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><rect x=\"6\" y=\"16\" width=\"52\" height=\"32\" rx=\"8\" fill=\"#FF1744\"/><polygon points=\"30,26 30,38 42,32\" fill=\"#FFFFFF\"/></g></svg>"
    },
    {
        "id": 1203,
        "name": "Zap-Premium",
        "category": "emoticon",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M38 10L22 34H32L26 54L42 30H32L38 10Z\" fill=\"#00E5FF\"/></g></svg>"
    },
    {
        "id": 1204,
        "name": "Zapier-Premium",
        "category": "social_media_brands",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"32\" y=\"32\" width=\"24\" height=\"64\" fill=\"#FF4A00\"/><rect x=\"72\" y=\"32\" width=\"24\" height=\"64\" fill=\"#FF4A00\"/></svg>"
    },
    {
        "id": 1205,
        "name": "Zen-Premium",
        "category": "sports",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 24C16 16 24 16 24 24V48H40V24C40 16 48 16 48 24\" stroke=\"#00E676\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 1206,
        "name": "Zip-State-Premium",
        "category": "abstract",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20L24 32L40 44\" stroke=\"#455A64\" stroke-width=\"4\"/><path d=\"M24 20L40 32L24 44\" stroke=\"#455A64\" stroke-width=\"4\"/></svg>"
    },
    {
        "id": 1207,
        "name": "Zoom-In-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"56\" cy=\"56\" r=\"28\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M76 76l24 24M56 48v16M48 56h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1208,
        "name": "Zoom-Out-Premium",
        "category": "ui",
        "svgContent": "<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"56\" cy=\"56\" r=\"28\" stroke=\"#455A64\" stroke-width=\"6\"/><path d=\"M76 76l24 24M48 56h16\" stroke=\"#455A64\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "id": 1209,
        "name": "Zoom-Premium",
        "category": "brand",
        "svgContent": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"20\" width=\"28\" height=\"24\" rx=\"4\" fill=\"#00E5FF\"/><path d=\"M40 24L52 20V44L40 40V24Z\" fill=\"#00E5FF\"/></svg>"
    }
];


if (!window.axicons) window.axicons = [];
window.axicons = window.axicons.concat(premiumIcons);
