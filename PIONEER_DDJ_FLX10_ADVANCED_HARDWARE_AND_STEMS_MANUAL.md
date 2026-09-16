# Pioneer DDJ-FLX10: Advanced Hardware & Real-Time Stems Performance Manual

**Hardware:** Pioneer DJ / AlphaTheta DDJ-FLX10 (4-Channel Professional Performance Controller)  
**Host Software:** Rekordbox 7 / Serato DJ Pro  
**Artist:** DJ Sol Roth (Hybrid Performance DJ & Producer)  

---

## 1. Real-Time Track Separation (Stems) Architecture

The DDJ-FLX10 features dedicated hardware silicon buttons for real-time 3-part stem isolation:
* 🟢 **VOCAL:** Lead vocals, rap bars, ad-libs, and spoken word.
* 🔴 **DRUMS:** Kicks, snares, hi-hats, claps, and acoustic percussion.
* 🔵 **INST (Instruments):** Basslines, synths, pianos, brass, and ambient fx.

```
┌──────────────────────────────────────────────────────────┐
│                   DDJ-FLX10 DECK SECTION                 │
│                                                          │
│  [ACTIVE PART BUTTONS]                                   │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐             │
│  │   VOCAL   │  │   DRUMS   │  │   INST    │             │
│  └───────────┘  └───────────┘  └───────────┘             │
│                                                          │
│  [FX PART SELECT BUTTONS] (Assign Beat FX to Stems)      │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐             │
│  │ FX: VOCAL │  │ FX: DRUMS │  │ FX: INST  │             │
│  └───────────┘  └───────────┘  └───────────┘             │
└──────────────────────────────────────────────────────────┘
```

### Key Performance Modes:
1. **Instant Solo (Double-Tap):**
   * Double-tapping the `VOCAL` button instantly mutes `DRUMS` and `INST`, leaving pure naked acapella with zero menu diving.
2. **Instant Acapella / Dub Export:**
   * Mute `VOCAL` to turn any radio hit into an instant instrumental club dub.
   * Mute `DRUMS` to create an instant melodic ambient interlude during quiet breakdowns.

---

## 2. Part ISO (Using EQs as Dedicated Stem Volume Faders)

By default, the 3-band knobs adjust High, Mid, and Low frequencies. On the FLX10, enabling **Part ISO** transforms your 3 EQ knobs into independent **Volume Faders for each Stem**:
* **HIGH KNOB** ➔ Controls **Vocal Volume** (0% to 100%).
* **MID KNOB** ➔ Controls **Instrumental Volume** (0% to 100%).
* **LOW KNOB** ➔ Controls **Drum Volume** (0% to 100%).

### How to Toggle Part ISO:
* Press **SHIFT + STEM BUTTON** (or enable *Part ISO* in Rekordbox Preferences > Controller > Deck).
* **Pro-Technique:** When blending two tracks, lower the Drum knob on Deck 1 to 50% while raising the Drum knob on Deck 2 to 50% for a velvety, artifact-free rhythm blend that sounds like a studio mixdown!

---

## 3. FX Part Select: Surgical Beat FX Routing

The FLX10 allows you to route Pioneer's hardware Beat FX engine exclusively to specific parts of a track without affecting the rest of the mix.

### Classic Sol Roth FX Routing Recipes:
1. **The Ghost Vocal Delay:**
   * Active Parts: Drums + Inst + Vocal on Deck 1.
   * FX Part Select: **VOCAL ONLY** (turn off DRUMS & INST on the FX selector).
   * Beat FX: **1/2 Beat Echo** or **Spiral Delay**.
   * *Result:* Flowdan or Aatig's vocal bounces into an infinite delay canyon while the kick drum and bassline continue hitting dry, loud, and punchy!
2. **The Snare Roll Pitch Accelerator:**
   * FX Part Select: **DRUMS ONLY**.
   * Beat FX: **Mobius (Saw Up)**.
   * *Result:* The snare roll accelerates upwards in pitch while vocals and synth chords maintain their native pitch.

---

## 4. On-Jog Display Customization

The high-definition LCD screens inside the center of each jog wheel can be toggled through 4 distinct display modes using the **SHIFT + JOG MODE** button:

1. **Deck Info Display (Recommended for Live Gigs):**
   * Displays Camelot Key (`8A`), exact BPM (`126.00`), Pitch Percentage, and time elapsed/remaining.
2. **Waveform Mode:**
   * Displays scrolling 3-band waveform directly inside the wheel so you never need to look at your laptop screen.
3. **Artwork Display:**
   * Displays original high-res album jacket / VIP cover art.
4. **DJ Logo Display:**
   * Displays the custom DJ Sol Roth wordmark / emblem.

---

## 5. Magvel Crossfader Calibration for Scratch Performance

The DDJ-FLX10 features Pioneer's magnetic, contactless **Magvel Fader**, capable of over 10 million smooth cuts.

### Ideal Turntablism Configuration:
* **Fader Curve Switch (Front Panel):** Set to **SHARP / CUT** (far right switch).
* **Cut Lag Setting (Utility Menu):**
  1. Hold **SHIFT + SYNC** to enter the Utility Menu.
  2. Scroll to `Crossfader Cut Lag`.
  3. Set to **0.5 mm – 0.8 mm** for hair-trigger crabs, 2-click flares, and transform cuts.
* **Deck Routing:** 
  * Assign Deck 1 & Deck 3 to Crossfader **A (Left)**.
  * Assign Deck 2 & Deck 4 to Crossfader **B (Right)**.

---

## 6. Built-In DMX Lighting Engine (Direct 3-Pin XLR)

The rear panel of the DDJ-FLX10 includes a direct **DMX OUT (3-pin XLR)** port. This eliminates the need for expensive external lighting boxes (like the RB-DMX1).

### Setup Protocol:
1. Connect a 3-pin DMX cable from FLX10 `DMX OUT` to your first stage fixture (e.g. Chauvet GigBAR or moving heads).
2. Daisy-chain fixtures via DMX cables and terminate with a 120-ohm DMX terminator.
3. In Rekordbox, switch mode to **LIGHTING**.
4. Rekordbox analyzes the phrase and kick/snare energy of your 3,911 tracks and automatically orchestrates color washes, strobe hits on drops, and blackouts on breakdowns in real-time sync with your audio!
