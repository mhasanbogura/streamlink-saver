# StreamLink Saver — Design Exploration

## Three Possible Directions

### 1. Broadcast Atelier
**Very Brief Intro:** An editorial, cinematic utility inspired by professional post-production consoles. The design makes a small conversion task feel precise, trusted, and intentional.

**Probability:** 0.07

### 2. Iceberg Command
**Very Brief Intro:** A light, clinical technical interface built from cool-white surfaces, ink typography, and one assertive signal color. It prioritizes uncompromising legibility and quiet confidence.

**Probability:** 0.04

### 3. Signal Observatory
**Very Brief Intro:** A dark, atmospheric control surface that treats a link as a signal travelling into a local media library. Soft ambient texture and telemetry-like details create a high-end technical character.

**Probability:** 0.09

---

## Selected Direction: Broadcast Atelier

### Design Movement
The extension follows **Swiss editorial design translated into a broadcast control interface**. It combines rigorous typographic hierarchy, restrained compositional asymmetry, and material depth reminiscent of a premium media-production tool.

### Core Principles
1. **One decisive action:** the URL field and Save `.strm` action remain visually dominant at every point.
2. **Editorial precision:** strong type scale, hairline rules, calibrated whitespace, and structured metadata communicate reliability.
3. **Tactile digital material:** warm dark surfaces are layered with restrained grain, soft inner highlights, and crisp high-contrast controls.
4. **Status with meaning:** state changes are clear, quiet, and specific rather than decorative.

### Color Philosophy
The primary canvas is **near-black graphite**, selected to focus attention and emulate professional broadcast equipment. A precise, electric **signal vermilion** marks intentional actions and successful output without turning the interface into a neon dashboard. Pale ivory text warms the composition; cool graphite layers create depth and hierarchy.

### Layout Paradigm
The popup uses a **vertical editorial strip** rather than a generic centered card. A narrow masthead anchors the top, the conversion task flows down a left-weighted content rail, and a compact output plate locks the bottom. The generous side gutter makes the interface feel like a carefully cut hardware panel.

### Signature Elements
1. A **signal-route line** that visually carries the source URL into the generated `.strm` file.
2. A **framed output plate** with filename, format badge, and compact status dot.
3. A fine **calibration grid and grain layer** that give the graphite background texture without competing with content.

### Interaction Philosophy
Interactions feel like operating a precise studio instrument. Inputs gain a focused red edge, buttons compress subtly on press, and the output plate updates with a short, direct status confirmation. The current tab can be adopted into the field without leaving the popup.

### Animation
Transitions use a snappy custom ease-out (`cubic-bezier(0.23, 1, 0.32, 1)`) and stay below 220ms. The signal-route line sweeps briefly only after saving; the output status dot resolves from low opacity rather than scaling from zero. Reduced-motion settings remove all nonessential movement.

### Typography System
**Space Grotesk** provides the assertive display and interface headings; **IBM Plex Mono** provides URLs, filenames, metadata, and status. Display titles use 600–700 weight with close tracking, while body text is 400–500 with expanded leading. The mono face is never used for large headlines.

### Brand Essence
**StreamLink Saver turns a streaming URL into a media-library-ready `.strm` file in one controlled, local action.**

**Personality:** exacting, cinematic, calm.

### Brand Voice
Headlines are directive and concise; CTAs are specific verbs; microcopy describes actual file behavior.

> “Route a stream into your library.”

> “Save link as `.strm`.”

### Wordmark & Logo
The logomark is a **split-frame route symbol**: a square media frame interrupted by a single traveling signal line that exits to the right as a file tab. It is abstract, distinctive, and contains no text. The wordmark is a custom-cased treatment of “StreamLink” with a discreet mono “SAVER” label.

### Signature Brand Color
**Signal Vermilion — `#FF5630`**. It is reserved for the save action, focus state, and success signal.
