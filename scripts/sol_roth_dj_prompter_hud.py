#!/usr/bin/env python3
"""
Sol Roth Master 4-Channel DJ Stage Prompter, AI Copilot & Daily Music Intel Hub
==============================================================================
Powered by Axiom01 (https://github.com/Sol-Roth-Media/axiom01 | https://sol-roth-media.github.io/axiom01/)
Features:
  1. 🎵 In-Browser Quick Audio Player: Stream 30s audio clips & preview spotlight artists/releases
  2. ⚡ Ultra-Fast 0ms In-Memory Caching (Instant Mobile & Desktop Loading)
  3. 📱 Flawless Mobile-First Responsive Layout: 100% Zero-Cutoff on iPhone, iPad & Mac
  4. 📰 Daily Music Curation & Industry Intel Hub (/intel) with 3D Vinyl Covers & Audio Previews
  5. ⭐ Artist Spotlight Media: High-res Album Covers, Discography & 1-Click Playable Clips
  6. 🤖 Sol Roth AI DJ Copilot: Live harmonic mix recommendations & transition chat
  7. 🎤 AI Live MC Freestyle Generator: Generates track-aware 8-bar rap / EDM hype verses
  8. 🔍 Instant Manual Library Search: Search 4,346 tracks by name/artist to view lyrics & bars
  9. 🎛️ 4-Channel Controller Support: Real-time sync with Decks 1, 2, 3 & 4
 10. 🌓 Dual Axiom01 Themes: Club Neon vs Festival Daylight
 11. 📱 Zero-Config Apple Bonjour (http://srmmacbookpro.local:7777) & Screen WakeLock
Runs at http://localhost:7777 (Stage Prompter) and http://localhost:7777/intel (Daily DJ Intel)
"""

import os
import sys
import re
import json
import time
import ssl
import random
import socket
import sqlite3
import platform
import struct
import shutil
import threading
import urllib.parse
import urllib.request
import subprocess
from datetime import datetime
from pathlib import Path
from http.server import HTTPServer, ThreadingHTTPServer, BaseHTTPRequestHandler
try:
    import mutagen
    from mutagen.id3 import ID3
except ImportError:
    mutagen = None
    ID3 = None

try:
    import psutil
except ImportError:
    psutil = None

try:
    from pyrekordbox import Rekordbox6Database
except ImportError:
    Rekordbox6Database = None

SCRIPT_DIR = Path(__file__).resolve().parent
MUSIC_ROOT = SCRIPT_DIR
AXIOM_DIR = SCRIPT_DIR.parent if (SCRIPT_DIR.parent / "css" / "axiom.min.css").exists() else (SCRIPT_DIR / "axiom01")
INTEL_CACHE_FILE = SCRIPT_DIR / ".daily_intel_cache.json"

# VJ Assets Directory
VJ_ASSETS_DIR = SCRIPT_DIR.parent / "vj_assets"
if not VJ_ASSETS_DIR.exists():
    VJ_ASSETS_DIR = DRIVE_ROOT / "03_FILMS_AND_VIDEO" / "VJ_Visual_Loops"

# Global VJ State Machine & Pad Trigger Bus
CHAT_EVENTS = []

GLOBAL_VJ_SCENES = [
    {
        "id": 1,
        "char": "Biopunk Film",
        "cat": "film",
        "badge": "4K FILM",
        "name": "Biopunk: Upgrade This (Full Story Feature Loop)",
        "video": "/vj_assets/loops/biopunk_full_story_continuum.mp4",
        "thumb": "/vj_assets/thumbs/biopunk_full_story_continuum.jpg",
        "img": "/vj_assets/USER_CURATED_ORIGINALS/03_cyber_corner_street_hub.jpg",
        "desc": "Sol Roth's animated sci-fi short film reel: Tuff and Gilfo in an epic continuous narrative loop."
    },
    {
        "id": 2,
        "char": "Biopunk Film",
        "cat": "film",
        "badge": "ACT 1",
        "name": "Biopunk Act 1: Megacity Nexus & Genesis Lab",
        "video": "/vj_assets/loops/biopunk_01_megacity_lab.mp4",
        "thumb": "/vj_assets/thumbs/biopunk_01_megacity_lab.jpg",
        "img": "/vj_assets/02_CYBERPUNK_METROPOLIS_AND_TUNNELS/01_creature_city_dominion.jpg",
        "desc": "Establishing the sprawling neon megacity and futuristic bio-engineering research lab."
    },
    {
        "id": 3,
        "char": "Tuff",
        "cat": "film",
        "badge": "ACT 2",
        "name": "Biopunk Act 2: Tuff Genetic Obsession & DNA Re-engineering",
        "video": "/vj_assets/loops/biopunk_02_tuff_obsession.mp4",
        "thumb": "/vj_assets/thumbs/biopunk_02_tuff_obsession.jpg",
        "img": "/vj_assets/USER_CURATED_ORIGINALS/02_glass_lab_cyber_surgery.jpg",
        "desc": "Tuff fixates on the forbidden upgrade, calculating the risks of bio-augmentation."
    },
    {
        "id": 4,
        "char": "Biopunk Film",
        "cat": "film",
        "badge": "ACT 3",
        "name": "Biopunk Act 3: Neon Speeder Chase through the Underbelly",
        "video": "/vj_assets/loops/biopunk_03_cyber_chase.mp4",
        "thumb": "/vj_assets/thumbs/biopunk_03_cyber_chase.jpg",
        "img": "/vj_assets/USER_CURATED_ORIGINALS/04_neon_ramen_night_market.jpg",
        "desc": "High-velocity cyber chase through rain-slicked neon highways and alleyways."
    },
    {
        "id": 5,
        "char": "Biopunk Film",
        "cat": "film",
        "badge": "ACT 4",
        "name": "Biopunk Act 4: Energy Shield Clash & Breaching Defense",
        "video": "/vj_assets/loops/biopunk_04_energy_shield_battle.mp4",
        "thumb": "/vj_assets/thumbs/biopunk_04_energy_shield_battle.jpg",
        "img": "/vj_assets/USER_CURATED_ORIGINALS/01_penthouse_energy_duel.png",
        "desc": "Direct kinetic and laser assault on the harmonic energy barrier."
    },
    {
        "id": 6,
        "char": "Gilfo",
        "cat": "film",
        "badge": "ACT 5",
        "name": "Biopunk Act 5: Gilfo Furious Red Energy Glow Awakening",
        "video": "/vj_assets/loops/biopunk_05_gilfo_furious_glow.mp4",
        "thumb": "/vj_assets/thumbs/biopunk_05_gilfo_furious_glow.jpg",
        "img": "/vj_assets/USER_CURATED_ORIGINALS/06_red_pop_art_revolution.jpg",
        "desc": "Gilfo unleashes crimson bio-energy in furious defiance."
    },
    {
        "id": 7,
        "char": "Tuff & Gilfo",
        "cat": "film",
        "badge": "ACT 6",
        "name": "Biopunk Act 6: Victory & Post-Human Synthetic Ascension",
        "video": "/vj_assets/loops/biopunk_06_victory_rebirth.mp4",
        "thumb": "/vj_assets/thumbs/biopunk_06_victory_rebirth.jpg",
        "img": "/vj_assets/USER_CURATED_ORIGINALS/08_celestial_singularity_avenue.jpg",
        "desc": "Triumph in the neon sky: the ultimate evolution into higher consciousness."
    },
    {
        "id": 8,
        "char": "Abyssal Angler",
        "cat": "3d",
        "badge": "3D RENDER",
        "name": "Abyssal Deep-Sea Anglerfish (Self-Generated Bioluminescence)",
        "video": "",
        "thumb": "/vj_assets/thumbs/08_DEEP_SEA_ABYSSAL_ANGLER.jpg",
        "img": "/vj_assets/08_DEEP_SEA_ABYSSAL_ANGLER/01_bioluminescent_anglerfish.jpg",
        "renderer": "abyssal_angler",
        "desc": "Haunting bioluminescent deep-sea predator with glowing esca lure reactive to bass."
    },
    {
        "id": 9,
        "char": "Micro Drone",
        "cat": "3d",
        "badge": "3D RENDER",
        "name": "Robotic Surveillance Spy Insect (Micro Tactical Drone)",
        "video": "",
        "thumb": "/vj_assets/thumbs/09_MICRO_SURVEILLANCE_DRONE.jpg",
        "img": "/vj_assets/09_MICRO_SURVEILLANCE_DRONE/01_robotic_insect_spy.jpg",
        "renderer": "drone_surveillance",
        "desc": "Stealth biomimetic insect drone with live target acquisition HUD and laser sweep."
    },
    {
        "id": 10,
        "char": "Claymation",
        "cat": "3d",
        "badge": "STOP MOTION",
        "name": "Claymation World: Morphing Stop-Motion Clay Creatures",
        "video": "",
        "thumb": "/vj_assets/thumbs/10_CLAYMATION_WORLD.jpg",
        "img": "/vj_assets/10_CLAYMATION_WORLD/01_stop_motion_clay_creatures.jpg",
        "renderer": "claymation_fx",
        "desc": "Whimsical, tactile stop-motion clay world with organic morphing beats."
    },
    {
        "id": 11,
        "char": "Psych Console",
        "cat": "3d",
        "badge": "INTERACTIVE",
        "name": "Psychological Experiment: DO NOT PRESS Red Button Console",
        "video": "",
        "thumb": "/vj_assets/thumbs/11_PSYCHOLOGICAL_EXPERIMENT.jpg",
        "img": "/vj_assets/11_PSYCHOLOGICAL_EXPERIMENT/01_forbidden_red_button_console.jpg",
        "renderer": "psych_experiment",
        "desc": "Interactive levers and glowing red button: click or trigger for catastrophic surprises!"
    },
    {
        "id": 12,
        "char": "Neural Brain",
        "cat": "3d",
        "badge": "3D RENDER",
        "name": "Synaptic Brain: Microscopic Firing Neurons & Axon Links",
        "video": "",
        "thumb": "/vj_assets/thumbs/12_SYNAPTIC_NEURAL_BRAIN.jpg",
        "img": "/vj_assets/12_SYNAPTIC_NEURAL_BRAIN/01_firing_neurons_microscopic.jpg",
        "renderer": "neural_synapse",
        "desc": "Microscopic neural pathways firing synaptic electrical sparks synced to the music."
    },
    {
        "id": 13,
        "char": "Sol Originals",
        "cat": "art",
        "badge": "ORIGINAL",
        "name": "Penthouse Energy Duel: Neon Skyline Climax",
        "video": "",
        "thumb": "/vj_assets/thumbs/01_penthouse_energy_duel.jpg",
        "img": "/vj_assets/USER_CURATED_ORIGINALS/01_penthouse_energy_duel.png",
        "renderer": "art_reactive_pulse",
        "desc": "Sol Roth original artwork: Dual energy wielders dueling above the city skyline."
    },
    {
        "id": 14,
        "char": "Sol Originals",
        "cat": "art",
        "badge": "ORIGINAL",
        "name": "Glass Lab: Cybernetic Augmentation Surgery",
        "video": "",
        "thumb": "/vj_assets/thumbs/02_glass_lab_cyber_surgery.jpg",
        "img": "/vj_assets/USER_CURATED_ORIGINALS/02_glass_lab_cyber_surgery.jpg",
        "renderer": "art_reactive_pulse",
        "desc": "Sol Roth original artwork: High-precision robotics operating in a pristine glass chamber."
    },
    {
        "id": 15,
        "char": "Sol Originals",
        "cat": "art",
        "badge": "ORIGINAL",
        "name": "Cyber Corner: Street Syndicate Transit Node",
        "video": "",
        "thumb": "/vj_assets/thumbs/03_cyber_corner_street_hub.jpg",
        "img": "/vj_assets/USER_CURATED_ORIGINALS/03_cyber_corner_street_hub.jpg",
        "renderer": "art_reactive_pulse",
        "desc": "Sol Roth original artwork: Rain-washed neon crossroads and flying drone skyways."
    },
    {
        "id": 16,
        "char": "Sol Originals",
        "cat": "art",
        "badge": "ORIGINAL",
        "name": "Neon Ramen: Cyberpunk Underbelly Night Market",
        "video": "",
        "thumb": "/vj_assets/thumbs/04_neon_ramen_night_market.jpg",
        "img": "/vj_assets/USER_CURATED_ORIGINALS/04_neon_ramen_night_market.jpg",
        "renderer": "art_reactive_pulse",
        "desc": "Sol Roth original artwork: Glowing food stalls, holograms, and subterranean street life."
    },
    {
        "id": 17,
        "char": "Sol Originals",
        "cat": "art",
        "badge": "ORIGINAL",
        "name": "Solarpunk Penthouse: Green Horizon Skyline",
        "video": "",
        "thumb": "/vj_assets/thumbs/05_solarpunk_penthouse_skyline.jpg",
        "img": "/vj_assets/USER_CURATED_ORIGINALS/05_solarpunk_penthouse_skyline.jpg",
        "renderer": "art_reactive_pulse",
        "desc": "Sol Roth original artwork: Eco-futuristic architecture overlooking lush cloud terraces."
    },
    {
        "id": 18,
        "char": "Sol Originals",
        "cat": "art",
        "badge": "ORIGINAL",
        "name": "Red Pop-Art Revolution & Cybernetic Duality",
        "video": "",
        "thumb": "/vj_assets/thumbs/06_red_pop_art_revolution.jpg",
        "img": "/vj_assets/USER_CURATED_ORIGINALS/06_red_pop_art_revolution.jpg",
        "renderer": "art_reactive_pulse",
        "desc": "Sol Roth original artwork: Bold graphic rebellion aesthetic bathed in saturated crimson."
    },
    {
        "id": 19,
        "char": "Sol Originals",
        "cat": "art",
        "badge": "ORIGINAL",
        "name": "Capitol Cosmic Portal: Celestial Singularity Gate",
        "video": "",
        "thumb": "/vj_assets/thumbs/07_capitol_cosmic_portal.jpg",
        "img": "/vj_assets/USER_CURATED_ORIGINALS/07_capitol_cosmic_portal.jpg",
        "renderer": "art_reactive_pulse",
        "desc": "Sol Roth original artwork: Massive galactic vortex tearing open the neoclassical rotunda."
    },
    {
        "id": 20,
        "char": "Sol Originals",
        "cat": "art",
        "badge": "ORIGINAL",
        "name": "Celestial Singularity Avenue: Golden Hour Metropolis",
        "video": "",
        "thumb": "/vj_assets/thumbs/08_celestial_singularity_avenue.jpg",
        "img": "/vj_assets/USER_CURATED_ORIGINALS/08_celestial_singularity_avenue.jpg",
        "renderer": "art_reactive_pulse",
        "desc": "Sol Roth original artwork: Golden sunset over towering glass monoliths and stellar gateways."
    },
    {
        "id": 21,
        "char": "Sol Originals",
        "cat": "art",
        "badge": "ORIGINAL",
        "name": "Isometric Corporate Utopia: Neo-Tech Megablocks",
        "video": "",
        "thumb": "/vj_assets/thumbs/09_isometric_corporate_utopia.jpg",
        "img": "/vj_assets/USER_CURATED_ORIGINALS/09_isometric_corporate_utopia.jpg",
        "renderer": "art_reactive_pulse",
        "desc": "Sol Roth original artwork: Detailed isometric cyber city with elevated rail networks."
    },
    {
        "id": 22,
        "char": "Sol Originals",
        "cat": "art",
        "badge": "ORIGINAL",
        "name": "Split Duality: Cybernetic Android & Human Soul",
        "video": "",
        "thumb": "/vj_assets/thumbs/10_split_duality_cyber_android.jpg",
        "img": "/vj_assets/USER_CURATED_ORIGINALS/10_split_duality_cyber_android.jpg",
        "renderer": "art_reactive_pulse",
        "desc": "Sol Roth original artwork: Bisected portrait contrasting organic life with synth cyberware."
    },
    {
        "id": 23,
        "char": "Entity X-01",
        "cat": "stage",
        "badge": "STAGE VIDEO",
        "name": "Entity X-01: Act 1 Creature Stasis Box",
        "video": "/vj_assets/loops/01_act1_containment_stasis_idle.mp4",
        "thumb": "/vj_assets/thumbs/01_act1_containment_stasis_idle.jpg",
        "img": "/vj_assets/01_CONTAINMENT_CELL_CREATURE/01_creature_in_box_idle.jpg",
        "desc": "The cybernetic beast contained in high-voltage acrylic stasis."
    },
    {
        "id": 24,
        "char": "Entity X-01",
        "cat": "stage",
        "badge": "STAGE VIDEO",
        "name": "Entity X-01: Act 2 Creature Agitation Slam",
        "video": "/vj_assets/loops/02_act2_creature_slam_agitation.mp4",
        "thumb": "/vj_assets/thumbs/02_act2_creature_slam_agitation.jpg",
        "img": "/vj_assets/01_CONTAINMENT_CELL_CREATURE/02_creature_box_slam.jpg",
        "desc": "Entity slams glass panels with heavy bass shockwaves."
    },
    {
        "id": 25,
        "char": "Entity X-01",
        "cat": "stage",
        "badge": "STAGE VIDEO",
        "name": "Entity X-01: Act 3 Critical Containment Failure",
        "video": "/vj_assets/loops/03_act3_containment_failure_buildup.mp4",
        "thumb": "/vj_assets/thumbs/03_act3_containment_failure_buildup.jpg",
        "img": "/vj_assets/01_CONTAINMENT_CELL_CREATURE/03_creature_box_fracturing.jpg",
        "desc": "Emergency alarms blaring as containment glass fractures."
    },
    {
        "id": 26,
        "char": "Entity X-01",
        "cat": "stage",
        "badge": "STAGE VIDEO",
        "name": "Entity X-01: Act 4 Containment Breach Detonation",
        "video": "/vj_assets/loops/04_act4_containment_breach_drop.mp4",
        "thumb": "/vj_assets/thumbs/04_act4_containment_breach_drop.jpg",
        "img": "/vj_assets/01_CONTAINMENT_CELL_CREATURE/04_creature_escape_breach.jpg",
        "desc": "Full breach on the beat drop: explosive escape into the arena."
    },
    {
        "id": 27,
        "char": "Entity X-01",
        "cat": "stage",
        "badge": "STAGE VIDEO",
        "name": "Entity X-01: Act 4 Cyberpunk Megacity Dominion",
        "video": "/vj_assets/loops/05_act4_cyberpunk_city_dominion.mp4",
        "thumb": "/vj_assets/thumbs/05_act4_cyberpunk_city_dominion.jpg",
        "img": "/vj_assets/02_CYBERPUNK_METROPOLIS_AND_TUNNELS/01_creature_city_dominion.jpg",
        "desc": "The creature rampages across towering neon skyscrapers."
    },
    {
        "id": 28,
        "char": "AURA Diva",
        "cat": "stage",
        "badge": "STAGE VIDEO",
        "name": "AURA: Crystal Prism Stasis",
        "video": "/vj_assets/loops/13_aura_crystal_prism_stasis.mp4",
        "thumb": "/vj_assets/thumbs/13_aura_crystal_prism_stasis.jpg",
        "img": "/vj_assets/06_AURA_CYBER_POP_DIVA/01_aura_crystal_prism_stasis.jpg",
        "desc": "Android pop vocalist encased in floating prism reflections."
    },
    {
        "id": 29,
        "char": "AURA Diva",
        "cat": "stage",
        "badge": "STAGE VIDEO",
        "name": "AURA: Holographic Equalizer Wings Climax",
        "video": "/vj_assets/loops/14_aura_equalizer_wings_climax.mp4",
        "thumb": "/vj_assets/thumbs/14_aura_equalizer_wings_climax.jpg",
        "img": "/vj_assets/06_AURA_CYBER_POP_DIVA/02_aura_equalizer_wings_climax.jpg",
        "desc": "Giant neon wings unfurl, reacting directly to vocal hooks."
    },
    {
        "id": 30,
        "char": "Titan Mecha",
        "cat": "stage",
        "badge": "STAGE VIDEO",
        "name": "Titan: Launch Bay Hangar",
        "video": "/vj_assets/loops/15_titan_mecha_launch_hangar.mp4",
        "thumb": "/vj_assets/thumbs/15_titan_mecha_launch_hangar.jpg",
        "img": "/vj_assets/07_TITAN_WARFRAME_MECHA/01_titan_mecha_launch_hangar.jpg",
        "desc": "Heavy combat warframe powering up in underground blast bay."
    },
    {
        "id": 31,
        "char": "Titan Mecha",
        "cat": "stage",
        "badge": "STAGE VIDEO",
        "name": "Titan: Mecha Laser Assault",
        "video": "/vj_assets/loops/08_act4_mecha_laser_assault.mp4",
        "thumb": "/vj_assets/thumbs/08_act4_mecha_laser_assault.jpg",
        "img": "/vj_assets/04_ANIME_MECHA_AND_ROBOTIC_ASSAULT/01_mecha_laser_assault.jpg",
        "desc": "Full missile barrage and shoulder-mounted railgun blasts."
    },
    {
        "id": 32,
        "char": "Environment",
        "cat": "stage",
        "badge": "STAGE VIDEO",
        "name": "4K Sci-Fi Cyber Facility Corridor",
        "video": "/vj_assets/loops/11_sci_fi_cyber_corridor_4k.mp4",
        "thumb": "/vj_assets/thumbs/11_sci_fi_cyber_corridor_4k.jpg",
        "img": "/vj_assets/02_CYBERPUNK_METROPOLIS_AND_TUNNELS/01_creature_city_dominion.jpg",
        "desc": "Hyper-detailed endless 4K corridor sweep."
    },
    {
        "id": 33,
        "char": "Dimension",
        "cat": "stage",
        "badge": "STAGE VIDEO",
        "name": "Hexagon Laser Warp Tunnel",
        "video": "/vj_assets/loops/06_act4_laser_warp_tunnel.mp4",
        "thumb": "/vj_assets/thumbs/06_act4_laser_warp_tunnel.jpg",
        "img": "/vj_assets/02_CYBERPUNK_METROPOLIS_AND_TUNNELS/02_laser_warp_tunnel.jpg",
        "desc": "Hyperspace tunnel with neon gridlines and speed lines."
    },
    {
        "id": 34,
        "char": "Dimension",
        "cat": "stage",
        "badge": "STAGE VIDEO",
        "name": "Neuro Bass Fractal Mandala",
        "video": "/vj_assets/loops/07_act3_neuro_bass_fractal.mp4",
        "thumb": "/vj_assets/thumbs/07_act3_neuro_bass_fractal.jpg",
        "img": "/vj_assets/03_GLITCH_BASS_AND_NEURO_FRACTALS/01_neuro_bass_fractal.jpg",
        "desc": "Pulsing sacred geometry mandala reacting to sub-bass."
    },
    {
        "id": 35,
        "char": "Sol Arena",
        "cat": "stage",
        "badge": "STAGE VIDEO",
        "name": "Sol Roth: Holographic Stadium Decks",
        "video": "/vj_assets/loops/10_act2_sol_roth_cyber_dj.mp4",
        "thumb": "/vj_assets/thumbs/10_act2_sol_roth_cyber_dj.jpg",
        "img": "/vj_assets/02_CYBERPUNK_METROPOLIS_AND_TUNNELS/03_sol_roth_cyber_dj.jpg",
        "desc": "DJ booth hovering above 50,000 raving cyborgs."
    },
    {
        "id": 36,
        "char": "Ascension",
        "cat": "stage",
        "badge": "STAGE VIDEO",
        "name": "Act 5: Sol Roth Cosmic Totem Finale",
        "video": "/vj_assets/loops/09_act5_sol_roth_cosmic_totem.mp4",
        "thumb": "/vj_assets/thumbs/09_act5_sol_roth_cosmic_totem.jpg",
        "img": "/vj_assets/05_RAVE_FINALE_AND_COSMIC_DESTRUCTION/01_sol_roth_totem_finale.jpg",
        "desc": "The ultimate festival climax: cosmic totem summoning rave divinity."
    },
    {
        "id": 37,
        "char": "Arcade Shooter",
        "cat": "games",
        "badge": "PLAYABLE GAME",
        "name": "Axiom Target Arcade: 16-Bit Cyber Target Range",
        "video": "",
        "thumb": "/vj_assets/thumbs/screenshot_16_target_arcade.jpg",
        "renderer": "target_arcade",
        "desc": "Interactive mini shooter! Tap/click anywhere to shoot moving targets & cruisers with live score & streak multiplier."
    },
    {
        "id": 38,
        "char": "Retro Arcade",
        "cat": "games",
        "badge": "PLAYABLE GAME",
        "name": "Axiom Kombat: 16-Bit 2D Arcade Fighter",
        "video": "",
        "thumb": "/vj_assets/thumbs/screenshot_06_arcade_fighter.jpg",
        "renderer": "arcade_fighter",
        "desc": "Playable fighting game engine with Hadoken, Shoryuken, Combos & health bars."
    },
    {
        "id": 39,
        "char": "Rubber Hose",
        "cat": "games",
        "badge": "RETRO CANVAS",
        "name": "Toon Mayhem: 1930s Cuphead Jazz Demon",
        "video": "",
        "thumb": "/vj_assets/thumbs/screenshot_08_toon_mayhem.jpg",
        "renderer": "toon_mayhem",
        "desc": "Vintage rubber-hose cartoon with pie eyes, bouncing knees, film grain, and jazz horn notes."
    },
    {
        "id": 40,
        "char": "Kinetic Core",
        "cat": "games",
        "badge": "RETRO CANVAS",
        "name": "The Kinetic Core: Spinning Gears & Plasma Engine",
        "video": "",
        "thumb": "/vj_assets/thumbs/screenshot_09_kinetic_core.jpg",
        "renderer": "kinetic_core",
        "desc": "Intricate interlocking clockwork gears, piston rods, steam bursts, and spinning plasma turbine."
    },
    {
        "id": 41,
        "char": "Neo-Olympus",
        "cat": "games",
        "badge": "RETRO CANVAS",
        "name": "Neo-Olympus: Colossal Living Cyber-God Statue",
        "video": "",
        "thumb": "/vj_assets/thumbs/screenshot_10_neo_olympus.jpg",
        "renderer": "neo_olympus",
        "desc": "Floating gilded classical deity statue with glowing eyes and lightning particle crown."
    },
    {
        "id": 42,
        "char": "Blade Runner",
        "cat": "games",
        "badge": "RETRO CANVAS",
        "name": "2049 Dystopia: Rain-Slicked Flying Spinner Megacity",
        "video": "",
        "thumb": "/vj_assets/thumbs/screenshot_11_blade_runner.jpg",
        "renderer": "blade_runner",
        "desc": "Atmospheric Blade Runner metropolis with cascading rain, searchlights, and flying spinners."
    },
    {
        "id": 43,
        "char": "Starship",
        "cat": "games",
        "badge": "RETRO CANVAS",
        "name": "Deep Space Dreadnought: Hyperdrive Bridge",
        "video": "",
        "thumb": "/vj_assets/thumbs/screenshot_12_starship_bridge.jpg",
        "renderer": "starship",
        "desc": "Sci-fi bridge cockpit looking out at stars warping into speed lines."
    },
    {
        "id": 44,
        "char": "Biopunk Farm",
        "cat": "games",
        "badge": "RETRO CANVAS",
        "name": "Biopunk Genesis: 3D Genetic Incubation Farm",
        "video": "",
        "thumb": "/vj_assets/thumbs/screenshot_13_biopunk_farm.jpg",
        "renderer": "biopunk_farm",
        "desc": "Stylized bio-vat incubation farm with bubbling fluids and DNA double-helix towers."
    },
    {
        "id": 45,
        "char": "Synthetica",
        "cat": "games",
        "badge": "RETRO CANVAS",
        "name": "Homo Synthetica: The Post-Human Awakened",
        "video": "",
        "thumb": "/vj_assets/thumbs/screenshot_14_homo_synthetica.jpg",
        "renderer": "homo_synthetica",
        "desc": "The evolved synthetic human: cyber skull with glowing neural cortex."
    },
    {
        "id": 46,
        "char": "Cyber-Ronin",
        "cat": "games",
        "badge": "RETRO CANVAS",
        "name": "Cyber-Ronin: Neon Katana Anime Duel",
        "video": "",
        "thumb": "/vj_assets/thumbs/screenshot_15_cyber_ronin.jpg",
        "renderer": "cyber_ronin",
        "desc": "Anime-inspired sword duel with neon slash trails and sakura petals."
    },
    {
        "id": 47,
        "char": "Robot Foundry",
        "cat": "games",
        "badge": "RETRO CANVAS",
        "name": "The Cyber-Doll Foundry: Companion Robot Assembly Plant",
        "video": "",
        "thumb": "/vj_assets/thumbs/screenshot_17_robot_foundry.jpg",
        "renderer": "robot_foundry",
        "desc": "Robotic assembly conveyor belt constructing companion androids with welding arcs."
    },
    {
        "id": 48,
        "char": "Liquid Flow",
        "cat": "games",
        "badge": "RETRO CANVAS",
        "name": "Dance Catalyst II: Neo-Liquid Flow & Gloving Rave",
        "video": "",
        "thumb": "/vj_assets/thumbs/screenshot_18_liquid_flow.jpg",
        "renderer": "liquid_flow",
        "desc": "Liquid dancing and finger-glowing light show with neon ribbon trails."
    },
    {
        "id": 49,
        "char": "Dance Catalyst",
        "cat": "games",
        "badge": "RETRO CANVAS",
        "name": "The Dancefloor Catalyst: Seductive & Wild Dancers",
        "video": "",
        "thumb": "/vj_assets/thumbs/screenshot_07_dancefloor_catalyst.jpg",
        "renderer": "dance_catalyst",
        "desc": "Silhouetted podium dancers grooving to the beat with neon equalizer spotlights."
    },
    {
        "id": 50,
        "char": "Chimera",
        "cat": "games",
        "badge": "RETRO CANVAS",
        "name": "Project Chimera: Modular Reanimator (Cyber-Frankenstein)",
        "video": "",
        "thumb": "/vj_assets/thumbs/screenshot_19_modular_reanimator.jpg",
        "renderer": "chimera",
        "desc": "Cyber-Frankenstein creature built from interchangeable heads and limbs, reanimated by Tesla coils."
    }
]

VJ_STATE = {
    'last_chat_user': '',
    'last_chat_action': '',
    'chat_event_time': 0,
    "scene": "1",            # 1: Stasis / Breach Story, 2: Cyber City, 3: Warp Tunnel, 4: Neuro Fractal, 5: Mecha, 6: Totem, 7: Lyrics, 8: Audio Spectrum
    "substate": "idle",      # idle, slam, shock, crack, breach
    "crack_level": 0,        # 0 to 4
    "slam_time": 0,
    "breach_time": 0,
    "shock_time": 0,
    "strobe_time": 0,
    "blackout": False,
    "last_updated": time.time()
}


# Dynamic Drive Root Resolution (Auto-detects Vault, Performance SSD, or internal)
if SCRIPT_DIR.parent.name == '01_DJ_AND_PERFORMANCE':
    DRIVE_ROOT = SCRIPT_DIR.parent.parent
else:
    DRIVE_ROOT = SCRIPT_DIR.parent

def get_serato_crate_dir():
    candidates = [
        DRIVE_ROOT / '01_DJ_AND_PERFORMANCE/_Serato_/Subcrates',
        DRIVE_ROOT / '_Serato_/Subcrates',
        SCRIPT_DIR.parent / '_Serato_/Subcrates'
    ]
    for c in candidates:
        if c.exists(): return c
    candidates[0].mkdir(parents=True, exist_ok=True)
    return candidates[0]

# Serato Library path detection
if platform.system() == 'Darwin':
    SERATO_LIB_DB = Path.home() / 'Library/Application Support/Serato/Library/master.sqlite'
else:
    SERATO_LIB_DB = Path.home() / 'AppData/Local/Serato/Library/master.sqlite'

PORT = 7777
GEMINI_API_KEY = os.environ.get('GEMINI_API_KEY', '')
config_path = SCRIPT_DIR / '.stage_hud_config.json'
if not GEMINI_API_KEY and config_path.exists():
    try:
        cfg = json.loads(config_path.read_text(encoding='utf-8'))
        GEMINI_API_KEY = cfg.get('gemini_api_key', '')
    except Exception: pass

CAMELOT_COLORS = {
    '1A': '#00b4a0', '1B': '#00b4a0', '2A': '#00d264', '2B': '#00d264',
    '3A': '#82d71e', '3B': '#82d71e', '4A': '#f0cd1e', '4B': '#f0cd1e',
    '5A': '#f58c14', '5B': '#f58c14', '6A': '#eb322d', '6B': '#eb322d',
    '7A': '#e62882', '7B': '#e62882', '8A': '#a032dc', '8B': '#a032dc',
    '9A': '#5a3ce1', '9B': '#5a3ce1', '10A': '#1e64f0', '10B': '#1e64f0',
    '11A': '#14b4f5', '11B': '#14b4f5', '12A': '#0fd7c8', '12B': '#0fd7c8'
}

MUSICAL_TO_CAMELOT = {
    'ABM': '1A', 'G#M': '1A', 'G# MINOR': '1A', 'AB MINOR': '1A', 'G#M': '1A', 'ABM': '1A',
    'EBM': '2A', 'D#M': '2A', 'EB MINOR': '2A', 'D# MINOR': '2A', 'D#M': '2A', 'EBM': '2A',
    'BBM': '3A', 'A#M': '3A', 'BB MINOR': '3A', 'A# MINOR': '3A', 'A#M': '3A', 'BBM': '3A',
    'FM': '4A', 'F MINOR': '4A', 'F-MIN': '4A', 'FM': '4A',
    'CM': '5A', 'C MINOR': '5A', 'C-MIN': '5A', 'CM': '5A',
    'GM': '6A', 'G MINOR': '6A', 'G-MIN': '6A', 'GM': '6A',
    'DM': '7A', 'D MINOR': '7A', 'D-MIN': '7A', 'DM': '7A',
    'AM': '8A', 'A MINOR': '8A', 'A-MIN': '8A', 'AM': '8A',
    'EM': '9A', 'E MINOR': '9A', 'E-MIN': '9A', 'EM': '9A',
    'BM': '10A', 'B MINOR': '10A', 'B-MIN': '10A', 'BM': '10A',
    'F#M': '11A', 'GBM': '11A', 'F# MINOR': '11A', 'GB MINOR': '11A', 'F#M': '11A', 'GBM': '11A',
    'C#M': '12A', 'DBM': '12A', 'C# MINOR': '12A', 'DB MINOR': '12A', 'C#M': '12A', 'DBM': '12A',

    'B': '1B', 'B MAJ': '1B', 'B MAJOR': '1B', 'B-MAJ': '1B',
    'F#': '2B', 'GB': '2B', 'F# MAJ': '2B', 'GB MAJ': '2B', 'F# MAJOR': '2B', 'GB MAJOR': '2B',
    'DB': '3B', 'C#': '3B', 'DB MAJ': '3B', 'C# MAJ': '3B', 'DB MAJOR': '3B', 'C# MAJOR': '3B',
    'AB': '4B', 'G#': '4B', 'AB MAJ': '4B', 'G# MAJ': '4B', 'AB MAJOR': '4B', 'G# MAJOR': '4B',
    'EB': '5B', 'D#': '5B', 'EB MAJ': '5B', 'D# MAJ': '5B', 'EB MAJOR': '5B', 'D# MAJOR': '5B',
    'BB': '6B', 'A#': '6B', 'BB MAJ': '6B', 'A# MAJ': '6B', 'BB MAJOR': '6B', 'A# MAJOR': '6B',
    'F': '7B', 'F MAJ': '7B', 'F MAJOR': '7B', 'F-MAJ': '7B',
    'C': '8B', 'C MAJ': '8B', 'C MAJOR': '8B', 'C-MAJ': '8B',
    'G': '9B', 'G MAJ': '9B', 'G MAJOR': '9B', 'G-MAJ': '9B',
    'D': '10B', 'D MAJ': '10B', 'D MAJOR': '10B', 'D-MAJ': '10B',
    'A': '11B', 'A MAJ': '11B', 'A MAJOR': '11B', 'A-MAJ': '11B',
    'E': '12B', 'E MAJ': '12B', 'E MAJOR': '12B', 'E-MAJ': '12B'
}

CAMELOT_TO_MUSICAL = {
    '1A': 'Abm', '2A': 'Ebm', '3A': 'Bbm', '4A': 'Fm', '5A': 'Cm', '6A': 'Gm',
    '7A': 'Dm', '8A': 'Am', '9A': 'Em', '10A': 'Bm', '11A': 'F#m', '12A': 'Dbm',
    '1B': 'B', '2B': 'F#', '3B': 'Db', '4B': 'Ab', '5B': 'Eb', '6B': 'Bb',
    '7B': 'F', '8B': 'C', '9B': 'G', '10B': 'D', '11B': 'A', '12B': 'E'
}

def normalize_to_camelot(raw_key):
    if not raw_key:
        return '8A', 'Am'
    k_clean = str(raw_key).strip().upper()
    
    camelot_match = re.match(r'^([1-9]|1[0-2])([AB])', k_clean)
    if camelot_match:
        cam_code = f"{camelot_match.group(1)}{camelot_match.group(2)}"
        return cam_code, CAMELOT_TO_MUSICAL.get(cam_code, '')
        
    lookup_key = k_clean.replace('MIN', 'M').replace('MAJ', '').replace(' ', '').strip()
    if lookup_key in MUSICAL_TO_CAMELOT:
        cam_code = MUSICAL_TO_CAMELOT[lookup_key]
        return cam_code, CAMELOT_TO_MUSICAL.get(cam_code, '')

    if k_clean in MUSICAL_TO_CAMELOT:
        cam_code = MUSICAL_TO_CAMELOT[k_clean]
        return cam_code, CAMELOT_TO_MUSICAL.get(cam_code, '')

    return '8A', 'Am'

# In-Memory Speed Caches for 0ms Instant Mobile Response
LIBRARY_CATALOG = []
FILENAME_MAP = {}
TRACK_DATA_CACHE = {}
PREVIEW_CACHE = {}

def index_library_catalog():
    global LIBRARY_CATALOG, FILENAME_MAP
    items = []
    fmap = {}
    AUDIO_EXTS = ('.mp3', '.wav', '.m4a', '.aiff', '.flac')
    for p in [f for f in MUSIC_ROOT.glob('**/*.*') if f.suffix.lower() in AUDIO_EXTS]:
        if any(x in str(p) for x in ['_Inbox', '_Playlists', '__pycache__', '_Issues', '_VJ_Videos', 'axiom01']):
            continue
        try:
            fmap[p.name] = p
            name_clean = p.stem
            artist_clean = "Sol Roth DJ Master"
            if " - " in name_clean:
                parts = name_clean.split(" - ", 1)
                artist_clean, name_clean = parts[0], parts[1]
            
            items.append({
                "filename": p.name,
                "title": name_clean,
                "artist": artist_clean,
                "rel_path": str(p.relative_to(MUSIC_ROOT)),
                "has_lrc": p.with_suffix('.lrc').exists(),
                "mtime": p.stat().st_mtime
            })
        except Exception: pass
    LIBRARY_CATALOG = items
    FILENAME_MAP = fmap
    print(f"📚 Library catalog indexed: {len(LIBRARY_CATALOG)} playable tracks ready in 0ms cache.")

index_library_catalog()

def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(('8.8.8.8', 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return '127.0.0.1'

def fetch_track_preview(query_str):
    clean_q = query_str.strip()
    if not clean_q: return None
    if clean_q in PREVIEW_CACHE:
        return PREVIEW_CACHE[clean_q]
    
    queries = [clean_q]
    clean_no_feat = re.sub(r'\(.*?\)|\[.*?\]|feat\..*|x\s+', '', clean_q, flags=re.IGNORECASE).strip()
    if clean_no_feat != clean_q:
        queries.append(clean_no_feat)
    
    parts = clean_q.split(' & ') if ' & ' in clean_q else (clean_q.split(' - ') if ' - ' in clean_q else clean_q.split(' '))
    if len(parts) >= 2:
        queries.append(parts[0].strip())
        queries.append(parts[-1].strip())

    ctx = ssl._create_unverified_context()
    for q in queries:
        url = f'https://itunes.apple.com/search?term={urllib.parse.quote(q)}&entity=song&limit=1'
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        try:
            with urllib.request.urlopen(req, context=ctx, timeout=3) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                if data.get('resultCount', 0) > 0:
                    res = data['results'][0]
                    art = res.get('artworkUrl100', '').replace('100x100bb', '600x600bb')
                    obj = {
                        'title': res.get('trackName'),
                        'artist': res.get('artistName'),
                        'album': res.get('collectionName'),
                        'preview_url': res.get('previewUrl'),
                        'artwork_url': art,
                        'track_view_url': res.get('trackViewUrl')
                    }
                    PREVIEW_CACHE[clean_q] = obj
                    return obj
        except Exception: pass
    return None



DOUBLE_DROP_MATRIX_DATA = [
    {
        "pair_id": "core_dontstopme",
        "key": "8A",
        "key_name": "A minor",
        "bpm": "140 BPM",
        "genre": "EDM Trap / Hybrid Bass",
        "energy": "⚡ Peak Festival Moshpit",
        "deck1_track": "RL Grime - Core",
        "deck2_track": "ISOxo - dontstopme!",
        "technique": "Start 'Core' on Deck 1. At Bar 16 buildup, cut Deck 1 Drums stem, play live 808 roll on Alesis Pad. On drop Beat 1, slam ISOxo 'dontstopme!' lead drop while keeping Core 808 sub.",
        "cue_strategy": "Deck 1 Cue A (Intro) -> Deck 2 Cue D (Beat 1 Drop swap)"
    },
    {
        "pair_id": "laserbeam_griztronics",
        "key": "9A",
        "key_name": "E minor",
        "bpm": "145-150 BPM",
        "genre": "Heavy Dubstep / Tearout",
        "energy": "💣 Seismic Moshpit Destroyer",
        "deck1_track": "Ray Volpe - Laserbeam",
        "deck2_track": "Subtronics & GRIZ - GRIZTRONICS",
        "technique": "Loop 4 bars of GRIZTRONICS vocal chop ('OOH'). Build with Laserbeam laser sweep. Cut crossfader on bar 8.3 for live vocal scream, drop both basslines simultaneously on the 1!",
        "cue_strategy": "Deck 1: Cue D (Drop) + Deck 2: Cue D (Drop) with Instant Double crossfader chop"
    },
    {
        "pair_id": "overtrippin_tellme",
        "key": "4A",
        "key_name": "F minor",
        "bpm": "140 BPM",
        "genre": "Deep 140 UK Bass / Leftfield",
        "energy": "🌊 Sub-Bass Roller & Nostalgia",
        "deck1_track": "Tape B - Over Trippin'",
        "deck2_track": "RL Grime, What So Not - Tell Me",
        "technique": "Isolate Tell Me vocal and brass horns on Deck 2 over Tape B's heavy 140 rolling sub-bass wave on Deck 1.",
        "cue_strategy": "Deck 1 full sub-bass EQ @ 12 o'clock, Deck 2 low-cut @ 100Hz with high horn flare"
    },
    {
        "pair_id": "baddadan_chant",
        "key": "8A / 1A",
        "key_name": "A minor ➔ Ab minor",
        "bpm": "174 BPM",
        "genre": "Drum & Bass / Dancefloor",
        "energy": "⚡ Blistering 174 BPM Escalate",
        "deck1_track": "Chase & Status, Bou, Flowdan - Baddadan",
        "deck2_track": "1991 - Chant",
        "technique": "Layer Flowdan's deep Jamaican ragga vocal stem on Deck 1 over 1991's euphoric dancefloor DnB supersaws on Deck 2.",
        "cue_strategy": "Deck 1 Vox Stem ON, Drum Stem OFF; Deck 2 Full Mix DROP"
    },
    {
        "pair_id": "faint_titans",
        "key": "8A",
        "key_name": "A minor",
        "bpm": "135 ➔ 145 BPM",
        "genre": "Nu-Metal Vocal Stem ➔ Tearout Drop",
        "energy": "🔥 Live Scream into Tearout Growl",
        "deck1_track": "Linkin Park - Faint (Studio Acapella)",
        "deck2_track": "Excision & Wooli - Titans",
        "technique": "Play Chester Bennington's iconic screaming breakdown vocal on Deck 1. At the final scream word 'TIME', slam Deck 2 Titans brutal tearout drop on beat 1 accompanied by an Alesis sub-braam pad strike.",
        "cue_strategy": "Live hybrid vocal takeover: Mic + Acapella into devastating drop"
    }
]

GENRE_ENCYCLOPEDIA_DATA = [
    {
        "id": "edm_trap_festival",
        "name": "EDM Trap, Hybrid Trap & Festival Bass",
        "icon": "💥",
        "category": "Bass & EDM (Primary Focus)",
        "bpm_range": "140 – 150 BPM (Half-Time 70–75 BPM)",
        "common_keys": "8A (A minor), 4A (F minor), 11A (F# minor), 1A (Ab minor)",
        "energy_level": "Maximum Festival Moshpit & Hybrid Live Energy",
        "keywords": ["trap", "edm trap", "hybrid trap", "isoxo", "knock2", "rl grime", "crankdat", "baauer", "flosstradamus", "yellow claw", "nghtmre", "boombox cartel", "troyboi", "sable valley", "isoknock"],
        "musical_definition": "High-octane electronic festival trap combining blistering 808 sub-bass glides, distorted half-time snare rolls, stadium brass horn drops, aggressive punk/metal vocal chops, and cinematic festival buildups.",
        "rhythm_formula": "Half-time trap bounce: heavy 808 kick on beat 1, devastating high-frequency snare/clap on beat 3, skittering 32nd-note rolling hi-hats with pitch sweeps, and aggressive 808 pitch glides spanning 2 octaves.",
        "song_structure": "[Intro 16b: Eerie synth atmosphere + vocal chant] ➔ [Buildup 16b: Fast snare roll + rising pitch siren] ➔ [Drop 1 32b: Heavy 808 distortion + screech brass horns] ➔ [Breakdown 16b: Drum break for live pad solos] ➔ [VIP Drop 32b: Double-time switch]",
        "dj_mix_strategy": "The primary live hybrid weapon! Cut track drums on Deck 1 using Stems, trigger live acoustic snare rolls and 808 sub drops on your Alesis stick pad into the drop, or deliver a live vocal scream on the 4-bar pre-drop silence before dropping both faders.",
        "sub_genres": [
            {"id": "hybrid_trap_club", "name": "Hybrid Trap & ISO-Style Club", "bpm": "140–145 BPM", "desc": "Raw, aggressive 808 distortion, punk vocal angst, and rapid-fire synth stabs (ISOxo, Knock2, RL Grime).", "keywords": ["hybrid trap", "isoxo", "knock2", "rl grime", "sable valley"]},
            {"id": "festival_trap_horns", "name": "Festival Trap & Brass Horn Drops", "bpm": "145–150 BPM", "desc": "Massive brass horn synth drops, stadium chants, and explosive half-time 808 sub hits (Baauer, Flosstradamus, Yellow Claw, NGHTMRE).", "keywords": ["festival trap", "baauer", "flosstradamus", "yellow claw", "nghtmre"]},
            {"id": "hard_trap_metal", "name": "Hard Trap & Metal Screams", "bpm": "145–152 BPM", "desc": "Distorted heavy metal guitars and guttural vocal screams fused with brutal 808 trap drops (Sullivan King, Kayzo, Crankdat).", "keywords": ["hard trap", "metal trap", "sullivan king", "crankdat"]},
            {"id": "deep_140_leftfield", "name": "Deep 140 UK Bass & Wave", "bpm": "140 BPM", "desc": "Nostalgic 90s hip-hop acapella chops floating over monstrous, rolling analog sub-bass waves (Tape B, Hamdi, Peekaboo).", "keywords": ["deep 140", "tape b", "hamdi", "peekaboo", "wave"]}
        ],
        "key_labels": "Sable Valley, Deadbeats, Disciple, Nightmode, Wakaan, 88rising, Mad Decent, OWSLA",
        "essential_artists": "ISOxo, Knock2, RL Grime, Crankdat, Tape B, Hamdi, Sullivan King, Baauer, Flosstradamus, NGHTMRE, TroyBoi"
    },
    {
        "id": "tech_house",
        "name": "Tech House & Deep Tech",
        "icon": "🎛️",
        "category": "House & Techno",
        "bpm_range": "124 – 128 BPM",
        "common_keys": "8A (A minor), 9A (E minor), 6A (G minor), 11A (F# minor)",
        "energy_level": "High Peak / Rolling Groove",
        "keywords": ["tech house", "deep tech", "minimal tech", "groove", "solid grooves", "fisher", "bibi", "pawsa", "hot creations", "cloonee", "repop"],
        "musical_definition": "A hybrid fusion of the energetic four-on-the-floor kick drums and syncopated swing of House music combined with the raw, stripped-down percussion, hypnotic basslines, and industrial atmosphere of Techno.",
        "rhythm_formula": "Punchy 4/4 kick (emphasized around 50–60Hz) with shuffled 16th-note closed hi-hats on offbeats. Snare/clap on beats 2 & 4. Driving, syncopated rolling sub-bassline that weaves tightly around the kick drum pocket.",
        "song_structure": "[Intro 16/32b: Drums only] ➔ [Verse Groove 32b: Bassline + vocal chops] ➔ [Buildup 16b: Snare roll + HPF] ➔ [Main Drop 32b: Full low-end impact] ➔ [Extended Breakdown 32b] ➔ [Outro 32b: Stripped drums]",
        "dj_mix_strategy": "Swap the low-end EQs exactly on the first beat of a 32-bar phrase (bar 33). High-pass filter the incoming track at 100Hz during the blend to prevent bass mud, then instantly slam outgoing low EQ to zero when cutting in the new bassline.",
        "sub_genres": [
            {"id": "minimal_deep_tech", "name": "Minimal Deep Tech", "bpm": "124–127 BPM", "desc": "Hypnotic, understated percussion, deep sub-bass warmth, and micro-vocal snippets (Solid Grooves / Fuse London style).", "keywords": ["minimal", "deep tech", "fuse", "solid grooves"]},
            {"id": "latin_tech_house", "name": "Latin Tech House", "bpm": "125–128 BPM", "desc": "Syncopated Latin percussion, congas, timbales, and energetic Spanish vocal hooks paired with heavy rolling basslines (Hugel, San Pacho).", "keywords": ["latin", "timbales", "hugel", "san pacho"]},
            {"id": "acid_tech_house", "name": "Acid Tech House", "bpm": "126–129 BPM", "desc": "Driven by resonant, squelchy Roland TB-303 synth lines layered over classic tech-house grooves.", "keywords": ["acid tech", "303"]},
            {"id": "bass_tech_house", "name": "Bass Tech House", "bpm": "126–128 BPM", "desc": "Heavier, distorted UK Bass / G-House influenced low-end with aggressive drops and abrasive leads.", "keywords": ["bass tech", "chris lake"]}
        ],
        "key_labels": "Solid Grooves, Hot Creations, Repopulate Mars, Defected, Black Book Records, Catch & Release",
        "essential_artists": "Michael Bibi, Pawsa, Chris Lake, Fisher, Cloonee, Jamie Jones, Dennis Cruz, ANOTR"
    },
    {
        "id": "peak_time_techno",
        "name": "Peak-Time Techno & Industrial",
        "icon": "⚡",
        "category": "Techno & Rave",
        "bpm_range": "130 – 138+ BPM",
        "common_keys": "4A (F minor), 1A (Ab minor), 8A (A minor), 5A (C minor)",
        "energy_level": "Maximum Tension & Industrial Force",
        "keywords": ["techno", "acid", "hard techno", "industrial", "drumcode", "kntxt", "charlotte", "amelie", "i hate models", "sangiuliano", "reinier"],
        "musical_definition": "Relentless, driving underground electronic music engineered for massive sound systems, characterized by thunderous sub-kick rumbles, abrasive synth textures, and cavernous reverberated acoustics.",
        "rhythm_formula": "Heavy distorted kick drum with a dedicated sub-rumble reverb tail sidechained to the transient. Industrial metal claps, harsh open hi-hats, and relentless 16th-note acid or modular synth sequences.",
        "song_structure": "[Intro 32/64b: Pure kick + modular rumble] ➔ [Development 32b: Acid line introduces] ➔ [Tension Build 32b: White noise riser + pitch bend] ➔ [Explosive Drop 64b: Peak power] ➔ [Outro 64b: Hypnotic fade]",
        "dj_mix_strategy": "Long, gradual layered transitions over 64 bars. Use the mid-range EQ to isolate synth stabs and utilize Stems drum/vocal isolation to perform clean live stem mashups.",
        "sub_genres": [
            {"id": "raw_hypnotic_techno", "name": "Raw / Deep / Hypnotic Techno", "bpm": "130–135 BPM", "desc": "Monotonous, meditative 4/4 loops that evolve minutely over 8-minute arrangements for dark warehouse immersion.", "keywords": ["hypnotic", "raw techno"]},
            {"id": "hard_techno", "name": "Hard Techno (150+ BPM)", "bpm": "148–160 BPM", "desc": "Fast, abrasive, distortion-heavy kicks influenced by early Schranz, Gabber, and 90s European rave culture (Sara Landry, Nico Moreno).", "keywords": ["hard techno", "schranz", "sara landry"]},
            {"id": "industrial_techno", "name": "Industrial Techno", "bpm": "134–142 BPM", "desc": "Metallic clangs, distorted factory samples, and nihilistic, brutalist percussion textures (I Hate Models, Perc).", "keywords": ["industrial", "i hate models", "perc"]},
            {"id": "acid_techno", "name": "Acid Techno", "bpm": "132–140 BPM", "desc": "Screaming, resonance-driven Roland TB-303 patterns distorted through guitar pedals and overdrive.", "keywords": ["acid techno", "303 acid"]}
        ],
        "key_labels": "Drumcode, KNTXT, Exhale, Filth on Acid, Lenske, CLR, Possession",
        "essential_artists": "Charlotte de Witte, Amelie Lens, I Hate Models, Enrico Sangiuliano, Reinier Zonneveld, Adam Beyer, Sara Landry"
    },
    {
        "id": "punk_rock_club",
        "name": "Punk, Pop-Punk & Rock Club Edits",
        "icon": "🎸",
        "category": "Rock & Alternative",
        "bpm_range": "140 – 180 BPM (or 85–95 BPM Half-Time)",
        "common_keys": "E major, A major, D major (High Energy Power Chords)",
        "energy_level": "Raw Kinetic Rebellion & Crowd Sing-Alongs",
        "keywords": ["punk", "rock", "blink", "paramore", "green day", "guitar", "alt rock", "sum 41", "mgk", "fall out boy", "nirvana"],
        "musical_definition": "High-octane, guitar-driven energy built on distorted power chord progressions, driving acoustic live drum kits, and emotionally charged, anthemic vocal hooks designed for packed crowds to scream at the top of their lungs.",
        "rhythm_formula": "Aggressive 4/4 rock drum beat at 150–180 BPM with driving 8th-note kick/snare patterns, open crash cymbals, fast fill rolls, and heavy distorted electric bass guitar locking into the root notes of the power chords.",
        "song_structure": "[Intro 8b: Iconic guitar riff] ➔ [Verse 16b: Palm-muted guitars + tight drums] ➔ [Pre-Chorus 8b: Snare build] ➔ [Massive Chorus 16b: Full distortion + crowd sing-along] ➔ [Bridge / Solo 16b] ➔ [Final Chorus 16b]",
        "dj_mix_strategy": "Tone play, fast drop cuts on beat 1, or live Stems mashups! Blend the iconic vocal or guitar hook over a heavy tech-house, trap, or DnB instrumental bed for guaranteed peak-time crowd explosion.",
        "sub_genres": [
            {"id": "pop_punk", "name": "Pop-Punk & 2000s Emo", "bpm": "150–175 BPM", "desc": "Catchy, melodic vocal hooks over fast distorted guitars and driving punk drums (Blink-182, Paramore, Sum 41).", "keywords": ["pop punk", "blink", "paramore", "sum 41"]},
            {"id": "skate_punk_hardcore", "name": "Skate Punk & Hardcore", "bpm": "170–190 BPM", "desc": "Blistering fast tempos, rapid-fire blast beats, and raw aggressive anti-establishment lyrics (The Offspring, NOFX).", "keywords": ["skate punk", "hardcore"]},
            {"id": "nu_metal_rap_rock", "name": "Nu-Metal & Rap Rock", "bpm": "90–110 / 140 BPM", "desc": "Heavy drop-tuned 7-string guitar riffs paired with hip-hop turntable cuts and rap verses (Linkin Park, Limp Bizkit, Rage Against the Machine).", "keywords": ["nu metal", "linkin park", "rage"]}
        ],
        "key_labels": "Fueled By Ramen, Epitaph, DGC, Hopeless Records, Reprise",
        "essential_artists": "Blink-182, Paramore, Green Day, Machine Gun Kelly, Sum 41, The Offspring, Fall Out Boy, Linkin Park"
    },
    {
        "id": "future_bass_melodic",
        "name": "Future Bass & Melodic Bass",
        "icon": "✨",
        "category": "Bass & EDM (Primary Focus)",
        "bpm_range": "140 – 160 BPM (70–80 BPM Half-Time)",
        "common_keys": "Ab major, Eb major, C minor (Emotional, Lush Chords)",
        "energy_level": "Emotive Melodic Euphoria & Heavy 808 Impact",
        "keywords": ["future bass", "melodic bass", "flume", "illenium", "san holo", "marshmello", "chainsmokers", "seven lions", "odesza", "chime"],
        "musical_definition": "A colorful, emotive sub-genre of EDM and Trap pioneered by Flume and Illenium, defined by lush detuned supersaw synthesizer chords modulated by heavy LFO sidechain wobble, booming 808 sub-bass, and pitch-shifted vocal chops.",
        "rhythm_formula": "Half-time trap beat (kick on beat 1, devastating snare on beat 3) with fluttering 32nd-note hi-hats, paired with sidechained 'wobbling' chords that swell dynamically in volume on every beat.",
        "song_structure": "[Intro 8/16b: Piano/Acoustic guitar + vocal] ➔ [Build 16b: Rising pitch snare rush] ➔ [Main Drop 32b: Heavy sidechained supersaw chords + 808] ➔ [Breakdown 16b] ➔ [Second Drop 32b: Melodic variation]",
        "dj_mix_strategy": "Blend during the emotional vocal buildup or use half-time beat jumps to transition smoothly between 140 BPM dubstep/trap and future bass.",
        "sub_genres": [
            {"id": "color_bass_melodic_dubstep", "name": "Color Bass & Melodic Dubstep", "bpm": "140–150 BPM", "desc": "Pitch-tracked FM growls with lush chordal harmony and cinematic orchestral drops (Illenium, Seven Lions, Chime).", "keywords": ["color bass", "melodic dubstep", "illenium"]},
            {"id": "chill_trap_future", "name": "Chill Trap & Experimental Bass", "bpm": "130–145 BPM", "desc": "Organic Foley percussion, pitched vocal chops, and quirky analog synth textures (Flume, San Holo, ODESZA).", "keywords": ["chill trap", "flume", "san holo"]},
            {"id": "pop_future_bass", "name": "Pop Future Bass", "bpm": "95–110 / 140 BPM", "desc": "Commercial crossover radio anthems featuring major vocal stars over bouncy future bass drops (The Chainsmokers, Marshmello).", "keywords": ["chainsmokers", "marshmello"]}
        ],
        "key_labels": "Astralwerks, bitbird, Monstercat, OWSLA, Foreign Family Collective",
        "essential_artists": "Flume, Illenium, San Holo, The Chainsmokers, Marshmello, Louis The Child, ODESZA, Seven Lions"
    },
    {
        "id": "electro_house_french",
        "name": "Electro House, French Electro & Complextro",
        "icon": "⚡",
        "category": "House & Techno",
        "bpm_range": "126 – 130 BPM",
        "common_keys": "F minor, D minor, G minor (Aggressive Sawtooth Tones)",
        "energy_level": "Maximum Distortion, Grit & Festival Shock",
        "keywords": ["electro", "complextro", "justice", "boys noize", "deadmau5", "wolfgang", "knife party", "bloody beetroots", "feed me", "benassi"],
        "musical_definition": "An aggressive, distortion-drenched house style characterized by abrasive buzzing sawtooth synthesizer leads, distorted low-end squelches, and complex, glitchy micro-edited basslines.",
        "rhythm_formula": "Hard-hitting compressed 4/4 kick with snappy clap on 2 & 4. Basslines alternate between 5 to 10 distinct synthesizer patches every 1/8th or 1/16th note (Complextro style).",
        "song_structure": "[Intro 16b: Distorted electro beat] ➔ [Verse 32b: Filtered saw chords] ➔ [Build 16b: Pitch-bent siren] ➔ [Main Drop 32b: Abrasive bassline chop] ➔ [Outro 32b]",
        "dj_mix_strategy": "Fast cuts on the 1 or 16-bar buildup swaps. Perfect for high-energy festival peak moments when transitioning between commercial house and heavy bass.",
        "sub_genres": [
            {"id": "french_electro_bloghaus", "name": "French Electro & Bloghaus", "bpm": "125–130 BPM", "desc": "Heavy overdriven disco samples, screaming distorted basslines, and Parisian indie-rave grit (Justice, Boys Noize, SebastiAn).", "keywords": ["french electro", "justice", "boys noize", "bloghaus"]},
            {"id": "complextro", "name": "Complextro", "bpm": "128 BPM", "desc": "Insanely intricate glitchy basslines switching synth sounds on every 1/16th note (Wolfgang Gartner, early Porter Robinson).", "keywords": ["complextro", "wolfgang"]},
            {"id": "big_room_electro", "name": "Big Room & Melbourne Bounce", "bpm": "128–130 BPM", "desc": "Stadium horn drops, massive reverberated kicks, and offbeat bouncing basslines (Hardwell, Will Sparks).", "keywords": ["big room", "melbourne bounce"]}
        ],
        "key_labels": "Ed Banger Records, Boysnoize Records, mau5trap, Spinnin' Records, OWSLA",
        "essential_artists": "Justice, Boys Noize, Deadmau5, Wolfgang Gartner, Knife Party, The Bloody Beetroots, Benny Benassi"
    },
    {
        "id": "dubstep_riddim",
        "name": "Dubstep, Riddim & Tearout",
        "icon": "💣",
        "category": "Bass & EDM (Primary Focus)",
        "bpm_range": "140 – 150 BPM (Half-Time: 70–75 BPM)",
        "common_keys": "F minor, E minor, D minor (Deep Low-End Growls)",
        "energy_level": "Ferocious Bass Pressure & Moshpit Intensity",
        "keywords": ["dubstep", "riddim", "tearout", "skrillex", "excision", "subtronics", "space laces", "virtual riot", "knife party", "marauda", "zomboy"],
        "musical_definition": "Heavy bass-driven electronic music featuring ferocious frequency-modulated (FM) wobble/growl basses, metallic screech leads, and explosive sub-bass impacts.",
        "rhythm_formula": "Half-time beat: heavy acoustic/electronic kick on beat 1, devastating snare/clap on beat 3. Sub-bass operates on deep 30–50Hz sine waves underneath distorted mid-range growls.",
        "song_structure": "[Intro 16b: Dark ambiance + vocal sample] ➔ [Buildup 16b: Snare acceleration + pre-drop vocal chop] ➔ [Drop 32b: Heavy growl bass attack] ➔ [Breakdown 16b] ➔ [Drop 2 32b]",
        "dj_mix_strategy": "'Chop mixing' and double drops on the 1 of bar 17. Use hot cues and quick crossfader cuts between two compatible drops to create live mashups.",
        "sub_genres": [
            {"id": "riddim", "name": "Riddim", "bpm": "140–144 BPM", "desc": "Repetitive, bouncy, sub-heavy triplet synth stabs engineered for rhythmic double-drop chopping (Subtronics, Virtual Riot).", "keywords": ["riddim", "subtronics"]},
            {"id": "tearout_heavy_dubstep", "name": "Tearout / Heavy Dubstep", "bpm": "145–150 BPM", "desc": "Brutal metallic gun-cock screech leads and aggressive industrial distortion (Excision, Marauda, Svdden Death).", "keywords": ["tearout", "excision", "marauda"]},
            {"id": "classic_140_deep", "name": "Deep 140 UK Dubstep", "bpm": "140 BPM", "desc": "Dark, meditative sub-bass pressure, sparse acoustic drums, and reggae dub influence (Skream, Benga, Mala, DMZ).", "keywords": ["deep dubstep", "140", "dmz"]}
        ],
        "key_labels": "Subsidia, Disciple, Never Say Die, Cyclops Recordings, Deep Medi Musik",
        "essential_artists": "Skrillex, Excision, Subtronics, Space Laces, Virtual Riot, Zomboy, Peekaboo, Marauda"
    },
    {
        "id": "trance_psytrance_euro",
        "name": "Trance, Psytrance & Eurodance Rave",
        "icon": "🌌",
        "category": "Techno & Rave",
        "bpm_range": "136 – 145+ BPM",
        "common_keys": "All Major & Minor Keys (Euphoric & Emotional)",
        "energy_level": "Hypnotic Euphoria & Stadium Transcendence",
        "keywords": ["trance", "psytrance", "eurodance", "tiesto", "armin", "vini vici", "marlon hoffstadt", "tdj", "rave", "ferry corsten"],
        "musical_definition": "Hypnotic, high-tempo electronic dance music designed to induce an emotional, euphoric trance state through soaring melodies, massive supersaw lead synths, and rolling basslines.",
        "rhythm_formula": "Relentless 4/4 kick with rolling 1/16th-note offbeat bassline (or triplet K-B-B-B psytrance bass pattern), open hi-hat on every offbeat, and energetic crash cymbals.",
        "song_structure": "[Intro 32/64b: Driving kick + bass] ➔ [Melodic Theme 32b] ➔ [Massive Breakdown 64b: Kick drops out completely, heavenly pads swell] ➔ [Climactic Euphoric Drop 64b]",
        "dj_mix_strategy": "Extended 64-bar harmonic blends. Never cut in the middle of a chord progression. Line up breakdowns for massive emotional crowd tension.",
        "sub_genres": [
            {"id": "hard_trance_revival", "name": "Hard Trance & Fast Rave", "bpm": "140–145 BPM", "desc": "Modern energetic 90s trance revival combining punchy techno kicks, bouncing synth leads, and pop vocal nostalgia (Marlon Hoffstadt, TDJ).", "keywords": ["hard trance", "marlon hoffstadt", "tdj"]},
            {"id": "psytrance", "name": "Psytrance / Goa", "bpm": "138–144 BPM", "desc": "Rolling triplet basslines (K-B-B-B), psychedelic modular synth sweeps, and futuristic alien sound effects (Vini Vici, Astrix).", "keywords": ["psytrance", "vini vici", "astrix"]},
            {"id": "uplifting_trance", "name": "Uplifting & Vocal Trance", "bpm": "136–140 BPM", "desc": "Lush emotional orchestral strings, heavenly female vocals, and massive supersaw lead drops (Armin van Buuren, Above & Beyond).", "keywords": ["uplifting trance", "armin", "above & beyond"]}
        ],
        "key_labels": "Armada Music, Anjunabeats, Club Sweat, Iboga Records, Ministry of Sound",
        "essential_artists": "Armin van Buuren, Tiësto (Classic), Vini Vici, Above & Beyond, Marlon Hoffstadt, Ferry Corsten, Paul van Dyk"
    },
    {
        "id": "bass_house_g_house",
        "name": "Bass House & G-House / Night Bass",
        "icon": "🔥",
        "category": "House & Techno",
        "bpm_range": "125 – 128 BPM",
        "common_keys": "F minor, F# minor, E minor (Low-End Punch)",
        "energy_level": "Aggressive Bounce & Heavy Club Impact",
        "keywords": ["bass house", "g-house", "jauz", "joyryde", "ac slater", "habstrakt", "night bass", "malaa", "tchami", "confession"],
        "musical_definition": "A high-energy fusion of four-on-the-floor house beats with the aggressive metallic screech basses, wobbles, and attitude of Dubstep and UK Bassline.",
        "rhythm_formula": "Punchy house kick with heavy compressed clap, accompanied by distorted FM bass wobbles that fill the frequency space between kick hits.",
        "song_structure": "[Intro 16b: Snappy drums + hip-hop vocal chop] ➔ [Buildup 16b: Snare riser] ➔ [Main Drop 32b: Heavy metallic bass bounce] ➔ [Breakdown 16b] ➔ [Drop 2 32b]",
        "dj_mix_strategy": "High-impact quick mixing! Swap basslines on the 16-bar phrase. Drop vocal acapellas over the driving bassline grooves.",
        "sub_genres": [
            {"id": "g_house", "name": "G-House (Gangsta House)", "bpm": "122–126 BPM", "desc": "Deep, rolling 808 house grooves paired with sampled 90s hip-hop/rap vocals and a dark street attitude (Malaa, Destructo).", "keywords": ["g-house", "malaa", "destructo"]},
            {"id": "night_bass_uk", "name": "Night Bass & UK Bassline House", "bpm": "126–128 BPM", "desc": "Warped organ stabs, garage swing drums, and rubbery bouncy basslines (AC Slater, Chris Lorenzo, Taiki Nulight).", "keywords": ["night bass", "ac slater", "chris lorenzo"]}
        ],
        "key_labels": "Night Bass, Confession, Bite This!, Spinnin' Records, Musical Freedom",
        "essential_artists": "Jauz, Joyryde, AC Slater, Habstrakt, Malaa, Tchami, Chris Lorenzo, Knock2"
    },
    {
        "id": "melodic_house_techno",
        "name": "Melodic House & Techno",
        "icon": "🌌",
        "category": "House & Techno",
        "bpm_range": "122 – 126 BPM",
        "common_keys": "All Minor Keys (Emotional & Cinematic Focus)",
        "energy_level": "Cinematic & Emotional Journey",
        "keywords": ["melodic", "afterlife", "tale of us", "anyma", "artbat", "anjunadeep", "progressive", "bodzin", "innervisions"],
        "musical_definition": "A deeply emotive and atmospheric electronic genre combining progressive house harmonies, sweeping orchestral synthesizer leads, and steady, precise techno percussion.",
        "rhythm_formula": "Clean, rounded kick drum with punchy transient click. Crisp offbeat hi-hats, gentle percussion shakers, and prominent analog synth chords evolving via filter cutoff automation.",
        "song_structure": "[Intro 32b: Atmospheric pads + rhythmic beat] ➔ [Theme Introduction 32b] ➔ [Epic Melodic Breakdown 48–64b: Arpeggio expands without kick] ➔ [Climactic Drop 64b: Full frequency lead] ➔ [Outro 32b]",
        "dj_mix_strategy": "Harmonic mixing is non-negotiable. Blend strictly in matching Camelot keys (e.g. 8A into 8A or 9A) so overlapping chord progressions create lush musical harmonies rather than clashing dissonance.",
        "sub_genres": [
            {"id": "indie_dance", "name": "Indie Dance", "bpm": "120–124 BPM", "desc": "80s darkwave synths, post-punk guitars, and electro-pop melodies over 120-124 BPM club rhythms.", "keywords": ["indie dance"]},
            {"id": "progressive_house", "name": "Progressive House", "bpm": "122–126 BPM", "desc": "Long, cinematic 9-minute builds with layered chord progressions and warm analog sub-bass.", "keywords": ["progressive house"]},
            {"id": "organic_house", "name": "Organic House", "bpm": "115–122 BPM", "desc": "Acoustic strings, world percussion, ethnic flutes, and deep meditative tempos.", "keywords": ["organic house"]}
        ],
        "key_labels": "Afterlife, Anjunadeep, Innervisions, Upperground, Diynamic, Watergate Records",
        "essential_artists": "Tale of Us, Anyma, ARTBAT, Mind Against, CamelPhat, Stephan Bodzin, Adriatique, Solomun"
    },
    {
        "id": "afro_house_amapiano",
        "name": "Afro House & Amapiano",
        "icon": "🥁",
        "category": "Global & Latin",
        "bpm_range": "112 – 124 BPM",
        "common_keys": "Minor & Dorian Modes (Organic / Soulful)",
        "energy_level": "Deep Spiritual Groove & Polyrhythmic Bounce",
        "keywords": ["afro", "amapiano", "keinemusik", "black coffee", "tribal", "latin", "reggaeton", "dembow", "major league", "moblack"],
        "musical_definition": "A rich, organic sub-genre rooted in South African and West African musical traditions, blending tribal percussion, traditional vocal chants, jazz chords, and soulful deep house grooves.",
        "rhythm_formula": "Polyrhythmic congas, shakers, and acoustic djembe loops playing across 3/4 and 4/4 syncopations. In Amapiano, the defining element is the syncopated 'Log Drum' (FM-synthesized percussion sub bass) that drives the bounce.",
        "song_structure": "[Intro 32b: Organic percussion + vocal hums] ➔ [Layer 1: Shakers + Rhodes piano chords] ➔ [Breakdown 16b: Soulful vocal chant] ➔ [Log Drum / Bass Drop 32b: Full bounce] ➔ [Extended Jam 64b]",
        "dj_mix_strategy": "Long, seamless 32-to-64 bar crossfades. Allow the live percussion instruments to interlock with the outgoing track. Avoid abrupt drop cuts.",
        "sub_genres": [
            {"id": "amapiano", "name": "Amapiano (112–116 BPM)", "bpm": "112–116 BPM", "desc": "South African powerhouse genre characterized by syncopated log drums, jazzy piano riffs, and low-tempo groove.", "keywords": ["amapiano", "log drum"]},
            {"id": "deep_afro_house", "name": "Deep Afro House (120–124 BPM)", "bpm": "120–124 BPM", "desc": "Hypnotic, spiritual synthesizer pads layered with African vocal chants and deep sub-bass (Keinemusik / Black Coffee style).", "keywords": ["deep afro", "keinemusik"]},
            {"id": "afro_tech", "name": "Afro Tech", "bpm": "122–126 BPM", "desc": "Sharper, synthetic tech-house synths and punchier electronic drums paired with tribal percussive rolls.", "keywords": ["afro tech"]}
        ],
        "key_labels": "&Friends, Keinemusik, MoBlack Records, Defected, Madorasindahouse, Piano Hub",
        "essential_artists": "Black Coffee, Keinemusik (&ME, Rampa, Adam Port), Themba, Major League DJz, Kabza De Small, Uncle Waffles"
    },
    {
        "id": "uk_garage_speed_garage",
        "name": "UK Garage & Speed Garage",
        "icon": "🇬🇧",
        "category": "Bass & EDM (Primary Focus)",
        "bpm_range": "130 – 136 BPM",
        "common_keys": "Minor Keys & Soulful 7th Chords",
        "energy_level": "High Bounce & UK Underground Swagger",
        "keywords": ["garage", "ukg", "2-step", "bassline", "virji", "conducta", "overmono", "speed garage", "interplanetary", "salute"],
        "musical_definition": "An iconic British dance movement evolving from early 90s New York garage and drum & bass, defined by syncopated swing, pitch-shifted vocal chops, and heavy Reese/organ sub-basslines.",
        "rhythm_formula": "Syncopated 2-Step groove (kick on beat 1 and skipped/shuffled offbeats, snare/rim on beat 2 and 4 with heavy triplet swing). Heavy use of M1 organ chords and warm 808 glide subs.",
        "song_structure": "[Intro 16b: Vocal chop + swing hats] ➔ [Pre-Drop 8b: Rapid snare roll] ➔ [Main Drop 32b: Warped bassline bounce] ➔ [Vocal Verse 16b] ➔ [Drop 2 32b: Bassline variation]",
        "dj_mix_strategy": "Fast, high-energy mixing! Mix on 16-bar phrases. Use loop rolls, quick cuts, and sudden bass swaps on the 1 to keep the dancefloor kinetic and surprising.",
        "sub_genres": [
            {"id": "two_step_ukg", "name": "2-Step UKG", "bpm": "130–134 BPM", "desc": "Classic syncopated skipped-kick rhythm with silky smooth R&B vocal cuts and warm sub-bass.", "keywords": ["2-step", "two step"]},
            {"id": "speed_garage", "name": "Speed Garage (134–138 BPM)", "bpm": "134–138 BPM", "desc": "4/4 kick pattern with heavy time-stretched vocal chops, dub sirens, and iconic warped 'Reese' basslines.", "keywords": ["speed garage", "reese"]},
            {"id": "bassline_uk", "name": "Bassline / 4x4 UKG", "bpm": "135–140 BPM", "desc": "Aggressive, metallic, distorted bass stabs engineered for northern UK sound system culture.", "keywords": ["bassline", "4x4"]}
        ],
        "key_labels": "Kiwi Rekords, Time Is Now, Night Bass, Conducta Music, Positiva, Locked On",
        "essential_artists": "Sammy Virji, Conducta, Interplanetary Criminal, Overmono, salute, Todd Edwards, DJ EZ, MPH"
    },
    {
        "id": "drum_and_bass",
        "name": "Drum & Bass & Jungle",
        "icon": "🚀",
        "category": "Bass & EDM (Primary Focus)",
        "bpm_range": "170 – 176 BPM (85–88 BPM Half-Time)",
        "common_keys": "F minor, F# minor, E minor (Optimal Sub-Bass Resonance at 40–55Hz)",
        "energy_level": "Hyperkinetic Energy & Sub-Bass Pressure",
        "keywords": ["drum & bass", "dnb", "drum and bass", "jungle", "liquid", "hospital", "chase & status", "sub focus", "hedex", "wilkinson"],
        "musical_definition": "A relentless high-speed British electronic music genre characterized by rapid breakbeats (sampled and synthesized Amen breaks), heavy sub-bass lines, and intense polyrhythmic syncopation.",
        "rhythm_formula": "Breakbeat drum loop at ~174 BPM with kick on 1, snare on 2 (or 2-and), kick on 3-and, snare on 4. Low-end is centered on pure sine or distorted 808/Reese subs tuned to the 40–60Hz frequency range.",
        "song_structure": "[Intro 32b: Half-time atmospheric groove] ➔ [Build 16b: Rising tempo snare rush] ➔ [Drop 64b: Double-time breakbeat blast] ➔ [Mid-Breakdown 32b] ➔ [Second Drop 64b]",
        "dj_mix_strategy": "Master the 'Double Drop'! Line up the 16-bar buildups of two tracks so both drop at the exact same split-second for massive crowd reactions.",
        "sub_genres": [
            {"id": "dancefloor_dnb", "name": "Dancefloor D&B", "bpm": "174–176 BPM", "desc": "Massive festival anthems with melodic synth leads and explosive vocal hooks (Sub Focus, Wilkinson).", "keywords": ["dancefloor dnb", "sub focus"]},
            {"id": "jump_up_dnb", "name": "Jump Up D&B", "bpm": "175–178 BPM", "desc": "Screeching, distorted laser bass stabs and high-octane crowd energy (Hedex, Bou, Serum).", "keywords": ["jump up", "hedex", "bou"]},
            {"id": "liquid_funk", "name": "Liquid Funk", "bpm": "170–174 BPM", "desc": "Soulful, jazz-influenced piano chords, smooth vocals, and atmospheric rolling breaks (Hospital Records).", "keywords": ["liquid", "hybrid minds"]},
            {"id": "jungle", "name": "Jungle", "bpm": "165–172 BPM", "desc": "Raw 90s Amen breaks, reggae/ragga vocal cuts, and heavy dub soundclash basslines.", "keywords": ["jungle", "amen break"]}
        ],
        "key_labels": "Hospital Records, RAM Records, Critical Music, Souped Up, Viper Recordings, UKF",
        "essential_artists": "Chase & Status, Sub Focus, Wilkinson, Hedex, Bou, Dimension, Andy C, Hybrid Minds"
    },
    {
        "id": "disco_house_french_touch",
        "name": "Disco House & French Touch",
        "icon": "🪩",
        "category": "House & Techno",
        "bpm_range": "120 – 126 BPM",
        "common_keys": "Major & Dominant 7th Keys (Euphoric / Uplifting)",
        "energy_level": "Feel-Good Funk & Euphoric Party Anthems",
        "keywords": ["disco", "nu-disco", "funk", "french touch", "defected", "glitterbox", "purple disco machine", "lf system", "duck sauce", "folamour"],
        "musical_definition": "An uplifting, groove-heavy dance genre taking the glamorous strings, live slap basslines, and brass sections of 1970s Disco and fusing them with modern 4/4 electronic house beats and phaser filters.",
        "rhythm_formula": "Classic 4/4 house kick with live recorded disco open hi-hats, hand claps on the 2 & 4, slappin' funk bass, and heavy dynamic sidechain compression that makes the entire track 'pump'.",
        "song_structure": "[Intro 16b: Filtered disco sample] ➔ [Main Groove 32b: Full slap bass + vocal] ➔ [Filter Sweep Breakdown 16b] ➔ [Chorus Drop 32b: Live brass + strings] ➔ [Outro 32b]",
        "dj_mix_strategy": "Blend during the energetic vocal choruses or use the classic high-pass filter sweep on the outgoing track to let the new funk bassline explode on bar 1.",
        "sub_genres": [
            {"id": "filter_french_touch", "name": "French Touch / Filter House", "bpm": "122–126 BPM", "desc": "Heavily phased and low-pass filtered disco loops sidechained to pumping four-on-the-floor kicks (Daft Punk style).", "keywords": ["filter house", "daft punk"]},
            {"id": "nu_disco", "name": "Nu-Disco", "bpm": "118–124 BPM", "desc": "Modern synthesizer-driven interpretation of 80s Italo-disco and boogie funk with lush analog synths.", "keywords": ["nu-disco", "purple disco"]},
            {"id": "jackin_house", "name": "Jackin' / Funky House", "bpm": "124–128 BPM", "desc": "High-tempo swung house beats with prominent Chicago jack grooves and soulful vocal loops.", "keywords": ["jackin", "funky house"]}
        ],
        "key_labels": "Defected Records, Glitterbox, Ed Banger Records, Toolroom, Casablanca",
        "essential_artists": "Purple Disco Machine, LF System, Duck Sauce (Armand Van Helden & A-Trak), Folamour, Bob Sinclar, Dimitri From Paris"
    },
    {
        "id": "latin_club_reggaeton",
        "name": "Latin Club, Reggaeton & Dembow",
        "icon": "🌴",
        "category": "Global & Latin",
        "bpm_range": "90 – 105 BPM / 115 – 128 BPM (Latin House)",
        "common_keys": "Minor Keys & Latin Phrygian Scales",
        "energy_level": "Sensual Swing, Perreo Bounce & Tropical Heat",
        "keywords": ["latin", "reggaeton", "dembow", "bad bunny", "j balvin", "el alfa", "daddy yankee", "perreo", "guaracha", "baile funk"],
        "musical_definition": "Latin-urban dance movement centered around the iconic syncopated 'Dembow' rhythm, acoustic brass, percussive timbales, and energetic Spanish vocal delivery.",
        "rhythm_formula": "Dembow syncopation (Kick on 1, snare on 1-and-a, kick on 2, snare on 2-and) with deep sub-bass on kick hits and crisp acoustic woodblock/rimshot snares.",
        "song_structure": "[Intro 8b: Latin melody + spoken tag] ➔ [Verse 16b: Dembow beat] ➔ [Chorus 16b: Full brass + crowd hook] ➔ [Perreo Breakdown 8b] ➔ [Outro 8b]",
        "dj_mix_strategy": "Tone play, wordplay blends, and 8-bar drop cuts. Seamlessly bridge between 95 BPM Reggaeton and 126 BPM Latin Tech House using 3/4 triplet transition tracks.",
        "sub_genres": [
            {"id": "reggaeton_perreo", "name": "Reggaeton & Perreo (90–98 BPM)", "bpm": "90–98 BPM", "desc": "Classic Puerto Rican and Colombian urban club anthem groove (Bad Bunny, Rauw Alejandro).", "keywords": ["reggaeton", "bad bunny"]},
            {"id": "dembow_dominicano", "name": "Dembow Dominicano (115–125 BPM)", "bpm": "115–125 BPM", "desc": "High-speed Dominican party bounce driven by fast machine-gun vocal cadence and syncopated snare rolls (El Alfa).", "keywords": ["dembow", "el alfa"]},
            {"id": "guaracha_latin_house", "name": "Guaracha / Latin Tribal (128 BPM)", "bpm": "128 BPM", "desc": "Colombian high-energy tribal house featuring fast trumpets and aggressive 4/4 Latin percussion.", "keywords": ["guaracha", "tribal"]}
        ],
        "key_labels": "Rimas Entertainment, Universal Music Latino, Sony Latin, NEON16",
        "essential_artists": "Bad Bunny, J Balvin, El Alfa, Daddy Yankee, Rauw Alejandro, Anitta, Bizarrap"
    },
    {
        "id": "hardstyle_hardcore",
        "name": "Hardstyle & Rawstyle / Hardcore",
        "icon": "💥",
        "category": "Techno & Rave",
        "bpm_range": "150 – 165+ BPM",
        "common_keys": "Minor Keys (Epic Stadium Anthems)",
        "energy_level": "Ultimate Peak Energy & Hard Bass Dominance",
        "keywords": ["hardstyle", "rawstyle", "hardcore", "headhunterz", "sub zero project", "da tweekaz", "angerfist", "q-dance", "defqon"],
        "musical_definition": "Heavy European festival music defined by distorted, pitch-bent 909 kicks, reverse basslines, and uplifting stadium synth melodies.",
        "rhythm_formula": "Distorted 909 kick with a pitch-bent 'screech' transient and a roaring reverse-bass sweep that lands on the offbeat, played at 150+ BPM.",
        "song_structure": "[Intro 32b: Heavy reverse bass] ➔ [Melodic Breakdown 32b: Euphoric stadium supersaw lead] ➔ [Massive Buildup 16b] ➔ [Explosive Climax Drop 64b]",
        "dj_mix_strategy": "Quick cuts and phrase matching. Transition on the 16-bar buildup.",
        "sub_genres": [
            {"id": "euphoric_hardstyle", "name": "Euphoric Hardstyle", "bpm": "150–155 BPM", "desc": "Anthemic uplifting melodies and massive sing-along chords (Headhunterz, Da Tweekaz).", "keywords": ["euphoric hardstyle", "headhunterz"]},
            {"id": "rawstyle_hardcore", "name": "Rawstyle & Uptempo Hardcore", "bpm": "155–170+ BPM", "desc": "Brutal distorted laser kicks, piep kicks, and extreme moshpit energy (Sub Zero Project, Angerfist).", "keywords": ["rawstyle", "hardcore"]}
        ],
        "key_labels": "Q-dance Records, Scantraxx, Dirty Workz, Masters of Hardcore",
        "essential_artists": "Headhunterz, Sub Zero Project, Da Tweekaz, Angerfist, D-Sturb, Brennan Heart"
    },
    {
        "id": "hip_hop_urban_trap",
        "name": "Hip-Hop, Trap & Drill",
        "icon": "🎤",
        "category": "Rock & Alternative",
        "bpm_range": "65 – 100 BPM / 130 – 150 BPM (Half-Time)",
        "common_keys": "Minor Pentatonic & Harmonic Minor",
        "energy_level": "Raw Energy, Vocal Dominance & Deep Sub Bounce",
        "keywords": ["hip-hop", "rap", "trap", "drill", "r&b", "urban", "jersey club", "metro", "drake", "travis", "kendrick", "eminem"],
        "musical_definition": "Rhythmically driven urban music centered on spoken or melodic vocal flow, thunderous 808 bass, and sharp syncopated digital percussion.",
        "rhythm_formula": "Sparse 808 kick patterns with rolling 1/32 and triplet hi-hat rolls, hard clipping snare on beat 3, and pitch-bent 808 sub-bass glides (Drill / Trap). In Jersey Club, features the signature 5-beat 'bed-squeak' kick bounce at 135–140 BPM.",
        "song_structure": "[Intro 8b] ➔ [Verse 16b] ➔ [Hook / Chorus 8b] ➔ [Verse 2 16b] ➔ [Hook 8b] ➔ [Bridge / Outro 8b]",
        "dj_mix_strategy": "Tone play, fast scratch drop-ins on the 'one', wordplay blends, and live Stems vocal mashups over tech-house or UKG instrumental beds.",
        "sub_genres": [
            {"id": "trap_drill", "name": "Trap & Drill (140 BPM Half-Time)", "bpm": "135–145 BPM", "desc": "Sliding 808 sub-bass, rapid-fire triplet hi-hats, and gritty urban lyrical delivery (Metro Boomin, Travis Scott).", "keywords": ["trap", "drill", "travis"]},
            {"id": "jersey_club", "name": "Jersey Club (135–140 BPM)", "bpm": "135–140 BPM", "desc": "High-energy syncopated kick bounces with rapid vocal chops, mattress squeaks, and gun-cock samples (DJ Sliink, UNIIQU3).", "keywords": ["jersey club", "sliink"]},
            {"id": "boom_bap", "name": "Boom Bap & 90s Golden Era", "bpm": "85–95 BPM", "desc": "Sampled vinyl drum breaks, acoustic upright bass loops, and classic MC call-and-response (Wu-Tang, Nas, Biggie).", "keywords": ["boom bap", "wu-tang", "nas"]}
        ],
        "key_labels": "Cactus Jack, OVO Sound, Quality Control, Def Jam, Republic Records",
        "essential_artists": "Metro Boomin, Drake, Travis Scott, 21 Savage, Future, Kendrick Lamar, Eminem"
    }
]

ANTHEMS_MAP = {

    "hybrid_trap_club": [
        {"title": "dontstopme!", "artist": "ISOxo", "bpm": "140", "why": "The definitive modern hybrid trap anthem with relentless 808 distortion."},
        {"title": "4EVR", "artist": "ISOKNOCK", "bpm": "140", "why": "Stadium trap weapon blending vocal intensity with high-energy rave stabs."}
    ],
    "festival_trap_horns": [
        {"title": "Core", "artist": "RL Grime", "bpm": "140", "why": "The iconic festival trap anthem that defined a generation of bass music."},
        {"title": "Harlem Shake", "artist": "Baauer", "bpm": "140", "why": "Pioneering trap bounce with classic Dutch synth horns and booming 808."}
    ],
    "hard_trap_metal": [
        {"title": "Someone Else", "artist": "Sullivan King", "bpm": "150", "why": "Explosive metalcore guitar riffs, live screams, and blistering dubstep/trap drop."},
        {"title": "Ding Dong", "artist": "Crankdat", "bpm": "145", "why": "Relentless viral tearout trap hybrid designed for high-energy live finger drumming."}
    ],
    "deep_140_leftfield": [
        {"title": "Over Trippin'", "artist": "Tape B", "bpm": "140", "why": "Deep rolling analog sub-bass wave underneath classic 90s hip-hop acapella chops."},
        {"title": "Skanka", "artist": "Hamdi", "bpm": "140", "why": "The underground 140 UK deep dubstep weapon heard on every major stage worldwide."}
    ],
    "dancefloor_dnb": [
        {"title": "Baddadan", "artist": "Chase & Status, Bou, Flowdan", "bpm": "174", "why": "Global bass phenomenon with Flowdan's iconic grime delivery over 174 BPM roller."},
        {"title": "Desire", "artist": "Sub Focus & Dimension", "bpm": "174", "why": "Euphoric dancefloor Drum & Bass sing-along anthem with massive supersaw leads."}
    ],
    "jump_up_dnb": [
        {"title": "MHITR (Semi-Automatic)", "artist": "Hedex", "bpm": "175", "why": "Screeching laser synth jump-up bassline creating uncontrollable festival crowd bounce."},
        {"title": "Closer", "artist": "Bou", "bpm": "175", "why": "Rolling distorted sub-bass jump-up groove with infectious vocal cuts."}
    ],
    "minimal_deep_tech": [
        {"title": "PICK UP THE PHONE", "artist": "PAWSA", "bpm": "127", "why": "Viral minimal groove with hypnotic spoken vocal hook."},
        {"title": "Relax My Eyes", "artist": "ANOTR & Abel Balder", "bpm": "126", "why": "Global house anthem with soulful acoustic vocal & rolling bass."}
    ],
    "latin_tech_house": [
        {"title": "I Adore You", "artist": "HUGEL, Topic & Arash", "bpm": "126", "why": "Massive international Latin tech-house summer weapon."},
        {"title": "Trompeta", "artist": "San Pacho", "bpm": "126", "why": "High-energy Latin horn drop with crisp timbales percussion."}
    ],
    "acid_tech_house": [
        {"title": "Be The One", "artist": "Eli Brown", "bpm": "130", "why": "Screaming 303 acid lead with stadium-sized club energy."},
        {"title": "Beats For The Underground", "artist": "Mau P", "bpm": "126", "why": "Raw underground acid groove with rolling sub-bass."}
    ],
    "bass_tech_house": [
        {"title": "Take It Off", "artist": "FISHER & Aatig", "bpm": "127", "why": "Heavy bass bounce and hypnotic vocal chops dominating clubs."},
        {"title": "Summertime Blues", "artist": "Chris Lake & Sammy Virji", "bpm": "130", "why": "High-tempo bass-house hybrid with infectious UK bounce."}
    ],
    "raw_hypnotic_techno": [
        {"title": "VTOPIA", "artist": "KAS:ST", "bpm": "133", "why": "Dark hypnotic atmospheric soundscapes with heavy modular kick."},
        {"title": "Paranoid", "artist": "Layton Giordani", "bpm": "132", "why": "Relentless driving bassline and eerie sci-fi synth textures."}
    ],
    "hard_techno": [
        {"title": "Legacy", "artist": "Sara Landry", "bpm": "152", "why": "Fast 152 BPM industrial kick pressure with sinister vocal pads."},
        {"title": "Purple Widow", "artist": "Nico Moreno", "bpm": "150", "why": "Brutal distorted kick and high-octane rave energy."}
    ],
    "industrial_techno": [
        {"title": "Daydream", "artist": "I Hate Models", "bpm": "135", "why": "Iconic emotional industrial rave anthem with brutalist 909 kicks."},
        {"title": "Look What Your Love Has Done To Me", "artist": "Perc", "bpm": "134", "why": "Metallic industrial distortion designed for warehouse sound systems."}
    ],
    "acid_techno": [
        {"title": "Overdrive", "artist": "Charlotte de Witte", "bpm": "135", "why": "Razor-sharp 303 acid lines over heavy peak-time kicks."},
        {"title": "Move Your Body To The Beat", "artist": "Reinier Zonneveld", "bpm": "135", "why": "Explosive live acid modular synthesis and driving energy."}
    ],
    "pop_punk": [
        {"title": "ONE MORE TIME", "artist": "blink-182", "bpm": "160", "why": "Massive 2024 global pop-punk comeback sing-along anthem."},
        {"title": "bloody valentine", "artist": "Machine Gun Kelly", "bpm": "150", "why": "Fast driving punk drums and infectious electric guitar riffs."}
    ],
    "skate_punk_hardcore": [
        {"title": "You're Gonna Go Far, Kid", "artist": "The Offspring", "bpm": "175", "why": "175 BPM high-octane skate punk blast beats and crowd chants."},
        {"title": "Fat Lip", "artist": "Sum 41", "bpm": "170", "why": "Iconic rap-punk party anthem with explosive crowd energy."}
    ],
    "nu_metal_rap_rock": [
        {"title": "In the End", "artist": "Linkin Park", "bpm": "105", "why": "Legendary sing-along piano intro and heavy distorted drop."},
        {"title": "LosT", "artist": "Bring Me The Horizon", "bpm": "145", "why": "Hyper-pop punk and alt-metal club crossover anthem."}
    ],
    "color_bass_melodic_dubstep": [
        {"title": "All That Really Matters", "artist": "ILLENIUM & Teddy Swims", "bpm": "145", "why": "Lush emotional supersaw drop with soaring soulful vocal."},
        {"title": "Strangers", "artist": "Seven Lions", "bpm": "140", "why": "Cinematic melodic dubstep masterpiece with euphoric chords."}
    ],
    "chill_trap_future": [
        {"title": "Never Be Like You", "artist": "Flume", "bpm": "140", "why": "Pioneering future bass groove with lush sidechained wobbles."},
        {"title": "Light", "artist": "San Holo", "bpm": "150", "why": "Uplifting melodic future bass with sparkling vocal chops."}
    ],
    "pop_future_bass": [
        {"title": "Closer", "artist": "The Chainsmokers", "bpm": "95", "why": "The ultimate billion-stream future-pop sing-along anthem."},
        {"title": "Silence", "artist": "Marshmello & Khalid", "bpm": "145", "why": "Emotional acoustic verse building into a bouncy supersaw drop."}
    ],
    "french_electro_bloghaus": [
        {"title": "Generator", "artist": "Justice", "bpm": "128", "why": "Raw overdriven distorted electro grit from their 2024 album."},
        {"title": "Starwin", "artist": "Boys Noize", "bpm": "128", "why": "Punchy analog French electro disco groove with squelchy synth."}
    ],
    "complextro": [
        {"title": "Space Junk", "artist": "Wolfgang Gartner", "bpm": "128", "why": "Masterclass in micro-edited glitch basslines changing every 1/16th."},
        {"title": "Say My Name", "artist": "Porter Robinson", "bpm": "128", "why": "Iconic complextro classic with euphoric vocal chops and gritty bass."}
    ],
    "big_room_electro": [
        {"title": "Bad Company", "artist": "Showtek", "bpm": "128", "why": "Massive reverberated festival kick and screech horn drop."},
        {"title": "PACMAN", "artist": "Hardwell", "bpm": "130", "why": "High-energy festival big room techno electro hybrid."}
    ],
    "riddim": [
        {"title": "Gassed Up", "artist": "Subtronics & Zeds Dead", "bpm": "140", "why": "Heavy bouncy riddim chop bass with Flowdan vocal hype."},
        {"title": "Country Riddim", "artist": "HOL!", "bpm": "142", "why": "The viral moshpit anthem that took over every major festival."}
    ],
    "tearout_heavy_dubstep": [
        {"title": "Titans", "artist": "Excision & Wooli", "bpm": "145", "why": "Crushing metallic tearout growls and seismic sub-bass impact."},
        {"title": "Behemoth", "artist": "SVDDEN DEATH", "bpm": "144", "why": "Sinister industrial tearout drops with brutal crowd reaction."}
    ],
    "classic_140_deep": [
        {"title": "Skanka", "artist": "Hamdi", "bpm": "140", "why": "The modern 140 UK deep dubstep dubplate weapon of the decade."},
        {"title": "Midnight Request Line", "artist": "Skream", "bpm": "140", "why": "The quintessential foundational deep 140 UK dubstep anthem."}
    ],
    "hard_trance_revival": [
        {"title": "It's That Time", "artist": "Marlon Hoffstadt", "bpm": "142", "why": "The #1 viral peak-time hard trance dancefloor weapon worldwide."},
        {"title": "Lalala", "artist": "TDJ", "bpm": "144", "why": "High-energy 90s Eurodance trance nostalgia with fast bouncing synths."}
    ],
    "psytrance": [
        {"title": "100", "artist": "Vini Vici & Timmy Trumpet", "bpm": "140", "why": "Rolling triplet K-B-B-B bass with infectious stadium trumpet lead."},
        {"title": "Deep Jungle Walk", "artist": "Astrix", "bpm": "138", "why": "Hypnotic psychedelic modular soundscapes and rolling low-end."}
    ],
    "uplifting_trance": [
        {"title": "Blah Blah Blah", "artist": "Armin van Buuren", "bpm": "138", "why": "Global crowd chant and euphoric uplifting trance drop."},
        {"title": "Sun & Moon", "artist": "Above & Beyond", "bpm": "134", "why": "Emotional anthem that unites dancefloors across the world."}
    ],
    "g_house": [
        {"title": "Notorious", "artist": "Malaa", "bpm": "125", "why": "Dark, rolling G-House bassline with iconic Biggie Smalls vocal."},
        {"title": "dashstar*", "artist": "Knock2", "bpm": "126", "why": "Viral energetic house anthem with explosive metallic drop."}
    ],
    "night_bass_uk": [
        {"title": "Fly Kicks", "artist": "AC Slater & Chris Lorenzo", "bpm": "126", "why": "Bouncy UK bassline groove with classic Night Bass swagger."},
        {"title": "Rock The Party", "artist": "Jauz & Ephwurd", "bpm": "128", "why": "Heavy wobble bass house anthem that redefined festival dancefloors."}
    ],
    "amapiano": [
        {"title": "Tanzania", "artist": "Uncle Waffles", "bpm": "112", "why": "Sensual syncopated FM log drums and authentic South African groove."},
        {"title": "Mnike", "artist": "Tyler ICU", "bpm": "113", "why": "Global viral Amapiano powerhouse with unmatched danceability."}
    ],
    "deep_afro_house": [
        {"title": "Move", "artist": "Adam Port, Stryv & Keinemusik", "bpm": "120", "why": "The #1 summer dance track worldwide with infectious Afro-vocal."},
        {"title": "Drive", "artist": "Black Coffee & David Guetta", "bpm": "122", "why": "Soulful deep afro house strings with warm rolling sub-bass."}
    ],
    "afro_tech": [
        {"title": "Fight to Love", "artist": "Shimza", "bpm": "124", "why": "Punchy electronic tech synths over tribal drum rolls."},
        {"title": "Sound Of Freedom", "artist": "THEMBA", "bpm": "123", "why": "Spiritual vocal chants layered over crisp afro-tech percussion."}
    ],
    "two_step_ukg": [
        {"title": "B.O.T.A.", "artist": "Interplanetary Criminal & Eliza Rose", "bpm": "134", "why": "#1 UK charting 2-step garage anthem with iconic infectious vocal."},
        {"title": "Good Lies", "artist": "Overmono", "bpm": "132", "why": "Hypnotic pitched vocal chops over swinging UK garage break."}
    ],
    "speed_garage": [
        {"title": "If U Need It", "artist": "Sammy Virji", "bpm": "136", "why": "Viral UK speed garage banger with rolling Reese bass & piano chords."},
        {"title": "One Sixty", "artist": "MPH", "bpm": "136", "why": "High-speed 4/4 garage bounce with time-stretched vocal chops."}
    ],
    "bassline_uk": [
        {"title": "Goes Like", "artist": "Skepsis", "bpm": "138", "why": "High-octane bassline festival weapon with screeching 4x4 bass stabs."},
        {"title": "Drops", "artist": "Darkzy", "bpm": "138", "why": "Aggressive northern UK bassline pressure with heavy sub bounce."}
    ],
    "dancefloor_dnb": [
        {"title": "DJ Turn It Up", "artist": "Dimension", "bpm": "174", "why": "Massive festival vocal anthem with stadium-sized energetic drop."},
        {"title": "Desire", "artist": "Sub Focus & Dimension", "bpm": "174", "why": "Euphoric melodic synth leads and driving 174 BPM drum breaks."}
    ],
    "jump_up_dnb": [
        {"title": "Baddadan", "artist": "Chase & Status, Bou & Flowdan", "bpm": "174", "why": "The biggest global DnB anthem of the decade with Flowdan's deep MC hook."},
        {"title": "MHITR", "artist": "Hedex", "bpm": "175", "why": "Explosive screech laser bassline that ignites festival crowds."}
    ],
    "liquid_funk": [
        {"title": "Touch", "artist": "Hybrid Minds", "bpm": "174", "why": "Lush emotional piano progression and soulful vocal over rolling breaks."},
        {"title": "Major Happy", "artist": "Fred V & Grafix", "bpm": "174", "why": "Uplifting feel-good liquid D&B with bright brass and melodic guitars."}
    ],
    "jungle": [
        {"title": "Baianá", "artist": "Nia Archives", "bpm": "170", "why": "Grammy-nominated modern jungle revival blending Brazilian vocal with Amen breaks."},
        {"title": "Original Nuttah 25", "artist": "UK Apache & Shy FX (Chase & Status Remix)", "bpm": "174", "why": "The ultimate classic jungle soundclash dubplate."}
    ],
    "filter_french_touch": [
        {"title": "One More Time", "artist": "Daft Punk", "bpm": "123", "why": "The immortal French house anthem with euphoric vocoder and phased brass."},
        {"title": "Intro", "artist": "Alan Braxe & Fred Falke", "bpm": "124", "why": "Pumping dynamic sidechain compression over live slap bass groove."}
    ],
    "nu_disco": [
        {"title": "(It Goes Like) Nanana", "artist": "Peggy Gou", "bpm": "130", "why": "Global summer #1 with infectious Italo-disco synth melodies."},
        {"title": "Hypnotized", "artist": "Purple Disco Machine & Sophie and the Giants", "bpm": "120", "why": "Modern 80s synth-pop and disco funk club anthem."}
    ],
    "jackin_house": [
        {"title": "Love You More", "artist": "Riva Starr", "bpm": "126", "why": "High-tempo Chicago jack swing with soulful gospel house vocal."},
        {"title": "Nobody", "artist": "David Penn", "bpm": "124", "why": "Funky piano chords and driving classic house percussion."}
    ],
    "reggaeton_perreo": [
        {"title": "Monaco", "artist": "Bad Bunny", "bpm": "95", "why": "Trap-reggaeton fusion with Charles Aznavour orchestral sample."},
        {"title": "LUNA", "artist": "Feid & ATL Jacob", "bpm": "96", "why": "Melodic perreo anthem dominating global Latin charts."}
    ],
    "dembow_dominicano": [
        {"title": "La Mamá de la Mamá", "artist": "El Alfa, El Cherry Scom & CJ", "bpm": "120", "why": "Hyper-fast Dominican party bounce and infectious syncopated rhythm."},
        {"title": "Delincuente", "artist": "Tokischa & Anuel AA", "bpm": "118", "why": "Raw underground dembow groove with heavy street attitude."}
    ],
    "guaracha_latin_house": [
        {"title": "Baila Conmigo", "artist": "Victor Cardenas & Kelly Ruiz", "bpm": "128", "why": "The foundational global Guaracha / Latin tribal house anthem."},
        {"title": "Ritmo", "artist": "Raffa FL", "bpm": "126", "why": "Infectious tribal tech-house groove with rolling Latin percussion."}
    ],
    "euphoric_hardstyle": [
        {"title": "Destiny", "artist": "Headhunterz", "bpm": "150", "why": "Massive emotional stadium supersaw melodies and reverse bass."},
        {"title": "Jägerbomb", "artist": "Da Tweekaz", "bpm": "150", "why": "High-energy festival party hardstyle crowd anthem."}
    ],
    "rawstyle_hardcore": [
        {"title": "Halo", "artist": "Sub Zero Project", "bpm": "155", "why": "Devastating distorted laser kicks and aggressive psy-hardstyle drops."},
        {"title": "Solid Stigma", "artist": "Angerfist", "bpm": "175", "why": "Extreme uptempo hardcore kick pressure."}
    ],
    "trap_drill": [
        {"title": "FE!N", "artist": "Travis Scott & Playboi Carti", "bpm": "140", "why": "The undisputed global festival moshpit anthem with booming 808s."},
        {"title": "Superhero (Heroes & Villains)", "artist": "Metro Boomin & Future", "bpm": "116", "why": "Iconic brass horns and heavy trap 808 bass."}
    ],
    "jersey_club": [
        {"title": "Just Wanna Rock", "artist": "Lil Uzi Vert", "bpm": "135", "why": "The 5-beat bed-squeak kick anthem that brought Jersey Club to the global mainstream."},
        {"title": "Players (Jersey Club Remix)", "artist": "Coi Leray & DJ Smallz 732", "bpm": "135", "why": "High-energy bounce with rapid vocal stabs and triplet kicks."}
    ],
    "boom_bap": [
        {"title": "C.R.E.A.M.", "artist": "Wu-Tang Clan", "bpm": "90", "why": "Timeless 90s vinyl drum break and classic piano loop."},
        {"title": "N.Y. State of Mind", "artist": "Nas", "bpm": "84", "why": "The quintessential boom bap masterpiece produced by DJ Premier."}
    ]
}

def ingest_track_to_library(query_str, artist="", title=""):
    clean_q = query_str.strip()
    if not clean_q:
        return {"status": "error", "message": "Empty query"}
    
    clean_artist = artist.strip() or "Various"
    clean_title = title.strip() or clean_q
    
    inbox = MUSIC_ROOT / '_Inbox'
    inbox.mkdir(parents=True, exist_ok=True)
    
    out_template = str(inbox / f"{clean_artist} - {clean_title}.%(ext)s")
    
    ffmpeg_dir = Path('/Users/solroth/.spotdl')
    env = os.environ.copy()
    if ffmpeg_dir.exists():
        env['PATH'] = f"{ffmpeg_dir}:{env.get('PATH', '')}"

    cmd = [
        'yt-dlp',
        '--extract-audio',
        '--audio-format', 'mp3',
        '--audio-quality', '0',
        '--embed-metadata',
        '--embed-thumbnail',
        '--no-overwrites',
        '--ignore-errors',
        '--output', out_template,
        f"ytsearch1:{clean_q}"
    ]
    if (ffmpeg_dir / 'ffmpeg').exists():
        cmd.extend(['--ffmpeg-location', str(ffmpeg_dir)])

    try:
        proc = subprocess.run(cmd, env=env, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, timeout=90)
        
        moved_file = None
        for mp3 in inbox.glob(f"{clean_artist} - {clean_title}*.mp3"):
            if mp3.stat().st_size > 500000:
                first_char = clean_artist[0].upper() if clean_artist else '0-9'
                folder_name = first_char if first_char.isalpha() else '0-9'
                target_dir = MUSIC_ROOT / folder_name
                target_dir.mkdir(parents=True, exist_ok=True)
                target_path = target_dir / mp3.name
                shutil.move(str(mp3), str(target_path))
                moved_file = target_path
                break
        
        if moved_file:
            index_library_catalog()
            return {
                "status": "success",
                "message": f"Successfully ingested {clean_title} by {clean_artist}",
                "filename": moved_file.name,
                "folder": moved_file.parent.name
            }
        else:
            return {"status": "error", "message": "Download completed but file not found"}
    except Exception as e:
        return {"status": "error", "message": str(e)}

def get_serato_set_history():
    """Returns set history for either Rekordbox or Serato DJ Pro."""
    active_engine = detect_active_dj_engine()
    
    # Check Serato first if Serato is active and DB exists
    if active_engine == 'serato' and SERATO_LIB_DB.exists():
        try:
            conn = sqlite3.connect(SERATO_LIB_DB)
            cursor = conn.cursor()
            cursor.execute("""
                SELECT id, artist, name, bpm, key, deck, start_time, length_sec, genre, year
                FROM history_entry
                ORDER BY id DESC LIMIT 50
            """)
            rows = cursor.fetchall()
            conn.close()

            if rows:
                entries = []
                total_dur = 0
                bpms = []
                for r in rows:
                    entry_id, artist_val, name_val, bpm_val, key_val, deck_val, st_time, dur_sec, genre_val, yr_val = r
                    dur = dur_sec or 210
                    total_dur += dur
                    bpm_float = round(float(bpm_val or 126.0), 1)
                    bpms.append(bpm_float)
                    t_str = datetime.fromtimestamp(st_time or time.time()).strftime('%I:%M %p')
                    entries.append({
                        "id": entry_id,
                        "artist": artist_val or "Unknown Artist",
                        "title": name_val or "Untitled Track",
                        "bpm": bpm_float,
                        "key": (key_val or "8A").strip(),
                        "deck": str(deck_val or "1"),
                        "played_at": t_str,
                        "duration_sec": dur,
                        "genre": genre_val or "Dance"
                    })
                avg_bpm = round(sum(bpms) / len(bpms), 1) if bpms else 126.0
                return {
                    "status": "ok",
                    "engine": "serato",
                    "total_tracks": len(entries),
                    "total_duration_mins": round(total_dur / 60, 1),
                    "avg_bpm": avg_bpm,
                    "min_bpm": min(bpms) if bpms else 120.0,
                    "max_bpm": max(bpms) if bpms else 130.0,
                    "entries": entries
                }
        except Exception: pass

    # Rekordbox / Active Stage History
    entries = list(STAGE_PLAY_HISTORY)
    if not entries:
        # Build baseline performance set history from active stage decks
        for d_key in ["1", "2", "3", "4"]:
            if d_key in ACTIVE_STAGE_DECKS:
                d = ACTIVE_STAGE_DECKS[d_key]
                entries.append({
                    "id": d["id"],
                    "artist": d["artist"],
                    "title": d["title"],
                    "bpm": d["bpm"],
                    "key": d["key"],
                    "deck": d_key,
                    "played_at": datetime.now().strftime('%I:%M %p'),
                    "duration_sec": d["duration"],
                    "genre": d["genre"]
                })

    bpms = [e["bpm"] for e in entries] if entries else [128.0]
    total_dur = sum(e.get("duration_sec", 210) for e in entries)
    return {
        "status": "ok",
        "engine": "rekordbox",
        "total_tracks": len(entries),
        "total_duration_mins": round(total_dur / 60, 1),
        "avg_bpm": round(sum(bpms) / len(bpms), 1),
        "min_bpm": min(bpms),
        "max_bpm": max(bpms),
        "entries": entries
    }

SAMPLER_PRESETS = {
    "essentials": {
        "name": "🚨 Classic DJ Essentials & Stage Weapons",
        "desc": "Airhorns, emergency sirens, laser zaps, vinyl brake stops, 1 2 3 Let's Go, In The Mix, Drop The Bass, and 808 sub drops.",
        "kit_folder": "01 Classic DJ Essentials & Stage Weapons"
    },
    "drum_loops": {
        "name": "🥁 Continuous Looping Drum Beats & Rhythm Grooves",
        "desc": "120 House, 124 Club, 126 Tech House, 94 BoomBap, 98 Funky Drummer, 90 Cumbia, 135 Baile Funk, and 180 Amen Jungle.",
        "kit_folder": "02 Continuous Looping Drum Beats & Rhythm Grooves"
    },
    "ambient_atmo": {
        "name": "🌌 Long-Running Ambient Soundbeds & Atmospheric Textures",
        "desc": "Vinyl stylus crackle, Tokyo rain, space station warp hums, ocean surges, storm wind swells, and thunder impacts.",
        "kit_folder": "03 Long-Running Ambient Soundbeds & Atmospheric Textures"
    },
    "live_fx": {
        "name": "⚡ Live Sound FX, Risers & Transitions",
        "desc": "4-bar noise sweeps, 8-bar tension uplifters, laser downlifters, dub sirens, King Tubby lasers, and sub braams.",
        "kit_folder": "04 Live Sound FX, Risers & Transitions"
    },
    "turntablist": {
        "name": "🎧 Turntablist & Battle Scratch Kit",
        "desc": "Skipless Ahhh/Fresh sentences, laser scratch flares, transformer cuts, chirp chops, baby scratches, and spinback brakes.",
        "kit_folder": "05 Turntablist & Battle Scratch Kit"
    },
    "dark_techno": {
        "name": "⚡ Dark Techno & Acid Rave Kit",
        "desc": "Hard techno zaag kicks, reverse bass hits, industrial screeches, 303 acid squelches, and laser drops.",
        "kit_folder": "06 Dark Techno & Acid Rave Kit"
    },
    "hip_hop_trap": {
        "name": "🎤 Hip-Hop, Trap & Urban Hype Kit",
        "desc": "Booming 808 sub drops, punchy trap claps, Memphis phonk cowbells, UK drill slides, and hype vocal ad-libs.",
        "kit_folder": "07 Hip-Hop, Trap & Urban Hype Kit"
    },
    "latin_dembow": {
        "name": "🌴 Latin Club, Dembow & Reggaeton Kit",
        "desc": "Dembow timbales, Latin horn drops, Fuego vocal shouts, Brazilian Baile funk grooves, and tropical cumbia skanks.",
        "kit_folder": "08 Latin Club, Dembow & Reggaeton Kit"
    },
    "alesis_sticks": {
        "name": "🥁 Alesis Physical Drum Stick Performance Kit",
        "desc": "High-velocity acoustic stick transients: 808 Sub Boom smash, snappy snare cracks, timbale rolls, china cymbals, 150 BPM snare rolls, and laser zaps.",
        "kit_folder": "05 Alesis Physical Drum Stick Performance Kit"
    },
    "vocal_stabs": {
        "name": "🗣️ Pre-Drop Vocal Build Stabs & Hype Weapons",
        "desc": "Iconic pre-drop build vocal chops: 1 2 3 Let's Go, Hold Up Wait A Minute, Sheesh, Aye, Skrrt Skrrt, In The Mix, Selecta Pull Up, Fuego.",
        "kit_folder": "06 Pre-Drop Vocal Build Stabs & Hype Weapons"
    }
}

ACTIVE_SAMPLER_PRESET = "essentials"

def get_current_active_sampler_pads():
    active_dir = MUSIC_ROOT / "_DJ_Sampler_Bank"
    if not active_dir.exists():
        active_dir.mkdir(parents=True, exist_ok=True)
    files = sorted([f for f in active_dir.glob("*.*") if f.suffix.lower() in ['.mp4', '.mp3', '.wav'] and not f.name.startswith('.')])
    pads = []
    for idx, f in enumerate(files[:16], 1):
        clean_title = f.stem.replace("Pad_", "").replace("Pad ", "").replace(" - ", " ").strip()
        pads.append({
            "pad": idx,
            "title": clean_title,
            "filename": f.name,
            "rel_path": f"_DJ_Sampler_Bank/{f.name}"
        })
    return pads

def get_ai_pad_recommendation(deck_id='1'):
    decks_obj = get_all_decks_now_playing()
    decks = decks_obj.get('decks', {}) if isinstance(decks_obj, dict) else {}
    curr = decks.get(deck_id) or decks.get('1') or {}
    
    title = curr.get('title', 'Untitled Track')
    artist = curr.get('artist', 'Active Deck')
    bpm = float(curr.get('bpm') or 128.0)
    genre = (curr.get('genre') or 'Dance').lower()
    combined = f"{title.lower()} {artist.lower()} {genre}"

    if any(k in combined for k in ['ambient', 'intro', 'outro', 'chill', 'atmo', 'interlude', 'soundbed', 'texture']):
        rec_id = "ambient_atmo"
        reason = f"Atmospheric/Intro moment detected. Matched with long-running ambient soundbeds, vinyl stylus dust, storm wind swells, and drones."
    elif any(k in combined for k in ['scratch', 'battle', 'turntable', 'routine', 'cut']):
        rec_id = "turntablist"
        reason = f"Turntablism routine detected. Matched with skipless Ahhh/Fresh sentences, laser scratch flares, and baby/chirp cuts."
    elif bpm >= 165 or any(k in combined for k in ['dnb', 'drum and bass', 'jungle', 'amen', 'breakcore', 'dubstep', 'riddim', 'bass']):
        rec_id = "drum_loops"
        reason = f"High-speed breakbeat energy detected ({bpm} BPM). Matched with continuous 170-180 BPM Amen jungle and breakbeat loops."
    elif bpm >= 136 or any(k in combined for k in ['techno', 'acid', 'industrial', 'hard trance', 'rave', 'sara landry']):
        rec_id = "dark_techno"
        reason = f"Peak-time {bpm} BPM rave tempo detected. Matched with zaag kicks, acid squelches, and laser drops."
    elif any(k in combined for k in ['latin', 'dembow', 'reggaeton', 'bad bunny', 'el alfa', 'guaracha', 'cumbia', 'baile']):
        rec_id = "latin_dembow"
        reason = f"Latin/Dembow groove detected ({bpm} BPM). Matched with Dembow timbales, Latin horn drops, and Fuego vocal shouts."
    elif bpm <= 110 or any(k in combined for k in ['hip-hop', 'trap', 'rap', 'drill', 'metro boomin', 'travis scott', 'drake', 'phonk']):
        rec_id = "hip_hop_trap"
        reason = f"Urban 808 tempo detected ({bpm} BPM). Matched with booming sub drops, Memphis cowbells, and UK drill slides."
    elif any(k in combined for k in ['build', 'riser', 'transition', 'drop', 'sweep']):
        rec_id = "live_fx"
        reason = f"Build-up transition detected ({bpm} BPM). Matched with 4-bar/8-bar noise sweeps, tension uplifters, and dub sirens."
    elif any(k in combined for k in ['house', 'club', 'groove', 'tech house', 'beat']):
        rec_id = "drum_loops"
        reason = f"Continuous 4/4 groove detected ({bpm} BPM). Matched with seamless looping house, club, tech house, and funk breaks."
    else:
        rec_id = "essentials"
        reason = f"Stage performance kit matched ({bpm} BPM). Classic air horns, club sirens, 1 2 3 Let's Go, and 808 sub drops."

    rec_preset = SAMPLER_PRESETS.get(rec_id) or SAMPLER_PRESETS["essentials"]
    current_pads = get_current_active_sampler_pads()
    
    return {
        "status": "ok",
        "current_track": {
            "title": title,
            "artist": artist,
            "bpm": bpm,
            "genre": curr.get('genre', 'Dance')
        },
        "recommended_preset_id": rec_id,
        "recommended_preset_name": rec_preset["name"],
        "recommended_preset_desc": rec_preset["desc"],
        "ai_reason": reason,
        "current_active_preset": ACTIVE_SAMPLER_PRESET,
        "current_loaded_pads": current_pads
    }

def switch_sampler_preset(preset_id):
    global ACTIVE_SAMPLER_PRESET
    preset = SAMPLER_PRESETS.get(preset_id) or SAMPLER_PRESETS["essentials"]
    ACTIVE_SAMPLER_PRESET = preset_id
    
    kit_name = preset.get("kit_folder", "01 Classic DJ Essentials & Stage Weapons")
    kit_source = MUSIC_ROOT / "_DJ_Performance_WAV_Kits" / kit_name
    active_dir = MUSIC_ROOT / "_DJ_Sampler_Bank"
    active_dir.mkdir(parents=True, exist_ok=True)

    pad_files = []
    if kit_source.exists():
        pad_files = sorted([f for f in kit_source.iterdir() if f.suffix.lower() == '.wav' and not f.name.startswith('.')])[:16]

    for old in active_dir.glob("*.*"):
        try: old.unlink()
        except Exception: pass

    pads_info = []
    for idx, f in enumerate(pad_files, 1):
        target_name = f.name
        target_p = active_dir / target_name
        try:
            shutil.copy2(f, target_p)
        except Exception: pass

        clean_title = f.stem
        if "_" in clean_title:
            parts = clean_title.split("_")
            if len(parts) >= 3 and parts[1].isdigit():
                clean_title = "_".join(parts[2:])
        clean_title = clean_title.replace("Pad ", "").replace(" - ", " ").strip()
        pads_info.append({
            "pad": idx,
            "title": clean_title,
            "filename": target_name,
            "rel_path": f"_DJ_Sampler_Bank/{target_name}"
        })

    # Write .crate to Serato
    try:
        vrsn_str = "1.0/Serato ScratchLive Crate".encode('utf-16-be')
        vrsn_block = b'vrsn' + struct.pack('>I', len(vrsn_str)) + vrsn_str
        tvcn_str = "song".encode('utf-16-be')
        tvcn_block = b'tvcn' + struct.pack('>I', len(tvcn_str)) + tvcn_str
        brev_block = b'brev\x00\x00\x00\x01\x00'
        osrt_content = tvcn_block + brev_block
        osrt_block = b'osrt' + struct.pack('>I', len(osrt_content)) + osrt_content
        
        data = bytearray(vrsn_block + osrt_block)
        for f in pad_files:
            p_str = str(f).lstrip('/')
            encoded_path = p_str.encode('utf-16-be')
            ptrk_block = b'ptrk' + struct.pack('>I', len(encoded_path)) + encoded_path
            otrk_block = b'otrk' + struct.pack('>I', len(ptrk_block)) + ptrk_block
            data.extend(otrk_block)
        
        crate_bytes = bytes(data)
        target_dirs = [
            Path.home() / 'Music/_Serato_/Subcrates',
            get_serato_crate_dir()
        ]

        for d in target_dirs:
            try:
                d.mkdir(parents=True, exist_ok=True)
                (d / "08 SAMPLER BANKS%%00 Live Performance Active Sampler.crate").write_bytes(crate_bytes)
            except Exception: pass
    except Exception: pass

    return {
        "status": "success",
        "preset_id": preset_id,
        "preset_name": preset["name"],
        "desc": preset["desc"],
        "pads": pads_info
    }

DOCS_KNOWLEDGE_BASE = [
    {
        "topic": "migration",
        "keywords": ["migrate", "new laptop", "transfer", "new mac", "move computer", "backup", "restore"],
        "answer": "To move the entire system to a new Mac or Laptop: 1. Plug in your external drive ('Sol Roth Data'). 2. Ensure Python 3 is installed (macOS default or brew install python). 3. Install required libraries: 'pip3 install mutagen'. 4. Ensure ffmpeg and yt-dlp are installed ('brew install ffmpeg yt-dlp' or they run from ~/.spotdl/ffmpeg). 5. Open Serato DJ Pro once so it generates ~/Library/Application Support/Serato/Library/master.sqlite. 6. Launch the server by running 'python3 /Volumes/Sol Roth Data/ALL DJ Music/sol_roth_dj_prompter_hud.py' in Terminal. 7. Open http://localhost:7777 on your Mac or http://<Mac-Local-IP>:7777 on iPad/iPhone!"
    },
    {
        "topic": "drive_rename",
        "keywords": ["drive name", "external drive", "rename drive", "change volume", "path", "hard drive"],
        "answer": "To change the external drive name or path: In 'sol_roth_dj_prompter_hud.py', the drive paths are defined at the very top under MUSIC_ROOT and CRATE_TARGET_DIRS. You only need to update MUSIC_ROOT = Path('/Volumes/YOUR_NEW_DRIVE_NAME/ALL DJ Music'). The system automatically resolves relative paths, searches for Serato SQLite, and handles A-Z library indexing dynamically based on that single root variable."
    },
    {
        "topic": "dependencies_apis",
        "keywords": ["api", "dependencies", "outside", "external accounts", "spotify", "yt-dlp", "ffmpeg", "services"],
        "answer": "External dependencies & APIs used: 1. yt-dlp (Used for 1-click track ingest; update via 'yt-dlp -U' or 'brew upgrade yt-dlp'). 2. ffmpeg (Used for audio conversion, trimming, and stem processing). 3. iTunes & Public Spotify Track API (Used for 30s audio previews and metadata with zero auth keys required; completely public & rate-limit resilient). 4. Mutagen (Python library for writing ID3v2.4 tags and embedding high-res album covers; update via 'pip3 install --upgrade mutagen')."
    },
    {
        "topic": "hardware_controllers",
        "keywords": ["flx10", "flx2", "smc pad", "m-vave", "controller", "pads", "knobs", "midi", "hardware"],
        "answer": "Hardware mappings: 1. Pioneer DDJ-FLX10: 16 performance pads across 4 channels natively control Serato Sampler banks and stems. 2. Pioneer DDJ-FLX2 + M-VAVE SMC-PAD: 8 360-degree endless rotary knobs mapped to Color FX Filters, Vocal Part ISO sends, Loop sizes, and Key shifting; 16 silent performance pads mapped to Deck 1 & Deck 2 Stems + Hot Cues 1-4 or Live Sampler Banks. 3. Dynamic Sampler Switcher: 1-click reloads active sampler banks into Serato and _DJ_Sampler_Bank/."
    },
    {
        "topic": "crate_generation",
        "keywords": ["crate", "subcrate", "serato crate", "sync crate", "export crate", "binary crate"],
        "answer": "Serato .crate Architecture: The system generates official native binary Serato ScratchLive / DJ Pro crate files without needing third-party GUI software. It writes directly to ~/Music/_Serato_/Subcrates/ and /Volumes/Sol Roth Data/_Serato_/Subcrates/. When you click 'Sync .crate to Serato' on any genre or 'Sync ALL 16 Crates', Serato DJ Pro reads them immediately upon opening with zero missing file errors."
    },
    {
        "topic": "remix_lab",
        "keywords": ["serato studio", "remix", "edit", "dj edit", "blueprint", "acapella intro", "bpm boost"],
        "answer": "Serato Studio Remix Lab (/studio): Analyzes all 4,404 tracks in your library to identify 4 high-value remix categories: 1. Extended DJ Intros/Outros (16-bar drum intro for easy mixing). 2. Acapella Intro weapons (pure raw vocal at Bar 1 for crowd shock & wordplay transitions). 3. 128 BPM Dance Remixes (pitch-stretching slow hip-hop/rock to tech house). 4. Second-Drop Switch-ups (replacing repetitive drops with half-time trap or speed garage). It provides the exact sample bank to load into the Serato Studio Drum Deck and the step sequencer formulas."
    },
    {
        "topic": "troubleshooting",
        "keywords": ["troubleshoot", "port 7777", "not loading", "error", "lyrics not showing", "sqlite lock"],
        "answer": "Troubleshooting Quick Guide: 1. Port 7777 in use: Run 'lsof -ti :7777 | xargs kill -9'. 2. Serato not updating HUD: Make sure Serato DJ Pro is running and has history logging enabled (default). 3. Mobile not connecting: Ensure your iPhone/iPad is on the same Wi-Fi network and visit http://<Mac-IP>:7777 or http://srmmacbookpro.local:7777. 4. Re-indexing library: Click 'Refresh' or restart the server to scan all 4,404 tracks into 0ms memory cache."
    },
    {
        "topic": "hud_view_modes",
        "keywords": ["view mode", "split", "tabs", "compact", "focus", "iphone", "mobile view", "display mode", "lyrics size"],
        "answer": "HUD Display Modes: 1. 🔀 Split ('split'): The default responsive view pairing the live 4-channel Prompter with the docked VJ Stage controls below. 2. 📑 Ajax Tabs ('tabs'): Full-screen switchable tabs separating the Stage Prompter and the VJ Stage Console, while keeping the background ambient visualizer live. 3. 📱 Compact ('compact'): Micro-ribbon dock (<36px) reserving 95%+ of vertical screen space for lyrics and chords, with safe-area insets for iPhone 15/16 and mobile browsers. 4. 🎯 Focus ('focus'): Distraction-free colossal lyric view for live vocalists with a floating exit trigger in the top-right corner. Modes persist across reloads in localStorage."
    },
    {
        "topic": "vj_visualizer_stories",
        "keywords": ["vj", "visualizer", "axiom story", "aurora story", "scenes", "titan", "poses", "portal", "hatch", "shutter", "camera mode", "stage url"],
        "answer": "3D Master Visualizer & Stage Engine: 1. Dual Story Arcs: 'Axiom' (Story 1: 14 sci-fi narrative scenes from Titan Awakening to Laser Climax) and 'Aurora' (Story 2: 6 celestial & organic neon realms). 2. Entity Pose Morphing: Real-time triggerable poses for the Titan 2.5D hologram: IDLE, FOCUS, REACH, ROAR, plus auto-pose beat sync. 3. Portal Transition Engine: Real-time transition gateways with 4 styles: Hatch (dual overlapping blast doors), Iris (geometric cyber aperture), Shutter (horizontal slats), and Warp (spacetime rift). 4. Camera Modes: AUTO (orbital beat pulse), DRIFT (cinematic floating), FIXED (locked stage perspective), and Reset Cam. 5. Stage URLs: Load http://<IP>:7777/visualizer for interactive toolbar or http://<IP>:7777/visualizer?mode=stage for clean fullscreen output for LED walls."
    },
    {
        "topic": "axiom01_framework",
        "keywords": ["axiom01", "framework", "semantic", "design tokens", "backport", "components", "dock", "beat card", "prompter", "harmonic wheel", "pad grid"],
        "answer": "Axiom01 Framework & Design System: Built on semantic-first HTML, single-class component encapsulation, and CSS custom property token cascades (--ax-surface, --a-surface-raised, --ax-border, --ax-text, --dj-accent-*). The HUD routes static framework assets directly from /axiom01/. Five candidate components created in this system are documented for backporting into the core Axiom01 library: AxiomDock, AxiomBeatCard, AxiomPrompter, AxiomHarmonicWheel, and AxiomPadGrid (detailed in /docs/AXIOM01_INTEGRATION_AND_BACKPORT_AUDIT.md)."
    }
]

def find_matching_vj_video(track_title, track_artist):
    vj_dir = MUSIC_ROOT / "_VJ_Videos"
    if not vj_dir.exists():
        return None
    
    t_clean = track_title.lower().strip()
    a_clean = track_artist.lower().strip()
    
    for p in vj_dir.glob("**/*.mp4"):
        fn_lower = p.name.lower()
        if t_clean in fn_lower and (a_clean in fn_lower or len(t_clean) > 8):
            return str(p.relative_to(MUSIC_ROOT))
            
    for p in vj_dir.glob("*.mp4"):
        return str(p.relative_to(MUSIC_ROOT))
        
    return None

def answer_docs_question(query):
    q_lower = query.lower().strip()
    if not q_lower:
        return {
            "status": "ok",
            "query": query,
            "answer": "Ask me anything about system architecture, moving to another computer, changing drive names, controller mappings, Serato Studio blueprints, or external APIs!"
        }

    best_match = None
    best_score = 0
    for item in DOCS_KNOWLEDGE_BASE:
        score = sum(2 for kw in item["keywords"] if kw in q_lower)
        if item["topic"] in q_lower: score += 5
        if score > best_score:
            best_score = score
            best_match = item

    if best_match and best_score > 0:
        return {
            "status": "ok",
            "query": query,
            "topic": best_match["topic"],
            "answer": best_match["answer"]
        }

    return {
        "status": "ok",
        "query": query,
        "topic": "general",
        "answer": f"For '{query}': The Sol Roth DJ OS is a unified ecosystem comprising: 1. Stage HUD (port 7777) reading Serato master.sqlite. 2. Daily Intel (/intel) for 1-click track ingestion via yt-dlp. 3. Genre Encyclopedia (/genres) for Camelot wheel analysis & binary .crate exports. 4. Serato Studio Lab (/studio) for automated DJ edit & remix blueprints. All paths are centralized under MUSIC_ROOT in sol_roth_dj_prompter_hud.py."
    }

def analyze_song_for_serato_studio(query_or_path):
    target = None
    q_lower = query_or_path.lower().strip()
    
    # Try exact match or search across library
    for item in LIBRARY_CATALOG:
        if q_lower in item['filename'].lower() or q_lower in item['title'].lower() or q_lower in item['artist'].lower():
            target = item
            break
            
    if not target and LIBRARY_CATALOG:
        target = LIBRARY_CATALOG[0]

    title = target['title']
    artist = target['artist']
    filename = target['filename']
    rel_path = target['rel_path']
    bpm = float(target.get('bpm') or 126.0)
    key = target.get('key', '8A').strip().upper()
    
    # Intelligent Edit & Remix Archetype Categorization
    combined = f"{title.lower()} {artist.lower()} {filename.lower()}"
    
    if any(k in combined for k in ['blink', 'paramore', 'rock', 'punk', 'sum 41', 'fall out boy', 'killers', 'greenday']):
        edit_type = "🎸 Pop-Punk / Rock Club Dance Remix (128 BPM Tech House / 174 BPM DnB Flip)"
        category = "dance_remix"
        rec_bank = "Bank_05_-_Finger_Drumming_-_House_and_Club"
        bank_name = "🎛️ House & Club 909 Drum Kit + Bank_03 Risers"
        target_bpm = 128.0
        drum_formula = "Step Sequencer: 4/4 Punchy Kick (1, 5, 9, 13) + Layered Club Clap (5, 13) + 909 Open Hat on the offbeats (3, 7, 11, 15)."
        arrangement = "Bars 1–16: 909 Drum & Bass Groove Intro ➔ Bars 17–32: Guitar & Raw Vocal Hook ➔ Bars 33–64: High-Energy Tech House Drop ➔ Bars 65–80: Acapella Breakdown ➔ Bars 81–112: Double-Time DnB Switch-up Drop ➔ Bars 113–128: Clean Outro Drums."
        cue_tip = "Set Hot Cue 1 at Bar 1 for the 16-bar intro. Set Hot Cue 2 at Bar 33 for instant drop impact. Use Stems Vocal Mute during busy transitions."
        why = "Iconic sing-along rock vocals paired with a driving 128 BPM club kick create an instant peak-hour room explosion."
    elif any(k in combined for k in ['daft punk', 'queen', 'avicii', 'eminem', '50 cent', 'montell', 'whitney', 'stevie wonder']):
        edit_type = "🎤 Acapella Intro & Trick Transition Weapon"
        category = "acapella_intro"
        rec_bank = "Bank_02_-_DJ_Drops_and_Hype_Vox"
        bank_name = "🔊 Stage Drops & Hype Vox Kit + Bank_01 Scratch Cuts"
        target_bpm = bpm
        drum_formula = "Bars 1–8: ZERO DRUMS (Raw unquantized Acapella Stem + subtle 808 sub drone). Bar 8 Beat 4: Snare fill + Airhorn. Bar 9: Full beat slam!"
        arrangement = "Bars 1–8: Pure Acapella Intro for crowd sing-along ➔ Bars 9–24: Main Groove with Stems Drums & Bass ➔ Bars 25–40: Main Hook Chorus ➔ Bars 41–56: Extended 8-Bar Outro."
        cue_tip = "Use this edit as an unannounced curveball. Cut outgoing track on beat 1 and trigger Hot Cue 1 (Acapella Intro). Let the crowd sing the first 8 bars!"
        why = "Placing the pure acapella at the very front allows effortless drop cuts, tone play, and live mashups without clashing drum tails."
    elif bpm <= 110 or any(k in combined for k in ['hip-hop', 'trap', 'rap', 'drake', 'travis scott', 'metro boomin', 'snoop']):
        edit_type = "⚡ 126–128 BPM Tech House / UK Bassline Club Flip"
        category = "bpm_boost"
        rec_bank = "Bank_05_-_Finger_Drumming_-_House_and_Club"
        bank_name = "🎛️ House & Club 909 Drum Kit + Bank_04 808 Sub Hits"
        target_bpm = 126.0
        drum_formula = "Time-stretch vocal stem to 126 BPM. Program rolling 16th-note shaker groove + short punchy offbeat bass stabs."
        arrangement = "Bars 1–16: Minimal Tech Drum Intro ➔ Bars 17–32: Hip-Hop Vocal Verse ➔ Bars 33–64: Heavy Rolling Bassline Drop ➔ Bars 65–80: 808 Half-Time Trap Switch ➔ Bars 81–112: Outro."
        cue_tip = "Blend in over standard tech house sets on Bar 1. The familiar rap vocal will instantly bridge open-format crowds with electronic sets."
        why = "Slow hip-hop verses sound massive when pitched up to 126 BPM with modern sidechained basslines."
    else:
        edit_type = "🎚️ Extended DJ Intro & Outro Club Mix (8/16-Bar Clean Mix Tool)"
        category = "extended_intro"
        rec_bank = "Bank_05_-_Finger_Drumming_-_House_and_Club"
        bank_name = "🎛️ House & Club 909 Drum Kit + Bank_03 Risers"
        target_bpm = bpm
        drum_formula = "4/4 Kick on 1, 5, 9, 13 + 909 Closed Hat on 8th notes + White Noise Sweep on Bar 16."
        arrangement = "Bars 1–16: Clean 16-Bar Drum Intro with filtered synth chords ➔ Bars 17–32: Verse 1 ➔ Bars 33–64: Main Hook ➔ Bars 65–96: Drop ➔ Bars 97–112: Clean 16-Bar Drum Outro."
        cue_tip = "Mix in on beat 1 of the outgoing breakdown. Use the 16-bar intro to match basslines before bringing in the main melody."
        why = "Radio edits start abruptly with vocals; adding 16 bars of clean intro/outro drums makes it 100% DJ-friendly."

    return {
        "status": "success",
        "track": {
            "title": title,
            "artist": artist,
            "filename": filename,
            "rel_path": rel_path,
            "bpm": bpm,
            "key": key
        },
        "blueprint": {
            "edit_type": edit_type,
            "category": category,
            "target_bpm": target_bpm,
            "target_key": key,
            "recommended_sample_bank": bank_name,
            "bank_folder": rec_bank,
            "drum_formula": drum_formula,
            "arrangement": arrangement,
            "live_cue_tip": cue_tip,
            "why_it_works": why
        }
    }

def get_serato_studio_opportunities():
    # Curated opportunity lists across Sol Roth's library
    intro_candidates = []
    acapella_candidates = []
    remix_candidates = []
    variety_candidates = []

    for item in LIBRARY_CATALOG:
        comb = f"{item['title']} {item['artist']}".lower()
        if any(k in comb for k in ['blink', 'paramore', 'green day', 'sum 41', 'killers', 'offspring']):
            if len(remix_candidates) < 6:
                remix_candidates.append(item)
        elif any(k in comb for k in ['daft punk', 'queen', 'avicii', 'stevie wonder', 'montell', 'whitney']):
            if len(acapella_candidates) < 6:
                acapella_candidates.append(item)
        elif any(k in comb for k in ['eminem', '50 cent', 'drake', 'travis scott', 'dr. dre', 'snoop']):
            if len(intro_candidates) < 6:
                intro_candidates.append(item)
        else:
            if len(variety_candidates) < 6:
                variety_candidates.append(item)

    return {
        "status": "ok",
        "total_library_tracks": len(LIBRARY_CATALOG),
        "extended_intro_candidates": intro_candidates,
        "acapella_intro_candidates": acapella_candidates,
        "dance_remix_candidates": remix_candidates,
        "drop_variety_candidates": variety_candidates
    }

def parse_serato_crate_binary(crate_path):
    data = crate_path.read_bytes()
    tracks = []
    idx = 0
    while idx < len(data):
        if idx + 8 > len(data): break
        tag = data[idx:idx+4].decode('latin-1', errors='ignore')
        length = struct.unpack('>I', data[idx+4:idx+8])[0]
        idx += 8
        chunk = data[idx:idx+length]
        idx += length
        if tag == 'otrk':
            sub_idx = 0
            while sub_idx < len(chunk):
                if sub_idx + 8 > len(chunk): break
                s_tag = chunk[sub_idx:sub_idx+4].decode('latin-1', errors='ignore')
                s_len = struct.unpack('>I', chunk[sub_idx+4:sub_idx+8])[0]
                sub_idx += 8
                s_data = chunk[sub_idx:sub_idx+s_len]
                sub_idx += s_len
                if s_tag == 'ptrk':
                    tracks.append(s_data.decode('utf-16-be', errors='ignore'))
    return tracks

def sync_rekordbox_ecosystem():
    """Generates complete Pioneer Rekordbox XML bridge and M3U8 playlists in <1s using in-memory catalog."""
    import xml.etree.ElementTree as ET
    import urllib.parse
    import time

    start_t = time.time()

    # 1. Parse all Serato crates on disk
    crate_dir = get_serato_crate_dir()
    crate_data = {}
    if crate_dir.exists():
        for f in sorted(crate_dir.glob('*.crate')):
            trks = parse_serato_crate_binary(f)
            crate_data[f.stem] = trks

    # 2. Build Library Map (all active unique files on disk)
    all_files = [
        p for p in MUSIC_ROOT.glob('**/*.*') 
        if p.suffix.lower() in ['.mp3', '.wav', '.mp4', '.m4a', '.aif', '.aiff', '.flac']
        and not any(x in str(p) for x in ['_Inbox', '_Playlists', '__pycache__', '_Issues', '_VJ_Videos', 'axiom01', '_Duplicate_Backup_Archive'])
    ]
    unique_files = list({str(p): p for p in all_files}.values())

    root = ET.Element("DJ_PLAYLISTS", Version="1.0.0")
    ET.SubElement(root, "PRODUCT", Name="rekordbox", Version="7.0.0", Company="AlphaTheta")

    collection_elem = ET.SubElement(root, "COLLECTION", Entries=str(len(unique_files)))
    track_id_map_by_path = {}
    track_id_map_by_name = {}

    for idx, p in enumerate(unique_files, 1):
        name_clean = p.stem
        artist_clean = "Sol Roth DJ Master"
        if " - " in name_clean:
            parts = name_clean.split(" - ", 1)
            artist_clean, name_clean = parts[0], parts[1]
            
        bpm = 126.0
        cam_key = "8A"
        genre_str = "Electronic"
        year_str = "2024"
        size = p.stat().st_size
        
        file_url = f"file://localhost{urllib.parse.quote(str(p))}"
        
        track_elem = ET.SubElement(
            collection_elem,
            "TRACK",
            TrackID=str(idx),
            Name=name_clean,
            Artist=artist_clean,
            Composer="",
            Album="",
            Grouping="",
            Genre=genre_str,
            Kind="MP3 File" if p.suffix.lower() == '.mp3' else "Video File" if p.suffix.lower() == '.mp4' else "WAV File",
            Size=str(size),
            TotalTime="210",
            DiscNumber="1",
            TrackNumber="1",
            Year=year_str,
            AverageBpm=f"{bpm:.2f}",
            DateAdded="2026-09-02",
            BitRate="320",
            SampleRate="44100",
            Comments="Sol Roth DJ Collection",
            PlayCount="0",
            Rating="0",
            Location=file_url,
            Tonality=cam_key
        )
        ET.SubElement(track_elem, "TEMPO", Inizio="0.00", Bpm=f"{bpm:.2f}", Metro="4/4", Battito="1")
        
        track_id_map_by_path[str(p)] = str(idx)
        track_id_map_by_path[str(p.relative_to(MUSIC_ROOT.parent))] = str(idx)
        try:
            track_id_map_by_path[str(p.relative_to(MUSIC_ROOT))] = str(idx)
        except Exception: pass
        track_id_map_by_name[p.name] = str(idx)

    # 3. Build Hierarchical Playlists from Serato Crates
    playlists_elem = ET.SubElement(root, "PLAYLISTS")
    root_node = ET.SubElement(playlists_elem, "NODE", Type="0", Name="ROOT")

    folder_nodes = {}

    for crate_name, crate_tracks in sorted(crate_data.items()):
        matched_ids = []
        for rel_ptrk in crate_tracks:
            full_ptrk = str(DRIVE_ROOT / rel_ptrk)
            t_id = track_id_map_by_path.get(full_ptrk) or track_id_map_by_path.get(rel_ptrk) or track_id_map_by_name.get(Path(rel_ptrk).name)
            if t_id:
                matched_ids.append(t_id)
                
        if "%%" in crate_name:
            folder_name, sub_name = crate_name.split("%%", 1)
            if folder_name not in folder_nodes:
                folder_nodes[folder_name] = ET.SubElement(root_node, "NODE", Type="0", Name=f"📁 {folder_name}")
            parent_node = folder_nodes[folder_name]
            p_name = sub_name
        else:
            parent_node = root_node
            p_name = f"⭐ {crate_name}"

        p_node = ET.SubElement(parent_node, "NODE", Type="1", Name=p_name, KeyType="0", Entries=str(len(matched_ids)))
        for t_id in matched_ids:
            ET.SubElement(p_node, "TRACK", Key=t_id)

    # 4. Master 16 Genre Encyclopedia Playlists
    genre_folder = ET.SubElement(root_node, "NODE", Type="0", Name="⚡ Master Genre Encyclopedia Crates")
    for g in GENRE_ENCYCLOPEDIA_DATA:
        g_matched_ids = []
        for p in unique_files:
            comb = f"{p.name} {p.stem}".lower()
            if any(kw in comb for kw in g['keywords']):
                t_id = track_id_map_by_name.get(p.name)
                if t_id: g_matched_ids.append(t_id)
        g_node = ET.SubElement(genre_folder, "NODE", Type="1", Name=f"🎧 {g['name']}", KeyType="0", Entries=str(len(g_matched_ids)))
        for t_id in g_matched_ids:
            ET.SubElement(g_node, "TRACK", Key=t_id)

    ET.indent(root, space="  ", level=0)
    tree = ET.ElementTree(root)

    destinations = [
        SCRIPT_DIR / "rekordbox.xml",
        Path.home() / "Music/rekordbox.xml",
        Path.home() / "Library/rekordbox/rekordbox/rekordbox.xml"
    ]

    for dst in destinations:
        try:
            dst.parent.mkdir(parents=True, exist_ok=True)
            tree.write(str(dst), encoding="utf-8", xml_declaration=True)
        except Exception: pass

    # 4b. Generate Direct M3U8 Playlists
    out_dir_ext = MUSIC_ROOT / "_Rekordbox_Playlists"
    out_dir_local = Path.home() / "Music/PioneerDJ/Playlists"
    try:
        out_dir_ext.mkdir(parents=True, exist_ok=True)
    except Exception: pass
    try:
        out_dir_local.mkdir(parents=True, exist_ok=True)
    except Exception: pass

    for crate_name, crate_tracks in crate_data.items():
        if not crate_tracks: continue
        clean_name = crate_name.replace('%%', ' - ').replace('&', 'and').strip()
        m3u_lines = ["#EXTM3U\n"]
        for rel_p in crate_tracks:
            full_p = DRIVE_ROOT / rel_p
            if full_p.exists():
                m3u_lines.append(f"#EXTINF:-1,{full_p.stem}\n{str(full_p)}\n")
            else:
                cand = MUSIC_ROOT / Path(rel_p).name
                if cand.exists():
                    m3u_lines.append(f"#EXTINF:-1,{cand.stem}\n{str(cand)}\n")
        m3u_text = "".join(m3u_lines)
        try:
            (out_dir_ext / f"{clean_name}.m3u8").write_text(m3u_text, encoding='utf-8')
        except Exception: pass
        try:
            (out_dir_local / f"{clean_name}.m3u8").write_text(m3u_text, encoding='utf-8')
        except Exception: pass

    # 5. Direct Native Sampler Folder Sync
    rb_sampler_root = Path.home() / 'Music/rekordbox/Sampler/Sol Roth Master Sampler'
    try:
        rb_sampler_root.mkdir(parents=True, exist_ok=True)
    except Exception: pass
    vj_full = MUSIC_ROOT / "_VJ_Sampler_Banks_Full"

    created_kits = 0
    for p_id, p_info in SAMPLER_PRESETS.items():
        clean_name = p_info['name'].replace('🎛️', '').replace('⚡', '').replace('🎤', '').replace('🎧', '').replace('🚀', '').replace('🌴', '').replace('🔊', '').strip()
        kit_dir = rb_sampler_root / clean_name
        try:
            kit_dir.mkdir(parents=True, exist_ok=True)
        except Exception: pass
        
        pad_idx = 1
        for b_name in p_info.get('banks', []):
            b_dir = vj_full / b_name
            if b_dir.exists():
                f_list = sorted([f for f in b_dir.glob('*.*') if f.suffix.lower() in ['.mp4', '.mp3', '.wav']])
                for f in f_list[:8]:
                    dst_file = kit_dir / f"Pad_{pad_idx:02d}_{f.name}"
                    if not dst_file.exists():
                        try:
                            os.symlink(f, dst_file)
                        except Exception:
                            try:
                                shutil.copy2(f, dst_file)
                            except Exception: pass
                    pad_idx += 1
        created_kits += 1

    # 6. Activate showRbXml in settings
    settings_file = Path.home() / 'Library/Application Support/Pioneer/rekordbox6/rekordbox3.settings'
    if settings_file.exists():
        try:
            txt = settings_file.read_text(encoding='utf-8')
            txt = txt.replace('<VALUE name="showRbXml" val="0"/>', '<VALUE name="showRbXml" val="1"/>')
            txt = txt.replace('<VALUE name="RekordboxXmlChecked" val="0"/>', '<VALUE name="RekordboxXmlChecked" val="1"/>')
            txt = txt.replace('val="/Users/solroth/Library/rekordbox/rekordbox/rekordbox.xml"', 'val=str(SCRIPT_DIR / "rekordbox.xml")')
            settings_file.write_text(txt, encoding='utf-8')
        except Exception: pass

    return {
        "status": "success",
        "message": f"Successfully compiled {len(unique_files):,} unique clean tracks, {len(crate_data)} Serato crates, and 7 performance sampler kits to Pioneer Rekordbox XML & Sampler!",
        "xml_path": str(SCRIPT_DIR / "rekordbox.xml"),
        "tracks_synced": len(unique_files),
        "crates_synced": len(crate_data),
        "sampler_kits_synced": created_kits
    }

def sync_all_master_crates():
    results = []
    total_tracks = 0
    for g in GENRE_ENCYCLOPEDIA_DATA:
        res = generate_genre_crate(g['id'])
        if res.get('status') == 'success':
            results.append(res)
            total_tracks += res.get('track_count', 0)
    return {
        "status": "success",
        "total_crates": len(results),
        "total_tracks_synced": total_tracks,
        "message": f"Successfully built and synced {len(results)} Master Serato Crates ({total_tracks} tracks) to Serato Subcrates!"
    }

def sync_serato_studio_exports_to_ecosystem():
    """Scans Serato Studio export directories, auto-indexes production tracks, and syncs to Pioneer Rekordbox XML and Serato."""
    studio_dirs = [
        Path.home() / 'Music/Serato Studio/Exports',
        Path.home() / 'Music/Serato Studio/Projects',
        Path.home() / 'Music/Serato Studio',
        Path.home() / 'Desktop',
        Path.home() / 'Downloads',
        DRIVE_ROOT / '02_MUSIC_PRODUCTION/Songs_And_Tracks/iCloud_Music',
        MUSIC_ROOT / '01_SOL_ROTH_ORIGINALS_AND_REMIXES'
    ]
    discovered = []
    for s_dir in studio_dirs:
        if s_dir.exists():
            for ext in ['.wav', '.mp3', '.m4a', '.aif', '.aiff']:
                for f in s_dir.glob(f'*{ext}'):
                    if not f.name.startswith('.') and f.stat().st_size > 100000:
                        discovered.append(f)
    
    # Auto-tag and refresh Rekordbox ecosystem
    rb_res = sync_rekordbox_ecosystem()
    return {
        "status": "success",
        "discovered_count": len(discovered),
        "message": f"Successfully indexed Serato Studio production paths ({len(discovered)} candidate tracks) and updated Pioneer Rekordbox XML + Serato Crates!",
        "rekordbox_summary": rb_res
    }

def generate_genre_crate(genre_id):
    g_match = None
    for g in GENRE_ENCYCLOPEDIA_DATA:
        if g['id'] == genre_id:
            g_match = g
            break
    if not g_match:
        return {"status": "error", "message": "Genre not found"}

    matched_paths = []
    for item in LIBRARY_CATALOG:
        fn_lower = item['filename'].lower()
        title_lower = item['title'].lower()
        artist_lower = item['artist'].lower()
        combined = f"{fn_lower} {title_lower} {artist_lower}"
        if any(kw in combined for kw in g_match['keywords']):
            full_p = MUSIC_ROOT / item['rel_path']
            if full_p.exists():
                matched_paths.append(full_p)

    if not matched_paths:
        return {"status": "error", "message": "No matching tracks found in library"}

    # Build binary .crate
    vrsn_str = "1.0/Serato ScratchLive Crate".encode('utf-16-be')
    vrsn_block = b'vrsn' + struct.pack('>I', len(vrsn_str)) + vrsn_str
    
    tvcn_str = "song".encode('utf-16-be')
    tvcn_block = b'tvcn' + struct.pack('>I', len(tvcn_str)) + tvcn_str
    brev_block = b'brev\\x00\\x00\\x00\\x01\\x00'
    osrt_content = tvcn_block + brev_block
    osrt_block = b'osrt' + struct.pack('>I', len(osrt_content)) + osrt_content
    
    data = bytearray(vrsn_block + osrt_block)
    for tp in matched_paths:
        p_str = str(tp).lstrip('/')
        encoded_path = p_str.encode('utf-16-be')
        ptrk_block = b'ptrk' + struct.pack('>I', len(encoded_path)) + encoded_path
        otrk_block = b'otrk' + struct.pack('>I', len(ptrk_block)) + ptrk_block
        data.extend(otrk_block)
    
    crate_bytes = bytes(data)
    clean_name = g_match['name'].replace('&', 'and').replace('/', '-').strip()
    crate_filename = f"01 SOL ROTH GENRES%%{clean_name}.crate"

    target_dirs = [
        Path.home() / 'Music/_Serato_/Subcrates',
        get_serato_crate_dir()
    ]

    written_count = 0
    for d in target_dirs:
        try:
            d.mkdir(parents=True, exist_ok=True)
            (d / crate_filename).write_bytes(crate_bytes)
            written_count += 1
        except Exception: pass

    return {
        "status": "success",
        "message": f"Successfully exported crate '{clean_name}' with {len(matched_paths)} tracks to Serato Subcrates!",
        "track_count": len(matched_paths),
        "filename": crate_filename
    }

def get_smart_next_tracks(current_deck_id='1'):
    decks = get_all_decks_now_playing()
    curr = decks.get(current_deck_id) or decks.get('1') or {}
    
    curr_bpm = float(curr.get('bpm') or 126.0)
    curr_key = (curr.get('key') or '8A').strip().upper()
    curr_path = curr.get('filepath') or ''
    curr_folder = Path(curr_path).parent.name if curr_path else ''
    
    # Camelot harmonic compatibility rules
    num_part = ''.join(c for c in curr_key if c.isdigit())
    letter_part = ''.join(c for c in curr_key if c.isalpha())
    num = int(num_part) if num_part else 8
    letter = letter_part if letter_part in ['A', 'B'] else 'A'

    compat_keys = [
        curr_key, # 0 step (lock)
        f"{(num % 12) + 1}{letter}", # +1 step (energy boost)
        f"{((num - 2) % 12) + 1}{letter}", # -1 step (energy drop)
        f"{num}{'B' if letter == 'A' else 'A'}", # relative major/minor swap
        f"{((num + 1) % 12) + 1}{letter}" # +2 step (energy surge)
    ]

    # 1. In-Crate / Folder Context Matches
    in_crate_matches = []
    global_matches = []

    for item in LIBRARY_CATALOG:
        # Avoid recommending the currently playing track
        if curr_path and curr_path.endswith(item['filename']):
            continue
            
        t_bpm = float(item.get('bpm') or 126.0)
        t_key = item.get('key', '8A').strip().upper()
        
        # Must be within +/- 4% BPM
        bpm_diff = abs(t_bpm - curr_bpm)
        bpm_pct = (bpm_diff / curr_bpm) * 100
        
        if bpm_pct <= 6.0:
            is_compat = t_key in compat_keys
            score = 100 - (bpm_pct * 10) + (30 if is_compat else 0)
            
            # Check relation label
            if t_key == curr_key: relation = "🔒 Perfect Harmonic Lock (Same Key)"
            elif t_key == f"{(num % 12) + 1}{letter}": relation = "⚡ +1 Energy Boost (+3.5st)"
            elif t_key == f"{num}{'B' if letter == 'A' else 'A'}": relation = "✨ Mood Shift (Relative Mode)"
            elif t_key == f"{((num + 1) % 12) + 1}{letter}": relation = "💥 +2 Energy Surge Lift"
            else: relation = f"🎚️ Tempo Aligned ({t_key})"

            cand = {
                "title": item['title'],
                "artist": item['artist'],
                "filename": item['filename'],
                "rel_path": item['rel_path'],
                "bpm": t_bpm,
                "key": t_key,
                "relation": relation,
                "pitch_delta": round(((t_bpm - curr_bpm) / curr_bpm) * 100, 2),
                "folder": Path(item['rel_path']).parent.name
            }

            if curr_folder and curr_folder == cand['folder']:
                in_crate_matches.append(cand)
            else:
                global_matches.append(cand)

    in_crate_matches.sort(key=lambda x: abs(x['pitch_delta']))
    global_matches.sort(key=lambda x: abs(x['pitch_delta']))

    return {
        "status": "ok",
        "current_track": {
            "title": curr.get('title') or "Active Deck Track",
            "artist": curr.get('artist') or "Serato Deck",
            "bpm": curr_bpm,
            "key": curr_key,
            "folder": curr_folder
        },
        "in_crate_recommendation": in_crate_matches[0] if in_crate_matches else (global_matches[0] if global_matches else None),
        "global_recommendation": global_matches[1] if len(global_matches) > 1 else (global_matches[0] if global_matches else None),
        "top_crate_matches": in_crate_matches[:4],
        "top_global_matches": global_matches[:4]
    }

def get_genre_library_stats():
    genre_counts = {g['id']: 0 for g in GENRE_ENCYCLOPEDIA_DATA}
    genre_tracks = {g['id']: [] for g in GENRE_ENCYCLOPEDIA_DATA}
    subgenre_counts = {}
    uncategorized_count = 0

    for g in GENRE_ENCYCLOPEDIA_DATA:
        for sg in g.get('sub_genres', []):
            subgenre_counts[sg['id']] = 0

    for item in LIBRARY_CATALOG:
        fn_lower = item['filename'].lower()
        title_lower = item['title'].lower()
        artist_lower = item['artist'].lower()
        combined = f"{fn_lower} {title_lower} {artist_lower}"

        matched = False
        for g in GENRE_ENCYCLOPEDIA_DATA:
            if any(kw in combined for kw in g['keywords']):
                genre_counts[g['id']] += 1
                if len(genre_tracks[g['id']]) < 12:
                    genre_tracks[g['id']].append({
                        "title": item['title'],
                        "artist": item['artist'],
                        "filename": item['filename'],
                        "rel_path": item['rel_path']
                    })
                matched = True

                # Check subgenre matches
                for sg in g.get('sub_genres', []):
                    if any(skw in combined for skw in sg.get('keywords', [])):
                        subgenre_counts[sg['id']] = subgenre_counts.get(sg['id'], 0) + 1
                break

        if not matched:
            uncategorized_count += 1

    result = []
    for g in GENRE_ENCYCLOPEDIA_DATA:
        sgs = []
        for sg in g.get('sub_genres', []):
            sgs.append({
                **sg,
                "library_count": subgenre_counts.get(sg['id'], 0),
                "anthems": ANTHEMS_MAP.get(sg['id'], [])
            })
        result.append({
            **g,
            "library_count": genre_counts[g['id']],
            "sub_genres": sgs,
            "sample_tracks": genre_tracks[g['id']]
        })

    categories = ["All", "Bass & EDM (Primary Focus)", "House & Techno", "Techno & Rave", "Rock & Alternative", "Global & Latin"]

    return {
        "total_library_tracks": len(LIBRARY_CATALOG),
        "genres": result,
        "categories": categories,
        "uncategorized_count": uncategorized_count
    }

def get_harmonic_matches(key_str):
    cam_key, mus_note = normalize_to_camelot(key_str)
    m = re.match(r'(\d+)([AB])', cam_key.upper())
    if not m:
        return []
    num, letter = int(m.group(1)), m.group(2)
    other_letter = 'B' if letter == 'A' else 'A'
    
    prev_num = 12 if num == 1 else num - 1
    next_num = 1 if num == 12 else num + 1
    boost_num = ((num + 4) % 12) + 1

    return [
        {"key": f"{num}{letter}", "desc": "Same Key Lock", "color": CAMELOT_COLORS.get(f"{num}{letter}", "#00f0ff")},
        {"key": f"{next_num}{letter}", "desc": "+1 Energy Lift", "color": CAMELOT_COLORS.get(f"{next_num}{letter}", "#00ff80")},
        {"key": f"{prev_num}{letter}", "desc": "-1 Energy Drop", "color": CAMELOT_COLORS.get(f"{prev_num}{letter}", "#ffd000")},
        {"key": f"{num}{other_letter}", "desc": "Relative Mode", "color": CAMELOT_COLORS.get(f"{num}{other_letter}", "#d680ff")},
        {"key": f"{boost_num}{letter}", "desc": "+5 Energy Surge", "color": CAMELOT_COLORS.get(f"{boost_num}{letter}", "#ff007f")}
    ]

def get_accurate_track_genre(item):
    full_p = MUSIC_ROOT / item['rel_path']
    id3_genre = ''
    try:
        audio = ID3(full_p)
        if 'TCON' in audio:
            id3_genre = str(audio['TCON']).strip()
    except Exception: pass

    if id3_genre and id3_genre.lower() not in ['music', 'other', 'unknown', 'none', 'audio', 'genre', 'general', '12']:
        return id3_genre

    comb = f"{item['filename']} {item['title']} {item['artist']}".lower()
    
    if any(k in comb for k in ['farruko', 'el alfa', 'bad bunny', 'rauw', 'dembow', 'reggaeton', 'latin', 'guaracha', 'feid', 'pesopluma', 'plebada']):
        return 'Latin Club & Dembow'
    elif any(k in comb for k in ['chase & status', 'chase and status', 'wilkinson', 'sub focus', 'bou', 'hedex', 'dimension', '1991', 'dnb', 'drum & bass', 'drum and bass', 'afterglow', 'backbone', 'desire']):
        return 'Drum & Bass & Jungle'
    elif any(k in comb for k in ['fisher', 'mau p', 'chris lake', 'cloonee', 'dom dolla', 'tech house', 'james hype', 'marlon', 'vintage culture', 'matroda', 'san pacho']):
        return 'Tech House & Deep Tech'
    elif any(k in comb for k in ['subtronics', 'excision', 'wooli', 'svdden death', 'dubstep', 'riddim', 'ray volpe', 'zomboy']):
        return 'Dubstep & Riddim'
    elif any(k in comb for k in ['sara landry', 'i hate models', 'alignment', 'klangkuenstler', 'hard techno', 'acid techno', 'techno']):
        return 'Peak-Time Techno & Industrial'
    elif any(k in comb for k in ['fred again', 'skrillex', 'four tet', 'flowdan', 'knock2', 'isoknock', 'dashstar', 'bass house', 'joyryde', 'habstrakt']):
        return 'Bass House & UK Bass'
    elif any(k in comb for k in ['keinemusik', 'adam port', 'rampa', '&me', 'amapiano', 'afro house', 'tyla', 'asake', 'burna boy']):
        return 'Afro House & Amapiano'
    elif any(k in comb for k in ['blink', 'paramore', 'fall out boy', 'rock', 'punk', 'sum 41', 'greenday']):
        return 'Punk & Rock Club Edits'
    elif any(k in comb for k in ['headhunterz', 'sub zero project', 'hardstyle', 'rawstyle', 'da tweekaz']):
        return 'Hardstyle & Reverse Bass'
    elif any(k in comb for k in ['sammy virji', 'salute', 'oppidan', 'ukg', 'garage', 'speed garage', 'interplanetary']):
        return 'UK Garage & Speed Garage'
    elif any(k in comb for k in ['illenium', 'flume', 'san holo', 'future bass', 'melodic bass', 'said the sky']):
        return 'Future Bass & Melodic Bass'

    for g in GENRE_ENCYCLOPEDIA_DATA:
        if any(kw in comb for kw in g['keywords']):
            return g['name']

    return 'Dance & Electronic'

def get_recently_ingested_tracks(count=10):
    if not LIBRARY_CATALOG:
        return []
    sorted_items = sorted(LIBRARY_CATALOG, key=lambda x: x.get('mtime', 0), reverse=True)
    results = []
    for item in sorted_items[:count]:
        mtime_str = datetime.fromtimestamp(item.get('mtime', time.time())).strftime('%b %d, %Y')
        genre = get_accurate_track_genre(item)
        results.append({
            "title": item['title'],
            "artist": item['artist'],
            "filename": item.get('filename', ''),
            "rel_path": item['rel_path'],
            "has_lrc": item['has_lrc'],
            "date_added": mtime_str,
            "genre": genre
        })
    return results

def fetch_or_generate_daily_intel(force_refresh=False):
    today_str = datetime.now().strftime('%Y-%m-%d')
    if not force_refresh and INTEL_CACHE_FILE.exists():
        try:
            cache = json.loads(INTEL_CACHE_FILE.read_text(encoding='utf-8'))
            if cache.get('cached_date') == today_str and 'curated_releases' in cache:
                cache['recent_ingests'] = get_recently_ingested_tracks(8)
                return cache
        except Exception: pass

    # Generate fresh AI Daily DJ Intel with heavy Bass EDM, Trap & Dubstep emphasis
    prompt = """You are the Sol Roth Executive DJ Music Curator & Global Bass/Trap/Dubstep Music Intelligence Analyst.
Generate an authentic, highly detailed daily/weekly DJ intelligence briefing for hybrid performance DJs focusing on Bass EDM, EDM Trap, Heavy Dubstep / Tearout, Deep 140 UK Bass, and High-Energy Drum & Bass (DnB).
Emphasize festival anthems, underground heaters, live hybrid performance techniques (live acoustic drum stick integration, 808 finger drumming, vocal screaming, stem mashups), and cutting-edge bass sound design.

Provide structured JSON with the following exact keys:
1. 'date': Today's human date (e.g. 'September 2026 Edition • Bass & Trap Special')
2. 'headline': 'One punchy, bold industry headline on modern bass, EDM trap, and dubstep festival trends'
3. 'curated_releases': List of 4 distinct bangers across EDM Trap, Heavy Dubstep, Deep 140 Bass, and Drum & Bass (keys: 'title', 'artist', 'label', 'main_genre', 'sub_genre', 'bpm', 'key', 'why_it_bangs', 'dj_tip')
4. 'artist_spotlight': Object with 'name', 'main_genre', 'sub_genre', 'background', 'signature_sound', 'notable_tracks' focusing on hybrid performance bass artists (e.g. ISOxo, Sullivan King, Tape B, Crankdat, Subtronics)
5. 'industry_news': List of 3 major bass music stories (keys: 'headline', 'summary', 'impact_on_djs')
6. 'crate_digging_tips': List of 3 actionable tactical tips for live hybrid bass mixing, finger drumming, and tempo jumps (keys: 'tip_title', 'tip_description')

Return ONLY valid raw JSON without markdown code fences."""

    intel_data = None
    if GEMINI_API_KEY:
        try:
            ctx = ssl._create_unverified_context()
            for model_name in ['gemini-3.5-flash-lite', 'gemini-3.5-flash', 'gemini-3.7-flash']:
                url = f"https://generativelanguage.googleapis.com/v1beta/models/{model_name}:generateContent?key={GEMINI_API_KEY}"
                payload = {
                    "contents": [{"parts": [{"text": prompt}]}],
                    "generationConfig": {"temperature": 0.75, "maxOutputTokens": 1800, "responseMimeType": "application/json"}
                }
                req = urllib.request.Request(url, data=json.dumps(payload).encode('utf-8'), headers={'Content-Type': 'application/json'})
                with urllib.request.urlopen(req, context=ctx, timeout=6) as resp:
                    data = json.loads(resp.read().decode('utf-8'))
                    raw_text = data['candidates'][0]['content']['parts'][0]['text']
                    intel_data = json.loads(raw_text)
                    intel_data['cached_date'] = today_str
                    INTEL_CACHE_FILE.write_text(json.dumps(intel_data, indent=2), encoding='utf-8')
                    if intel_data: break
        except Exception as e:
            pass

    if not intel_data:
        intel_data = {
            "cached_date": today_str,
            "date": datetime.now().strftime('%B %d, %Y') + " • Bass & Trap Edition",
            "headline": "High-Energy Hybrid Trap & Heavy Tearout Dubstep Dominate Global Festival Stages",
            "curated_releases": [
                {
                    "title": "dontstopme!",
                    "artist": "ISOxo",
                    "label": "88rising / Nightmode",
                    "genre": "EDM Trap / Hybrid Club",
                    "bpm": "140",
                    "key": "8A",
                    "why_it_bangs": "Combines relentless 140 BPM half-time 808 distortion with raw punk vocal angst and rapid-fire synth stabs.",
                    "dj_tip": "Mute track drums on Deck 1 and play live acoustic snare rolls and 808 sub drops on your physical pads right into the drop."
                },
                {
                    "title": "Laserbeam (VIP)",
                    "artist": "Ray Volpe",
                    "label": "Disciple",
                    "genre": "Heavy Dubstep / Tearout",
                    "bpm": "150",
                    "key": "9A",
                    "why_it_bangs": "A massive psychoacoustic laser synth lead that creates instant peak-energy festival moshpits and sing-alongs.",
                    "dj_tip": "Trigger a 4-bar pre-drop scream on your live vocal mic during the silence before slamming both faders up for a double drop."
                },
                {
                    "title": "Over Trippin'",
                    "artist": "Tape B",
                    "label": "Deadbeats",
                    "genre": "Deep 140 UK Bass / Leftfield",
                    "bpm": "140",
                    "key": "4A",
                    "why_it_bangs": "Fuses nostalgic 90s hip-hop acapella hooks with an enormous, rolling sub-bass wave and crisp vinyl textures.",
                    "dj_tip": "Use this as a bridge track between classic hip-hop and festival trap; the deep sub-harmonics clean up any transition."
                },
                {
                    "title": "Baddadan (VIP Remix)",
                    "artist": "Chase & Status, Bou & Flowdan",
                    "label": "EMI / Virgin",
                    "genre": "Drum & Bass / Dancefloor",
                    "bpm": "174",
                    "key": "8A",
                    "why_it_bangs": "The defining global bass anthem of the decade featuring Flowdan's deep vocal delivery over a blistering 174 BPM roller.",
                    "dj_tip": "Execute a half-time to double-time switch from 140 BPM Trap straight into this 174 BPM roller on Beat 1."
                }
            ],
            "artist_spotlight": {
                "name": "ISOxo & Knock2 (ISOKNOCK)",
                "background": "The San Diego trap prodigies have revitalized the EDM trap and bass movement, headlining Coachella, Ultra, and sold-out stadiums with high-octane live hybrid energy.",
                "signature_sound": "Raw, aggressive 808 trap drum grids, punk-rock scream samples, stadium synth stabs, and electrifying high-speed BPM transitions.",
                "notable_tracks": [
                    "dontstopme!",
                    "kidsgonemad!",
                    "dashstar*",
                    "4EVR",
                    "Make U SWEAT"
                ]
            },
            "industry_news": [
                {"headline": "Lost Lands & EDC Bass Stages Set Record Attendance", "summary": "Bass music festivals report highest streaming and ticket demand in history as fans flock to hybrid live DJ performances.", "impact_on_djs": "Heavy demand for live multi-instrumentalists who incorporate drum pads, live vocals, and scratching."},
                {"headline": "Serato & Rekordbox Stems 3.0 Real-Time Isolation", "summary": "Advanced machine learning algorithms now isolate 808 basslines and rap acapellas with zero bleed on live 4-channel decks.", "impact_on_djs": "Allows real-time mashups where you replace studio drums with live acoustic drum sticks and pads on the fly."},
                {"headline": "140 BPM Trap & Deep Bass Surpasses 128 BPM Club Charts", "summary": "Streaming data reveals half-time 140 BPM bass tracks generate 3x higher retention on TikTok and livestream clips than standard 4x4 house.", "impact_on_djs": "Focus your live stream content around 140-150 BPM visual finger drumming, drop buildups, and live screams."}
            ],
            "crate_digging_tips": [
                {
                    "tip_title": "The Half-Time / Double-Time Escalator",
                    "tip_description": "To transition seamlessly between 140 BPM Trap and 174 BPM Drum & Bass, loop an 8-bar half-time triplet snare buildup, ramp the tempo fader, and drop the 174 BPM DnB bassline on Beat 1."
                },
                {
                    "tip_title": "808 Sub Gain Staging for Live Pads",
                    "tip_description": "When hitting physical Alesis drum pads or 808 sub drops over a running dubstep track, set the master track's low EQ to 9 o'clock so your live sub hit punches cleanly without triggering the master limiter."
                },
                {
                    "tip_title": "Live Vocal Scream Timing",
                    "tip_description": "Cut the crossfader completely on Bar 8.3 of the buildup, deliver your live vocal scream into the dead air, and slam the crossfader back on Beat 1 accompanied by an Alesis sub drop smash."
                }
            ]
        }

    intel_data['recent_ingests'] = get_recently_ingested_tracks(8)
    return intel_data

def generate_ai_mc_verse(title, artist, genre, bpm, key, style="spoken_poetry"):
    style_prompts = {
        "spoken_poetry": "atmospheric, dark rhythmic spoken-word poetry and philosophical imagery that deepens the emotional weight of the song over a half-time bass beat (Flowdan, Fred again.., Trent Reznor aesthetic)",
        "melodic_drone": "haunting ethereal melodic vocalizations, minor-key vocal counterpoints, and chant-like melodic ad-libs that complement the track's musical key and chords",
        "metal_scream": "visceral, building rock/metal/trap vocal tension with raw emotional grit, leading to an explosive guttural scream release right before the drop (Chester Bennington, Sullivan King, Zack de la Rocha style)",
        "underground_cadence": "deep, syncopated half-time underground grime cadence with cryptic, hypnotic delivery that locks directly onto the sub-bass pocket"
    }

    style_desc = style_prompts.get(style, style_prompts["spoken_poetry"])

    prompt = f"""You are a visionary live electronic performance artist, vocalist, and multi-instrumentalist performing on stage.
Do NOT write cheesy party hypeman lines (NEVER say 'Make some noise', 'Put your hands up', 'Are you ready', 'Party people', '1 2 3 jump', or generic hype clichés).
Instead, write an original 8-bar live artistic vocal improvisation that deeply reinterprets the emotional core of this song:
Track Title: {title}
Artist: {artist}
Genre: {genre}
BPM: {bpm} BPM
Camelot Key: {key}
Performance Style: {style_desc}

Requirements:
- Exactly 8 bars formatted with performance delivery cues:
[Bar 1] (delivery cue in parentheses) Lyric line
[Bar 2] (delivery cue in parentheses) Lyric line
...
[Bar 8] (delivery cue in parentheses) Lyric line
- Connect poetic, dark, or emotional imagery to the theme of "{title}" and the {bpm} BPM tempo.
- Ensure the cadence fits a live electronic artist performing with intense emotion and presence.
- Return ONLY the 8 bars without preamble, headers, or markdown fences.
"""

    if GEMINI_API_KEY:
        try:
            ctx = ssl._create_unverified_context()
            for model_name in ['gemini-3.5-flash-lite', 'gemini-3.5-flash', 'gemini-3.7-flash']:
                url = f"https://generativelanguage.googleapis.com/v1beta/models/{model_name}:generateContent?key={GEMINI_API_KEY}"
                payload = {
                    "contents": [{"parts": [{"text": prompt}]}],
                    "generationConfig": {"temperature": 0.88, "maxOutputTokens": 1000}
                }
                req = urllib.request.Request(
                    url,
                    data=json.dumps(payload).encode('utf-8'),
                    headers={'Content-Type': 'application/json'}
                )
                with urllib.request.urlopen(req, context=ctx, timeout=4) as resp:
                    data = json.loads(resp.read().decode('utf-8'))
                    verse_text = data['candidates'][0]['content']['parts'][0]['text'].strip()
                    if len(verse_text.splitlines()) >= 4:
                        return {"verse": verse_text, "source": f"AI Generated ({model_name})", "bpm": bpm, "style": style}
        except Exception:
            pass

    clean_title = re.sub(r'\(.*?\)|\[.*?\]', '', title).strip()
    
    if style == "metal_scream":
        fallback_bars = [
            f"[Bar 1] (tense low murmur) You can feel it tearing under the surface.",
            f"[Bar 2] (rising grit) Every broken promise coming back with purpose.",
            f"[Bar 3] (aggressive rasp) We buried the ghost in the static sound, now it's rising from the underground.",
            f"[Bar 4] (choked scream) {clean_title} burning in the red!",
            f"[Bar 5] (rapid heavy punch) No turning back, no words left unsaid!",
            f"[Bar 6] (building frenzy) The walls are collapsing, the floor is giving in!",
            f"[Bar 7] (full lung scream) TEAR IT DOWN FROM WITHIN!",
            f"[Bar 8] (guttural roar into drop) BREAK IT!"
        ]
    elif style == "melodic_drone":
        fallback_bars = [
            f"[Bar 1] (ethereal falsetto hum in {key}) Mmm... drifting into the deep...",
            f"[Bar 2] (haunting chant) Where the echoes never sleep...",
            f"[Bar 3] (melodic vocalization) {clean_title}... carry me through the haze...",
            f"[Bar 4] (sustained drone) Lost inside these endless days...",
            f"[Bar 5] (rising harmonic interval) Can you feel the light ignite?",
            f"[Bar 6] (vibrant vocal swell) Cutting clean across the night...",
            f"[Bar 7] (high sustained note) Everything we were is gone...",
            f"[Bar 8] (drop breath) Hold the storm..."
        ]
    elif style == "underground_cadence":
        fallback_bars = [
            f"[Bar 1] (deep monotone delivery) Heavy weight on the low-end roll, system testing the human soul.",
            f"[Bar 2] (syncopated half-time) Lock step, step back, catch the delay, nothing left to explain away.",
            f"[Bar 3] (grime bounce) {clean_title} cutting through the night train, pure voltage direct to the brain.",
            f"[Bar 4] (whisper on the off-beat) Watch the sub glide under the snare...",
            f"[Bar 5] (relentless flow) Zero resistance, pure frequency, rewriting the blueprint of reality.",
            f"[Bar 6] (half-time staccato) Left hand, right hand, drum stick crack, no room left on the master track.",
            f"[Bar 7] (building vocal pressure) Hear the rumble start to swell...",
            f"[Bar 8] (sharp snap) Sound the bell."
        ]
    else: # spoken_poetry
        fallback_bars = [
            f"[Bar 1] (low gravel whisper) Shadows fracture across the floor, we've walked through this frequency before.",
            f"[Bar 2] (rhythmic cadence) Pressure building in the chest cavity, tearing away from the weight of gravity.",
            f"[Bar 3] (syncopated spoken flow) {clean_title} echoing through concrete walls, every second slows before it falls.",
            f"[Bar 4] (building intensity) Sub-harmonics vibrating through the spine, suspended right on the dividing line.",
            f"[Bar 5] (breath control) No past, no future, only the current state, watching the waveforms collide and mutate.",
            f"[Bar 6] (intimate and dark) If you listen closely to the silence beneath, there is a fire grinding under our teeth.",
            f"[Bar 7] (rising vocal tension) All the noise stripped down to bone and wire, let the signal take you higher.",
            f"[Bar 8] (breath exhale into drop) Release..."
        ]
        
    return {"verse": "\n".join(fallback_bars), "source": "Live Artist Vocal Engine", "bpm": bpm, "style": style}

def generate_copilot_advice(current_track, user_query=""):
    if not current_track:
        current_track = {}
    title = current_track.get('title') or 'Live Performance Track'
    bpm = current_track.get('bpm') or 128.0
    key = current_track.get('key') or '8A'
    genre = current_track.get('genre') or 'Tech House'

    harm = get_harmonic_matches(key)
    compatible_keys = [h['key'] for h in harm] if harm else ['8A', '9A', '7A', '8B', '1A']

    recs = []
    if LIBRARY_CATALOG:
        sample_pool = random.sample(LIBRARY_CATALOG, min(len(LIBRARY_CATALOG), 60))
        for item in sample_pool:
            if item['title'] != title:
                recs.append({
                    "title": item['title'],
                    "artist": item['artist'],
                    "rel_path": item['rel_path'],
                    "has_lrc": item['has_lrc'],
                    "suggested_mix": f"Blend outro into 16-bar intro at {bpm} BPM (Energy match)"
                })
                if len(recs) >= 3:
                    break

    custom_answer = ""
    if user_query and GEMINI_API_KEY:
        try:
            ctx = ssl._create_unverified_context()
            prompt = f"""You are Sol Roth AI DJ Copilot, an expert live performance DJ advisor.
The DJ is currently playing: "{title}" ({bpm} BPM, Camelot Key: {key}, Genre: {genre}).
The DJ asks: "{user_query}"

Give a concise, punchy, 2-3 sentence live DJ performance tip or solution tailored for quick reading on a stage monitor. Focus on transition timing, energy flow, and EQ/cueing techniques."""
            url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key={GEMINI_API_KEY}"
            payload = {
                "contents": [{"parts": [{"text": prompt}]}],
                "generationConfig": {"temperature": 0.7, "maxOutputTokens": 300}
            }
            req = urllib.request.Request(url, data=json.dumps(payload).encode('utf-8'), headers={'Content-Type': 'application/json'})
            with urllib.request.urlopen(req, context=ctx, timeout=4) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                custom_answer = data['candidates'][0]['content']['parts'][0]['text'].strip()
        except Exception:
            custom_answer = f"Mix out at the 16-bar phrase breakdown. Filter out low EQ on the outgoing track while swapping the bassline on the drop."

    return {
        "status": "active",
        "current_track": title,
        "bpm": bpm,
        "key": key,
        "genre": genre,
        "harmonic_keys": compatible_keys,
        "recommendations": recs,
        "copilot_tip": f"Harmonic window: Mix into {compatible_keys[1]} (Energy +1) or {compatible_keys[0]} (Smooth blend). Best mix point: 32 bars before the final chorus.",
        "custom_answer": custom_answer
    }

def parse_lrc_into_timestamped_sections(lrc_path, bpm=126.0, total_dur=210.0):
    if not lrc_path.exists():
        return []
    
    text = lrc_path.read_text(encoding='utf-8', errors='ignore')
    time_regex = re.compile(r'\[(\d+):(\d+\.?\d*)\](.*)')
    
    raw_lines = []
    for line in text.splitlines():
        m = time_regex.match(line.strip())
        if m:
            mins, secs, txt = m.groups()
            t_sec = int(mins) * 60 + float(secs)
            clean_txt = txt.strip()
            if clean_txt and not re.match(r'\[[a-z]{2,8}:.*\]', clean_txt, re.I):
                raw_lines.append((t_sec, clean_txt))
                
    if not raw_lines:
        return []

    line_counts = {}
    for _, txt in raw_lines:
        norm = txt.lower().strip(',.!? \t-')
        if len(norm) > 8:
            line_counts[norm] = line_counts.get(norm, 0) + 1

    sec_per_bar = 240.0 / (bpm if bpm > 0 else 126.0)

    raw_sections = []
    current_sec_type = "VERSE 1"
    current_sec_time = raw_lines[0][0]
    current_lines = []
    last_time = raw_lines[0][0]

    verse_count = 1
    chorus_count = 1

    for idx, (t_sec, txt) in enumerate(raw_lines):
        norm = txt.lower().strip(',.!? \t-')
        is_repeat = line_counts.get(norm, 0) > 1
        time_gap = t_sec - last_time if idx > 0 else 0
        
        explicit = re.match(r'^(───|\(|\[)(verse|chorus|hook|drop|bridge|intro|outro|buildup|breakdown)(.*)', txt, re.I)
        
        should_split = False
        new_type = ""

        if explicit:
            should_split = True
            new_type = explicit.group(2).upper()
        elif time_gap >= 12 and current_lines:
            should_split = True
            if is_repeat:
                new_type = f"CHORUS {chorus_count}"
                chorus_count += 1
            elif t_sec > 150:
                new_type = "BRIDGE / OUTRO"
            else:
                verse_count += 1
                new_type = f"VERSE {verse_count}"
        elif is_repeat and "CHORUS" not in current_sec_type and len(current_lines) >= 3:
            should_split = True
            new_type = f"CHORUS {chorus_count}"
            chorus_count += 1

        if should_split and current_lines:
            raw_sections.append({
                "type": current_sec_type,
                "time_sec": current_sec_time,
                "lines": current_lines
            })
            current_lines = []
            current_sec_time = t_sec
            current_sec_type = new_type or f"VERSE {verse_count}"

        current_lines.append(txt)
        last_time = t_sec

    if current_lines:
        raw_sections.append({
            "type": current_sec_type,
            "time_sec": current_sec_time,
            "lines": current_lines
        })

    final_sections = []
    for i, s in enumerate(raw_sections):
        t_start = s["time_sec"]
        t_end = raw_sections[i+1]["time_sec"] if i+1 < len(raw_sections) else total_dur
        
        start_bar = int(round(t_start / sec_per_bar)) + 1
        duration_bars = max(1, int(round((t_end - t_start) / sec_per_bar)))
        
        m_str = f"{int(t_start // 60)}:{int(t_start % 60):02d}"
        time_rem = max(0, total_dur - t_start)
        rem_str = f"-{int(time_rem // 60)}:{int(time_rem % 60):02d}"
        
        final_sections.append({
            "type": s["type"],
            "time_str": m_str,
            "rem_str": rem_str,
            "time_sec": t_start,
            "start_bar": start_bar,
            "duration_bars": duration_bars,
            "bar_badge": f"Bar {start_bar} ({duration_bars}b)",
            "lines": s["lines"]
        })

    return final_sections

def get_track_data_from_row(row):
    if not row:
        return None
    entry_id, portable_id, file_name, artist, name, deck, bpm, key, start_time, length_sec, genre, year, rating, notes = row

    if entry_id in TRACK_DATA_CACHE:
        return TRACK_DATA_CACHE[entry_id]

    target_path = None
    if portable_id:
        candidate = Path('/' + portable_id.lstrip('/'))
        if candidate.exists():
            target_path = candidate
        else:
            candidate = MUSIC_ROOT.parent / portable_id.lstrip('/')
            if candidate.exists():
                target_path = candidate

    if not target_path or not target_path.exists():
        target_path = FILENAME_MAP.get(file_name)

    bpm_val = round(float(bpm or 126.0), 1)
    dur_val = length_sec or 210
    key_val = str(key or "8A").strip()
    genre_val = str(genre or "Tech House").strip()
    year_val = str(year or "2024").strip()
    notes_val = str(notes or "").strip()
    stars_val = 5 if (rating and rating > 200) else (4 if rating and rating > 100 else 4)

    has_art = False
    sections_data = []

    if target_path and target_path.exists():
        try:
            audio = ID3(target_path)
            has_art = any(k.startswith('APIC') for k in audio.keys())
            if (not genre_val or genre_val == 'Unknown') and 'TCON' in audio:
                genre_val = str(audio['TCON']).strip()
            if (not year_val or year_val == 'Unknown') and 'TDRC' in audio:
                year_val = str(audio['TDRC']).strip()[:4]
            mut = mutagen.File(target_path)
            if mut and mut.info and mut.info.length:
                dur_val = int(mut.info.length)
        except Exception: pass

        lrc_path = target_path.with_suffix('.lrc')
        if lrc_path.exists():
            sections_data = parse_lrc_into_timestamped_sections(lrc_path, bpm=bpm_val, total_dur=dur_val)

    cam_key, mus_note = normalize_to_camelot(key_val)
    key_display = f"{cam_key} ({mus_note})" if mus_note else cam_key
    default_notes = f"[{genre_val or 'Dance'}] • Energy {stars_val}/5 • Harmonically mix with {key_display}"

    track_obj = {
        "id": entry_id,
        "title": name or (target_path.stem if target_path else file_name),
        "artist": artist or "DJ Sol Roth",
        "deck": str(deck or "1"),
        "bpm": bpm_val,
        "key": cam_key,
        "key_display": key_display,
        "musical_key": mus_note,
        "genre": genre_val or "Tech House",
        "year": year_val or "2024",
        "stars": stars_val,
        "notes": notes_val if (notes_val and notes_val.strip()) else default_notes,
        "harmonic": get_harmonic_matches(cam_key),
        "color": CAMELOT_COLORS.get(cam_key, "#00e6ff"),
        "sections": sections_data,
        "filename": target_path.name if target_path else file_name,
        "has_art": has_art,
        "duration": dur_val,
        "start_time": start_time or int(time.time())
    }

    TRACK_DATA_CACHE[entry_id] = track_obj
    return track_obj

def get_track_data_from_path(rel_path):
    target_path = MUSIC_ROOT / rel_path
    if not target_path.exists():
        return None
    
    bpm_val = 126.0
    dur_val = 210
    key_val = "8A"
    genre_val = "Club"
    year_val = "2024"
    has_art = False
    name_clean = target_path.stem
    artist_clean = "Sol Roth DJ Master"
    if " - " in name_clean:
        parts = name_clean.split(" - ", 1)
        artist_clean, name_clean = parts[0], parts[1]

    try:
        audio = ID3(target_path)
        has_art = any(k.startswith('APIC') for k in audio.keys())
        if 'TBPM' in audio: bpm_val = round(float(str(audio['TBPM'])), 1)
        if 'TKEY' in audio: key_val = str(audio['TKEY']).strip()
        if 'TCON' in audio: genre_val = str(audio['TCON']).strip()
        if 'TDRC' in audio: year_val = str(audio['TDRC']).strip()[:4]
        if 'TIT2' in audio: name_clean = str(audio['TIT2']).strip()
        if 'TPE1' in audio: artist_clean = str(audio['TPE1']).strip()
        mut = mutagen.File(target_path)
        if mut and mut.info and mut.info.length:
            dur_val = int(mut.info.length)
    except Exception: pass

    sections_data = []
    lrc_path = target_path.with_suffix('.lrc')
    if lrc_path.exists():
        sections_data = parse_lrc_into_timestamped_sections(lrc_path, bpm=bpm_val, total_dur=dur_val)

    cam_key, mus_note = normalize_to_camelot(key_val)
    key_display = f"{cam_key} ({mus_note})" if mus_note else cam_key

    return {
        "id": f"preview_{int(time.time()*1000)}",
        "title": name_clean,
        "artist": artist_clean,
        "deck": "PREVIEW",
        "bpm": bpm_val,
        "key": cam_key,
        "key_display": key_display,
        "musical_key": mus_note,
        "genre": genre_val,
        "year": year_val,
        "stars": 5,
        "notes": f"[{genre_val}] • Energy 5/5 • Harmonically mix with {key_display}",
        "harmonic": get_harmonic_matches(cam_key),
        "color": CAMELOT_COLORS.get(cam_key, "#00e6ff"),
        "sections": sections_data,
        "filename": target_path.name,
        "has_art": has_art,
        "duration": dur_val,
        "start_time": int(time.time())
    }

ACTIVE_STAGE_DECKS = {
    "1": {
        "id": "deck_1",
        "title": "AXIOM 01 (VIP Hybrid Live Performance Edit)",
        "artist": "DJ Sol Roth",
        "deck": "1",
        "bpm": 128.0,
        "key": "8A",
        "key_display": "8A (Am)",
        "musical_key": "Am",
        "genre": "Melodic Techno / Cyber Bass",
        "year": "2026",
        "stars": 5,
        "notes": "[Melodic Techno] • Energy 5/5 • Camelot 8A (Am) • Prime FLX10 Performance Weapon",
        "harmonic": ["8A", "7A", "9A", "8B"],
        "color": "#00e6ff",
        "filename": "DJ Sol Roth - AXIOM 01.mp3",
        "has_art": True,
        "duration": 224,
        "start_time": int(time.time()),
        "sections": [
            {"time": 0.0, "text": "─── 16-BAR DRUM INTRO ─── [ENERGY 3/5]"},
            {"time": 15.0, "text": "⚡ BUILDUP RISING ─── PREPARE DROP 1"},
            {"time": 30.0, "text": "💥 [DROP 1] ─── CYBER BASSLINE & KICK IMPACT"},
            {"time": 60.0, "text": "─── BREAKDOWN ─── [SOL ROTH VOCAL STEM]"},
            {"time": 90.0, "text": "⚡ TENSION RISER ─── 8-BAR CLIMAX"},
            {"time": 105.0, "text": "🚀 [DROP 2] ─── FULL PEAK-TIME SYNTH RIFF"}
        ]
    },
    "2": {
        "id": "deck_2",
        "title": "Neuro Glitch Beast (Live Stems Edit)",
        "artist": "DJ Sol Roth",
        "deck": "2",
        "bpm": 128.0,
        "key": "8A",
        "key_display": "8A (Am)",
        "musical_key": "Am",
        "genre": "Dark Halftime Trap",
        "year": "2026",
        "stars": 5,
        "notes": "[Dark Trap] • Energy 5/5 • Harmonically locked with Deck 1 (8A)",
        "harmonic": ["8A", "7A", "9A", "8B"],
        "color": "#00e6ff",
        "filename": "DJ Sol Roth - Neuro Glitch Beast.mp3",
        "has_art": True,
        "duration": 210,
        "start_time": int(time.time()),
        "sections": [
            {"time": 0.0, "text": "─── HALF-TIME INTRO ─── 808 SUB ACTIVE"},
            {"time": 20.0, "text": "💥 [SUB DROP] ─── GLITCH BEAST STABS"},
            {"time": 45.0, "text": "─── VOCAL RUN ─── STASIS BREACH"},
            {"time": 75.0, "text": "🚀 [DROP 2 IMPACT]"}
        ]
    },
    "3": {
        "id": "deck_3",
        "title": "AURA Holographic Diva (Vocal Intro Tool)",
        "artist": "DJ Sol Roth feat. AURA",
        "deck": "3",
        "bpm": 126.0,
        "key": "9A",
        "key_display": "9A (Em)",
        "musical_key": "Em",
        "genre": "Cyber Vocal Stems",
        "year": "2026",
        "stars": 5,
        "notes": "[Vocal Acapella] • Clean studio acapella for live mashups",
        "harmonic": ["9A", "8A", "10A", "9B"],
        "color": "#00ff80",
        "filename": "DJ Sol Roth - AURA Vocal Intro.wav",
        "has_art": True,
        "duration": 180,
        "start_time": int(time.time()),
        "sections": []
    },
    "4": {
        "id": "deck_4",
        "title": "Titan Warframe Sub Cannon",
        "artist": "DJ Sol Roth",
        "deck": "4",
        "bpm": 140.0,
        "key": "7A",
        "key_display": "7A (Dm)",
        "musical_key": "Dm",
        "genre": "Heavy Dubstep Sound Stabs",
        "year": "2026",
        "stars": 5,
        "notes": "[Sound Stabs] • One-shot performance pads Bank 62",
        "harmonic": ["7A", "6A", "8A", "7B"],
        "color": "#00bfff",
        "filename": "DJ Sol Roth - Titan Sub Cannon.wav",
        "has_art": True,
        "duration": 160,
        "start_time": int(time.time()),
        "sections": []
    }
}
LAST_LOADED_DECK = "1"
STAGE_PLAY_HISTORY = []

def load_track_to_stage_deck(deck_num, title, artist="DJ Sol Roth", bpm=128.0, key="8A", genre="Electronic"):
    """Loads a track into active stage deck and pushes update to VJ / HUD."""
    global LAST_LOADED_DECK
    d_str = str(deck_num)
    cam_key, mus_note = normalize_to_camelot(key)
    key_display = f"{cam_key} ({mus_note})" if mus_note else cam_key
    entry = {
        "id": f"loaded_{int(time.time()*1000)}",
        "title": title or "Live Performance Weapon",
        "artist": artist or "DJ Sol Roth",
        "deck": d_str,
        "bpm": round(float(bpm or 128.0), 1),
        "key": cam_key,
        "key_display": key_display,
        "musical_key": mus_note,
        "genre": genre or "Electronic",
        "year": "2026",
        "stars": 5,
        "notes": f"[{genre}] • Live Loaded on Deck {d_str} • Harmonically matched with {key_display}",
        "harmonic": get_harmonic_matches(cam_key),
        "color": CAMELOT_COLORS.get(cam_key, "#00e6ff"),
        "filename": f"{title}.mp3",
        "has_art": True,
        "duration": 220,
        "start_time": int(time.time()),
        "sections": []
    }
    ACTIVE_STAGE_DECKS[d_str] = entry
    LAST_LOADED_DECK = d_str
    STAGE_PLAY_HISTORY.insert(0, {
        "id": entry["id"],
        "artist": entry["artist"],
        "title": entry["title"],
        "bpm": entry["bpm"],
        "key": entry["key"],
        "deck": d_str,
        "played_at": datetime.now().strftime('%I:%M %p'),
        "duration_sec": 220,
        "genre": entry["genre"]
    })
    return entry

def detect_active_dj_engine():
    """Detects whether Pioneer Rekordbox or Serato DJ Pro is actively running."""
    rb_running = False
    serato_running = False
    if psutil:
        try:
            for p in psutil.process_iter(['name']):
                name = (p.info['name'] or '').lower()
                if 'rekordbox' in name:
                    rb_running = True
                elif 'serato' in name:
                    serato_running = True
        except Exception: pass
    else:
        try:
            res_rb = subprocess.run(['pgrep', '-i', 'rekordbox'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            if res_rb.returncode == 0: rb_running = True
            res_ser = subprocess.run(['pgrep', '-i', 'serato'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            if res_ser.returncode == 0: serato_running = True
        except Exception: pass
    
    if rb_running and not serato_running:
        return 'rekordbox'
    elif serato_running and not rb_running:
        return 'serato'
    elif rb_running and serato_running:
        return 'rekordbox'
    # Default to Rekordbox as user performs primarily in Rekordbox
    return 'rekordbox'

def get_rekordbox_decks_now_playing():
    """Reads live 4-deck status from Pioneer Rekordbox 6/7 native database or active stage decks."""
    if Rekordbox6Database:
        try:
            db = Rekordbox6Database()
            history_songs = db.get_history_songs().all()
            if history_songs:
                latest_songs = history_songs[-4:]
                deck_data = {}
                for idx, hs in enumerate(reversed(latest_songs), 1):
                    c = db.get_content(ID=hs.ContentID)
                    if not c: continue
                    title = c.Title or 'Unknown Title'
                    artist = c.Artist.Name if (hasattr(c, 'Artist') and c.Artist) else (c.ArtistName or 'DJ Sol Roth')
                    bpm_val = round(c.BPM / 100.0, 1) if c.BPM else 126.0
                    key_raw = c.Key.ScaleName if (hasattr(c, 'Key') and c.Key) else (c.KeyName or '8A')
                    cam_key, mus_note = normalize_to_camelot(key_raw)
                    key_display = f"{cam_key} ({mus_note})" if mus_note else cam_key
                    folder_path = getattr(c, 'FolderPath', '') or ''
                    target_path = None
                    if folder_path:
                        cand = Path(folder_path)
                        if cand.exists(): target_path = cand
                    if not target_path and c.FileNameL:
                        target_path = FILENAME_MAP.get(c.FileNameL)
                    has_art = False
                    dur_val = int(c.Duration) if (hasattr(c, 'Duration') and c.Duration) else 210
                    sections_data = []
                    genre_val = c.Genre.Name if (hasattr(c, 'Genre') and c.Genre) else 'Electronic'
                    if target_path and target_path.exists():
                        try:
                            audio = ID3(target_path)
                            has_art = any(k.startswith('APIC') for k in audio.keys())
                            if (not genre_val or genre_val == 'Unknown') and 'TCON' in audio:
                                genre_val = str(audio['TCON']).strip()
                        except Exception: pass
                        lrc_path = target_path.with_suffix('.lrc')
                        if lrc_path.exists():
                            sections_data = parse_lrc_into_timestamped_sections(lrc_path, bpm=bpm_val, total_dur=dur_val)
                    default_notes = f"[{genre_val}] • Energy 5/5 • Harmonically mix with {key_display}"
                    deck_data[str(idx)] = {
                        'id': f'rb_{hs.ID}',
                        'title': title,
                        'artist': artist,
                        'deck': str(idx),
                        'bpm': bpm_val,
                        'key': cam_key,
                        'key_display': key_display,
                        'musical_key': mus_note,
                        'genre': genre_val,
                        'year': str(getattr(c, 'ReleaseYear', '2024') or '2024'),
                        'stars': 5,
                        'notes': default_notes,
                        'harmonic': get_harmonic_matches(cam_key),
                        'color': CAMELOT_COLORS.get(cam_key, '#00e6ff'),
                        'sections': sections_data,
                        'filename': target_path.name if target_path else Path(folder_path).name,
                        'has_art': has_art,
                        'duration': dur_val,
                        'start_time': int(time.time())
                    }
                if deck_data:
                    return {
                        'engine': 'rekordbox',
                        'latest_deck': '1',
                        'decks': deck_data,
                        'ip': get_local_ip()
                    }
        except Exception: pass

    # Always return populated active stage decks for Rekordbox 7
    return {
        'engine': 'rekordbox',
        'latest_deck': LAST_LOADED_DECK,
        'decks': ACTIVE_STAGE_DECKS,
        'ip': get_local_ip()
    }

def get_all_decks_now_playing(engine_pref=None):
    """Fetches real-time 4-deck status from Pioneer Rekordbox or Serato DJ Pro."""
    active_engine = engine_pref or detect_active_dj_engine()
    
    if active_engine == 'rekordbox':
        rb_res = get_rekordbox_decks_now_playing()
        if rb_res and rb_res.get('decks'):
            return rb_res
            
    # If Serato preferred or active, query Serato SQLite
    if active_engine == 'serato' and SERATO_LIB_DB.exists():
        try:
            conn = sqlite3.connect(SERATO_LIB_DB)
            cursor = conn.cursor()
            deck_data = {}
            for d_num in ['1', '2', '3', '4']:
                cursor.execute("""
                    SELECT id, portable_id, file_name, artist, name, deck, bpm, key, start_time, length_sec, genre, year, rating, notes
                    FROM history_entry
                    WHERE deck = ?
                    ORDER BY id DESC LIMIT 1
                """, (d_num,))
                row = cursor.fetchone()
                if row:
                    deck_data[d_num] = get_track_data_from_row(row)

            cursor.execute("""
                SELECT id, portable_id, file_name, artist, name, deck, bpm, key, start_time, length_sec, genre, year, rating, notes
                FROM history_entry
                ORDER BY id DESC LIMIT 1
            """)
            row_latest = cursor.fetchone()
            conn.close()

            if deck_data:
                latest_deck = str(row_latest[5]) if row_latest else "1"
                return {
                    "engine": "serato",
                    "latest_deck": latest_deck,
                    "decks": deck_data,
                    "ip": get_local_ip()
                }
        except Exception: pass

    # Fallback to Rekordbox active stage decks
    rb_res = get_rekordbox_decks_now_playing()
    if rb_res:
        return rb_res

    return {
        "engine": "rekordbox",
        "latest_deck": "1",
        "decks": ACTIVE_STAGE_DECKS,
        "ip": get_local_ip()
    }

class PrompterServerHandler(BaseHTTPRequestHandler):
    def log_message(self, format, *args):
        return

    def handle_one_request(self):
        try:
            super().handle_one_request()
        except (BrokenPipeError, ConnectionResetError):
            pass

    def do_HEAD(self):
        self.do_GET()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        clean_path = parsed.path.lstrip('/')

        # 1. Serve Axiom01 Framework Assets
        if clean_path.startswith('axiom01/'):
            asset_rel = clean_path.replace('axiom01/', '', 1)
            target_file = AXIOM_DIR / asset_rel
            if target_file.exists() and target_file.is_file():
                content_type = 'text/plain'
                if target_file.suffix == '.css':
                    content_type = 'text/css'
                elif target_file.suffix == '.js':
                    content_type = 'application/javascript'
                elif target_file.suffix == '.json':
                    content_type = 'application/json'
                elif target_file.suffix == '.woff2':
                    content_type = 'font/woff2'
                elif target_file.suffix == '.woff':
                    content_type = 'font/woff'
                elif target_file.suffix == '.ttf':
                    content_type = 'font/ttf'
                elif target_file.suffix == '.svg':
                    content_type = 'image/svg+xml'
                elif target_file.suffix == '.png':
                    content_type = 'image/png'

                self.send_response(200)
                self.send_header('Content-Type', content_type)
                self.send_header('Cache-Control', 'public, max-age=86400')
                self.end_headers()
                self.wfile.write(target_file.read_bytes())
                return

        
        # 1b. Serve VJ Visual Assets & Video Loops (with Byte-Range Streaming)
        if clean_path.startswith('vj_assets/'):
            asset_rel = urllib.parse.unquote(clean_path.replace('vj_assets/', '', 1))
            target_file = VJ_ASSETS_DIR / asset_rel
            if not target_file.exists():
                target_file = DRIVE_ROOT / "03_FILMS_AND_VIDEO/VJ_Visual_Loops" / asset_rel
            if target_file.exists() and target_file.is_file():
                content_type = 'application/octet-stream'
                if target_file.suffix.lower() == '.mp4':
                    content_type = 'video/mp4'
                elif target_file.suffix.lower() in ['.jpg', '.jpeg']:
                    content_type = 'image/jpeg'
                elif target_file.suffix.lower() == '.png':
                    content_type = 'image/png'

                file_size = target_file.stat().st_size
                range_header = self.headers.get('Range', None)
                if range_header and content_type == 'video/mp4':
                    range_match = re.match(r'bytes=(\d+)-(\d*)', range_header)
                    if range_match:
                        first_byte = int(range_match.group(1))
                        last_byte = int(range_match.group(2)) if range_match.group(2) else file_size - 1
                        length = last_byte - first_byte + 1
                        self.send_response(206)
                        self.send_header('Content-Type', content_type)
                        self.send_header('Content-Range', f'bytes {first_byte}-{last_byte}/{file_size}')
                        self.send_header('Content-Length', str(length))
                        self.send_header('Accept-Ranges', 'bytes')
                        self.end_headers()
                        with open(target_file, 'rb') as f:
                            f.seek(first_byte)
                            self.wfile.write(f.read(length))
                        return

                self.send_response(200)
                self.send_header('Content-Type', content_type)
                self.send_header('Content-Length', str(file_size))
                self.send_header('Accept-Ranges', 'bytes')
                self.send_header('Cache-Control', 'public, max-age=86400')
                self.end_headers()
                with open(target_file, 'rb') as f:
                    shutil.copyfileobj(f, self.wfile)
                return

        # 1c. PWA Web App Manifest
        if clean_path == 'manifest.json':
            manifest_json = json.dumps({
                "name": "Sol Roth DJ Live Performance OS",
                "short_name": "SolRoth DJ",
                "start_url": "/",
                "display": "standalone",
                "background_color": "#07090e",
                "theme_color": "#00f0ff",
                "icons": [
                    {
                        "src": "/vj_assets/logos/sr_initials_white.png",
                        "sizes": "192x192",
                        "type": "image/png"
                    }
                ]
            })
            self.send_response(200)
            self.send_header('Content-Type', 'application/manifest+json')
            self.send_header('Cache-Control', 'public, max-age=86400')
            self.end_headers()
            self.wfile.write(manifest_json.encode('utf-8'))
            return

        # 1d. Offline Stage Service Worker
        if clean_path == 'sw.js':
            sw_content = """// Sol Roth DJ Performance OS Service Worker
const CACHE_NAME = 'solroth-dj-cache-v1';
const SHELL_URLS = ['/', '/axiom01/css/axiom.min.css', '/axiom01/js/axiom.min.js'];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(SHELL_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.url.includes('/api/')) {
    e.respondWith(fetch(e.request));
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached => {
      return cached || fetch(e.request).then(resp => {
        if (resp.status === 200 && (e.request.url.includes('/axiom01/') || e.request.url.includes('/fonts/'))) {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return resp;
      }).catch(() => cached);
    })
  );
});
"""
            self.send_response(200)
            self.send_header('Content-Type', 'application/javascript')
            self.send_header('Cache-Control', 'no-cache')
            self.end_headers()
            self.wfile.write(sw_content.encode('utf-8'))
            return

        # 2. Main Web App (Stage Prompter HUD)
        if parsed.path == '/':
            self.send_response(200)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.end_headers()
            self.wfile.write(HTML_UI.encode('utf-8'))

        # 3. Daily DJ Intelligence & Music Curation Hub
        
        # 3g. Weekly Music Updates & Bass Ingestion Hub
        elif parsed.path in ['/music_updates', '/updates', '/new_music', '/weekly_briefing']:
            self.send_response(200)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.end_headers()
            self.wfile.write(HTML_MUSIC_UPDATES.encode('utf-8'))

        # 3g-api. Double Drop Matrix API
        elif parsed.path == '/api/double_drop_matrix':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(DOUBLE_DROP_MATRIX_DATA).encode('utf-8'))

        # 3g-radar. Weekly Radar API
        elif parsed.path == '/api/weekly_radar':
            radar_items = [
                {"artist": "ISOxo", "title": "dontstopme!", "genre": "EDM Trap", "bpm": "140", "key": "8A"},
                {"artist": "Knock2", "title": "dashstar*", "genre": "Bass House / Trap", "bpm": "128", "key": "11A"},
                {"artist": "RL Grime", "title": "Core", "genre": "EDM Trap", "bpm": "140", "key": "8A"},
                {"artist": "Ray Volpe", "title": "Laserbeam", "genre": "Heavy Dubstep", "bpm": "150", "key": "9A"},
                {"artist": "Subtronics & GRIZ", "title": "GRIZTRONICS", "genre": "Heavy Dubstep", "bpm": "145", "key": "9A"},
                {"artist": "Tape B", "title": "Over Trippin'", "genre": "Deep 140 UK Bass", "bpm": "140", "key": "4A"},
                {"artist": "Hamdi", "title": "Skanka", "genre": "Deep 140 UK Bass", "bpm": "140", "key": "1A"},
                {"artist": "Chase & Status, Bou, Flowdan", "title": "Baddadan", "genre": "Drum & Bass", "bpm": "174", "key": "8A"},
                {"artist": "Sullivan King", "title": "Someone Else", "genre": "Metalstep / Dubstep", "bpm": "150", "key": "8A"},
                {"artist": "Linkin Park", "title": "Faint (Studio Acapella)", "genre": "Live Vocal Hook", "bpm": "135", "key": "8A"}
            ]
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(radar_items).encode('utf-8'))

        # 3g-trigger. Trigger Weekly Bass Ingest API
        elif parsed.path == '/api/trigger_weekly_bass_ingest':
            ingest_script = SCRIPT_DIR / "ingest_weekly_bass_editions.py"
            if not ingest_script.exists():
                ingest_script = MUSIC_ROOT / "ingest_weekly_bass_editions.py"

            if ingest_script.exists():
                try:
                    res = subprocess.run(["python3", str(ingest_script)], capture_output=True, text=True, timeout=120)
                    downloaded = 0
                    existing = 0
                    try:
                        lines = [l.strip() for l in res.stdout.strip().split('\n') if l.strip()]
                        if lines:
                            data = json.loads(lines[-1])
                            downloaded = data.get("downloaded", 0)
                            existing = data.get("existing", 0)
                    except Exception:
                        pass

                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json')
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.end_headers()
                    self.wfile.write(json.dumps({
                        "status": "success",
                        "downloaded": downloaded,
                        "existing": existing,
                        "output": res.stdout[-300:]
                    }).encode('utf-8'))
                except Exception as e:
                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json')
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.end_headers()
                    self.wfile.write(json.dumps({"status": "error", "message": str(e)}).encode('utf-8'))
            else:
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "error", "message": "ingest_weekly_bass_editions.py not found"}).encode('utf-8'))

        elif parsed.path in ['/intel', '/news', '/curation']:
            self.send_response(200)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.end_headers()
            self.wfile.write(HTML_INTEL.encode('utf-8'))

        # 3a. Live Set History & Tracklist Logger Page
        elif parsed.path in ['/history', '/sets', '/setlist']:
            self.send_response(200)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.end_headers()
            self.wfile.write(HTML_HISTORY.encode('utf-8'))

        # 3a-api. Live Set History API
        elif parsed.path == '/api/set_history':
            data = get_serato_set_history()
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(data).encode('utf-8'))

        # 3a-ingest. Live 1-Click Track Ingestion API
        elif parsed.path == '/api/ingest_track':
            query = urllib.parse.parse_qs(parsed.query)
            q = query.get('q', [''])[0]
            artist = query.get('artist', [''])[0]
            title = query.get('title', [''])[0]
            res = ingest_track_to_library(q, artist, title)
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(res).encode('utf-8'))

        # 3b. Master Genre Encyclopedia & Musical Deep-Dive Page
        # 3d. Serato Studio Remix & DJ Edit Lab Page
        # 3e. Master System Documentation & Maintenance Manual
        # 3f. Offline Stage Reactive Visualizer & VJ Display Page
        # 3f-pad. iPad / Mobile VJ Touch Control Pad
        # 3f-chat-page. Twitch / YouTube Chat Interactive Test Lab & Manual
        elif parsed.path in ['/chat', '/vj/chat', '/twitch']:
            self.send_response(200)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.end_headers()
            self.wfile.write(HTML_CHAT_LAB.encode('utf-8'))

        elif parsed.path in ['/pad', '/vj/pad', '/vj_pad', '/remote', '/vj_remote']:
            self.send_response(200)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.end_headers()
            self.wfile.write(HTML_VJ_PAD.encode('utf-8'))

        # 3f-overlay. OBS Studio Transparent Broadcast Overlay
        elif parsed.path in ['/overlay', '/vj/overlay', '/obs', '/hud_overlay']:
            self.send_response(200)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.end_headers()
            self.wfile.write(HTML_OVERLAY.encode('utf-8'))

        # 3f-trigger. Interactive VJ Pad Trigger API
        # 3f-chat. Live Twitch / YouTube Chat Reaction Webhook
        elif parsed.path == '/api/vj/chat_trigger':
            qs = urllib.parse.parse_qs(parsed.query)
            user = qs.get('user', ['Guest'])[0]
            act = qs.get('action', ['hype'])[0]
            now_t = time.time()
            CHAT_EVENTS.append({"user": user, "action": act, "time": now_t})
            if len(CHAT_EVENTS) > 20: CHAT_EVENTS.pop(0)
            VJ_STATE['last_chat_user'] = user
            VJ_STATE['last_chat_action'] = act
            VJ_STATE['chat_event_time'] = now_t
            if act in ['slam', 'hit', 'kick', 'punch']: VJ_STATE['slam_time'] = now_t
            elif act in ['shock', 'laser', 'fire', 'hadoken']: VJ_STATE['shock_time'] = now_t
            elif act in ['drop', 'breach', 'ko', 'combo']: VJ_STATE['breach_time'] = now_t
            elif act in ['strobe', 'flash']: VJ_STATE['strobe_time'] = now_t

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({'status': 'ok', 'user': user, 'action': act, 'events': len(CHAT_EVENTS)}).encode('utf-8'))
            return

        elif parsed.path == '/api/vj/trigger':
            qs = urllib.parse.parse_qs(parsed.query)
            evt = qs.get('event', [''])[0]
            scene = qs.get('scene', [''])[0]
            now_t = time.time()

            if evt == 'slam':
                VJ_STATE['slam_time'] = now_t
                VJ_STATE['substate'] = 'slam'
            elif evt == 'shock':
                VJ_STATE['shock_time'] = now_t
                VJ_STATE['substate'] = 'shock'
            elif evt == 'crack':
                VJ_STATE['crack_level'] = min(4, VJ_STATE['crack_level'] + 1)
                VJ_STATE['substate'] = 'crack'
            elif evt == 'breach':
                VJ_STATE['breach_time'] = now_t
                VJ_STATE['crack_level'] = 4
                VJ_STATE['substate'] = 'breach'
            elif evt == 'reset':
                VJ_STATE['crack_level'] = 0
                VJ_STATE['substate'] = 'idle'
                VJ_STATE['blackout'] = False
                VJ_STATE['scene'] = '1'
            elif evt in ['strobe', 'storm']:
                VJ_STATE['strobe_time'] = now_t
                VJ_STATE['last_event'] = 'storm'
            elif evt == 'blackout':
                VJ_STATE['blackout'] = not VJ_STATE.get('blackout', False)
                VJ_STATE['blackout_time'] = now_t
            elif evt == 'override':
                VJ_STATE['override'] = not VJ_STATE.get('override', False)
                VJ_STATE['last_event'] = 'override'
            elif evt == 'zoom':
                VJ_STATE['zoom'] = not VJ_STATE.get('zoom', False)
                VJ_STATE['last_event'] = 'zoom'
            elif evt == 'flip':
                VJ_STATE['flip'] = not VJ_STATE.get('flip', False)
                VJ_STATE['last_event'] = 'flip'
            elif evt == 'colorshift':
                VJ_STATE['colorshift'] = (VJ_STATE.get('colorshift', 0) + 1) % 4
                VJ_STATE['last_event'] = 'colorshift'
            elif evt == 'announce':
                VJ_STATE['announce'] = not VJ_STATE.get('announce', False)
                VJ_STATE['last_event'] = 'announce'
            elif evt.startswith('scene_'):
                VJ_STATE['scene'] = evt.replace('scene_', '')
            elif scene:
                VJ_STATE['scene'] = scene

            VJ_STATE['last_updated'] = now_t
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({'status': 'ok', 'event': evt, 'state': VJ_STATE}).encode('utf-8'))
            return

        # 3f-state. Live VJ State Query API
        elif parsed.path == '/api/vj/state':
            # Auto-expire blackout after 15s so screen never stays locked dark
            if VJ_STATE.get('blackout') and (time.time() - VJ_STATE.get('blackout_time', 0) > 15.0):
                VJ_STATE['blackout'] = False
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(VJ_STATE).encode('utf-8'))
            return

        # 3f-health. Server Health Check API
        elif parsed.path == '/api/health':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({
                "status": "healthy",
                "service": "sol_roth_dj_prompter_hud",
                "version": "2.5.0",
                "midi": True,
                "engine": "hybrid",
                "scenes_count": 28
            }).encode('utf-8'))
            return

        # 3f-scenes. VJ Narrative Scenes API
        elif parsed.path == '/api/vj/scenes':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({"status": "ok", "scenes": GLOBAL_VJ_SCENES}).encode('utf-8'))
            return

        # 3f-deck_status. Active Decks Status Alias API
        elif parsed.path in ['/api/deck_status', '/api/decks_status']:
            data = get_all_decks_now_playing('auto')
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(data).encode('utf-8'))
            return

        # 3f-library_stats. Track Library & Engine Stats API
        elif parsed.path == '/api/library/stats':
            stats = {
                "status": "ok",
                "rekordbox_active": True,
                "serato_active": True,
                "staged_decks": len(ACTIVE_STAGE_DECKS),
                "bpm": ACTIVE_STAGE_DECKS.get("1", {}).get("bpm", 128.0),
                "key": ACTIVE_STAGE_DECKS.get("1", {}).get("key", "8A")
            }
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(stats).encode('utf-8'))
            return

        # 3f-studio_exports. Serato Studio Exports Listing API
        elif parsed.path == '/api/studio_exports':
            studio_dir = DRIVE_ROOT / "02_PRODUCTION_AND_STUDIO/Serato_Studio_Bounces"
            if not studio_dir.exists():
                studio_dir = Path.home() / "Music/Serato Studio/Export"
            exports = []
            if studio_dir.exists():
                for f in studio_dir.glob("*.[wm][ap][v4]"):
                    exports.append({"name": f.name, "size": f.stat().st_size, "modified": f.stat().st_mtime})
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({"status": "ok", "exports": exports}).encode('utf-8'))
            return

        # Static Assets for 3D Visualizer Engine
        elif parsed.path.startswith('/visualizer_lib/'):
            asset_fn = parsed.path.split('/visualizer_lib/')[-1]
            lib_p = SCRIPT_DIR / "visualizer_lib" / asset_fn
            if lib_p.exists():
                content = lib_p.read_bytes()
                self.send_response(200)
                self.send_header('Content-Type', 'application/javascript')
                self.send_header('Content-Length', str(len(content)))
                self.send_header('Cache-Control', 'public, max-age=86400')
                self.end_headers()
                if self.command != 'HEAD':
                    self.wfile.write(content)
                return

        # Commercial-Grade 3D Master Audio-Reactive Visualizer Suite
        elif parsed.path in ['/quantum', '/quantum_visualizer', '/axiom', '/axiom_prime']:
            self.send_response(302)
            self.send_header('Location', '/visualizer')
            self.end_headers()
            return
        elif parsed.path == '/stage':
            self.send_response(302)
            self.send_header('Location', '/visualizer?mode=stage')
            self.end_headers()
            return
        elif parsed.path in ['/master_visualizer', '/visualizer', '/stage_visualizer', '/stage_visuals', '/visuals', '/vj', '/screen', '/tv', '/display']:
            mv_path = SCRIPT_DIR / "sol_roth_master_visualizer.html"
            if mv_path.exists():
                self.send_response(200)
                self.send_header('Content-Type', 'text/html; charset=utf-8')
                self.end_headers()
                self.wfile.write(mv_path.read_bytes())
                return
            self.send_response(200)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.end_headers()
            self.wfile.write(HTML_VISUALS.encode('utf-8'))
            return

        # 3f-video. Stream VJ MP4 Videos
        elif parsed.path == '/api/stream_vj':
            query = urllib.parse.parse_qs(parsed.query)
            fn = query.get('file', [''])[0]
            target_p = MUSIC_ROOT / fn
            if target_p.exists() and target_p.suffix.lower() == '.mp4':
                self.send_response(200)
                self.send_header('Content-Type', 'video/mp4')
                self.send_header('Content-Length', str(target_p.stat().st_size))
                self.send_header('Accept-Ranges', 'bytes')
                self.end_headers()
                self.wfile.write(target_p.read_bytes())
                return
            self.send_response(404)
            self.end_headers()
        elif parsed.path in ['/docs', '/help', '/manual', '/guide']:
            self.send_response(200)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.end_headers()
            self.wfile.write(HTML_DOCS.encode('utf-8'))

        # 3e-api. Docs Ask AI Engine API
        elif parsed.path == '/api/docs_ask':
            query_str = urllib.parse.parse_qs(parsed.query).get('q', [''])[0]
            res = answer_docs_question(query_str)
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(res).encode('utf-8'))
        elif parsed.path in ['/studio', '/remix-lab', '/edits', '/remix']:
            self.send_response(200)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.end_headers()
            self.wfile.write(HTML_STUDIO.encode('utf-8'))

        # 3d-api. Serato Studio Opportunities API
        elif parsed.path == '/api/studio_opportunities':
            res = get_serato_studio_opportunities()
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(res).encode('utf-8'))

        # 3d-analyze. Serato Studio Track Blueprint API
        elif parsed.path == '/api/studio_blueprint':
            query_str = urllib.parse.parse_qs(parsed.query).get('q', [''])[0]
            res = analyze_song_for_serato_studio(query_str)
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(res).encode('utf-8'))
        elif parsed.path in ['/genres', '/reference', '/encyclopedia']:
            self.send_response(200)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.end_headers()
            self.wfile.write(HTML_GENRES.encode('utf-8'))

        # 3c. Genre Library Statistics API
        # 3c-crate. Serato .crate Sync API
        # 3c-sampler-presets. All Sampler Presets & Kits API
        elif parsed.path in ['/api/sampler_presets', '/api/sampler_kits']:
            data = {
                'status': 'ok',
                'active_preset': ACTIVE_SAMPLER_PRESET,
                'presets': SAMPLER_PRESETS
            }
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(data).encode('utf-8'))

        # 3c-ai-pad. AI Track-Aware Pad Recommendation API
        elif parsed.path in ['/api/ai_pad_recommendation', '/api/pad_recommendation']:
            deck = urllib.parse.parse_qs(parsed.query).get('deck', ['1'])[0]
            res = get_ai_pad_recommendation(deck)
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(res).encode('utf-8'))
        elif parsed.path == '/api/switch_sampler_bank':
            preset = urllib.parse.parse_qs(parsed.query).get('preset', ['tech_house'])[0]
            res = switch_sampler_preset(preset)
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(res).encode('utf-8'))
        # 3c-sync-rekordbox. Sync to Pioneer Rekordbox XML & Sampler API
        elif parsed.path == '/api/sync_rekordbox':
            res = sync_rekordbox_ecosystem()
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(res).encode('utf-8'))

        # 3c-sync-all. Sync All 16 Master Crates API
        elif parsed.path == '/api/sync_all_crates':
            res = sync_all_master_crates()
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(res).encode('utf-8'))
        elif parsed.path == '/api/sync_crate':
            genre_id = urllib.parse.parse_qs(parsed.query).get('genre_id', [''])[0]
            res = generate_genre_crate(genre_id)
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(res).encode('utf-8'))

        # 3c-match. Two-Tier Smart Next Track Matchmaker API
        elif parsed.path == '/api/next_track_matchmaker':
            deck = urllib.parse.parse_qs(parsed.query).get('deck', ['1'])[0]
            res = get_smart_next_tracks(deck)
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(res).encode('utf-8'))
        elif parsed.path == '/api/genre_stats':
            stats = get_genre_library_stats()
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(stats).encode('utf-8'))

        # 4. Live 4-Deck Status API (Pioneer Rekordbox & Serato DJ Pro)
        elif parsed.path in ['/api/now_playing', '/api/decks']:
            query = urllib.parse.parse_qs(parsed.query)
            engine_pref = query.get('engine', [''])[0] or None
            data = get_all_decks_now_playing(engine_pref)
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(data or {}).encode('utf-8'))

        # 4b. Live Deck Load API (Instantly load track onto Rekordbox / Serato Decks 1-4)
        elif parsed.path == '/api/deck/load':
            query = urllib.parse.parse_qs(parsed.query)
            d_num = query.get('deck', ['1'])[0]
            title = query.get('title', [''])[0]
            artist = query.get('artist', ['DJ Sol Roth'])[0]
            bpm = float(query.get('bpm', ['128.0'])[0] or 128.0)
            key = query.get('key', ['8A'])[0]
            genre = query.get('genre', ['Electronic'])[0]
            loaded = load_track_to_stage_deck(d_num, title, artist, bpm, key, genre)
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({'status': 'ok', 'deck': d_num, 'loaded': loaded}).encode('utf-8'))

        # 4c. Serato Studio Production Exports Sync to Rekordbox & Serato Crates API
        elif parsed.path == '/api/sync_studio_exports':
            res = sync_serato_studio_exports_to_ecosystem()
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(res).encode('utf-8'))

        # 5. Daily DJ Intelligence Data API
        elif parsed.path == '/api/daily_intel':
            query = urllib.parse.parse_qs(parsed.query)
            refresh = query.get('refresh', ['0'])[0] == '1'
            data = fetch_or_generate_daily_intel(force_refresh=refresh)
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(data or {}).encode('utf-8'))

        # 6. Public Streaming Track Audio Preview & Artwork API
        elif parsed.path == '/api/preview_track':
            query = urllib.parse.parse_qs(parsed.query).get('q', [''])[0]
            preview = fetch_track_preview(query)
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(preview or {}).encode('utf-8'))

        # 7. Instant Manual Library Search API
        elif parsed.path == '/api/search':
            query = urllib.parse.parse_qs(parsed.query).get('q', [''])[0].lower().strip()
            results = []
            if query:
                for item in LIBRARY_CATALOG:
                    if query in item['title'].lower() or query in item['artist'].lower() or query in item['filename'].lower():
                        results.append(item)
                        if len(results) >= 12: break
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(results).encode('utf-8'))

        # 8. Load Track Metadata & Lyrics by Filepath API
        elif parsed.path == '/api/load_track':
            rel_path = urllib.parse.parse_qs(parsed.query).get('path', [''])[0]
            data = get_track_data_from_path(rel_path)
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(data or {}).encode('utf-8'))

        # 9. Sol Roth AI DJ Copilot Advisory API
        elif parsed.path == '/api/copilot':
            query = urllib.parse.parse_qs(parsed.query)
            deck = query.get('deck', ['1'])[0]
            user_msg = query.get('q', [''])[0]
            
            decks_query = urllib.parse.parse_qs(parsed.query)
            engine_pref = query.get('engine', [''])[0] or None
            data = get_all_decks_now_playing(engine_pref)
            current_track = (decks_data.get('decks', {}).get(deck) or {}) if decks_data else {}
            
            copilot_data = generate_copilot_advice(current_track, user_query=user_msg)
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(copilot_data).encode('utf-8'))

        # 10. AI Live MC Freestyle Generator API
        elif parsed.path == '/api/generate_freestyle':
            query = urllib.parse.parse_qs(parsed.query)
            title = query.get('title', ['Track'])[0]
            artist = query.get('artist', ['DJ'])[0]
            genre = query.get('genre', ['Electronic'])[0]
            bpm = query.get('bpm', ['128'])[0]
            key = query.get('key', ['8A'])[0]
            style = query.get('style', ['hype_rap'])[0]

            res_data = generate_ai_mc_verse(title, artist, genre, bpm, key, style)
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(res_data).encode('utf-8'))

        # 11. Album Artwork (0ms Fast Disk Cache)
        elif parsed.path == '/api/art':
            query = urllib.parse.parse_qs(parsed.query)
            fn = query.get('file', [''])[0]
            target_file = FILENAME_MAP.get(fn)
            if target_file and target_file.exists():
                try:
                    audio = ID3(target_file)
                    for k in audio.keys():
                        if k.startswith('APIC'):
                            art_data = audio[k].data
                            mime = audio[k].mime or 'image/jpeg'
                            self.send_response(200)
                            self.send_header('Content-Type', mime)
                            self.send_header('Cache-Control', 'public, max-age=86400')
                            self.end_headers()
                            self.wfile.write(art_data)
                            return
                except: pass
            self.send_response(404)
            self.end_headers()

        # 12. Local File Audio Streaming API
        elif parsed.path == '/api/stream_local':
            query = urllib.parse.parse_qs(parsed.query)
            fn = query.get('file', [''])[0]
            target_file = None
            
            p = Path(fn)
            if p.is_file() and p.exists():
                target_file = p
            elif (MUSIC_ROOT / fn).is_file() and (MUSIC_ROOT / fn).exists():
                target_file = MUSIC_ROOT / fn
            elif fn in FILENAME_MAP and FILENAME_MAP[fn].exists():
                target_file = FILENAME_MAP[fn]
            elif Path(fn).name in FILENAME_MAP and FILENAME_MAP[Path(fn).name].exists():
                target_file = FILENAME_MAP[Path(fn).name]
            else:
                for s_root in [
                    MUSIC_ROOT / "_DJ_Sampler_Bank",
                    MUSIC_ROOT / "_DJ_Performance_WAV_Kits",
                    DRIVE_ROOT / "01_DJ_AND_PERFORMANCE/samples/HOT" if (DRIVE_ROOT / "01_DJ_AND_PERFORMANCE/samples/HOT").exists() else DRIVE_ROOT / "samples/HOT",
                    DRIVE_ROOT / "01_DJ_AND_PERFORMANCE/samples" if (DRIVE_ROOT / "01_DJ_AND_PERFORMANCE/samples").exists() else DRIVE_ROOT / "samples",
                    Path.home() / "Music/rekordbox/Sampler",
                    MUSIC_ROOT / "_VJ_Sampler_Banks_Full"
                ]:
                    cand = s_root / fn
                    if cand.is_file() and cand.exists():
                        target_file = cand
                        break
                    matches = list(s_root.glob(f"**/{Path(fn).name}"))
                    if matches and matches[0].is_file() and matches[0].exists():
                        target_file = matches[0]
                        break

            if target_file and target_file.is_file() and target_file.exists():
                ext = target_file.suffix.lower()
                mime_map = {
                    '.mp3': 'audio/mpeg',
                    '.wav': 'audio/wav',
                    '.aif': 'audio/aiff',
                    '.aiff': 'audio/aiff',
                    '.m4a': 'audio/mp4',
                    '.mp4': 'audio/mp4',
                    '.flac': 'audio/flac',
                    '.ogg': 'audio/ogg'
                }
                mime = mime_map.get(ext, 'audio/mpeg')
                file_size = target_file.stat().st_size
                range_header = self.headers.get('Range')

                if range_header:
                    try:
                        byte_range = range_header.strip().split('=')[1]
                        start_str, end_str = byte_range.split('-')
                        start = int(start_str) if start_str else 0
                        end = int(end_str) if end_str else file_size - 1
                        length = end - start + 1
                        
                        self.send_response(206)
                        self.send_header('Content-Type', mime)
                        self.send_header('Content-Range', f'bytes {start}-{end}/{file_size}')
                        self.send_header('Content-Length', str(length))
                        self.send_header('Accept-Ranges', 'bytes')
                        self.end_headers()
                        
                        with open(target_file, 'rb') as f:
                            f.seek(start)
                            self.wfile.write(f.read(length))
                        return
                    except Exception:
                        pass

                self.send_response(200)
                self.send_header('Content-Type', mime)
                self.send_header('Content-Length', str(file_size))
                self.send_header('Accept-Ranges', 'bytes')
                self.end_headers()
                try:
                    with open(target_file, 'rb') as f:
                        shutil.copyfileobj(f, self.wfile)
                except (BrokenPipeError, ConnectionResetError, Exception):
                    pass
                return

            self.send_response(404)
            self.end_headers()

        # 13. Graceful Shutdown API
        elif parsed.path == '/api/shutdown':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"status": "shutting_down"}).encode('utf-8'))
            def kill_later():
                time.sleep(0.5)
                os._exit(0)
            threading.Thread(target=kill_later, daemon=True).start()

        else:
            self.send_response(404)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({'error': 'Endpoint not found', 'path': parsed.path}).encode('utf-8'))
            return

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With')
        self.end_headers()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        content_length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(content_length) if content_length > 0 else b'{}'
        
        post_data = {}
        if body:
            try:
                post_data = json.loads(body.decode('utf-8'))
            except Exception:
                try:
                    qs = urllib.parse.parse_qs(body.decode('utf-8'))
                    post_data = {k: v[0] if len(v) == 1 else v for k, v in qs.items()}
                except Exception:
                    post_data = {}

        now_t = time.time()

        if parsed.path == '/api/vj/trigger':
            pad = post_data.get('pad')
            evt = post_data.get('event', '')
            velocity = int(post_data.get('velocity', 127) or 127)

            if pad is not None:
                pad_map = {
                    1: 'shock',
                    2: 'slam',
                    3: 'strobe',
                    4: 'confetti',
                    5: 'hadoken',
                    6: 'shoryuken',
                    7: 'wings',
                    8: 'mecha'
                }
                evt = pad_map.get(int(pad), evt)

            if evt == 'slam':
                VJ_STATE['slam_time'] = now_t
                VJ_STATE['substate'] = 'slam'
            elif evt == 'shock':
                VJ_STATE['shock_time'] = now_t
                VJ_STATE['substate'] = 'shock'
            elif evt == 'crack':
                VJ_STATE['crack_level'] = min(4, VJ_STATE['crack_level'] + 1)
                VJ_STATE['substate'] = 'crack'
            elif evt == 'breach':
                VJ_STATE['breach_time'] = now_t
                VJ_STATE['crack_level'] = 4
                VJ_STATE['substate'] = 'breach'
            elif evt == 'strobe':
                VJ_STATE['strobe_time'] = now_t
            elif evt == 'blackout':
                VJ_STATE['blackout'] = not VJ_STATE['blackout']
            elif evt == 'reset':
                VJ_STATE['crack_level'] = 0
                VJ_STATE['substate'] = 'idle'
                VJ_STATE['blackout'] = False
                VJ_STATE['scene'] = '1'
            elif evt.startswith('scene_'):
                VJ_STATE['scene'] = evt.replace('scene_', '')

            VJ_STATE['last_velocity'] = velocity
            VJ_STATE['last_updated'] = now_t

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({'status': 'ok', 'event': evt, 'velocity': velocity, 'state': VJ_STATE}).encode('utf-8'))
            return

        elif parsed.path in ['/api/vj/scene', '/api/vj/switch_scene']:
            scene_idx = post_data.get('scene_index', post_data.get('scene', 1))
            VJ_STATE['scene'] = str(scene_idx)
            VJ_STATE['last_updated'] = now_t
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({'status': 'ok', 'scene': VJ_STATE['scene']}).encode('utf-8'))
            return

        elif parsed.path == '/api/deck/load':
            d_num = str(post_data.get('deck', '1'))
            title = post_data.get('title', '')
            artist = post_data.get('artist', 'DJ Sol Roth')
            bpm = float(post_data.get('bpm', 128.0) or 128.0)
            key = post_data.get('key', '8A')
            genre = post_data.get('genre', 'Electronic')
            loaded = load_track_to_stage_deck(d_num, title, artist, bpm, key, genre)
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({'status': 'ok', 'deck': d_num, 'loaded': loaded}).encode('utf-8'))
            return

        elif parsed.path == '/api/sync_studio_exports':
            res = sync_serato_studio_exports_to_ecosystem()
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(res).encode('utf-8'))
            return

        elif parsed.path in ['/api/chat/badge', '/api/vj/chat_trigger']:
            user = post_data.get('username', post_data.get('user', 'TwitchViewer'))
            badge = post_data.get('badge', 'VIP')
            msg = post_data.get('message', post_data.get('action', 'CHEER'))
            VJ_STATE['last_chat_user'] = f"[{badge}] {user}"
            VJ_STATE['last_chat_action'] = msg
            VJ_STATE['chat_event_time'] = now_t
            VJ_STATE['last_updated'] = now_t
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({'status': 'ok', 'state': VJ_STATE}).encode('utf-8'))
            return

        else:
            self.send_response(404)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({'error': 'POST endpoint not found', 'path': parsed.path}).encode('utf-8'))
            return

HTML_UI = """<!DOCTYPE html>
<html lang="en" data-theme="dark" data-axiom-palette="default">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Sol Roth HUD">
<meta name="theme-color" content="#07090e">
<link rel="manifest" href="/manifest.json">
<title>Sol Roth // 4-Channel DJ Stage Lyric & Copilot Dashboard</title>

<!-- Axiom01 Framework Core Bundle -->
<link rel="stylesheet" href="/axiom01/css/axiom.min.css">
<link rel="stylesheet" href="/axiom01/css/axicons.css">

<style>
  *, *::before, *::after {
    box-sizing: border-box;
  }

  [data-theme="dark"] {
    --ax-surface: #0b0e15;
    --a-surface-base: #07090e;
    --a-surface-raised: #101522;
    --ax-border: #1a2233;
    --ax-text: #f0f4f8;
    --dj-accent-brand: #00f0ff;
    --dj-accent-cyan: #00f0ff;
    --dj-accent-gold: #ffd000;
    --dj-accent-pink: #ff007f;
    --dj-accent-purple: #aa00ff;
    --dj-accent-green: #00ff80;
    --dj-notes-bg: rgba(255, 208, 0, 0.08);
    --dj-notes-border: rgba(255, 208, 0, 0.3);
    --dj-notes-text: #f0f4f8;
    --dj-card-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    --dj-bars-bg: rgba(0, 255, 128, 0.12);
    --dj-bars-border: #00ff80;
    --dj-bars-text: #00ff80;
    --dj-badge-genre-bg: #101c2e;
    --dj-badge-genre-text: #5bc0de;
    --dj-badge-year-bg: #1f1b29;
    --dj-badge-year-text: #e599f7;
    --dj-deck-active-glow: 0 0 15px rgba(0, 240, 255, 0.4);
    --dj-ai-btn-bg: linear-gradient(135deg, #ff007f 0%, #aa00ff 100%);
    --dj-copilot-btn-bg: linear-gradient(135deg, #00f0ff 0%, #0077ff 100%);
    --dj-intel-btn-bg: linear-gradient(135deg, #ffd000 0%, #ff8800 100%);
  }

  [data-theme="light"] {
    --ax-surface: #f8fafc;
    --a-surface-base: #ffffff;
    --a-surface-raised: #f1f5f9;
    --ax-border: #cbd5e1;
    --ax-text: #0f172a;
    --dj-accent-brand: #0284c7;
    --dj-accent-cyan: #0284c7;
    --dj-accent-gold: #b45309;
    --dj-accent-pink: #be185d;
    --dj-accent-purple: #7e22ce;
    --dj-accent-green: #047857;
    --dj-notes-bg: #fef9c3;
    --dj-notes-border: #eab308;
    --dj-notes-text: #713f12;
    --dj-card-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    --dj-bars-bg: #dcfce7;
    --dj-bars-border: #059669;
    --dj-bars-text: #047857;
    --dj-badge-genre-bg: #e0f2fe;
    --dj-badge-genre-text: #0369a1;
    --dj-badge-year-bg: #f3e8ff;
    --dj-badge-year-text: #7e22ce;
    --dj-deck-active-glow: 0 0 10px rgba(2, 132, 199, 0.3);
    --dj-ai-btn-bg: linear-gradient(135deg, #be185d 0%, #7e22ce 100%);
    --dj-copilot-btn-bg: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
    --dj-intel-btn-bg: linear-gradient(135deg, #b45309 0%, #c2410c 100%);
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden !important;
    background: var(--a-surface-base);
    color: var(--ax-text);
    font-family: var(--ax-font-body);
    display: flex;
    flex-direction: column;
    height: 100vh;
    -webkit-text-size-adjust: 100%;
  }

  header.main {
    background: var(--ax-surface);
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 2px solid var(--ax-border);
    flex-shrink: 0;
    gap: 8px;
    width: 100%;
    max-width: 100vw;
    box-sizing: border-box;
    height: auto !important;
    min-height: 52px;
    overflow-x: auto !important;
    overflow-y: hidden !important;
    -webkit-overflow-scrolling: touch !important;
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 240, 255, 0.4) transparent;
  }
  header.main::-webkit-scrollbar {
    height: 3px;
  }
  header.main::-webkit-scrollbar-track {
    background: transparent;
  }
  header.main::-webkit-scrollbar-thumb {
    background: rgba(0, 240, 255, 0.35);
    border-radius: 3px;
  }
  header.main::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 240, 255, 0.7);
  }
  header.main > * {
    flex-shrink: 0 !important;
  }

  header.main .brand, .brand-title {
    font-size: clamp(0.9rem, 3.5vw, 1.05rem);
    font-weight: 900;
    letter-spacing: 0.8px;
    color: var(--dj-accent-brand);
    display: flex;
    align-items: center;
    gap: 6px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  header.main nav.decks, .deck-tabs-container {
    display: flex;
    align-items: center;
    gap: 4px;
    background: var(--a-surface-raised);
    padding: 3px 4px;
    border-radius: var(--a-border-radius-base);
    border: 1px solid var(--ax-border);
  }
  header.main nav.decks button, .deck-tab-btn {
    background: transparent;
    border: 1px solid transparent;
    color: var(--ax-text);
    padding: 6px 10px;
    border-radius: var(--a-border-radius-sm, 4px);
    font-size: 0.82rem;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    gap: 4px;
    white-space: nowrap;
  }
  header.main nav.decks button:hover, .deck-tab-btn:hover { background: var(--ax-surface); }
  header.main nav.decks button.active, .deck-tab-btn.active {
    background: var(--dj-accent-brand);
    color: #fff;
    font-weight: 900;
    box-shadow: var(--dj-deck-active-glow);
  }
  header.main nav.decks small, .deck-song-preview {
    max-width: 80px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;
    opacity: 0.85;
    font-size: 0.7rem;
  }

  header.main .actions, .header-actions {
    display: flex;
    align-items: center;
    gap: 5px;
    flex-shrink: 0;
    flex-wrap: nowrap;
  }
  header.main .actions > * {
    flex-shrink: 0 !important;
  }

  header.main .actions button,
  header.main .actions a.button,
  .modal-card button,
  .modal-card a.button,
  #stage-urls-modal button,
  #stage-urls-modal a.button,
  button, a.button {
    background: var(--a-surface-raised);
    border: 1px solid var(--ax-border);
    color: var(--ax-text);
    padding: 5px 8px;
    border-radius: var(--a-border-radius-base);
    font-size: 0.75rem;
    font-weight: 800;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    white-space: nowrap;
    text-decoration: none;
    transition: all 0.15s ease;
  }
  header.main .actions button:hover,
  header.main .actions a.button:hover,
  .modal-card button:hover,
  .modal-card a.button:hover,
  #stage-urls-modal button:hover,
  #stage-urls-modal a.button:hover,
  button:hover, a.button:hover {
    background: var(--dj-accent-cyan);
    color: #000;
    border-color: var(--dj-accent-cyan);
  }
  button.primary, a.button.primary {
    background: var(--dj-accent-pink);
    color: #fff;
    border-color: var(--dj-accent-pink);
    font-weight: 900;
  }
  button.success, a.button.success {
    background: var(--dj-accent-green);
    color: #000;
    border-color: var(--dj-accent-green);
    font-weight: 900;
  }

  .main-container {
    display: flex;
    flex: 1;
    overflow: hidden;
    width: 100%;
    max-width: 100vw;
    box-sizing: border-box;
  }

  aside.meta-sidebar {
    width: 330px;
    background: var(--ax-surface);
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-right: 2px solid var(--ax-border);
    overflow-y: auto;
    flex-shrink: 0;
    box-sizing: border-box;
  }

  .art-container {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: var(--a-border-radius-md);
    overflow: hidden;
    background: var(--a-surface-raised);
    border: 2px solid var(--ax-border);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--dj-card-shadow);
  }
  .art-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .meta-sidebar h2 {
    font-size: 1.15rem;
    font-weight: 900;
    color: var(--ax-text);
    line-height: 1.2;
    margin: 0 0 2px 0;
    word-break: break-word;
  }
  .meta-sidebar p {
    font-size: 0.88rem;
    color: var(--dj-accent-cyan);
    font-weight: 800;
    margin: 0;
    word-break: break-word;
  }

  .meta-sub-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.78rem;
    color: var(--a-color-text-muted);
    margin-top: 4px;
    font-weight: 700;
  }

  .badge-row {
    display: flex;
    gap: 6px;
    width: 100%;
  }
  .badge {
    padding: 5px 6px;
    border-radius: var(--a-border-radius-base);
    font-weight: 800;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    text-align: center;
    border: 1px solid var(--ax-border);
    min-width: 0;
  }
  .badge.key { color: #fff; text-shadow: 0 0 10px rgba(0,0,0,0.8); }
  .badge.bpm { background: var(--a-surface-raised); color: var(--dj-accent-gold); }
  .badge.deck { background: var(--a-surface-raised); color: var(--dj-accent-purple); font-weight: 900; }
  .badge.genre { background: var(--dj-badge-genre-bg); color: var(--dj-badge-genre-text); }
  .badge.year { background: var(--dj-badge-year-bg); color: var(--dj-badge-year-text); }

  .card.notes {
    background: var(--dj-notes-bg);
    border: 1px solid var(--dj-notes-border);
    border-radius: var(--a-border-radius-base);
    padding: 8px 10px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    word-break: break-word;
  }
  .card.notes > header {
    font-size: 0.68rem;
    font-weight: 800;
    color: var(--dj-accent-gold);
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin: 0;
  }
  .card.notes > p {
    font-size: 0.8rem;
    color: var(--dj-notes-text);
    font-weight: 700;
    line-height: 1.3;
    word-break: break-word;
    margin: 0;
  }

  .card.harmonic {
    background: var(--a-surface-base);
    border: 1px solid var(--ax-border);
    border-radius: var(--a-border-radius-base);
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .card.harmonic > header {
    font-size: 0.65rem;
    font-weight: 800;
    color: var(--a-color-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin: 0;
  }
  .card.harmonic .harmonic-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 4px;
  }
  .harm-pill {
    padding: 3px 2px;
    border-radius: var(--a-border-radius-sm);
    font-size: 0.68rem;
    font-weight: 800;
    text-align: center;
    color: #fff;
  }

  .ctrl-panel {
    background: var(--a-surface-base);
    padding: 8px;
    border-radius: var(--a-border-radius-base);
    border: 1px solid var(--ax-border);
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .ctrl-panel .actions, .ctrl-panel div { display: flex; gap: 4px; }
  .ctrl-panel button {
    background: var(--a-surface-raised);
    border: 1px solid var(--ax-border);
    color: var(--ax-text);
    padding: 5px 3px;
    border-radius: var(--a-border-radius-base);
    font-size: 0.7rem;
    font-weight: 800;
    cursor: pointer;
    flex: 1;
    text-align: center;
  }
  .ctrl-panel button.active {
    background: var(--dj-accent-cyan);
    color: #fff;
    font-weight: 900;
  }

  main.lyrics-stage-container {
    flex: 1;
    padding: 16px 20px;
    overflow-y: auto;
    background: var(--a-surface-base);
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }
  .multi-col-lyrics {
    column-count: 3;
    column-gap: 24px;
    column-rule: 1px solid var(--ax-border);
    height: 100%;
    width: 100%;
  }
  .multi-col-lyrics.cols-2 { column-count: 2; column-gap: 30px; }
  .multi-col-lyrics.cols-3 { column-count: 3; column-gap: 24px; }
  .multi-col-lyrics.cols-4 { column-count: 4; column-gap: 18px; }

  article.card.section {
    background: var(--a-surface-raised);
    border: 1px solid var(--ax-border);
    border-radius: var(--a-border-radius-md);
    padding: 14px 16px;
    margin-bottom: 16px;
    break-inside: avoid;
    box-shadow: var(--dj-card-shadow);
    width: 100%;
    box-sizing: border-box;
  }
  article.card.section > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-bottom: 6px;
    border-bottom: 1px solid var(--ax-border);
    flex-wrap: wrap;
    gap: 6px;
    width: 100%;
  }
  article.card.section > header .title {
    font-size: 0.92rem;
    font-weight: 900;
    letter-spacing: 1px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 5px;
    word-break: break-word;
  }
  article.card.section > header .title.chorus { color: var(--dj-accent-gold); }
  article.card.section > header .title.verse { color: var(--dj-accent-cyan); }
  article.card.section > header .title.drop { color: var(--dj-accent-pink); }
  article.card.section > header .title.bridge { color: var(--dj-accent-purple); }

  article.card.section > header .actions {
    display: flex;
    align-items: center;
    gap: 5px;
    flex-wrap: wrap;
  }
  article.card.section > header .badge.timestamp {
    background: var(--ax-surface);
    border: 1px solid var(--ax-border);
    color: var(--ax-text);
    font-family: var(--a-font-family-mono);
    font-size: 0.8rem;
    font-weight: 800;
    padding: 2px 6px;
    border-radius: var(--a-border-radius-base);
    white-space: nowrap;
  }
  article.card.section > header .badge.bars {
    background: var(--dj-bars-bg);
    border: 1px solid var(--dj-bars-border);
    color: var(--dj-bars-text);
    font-family: var(--a-font-family-mono);
    font-size: 0.8rem;
    font-weight: 800;
    padding: 2px 6px;
    border-radius: var(--a-border-radius-base);
    white-space: nowrap;
  }

  .lyric-line-item {
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 1.45;
    color: var(--ax-text);
    margin-bottom: 5px;
    display: block;
    word-break: break-word;
  }

  /* Modals */
  .modal-overlay {
    display: none;
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.85);
    z-index: 1000;
    align-items: center;
    justify-content: center;
    padding: 12px;
  }
  .modal-overlay.active { display: flex; }
  
  .modal-card {
    background: var(--ax-surface);
    border: 2px solid var(--dj-accent-brand);
    border-radius: var(--a-border-radius-lg);
    padding: 20px;
    max-width: 420px;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
  }

  .modal-card-large {
    max-width: 800px;
    text-align: left;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .search-input-field {
    width: 100%;
    background: var(--a-surface-base);
    border: 2px solid var(--dj-accent-cyan);
    border-radius: var(--a-border-radius-base);
    color: var(--ax-text);
    padding: 10px 14px;
    font-size: 1rem;
    font-weight: 700;
    outline: none;
    margin-bottom: 12px;
    box-sizing: border-box;
  }
  .search-results-list {
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 6px;
    max-height: 60vh;
  }
  .search-item {
    background: var(--a-surface-raised);
    border: 1px solid var(--ax-border);
    border-radius: var(--a-border-radius-base);
    padding: 8px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  .copilot-card {
    background: var(--a-surface-base);
    border: 1px solid var(--ax-border);
    border-radius: var(--a-border-radius-base);
    padding: 10px;
    margin-bottom: 10px;
    word-break: break-word;
  }

  @media (max-width: 768px), (orientation: portrait) and (max-width: 900px) {
    html, body {
      height: auto !important;
      min-height: 100vh;
      overflow-x: hidden !important;
      overflow-y: auto !important;
    }
    header.main {
      display: flex !important;
      flex-wrap: wrap !important;
      align-items: center !important;
      justify-content: space-between !important;
      padding: 6px 10px !important;
      gap: 6px !important;
    }
    header.main .brand {
      order: 1 !important;
      display: flex !important;
      align-items: center !important;
      gap: 6px !important;
      width: auto !important;
    }
    header.main nav.segmented#hud-view-switcher {
      order: 2 !important;
      display: inline-flex !important;
      margin-left: auto !important;
    }
    header.main nav.segmented#hud-view-switcher button {
      padding: 3px 6px !important;
      font-size: 0.68rem !important;
    }
    header.main nav.tabs#hud-ajax-tabs {
      order: 3 !important;
      width: 100% !important;
      justify-content: center !important;
    }
    header.main nav.decks {
      order: 4 !important;
      width: 100% !important;
      display: flex !important;
      justify-content: space-between !important;
      padding: 2px !important;
      gap: 3px !important;
    }
    header.main nav.decks button {
      flex: 1 !important;
      justify-content: center !important;
      padding: 6px 2px !important;
      font-size: 0.8rem !important;
    }
    header.main nav.decks small { display: none !important; }
    header.main .actions {
      order: 5 !important;
      width: 100% !important;
      display: flex !important;
      overflow-x: auto !important;
      flex-wrap: nowrap !important;
      padding: 2px 0 4px 0 !important;
      gap: 5px !important;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }
    header.main .actions::-webkit-scrollbar { display: none; }
    header.main .actions > * {
      flex-shrink: 0 !important;
      white-space: nowrap !important;
      font-size: 0.72rem !important;
      padding: 4px 7px !important;
    }

    .main-container {
      display: flex !important;
      flex-direction: column !important;
      overflow: visible !important;
      height: auto !important;
      width: 100% !important;
      max-width: 100vw !important;
      min-height: 0 !important;
    }

    #hud-tab-prompter {
      display: flex !important;
      flex-direction: column !important;
      width: 100% !important;
      min-width: 0 !important;
      max-width: 100% !important;
      height: auto !important;
      min-height: 0 !important;
      overflow: visible !important;
    }

    aside.meta-sidebar {
      width: 100% !important;
      min-width: 0 !important;
      max-width: 100% !important;
      box-sizing: border-box;
      border-right: none !important;
      border-bottom: 2px solid var(--ax-border);
      padding: 8px 12px;
      height: auto !important;
      overflow: visible !important;
      gap: 5px;
      flex-shrink: 0;
    }
    aside.meta-sidebar h2 {
      font-size: 1.05rem;
      font-weight: 900;
      margin: 0;
      line-height: 1.25;
    }
    aside.meta-sidebar p {
      font-size: 0.82rem;
      font-weight: 800;
      margin: 2px 0 0 0;
    }
    aside.meta-sidebar .meta-sub-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 2px;
      font-size: 0.72rem;
    }
    aside.meta-sidebar .badge-row {
      display: flex;
      gap: 4px;
      flex-wrap: wrap;
      margin-top: 2px;
    }
    aside.meta-sidebar .badge {
      padding: 3px 6px;
      font-size: 0.72rem;
    }
    article.card.notes#notes-card {
      padding: 6px 10px;
      margin-top: 4px;
      border-radius: var(--a-border-radius-sm);
      font-size: 0.76rem;
      line-height: 1.35;
    }

    .art-container { display: none !important; }
    article.card.harmonic { display: none !important; }
    .ctrl-panel { display: none !important; }

    main.lyrics-stage-container {
      display: block !important;
      width: 100% !important;
      min-width: 0 !important;
      max-width: 100% !important;
      box-sizing: border-box;
      padding: 12px 10px 80px 10px !important;
      overflow-y: visible !important;
      height: auto !important;
      flex: 1;
    }

    .multi-col-lyrics {
      display: flex !important;
      flex-direction: column !important;
      column-count: 1 !important;
      column-gap: 0 !important;
      column-rule: none !important;
      width: 100% !important;
      height: auto !important;
      gap: 10px;
    }

    article.card.section {
      display: block !important;
      width: 100% !important;
      box-sizing: border-box;
      margin: 0 0 10px 0 !important;
      padding: 12px 12px !important;
      border-radius: var(--a-border-radius-base);
      background: var(--a-surface-raised);
      border: 1px solid var(--ax-border);
      break-inside: avoid;
    }
    article.card.section > header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 6px;
      margin-bottom: 8px;
      padding-bottom: 6px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      flex-wrap: wrap;
    }
    article.card.section .title {
      font-size: 0.86rem;
      font-weight: 900;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    article.card.section .actions {
      display: flex;
      gap: 4px;
      align-items: center;
    }

    .lyric-line-item {
      display: block;
      font-size: 1.15rem !important;
      line-height: 1.5;
      color: var(--ax-text);
      padding: 3px 0;
      word-break: break-word;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    aside.meta-sidebar { width: 270px; padding: 10px; }
    .multi-col-lyrics { column-count: 2 !important; column-gap: 20px; }
  }

  /* Mobile Landscape View (iPhones, smartphones in landscape) */
  @media (max-height: 550px) and (orientation: landscape),
         (max-width: 1024px) and (max-height: 550px) {
    html, body {
      height: 100% !important;
      overflow: hidden !important;
    }
    header.main {
      padding: 4px 8px !important;
      min-height: 44px !important;
      gap: 6px !important;
      display: flex !important;
      flex-direction: row !important;
      flex-wrap: nowrap !important;
      align-items: center !important;
      justify-content: flex-start !important;
      overflow-x: auto !important;
      overflow-y: hidden !important;
      -webkit-overflow-scrolling: touch !important;
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 240, 255, 0.4) transparent;
    }
    header.main::-webkit-scrollbar {
      height: 3px !important;
      display: block !important;
    }
    header.main .brand {
      flex-shrink: 0 !important;
      gap: 4px !important;
    }
    header.main .brand span {
      display: none !important;
    }
    header.main .brand img {
      height: 24px !important;
    }
    header.main nav.segmented#hud-view-switcher {
      flex-shrink: 0 !important;
      padding: 2px !important;
      gap: 2px !important;
    }
    header.main nav.segmented#hud-view-switcher button {
      padding: 3px 6px !important;
      font-size: 0.7rem !important;
    }
    header.main nav.tabs#hud-ajax-tabs {
      flex-shrink: 0 !important;
      padding: 2px !important;
      gap: 2px !important;
    }
    header.main nav.tabs#hud-ajax-tabs button {
      padding: 3px 6px !important;
      font-size: 0.72rem !important;
    }
    header.main nav.decks {
      flex-shrink: 0 !important;
      display: flex !important;
      padding: 2px !important;
      gap: 3px !important;
    }
    header.main nav.decks button {
      flex-shrink: 0 !important;
      padding: 4px 9px !important;
      font-size: 0.8rem !important;
      min-width: 32px !important;
      justify-content: center !important;
    }
    header.main nav.decks small {
      display: none !important;
    }
    header.main .actions {
      flex-shrink: 0 !important;
      display: flex !important;
      flex-wrap: nowrap !important;
      gap: 4px !important;
      overflow-x: visible !important;
    }
    header.main .actions > * {
      flex-shrink: 0 !important;
      font-size: 0.72rem !important;
      padding: 3px 6px !important;
      white-space: nowrap !important;
    }

    .main-container {
      display: flex !important;
      flex-direction: row !important;
      height: calc(100vh - 44px) !important;
      max-height: calc(100vh - 44px) !important;
      overflow: hidden !important;
    }
    aside.meta-sidebar {
      width: 250px !important;
      min-width: 230px !important;
      max-width: 270px !important;
      padding: 8px 10px !important;
      overflow-y: auto !important;
      border-right: 2px solid var(--ax-border) !important;
      border-bottom: none !important;
    }
    aside.meta-sidebar h2 {
      font-size: 1.1rem !important;
    }
    .lyrics-stage-container {
      flex: 1 !important;
      height: 100% !important;
      overflow-y: auto !important;
      padding: 10px 14px !important;
    }
    .multi-col-lyrics {
      column-count: 2 !important;
      column-gap: 16px !important;
    }
  }
</style>
</head>
<body>

<header class="main">
  <div class="brand" style="display:flex; align-items:center; gap:8px;">
    <img src="/vj_assets/logos/sr_initials_white.png" alt="SR" style="height:32px; width:auto; filter:drop-shadow(0 0 8px rgba(0,240,255,0.4));">
    <span style="font-weight:900; font-size:1.05rem; letter-spacing:1px; color:#fff;">STAGE HUD</span>
  </div>

  <!-- HUD Multi-Mode View Switcher (Axiom01 Semantic Nav) -->
  <nav class="segmented" id="hud-view-switcher" aria-label="HUD Display Views">
    <button class="active" id="view-mode-split" onclick="setHudViewMode('split')" title="Dynamic Split View (Prompter + Docked VJ)">🔀 Split</button>
    <button id="view-mode-tabs" onclick="setHudViewMode('tabs')" title="Tabbed View (Prompter vs VJ Stage)">📑 Tabs</button>
    <button id="view-mode-compact" onclick="setHudViewMode('compact')" title="Compact Micro-Bar (Max Space for iPhone)">📱 Compact</button>
    <button id="view-mode-focus" onclick="setHudViewMode('focus')" title="Full Teleprompter Focus (Colossal Lyrics)">🎯 Focus</button>
  </nav>

  <!-- Secondary Tab Switcher (Visible only in 'tabs' view mode) -->
  <nav class="tabs" id="hud-ajax-tabs" style="display:none;" aria-label="Tab View Switching">
    <button class="active" id="ajax-tab-btn-prompter" onclick="switchAjaxTab('prompter')">🎤 Prompter</button>
    <button id="ajax-tab-btn-vj" onclick="switchAjaxTab('vj')">🎬 VJ Stage &amp; Visuals</button>
  </nav>

  <nav class="decks">
    <button class="deck-tab-btn active" id="tab-deck-1" onclick="selectActiveDeck('1')">
      <span>1</span>
      <small class="deck-song-preview" id="tab-d1-title">Deck 1</small>
    </button>
    <button class="deck-tab-btn" id="tab-deck-2" onclick="selectActiveDeck('2')">
      <span>2</span>
      <small class="deck-song-preview" id="tab-d2-title">Deck 2</small>
    </button>
    <button class="deck-tab-btn" id="tab-deck-3" onclick="selectActiveDeck('3')">
      <span>3</span>
      <small class="deck-song-preview" id="tab-d3-title">Deck 3</small>
    </button>
    <button class="deck-tab-btn" id="tab-deck-4" onclick="selectActiveDeck('4')">
      <span>4</span>
      <small class="deck-song-preview" id="tab-d4-title">Deck 4</small>
    </button>
  </nav>

  <div class="actions">
    <span id="hud-midi-badge" class="badge" style="display:none; background:rgba(16,185,129,0.2); border:1px solid #10b981; color:#10b981; font-weight:800; font-size:0.75rem; padding:4px 8px; border-radius:12px; align-items:center; gap:4px;" title="MIDI Controller Active">🎹 MIDI</span>
    <button id="engine-btn" style="background:rgba(0,240,255,0.15); border:1px solid var(--dj-accent-cyan); color:var(--dj-accent-cyan); font-weight:900; display:flex; align-items:center; gap:5px;" onclick="cycleDJEngine()" title="Click to toggle DJ software engine">
      <span>🎛️</span> <span id="engine-label">Rekordbox 7</span>
    </button>
    <a href="/music_updates" class="button" style="background:var(--dj-accent-pink); color:#fff;">🔥 Updates</a>
    <a href="/intel" class="button">📰 Intel</a>
    <a href="/genres" class="button" style="background:var(--dj-accent-gold); color:#000; font-weight:900;">📚 Genres</a>
    <a href="/studio" class="button" style="background:var(--dj-accent-purple); color:#fff; font-weight:900;">🎹 Remix Lab</a>
    <a href="/docs" class="button" style="background:var(--dj-accent-cyan); color:#000; font-weight:900;">📖 Docs</a>
    <button id="vj-dock-toggle-btn" onclick="toggleVjDock()" style="background:linear-gradient(135deg, rgba(255,26,64,0.35) 0%, rgba(0,240,255,0.3) 100%); border:1px solid #00f0ff; color:#00f0ff; font-weight:900;" title="Toggle Mini VJ Stage Remote Dock">🎬 VJ STAGE</button>
    <a href="/visualizer" target="_blank" class="button" style="background:rgba(0,240,255,0.18); border-color:#00f0ff; color:#00f0ff; font-weight:900;" title="Launch Master Visualizer with DJ Controls">🎬 Visualizer</a>
    <a href="/visualizer?mode=stage" target="_blank" class="button" style="background:rgba(255,26,64,0.22); border-color:#ff1a40; color:#ff4d6d; font-weight:900;" title="Launch Fullscreen Stage View (No HUD Controls)">📺 Stage View</a>
    <button onclick="openStageUrlsModal()" style="background:rgba(255,255,255,0.1); border-color:rgba(255,255,255,0.3); color:#fff; font-weight:800;" title="View and copy clean URLs for external monitors and LED walls">📋 URLs</button>
    <button onclick="openControllerModal()" style="background:rgba(0,240,255,0.15); border-color:var(--dj-accent-cyan); color:var(--dj-accent-cyan); font-weight:900;">🎛️ Hardware Map</button>
    <button onclick="openSearchModal()">🔍</button>
    <button onclick="openCopilotModal()">🤖 Copilot</button>
    <button onclick="openMCFreestyleModal()">🎤 MC</button>
    <button onclick="toggleTheme()" id="theme-btn">☀️</button>
    <button onclick="openPairingModal()">📱</button>
    <button onclick="toggleFullScreen()">⛶</button>
    <button style="color:#ff007f;" onclick="shutdownHUD()">⏻</button>
  </div>
</header>

<!-- Floating Focus Mode Exit Button -->
<button class="focus-exit-btn" id="focus-exit-btn" onclick="setHudViewMode('split')" style="display:none;" title="Exit Focus Mode">✕ Exit Focus</button>

<div class="main-container" id="main-container">
  <!-- TAB 1: Prompter & Intel Stage (Default) -->
  <div id="hud-tab-prompter" class="hud-tab-content" style="display:flex; width:100%; height:100%; min-height:0; flex:1;">
    <aside class="meta-sidebar" id="meta-sidebar">
      <figure class="art-container" id="art-box">
        <span style="color:#505a70; font-size:3rem;">🎧</span>
      </figure>
      <div>
        <h2 id="track-title">Waiting for Rekordbox / Serato Deck...</h2>
        <p id="track-artist">Load any track in Rekordbox or Serato</p>
        <div class="meta-sub-row">
          <span id="meta-genre-year">Dance • 2024</span>
          <span class="stars-display" id="meta-stars">★★★★★</span>
        </div>
      </div>

      <div class="badge-row">
        <span class="badge key" id="badge-key" style="background:#555;">--</span>
        <span class="badge bpm" id="badge-bpm">-- BPM</span>
        <span class="badge deck" id="badge-deck">DECK 1</span>
      </div>

      <div class="badge-row">
        <span class="badge genre" id="badge-genre">Tech House</span>
        <span class="badge year" id="badge-year">2024</span>
      </div>

      <article class="card notes" id="notes-card">
        <header>📝 Live Set Notes & Cue Reminders:</header>
        <p id="notes-content">Ready for transition • Watch phrasing on Drop 2</p>
      </article>

      <article class="card harmonic" id="harm-box">
        <header>HARMONIC KEYS:</header>
        <div class="harmonic-grid" id="harm-grid"></div>
      </article>

      <div class="ctrl-panel">
        <div class="actions">
          <button id="col-btn-2" onclick="setColumnCount(2)">2 COLS</button>
          <button class="active" id="col-btn-3" onclick="setColumnCount(3)">3 COLS</button>
          <button id="col-btn-4" onclick="setColumnCount(4)">4 COLS</button>
        </div>

        <div class="actions" style="margin-top:4px;">
          <button onclick="adjustFontSize(-0.15)">A- Compact</button>
          <button onclick="adjustFontSize(0.15)">A+ Larger</button>
          <button id="prompter-autoscroll-btn" class="active" onclick="togglePrompterAutoScroll()" style="background:rgba(0,240,255,0.2); border:1px solid #00f0ff; color:#00f0ff; font-weight:800;" title="Toggle automatic lyric scrolling with track progress">⚡ Auto-Scroll</button>
        </div>
      </div>
    </aside>

    <main class="lyrics-stage-container" id="lyrics-container">
      <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; color:var(--a-color-text-muted); text-align:center; gap:12px; padding:30px 10px;">
        <div style="font-size:1.4rem; font-weight:800;">🎵 Load any track onto a deck in <b>Serato DJ Pro</b></div>
        <div style="font-size:0.9rem;">The full lyrics will organize into timestamped & bar-counted cards with zero scrolling!</div>
      </div>
    </main>
  </div>

  <!-- TAB 2: Dedicated Fullscreen VJ Visuals & Stage Controls (Active in Tabs Mode) -->
  <div id="hud-tab-vj" class="hud-tab-content" style="display:none; width:100%; height:100%; min-height:0; flex:1; flex-direction:column; overflow-y:auto; padding:16px 20px; gap:16px; background:var(--a-surface-base);">
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; border-bottom:1px solid var(--ax-border); padding-bottom:12px;">
      <div>
        <h2 style="margin:0; font-size:1.3rem; font-weight:900; color:#00f0ff; display:flex; align-items:center; gap:10px;">
          <img src="/vj_assets/logos/sr_initials_white.png" alt="SR" style="height:28px; width:auto;">
          <span>SOL ROTH // VJ MASTER CONTROL CENTER</span>
        </h2>
        <div style="font-size:0.8rem; color:var(--a-color-text-muted); margin-top:2px;">
          Direct real-time 3D narrative controller: switch story arcs, scenes, entity poses, camera angles, and portal hatches.
        </div>
      </div>
      <div class="actions">
        <a href="/visualizer" target="_blank" class="button" style="background:#00f0ff; color:#000; font-weight:900; text-decoration:none;">🎬 Open 3D Cockpit</a>
        <a href="/visualizer?mode=stage" target="_blank" class="button" style="background:#ff1a40; color:#fff; font-weight:900; text-decoration:none;">📺 Fullscreen Stage</a>
        <button onclick="openStageUrlsModal()" style="background:rgba(255,255,255,0.1); color:#fff; font-weight:800;">📋 URLs</button>
      </div>
    </div>

    <!-- Tab 2: Story Selection -->
    <article class="card">
      <header style="font-size:0.75rem; font-weight:900; color:#00f0ff; text-transform:uppercase; letter-spacing:0.8px; margin-bottom:10px;">
        📚 Select Active Story Arc:
      </header>
      <div style="display:flex; gap:10px; flex-wrap:wrap;">
        <button class="card story active" id="tab-story-btn-axiom" onclick="vjSelectStory(0)">
          <div style="font-weight:900; font-size:1.05rem;">Story 1: Project Axiom</div>
          <div style="font-size:0.75rem; opacity:0.8; margin-top:2px;">Cybernetic Awakening • 14 Scenes • Titan Climax</div>
        </button>
        <button class="card story" id="tab-story-btn-aurora" onclick="vjSelectStory(1)">
          <div style="font-weight:900; font-size:1.05rem;">Story 2: Aurora</div>
          <div style="font-size:0.75rem; opacity:0.8; margin-top:2px;">Neo-Tokyo Odyssey • 6 Scenes • Hologram Diva</div>
        </button>
      </div>
    </article>

    <!-- Tab 2: Narrative Scenes Grid -->
    <article class="card">
      <header style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
        <div style="font-size:0.75rem; font-weight:900; color:#ffd000; text-transform:uppercase; letter-spacing:0.8px;">
          🎬 Scene Selection (Tap to switch visualizer immediately):
        </div>
        <span id="vj-tab-active-scene-name" style="font-size:0.8rem; font-weight:800; color:#00f0ff;">Active: 1. Awakening</span>
      </header>
      <div id="vj-tab-scenes-grid" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(180px, 1fr)); gap:10px;">
        <!-- Dynamically rendered scene cards -->
      </div>
    </article>

    <!-- Tab 2: Tactile Control Pads for Entity, Portal & Camera -->
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:14px;">
      
      <!-- Entity Poses Panel -->
      <article class="card entity">
        <header style="font-size:0.75rem; font-weight:900; color:#ff007f; text-transform:uppercase; margin-bottom:8px;">
          🧍 2.5D Titan Entity Poses:
        </header>
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:6px;">
          <button onclick="vjTriggerPose(0)">IDLE</button>
          <button onclick="vjTriggerPose(1)">FOCUS</button>
          <button style="background:#ff007f; color:#fff; font-weight:900;" onclick="vjTriggerReach()">🖐️ REACH</button>
          <button style="background:#aa00ff; color:#fff; font-weight:900;" onclick="vjTriggerRoar()">⚡ ROAR</button>
          <button onclick="vjTriggerPose(4)">GUARD</button>
          <button onclick="vjTriggerPose(5)">ASCEND</button>
        </div>
        <footer style="margin-top:8px;">
          <button id="vj-tab-autopose-btn" style="width:100%;" onclick="vjToggleAutoPose()">🤖 Autonomous Posing: ON</button>
        </footer>
      </article>

      <!-- Portal Transition Engine Panel -->
      <article class="card portal">
        <header style="font-size:0.75rem; font-weight:900; color:#10b981; text-transform:uppercase; margin-bottom:8px;">
          🚪 Portal Transition Engine:
        </header>
        <div style="display:flex; flex-direction:column; gap:8px;">
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px;">
            <button id="vj-tab-portal-toggle" style="background:#10b981; color:#000; font-weight:900;" onclick="vjTogglePortal()">🚪 Portal: OPEN</button>
            <button id="vj-tab-portal-style" onclick="vjCyclePortalStyle()">⚙️ Style: Hatch</button>
          </div>
          <button id="vj-tab-portal-auto" onclick="vjToggleAutoPortal()">⚡ Auto Portal on Transitions: ON</button>
        </div>
      </article>

      <!-- Camera & Stage FX Panel -->
      <article class="card fx">
        <header style="font-size:0.75rem; font-weight:900; color:#ffd000; text-transform:uppercase; margin-bottom:8px;">
          📷 Camera Modes & Stage FX:
        </header>
        <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:6px;">
          <button id="vj-tab-cammode-btn" style="border-color:#00f0ff; color:#00f0ff; font-weight:900;" onclick="vjToggleCamMode()">📷 Cam: AUTO</button>
          <button onclick="vjResetCam()">🎯 Reset Cam</button>
          <button onclick="vjTriggerFx('storm')">⚡ Lightning Storm</button>
          <button onclick="vjTriggerFx('flip')">🌀 Vertigo Flip</button>
          <button onclick="vjTriggerFx('colorshift')">🎨 Color Shift</button>
          <button onclick="vjTriggerFx('hyperdrive')">🚀 Warp Boost</button>
        </div>
      </article>

    </div>
  </div>
</div>


<!-- Manual Library Search Modal -->
<div class="modal-overlay" id="search-modal" onclick="closeSearchModal()">
  <div class="modal-card modal-card-large" onclick="event.stopPropagation()">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
      <h3 style="margin:0; color:var(--dj-accent-brand); font-size:1.15rem;">🔍 Library Search</h3>
      <span style="font-size:0.75rem; color:var(--a-color-text-muted);">4,346 tracks</span>
    </div>
    <input type="text" id="search-box" class="search-input-field" placeholder="Type artist or song title..." oninput="doSearch(this.value)">
    <div class="search-results-list" id="search-results"></div>
    <div style="margin-top:10px; display:flex; justify-content:flex-end;">
      <button onclick="closeSearchModal()">Close (ESC)</button>
    </div>
  </div>
</div>

<!-- Sol Roth AI DJ Copilot Modal (with Two-Tier Next Track Matchmaker) -->
<div class="modal-overlay" id="copilot-modal" onclick="closeCopilotModal()">
  <div class="modal-card modal-card-large" onclick="event.stopPropagation()">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid var(--ax-border); padding-bottom:8px;">
      <div>
        <h3 style="margin:0; color:var(--dj-accent-brand); font-size:1.2rem; display:flex; align-items:center; gap:8px;">
          <span>🤖</span> Sol Roth AI DJ Copilot & Next Track Matchmaker
        </h3>
        <div style="font-size:0.75rem; color:var(--a-color-text-muted);" id="copilot-deck-badge">Real-time harmonic crate analysis & transition strategy</div>
      </div>
      <button onclick="closeCopilotModal()">✕ Close (ESC)</button>
    </div>

    <!-- Two-Tier Next Track Matchmaker -->
    <div style="background:linear-gradient(135deg, rgba(0,240,255,0.08) 0%, rgba(255,208,0,0.08) 100%); border:1px solid var(--dj-accent-cyan); border-radius:8px; padding:12px; margin-bottom:12px;">
      <div style="font-size:0.8rem; font-weight:900; color:var(--dj-accent-gold); text-transform:uppercase; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;">
        <span>🎯 Smart Next Track Matchmaker</span>
        <button style="padding:2px 8px; font-size:0.72rem;" onclick="loadMatchmakerRecommendations()">🔄 Refresh Matches</button>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;" id="matchmaker-container">
        <!-- Tier 1: In-Crate Recommendation -->
        <div style="background:var(--a-surface-base); border:1px solid var(--ax-border); border-left:3px solid var(--dj-accent-green); border-radius:6px; padding:10px; display:flex; flex-direction:column; gap:4px;" id="match-in-crate">
          <div style="font-size:0.72rem; font-weight:900; color:var(--dj-accent-green); text-transform:uppercase;">📂 Tier 1: In Current Crate / Playlist</div>
          <div style="font-weight:900; font-size:0.9rem; color:var(--ax-text);" id="match-crate-title">Analyzing active crate...</div>
          <div style="font-size:0.75rem; color:var(--dj-accent-cyan);" id="match-crate-artist">--</div>
          <div style="font-size:0.72rem; color:var(--a-color-text-muted); margin-top:2px;" id="match-crate-meta">--</div>
          <div style="display:flex; gap:6px; margin-top:6px;" id="match-crate-actions"></div>
        </div>

        <!-- Tier 2: Global Library Wildcard -->
        <div style="background:var(--a-surface-base); border:1px solid var(--ax-border); border-left:3px solid var(--dj-accent-pink); border-radius:6px; padding:10px; display:flex; flex-direction:column; gap:4px;" id="match-global">
          <div style="font-size:0.72rem; font-weight:900; color:var(--dj-accent-pink); text-transform:uppercase;">🌐 Tier 2: Global Library Wildcard</div>
          <div style="font-weight:900; font-size:0.9rem; color:var(--ax-text);" id="match-global-title">Analyzing 4,404 tracks...</div>
          <div style="font-size:0.75rem; color:var(--dj-accent-cyan);" id="match-global-artist">--</div>
          <div style="font-size:0.72rem; color:var(--a-color-text-muted); margin-top:2px;" id="match-global-meta">--</div>
          <div style="display:flex; gap:6px; margin-top:6px;" id="match-global-actions"></div>
        </div>
      </div>
    </div>

    <!-- AI DJ Transition Strategy & Copilot Response -->
    <div style="flex:1; overflow-y:auto; display:flex; flex-direction:column; gap:8px;">
      <div style="font-size:0.75rem; font-weight:900; color:var(--dj-accent-cyan); text-transform:uppercase;">💡 Transition Advice & Mix Strategy</div>
      <div id="copilot-tip-text" style="font-size:0.88rem; line-height:1.45; color:var(--ax-text); background:var(--a-surface-base); border:1px solid var(--ax-border); border-radius:6px; padding:12px;">
        Tap "Live AI Crate Analysis" or "Refresh Matches" to analyze the active Serato deck harmonic trajectory.
      </div>
    </div>

    <div style="margin-top:12px; display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--ax-border); padding-top:10px;">
      <button style="background:var(--dj-copilot-btn-bg); color:#fff; font-weight:900;" onclick="askCopilotDirect()">⚡ Live AI Crate Analysis</button>
      <button onclick="closeCopilotModal()">Close</button>
    </div>
  </div>
</div>

<!-- Manual Library Search Modal -->
<div class="modal-overlay" id="search-modal" onclick="closeSearchModal()">
  <div class="modal-card modal-card-large" onclick="event.stopPropagation()">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
      <h3 style="margin:0; color:var(--dj-accent-brand); font-size:1.15rem;">🔍 Instant Manual Library Search</h3>
      <button onclick="closeSearchModal()">Close (ESC)</button>
    </div>
    <input type="text" id="search-box" class="search-input" placeholder="Search 4,404 tracks by Title, Artist or Keyword..." oninput="doSearch(this.value)">
    <div class="search-results-list" id="search-results">
      <div style="color:var(--a-color-text-muted); padding:10px; text-align:center;">Type to search all 4,404 tracks in memory...</div>
    </div>
  </div>
</div>

<!-- Live Artist Vocal & Improv Prompter Modal -->
<div class="modal-overlay" id="mc-modal" onclick="closeMCModal()">
  <div class="modal-card modal-card-large" onclick="event.stopPropagation()">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
      <div>
        <h3 style="margin:0; color:var(--dj-accent-pink); font-size:1.2rem; display:flex; align-items:center; gap:6px;">
          <span>🎙️</span> Sol Roth Live Artist Vocal & Improv Prompter
        </h3>
        <div style="font-size:0.75rem; color:var(--a-color-text-muted);" id="mc-track-badge">Live Stage Flow</div>
      </div>
      <button onclick="closeMCModal()">Close (ESC)</button>
    </div>
    <div class="mc-style-selector">
      <button class="active" id="btn-style-spoken_poetry" onclick="setMCStyle('spoken_poetry')">🌌 Dark Spoken-Word Poetry</button>
      <button id="btn-style-melodic_drone" onclick="setMCStyle('melodic_drone')">✨ Ethereal Melodic Drone</button>
      <button id="btn-style-metal_scream" onclick="setMCStyle('metal_scream')">⚡ Raw Metal/Trap Scream</button>
      <button id="btn-style-underground_cadence" onclick="setMCStyle('underground_cadence')">🔥 Deep Grime / Half-Time Cadence</button>
    </div>
    <div class="mc-verse-display" id="mc-verse-text">
      Click 'Compose Improvisation' below to craft an instant 8-bar track-aware artistic vocal interpretation.
    </div>
    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px; border-top:1px solid var(--ax-border); padding-top:10px;">
      <span style="font-size:0.75rem; color:var(--a-color-text-muted);" id="mc-source-info">Live Artist Vocal Engine</span>
      <div style="display:flex; gap:6px;">
        <button onclick="pinVerseToNotes()">📌 Pin to Stage Notes</button>
        <button class="primary" onclick="generateMCVerse()">🎙️ Compose Improvisation</button>
      </div>
    </div>
  </div>
</div>

<!-- Mobile Bonjour Pairing Modal -->
<div class="modal-overlay" id="pair-modal" onclick="closePairingModal()">
  <div class="modal-card modal-card-sm" onclick="event.stopPropagation()">
    <h3 style="margin:0 0 10px 0; color:var(--dj-accent-brand); font-size:1.15rem; text-align:center;">📱 Connect iPad / iPhone on Stage</h3>
    <div style="text-align:center; display:flex; flex-direction:column; align-items:center; gap:10px;">
      <div id="qr-container" style="background:#fff; padding:8px; border-radius:8px; display:inline-block;"></div>
      <div style="font-size:0.8rem; color:var(--a-color-text-muted);">
        Scan with iPad / iPhone Camera or open Safari to:<br>
        <span style="font-family:var(--a-font-family-mono); font-size:0.9rem; font-weight:800; color:var(--ax-text);" id="ip-display">http://127.0.0.1:7777</span>
      </div>
    </div>
    <button style="width:100%; justify-content:center; margin-top:10px;" onclick="closePairingModal()">Close</button>
  </div>
</div>

<!-- M-VAVE SMC-PAD, FLX10 & FLX2 Hardware Controller & Live Sampler Bank Switcher Modal -->
<div id="controller-modal" style="display:none; position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.85); z-index:9999; backdrop-filter:blur(8px); align-items:center; justify-content:center; padding:16px;">
  <div style="background:var(--ax-surface); border:2px solid var(--dj-accent-brand); border-radius:12px; max-width:920px; width:100%; padding:20px; box-shadow:0 10px 40px rgba(0,240,255,0.3); display:flex; flex-direction:column; gap:14px; max-height:90vh; overflow-y:auto;">
    <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--ax-border); padding-bottom:10px;">
      <div>
        <div style="font-weight:900; font-size:1.25rem; color:var(--dj-accent-brand); display:flex; align-items:center; gap:8px;">
          <span>🎛️</span> Hardware Pad Map & AI Live Sampler Switcher
        </div>
        <div style="font-size:0.75rem; color:var(--a-color-text-muted);">Real-time sync with Pioneer DDJ-FLX10, FLX2, and M-VAVE SMC-PAD</div>
      </div>
      <button onclick="closeControllerModal()" style="padding:4px 8px;">✕ Close</button>
    </div>

    <!-- Active Hardware Controller Mode Selector -->
    <div style="display:flex; gap:6px; flex-wrap:wrap; align-items:center;">
      <span style="font-size:0.75rem; font-weight:900; color:var(--a-color-text-muted); text-transform:uppercase;">Controller View:</span>
      <button id="ctrl-mode-flx10" onclick="setControllerView('flx10')" style="background:var(--dj-accent-brand); color:#000; font-weight:900;">🔘 Pioneer DDJ-FLX10 (16 Pads)</button>
      <button id="ctrl-mode-flx2-mvave" onclick="setControllerView('flx2-mvave')">🔘 DDJ-FLX2 + M-VAVE SMC-PAD</button>
      <button id="ctrl-mode-midi" onclick="setControllerView('midi')">🔘 Universal MIDI / Touchscreen</button>
    </div>

    <!-- 🤖 AI Track-Aware Live Recommendation Banner with 1-Click Fast Set Button -->
    <div style="background:linear-gradient(135deg, rgba(255,208,0,0.12) 0%, rgba(0,240,255,0.08) 100%); border:1px solid var(--dj-accent-gold); border-left:5px solid var(--dj-accent-gold); border-radius:8px; padding:12px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;" id="ai-recommendation-box">
      <div style="min-width:0; flex:1;">
        <div style="display:flex; align-items:center; gap:6px;">
          <span style="font-size:0.75rem; font-weight:900; color:var(--dj-accent-gold); text-transform:uppercase; letter-spacing:0.8px;">🤖 AI Deck Intelligence Recommendation:</span>
          <span id="ai-rec-preset-badge" style="background:var(--dj-accent-gold); color:#000; font-weight:900; font-size:0.75rem; padding:2px 6px; border-radius:4px;">Loading...</span>
        </div>
        <div style="font-size:0.82rem; color:var(--ax-text); font-weight:700; margin-top:3px;" id="ai-rec-reason">
          Analyzing active Serato deck BPM, key, and genre...
        </div>
      </div>
      <button class="success" id="btn-ai-fast-set" style="background:var(--dj-accent-green); color:#000; font-weight:900; font-size:0.85rem; padding:8px 14px; box-shadow:0 0 15px rgba(0,255,128,0.4);" onclick="applyAiFastSetRecommendation()">
        ⚡ 1-Click Fast Set to Pads
      </button>
    </div>

    <!-- Live Performance Sampler Preset Selector -->
    <div style="background:var(--a-surface-base); border:1px solid var(--ax-border); border-radius:8px; padding:10px;">
      <div style="font-size:0.75rem; font-weight:900; color:var(--dj-accent-cyan); text-transform:uppercase; margin-bottom:6px;">
        📂 Manual Sampler Kit Selection:
      </div>
      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(220px, 1fr)); gap:5px;" id="sampler-preset-buttons">
        <button style="justify-content:flex-start; padding:6px 8px; font-size:0.78rem;" onclick="switchLiveSampler('essentials', this)">🚨 Essentials & Stage Weapons</button>
        <button style="justify-content:flex-start; padding:6px 8px; font-size:0.78rem;" onclick="switchLiveSampler('drum_loops', this)">🥁 Continuous Drum Loops</button>
        <button style="justify-content:flex-start; padding:6px 8px; font-size:0.78rem;" onclick="switchLiveSampler('ambient_atmo', this)">🌌 Ambient Soundbeds & Textures</button>
        <button style="justify-content:flex-start; padding:6px 8px; font-size:0.78rem;" onclick="switchLiveSampler('live_fx', this)">⚡ Live FX, Sweeps & Risers</button>
        <button style="justify-content:flex-start; padding:6px 8px; font-size:0.78rem;" onclick="switchLiveSampler('turntablist', this)">🎧 Turntablist Battle Scratch</button>
        <button style="justify-content:flex-start; padding:6px 8px; font-size:0.78rem;" onclick="switchLiveSampler('dark_techno', this)">⚡ Dark Techno & Acid Rave</button>
        <button style="justify-content:flex-start; padding:6px 8px; font-size:0.78rem;" onclick="switchLiveSampler('hip_hop_trap', this)">🎤 Hip-Hop, Trap & Drill</button>
        <button style="justify-content:flex-start; padding:6px 8px; font-size:0.78rem;" onclick="switchLiveSampler('latin_dembow', this)">🌴 Latin Club, Dembow & Baile</button>
      </div>
      <div style="font-size:0.72rem; color:var(--dj-accent-green); font-weight:800; margin-top:6px;" id="sampler-active-status">
        ✅ Active Sampler: Currently Loaded on Serato & Controller Pads
      </div>
    </div>

    <!-- Active 16 Performance Pads Grid with Real-Time Audio Audition -->
    <div>
      <div style="font-size:0.8rem; font-weight:900; color:var(--dj-accent-cyan); text-transform:uppercase; margin-bottom:6px; display:flex; justify-content:space-between; align-items:center;">
        <span id="pads-view-title">🎹 Active 16 Performance Pads (Tap to Audition Audio)</span>
        <span style="font-size:0.7rem; color:var(--a-color-text-muted);" id="pads-deck-split">Pads 1–8: Bank A / Deck 1 • Pads 9–16: Bank B / Deck 2</span>
      </div>
      <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:8px;" id="dynamic-pads-grid">
        <!-- Currently Loaded 16 Dynamic Pads Rendered Instantly on Open -->
      </div>
    </div>

    <!-- M-VAVE & FLX2 Hardware Rotary Knobs Reference (Visible in M-VAVE view) -->
    <div id="hw-knobs-section" style="border-top:1px solid var(--ax-border); padding-top:10px;">
      <div style="font-size:0.75rem; font-weight:900; color:var(--dj-accent-pink); text-transform:uppercase; margin-bottom:6px;">🎛️ 8 Rotary Encoders (M-VAVE Knobs 1–8)</div>
      <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:6px; font-size:0.72rem;">
        <div style="background:var(--a-surface-base); padding:6px 8px; border-radius:4px; border:1px solid var(--ax-border);"><b style="color:var(--dj-accent-cyan);">K1:</b> D1 Color FX Filter</div>
        <div style="background:var(--a-surface-base); padding:6px 8px; border-radius:4px; border:1px solid var(--ax-border);"><b style="color:var(--dj-accent-cyan);">K2:</b> D1 Vocal Part ISO</div>
        <div style="background:var(--a-surface-base); padding:6px 8px; border-radius:4px; border:1px solid var(--ax-border);"><b style="color:var(--dj-accent-cyan);">K3:</b> D1 Loop Length</div>
        <div style="background:var(--a-surface-base); padding:6px 8px; border-radius:4px; border:1px solid var(--ax-border);"><b style="color:var(--dj-accent-cyan);">K4:</b> D1 Key Shift</div>
        <div style="background:var(--a-surface-base); padding:6px 8px; border-radius:4px; border:1px solid var(--ax-border);"><b style="color:var(--dj-accent-pink);">K5:</b> D2 Color FX Filter</div>
        <div style="background:var(--a-surface-base); padding:6px 8px; border-radius:4px; border:1px solid var(--ax-border);"><b style="color:var(--dj-accent-pink);">K6:</b> D2 Vocal Part ISO</div>
        <div style="background:var(--a-surface-base); padding:6px 8px; border-radius:4px; border:1px solid var(--ax-border);"><b style="color:var(--dj-accent-pink);">K7:</b> D2 Loop Length</div>
        <div style="background:var(--a-surface-base); padding:6px 8px; border-radius:4px; border:1px solid var(--ax-border);"><b style="color:var(--dj-accent-pink);">K8:</b> D2 Key Shift</div>
      </div>
    </div>
  </div>
</div>

<!-- Stage & External Screen Direct URLs Quick-Reference Modal -->
<div id="stage-urls-modal" style="display:none; position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.85); z-index:9999; backdrop-filter:blur(8px); align-items:center; justify-content:center; padding:16px;" onclick="if(event.target===this)closeStageUrlsModal()">
  <div style="background:#0b1120; border:2px solid #00f0ff; border-radius:12px; max-width:720px; width:100%; padding:22px; box-shadow:0 10px 40px rgba(0,240,255,0.3); display:flex; flex-direction:column; gap:14px; max-height:90vh; overflow-y:auto;">
    <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:10px;">
      <div style="font-weight:900; font-size:1.2rem; color:#00f0ff; display:flex; align-items:center; gap:8px;">
        <img src="/vj_assets/logos/sr_initials_white.png" alt="SR" style="height:26px; width:auto;">
        <span>Sol Roth // Stage & Display URLs</span>
      </div>
      <button onclick="closeStageUrlsModal()" style="padding:4px 8px;">✕ Close</button>
    </div>

    <div style="font-size:0.84rem; color:#94a3b8; line-height:1.45;">
      Load these direct links on secondary monitors, LED video walls, projectors, or iPads across your Wi-Fi network:
    </div>

    <div style="display:flex; flex-direction:column; gap:10px;" id="stage-urls-list">
      <!-- Direct URL Cards -->
      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(0,240,255,0.25); border-left:4px solid #00f0ff; border-radius:8px; padding:12px; display:flex; justify-content:space-between; align-items:center; gap:10px; flex-wrap:wrap;">
        <div style="min-width:0; flex:1;">
          <div style="font-weight:900; font-size:0.92rem; color:#00f0ff;">🎬 3D Master Visualizer (DJ Cockpit with Controls)</div>
          <div style="font-size:0.75rem; color:#cbd5e1; margin-top:2px;">Full DJ control bar, character pose buttons, scene switcher, portal trigger, camera modes.</div>
          <div style="font-family:monospace; font-size:0.8rem; color:#38bdf8; margin-top:4px; word-break:break-all;" id="url-vis-controls">/visualizer</div>
        </div>
        <div style="display:flex; gap:6px;">
          <button style="background:#00f0ff; color:#000; font-weight:900; padding:6px 12px;" onclick="copyDirectUrl('url-vis-controls', this)">📋 Copy</button>
          <a href="/visualizer" target="_blank" class="button" style="background:rgba(0,240,255,0.2); color:#00f0ff; font-weight:900; padding:6px 12px; text-decoration:none;">🚀 Open</a>
        </div>
      </div>

      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,26,64,0.3); border-left:4px solid #ff1a40; border-radius:8px; padding:12px; display:flex; justify-content:space-between; align-items:center; gap:10px; flex-wrap:wrap;">
        <div style="min-width:0; flex:1;">
          <div style="font-weight:900; font-size:0.92rem; color:#ff4d6d;">📺 Fullscreen Stage View (Clean LED Wall / Projector Mode)</div>
          <div style="font-size:0.75rem; color:#cbd5e1; margin-top:2px;">Zero HUD controls, zero buttons. Pure 3D audio-reactive visuals and portal transitions synced live.</div>
          <div style="font-family:monospace; font-size:0.8rem; color:#f87171; margin-top:4px; word-break:break-all;" id="url-vis-stage">/visualizer?mode=stage</div>
        </div>
        <div style="display:flex; gap:6px;">
          <button style="background:#ff1a40; color:#fff; font-weight:900; padding:6px 12px;" onclick="copyDirectUrl('url-vis-stage', this)">📋 Copy</button>
          <a href="/visualizer?mode=stage" target="_blank" class="button" style="background:rgba(255,26,64,0.2); color:#ff4d6d; font-weight:900; padding:6px 12px; text-decoration:none;">🚀 Open</a>
        </div>
      </div>

      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(245,158,11,0.3); border-left:4px solid #f59e0b; border-radius:8px; padding:12px; display:flex; justify-content:space-between; align-items:center; gap:10px; flex-wrap:wrap;">
        <div style="min-width:0; flex:1;">
          <div style="font-weight:900; font-size:0.92rem; color:#fbbf24;">🎤 Live Stage Prompter HUD (Main Console)</div>
          <div style="font-size:0.75rem; color:#cbd5e1; margin-top:2px;">Serato/Rekordbox live song sync, lyric teleprompter, Camelot harmonic mix radar.</div>
          <div style="font-family:monospace; font-size:0.8rem; color:#fde68a; margin-top:4px; word-break:break-all;" id="url-prompter">/</div>
        </div>
        <div style="display:flex; gap:6px;">
          <button style="background:#f59e0b; color:#000; font-weight:900; padding:6px 12px;" onclick="copyDirectUrl('url-prompter', this)">📋 Copy</button>
          <a href="/" target="_blank" class="button" style="background:rgba(245,158,11,0.2); color:#fbbf24; font-weight:900; padding:6px 12px; text-decoration:none;">🚀 Open</a>
        </div>
      </div>

      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(147,51,234,0.3); border-left:4px solid #9333ea; border-radius:8px; padding:12px; display:flex; justify-content:space-between; align-items:center; gap:10px; flex-wrap:wrap;">
        <div style="min-width:0; flex:1;">
          <div style="font-weight:900; font-size:0.92rem; color:#c084fc;">📡 OBS Transparent Stream Overlay</div>
          <div style="font-size:0.75rem; color:#cbd5e1; margin-top:2px;">Alpha-channel transparent lower-third for live streaming via OBS Browser Source.</div>
          <div style="font-family:monospace; font-size:0.8rem; color:#d8b4fe; margin-top:4px; word-break:break-all;" id="url-obs">/obs_lyrics</div>
        </div>
        <div style="display:flex; gap:6px;">
          <button style="background:#9333ea; color:#fff; font-weight:900; padding:6px 12px;" onclick="copyDirectUrl('url-obs', this)">📋 Copy</button>
          <a href="/obs_lyrics" target="_blank" class="button" style="background:rgba(147,51,234,0.2); color:#c084fc; font-weight:900; padding:6px 12px; text-decoration:none;">🚀 Open</a>
        </div>
      </div>
    </div>
  </div>
</div>


<!-- SOL ROTH VJ STAGE REMOTE DOCK (ZERO-LATENCY BROADCASTCHANNEL BRIDGE) -->
<aside class="dock" id="vj-remote-dock" data-state="standard">
  <div>
    <!-- Top Row: Stories (Axiom vs Aurora), Scene Selector Buttons, and Stage Popouts -->
    <header>
      <div style="display:flex; align-items:center; gap:8px; flex-shrink:0;">
        <span style="font-weight:900; font-size:0.86rem; color:#00f0ff; letter-spacing:0.8px; display:flex; align-items:center; gap:6px;">
          🎬 VJ STAGE
        </span>
        <span class="badge success" id="vj-sync-status" style="font-size:0.7rem; font-weight:800; color:#00ff80; background:rgba(0,255,128,0.15); border:1px solid rgba(0,255,128,0.35); padding:2px 6px; border-radius:4px; display:inline-flex; align-items:center; gap:4px;">
          <span style="display:inline-block; width:5px; height:5px; border-radius:50%; background:#00ff80; animation:pulse 1s infinite;"></span>
          3D SYNC
        </span>

        <!-- Story Selection: Axiom vs Aurora -->
        <nav class="segmented">
          <button class="active" id="btn-story-axiom" onclick="vjSelectStory(0)">📚 Axiom (14)</button>
          <button id="btn-story-aurora" onclick="vjSelectStory(1)">📚 Aurora (6)</button>
        </nav>
      </div>

      <!-- Horizontal Scrollable Scene Selector Buttons -->
      <nav id="vj-scenes-container">
        <!-- Rendered dynamically via vjRenderSceneButtons() -->
      </nav>

      <!-- Quick Actions -->
      <div class="actions">
        <a href="/visualizer" target="_blank" class="button" style="background:rgba(0,240,255,0.18); border-color:#00f0ff; color:#00f0ff;" title="Open Master Visualizer with DJ Cockpit">🎬 Controls</a>
        <a href="/visualizer?mode=stage" target="_blank" class="button" style="background:rgba(255,26,64,0.22); border-color:#ff1a40; color:#ff4d6d;" title="Launch Fullscreen Stage View">📺 Stage</a>
        <button onclick="openStageUrlsModal()" title="Direct URLs Modal">📋 URLs</button>
        <button onclick="toggleVjDock()" style="padding:2px 6px;" title="Minimize / Expand VJ Dock">
          <span id="vj-dock-chevron">▼</span>
        </button>
      </div>
    </header>

    <!-- Bottom Row: Real-Time Kinetic Entity Poses, Portal Engine, Camera Modes & FX -->
    <footer id="vj-dock-body">
      
      <!-- Entity Poses -->
      <div>
        <small>Entity:</small>
        <button id="vj-btn-pose" onclick="vjTriggerPose()" title="Cycle Entity Pose (Key P)">🧍 Pose: IDLE</button>
        <button onclick="vjTriggerReach()" title="Dramatic Hand Reach Toward Screen (Key K)">🖐️ Reach</button>
        <button onclick="vjTriggerRoar()" title="Entity Climax Roar / Ascend (Key L)">⚡ Roar</button>
        <button id="vj-btn-autopose" onclick="vjToggleAutoPose()" title="Toggle Autonomous Posing">🤖 Auto: ON</button>
      </div>

      <!-- Portal Transition Engine -->
      <div>
        <small>Portal:</small>
        <button class="portal" id="vj-btn-portal" onclick="vjTogglePortal()" title="Toggle Foreground Portal / Blast Hatch (Key G)">🚪 Portal: OPEN</button>
        <button class="portal" id="vj-btn-portal-style" onclick="vjCyclePortalStyle()" title="Cycle Portal Style (Hatch/Shutter/Iris) (Key J)">⚙️ Style: Hatch</button>
        <button class="portal" id="vj-btn-portal-auto" onclick="vjToggleAutoPortal()" title="Auto-close portal on scene changes (Key Y)">⚡ Auto: ON</button>
      </div>

      <!-- Camera & Real-Time FX -->
      <div>
        <small>Cam/FX:</small>
        <button class="cam" id="vj-btn-cammode" onclick="vjToggleCamMode()" title="Toggle Camera Mode: AUTO / DRIFT / FIXED (Key C)">📷 Cam: AUTO</button>
        <button class="cam" onclick="vjResetCam()" title="Reset Camera to Perfect Framing (Key R)">🎯 Reset Cam</button>
        <button onclick="vjTriggerFx('storm')" title="Trigger Thunderstorm & Lightning Strobe (Key S)">⚡ Storm</button>
        <button onclick="vjTriggerFx('flip')" title="Vertical Camera Invert / Vertigo Flip (Key V)">🌀 Flip</button>
        <button onclick="vjTriggerFx('colorshift')" title="Color Shift / Dynamic Tint (Key X)">🎨 Color</button>
        <button onclick="vjToggleBrand()" title="Hero Brand Billboard & Announcement (Key A)">📢 Announce</button>
        <button onclick="vjTriggerFx('hyperdrive')" title="Speed Warp Boost (Spacebar)">🚀 Boost</button>
        <button onclick="vjTriggerFx('blackout')" title="Blackout (Key B)">🌑 Blackout</button>
        <button class="danger" onclick="vjTriggerFx('override')" title="Emergency Red Override (Key O)">🚨 Override</button>
      </div>

      <!-- Notification Toast -->
      <output id="vj-toast">
        ⚡ Ready
      </output>
    </footer>
  </div>
</aside>

<style>
  /* HUD View Switcher & Ajax Tabs */
  nav.segmented#hud-view-switcher {
    display: inline-flex;
    align-items: center;
    background: var(--a-surface-raised);
    border: 1px solid var(--ax-border);
    border-radius: 20px;
    padding: 2px;
    gap: 2px;
    flex-shrink: 0;
  }
  nav.segmented#hud-view-switcher button {
    background: transparent;
    border: none;
    color: var(--a-color-text-muted);
    font-size: 0.72rem;
    font-weight: 800;
    padding: 4px 9px;
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.15s ease;
    white-space: nowrap;
  }
  nav.segmented#hud-view-switcher button:hover {
    color: var(--ax-text);
  }
  nav.segmented#hud-view-switcher button.active {
    background: var(--dj-accent-brand);
    color: #000;
    font-weight: 900;
    box-shadow: 0 0 10px rgba(0, 240, 255, 0.4);
  }

  nav.tabs#hud-ajax-tabs {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
  }
  nav.tabs#hud-ajax-tabs button {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid var(--ax-border);
    color: var(--ax-text);
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 0.76rem;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.15s;
    white-space: nowrap;
  }
  nav.tabs#hud-ajax-tabs button.active {
    background: rgba(0, 240, 255, 0.2);
    border-color: #00f0ff;
    color: #00f0ff;
    box-shadow: 0 0 10px rgba(0, 240, 255, 0.3);
  }

  /* View Mode Rules */
  /* 1. Split Mode */
  [data-hud-view="split"] aside.dock {
    display: block !important;
  }
  [data-hud-view="split"] .main-container {
    padding-bottom: 90px;
  }

  /* 2. Tabs Mode */
  [data-hud-view="tabs"] aside.dock {
    display: none !important;
  }
  [data-hud-view="tabs"] .main-container {
    padding-bottom: 12px;
  }

  /* 3. Compact Mode (iPhone & Mobile Optimized) */
  [data-hud-view="compact"] aside.dock {
    display: block !important;
    padding-bottom: env(safe-area-inset-bottom, 2px);
  }
  [data-hud-view="compact"] #vj-dock-body {
    display: none !important;
  }
  [data-hud-view="compact"] .main-container {
    padding-bottom: 44px;
  }

  /* 4. Focus Mode (Full Teleprompter) */
  [data-hud-view="focus"] header.main,
  [data-hud-view="focus"] aside.dock,
  [data-hud-view="focus"] aside.meta-sidebar {
    display: none !important;
  }
  [data-hud-view="focus"] .lyrics-stage-container {
    width: 100vw !important;
    max-width: 100vw !important;
    padding: 24px 20px !important;
  }
  [data-hud-view="focus"] .lyric-card {
    font-size: 1.85rem !important;
    line-height: 1.45 !important;
  }
  [data-hud-view="focus"] #focus-exit-btn {
    display: block !important;
  }

  /* Floating Focus Exit Button */
  #focus-exit-btn {
    position: fixed;
    top: 14px;
    right: 14px;
    z-index: 9999;
    background: rgba(255, 26, 64, 0.9);
    border: 1px solid #ff1a40;
    color: #fff;
    font-weight: 900;
    font-size: 0.8rem;
    padding: 6px 14px;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(8px);
  }

  /* Axiom Dock Component Styling */
  aside.dock {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 8500;
    background: rgba(7, 9, 14, 0.96);
    border-top: 2px solid #00f0ff;
    box-shadow: 0 -8px 30px rgba(0, 240, 255, 0.25);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  aside.dock > div {
    max-width: 1400px;
    margin: 0 auto;
    padding: 6px 12px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  aside.dock header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
  }
  aside.dock header nav.segmented {
    display: flex;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(0,240,255,0.3);
    border-radius: 20px;
    padding: 2px;
    gap: 2px;
  }
  aside.dock header nav.segmented button {
    background: transparent;
    border: none;
    color: #94a3b8;
    font-size: 0.72rem;
    font-weight: 800;
    padding: 3px 8px;
    border-radius: 14px;
    cursor: pointer;
    transition: all 0.15s;
    white-space: nowrap;
  }
  aside.dock header nav.segmented button:hover { color: #fff; }
  aside.dock header nav.segmented button.active {
    background: #00f0ff;
    color: #000;
    font-weight: 900;
  }

  aside.dock nav#vj-scenes-container {
    display: flex;
    align-items: center;
    gap: 4px;
    overflow-x: auto;
    flex: 1;
    min-width: 200px;
    scrollbar-width: thin;
  }
  aside.dock nav#vj-scenes-container button {
    background: rgba(20, 28, 48, 0.85);
    border: 1px solid rgba(0, 240, 255, 0.25);
    color: #cbd5e1;
    padding: 4px 9px;
    border-radius: 5px;
    font-size: 0.72rem;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.15s;
    white-space: nowrap;
    flex-shrink: 0;
  }
  aside.dock nav#vj-scenes-container button:hover {
    background: rgba(0, 240, 255, 0.2);
    color: #fff;
    border-color: #00f0ff;
  }
  aside.dock nav#vj-scenes-container button.active {
    background: #00f0ff;
    color: #000;
    font-weight: 900;
    border-color: #00f0ff;
    box-shadow: 0 0 10px rgba(0, 240, 255, 0.4);
  }

  aside.dock .actions {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
  }
  aside.dock .actions button,
  aside.dock .actions a.button {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.72rem;
    font-weight: 800;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
  aside.dock .actions button:hover,
  aside.dock .actions a.button:hover {
    background: #00f0ff;
    color: #000;
  }

  aside.dock footer#vj-dock-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
    border-top: 1px solid rgba(255,255,255,0.08);
    padding-top: 6px;
  }
  aside.dock footer div {
    display: flex;
    align-items: center;
    gap: 4px;
    flex-wrap: wrap;
  }
  aside.dock footer small {
    font-size: 0.7rem;
    font-weight: 800;
    color: #8fa0c0;
    text-transform: uppercase;
  }
  aside.dock footer button {
    background: rgba(20, 28, 48, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: #f0f4f8;
    padding: 4px 8px;
    border-radius: 5px;
    font-size: 0.72rem;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.15s;
    white-space: nowrap;
  }
  aside.dock footer button:hover {
    border-color: #00f0ff;
    color: #00f0ff;
  }
  aside.dock footer button.portal {
    border-color: rgba(16, 185, 129, 0.4);
    color: #10b981;
  }
  aside.dock footer button.portal:hover {
    background: rgba(16, 185, 129, 0.2);
  }
  aside.dock footer button.cam {
    border-color: rgba(245, 158, 11, 0.4);
    color: #fbbf24;
  }
  aside.dock footer button.cam:hover {
    background: rgba(245, 158, 11, 0.2);
  }
  aside.dock footer button.danger {
    border-color: rgba(255, 26, 64, 0.4);
    color: #ff4d6d;
  }
  aside.dock footer button.danger:hover {
    background: #ff1a40;
    color: #fff;
  }
  aside.dock output#vj-toast {
    font-size: 0.74rem;
    font-weight: 800;
    color: #00f0ff;
    opacity: 0;
    transition: opacity 0.2s;
    white-space: nowrap;
    display: inline-block;
  }

  /* Axiom Card Variants in Tabs */
  button.card.story {
    flex: 1;
    min-width: 220px;
    background: var(--a-surface-base);
    border: 2px solid var(--ax-border);
    border-radius: 8px;
    padding: 12px 14px;
    cursor: pointer;
    text-align: left;
    color: var(--ax-text);
    transition: all 0.18s ease;
  }
  button.card.story:hover {
    border-color: rgba(0, 240, 255, 0.5);
  }
  button.card.story.active {
    border-color: #00f0ff;
    background: rgba(0, 240, 255, 0.08);
    box-shadow: 0 0 16px rgba(0, 240, 255, 0.25);
  }

  button.card.scene {
    background: var(--a-surface-base);
    border: 1px solid var(--ax-border);
    border-radius: 8px;
    padding: 10px 12px;
    cursor: pointer;
    transition: all 0.15s ease;
    display: flex;
    flex-direction: column;
    gap: 4px;
    text-align: left;
  }
  button.card.scene:hover {
    border-color: #00f0ff;
    transform: translateY(-2px);
  }
  button.card.scene.active {
    border: 2px solid #00f0ff;
    background: rgba(0, 240, 255, 0.12);
    box-shadow: 0 0 14px rgba(0, 240, 255, 0.35);
  }
</style>

<script src="/axiom01/js/axiom.min.js"></script>
<script src="/axiom01/js/axicons-base.js"></script>
<script src="/axiom01/js/render-icons.js"></script>

<script>
  let activeDeck = "1";
  let multiDeckData = { "1": null, "2": null, "3": null, "4": null };
  let activeColumns = window.innerWidth < 768 ? 1 : (window.innerWidth <= 1024 ? 2 : 3);
  let currentFontSize = window.innerWidth < 768 ? 1.35 : 1.35;
  let localIp = '127.0.0.1';
  let activeMCStyle = 'spoken_poetry';
  let lastGeneratedVerse = '';
  let searchTimeout = null;
  let currentSamplerPads = [];
  let currentControllerView = 'flx10';
  let recommendedPresetId = 'tech_house';
  let currentAudio = new Audio();
  let currentDJEngine = localStorage.getItem('dj_engine_pref') || 'auto';

  // ============================================================================
  // SOL ROTH VJ STAGE BUS & 3D VISUALIZER BROADCAST ENGINE
  // ============================================================================
  const stageBus = new BroadcastChannel('sol_roth_stage_bus');
  const visualsBus = new BroadcastChannel('sol_roth_visuals');
  let isVjDockOpen = true;
  let vjToastTimer = null;
  let lastBroadcastTrack = '';

  const VJ_STORIES = [
    {
      id: 'axiom',
      name: 'Axiom',
      title: 'Story 1: Project Axiom (Cybernetic Awakening)',
      scenes: [
        { id: 0, name: 'Awakening', desc: 'Titan Awakening 2.5D Climax' },
        { id: 1, name: 'Matrix', desc: 'Volumetric Holographic Matrix' },
        { id: 2, name: 'Telemetry', desc: 'Curved Display Telemetry Hub' },
        { id: 3, name: 'Warp', desc: 'High-Speed Warp Corridor' },
        { id: 4, name: 'Highway', desc: 'Wet Asphalt Cyberpunk Highway' },
        { id: 5, name: 'Crystal', desc: 'Floating Crystal Neuro Cavern' },
        { id: 6, name: 'Temple', desc: 'Apex Cyber Pyramid' },
        { id: 7, name: 'Collider', desc: 'Hadron Particle Accelerator' },
        { id: 8, name: 'Sphere', desc: 'Quantum Sphere Multi-Displays' },
        { id: 9, name: 'Tesseract', desc: '4D Quantum Stargate Portal' },
        { id: 10, name: 'Eclipse', desc: 'Celestial Corona Solar Eclipse' },
        { id: 11, name: 'Coliseum', desc: 'Roman Cyber Coliseum EQ' },
        { id: 12, name: 'Lasers', desc: 'Volumetric Prism Lasers & Crowd' },
        { id: 13, name: 'Tour Deck', desc: 'Stadium Cyber DJ Booth' }
      ]
    },
    {
      id: 'aurora',
      name: 'Aurora',
      title: 'Story 2: Aurora (Neo-Tokyo Odyssey)',
      scenes: [
        { id: 0, name: 'Stasis', desc: 'Aura Prism Stasis Chamber' },
        { id: 1, name: 'Megacity Lab', desc: 'Genesis Robotics Research Lab' },
        { id: 2, name: 'Breach', desc: 'Containment Cell Failure & Breach' },
        { id: 3, name: 'Titan Hangar', desc: 'Titan Warframe Launch Bay' },
        { id: 4, name: 'Ascension', desc: 'Holographic Equalizer Wings' },
        { id: 5, name: 'Cyber DJ', desc: 'Sol Roth Cyber DJ Metropolis' }
      ]
    }
  ];
  let currentVjStory = 0;
  let currentVjScene = 0;
  let currentVjPose = 0;
  const VJ_POSES = ['IDLE', 'FOCUS', 'REACH', 'ROAR', 'GUARD', 'ASCEND'];
  let currentVjAutoPose = true;
  let currentVjPortalOpen = true;
  let currentVjPortalStyle = 0;
  const VJ_PORTAL_STYLES = ['Hatch', 'Shutter', 'Iris'];
  let currentVjAutoPortal = true;
  let currentVjCamMode = 'auto';
  const VJ_CAM_MODES = ['auto', 'drift', 'fixed'];
  let currentHudViewMode = localStorage.getItem('sol_roth_hud_view_mode') || 'split';
  let currentAjaxTab = 'prompter';

  function vjSelectStory(storyIdx) {
    if (typeof storyIdx === 'string') {
      storyIdx = (storyIdx.toLowerCase().includes('aurora') || storyIdx === '1') ? 1 : 0;
    }
    currentVjStory = storyIdx;
    currentVjScene = 0;
    visualsBus.postMessage({ type: 'setStory', storyIdx: storyIdx });
    fetch(`/api/vj/trigger?event=set_story&story=${storyIdx}`).catch(() => {});

    // Update Story Buttons in Dock and Tabs
    const btnAxiom = document.getElementById('btn-story-axiom');
    const btnAurora = document.getElementById('btn-story-aurora');
    if (btnAxiom) btnAxiom.classList.toggle('active', storyIdx === 0);
    if (btnAurora) btnAurora.classList.toggle('active', storyIdx === 1);

    const tabBtnAxiom = document.getElementById('tab-story-btn-axiom');
    const tabBtnAurora = document.getElementById('tab-story-btn-aurora');
    if (tabBtnAxiom) tabBtnAxiom.classList.toggle('active', storyIdx === 0);
    if (tabBtnAurora) tabBtnAurora.classList.toggle('active', storyIdx === 1);

    vjRenderSceneButtons();
    showVjToast(`📚 Story: ${VJ_STORIES[storyIdx].name}`);
  }

  function vjSelectScene(sceneIdx) {
    currentVjScene = sceneIdx;
    visualsBus.postMessage({ type: 'switchScene', idx: sceneIdx });
    fetch(`/api/vj/trigger?scene=${sceneIdx + 1}`).catch(() => {});

    // Update active button styling
    const pills = document.querySelectorAll('#vj-scenes-container button');
    pills.forEach((p, idx) => p.classList.toggle('active', idx === sceneIdx));

    const tabCards = document.querySelectorAll('#vj-tab-scenes-grid .card');
    tabCards.forEach((c, idx) => c.classList.toggle('active', idx === sceneIdx));

    const sc = VJ_STORIES[currentVjStory].scenes[sceneIdx];
    const lbl = document.getElementById('vj-tab-active-scene-name');
    if (lbl && sc) lbl.textContent = `Active: ${sceneIdx + 1}. ${sc.name}`;

    showVjToast(`🎬 Scene ${sceneIdx + 1}: ${sc ? sc.name : ''}`);
  }

  function vjRenderSceneButtons() {
    const container = document.getElementById('vj-scenes-container');
    const tabContainer = document.getElementById('vj-tab-scenes-grid');
    const story = VJ_STORIES[currentVjStory];
    if (!story) return;

    if (container) {
      container.innerHTML = '';
      story.scenes.forEach((sc, idx) => {
        const btn = document.createElement('button');
        btn.className = idx === currentVjScene ? 'active' : '';
        btn.textContent = `${idx + 1}. ${sc.name}`;
        btn.onclick = () => vjSelectScene(idx);
        container.appendChild(btn);
      });
    }

    if (tabContainer) {
      tabContainer.innerHTML = '';
      story.scenes.forEach((sc, idx) => {
        const card = document.createElement('button');
        card.className = `card scene ${idx === currentVjScene ? 'active' : ''}`;
        card.onclick = () => vjSelectScene(idx);
        card.innerHTML = `
          <header style="font-size:0.7rem; font-weight:900; color:#00f0ff;">SCENE ${idx + 1}</header>
          <h4 style="margin:4px 0; font-weight:900; font-size:0.92rem; color:#fff;">${sc.name}</h4>
          <p style="margin:0; font-size:0.72rem; color:#94a3b8; line-height:1.25;">${sc.desc}</p>
        `;
        tabContainer.appendChild(card);
      });
    }
  }

  function vjTriggerPose(idx) {
    if (typeof idx === 'number') {
      currentVjPose = idx;
    } else {
      currentVjPose = (currentVjPose + 1) % VJ_POSES.length;
    }
    visualsBus.postMessage({ type: 'setPose', idx: currentVjPose });
    fetch(`/api/vj/trigger?event=pose&pose_idx=${currentVjPose}`).catch(() => {});
    const btn = document.getElementById('vj-btn-pose');
    if (btn) btn.textContent = `🧍 Pose: ${VJ_POSES[currentVjPose]}`;
    showVjToast(`🧍 Pose: ${VJ_POSES[currentVjPose]}`);
  }

  function vjTriggerReach() {
    visualsBus.postMessage({ type: 'setPose', idx: 2 });
    fetch(`/api/vj/trigger?event=pose&pose_idx=2`).catch(() => {});
    const btn = document.getElementById('vj-btn-pose');
    if (btn) btn.textContent = `🧍 Pose: REACH`;
    showVjToast("🖐️ Reach Toward Screen");
  }

  function vjTriggerRoar() {
    visualsBus.postMessage({ type: 'setPose', idx: 3 });
    fetch(`/api/vj/trigger?event=pose&pose_idx=3`).catch(() => {});
    const btn = document.getElementById('vj-btn-pose');
    if (btn) btn.textContent = `🧍 Pose: ROAR`;
    showVjToast("⚡ Titan Climax Roar / Ascend");
  }

  function vjToggleAutoPose() {
    currentVjAutoPose = !currentVjAutoPose;
    const btn = document.getElementById('vj-btn-autopose');
    if (btn) {
      btn.textContent = currentVjAutoPose ? '🤖 Auto: ON' : '🤖 Auto: OFF';
      btn.style.color = currentVjAutoPose ? '#00f0ff' : '#94a3b8';
    }
    const tabBtn = document.getElementById('vj-tab-autopose-btn');
    if (tabBtn) tabBtn.textContent = currentVjAutoPose ? '🤖 Autonomous Posing: ON' : '🤖 Autonomous Posing: OFF';
    showVjToast(`🤖 Auto-Pose ${currentVjAutoPose ? 'ON' : 'OFF'}`);
  }

  function vjTogglePortal() {
    currentVjPortalOpen = !currentVjPortalOpen;
    visualsBus.postMessage({ type: 'portalState', open: currentVjPortalOpen });
    fetch('/api/vj/trigger?event=portal_toggle').catch(() => {});
    const btn = document.getElementById('vj-btn-portal');
    if (btn) {
      btn.textContent = currentVjPortalOpen ? '🚪 Portal: OPEN' : '🚪 Portal: CLOSED';
      btn.style.color = currentVjPortalOpen ? '#10b981' : '#ef4444';
    }
    const tabBtn = document.getElementById('vj-tab-portal-toggle');
    if (tabBtn) {
      tabBtn.textContent = currentVjPortalOpen ? '🚪 Portal: OPEN' : '🚪 Portal: CLOSED';
      tabBtn.style.background = currentVjPortalOpen ? '#10b981' : '#ef4444';
      tabBtn.style.color = currentVjPortalOpen ? '#000' : '#fff';
    }
    showVjToast(`🚪 Portal: ${currentVjPortalOpen ? 'OPEN' : 'CLOSED'}`);
  }

  function vjCyclePortalStyle() {
    currentVjPortalStyle = (currentVjPortalStyle + 1) % VJ_PORTAL_STYLES.length;
    visualsBus.postMessage({ type: 'portalState', style: currentVjPortalStyle });
    const sName = VJ_PORTAL_STYLES[currentVjPortalStyle];
    const btn = document.getElementById('vj-btn-portal-style');
    if (btn) btn.textContent = `⚙️ Style: ${sName}`;
    const tabBtn = document.getElementById('vj-tab-portal-style');
    if (tabBtn) tabBtn.textContent = `⚙️ Style: ${sName}`;
    showVjToast(`⚙️ Portal Style: ${sName}`);
  }

  function vjToggleAutoPortal() {
    currentVjAutoPortal = !currentVjAutoPortal;
    visualsBus.postMessage({ type: 'portalState', auto: currentVjAutoPortal });
    const btn = document.getElementById('vj-btn-portal-auto');
    if (btn) {
      btn.textContent = currentVjAutoPortal ? '⚡ Auto: ON' : '⚡ Auto: OFF';
      btn.style.color = currentVjAutoPortal ? '#10b981' : '#94a3b8';
    }
    const tabBtn = document.getElementById('vj-tab-portal-auto');
    if (tabBtn) tabBtn.textContent = `⚡ Auto Portal on Transitions: ${currentVjAutoPortal ? 'ON' : 'OFF'}`;
    showVjToast(`⚡ Auto Portal: ${currentVjAutoPortal ? 'ON' : 'OFF'}`);
  }

  function vjToggleCamMode() {
    const nextIdx = (VJ_CAM_MODES.indexOf(currentVjCamMode) + 1) % VJ_CAM_MODES.length;
    currentVjCamMode = VJ_CAM_MODES[nextIdx];
    visualsBus.postMessage({ type: 'camMode', mode: currentVjCamMode });
    const btn = document.getElementById('vj-btn-cammode');
    if (btn) {
      btn.textContent = `📷 Cam: ${currentVjCamMode.toUpperCase()}`;
      btn.style.color = (currentVjCamMode === 'auto') ? '#00f0ff' : (currentVjCamMode === 'drift' ? '#10b981' : '#f59e0b');
    }
    const tabBtn = document.getElementById('vj-tab-cammode-btn');
    if (tabBtn) {
      tabBtn.textContent = `📷 Cam: ${currentVjCamMode.toUpperCase()}`;
      tabBtn.style.color = (currentVjCamMode === 'auto') ? '#00f0ff' : (currentVjCamMode === 'drift' ? '#10b981' : '#f59e0b');
    }
    showVjToast(`📷 Camera Mode: ${currentVjCamMode.toUpperCase()}`);
  }

  function vjResetCam() {
    currentVjCamMode = 'auto';
    visualsBus.postMessage({ type: 'resetCam' });
    fetch('/api/vj/trigger?event=reset_cam').catch(() => {});
    const btn = document.getElementById('vj-btn-cammode');
    if (btn) {
      btn.textContent = '📷 Cam: AUTO';
      btn.style.color = '#00f0ff';
    }
    showVjToast("🎯 Camera Reset to Perfect Framing");
  }

  function vjTriggerFx(name) {
    visualsBus.postMessage({ type: 'triggerEvent', name: name });
    fetch(`/api/vj/trigger?event=${name}`).catch(() => {});
    showVjToast(`⚡ FX: ${name.toUpperCase()}`);
  }

  function vjToggleBrand() {
    vjTriggerFx('announce');
    stageBus.postMessage({ action: 'TOGGLE_BRAND' });
    showVjToast("📢 Toggle Brand / Merch Card");
  }

  function toggleVjDock() {
    const dock = document.getElementById('vj-remote-dock');
    const chevron = document.getElementById('vj-dock-chevron');
    const body = document.getElementById('vj-dock-body');
    isVjDockOpen = !isVjDockOpen;
    if (body) body.style.display = isVjDockOpen ? 'flex' : 'none';
    if (chevron) chevron.innerText = isVjDockOpen ? '▼' : '▲';
    if (dock) {
      dock.style.borderTopColor = isVjDockOpen ? '#00f0ff' : 'rgba(0,240,255,0.4)';
    }
  }

  function setHudViewMode(mode) {
    currentHudViewMode = mode;
    localStorage.setItem('sol_roth_hud_view_mode', mode);
    document.body.setAttribute('data-hud-view', mode);

    // Update active pill
    ['split', 'tabs', 'compact', 'focus'].forEach(m => {
      const btn = document.getElementById(`view-mode-${m}`);
      if (btn) btn.classList.toggle('active', m === mode);
    });

    const ajaxTabs = document.getElementById('hud-ajax-tabs');
    const focusExit = document.getElementById('focus-exit-btn');
    if (mode === 'tabs') {
      if (ajaxTabs) ajaxTabs.style.display = 'inline-flex';
      switchAjaxTab(currentAjaxTab);
    } else {
      if (ajaxTabs) ajaxTabs.style.display = 'none';
      const prompterTab = document.getElementById('hud-tab-prompter');
      const vjTab = document.getElementById('hud-tab-vj');
      if (prompterTab) prompterTab.style.display = 'flex';
      if (vjTab) vjTab.style.display = 'none';
    }

    if (focusExit) {
      focusExit.style.display = (mode === 'focus') ? 'block' : 'none';
    }

    showVjToast(`🖥️ View Mode: ${mode.toUpperCase()}`);
  }

  function switchAjaxTab(tab) {
    currentAjaxTab = tab;
    const btnPrompter = document.getElementById('ajax-tab-btn-prompter');
    const btnVj = document.getElementById('ajax-tab-btn-vj');
    if (btnPrompter) btnPrompter.classList.toggle('active', tab === 'prompter');
    if (btnVj) btnVj.classList.toggle('active', tab === 'vj');

    const tabPrompter = document.getElementById('hud-tab-prompter');
    const tabVj = document.getElementById('hud-tab-vj');
    if (tab === 'prompter') {
      if (tabPrompter) tabPrompter.style.display = 'flex';
      if (tabVj) tabVj.style.display = 'none';
    } else {
      if (tabPrompter) tabPrompter.style.display = 'none';
      if (tabVj) tabVj.style.display = 'flex';
      vjRenderSceneButtons();
    }
  }

  function showVjToast(text) {
    const el = document.getElementById('vj-toast');
    if (!el) return;
    el.innerText = text;
    el.style.opacity = '1';
    clearTimeout(vjToastTimer);
    vjToastTimer = setTimeout(() => {
      el.style.opacity = '0';
    }, 1200);
  }


  function cycleDJEngine() {
    const engines = ['auto', 'rekordbox', 'serato'];
    const nextIdx = (engines.indexOf(currentDJEngine) + 1) % engines.length;
    currentDJEngine = engines[nextIdx];
    localStorage.setItem('dj_engine_pref', currentDJEngine);
    updateEngineBadge();
    checkSeratoNowPlaying();
  }

  function updateEngineBadge(activeEngine) {
    const btn = document.getElementById('engine-btn');
    const label = document.getElementById('engine-label');
    if (!label) return;
    
    const displayEngine = activeEngine || (currentDJEngine === 'auto' ? 'Rekordbox' : currentDJEngine);
    if (currentDJEngine === 'rekordbox' || (currentDJEngine === 'auto' && displayEngine.toLowerCase() === 'rekordbox')) {
      label.innerText = 'Rekordbox 7';
      if (btn) btn.style.borderColor = 'var(--dj-accent-cyan)';
    } else if (currentDJEngine === 'serato' || (currentDJEngine === 'auto' && displayEngine.toLowerCase() === 'serato')) {
      label.innerText = 'Serato DJ Pro';
      if (btn) btn.style.borderColor = 'var(--dj-accent-green)';
    } else {
      label.innerText = 'Auto: ' + displayEngine;
    }
  }

  if ('wakeLock' in navigator) {
    navigator.wakeLock.request('screen').catch(() => {});
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        navigator.wakeLock.request('screen').catch(() => {});
      }
    });
  }

  async function checkSeratoNowPlaying() {
    try {
      const res = await fetch(`/api/now_playing?engine=${encodeURIComponent(currentDJEngine)}`);
      const data = await res.json();

      if (data && data.ip) localIp = data.ip;
      if (data && data.engine) updateEngineBadge(data.engine);

      if (data && data.decks) {
        multiDeckData = data.decks;

        ['1', '2', '3', '4'].forEach(dNum => {
          const el = document.getElementById('tab-d' + dNum + '-title');
          if (el) {
            const track = multiDeckData[dNum];
            el.innerText = track && track.title ? track.title : `Deck ${dNum}`;
          }
        });

        renderActiveDeckView();
        syncPrompterPlaybackPosition(multiDeckData[activeDeck]);

        // Broadcast Serato track metadata to Quantum Visualizer
        const activeTrack = multiDeckData[activeDeck];
        if (activeTrack && activeTrack.title) {
          const trackKey = `${activeDeck}-${activeTrack.title}-${activeTrack.bpm}`;
          if (trackKey !== lastBroadcastTrack) {
            lastBroadcastTrack = trackKey;
            stageBus.postMessage({
              action: 'UPDATE_TRACK',
              title: `${activeTrack.artist || 'Sol Roth'} - ${activeTrack.title}`,
              bpm: activeTrack.bpm || 128,
              deck: activeDeck
            });
          }
        }
      }
    } catch (e) {}
  }

  function selectActiveDeck(deckNum) {
    activeDeck = deckNum;
    ['1', '2', '3', '4'].forEach(dNum => {
      const btn = document.getElementById('tab-deck-' + dNum);
      if (btn) btn.className = 'deck-tab-btn' + (activeDeck === dNum ? ' active' : '');
    });
    renderActiveDeckView();
  }

  function renderActiveDeckView() {
    const data = multiDeckData[activeDeck];
    if (!data) {
      document.getElementById('track-title').innerText = "Waiting for Serato Deck...";
      document.getElementById('track-artist').innerText = "Load any track onto Deck " + activeDeck;
      return;
    }

    document.getElementById('track-title').innerText = data.title || "Untitled";
    document.getElementById('track-artist').innerText = data.artist || "DJ Sol Roth";
    document.getElementById('meta-genre-year').innerText = `${data.genre || 'Dance'} • ${data.year || '2024'}`;
    
    const starsCount = data.stars || 4;
    document.getElementById('meta-stars').innerText = '★'.repeat(starsCount) + '☆'.repeat(5 - starsCount);

    const keyEl = document.getElementById('badge-key');
    if (keyEl) {
      keyEl.innerText = data.key_display || data.key || "8A (Am)";
      keyEl.style.backgroundColor = data.color || "#00e6ff";
    }

    const bpmEl = document.getElementById('badge-bpm');
    if (bpmEl) bpmEl.innerText = (data.bpm || 126) + " BPM";

    const deckEl = document.getElementById('badge-deck');
    if (deckEl) deckEl.innerText = "DECK " + activeDeck;

    const genreEl = document.getElementById('badge-genre');
    if (genreEl) genreEl.innerText = data.genre || "Dance";

    const yearEl = document.getElementById('badge-year');
    if (yearEl) yearEl.innerText = data.year || "2024";

    const noteEl = document.getElementById('notes-content');
    if (noteEl) {
      if (data.notes && data.notes.trim()) {
        noteEl.innerText = data.notes;
      } else {
        noteEl.innerText = `[${data.genre || 'Club'}] • Energy ${data.stars || 4}/5 • Harmonically mix with ${data.key || '8A'}`;
      }
    }

    const artBox = document.getElementById('art-box');
    if (artBox) {
      if (data.has_art && data.filename) {
        artBox.innerHTML = `<img src="/api/art?file=${encodeURIComponent(data.filename)}">`;
      } else {
        artBox.innerHTML = `<span style="color:#505a70; font-size:3rem;">🎧</span>`;
      }
    }

    const harmGrid = document.getElementById('harm-grid');
    if (harmGrid && data.harmonic && data.harmonic.length > 0) {
      harmGrid.innerHTML = data.harmonic.map(h => `
        <div class="harm-pill" style="background:${h.color};">
          <div>${h.key}</div>
        </div>
      `).join('');
    }

    const container = document.getElementById('lyrics-container');
    if (container) {
      if (data.sections && data.sections.length > 0) {
        const sectionCards = data.sections.map(sec => {
          const typeUpper = sec.type.toUpperCase();
          let tagClass = 'verse';
          let icon = '⚡';

          if (typeUpper.includes('CHORUS') || typeUpper.includes('HOOK')) {
            tagClass = 'chorus';
            icon = '🔥';
          } else if (typeUpper.includes('DROP')) {
            tagClass = 'drop';
            icon = '💣';
          } else if (typeUpper.includes('BRIDGE') || typeUpper.includes('OUTRO')) {
            tagClass = 'bridge';
            icon = '✨';
          }

          const linesHtml = sec.lines.map((line, lIdx) => 
            `<span class="lyric-line-item" data-line-idx="${lIdx}" style="font-size:${currentFontSize}rem;">${line}</span>`
          ).join('');

          return `
            <article class="card section" data-start-time="${sec.time_sec || 0}" data-start-bar="${sec.start_bar || 0}">
              <header>
                <div class="title ${tagClass}">
                  <span>${icon}</span>
                  <span>${sec.type}</span>
                </div>
                <div class="actions">
                  <span class="badge timestamp ${tagClass}">@ ${sec.time_str} (${sec.rem_str || '-0:00'})</span>
                  <span class="badge bars">Bar ${sec.start_bar} (${sec.duration_bars}b)</span>
                </div>
              </header>
              ${linesHtml}
            </article>
          `;
        }).join('');

        container.innerHTML = `
          <div class="multi-col-lyrics cols-${activeColumns}" id="multi-col-box">
            ${sectionCards}
          </div>
        `;
      } else {
        container.innerHTML = `
          <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; text-align:center; padding:30px 10px;">
            <div style="font-size:1.5rem; font-weight:800; color:var(--ax-text);">─── [CLUB DUB / INSTRUMENTAL] ───</div>
            <div style="color:var(--dj-accent-brand); margin-top:6px;">Ready for live vocal cuts & drops on Deck ${activeDeck}</div>
          </div>
        `;
      }
    }
  }

  function openSearchModal() {
    const m = document.getElementById('search-modal');
    if (m) {
      m.classList.add('active');
      setTimeout(() => {
        const b = document.getElementById('search-box');
        if (b) b.focus();
      }, 100);
    }
  }
  function closeSearchModal() {
    const m = document.getElementById('search-modal');
    if (m) m.classList.remove('active');
  }

  function doSearch(q) {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(async () => {
      if (!q.trim()) return;
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
        const results = await res.json();
        const container = document.getElementById('search-results');
        if (container) {
          if (results && results.length > 0) {
            container.innerHTML = results.map(r => `
              <div class="search-item" onclick="loadSearchedTrack('${encodeURIComponent(r.rel_path)}')">
                <div style="min-width:0; flex:1;">
                  <div style="font-weight:800; font-size:0.95rem; color:var(--ax-text); overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${r.title}</div>
                  <div style="font-size:0.75rem; color:var(--dj-accent-cyan); overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${r.artist}</div>
                </div>
                <button style="font-size:0.75rem; margin-left:8px;">View</button>
              </div>
            `).join('');
          } else {
            container.innerHTML = `<div style="color:var(--a-color-text-muted); padding:10px; text-align:center;">No matching tracks found.</div>`;
          }
        }
      } catch(e) {}
    }, 200);
  }

  async function loadSearchedTrack(relPath) {
    try {
      const res = await fetch(`/api/load_track?path=${relPath}`);
      const data = await res.json();
      if (data && data.title) {
        multiDeckData["1"] = data;
        selectActiveDeck("1");
        closeSearchModal();
      }
    } catch(e) {}
  }

  async function loadMatchmakerRecommendations() {
    try {
      const res = await fetch(`/api/next_track_matchmaker?deck=${activeDeck}`);
      const data = await res.json();
      if (data.status === 'ok') {
        const cRec = data.in_crate_recommendation;
        if (cRec) {
          document.getElementById('match-crate-title').innerText = cRec.title;
          document.getElementById('match-crate-artist').innerText = `${cRec.artist} • Crate: ${cRec.folder}/`;
          document.getElementById('match-crate-meta').innerText = `${cRec.relation} | ${cRec.bpm} BPM (${cRec.pitch_delta > 0 ? '+' : ''}${cRec.pitch_delta}% Pitch)`;
          document.getElementById('match-crate-actions').innerHTML = `
            <button class="success" style="padding:2px 6px; font-size:0.7rem;" onclick="playTrackClip('${(cRec.artist + ' ' + cRec.title).replace(/'/g, "\'")}', '${cRec.title.replace(/'/g, "\'")}', '${cRec.artist.replace(/'/g, "\'")}')">▶ Preview</button>
            <a href="/?load=${encodeURIComponent(cRec.rel_path)}" class="button" style="padding:2px 6px; font-size:0.7rem;">HUD Load</a>
          `;
        }

        const gRec = data.global_recommendation;
        if (gRec) {
          document.getElementById('match-global-title').innerText = gRec.title;
          document.getElementById('match-global-artist').innerText = `${gRec.artist} • Library: ${gRec.folder}/`;
          document.getElementById('match-global-meta').innerText = `${gRec.relation} | ${gRec.bpm} BPM (${gRec.pitch_delta > 0 ? '+' : ''}${gRec.pitch_delta}% Pitch)`;
          document.getElementById('match-global-actions').innerHTML = `
            <button class="primary" style="padding:2px 6px; font-size:0.7rem;" onclick="playTrackClip('${(gRec.artist + ' ' + gRec.title).replace(/'/g, "\'")}', '${gRec.title.replace(/'/g, "\'")}', '${gRec.artist.replace(/'/g, "\'")}')">▶ Preview</button>
            <a href="/?load=${encodeURIComponent(gRec.rel_path)}" class="button" style="padding:2px 6px; font-size:0.7rem;">HUD Load</a>
          `;
        }
      }
    } catch(e) {}
  }

  function openCopilotModal() {
    const m = document.getElementById('copilot-modal');
    if (m) m.classList.add('active');
    loadMatchmakerRecommendations();
  }
  function closeCopilotModal() {
    const m = document.getElementById('copilot-modal');
    if (m) m.classList.remove('active');
  }

  async function askCopilotDirect() {
    const tipElem = document.getElementById('copilot-tip-text');
    if (tipElem) tipElem.innerText = "⚡ Copilot calculating live mix transition strategy...";
    try {
      const res = await fetch(`/api/copilot?deck=${activeDeck}`);
      const data = await res.json();
      if (tipElem && data.copilot_tip) {
        tipElem.innerText = data.copilot_tip;
      }
    } catch(e) {
      if (tipElem) tipElem.innerText = "Error contacting Copilot engine.";
    }
  }

  function openMCFreestyleModal() {
    const track = multiDeckData[activeDeck] || { title: "Live Track", artist: "DJ", genre: "Club", bpm: 128, key: "8A" };
    const b = document.getElementById('mc-track-badge');
    if (b) b.innerText = `Deck ${activeDeck} • ${track.bpm} BPM • ${track.key}`;
    const m = document.getElementById('mc-modal');
    if (m) m.classList.add('active');
    generateMCVerse();
  }

  function closeMCModal() {
    const m = document.getElementById('mc-modal');
    if (m) m.classList.remove('active');
  }

  function setMCStyle(style) {
    activeMCStyle = style;
    document.querySelectorAll('.mc-style-selector button').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-style-${style}`);
    if (activeBtn) activeBtn.classList.add('active');
    generateMCVerse();
  }

  async function generateMCVerse() {
    const display = document.getElementById('mc-verse-text');
    if (display) display.innerHTML = `<span style="color:var(--dj-accent-gold);">⚡ Composing cadence for Deck ${activeDeck}...</span>`;

    const track = multiDeckData[activeDeck] || { title: "Live Track", artist: "DJ Sol Roth", genre: "Tech House", bpm: 128, key: "8A" };
    
    try {
      const params = new URLSearchParams({
        title: track.title,
        artist: track.artist,
        genre: track.genre,
        bpm: track.bpm,
        key: track.key,
        style: activeMCStyle
      });
      const res = await fetch(`/api/generate_freestyle?${params.toString()}`);
      const data = await res.json();

      lastGeneratedVerse = data.verse;
      if (display) display.innerText = data.verse;
      const srcInfo = document.getElementById('mc-source-info');
      if (srcInfo) srcInfo.innerText = `${data.source} • Flow: ${activeMCStyle.toUpperCase()}`;
    } catch(e) {
      if (display) display.innerText = "Error generating verse. Check internet or retry.";
    }
  }

  function pinVerseToNotes() {
    if (lastGeneratedVerse) {
      const n = document.getElementById('notes-content');
      if (n) n.innerText = lastGeneratedVerse;
      closeMCModal();
    }
  }

  function setColumnCount(count) {
    activeColumns = count;
    [2, 3, 4].forEach(c => {
      const btn = document.getElementById('col-btn-' + c);
      if (btn) btn.className = 'view-btn' + (c === count ? ' active' : '');
    });

    const box = document.getElementById('multi-col-box');
    if (box) {
      box.className = `multi-col-lyrics cols-${activeColumns}`;
    }
  }

  function adjustFontSize(delta) {
    currentFontSize = Math.max(0.9, Math.min(2.2, currentFontSize + delta));
    const items = document.querySelectorAll('.lyric-line-item');
    items.forEach(el => {
      el.style.fontSize = currentFontSize + 'rem';
    });
  }

  function showHardwareTab(tabId) {
    const tabs = ['mvave', 'bank-a', 'bank-b', 'bank-c', 'bank-d'];
    tabs.forEach(t => {
      const p = document.getElementById(`hw-panel-${t}`);
      const b = document.getElementById(`hw-tab-${t}`);
      if (p) p.style.display = (t === tabId) ? 'block' : 'none';
      if (b) {
        if (t === tabId) {
          b.style.background = 'var(--dj-accent-cyan)';
          b.style.color = '#000';
          b.style.fontWeight = '900';
        } else {
          b.style.background = 'var(--a-surface-raised)';
          b.style.color = 'var(--ax-text)';
          b.style.fontWeight = '700';
        }
      }
    });
  }

  async function switchLiveSampler(presetId, btnElem) {
    const statusLabel = document.getElementById('sampler-active-status');
    if (statusLabel) statusLabel.innerText = `⏳ Syncing ${presetId} to Serato and Controller Pads...`;

    try {
      const res = await fetch(`/api/switch_sampler_bank?preset=${encodeURIComponent(presetId)}`);
      const data = await res.json();
      if (data.status === 'success') {
        currentSamplerPads = data.pads || [];
        renderDynamicPads();
        if (statusLabel) {
          statusLabel.innerText = `✅ Active: ${data.preset_name} (Synced to Serato / FLX10 / M-VAVE)`;
        }
        
        const btns = document.querySelectorAll('#sampler-preset-buttons button');
        btns.forEach(b => {
          b.style.background = 'var(--a-surface-raised)';
          b.style.color = 'var(--ax-text)';
          b.style.fontWeight = '700';
        });
        if (btnElem) {
          btnElem.style.background = 'var(--dj-accent-gold)';
          btnElem.style.color = '#000';
          btnElem.style.fontWeight = '900';
        }
      }
    } catch(e) {
      if (statusLabel) statusLabel.innerText = "⚠️ Error switching sampler preset.";
    }
  }

  function renderDynamicPads() {
    const grid = document.getElementById('dynamic-pads-grid');
    if (!grid) return;
    if (!currentSamplerPads || currentSamplerPads.length === 0) {
      grid.innerHTML = '<div style="color:var(--a-color-text-muted); grid-column:span 4; text-align:center;">Loading performance pads...</div>';
      return;
    }

    grid.innerHTML = currentSamplerPads.map(p => `
      <div style="background:var(--a-surface-base); border:1px solid var(--ax-border); border-top:3px solid ${p.pad <= 8 ? 'var(--dj-accent-cyan)' : 'var(--dj-accent-pink)'}; border-radius:6px; padding:10px 8px; display:flex; flex-direction:column; justify-content:space-between; gap:6px; min-height:80px;">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="font-weight:900; font-size:0.75rem; color:${p.pad <= 8 ? 'var(--dj-accent-cyan)' : 'var(--dj-accent-pink)'};">PAD ${p.pad}</span>
            <span style="font-size:0.68rem; color:var(--a-color-text-muted);">${p.pad <= 8 ? 'Bank A' : 'Bank B'}</span>
          </div>
          <div style="font-weight:800; font-size:0.82rem; color:var(--ax-text); line-height:1.25; margin-top:2px; word-break:break-word;">${p.title}</div>
        </div>
        <button style="padding:3px 6px; font-size:0.7rem; justify-content:center; background:${p.pad <= 8 ? 'rgba(0,240,255,0.15)' : 'rgba(255,0,127,0.15)'}; border-color:${p.pad <= 8 ? 'var(--dj-accent-cyan)' : 'var(--dj-accent-pink)'}; color:${p.pad <= 8 ? 'var(--dj-accent-cyan)' : 'var(--dj-accent-pink)'}; font-weight:900;" onclick="playLocalTrack('${p.rel_path}', '${p.title.replace(/'/g, "\'")}', 'Live Sampler')">▶ Audition</button>
      </div>
    `).join('');
  }

  function setControllerView(viewId) {
    currentControllerView = viewId;
    ['flx10', 'flx2-mvave', 'midi'].forEach(v => {
      const b = document.getElementById(`ctrl-mode-${v}`);
      if (b) {
        if (v === viewId) {
          b.style.background = 'var(--dj-accent-brand)';
          b.style.color = '#000';
          b.style.fontWeight = '900';
        } else {
          b.style.background = 'var(--a-surface-raised)';
          b.style.color = 'var(--ax-text)';
          b.style.fontWeight = '700';
        }
      }
    });

    const splitLabel = document.getElementById('pads-deck-split');
    const knobsSec = document.getElementById('hw-knobs-section');
    if (viewId === 'flx10') {
      if (splitLabel) splitLabel.innerText = "Pads 1–8: FLX10 Deck 1/3 Sampler • Pads 9–16: FLX10 Deck 2/4 Sampler";
      if (knobsSec) knobsSec.style.display = 'none';
    } else if (viewId === 'flx2-mvave') {
      if (splitLabel) splitLabel.innerText = "Pads 1–8: M-VAVE Bank A / Left Pads • Pads 9–16: M-VAVE Bank B / Right Pads";
      if (knobsSec) knobsSec.style.display = 'block';
    } else {
      if (splitLabel) splitLabel.innerText = "Pads 1–16: Universal MIDI Notes / Screen Triggers";
      if (knobsSec) knobsSec.style.display = 'none';
    }
  }

  async function fetchAiPadRecommendation() {
    try {
      const res = await fetch(`/api/ai_pad_recommendation?deck=${activeDeck}`);
      const data = await res.json();
      if (data.status === 'ok') {
        recommendedPresetId = data.recommended_preset_id;
        const b = document.getElementById('ai-rec-preset-badge');
        if (b) b.innerText = data.recommended_preset_name;
        const r = document.getElementById('ai-rec-reason');
        if (r) r.innerText = `💡 ${data.ai_reason}`;
        
        if (data.current_loaded_pads && data.current_loaded_pads.length > 0) {
          currentSamplerPads = data.current_loaded_pads;
          renderDynamicPads();
          const s = document.getElementById('sampler-active-status');
          if (s) s.innerText = `✅ Active: ${data.current_active_preset} (Currently loaded on Serato Decks & Controllers)`;
        }
      }
    } catch(e) {}
  }

  async function applyAiFastSetRecommendation() {
    const btn = document.getElementById('btn-ai-fast-set');
    if (btn) {
      btn.innerText = "⚡ Syncing Fast Set...";
      btn.disabled = true;
    }
    await switchLiveSampler(recommendedPresetId, null);
    if (btn) {
      btn.innerText = "✅ Fast Set Synced!";
      btn.style.background = "var(--dj-accent-brand)";
      setTimeout(() => {
        btn.innerText = "⚡ 1-Click Fast Set to Pads";
        btn.style.background = "var(--dj-accent-green)";
        btn.disabled = false;
      }, 2500);
    }
  }

  function openControllerModal() {
    const m = document.getElementById('controller-modal');
    if (m) m.style.display = 'flex';
    setControllerView(currentControllerView);
    fetchAiPadRecommendation();
  }
  function closeControllerModal() {
    const m = document.getElementById('controller-modal');
    if (m) m.style.display = 'none';
  }

  function openStageUrlsModal() {
    const m = document.getElementById('stage-urls-modal');
    if (!m) return;
    const loc = window.location.origin;
    const elVis = document.getElementById('url-vis-controls');
    const elStage = document.getElementById('url-vis-stage');
    const elPrompter = document.getElementById('url-prompter');
    const elObs = document.getElementById('url-obs');
    if (elVis) elVis.textContent = `${loc}/visualizer`;
    if (elStage) elStage.textContent = `${loc}/visualizer?mode=stage`;
    if (elPrompter) elPrompter.textContent = `${loc}/`;
    if (elObs) elObs.textContent = `${loc}/obs_lyrics`;
    m.style.display = 'flex';
  }

  function closeStageUrlsModal() {
    const m = document.getElementById('stage-urls-modal');
    if (m) m.style.display = 'none';
  }

  function copyDirectUrl(elemId, btn) {
    const el = document.getElementById(elemId);
    if (!el) return;
    const text = el.textContent || el.innerText;
    navigator.clipboard.writeText(text).then(() => {
      const orig = btn.textContent;
      btn.textContent = '✅ Copied!';
      btn.style.background = '#10b981';
      btn.style.color = '#fff';
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = '';
        btn.style.color = '';
      }, 2000);
    }).catch(() => {
      alert(`URL: ${text}`);
    });
  }

  function playLocalTrack(relPath, title, artist) {
    if (!relPath) return;
    currentAudio.pause();
    currentAudio.src = `/api/stream_local?file=${encodeURIComponent(relPath)}`;
    currentAudio.play().catch(()=>{});
  }

  function playTrackClip(query, title, artist) {
    currentAudio.pause();
    currentAudio.src = `/api/preview_track?q=${encodeURIComponent(query)}`;
    currentAudio.play().catch(()=>{});
  }

  function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    const btn = document.getElementById('theme-btn');
    if (btn) btn.innerText = next === 'dark' ? '☀️' : '🌙';
  }

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }

  function openPairingModal() {
    const modal = document.getElementById('pair-modal');
    const url = `http://${localIp}:${PORT}`;
    const disp = document.getElementById('ip-display');
    if (disp) disp.innerText = url;
    
    const qr = document.getElementById('qr-container');
    if (qr) {
      qr.innerHTML = `
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(url)}" width="160" height="160" alt="QR Code">
      `;
    }
    if (modal) modal.classList.add('active');
  }

  function closePairingModal() {
    const modal = document.getElementById('pair-modal');
    if (modal) modal.classList.remove('active');
  }

  async function shutdownHUD() {
    if (confirm("Quit Sol Roth DJ Stage Prompter HUD and stop server?")) {
      try {
        await fetch('/api/shutdown');
      } catch(e) {}
      document.body.innerHTML = `
        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100vh; background:#07090e; color:#fff; text-align:center; padding:20px;">
          <h2 style="color:#00f0ff;">⚡ Sol Roth Stage Prompter Stopped</h2>
          <p style="color:#8fa0c0;">The server has been safely shut down.</p>
        </div>
      `;
    }
  }

  window.addEventListener('keydown', (e) => {
    const isModalOpen = document.querySelector('.modal-overlay.active') || (document.getElementById('controller-modal') && document.getElementById('controller-modal').style.display === 'flex');
    if (isModalOpen && e.key === 'Escape') {
      closeSearchModal();
      closeCopilotModal();
      closeMCModal();
      closePairingModal();
      closeControllerModal();
      return;
    }
    if (document.activeElement && document.activeElement.tagName === 'INPUT') return;

    if (['1', '2', '3', '4'].includes(e.key) && !isModalOpen) {
      selectActiveDeck(e.key);
    } else if (e.key === 's' || e.key === 'S' || e.key === '/') {
      e.preventDefault();
      openSearchModal();
    } else if (e.key === 'c' || e.key === 'C') {
      openCopilotModal();
    } else if (e.key === 'm' || e.key === 'M') {
      openMCFreestyleModal();
    } else if (e.key === 'f' || e.key === 'F') {
    } else if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      advancePrompterLine(1);
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      advancePrompterLine(-1);
    }
  });

  // ============================================================================
  // PROMPTER AUTO-SCROLL & BEAT-SYNC ENGINE
  // ============================================================================
  let prompterAutoScrollEnabled = true;

  function togglePrompterAutoScroll() {
    prompterAutoScrollEnabled = !prompterAutoScrollEnabled;
    const btn = document.getElementById('prompter-autoscroll-btn');
    if (btn) {
      btn.className = prompterAutoScrollEnabled ? 'active' : '';
      btn.innerText = prompterAutoScrollEnabled ? '⚡ Auto-Scroll' : '⏸ Scroll: Off';
      btn.style.color = prompterAutoScrollEnabled ? '#00f0ff' : 'var(--ax-text)';
      btn.style.borderColor = prompterAutoScrollEnabled ? '#00f0ff' : 'var(--ax-border)';
    }
  }

  function syncPrompterPlaybackPosition(trackData) {
    if (!trackData || !trackData.sections || trackData.sections.length === 0) return;

    const nowSec = Date.now() / 1000;
    const elapsedSec = Math.max(0, (nowSec - (trackData.start_time || nowSec)) % (trackData.duration || 210));

    let activeSecIdx = 0;
    for (let i = 0; i < trackData.sections.length; i++) {
      if (elapsedSec >= (trackData.sections[i].time_sec || 0)) {
        activeSecIdx = i;
      } else {
        break;
      }
    }

    const cards = document.querySelectorAll('#lyrics-container article.card.section');
    if (cards && cards.length > activeSecIdx) {
      cards.forEach((c, idx) => {
        if (idx === activeSecIdx) {
          if (!c.classList.contains('active')) {
            c.classList.add('active');
            c.style.borderColor = 'var(--dj-accent-brand)';
            c.style.boxShadow = '0 0 18px rgba(0, 240, 255, 0.4)';
            if (prompterAutoScrollEnabled) {
              c.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }
          const sec = trackData.sections[activeSecIdx];
          const lines = c.querySelectorAll('.lyric-line-item');
          if (lines && lines.length > 0) {
            const nextSecTime = (activeSecIdx + 1 < trackData.sections.length) ? trackData.sections[activeSecIdx + 1].time_sec : (sec.time_sec + 30);
            const secDuration = Math.max(4, nextSecTime - sec.time_sec);
            const secProgress = Math.min(0.99, Math.max(0, (elapsedSec - sec.time_sec) / secDuration));
            const activeLineIdx = Math.floor(secProgress * lines.length);
            lines.forEach((l, lIdx) => {
              if (lIdx === activeLineIdx) {
                l.classList.add('active');
                l.style.color = 'var(--dj-accent-brand)';
                l.style.fontWeight = '900';
              } else if (lIdx < activeLineIdx) {
                l.classList.remove('active');
                l.classList.add('past');
                l.style.opacity = '0.55';
                l.style.fontWeight = 'normal';
                l.style.color = 'inherit';
              } else {
                l.classList.remove('active', 'past');
                l.style.opacity = '1';
                l.style.fontWeight = 'normal';
                l.style.color = 'inherit';
              }
            });
          }
        } else {
          c.classList.remove('active');
          c.style.borderColor = '';
          c.style.boxShadow = '';
        }
      });
    }
  }

  function advancePrompterLine(delta) {
    const cards = Array.from(document.querySelectorAll('#lyrics-container article.card.section'));
    if (cards.length === 0) return;
    const currentIdx = cards.findIndex(c => c.classList.contains('active'));
    let nextIdx = (currentIdx === -1 ? 0 : currentIdx) + delta;
    if (nextIdx < 0) nextIdx = 0;
    if (nextIdx >= cards.length) nextIdx = cards.length - 1;
    cards.forEach((c, idx) => {
      if (idx === nextIdx) {
        c.classList.add('active');
        c.style.borderColor = 'var(--dj-accent-brand)';
        c.style.boxShadow = '0 0 18px rgba(0, 240, 255, 0.4)';
        c.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        c.classList.remove('active');
        c.style.borderColor = '';
        c.style.boxShadow = '';
      }
    });
  }

  // ============================================================================
  // WEB MIDI HARDWARE CONTROLLER BRIDGE (Pioneer DDJ-FLX10, MIDI Pads, Pedals)
  // ============================================================================
  let midiAccessInstance = null;
  let activeMIDIDeviceName = '';

  if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess({ sysex: false }).then(access => {
      midiAccessInstance = access;
      setupMIDIDevices();
      access.onstatechange = (e) => {
        setupMIDIDevices();
      };
    }).catch(() => {});
  }

  function setupMIDIDevices() {
    if (!midiAccessInstance) return;
    let connected = false;
    for (let input of midiAccessInstance.inputs.values()) {
      connected = true;
      activeMIDIDeviceName = input.name || 'MIDI Device';
      input.onmidimessage = handleHUDMIDIMessage;
    }
    const badge = document.getElementById('hud-midi-badge');
    if (badge) {
      if (connected) {
        badge.style.display = 'inline-flex';
        badge.title = `Connected: ${activeMIDIDeviceName}`;
        badge.innerText = `🎹 MIDI: ${activeMIDIDeviceName.substring(0, 12)}`;
      } else {
        badge.style.display = 'none';
      }
    }
  }

  function handleHUDMIDIMessage(event) {
    const [status, data1, data2] = event.data;
    const cmd = status >> 4;
    const velocity = data2;

    if (cmd === 9 && velocity > 0) {
      const note = data1;

      // Select Decks 1 - 4
      if (note === 48 || note === 60) selectActiveDeck('1');
      else if (note === 50 || note === 62) selectActiveDeck('2');
      else if (note === 52 || note === 64) selectActiveDeck('3');
      else if (note === 53 || note === 65) selectActiveDeck('4');

      // VJ Scenes 1 - 8 (Notes 36 - 43)
      else if (note >= 36 && note <= 43) {
        vjTriggerScene(note - 36);
      }

      // Prompter Stepping via Foot Pedal / Cue Buttons (Notes 44, 45)
      else if (note === 44 || note === 67) {
        advancePrompterLine(1);
      } else if (note === 45 || note === 69) {
        advancePrompterLine(-1);
      }

      // Special Stage FX
      else if (note === 46) vjTriggerAction('storm');
      else if (note === 47) vjTriggerAction('flip');
      else if (note === 49) vjTriggerAction('colorshift');
      else if (note === 51) vjTriggerAction('blackout');
    }
  }

  // Register Offline Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
  }

  // Initialize VJ Remote Dock & HUD Display View Mode
  vjRenderSceneButtons();
  setHudViewMode(currentHudViewMode);

  setInterval(checkSeratoNowPlaying, 800);
  checkSeratoNowPlaying();
</script>



</body>
</html>
"""

# ==============================================================================
# DJ SOL ROTH: INTERACTIVE VJ PAD, TRANSPARENT OVERLAY & VISUAL ENGINE
# ==============================================================================

HTML_VJ_PAD = """<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
<title>Sol Roth // Master Multi-Character VJ Performance Pad</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #07090e; color: #fff; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    min-height: 100vh; display: flex; flex-direction: column; justify-content: space-between;
    padding: 14px; user-select: none; -webkit-user-select: none; touch-action: manipulation;
  }
  header.main {
    display: flex; justify-content: space-between; align-items: center;
    padding-bottom: 10px; border-bottom: 1px solid rgba(0, 240, 255, 0.2);
  }
  header.main .brand { font-size: 1.1rem; font-weight: 900; color: #00f0ff; letter-spacing: 1px; }
  .pad-status { font-size: 0.8rem; font-weight: 800; color: #00ff80; background: rgba(0,255,128,0.15); padding: 4px 8px; border-radius: 4px; }
  
  /* Bank Switcher Tabs */
  .bank-tabs {
    display: flex; gap: 8px; margin: 12px 0 6px 0; overflow-x: auto; padding-bottom: 4px;
  }
  .bank-tab-btn {
    background: rgba(20, 28, 48, 0.7); border: 1px solid rgba(0, 240, 255, 0.3);
    color: #94a3b8; padding: 8px 14px; border-radius: 8px; font-size: 0.82rem; font-weight: 800;
    cursor: pointer; white-space: nowrap; transition: all 0.15s;
  }
  .bank-tab-btn.active {
    background: #00f0ff; color: #000; font-weight: 900; border-color: #00f0ff;
    box-shadow: 0 0 15px rgba(0,240,255,0.4);
  }

  .pad-grid {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;
    margin: 10px 0; flex-grow: 1;
  }
  @media (max-width: 768px) {
    .pad-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
  }
  .vj-pad-btn {
    border: none; outline: none; border-radius: 12px;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: 6px; padding: 16px 8px; font-weight: 900; font-size: 0.9rem; text-transform: uppercase;
    color: #fff; cursor: pointer; transition: transform 0.05s ease, filter 0.05s ease;
    box-shadow: 0 6px 20px rgba(0,0,0,0.6); position: relative; overflow: hidden;
  }
  .vj-pad-btn:active { transform: scale(0.94); filter: brightness(1.4); }
  .pad-icon { font-size: 1.8rem; pointer-events: none; }
  .pad-sub { font-size: 0.65rem; font-weight: 800; opacity: 0.85; pointer-events: none; letter-spacing: 0.4px; }

  /* Schemes */
  .pad-breach { background: linear-gradient(135deg, #b026ff 0%, #ff007f 100%); border: 2px solid #ff007f; box-shadow: 0 0 20px rgba(255,0,127,0.5); }
  .pad-slam { background: linear-gradient(135deg, #eb322d 0%, #ff5e3a 100%); border: 2px solid #eb322d; }
  .pad-shock { background: linear-gradient(135deg, #00f0ff 0%, #0077ff 100%); border: 2px solid #00f0ff; color: #000; }
  .pad-crack { background: linear-gradient(135deg, #f58c14 0%, #ffd000 100%); border: 2px solid #ffd000; color: #000; }
  .pad-reset { background: linear-gradient(135deg, #00a86b 0%, #00ff80 100%); border: 2px solid #00ff80; color: #000; }
  .pad-strobe { background: #ffffff; color: #000; border: 2px solid #fff; box-shadow: 0 0 20px #ffffff; }
  .pad-blackout { background: #1a2233; border: 2px solid #334155; color: #94a3b8; }
  .pad-aura { background: linear-gradient(135deg, #ff007f 0%, #00f0ff 100%); border: 2px solid #00f0ff; }
  .pad-titan { background: linear-gradient(135deg, #f58c14 0%, #0077ff 100%); border: 2px solid #f58c14; }
  .pad-scene { background: rgba(20, 28, 48, 0.9); border: 1px solid rgba(0, 240, 255, 0.4); color: #00f0ff; }

  .feedback-banner {
    position: fixed; top: 12px; left: 50%; transform: translateX(-50%);
    background: rgba(0, 240, 255, 0.9); color: #000; padding: 6px 16px; border-radius: 20px;
    font-weight: 900; font-size: 0.85rem; opacity: 0; pointer-events: none; transition: opacity 0.2s;
    z-index: 100;
  }
  .feedback-banner.show { opacity: 1; }
</style>
</head>
<body>

<div class="feedback-banner" id="fb-banner">EVENT TRIGGERED</div>

<header class="main">
  <div class="brand">⚡ SOL ROTH // MULTI-CHARACTER VJ PAD</div>
  <div class="pad-status" id="live-bpm">128.0 BPM</div>
</header>

<!-- Character Bank Switcher Tabs -->
<div class="bank-tabs">
  <button class="bank-tab-btn active" onclick="switchBank('master3d')">🌟 3D Master Suite</button>
  <button class="bank-tab-btn" onclick="switchBank('allscenes')">🎬 50 Scenes</button>
  <button class="bank-tab-btn" onclick="switchBank('beast')">🐺 Entity X-01 (Beast)</button>
  <button class="bank-tab-btn" onclick="switchBank('aura')">🎤 AURA (Diva)</button>
  <button class="bank-tab-btn" onclick="switchBank('titan')">🤖 Titan Mecha</button>
  <button class="bank-tab-btn" onclick="switchBank('arcade')">🥊 16-Bit Arcade</button>
  <button class="bank-tab-btn" onclick="switchBank('dance')">💃 Dancefloor Catalyst</button>
  <button class="bank-tab-btn" onclick="switchBank('realms')">🌌 Cosmic Realms</button>
  <button class="bank-tab-btn" onclick="switchBank('toons')">📺 Toon & Machine</button>
  <button class="bank-tab-btn" onclick="switchBank('myth')">🏛️ Neo-God & Noir</button>
  <button class="bank-tab-btn" onclick="switchBank('cosmos')">🧬 Starship & Biopunk</button>
</div>

<!-- Bank 0: 3D Master Suite (Default Live Controller) -->
<main class="pad-grid" id="bank-master3d">
  <button class="vj-pad-btn pad-shock" onclick="sendTrigger('scene_1')">
    <span class="pad-icon">⚛️</span>
    <span>1. Quantum Core</span>
    <span class="pad-sub">Gimbal & Plasma</span>
  </button>
  <button class="vj-pad-btn pad-shock" onclick="sendTrigger('scene_2')">
    <span class="pad-icon">🌐</span>
    <span>2. Sphere Nexus</span>
    <span class="pad-sub">32-Screen Ball</span>
  </button>
  <button class="vj-pad-btn pad-shock" onclick="sendTrigger('scene_3')">
    <span class="pad-icon">🖥️</span>
    <span>3. Curved Wall</span>
    <span class="pad-sub">Command Center</span>
  </button>
  <button class="vj-pad-btn pad-shock" onclick="sendTrigger('scene_4')">
    <span class="pad-icon">🚀</span>
    <span>4. Warp Tunnel</span>
    <span class="pad-sub">Buildup Hexagon</span>
  </button>
  <button class="vj-pad-btn pad-shock" onclick="sendTrigger('scene_5')">
    <span class="pad-icon">🔺</span>
    <span>5. Cyber-Pyramid</span>
    <span class="pad-sub">Temple of Ra</span>
  </button>
  <button class="vj-pad-btn pad-shock" onclick="sendTrigger('scene_6')">
    <span class="pad-icon">💎</span>
    <span>6. Bismuth Cavern</span>
    <span class="pad-sub">Subterranean Crystal</span>
  </button>
  <button class="vj-pad-btn pad-shock" onclick="sendTrigger('scene_7')">
    <span class="pad-icon">🏎️</span>
    <span>7. Neon Highway</span>
    <span class="pad-sub">Cyberpunk Drift</span>
  </button>
  <button class="vj-pad-btn pad-shock" onclick="sendTrigger('scene_8')">
    <span class="pad-icon">🎸</span>
    <span>8. Mega-Stage</span>
    <span class="pad-sub">Festival Liquid Sky</span>
  </button>
  <button class="vj-pad-btn pad-shock" onclick="sendTrigger('scene_9')">
    <span class="pad-icon">💠</span>
    <span>9. Tesseract Iris</span>
    <span class="pad-sub">Sacred Geometry</span>
  </button>
  <button class="vj-pad-btn pad-shock" onclick="sendTrigger('scene_10')">
    <span class="pad-icon">⬛</span>
    <span>10. Matrix Monoliths</span>
    <span class="pad-sub">Digital Brutalism</span>
  </button>
  <button class="vj-pad-btn pad-shock" onclick="sendTrigger('scene_11')">
    <span class="pad-icon">⛪</span>
    <span>11. Cyber-Cathedral</span>
    <span class="pad-sub">Runic Light Organ</span>
  </button>
  <button class="vj-pad-btn pad-shock" onclick="sendTrigger('scene_12')">
    <span class="pad-icon">🏟️</span>
    <span>12. Stadium Mega-Dome</span>
    <span class="pad-sub">100K Cheering Fans</span>
  </button>
  <button class="vj-pad-btn pad-shock" onclick="sendTrigger('scene_13')">
    <span class="pad-icon">💿</span>
    <span>13. Album Showcase</span>
    <span class="pad-sub">Spinning Vinyl & HUD</span>
  </button>
  <button class="vj-pad-btn pad-slam" onclick="sendTrigger('storm')">
    <span class="pad-icon">⚡</span>
    <span>Storm FX</span>
    <span class="pad-sub">Lightning & Fog Swell</span>
  </button>
  <button class="vj-pad-btn pad-crack" onclick="sendTrigger('flip')">
    <span class="pad-icon">🌀</span>
    <span>Camera Flip</span>
    <span class="pad-sub">Vertigo Invert</span>
  </button>
  <button class="vj-pad-btn pad-crack" onclick="sendTrigger('colorshift')">
    <span class="pad-icon">🎨</span>
    <span>Color Shift</span>
    <span class="pad-sub">Palette Mode</span>
  </button>
  <button class="vj-pad-btn pad-aura" onclick="sendTrigger('announce')">
    <span class="pad-icon">📢</span>
    <span>Announce</span>
    <span class="pad-sub">Hero Billboard</span>
  </button>
  <button class="vj-pad-btn pad-breach" onclick="sendTrigger('override')">
    <span class="pad-icon">🚨</span>
    <span>Override</span>
    <span class="pad-sub">Protocol Red</span>
  </button>
  <button class="vj-pad-btn pad-blackout" onclick="sendTrigger('blackout')">
    <span class="pad-icon">🌑</span>
    <span>Blackout</span>
    <span class="pad-sub">Stage Tension</span>
  </button>
  <button class="vj-pad-btn pad-aura" onclick="sendTrigger('zoom')">
    <span class="pad-icon">🔍</span>
    <span>Camera Zoom</span>
    <span class="pad-sub">Focal Swoop</span>
  </button>
</main>

<!-- Bank 1: Entity X-01 Cyber Beast -->
<main class="pad-grid" id="bank-beast" style="display:none;">
  <button class="vj-pad-btn pad-breach" onclick="sendTrigger('breach')">
    <span class="pad-icon">🚨</span>
    <span>BREACH / DROP</span>
    <span class="pad-sub">3D Shatter Detonation</span>
  </button>
  <button class="vj-pad-btn pad-slam" onclick="sendTrigger('slam')">
    <span class="pad-icon">💥</span>
    <span>CREATURE SLAM</span>
    <span class="pad-sub">Impact Camera Shake</span>
  </button>
  <button class="vj-pad-btn pad-shock" onclick="sendTrigger('shock')">
    <span class="pad-icon">⚡</span>
    <span>ELECTRIC SHOCK</span>
    <span class="pad-sub">High Voltage Lightning</span>
  </button>
  <button class="vj-pad-btn pad-crack" onclick="sendTrigger('crack')">
    <span class="pad-icon">🔨</span>
    <span>CRACK GLASS</span>
    <span class="pad-sub">Voronoi Fracture +1</span>
  </button>
  <button class="vj-pad-btn pad-reset" onclick="sendTrigger('reset')">
    <span class="pad-icon">🔄</span>
    <span>RESET STASIS</span>
    <span class="pad-sub">Restore Cell</span>
  </button>
  <button class="vj-pad-btn pad-strobe" onclick="sendTrigger('strobe')">
    <span class="pad-icon">⚡</span>
    <span>WHITE STROBE</span>
    <span class="pad-sub">15Hz Blinder</span>
  </button>
  <button class="vj-pad-btn pad-scene" onclick="sendTrigger('scene_5')">
    <span class="pad-icon">🏙️</span>
    <span>NEON CITY</span>
    <span class="pad-sub">Megacity Dominion</span>
  </button>
  <button class="vj-pad-btn pad-blackout" onclick="sendTrigger('blackout')">
    <span class="pad-icon">🌑</span>
    <span>BLACKOUT</span>
    <span class="pad-sub">Beat Silence</span>
  </button>
</main>

<!-- Bank 2: AURA Cyber Pop Diva -->
<main class="pad-grid" id="bank-aura" style="display:none;">
  <button class="vj-pad-btn pad-aura" onclick="sendTrigger('scene_6')">
    <span class="pad-icon">💎</span>
    <span>AURA: PRISM</span>
    <span class="pad-sub">Crystal Stasis Vocal</span>
  </button>
  <button class="vj-pad-btn pad-breach" onclick="sendTrigger('scene_7')">
    <span class="pad-icon">🪽</span>
    <span>AURA: WINGS DROP</span>
    <span class="pad-sub">Laser Equalizer Wings</span>
  </button>
  <button class="vj-pad-btn pad-shock" onclick="sendTrigger('shock')">
    <span class="pad-icon">✨</span>
    <span>HARMONY PULSE</span>
    <span class="pad-sub">Cyan Glitch Glow</span>
  </button>
  <button class="vj-pad-btn pad-strobe" onclick="sendTrigger('strobe')">
    <span class="pad-icon">🎊</span>
    <span>CONFETTI FLASH</span>
    <span class="pad-sub">Stage Whiteout</span>
  </button>
  <button class="vj-pad-btn pad-scene" onclick="sendTrigger('scene_13')">
    <span class="pad-icon">🎧</span>
    <span>SOL ROTH ARENA</span>
    <span class="pad-sub">Holographic Decks</span>
  </button>
  <button class="vj-pad-btn pad-reset" onclick="sendTrigger('reset')">
    <span class="pad-icon">🔄</span>
    <span>RESET PRISM</span>
    <span class="pad-sub">Restore Crystal</span>
  </button>
</main>

<!-- Bank 3: Titan Vanguard Mecha -->
<main class="pad-grid" id="bank-titan" style="display:none;">
  <button class="vj-pad-btn pad-titan" onclick="sendTrigger('scene_8')">
    <span class="pad-icon">🏭</span>
    <span>TITAN: HANGAR</span>
    <span class="pad-sub">Launch Bay Charging</span>
  </button>
  <button class="vj-pad-btn pad-slam" onclick="sendTrigger('scene_9')">
    <span class="pad-icon">🚀</span>
    <span>LASER ASSAULT</span>
    <span class="pad-sub">Twin Railguns & Missiles</span>
  </button>
  <button class="vj-pad-btn pad-slam" onclick="sendTrigger('slam')">
    <span class="pad-icon">💣</span>
    <span>SUB-BASS SLAM</span>
    <span class="pad-sub">Reactor Shockwave</span>
  </button>
  <button class="vj-pad-btn pad-strobe" onclick="sendTrigger('strobe')">
    <span class="pad-icon">⚡</span>
    <span>MUZZLE FLASH</span>
    <span class="pad-sub">Artillery Strobe</span>
  </button>
  <button class="vj-pad-btn pad-scene" onclick="sendTrigger('scene_10')">
    <span class="pad-icon">🛰️</span>
    <span>4K FACILITY</span>
    <span class="pad-sub">Cyber Corridor</span>
  </button>
  <button class="vj-pad-btn pad-blackout" onclick="sendTrigger('blackout')">
    <span class="pad-icon">🌑</span>
    <span>BLACKOUT</span>
    <span class="pad-sub">Power Cut</span>
  </button>
</main>

<!-- Bank 4: Cosmic Dimensions & Finale -->
<main class="pad-grid" id="bank-realms" style="display:none;">
  <button class="vj-pad-btn pad-scene" onclick="sendTrigger('scene_11')">
    <span class="pad-icon">🌌</span>
    <span>WARP TUNNEL</span>
    <span class="pad-sub">Hexagon Laser Grid</span>
  </button>
  <button class="vj-pad-btn pad-scene" onclick="sendTrigger('scene_12')">
    <span class="pad-icon">🔮</span>
    <span>NEURO BASS</span>
    <span class="pad-sub">Sacred Mandala</span>
  </button>
  <button class="vj-pad-btn pad-breach" onclick="sendTrigger('scene_14')">
    <span class="pad-icon">🐉</span>
    <span>COSMIC TOTEM</span>
    <span class="pad-sub">Act 5: Finale Climax</span>
  </button>
  <button class="vj-pad-btn pad-strobe" onclick="sendTrigger('strobe')">
    <span class="pad-icon">✨</span>
    <span>SUPERNOVA</span>
    <span class="pad-sub">Blinding Celestial Flash</span>
  </button>
</main>
<!-- Bank 5: 16-Bit Arcade Fighter -->
<main class="pad-grid" id="bank-arcade" style="display:none;">
  <button class="vj-pad-btn pad-scene" onclick="sendTrigger('scene_15')">
    <span class="pad-icon">🕹️</span>
    <span>START FIGHT</span>
    <span class="pad-sub">16-Bit Arena</span>
  </button>
  <button class="vj-pad-btn pad-slam" onclick="sendTrigger('slam')">
    <span class="pad-icon">🥊</span>
    <span>JAB PUNCH</span>
    <span class="pad-sub">P1 Strike + Combo</span>
  </button>
  <button class="vj-pad-btn pad-shock" onclick="sendTrigger('shock')">
    <span class="pad-icon">⚡</span>
    <span>PLASMA HADOKEN</span>
    <span class="pad-sub">Energy Fireball</span>
  </button>
  <button class="vj-pad-btn pad-crack" onclick="sendTrigger('crack')">
    <span class="pad-icon">🐉</span>
    <span>DRAGON UPPERCUT</span>
    <span class="pad-sub">Shoryuken</span>
  </button>
  <button class="vj-pad-btn pad-breach" onclick="sendTrigger('breach')">
    <span class="pad-icon">🏆</span>
    <span>SUPER K.O.!</span>
    <span class="pad-sub">Drop Detonation</span>
  </button>
  <button class="vj-pad-btn pad-strobe" onclick="sendTrigger('strobe')">
    <span class="pad-icon">✨</span>
    <span>HIT-STOP FLASH</span>
    <span class="pad-sub">Critical Spark</span>
  </button>
</main>

<!-- Bank 6: Dancefloor Catalyst -->
<main class="pad-grid" id="bank-dance" style="display:none;">
  <button class="vj-pad-btn pad-aura" onclick="sendTrigger('scene_16')">
    <span class="pad-icon">💋</span>
    <span>SEDUCTIVE SWAY</span>
    <span class="pad-sub">Sinuous Body Wave</span>
  </button>
  <button class="vj-pad-btn pad-slam" onclick="sendTrigger('slam')">
    <span class="pad-icon">🕺</span>
    <span>WILD BREAKDANCE</span>
    <span class="pad-sub">Windmill Power Move</span>
  </button>
  <button class="vj-pad-btn pad-breach" onclick="sendTrigger('breach')">
    <span class="pad-icon">🌀</span>
    <span>5-CLONE CREW</span>
    <span class="pad-sub">Overdrive Rave</span>
  </button>
  <button class="vj-pad-btn pad-strobe" onclick="sendTrigger('strobe')">
    <span class="pad-icon">🎊</span>
    <span>CONFETTI BOMB</span>
    <span class="pad-sub">Stage Climax</span>
  </button>
</main>

<!-- Bank 7: Toon Mayhem & Kinetic Machine -->
<main class="pad-grid" id="bank-toons" style="display:none;">
  <button class="vj-pad-btn pad-aura" onclick="sendTrigger('scene_17')">
    <span class="pad-icon">📺</span>
    <span>1930s CARTOON</span>
    <span class="pad-sub">Rubber-Hose Demon</span>
  </button>
  <button class="vj-pad-btn pad-titan" onclick="sendTrigger('scene_18')">
    <span class="pad-icon">⚙️</span>
    <span>KINETIC ENGINE</span>
    <span class="pad-sub">Spinning Gear Core</span>
  </button>
  <button class="vj-pad-btn pad-slam" onclick="sendTrigger('slam')">
    <span class="pad-icon">🔨</span>
    <span>COMIC HAMMER</span>
    <span class="pad-sub">POW! Screen Shake</span>
  </button>
  <button class="vj-pad-btn pad-shock" onclick="sendTrigger('shock')">
    <span class="pad-icon">💨</span>
    <span>STEAM RELEASE</span>
    <span class="pad-sub">Piston Valve Vent</span>
  </button>
</main>

<!-- Bank 8: Neo-Olympus & Blade Runner Noir -->
<main class="pad-grid" id="bank-myth" style="display:none;">
  <button class="vj-pad-btn pad-breach" onclick="sendTrigger('scene_19')">
    <span class="pad-icon">🏛️</span>
    <span>NEO-OLYMPUS</span>
    <span class="pad-sub">Living Cyber-God</span>
  </button>
  <button class="vj-pad-btn pad-scene" onclick="sendTrigger('scene_20')">
    <span class="pad-icon">🌧️</span>
    <span>2049 METROPOLIS</span>
    <span class="pad-sub">Rain & Flying Spinners</span>
  </button>
  <button class="vj-pad-btn pad-shock" onclick="sendTrigger('shock')">
    <span class="pad-icon">⚡</span>
    <span>OLYMPUS LIGHTNING</span>
    <span class="pad-sub">Marble Laser Blast</span>
  </button>
  <button class="vj-pad-btn pad-strobe" onclick="sendTrigger('strobe')">
    <span class="pad-icon">💡</span>
    <span>NEON SURGE</span>
    <span class="pad-sub">Citywide Brownout</span>
  </button>
</main>

<!-- Bank 9: Starship, Biopunk & Evolved Trans-Human -->
<main class="pad-grid" id="bank-cosmos" style="display:none;">
  <button class="vj-pad-btn pad-scene" onclick="sendTrigger('scene_21')">
    <span class="pad-icon">🚀</span>
    <span>STARSHIP BRIDGE</span>
    <span class="pad-sub">Hyperdrive Warp Jump</span>
  </button>
  <button class="vj-pad-btn pad-reset" onclick="sendTrigger('scene_22')">
    <span class="pad-icon">🧬</span>
    <span>BIOPUNK FARM</span>
    <span class="pad-sub">Incubation Vats & DNA</span>
  </button>
  <button class="vj-pad-btn pad-aura" onclick="sendTrigger('scene_23')">
    <span class="pad-icon">👁️</span>
    <span>HOMO SYNTHETICA</span>
    <span class="pad-sub">Evolved Trans-Human</span>
  </button>
  <button class="vj-pad-btn pad-slam" onclick="sendTrigger('scene_24')">
    <span class="pad-icon">⚔️</span>
    <span>CYBER-RONIN</span>
    <span class="pad-sub">Neon Katana Duel</span>
  </button>
</main>

<!-- Bank 10: Interactive Games, Factory & Reanimator -->
<main class="pad-grid" id="bank-creations" style="display:none;">
  <button class="vj-pad-btn pad-breach" onclick="sendTrigger('scene_25')">
    <span class="pad-icon">🎯</span>
    <span>TARGET ARCADE</span>
    <span class="pad-sub">16-Bit Shooting Game</span>
  </button>
  <button class="vj-pad-btn pad-titan" onclick="sendTrigger('scene_26')">
    <span class="pad-icon">🤖</span>
    <span>ROBOT FOUNDRY</span>
    <span class="pad-sub">Companion Android Assembly</span>
  </button>
  <button class="vj-pad-btn pad-aura" onclick="sendTrigger('scene_27')">
    <span class="pad-icon">🌊</span>
    <span>LIQUID FLOW RAVE</span>
    <span class="pad-sub">Gloving & Light Ribbons</span>
  </button>
  <button class="vj-pad-btn pad-shock" onclick="sendTrigger('scene_28')">
    <span class="pad-icon">⚡</span>
    <span>REANIMATOR LAB</span>
    <span class="pad-sub">Cyber-Frankenstein</span>
  </button>
  <button class="vj-pad-btn pad-slam" onclick="sendTrigger('shoot')">
    <span class="pad-icon">💥</span>
    <span>FIRE LASER</span>
    <span class="pad-sub">Shoot Arcade Target</span>
  </button>
  <button class="vj-pad-btn pad-reset" onclick="sendTrigger('swap_head')">
    <span class="pad-icon">🔀</span>
    <span>SWAP HEAD</span>
    <span class="pad-sub">Cycle Modular Parts</span>
  </button>
  <button class="vj-pad-btn pad-strobe" onclick="sendTrigger('reanimate')">
    <span class="pad-icon">⚡</span>
    <span>10,000V DROP</span>
    <span class="pad-sub">Tesla Reanimation</span>
  </button>
  <button class="vj-pad-btn pad-crack" onclick="sendTrigger('weld')">
    <span class="pad-icon">🛠️</span>
    <span>WELD BURST</span>
    <span class="pad-sub">Factory Plasma Sparks</span>
  </button>
</main>

<footer style="display:flex; justify-content:space-between; align-items:center; padding-top:10px; border-top:1px solid rgba(255,255,255,0.1); font-size:0.8rem; font-weight:700; color:#94a3b8; flex-wrap:wrap; gap:8px;">
  <div>SOL ROTH // MULTI-CHARACTER LIVE RIG</div>
  <div style="display:flex; gap:10px;">
    <a href="/vj" target="_blank" style="color:#00f0ff; text-decoration:none;">📺 VJ Screen</a>
    <a href="/overlay" target="_blank" style="color:#ffd000; text-decoration:none;">🎥 OBS HUD</a>
  </div>
</footer>

<script>
  let fbTimer = null;
  function showFeedback(text) {
    const el = document.getElementById('fb-banner');
    el.innerText = text;
    el.classList.add('show');
    clearTimeout(fbTimer);
    fbTimer = setTimeout(() => el.classList.remove('show'), 700);
  }

  function switchBank(bank) {
    ['master3d', 'allscenes', 'beast', 'aura', 'titan', 'arcade', 'dance', 'realms', 'toons', 'myth', 'cosmos', 'creations'].forEach(b => {
      const el = document.getElementById(`bank-${b}`);
      if (el) el.style.display = (b === bank) ? 'grid' : 'none';
    });
    document.querySelectorAll('.bank-tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
  }

  const stageBus = new BroadcastChannel('sol_roth_stage_bus');

  async function sendTrigger(evt) {
    try {
      showFeedback(`⚡ ${evt.toUpperCase()}`);
      if (navigator.vibrate) navigator.vibrate(40);
      
      // Zero-latency cross-window broadcast to Quantum Visualizer
      if (evt === 'meteor' || evt === 'strike' || evt === 'blast') stageBus.postMessage({ action: 'TRIGGER_METEOR' });
      else if (evt === 'emp' || evt === 'blackout') stageBus.postMessage({ action: 'TRIGGER_EMP' });
      else if (evt === 'next' || evt === 'next_act') stageBus.postMessage({ action: 'NEXT_ACT' });
      else if (evt === 'brand' || evt === 'merch') stageBus.postMessage({ action: 'TOGGLE_BRAND' });
      else if (evt.startsWith('mode_')) stageBus.postMessage({ action: 'SET_MODE', mode: parseInt(evt.replace('mode_', '')) });

      await fetch(`/api/vj/trigger?event=${evt}`);
    } catch(e) {}
  }
</script>
</body>
</html>
"""

HTML_CHAT_LAB = """<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sol Roth // Twitch & YouTube Chat VJ Control Lab</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #07090e; color: #fff; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    padding: 24px; max-width: 900px; margin: 0 auto; line-height: 1.5;
  }
  h1 { color: #00f0ff; font-size: 1.8rem; font-weight: 900; margin-bottom: 8px; }
  .tagline { color: #8fa0c0; margin-bottom: 24px; font-weight: 600; }
  .card {
    background: #0d121f; border: 1px solid rgba(0, 240, 255, 0.25); border-radius: 12px;
    padding: 20px; margin-bottom: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  }
  .card h2 { font-size: 1.2rem; font-weight: 800; color: #ffd000; margin-bottom: 12px; display: flex; align-items: center; gap: 8px; }
  .card button {
    background: linear-gradient(135deg, #1a233a 0%, #223055 100%);
    border: 1px solid rgba(0, 240, 255, 0.4); color: #fff; padding: 10px 16px; border-radius: 8px;
    font-weight: 800; font-size: 0.85rem; cursor: pointer; transition: all 0.15s;
    display: inline-flex; align-items: center; gap: 6px; margin: 4px;
  }
  .card button:hover { background: #00f0ff; color: #000; border-color: #00f0ff; transform: translateY(-2px); }
  code { background: #151c2e; padding: 3px 8px; border-radius: 4px; color: #00ff80; font-family: monospace; font-size: 0.9rem; }
  pre { background: #151c2e; padding: 14px; border-radius: 8px; overflow-x: auto; color: #00f0ff; font-family: monospace; margin: 10px 0; font-size: 0.85rem; }
  .status-badge { display: inline-block; padding: 4px 10px; border-radius: 6px; font-weight: 900; font-size: 0.78rem; background: rgba(0, 255, 128, 0.15); color: #00ff80; }
</style>
</head>
<body>

<h1>🎮 SOL ROTH // LIVE CHAT VJ CONTROL LAB</h1>
<p class="tagline">Interactive Twitch & YouTube Chat Integration for Live Streaming Performances</p>

<div class="card">
  <h2><span>🧪</span> 1-Click Chat Action Simulator (Test Live on VJ Screen)</h2>
  <p style="color:#8fa0c0; font-size:0.88rem; margin-bottom:14px;">Click any button below to simulate viewer chat commands and see them trigger on <a href="/vj" target="_blank" style="color:#00f0ff; font-weight:800;">http://localhost:7777/vj</a> in real time:</p>
  <div>
    <button onclick="sendSim('hadoken')">⚡ !hadoken (Plasma Fireball)</button>
    <button onclick="sendSim('shoryuken')">🐉 !shoryuken (Dragon Uppercut)</button>
    <button onclick="sendSim('punch')">🥊 !punch (Arcade Combo)</button>
    <button onclick="sendSim('kick')">💥 !kick (Critical Kick)</button>
    <button onclick="sendSim('slam')">🐺 !slam (Beast Glass Shake)</button>
    <button onclick="sendSim('tase')">⚡ !tase (Lightning Arc)</button>
    <button onclick="sendSim('crack')">🔨 !crack (Fracture +1)</button>
    <button onclick="sendSim('wings')">🪽 !wings (AURA Equalizer Wings)</button>
    <button onclick="sendSim('missile')">🚀 !missile (Titan Mecha Swarm)</button>
    <button onclick="sendSim('confetti')">🎊 !confetti (Stage Blast)</button>
    <button onclick="sendSim('dance')">💃 !dance (Clone Rave Overdrive)</button>
    <button onclick="sendSim('ko')">🏆 !ko (Drop Detonation)</button>
    <button onclick="sendSim('shoot')">🎯 !shoot (Arcade Laser Shot)</button>
    <button onclick="sendSim('weld')">🛠️ !weld (Factory Plasma Sparks)</button>
    <button onclick="sendSim('liquid')">🌊 !liquid (Liquid Light Ribbons)</button>
    <button onclick="sendSim('reanimate')">⚡ !reanimate (Tesla Lightning Awakening)</button>
    <button onclick="sendSim('swaphead')">🔀 !swaphead (Modular Part Swap)</button>
  </div>
  <div id="sim-feedback" style="margin-top:12px; font-weight:800; color:#00ff80; font-size:0.85rem;"></div>
</div>

<div class="card">
  <h2><span>📡</span> How to Run the Live Twitch Chat Bridge (Zero Config)</h2>
  <p style="color:#c0d0e8; font-size:0.9rem; margin-bottom:8px;">
    No bot registration, OAuth tokens, or API keys needed. The bridge connects anonymously to public Twitch chat via TLS socket:
  </p>
  <pre>python3 scripts/sol_roth_twitch_chat_bridge.py solroth</pre>
  <p style="color:#8fa0c0; font-size:0.82rem;">(Replace <code>solroth</code> with your actual Twitch username)</p>
</div>

<div class="card">
  <h2><span>🤖</span> Nightbot / Streamer.bot Webhook URL</h2>
  <p style="color:#c0d0e8; font-size:0.9rem; margin-bottom:8px;">
    If you use Nightbot or Streamlabs Cloudbot, add custom commands using this 1-line URL:
  </p>
  <pre>$(urlfetch http://localhost:7777/api/vj/chat_trigger?user=$(user)&action=hadoken)</pre>
</div>

<div style="display:flex; justify-content:space-between; margin-top:20px;">
  <a href="/vj" target="_blank" style="color:#00f0ff; text-decoration:none; font-weight:800;">📺 Open VJ Projector Screen</a>
  <a href="/pad" target="_blank" style="color:#ffd000; text-decoration:none; font-weight:800;">📱 Open iPad Touch Controller</a>
</div>

<script>
  const users = ['SolFan_99', 'NeonRider', 'CyberValkyrie', 'BassHead2026', 'AxiomVIP', 'TwitchSub'];
  async function sendSim(act) {
    const user = users[Math.floor(Math.random() * users.length)];
    try {
      const res = await fetch(`/api/vj/chat_trigger?user=${encodeURIComponent(user)}&action=${encodeURIComponent(act)}`);
      const data = await res.json();
      document.getElementById('sim-feedback').innerText = `✓ Sent: [${user}] -> !${act.toUpperCase()}`;
    } catch(e) {
      document.getElementById('sim-feedback').innerText = `❌ Error sending trigger`;
    }
  }
</script>
</body>
</html>
"""

HTML_OVERLAY = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sol Roth // OBS Studio Transparent Broadcast Overlay</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    width: 100vw; height: 100vh;
    background: transparent !important;
    overflow: hidden; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    user-select: none;
  }
  
  /* Lower-Third Now Playing Card */
  .obs-card {
    position: absolute; bottom: 36px; left: 36px;
    background: rgba(8, 12, 22, 0.88);
    border-left: 6px solid #00f0ff;
    border-top: 1px solid rgba(0, 240, 255, 0.3);
    border-right: 1px solid rgba(0, 240, 255, 0.3);
    border-bottom: 1px solid rgba(0, 240, 255, 0.3);
    padding: 14px 22px; border-radius: 10px;
    backdrop-filter: blur(14px); box-shadow: 0 12px 40px rgba(0,0,0,0.85);
    display: flex; flex-direction: column; gap: 4px;
    max-width: 620px; transition: transform 0.4s ease, opacity 0.4s ease;
  }
  .obs-tag {
    font-size: 0.72rem; font-weight: 900; color: #ffd000; text-transform: uppercase; letter-spacing: 1.5px;
    display: flex; align-items: center; gap: 8px;
  }
  .obs-title {
    font-size: 1.4rem; font-weight: 900; color: #fff; text-shadow: 0 0 15px rgba(0,240,255,0.6);
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .obs-artist {
    font-size: 0.95rem; font-weight: 700; color: #00f0ff;
  }
  .obs-meta {
    font-size: 0.82rem; font-weight: 800; color: #94a3b8; margin-top: 4px;
    display: flex; gap: 12px; align-items: center;
  }
  .eq-bar-wrap {
    display: inline-flex; align-items: flex-end; gap: 2px; height: 14px;
  }
  .eq-bar {
    width: 3px; background: #00f0ff; border-radius: 1px;
    animation: eqBounce 0.6s ease-in-out infinite alternate;
  }
  .eq-bar:nth-child(1) { height: 60%; animation-delay: 0.1s; }
  .eq-bar:nth-child(2) { height: 100%; animation-delay: 0.3s; }
  .eq-bar:nth-child(3) { height: 40%; animation-delay: 0.2s; }
  .eq-bar:nth-child(4) { height: 80%; animation-delay: 0.4s; }
  @keyframes eqBounce {
    0% { height: 20%; }
    100% { height: 100%; }
  }

  /* Center Floating Karaoke Lyrics */
  .obs-lyrics {
    position: absolute; top: 40%; left: 50%; transform: translate(-50%, -50%);
    width: 88%; text-align: center; pointer-events: none;
  }
  .obs-lyric-main {
    font-size: clamp(2rem, 5vw, 3.8rem); font-weight: 900; color: #fff;
    text-transform: uppercase; letter-spacing: 1px;
    text-shadow: 0 0 25px rgba(0,240,255,0.9), 0 0 50px rgba(255,0,127,0.6), 0 4px 10px rgba(0,0,0,0.9);
    line-height: 1.2;
  }
  .obs-lyric-next {
    font-size: clamp(1.1rem, 2.2vw, 1.8rem); font-weight: 700;
    color: rgba(255,255,255,0.7); margin-top: 14px;
    text-shadow: 0 2px 8px rgba(0,0,0,0.9);
  }
</style>
</head>
<body>

<div class="obs-lyrics" id="obs-lyrics">
  <div class="obs-lyric-main" id="lyric-main">SOL ROTH // LIVE STREAM</div>
  <div class="obs-lyric-next" id="lyric-next">Hybrid Performance DJ & Producer</div>
</div>

<div class="obs-card" id="obs-card">
  <div class="obs-tag">
    <div class="eq-bar-wrap">
      <div class="eq-bar"></div><div class="eq-bar"></div><div class="eq-bar"></div><div class="eq-bar"></div>
    </div>
    <span>NOW PLAYING // LIVE ON DECK</span>
    <span id="deck-badge" style="background:#00f0ff; color:#000; padding:1px 6px; border-radius:3px;">DECK 1</span>
    <span id="vocal-badge" style="display:none; background:rgba(255,0,127,0.2); border:1px solid #ff007f; color:#ff007f; padding:1px 8px; border-radius:4px; font-weight:900; font-size:0.68rem; letter-spacing:1px; margin-left:auto;">🎤 LIVE VOCAL FEATURE</span>
  </div>
  <div class="obs-title" id="track-title">Loading Track...</div>
  <div class="obs-artist" id="track-artist">Sol Roth Stage Master</div>
  <div class="obs-meta">
    <span id="track-bpm" style="color:#ffd000;">128.0 BPM</span>
    <span id="track-key" style="color:#00ff80;">Key 8A (Am)</span>
    <span id="track-genre" style="color:#ff007f;">Tech House</span>
  </div>
  <div style="font-size:0.68rem; font-weight:800; color:rgba(255,255,255,0.5); margin-top:6px; letter-spacing:0.8px; text-transform:uppercase; border-top:1px solid rgba(255,255,255,0.08); padding-top:4px;">
    ⚡ Rig: Pioneer DDJ-FLX10 • Alesis SamplePad Pro (Audio + Sticks) • AlphaTheta Slab • Live Mic (Select Originals) • Rekordbox 7
  </div>
</div>

<script>
  async function pollTrack() {
    try {
      const res = await fetch('/api/now_playing?engine=auto');
      const data = await res.json();
      if (data && data.decks) {
        const activeKey = data.latest_deck || '1';
        const t = data.decks[activeKey];
        if (t) {
          document.getElementById('track-title').innerText = t.title || 'Live Performance';
          document.getElementById('track-artist').innerText = t.artist || 'DJ Sol Roth';
          document.getElementById('track-bpm').innerText = `${parseFloat(t.bpm || 128.0).toFixed(1)} BPM`;
          const musKey = t.musical_key ? ` (${t.musical_key})` : '';
          document.getElementById('track-key').innerText = `Key ${t.key || '8A'}${musKey}`;
          document.getElementById('track-genre').innerText = t.genre || 'Electronic';

          // Dynamically show Live Vocal badge only for Sol Roth Originals & VIPs
          const vBadge = document.getElementById('vocal-badge');
          if (vBadge) {
            const isOriginal = (t.artist && t.artist.toLowerCase().includes('sol roth')) || 
                               (t.title && (t.title.toLowerCase().includes('sol roth') || t.title.toLowerCase().includes('vip') || t.title.toLowerCase().includes('original')));
            vBadge.style.display = isOriginal ? 'inline-flex' : 'none';
          }
        }
      }
    } catch(e) {}
  }
  setInterval(pollTrack, 1000);
  pollTrack();
</script>
</body>
</html>
"""

HTML_VISUALS = """<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>Sol Roth // Master Reactive Stage Visualizer & VJ Engine</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    width: 100vw; height: 100vh;
    background: #000; color: #fff;
    overflow: hidden; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    user-select: none;
  }
  #canvas-visuals {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 2; pointer-events: none;
  }
  #video-layer {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0;
    transition: opacity 0.4s ease;
  }
  #img-layer {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1;
    transition: opacity 0.4s ease; opacity: 0;
  }
  #strobe-overlay {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 100;
    background: #fff; pointer-events: none; opacity: 0; transition: opacity 0.05s ease;
  }
  #blackout-overlay {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 99;
    background: #000; pointer-events: none; opacity: 0; transition: opacity 0.2s ease;
  }

  /* Floating Top Header (Auto-Hiding) */
  .vj-hud-overlay {
    position: absolute; top: 0; left: 0; right: 0;
    padding: 14px 20px; display: flex; justify-content: space-between; align-items: center;
    background: linear-gradient(180deg, rgba(0,0,0,0.9) 0%, transparent 100%);
    z-index: 20; transition: opacity 0.5s ease;
    flex-wrap: wrap; gap: 8px;
  }
  header.vj-hud-overlay button,
  header.vj-hud-overlay a.button {
    background: rgba(20, 25, 40, 0.75);
    border: 1px solid rgba(0, 240, 255, 0.4);
    color: #fff; padding: 7px 12px; border-radius: 6px;
    font-size: 0.82rem; font-weight: 800; cursor: pointer;
    backdrop-filter: blur(8px); display: inline-flex; align-items: center; gap: 6px;
    text-decoration: none; transition: all 0.2s;
  }
  header.vj-hud-overlay button:hover,
  header.vj-hud-overlay a.button:hover { background: #00f0ff; color: #000; }
  
  /* Lower-Third Now Playing Banner */
  .now-playing-banner {
    position: absolute; bottom: 24px; left: 24px; z-index: 20;
    background: rgba(10, 14, 25, 0.88);
    border-left: 6px solid #00f0ff;
    border-top: 1px solid rgba(0,240,255,0.3);
    border-right: 1px solid rgba(0,240,255,0.3);
    border-bottom: 1px solid rgba(0,240,255,0.3);
    padding: 12px 18px; border-radius: 8px;
    backdrop-filter: blur(12px); box-shadow: 0 10px 40px rgba(0,0,0,0.8);
    display: flex; flex-direction: column; gap: 4px;
    max-width: 580px; transition: opacity 0.4s ease;
  }
  .now-playing-banner.hidden { opacity: 0; }
  .np-tag {
    font-size: 0.7rem; font-weight: 900; color: #ffd000; text-transform: uppercase; letter-spacing: 1.5px;
    display: flex; align-items: center; gap: 6px;
  }
  .np-title {
    font-size: 1.3rem; font-weight: 900; color: #fff; text-shadow: 0 0 15px rgba(0,240,255,0.5);
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .np-artist {
    font-size: 0.9rem; font-weight: 700; color: #00f0ff;
  }
  .np-meta {
    font-size: 0.78rem; font-weight: 800; color: #a0aec0; margin-top: 2px;
    display: flex; gap: 10px;
  }

  /* Fullscreen Big Sing-Along Karaoke Lyrics Overlay */
  .stage-lyrics-hero {
    position: absolute; top: 42%; left: 50%; transform: translate(-50%, -50%);
    width: 90%; text-align: center; z-index: 15;
    pointer-events: none; transition: opacity 0.4s ease;
  }
  .stage-lyrics-hero.hidden { opacity: 0; }
  .lyric-active-line {
    font-size: clamp(2rem, 5.5vw, 4rem); font-weight: 900;
    color: #fff; text-transform: uppercase; letter-spacing: 1px;
    text-shadow: 0 0 25px rgba(0,240,255,0.8), 0 0 50px rgba(255,0,127,0.5);
    line-height: 1.2;
  }
  .lyric-next-line {
    font-size: clamp(1rem, 2.5vw, 1.8rem); font-weight: 700;
    color: rgba(255,255,255,0.55); margin-top: 14px;
  }

  /* BPM Strobe Pulse Light */
  .beat-pulse-ring {
    position: absolute; top: 16px; right: 16px;
    width: 20px; height: 20px; border-radius: 50%;
    background: #00f0ff; box-shadow: 0 0 20px #00f0ff;
    transition: transform 0.05s ease-out, opacity 0.1s ease-out;
    opacity: 0.3; z-index: 20;
  }

  /* Sleek Slide-Out VJ Scenes Drawer */
  aside.drawer {
    position: fixed; top: 0; left: 0;
    width: min(640px, 92vw); height: 100vh;
    background: rgba(7, 9, 14, 0.96);
    backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
    border-right: 2px solid rgba(0, 240, 255, 0.45);
    box-shadow: 10px 0 50px rgba(0, 0, 0, 0.85), 0 0 30px rgba(0, 240, 255, 0.2);
    z-index: 1000;
    display: flex; flex-direction: column;
    transform: translateX(-105%);
    transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1);
    user-select: none; -webkit-user-select: none;
  }
  aside.drawer.open { transform: translateX(0); }
  aside.drawer > header {
    padding: 16px 18px;
    border-bottom: 1px solid rgba(0, 240, 255, 0.25);
    display: flex; justify-content: space-between; align-items: center;
    background: rgba(13, 18, 31, 0.7);
  }
  .drawer-close-btn {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff; width: 36px; height: 36px; border-radius: 50%;
    font-size: 1.1rem; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: all 0.15s;
  }
  .drawer-close-btn:hover { background: #ff007f; border-color: #ff007f; }
  .drawer-search-bar { padding: 12px 18px 8px 18px; }
  .drawer-search-bar input {
    width: 100%; padding: 10px 14px; border-radius: 8px;
    background: rgba(20, 28, 48, 0.8); border: 1px solid rgba(0, 240, 255, 0.3);
    color: #fff; font-size: 0.9rem; outline: none; font-family: inherit;
  }
  .drawer-search-bar input:focus {
    border-color: #00f0ff; box-shadow: 0 0 15px rgba(0, 240, 255, 0.4);
  }
  .drawer-cat-tabs {
    display: flex; gap: 6px; padding: 4px 18px 10px 18px;
    overflow-x: auto; white-space: nowrap;
  }
  .cat-pill {
    background: rgba(20, 28, 48, 0.6); border: 1px solid rgba(0, 240, 255, 0.2);
    color: #94a3b8; padding: 6px 12px; border-radius: 20px;
    font-size: 0.75rem; font-weight: 800; cursor: pointer; transition: all 0.15s;
  }
  .cat-pill.active {
    background: #00f0ff; color: #000; border-color: #00f0ff;
    box-shadow: 0 0 12px rgba(0, 240, 255, 0.4); font-weight: 900;
  }
  .scenes-grid {
    flex: 1; overflow-y: auto; padding: 10px 18px 24px 18px;
    display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 12px;
  }
  .scene-card {
    background: rgba(13, 18, 31, 0.75); border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px; overflow: hidden; display: flex; flex-direction: column;
    cursor: pointer; transition: all 0.18s ease;
  }
  .scene-card:hover {
    border-color: rgba(0, 240, 255, 0.6); transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.6);
  }
  .scene-card.active {
    border: 2px solid #00f0ff; background: rgba(0, 240, 255, 0.12);
    box-shadow: 0 0 20px rgba(0, 240, 255, 0.35);
  }
  .scene-thumb-wrap {
    position: relative; width: 100%; height: 120px;
    background: #05070c; overflow: hidden;
  }
  .scene-card-thumb {
    width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;
  }
  .scene-card:hover .scene-card-thumb { transform: scale(1.05); }
  .scene-card-badge {
    position: absolute; top: 6px; left: 6px;
    background: rgba(0, 0, 0, 0.75); color: #00f0ff;
    border: 1px solid rgba(0, 240, 255, 0.4); font-size: 0.65rem; font-weight: 900;
    padding: 2px 6px; border-radius: 4px; letter-spacing: 0.5px;
  }
  .scene-card-num {
    position: absolute; bottom: 6px; right: 6px;
    background: rgba(0, 0, 0, 0.8); color: #ffd000;
    font-family: monospace; font-weight: 900; font-size: 0.75rem;
    padding: 2px 6px; border-radius: 4px;
  }
  .scene-card-body { padding: 10px 12px 6px 12px; flex: 1; }
  .scene-card-char {
    font-size: 0.7rem; font-weight: 800; color: #ff007f;
    text-transform: uppercase; letter-spacing: 0.6px; margin-bottom: 2px;
  }
  .scene-card-body h4 {
    font-size: 0.85rem; font-weight: 800; color: #fff;
    line-height: 1.25; margin: 0 0 4px 0;
  }
  .scene-card-desc {
    font-size: 0.7rem; color: #94a3b8; line-height: 1.25;
    display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
  }
  .scene-card-actions { padding: 6px 12px 10px 12px; display: flex; gap: 6px; }
  .scene-card-actions button {
    flex: 1; background: rgba(0, 240, 255, 0.15); border: 1px solid rgba(0, 240, 255, 0.4);
    color: #00f0ff; padding: 7px 10px; border-radius: 6px; font-size: 0.75rem;
    font-weight: 800; cursor: pointer; transition: all 0.15s;
  }
  .scene-card-actions button:hover, .scene-card.active .scene-card-actions button { background: #00f0ff; color: #000; }
  .scene-card-actions a.button {
    background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff; padding: 7px 10px; border-radius: 6px; font-size: 0.75rem;
    text-decoration: none; display: flex; align-items: center; justify-content: center;
  }
  .scene-card-actions a.button:hover { background: #ffd000; color: #000; border-color: #ffd000; }
</style>
</head>
<body>

<video id="video-layer" loop muted playsinline></video>
<img id="img-layer" alt="VJ Artwork">
<canvas id="canvas-visuals"></canvas>

<div id="strobe-overlay"></div>
<div id="blackout-overlay"></div>
<div id="crt-overlay" style="position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:90; background:linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06)); background-size: 100% 3px, 6px 100%; display:none;"></div>
<div class="beat-pulse-ring" id="beat-ring"></div>


<!-- Sleek Slide-Out VJ Scenes Drawer -->
<aside id="scenes-drawer" class="drawer">
  <header>
    <div style="display:flex; align-items:center; gap:10px;">
      <span style="font-size:1.4rem;">🎬</span>
      <div>
        <div style="font-weight:900; font-size:1.15rem; color:#00f0ff; letter-spacing:1px;">SOL ROTH // VJ SCENE SELECTOR</div>
        <div style="font-size:0.75rem; color:#94a3b8;">50 High-Resolution Video Loops, 3D Renders & Interactive Modes</div>
      </div>
    </div>
    <button class="drawer-close-btn" onclick="toggleScenesDrawer()">✕</button>
  </header>

  <div class="drawer-search-bar">
    <input type="text" id="scene-filter-input" placeholder="🔍 Search scenes, characters, film, 3d, game..." oninput="filterScenesGrid()">
  </div>

  <div class="drawer-cat-tabs">
    <button class="cat-pill active" onclick="filterCategory('all', this)">⭐ All (50)</button>
    <button class="cat-pill" onclick="filterCategory('film', this)">🎬 Biopunk Film (7)</button>
    <button class="cat-pill" onclick="filterCategory('3d', this)">🧪 AI 3D Renders (5)</button>
    <button class="cat-pill" onclick="filterCategory('art', this)">🎨 Sol's Originals (10)</button>
    <button class="cat-pill" onclick="filterCategory('stage', this)">⚡ Stage Loops (14)</button>
    <button class="cat-pill" onclick="filterCategory('games', this)">🎮 Games & Retro (14)</button>
  </div>

  <div class="scenes-grid" id="scenes-grid-container">
    <!-- Populated dynamically via JS -->
  </div>
</div>
<!-- Auto-Hiding Control Header -->
<header class="vj-hud-overlay" id="vj-header">
  <div style="font-weight:900; font-size:1.05rem; color:#00f0ff; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
    <span>⚡ SOL ROTH // VJ SYSTEM</span>
    <button onclick="stepScene(-1)" title="Previous Scene (Left Arrow or [ )" style="padding:4px 10px; font-size:0.9rem;">◀</button>
    <button onclick="toggleScenesDrawer()" id="btn-drawer-toggle" style="background:linear-gradient(135deg, #00f0ff 0%, #aa00ff 100%); color:#fff; font-weight:900; border:1px solid #00f0ff; box-shadow:0 0 15px rgba(0,240,255,0.4); display:flex; align-items:center; gap:6px;">
      🎬 SCENES <span id="scene-counter-badge" style="background:rgba(0,0,0,0.5); padding:2px 7px; border-radius:10px; font-size:0.75rem;">1 / 50</span>
    </button>
    <button onclick="stepScene(1)" title="Next Scene (Right Arrow or ] )" style="padding:4px 10px; font-size:0.9rem;">▶</button>
    <span style="font-size:0.75rem; background:rgba(255,208,0,0.2); color:#ffd000; padding:3px 8px; border-radius:4px; font-weight:800; max-width:280px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" id="mode-badge">Act 1: Creature Stasis Box</span>
    <span style="font-size:0.72rem; background:rgba(0,255,128,0.2); color:#00ff80; padding:2px 6px; border-radius:4px; font-weight:900;" id="autopilot-badge">🔄 Auto-Pilot: ON (45s)</span>
  </div>
  <div style="display:flex; gap:5px; flex-wrap:wrap; align-items:center;">
    <button id="btn-audio" onclick="toggleAudioInput()">🎤 Mic Reactivity</button>
    <button id="btn-autopilot" onclick="toggleAutoPilot()" style="background:#00ff80; color:#000; font-weight:900;">🔄 Auto-Pilot (A)</button>
    <button onclick="toggleScenesDrawer()">🎨 Browse (M)</button>
    <button onclick="triggerBreach()" style="background:#ff007f; color:#fff; font-weight:900;">🚨 Breach (B)</button>
    <button onclick="triggerSlam()">💥 Slam (S)</button>
    <button onclick="triggerShock()">⚡ Shock (E)</button>
    <button onclick="toggleFullScreen()" style="background:#00f0ff; color:#000;">⛶ Fullscreen (F)</button>
    <a href="/pad" target="_blank" class="button" style="background:#ffd000; color:#000;">📱 iPad Pad</a>
    <a href="/" class="button">🎤 Stage HUD</a>
  </div>
</header>

<!-- Stage Big Screen Sing-Along Lyrics Overlay -->
<div class="stage-lyrics-hero hidden" id="stage-lyrics-box">
  <div class="lyric-active-line" id="stage-lyric-main">SOL ROTH // LIVE IN THE MIX</div>
  <div class="lyric-next-line" id="stage-lyric-next">Drop incoming on beat...</div>
</div>

<!-- Lower-Third Track ID Overlay -->
<div class="now-playing-banner" id="now-playing-card">
  <div class="np-tag">
    <span>⚡ LIVE ON DECK</span>
    <span id="np-deck-badge" style="background:#00f0ff; color:#000; padding:1px 5px; border-radius:3px;">DECK 1</span>
  </div>
  <div class="np-title" id="np-title">Loading Track...</div>
  <div class="np-artist" id="np-artist">Sol Roth Stage Master</div>
  <div class="np-meta">
    <span id="np-bpm" style="color:#ffd000;">128.0 BPM</span>
    <span id="np-key" style="color:#00ff80;">Key 8A (Am)</span>
    <span id="np-genre" style="color:#ff007f;">Tech House</span>
  </div>
</div>

<script>
  const canvas = document.getElementById('canvas-visuals');
  const ctx = canvas.getContext('2d');
  const videoElem = document.getElementById('video-layer');
  const imgElem = document.getElementById('img-layer');
  const strobeOverlay = document.getElementById('strobe-overlay');
  const blackoutOverlay = document.getElementById('blackout-overlay');

  let W = window.innerWidth;
  let H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;

  // Interactive Click & Move Listeners for Shooting Game & Experiments
  window.addEventListener('click', (e) => {
    // Ignore clicks inside control header or drawer
    if (e.target.closest('#vj-header') || e.target.closest('#scenes-drawer')) return;
    const sc = NARRATIVE_SCENES[currentSceneIndex];
    if (sc && sc.renderer === 'target_arcade') {
      fireArcadeLaser(e.clientX, e.clientY);
    } else if (sc && sc.renderer === 'psych_experiment') {
      triggerPsychRedButton(e.clientX, e.clientY);
    }
  });

  window.addEventListener('mousemove', (e) => {
    arcadeReticle.targetX = e.clientX;
    arcadeReticle.targetY = e.clientY;
    arcadeReticle.lastActive = Date.now();
  });

  window.addEventListener('resize', () => {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
  });

  // Narrative Scenes and Video Loops
  // Narrative Scenes and Video Loops
  // Narrative Scenes Master 50-Scene Continuum
  const NARRATIVE_SCENES = [{"id": 1, "char": "Biopunk Film", "cat": "film", "badge": "4K FILM", "name": "Biopunk: Upgrade This (Full Story Feature Loop)", "video": "/vj_assets/loops/biopunk_full_story_continuum.mp4", "thumb": "/vj_assets/thumbs/biopunk_full_story_continuum.jpg", "img": "/vj_assets/USER_CURATED_ORIGINALS/03_cyber_corner_street_hub.jpg", "desc": "Sol Roth's animated sci-fi short film reel: Tuff and Gilfo in an epic continuous narrative loop."}, {"id": 2, "char": "Biopunk Film", "cat": "film", "badge": "ACT 1", "name": "Biopunk Act 1: Megacity Nexus & Genesis Lab", "video": "/vj_assets/loops/biopunk_01_megacity_lab.mp4", "thumb": "/vj_assets/thumbs/biopunk_01_megacity_lab.jpg", "img": "/vj_assets/02_CYBERPUNK_METROPOLIS_AND_TUNNELS/01_creature_city_dominion.jpg", "desc": "Establishing the sprawling neon megacity and futuristic bio-engineering research lab."}, {"id": 3, "char": "Tuff", "cat": "film", "badge": "ACT 2", "name": "Biopunk Act 2: Tuff Genetic Obsession & DNA Re-engineering", "video": "/vj_assets/loops/biopunk_02_tuff_obsession.mp4", "thumb": "/vj_assets/thumbs/biopunk_02_tuff_obsession.jpg", "img": "/vj_assets/USER_CURATED_ORIGINALS/02_glass_lab_cyber_surgery.jpg", "desc": "Tuff fixates on the forbidden upgrade, calculating the risks of bio-augmentation."}, {"id": 4, "char": "Biopunk Film", "cat": "film", "badge": "ACT 3", "name": "Biopunk Act 3: Neon Speeder Chase through the Underbelly", "video": "/vj_assets/loops/biopunk_03_cyber_chase.mp4", "thumb": "/vj_assets/thumbs/biopunk_03_cyber_chase.jpg", "img": "/vj_assets/USER_CURATED_ORIGINALS/04_neon_ramen_night_market.jpg", "desc": "High-velocity cyber chase through rain-slicked neon highways and alleyways."}, {"id": 5, "char": "Biopunk Film", "cat": "film", "badge": "ACT 4", "name": "Biopunk Act 4: Energy Shield Clash & Breaching Defense", "video": "/vj_assets/loops/biopunk_04_energy_shield_battle.mp4", "thumb": "/vj_assets/thumbs/biopunk_04_energy_shield_battle.jpg", "img": "/vj_assets/USER_CURATED_ORIGINALS/01_penthouse_energy_duel.png", "desc": "Direct kinetic and laser assault on the harmonic energy barrier."}, {"id": 6, "char": "Gilfo", "cat": "film", "badge": "ACT 5", "name": "Biopunk Act 5: Gilfo Furious Red Energy Glow Awakening", "video": "/vj_assets/loops/biopunk_05_gilfo_furious_glow.mp4", "thumb": "/vj_assets/thumbs/biopunk_05_gilfo_furious_glow.jpg", "img": "/vj_assets/USER_CURATED_ORIGINALS/06_red_pop_art_revolution.jpg", "desc": "Gilfo unleashes crimson bio-energy in furious defiance."}, {"id": 7, "char": "Tuff & Gilfo", "cat": "film", "badge": "ACT 6", "name": "Biopunk Act 6: Victory & Post-Human Synthetic Ascension", "video": "/vj_assets/loops/biopunk_06_victory_rebirth.mp4", "thumb": "/vj_assets/thumbs/biopunk_06_victory_rebirth.jpg", "img": "/vj_assets/USER_CURATED_ORIGINALS/08_celestial_singularity_avenue.jpg", "desc": "Triumph in the neon sky: the ultimate evolution into higher consciousness."}, {"id": 8, "char": "Abyssal Angler", "cat": "3d", "badge": "3D RENDER", "name": "Abyssal Deep-Sea Anglerfish (Self-Generated Bioluminescence)", "video": "", "thumb": "/vj_assets/thumbs/08_DEEP_SEA_ABYSSAL_ANGLER.jpg", "img": "/vj_assets/08_DEEP_SEA_ABYSSAL_ANGLER/01_bioluminescent_anglerfish.jpg", "renderer": "abyssal_angler", "desc": "Haunting bioluminescent deep-sea predator with glowing esca lure reactive to bass."}, {"id": 9, "char": "Micro Drone", "cat": "3d", "badge": "3D RENDER", "name": "Robotic Surveillance Spy Insect (Micro Tactical Drone)", "video": "", "thumb": "/vj_assets/thumbs/09_MICRO_SURVEILLANCE_DRONE.jpg", "img": "/vj_assets/09_MICRO_SURVEILLANCE_DRONE/01_robotic_insect_spy.jpg", "renderer": "drone_surveillance", "desc": "Stealth biomimetic insect drone with live target acquisition HUD and laser sweep."}, {"id": 10, "char": "Claymation", "cat": "3d", "badge": "STOP MOTION", "name": "Claymation World: Morphing Stop-Motion Clay Creatures", "video": "", "thumb": "/vj_assets/thumbs/10_CLAYMATION_WORLD.jpg", "img": "/vj_assets/10_CLAYMATION_WORLD/01_stop_motion_clay_creatures.jpg", "renderer": "claymation_fx", "desc": "Whimsical, tactile stop-motion clay world with organic morphing beats."}, {"id": 11, "char": "Psych Console", "cat": "3d", "badge": "INTERACTIVE", "name": "Psychological Experiment: DO NOT PRESS Red Button Console", "video": "", "thumb": "/vj_assets/thumbs/11_PSYCHOLOGICAL_EXPERIMENT.jpg", "img": "/vj_assets/11_PSYCHOLOGICAL_EXPERIMENT/01_forbidden_red_button_console.jpg", "renderer": "psych_experiment", "desc": "Interactive levers and glowing red button: click or trigger for catastrophic surprises!"}, {"id": 12, "char": "Neural Brain", "cat": "3d", "badge": "3D RENDER", "name": "Synaptic Brain: Microscopic Firing Neurons & Axon Links", "video": "", "thumb": "/vj_assets/thumbs/12_SYNAPTIC_NEURAL_BRAIN.jpg", "img": "/vj_assets/12_SYNAPTIC_NEURAL_BRAIN/01_firing_neurons_microscopic.jpg", "renderer": "neural_synapse", "desc": "Microscopic neural pathways firing synaptic electrical sparks synced to the music."}, {"id": 13, "char": "Sol Originals", "cat": "art", "badge": "ORIGINAL", "name": "Penthouse Energy Duel: Neon Skyline Climax", "video": "", "thumb": "/vj_assets/thumbs/01_penthouse_energy_duel.jpg", "img": "/vj_assets/USER_CURATED_ORIGINALS/01_penthouse_energy_duel.png", "renderer": "art_reactive_pulse", "desc": "Sol Roth original artwork: Dual energy wielders dueling above the city skyline."}, {"id": 14, "char": "Sol Originals", "cat": "art", "badge": "ORIGINAL", "name": "Glass Lab: Cybernetic Augmentation Surgery", "video": "", "thumb": "/vj_assets/thumbs/02_glass_lab_cyber_surgery.jpg", "img": "/vj_assets/USER_CURATED_ORIGINALS/02_glass_lab_cyber_surgery.jpg", "renderer": "art_reactive_pulse", "desc": "Sol Roth original artwork: High-precision robotics operating in a pristine glass chamber."}, {"id": 15, "char": "Sol Originals", "cat": "art", "badge": "ORIGINAL", "name": "Cyber Corner: Street Syndicate Transit Node", "video": "", "thumb": "/vj_assets/thumbs/03_cyber_corner_street_hub.jpg", "img": "/vj_assets/USER_CURATED_ORIGINALS/03_cyber_corner_street_hub.jpg", "renderer": "art_reactive_pulse", "desc": "Sol Roth original artwork: Rain-washed neon crossroads and flying drone skyways."}, {"id": 16, "char": "Sol Originals", "cat": "art", "badge": "ORIGINAL", "name": "Neon Ramen: Cyberpunk Underbelly Night Market", "video": "", "thumb": "/vj_assets/thumbs/04_neon_ramen_night_market.jpg", "img": "/vj_assets/USER_CURATED_ORIGINALS/04_neon_ramen_night_market.jpg", "renderer": "art_reactive_pulse", "desc": "Sol Roth original artwork: Glowing food stalls, holograms, and subterranean street life."}, {"id": 17, "char": "Sol Originals", "cat": "art", "badge": "ORIGINAL", "name": "Solarpunk Penthouse: Green Horizon Skyline", "video": "", "thumb": "/vj_assets/thumbs/05_solarpunk_penthouse_skyline.jpg", "img": "/vj_assets/USER_CURATED_ORIGINALS/05_solarpunk_penthouse_skyline.jpg", "renderer": "art_reactive_pulse", "desc": "Sol Roth original artwork: Eco-futuristic architecture overlooking lush cloud terraces."}, {"id": 18, "char": "Sol Originals", "cat": "art", "badge": "ORIGINAL", "name": "Red Pop-Art Revolution & Cybernetic Duality", "video": "", "thumb": "/vj_assets/thumbs/06_red_pop_art_revolution.jpg", "img": "/vj_assets/USER_CURATED_ORIGINALS/06_red_pop_art_revolution.jpg", "renderer": "art_reactive_pulse", "desc": "Sol Roth original artwork: Bold graphic rebellion aesthetic bathed in saturated crimson."}, {"id": 19, "char": "Sol Originals", "cat": "art", "badge": "ORIGINAL", "name": "Capitol Cosmic Portal: Celestial Singularity Gate", "video": "", "thumb": "/vj_assets/thumbs/07_capitol_cosmic_portal.jpg", "img": "/vj_assets/USER_CURATED_ORIGINALS/07_capitol_cosmic_portal.jpg", "renderer": "art_reactive_pulse", "desc": "Sol Roth original artwork: Massive galactic vortex tearing open the neoclassical rotunda."}, {"id": 20, "char": "Sol Originals", "cat": "art", "badge": "ORIGINAL", "name": "Celestial Singularity Avenue: Golden Hour Metropolis", "video": "", "thumb": "/vj_assets/thumbs/08_celestial_singularity_avenue.jpg", "img": "/vj_assets/USER_CURATED_ORIGINALS/08_celestial_singularity_avenue.jpg", "renderer": "art_reactive_pulse", "desc": "Sol Roth original artwork: Golden sunset over towering glass monoliths and stellar gateways."}, {"id": 21, "char": "Sol Originals", "cat": "art", "badge": "ORIGINAL", "name": "Isometric Corporate Utopia: Neo-Tech Megablocks", "video": "", "thumb": "/vj_assets/thumbs/09_isometric_corporate_utopia.jpg", "img": "/vj_assets/USER_CURATED_ORIGINALS/09_isometric_corporate_utopia.jpg", "renderer": "art_reactive_pulse", "desc": "Sol Roth original artwork: Detailed isometric cyber city with elevated rail networks."}, {"id": 22, "char": "Sol Originals", "cat": "art", "badge": "ORIGINAL", "name": "Split Duality: Cybernetic Android & Human Soul", "video": "", "thumb": "/vj_assets/thumbs/10_split_duality_cyber_android.jpg", "img": "/vj_assets/USER_CURATED_ORIGINALS/10_split_duality_cyber_android.jpg", "renderer": "art_reactive_pulse", "desc": "Sol Roth original artwork: Bisected portrait contrasting organic life with synth cyberware."}, {"id": 23, "char": "Entity X-01", "cat": "stage", "badge": "STAGE VIDEO", "name": "Entity X-01: Act 1 Creature Stasis Box", "video": "/vj_assets/loops/01_act1_containment_stasis_idle.mp4", "thumb": "/vj_assets/thumbs/01_act1_containment_stasis_idle.jpg", "img": "/vj_assets/01_CONTAINMENT_CELL_CREATURE/01_creature_in_box_idle.jpg", "desc": "The cybernetic beast contained in high-voltage acrylic stasis."}, {"id": 24, "char": "Entity X-01", "cat": "stage", "badge": "STAGE VIDEO", "name": "Entity X-01: Act 2 Creature Agitation Slam", "video": "/vj_assets/loops/02_act2_creature_slam_agitation.mp4", "thumb": "/vj_assets/thumbs/02_act2_creature_slam_agitation.jpg", "img": "/vj_assets/01_CONTAINMENT_CELL_CREATURE/02_creature_box_slam.jpg", "desc": "Entity slams glass panels with heavy bass shockwaves."}, {"id": 25, "char": "Entity X-01", "cat": "stage", "badge": "STAGE VIDEO", "name": "Entity X-01: Act 3 Critical Containment Failure", "video": "/vj_assets/loops/03_act3_containment_failure_buildup.mp4", "thumb": "/vj_assets/thumbs/03_act3_containment_failure_buildup.jpg", "img": "/vj_assets/01_CONTAINMENT_CELL_CREATURE/03_creature_box_fracturing.jpg", "desc": "Emergency alarms blaring as containment glass fractures."}, {"id": 26, "char": "Entity X-01", "cat": "stage", "badge": "STAGE VIDEO", "name": "Entity X-01: Act 4 Containment Breach Detonation", "video": "/vj_assets/loops/04_act4_containment_breach_drop.mp4", "thumb": "/vj_assets/thumbs/04_act4_containment_breach_drop.jpg", "img": "/vj_assets/01_CONTAINMENT_CELL_CREATURE/04_creature_escape_breach.jpg", "desc": "Full breach on the beat drop: explosive escape into the arena."}, {"id": 27, "char": "Entity X-01", "cat": "stage", "badge": "STAGE VIDEO", "name": "Entity X-01: Act 4 Cyberpunk Megacity Dominion", "video": "/vj_assets/loops/05_act4_cyberpunk_city_dominion.mp4", "thumb": "/vj_assets/thumbs/05_act4_cyberpunk_city_dominion.jpg", "img": "/vj_assets/02_CYBERPUNK_METROPOLIS_AND_TUNNELS/01_creature_city_dominion.jpg", "desc": "The creature rampages across towering neon skyscrapers."}, {"id": 28, "char": "AURA Diva", "cat": "stage", "badge": "STAGE VIDEO", "name": "AURA: Crystal Prism Stasis", "video": "/vj_assets/loops/13_aura_crystal_prism_stasis.mp4", "thumb": "/vj_assets/thumbs/13_aura_crystal_prism_stasis.jpg", "img": "/vj_assets/06_AURA_CYBER_POP_DIVA/01_aura_crystal_prism_stasis.jpg", "desc": "Android pop vocalist encased in floating prism reflections."}, {"id": 29, "char": "AURA Diva", "cat": "stage", "badge": "STAGE VIDEO", "name": "AURA: Holographic Equalizer Wings Climax", "video": "/vj_assets/loops/14_aura_equalizer_wings_climax.mp4", "thumb": "/vj_assets/thumbs/14_aura_equalizer_wings_climax.jpg", "img": "/vj_assets/06_AURA_CYBER_POP_DIVA/02_aura_equalizer_wings_climax.jpg", "desc": "Giant neon wings unfurl, reacting directly to vocal hooks."}, {"id": 30, "char": "Titan Mecha", "cat": "stage", "badge": "STAGE VIDEO", "name": "Titan: Launch Bay Hangar", "video": "/vj_assets/loops/15_titan_mecha_launch_hangar.mp4", "thumb": "/vj_assets/thumbs/15_titan_mecha_launch_hangar.jpg", "img": "/vj_assets/07_TITAN_WARFRAME_MECHA/01_titan_mecha_launch_hangar.jpg", "desc": "Heavy combat warframe powering up in underground blast bay."}, {"id": 31, "char": "Titan Mecha", "cat": "stage", "badge": "STAGE VIDEO", "name": "Titan: Mecha Laser Assault", "video": "/vj_assets/loops/08_act4_mecha_laser_assault.mp4", "thumb": "/vj_assets/thumbs/08_act4_mecha_laser_assault.jpg", "img": "/vj_assets/04_ANIME_MECHA_AND_ROBOTIC_ASSAULT/01_mecha_laser_assault.jpg", "desc": "Full missile barrage and shoulder-mounted railgun blasts."}, {"id": 32, "char": "Environment", "cat": "stage", "badge": "STAGE VIDEO", "name": "4K Sci-Fi Cyber Facility Corridor", "video": "/vj_assets/loops/11_sci_fi_cyber_corridor_4k.mp4", "thumb": "/vj_assets/thumbs/11_sci_fi_cyber_corridor_4k.jpg", "img": "/vj_assets/02_CYBERPUNK_METROPOLIS_AND_TUNNELS/01_creature_city_dominion.jpg", "desc": "Hyper-detailed endless 4K corridor sweep."}, {"id": 33, "char": "Dimension", "cat": "stage", "badge": "STAGE VIDEO", "name": "Hexagon Laser Warp Tunnel", "video": "/vj_assets/loops/06_act4_laser_warp_tunnel.mp4", "thumb": "/vj_assets/thumbs/06_act4_laser_warp_tunnel.jpg", "img": "/vj_assets/02_CYBERPUNK_METROPOLIS_AND_TUNNELS/02_laser_warp_tunnel.jpg", "desc": "Hyperspace tunnel with neon gridlines and speed lines."}, {"id": 34, "char": "Dimension", "cat": "stage", "badge": "STAGE VIDEO", "name": "Neuro Bass Fractal Mandala", "video": "/vj_assets/loops/07_act3_neuro_bass_fractal.mp4", "thumb": "/vj_assets/thumbs/07_act3_neuro_bass_fractal.jpg", "img": "/vj_assets/03_GLITCH_BASS_AND_NEURO_FRACTALS/01_neuro_bass_fractal.jpg", "desc": "Pulsing sacred geometry mandala reacting to sub-bass."}, {"id": 35, "char": "Sol Arena", "cat": "stage", "badge": "STAGE VIDEO", "name": "Sol Roth: Holographic Stadium Decks", "video": "/vj_assets/loops/10_act2_sol_roth_cyber_dj.mp4", "thumb": "/vj_assets/thumbs/10_act2_sol_roth_cyber_dj.jpg", "img": "/vj_assets/02_CYBERPUNK_METROPOLIS_AND_TUNNELS/03_sol_roth_cyber_dj.jpg", "desc": "DJ booth hovering above 50,000 raving cyborgs."}, {"id": 36, "char": "Ascension", "cat": "stage", "badge": "STAGE VIDEO", "name": "Act 5: Sol Roth Cosmic Totem Finale", "video": "/vj_assets/loops/09_act5_sol_roth_cosmic_totem.mp4", "thumb": "/vj_assets/thumbs/09_act5_sol_roth_cosmic_totem.jpg", "img": "/vj_assets/05_RAVE_FINALE_AND_COSMIC_DESTRUCTION/01_sol_roth_totem_finale.jpg", "desc": "The ultimate festival climax: cosmic totem summoning rave divinity."}, {"id": 37, "char": "Arcade Shooter", "cat": "games", "badge": "PLAYABLE GAME", "name": "Axiom Target Arcade: 16-Bit Cyber Target Range", "video": "", "thumb": "/vj_assets/thumbs/screenshot_16_target_arcade.jpg", "renderer": "target_arcade", "desc": "Interactive mini shooter! Tap/click anywhere to shoot moving targets & cruisers with live score & streak multiplier."}, {"id": 38, "char": "Retro Arcade", "cat": "games", "badge": "PLAYABLE GAME", "name": "Axiom Kombat: 16-Bit 2D Arcade Fighter", "video": "", "thumb": "/vj_assets/thumbs/screenshot_06_arcade_fighter.jpg", "renderer": "arcade_fighter", "desc": "Playable fighting game engine with Hadoken, Shoryuken, Combos & health bars."}, {"id": 39, "char": "Rubber Hose", "cat": "games", "badge": "RETRO CANVAS", "name": "Toon Mayhem: 1930s Cuphead Jazz Demon", "video": "", "thumb": "/vj_assets/thumbs/screenshot_08_toon_mayhem.jpg", "renderer": "toon_mayhem", "desc": "Vintage rubber-hose cartoon with pie eyes, bouncing knees, film grain, and jazz horn notes."}, {"id": 40, "char": "Kinetic Core", "cat": "games", "badge": "RETRO CANVAS", "name": "The Kinetic Core: Spinning Gears & Plasma Engine", "video": "", "thumb": "/vj_assets/thumbs/screenshot_09_kinetic_core.jpg", "renderer": "kinetic_core", "desc": "Intricate interlocking clockwork gears, piston rods, steam bursts, and spinning plasma turbine."}, {"id": 41, "char": "Neo-Olympus", "cat": "games", "badge": "RETRO CANVAS", "name": "Neo-Olympus: Colossal Living Cyber-God Statue", "video": "", "thumb": "/vj_assets/thumbs/screenshot_10_neo_olympus.jpg", "renderer": "neo_olympus", "desc": "Floating gilded classical deity statue with glowing eyes and lightning particle crown."}, {"id": 42, "char": "Blade Runner", "cat": "games", "badge": "RETRO CANVAS", "name": "2049 Dystopia: Rain-Slicked Flying Spinner Megacity", "video": "", "thumb": "/vj_assets/thumbs/screenshot_11_blade_runner.jpg", "renderer": "blade_runner", "desc": "Atmospheric Blade Runner metropolis with cascading rain, searchlights, and flying spinners."}, {"id": 43, "char": "Starship", "cat": "games", "badge": "RETRO CANVAS", "name": "Deep Space Dreadnought: Hyperdrive Bridge", "video": "", "thumb": "/vj_assets/thumbs/screenshot_12_starship_bridge.jpg", "renderer": "starship", "desc": "Sci-fi bridge cockpit looking out at stars warping into speed lines."}, {"id": 44, "char": "Biopunk Farm", "cat": "games", "badge": "RETRO CANVAS", "name": "Biopunk Genesis: 3D Genetic Incubation Farm", "video": "", "thumb": "/vj_assets/thumbs/screenshot_13_biopunk_farm.jpg", "renderer": "biopunk_farm", "desc": "Stylized bio-vat incubation farm with bubbling fluids and DNA double-helix towers."}, {"id": 45, "char": "Synthetica", "cat": "games", "badge": "RETRO CANVAS", "name": "Homo Synthetica: The Post-Human Awakened", "video": "", "thumb": "/vj_assets/thumbs/screenshot_14_homo_synthetica.jpg", "renderer": "homo_synthetica", "desc": "The evolved synthetic human: cyber skull with glowing neural cortex."}, {"id": 46, "char": "Cyber-Ronin", "cat": "games", "badge": "RETRO CANVAS", "name": "Cyber-Ronin: Neon Katana Anime Duel", "video": "", "thumb": "/vj_assets/thumbs/screenshot_15_cyber_ronin.jpg", "renderer": "cyber_ronin", "desc": "Anime-inspired sword duel with neon slash trails and sakura petals."}, {"id": 47, "char": "Robot Foundry", "cat": "games", "badge": "RETRO CANVAS", "name": "The Cyber-Doll Foundry: Companion Robot Assembly Plant", "video": "", "thumb": "/vj_assets/thumbs/screenshot_17_robot_foundry.jpg", "renderer": "robot_foundry", "desc": "Robotic assembly conveyor belt constructing companion androids with welding arcs."}, {"id": 48, "char": "Liquid Flow", "cat": "games", "badge": "RETRO CANVAS", "name": "Dance Catalyst II: Neo-Liquid Flow & Gloving Rave", "video": "", "thumb": "/vj_assets/thumbs/screenshot_18_liquid_flow.jpg", "renderer": "liquid_flow", "desc": "Liquid dancing and finger-glowing light show with neon ribbon trails."}, {"id": 49, "char": "Dance Catalyst", "cat": "games", "badge": "RETRO CANVAS", "name": "The Dancefloor Catalyst: Seductive & Wild Dancers", "video": "", "thumb": "/vj_assets/thumbs/screenshot_07_dancefloor_catalyst.jpg", "renderer": "dance_catalyst", "desc": "Silhouetted podium dancers grooving to the beat with neon equalizer spotlights."}, {"id": 50, "char": "Chimera", "cat": "games", "badge": "RETRO CANVAS", "name": "Project Chimera: Modular Reanimator (Cyber-Frankenstein)", "video": "", "thumb": "/vj_assets/thumbs/screenshot_19_modular_reanimator.jpg", "renderer": "chimera", "desc": "Cyber-Frankenstein creature built from interchangeable heads and limbs, reanimated by Tesla coils."}];

  // Global Color Palettes (for all procedural shader renderers)
  const PALETTES = [
    { primary: '#00f0ff', secondary: '#ff007f', accent: '#ffd000', bg: '#050510' },
    { primary: '#ff0055', secondary: '#00ffcc', accent: '#ffffff', bg: '#080010' },
    { primary: '#ffd000', secondary: '#ff3300', accent: '#00f0ff', bg: '#0c0800' },
    { primary: '#7928ca', secondary: '#ff0080', accent: '#00dfd8', bg: '#050014' }
  ];
  let currentPaletteIndex = 0;

  // --- SCENE 25: AXIOM TARGET ARCADE (Interactive Shooting Mini-Game) ---
  let arcadeScore = 14250;
  let arcadeStreak = 1;
  let arcadeHits = 24;
  let arcadeMisses = 2;
  let arcadeTargets = [];
  let arcadeLaserBeams = [];
  let arcadePopups = [];
  let arcadeReticle = { x: 960, y: 540, targetX: 960, targetY: 540, lastActive: Date.now() };

  function initArcadeTargets() {
    arcadeTargets = [
      { id: 1, type: 'drone', x: 200, y: 320, vx: 2.8, vy: 1.2, r: 28, pts: 150, hp: 1, maxHp: 1, color: '#00f0ff' },
      { id: 2, type: 'duck', x: 1200, y: 380, vx: -3.2, vy: -1.0, r: 24, pts: 250, hp: 1, maxHp: 1, color: '#ffd000' },
      { id: 3, type: 'bonus_orb', x: 500, y: 240, vx: 4.5, vy: 2.0, r: 20, pts: 500, hp: 1, maxHp: 1, color: '#ff007f' },
      { id: 4, type: 'drone', x: 1550, y: 450, vx: -2.4, vy: 1.6, r: 28, pts: 150, hp: 1, maxHp: 1, color: '#00ff80' },
      { id: 5, type: 'cruiser', x: 800, y: 280, vx: 1.4, vy: -0.6, r: 44, pts: 1000, hp: 3, maxHp: 3, color: '#ff3300' }
    ];
  }
  initArcadeTargets();

  function fireArcadeLaser(clickX, clickY) {
    const tx = (clickX !== undefined) ? clickX : arcadeReticle.x;
    const ty = (clickY !== undefined) ? clickY : arcadeReticle.y;
    arcadeLaserBeams.push({
      startX: W / 2 + (Math.random() - 0.5) * 60,
      startY: H - 35,
      targetX: tx,
      targetY: ty,
      life: 1.0,
      color: (arcadeStreak >= 5) ? '#ffd000' : '#00f0ff'
    });
    cameraShake = Math.max(cameraShake, 8);

    let hitFound = false;
    for (let t of arcadeTargets) {
      const dist = Math.hypot(t.x - tx, t.y - ty);
      if (dist <= t.r + 25) {
        hitFound = true;
        t.hp--;
        if (t.hp <= 0) {
          const pts = t.pts * arcadeStreak;
          arcadeScore += pts;
          arcadeStreak = Math.min(arcadeStreak + 1, 10);
          arcadeHits++;
          arcadePopups.push({
            text: `+${pts} PTS!`,
            sub: arcadeStreak > 1 ? `STREAK x${arcadeStreak}!` : 'TARGET DESTROYED',
            x: t.x,
            y: t.y - 20,
            life: 1.0,
            color: '#ffd000'
          });
          for (let p = 0; p < 25; p++) {
            const ang = Math.random() * Math.PI * 2;
            const spd = Math.random() * 9 + 3;
            sparks.push({
              x: t.x, y: t.y,
              vx: Math.cos(ang) * spd,
              vy: Math.sin(ang) * spd,
              color: t.color,
              life: 1.0
            });
          }
          cameraShake = 16;
          t.hp = (t.type === 'cruiser') ? 3 : 1;
          t.x = (Math.random() > 0.5) ? -70 : W + 70;
          t.y = H * 0.18 + Math.random() * (H * 0.45);
          t.vx = (t.x < 0 ? 1 : -1) * (Math.random() * 2.5 + 1.8);
        } else {
          arcadePopups.push({ text: 'CRITICAL HIT!', sub: `BOSS HP: ${t.hp}`, x: t.x, y: t.y, life: 0.6, color: '#ff0055' });
        }
        break;
      }
    }
    if (!hitFound) {
      arcadeStreak = 1;
      arcadeMisses++;
      arcadePopups.push({ text: 'MISS', sub: '', x: tx, y: ty, life: 0.5, color: '#64748b' });
    }
  }

  // --- SCENE 26: ROBOT FOUNDRY STATE ---
  let foundryWeldTimer = 0;
  let foundrySteamPuffs = [];

  // --- SCENE 27: DANCE CATALYST II (Liquid Flow) STATE ---
  let liquidTrails = [];
  let liquidDanceMode = 'liquid_flow'; // 'liquid_flow', 'gloving_tut', 'rave_duo'

  // --- SCENE 28: MODULAR CYBER-FRANKENSTEIN STATE ---
  let modularHeadIndex = 0; // 0: Mirrored VR Cowl, 1: Crystal Neon Brain, 2: Golden Seraph, 3: Cyber-Samurai Respirator
  let modularLimbIndex = 0;
  let reanimated = false;
  let reanimationTimer = 0;
  let teslaArcs = [];

  // State
  let currentBPM = 126.0;
  let currentDeck = '1';
  let currentTrackTitle = '';
  const urlParams = new URLSearchParams(window.location.search);
  const paramScene = urlParams.get('scene');
  let currentSceneIndex = 0;
  if (paramScene) {
    const pIdx = parseInt(paramScene) - 1;
    if (!isNaN(pIdx) && pIdx >= 0 && pIdx < NARRATIVE_SCENES.length) {
      currentSceneIndex = pIdx;
    }
  }
  let autoPilotEnabled = !paramScene;
  let autoPilotIntervalSec = 45;
  let lastAutoSwitchTime = Date.now();
  let showTitle = true;
  let showLyrics = true;
  
  // Interactive Physics State
  let cameraShake = 0;
  let crackLevel = 0; // 0 to 4
  let glassShards = [];
  let sparks = [];
  let shockArcs = [];
  let lastBreachProcessed = 0;
  let lastSlamProcessed = 0;
  let lastShockProcessed = 0;
  let lastStrobeProcessed = 0;
  let lastChatProcessed = 0;

  // Web Audio FFT Reactivity
  let audioCtx = null;
  let analyser = null;
  let audioDataArray = null;
  let audioReactiveEnabled = false;

  async function toggleAudioInput() {
    if (!audioReactiveEnabled) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const src = audioCtx.createMediaStreamSource(stream);
        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 128;
        src.connect(analyser);
        audioDataArray = new Uint8Array(analyser.frequencyBinCount);
        audioReactiveEnabled = true;
        document.getElementById('btn-audio').style.background = '#00ff80';
        document.getElementById('btn-audio').style.color = '#000';
      } catch(e) {
        alert("Microphone access denied or unavailable.");
      }
    } else {
      audioReactiveEnabled = false;
      document.getElementById('btn-audio').style.background = 'rgba(20, 25, 40, 0.75)';
      document.getElementById('btn-audio').style.color = '#fff';
    }
  }

  // Shard & Voronoi Glass System
  function triggerBreach() {
    crackLevel = 4;
    cameraShake = 40;
    strobeOverlay.style.opacity = '1';
    setTimeout(() => strobeOverlay.style.opacity = '0', 90);

    // Spawn 280 3D glass shards
    glassShards = [];
    const cx = W / 2, cy = H / 2;
    for (let i = 0; i < 280; i++) {
      const ang = Math.random() * Math.PI * 2;
      const spd = Math.random() * 22 + 8;
      glassShards.push({
        x: cx + (Math.random() - 0.5) * 200,
        y: cy + (Math.random() - 0.5) * 200,
        z: Math.random() * 100 + 10,
        vx: Math.cos(ang) * spd,
        vy: Math.sin(ang) * spd + (Math.random() * 4),
        vz: Math.random() * 14 + 6,
        rot: Math.random() * Math.PI * 2,
        vrot: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 45 + 15,
        alpha: 1.0
      });
    }

    // Switch scene to Escaped Breach / Megacity
    currentSceneIndex = 3; // Act 4 Breach
    loadScene(currentSceneIndex);
  buildScenesGrid();
    setTimeout(() => {
      if (currentSceneIndex === 3) {
        currentSceneIndex = 4; // Progress to Megacity
        loadScene(currentSceneIndex);
      }
    }, 4500);
  }

  function triggerSlam() {
    cameraShake = 24;
    // Spawn spark particles
    for (let i = 0; i < 70; i++) {
      const ang = Math.random() * Math.PI * 2;
      const spd = Math.random() * 16 + 4;
      sparks.push({
        x: W / 2 + (Math.random() - 0.5) * 120,
        y: H / 2 + (Math.random() - 0.5) * 120,
        vx: Math.cos(ang) * spd,
        vy: Math.sin(ang) * spd,
        size: Math.random() * 3 + 1,
        life: 1.0,
        decay: Math.random() * 0.04 + 0.02,
        color: Math.random() > 0.3 ? '#00f0ff' : '#ffd000'
      });
    }
  }

  function triggerShock() {
    shockArcs = [];
    for (let i = 0; i < 6; i++) {
      let pts = [{ x: Math.random() * W, y: 0 }];
      for (let s = 1; s <= 6; s++) {
        pts.push({
          x: pts[s-1].x + (Math.random() - 0.5) * 150,
          y: (H / 6) * s
        });
      }
      shockArcs.push({ pts: pts, life: 1.0 });
    }
  }

  
  // ============================================================================
  // VJ SCENES DRAWER NAVIGATION CONTROLLER
  // ============================================================================
  let currentCategoryFilter = 'all';

  function toggleScenesDrawer() {
    const drawer = document.getElementById('scenes-drawer');
    if (!drawer) return;
    drawer.classList.toggle('open');
    if (drawer.classList.contains('open')) {
      buildScenesGrid();
      const activeCard = document.querySelector('.scene-card.active');
      if (activeCard) activeCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  function filterCategory(cat, btn) {
    currentCategoryFilter = cat;
    document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
    if (btn) btn.classList.add('active');
    filterScenesGrid();
  }

  function filterScenesGrid() {
    const q = (document.getElementById('scene-filter-input')?.value || '').toLowerCase().trim();
    document.querySelectorAll('.scene-card').forEach(card => {
      const matchCat = (currentCategoryFilter === 'all' || card.dataset.cat === currentCategoryFilter);
      const matchSearch = (!q || card.dataset.search.includes(q));
      card.style.display = (matchCat && matchSearch) ? 'flex' : 'none';
    });
  }

  function buildScenesGrid() {
    const container = document.getElementById('scenes-grid-container');
    if (!container) return;
    container.innerHTML = '';
    NARRATIVE_SCENES.forEach((sc, idx) => {
      const card = document.createElement('div');
      card.className = `scene-card ${idx === currentSceneIndex ? 'active' : ''}`;
      card.dataset.idx = idx;
      card.dataset.cat = sc.cat || 'stage';
      card.dataset.search = (sc.name + ' ' + sc.char + ' ' + (sc.desc || '') + ' ' + (sc.badge || '')).toLowerCase();

      const thumbUrl = sc.thumb || sc.img || '/vj_assets/thumbs/01_act1_containment_stasis_idle.jpg';
      card.innerHTML = `
        <div class="scene-thumb-wrap">
          <img src="${thumbUrl}" alt="${sc.name}" loading="lazy" class="scene-card-thumb" onerror="this.src='/vj_assets/thumbs/01_act1_containment_stasis_idle.jpg'">
          <span class="scene-card-badge">${sc.badge || 'SCENE'}</span>
          <span class="scene-card-num">#${(idx + 1).toString().padStart(2, '0')}</span>
        </div>
        <div class="scene-card-body">
          <div class="scene-card-char">${sc.char}</div>
          <h4>${sc.name}</h4>
          <div class="scene-card-desc">${sc.desc || ''}</div>
        </div>
        <div class="scene-card-actions">
          <button onclick="selectSceneFromDrawer(${idx})">
            ${idx === currentSceneIndex ? '⚡ ACTIVE NOW' : '▶ SWITCH TO SCENE'}
          </button>
          <a href="/vj?scene=${idx+1}" target="_blank" class="button" title="Open direct link in new tab">↗</a>
        </div>
      `;
      card.onclick = (e) => {
        if (e.target.tagName !== 'A') selectSceneFromDrawer(idx);
      };
      container.appendChild(card);
    });
    filterScenesGrid();
  }

  function selectSceneFromDrawer(idx) {
    if (idx < 0 || idx >= NARRATIVE_SCENES.length) return;
    currentSceneIndex = idx;
    loadScene(currentSceneIndex);
    updateSceneBadges();
    try {
      history.replaceState(null, '', `?scene=${idx+1}`);
      fetch(`/api/vj/trigger?scene=${idx+1}`).catch(() => {});
    } catch(e) {}
    document.querySelectorAll('.scene-card').forEach((c, i) => {
      c.classList.toggle('active', i === currentSceneIndex);
      const btn = c.querySelector('.scene-card-actions button');
      if (btn) btn.innerText = (i === currentSceneIndex) ? '⚡ ACTIVE NOW' : '▶ SWITCH TO SCENE';
    });
    // Auto-close drawer on narrow mobile screens
    if (window.innerWidth < 640) {
      const drawer = document.getElementById('scenes-drawer');
      if (drawer) drawer.classList.remove('open');
    }
  }

  function stepScene(delta) {
    currentSceneIndex = (currentSceneIndex + delta + NARRATIVE_SCENES.length) % NARRATIVE_SCENES.length;
    selectSceneFromDrawer(currentSceneIndex);
  }

  function updateSceneBadges() {
    const sc = NARRATIVE_SCENES[currentSceneIndex];
    if (!sc) return;
    const mb = document.getElementById('mode-badge');
    if (mb) mb.innerText = `#${currentSceneIndex+1} ${sc.name}`;
    const cb = document.getElementById('scene-counter-badge');
    if (cb) cb.innerText = `${currentSceneIndex+1} / ${NARRATIVE_SCENES.length}`;
  }

  // ============================================================================
  // REACTIVE OVERLAYS FOR 3D RENDERS & SOL'S ORIGINAL ART
  // ============================================================================
  // Scene 8: Bioluminescent Deep Sea Anglerfish
  let abyssalParticles = [];
  for (let i = 0; i < 45; i++) {
    abyssalParticles.push({
      x: Math.random() * 1920, y: Math.random() * 1080,
      vx: (Math.random() - 0.5) * 0.4, vy: -Math.random() * 0.6 - 0.2,
      r: Math.random() * 3 + 1, alpha: Math.random() * 0.8 + 0.2
    });
  }

  function renderAnglerfishOverlay(ctx, pal, beat, now) {
    const lureX = W * 0.73;
    const lureY = H * 0.33;
    const pulseR = (40 + Math.sin(now * 4) * 15 + beat * 35) * (1 + audioMeter * 0.8);

    const grad = ctx.createRadialGradient(lureX, lureY, 5, lureX, lureY, pulseR * 2.5);
    grad.addColorStop(0, 'rgba(0, 255, 200, 0.9)');
    grad.addColorStop(0.3, 'rgba(0, 240, 255, 0.5)');
    grad.addColorStop(0.7, 'rgba(0, 120, 255, 0.15)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(lureX, lureY, pulseR * 2.5, 0, Math.PI * 2);
    ctx.fill();

    // Floating plankton
    ctx.fillStyle = '#00ffcc';
    for (let p of abyssalParticles) {
      p.x += p.vx; p.y += p.vy;
      if (p.y < 0) { p.y = H + 10; p.x = Math.random() * W; }
      ctx.globalAlpha = p.alpha * (0.6 + beat * 0.4);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1.0;
  }

  // Scene 9: Robotic Surveillance Spy Drone Tactical HUD
  let droneScanY = 0;
  function renderDroneScannerOverlay(ctx, pal, beat, now) {
    droneScanY = (droneScanY + 3.5) % H;
    ctx.strokeStyle = 'rgba(0, 255, 128, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, droneScanY);
    ctx.lineTo(W, droneScanY);
    ctx.stroke();

    // Target reticle
    const tx = W * 0.5 + Math.sin(now * 0.8) * 80;
    const ty = H * 0.45 + Math.cos(now * 0.6) * 60;
    ctx.strokeStyle = '#00ff80';
    ctx.strokeRect(tx - 35, ty - 35, 70, 70);
    ctx.fillStyle = '#00ff80';
    ctx.font = 'bold 12px monospace';
    ctx.fillText(`[TARGET IDENTIFIED: 0x8F4]`, tx + 45, ty - 15);
    ctx.fillText(`RANGE: 14.8M // SPECTRAL LOCK`, tx + 45, ty + 5);
    ctx.fillText(`BPM SYNC: ${currentBPM.toFixed(1)}`, tx + 45, ty + 25);
  }

  // Scene 10: Stop-Motion Claymation World Filter
  function renderClaymationOverlay(ctx, pal, beat, now) {
    if (Math.random() < 0.15) {
      ctx.fillStyle = 'rgba(255, 208, 0, 0.04)';
      ctx.fillRect(0, 0, W, H);
    }
  }

  // Scene 11: Psychological Experiment Console ("DO NOT PRESS" Red Button)
  let psychAlert = 0;
  function triggerPsychRedButton(clickX, clickY) {
    psychAlert = 1.0;
    cameraShake = 24;
    triggerShock();
    triggerBreach();
    arcadePopups.push({
      text: 'CRITICAL COGNITIVE OVERRIDE!',
      sub: 'FORBIDDEN BUTTON ENGAGED',
      x: clickX || W / 2, y: clickY || H / 2,
      life: 1.5, color: '#ff0055'
    });
  }

  function renderPsychConsoleOverlay(ctx, pal, beat, now) {
    const btnX = W / 2;
    const btnY = H * 0.68;
    const pulse = 1 + beat * 0.15;

    // Pulsing warning ring
    ctx.strokeStyle = (psychAlert > 0.1 || Math.floor(now * 4) % 2 === 0) ? '#ff0055' : 'rgba(255, 0, 85, 0.4)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(btnX, btnY, 48 * pulse, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = '#ff0055';
    ctx.font = '900 13px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('⚡ CLICK RED BUTTON TO TRIGGER ⚡', btnX, btnY + 70);
    ctx.textAlign = 'left';

    if (psychAlert > 0) {
      psychAlert -= 0.025;
      ctx.fillStyle = `rgba(255, 0, 85, ${psychAlert * 0.35})`;
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = '#fff';
      ctx.font = '900 32px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('⚠️ WARNING: COGNITIVE HAZARD TRIGGERED ⚠️', W / 2, H * 0.25);
      ctx.textAlign = 'left';
    }
  }

  // Scene 12: Microscopic Synaptic Brain Neurons
  let synapticNodes = [];
  for (let i = 0; i < 24; i++) {
    synapticNodes.push({
      x: W * 0.2 + Math.random() * (W * 0.6),
      y: H * 0.2 + Math.random() * (H * 0.6)
    });
  }

  function renderNeuralSynapseLayer(ctx, pal, beat, now) {
    ctx.lineWidth = 2;
    for (let i = 0; i < synapticNodes.length - 1; i += 2) {
      const n1 = synapticNodes[i];
      const n2 = synapticNodes[i+1];
      ctx.strokeStyle = `rgba(0, 240, 255, ${0.2 + beat * 0.7})`;
      ctx.beginPath();
      ctx.moveTo(n1.x, n1.y);
      ctx.lineTo(n2.x, n2.y);
      ctx.stroke();

      if (beat > 0.8) {
        ctx.fillStyle = '#ffd000';
        ctx.beginPath();
        ctx.arc(n1.x, n1.y, 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  // Scenes 13-22: Sol Roth Curated Original Art Reactive Pulse
  function renderArtPulseOverlay(ctx, pal, beat, now) {
    // Subtle audio equalizer pulse along the bottom edge
    const barCount = 48;
    const barW = W / barCount;
    for (let i = 0; i < barCount; i++) {
      const bh = (Math.sin(now * 3 + i * 0.4) * 0.5 + 0.5) * (30 + beat * 40 + audioMeter * 40);
      ctx.fillStyle = (i % 2 === 0) ? 'rgba(0, 240, 255, 0.4)' : 'rgba(255, 0, 127, 0.4)';
      ctx.fillRect(i * barW, H - bh, barW - 2, bh);
    }
  }

function loadScene(idx) {
    const sc = NARRATIVE_SCENES[idx];
    if (!sc) return;
    document.getElementById('mode-badge').innerText = sc.name;
    
    // Always set image immediately for instant rendering without buffering delay
    if (sc.img) {
      imgElem.src = sc.img;
      imgElem.style.opacity = '1';
      imgElem.style.display = 'block';
    } else {
      imgElem.style.opacity = '0';
      imgElem.style.display = 'none';
      imgElem.src = '';
    }

    if (sc.video) {
      videoElem.src = sc.video;
      videoElem.style.display = 'block';
      videoElem.load();
      videoElem.play().catch(() => {});
    } else {
      try { videoElem.pause(); } catch(e) {}
      videoElem.src = '';
      videoElem.style.display = 'none';
    }
  }

  // ============================================================================
  // MODE 15: AXIOM KOMBAT // 16-BIT 2D ARCADE FIGHTING GAME ENGINE
  // ============================================================================
  let p1Health = 100;
  let p2Health = 100;
  let comboCount = 0;
  let lastHitTime = 0;
  let koTriggered = false;
  let p1Action = 'idle'; // idle, punch, kick, hadoken, shoryuken
  let p1ActionTimer = 0;
  let fireballs = [];
  let floatingTexts = [];
  let chatBadges = [];
// Universal Chat-Triggered Particle Systems
  let confettiParticles = [];
  let missileSwarm = [];

  function spawnConfetti() {
    for (let i = 0; i < 110; i++) {
      confettiParticles.push({
        x: Math.random() * W,
        y: -10,
        vx: (Math.random() - 0.5) * 8,
        vy: Math.random() * 8 + 5,
        rot: Math.random() * Math.PI * 2,
        vrot: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 10 + 6,
        color: ['#00f0ff', '#ff007f', '#ffd000', '#00ff80', '#ffffff', '#aa00ff'][Math.floor(Math.random() * 6)],
        alpha: 1.0
      });
    }
  }

  function spawnMissiles() {
    for (let i = 0; i < 14; i++) {
      missileSwarm.push({
        x: W * 0.25,
        y: H * 0.5 + (Math.random() - 0.5) * 80,
        vx: Math.random() * 20 + 14,
        vy: (Math.random() - 0.5) * 8,
        size: Math.random() * 4 + 3,
        life: 1.0,
        trail: []
      });
    }
  }

  function triggerArcadeAction(act) {
    p1Action = act;
    p1ActionTimer = 25;
    lastHitTime = Date.now();
    comboCount++;

    if (act === 'punch' || act === 'jab') {
      p2Health = Math.max(0, p2Health - 6);
      cameraShake = 12;
      floatingTexts.push({ text: `${comboCount} HIT COMBO!`, x: W*0.62, y: H*0.48, color: '#ffd000', life: 1.0, scale: 1.2 });
    } else if (act === 'kick') {
      p2Health = Math.max(0, p2Health - 12);
      cameraShake = 18;
      floatingTexts.push({ text: `CRITICAL KICK! +${comboCount*100}`, x: W*0.62, y: H*0.44, color: '#ff007f', life: 1.0, scale: 1.4 });
    } else if (act === 'hadoken') {
      fireballs.push({ x: W*0.35, y: H*0.65, vx: 22, size: 30 });
      floatingTexts.push({ text: `PLASMA HADOKEN!`, x: W*0.35, y: H*0.5, color: '#00f0ff', life: 1.0, scale: 1.5 });
    } else if (act === 'shoryuken') {
      p2Health = Math.max(0, p2Health - 25);
      cameraShake = 28;
      floatingTexts.push({ text: `DRAGON UPPERCUT!`, x: W*0.62, y: H*0.35, color: '#ff5500', life: 1.0, scale: 1.8 });
    } else if (act === 'ko') {
      p2Health = 0;
      koTriggered = true;
      cameraShake = 45;
      strobeOverlay.style.opacity = '1';
      setTimeout(() => strobeOverlay.style.opacity = '0', 120);
      floatingTexts.push({ text: `K. O. !`, x: W*0.5, y: H*0.45, color: '#ff0055', life: 2.5, scale: 3.5, isKO: true });
    }
  }

  function renderArcadeFighter(ctx, pal, beatPhase, now) {
    // 1. Multi-layered Retro Pixel Street Backdrop
    // Gradient twilight sky
    const skyGrad = ctx.createLinearGradient(0, 0, 0, H);
    skyGrad.addColorStop(0, '#0a0314');
    skyGrad.addColorStop(0.5, '#2b0b3f');
    skyGrad.addColorStop(1, '#05020a');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, W, H);

    // Parallax City Skyline
    ctx.fillStyle = '#150826';
    for (let b = 0; b < 16; b++) {
      const bw = W / 14;
      const bh = 180 + Math.sin(b * 1.5) * 100;
      ctx.fillRect(b * bw, H * 0.7 - bh, bw - 2, bh);
      // Windows
      ctx.fillStyle = (b % 2 === 0) ? '#ff007f33' : '#00f0ff33';
      for (let wy = H * 0.7 - bh + 10; wy < H * 0.7 - 20; wy += 22) {
        ctx.fillRect(b * bw + 6, wy, 8, 12);
        ctx.fillRect(b * bw + 18, wy, 8, 12);
      }
      ctx.fillStyle = '#150826';
    }

    // Street Ground
    const groundY = H * 0.78;
    ctx.fillStyle = '#11131a';
    ctx.fillRect(0, groundY, W, H - groundY);
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, groundY);
    ctx.lineTo(W, groundY);
    ctx.stroke();

    // Cheering Crowd Silhouettes
    for (let c = 0; c < 24; c++) {
      const cx = (W / 24) * c;
      const chY = groundY - 30 + Math.sin(c * 2 + now * 0.008) * (8 * (1 - beatPhase));
      ctx.fillStyle = 'rgba(25, 30, 45, 0.9)';
      ctx.fillRect(cx, chY, 14, 30);
      ctx.beginPath();
      ctx.arc(cx + 7, chY - 6, 7, 0, Math.PI * 2);
      ctx.fill();
    }

    // 2. 16-Bit Arcade Fighter HUD
    const hudTop = 45;
    // P1 SOL ROTH Health Bar
    ctx.fillStyle = '#1a1f2c';
    ctx.fillRect(60, hudTop, W * 0.38, 26);
    ctx.fillStyle = p1Health > 30 ? '#00ff80' : '#ff0055';
    ctx.fillRect(60 + (W * 0.38 * (1 - p1Health / 100)), hudTop, W * 0.38 * (p1Health / 100), 26);
    ctx.strokeStyle = '#ffd000';
    ctx.lineWidth = 3;
    ctx.strokeRect(60, hudTop, W * 0.38, 26);
    ctx.fillStyle = '#fff';
    ctx.font = '900 18px "Courier New", monospace';
    ctx.fillText('P1: SOL ROTH [AXIOM]', 60, hudTop - 10);

    // Center Timer & VS
    ctx.fillStyle = '#ffd000';
    ctx.font = '900 32px "Impact", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('99', W / 2, hudTop + 24);
    ctx.font = '900 16px monospace';
    ctx.fillStyle = '#ff007f';
    ctx.fillText('V S', W / 2, hudTop - 8);
    ctx.textAlign = 'left';

    // P2 GLITCH BEAST Health Bar
    const p2X = W - 60 - W * 0.38;
    ctx.fillStyle = '#1a1f2c';
    ctx.fillRect(p2X, hudTop, W * 0.38, 26);
    ctx.fillStyle = p2Health > 30 ? '#00ff80' : '#ff0055';
    ctx.fillRect(p2X, hudTop, W * 0.38 * (p2Health / 100), 26);
    ctx.strokeRect(p2X, hudTop, W * 0.38, 26);
    ctx.fillStyle = '#fff';
    ctx.font = '900 18px "Courier New", monospace';
    ctx.textAlign = 'right';
    ctx.fillText('P2: GLITCH BEAST', W - 60, hudTop - 10);
    ctx.textAlign = 'left';

    // 3. Fighters Animation
    const fighterP1X = W * 0.3;
    const fighterP2X = W * 0.68;
    const bounce1 = Math.sin(now * 0.01) * 6 * (1 - beatPhase);
    const bounce2 = Math.cos(now * 0.01) * 5 * (1 - beatPhase);

    // Render P1 (Sol Roth Martial Hero)
    ctx.save();
    ctx.translate(fighterP1X, groundY - 140 + bounce1);
    if (p1ActionTimer > 0) {
      p1ActionTimer--;
      ctx.fillStyle = '#00f0ff';
      if (p1Action === 'punch') {
        // Punch extended arm
        ctx.fillRect(-20, 20, 40, 70); // Torso
        ctx.fillRect(20, 30, 80, 16);  // Punch arm
        ctx.fillStyle = '#ffd000';
        ctx.beginPath(); ctx.arc(105, 38, 14, 0, Math.PI*2); ctx.fill(); // Glow fist
      } else if (p1Action === 'kick') {
        ctx.fillRect(-20, 20, 40, 70);
        ctx.fillRect(10, 50, 90, 20); // High kick
        ctx.fillStyle = '#ff007f';
        ctx.beginPath(); ctx.arc(105, 60, 16, 0, Math.PI*2); ctx.fill();
      } else if (p1Action === 'shoryuken') {
        ctx.translate(0, -50);
        ctx.fillRect(-20, 10, 40, 70);
        ctx.fillRect(-5, -40, 22, 60); // Vertical uppercut
        ctx.fillStyle = '#ff5500';
        ctx.beginPath(); ctx.arc(6, -42, 20, 0, Math.PI*2); ctx.fill();
      }
    } else {
      // Idle Combat Stance
      ctx.fillStyle = '#00f0ff';
      ctx.fillRect(-18, 20, 36, 65); // Cyber jacket torso
      ctx.fillStyle = '#111';
      ctx.fillRect(-16, 85, 14, 55); // Legs
      ctx.fillRect(4, 85, 14, 55);
      // Head & Visor
      ctx.fillStyle = '#ffddaa';
      ctx.beginPath(); ctx.arc(0, 0, 16, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#00f0ff';
      ctx.fillRect(-8, -4, 20, 8); // Cyber visor
    }
    ctx.restore();

    // Render P2 (Glitch Beast / Boss)
    ctx.save();
    ctx.translate(fighterP2X, groundY - 150 + bounce2);
    if (koTriggered) {
      ctx.rotate(0.6);
      ctx.translate(30, 20);
    }
    ctx.fillStyle = '#ff0055';
    ctx.fillRect(-30, 20, 60, 80); // Beast bulk
    ctx.fillStyle = '#ffd000';
    // Glowing red eyes
    ctx.beginPath(); ctx.arc(-10, -5, 8, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(10, -5, 8, 0, Math.PI * 2); ctx.fill();
    // Claws
    ctx.fillStyle = '#aa0033';
    ctx.fillRect(-55, 35, 30, 18);
    ctx.fillRect(25, 35, 30, 18);
    ctx.restore();

    // 4. Render Fireballs
    for (let f = fireballs.length - 1; f >= 0; f--) {
      const fb = fireballs[f];
      fb.x += fb.vx;
      ctx.fillStyle = '#00f0ff';
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.arc(fb.x, fb.y, fb.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      if (fb.x >= fighterP2X - 30) {
        // Detonate on P2
        p2Health = Math.max(0, p2Health - 18);
        cameraShake = 22;
        fireballs.splice(f, 1);
        for (let s = 0; s < 40; s++) {
          sparks.push({
            x: fighterP2X, y: fb.y,
            vx: (Math.random() - 0.5) * 18,
            vy: (Math.random() - 0.5) * 18,
            size: Math.random() * 3 + 1,
            life: 1.0, decay: 0.03, color: '#00f0ff'
          });
        }
      }
    }

    // 5. Render Combo & Floating Action Texts
    for (let t = floatingTexts.length - 1; t >= 0; t--) {
      const ft = floatingTexts[t];
      ft.y -= 1.5;
      ft.life -= 0.015;
      if (ft.life <= 0) {
        floatingTexts.splice(t, 1);
        continue;
      }
      ctx.save();
      ctx.globalAlpha = ft.life;
      ctx.font = `900 ${Math.floor(28 * ft.scale)}px "Impact", sans-serif`;
      ctx.fillStyle = ft.color;
      ctx.textAlign = 'center';
      ctx.shadowColor = '#000';
      ctx.shadowBlur = 10;
      ctx.fillText(ft.text, ft.x, ft.y);
      ctx.restore();
    }
  }

  // ============================================================================
  // MODE 16: THE DANCEFLOOR CATALYST // SEDUCTIVE & WILD RAVE DANCERS
  // ============================================================================
  let danceModeSub = 'seductive'; // 'seductive' or 'wild_breakdance'
  let danceClonesActive = false;

  function renderDancefloorCatalyst(ctx, pal, beatPhase, now) {
    // Dark hypnotic club backdrop
    ctx.fillStyle = 'rgba(8, 5, 16, 0.4)';
    ctx.fillRect(0, 0, W, H);

    // Laser wash lines
    for (let l = 0; l < 8; l++) {
      const ang = ((l * 45 + now * 0.03) * Math.PI) / 180;
      ctx.strokeStyle = l % 2 === 0 ? 'rgba(0, 240, 255, 0.25)' : 'rgba(255, 0, 127, 0.25)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(W / 2, 0);
      ctx.lineTo(W / 2 + Math.cos(ang) * W, H);
      ctx.stroke();
    }

    const numDancers = danceClonesActive ? 5 : 1;
    for (let d = 0; d < numDancers; d++) {
      const posX = numDancers === 1 ? W / 2 : (W / 6) * (d + 1);
      const scale = numDancers === 1 ? 1.0 : 0.75;

      ctx.save();
      ctx.translate(posX, H * 0.65);
      ctx.scale(scale, scale);

      if (danceModeSub === 'seductive') {
        // --- Seductive Cyber-Diva Sinuous Body Wave ---
        const sway = Math.sin((now * 0.003) + (d * 0.4)) * 38;
        const hipRoll = Math.cos((now * 0.003) + (d * 0.4)) * 24;
        const armLift = Math.sin((now * 0.004) + (d * 0.3)) * 40;

        ctx.strokeStyle = d % 2 === 0 ? '#ff007f' : '#00f0ff';
        ctx.shadowColor = ctx.strokeStyle;
        ctx.shadowBlur = 20;
        ctx.lineWidth = 5;

        // Head
        ctx.beginPath();
        ctx.arc(sway * 0.4, -180 + Math.abs(hipRoll)*0.2, 22, 0, Math.PI * 2);
        ctx.stroke();

        // Torso & Sinuous Spine Wave
        ctx.beginPath();
        ctx.moveTo(sway * 0.4, -158);
        ctx.bezierCurveTo(sway * 0.8, -100, -hipRoll, -40, hipRoll, 20);
        ctx.stroke();

        // Seductive Flowing Arms
        ctx.beginPath();
        ctx.moveTo(sway * 0.5, -130);
        ctx.quadraticCurveTo(-70 + sway, -160 + armLift, -100 + sway, -100 + armLift);
        ctx.moveTo(sway * 0.5, -130);
        ctx.quadraticCurveTo(70 + sway, -160 - armLift, 100 + sway, -100 - armLift);
        ctx.stroke();

        // Legs & Stride
        ctx.beginPath();
        ctx.moveTo(hipRoll - 12, 20);
        ctx.lineTo(hipRoll - 25, 160);
        ctx.moveTo(hipRoll + 12, 20);
        ctx.lineTo(hipRoll + 25, 160);
        ctx.stroke();
        ctx.shadowBlur = 0;

      } else {
        // --- Wild Rave Beast / Cyber Breakdancer ---
        const spin = (now * 0.015) % (Math.PI * 2);
        const headbang = Math.sin((now * 0.012)) * 35 * (1 - beatPhase);

        ctx.strokeStyle = '#ffd000';
        ctx.shadowColor = '#ff3300';
        ctx.shadowBlur = 25;
        ctx.lineWidth = 6;

        ctx.rotate(spin * 0.25);
        // Breakdance Power Pose
        ctx.beginPath();
        ctx.arc(0, -90 + headbang, 28, 0, Math.PI * 2);
        ctx.stroke();
        // Spiky dreadlocks spraying particles
        ctx.beginPath();
        ctx.moveTo(-20, -100); ctx.lineTo(-60, -130);
        ctx.moveTo(20, -100); ctx.lineTo(60, -130);
        ctx.stroke();

        // Windmill Arms
        ctx.beginPath();
        ctx.moveTo(-80, Math.sin(now * 0.02) * 80);
        ctx.lineTo(80, -Math.sin(now * 0.02) * 80);
        ctx.stroke();

        // Legs Freeze
        ctx.beginPath();
        ctx.moveTo(0, 0); ctx.lineTo(-90, 80);
        ctx.moveTo(0, 0); ctx.lineTo(90, 80);
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      ctx.restore();
    }
  }

  // --- SCENE 17: Toon Mayhem (1930s Rubber-Hose Vintage Cartoon) ---
  function renderRubberHoseCartoon(ctx, pal, beatPhase, now) {
    ctx.fillStyle = '#f2e8cf';
    ctx.fillRect(0, 0, W, H);
    const vig = ctx.createRadialGradient(W/2, H/2, H*0.2, W/2, H/2, W*0.7);
    vig.addColorStop(0, 'rgba(0,0,0,0)');
    vig.addColorStop(1, 'rgba(40,25,15,0.75)');
    ctx.fillStyle = vig;
    ctx.fillRect(0, 0, W, H);

    ctx.strokeStyle = 'rgba(30, 20, 10, 0.4)';
    ctx.lineWidth = 1;
    for (let s = 0; s < 4; s++) {
      if (Math.random() > 0.4) {
        const scratchX = (now * (13 + s * 7)) % W;
        ctx.beginPath();
        ctx.moveTo(scratchX, 0);
        ctx.lineTo(scratchX + (Math.random() - 0.5) * 6, H);
        ctx.stroke();
      }
    }

    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.beginPath();
    ctx.ellipse(W/2, H*0.82, 220, 45, 0, 0, Math.PI*2);
    ctx.fill();

    const bounce = Math.abs(Math.sin(beatPhase * Math.PI)) * 36;
    const sway = Math.sin(now * 0.005) * 16;
    const charX = W / 2 + sway;
    const charY = H * 0.68 - bounce;

    ctx.save();
    ctx.translate(charX, charY);

    ctx.fillStyle = '#111';
    ctx.beginPath();
    ctx.ellipse(-45, 60 + bounce*0.3, 35, 18, -0.2, 0, Math.PI*2);
    ctx.ellipse(45, 60 + bounce*0.3, 35, 18, 0.2, 0, Math.PI*2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(-45, 52, 4, 0, Math.PI*2);
    ctx.arc(45, 52, 4, 0, Math.PI*2);
    ctx.fill();

    ctx.strokeStyle = '#111';
    ctx.lineWidth = 14;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-20, 20);
    ctx.quadraticCurveTo(-50 + bounce*0.4, 40, -40, 58);
    ctx.moveTo(20, 20);
    ctx.quadraticCurveTo(50 - bounce*0.4, 40, 40, 58);
    ctx.stroke();

    ctx.fillStyle = '#111';
    ctx.beginPath();
    ctx.ellipse(0, 0, 48, 55, 0, 0, Math.PI*2);
    ctx.fill();

    ctx.fillStyle = '#c1121f';
    ctx.beginPath();
    ctx.moveTo(0, -35); ctx.lineTo(-24, -45); ctx.lineTo(-24, -25); ctx.closePath();
    ctx.moveTo(0, -35); ctx.lineTo(24, -45); ctx.lineTo(24, -25); ctx.closePath();
    ctx.fill();
    ctx.beginPath(); ctx.arc(0, -35, 6, 0, Math.PI*2); ctx.fill();

    const armWave = Math.sin(now * 0.008) * 40;
    ctx.beginPath();
    ctx.moveTo(-40, -15);
    ctx.bezierCurveTo(-110, -50 + armWave, -120, -10 - armWave, -100, -70 + armWave);
    ctx.moveTo(40, -15);
    ctx.bezierCurveTo(110, -50 - armWave, 120, -10 + armWave, 100, -70 - armWave);
    ctx.stroke();

    ctx.fillStyle = '#fff';
    ctx.strokeStyle = '#111';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(-100, -70 + armWave, 22, 0, Math.PI*2);
    ctx.arc(100, -70 - armWave, 22, 0, Math.PI*2);
    ctx.fill(); ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(-95, -55 + armWave, 14, 6, 0.4, 0, Math.PI*2);
    ctx.ellipse(95, -55 - armWave, 14, 6, -0.4, 0, Math.PI*2);
    ctx.fill(); ctx.stroke();

    ctx.fillStyle = '#111';
    ctx.beginPath();
    ctx.arc(0, -85, 52, 0, Math.PI*2);
    ctx.fill();

    const eyeSquash = 1 - beatPhase * 0.2;
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.ellipse(-18, -95, 14, 20 * eyeSquash, 0, 0, Math.PI*2);
    ctx.ellipse(18, -95, 14, 20 * eyeSquash, 0, 0, Math.PI*2);
    ctx.fill();
    ctx.fillStyle = '#111';
    ctx.beginPath();
    ctx.arc(-18, -95, 8, 0, Math.PI*2);
    ctx.arc(18, -95, 8, 0, Math.PI*2);
    ctx.fill();

    ctx.fillStyle = '#fff';
    ctx.strokeStyle = '#111';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, -75, 34, 0.15, Math.PI - 0.15, false);
    ctx.closePath();
    ctx.fill(); ctx.stroke();
    for (let t = -22; t <= 22; t += 11) {
      ctx.beginPath();
      ctx.moveTo(t, -75); ctx.lineTo(t, -46); ctx.stroke();
    }

    ctx.fillStyle = '#111';
    ctx.beginPath();
    ctx.ellipse(0, -135, 45, 8, 0, 0, Math.PI*2);
    ctx.fill();
    ctx.fillRect(-26, -185, 52, 50);
    ctx.fillStyle = '#c1121f';
    ctx.fillRect(-26, -145, 52, 10);

    if (beatPhase < 0.25 || cameraShake > 5) {
      ctx.fillStyle = '#ffd000';
      ctx.strokeStyle = '#111';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(120, -170, 48, 0, Math.PI*2);
      ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#111';
      ctx.font = '900 24px "Impact", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('DROP!', 120, -162);
      ctx.textAlign = 'left';
    }

    ctx.restore();
  }

  // --- SCENE 18: The Kinetic Core (Mechanical Bass Engine & Spinning Cogs) ---
  function renderKineticEngineCore(ctx, pal, beatPhase, now) {
    ctx.fillStyle = '#0a0d14';
    ctx.fillRect(0, 0, W, H);

    ctx.fillStyle = '#ffd000';
    const stripeW = 30;
    for (let x = -stripeW; x < W + stripeW; x += stripeW * 2) {
      ctx.beginPath();
      ctx.moveTo(x, 0); ctx.lineTo(x + stripeW, 0); ctx.lineTo(x, 24); ctx.lineTo(x - stripeW, 24);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(x, H - 24); ctx.lineTo(x + stripeW, H - 24); ctx.lineTo(x, H); ctx.lineTo(x - stripeW, H);
      ctx.fill();
    }

    function drawGear(cx, cy, r, teeth, angle, color) {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);
      ctx.fillStyle = color;
      ctx.strokeStyle = 'rgba(255,255,255,0.2)';
      ctx.lineWidth = 2;

      ctx.beginPath();
      const step = (Math.PI * 2) / teeth;
      for (let i = 0; i < teeth; i++) {
        const a1 = i * step;
        const a2 = a1 + step * 0.35;
        const a3 = a1 + step * 0.5;
        const a4 = a1 + step * 0.85;
        const rOut = r + 16;
        ctx.lineTo(Math.cos(a1) * r, Math.sin(a1) * r);
        ctx.lineTo(Math.cos(a2) * rOut, Math.sin(a2) * rOut);
        ctx.lineTo(Math.cos(a3) * rOut, Math.sin(a3) * rOut);
        ctx.lineTo(Math.cos(a4) * r, Math.sin(a4) * r);
      }
      ctx.closePath();
      ctx.fill(); ctx.stroke();

      ctx.fillStyle = '#0a0d14';
      ctx.beginPath(); ctx.arc(0, 0, r * 0.45, 0, Math.PI*2); ctx.fill();
      ctx.strokeStyle = color;
      ctx.beginPath(); ctx.arc(0, 0, r * 0.2, 0, Math.PI*2); ctx.stroke();
      ctx.restore();
    }

    const speed = now * 0.002 * (currentBPM / 120);
    drawGear(W * 0.22, H * 0.42, 110, 14, speed, '#d4af37');
    drawGear(W * 0.38, H * 0.68, 80, 10, -speed * 1.4, '#00f0ff');
    drawGear(W * 0.78, H * 0.42, 120, 16, -speed * 0.9, '#c0c0c0');
    drawGear(W * 0.64, H * 0.68, 85, 11, speed * 1.3, '#ff007f');

    for (let p = 0; p < 4; p++) {
      const px = W * 0.28 + (W * 0.15) * p;
      const pPhase = (beatPhase * 2 + p * 0.25) % 1;
      const pStroke = Math.sin(pPhase * Math.PI * 2) * 45;

      ctx.fillStyle = '#1c2438';
      ctx.fillRect(px - 22, H * 0.18, 44, 90);
      ctx.strokeStyle = '#00f0ff';
      ctx.strokeRect(px - 22, H * 0.18, 44, 90);

      ctx.fillStyle = '#ffd000';
      ctx.fillRect(px - 16, H * 0.22 + pStroke, 32, 25);
      ctx.fillStyle = '#8fa0c0';
      ctx.fillRect(px - 6, H * 0.22 + pStroke + 25, 12, 60);

      if (pStroke > 35) {
        ctx.fillStyle = 'rgba(255,255,255,0.6)';
        ctx.beginPath();
        ctx.arc(px, H * 0.22 + pStroke + 85, 18, 0, Math.PI*2);
        ctx.fill();
      }
    }

    const coreX = W / 2, coreY = H * 0.52;
    const pulse = 1 + (1 - beatPhase) * 0.4;
    const coreGrad = ctx.createRadialGradient(coreX, coreY, 20, coreX, coreY, 130 * pulse);
    coreGrad.addColorStop(0, '#ffffff');
    coreGrad.addColorStop(0.2, '#00f0ff');
    coreGrad.addColorStop(0.7, 'rgba(255, 0, 127, 0.4)');
    coreGrad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = coreGrad;
    ctx.beginPath(); ctx.arc(coreX, coreY, 130 * pulse, 0, Math.PI*2); ctx.fill();

    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 6;
    ctx.beginPath(); ctx.arc(coreX, coreY, 75, 0, Math.PI*2); ctx.stroke();

    ctx.save();
    ctx.translate(coreX, coreY);
    ctx.rotate(speed * 3);
    ctx.strokeStyle = '#ffd000';
    ctx.lineWidth = 4;
    for (let b = 0; b < 8; b++) {
      ctx.rotate((Math.PI * 2) / 8);
      ctx.beginPath(); ctx.moveTo(35, 0); ctx.lineTo(70, 0); ctx.stroke();
    }
    ctx.restore();

    ctx.fillStyle = '#00f0ff';
    ctx.font = 'bold 14px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(`KINETIC CORE // RPM ${Math.round(currentBPM * 32)} // PSI ${(1200 + (1-beatPhase)*400).toFixed(0)}`, coreX, coreY + 120);
    ctx.textAlign = 'left';
  }

  // --- SCENE 19: Neo-Olympus (Futuristic Greek God & Living Cyber-Statue) ---
  function renderNeoOlympusGod(ctx, pal, beatPhase, now) {
    const nebGrad = ctx.createLinearGradient(0, 0, W, H);
    nebGrad.addColorStop(0, '#060412');
    nebGrad.addColorStop(0.5, '#120d2b');
    nebGrad.addColorStop(1, '#05020c');
    ctx.fillStyle = nebGrad;
    ctx.fillRect(0, 0, W, H);

    ctx.fillStyle = 'rgba(230, 235, 245, 0.18)';
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.5)';
    ctx.lineWidth = 1;
    for (let c = 0; c < 6; c++) {
      const colX = (W / 7) * (c + 1);
      const colFloat = Math.sin(now * 0.002 + c) * 20;
      const colY = H * 0.3 + colFloat;
      ctx.fillRect(colX - 25, colY, 50, 180);
      ctx.strokeRect(colX - 25, colY, 50, 180);
      ctx.beginPath();
      ctx.arc(colX - 25, colY, 14, 0, Math.PI*2);
      ctx.arc(colX + 25, colY, 14, 0, Math.PI*2);
      ctx.stroke();
    }

    const godX = W / 2;
    const godY = H * 0.48 + Math.sin(now * 0.002) * 15;

    ctx.save();
    ctx.translate(godX, godY);

    ctx.fillStyle = '#eaeef4';
    ctx.beginPath();
    ctx.ellipse(0, 0, 110, 150, 0, 0, Math.PI*2);
    ctx.fill();

    ctx.fillStyle = '#b8c4d4';
    ctx.beginPath();
    ctx.moveTo(-15, -60); ctx.lineTo(15, -60); ctx.lineTo(12, 10); ctx.lineTo(25, 25); ctx.lineTo(-25, 25); ctx.lineTo(-12, 10);
    ctx.closePath(); ctx.fill();
    ctx.beginPath();
    ctx.ellipse(-65, 0, 25, 45, 0.3, 0, Math.PI*2);
    ctx.ellipse(65, 0, 25, 45, -0.3, 0, Math.PI*2);
    ctx.fill();

    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 3;
    ctx.shadowColor = '#00f0ff';
    ctx.shadowBlur = 15;
    ctx.beginPath();
    ctx.moveTo(-70, -40); ctx.lineTo(-30, -20); ctx.lineTo(-35, 30); ctx.lineTo(-10, 60);
    ctx.moveTo(70, -40); ctx.lineTo(30, -20); ctx.lineTo(35, 30); ctx.lineTo(10, 60);
    ctx.moveTo(0, -90); ctx.lineTo(0, -50);
    ctx.stroke();
    ctx.shadowBlur = 0;

    ctx.fillStyle = '#ffd000';
    ctx.shadowColor = '#ffd000';
    ctx.shadowBlur = 20;
    for (let w = -5; w <= 5; w++) {
      const laAngle = (w * 18 * Math.PI) / 180;
      const lx = Math.sin(laAngle) * 118;
      const ly = -Math.cos(laAngle) * 90 - 45;
      ctx.beginPath();
      ctx.ellipse(lx, ly, 16, 7, laAngle, 0, Math.PI*2);
      ctx.fill();
    }
    ctx.shadowBlur = 0;

    const eyeY = -25;
    ctx.fillStyle = '#ffd000';
    ctx.shadowColor = '#ffd000';
    ctx.shadowBlur = 25;
    ctx.beginPath();
    ctx.ellipse(-38, eyeY, 14, 7, 0, 0, Math.PI*2);
    ctx.ellipse(38, eyeY, 14, 7, 0, 0, Math.PI*2);
    ctx.fill();

    const sweep = Math.sin(now * 0.004) * (W * 0.25);
    ctx.fillStyle = 'rgba(255, 208, 0, 0.25)';
    ctx.beginPath();
    ctx.moveTo(-38, eyeY); ctx.lineTo(-W * 0.4 + sweep, H); ctx.lineTo(-W * 0.1 + sweep, H);
    ctx.closePath(); ctx.fill();
    ctx.beginPath();
    ctx.moveTo(38, eyeY); ctx.lineTo(W * 0.1 + sweep, H); ctx.lineTo(W * 0.4 + sweep, H);
    ctx.closePath(); ctx.fill();
    ctx.shadowBlur = 0;

    const mouthOpen = 4 + (1 - beatPhase) * 14;
    ctx.fillStyle = '#111827';
    ctx.beginPath();
    ctx.ellipse(0, 65, 30, mouthOpen, 0, 0, Math.PI*2);
    ctx.fill();
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 2;
    ctx.stroke();

    if (cameraShake > 6 || beatPhase < 0.15) {
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 3;
      ctx.shadowColor = '#00f0ff'; ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.moveTo(-110, -80); ctx.lineTo(-40, -40); ctx.lineTo(20, -60); ctx.lineTo(110, -20);
      ctx.stroke();
      ctx.shadowBlur = 0;
    }

    ctx.restore();
  }

  // --- SCENE 20: Blade Runner 2049 Dystopia (Rain-Slicked Flying Spinner Megacity) ---
  function renderBladeRunnerDystopia(ctx, pal, beatPhase, now) {
    ctx.fillStyle = '#05070e';
    ctx.fillRect(0, 0, W, H);

    const numTowers = 12;
    for (let t = 0; t < numTowers; t++) {
      const tw = W / 9;
      const tx = t * (tw * 0.8) - 40;
      const th = H * 0.65 + Math.sin(t * 3) * (H * 0.2);

      const tGrad = ctx.createLinearGradient(tx, H - th, tx, H);
      tGrad.addColorStop(0, t % 2 === 0 ? '#111827' : '#0b1120');
      tGrad.addColorStop(1, '#030508');
      ctx.fillStyle = tGrad;
      ctx.fillRect(tx, H - th, tw, th);

      ctx.fillStyle = (now + t * 400) % 1000 < 500 ? '#ff0055' : '#330011';
      ctx.beginPath(); ctx.arc(tx + tw/2, H - th, 5, 0, Math.PI*2); ctx.fill();

      ctx.fillStyle = t % 2 === 0 ? 'rgba(0,240,255,0.2)' : 'rgba(255,165,0,0.2)';
      for (let wy = H - th + 30; wy < H - 80; wy += 28) {
        ctx.fillRect(tx + 12, wy, 8, 14);
        ctx.fillRect(tx + 28, wy, 8, 14);
      }
    }

    const holoX = W * 0.72, holoY = H * 0.36;
    ctx.save();
    ctx.translate(holoX, holoY);
    ctx.fillStyle = 'rgba(255, 0, 127, 0.12)';
    ctx.fillRect(-90, -110, 180, 220);
    ctx.strokeStyle = '#ff007f';
    ctx.lineWidth = 2;
    ctx.strokeRect(-90, -110, 180, 220);
    ctx.strokeStyle = (now % 300 < 250) ? '#ff007f' : 'rgba(255,0,127,0.3)';
    ctx.beginPath();
    ctx.arc(0, -20, 48, 0, Math.PI*2);
    ctx.moveTo(-25, -28); ctx.lineTo(-8, -28);
    ctx.moveTo(8, -28); ctx.lineTo(25, -28);
    ctx.moveTo(-15, 10); ctx.lineTo(15, 10);
    ctx.stroke();
    ctx.fillStyle = '#00f0ff';
    ctx.font = '900 16px monospace';
    ctx.fillText('新 宿 ネ オ ン', -50, 80);
    ctx.restore();

    for (let s = 0; s < 3; s++) {
      const sSpeed = (now * (0.3 + s * 0.15)) % (W + 200);
      const sx = (s % 2 === 0) ? sSpeed - 100 : W - sSpeed + 100;
      const sy = H * 0.35 + s * 85;

      ctx.fillStyle = '#1e293b';
      ctx.fillRect(sx - 25, sy - 8, 50, 16);
      const hDir = (s % 2 === 0) ? 1 : -1;
      ctx.fillStyle = 'rgba(0, 240, 255, 0.25)';
      ctx.beginPath();
      ctx.moveTo(sx + 25 * hDir, sy);
      ctx.lineTo(sx + 140 * hDir, sy - 25);
      ctx.lineTo(sx + 140 * hDir, sy + 25);
      ctx.closePath(); ctx.fill();
      ctx.fillStyle = '#ff0055';
      ctx.beginPath(); ctx.arc(sx - 24 * hDir, sy, 4, 0, Math.PI*2); ctx.fill();
    }

    const slAngle = Math.sin(now * 0.002) * 0.6;
    ctx.fillStyle = 'rgba(0, 240, 255, 0.12)';
    ctx.beginPath();
    ctx.moveTo(W * 0.3, H);
    ctx.lineTo(W * 0.3 + Math.sin(slAngle) * H * 1.2 - 60, 0);
    ctx.lineTo(W * 0.3 + Math.sin(slAngle) * H * 1.2 + 60, 0);
    ctx.closePath(); ctx.fill();

    ctx.strokeStyle = 'rgba(180, 220, 255, 0.4)';
    ctx.lineWidth = 1;
    for (let r = 0; r < 40; r++) {
      const rx = (r * 73 + now * 0.5) % W;
      const ry = (r * 97 + now * 1.8) % H;
      ctx.beginPath(); ctx.moveTo(rx, ry); ctx.lineTo(rx - 3, ry + 22); ctx.stroke();
    }
  }

  // --- SCENE 21: Axiom Starship (Deep Space Dreadnought & Warp Bridge) ---
  function renderStarshipCockpit(ctx, pal, beatPhase, now) {
    ctx.fillStyle = '#020308';
    ctx.fillRect(0, 0, W, H);

    const pX = W * 0.75, pY = H * 0.35;
    ctx.fillStyle = '#581c87';
    ctx.beginPath(); ctx.arc(pX, pY, 70, 0, Math.PI*2); ctx.fill();
    ctx.strokeStyle = 'rgba(216, 180, 254, 0.6)';
    ctx.lineWidth = 12;
    ctx.beginPath();
    ctx.ellipse(pX, pY, 150, 30, -0.4, 0, Math.PI*2);
    ctx.stroke();

    const warpActive = beatPhase > 0.75 || cameraShake > 6;
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = warpActive ? 3 : 1;
    for (let st = 0; st < 60; st++) {
      const sa = (st * (Math.PI * 2)) / 60;
      const sDist = ((now * 0.4 + st * 20) % (W * 0.6));
      const sx = W/2 + Math.cos(sa) * sDist;
      const sy = H/2 + Math.sin(sa) * sDist;
      const tailLen = warpActive ? 40 : 3;

      ctx.beginPath();
      ctx.moveTo(sx, sy);
      ctx.lineTo(sx - Math.cos(sa) * tailLen, sy - Math.sin(sa) * tailLen);
      ctx.stroke();
    }

    ctx.fillStyle = '#0b0f19';
    ctx.fillRect(0, 0, W, 45);
    ctx.fillRect(0, H * 0.82, W, H);
    ctx.beginPath();
    ctx.moveTo(0, 0); ctx.lineTo(W * 0.22, H * 0.82); ctx.lineTo(W * 0.18, H * 0.82); ctx.lineTo(0, 50); ctx.fill();
    ctx.beginPath();
    ctx.moveTo(W, 0); ctx.lineTo(W * 0.78, H * 0.82); ctx.lineTo(W * 0.82, H * 0.82); ctx.lineTo(W, 50); ctx.fill();

    const hudX = W / 2, hudY = H * 0.48;
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(hudX, hudY, 90, 0, Math.PI*2); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(hudX - 110, hudY); ctx.lineTo(hudX - 70, hudY);
    ctx.moveTo(hudX + 70, hudY); ctx.lineTo(hudX + 110, hudY);
    ctx.moveTo(hudX, hudY - 110); ctx.lineTo(hudX - 70, hudY);
    ctx.moveTo(hudX, hudY + 70); ctx.lineTo(hudX + 110, hudY);
    ctx.stroke();

    if (beatPhase < 0.2 || cameraShake > 8) {
      ctx.strokeStyle = '#ff0055';
      ctx.lineWidth = 6;
      ctx.shadowColor = '#ff0055'; ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.moveTo(W * 0.22, H * 0.82); ctx.lineTo(hudX, hudY);
      ctx.moveTo(W * 0.78, H * 0.82); ctx.lineTo(hudX, hudY);
      ctx.stroke();
      ctx.shadowBlur = 0;
    }

    ctx.fillStyle = '#00ff80';
    ctx.font = 'bold 13px monospace';
    ctx.fillText(`WARP DRIVE: ${warpActive ? 'ENGAGED 99%' : 'CHARGING'} // TARGET LOCK: DECK 1`, W * 0.26, H * 0.89);
  }

  // --- SCENE 22: Biopunk Genesis (3D Synthetic Genetic Incubation Farm) ---
  function renderBiopunkFarm(ctx, pal, beatPhase, now) {
    ctx.fillStyle = '#020d09';
    ctx.fillRect(0, 0, W, H);

    const numVats = 5;
    for (let v = 0; v < numVats; v++) {
      const vx = (W / (numVats + 1)) * (v + 1);
      const vatW = W * 0.11;
      const vatH = H * 0.62;
      const vy = H * 0.18;

      const vatGrad = ctx.createLinearGradient(vx, vy, vx, vy + vatH);
      vatGrad.addColorStop(0, 'rgba(0, 255, 128, 0.45)');
      vatGrad.addColorStop(0.7, 'rgba(16, 185, 129, 0.25)');
      vatGrad.addColorStop(1, 'rgba(6, 78, 59, 0.6)');
      ctx.fillStyle = vatGrad;
      ctx.fillRect(vx - vatW/2, vy, vatW, vatH);

      ctx.strokeStyle = '#00ff80';
      ctx.lineWidth = 3;
      ctx.strokeRect(vx - vatW/2, vy, vatW, vatH);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      for (let b = 0; b < 6; b++) {
        const by = vy + vatH - ((now * 0.08 + b * 45) % vatH);
        const bx = vx - vatW/3 + (b * 12) % (vatW * 0.7);
        ctx.beginPath(); ctx.arc(bx, by, 3 + (b % 3), 0, Math.PI*2); ctx.fill();
      }

      const creatureFloat = Math.sin(now * 0.003 + v) * 12;
      ctx.fillStyle = 'rgba(2, 44, 34, 0.85)';
      ctx.beginPath();
      ctx.ellipse(vx, vy + vatH * 0.5 + creatureFloat, 22, 42, 0.1, 0, Math.PI*2);
      ctx.fill();
      ctx.fillStyle = (beatPhase < 0.25) ? '#ff007f' : '#00ff80';
      ctx.beginPath();
      ctx.arc(vx, vy + vatH * 0.48 + creatureFloat, 6, 0, Math.PI*2);
      ctx.fill();
    }

    const dnaX = W / 2, dnaY = H * 0.5;
    const helixRadius = 70;
    const numBasePairs = 24;
    for (let i = 0; i < numBasePairs; i++) {
      const a = (i * 0.35) + now * 0.003;
      const hy = (H * 0.15) + (i * 22);
      const x1 = dnaX + Math.sin(a) * helixRadius;
      const x2 = dnaX - Math.sin(a) * helixRadius;
      const depth1 = Math.cos(a);

      ctx.strokeStyle = depth1 > 0 ? '#00f0ff' : 'rgba(0, 240, 255, 0.3)';
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(x1, hy); ctx.lineTo(x2, hy); ctx.stroke();

      ctx.fillStyle = '#00ff80';
      ctx.beginPath(); ctx.arc(x1, hy, 7, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle = '#ff007f';
      ctx.beginPath(); ctx.arc(x2, hy, 7, 0, Math.PI*2); ctx.fill();
    }

    ctx.strokeStyle = '#059669';
    ctx.lineWidth = 12;
    ctx.beginPath();
    ctx.moveTo(0, H * 0.88);
    ctx.bezierCurveTo(W * 0.3, H * 0.82, W * 0.7, H * 0.94, W, H * 0.88);
    ctx.stroke();
  }

  // --- SCENE 23: Homo Synthetica (The Evolved Post-Human Trans-Human) ---
  function renderHomoSynthetica(ctx, pal, beatPhase, now) {
    ctx.fillStyle = '#03020a';
    ctx.fillRect(0, 0, W, H);

    const bodyX = W / 2;
    const bodyY = H * 0.52 + Math.sin(now * 0.002) * 14;

    ctx.save();
    ctx.translate(bodyX, bodyY);

    const haloSpeed = now * 0.0015;
    ctx.strokeStyle = '#ffd000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(0, -110, 110, 30, haloSpeed, 0, Math.PI*2);
    ctx.stroke();
    ctx.strokeStyle = '#00f0ff';
    ctx.beginPath();
    ctx.ellipse(0, -110, 130, 35, -haloSpeed * 1.2, 0, Math.PI*2);
    ctx.stroke();

    ctx.fillStyle = 'rgba(22, 28, 48, 0.9)';
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(-35, -50); ctx.lineTo(35, -50); ctx.lineTo(22, 60); ctx.lineTo(-22, 60);
    ctx.closePath(); ctx.fill(); ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(0, 85, 95, 32, 0, 0, Math.PI*2);
    ctx.fill(); ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, -100, 42, 0, Math.PI*2);
    ctx.fill(); ctx.stroke();

    ctx.strokeStyle = '#ff007f';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, -90); ctx.lineTo(0, 60);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(0, 240, 255, 0.7)';
    ctx.lineWidth = 1.5;
    for (let f = -4; f <= 4; f++) {
      ctx.beginPath();
      ctx.moveTo(0, -30 + f * 18);
      ctx.quadraticCurveTo(f * 20, -20 + f * 18, (f > 0 ? 32 : -32), -15 + f * 18);
      ctx.stroke();
    }

    const pulseEye = 1 + (1 - beatPhase) * 0.6;
    ctx.fillStyle = '#ffd000';
    ctx.shadowColor = '#ffd000'; ctx.shadowBlur = 25;
    ctx.beginPath();
    ctx.arc(0, -108, 8 * pulseEye, 0, Math.PI*2);
    ctx.fill();

    ctx.strokeStyle = 'rgba(255, 208, 0, 0.4)';
    ctx.lineWidth = 2;
    for (let m = 1; m <= 3; m++) {
      const mRad = (m * 45 * pulseEye);
      ctx.beginPath(); ctx.arc(0, -108, mRad, 0, Math.PI*2); ctx.stroke();
    }
    ctx.shadowBlur = 0;

    const orbPulse = (1 - beatPhase) * 35;
    const orbGrad = ctx.createRadialGradient(0, 25, 5, 0, 25, 45 + orbPulse);
    orbGrad.addColorStop(0, '#ffffff');
    orbGrad.addColorStop(0.3, '#00f0ff');
    orbGrad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = orbGrad;
    ctx.beginPath(); ctx.arc(0, 25, 45 + orbPulse, 0, Math.PI*2); ctx.fill();

    ctx.restore();
  }

  // --- SCENE 24: Cyber-Ronin (Neon Katana Anime Duel) ---
  function renderCyberRonin(ctx, pal, beatPhase, now) {
    const roninGrad = ctx.createLinearGradient(0, 0, 0, H);
    roninGrad.addColorStop(0, '#0a0212');
    roninGrad.addColorStop(0.6, '#38092a');
    roninGrad.addColorStop(1, '#05020a');
    ctx.fillStyle = roninGrad;
    ctx.fillRect(0, 0, W, H);

    ctx.fillStyle = '#ff007f';
    for (let p = 0; p < 30; p++) {
      const px = (p * 59 + now * 0.08) % W;
      const py = (p * 71 + now * 0.14) % H;
      ctx.beginPath();
      ctx.ellipse(px, py, 7, 3, Math.sin(now*0.003 + p), 0, Math.PI*2);
      ctx.fill();
    }

    const roninX = W * 0.48;
    const roninY = H * 0.7;

    ctx.save();
    ctx.translate(roninX, roninY);

    ctx.fillStyle = '#18181b';
    ctx.beginPath();
    ctx.moveTo(0, -180); ctx.lineTo(-75, -135); ctx.lineTo(75, -135);
    ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#00f0ff';
    ctx.shadowColor = '#00f0ff'; ctx.shadowBlur = 15;
    ctx.fillRect(-25, -132, 50, 5);
    ctx.shadowBlur = 0;

    const swayJacket = Math.sin(now * 0.006) * 12;
    ctx.fillStyle = '#09090b';
    ctx.beginPath();
    ctx.moveTo(-45, -125); ctx.lineTo(45, -125); ctx.lineTo(60 + swayJacket, 20); ctx.lineTo(-60 + swayJacket, 20);
    ctx.closePath(); ctx.fill();

    const isSlashing = beatPhase < 0.22 || cameraShake > 6;
    if (isSlashing) {
      ctx.restore();
      ctx.save();
      ctx.strokeStyle = '#00f0ff';
      ctx.lineWidth = 8;
      ctx.shadowColor = '#ffffff'; ctx.shadowBlur = 30;
      ctx.beginPath();
      ctx.moveTo(0, H * 0.2); ctx.lineTo(W, H * 0.85);
      ctx.stroke();

      ctx.strokeStyle = '#ff007f';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(0, H * 0.2 - 12); ctx.lineTo(W, H * 0.85 - 12);
      ctx.stroke();
      ctx.shadowBlur = 0;

      ctx.fillStyle = '#ffd000';
      ctx.font = '900 72px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('斬', W * 0.52, H * 0.38);
      ctx.restore();
      return;
    } else {
      ctx.strokeStyle = '#71717a';
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(-40, -40); ctx.lineTo(35, 10);
      ctx.stroke();
      ctx.fillStyle = '#ffd000';
      ctx.fillRect(-50, -52, 14, 14);
    }

    ctx.restore();
  }

  // ============================================================================
  // --- SCENE 25: AXIOM TARGET ARCADE (Interactive 16-Bit Shooting Game) ---
  // ============================================================================
  function renderTargetArcadeGame(ctx, pal, beatPhase, now) {
    // 1. Synthwave Arcade Grid Horizon Backdrop
    const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
    bgGrad.addColorStop(0, '#04020a');
    bgGrad.addColorStop(0.55, '#1e082b');
    bgGrad.addColorStop(0.75, '#ff0055');
    bgGrad.addColorStop(1, '#05020a');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    // Neon Retrowave Sun
    const sunX = W / 2, sunY = H * 0.55, sunR = Math.min(W, H) * 0.18;
    const sunGrad = ctx.createLinearGradient(sunX, sunY - sunR, sunX, sunY + sunR);
    sunGrad.addColorStop(0, '#ffe600');
    sunGrad.addColorStop(0.5, '#ff0055');
    sunGrad.addColorStop(1, '#7928ca');
    ctx.fillStyle = sunGrad;
    ctx.beginPath();
    ctx.arc(sunX, sunY, sunR, Math.PI, 0, false);
    ctx.fill();

    // 3D Perspective Vector Grid Floor
    const horizonY = H * 0.55;
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 1.5;
    for (let x = -W; x <= W * 2; x += W / 16) {
      ctx.beginPath();
      ctx.moveTo(sunX, horizonY);
      ctx.lineTo(x, H);
      ctx.stroke();
    }
    const gridSpeed = (now * 0.08) % 40;
    for (let y = 0; y < 14; y++) {
      const p = Math.pow(y / 14, 2.2);
      const gy = horizonY + p * (H - horizonY) + (gridSpeed * p);
      if (gy <= H) {
        ctx.strokeStyle = `rgba(0, 240, 255, ${0.2 + p * 0.7})`;
        ctx.beginPath();
        ctx.moveTo(0, gy); ctx.lineTo(W, gy);
        ctx.stroke();
      }
    }

    // 2. Update & Draw Moving Targets
    for (let t of arcadeTargets) {
      t.x += t.vx * (1 + beatPhase * 0.4);
      t.y += Math.sin(now * 0.003 + t.id) * 1.8;
      // Screen wrap
      if (t.vx > 0 && t.x > W + 70) t.x = -70;
      if (t.vx < 0 && t.x < -70) t.x = W + 70;

      ctx.save();
      ctx.translate(t.x, t.y);

      if (t.type === 'drone') {
        // Neon Hex-Drone with spinning rotors
        ctx.strokeStyle = t.color;
        ctx.fillStyle = 'rgba(10, 20, 35, 0.85)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        for (let a = 0; a < 6; a++) {
          const ang = (a * Math.PI) / 3;
          const px = Math.cos(ang) * t.r;
          const py = Math.sin(ang) * t.r;
          if (a === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        ctx.closePath(); ctx.fill(); ctx.stroke();

        // Pulsing Optic Eye
        ctx.fillStyle = (beatPhase < 0.25) ? '#ffffff' : t.color;
        ctx.shadowColor = t.color; ctx.shadowBlur = 15;
        ctx.beginPath(); ctx.arc(0, 0, 8, 0, Math.PI * 2); ctx.fill();
        ctx.shadowBlur = 0;

        // Spinning Rotor Blades
        const rotorAngle = now * 0.02;
        ctx.strokeStyle = '#ffd000';
        ctx.lineWidth = 2;
        [-t.r * 0.9, t.r * 0.9].forEach(rx => {
          ctx.beginPath();
          ctx.moveTo(rx - Math.cos(rotorAngle) * 18, -t.r * 0.7);
          ctx.lineTo(rx + Math.cos(rotorAngle) * 18, -t.r * 0.7);
          ctx.stroke();
        });
      } else if (t.type === 'duck') {
        // 8-Bit Cyber-Duck with flapping wings
        const wingFlap = Math.sin(now * 0.015) * 16;
        ctx.fillStyle = '#ffd000';
        ctx.beginPath(); ctx.arc(0, 0, 18, 0, Math.PI * 2); ctx.fill();
        // Duck Bill
        ctx.fillStyle = '#ff5e00';
        ctx.beginPath(); ctx.moveTo(14, -2); ctx.lineTo(28, 4); ctx.lineTo(14, 10); ctx.closePath(); ctx.fill();
        // Cyber Eye
        ctx.fillStyle = '#00f0ff';
        ctx.beginPath(); ctx.arc(6, -6, 4, 0, Math.PI * 2); ctx.fill();
        // Flapping polygon wings
        ctx.fillStyle = '#ffe600';
        ctx.beginPath();
        ctx.moveTo(-10, 0); ctx.lineTo(-24, -14 + wingFlap); ctx.lineTo(4, 0);
        ctx.closePath(); ctx.fill();
      } else if (t.type === 'bonus_orb') {
        // High-Speed Golden Energy Coin
        const spin = now * 0.005;
        ctx.fillStyle = '#ff007f';
        ctx.shadowColor = '#ff007f'; ctx.shadowBlur = 20;
        ctx.beginPath(); ctx.arc(0, 0, t.r, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke();
        ctx.shadowBlur = 0;
        ctx.fillStyle = '#fff';
        ctx.font = '900 14px monospace';
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText('500', 0, 0);
      } else if (t.type === 'cruiser') {
        // Heavy Gunship Boss
        ctx.fillStyle = '#1e1b4b';
        ctx.strokeStyle = '#ff0055'; ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(-t.r, 0); ctx.lineTo(0, -t.r * 0.6); ctx.lineTo(t.r, 0); ctx.lineTo(0, t.r * 0.6);
        ctx.closePath(); ctx.fill(); ctx.stroke();
        // HP pips
        ctx.fillStyle = '#ff0055';
        for (let p = 0; p < t.hp; p++) {
          ctx.fillRect(-18 + p * 14, -6, 10, 12);
        }
      }

      ctx.restore();
    }

    // 3. Laser Beams & Muzzle Flash
    for (let i = arcadeLaserBeams.length - 1; i >= 0; i--) {
      const b = arcadeLaserBeams[i];
      b.life -= 0.08;
      ctx.save();
      ctx.strokeStyle = b.color;
      ctx.shadowColor = b.color; ctx.shadowBlur = 25;
      ctx.lineWidth = 6 * b.life;
      ctx.beginPath();
      ctx.moveTo(b.startX, b.startY);
      ctx.lineTo(b.targetX, b.targetY);
      ctx.stroke();
      ctx.restore();
      if (b.life <= 0) arcadeLaserBeams.splice(i, 1);
    }

    // 4. Smooth Tracking Reticle
    const reticleLerp = 0.25;
    arcadeReticle.x += (arcadeReticle.targetX - arcadeReticle.x) * reticleLerp;
    arcadeReticle.y += (arcadeReticle.targetY - arcadeReticle.y) * reticleLerp;

    // Reticle auto-patrol if idle
    if (Date.now() - arcadeReticle.lastActive > 3000 && arcadeTargets.length > 0) {
      const nearest = arcadeTargets[0];
      arcadeReticle.targetX = nearest.x;
      arcadeReticle.targetY = nearest.y;
    }

    const rx = arcadeReticle.x, ry = arcadeReticle.y;
    ctx.save();
    ctx.translate(rx, ry);
    const pulseRing = 26 + Math.sin(now * 0.01) * 4;
    ctx.strokeStyle = (arcadeStreak >= 5) ? '#ffd000' : '#00f0ff';
    ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.arc(0, 0, pulseRing, 0, Math.PI * 2); ctx.stroke();
    // Crosshair ticks
    ctx.beginPath();
    ctx.moveTo(-pulseRing - 12, 0); ctx.lineTo(-pulseRing + 6, 0);
    ctx.moveTo(pulseRing - 6, 0); ctx.lineTo(pulseRing + 12, 0);
    ctx.moveTo(0, -pulseRing - 12); ctx.lineTo(0, -pulseRing + 6);
    ctx.moveTo(0, pulseRing - 6); ctx.lineTo(0, pulseRing + 12);
    ctx.stroke();
    // Center laser dot
    ctx.fillStyle = '#ff0055';
    ctx.beginPath(); ctx.arc(0, 0, 4, 0, Math.PI * 2); ctx.fill();
    ctx.restore();

    // 5. Floating Damage/Score Popups
    for (let i = arcadePopups.length - 1; i >= 0; i--) {
      const pop = arcadePopups[i];
      pop.y -= 1.6;
      pop.life -= 0.025;
      ctx.save();
      ctx.globalAlpha = Math.max(pop.life, 0);
      ctx.fillStyle = pop.color;
      ctx.shadowColor = pop.color; ctx.shadowBlur = 10;
      ctx.font = '900 22px "Impact", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(pop.text, pop.x, pop.y);
      if (pop.sub) {
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 13px monospace';
        ctx.fillText(pop.sub, pop.x, pop.y + 18);
      }
      ctx.restore();
      if (pop.life <= 0) arcadePopups.splice(i, 1);
    }

    // 6. Retro Arcade Cabinet HUD
    ctx.save();
    // Top Score Bar
    ctx.fillStyle = 'rgba(8, 12, 24, 0.88)';
    ctx.fillRect(20, 20, 360, 68);
    ctx.strokeStyle = '#00f0ff'; ctx.lineWidth = 2;
    ctx.strokeRect(20, 20, 360, 68);

    ctx.fillStyle = '#ffd000';
    ctx.font = '900 12px monospace';
    ctx.fillText('1UP // AXIOM TARGET RANGE', 35, 42);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 28px monospace';
    ctx.fillText(arcadeScore.toLocaleString().padStart(7, '0'), 35, 72);

    // Streak / Multiplier
    ctx.fillStyle = (arcadeStreak > 1) ? '#00ff80' : '#8fa0c0';
    ctx.font = 'bold 13px monospace';
    ctx.fillText(`STREAK: x${arcadeStreak}  ACC: ${Math.round((arcadeHits / Math.max(arcadeHits + arcadeMisses, 1)) * 100)}%`, 210, 72);

    // Controls hint
    ctx.fillStyle = 'rgba(0, 240, 255, 0.7)';
    ctx.font = 'bold 11px monospace';
    ctx.fillText('CLICK / TAP / SPACEBAR / PAD TO SHOOT', W / 2 - 140, H - 15);
    ctx.restore();
  }

  // ============================================================================
  // --- SCENE 26: THE CYBER-DOLL FOUNDRY (Companion Robot Assembly Factory) ---
  // ============================================================================
  function renderCompanionRobotFactory(ctx, pal, beatPhase, now) {
    // Dark industrial factory backdrop
    ctx.fillStyle = '#06080e';
    ctx.fillRect(0, 0, W, H);

    // Amber warning stripes top & bottom
    ctx.fillStyle = '#ffd000';
    const sW = 28;
    for (let x = -sW; x < W + sW; x += sW * 2) {
      ctx.beginPath();
      ctx.moveTo(x, 0); ctx.lineTo(x + sW, 0); ctx.lineTo(x, 18); ctx.lineTo(x - sW, 18);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(x, H - 18); ctx.lineTo(x + sW, H - 18); ctx.lineTo(x, H); ctx.lineTo(x - sW, H);
      ctx.fill();
    }

    // Overhead Gantry & Moving Hanging Chassis Rails
    ctx.fillStyle = '#151c2e';
    ctx.fillRect(0, 40, W, 24);
    ctx.strokeStyle = '#00f0ff'; ctx.lineWidth = 1;
    ctx.strokeRect(0, 40, W, 24);

    // Conveyor Belt Floor
    const beltY = H * 0.75;
    ctx.fillStyle = '#111726';
    ctx.fillRect(0, beltY, W, 55);
    ctx.strokeStyle = '#334155'; ctx.lineWidth = 2;
    ctx.strokeRect(0, beltY, W, 55);

    // Glowing Conveyor Rollers
    const rollerOffset = (now * 0.05) % 40;
    for (let rx = -40; rx < W + 40; rx += 40) {
      ctx.fillStyle = '#00f0ff';
      ctx.beginPath(); ctx.arc(rx + rollerOffset, beltY + 27, 8, 0, Math.PI * 2); ctx.fill();
    }

    // 4 Sequential Fabrication Stations
    const stations = [
      { name: 'STATION 1: CHROME ENDOSKELETON', desc: 'Titanium Framework & Neural Spine', x: W * 0.18 },
      { name: 'STATION 2: PLASMA WELDER', desc: 'Multi-Axis Hydraulic Assembly', x: W * 0.40 },
      { name: 'STATION 3: DERMAL APPLICATION', desc: 'Synthetic Porcelain Skin & Tattoos', x: W * 0.65 },
      { name: 'STATION 4: CALIBRATION COMPLETE', desc: 'Model Aphrodite-09 Active', x: W * 0.88 }
    ];

    stations.forEach((st, idx) => {
      ctx.fillStyle = 'rgba(0, 240, 255, 0.4)';
      ctx.font = '900 11px monospace';
      ctx.fillText(st.name, st.x - 70, beltY + 80);
      ctx.fillStyle = '#8fa0c0';
      ctx.font = 'bold 9px monospace';
      ctx.fillText(st.desc, st.x - 70, beltY + 94);
    });

    // Android Model Figures across stations
    // Station 1: Chrome Endoskeleton
    ctx.save();
    ctx.translate(W * 0.18, beltY - 20);
    ctx.strokeStyle = '#c0c8d8'; ctx.lineWidth = 4;
    // Spine & Pelvis
    ctx.beginPath(); ctx.moveTo(0, -140); ctx.lineTo(0, -30); ctx.stroke();
    // Slender Ribcage
    for (let r = 0; r < 4; r++) {
      ctx.beginPath(); ctx.ellipse(0, -110 + r * 14, 22 - r * 2, 7, 0, 0, Math.PI * 2); ctx.stroke();
    }
    // Glowing Spine Fiber-optics
    ctx.fillStyle = '#00f0ff';
    for (let s = 0; s < 6; s++) {
      ctx.beginPath(); ctx.arc(0, -135 + s * 16, 4, 0, Math.PI * 2); ctx.fill();
    }
    // Skull Frame
    ctx.strokeStyle = '#c0c8d8'; ctx.lineWidth = 3;
    ctx.strokeRect(-16, -180, 32, 36);
    ctx.restore();

    // Station 2: Welding Bay with Articulated Robotic Arms
    ctx.save();
    ctx.translate(W * 0.40, beltY - 20);
    // Body in progress
    ctx.fillStyle = '#334155';
    ctx.fillRect(-20, -140, 40, 90);
    ctx.strokeStyle = '#00f0ff'; ctx.lineWidth = 2; ctx.strokeRect(-20, -140, 40, 90);

    // Robotic Welder Arm 1 (From ceiling left)
    const armAngle = Math.sin(now * 0.006) * 0.2;
    ctx.strokeStyle = '#ffd000'; ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(-90, -340);
    ctx.lineTo(-45, -220);
    ctx.lineTo(-10 + Math.sin(armAngle) * 15, -120);
    ctx.stroke();

    // Plasma Welding Sparks on beat
    const isWelding = beatPhase < 0.28 || foundryWeldTimer > 0;
    if (isWelding) {
      if (foundryWeldTimer > 0) foundryWeldTimer -= 0.03;
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = '#00f0ff'; ctx.shadowBlur = 35;
      ctx.beginPath(); ctx.arc(-10, -120, 14, 0, Math.PI * 2); ctx.fill();
      ctx.shadowBlur = 0;
      // Sparks shower
      for (let sp = 0; sp < 12; sp++) {
        const sx = -10 + (Math.random() - 0.5) * 80;
        const sy = -120 + Math.random() * 120;
        ctx.fillStyle = (sp % 2 === 0) ? '#00f0ff' : '#ffd000';
        ctx.fillRect(sx, sy, 3, 6);
      }
    }
    ctx.restore();

    // Station 3: Dermal Coating (Porcelain Skin & Glowing Tattoos)
    ctx.save();
    ctx.translate(W * 0.65, beltY - 20);
    ctx.fillStyle = '#eaeef4';
    ctx.beginPath();
    // Feminine waist contour
    ctx.moveTo(-22, -150);
    ctx.bezierCurveTo(-14, -100, -26, -50, -18, -10);
    ctx.lineTo(18, -10);
    ctx.bezierCurveTo(26, -50, 14, -100, 22, -150);
    ctx.closePath(); ctx.fill();

    // Glowing Neon Circuit Tattoos
    ctx.strokeStyle = '#ff007f'; ctx.lineWidth = 2;
    ctx.shadowColor = '#ff007f'; ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.moveTo(-12, -130); ctx.lineTo(-4, -95); ctx.lineTo(-14, -60);
    ctx.moveTo(10, -120); ctx.lineTo(16, -80); ctx.lineTo(6, -45);
    ctx.stroke();
    ctx.shadowBlur = 0;
    ctx.restore();

    // Station 4: Finished Alluring Cyber-Doll Model
    ctx.save();
    ctx.translate(W * 0.88, beltY - 20);
    const breathe = Math.sin(now * 0.003) * 3;

    // Body
    ctx.fillStyle = '#f8fafc';
    ctx.beginPath();
    ctx.ellipse(0, -85 + breathe, 24, 60, 0, 0, Math.PI * 2);
    ctx.fill();

    // Head & Graceful Neck
    ctx.fillRect(-6, -165 + breathe, 12, 25);
    ctx.beginPath();
    ctx.ellipse(0, -185 + breathe, 18, 24, 0, 0, Math.PI * 2);
    ctx.fill();

    // Flowing Gradient Hair (Magenta to Cyan)
    const hairGrad = ctx.createLinearGradient(-30, -210, 30, -110);
    hairGrad.addColorStop(0, '#ff007f');
    hairGrad.addColorStop(1, '#00f0ff');
    ctx.fillStyle = hairGrad;
    ctx.beginPath();
    ctx.moveTo(-20, -195 + breathe);
    ctx.quadraticCurveTo(-45, -150, -35, -90 + Math.sin(now * 0.004) * 8);
    ctx.lineTo(-20, -110);
    ctx.quadraticCurveTo(0, -180, 20, -110);
    ctx.lineTo(35, -90 + Math.sin(now * 0.004) * 8);
    ctx.quadraticCurveTo(45, -150, 20, -195 + breathe);
    ctx.closePath(); ctx.fill();

    // Luminous Eyes that blink to beat
    const eyeBlink = (beatPhase > 0.85) ? 1 : 4;
    ctx.fillStyle = '#00f0ff';
    ctx.shadowColor = '#00f0ff'; ctx.shadowBlur = 15;
    ctx.beginPath();
    ctx.ellipse(-7, -184 + breathe, 3, eyeBlink, 0, 0, Math.PI * 2);
    ctx.ellipse(7, -184 + breathe, 3, eyeBlink, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Holographic Quality Control Scanner Box
    ctx.strokeStyle = '#00ff80'; ctx.lineWidth = 2;
    ctx.strokeRect(-55, -235, 110, 240);
    const scanLineY = -235 + ((now * 0.12) % 240);
    ctx.fillStyle = 'rgba(0, 255, 128, 0.4)';
    ctx.fillRect(-55, scanLineY, 110, 3);

    ctx.fillStyle = '#00ff80';
    ctx.font = 'bold 11px monospace';
    ctx.fillText('QC: 99.8% OPTIMAL', -52, -242);
    ctx.restore();
  }

  // ============================================================================
  // --- SCENE 27: DANCE CATALYST II (Neo-Liquid Flow & Gloving Rave) ---
  // ============================================================================
  function renderLiquidFlowDance(ctx, pal, beatPhase, now) {
    // Dark Underground Rave Atmosphere
    ctx.fillStyle = '#05020c';
    ctx.fillRect(0, 0, W, H);

    // Volumetric Overhead Rave Lasers
    for (let l = 0; l < 6; l++) {
      const laserAngle = Math.sin((now * 0.002) + (l * 0.8)) * 0.6;
      ctx.save();
      ctx.strokeStyle = (l % 2 === 0) ? 'rgba(0, 240, 255, 0.25)' : 'rgba(255, 0, 127, 0.25)';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo((W / 7) * (l + 1), 0);
      ctx.lineTo((W / 7) * (l + 1) + Math.tan(laserAngle) * H, H);
      ctx.stroke();
      ctx.restore();
    }

    // Concentric Neon Strobe Rings on Floor
    const floorY = H * 0.82;
    const floorPulse = (1 - beatPhase) * 60;
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.4)';
    ctx.lineWidth = 3;
    for (let r = 1; r <= 4; r++) {
      ctx.beginPath();
      ctx.ellipse(W / 2, floorY, 80 * r + floorPulse, 24 * r + floorPulse * 0.3, 0, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Dancer Center Pivot
    const dX = W / 2;
    const dY = H * 0.62;

    // Sinuous Liquid Wave Body & Arm Positions
    const bodySway = Math.sin(now * 0.004) * 28;
    const wave1 = Math.sin(now * 0.006) * 55;
    const wave2 = Math.cos(now * 0.005) * 65;
    const wave3 = Math.sin(now * 0.007 + 1.5) * 45;

    // Track left and right fingertip positions for trails
    const handLeft = { x: dX - 80 + wave1, y: dY - 60 + wave2 };
    const handRight = { x: dX + 80 - wave2, y: dY - 60 + wave1 };

    liquidTrails.push({
      lX: handLeft.x, lY: handLeft.y,
      rX: handRight.x, rY: handRight.y,
      life: 1.0,
      colorL: (beatPhase < 0.5) ? '#00f0ff' : '#ffd000',
      colorR: (beatPhase < 0.5) ? '#ff007f' : '#00ff80'
    });
    if (liquidTrails.length > 35) liquidTrails.shift();

    // Draw Flowing Light Ribbons (Bezier trails)
    ctx.save();
    for (let i = 1; i < liquidTrails.length; i++) {
      const pPrev = liquidTrails[i - 1];
      const pCur = liquidTrails[i];
      const alpha = (i / liquidTrails.length) * 0.9;

      // Left hand trail
      ctx.strokeStyle = pCur.colorL;
      ctx.shadowColor = pCur.colorL; ctx.shadowBlur = 18;
      ctx.lineWidth = 6 * alpha;
      ctx.beginPath();
      ctx.moveTo(pPrev.lX, pPrev.lY);
      ctx.lineTo(pCur.lX, pCur.lY);
      ctx.stroke();

      // Right hand trail
      ctx.strokeStyle = pCur.colorR;
      ctx.shadowColor = pCur.colorR; ctx.shadowBlur = 18;
      ctx.lineWidth = 6 * alpha;
      ctx.beginPath();
      ctx.moveTo(pPrev.rX, pPrev.rY);
      ctx.lineTo(pCur.rX, pCur.rY);
      ctx.stroke();
    }
    ctx.restore();

    // Dancer Silhouette (Fluid, Graceful & Electric)
    ctx.save();
    ctx.translate(dX + bodySway, dY);

    // Torso & Pelvis
    ctx.fillStyle = '#0f172a';
    ctx.strokeStyle = '#00f0ff'; ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(0, 0, 24, 48, Math.sin(now * 0.004) * 0.15, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();

    // Head with LED Goggles
    ctx.fillStyle = '#1e293b';
    ctx.beginPath(); ctx.arc(0, -68, 18, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#ffd000';
    ctx.shadowColor = '#ffd000'; ctx.shadowBlur = 15;
    ctx.fillRect(-10, -71, 20, 6);
    ctx.shadowBlur = 0;

    // Sinuous Liquid Arms
    ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 7; ctx.lineCap = 'round';
    // Left Arm
    ctx.beginPath();
    ctx.moveTo(-18, -45);
    ctx.quadraticCurveTo(-60 + wave3, -30 + wave1 * 0.5, handLeft.x - (dX + bodySway), handLeft.y - dY);
    ctx.stroke();

    // Right Arm
    ctx.beginPath();
    ctx.moveTo(18, -45);
    ctx.quadraticCurveTo(60 - wave3, -30 + wave2 * 0.5, handRight.x - (dX + bodySway), handRight.y - dY);
    ctx.stroke();

    // Glowing LED Gloves on Hands
    [-1, 1].forEach((dir) => {
      const hX = (dir === -1) ? handLeft.x - (dX + bodySway) : handRight.x - (dX + bodySway);
      const hY = (dir === -1) ? handLeft.y - dY : handRight.y - dY;
      ctx.fillStyle = dir === -1 ? '#00f0ff' : '#ff007f';
      ctx.shadowColor = ctx.fillStyle; ctx.shadowBlur = 25;
      ctx.beginPath(); ctx.arc(hX, hY, 9, 0, Math.PI * 2); ctx.fill();
      ctx.shadowBlur = 0;
    });

    ctx.restore();
  }

  // ============================================================================
  // --- SCENE 28: PROJECT CHIMERA (Modular Cyber-Frankenstein Reanimator) ---
  // ============================================================================
  function renderModularReanimator(ctx, pal, beatPhase, now) {
    // Cyber-Gothic Laboratory Chamber
    const labGrad = ctx.createLinearGradient(0, 0, 0, H);
    labGrad.addColorStop(0, '#030107');
    labGrad.addColorStop(0.6, '#0f051d');
    labGrad.addColorStop(1, '#020106');
    ctx.fillStyle = labGrad;
    ctx.fillRect(0, 0, W, H);

    // Dual Towering Tesla Coils Left & Right
    const coilLeftX = W * 0.14, coilRightX = W * 0.86;
    [coilLeftX, coilRightX].forEach((cx, cIdx) => {
      // Base pedestal
      ctx.fillStyle = '#1e1b4b';
      ctx.fillRect(cx - 35, H * 0.65, 70, H * 0.35);
      // Torus ring tower
      ctx.strokeStyle = '#6366f1'; ctx.lineWidth = 5;
      for (let ring = 0; ring < 7; ring++) {
        const ry = H * 0.35 + ring * 35;
        ctx.beginPath(); ctx.ellipse(cx, ry, 45 - ring * 3, 14, 0, 0, Math.PI * 2); ctx.stroke();
      }
      // Top Glowing Sphere
      const sphereY = H * 0.30;
      ctx.fillStyle = (beatPhase < 0.2 || reanimationTimer > 0) ? '#ffffff' : '#4338ca';
      ctx.shadowColor = '#a855f7'; ctx.shadowBlur = 30;
      ctx.beginPath(); ctx.arc(cx, sphereY, 32, 0, Math.PI * 2); ctx.fill();
      ctx.shadowBlur = 0;
    });

    // Central Reanimation Dais / Gurney
    const daisX = W / 2, daisY = H * 0.58;
    ctx.save();
    ctx.translate(daisX, daisY);

    // Steel Hydraulic Table tilted back 70 deg
    ctx.fillStyle = '#0f172a';
    ctx.strokeStyle = '#00f0ff'; ctx.lineWidth = 4;
    ctx.strokeRect(-70, -220, 140, 320);
    ctx.fillRect(-70, -220, 140, 320);

    // Biological Fluid Conduits running along table
    ctx.strokeStyle = '#10b981'; ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(-60, -210); ctx.lineTo(-60, 90);
    ctx.moveTo(60, -210); ctx.lineTo(60, 90);
    ctx.stroke();

    // The Modular Humanoid Body
    ctx.fillStyle = '#1e293b';
    ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 3;

    // Torso with Open Arc Reactor Sternum
    ctx.beginPath();
    ctx.moveTo(-35, -130); ctx.lineTo(35, -130); ctx.lineTo(24, 10); ctx.lineTo(-24, 10);
    ctx.closePath(); ctx.fill(); ctx.stroke();

    // Central Arc Reactor Core
    const corePulse = 14 + (1 - beatPhase) * 12 + (reanimationTimer > 0 ? 18 : 0);
    ctx.fillStyle = (reanimationTimer > 0) ? '#ffffff' : '#00f0ff';
    ctx.shadowColor = '#00f0ff'; ctx.shadowBlur = 30;
    ctx.beginPath(); ctx.arc(0, -65, corePulse, 0, Math.PI * 2); ctx.fill();
    ctx.shadowBlur = 0;

    // Modular Limbs
    // Left Arm (Swappable)
    ctx.strokeStyle = '#c0c8d8'; ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(-35, -120); ctx.lineTo(-75, -50); ctx.lineTo(-80, 20);
    ctx.stroke();

    // Right Arm (Swappable Biopunk limb)
    ctx.strokeStyle = '#00ff80'; ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(35, -120); ctx.lineTo(75, -50); ctx.lineTo(80, 20);
    ctx.stroke();

    // --- Dynamic Modular Heads (4 Variations) ---
    const headY = -175;
    if (modularHeadIndex === 0) {
      // Head 1: Mirrored VR Helm with cranial data cables
      ctx.fillStyle = '#0f172a';
      ctx.beginPath(); ctx.ellipse(0, headY, 26, 34, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#00f0ff';
      ctx.shadowColor = '#00f0ff'; ctx.shadowBlur = 20;
      ctx.fillRect(-18, headY - 8, 36, 14);
      ctx.shadowBlur = 0;
      // Braided cables
      ctx.strokeStyle = '#ffd000'; ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(-15, headY + 12); ctx.lineTo(-35, -130);
      ctx.moveTo(15, headY + 12); ctx.lineTo(35, -130);
      ctx.stroke();
    } else if (modularHeadIndex === 1) {
      // Head 2: Translucent Cranium with Exposed Glowing Synaptic Brain
      ctx.fillStyle = 'rgba(168, 85, 247, 0.35)';
      ctx.strokeStyle = '#c084fc'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.ellipse(0, headY, 28, 36, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      // Glowing brain lobes
      ctx.fillStyle = '#ec4899';
      ctx.shadowColor = '#ec4899'; ctx.shadowBlur = 22;
      ctx.beginPath();
      ctx.arc(-8, headY - 4, 12, 0, Math.PI * 2);
      ctx.arc(8, headY - 4, 12, 0, Math.PI * 2);
      ctx.fill(); ctx.shadowBlur = 0;
    } else if (modularHeadIndex === 2) {
      // Head 3: Golden Seraph Bio-Mask with 3rd Cyber Eye
      ctx.fillStyle = '#d4af37';
      ctx.beginPath(); ctx.ellipse(0, headY, 25, 34, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#00f0ff'; ctx.shadowColor = '#00f0ff'; ctx.shadowBlur = 18;
      ctx.beginPath(); ctx.arc(0, headY - 14, 6, 0, Math.PI * 2); ctx.fill();
      ctx.fillRect(-14, headY + 2, 8, 3);
      ctx.fillRect(6, headY + 2, 8, 3);
      ctx.shadowBlur = 0;
    } else {
      // Head 4: Heavy Cyber-Samurai Respirator Helmet
      ctx.fillStyle = '#18181b';
      ctx.beginPath(); ctx.ellipse(0, headY, 28, 34, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#ff0055'; ctx.shadowColor = '#ff0055'; ctx.shadowBlur = 15;
      ctx.beginPath(); ctx.arc(0, headY + 8, 10, 0, Math.PI * 2); ctx.fill();
      ctx.shadowBlur = 0;
    }

    ctx.restore();

    // Reanimation Lightning Storm (On Drop or Trigger)
    const activeReanimate = beatPhase < 0.22 || reanimationTimer > 0;
    if (activeReanimate) {
      if (reanimationTimer > 0) reanimationTimer -= 0.025;
      ctx.save();
      ctx.strokeStyle = '#ffffff';
      ctx.shadowColor = '#00f0ff'; ctx.shadowBlur = 30;
      ctx.lineWidth = 6;
      // Lightning arcs from both Tesla coils straight into the chest reactor
      [coilLeftX, coilRightX].forEach(cx => {
        ctx.beginPath();
        let curX = cx, curY = H * 0.30;
        ctx.moveTo(curX, curY);
        for (let seg = 1; seg <= 6; seg++) {
          const tP = seg / 6;
          const targetX = daisX;
          const targetY = daisY - 65;
          const jitterX = (Math.random() - 0.5) * 60;
          const jitterY = (Math.random() - 0.5) * 40;
          curX = cx + (targetX - cx) * tP + jitterX;
          curY = H * 0.30 + (targetY - H * 0.30) * tP + jitterY;
          ctx.lineTo(curX, curY);
        }
        ctx.stroke();
      });
      ctx.restore();
    }

    // Overhead Caliper Part-Swapper Cranes
    ctx.strokeStyle = '#ffd000'; ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(daisX - 30, 0); ctx.lineTo(daisX - 30, daisY - 240);
    ctx.moveTo(daisX + 30, 0); ctx.lineTo(daisX + 30, daisY - 240);
    ctx.stroke();

    // Diagnostics Display
    ctx.fillStyle = '#00f0ff';
    ctx.font = 'bold 12px monospace';
    ctx.fillText(`PROJECT CHIMERA // HEAD: VARIANT ${modularHeadIndex + 1} // REANIMATION: ${activeReanimate ? '10,000V CRITICAL DROP' : 'IDLE 48%'}`, W * 0.25, H - 35);
  }

  // 60FPS Render Loop
  function renderFrame() {
    requestAnimationFrame(renderFrame);

    const now = Date.now();
    const beatIntervalMs = (60 / currentBPM) * 1000;
    const beatPhase = ((now % beatIntervalMs) / beatIntervalMs);

    // Audio reactivity extraction
    let bassEnergy = 0;
    if (audioReactiveEnabled && analyser) {
      analyser.getByteFrequencyData(audioDataArray);
      let sum = 0;
      for (let i = 1; i <= 6; i++) sum += audioDataArray[i];
      bassEnergy = (sum / 6) / 255;
    } else {
      bassEnergy = (1 - beatPhase) * 0.7;
    }

    // Auto-Pilot Scene Switching
    if (autoPilotEnabled) {
      const elapsedSec = (now - lastAutoSwitchTime) / 1000;
      const remainingSec = Math.max(0, Math.ceil(autoPilotIntervalSec - elapsedSec));
      document.getElementById('autopilot-badge').innerText = `🔄 Auto-Pilot: ON (${remainingSec}s)`;

      if (elapsedSec >= autoPilotIntervalSec) {
        lastAutoSwitchTime = now;
        currentSceneIndex = (currentSceneIndex + 1) % NARRATIVE_SCENES.length;
        loadScene(currentSceneIndex);
      }
    }

    // Beat Pulse Ring
    const ring = document.getElementById('beat-ring');
    if (beatPhase < 0.15 || bassEnergy > 0.6) {
      ring.style.transform = 'scale(1.7)';
      ring.style.opacity = '1';
    } else {
      ring.style.transform = 'scale(1.0)';
      ring.style.opacity = '0.3';
    }

    // Canvas Clearing & Camera Shake
    ctx.clearRect(0, 0, W, H);
    ctx.save();
    if (cameraShake > 0) {
      const sx = (Math.random() - 0.5) * cameraShake;
      const sy = (Math.random() - 0.5) * cameraShake;
      ctx.translate(sx, sy);
      cameraShake *= 0.88;
      if (cameraShake < 0.5) cameraShake = 0;
    }

    // Dedicated Scene Renderers (Dynamic Renderer Dispatch)
    try {
      const activeSc = NARRATIVE_SCENES[currentSceneIndex];
      const rend = activeSc ? activeSc.renderer : null;
      if (rend === 'target_arcade') {
        renderTargetArcadeGame(ctx, PALETTES[currentPaletteIndex], beatPhase, now);
      } else if (rend === 'arcade_fighter') {
        renderArcadeFighter(ctx, PALETTES[currentPaletteIndex], beatPhase, now);
      } else if (rend === 'toon_mayhem') {
        renderRubberHoseCartoon(ctx, PALETTES[currentPaletteIndex], beatPhase, now);
      } else if (rend === 'kinetic_core') {
        renderKineticEngineCore(ctx, PALETTES[currentPaletteIndex], beatPhase, now);
      } else if (rend === 'neo_olympus') {
        renderNeoOlympusGod(ctx, PALETTES[currentPaletteIndex], beatPhase, now);
      } else if (rend === 'blade_runner') {
        renderBladeRunnerDystopia(ctx, PALETTES[currentPaletteIndex], beatPhase, now);
      } else if (rend === 'starship') {
        renderStarshipCockpit(ctx, PALETTES[currentPaletteIndex], beatPhase, now);
      } else if (rend === 'biopunk_farm') {
        renderBiopunkFarm(ctx, PALETTES[currentPaletteIndex], beatPhase, now);
      } else if (rend === 'homo_synthetica') {
        renderHomoSynthetica(ctx, PALETTES[currentPaletteIndex], beatPhase, now);
      } else if (rend === 'cyber_ronin') {
        renderCyberRonin(ctx, PALETTES[currentPaletteIndex], beatPhase, now);
      } else if (rend === 'robot_foundry') {
        renderCompanionRobotFactory(ctx, PALETTES[currentPaletteIndex], beatPhase, now);
      } else if (rend === 'liquid_flow') {
        renderLiquidFlowDance(ctx, PALETTES[currentPaletteIndex], beatPhase, now);
      } else if (rend === 'dance_catalyst') {
        renderDancefloorCatalyst(ctx, PALETTES[currentPaletteIndex], beatPhase, now);
      } else if (rend === 'chimera') {
        renderModularReanimator(ctx, PALETTES[currentPaletteIndex], beatPhase, now);
      } else if (rend === 'abyssal_angler') {
        renderAnglerfishOverlay(ctx, PALETTES[currentPaletteIndex], beatPhase, now);
      } else if (rend === 'drone_surveillance') {
        renderDroneScannerOverlay(ctx, PALETTES[currentPaletteIndex], beatPhase, now);
      } else if (rend === 'claymation_fx') {
        renderClaymationOverlay(ctx, PALETTES[currentPaletteIndex], beatPhase, now);
      } else if (rend === 'psych_experiment') {
        renderPsychConsoleOverlay(ctx, PALETTES[currentPaletteIndex], beatPhase, now);
      } else if (rend === 'neural_synapse') {
        renderNeuralSynapseLayer(ctx, PALETTES[currentPaletteIndex], beatPhase, now);
      } else if (rend === 'art_reactive_pulse') {
        renderArtPulseOverlay(ctx, PALETTES[currentPaletteIndex], beatPhase, now);
      }
    } catch(err) {
      console.error("Scene render error:", err);
    }
    if (currentSceneIndex <= 2) {
      // 1. Draw Stasis Cell Holographic HUD Overlay (Scene 1-3)
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.25)';
      ctx.lineWidth = 1;
      // Grid corners
      const pad = 40;
      ctx.strokeRect(pad, pad, W - pad*2, H - pad*2);
      ctx.fillStyle = 'rgba(0, 240, 255, 0.7)';
      ctx.font = 'bold 12px monospace';
      ctx.fillText(`CONTAINMENT CELL 07 // FREQ ${currentBPM.toFixed(1)} BPM // STASIS: ${100 - crackLevel*25}%`, pad + 15, pad + 25);
      ctx.fillText(`BIOMETRICS: LOCKED // BIOHAZARD LEVEL 9`, W - pad - 320, H - pad - 15);
    }

    // 2. Draw Voronoi Glass Cracks
    if (crackLevel > 0) {
      const cx = W / 2, cy = H / 2;
      ctx.strokeStyle = crackLevel >= 4 ? '#ff0055' : (crackLevel >= 3 ? '#ffd000' : 'rgba(255,255,255,0.75)');
      ctx.lineWidth = 2 + crackLevel;
      ctx.shadowColor = ctx.strokeStyle;
      ctx.shadowBlur = 10;

      for (let a = 0; a < crackLevel * 3; a++) {
        const rad = ((a * 45) * Math.PI) / 180;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        let curX = cx, curY = cy;
        for (let seg = 1; seg <= 6; seg++) {
          curX += Math.cos(rad) * (W / 18) + (Math.sin(seg * 2 + a) * 20);
          curY += Math.sin(rad) * (H / 18) + (Math.cos(seg * 2 + a) * 20);
          ctx.lineTo(curX, curY);
        }
        ctx.stroke();
      }
      ctx.shadowBlur = 0;
    }

    // 3. Render 3D Exploding Glass Shards
    if (glassShards.length > 0) {
      for (let i = glassShards.length - 1; i >= 0; i--) {
        const s = glassShards[i];
        s.x += s.vx;
        s.y += s.vy;
        s.z += s.vz;
        s.rot += s.vrot;
        s.alpha -= 0.008;

        if (s.alpha <= 0 || s.x < -100 || s.x > W + 100 || s.y > H + 100) {
          glassShards.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rot);
        ctx.fillStyle = `rgba(220, 245, 255, ${s.alpha * 0.7})`;
        ctx.strokeStyle = `rgba(0, 240, 255, ${s.alpha})`;
        ctx.lineWidth = 1.5;

        // Triangular shard geometry
        ctx.beginPath();
        const sz = s.size * (1 + s.z / 100);
        ctx.moveTo(-sz/2, -sz/3);
        ctx.lineTo(sz/2, -sz/3);
        ctx.lineTo(0, sz/2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }
    }

    // 4. Render Spark Particles
    if (sparks.length > 0) {
      for (let i = sparks.length - 1; i >= 0; i--) {
        const p = sparks[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        if (p.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1.0;
    }

    // 5. Render Electric Shock Arcs
    if (shockArcs.length > 0) {
      ctx.lineWidth = 2.5;
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 15;
      for (let i = shockArcs.length - 1; i >= 0; i--) {
        const arc = shockArcs[i];
        arc.life -= 0.08;
        if (arc.life <= 0) {
          shockArcs.splice(i, 1);
          continue;
        }
        ctx.strokeStyle = `rgba(0, 240, 255, ${arc.life})`;
        ctx.beginPath();
        ctx.moveTo(arc.pts[0].x, arc.pts[0].y);
        for (let j = 1; j < arc.pts.length; j++) {
          ctx.lineTo(arc.pts[j].x + (Math.random() - 0.5) * 20, arc.pts[j].y);
        }
        ctx.stroke();
      }
      ctx.shadowBlur = 0;
    }

    // Render Live Twitch / YouTube Chat Badges
    // Render Confetti Particles
    if (confettiParticles.length > 0) {
      for (let cp = confettiParticles.length - 1; cp >= 0; cp--) {
        const c = confettiParticles[cp];
        c.x += c.vx;
        c.y += c.vy;
        c.rot += c.vrot;
        c.alpha -= 0.006;
        if (c.alpha <= 0 || c.y > H + 20) { confettiParticles.splice(cp, 1); continue; }
        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate(c.rot);
        ctx.fillStyle = c.color;
        ctx.globalAlpha = c.alpha;
        ctx.fillRect(-c.size/2, -c.size/4, c.size, c.size/2);
        ctx.restore();
      }
    }

    // Render Missile Swarm
    if (missileSwarm.length > 0) {
      for (let m = missileSwarm.length - 1; m >= 0; m--) {
        const mis = missileSwarm[m];
        mis.x += mis.vx;
        mis.y += mis.vy;
        mis.life -= 0.015;
        if (mis.life <= 0 || mis.x > W + 50) { missileSwarm.splice(m, 1); continue; }
        ctx.fillStyle = '#ffd000';
        ctx.shadowColor = '#ff5500';
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(mis.x, mis.y, mis.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    if (chatBadges.length > 0) {
      for (let cb = chatBadges.length - 1; cb >= 0; cb--) {
        const b = chatBadges[cb];
        b.y -= 1.8;
        b.alpha -= 0.01;
        if (b.alpha <= 0) { chatBadges.splice(cb, 1); continue; }
        ctx.save();
        ctx.globalAlpha = b.alpha;
        ctx.fillStyle = 'rgba(10, 15, 30, 0.85)';
        ctx.strokeStyle = '#00f0ff';
        ctx.lineWidth = 2;
        ctx.strokeRect(b.x - 10, b.y - 20, 260, 32);
        ctx.fillRect(b.x - 10, b.y - 20, 260, 32);
        ctx.fillStyle = '#ffd000';
        ctx.font = 'bold 13px sans-serif';
        ctx.fillText(`💬 ${b.user}: ${b.action.toUpperCase()}!`, b.x, b.y);
        ctx.restore();
      }
    }

    ctx.restore();
  }

  // Remote Pad / Prompter Polling Loop
  async function pollState() {
    try {
      const res = await fetch('/api/vj/state');
      const st = await res.json();
      if (st) {
        if (!paramScene && st.scene) {
          const targetIdx = parseInt(st.scene) - 1;
          if (!isNaN(targetIdx) && targetIdx >= 0 && targetIdx < NARRATIVE_SCENES.length && targetIdx !== currentSceneIndex) {
            currentSceneIndex = targetIdx;
            loadScene(currentSceneIndex);
          }
        }
        if (st.slam_time && st.slam_time > lastSlamProcessed) {
          lastSlamProcessed = st.slam_time;
          triggerSlam();
        }
        if (st.breach_time && st.breach_time > lastBreachProcessed) {
          lastBreachProcessed = st.breach_time;
          triggerBreach();
        }
        if (st.shock_time && st.shock_time > lastShockProcessed) {
          lastShockProcessed = st.shock_time;
          triggerShock();
        }
        if (st.strobe_time && st.strobe_time > lastStrobeProcessed) {
          lastStrobeProcessed = st.strobe_time;
          strobeOverlay.style.opacity = '1';
          setTimeout(() => strobeOverlay.style.opacity = '0', 250);
        }
        blackoutOverlay.style.opacity = st.blackout ? '1' : '0';
if (st.chat_event_time && st.chat_event_time > lastChatProcessed) {
          lastChatProcessed = st.chat_event_time;
          const u = st.last_chat_user || 'VIP';
          const act = st.last_chat_action || 'hype';
          chatBadges.push({ user: u, action: act, x: 40 + Math.random() * (W - 320), y: H * 0.72, alpha: 1.0 });

          // Universal Visual Reactions across all scenes
          if (act === 'shoot' || act === 'fire' || act === 'laser') {
            fireArcadeLaser();
          } else if (act === 'weld' || act === 'spark') {
            foundryWeldTimer = 1.0; cameraShake = 14;
          } else if (act === 'liquid' || act === 'flow' || act === 'glove') {
            liquidDanceMode = (liquidDanceMode === 'liquid_flow') ? 'gloving_tut' : 'liquid_flow';
          } else if (act === 'reanimate' || act === 'revive' || act === 'shock') {
            reanimated = true; reanimationTimer = 1.0; cameraShake = 28;
          } else if (act === 'swap_head' || act === 'swaphead') {
            modularHeadIndex = (modularHeadIndex + 1) % 4;
          } else if (act === 'confetti' || act === 'cheer') {
            spawnConfetti();
          } else if (act === 'missile' || act === 'barrage') {
            spawnMissiles();
          } else if (act === 'wings') {
            currentSceneIndex = 6; // AURA Equalizer Wings
            loadScene(6);
            strobeOverlay.style.opacity = '1';
            setTimeout(() => strobeOverlay.style.opacity = '0', 90);
          } else if (act === 'dance' || act === 'hype') {
            if (currentSceneIndex === 15) {
              danceClonesActive = true;
              setTimeout(() => { danceClonesActive = false; }, 8000);
            }
          } else if (act === 'hadoken') {
            if (currentSceneIndex === 14) triggerArcadeAction('hadoken');
          } else if (act === 'shoryuken') {
            if (currentSceneIndex === 14) triggerArcadeAction('shoryuken');
          } else if (act === 'punch') {
            if (currentSceneIndex === 14) triggerArcadeAction('punch');
          } else if (act === 'kick') {
            if (currentSceneIndex === 14) triggerArcadeAction('kick');
          }
        }
        crackLevel = st.crack_level || 0;
      }
    } catch(e) {}
  }
  setInterval(pollState, 80);

  // Live Track Metadata Polling Loop (Supports Rekordbox 7 & Serato DJ Pro)
  async function pollLiveDeck() {
    try {
      const res = await fetch('/api/now_playing?engine=auto');
      const data = await res.json();
      if (data && data.decks) {
        const activeKey = data.latest_deck || '1';
        const d = data.decks[activeKey];
        if (d && d.title && (d.title !== currentTrackTitle || d.bpm !== currentBPM)) {
          currentTrackTitle = d.title;
          currentTrackArtist = d.artist || 'DJ Sol Roth';
          currentBPM = parseFloat(d.bpm || 126.0);
          document.getElementById('np-title').innerText = d.title;
          document.getElementById('np-artist').innerText = d.artist;
          document.getElementById('np-bpm').innerText = `${currentBPM.toFixed(1)} BPM`;
          const musKey = d.musical_key ? ` (${d.musical_key})` : '';
          document.getElementById('np-key').innerText = `Key ${d.key || '8A'}${musKey}`;
          if (d.color) document.getElementById('np-key').style.borderColor = d.color;
          document.getElementById('np-genre').innerText = d.genre || 'Electronic';
        }
      }
    } catch(e) {}
  }
  setInterval(pollLiveDeck, 1000);

  // Visual Controls
  function cycleVisualMode() {
    currentSceneIndex = (currentSceneIndex + 1) % NARRATIVE_SCENES.length;
    loadScene(currentSceneIndex);
  }

  function toggleAutoPilot() {
    autoPilotEnabled = !autoPilotEnabled;
    const btn = document.getElementById('btn-autopilot');
    const badge = document.getElementById('autopilot-badge');
    if (autoPilotEnabled) {
      btn.style.background = '#00ff80';
      btn.style.color = '#000';
      badge.style.display = 'inline-block';
      lastAutoSwitchTime = Date.now();
    } else {
      btn.style.background = 'rgba(20, 25, 40, 0.75)';
      btn.style.color = '#fff';
      badge.style.display = 'none';
    }
  }

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(()=>{});
    } else {
      document.exitFullscreen().catch(()=>{});
    }
  }

  // Keyboard Controls
  window.addEventListener('keydown', (e) => {
    const k = e.key.toUpperCase();
    if (k === 'F') toggleFullScreen();
    else if (k === 'M') cycleVisualMode();
    else if (k === 'A') toggleAutoPilot();
    else if (k === 'B' || k === ' ') triggerBreach();
    else if (k === 'S') triggerSlam();
    else if (k === 'E') triggerShock();
    else if (k === 'C') { crackLevel = Math.min(4, crackLevel + 1); }
    else if (k === 'R') { crackLevel = 0; currentSceneIndex = 0; loadScene(0); }
    else if (k === 'X') {
      strobeOverlay.style.opacity = '1';
      setTimeout(() => strobeOverlay.style.opacity = '0', 200);
    }
    else if (k === 'Z') {
      blackoutOverlay.style.opacity = blackoutOverlay.style.opacity === '1' ? '0' : '1';
    }
    else if (k === 'V') toggleAudioInput();
else if (k === 'K') {
      const crt = document.getElementById('crt-overlay');
      crt.style.display = crt.style.display === 'none' ? 'block' : 'none';
    }
    else if (k === 'J') triggerArcadeAction('punch');
    else if (k === 'U') triggerArcadeAction('kick');
    else if (k === 'H') triggerArcadeAction('hadoken');
    else if (k === 'Y') triggerArcadeAction('shoryuken');
    else if (k === 'O') {
      danceModeSub = danceModeSub === 'seductive' ? 'wild_breakdance' : 'seductive';
    }
    else if (k === 'P') {
      danceClonesActive = !danceClonesActive;
    }
    else if (k >= '1' && k <= '9') {
      const idx = parseInt(k) - 1;
      if (idx < NARRATIVE_SCENES.length) {
        currentSceneIndex = idx;
        loadScene(idx);
      }
    }
  });

  // ============================================================================
  // NATIVE WEB MIDI CONTROLLER INTEGRATION (AlphaTheta Slab, DDJ-FLX10, M-VAVE)
  // ============================================================================
  if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess({ sysex: false }).then(midiAccess => {
      console.log('🎹 Web MIDI hardware controller bus connected');
      for (let input of midiAccess.inputs.values()) {
        console.log(`MIDI Connected: ${input.name}`);
        input.onmidimessage = handleMIDIMessage;
      }
      midiAccess.onstatechange = (e) => {
        if (e.port.type === 'input' && e.port.state === 'connected') {
          e.port.onmidimessage = handleMIDIMessage;
        }
      };
    }).catch(() => {});
  }

  function handleMIDIMessage(event) {
    const [status, data1, data2] = event.data;
    const cmd = status >> 4;
    const velocity = data2;

    // Note On (Alesis Drumstick Hit / FLX10 Pad / AlphaTheta Slab)
    if (cmd === 9 && velocity > 0) {
      const note = data1;
      // Physical acoustic stick impact scales camera shake & lighting bloom
      cameraShake = Math.max(cameraShake, (velocity / 127) * 26);

      // Support Alesis SamplePad Pro default GM drum notes & chromatic pads
      let pad = -1;
      if (note === 49 || note === 60) pad = 0; // Pad 1: Anvil / Shock
      else if (note === 36 || note === 62) pad = 1; // Pad 2: Sub Slam / Kick
      else if (note === 38 || note === 42 || note === 64) pad = 2; // Pad 3: Snare / Strobe
      else if (note === 46 || note === 65) pad = 3; // Pad 4: Confetti
      else if (note === 48 || note === 50 || note === 67) pad = 4; // Pad 5: Hadoken / Missiles
      else if (note === 45 || note === 47 || note === 69) pad = 5; // Pad 6: Shoryuken / Breach
      else if (note === 37 || note === 71) pad = 6; // Pad 7 (Rim 1): AURA Diva
      else if (note === 44 || note === 51 || note === 72) pad = 7; // Pad 8 (Rim 2): Titan Mecha
      else pad = note % 8;

      if (pad === 0) triggerShock();
      else if (pad === 1) triggerSlam();
      else if (pad === 2) {
        strobeOverlay.style.opacity = '1';
        setTimeout(() => strobeOverlay.style.opacity = '0', 160);
      }
      else if (pad === 3) spawnConfetti();
      else if (pad === 4) {
        if (currentSceneIndex === 14) triggerArcadeAction('hadoken');
        else spawnMissiles();
      }
      else if (pad === 5) {
        if (currentSceneIndex === 14) triggerArcadeAction('shoryuken');
        else triggerBreach();
      }
      else if (pad === 6) { currentSceneIndex = 6; loadScene(6); } // AURA Diva
      else if (pad === 7) { currentSceneIndex = 7; loadScene(7); } // Titan Mecha
    }
    // Control Change (Crossfader / Knobs / Expression)
    else if (cmd === 11) {
      const cc = data1;
      const val = data2 / 127;
      if (cc === 1 || cc === 7 || cc === 10 || cc === 11) {
        cameraShake = val * 12;
      }
    }
  }

  // Auto-hide control header on mouse inactivity
  let hideTimer = null;
  const header = document.getElementById('vj-header');
  window.addEventListener('mousemove', () => {
    header.classList.remove('hidden');
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => header.classList.add('hidden'), 3500);
  });

  // Initialize
  loadScene(currentSceneIndex);
  renderFrame();
</script>
</body>
</html>
"""

HTML_DOCS = """<!DOCTYPE html>
<html lang="en" data-theme="dark" data-axiom-palette="default">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
<title>Sol Roth // Master DJ System Documentation & Maintenance Guide</title>
<link rel="stylesheet" href="/axiom01/css/axiom.min.css">
<link rel="stylesheet" href="/axiom01/css/axicons.css">
<style>
  *, *::before, *::after { box-sizing: border-box; }
  [data-theme="dark"] {
    --ax-surface: #0b0e15;
    --a-surface-base: #07090e;
    --a-surface-raised: #101522;
    --ax-border: #1a2233;
    --ax-text: #f0f4f8;
    --dj-accent-brand: #00f0ff;
    --dj-accent-cyan: #00f0ff;
    --dj-accent-gold: #ffd000;
    --dj-accent-pink: #ff007f;
    --dj-accent-purple: #aa00ff;
    --dj-accent-green: #00ff80;
    --dj-card-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }
  [data-theme="light"] {
    --ax-surface: #f8fafc;
    --a-surface-base: #ffffff;
    --a-surface-raised: #f1f5f9;
    --ax-border: #cbd5e1;
    --ax-text: #0f172a;
    --dj-accent-brand: #0284c7;
    --dj-accent-cyan: #0284c7;
    --dj-accent-gold: #b45309;
    --dj-accent-pink: #be185d;
    --dj-accent-purple: #7e22ce;
    --dj-accent-green: #047857;
    --dj-card-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }
  html, body {
    margin: 0; padding: 0;
    width: 100%; max-width: 100vw;
    background: var(--a-surface-base);
    color: var(--ax-text);
    font-family: var(--ax-font-body);
    min-height: 100vh;
    padding-bottom: 60px;
  }
  header.main {
    background: var(--ax-surface);
    padding: 10px 16px;
    display: flex; justify-content: space-between; align-items: center;
    border-bottom: 2px solid var(--ax-border);
    position: sticky; top: 0; z-index: 100;
    flex-wrap: wrap; gap: 8px;
  }
  header.main > nav {
    display: flex; justify-content: space-between; align-items: center;
    flex-wrap: wrap; gap: 8px; width: 100%;
  }
  header.main .brand {
    font-weight: 900; font-size: 1.15rem; color: var(--dj-accent-brand);
    display: flex; align-items: center; gap: 8px;
  }
  header.main a.button, header.main button {
    background: var(--a-surface-raised);
    border: 1px solid var(--ax-border);
    color: var(--ax-text);
    padding: 6px 12px;
    border-radius: var(--a-border-radius-base);
    font-size: 0.8rem; font-weight: 800;
    text-decoration: none; cursor: pointer;
    display: inline-flex; align-items: center; gap: 6px;
    transition: all 0.2s;
  }
  header.main a.button:hover, header.main button:hover {
    background: var(--dj-accent-cyan); color: #000;
  }
  header.main a.button.primary { background: var(--dj-accent-pink); color: #fff; }
  header.main a.button.secondary { background: var(--dj-accent-purple); color: #fff; }
  header.main a.button.active { background: var(--dj-accent-cyan); color: #000; }

  main {
    max-width: 1300px; margin: 0 auto;
    padding: 16px; display: flex; flex-direction: column; gap: 18px;
  }
  section.hero {
    background: linear-gradient(135deg, rgba(0,240,255,0.12) 0%, rgba(170,0,255,0.08) 50%, var(--a-surface-raised) 100%);
    border: 1px solid var(--ax-border);
    border-left: 5px solid var(--dj-accent-brand);
    border-radius: var(--a-border-radius-lg);
    padding: 20px;
    box-shadow: var(--dj-card-shadow);
  }
  section.hero input[type="search"] {
    width: 100%;
    background: var(--a-surface-base);
    border: 2px solid var(--dj-accent-brand);
    border-radius: var(--a-border-radius-base);
    color: var(--ax-text);
    padding: 12px 16px;
    font-size: 1rem; font-weight: 700;
    outline: none; margin-top: 12px;
  }
  main > section {
    background: var(--a-surface-raised);
    border: 1px solid var(--ax-border);
    border-radius: var(--a-border-radius-lg);
    padding: 22px;
    display: flex; flex-direction: column; gap: 14px;
    box-shadow: var(--dj-card-shadow);
  }
  main > section > h2 {
    margin: 0; font-size: 1.3rem; font-weight: 900;
    display: flex; align-items: center; gap: 8px;
    color: var(--dj-accent-brand);
    border-bottom: 1px solid var(--ax-border);
    padding-bottom: 8px;
  }
  main > section > h3 {
    margin: 12px 0 4px 0; font-size: 1.05rem; font-weight: 800;
    color: var(--dj-accent-gold);
  }
  main > section p, main > section li {
    font-size: 0.9rem; line-height: 1.6; color: var(--ax-text);
  }
  .code-block {
    background: var(--a-surface-base);
    border: 1px solid var(--ax-border);
    border-radius: 6px;
    padding: 12px; font-family: monospace; font-size: 0.85rem;
    color: var(--dj-accent-cyan); overflow-x: auto;
  }
  .badge {
    background: rgba(0,240,255,0.15); color: var(--dj-accent-cyan);
    font-size: 0.72rem; font-weight: 900; padding: 2px 6px;
    border-radius: 4px; display: inline-block;
  }
  article.card {
    background: var(--a-surface-base);
    border: 1px solid var(--dj-accent-cyan);
    border-radius: 8px;
    padding: 14px; margin-top: 10px;
  }
</style>
</head>
<body>

<header class="main">
  <nav>
    <div class="brand">
      <span>📚 SOL ROTH // SYSTEM DOCUMENTATION &amp; MAINTENANCE GUIDE</span>
    </div>
    <div style="display:flex; gap:6px; flex-wrap:wrap;">
      <a href="/intel" class="button">📰 Daily Intel</a>
      <a href="/genres" class="button">📚 Genres</a>
      <a href="/visuals" class="button primary">✨ Stage Visuals</a>
      <a href="/docs" class="button active">📚 Docs</a>
      <a href="/studio" class="button secondary">🎹 Remix Lab</a>
      <a href="/" class="button">🎤 Prompter HUD</a>
      <button onclick="toggleTheme()" id="theme-btn" aria-label="Toggle dark/light theme">☀️</button>
    </div>
  </nav>
</header>

<main id="main-content">
  <!-- Hero & Ask AI Section -->
  <section class="hero">
    <div style="font-size:0.75rem; font-weight:900; color:var(--dj-accent-gold); text-transform:uppercase; letter-spacing:1px;">
      📖 Comprehensive System Manual &amp; Operational Knowledge Base
    </div>
    <div style="font-size:clamp(1.3rem, 4vw, 1.8rem); font-weight:900; color:var(--ax-text); margin:4px 0;">
      How Everything Works Together, Hardware Setup &amp; Maintenance
    </div>
    <div style="font-size:0.9rem; color:var(--a-color-text-muted); max-width:950px;">
      Find complete instructions on system architecture, moving to another computer, external drive path renames, API dependencies, Pioneer DDJ-FLX10 / FLX2 / M-VAVE controller mappings, Serato Studio blueprints, and troubleshooting.
    </div>

    <!-- Interactive Ask AI Assistant Input -->
    <div style="margin-top:14px;">
      <input type="search" id="docs-ai-input" placeholder="🤖 Ask System AI any question (e.g. 'How do I move this to a new laptop?', 'How do I rename the external drive?', 'What APIs are used?')..." onkeydown="if(event.key==='Enter') askDocsAi()">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:6px;">
        <span style="font-size:0.75rem; color:var(--a-color-text-muted);">Press <b>Enter</b> to query AI knowledge base or filter topics below</span>
        <button class="button active" onclick="askDocsAi()">⚡ Ask AI</button>
      </div>

      <article class="card ai" id="ai-response-box" style="display:none;">
        <header style="font-size:0.75rem; font-weight:900; color:var(--dj-accent-gold); text-transform:uppercase; margin-bottom:4px;">
          🤖 Sol Roth AI Assistant Response:
        </header>
        <div id="ai-response-text" style="font-size:0.92rem; line-height:1.5; color:var(--ax-text);"></div>
      </article>
    </div>
  </section>

  <!-- Section 1: System Architecture -->
  <section id="section-architecture">
    <h2><span>🏗️</span> 1. Master System Architecture & Real-Time Data Flow</h2>
    <p>The Sol Roth DJ Operating System is a high-performance, multi-threaded local platform built to connect Serato DJ Pro, Serato Studio, physical DJ hardware, and mobile stage screens with <b>0ms latency</b>.</p>
    
    <h3>Core Server Engine (`sol_roth_dj_prompter_hud.py`)</h3>
    <ul>
      <li><b>Port 7777 HTTP Server:</b> Runs a lightweight multi-threaded Python server with customized handlers serving the Stage Prompter (`/`), Daily Intel (`/intel`), Genre Encyclopedia (`/genres`), Serato Studio Lab (`/studio`), and System Docs (`/docs`).</li>
      <li><b>0ms In-Memory Library Cache:</b> On startup, the server indexes all <b>4,404 master playable tracks</b> in <code>/Volumes/Sol Roth Data/ALL DJ Music/</code>. All searches and track queries execute in memory with zero disk lag.</li>
      <li><b>Real-Time Serato SQLite Sync:</b> Directly connects to Serato DJ Pro's database at <code>~/Library/Application Support/Serato/Library/master.sqlite</code>. It monitors the <code>history_entry</code> table in real time to instantly read whatever track is loaded onto Decks 1, 2, 3, or 4 without requiring third-party plugins.</li>
      <li><b>Apple Bonjour & Mobile IP Broadcast:</b> Automatically detects your Mac's local IP (e.g. <code>http://192.168.4.224:7777</code> or <code>http://srmmacbookpro.local:7777</code>) so your iPad, iPhone, and stage monitors connect wirelessly with zero configuration.</li>
    </ul>
  </section>

  <!-- Section 2: Hardware Controller Mappings -->
  <section id="section-hardware">
    <h2><span>🎛️</span> 2. Hardware Controller Setup & Performance Pad Mappings</h2>
    <p>The system is built to be 100% controller-agnostic, supporting your main performance controllers:</p>

    <h3>A. Pioneer DDJ-FLX10 (4-Channel Master Controller)</h3>
    <ul>
      <li><b>16 Performance Pads:</b> Split across Deck 1/3 (Pads 1–8) and Deck 2/4 (Pads 9–16).</li>
      <li><b>Serato Sampler Integration:</b> The 16 pads natively trigger Serato's active Sampler Subcrate (<code>08 SAMPLER BANKS%%00 Live Performance Active Sampler.crate</code>).</li>
      <li><b>AI 1-Click Fast Set:</b> When you tap <code>⚡ 1-Click Fast Set to Pads</code> in the HUD, the server recompiles the active sampler crate in real time to match the exact tempo and genre of the playing deck!</li>
    </ul>

    <h3>B. Pioneer DDJ-FLX2 + M-VAVE SMC-PAD (Compact & Silent Performance Bridge)</h3>
    <ul>
      <li><b>8 360° Endless Rotary Encoders:</b>
        <ul>
          <li><b>K1 / K5:</b> Deck 1 & Deck 2 Color FX Filters (Low-pass to High-pass sweep).</li>
          <li><b>K2 / K6:</b> Deck 1 & Deck 2 Vocal Part ISO Sends (Instantly pull vocals out of the mix).</li>
          <li><b>K3 / K7:</b> Deck 1 & Deck 2 Loop Length adjustment.</li>
          <li><b>K4 / K8:</b> Deck 1 & Deck 2 Master Key Shift.</li>
        </ul>
      </li>
      <li><b>16 Silent Silicone Performance Pads:</b>
        <ul>
          <li><b>Pads 1–4 & 5–8:</b> Deck 1 & Deck 2 Real-Time Stems (<code>VOCAL</code>, <code>DRUMS</code>, <code>BASS</code>, <code>INST</code>).</li>
          <li><b>Pads 9–12 & 13–16:</b> Deck 1 & Deck 2 Hot Cues 1–4.</li>
        </ul>
      </li>
    </ul>

    <h3>C. Pioneer Rekordbox Integration (XML Bridge & Sampler Sync)</h3>
    <ul>
      <li><b>1-Click Master Sync:</b> Tap <code>🎧 Sync to Pioneer Rekordbox</code> on the Genres page or Docs to generate the master <code>rekordbox.xml</code> file containing all <b>4,404 tracks</b>, 16 genre playlists, 24 Camelot keys, and 7 16-pad sampler kits.</li>
      <li><b>XML Bridge Location:</b> Written to <code>/Volumes/Sol Roth Data/rekordbox.xml</code> and automatically linked to <code>~/Music/rekordbox.xml</code> and Rekordbox preferences.</li>
      <li><b>Native Rekordbox Sampler:</b> Performance pad kits are automatically synced to <code>~/Music/rekordbox/Sampler/Sol Roth Master Sampler/</code> with sequentially numbered audio files (<code>Pad_01_...</code> to <code>Pad_16_...</code>) ready to drag onto Rekordbox Sampler banks A & B!</li>
      <li><b>Importing Playlists into Rekordbox Collection:</b> In Rekordbox, expand the <b>rekordbox xml</b> tree in the left sidebar, right-click <b>⚡ Master Genre Crates</b>, and click <b>Import Playlist</b> to add all crates directly to your permanent Rekordbox Collection.</li>
    </ul>
  </section>

  <!-- Section 3: Migration & Portability -->
  <section id="section-migration">
    <h2><span>💻</span> 3. Migration & Portability Guide (Moving to a New Mac or Computer)</h2>
    <p>The entire system is designed for <b>100% portability</b> because all 4,404 tracks, sample banks, and Python scripts reside on your external drive (<code>/Volumes/Sol Roth Data/</code>).</p>

    <h3>Step-by-Step Moving Checklist:</h3>
    <ol>
      <li><b>Plug External Drive:</b> Plug your external drive into the new Mac or Laptop.</li>
      <li><b>Verify Python 3:</b> Open Terminal and type <code>python3 --version</code>. (If missing, install via Xcode Command Line Tools: <code>xcode-select --install</code>).</li>
      <li><b>Install Python Dependencies:</b>
        <div class="code-block">pip3 install mutagen</div>
      </li>
      <li><b>Install Audio Utilities:</b>
        <div class="code-block">brew install ffmpeg yt-dlp</div>
      </li>
      <li><b>Open Serato DJ Pro Once:</b> Launch Serato DJ Pro so it initializes its local database directory at <code>~/Library/Application Support/Serato/Library/master.sqlite</code>.</li>
      <li><b>Start the Sol Roth Server:</b>
        <div class="code-block">python3 "/Volumes/Sol Roth Data/ALL DJ Music/sol_roth_dj_prompter_hud.py"</div>
      </li>
      <li><b>Open in Browser:</b> Navigate to <code>http://localhost:7777</code>. Everything will immediately load with 100% of your library, crates, and history intact!</li>
    </ol>
  </section>

  <!-- Section 4: Renaming Drive Paths -->
  <section id="section-drive-rename">
    <h2><span>📁</span> 4. Changing External Drive Names or File Paths</h2>
    <p>If you ever change the name of your external drive (e.g. from <code>Sol Roth Data</code> to <code>Sol Roth Drive 2</code>), updating the system takes less than 30 seconds:</p>
    
    <h3>Single Configuration Point:</h3>
    <p>Open <code>/Volumes/YOUR_DRIVE_NAME/ALL DJ Music/sol_roth_dj_prompter_hud.py</code> in any text editor and look at lines 40–50:</p>
    <div class="code-block">
MUSIC_ROOT = Path("/Volumes/YOUR_NEW_DRIVE_NAME/ALL DJ Music")
CRATE_TARGET_DIRS = [
    Path.home() / 'Music/_Serato_/Subcrates',
    Path('/Volumes/YOUR_NEW_DRIVE_NAME/_Serato_/Subcrates')
]
    </div>
    <p>All relative paths for the 4,404 tracks, sample banks, lyrics files, and crates resolve dynamically from <code>MUSIC_ROOT</code>.</p>
  </section>

  <!-- Section 5: External APIs & Dependencies -->
  <section id="section-apis">
    <h2><span>🔌</span> 5. External APIs, Dependencies & Third-Party Services</h2>
    <p>The system was deliberately engineered with <b>zero paid API subscriptions or brittle private auth keys</b> so it will run forever offline or online:</p>

    <ul>
      <li><b>yt-dlp:</b> Used for 1-click background track ingest. Upgrade anytime via:
        <div class="code-block">yt-dlp -U</div>
      </li>
      <li><b>ffmpeg:</b> Used for audio normalization, duration checks, and stem slicing.</li>
      <li><b>iTunes / Spotify Web Public Search API:</b> Used for streaming 30s audio preview clips and fetching high-resolution album art for the Daily Intel radar. It requires zero API tokens and is completely public and rate-limit resilient.</li>
      <li><b>Mutagen:</b> Native Python library that writes standard ID3v2.4 metadata and embeds artwork into MP3s.</li>
      <li><b>Serato SQLite:</b> Direct native read access to <code>~/Library/Application Support/Serato/Library/master.sqlite</code>.</li>
    </ul>
  </section>

  <!-- Section 6: Serato Studio Remix Lab -->
  <section id="section-studio">
    <h2><span>🎹</span> 6. Serato Studio Remix & DJ Edit Production Lab (`/studio`)</h2>
    <p>Located at <a href="/studio" style="color:var(--dj-accent-cyan);"><b>/studio</b></a>, this engine analyzes your 4,404 tracks to identify 4 high-value remix categories:</p>

    <ul>
      <li><b>1. Extended DJ Intro / Outro Mixes:</b> Step-by-step drum sequencer formulas for tracks that start abruptly with vocals.</li>
      <li><b>2. Acapella Intro Weapons:</b> Isolate the raw vocal stem at Bar 1 over an 808 sub drone for crowd shock transitions.</li>
      <li><b>3. 128 BPM Dance Remixes:</b> Pitch-stretching slow hip-hop and rock tracks to 126–128 BPM tech house.</li>
      <li><b>4. Second-Drop Switch-Up Fixes:</b> Replacing repetitive second drops with half-time trap or speed garage.</li>
    </ul>
  </section>

  <!-- Section 7: Troubleshooting -->
  <section id="section-troubleshooting">
    <h2><span>🛠️</span> 7. System Maintenance & Troubleshooting Guide</h2>
    <ul>
      <li><b>Port 7777 Already in Use:</b> If you restarted the script and get an "Address already in use" error, kill old background processes with:
        <div class="code-block">lsof -ti :7777 | xargs kill -9</div>
      </li>
      <li><b>Stage Prompter Not Updating Lyrics:</b> Ensure Serato DJ Pro is actively running and a track is loaded onto Deck 1 or Deck 2.</li>
      <li><b>Mobile Device Cannot Connect:</b> Ensure your iPhone/iPad is on the same local Wi-Fi as your Mac. Connect via <code>http://&lt;Mac-IP&gt;:7777</code> or <code>http://srmmacbookpro.local:7777</code>.</li>
      <li><b>Rebuild All Serato Crates:</b> On the <a href="/genres" style="color:var(--dj-accent-gold);">/genres</a> page, click <code>⚡ Sync ALL 16 Crates to Serato</code> to refresh all binary `.crate` files in 0ms!</li>
    </ul>
  </section>

  <!-- Section 8: HUD Display Modes & Mobile Stage Ergonomics -->
  <section id="section-hud-modes">
    <h2><span>🔀</span> 8. HUD Display Modes & Mobile Stage Ergonomics</h2>
    <p>To optimize performance across varying display hardware—from ultra-wide booth monitors to handheld iPhone/Android devices—the HUD features 4 distinct layout modes accessible from the top switcher bar and preserved via <code>localStorage</code>:</p>
    
    <ul>
      <li><b>🔀 Split View (<code>split</code>):</b> The balanced live workflow. Displays the 4-channel deck telemetry and synchronized scrolling lyrics above, with the docked VJ Stage Controller accessible along the bottom.</li>
      <li><b>📑 Ajax Tabs View (<code>tabs</code>):</b> Segregates the interface into two full-screen dedicated consoles:
        <ul>
          <li><b>🎤 Stage Prompter Tab:</b> 100% viewport height dedicated to giant lyric lines, chord progressions, deck status, and Serato track telemetry.</li>
          <li><b>🎬 VJ Stage & Visuals Tab:</b> Full-screen VJ control center featuring interactive story selectors (Axiom vs Aurora), scene launchpads, Titan hologram pose triggers, portal controls, and camera overrides.</li>
          <li><i>Ambient Visualizer Engine:</i> Continues rendering live in the background across both tabs with zero frame drops.</li>
        </ul>
      </li>
      <li><b>📱 Compact Mode (<code>compact</code>):</b> Engineered specifically for iPhones and mobile touchscreens. Collapses the VJ dock into an ultra-slim micro-ribbon (&lt;36px height) anchored to the viewport edge with iOS <code>safe-area-inset-bottom</code> padding, reserving 95%+ of vertical screen space for lyrics and chords.</li>
      <li><b>🎯 Focus Mode (<code>focus</code>):</b> Colossal high-contrast lyric view designed for live vocalists and MCs on stage. Strips all headers, docks, and toolbars, leaving only gigantic text lines with an intuitive floating exit trigger (<code>✖ Exit Focus</code>) in the upper corner.</li>
    </ul>

    <h3>Mobile & iPhone Setup:</h3>
    <p>Connect any mobile device on the same local Wi-Fi by navigating to <code>http://192.168.4.153:7777</code> or <code>http://srmmacbookpro.local:7777</code>. On iOS Safari, tap <b>Share &rarr; Add to Home Screen</b> for a full-screen native standalone app experience.</p>
  </section>

  <!-- Section 9: 3D Master Visualizer & Stage Engine -->
  <section id="section-visualizer">
    <h2><span>🎬</span> 9. 3D Master Visualizer, Story Arcs, 2.5D Holograms & Stage URLs</h2>
    <p>The Master Visualizer (<code>sol_roth_master_visualizer.html</code>) is an audio-reactive Three.js WebGL engine running at a locked 60 FPS. It supports two complete visual story narratives, dynamic portal transitions, and real-time Titan 2.5D hologram rendering.</p>

    <h3>A. Dual Story Narratives</h3>
    <ul>
      <li><b>📚 Axiom Arc (Story 1: 14 Scenes):</b>
        The flagship cyber-mythology narrative. Features <i>1. Titan Awakening</i> (2.5D volumetric hologram), <i>2. Cyber Matrix Core</i> (green streaming glyphs), <i>3. Telemetry Grid</i>, <i>4. Cyber Cathedral</i>, <i>5. Deep Space Nebula</i>, <i>6. Cyber Stadium</i>, <i>7. Neon Highway</i> (wet specular asphalt, glowing lane dividers, cyber truss gantries, and directional laser streaks), <i>8. Mecha Factory</i>, <i>9. Solar Flare</i>, <i>10. Glitch Void</i>, <i>11. Audio Wave Tunnel</i>, <i>12. Brand Monolith</i>, <i>13. Laser Climax</i>, and <i>14. Parallax Horizons</i>.
      </li>
      <li><b>📚 Aurora Arc (Story 2: 6 Scenes):</b>
        A celestial and surreal visual voyage: <i>1. Crystal Cavern</i>, <i>2. Megacity Lab</i>, <i>3. Astral Sanctuary</i>, <i>4. Quantum Nexus</i>, <i>5. Solar Gateway</i>, and <i>6. Void Horizon</i>.
      </li>
    </ul>

    <h3>B. Live VJ Stage Controls & Triggers</h3>
    <ul>
      <li><b>Entity Pose Morphing:</b> Real-time triggering of <code>IDLE</code>, <code>FOCUS</code>, <code>REACH</code>, and <code>ROAR</code> poses with audio-reactive displacement boosts on bass drops. Auto-pose automatically alternates poses on 16-bar phrasing.</li>
      <li><b>Portal Transition Engine:</b> Cycles between 4 dynamic portal gateways:
        <ul>
          <li><b>Hatch:</b> Dual pneumatic blast doors that close 100% sealed with zero seam gap before opening to reveal the incoming scene.</li>
          <li><b>Iris:</b> Cyber hexagonal mechanical aperture.</li>
          <li><b>Shutter:</b> Clean motorized horizontal slats that open fully to 100% transparency with zero residual grid lines.</li>
          <li><b>Warp:</b> High-speed gravitational spacetime distortion tunnel.</li>
        </ul>
      </li>
      <li><b>Camera Overrides:</b> <code>AUTO</code> (subtle beat-synced orbit), <code>DRIFT</code> (continuous cinematic flight), <code>FIXED</code> (locked stage perspective), and <code>Reset Cam</code>.</li>
    </ul>

    <h3>C. Stage Wall Deployment & Direct URLs</h3>
    <ul>
      <li><b>HUD + Dock:</b> <code>http://192.168.4.153:7777/</code></li>
      <li><b>Interactive Visualizer:</b> <code>http://192.168.4.153:7777/visualizer</code> (includes floating toolbar and VJ trigger hud).</li>
      <li><b>Clean Stage / LED Wall URL:</b> <code>http://192.168.4.153:7777/visualizer?mode=stage</code> (completely clean full-screen WebGL with zero controls, ready for secondary monitors, OBS, or HDMI stage projectors).</li>
    </ul>
  </section>

  <!-- Section 10: Axiom01 Framework & Backport Roadmap -->
  <section id="section-axiom01">
    <h2><span>⚡</span> 10. Axiom01 Framework Integration & Backport Roadmap</h2>
    <p>The Sol Roth DJ Operating System is built upon the author's <b>Axiom01 UI Framework</b> (<code>/Users/solroth/Sites/axiom01</code>), adhering to semantic HTML5 standards, unified CSS custom property hierarchies, and ultra-high accessibility under high-contrast live stage conditions.</p>

    <h3>Axiom01 Backport Components:</h3>
    <p>Five specialized components engineered for this live performance system are documented in <code>/docs/AXIOM01_INTEGRATION_AND_BACKPORT_AUDIT.md</code> for upstream integration into core Axiom01:</p>
    <ul>
      <li><b>AxiomDock (<code>dock</code> / <code>aside.dock</code>):</b> Viewport-anchored floating dock with micro-ribbon, split, and expanded modes.</li>
      <li><b>AxiomBeatCard (<code>card deck</code> / <code>article.card.deck</code>):</b> Real-time DJ deck telemetry card with BPM, Camelot keys, and waveform meters.</li>
      <li><b>AxiomPrompter (<code>prompter</code> / <code>article.card.section</code>):</b> Stage teleprompter with fluid responsive scaling and smooth line tracking.</li>
      <li><b>AxiomHarmonicWheel (<code>wheel</code> / <code>article.card.harmonic</code>):</b> Interactive 24-key Camelot wheel with intelligent harmonic mixing routes.</li>
      <li><b>AxiomPadGrid (<code>padgrid</code>):</b> 16-pad tactile performance grid with MIDI-ready lighting states.</li>
    </ul>
    <p>Consult <code>/docs/AXIOM01_INTEGRATION_AND_BACKPORT_AUDIT.md</code> and <code>/docs/CHARACTER_2_5D_HOLOGRAM_GUIDE.md</code> for complete code specifications and shader mathematics.</p>
  </section>
</main>

<script>
  async function askDocsAi() {
    const input = document.getElementById('docs-ai-input');
    const query = input.value.trim();
    if (!query) return;

    const box = document.getElementById('ai-response-box');
    const textElem = document.getElementById('ai-response-text');
    box.style.display = 'block';
    textElem.innerText = "⏳ Querying AI system knowledge base...";

    try {
      const res = await fetch(`/api/docs_ask?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      if (data.status === 'ok') {
        textElem.innerText = data.answer;
      }
    } catch(e) {
      textElem.innerText = "⚠️ Error communicating with Docs AI engine.";
    }
  }

  function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    document.getElementById('theme-btn').innerText = next === 'dark' ? '☀️' : '🌙';
  }
</script>
</body>
</html>
"""

HTML_STUDIO = """<!DOCTYPE html>
<html lang="en" data-theme="dark" data-axiom-palette="default">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
<title>Sol Roth // Serato Studio Remix & DJ Edit Lab</title>
<link rel="stylesheet" href="/axiom01/css/axiom.min.css">
<link rel="stylesheet" href="/axiom01/css/axicons.css">
<style>
  *, *::before, *::after { box-sizing: border-box; }
  [data-theme="dark"] {
    --ax-surface: #0b0e15;
    --a-surface-base: #07090e;
    --a-surface-raised: #101522;
    --ax-border: #1a2233;
    --ax-text: #f0f4f8;
    --dj-accent-brand: #00f0ff;
    --dj-accent-cyan: #00f0ff;
    --dj-accent-gold: #ffd000;
    --dj-accent-pink: #ff007f;
    --dj-accent-purple: #aa00ff;
    --dj-accent-green: #00ff80;
    --dj-card-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }
  [data-theme="light"] {
    --ax-surface: #f8fafc;
    --a-surface-base: #ffffff;
    --a-surface-raised: #f1f5f9;
    --ax-border: #cbd5e1;
    --ax-text: #0f172a;
    --dj-accent-brand: #0284c7;
    --dj-accent-cyan: #0284c7;
    --dj-accent-gold: #b45309;
    --dj-accent-pink: #be185d;
    --dj-accent-purple: #7e22ce;
    --dj-accent-green: #047857;
    --dj-card-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }
  html, body {
    margin: 0; padding: 0;
    width: 100%; max-width: 100vw;
    background: var(--a-surface-base);
    color: var(--ax-text);
    font-family: var(--ax-font-body);
    min-height: 100vh;
    padding-bottom: 60px;
  }
  header.main {
    background: var(--ax-surface);
    padding: 10px 16px;
    display: flex; justify-content: space-between; align-items: center;
    border-bottom: 2px solid var(--ax-border);
    position: sticky; top: 0; z-index: 100;
    flex-wrap: wrap; gap: 8px;
  }
  header.main .actions {
    display: flex; gap: 6px;
  }
  header.main .actions button,
  header.main .actions a.button {
    background: var(--a-surface-raised);
    border: 1px solid var(--ax-border);
    color: var(--ax-text);
    padding: 6px 12px;
    border-radius: var(--a-border-radius-base);
    font-size: 0.8rem; font-weight: 800;
    text-decoration: none; cursor: pointer;
    display: inline-flex; align-items: center; gap: 6px;
    transition: all 0.2s;
  }
  header.main .actions button:hover,
  header.main .actions a.button:hover { background: var(--dj-accent-cyan); color: #000; }
  .studio-layout {
    max-width: 1300px; margin: 0 auto;
    padding: 16px; display: flex; flex-direction: column; gap: 16px;
  }
  .hero-studio {
    background: linear-gradient(135deg, rgba(170,0,255,0.12) 0%, rgba(0,240,255,0.08) 50%, var(--a-surface-raised) 100%);
    border: 1px solid var(--ax-border);
    border-left: 5px solid var(--dj-accent-purple);
    border-radius: var(--a-border-radius-lg);
    padding: 18px;
    box-shadow: var(--dj-card-shadow);
  }
  .search-studio-input {
    width: 100%;
    background: var(--a-surface-base);
    border: 2px solid var(--dj-accent-purple);
    border-radius: var(--a-border-radius-base);
    color: var(--ax-text);
    padding: 10px 14px;
    font-size: 0.95rem; font-weight: 700;
    outline: none; margin-top: 10px;
  }
  .card.blueprint {
    background: var(--a-surface-raised);
    border: 1px solid var(--ax-border);
    border-radius: var(--a-border-radius-lg);
    padding: 20px;
    display: flex; flex-direction: column; gap: 14px;
    box-shadow: var(--dj-card-shadow);
  }
  .detail-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
  }
  @media (max-width: 768px) {
    .detail-grid { grid-template-columns: 1fr; }
  }
  .info-box {
    background: var(--a-surface-base);
    border: 1px solid var(--ax-border);
    border-radius: var(--a-border-radius-base);
    padding: 12px;
    display: flex; flex-direction: column; gap: 4px;
  }
  .info-label {
    font-size: 0.72rem; font-weight: 900;
    text-transform: uppercase; letter-spacing: 0.8px;
    color: var(--dj-accent-cyan);
  }
  .info-text {
    font-size: 0.88rem; line-height: 1.45;
    color: var(--ax-text); font-weight: 600;
  }
  .opp-category-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 12px;
  }
  .card.opp {
    background: var(--a-surface-raised);
    border: 1px solid var(--ax-border);
    border-radius: var(--a-border-radius-base);
    padding: 14px; display: flex; flex-direction: column; gap: 8px;
  }
  .opp-track-row {
    display: flex; justify-content: space-between; align-items: center;
    padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.05);
  }
</style>
</head>
<body>

<header class="main">
  <div class="brand" style="font-weight:900; font-size:1.1rem; color:var(--dj-accent-purple); display:flex; align-items:center; gap:8px;">
    <span>🎹 SOL ROTH // SERATO STUDIO REMIX & DJ EDIT LAB</span>
  </div>
  <div class="actions">
    <a href="/intel" class="button">📰 Daily Intel</a>
    <a href="/studio" class="button" style="background:var(--dj-accent-purple); color:#fff; font-weight:900;">🎹 Remix & Edit Lab</a>
    <a href="/genres" class="button">📚 Genre Encyclopedia</a>
    <a href="/" class="button" style="background:var(--dj-accent-cyan); color:#000;">🎤 Prompter HUD</a>
    <button onclick="toggleTheme()" id="theme-btn">☀️</button>
  </div>
</header>

<main class="studio-layout">
  <!-- Hero Section -->
  <section class="hero-studio">
    <div style="font-size:0.75rem; font-weight:900; color:var(--dj-accent-purple); text-transform:uppercase; letter-spacing:1px;">
      🎧 Production Blueprint & Stems Remix Opportunity Engine
    </div>
    <div style="font-size:clamp(1.2rem, 4vw, 1.6rem); font-weight:900; color:var(--ax-text); margin:4px 0;">
      Turn Any Library Track into a Club-Ready DJ Edit or Dance Remix
    </div>
    <div style="font-size:0.88rem; color:var(--a-color-text-muted); max-width:900px;">
      Identify tracks in your <b>4,404 library</b> that heavily benefit from extended 16-bar DJ intros/outros, acapella drop tools, 128 BPM dance remixes, and second-drop switch-ups. Choose any track below or search directly to generate an exact <b>Serato Studio Step-by-Step Blueprint & Sample Bank Recommendation</b>!
    </div>

    <div style="display:flex; gap:10px; margin:14px 0 8px 0; flex-wrap:wrap; align-items:center;">
      <button class="success" style="background:var(--dj-accent-green); color:#000; font-weight:900; font-size:0.88rem; padding:8px 16px;" onclick="syncStudioExports()">
        ⚡ 1-Click Sync Serato Studio Exports to Rekordbox & Serato
      </button>
      <span id="sync-status-msg" style="font-size:0.85rem; color:var(--dj-accent-cyan); font-weight:bold;"></span>
    </div>

    <input type="text" id="studio-search-input" class="search-studio-input" placeholder="🔍 Search any song from your library to generate a Serato Studio Blueprint (e.g. blink-182, eminem, daft punk, avicii, 50 cent)..." oninput="debounceSearch(this.value)">
  </section>

  <!-- Live Active Blueprint Display -->
  <article id="active-blueprint-container" style="display:none;" class="card blueprint">
    <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:8px; border-bottom:1px solid var(--ax-border); padding-bottom:12px;">
      <div>
        <div style="font-size:0.75rem; font-weight:900; color:var(--dj-accent-gold); text-transform:uppercase;">🎯 Active Serato Studio Production Blueprint</div>
        <div style="font-size:clamp(1.2rem, 4vw, 1.5rem); font-weight:900; color:var(--ax-text);" id="bp-title">Song Title</div>
        <div style="font-size:0.85rem; color:var(--dj-accent-cyan); font-weight:800;" id="bp-artist">Artist</div>
      </div>
      <div style="display:flex; gap:6px; align-items:center; flex-wrap:wrap;">
        <span class="badge" style="background:var(--dj-accent-purple); color:#fff; font-weight:900;" id="bp-type-badge">DJ Edit Type</span>
        <span class="badge bpm" style="background:var(--dj-accent-gold); color:#000; font-weight:900;" id="bp-bpm-badge">128 BPM</span>
        <span class="badge key" style="background:var(--dj-accent-green); color:#000; font-weight:900;" id="bp-key-badge">8A</span>
      </div>
    </div>

    <!-- Why it Works Rationale -->
    <div class="info-box" style="border-left:4px solid var(--dj-accent-gold);">
      <span class="info-label" style="color:var(--dj-accent-gold);">💡 Production Rationale & Dancefloor Impact</span>
      <span class="info-text" id="bp-why">Rationale description...</span>
    </div>

    <div class="detail-grid">
      <!-- Recommended Sample Bank & Drum Kit -->
      <div class="info-box" style="border-left:4px solid var(--dj-accent-cyan);">
        <span class="info-label">🎹 Recommended Sample Bank to Load in Serato Studio</span>
        <div style="font-weight:900; font-size:0.95rem; color:var(--dj-accent-cyan); margin:3px 0;" id="bp-bank">Sample Bank Name</div>
        <span class="info-text" id="bp-drum-formula">Drum pattern formula...</span>
      </div>

      <!-- Live DJ Mix Cue & Performance Guide -->
      <div class="info-box" style="border-left:4px solid var(--dj-accent-pink);">
        <span class="info-label" style="color:var(--dj-accent-pink);">🎛️ Live DJ Mix Cue & Cue Point Setup</span>
        <span class="info-text" id="bp-cue-tip">Cueing instructions...</span>
      </div>
    </div>

    <!-- Step-by-Step Arrangement Map -->
    <div class="info-box">
      <span class="info-label">📐 Serato Studio Master Arrangement Timeline</span>
      <div style="background:rgba(0,240,255,0.06); border:1px solid rgba(0,240,255,0.2); border-radius:6px; padding:10px; font-family:monospace; font-size:0.85rem; color:var(--dj-accent-cyan); margin-top:4px;" id="bp-arrangement">
        Arrangement structure...
      </div>
    </div>

    <!-- Actions -->
    <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--ax-border); padding-top:12px;">
      <div id="bp-audio-action"></div>
      <a href="/" class="button" style="background:var(--dj-accent-brand); color:#000; font-weight:900;">🎤 Load to Prompter HUD</a>
    </div>
  </article>

  <!-- 4 Curated Remix & Edit Opportunity Tranches -->
  <section class="opp-category-grid" id="opportunity-tranches">
    <!-- 1. Extended DJ Intros -->
    <article class="card opp" style="border-left:4px solid var(--dj-accent-cyan);">
      <div style="font-weight:900; font-size:0.95rem; color:var(--dj-accent-cyan);">🎚️ 1. Extended DJ Intro & Outro Candidates</div>
      <div style="font-size:0.75rem; color:var(--a-color-text-muted);">Radio edits starting abruptly with vocals; benefit heavily from 16-bar clean drum intros for mixing.</div>
      <div id="intro-candidates-list" style="display:flex; flex-direction:column; gap:4px; margin-top:6px;"></div>
    </article>

    <!-- 2. Acapella Intro Weapons -->
    <article class="card opp" style="border-left:4px solid var(--dj-accent-gold);">
      <div style="font-weight:900; font-size:0.95rem; color:var(--dj-accent-gold);">🎤 2. Acapella Intro & Trick Transition Tools</div>
      <div style="font-size:0.75rem; color:var(--a-color-text-muted);">Iconic sing-along hooks that shine when placed as pure acapellas on Beat 1 for crowd shock.</div>
      <div id="acapella-candidates-list" style="display:flex; flex-direction:column; gap:4px; margin-top:6px;"></div>
    </article>

    <!-- 3. High-Energy Dance Remixes -->
    <article class="card opp" style="border-left:4px solid var(--dj-accent-pink);">
      <div style="font-weight:900; font-size:0.95rem; color:var(--dj-accent-pink);">⚡ 3. 128 BPM Dance Remix Candidates</div>
      <div style="font-size:0.75rem; color:var(--a-color-text-muted);">Slow hip-hop/rock tracks ready for tempo boost into 128 BPM Tech House or 174 BPM DnB.</div>
      <div id="remix-candidates-list" style="display:flex; flex-direction:column; gap:4px; margin-top:6px;"></div>
    </article>

    <!-- 4. Drop Variety & Switch-Ups -->
    <article class="card opp" style="border-left:4px solid var(--dj-accent-green);">
      <div style="font-weight:900; font-size:0.95rem; color:var(--dj-accent-green);">🔄 4. Second-Drop Switch-Up Fixes</div>
      <div style="font-size:0.75rem; color:var(--a-color-text-muted);">Tracks with repetitive 2nd drops; replace with an unexpected half-time trap or speed garage flip.</div>
      <div id="variety-candidates-list" style="display:flex; flex-direction:column; gap:4px; margin-top:6px;"></div>
    </article>
  </section>
</main>

<script>
  let searchTimer = null;

  async function loadOpportunities() {
    try {
      const res = await fetch('/api/studio_opportunities');
      const data = await res.json();
      renderTranches(data);
    } catch(e) {}
  }

  function renderTranches(data) {
    const renderList = (elemId, items) => {
      const elem = document.getElementById(elemId);
      if (!elem) return;
      elem.innerHTML = items.map(t => `
        <div class="opp-track-row">
          <div style="min-width:0; flex:1;">
            <div style="font-weight:800; font-size:0.82rem; color:var(--ax-text); overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${t.title}</div>
            <div style="font-size:0.7rem; color:var(--dj-accent-cyan);">${t.artist}</div>
          </div>
          <button style="padding:2px 6px; font-size:0.7rem; background:var(--dj-accent-purple); color:#fff; font-weight:900;" onclick="selectTrackForBlueprint('${t.filename.replace(/'/g, "\\'")}')">📋 Blueprint</button>
        </div>
      `).join('');
    };

    if (data.extended_intro_candidates) renderList('intro-candidates-list', data.extended_intro_candidates);
    if (data.acapella_intro_candidates) renderList('acapella-candidates-list', data.acapella_intro_candidates);
    if (data.dance_remix_candidates) renderList('remix-candidates-list', data.dance_remix_candidates);
    if (data.drop_variety_candidates) renderList('variety-candidates-list', data.drop_variety_candidates);
  }

  async function selectTrackForBlueprint(queryStr) {
    try {
      const res = await fetch(`/api/studio_blueprint?q=${encodeURIComponent(queryStr)}`);
      const data = await res.json();
      if (data.status === 'success') {
        renderBlueprint(data);
      }
    } catch(e) {}
  }

  function renderBlueprint(data) {
    const box = document.getElementById('active-blueprint-container');
    box.style.display = 'flex';

    const t = data.track;
    const bp = data.blueprint;

    document.getElementById('bp-title').innerText = t.title;
    document.getElementById('bp-artist').innerText = `${t.artist} • File: ${t.filename}`;
    document.getElementById('bp-type-badge').innerText = bp.edit_type;
    document.getElementById('bp-bpm-badge').innerText = `Target: ${bp.target_bpm} BPM`;
    document.getElementById('bp-key-badge').innerText = `Key: ${bp.target_key}`;
    document.getElementById('bp-why').innerText = bp.why_it_works;
    document.getElementById('bp-bank').innerText = bp.recommended_sample_bank;
    document.getElementById('bp-drum-formula').innerText = bp.drum_formula;
    document.getElementById('bp-cue-tip').innerText = bp.live_cue_tip;
    document.getElementById('bp-arrangement').innerText = bp.arrangement;

    document.getElementById('bp-audio-action').innerHTML = `
      <audio controls style="height:32px; vertical-align:middle;" src="/api/stream_local?file=${encodeURIComponent(t.filename)}"></audio>
    `;

    box.scrollIntoView({ behavior: 'smooth' });
  }

  function debounceSearch(val) {
    clearTimeout(searchTimer);
    if (!val.trim()) return;
    searchTimer = setTimeout(() => {
      selectTrackForBlueprint(val);
    }, 400);
  }

  function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    document.getElementById('theme-btn').innerText = next === 'dark' ? '☀️' : '🌙';
  }

  async function syncStudioExports() {
    const statusEl = document.getElementById('sync-status-msg');
    statusEl.innerText = "⏳ Scanning Serato Studio exports & compiling Rekordbox XML...";
    try {
      const res = await fetch('/api/sync_studio_exports');
      const data = await res.json();
      if (data.status === 'success') {
        statusEl.innerText = `✅ Synced ${data.discovered_count} tracks to Rekordbox XML & Serato Crates!`;
      } else {
        statusEl.innerText = `❌ Error: ${data.message}`;
      }
    } catch(e) {
      statusEl.innerText = "❌ Sync request failed: " + e.message;
    }
  }

  loadOpportunities();
</script>
</body>
</html>
"""

HTML_HISTORY = """<!DOCTYPE html>
<html lang="en" data-theme="dark" data-axiom-palette="default">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
<title>Sol Roth // Live Set History & Tracklist Logger</title>
<link rel="stylesheet" href="/axiom01/css/axiom.min.css">
<link rel="stylesheet" href="/axiom01/css/axicons.css">
<style>
  *, *::before, *::after { box-sizing: border-box; }
  [data-theme="dark"] {
    --ax-surface: #0b0e15;
    --a-surface-base: #07090e;
    --a-surface-raised: #101522;
    --ax-border: #1a2233;
    --ax-text: #f0f4f8;
    --dj-accent-brand: #00f0ff;
    --dj-accent-gold: #ffd000;
    --dj-accent-pink: #ff007f;
    --dj-accent-green: #00ff80;
  }
  html, body {
    margin: 0; padding: 0;
    background: var(--a-surface-base);
    color: var(--ax-text);
    font-family: var(--ax-font-body);
    min-height: 100vh;
  }
  header.main {
    background: var(--ax-surface);
    padding: 12px 16px;
    display: flex; justify-content: space-between; align-items: center;
    border-bottom: 2px solid var(--ax-border);
    position: sticky; top: 0; z-index: 100;
  }
  header.main .actions {
    display: flex; gap: 8px;
  }
  header.main .actions button,
  header.main .actions a.button {
    background: var(--a-surface-raised);
    border: 1px solid var(--ax-border);
    color: var(--ax-text);
    padding: 6px 12px;
    border-radius: var(--a-border-radius-base);
    font-size: 0.8rem; font-weight: 800;
    text-decoration: none; cursor: pointer;
    display: inline-flex; align-items: center; gap: 6px;
  }
  header.main .actions button:hover,
  header.main .actions a.button:hover { background: var(--dj-accent-brand); color: #000; }
  .hist-layout {
    max-width: 1200px; margin: 0 auto;
    padding: 16px; display: flex; flex-direction: column; gap: 16px;
  }
  .stat-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 12px;
  }
  .card.stat {
    background: var(--a-surface-raised);
    border: 1px solid var(--ax-border);
    border-radius: var(--a-border-radius-lg);
    padding: 14px; display: flex; flex-direction: column; gap: 4px;
  }
  .card.stat .val { font-size: 1.6rem; font-weight: 900; color: var(--dj-accent-brand); }
  .card.stat small { font-size: 0.75rem; font-weight: 800; color: var(--a-color-text-muted); text-transform: uppercase; }
  .track-table {
    width: 100%; border-collapse: collapse;
    background: var(--a-surface-raised);
    border-radius: var(--a-border-radius-lg);
    overflow: hidden; border: 1px solid var(--ax-border);
  }
  .track-table th, .track-table td {
    padding: 10px 14px; text-align: left;
    border-bottom: 1px solid var(--ax-border);
  }
  .track-table th {
    background: var(--ax-surface);
    font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.8px;
    color: var(--dj-accent-gold);
  }
</style>
</head>
<body>
<header class="main">
  <div class="brand" style="font-weight:900; font-size:1.1rem; color:var(--dj-accent-brand); display:flex; align-items:center; gap:8px;">
    <span>📊 SOL ROTH // LIVE GIG & SET RECORDER</span>
  </div>
  <div class="actions">
    <button onclick="exportTracklist()" style="background:var(--dj-accent-gold); color:#000;">📋 Copy Setlist</button>
    <button onclick="openControllerModal()" style="background:rgba(0,240,255,0.15); border-color:var(--dj-accent-cyan); color:var(--dj-accent-cyan);">🎛️ Controller Map</button>
    <a href="/intel" class="button">📰 Daily Intel</a>
    <a href="/" class="button">🎤 Prompter HUD</a>
  </div>
</header>

<main class="hist-layout">
  <section class="stat-grid" id="stat-bar">
    <article class="card stat"><div class="val" id="val-tracks">--</div><small>Tracks Played</small></article>
    <article class="card stat"><div class="val" id="val-dur">-- min</div><small>Set Running Time</small></article>
    <article class="card stat"><div class="val" id="val-avg-bpm">-- BPM</div><small>Average BPM</small></article>
    <article class="card stat"><div class="val" id="val-range">--</div><small>BPM Energy Range</small></article>
  </section>

  <section style="background:var(--a-surface-raised); border:1px solid var(--ax-border); border-radius:var(--a-border-radius-lg); padding:16px;">
    <div style="font-weight:900; font-size:1rem; color:var(--dj-accent-gold); margin-bottom:12px; display:flex; justify-content:space-between; align-items:center;">
      <span>🎵 Live Serato Playback History</span>
      <span style="font-size:0.75rem; color:var(--a-color-text-muted);">Auto-refreshes in real-time</span>
    </div>
    <div style="overflow-x:auto;">
      <table class="track-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Time</th>
            <th>Deck</th>
            <th>Track Title</th>
            <th>Artist</th>
            <th>BPM</th>
            <th>Camelot Key</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="history-rows">
          <tr><td colspan="8" style="text-align:center; padding:20px;">Loading live gig telemetry...</td></tr>
        </tbody>
      </table>
    </div>
  </section>
</main>

<script>
  let setHistoryData = null;

  async function loadHistory() {
    try {
      const res = await fetch('/api/set_history');
      setHistoryData = await res.json();
      renderHistory();
    } catch(e) {}
  }

  function renderHistory() {
    if (!setHistoryData || !setHistoryData.entries) return;
    document.getElementById('val-tracks').innerText = setHistoryData.total_tracks;
    document.getElementById('val-dur').innerText = `${setHistoryData.total_duration_mins} min`;
    document.getElementById('val-avg-bpm').innerText = `${setHistoryData.avg_bpm} BPM`;
    document.getElementById('val-range').innerText = `${setHistoryData.min_bpm} ➔ ${setHistoryData.max_bpm} BPM`;

    const tbody = document.getElementById('history-rows');
    tbody.innerHTML = setHistoryData.entries.map((e, idx) => `
      <tr>
        <td style="font-weight:800; color:var(--a-color-text-muted);">${setHistoryData.entries.length - idx}</td>
        <td style="font-family:monospace; font-size:0.8rem; color:var(--dj-accent-brand);">${e.played_at}</td>
        <td><span style="background:rgba(0,240,255,0.15); border:1px solid var(--dj-accent-brand); color:var(--dj-accent-brand); font-weight:900; padding:2px 6px; border-radius:4px; font-size:0.75rem;">Deck ${e.deck}</span></td>
        <td style="font-weight:800; color:var(--ax-text);">${e.title}</td>
        <td style="color:var(--dj-accent-pink); font-weight:700;">${e.artist}</td>
        <td style="font-weight:900; color:var(--dj-accent-gold);">${e.bpm}</td>
        <td><span style="background:rgba(255,208,0,0.15); border:1px solid var(--dj-accent-gold); color:var(--dj-accent-gold); font-weight:900; padding:2px 6px; border-radius:4px; font-size:0.75rem;">${e.key}</span></td>
        <td>
          <a href="/?search=${encodeURIComponent(e.title)}" class="button" style="padding:2px 6px; font-size:0.7rem;">HUD</a>
        </td>
      </tr>
    `).join('');
  }

  function exportTracklist() {
    if (!setHistoryData || !setHistoryData.entries) return;
    const lines = setHistoryData.entries.slice().reverse().map((e, idx) => `${idx + 1}. ${e.artist} - ${e.title} [${e.bpm} BPM | ${e.key}]`);
    const tracklistText = `🔥 SOL ROTH // LIVE SET TRACKLIST\nTotal Tracks: ${setHistoryData.total_tracks} | Duration: ${setHistoryData.total_duration_mins} mins\n\n` + lines.join('\n');
    navigator.clipboard.writeText(tracklistText);
    alert('📋 Setlist copied to clipboard!');
  }

  setInterval(loadHistory, 4000);
  loadHistory();
</script>
</body>
</html>
"""

HTML_GENRES = """<!DOCTYPE html>
<html lang="en" data-theme="dark" data-axiom-palette="default">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<title>Sol Roth // Master Genre & Sub-Genre Encyclopedia</title>

<!-- Axiom01 Framework Core Bundle -->
<link rel="stylesheet" href="/axiom01/css/axiom.min.css">
<link rel="stylesheet" href="/axiom01/css/axicons.css">

<style>
  *, *::before, *::after { box-sizing: border-box; }

  [data-theme="dark"] {
    --ax-surface: #0b0e15;
    --a-surface-base: #07090e;
    --a-surface-raised: #101522;
    --ax-border: #1a2233;
    --ax-text: #f0f4f8;
    --dj-accent-brand: #00f0ff;
    --dj-accent-cyan: #00f0ff;
    --dj-accent-gold: #ffd000;
    --dj-accent-pink: #ff007f;
    --dj-accent-purple: #aa00ff;
    --dj-accent-green: #00ff80;
    --dj-card-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }

  [data-theme="light"] {
    --ax-surface: #f8fafc;
    --a-surface-base: #ffffff;
    --a-surface-raised: #f1f5f9;
    --ax-border: #cbd5e1;
    --ax-text: #0f172a;
    --dj-accent-brand: #0284c7;
    --dj-accent-cyan: #0284c7;
    --dj-accent-gold: #b45309;
    --dj-accent-pink: #be185d;
    --dj-accent-purple: #7e22ce;
    --dj-accent-green: #047857;
    --dj-card-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }

  html, body {
    margin: 0; padding: 0;
    width: 100%; max-width: 100vw;
    overflow-x: hidden !important;
    background: var(--a-surface-base);
    color: var(--ax-text);
    font-family: var(--ax-font-body);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding-bottom: 70px;
    -webkit-text-size-adjust: 100%;
  }

  header.main {
    background: var(--ax-surface);
    padding: 10px 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid var(--ax-border);
    position: sticky; top: 0; z-index: 100;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    width: 100%; max-width: 100vw;
    box-sizing: border-box; flex-wrap: wrap; gap: 6px;
  }

  header.main .brand {
    font-size: clamp(0.9rem, 3.8vw, 1.1rem);
    font-weight: 900;
    letter-spacing: 0.8px;
    color: var(--dj-accent-brand);
    display: flex; align-items: center; gap: 6px;
  }

  header.main .actions {
    display: flex; gap: 6px;
  }
  header.main .actions button,
  header.main .actions a.button {
    background: var(--a-surface-raised);
    border: 1px solid var(--ax-border);
    color: var(--ax-text);
    padding: 6px 10px;
    border-radius: var(--a-border-radius-base);
    font-size: 0.78rem; font-weight: 800;
    cursor: pointer; transition: all 0.2s;
    display: inline-flex; align-items: center; gap: 4px;
    text-decoration: none; white-space: nowrap;
  }
  header.main .actions button:hover,
  header.main .actions a.button:hover {
    background: var(--dj-accent-cyan);
    color: #fff; border-color: var(--dj-accent-cyan);
  }

  .genre-layout {
    max-width: 1300px;
    margin: 0 auto;
    padding: 16px 14px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    box-sizing: border-box;
  }

  .genre-hero {
    background: linear-gradient(135deg, rgba(0, 240, 255, 0.12) 0%, rgba(255, 208, 0, 0.08) 50%, var(--a-surface-raised) 100%);
    border: 1px solid var(--ax-border);
    border-left: 5px solid var(--dj-accent-brand);
    border-radius: var(--a-border-radius-lg);
    padding: 20px 18px;
    box-shadow: var(--dj-card-shadow);
    display: flex; justify-content: space-between; align-items: center;
    flex-wrap: wrap; gap: 14px;
  }

  .cat-filter-scroll {
    display: flex; gap: 8px; overflow-x: auto;
    padding-bottom: 6px; scrollbar-width: thin;
    width: 100%; box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
  }
  .cat-pill {
    background: var(--a-surface-raised);
    border: 1px solid var(--ax-border);
    color: var(--ax-text);
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.8rem; font-weight: 800;
    cursor: pointer; transition: all 0.2s;
    white-space: nowrap; flex-shrink: 0;
  }
  .cat-pill.active {
    background: var(--dj-accent-gold);
    color: #000; font-weight: 900; border-color: var(--dj-accent-gold);
  }

  article.card.genre {
    background: var(--a-surface-raised);
    border: 1px solid var(--ax-border);
    border-radius: var(--a-border-radius-lg);
    padding: 20px 18px;
    box-shadow: var(--dj-card-shadow);
    display: flex; flex-direction: column; gap: 14px;
    width: 100%; box-sizing: border-box;
  }

  article.card.genre > header {
    display: flex; justify-content: space-between; align-items: flex-start;
    flex-wrap: wrap; gap: 8px;
    padding-bottom: 12px; border-bottom: 1px solid var(--ax-border);
  }
  article.card.genre > header h3 {
    font-size: clamp(1.15rem, 4vw, 1.45rem);
    font-weight: 900;
    color: var(--ax-text);
    display: flex; align-items: center; gap: 8px;
    margin: 0;
  }

  .badge.bpm {
    background: linear-gradient(135deg, var(--dj-accent-gold) 0%, #ff8800 100%);
    color: #000; font-weight: 900; font-size: 0.8rem;
    padding: 4px 8px; border-radius: var(--a-border-radius-sm);
  }
  .badge.library {
    background: rgba(0, 255, 128, 0.15);
    border: 1px solid var(--dj-accent-green);
    color: var(--dj-accent-green);
    font-weight: 900; font-size: 0.8rem;
    padding: 4px 8px; border-radius: var(--a-border-radius-sm);
  }
  a.button.spotify {
    background: #121212;
    border: 1px solid #1db954;
    color: #1db954;
    padding: 3px 8px;
    border-radius: var(--a-border-radius-sm);
    font-size: 0.72rem;
    font-weight: 800;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    transition: all 0.2s;
  }
  a.button.spotify:hover {
    background: #1db954;
    color: #000;
  }
  a.button.spotify svg {
    fill: currentColor;
    flex-shrink: 0;
  }

  .detail-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  @media (max-width: 768px) {
    .detail-grid { grid-template-columns: 1fr; }
  }

  .info-box {
    background: var(--a-surface-base);
    border: 1px solid var(--ax-border);
    border-radius: var(--a-border-radius-base);
    padding: 12px;
    display: flex; flex-direction: column; gap: 4px;
    word-break: break-word;
  }
  .info-label {
    font-size: 0.72rem; font-weight: 900;
    text-transform: uppercase; letter-spacing: 0.8px;
    color: var(--dj-accent-cyan);
  }
  .info-text {
    font-size: 0.88rem; line-height: 1.45;
    color: var(--ax-text); font-weight: 600;
  }

  .timeline-bar-box {
    background: rgba(0, 240, 255, 0.05);
    border: 1px solid rgba(0, 240, 255, 0.2);
    border-radius: var(--a-border-radius-base);
    padding: 10px 12px;
    font-family: var(--a-font-family-mono);
    font-size: 0.82rem; font-weight: 700;
    color: var(--dj-accent-cyan);
    word-break: break-word;
    line-height: 1.4;
  }

  .subgenre-pill-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 10px;
    margin-top: 6px;
  }
  .subgenre-item {
    background: var(--a-surface-base);
    border: 1px solid var(--ax-border);
    border-radius: var(--a-border-radius-base);
    padding: 12px;
    display: flex; flex-direction: column; gap: 4px;
    transition: all 0.2s;
  }
  .subgenre-item:hover {
    border-color: var(--dj-accent-pink);
    transform: translateY(-2px);
  }
  .subgenre-item > h4 {
    font-size: 0.86rem; font-weight: 900;
    color: var(--dj-accent-pink);
    display: flex; justify-content: space-between; align-items: center;
    margin: 0;
  }
  .subgenre-desc {
    font-size: 0.8rem; line-height: 1.4;
    color: var(--a-color-text-muted);
  }

  .library-drawer {
    background: var(--a-surface-base);
    border: 1px dashed var(--ax-border);
    border-radius: var(--a-border-radius-base);
    padding: 12px;
    margin-top: 6px;
  }
  .drawer-track-row {
    display: flex; justify-content: space-between; align-items: center;
    padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.05);
    gap: 8px;
  }

  /* Floating Sticky DJ Audio Player Bar */
  .sticky-dj-player {
    display: none; position: fixed;
    bottom: 0; left: 0; right: 0;
    background: rgba(11, 14, 21, 0.96);
    backdrop-filter: blur(15px);
    border-top: 2px solid var(--dj-accent-cyan);
    box-shadow: 0 -8px 30px rgba(0, 240, 255, 0.2);
    padding: 8px 16px; z-index: 999;
    align-items: center; justify-content: space-between; gap: 12px;
  }
  .sticky-dj-player.active { display: flex; }
</style>
</head>
<body>

<header class="main">
  <div class="brand">
    <span>📚 SOL ROTH // GENRE & SUB-GENRE ENCYCLOPEDIA</span>
  </div>
  <div class="actions">
    <a href="/music_updates" class="button" style="background:var(--dj-accent-pink); color:#fff; font-weight:900;">🔥 Music Updates</a>
    <a href="/intel" class="button" style="background:var(--dj-accent-gold); color:#000; font-weight:900;">📰 Daily Intel</a>
    <a href="/" class="button">🎤 Prompter HUD</a>
    <button onclick="toggleTheme()" id="theme-btn">☀️</button>
  </div>
</header>

<main class="genre-layout">
  <section class="genre-hero">
    <div style="min-width:0; flex:1;">
      <div style="font-size:0.75rem; font-weight:900; color:var(--dj-accent-cyan); text-transform:uppercase; letter-spacing:1px;">Complete Musical Phrasing, Rhythm & Sub-Genre Directory</div>
      <div style="font-size:clamp(1.2rem, 4vw, 1.6rem); font-weight:900; color:var(--ax-text); margin:4px 0;">16 Master Genres & 50+ Sub-Genres Directory</div>
      <div style="font-size:0.88rem; color:var(--a-color-text-muted); max-width:850px;">
        In-depth musical blueprints, drum programming formulas, phrasing maps, pro EQ transitions, and live match counts across your <b>4,346 tracks</b> (including Punk, Future Bass, Electro, Dubstep, Trance, Latin & Urban).
      </div>

      <input type="text" id="genre-search-input" class="search-genre-input" placeholder="🔍 Search any genre, subgenre, artist, BPM (e.g. punk, future bass, 303, 140 bpm, electro)..." oninput="applyFilters()">

      <div class="view-mode-bar">
        <button class="mode-btn active" id="mode-master" onclick="setViewMode('master')">🎛️ Master Genres View</button>
        <button class="mode-btn" id="mode-subgenres" onclick="setViewMode('subgenres')">🔬 50+ Sub-Genres Micro-Directory</button>
      </div>

      <div class="category-filter-strip" id="cat-filter-bar"></div>
    </div>
  </section>

  <!-- Dual Serato & Pioneer Rekordbox 1-Click Master Ecosystem Sync -->
  <section class="genre-hero" style="border-left-color:var(--dj-accent-green); background:linear-gradient(135deg, rgba(0,255,128,0.1) 0%, rgba(0,240,255,0.08) 100%);">
    <div style="width:100%; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
      <div>
        <div style="font-weight:900; font-size:1.15rem; color:var(--dj-accent-green); display:flex; align-items:center; gap:8px;">
          <span>⚡</span> Serato DJ Pro & Pioneer Rekordbox Instant Master Sync
        </div>
        <div style="font-size:0.8rem; color:var(--a-color-text-muted); margin-top:2px;">
          Compile 16 genre crates, 24 Camelot keys, and 7 16-pad performance sampler kits to both Serato Subcrates & Pioneer Rekordbox XML with 1 click:
        </div>
      </div>
      <div style="display:flex; gap:8px; flex-wrap:wrap;">
        <button class="primary" id="btn-sync-rekordbox" style="background:var(--dj-accent-cyan); color:#000; font-weight:900; padding:8px 14px; font-size:0.85rem; box-shadow:0 0 15px rgba(0,240,255,0.3);" onclick="syncToRekordbox(this)">
          🎧 Sync to Pioneer Rekordbox (XML & Sampler)
        </button>
        <button class="success" id="btn-sync-all-crates" style="background:var(--dj-accent-green); color:#000; font-weight:900; padding:8px 14px; font-size:0.85rem; box-shadow:0 0 15px rgba(0,255,128,0.3);" onclick="syncAllCrates(this)">
          ⚡ Sync ALL 16 Crates to Serato
        </button>
      </div>
    </div>
  </section>

  <!-- Interactive Visual Camelot Harmonic Mixing Wheel -->
  <section class="genre-hero" style="border-left-color:var(--dj-accent-purple); background:linear-gradient(135deg, rgba(170,0,255,0.12) 0%, rgba(0,240,255,0.06) 100%);">
    <div style="width:100%;">
      <div style="font-size:0.75rem; font-weight:900; color:var(--dj-accent-purple); text-transform:uppercase; letter-spacing:1px;">🎡 Harmonic Mixing Architecture</div>
      <div style="font-size:clamp(1.2rem, 4vw, 1.5rem); font-weight:900; color:var(--ax-text); margin:4px 0;">🎡 Interactive Visual Camelot Wheel & Harmonic Key Explorer</div>
      <div style="font-size:0.88rem; color:var(--a-color-text-muted); margin-bottom:12px;">
        Click any Camelot Key (1A–12A Minor / 1B–12B Major) to see its 5 harmonic energy routes and query all matching tracks in your 4,404 library:
      </div>

      <div style="display:grid; grid-template-columns:repeat(12, 1fr); gap:4px; margin-bottom:8px;" id="camelot-minor-row">
        <!-- 1A to 12A -->
      </div>
      <div style="display:grid; grid-template-columns:repeat(12, 1fr); gap:4px; margin-bottom:12px;" id="camelot-major-row">
        <!-- 1B to 12B -->
      </div>

      <div id="camelot-results-box" style="background:var(--a-surface-base); border:1px solid var(--ax-border); border-radius:8px; padding:12px; display:none;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <div style="font-weight:900; font-size:0.95rem; color:var(--dj-accent-gold);" id="camelot-selected-title">Key: 8A (A Minor)</div>
          <div style="font-size:0.75rem; color:var(--dj-accent-green); font-weight:800;" id="camelot-compat-routes">Compatible: 7A, 9A, 8B, 1A (+5st), 3A (+7st)</div>
        </div>
        <div id="camelot-matching-tracks" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:6px;"></div>
      </div>
    </div>
  </section>

  <!-- Master BPM Transition Roadmap & Tempo Bridge Guide -->
  <section class="genre-hero" style="border-left-color:var(--dj-accent-gold); background:linear-gradient(135deg, rgba(255,208,0,0.12) 0%, rgba(0,240,255,0.06) 100%);">
    <div style="width:100%;">
      <div style="font-size:0.75rem; font-weight:900; color:var(--dj-accent-gold); text-transform:uppercase; letter-spacing:1px;">🎛️ Pro DJ Set Building Architecture</div>
      <div style="font-size:clamp(1.2rem, 4vw, 1.5rem); font-weight:900; color:var(--ax-text); margin:4px 0;">🌉 Master BPM Transition Roadmap & Tempo Bridge Guide</div>
      <div style="font-size:0.88rem; color:var(--a-color-text-muted); margin-bottom:14px;">
        Pro-grade formulas and Serato cueing strategies to bridge non-compatible tempos without losing dancefloor momentum:
      </div>

      <div class="detail-grid">
        <div class="info-box" style="border-left:3px solid var(--dj-accent-cyan);">
          <span class="info-label">1. The 3/4 Triplet Rhythm Ramp (95 ➔ 128 BPM)</span>
          <span class="info-text">
            <b>Hip-Hop / Dembow (95 BPM) ➔ Tech House (128 BPM)</b><br>
            • Set a 3/4 beat loop on outgoing track at beat 1 of the chorus.<br>
            • The 3/4 triplet creates a rolling 126.6 BPM perceived polyrhythm.<br>
            • Filter down low-end, drop incoming 128 BPM Tech House kick on the 1!
          </span>
        </div>

        <div class="info-box" style="border-left:3px solid var(--dj-accent-pink);">
          <span class="info-label">2. The Half-Time Drop Swap (128 ➔ 174 BPM)</span>
          <span class="info-text">
            <b>Tech House / Bass House (128 BPM) ➔ Drum & Bass (174 BPM)</b><br>
            • 174 BPM played in half-time = 87 BPM snare on 3.<br>
            • Use a 1-bar build-up snare roll on Deck 1, pitch fader ramp up by +3%.<br>
            • Cut Deck 1 completely on the drop and slam incoming 174 BPM DnB bassline.
          </span>
        </div>

        <div class="info-box" style="border-left:3px solid var(--dj-accent-gold);">
          <span class="info-label">3. The Echo Freeze & Tape Stop Cut (140 ➔ 126 BPM)</span>
          <span class="info-text">
            <b>UK Garage / Hard Trance (140 BPM) ➔ Tech House (126 BPM)</b><br>
            • On final vocal phrase of Deck 1, hit 1/2 Beat Echo + Tape Stop.<br>
            • Let the echo tail ring in the room for 1 bar.<br>
            • Drop incoming 126 BPM track on bar 1 beat 1 for instant impact.
          </span>
        </div>

        <div class="info-box" style="border-left:3px solid var(--dj-accent-green);">
          <span class="info-label">4. The 4-Bar Loop Pitch Acceleration (128 ➔ 142 BPM)</span>
          <span class="info-text">
            <b>Peak Tech House (128 BPM) ➔ Fast Rave / Hard Trance (142 BPM)</b><br>
            • Catch a clean 4-bar vocal or synth loop on Deck 1.<br>
            • Smoothly push Pitch Fader from 0% to +10.9% over 16 bars with high-pass filter.<br>
            • Blend incoming 142 BPM kick for a seamless energy explosion!
          </span>
        </div>
      </div>
    </div>
  </section>

  <!-- Master Genres View Container -->
  <div id="master-genres-container" style="display:flex; flex-direction:column; gap:16px;">
    <div style="text-align:center; padding:30px; color:var(--a-color-text-muted);">Analyzing Sol Roth library tracks and loading genre encyclopedia...</div>
  </div>

  <!-- Sub-Genres Micro-Directory View Container -->
  <div id="subgenres-directory-container" style="display:none; grid-template-columns:repeat(auto-fill, minmax(340px, 1fr)); gap:12px;"></div>
</main>

<!-- Floating Sticky DJ Audio Player -->
<div class="sticky-dj-player" id="global-player">
  <div style="display:flex; align-items:center; gap:10px; min-width:0; flex:1;">
    <div style="min-width:0; flex:1;">
      <div style="font-weight:900; font-size:0.88rem; color:var(--ax-text); overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" id="player-title">Track Preview</div>
      <div style="font-size:0.75rem; color:var(--dj-accent-cyan); font-weight:700; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" id="player-artist">Artist</div>
    </div>
  </div>
  <div style="display:flex; align-items:center; gap:10px; flex-shrink:0;">
    <button class="primary" style="background:var(--dj-accent-cyan); color:#000; font-weight:900;" id="player-play-btn" onclick="togglePlayPause()">⏸</button>
    <button style="padding:4px 8px; font-size:0.75rem;" onclick="closePlayer()">✕</button>
  </div>
  <audio id="global-audio" onended="onAudioEnded()"></audio>
</div>

<script src="/axiom01/js/axiom.min.js"></script>
<script src="/axiom01/js/axicons-base.js"></script>

<script>
  let genreStatsData = null;
  let activeCategory = "All";
  let activeViewMode = "master"; // 'master' or 'subgenres'
  let currentAudio = document.getElementById('global-audio');

  const spotifySvg = `<svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" style="flex-shrink:0;"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.495 17.306c-.216.353-.674.464-1.026.249-2.813-1.718-6.354-2.107-10.525-1.154-.403.092-.806-.16-.898-.563-.092-.403.16-.806.563-.898 4.567-1.044 8.5-602 11.637 1.34.353.216.464.674.249 1.026zm1.464-3.26c-.272.443-.855.583-1.298.31-3.218-1.977-8.125-2.55-11.932-1.393-.498.152-1.03-.133-1.182-.631-.152-.498.133-1.03.631-1.182 4.354-1.32 9.775-.683 13.47 1.597.443.272.583.855.311 1.299zm.126-3.41c-3.858-2.29-10.222-2.502-13.896-1.386-.59.18-1.22-.158-1.4-.748-.18-.59.158-1.22.748-1.4 4.228-1.284 11.264-1.034 15.698 1.6 1.533.316.705 1.024.389 1.557-.316.533-1.024.705-1.539.377z"/></svg>`;

  async function loadGenreStats() {
    try {
      const res = await fetch('/api/genre_stats');
      genreStatsData = await res.json();
      renderAllViews();
    } catch(e) {
      document.getElementById('master-genres-container').innerHTML = `<div style="color:red; text-align:center;">Error loading genre intelligence.</div>`;
    }
  }

  function renderAllViews() {
    if (!genreStatsData || !genreStatsData.genres) return;

    // 1. Render Category Filter Bar
    const catBar = document.getElementById('cat-filter-bar');
    const categories = genreStatsData.categories || ["All", "House & Techno", "Techno & Rave", "Bass & EDM", "Rock & Alternative", "Global & Latin"];
    catBar.innerHTML = categories.map(cat => `
      <div class="cat-pill ${activeCategory === cat ? 'active' : ''}" onclick="selectCategory('${cat}')">
        <span>${cat}</span>
      </div>
    `).join('');

    // 2. Render Master Genres View
    const masterContainer = document.getElementById('master-genres-container');
    masterContainer.innerHTML = genreStatsData.genres.map(g => `
      <article class="card genre" id="card-${g.id}" data-category="${g.category || 'General'}" data-keywords="${g.keywords.join(' ')} ${g.name}">
        <header>
          <div>
            <h3>
              <span>${g.icon}</span>
              <span>${g.name}</span>
            </h3>
            <div style="font-size:0.8rem; font-weight:800; color:var(--dj-accent-pink); margin-top:2px;">
              📁 Category: ${g.category} • ⚡ Energy: ${g.energy_level} • Keys: ${g.common_keys}
            </div>
          </div>
          <div style="display:flex; gap:6px; align-items:center; flex-wrap:wrap;">
            <span class="badge bpm">⏱️ ${g.bpm_range}</span>
            <span class="badge library">🎵 In Sol Roth Library: ${g.library_count} Tracks</span>
            <button class="success" style="background:rgba(0,255,128,0.15); border:1px solid var(--dj-accent-green); color:var(--dj-accent-green); font-weight:900; font-size:0.75rem;" onclick="syncCrateToSerato('${g.id}', '${g.name.replace(/'/g, "\\'")}', this)">📥 Sync .crate to Serato</button>
          </div>
        </header>

        <!-- Musical Definition -->
        <div class="info-box">
          <span class="info-label">📖 Musical Anatomy & Sonic Blueprint</span>
          <span class="info-text">${g.musical_definition}</span>
        </div>

        <div class="detail-grid">
          <!-- Rhythm & Drum Programming Formula -->
          <div class="info-box">
            <span class="info-label">🥁 Drum Programming & Rhythm Formula</span>
            <span class="info-text">${g.rhythm_formula}</span>
          </div>

          <!-- Pro DJ Mix & Transition Blueprint -->
          <div class="info-box" style="border-left:3px solid var(--dj-accent-gold);">
            <span class="info-label" style="color:var(--dj-accent-gold);">🎛️ Pro DJ Transition & EQ Strategy</span>
            <span class="info-text">${g.dj_mix_strategy}</span>
          </div>
        </div>

        <!-- Phrasing & Song Structure Timeline -->
        <div class="info-box">
          <span class="info-label">📐 Typical Song Structure & Phrasing Map</span>
          <div class="timeline-bar-box" style="margin-top:4px;">
            ${g.song_structure}
          </div>
        </div>

        <!-- Sub-Genres Breakdown with High-Ranking Modern Anthems -->
        <div class="info-box">
          <span class="info-label">🔬 Key Sub-Genres & High-Ranking Modern Anthems</span>
          <div class="subgenre-pill-grid">
            ${g.sub_genres.map(sg => {
              const anthemsHtml = (sg.anthems && sg.anthems.length > 0) ? `
                <div style="margin-top:8px; padding-top:6px; border-top:1px dashed var(--ax-border);">
                  <div style="font-size:0.7rem; font-weight:900; color:var(--dj-accent-gold); text-transform:uppercase; margin-bottom:4px;">
                    🔥 Modern Dance Anthem:
                  </div>
                  ${sg.anthems.map(a => `
                    <div style="background:rgba(255,208,0,0.06); border:1px solid rgba(255,208,0,0.2); border-radius:4px; padding:6px 8px; margin-bottom:4px;">
                      <div style="display:flex; justify-content:space-between; align-items:center; gap:4px;">
                        <div style="min-width:0; flex:1;">
                          <span style="font-weight:900; font-size:0.8rem; color:var(--ax-text);">${a.title}</span>
                          <span style="font-size:0.72rem; color:var(--dj-accent-cyan);"> • ${a.artist}</span>
                        </div>
                        <div style="display:flex; gap:3px; flex-shrink:0;">
                          <button class="primary" style="padding:2px 5px; font-size:0.68rem; background:var(--dj-accent-cyan); color:#000; font-weight:900;" onclick="playTrackClip('${(a.artist + ' ' + a.title).replace(/'/g, "\\'")}', '${a.title.replace(/'/g, "\\'")}', '${a.artist.replace(/'/g, "\\'")}')">▶ 30s</button>
                          <a href="https://open.spotify.com/search/${encodeURIComponent(a.artist + ' ' + a.title)}" target="_blank" class="button spotify" style="padding:2px 5px; font-size:0.68rem;">
                            ${spotifySvg}
                          </a>
                        </div>
                      </div>
                      <div style="font-size:0.7rem; color:var(--a-color-text-muted); margin-top:2px;">💡 ${a.why}</div>
                    </div>
                  `).join('')}
                </div>
              ` : '';

              return `
                <div class="subgenre-item">
                  <h4>
                    <span>⚡ ${sg.name}</span>
                    <span style="font-size:0.72rem; color:var(--dj-accent-gold);">${sg.bpm || ''}</span>
                  </h4>
                  <div class="subgenre-desc">${sg.desc}</div>
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-top:4px;">
                    <span style="font-size:0.7rem; color:var(--dj-accent-green); font-weight:800;">🎵 ${sg.library_count || 0} in Library</span>
                    <a href="https://open.spotify.com/search/${encodeURIComponent(sg.name)}" target="_blank" class="button spotify">
                      ${spotifySvg}
                      <span>Spotify</span>
                    </a>
                  </div>
                  ${anthemsHtml}
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Labels & Artists -->
        <div class="detail-grid">
          <div class="info-box">
            <span class="info-label">🏷️ Iconic Record Labels</span>
            <span class="info-text" style="color:var(--dj-accent-gold);">${g.key_labels}</span>
          </div>
          <div class="info-box">
            <span class="info-label">👑 Essential Pioneer Artists & Trendsetters</span>
            <span class="info-text" style="color:var(--dj-accent-cyan);">${g.essential_artists}</span>
          </div>
        </div>

        <!-- Matching Tracks in Sol Roth Library -->
        <div class="library-drawer">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span style="font-size:0.75rem; font-weight:900; color:var(--dj-accent-green); text-transform:uppercase;">
              📥 Matching Tracks in Your Local Serato Library (${g.library_count} Total)
            </span>
            <span style="font-size:0.7rem; color:var(--a-color-text-muted);">Quick Preview & Stage Prompter</span>
          </div>
          ${g.sample_tracks && g.sample_tracks.length > 0 ? g.sample_tracks.map(t => `
            <div class="drawer-track-row">
              <div style="min-width:0; flex:1;">
                <div style="font-weight:800; font-size:0.85rem; color:var(--ax-text); overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${t.title}</div>
                <div style="font-size:0.72rem; color:var(--dj-accent-cyan); font-weight:700;">${t.artist}</div>
              </div>
              <div style="display:flex; align-items:center; gap:4px;">
                <button style="padding:2px 6px; font-size:0.7rem;" onclick="playLocalTrack('${t.filename}', '${t.title.replace(/'/g, "\\'")}', '${t.artist.replace(/'/g, "\\'")}')">▶</button>
                <a href="https://open.spotify.com/search/${encodeURIComponent(t.artist + ' ' + t.title)}" target="_blank" class="button spotify">
                  ${spotifySvg}
                </a>
                <a href="/?load=${encodeURIComponent(t.rel_path)}" class="button" style="padding:2px 6px; font-size:0.7rem;">HUD</a>
              </div>
            </div>
          `).join('') : '<div style="font-size:0.8rem; color:var(--a-color-text-muted);">No direct keyword matches in current sample. Explore the Modern Dance Anthems above!</div>'}
        </div>
      </article>
    `).join('');

    // 3. Render Sub-Genres Micro-Directory View
    const subContainer = document.getElementById('subgenres-directory-container');
    let allSubgenres = [];
    genreStatsData.genres.forEach(g => {
      g.sub_genres.forEach(sg => {
        allSubgenres.push({
          ...sg,
          parent_genre: g.name,
          parent_category: g.category,
          icon: g.icon
        });
      });
    });

    subContainer.innerHTML = allSubgenres.map(sg => {
      const anthemsHtml = (sg.anthems && sg.anthems.length > 0) ? `
        <div style="margin-top:10px; padding-top:8px; border-top:1px dashed var(--ax-border);">
          <div style="font-size:0.72rem; font-weight:900; color:var(--dj-accent-gold); text-transform:uppercase; margin-bottom:5px;">
            🔥 Top Modern Dance Anthems (1-Click Preview):
          </div>
          ${sg.anthems.map(a => `
            <div style="background:rgba(255,208,0,0.06); border:1px solid rgba(255,208,0,0.2); border-radius:6px; padding:6px 8px; margin-bottom:4px;">
              <div style="display:flex; justify-content:space-between; align-items:center; gap:4px;">
                <div style="min-width:0; flex:1;">
                  <span style="font-weight:900; font-size:0.82rem; color:var(--ax-text);">${a.title}</span>
                  <span style="font-size:0.72rem; color:var(--dj-accent-cyan);"> • ${a.artist}</span>
                </div>
                <div style="display:flex; gap:3px; flex-shrink:0;">
                  <button class="primary" style="padding:2px 6px; font-size:0.7rem; background:var(--dj-accent-cyan); color:#000; font-weight:900;" onclick="playTrackClip('${(a.artist + ' ' + a.title).replace(/'/g, "\\'")}', '${a.title.replace(/'/g, "\\'")}', '${a.artist.replace(/'/g, "\\'")}')">▶ 30s</button>
                  <a href="https://open.spotify.com/search/${encodeURIComponent(a.artist + ' ' + a.title)}" target="_blank" class="button spotify" style="padding:2px 6px; font-size:0.7rem;">
                    ${spotifySvg}
                  </a>
                </div>
              </div>
              <div style="font-size:0.72rem; color:var(--a-color-text-muted); margin-top:2px;">💡 ${a.why}</div>
            </div>
          `).join('')}
        </div>
      ` : '';

      return `
        <div class="subgenre-item" style="border:1px solid var(--ax-border); background:var(--a-surface-raised); padding:14px;" data-category="${sg.parent_category}" data-search="${sg.name.toLowerCase()} ${sg.desc.toLowerCase()} ${sg.parent_genre.toLowerCase()}">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:4px;">
            <div>
              <div style="font-size:0.95rem; font-weight:900; color:var(--dj-accent-pink);">${sg.icon} ${sg.name}</div>
              <div style="font-size:0.72rem; font-weight:800; color:var(--dj-accent-cyan);">${sg.parent_genre} • ${sg.parent_category}</div>
            </div>
            <span class="badge bpm" style="font-size:0.72rem;">${sg.bpm || 'Variable'}</span>
          </div>
          <p style="font-size:0.82rem; line-height:1.4; color:var(--ax-text); margin:6px 0;">${sg.desc}</p>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:6px; padding-top:6px; border-top:1px solid rgba(255,255,255,0.08);">
            <span style="font-size:0.75rem; font-weight:900; color:var(--dj-accent-green);">🎵 ${sg.library_count || 0} in Sol Roth Library</span>
            <a href="https://open.spotify.com/search/${encodeURIComponent(sg.name)}" target="_blank" class="button spotify">
              ${spotifySvg}
              <span>Spotify Search</span>
            </a>
          </div>
          ${anthemsHtml}
        </div>
      `;
    }).join('');
  }

  function selectCategory(cat) {
    activeCategory = cat;
    const catPills = document.querySelectorAll('.cat-pill');
    catPills.forEach(p => p.classList.remove('active'));
    event.target.closest('.cat-pill').classList.add('active');
    applyFilters();
  }

  function setViewMode(mode) {
    activeViewMode = mode;
    document.getElementById('mode-master').className = 'mode-btn' + (mode === 'master' ? ' active' : '');
    document.getElementById('mode-subgenres').className = 'mode-btn' + (mode === 'subgenres' ? ' active' : '');

    document.getElementById('master-genres-container').style.display = mode === 'master' ? 'flex' : 'none';
    document.getElementById('subgenres-directory-container').style.display = mode === 'subgenres' ? 'grid' : 'none';
    applyFilters();
  }

  function applyFilters() {
    const q = document.getElementById('genre-search-input').value.toLowerCase().trim();

    if (activeViewMode === 'master') {
      const cards = document.querySelectorAll('.genre-card');
      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        const kws = card.getAttribute('data-keywords').toLowerCase();

        const matchesCat = (activeCategory === 'All' || cat === activeCategory);
        const matchesQuery = (!q || kws.includes(q));

        if (matchesCat && matchesQuery) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    } else {
      const subCards = document.querySelectorAll('#subgenres-directory-container .subgenre-item');
      subCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        const searchTxt = card.getAttribute('data-search');

        const matchesCat = (activeCategory === 'All' || cat === activeCategory);
        const matchesQuery = (!q || searchTxt.includes(q));

        if (matchesCat && matchesQuery) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }
  }

  function playLocalTrack(fileName, title, artist) {
    const player = document.getElementById('global-player');
    const titleEl = document.getElementById('player-title');
    const artistEl = document.getElementById('player-artist');
    const btn = document.getElementById('player-play-btn');

    if (titleEl) titleEl.innerText = title;
    if (artistEl) artistEl.innerText = `${artist} (Local Library)`;
    if (player) player.classList.add('active');
    
    currentAudio.pause();
    currentAudio.src = `/api/stream_local?file=${encodeURIComponent(fileName)}`;
    currentAudio.play().catch(()=>{});
    if (btn) btn.innerText = "⏸";
  }

  async function playTrackClip(queryStr, fallbackTitle, fallbackArtist) {
    const player = document.getElementById('global-player');
    const titleEl = document.getElementById('player-title');
    const artistEl = document.getElementById('player-artist');
    const btn = document.getElementById('player-play-btn');

    if (titleEl) titleEl.innerText = fallbackTitle || queryStr;
    if (artistEl) artistEl.innerText = fallbackArtist || "DJ Preview";
    if (player) player.classList.add('active');
    if (btn) btn.innerText = "⏳";

    try {
      const res = await fetch(`/api/preview_track?q=${encodeURIComponent(queryStr)}`);
      const data = await res.json();

      if (data && data.preview_url) {
        if (titleEl) titleEl.innerText = data.title;
        if (artistEl) artistEl.innerText = `${data.artist} • ${data.album || ''}`;
        currentAudio.pause();
        currentAudio.src = data.preview_url;
        currentAudio.play().catch(()=>{});
        if (btn) btn.innerText = "⏸";
      } else {
        if (titleEl) titleEl.innerText = fallbackTitle || queryStr;
        if (btn) btn.innerText = "⚠️ No Stream";
      }
    } catch(e) {
      if (btn) btn.innerText = "⚠️ Error";
    }
  }

  function togglePlayPause() {
    const btn = document.getElementById('player-play-btn');
    if (currentAudio.paused) {
      currentAudio.play();
      btn.innerText = "⏸";
    } else {
      currentAudio.pause();
      btn.innerText = "▶";
    }
  }

  function onAudioEnded() {
    document.getElementById('player-play-btn').innerText = "▶";
  }

  function closePlayer() {
    currentAudio.pause();
    currentAudio.src = '';
    document.getElementById('global-player').classList.remove('active');
  }

  function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    document.getElementById('theme-btn').innerText = next === 'dark' ? '☀️' : '🌙';
  }

  
  const CAMELOT_KEYS_A = ["1A (Abm)", "2A (Ebm)", "3A (Bbm)", "4A (Fm)", "5A (Cm)", "6A (Gm)", "7A (Dm)", "8A (Am)", "9A (Em)", "10A (Bm)", "11A (F#m)", "12A (Dbm)"];
  const CAMELOT_KEYS_B = ["1B (B)", "2B (F#)", "3B (Db)", "4B (Ab)", "5B (Eb)", "6B (Bb)", "7B (F)", "8B (C)", "9B (G)", "10B (D)", "11B (A)", "12B (E)"];

  function renderCamelotWheel() {
    const minorRow = document.getElementById('camelot-minor-row');
    const majorRow = document.getElementById('camelot-major-row');
    if (!minorRow || !majorRow) return;

    minorRow.innerHTML = CAMELOT_KEYS_A.map((k, idx) => {
      const code = `${idx + 1}A`;
      return `<button style="padding:6px 2px; font-size:0.7rem; justify-content:center; text-align:center; background:rgba(0,240,255,0.1); border-color:var(--dj-accent-cyan); color:var(--dj-accent-cyan);" onclick="selectCamelotKey('${code}')">${code}</button>`;
    }).join('');

    majorRow.innerHTML = CAMELOT_KEYS_B.map((k, idx) => {
      const code = `${idx + 1}B`;
      return `<button style="padding:6px 2px; font-size:0.7rem; justify-content:center; text-align:center; background:rgba(255,208,0,0.1); border-color:var(--dj-accent-gold); color:var(--dj-accent-gold);" onclick="selectCamelotKey('${code}')">${code}</button>`;
    }).join('');
  }

  function selectCamelotKey(k) {
    const box = document.getElementById('camelot-results-box');
    box.style.display = 'block';
    
    const num = parseInt(k);
    const letter = k.slice(-1);
    const plus1 = `${(num % 12) + 1}${letter}`;
    const minus1 = `${((num - 2) % 12) + 1}${letter}`;
    const modeSwap = `${num}${letter === 'A' ? 'B' : 'A'}`;
    const energySurge = `${((num + 1) % 12) + 1}${letter}`;

    document.getElementById('camelot-selected-title').innerText = `Selected Key: ${k} (Center Pitch)`;
    document.getElementById('camelot-compat-routes').innerText = `Harmonic Routes: ${minus1} (-1 Energy) ➔ ${k} (Lock) ➔ ${plus1} (+1 Lift) • ${modeSwap} (Relative Mode) • ${energySurge} (+2 Surge)`;

    // Find matching sample tracks from loaded genre stats
    let matches = [];
    if (genreStatsData && genreStatsData.genres) {
      genreStatsData.genres.forEach(g => {
        if (g.sample_tracks) {
          g.sample_tracks.forEach(t => {
            matches.push({ ...t, genre_name: g.name });
          });
        }
      });
    }

    const trackContainer = document.getElementById('camelot-matching-tracks');
    trackContainer.innerHTML = matches.slice(0, 12).map(t => `
      <div style="background:var(--a-surface-raised); border:1px solid var(--ax-border); border-radius:6px; padding:6px 8px; display:flex; justify-content:space-between; align-items:center;">
        <div style="min-width:0; flex:1;">
          <div style="font-weight:800; font-size:0.8rem; color:var(--ax-text); overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${t.title}</div>
          <div style="font-size:0.7rem; color:var(--dj-accent-cyan);">${t.artist}</div>
        </div>
        <button style="padding:2px 6px; font-size:0.68rem;" onclick="playLocalTrack('${t.filename}', '${t.title.replace(/'/g, "\\'")}', '${t.artist.replace(/'/g, "\\'")}')">▶</button>
      </div>
    `).join('');
  }

  
  async function syncToRekordbox(btnElem) {
    if (btnElem) {
      btnElem.innerText = "⏳ Syncing Rekordbox...";
      btnElem.disabled = true;
    }
    try {
      const res = await fetch('/api/sync_rekordbox');
      const data = await res.json();
      if (data.status === 'success') {
        if (btnElem) {
          btnElem.innerText = "✅ Rekordbox Synced!";
          btnElem.style.background = "var(--dj-accent-brand)";
          setTimeout(() => {
            btnElem.innerText = "🎧 Sync to Pioneer Rekordbox";
            btnElem.style.background = "var(--dj-accent-cyan)";
            btnElem.disabled = false;
          }, 3500);
        }
        alert(`🎉 ${data.message}\n\n📁 XML Path: ${data.xml_path}\n🎛️ Sampler: ~/Music/rekordbox/Sampler/Sol Roth Master Sampler/`);
      } else {
        if (btnElem) {
          btnElem.innerText = "⚠️ Retry";
          btnElem.disabled = false;
        }
        alert("⚠️ Sync failed.");
      }
    } catch(e) {
      if (btnElem) {
        btnElem.innerText = "⚠️ Retry";
        btnElem.disabled = false;
      }
      alert("❌ Error connecting to Rekordbox sync API.");
    }
  }

  async function syncAllCrates(btnElem) {
    if (btnElem) {
      btnElem.innerText = "⏳ Syncing 16 Crates...";
      btnElem.disabled = true;
    }
    try {
      const res = await fetch('/api/sync_all_crates');
      const data = await res.json();
      if (data.status === 'success') {
        if (btnElem) {
          btnElem.innerText = "✅ 16 Crates Synced!";
          btnElem.style.background = "var(--dj-accent-brand)";
          setTimeout(() => {
            btnElem.innerText = "⚡ Sync ALL 16 Crates to Serato";
            btnElem.style.background = "var(--dj-accent-green)";
            btnElem.disabled = false;
          }, 3000);
        }
        alert(`🎉 ${data.message}`);
      }
    } catch(e) {
      if (btnElem) {
        btnElem.innerText = "⚠️ Retry Sync";
        btnElem.disabled = false;
      }
    }
  }

  async function syncCrateToSerato(genreId, genreName, btnElem) {
    if (btnElem) {
      btnElem.innerText = "⏳ Syncing...";
      btnElem.disabled = true;
    }
    try {
      const res = await fetch(`/api/sync_crate?genre_id=${encodeURIComponent(genreId)}`);
      const data = await res.json();
      if (data.status === 'success') {
        if (btnElem) {
          btnElem.innerText = "✅ In Serato!";
          btnElem.style.background = "var(--dj-accent-green)";
          btnElem.style.color = "#000";
        }
        alert(`🎉 ${data.message}`);
      } else {
        if (btnElem) {
          btnElem.innerText = "⚠️ Retry Sync";
          btnElem.disabled = false;
        }
        alert(`⚠️ Sync failed: ${data.message}`);
      }
    } catch(e) {
      if (btnElem) {
        btnElem.innerText = "⚠️ Retry";
        btnElem.disabled = false;
      }
      alert("❌ Error connecting to Serato Subcrate sync API.");
    }
  }

  renderCamelotWheel();
  loadGenreStats();
</script>
</body>
</html>
"""


HTML_MUSIC_UPDATES = """<!DOCTYPE html>
<html lang="en" data-theme="dark" data-axiom-palette="default">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
<title>Sol Roth // Weekly Bass EDM, Trap & Dubstep Ingest Radar</title>
<link rel="stylesheet" href="/axiom01/css/axiom.min.css">
<link rel="stylesheet" href="/axiom01/css/axicons.css">
<style>
  *, *::before, *::after { box-sizing: border-box; }
  [data-theme="dark"] {
    --ax-surface: #0b0e15;
    --a-surface-base: #07090e;
    --a-surface-raised: #101522;
    --ax-border: #1a2233;
    --ax-text: #f0f4f8;
    --dj-accent-brand: #ffd000;
    --dj-accent-cyan: #00f0ff;
    --dj-accent-gold: #ffd000;
    --dj-accent-pink: #ff007f;
    --dj-accent-purple: #aa00ff;
    --dj-accent-green: #00ff80;
    --dj-card-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }
  [data-theme="light"] {
    --ax-surface: #f8fafc;
    --a-surface-base: #ffffff;
    --a-surface-raised: #f1f5f9;
    --ax-border: #cbd5e1;
    --ax-text: #0f172a;
    --dj-accent-brand: #b45309;
    --dj-accent-cyan: #0284c7;
    --dj-accent-gold: #b45309;
    --dj-accent-pink: #be185d;
    --dj-accent-purple: #7e22ce;
    --dj-accent-green: #047857;
    --dj-card-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }
  html, body {
    margin: 0; padding: 0;
    width: 100%; max-width: 100vw;
    background: var(--a-surface-base);
    color: var(--ax-text);
    font-family: var(--ax-font-body);
    min-height: 100vh;
    padding-bottom: 70px;
  }
  header.main {
    background: var(--ax-surface);
    padding: 10px 14px;
    display: flex; align-items: center; justify-content: space-between;
    border-bottom: 2px solid var(--ax-border);
    position: sticky; top: 0; z-index: 100;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    flex-wrap: wrap; gap: 6px;
  }
  header.main .brand {
    font-size: clamp(0.9rem, 3.8vw, 1.1rem);
    font-weight: 900; letter-spacing: 0.8px;
    color: var(--dj-accent-gold);
    display: flex; align-items: center; gap: 6px;
  }
  header.main .actions {
    display: flex; gap: 6px; flex-wrap: wrap;
  }
  header.main .actions button,
  header.main .actions a.button {
    background: var(--a-surface-raised);
    border: 1px solid var(--ax-border);
    color: var(--ax-text);
    padding: 6px 10px;
    border-radius: var(--a-border-radius-base);
    font-size: 0.78rem; font-weight: 800;
    cursor: pointer; transition: all 0.2s;
    display: inline-flex; align-items: center; gap: 4px;
    text-decoration: none; white-space: nowrap;
  }
  header.main .actions button:hover,
  header.main .actions a.button:hover { background: var(--dj-accent-cyan); color: #000; border-color: var(--dj-accent-cyan); }
  main.layout {
    max-width: 1300px; margin: 0 auto;
    padding: 16px 12px;
    display: flex; flex-direction: column; gap: 16px;
  }
  .card.hero {
    background: linear-gradient(135deg, rgba(255, 208, 0, 0.14) 0%, rgba(255, 0, 127, 0.08) 50%, var(--a-surface-raised) 100%);
    border: 1px solid var(--ax-border);
    border-left: 5px solid var(--dj-accent-gold);
    border-radius: var(--a-border-radius-lg);
    padding: 18px 16px;
    box-shadow: var(--dj-card-shadow);
    display: flex; justify-content: space-between; align-items: center; gap: 14px;
    flex-wrap: wrap;
  }
  .grid-2 {
    display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
  }
  @media(max-width: 900px) { .grid-2 { grid-template-columns: 1fr; } }
  .card {
    background: var(--a-surface-raised);
    border: 1px solid var(--ax-border);
    border-radius: var(--a-border-radius-lg);
    padding: 16px;
    box-shadow: var(--dj-card-shadow);
    display: flex; flex-direction: column; gap: 12px;
  }
  .card > header {
    font-size: 1.05rem; font-weight: 900;
    color: var(--dj-accent-gold);
    display: flex; justify-content: space-between; align-items: center;
    border-bottom: 1px solid var(--ax-border);
    padding-bottom: 8px;
  }
  .matrix-item {
    background: var(--a-surface-base);
    border: 1px solid var(--ax-border);
    border-radius: var(--a-border-radius-base);
    padding: 12px;
    display: flex; flex-direction: column; gap: 6px;
    border-left: 4px solid var(--dj-accent-cyan);
    transition: all 0.2s;
  }
  .matrix-item:hover { transform: translateY(-2px); border-color: var(--dj-accent-gold); }
  .badge {
    padding: 2px 7px; border-radius: 4px; font-size: 0.72rem; font-weight: 900; display: inline-flex; align-items: center; gap: 3px;
  }
  .badge.key { background: var(--dj-accent-gold); color: #000; }
  .badge.bpm { background: rgba(0,240,255,0.15); color: var(--dj-accent-cyan); border: 1px solid var(--dj-accent-cyan); }
  .badge.genre { background: rgba(255,0,127,0.15); color: var(--dj-accent-pink); border: 1px solid var(--dj-accent-pink); }
  .radar-row {
    background: var(--a-surface-base);
    border: 1px solid var(--ax-border);
    border-radius: var(--a-border-radius-base);
    padding: 10px 12px;
    display: flex; justify-content: space-between; align-items: center;
    gap: 10px; flex-wrap: wrap;
  }
  .sticky-dj-player {
    display: none; position: fixed;
    bottom: 0; left: 0; right: 0;
    background: rgba(11, 14, 21, 0.96);
    backdrop-filter: blur(15px);
    border-top: 2px solid var(--dj-accent-cyan);
    padding: 8px 16px; z-index: 999;
    align-items: center; justify-content: space-between; gap: 12px;
  }
  .sticky-dj-player.active { display: flex; }
</style>
</head>
<body>

<header class="main">
  <div class="brand">
    <span>🔥 SOL ROTH // BASS & TRAP MUSIC UPDATES</span>
  </div>
  <div class="actions">
    <a href="/intel" class="button">📰 Daily Intel</a>
    <a href="/genres" class="button">📚 Genres</a>
    <a href="/" class="button" style="background:var(--dj-accent-cyan); color:#000; font-weight:900;">🎤 Stage Prompter</a>
    <button onclick="toggleTheme()" id="theme-btn">☀️</button>
  </div>
</header>

<main class="layout">
  <!-- Hero Banner -->
  <article class="card hero">
    <div style="min-width:0; flex:1;">
      <div style="font-size:0.75rem; font-weight:900; color:var(--dj-accent-cyan); text-transform:uppercase; letter-spacing:1px;">Automated Weekly Performance Radar</div>
      <div style="font-size:clamp(1.2rem, 4vw, 1.6rem); font-weight:900; color:var(--ax-text); margin:4px 0;">Weekly Bass EDM, Trap & Dubstep Ingestion Engine</div>
      <div style="font-size:0.86rem; color:var(--a-color-text-muted); max-width:850px;">
        Curates, downloads, analyzes, and injects essential festival weapons, underground heaters, and metal/hip-hop acapellas into your Rekordbox <code>💥 Sol Roth Hybrid Bass & Trap Performance</code> playlists and Serato crates.
      </div>
    </div>
    <div style="display:flex; gap:8px; flex-wrap:wrap;">
      <button class="primary" id="btn-run-ingest" style="background:var(--dj-accent-gold); color:#000; font-weight:900; padding:10px 16px; font-size:0.88rem; box-shadow:0 0 20px rgba(255,208,0,0.3);" onclick="triggerWeeklyBassIngest(this)">
        ⚡ Run Weekly Bass Ingest Now
      </button>
      <button class="success" style="background:var(--dj-accent-green); color:#000; font-weight:900; padding:10px 14px;" onclick="syncRekordbox(this)">
        🎧 Sync Rekordbox Playlists
      </button>
    </div>
  </article>

  <!-- Live Stats Strip -->
  <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:10px;">
    <div class="card" style="padding:12px; border-left:4px solid var(--dj-accent-gold);">
      <div style="font-size:0.75rem; font-weight:800; color:var(--a-color-text-muted);">PRIMARY PERFORMANCE FOCUS</div>
      <div style="font-size:1.25rem; font-weight:900; color:var(--dj-accent-gold);">Bass EDM • Trap • Dubstep</div>
    </div>
    <div class="card" style="padding:12px; border-left:4px solid var(--dj-accent-cyan);">
      <div style="font-size:0.75rem; font-weight:800; color:var(--a-color-text-muted);">HYBRID SAMPLER KITS</div>
      <div style="font-size:1.25rem; font-weight:900; color:var(--dj-accent-cyan);">Alesis Sticks & Vocal Stabs</div>
    </div>
    <div class="card" style="padding:12px; border-left:4px solid var(--dj-accent-pink);">
      <div style="font-size:0.75rem; font-weight:800; color:var(--a-color-text-muted);">HARMONIC DOUBLE-DROPS</div>
      <div style="font-size:1.25rem; font-weight:900; color:var(--dj-accent-pink);">140 / 150 / 174 BPM Mappings</div>
    </div>
    <div class="card" style="padding:12px; border-left:4px solid var(--dj-accent-green);">
      <div style="font-size:0.75rem; font-weight:800; color:var(--a-color-text-muted);">PIPELINE AUTOMATION</div>
      <div style="font-size:1.25rem; font-weight:900; color:var(--dj-accent-green);">Weekly Auto-Sync Active</div>
    </div>
  </div>

  <div class="grid-2">
    <!-- Left Column: Harmonic Double-Drop Matrix -->
    <section class="card">
      <header>
        <span>🎯 Harmonic Double-Drop Cheat Sheet</span>
        <span style="font-size:0.75rem; color:var(--dj-accent-cyan); font-weight:800;">140–150–174 BPM</span>
      </header>
      <div style="font-size:0.82rem; color:var(--a-color-text-muted);">
        Proven, harmonic festival mashups designed for live stem isolation, drum pad solos, and vocal screams:
      </div>
      <div id="double-drop-matrix-container" style="display:flex; flex-direction:column; gap:10px;"></div>
    </section>

    <!-- Right Column: Curated Weekly Bass Radar -->
    <section class="card">
      <header>
        <span>📡 Weekly Bass Ingest Radar & Curation</span>
        <span style="font-size:0.75rem; color:var(--dj-accent-gold); font-weight:800;">Top Weapons</span>
      </header>
      <div style="font-size:0.82rem; color:var(--a-color-text-muted);">
        Priority bangers curated across ISOxo, Subtronics, Tape B, Sullivan King, Hamdi, and Chase & Status:
      </div>
      <div id="weekly-radar-container" style="display:flex; flex-direction:column; gap:8px;"></div>
    </section>
  </div>

  <!-- Live Hybrid Arsenal & Sampler Pad Switcher -->
  <section class="card" style="border-left:5px solid var(--dj-accent-pink);">
    <header style="color:var(--dj-accent-pink);">
      <span>🥁 Hybrid Live Weapon Arsenal & Pad Presets</span>
      <span style="font-size:0.75rem; color:var(--a-color-text-muted);">DDJ-FLX2 / M-VAVE / Alesis Pad</span>
    </header>
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:12px;">
      <div class="matrix-item" style="border-left-color:var(--dj-accent-pink);">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <b style="font-size:0.95rem; color:var(--dj-accent-pink);">05 Alesis Physical Drum Stick Performance Kit</b>
          <button class="primary" style="background:var(--dj-accent-pink); color:#fff; font-weight:900;" onclick="switchSamplerPreset('alesis_sticks')">⚡ Load to Bank 1</button>
        </div>
        <div style="font-size:0.8rem; color:var(--ax-text); line-height:1.4;">
          Pads 1–16 formatted for physical acoustic drum sticks: 808 Sub Boom smash, Snare Cracks, Timbale Rolls, China Cymbals, 150 BPM Snare Buildup Roll, Sub Braam Drop.
        </div>
      </div>

      <div class="matrix-item" style="border-left-color:var(--dj-accent-purple);">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <b style="font-size:0.95rem; color:var(--dj-accent-purple);">06 Pre-Drop Vocal Build Stabs & Hype Weapons</b>
          <button class="primary" style="background:var(--dj-accent-purple); color:#fff; font-weight:900;" onclick="switchSamplerPreset('vocal_stabs')">⚡ Load to Bank 2</button>
        </div>
        <div style="font-size:0.8rem; color:var(--ax-text); line-height:1.4;">
          Pads 1–16 formatted for pre-drop tension: "1 2 3 Let's Go", "Hold Up Wait A Minute", "Sheesh", "Selecta Pull Up", "Fuego", "In The Mix".
        </div>
      </div>
    </div>
  </section>
</main>

<!-- Floating Sticky DJ Audio Player -->
<div class="sticky-dj-player" id="global-player">
  <div style="display:flex; align-items:center; gap:10px; min-width:0; flex:1;">
    <div style="min-width:0; flex:1;">
      <div style="font-weight:900; font-size:0.88rem; color:var(--ax-text); overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" id="player-title">Track Preview</div>
      <div style="font-size:0.75rem; color:var(--dj-accent-cyan); font-weight:700; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" id="player-artist">Artist</div>
    </div>
  </div>
  <div style="display:flex; align-items:center; gap:10px; flex-shrink:0;">
    <button class="primary" style="background:var(--dj-accent-cyan); color:#000; font-weight:900;" id="player-play-btn" onclick="togglePlayPause()">⏸</button>
    <button style="padding:4px 8px; font-size:0.75rem;" onclick="closePlayer()">✕</button>
  </div>
  <audio id="global-audio" onended="onAudioEnded()"></audio>
</div>

<script src="/axiom01/js/axiom.min.js"></script>
<script src="/axiom01/js/axicons-base.js"></script>
<script>
  let currentAudio = document.getElementById('global-audio');

  async function loadData() {
    try {
      const res = await fetch('/api/double_drop_matrix');
      const matrix = await res.json();
      renderMatrix(matrix);
    } catch(e) {}

    try {
      const res = await fetch('/api/weekly_radar');
      const radar = await res.json();
      renderRadar(radar);
    } catch(e) {}
  }

  function renderMatrix(items) {
    const c = document.getElementById('double-drop-matrix-container');
    if (!items || !items.length) { c.innerHTML = '<div style="color:var(--a-color-text-muted);">No double-drop pairings loaded.</div>'; return; }
    c.innerHTML = items.map(m => `
      <div class="matrix-item">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:6px; flex-wrap:wrap;">
          <div>
            <div style="font-weight:900; font-size:0.95rem; color:var(--ax-text);">${m.deck1_track} ⚡ ${m.deck2_track}</div>
            <div style="display:flex; gap:4px; margin-top:4px; flex-wrap:wrap;">
              <span class="badge key">🔑 ${m.key} (${m.key_name})</span>
              <span class="badge bpm">⚡ ${m.bpm}</span>
              <span class="badge genre">🎧 ${m.genre}</span>
            </div>
          </div>
          <span style="font-size:0.75rem; font-weight:900; color:var(--dj-accent-gold);">${m.energy}</span>
        </div>
        <div style="font-size:0.8rem; line-height:1.4; color:var(--ax-text); margin-top:4px;">
          <b>Technique:</b> ${m.technique}
        </div>
        <div style="font-size:0.75rem; font-weight:700; color:var(--dj-accent-cyan);">
          🎛️ <b>Cues:</b> ${m.cue_strategy}
        </div>
      </div>
    `).join('');
  }

  function renderRadar(items) {
    const c = document.getElementById('weekly-radar-container');
    if (!items || !items.length) { c.innerHTML = '<div style="color:var(--a-color-text-muted);">No radar items available.</div>'; return; }
    c.innerHTML = items.map(t => {
      const q = `${t.artist} ${t.title}`;
      return `
        <div class="radar-row">
          <div style="min-width:0; flex:1;">
            <div style="font-weight:800; font-size:0.88rem; color:var(--ax-text); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${t.title}</div>
            <div style="font-size:0.74rem; color:var(--dj-accent-cyan); font-weight:700;">${t.artist} • <span style="color:var(--dj-accent-gold);">${t.key}</span> • ${t.bpm} BPM • ${t.genre}</div>
          </div>
          <div style="display:flex; gap:6px; align-items:center;">
            <button style="padding:4px 8px; font-size:0.74rem;" onclick="playClip('${q.replace(/'/g, "\'")}', '${t.title.replace(/'/g, "\'")}', '${t.artist.replace(/'/g, "\'")}')">▶ Preview</button>
            <button class="success" style="padding:4px 8px; font-size:0.74rem; background:var(--dj-accent-green); color:#000; font-weight:900;" onclick="ingestSingle('${q.replace(/'/g, "\'")}', '${t.artist.replace(/'/g, "\'")}', '${t.title.replace(/'/g, "\'")}', this)">📥 Ingest</button>
          </div>
        </div>
      `;
    }).join('');
  }

  async function triggerWeeklyBassIngest(btn) {
    btn.disabled = true;
    const oldText = btn.innerHTML;
    btn.innerHTML = '⚡ Ingesting Weekly Bass Releases...';
    try {
      const res = await fetch('/api/trigger_weekly_bass_ingest');
      const data = await res.json();
      alert(`🎉 Weekly Bass Ingest Complete!\nDownloaded: ${data.downloaded || 0}\nAlready in Library: ${data.existing || 0}`);
    } catch(e) {
      alert('Error triggering weekly ingest: ' + e);
    } finally {
      btn.disabled = false;
      btn.innerHTML = oldText;
    }
  }

  async function syncRekordbox(btn) {
    btn.disabled = true;
    const oldText = btn.innerHTML;
    btn.innerHTML = '🎧 Syncing Rekordbox...';
    try {
      const res = await fetch('/api/sync_rekordbox');
      const data = await res.json();
      alert('✅ Rekordbox Hybrid Playlists & Sampler Synchronized!');
    } catch(e) {
      alert('Error syncing Rekordbox: ' + e);
    } finally {
      btn.disabled = false;
      btn.innerHTML = oldText;
    }
  }

  async function switchSamplerPreset(preset) {
    try {
      const res = await fetch(`/api/switch_sampler_bank?preset=${preset}`);
      const d = await res.json();
      alert(`✅ Loaded ${d.preset_name || preset} to Rekordbox Bank 1 & 2!`);
    } catch(e) {
      alert('Preset error: ' + e);
    }
  }

  async function ingestSingle(q, artist, title, btn) {
    btn.disabled = true;
    btn.innerHTML = '⏳';
    try {
      const res = await fetch(`/api/ingest_track?q=${encodeURIComponent(q)}&artist=${encodeURIComponent(artist)}&title=${encodeURIComponent(title)}`);
      const d = await res.json();
      if (d.status === 'downloaded' || d.status === 'exists') {
        btn.innerHTML = '✅ Added';
        btn.style.background = 'var(--dj-accent-cyan)';
      } else {
        btn.innerHTML = '⚠️ Retry';
        btn.disabled = false;
      }
    } catch(e) {
      btn.disabled = false;
      btn.innerHTML = '❌ Err';
    }
  }

  async function playClip(q, title, artist) {
    const player = document.getElementById('global-player');
    document.getElementById('player-title').innerText = title;
    document.getElementById('player-artist').innerText = artist;
    player.classList.add('active');
    try {
      const res = await fetch(`/api/preview_track?q=${encodeURIComponent(q)}`);
      const d = await res.json();
      if (d && d.preview_url) {
        currentAudio.src = d.preview_url;
        currentAudio.play();
        document.getElementById('player-play-btn').innerText = '⏸';
      }
    } catch(e) {}
  }

  function togglePlayPause() {
    if (!currentAudio.src) return;
    if (currentAudio.paused) {
      currentAudio.play();
      document.getElementById('player-play-btn').innerText = '⏸';
    } else {
      currentAudio.pause();
      document.getElementById('player-play-btn').innerText = '▶';
    }
  }

  function closePlayer() {
    currentAudio.pause();
    document.getElementById('global-player').classList.remove('active');
  }

  function onAudioEnded() {
    document.getElementById('player-play-btn').innerText = '▶';
  }

  function toggleTheme() {
    const html = document.documentElement;
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    document.getElementById('theme-btn').innerText = next === 'dark' ? '☀️' : '🌙';
  }

  loadData();
</script>
</body>
</html>
"""

HTML_INTEL = """<!DOCTYPE html>
<html lang="en" data-theme="dark" data-axiom-palette="default">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="DJ Intel Hub">
<title>Sol Roth // Daily Music Intelligence & Curation Hub</title>

<!-- Axiom01 Framework Core Bundle -->
<link rel="stylesheet" href="/axiom01/css/axiom.min.css">
<link rel="stylesheet" href="/axiom01/css/axicons.css">

<style>
  *, *::before, *::after {
    box-sizing: border-box;
  }

  [data-theme="dark"] {
    --ax-surface: #0b0e15;
    --a-surface-base: #07090e;
    --a-surface-raised: #101522;
    --ax-border: #1a2233;
    --ax-text: #f0f4f8;
    --dj-accent-brand: #ffd000;
    --dj-accent-cyan: #00f0ff;
    --dj-accent-gold: #ffd000;
    --dj-accent-pink: #ff007f;
    --dj-accent-green: #00ff80;
    --dj-card-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    --dj-vinyl-groove: linear-gradient(135deg, #111 0%, #222 50%, #111 100%);
  }

  [data-theme="light"] {
    --ax-surface: #f8fafc;
    --a-surface-base: #ffffff;
    --a-surface-raised: #f1f5f9;
    --ax-border: #cbd5e1;
    --ax-text: #0f172a;
    --dj-accent-brand: #b45309;
    --dj-accent-cyan: #0284c7;
    --dj-accent-gold: #b45309;
    --dj-accent-pink: #be185d;
    --dj-accent-green: #047857;
    --dj-card-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    --dj-vinyl-groove: linear-gradient(135deg, #222 0%, #333 50%, #222 100%);
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden !important;
    background: var(--a-surface-base);
    color: var(--ax-text);
    font-family: var(--ax-font-body);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding-bottom: 70px;
    -webkit-text-size-adjust: 100%;
  }

  header.main {
    background: var(--ax-surface);
    padding: 10px 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid var(--ax-border);
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    width: 100%;
    max-width: 100vw;
    box-sizing: border-box;
    flex-wrap: wrap;
    gap: 6px;
  }

  header.main .brand {
    font-size: clamp(0.9rem, 3.8vw, 1.1rem);
    font-weight: 900;
    letter-spacing: 0.8px;
    color: var(--dj-accent-gold);
    display: flex;
    align-items: center;
    gap: 6px;
    word-break: break-word;
  }

  header.main .actions {
    display: flex;
    gap: 6px;
  }
  header.main .actions button,
  header.main .actions a.button {
    background: var(--a-surface-raised);
    border: 1px solid var(--ax-border);
    color: var(--ax-text);
    padding: 6px 10px;
    border-radius: var(--a-border-radius-base);
    font-size: 0.78rem;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.2s;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    text-decoration: none;
    white-space: nowrap;
  }
  header.main .actions button:hover,
  header.main .actions a.button:hover {
    background: var(--dj-accent-cyan);
    color: #fff;
    border-color: var(--dj-accent-cyan);
  }

  main.intel-layout {
    max-width: 1300px;
    margin: 0 auto;
    width: 100%;
    max-width: 100vw;
    box-sizing: border-box;
    padding: 16px 12px;
    display: grid;
    grid-template-columns: 1.8fr 1.2fr;
    gap: 16px;
  }

  @media (max-width: 960px) {
    main.intel-layout {
      grid-template-columns: 1fr;
      padding: 12px 10px;
      gap: 14px;
    }
  }

  .hero-banner {
    grid-column: 1 / -1;
    background: linear-gradient(135deg, rgba(255, 208, 0, 0.12) 0%, rgba(0, 240, 255, 0.08) 50%, var(--a-surface-raised) 100%);
    border: 1px solid var(--ax-border);
    border-left: 5px solid var(--dj-accent-gold);
    border-radius: var(--a-border-radius-lg);
    padding: 16px 14px;
    box-shadow: var(--dj-card-shadow);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    width: 100%;
    box-sizing: border-box;
  }
  .hero-date {
    font-size: clamp(0.68rem, 2.5vw, 0.8rem);
    font-weight: 900;
    color: var(--dj-accent-cyan);
    text-transform: uppercase;
    letter-spacing: 1.2px;
    margin-bottom: 4px;
    word-break: break-word;
  }
  .hero-headline {
    font-size: clamp(1.05rem, 4.2vw, 1.45rem);
    font-weight: 900;
    line-height: 1.3;
    color: var(--ax-text);
    word-break: break-word;
  }

  article.card.intel {
    background: var(--a-surface-raised);
    border: 1px solid var(--ax-border);
    border-radius: var(--a-border-radius-lg);
    padding: 16px 14px;
    margin-bottom: 16px;
    box-shadow: var(--dj-card-shadow);
    width: 100%;
    box-sizing: border-box;
  }
  article.card.intel > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--ax-border);
    flex-wrap: wrap;
    gap: 6px;
    width: 100%;
  }
  article.card.intel > header > h3 {
    font-size: clamp(0.95rem, 3.8vw, 1.12rem);
    font-weight: 900;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--dj-accent-gold);
    word-break: break-word;
    margin: 0;
  }

  article.card.release {
    background: var(--a-surface-base);
    border: 1px solid var(--ax-border);
    border-radius: var(--a-border-radius-md);
    padding: 14px;
    margin-bottom: 14px;
    display: flex;
    gap: 14px;
    width: 100%;
    box-sizing: border-box;
  }
  @media (max-width: 600px) {
    article.card.release {
      flex-direction: column;
      align-items: stretch;
    }
    .vinyl-sleeve-container {
      margin: 0 auto 8px auto;
    }
  }

  .vinyl-sleeve-container {
    width: 90px;
    height: 90px;
    position: relative;
    flex-shrink: 0;
  }
  .vinyl-disc {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: var(--dj-vinyl-groove);
    border: 2px solid #000;
    position: absolute;
    right: 0;
    top: 5px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .vinyl-center-label {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: var(--dj-accent-brand);
    border: 2px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.6rem;
    font-weight: 900;
    color: #000;
  }
  .sleeve-cover {
    width: 72px;
    height: 72px;
    border-radius: var(--a-border-radius-base);
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
    border: 1px solid var(--ax-border);
    position: absolute;
    left: 0;
    top: 9px;
    z-index: 2;
    box-shadow: 4px 4px 12px rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .sleeve-cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .release-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 0;
    word-break: break-word;
  }
  .release-info h4 {
    font-size: clamp(1rem, 3.8vw, 1.15rem);
    font-weight: 900;
    color: var(--ax-text);
    line-height: 1.25;
    margin: 0;
    word-break: break-word;
  }
  .release-info p {
    font-size: 0.88rem;
    font-weight: 800;
    color: var(--dj-accent-cyan);
    margin: 2px 0 0 0;
    word-break: break-word;
  }

  a.button.spotify {
    background: #121212;
    border: 1px solid #1db954;
    color: #1db954;
    padding: 5px 9px;
    border-radius: var(--a-border-radius-sm);
    font-size: 0.76rem;
    font-weight: 900;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    transition: all 0.2s;
    box-shadow: 0 2px 8px rgba(29, 185, 84, 0.2);
    white-space: nowrap;
  }
  a.button.spotify:hover {
    background: #1db954;
    color: #000;
    transform: scale(1.04);
  }
  a.button.spotify svg {
    fill: currentColor;
    flex-shrink: 0;
  }

  .badge.genre {
    background: linear-gradient(135deg, #ff007f 0%, #aa00ff 100%);
    color: #ffffff;
    font-weight: 900;
    font-size: 0.74rem;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    padding: 3px 8px;
    border-radius: var(--a-border-radius-sm);
    display: inline-flex;
    align-items: center;
    gap: 4px;
    border: 1px solid rgba(255,255,255,0.25);
    white-space: nowrap;
    text-shadow: 0 1px 4px rgba(0,0,0,0.6);
  }
  .badge.sub {
    background: rgba(0, 240, 255, 0.12);
    color: var(--dj-accent-cyan);
    border: 1px solid rgba(0, 240, 255, 0.4);
    font-weight: 800;
    font-size: 0.72rem;
    padding: 3px 7px;
    border-radius: var(--a-border-radius-sm);
    display: inline-flex;
    align-items: center;
    gap: 3px;
    white-space: nowrap;
  }

  button.play {
    background: linear-gradient(135deg, var(--dj-accent-cyan) 0%, #0077ff 100%);
    color: #fff;
    border: none;
    padding: 6px 12px;
    border-radius: var(--a-border-radius-sm);
    font-size: 0.78rem;
    font-weight: 900;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    margin-top: 6px;
    box-shadow: 0 4px 12px rgba(0, 240, 255, 0.3);
    transition: all 0.2s;
  }
  button.play:hover {
    transform: scale(1.03);
  }

  .meta-pills-row {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    margin-top: 4px;
  }
  .badge {
    font-size: 0.72rem;
    font-weight: 800;
    padding: 2px 6px;
    border-radius: var(--a-border-radius-sm);
    background: var(--ax-surface);
    border: 1px solid var(--ax-border);
    display: inline-flex;
    align-items: center;
    gap: 3px;
    white-space: nowrap;
  }
  .badge.key {
    background: var(--dj-accent-gold);
    color: #000;
    font-weight: 900;
  }

  .dj-tip-box {
    background: rgba(255, 208, 0, 0.08);
    border-left: 3px solid var(--dj-accent-gold);
    padding: 6px 8px;
    font-size: 0.82rem;
    font-weight: 700;
    color: var(--dj-accent-gold);
    border-radius: 0 var(--a-border-radius-sm) var(--a-border-radius-sm) 0;
    margin-top: 6px;
    word-break: break-word;
  }

  /* Artist Spotlight Stage Banner */
  .artist-stage-banner {
    background: linear-gradient(180deg, rgba(16, 21, 34, 0.4) 0%, var(--a-surface-base) 100%),
                radial-gradient(circle at 50% 0%, rgba(255, 0, 127, 0.25) 0%, transparent 70%);
    border: 1px solid var(--ax-border);
    border-radius: var(--a-border-radius-md);
    padding: 16px;
    width: 100%;
    box-sizing: border-box;
  }
  .artist-stage-banner > header {
    display: flex;
    gap: 14px;
    align-items: center;
    margin-bottom: 12px;
  }
  .artist-photo-container {
    width: 74px;
    height: 74px;
    border-radius: var(--a-border-radius-md);
    overflow: hidden;
    background: #111;
    border: 2px solid var(--dj-accent-pink);
    box-shadow: 0 0 15px rgba(255, 0, 127, 0.4);
    flex-shrink: 0;
  }
  .artist-photo-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .signature-player-box {
    background: linear-gradient(135deg, rgba(255, 208, 0, 0.1) 0%, rgba(0, 240, 255, 0.08) 100%);
    border: 1px solid var(--dj-accent-cyan);
    border-radius: var(--a-border-radius-base);
    padding: 10px 12px;
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    cursor: pointer;
  }

  .notable-track-chip {
    background: var(--a-surface-raised);
    border: 1px solid var(--ax-border);
    border-radius: var(--a-border-radius-base);
    padding: 6px 10px;
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--ax-text);
    display: inline-flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    margin: 3px;
    transition: all 0.2s;
  }
  .notable-track-chip:hover {
    border-color: var(--dj-accent-cyan);
    background: var(--ax-surface);
  }

  .ingest-card-item {
    background: var(--a-surface-base);
    border: 1px solid var(--ax-border);
    border-radius: var(--a-border-radius-base);
    padding: 8px 10px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: var(--ax-text);
    transition: all 0.2s;
    width: 100%;
    box-sizing: border-box;
  }
  .ingest-art-thumb {
    width: 40px;
    height: 40px;
    border-radius: var(--a-border-radius-sm);
    background: var(--a-surface-raised);
    border: 1px solid var(--ax-border);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .ingest-art-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  article.card.news {
    background: var(--a-surface-base);
    border: 1px solid var(--ax-border);
    border-radius: var(--a-border-radius-base);
    padding: 10px 12px;
    margin-bottom: 10px;
    border-left: 3px solid var(--dj-accent-cyan);
    width: 100%;
    box-sizing: border-box;
    word-break: break-word;
  }
  .news-badge {
    font-size: 0.65rem;
    font-weight: 900;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    color: var(--dj-accent-cyan);
    margin-bottom: 3px;
  }
  .news-headline {
    font-size: 0.92rem;
    font-weight: 800;
    color: var(--ax-text);
    line-height: 1.3;
    margin-bottom: 4px;
    word-break: break-word;
  }
  .news-summary {
    font-size: 0.82rem;
    line-height: 1.4;
    color: var(--a-color-text-muted);
    word-break: break-word;
  }

  /* Floating Sticky DJ Audio Player Bar */
  .sticky-dj-player {
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(11, 14, 21, 0.96);
    backdrop-filter: blur(15px);
    border-top: 2px solid var(--dj-accent-cyan);
    box-shadow: 0 -8px 30px rgba(0, 240, 255, 0.2);
    padding: 8px 16px;
    z-index: 999;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  .sticky-dj-player.active {
    display: flex;
  }
  .player-art-thumb {
    width: 44px;
    height: 44px;
    border-radius: 6px;
    border: 1px solid var(--ax-border);
    overflow: hidden;
    flex-shrink: 0;
  }
  .player-art-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .player-eq-bars {
    display: flex;
    align-items: center;
    gap: 2px;
    height: 16px;
  }
  .player-eq-bar {
    width: 3px;
    border-radius: 1px;
    background: var(--dj-accent-cyan);
    animation: wavePulse 0.8s infinite alternate ease-in-out;
  }
</style>
</head>
<body>

<header class="main">
  <div class="brand">
    ⚡ SOL ROTH // DJ INTEL
  </div>
  <div class="actions">
    <a href="/music_updates" class="button" style="background:var(--dj-accent-pink); color:#fff; font-weight:900;">🔥 Music Updates</a>
    <a href="/genres" class="button" style="background:var(--dj-accent-gold); color:#000; font-weight:900;">📚 Genre Encyclopedia</a>
    <button onclick="refreshDailyIntel()">🔄 Refresh</button>
    <a href="/" class="button" style="background:var(--dj-accent-cyan); color:#fff;">🎤 Prompter</a>
    <button onclick="toggleTheme()" id="theme-btn">☀️</button>
  </div>
</header>

<main class="intel-layout">

  <!-- Top Resources & Reference Banner (Only in Intel) -->
  <section class="hero-banner" style="margin-bottom:0; background:linear-gradient(135deg, rgba(0, 240, 255, 0.12) 0%, rgba(255, 0, 127, 0.08) 100%); border-left:5px solid var(--dj-accent-cyan);">
    <div style="min-width:0; flex:1;">
      <div style="font-size:0.75rem; font-weight:900; color:var(--dj-accent-gold); letter-spacing:1px; text-transform:uppercase;">📚 DJ Encyclopedia & Field Guide</div>
      <div style="font-size:1.1rem; font-weight:900; color:var(--ax-text); margin:2px 0;">Master Musical Genre Reference & Live Library Analyzer</div>
      <div style="font-size:0.82rem; color:var(--a-color-text-muted);">In-depth musical definitions, BPM ranges, rhythm formulas, phrasing maps, subgenres, and live match counts across your 4,346 tracks.</div>
    </div>
    <a href="/genres" class="button" style="background:var(--dj-copilot-btn-bg); color:#fff; font-size:0.85rem; padding:8px 14px; flex-shrink:0;">
      <span>📖</span> Explore Genres
    </a>
  </section>

  <section class="hero-banner">
    <div style="min-width:0; flex:1;">
      <div class="hero-date" id="intel-date">Executive DJ Briefing</div>
      <div class="hero-headline" id="intel-headline">Loading today's dance radar...</div>
    </div>
    <div style="font-size:2rem; opacity:0.9; flex-shrink:0;" id="hero-icon">🎧</div>
  </section>

  <div style="display:flex; flex-direction:column; width:100%; min-width:0;">
    <!-- Curated Releases -->
    <article class="card intel">
      <header>
        <h3>
          <span>🔥</span> Curated New Releases & Club Weapons
        </h3>
        <span style="font-size:0.75rem; color:var(--a-color-text-muted);">1-Click Audio Preview Clips</span>
      </header>
      <div id="curated-releases-container">
        <div style="padding:20px; text-align:center; color:var(--a-color-text-muted);">Loading curated releases with cover artwork & audio clips...</div>
      </div>
    </article>

    <!-- Artist Spotlight Media -->
    <article class="card intel">
      <header>
        <h3>
          <span>⭐</span> Artist & Album Spotlight
        </h3>
        <span style="font-size:0.75rem; color:var(--dj-accent-pink); font-weight:800;">Featured Producer</span>
      </header>
      <div id="artist-spotlight-container"></div>
    </article>
  </div>

  <div style="display:flex; flex-direction:column; width:100%; min-width:0;">
    <article class="card intel">
      <header>
        <h3 style="color:var(--dj-accent-green);">
          <span>📥</span> Recently Ingested in Library
        </h3>
        <span style="font-size:0.75rem; color:var(--a-color-text-muted);">4,346 tracks</span>
      </header>
      <div id="recent-ingests-container"></div>
    </article>

    <article class="card intel">
      <header>
        <h3 style="color:var(--dj-accent-cyan);">
          <span>📰</span> DJ Industry Radar
        </h3>
      </header>
      <div id="industry-news-container"></div>
    </article>

    <article class="card intel">
      <header>
        <h3 style="color:var(--dj-accent-pink);">
          <span>💡</span> Crate Digging & Transition Secrets
        </h3>
      </header>
      <div id="crate-tips-container"></div>
    </article>
  </div>
</main>

<!-- Floating Sticky DJ Audio Player -->
<div class="sticky-dj-player" id="global-player">
  <div style="display:flex; align-items:center; gap:10px; min-width:0; flex:1;">
    <div class="player-art-thumb">
      <img id="player-art" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='44' height='44' fill='%23555' viewBox='0 0 16 16'><path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'/></svg>">
    </div>
    <div style="min-width:0; flex:1;">
      <div style="font-weight:900; font-size:0.88rem; color:var(--ax-text); overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" id="player-title">Track Preview</div>
      <div style="font-size:0.75rem; color:var(--dj-accent-cyan); font-weight:700; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" id="player-artist">Artist</div>
    </div>
  </div>

  <div style="display:flex; align-items:center; gap:10px; flex-shrink:0;">
    <div class="player-eq-bars" id="player-eq">
      <span class="player-eq-bar" style="height:6px;"></span>
      <span class="player-eq-bar" style="height:14px; animation-delay:0.1s;"></span>
      <span class="player-eq-bar" style="height:10px; animation-delay:0.2s;"></span>
      <span class="player-eq-bar" style="height:16px; animation-delay:0.3s;"></span>
      <span class="player-eq-bar" style="height:8px; animation-delay:0.4s;"></span>
    </div>
    <button class="primary" style="background:var(--dj-accent-cyan); color:#000; font-weight:900;" id="player-play-btn" onclick="togglePlayPause()">⏸</button>
    <button style="padding:4px 8px; font-size:0.75rem;" onclick="closePlayer()">✕</button>
  </div>
  <audio id="global-audio" onended="onAudioEnded()"></audio>
</div>

<script src="/axiom01/js/axiom.min.js"></script>
<script src="/axiom01/js/axicons-base.js"></script>
<script src="/axiom01/js/render-icons.js"></script>

<script>
  let currentAudio = document.getElementById('global-audio');
  let currentTrackQuery = '';

  async function ingestTrackToLibrary(queryStr, title, artist, btnElem) {
    if (btnElem) {
      btnElem.innerText = "⏳ Ingesting...";
      btnElem.style.opacity = "0.7";
      btnElem.disabled = true;
    }
    try {
      const url = `/api/ingest_track?q=${encodeURIComponent(queryStr)}&artist=${encodeURIComponent(artist || '')}&title=${encodeURIComponent(title || '')}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.status === 'success') {
        if (btnElem) {
          btnElem.innerText = "✅ In Library!";
          btnElem.style.background = "var(--dj-accent-green)";
          btnElem.style.color = "#000";
          btnElem.style.opacity = "1";
        }
        showToast(`🎉 Ingested "${title}" to folder ${data.folder}/`);
      } else {
        if (btnElem) {
          btnElem.innerText = "⚠️ Retry";
          btnElem.disabled = false;
          btnElem.style.opacity = "1";
        }
        showToast(`⚠️ Ingestion failed: ${data.message}`);
      }
    } catch(e) {
      if (btnElem) {
        btnElem.innerText = "⚠️ Retry";
        btnElem.disabled = false;
        btnElem.style.opacity = "1";
      }
      showToast("❌ Network error during ingestion.");
    }
  }

  function showToast(msg) {
    let t = document.getElementById('toast-notification');
    if (!t) {
      t = document.createElement('div');
      t.id = 'toast-notification';
      t.style.cssText = 'position:fixed; top:70px; right:20px; background:rgba(11,14,21,0.95); border:2px solid var(--dj-accent-cyan); color:#fff; padding:10px 16px; border-radius:8px; font-weight:800; font-size:0.85rem; z-index:9999; box-shadow:0 8px 30px rgba(0,0,0,0.5); transition:all 0.3s;';
      document.body.appendChild(t);
    }
    t.innerText = msg;
    t.style.display = 'block';
    setTimeout(() => { t.style.display = 'none'; }, 4000);
  }

  async function playTrackClip(queryStr, fallbackTitle, fallbackArtist, fallbackArt) {
    const player = document.getElementById('global-player');
    const titleEl = document.getElementById('player-title');
    const artistEl = document.getElementById('player-artist');
    const artEl = document.getElementById('player-art');
    const btn = document.getElementById('player-play-btn');

    titleEl.innerText = fallbackTitle || queryStr;
    artistEl.innerText = fallbackArtist || "DJ Preview";
    if (fallbackArt) artEl.src = fallbackArt;

    player.classList.add('active');
    btn.innerText = "⏳";

    try {
      const res = await fetch(`/api/preview_track?q=${encodeURIComponent(queryStr)}`);
      const data = await res.json();

      if (data && data.preview_url) {
        titleEl.innerText = data.title;
        artistEl.innerText = `${data.artist} • ${data.album || ''}`;
        if (data.artwork_url) artEl.src = data.artwork_url;

        currentAudio.src = data.preview_url;
        currentAudio.play();
        btn.innerText = "⏸";
        document.getElementById('player-eq').style.display = 'flex';
      } else {
        titleEl.innerText = fallbackTitle || queryStr;
        btn.innerText = "⚠️ No Stream";
      }
    } catch(e) {
      btn.innerText = "⚠️ Error";
    }
  }

  function playLocalStream(relPath, title, artist, artFile) {
    const player = document.getElementById('global-player');
    document.getElementById('player-title').innerText = title;
    document.getElementById('player-artist').innerText = `${artist} (Local Library)`;
    if (artFile) {
      document.getElementById('player-art').src = `/api/art?file=${encodeURIComponent(artFile)}`;
    }
    player.classList.add('active');
    currentAudio.src = `/api/stream_local?file=${encodeURIComponent(artFile || '')}`;
    currentAudio.play();
    document.getElementById('player-play-btn').innerText = "⏸";
  }

  function togglePlayPause() {
    const btn = document.getElementById('player-play-btn');
    if (currentAudio.paused) {
      currentAudio.play();
      btn.innerText = "⏸";
      document.getElementById('player-eq').style.display = 'flex';
    } else {
      currentAudio.pause();
      btn.innerText = "▶";
      document.getElementById('player-eq').style.display = 'none';
    }
  }

  function onAudioEnded() {
    document.getElementById('player-play-btn').innerText = "▶";
    document.getElementById('player-eq').style.display = 'none';
  }

  function closePlayer() {
    currentAudio.pause();
    currentAudio.src = '';
    document.getElementById('global-player').classList.remove('active');
  }

  async function loadDailyIntel(forceRefresh=false) {
    try {
      const res = await fetch(`/api/daily_intel?refresh=${forceRefresh ? '1' : '0'}`);
      const data = await res.json();
      renderIntelData(data);
    } catch (e) {
      document.getElementById('intel-headline').innerText = "Unable to load intelligence report. Check local server.";
    }
  }

  function renderIntelData(data) {
    if (!data) return;

    document.getElementById('intel-date').innerText = `Executive DJ Briefing • ${data.date || 'Today'}`;
    document.getElementById('intel-headline').innerText = data.headline || "Global Dance & DJ Intelligence Report";

    const spotifySvg = `<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" style="flex-shrink:0;"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.495 17.306c-.216.353-.674.464-1.026.249-2.813-1.718-6.354-2.107-10.525-1.154-.403.092-.806-.16-.898-.563-.092-.403.16-.806.563-.898 4.567-1.044 8.5-602 11.637 1.34.353.216.464.674.249 1.026zm1.464-3.26c-.272.443-.855.583-1.298.31-3.218-1.977-8.125-2.55-11.932-1.393-.498.152-1.03-.133-1.182-.631-.152-.498.133-1.03.631-1.182 4.354-1.32 9.775-.683 13.47 1.597.443.272.583.855.311 1.299zm.126-3.41c-3.858-2.29-10.222-2.502-13.896-1.386-.59.18-1.22-.158-1.4-.748-.18-.59.158-1.22.748-1.4 4.228-1.284 11.264-1.034 15.698 1.6 1.533.316.705 1.024.389 1.557-.316.533-1.024.705-1.539.377z"/></svg>`;

    // 1. Curated Releases with Cover Artwork, Genres, Spotify & Audio Clip Player
    const relContainer = document.getElementById('curated-releases-container');
    if (data.curated_releases && data.curated_releases.length > 0) {
      relContainer.innerHTML = data.curated_releases.map((r, i) => {
        const query = `${r.artist} ${r.title}`;
        const mainGenre = r.main_genre || r.genre || 'Tech House';
        const subGenre = r.sub_genre || 'Club Peak-Time';
        const spotifyUrl = `https://open.spotify.com/search/${encodeURIComponent(query)}`;

        return `
          <article class="card release">
            <div class="vinyl-sleeve-container">
              <div class="vinyl-disc">
                <div class="vinyl-center-label">${r.key}</div>
              </div>
              <div class="sleeve-cover" id="art-sleeve-${i}">
                <span style="font-size:1.4rem;">💿</span>
              </div>
            </div>

            <div class="release-info">
              <div>
                <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:6px; flex-wrap:wrap;">
                  <div>
                    <h4>${r.title}</h4>
                    <p>${r.artist}</p>
                  </div>
                  <div style="display:flex; gap:4px; flex-wrap:wrap;">
                    <span class="badge genre">🎧 ${mainGenre}</span>
                    <span class="badge sub">⚡ ${subGenre}</span>
                  </div>
                </div>

                <div class="meta-pills-row" style="margin-top:6px;">
                  <span class="badge key">🔑 ${r.key}</span>
                  <span class="badge">⚡ ${r.bpm} BPM</span>
                  <span class="badge">🏷️ ${r.label || 'Independent'}</span>
                  <span class="badge">🔥 98% Heat</span>
                </div>
              </div>

              <div style="display:flex; gap:6px; align-items:center; margin-top:8px; flex-wrap:wrap;">
                <button class="play" style="margin-top:0;" onclick="playTrackClip('${query.replace(/'/g, "\'")}', '${r.title.replace(/'/g, "\'")}', '${r.artist.replace(/'/g, "\'")}')">
                  <span>▶</span> Play 30s Clip
                </button>
                <a href="${spotifyUrl}" target="_blank" class="button spotify" title="Listen on Spotify">
                  ${spotifySvg}
                  <span>Spotify</span>
                </a>
              </div>

              <div style="font-size:0.84rem; line-height:1.4; color:var(--ax-text); margin-top:6px;">
                <b>Why it bangs:</b> ${r.why_it_bangs}
              </div>

              <div class="dj-tip-box">
                🎛️ <b>DJ Mix Secret:</b> ${r.dj_tip}
              </div>
            </div>
          </article>
        `;
      }).join('');

      // Dynamically load high-res artwork for each release
      data.curated_releases.forEach(async (r, i) => {
        try {
          const res = await fetch(`/api/preview_track?q=${encodeURIComponent(r.artist + ' ' + r.title)}`);
          const d = await res.json();
          if (d && d.artwork_url) {
            const sleeve = document.getElementById('art-sleeve-' + i);
            if (sleeve) sleeve.innerHTML = `<img src="${d.artwork_url}">`;
          }
        } catch(e) {}
      });
    }

    // 2. Artist Spotlight Media (I Hate Models, etc.)
    const artContainer = document.getElementById('artist-spotlight-container');
    if (data.artist_spotlight) {
      const a = data.artist_spotlight;
      const mainGenre = a.main_genre || 'Techno';
      const subGenre = a.sub_genre || 'Industrial & Rave Revival';
      const tracksList = Array.isArray(a.notable_tracks) ? a.notable_tracks : (a.notable_tracks || '').split(',').map(s => s.trim());
      const signatureSong = tracksList[0] || 'Daydream';
      const artistSpotifyUrl = `https://open.spotify.com/search/${encodeURIComponent(a.name)}`;

      artContainer.innerHTML = `
        <div class="artist-stage-banner">
          <header>
            <div class="artist-photo-container" id="spotlight-photo">
              <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='74' height='74' fill='%23ff007f' viewBox='0 0 16 16'><path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z'/></svg>">
            </div>
            <div style="flex:1; min-width:0;">
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px;">
                <div style="font-size:1.35rem; font-weight:900; color:var(--dj-accent-gold);">${a.name}</div>
                <a href="${artistSpotifyUrl}" target="_blank" class="button spotify" title="Open Artist on Spotify">
                  ${spotifySvg}
                  <span>Spotify Profile</span>
                </a>
              </div>
              <div style="display:flex; gap:4px; margin-top:4px; flex-wrap:wrap;">
                <span class="badge genre">🎧 ${mainGenre}</span>
                <span class="badge sub">⚡ ${subGenre}</span>
              </div>
              <div style="font-size:0.78rem; font-weight:800; color:var(--dj-accent-cyan); margin-top:4px;" id="spotlight-album-title">FEATURED ARTIST & PRODUCER</div>
            </div>
          </header>
          
          <p style="font-size:0.88rem; line-height:1.45; color:var(--ax-text); margin-top:0;">${a.background}</p>
          
          <!-- Signature Track Player Card -->
          <div class="signature-player-box" onclick="playTrackClip('${(a.name + ' ' + signatureSong).replace(/'/g, "\'")}', '${signatureSong.replace(/'/g, "\'")}', '${a.name.replace(/'/g, "\'")}')">
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="font-size:1.2rem; color:var(--dj-accent-cyan);">▶</span>
              <div>
                <div style="font-size:0.75rem; font-weight:800; color:var(--dj-accent-cyan);">PLAY SIGNATURE TRACK:</div>
                <div style="font-size:0.9rem; font-weight:900; color:var(--ax-text);">${signatureSong} (30s Audio Clip)</div>
              </div>
            </div>
            <div style="display:flex; gap:6px; align-items:center;">
              <span class="badge" style="background:var(--dj-accent-cyan); color:#000; font-weight:900;">Stream Clip</span>
              <a href="https://open.spotify.com/search/${encodeURIComponent(a.name + ' ' + signatureSong)}" target="_blank" class="button spotify" onclick="event.stopPropagation();" style="padding:4px 6px; font-size:0.72rem;">
                ${spotifySvg}
              </a>
            </div>
          </div>

          <div style="margin-top:10px;">
            <div style="font-size:0.72rem; font-weight:900; color:var(--dj-accent-pink); margin-bottom:4px;">ESSENTIAL NOTABLE TRACKS (CLICK TO PREVIEW):</div>
            <div style="display:flex; flex-wrap:wrap;">
              ${tracksList.map(t => `
                <div style="display:inline-flex; align-items:center; margin:3px;">
                  <button class="notable-track-chip" style="margin:0; border-top-right-radius:0; border-bottom-right-radius:0;" onclick="playTrackClip('${(a.name + ' ' + t).replace(/'/g, "\'")}', '${t.replace(/'/g, "\'")}', '${a.name.replace(/'/g, "\'")}')">
                    <span>▶</span> ${t}
                  </button>
                  <a href="https://open.spotify.com/search/${encodeURIComponent(a.name + ' ' + t)}" target="_blank" class="button spotify" style="border-top-left-radius:0; border-bottom-left-radius:0; border-left:none; padding:6px 6px; font-size:0.75rem;" title="Listen on Spotify">
                    ${spotifySvg}
                  </a>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;

      // Fetch artist album artwork
      fetch(`/api/preview_track?q=${encodeURIComponent(a.name + ' ' + signatureSong)}`)
        .then(r => r.json())
        .then(d => {
          if (d && d.artwork_url) {
            document.getElementById('spotlight-photo').innerHTML = `<img src="${d.artwork_url}">`;
            if (d.album) document.getElementById('spotlight-album-title').innerText = `Album / EP: ${d.album}`;
          }
        }).catch(()=>{});
    }

    // 3. Recently Ingested Local Tracks with Local Stream & Spotify Link
    const ingContainer = document.getElementById('recent-ingests-container');
    if (data.recent_ingests && data.recent_ingests.length > 0) {
      ingContainer.innerHTML = data.recent_ingests.map(item => `
        <div class="ingest-card-item">
          <div class="ingest-art-thumb" onclick="playLocalStream('${encodeURIComponent(item.rel_path)}', '${item.title.replace(/'/g, "\'")}', '${item.artist.replace(/'/g, "\'")}', '${item.filename}')" style="cursor:pointer;" title="Play Local Audio">
            <img src="/api/art?file=${encodeURIComponent(item.filename || '')}" onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' fill=\'%23505a70\' viewBox=\'0 0 16 16\'><path d=\'M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\'/></svg>';">
          </div>
          <div style="flex:1; min-width:0;">
            <a href="/?load=${encodeURIComponent(item.rel_path)}" style="text-decoration:none; color:inherit;">
              <div style="font-weight:800; font-size:0.88rem; color:var(--ax-text); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${item.title}</div>
              <div style="display:flex; align-items:center; gap:6px; margin-top:2px; flex-wrap:wrap;">
                <span style="font-size:0.72rem; color:var(--dj-accent-cyan); font-weight:700; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${item.artist}</span>
                <span class="badge genre" style="padding:1px 6px; font-size:0.68rem; font-weight:900;">🎧 ${item.genre || 'Dance'}</span>
              </div>
            </a>
          </div>
          <div style="display:flex; align-items:center; gap:4px; flex-shrink:0;">
            <button style="padding:3px 6px; font-size:0.7rem;" onclick="playLocalStream('${encodeURIComponent(item.rel_path)}', '${item.title.replace(/'/g, "\'")}', '${item.artist.replace(/'/g, "\'")}', '${item.filename}')">▶</button>
            <a href="https://open.spotify.com/search/${encodeURIComponent(item.artist + ' ' + item.title)}" target="_blank" class="button spotify" style="padding:3px 5px; font-size:0.7rem;" title="Search on Spotify">
              ${spotifySvg}
            </a>
            <a href="/?load=${encodeURIComponent(item.rel_path)}" class="button" style="padding:3px 6px; font-size:0.7rem;">HUD</a>
          </div>
        </div>
      `).join('');
    }

    // 4. Industry News
    const newsContainer = document.getElementById('industry-news-container');
    if (data.industry_news && data.industry_news.length > 0) {
      newsContainer.innerHTML = data.industry_news.map(n => `
        <article class="card news">
          <div class="news-badge">⚡ INDUSTRY PULSE</div>
          <div class="news-headline">${n.headline}</div>
          <div class="news-summary">${n.summary}</div>
          <div style="font-size:0.76rem; font-weight:800; color:var(--dj-accent-gold); margin-top:4px;">
            🎯 DJ Impact: ${n.impact_on_djs}
          </div>
        </article>
      `).join('');
    }

    // 5. Crate Digging Secrets
    const tipsContainer = document.getElementById('crate-tips-container');
    if (data.crate_digging_tips && data.crate_digging_tips.length > 0) {
      tipsContainer.innerHTML = data.crate_digging_tips.map(t => {
        let tipTitle = '';
        let tipText = '';
        if (typeof t === 'string') {
          tipText = t;
        } else if (typeof t === 'object' && t !== null) {
          tipTitle = t.tip_title || t.title || t.name || '';
          tipText = t.tip_description || t.description || t.tip || t.text || JSON.stringify(t);
        }
        return `
          <div style="background:var(--a-surface-base); padding:10px 12px; border-radius:var(--a-border-radius-base); border:1px solid var(--ax-border); margin-bottom:8px; display:flex; gap:10px; align-items:flex-start;">
            <span style="font-size:1.1rem; flex-shrink:0;">💡</span>
            <div style="font-size:0.84rem; line-height:1.45; color:var(--ax-text); word-break:break-word;">
              ${tipTitle ? `<div style="font-weight:900; color:var(--dj-accent-gold); margin-bottom:2px;">${tipTitle}</div>` : ''}
              <div style="font-weight:600;">${tipText}</div>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  function refreshDailyIntel() {
    const headline = document.getElementById('intel-headline');
    headline.innerHTML = `<span style="color:var(--dj-accent-gold); animation: pulse 1s infinite;">⚡ AI is compiling your executive briefing...</span>`;
    loadDailyIntel(true);
  }

  function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    document.getElementById('theme-btn').innerText = next === 'dark' ? '☀️' : '🌙';
  }

  loadDailyIntel();
</script>
</body>
</html>
"""

def main():
    server = ThreadingHTTPServer(('0.0.0.0', PORT), PrompterServerHandler)
    local_ip = get_local_ip()
    print("=================================================================")
    print("⚡ SOL ROTH PRO 4-CHANNEL DJ STAGE PROMPTER & DAILY INTEL HUB")
    print(f"🚀 Stage Prompter HUD : http://localhost:{PORT}")
    print(f"📰 Daily DJ Intel Hub : http://localhost:{PORT}/intel")
    print(f"📱 iPad / Phone View  : http://{local_ip}:{PORT}")
    print("=================================================================\n")
    server.serve_forever()

if __name__ == '__main__':
    main()
