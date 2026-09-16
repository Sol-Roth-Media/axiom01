# DJ Sol Roth: Electronic Music Production & Club Mastering Cheat Sheet

**Target Medium:** Festival Sound Systems (Funktion-One, L-Acoustics, PK Sound) + Club Rig Playback + Modern Streaming Platforms  
**DAWs:** Logic Pro / Ableton Live / FL Studio  
**Workflow:** Hybrid Electronic Production, Live Acoustic Drum Layering & Suno AI Stem Post-Processing  

---

## 1. The Club Sound System Curve: Low-End Engineering

Commercial club sound systems reproduce sub-bass through massive dual-18" or 21" horn-loaded subwoofers. Uncontrolled phase issues or stereo information below 100 Hz will cause muddy cancellation and trigger venue limiter pumping.

```
Frequency Spectrum Allocation:
0 Hz ────── 30 Hz ─────── 100 Hz ──────── 350 Hz ────── 3 kHz ────── 8 kHz ────── 20 kHz
 🔇          🎛️            🔊               🥁           🎸         🎤          ✨
Rumble      Sub-Bass      Kick & Punch      Mud Cut      Transient   Air / Presence
Cut (24dB)  (100% MONO)   (Sidechain Dip)   (-2 to -4dB) Snap        Stereo Wide
```

### The 4 Mandatory Low-End Rules:
1. **The 30 Hz Brickwall High-Pass:**
   * Apply a steep 24 dB/octave high-pass filter at **30 Hz** on your master buss.
   * *Why:* Frequencies below 30 Hz cannot be heard by human ears, but consume 40% of the amplifier's wattage and trigger subwoofer thermal protection limiters.
2. **Mono-Sum Below 100 Hz:**
   * Insert a Mid/Side utility or FabFilter Pro-Q 3. Set the `Side` channel to high-pass at **100–120 Hz**.
   * *Why:* Club subwoofers are mono. Any stereo phase difference below 100 Hz causes acoustic wave cancellation on the dancefloor.
3. **The Kick / Sub Frequency Carve:**
   * Decide on every track who owns the **Sub-Bass (40–60 Hz)** and who owns the **Punch (80–120 Hz)**:
     * *Dubstep / Trap:* Sub-bass synth sits at **45 Hz**; Kick drum is tuned with punch at **90–100 Hz**.
     * *Tech House / Bass House:* Kick drum fundamental sits deep at **50 Hz**; Bassline synth sits at **80–120 Hz**.
   * Cut a narrow -3 dB notch in the secondary element at the primary element's fundamental peak.
4. **Sidechain Compression Release Timing:**
   * Set your sidechain compressor release to recover exactly before the next off-beat bass note:
     * **At 126 BPM:** Quarter-note = $476\text{ ms}$, Eighth-note = $238\text{ ms}$, Sixteenth-note = $119\text{ ms}$.
     * Set release to **~100–120 ms** so the bass breathes and pumps in rhythm with the kick!

---

## 2. Loudness Standards: Club Weapon vs. Spotify Streaming

```
┌──────────────────────────────────────┬──────────────────────┬──────────────────────┐
│ Destination                          │ Integrated Loudness  │ True Peak Ceiling    │
├──────────────────────────────────────┼──────────────────────┼──────────────────────┤
│ 🔊 Club / Festival DJ Weapon Master  │ -8.0 to -6.5 LUFS    │ -0.1 dB True Peak    │
│ 🎧 Spotify / Apple Music Streaming   │ -14.0 to -12.0 LUFS  │ -1.0 dB True Peak    │
│ 📻 Beatport Electronic Commercial    │ -7.5 to -6.0 LUFS    │ -0.2 dB True Peak    │
└──────────────────────────────────────┴──────────────────────┴──────────────────────┘
```

### The 3-Stage Master Buss Limiting Chain:
1. **Stage 1 – Transparent Glue Compression:**
   * SSL G-Buss or Logic Vintage VCA compressor: 2:1 ratio, 30ms attack, Auto release, 1–2 dB gain reduction.
2. **Stage 2 – Hard Clipping (The Loudness Secret):**
   * Insert a soft-clipper (e.g. StandardCLIP, FabFilter Pro-C, or KClip).
   * Clip the topmost 1.5–2.5 dB of transient peaks (snare and kick spikes).
   * *Result:* Eliminates drum peaks cleanly without audible distortion, giving you 3 dB of free headroom for your final limiter!
3. **Stage 3 – Brickwall Limiter:**
   * Pro-L 2 or Logic Adaptive Limiter: Set ceiling to **-0.1 dB True Peak**, oversampling 4x.
   * Push gain until Integrated LUFS reads **-7.5 LUFS** on high-energy drops.

---

## 3. Suno AI & Stem Separation Post-Processing Workflow

When generating musical ideas or stems from Suno AI, the audio often contains high-frequency compression artifacts, mono phase issues, and harsh vocal resonance.

### The 4-Step Cleanup Chain for AI Tracks:
1. **Spectral De-Noising & Resynthesis:**
   * Run the vocal or synth stem through a spectral repair plugin or dynamic de-esser to eliminate the characteristic 3 kHz – 5 kHz "digital sizzle".
2. **Transient Re-Injection:**
   * AI-generated drums often lack punchy attack transients.
   * Layer an authentic acoustic/electronic kick and snare one-shot from *VEDH Bassdrums* or *Cymatics* over the AI rhythm track.
3. **Formant & Stereo Correction:**
   * AI vocals often have unnatural stereo spread on the low-mids.
   * Sum vocal low-mids (under 300 Hz) to mono. Apply subtle pitch correction (Auto-Tune / Melodyne) set to 25ms speed to lock the vocal into the track's exact Camelot key.
4. **Saturation Warmth:**
   * Insert a tape saturation emulation (e.g. Soundtoys Decapitator, FabFilter Saturn 2, or Logic Vintage Tape) to add even-order harmonics that mask the synthetic origin.

---

## 4. Acoustic Drumstick Hybrid Mixing (Alesis Layering)

When playing live acoustic drumsticks on the Alesis Multipad over electronic dance music tracks:
* **The Snare Cut:** Cut 250 Hz on the electronic backing track by -2 dB to leave room for the crack of your physical drumstick snare hit.
* **Parallel "New York" Compression:** Route your Alesis multipad output to a parallel aux buss with an aggressive 1176 compressor (All-Buttons-In / 20:1 ratio, fastest release). Blend this 25% under your dry drumstick audio to create stadium-level explosive impact!
