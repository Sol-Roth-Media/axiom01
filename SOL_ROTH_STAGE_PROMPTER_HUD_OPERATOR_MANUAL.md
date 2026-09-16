# DJ Sol Roth: Stage Prompter HUD & Live VJ Broadcast Operator Manual

**System:** Sol Roth Live Stage Prompter HUD & VJ Engine  
**Server Script:** `sol_roth_dj_prompter_hud.py` (FastAPI + WebSockets + 0ms In-Memory Cache)  
**Port:** `7777`  
**Live Endpoints:**
* **Stage Prompter HUD (iPad / ProX Stand):** `http://localhost:7777` or `http://srmmacbookpro.local:7777`
* **Transparent VJ / OBS Broadcast Overlay:** `http://localhost:7777/overlay`
* **Telemetry & API Health:** `http://localhost:7777/api/status`

---

## 1. System Architecture & Dual-Deck Polling

```
┌─────────────────────────┐       ┌─────────────────────────┐
│     SERATO DJ PRO       │       │       REKORDBOX 7       │
│ Live Session History    │       │ SQLite History & XML    │
└───────────┬─────────────┘       └───────────┬─────────────┘
            │                                 │
            └───────────────┬─────────────────┘
                            ▼
     ┌──────────────────────────────────────────────┐
     │      sol_roth_dj_prompter_hud.py Engine      │
     │      • 3,911 Track In-Memory Cache (0ms)     │
     │      • 100% Synced .LRC Lyrics & Cues        │
     │      • WebSockets Broadcast Server (:7777)   │
     └──────────────────────┬───────────────────────┘
                            │
            ┌───────────────┴───────────────┐
            ▼                               ▼
 ┌─────────────────────┐         ┌─────────────────────┐
 │  STAGE PROMPTER HUD │         │  OBS / RESOLUME VJ  │
 │  (iPad / Flightcase)│         │  Transparent Stream │
 └─────────────────────┘         └─────────────────────┘
```

The engine runs as a lightweight Python background service. Every **500 milliseconds**, it samples Serato DJ Pro's active history crate and Rekordbox's playback history to detect the moment a new track fader is raised.

---

## 2. Synchronized Lyrics & EDM Section Cue Engine

When a track is detected, the HUD looks up the corresponding `.lrc` file from `/Volumes/SOL_ROTH_MASTER_VAULT/ALL DJ Music/`. All 3,911 tracks in your library have an active cue sheet.

### Cue Display Types:
1. **Vocal Tracks (Full Synchronized Lyrics):**
   * Displays the scrolling lyrics line-by-line with milliseconds precision.
   * Highlights the current active line in bold **Electric Cyan**, with upcoming lines in subdued gray.
2. **Electronic / Bass / Trap Instrumentals (EDM Section Countdown):**
   * Tracks without vocal leads automatically display structural section alerts:
     * `[00:00.00] ─── INTRO ─── [BARS: 16]`
     * `[00:22.50] ⚡ BUILDUP ACCELERATING [PREPARE DROP]`
     * `[00:30.00] 💥 [DROP 1] ─── MAIN BASSLINE IMPACT ───`
     * `[01:15.00] ─── BREAKDOWN / MELODY ───`
     * `[01:45.00] 🚀 [DROP 2] ─── PEAK TIME CLIMAX ───`
     * `[02:30.00] ─── OUTRO / MIX-OUT PHASE ───`
3. **Live MC Hype Reminders:**
   * Embedded live performance reminders appear at key moments to cue stage presence:
     * *"Bass music with live hands!"*
     * *"Alesis drumstick solo in 8 bars!"*
     * *"Stems acapella swap ready on Deck 2!"*

---

## 3. iPad Wireless Stage Telemetry (The ProX Stand Setup)

The Stage Prompter is designed to run wirelessly on an iPad mounted to your DJ flightcase stand:

### Connecting the iPad:
1. Connect both your MacBook Pro and your iPad to the same Wi-Fi network (or enable MacBook **Internet Sharing / Local Ad-Hoc Network** if performing in a venue with no Wi-Fi).
2. Open **Safari** on the iPad and navigate to:
   ```
   http://srmmacbookpro.local:7777
   ```
3. Tap the **Engage WakeLock** button at the top-right corner.
   * *What this does:* Uses the HTML5 Screen WakeLock API to ensure the iPad screen **never dims or goes to sleep** during your 60-minute performance, regardless of iOS auto-lock settings!

---

## 4. Transparent VJ / Stream Broadcast Overlay (`/overlay`)

For live streaming, festival LED video walls, or visual accompaniment, the HUD exposes a dedicated transparent graphic overlay:

### Adding to OBS Studio or Resolume Arena:
1. In OBS Studio, add a new **Browser Source**.
2. Set URL to: `http://localhost:7777/overlay`
3. Set Width: `1920`, Height: `1080`.
4. Check **Shutdown source when not visible**.
5. **What appears on screen:**
   * An animated neon lower-third "NOW PLAYING" card showing Track Name, Artist, and Year.
   * Real-time BPM and Camelot Key tags (`8A`, `126 BPM`).
   * Dynamic audio spectrum pulse that pulses with the beat.
   * Transparent alpha background that overlays seamlessly over live stage cameras or 3D VJ visual loops!

---

## 5. Desktop One-Click Stage Launchers

You have dedicated launchers on your macOS Desktop:
* 🚀 **`LAUNCH_SOL_ROTH_DJ_STAGE_HUD.command`**:
  * Automatically scans and clears port 7777 if a stale process is hanging.
  * Starts the Python HUD engine.
  * Launches Google Chrome directly to full-screen HUD mode.
* 🛑 **`STOP_DJ_STAGE_HUD.command`**:
  * Cleanly terminates the background HUD server and releases memory.
