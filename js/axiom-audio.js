/**
 * @axiom01/audio — Pro Audio & Live Performance JS Runtime Primitives
 * Author: Sol Roth Media
 * License: MIT
 */

export const CAMELOT_KEYS = {
  "1A": { name: "Ab Minor", semitone: 8, mode: "minor" },
  "2A": { name: "Eb Minor", semitone: 3, mode: "minor" },
  "3A": { name: "Bb Minor", semitone: 10, mode: "minor" },
  "4A": { name: "F Minor",  semitone: 5, mode: "minor" },
  "5A": { name: "C Minor",  semitone: 0, mode: "minor" },
  "6A": { name: "G Minor",  semitone: 7, mode: "minor" },
  "7A": { name: "D Minor",  semitone: 2, mode: "minor" },
  "8A": { name: "A Minor",  semitone: 9, mode: "minor" },
  "9A": { name: "E Minor",  semitone: 4, mode: "minor" },
  "10A": { name: "B Minor", semitone: 11, mode: "minor" },
  "11A": { name: "F# Minor",semitone: 6, mode: "minor" },
  "12A": { name: "Db Minor",semitone: 1, mode: "minor" },
  "1B": { name: "B Major",  semitone: 11, mode: "major" },
  "2B": { name: "F# Major", semitone: 6, mode: "major" },
  "3B": { name: "Db Major", semitone: 1, mode: "major" },
  "4B": { name: "Ab Major", semitone: 8, mode: "major" },
  "5B": { name: "Eb Major", semitone: 3, mode: "major" },
  "6B": { name: "Bb Major", semitone: 10, mode: "major" },
  "7B": { name: "F Major",  semitone: 5, mode: "major" },
  "8B": { name: "C Major",  semitone: 0, mode: "major" },
  "9B": { name: "G Major",  semitone: 7, mode: "major" },
  "10B": { name: "D Major", semitone: 2, mode: "major" },
  "11B": { name: "A Major", semitone: 9, mode: "major" },
  "12B": { name: "E Major", semitone: 4, mode: "major" }
};

export class CamelotWheel {
  static getCompatibleKeys(currentKey) {
    const cleanKey = (currentKey || "").toUpperCase().trim();
    if (!CAMELOT_KEYS[cleanKey]) return [];

    const num = parseInt(cleanKey);
    const mode = cleanKey.slice(-1); // "A" or "B"
    const oppMode = mode === "A" ? "B" : "A";

    const prevNum = num === 1 ? 12 : num - 1;
    const nextNum = num === 12 ? 1 : num + 1;

    return [
      cleanKey,                  // Exact match
      `${prevNum}${mode}`,       // Energy drop (-1)
      `${nextNum}${mode}`,       // Energy boost (+1)
      `${num}${oppMode}`         // Relative mode switch
    ];
  }

  static attach(wheelElement, onKeySelect) {
    if (!wheelElement) return;
    const buttons = wheelElement.querySelectorAll("button");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.dataset.key || btn.textContent.trim();
        const compatible = CamelotWheel.getCompatibleKeys(key);

        buttons.forEach((b) => {
          const bKey = b.dataset.key || b.textContent.trim();
          b.removeAttribute("data-state");
          if (bKey === key) {
            b.setAttribute("data-state", "active");
          } else if (compatible.includes(bKey)) {
            b.setAttribute("data-state", "compatible");
          }
        });

        const mainStrong = wheelElement.querySelector("main strong");
        const mainSmall = wheelElement.querySelector("main small");
        if (mainStrong) mainStrong.textContent = key;
        if (mainSmall && CAMELOT_KEYS[key]) mainSmall.textContent = CAMELOT_KEYS[key].name;

        if (typeof onKeySelect === "function") {
          onKeySelect(key, CAMELOT_KEYS[key]);
        }
      });
    });
  }
}

export class VUMeter {
  constructor(containerEl, segmentCount = 16) {
    this.container = containerEl;
    this.segments = [];
    this.peakValue = 0;
    this.peakDecay = 0.95;
    this.init(segmentCount);
  }

  init(count) {
    if (!this.container) return;
    this.container.innerHTML = "";
    this.segments = [];

    for (let i = 0; i < count; i++) {
      const span = document.createElement("span");
      const norm = i / (count - 1);
      if (norm < 0.65) span.className = "green";
      else if (norm < 0.88) span.className = "yellow";
      else span.className = "red";
      this.container.appendChild(span);
      this.segments.push(span);
    }
  }

  update(amplitude) {
    const val = Math.max(0, Math.min(1.0, amplitude));
    this.peakValue = Math.max(val, this.peakValue * this.peakDecay);

    const activeCount = Math.round(val * this.segments.length);
    for (let i = 0; i < this.segments.length; i++) {
      this.segments[i].classList.toggle("lit", i < activeCount);
    }
  }
}
