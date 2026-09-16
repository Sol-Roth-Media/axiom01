# DJ Sol Roth // Unified Rekordbox 7, Serato Studio & Serato DJ Pro Operator Manual

> **System Version:** 2026.3 Unified DJ Architecture  
> **Primary Live Engine:** Pioneer Rekordbox 7 (DDJ-FLX10 / Pro DJ Link)  
> **Production & Edit Engine:** Serato Studio (Stems, Remixes, VIP Beats)  
> **Secondary Live Engine:** Serato DJ Pro  
> **Live Stage & VJ Server:** `http://localhost:7777` (`sol_roth_dj_prompter_hud.py`)

---

## 1. Executive Summary & Architecture Overview

Your live performance rig and production environment are now unified into a single, cohesive ecosystem where **Rekordbox 7** is your primary performance engine, **Serato Studio** is your production powerhouse, and **Serato DJ Pro** is instantly available whenever needed:

```
                  ┌────────────────────────────────────────────────────────┐
                  │                 SOL ROTH MASTER MUSIC VAULT             │
                  │   4,404 Tracks • 16 Genre Crates • Camelot Keys & BPM  │
                  └──────────────────────────┬─────────────────────────────┘
                                             │
               ┌─────────────────────────────┼─────────────────────────────┐
               ▼                             ▼                             ▼
   ┌───────────────────────┐    ┌───────────────────────────┐   ┌───────────────────────┐
   │   PIONEER REKORDBOX 7 │    │       SERATO STUDIO       │   │     SERATO DJ PRO     │
   │ (PRIMARY PERFORMANCE) │    │   (PRODUCTION & STEMS)    │   │ (SECONDARY LIVE SETS) │
   │ • DDJ-FLX10 Master Rig│    │ • Beatmaking & Remixes    │   │ • Plug & Play Crates  │
   │ • rekordbox.xml Bridge│    │ • 16-Bar Intro Extensions │   │ • Native .crate Files │
   │ • 64 Sampler Banks    │    │ • 1-Click Rekordbox Sync  │   │ • Shared Camelot Tags │
   └───────────┬───────────┘    └─────────────┬─────────────┘   └───────────┬───────────┘
               │                              │                             │
               └──────────────────────┬───────┴─────────────────────────────┘
                                      ▼
             ┌──────────────────────────────────────────────────┐
             │       SOL ROTH STAGE HUD & LIVE VJ ENGINE        │
             │                   (Port 7777)                    │
             │ • Dynamic BPM-Synced Visualizer (/vj)            │
             │ • Glass Now Playing & Karaoke Lyrics             │
             │ • iPad 6-Bank Low-Latency Touch Pad (/pad)       │
             │ • OBS Transparent Broadcast Overlay (/overlay)   │
             │ • Serato Studio Production Lab (/studio)         │
             └──────────────────────────────────────────────────┘
```

---

## 2. Pioneer Rekordbox 7: Primary Performance Engine

### Why Rekordbox Shows "Analyzing 3,900 Tracks"
When you import `rekordbox.xml` into Rekordbox 7, Rekordbox calculates:
1. **Precise Beat Grids**: Generating dynamic beat grids so quantize, loop rolls, and slip reverse lock to the beat on your Pioneer DDJ-FLX10.
2. **High-Resolution Waveforms**: 3-band colored waveforms (Lows, Mids, Highs) for instant visual mixing.
3. **Camelot Key Detection**: Storing harmonic keys (`8A`, `11B`, etc.) into Rekordbox's internal cache.
4. **Stems Pre-Analysis**: Pre-caching vocal, drum, and instrument separation on Rekordbox 7.

> [!NOTE]
> **Yes, this is 100% normal and expected!** This initial analysis only happens once upon import. Once finished, tracks load in **0ms instant response** with zero lag during your live performances.

### 1-Click Master Rekordbox Sync
To sync all crates, Camelot playlists, and 16-pad sampler kits into Rekordbox at any time:
1. Open the Prompter HUD at `http://localhost:7777/docs` or `http://localhost:7777/genres`.
2. Tap **🎧 Sync to Pioneer Rekordbox**.
3. In Rekordbox 7, expand **rekordbox xml** in the left sidebar tree, right-click, and select **Import Playlist**. All 16 master genre crates, harmonic folders, and sampler sets are instantly accessible.

### Rekordbox Sampler Kit Mapping (DDJ-FLX10)
Your 64 performance banks are automatically mirrored to:  
`~/Music/rekordbox/Sampler/Sol Roth Master Sampler/`  
* Each kit contains 16 numbered pads (`Pad_01` to `Pad_16`).
* Drag Bank 01 to Rekordbox Sampler Bank A (Pads 1–8) and Bank B (Pads 9–16).
* On the FLX10, hit the **SAMPLER** pad mode to fire sub drops, airhorns, scratch sentences, and build sweeps live!

---

## 3. Serato Studio: Production & Stems Workflow

You use **Serato Studio** for beat production, remixing, and stem extractions. We have created a dedicated bridge connecting your production directly into Rekordbox:

### The Serato Studio Remix Lab (`/studio`)
Navigate to `http://localhost:7777/studio` to access your library production assistant:
* **Remix Blueprint Generator**: Search any track (e.g. blink-182, Eminem, Daft Punk, Avicii) to see an instant step-by-step arrangement blueprint.
* **4 Core Production Formulas**:
  1. **Extended 16-Bar DJ Intros/Outros**: Adding clean drums for smooth live blending in Rekordbox.
  2. **Acapella Drop Weapons**: Isolating vocals at Bar 1 for dramatic drop transitions.
  3. **128 BPM Dance Primers**: Pitch-stretching hip-hop/rock to modern tech house tempo.
  4. **Second-Drop Switch-Ups**: Replacing repetitive second drops with half-time trap or dubstep.
* **Recommended Sample Banks**: Tells you exactly which drum kit and percussion banks from your library to load into Serato Studio's Drum Deck.

### 1-Click Sync: Serato Studio Exports ➔ Rekordbox 7
When you finish producing a track, remix, or edit in Serato Studio:
1. Bounce/export your audio file (`.wav` or `.mp3`) to your default exports folder or project directory.
2. In the Remix Lab (`http://localhost:7777/studio`), click the green button:  
   **⚡ 1-Click Sync Serato Studio Exports to Rekordbox & Serato**  
   *(or call `/api/sync_studio_exports`)*.
3. The system automatically:
   * Discovers your new exported tracks.
   * Auto-tags Camelot Key, BPM, and Artist metadata.
   * Updates `rekordbox.xml` with a dedicated `🎹 Serato Studio Originals & Remixes` playlist.
   * Updates `_Serato_/Subcrates` for Serato DJ Pro.
4. In Rekordbox 7, refresh your XML tree — your brand new production is immediately ready to load onto Deck 1!

---

## 4. Serato DJ Pro: Secondary Performance Engine

When performing with **Serato DJ Pro**:
* **Auto-Engine Detection**: `sol_roth_dj_prompter_hud.py` uses `psutil` / `pgrep` to detect whether `rekordbox` or `serato` is actively running.
* **Native SQLite Reading**: In Serato mode, the system queries `~/Library/Application Support/Serato/Library/master.sqlite` to fetch the real-time played track, deck assignment (1 to 4), BPM, and duration.
* **100% Crate Parity**: Serato reads from `_Serato_/Subcrates`, ensuring every crate in Serato matches your Rekordbox collection identically.
* **Engine Switching in HUD**: You can toggle between `Rekordbox 7`, `Serato DJ Pro`, and `Auto` anytime with the button in the top right of the Prompter HUD.

---

## 5. Live VJ Visualizer & OBS Overlay Integration

Whether performing in **Rekordbox** or **Serato**, your visuals dynamically reflect your live sound:

| Visual Feature | Rekordbox & Serato Integration Behavior |
| :--- | :--- |
| **Glass Now Playing Card** | Displays track title, artist, genre, Camelot key, and BPM polled directly from the active deck. |
| **Visualizer Tempo Sync** | Video loops, canvas animations, and particle systems accelerate/decelerate to match the active deck's BPM. |
| **Camelot Color Grading** | Neon lasers, borders, and HUD accents shift color based on Camelot key (e.g. `8A` = Cyan, `11B` = Gold, `9A` = Green). |
| **Karaoke Lyrics Banner** | Auto-loads synchronized `.lrc` prompter lyrics for the active track with real-time word highlighting. |
| **OBS Broadcast Overlay** | Transparent stream graphics (`/overlay`) stay 100% in sync with your active Rekordbox or Serato deck. |

### Manual Quick-Load Stage Decks (`/api/deck/load`)
If you want to stage or test tracks without connecting DJ controllers:
* Call `/api/deck/load?deck=1&title=Track+Title&bpm=128&key=8A`
* The Prompter HUD, Stage Displays, VJ visualizer, and OBS overlay immediately update to the new track in <50ms!

---

## 6. Quick Reference Cheat Sheet

| Purpose | Address / Location | Action |
| :--- | :--- | :--- |
| **Stage Prompter HUD** | `http://localhost:7777/` | Multi-deck teleprompter, Camelot harmonic recommendations, lyrics. |
| **60fps Projector Visualizer** | `http://localhost:7777/vj` | Fullscreen narrative VJ display (Entity X-01, Arcade Fighter, Dance Catalyst). |
| **iPad Touch Controller** | `http://srmmacbookpro.local:7777/pad` | 6-bank tactile touch pad for live scene and sample triggers. |
| **Serato Studio Remix Lab** | `http://localhost:7777/studio` | Production blueprints, stems advice, 1-click Rekordbox export sync. |
| **Twitch / YouTube Chat Bridge** | `~/Desktop/START_TWITCH_CHAT_VJ_BRIDGE.command` | Connects audience chat commands (`!hadoken`, `!wings`, `!confetti`) to visuals. |
| **1-Click Stage Rig Launcher** | `~/Desktop/LAUNCH_SOL_ROTH_DJ_STAGE_HUD.command` | Starts the entire prompter and visual server. |
