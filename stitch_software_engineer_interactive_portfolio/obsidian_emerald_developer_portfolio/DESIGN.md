---
name: Obsidian Emerald Developer Portfolio
colors:
  surface: '#0b1229'
  surface-dim: '#0b1229'
  surface-bright: '#323851'
  surface-container-lowest: '#060d24'
  surface-container-low: '#141a32'
  surface-container: '#181e36'
  surface-container-high: '#222941'
  surface-container-highest: '#2d344c'
  on-surface: '#dce1ff'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#dce1ff'
  inverse-on-surface: '#292f48'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#4edea3'
  on-primary: '#003824'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#006c49'
  secondary: '#ffb690'
  on-secondary: '#552100'
  secondary-container: '#ec6a06'
  on-secondary-container: '#4a1c00'
  tertiary: '#68dba9'
  on-tertiary: '#003825'
  tertiary-container: '#3eb686'
  on-tertiary-container: '#00422c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb690'
  on-secondary-fixed: '#341100'
  on-secondary-fixed-variant: '#783200'
  tertiary-fixed: '#85f8c4'
  tertiary-fixed-dim: '#68dba9'
  on-tertiary-fixed: '#002114'
  on-tertiary-fixed-variant: '#005137'
  background: '#0b1229'
  on-background: '#dce1ff'
  surface-variant: '#2d344c'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  code-block:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: -0.01em
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4.5rem
  space-4xl: 6rem
  container-max: 1200px
  gutter-desktop: 1.5rem
  gutter-mobile: 1rem
---

## Brand & Style
This design system expresses the caliber, technical mastery, and modern craftsmanship of a staff-level software engineer and systems architect. The visual identity merges the precision of developer IDE tooling with high-end editorial product marketing.

The aesthetic philosophy balances **Technical Glassmorphism** with **Calculated Minimalism**:
- **Controlled Radiance:** Deep, light-absorbing navy and slate canvases punctuated by focused, laser-sharp emerald bioluminescence and warm kinetic amber highlights.
- **Architectural Rigor:** Explicit grid systems, micro-fine hairline borders (`1px`), and monospaced diagnostic metadata establish instant engineering credibility.
- **Tactile Depth:** Frosted glass panels with selective backdrops, directional gradient boundaries, and ambient particle diffusion convey spatial polish without compromising legibility or performance.

## Colors
The color architecture is built strictly on an uncompromising dark mode foundation.

### Surface System
- **Canvas Base:** `#0A1128` — The primary root canvas; a profound midnight navy that prevents eye strain while giving vibrancy to foreground luminescences.
- **Surface Layer 1 (Cards & Elevators):** `rgba(30, 41, 59, 0.65)` (derived from `#1E293B`) layered over background blur.
- **Surface Layer 2 (Elevated Overlays & Modals):** `#1E293B` with 85% opacity.
- **Surface Muted / Inset:** `#0F172A` with solid fill for terminal emulators and inline code containers.

### Accent & Feedback Tokens
- **Primary Tech Emerald (`#10B981` / `#059669`):** Represents algorithmic health, online status, repo metrics, architecture triumphs, and primary interactive states. Used for terminal accents, active git commit representations, and primary focus halos.
- **Energetic Amber-Orange (`#F97316` / `#EA580C`):** Reserved for high-priority conversion points—direct outreach hooks, featured project milestones, open-source sponsorship badges, and critical interactive calls to action.
- **Borders & Rulers:** `rgba(255, 255, 255, 0.08)` for standard structural frames; `rgba(16, 185, 129, 0.28)` for active glowing hover thresholds.

### Text & Contrast Hierarchy
- **Text Headings:** `#F8FAFC` (100% white-slate for pristine contrast).
- **Text Body:** `#94A3B8` (relaxed neutral slate delivering comfortable rhythm against `#0A1128`).
- **Text Muted / Metadata:** `#64748B` (code comments, timestamps, license chips).

## Typography
Typographic rhythm sets structural intent. Dual-type pairing establishes tension between polished corporate presentation and technical dev precision:

- **Display & Prose:** `Plus Jakarta Sans` delivers a contemporary, clean neo-grotesque demeanor with humanized geometry. Tight tracking on headlines gives a crisp editorial weight.
- **Data, Diagnostics, & Snippets:** `JetBrains Mono` serves as the secondary structural voice. It governs tags, metric overlays, project metadata, git branches, line counters, and terminal viewports.
- All uppercase labels in `JetBrains Mono` must apply tracking (`0.06em` to `0.08em`) for optical legibility at small scale.

## Layout & Spacing
The portfolio relies on a centered 12-column fixed grid bounded by a max-width of `1200px` for optimal reading scan lines.

### Grid & Breakpoint Metrics
- **Desktop (>= 1024px):** 12 columns, `1.5rem` (24px) gutters, and minimum `2rem` outer page padding.
- **Tablet (768px – 1023px):** 8 columns, `1.25rem` (20px) gutters, `1.5rem` margins. Multicolumn showcase cards collapse to 2 columns.
- **Mobile (< 768px):** 4 columns, `1rem` (16px) gutters, `1rem` margins. System shifts strictly to single-column stacking.

### Spacing Cadence
- Use an `8px` baseline rhythm (`4px` for micro-component badges and code lines).
- Section partitions use `space-3xl` (mobile) to `space-4xl` (desktop) paired with micro-fine horizontal separators.
- Card padding remains fixed at `space-lg` (desktop) and `space-md` (mobile) to ensure visual density.

## Elevation & Depth
Depth is created through luminescence and semi-transparency rather than traditional opaque drop shadows:

- **Surface Glass (Level 0):** `background: rgba(30, 41, 59, 0.45); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.08);`
- **Surface Glass Elevated (Level 1):** `background: rgba(30, 41, 59, 0.7); backdrop-filter: blur(24px); border: 1px solid rgba(255, 255, 255, 0.14); box-shadow: 0 12px 32px -8px rgba(0, 0, 0, 0.5);`
- **Tech Halo (Hover on Cards & CTAs):** `box-shadow: 0 0 24px -4px rgba(16, 185, 129, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.15); border-color: rgba(16, 185, 129, 0.45);`
- **Amber Focus Glow (Primary Action Trigger):** `box-shadow: 0 0 28px -2px rgba(249, 115, 22, 0.35);`
- **Backdrop Conic Accents:** Subtle radial light spots (10% opacity, 300px blur radius) placed statically behind featured showcases to project ambient energy onto the deep `#0A1128` background.

## Shapes
The structural geometry uses moderate, rounded corners (Token `2`), imparting a modern, tailored aesthetic without feeling playful or toy-like:

- **Base Components (Inputs, Buttons, Badges, Tabs):** `0.5rem` (8px).
- **Cards & Modals (`rounded-lg`):** `1rem` (16px).
- **Hero Containers & Code Windows (`rounded-xl`):** `1.5rem` (24px).
- **Monospace Tags & Git Status Nodes:** Micro-radius `0.25rem` (4px) or full pill `9999px` strictly for status pings.

## Components

### Buttons
- **Primary Conversion Button (Warm Amber):** Solid `#F97316` background, `#0A1128` text, weight 700. On hover, shifts to `#EA580C` with an ambient glow (`box-shadow: 0 0 20px rgba(249, 115, 22, 0.4)`).
- **Tech Action Button (Emerald Glass):** Transparent background with `rgba(16, 185, 129, 0.1)` tint, border `1px solid #10B981`, text `#10B981`. On hover, background shifts to `rgba(16, 185, 129, 0.2)` with a `#10B981` box shadow.
- **Ghost Button:** Text `#94A3B8`, border `1px solid rgba(255, 255, 255, 0.1)`. On hover, text becomes `#F8FAFC`, background `rgba(255, 255, 255, 0.05)`.
- **Button Sizing:** Height 40px (Desktop), 44px (Mobile touch targets). Typography is anchored by `Plus Jakarta Sans` 14px SemiBold.

### Project & Engineering Cards
- Built using **Surface Glass (Level 0)** with smooth transition curves (`all 0.25s cubic-bezier(0.16, 1, 0.3, 1)`).
- **Header:** Project moniker in `headline-sm`, acompañado by an external link icon and monospaced deployment badge (`production`, `v2.4.0`).
- **Body:** Brief system architecture overview and engineering trade-offs.
- **Tech Stack Chips:** Small monospaced tags along the bottom edge.
- **Hover State:** Card transforms `translateY(-4px)` with the border transitioning to `rgba(16, 185, 129, 0.5)` and a subtle ambient emerald gradient wash inside.

### Monospace Badges & Chips
- Embedded with `JetBrains Mono` (`label-sm`).
- **Emerald Tech Badge:** Background `rgba(16, 185, 129, 0.12)`, border `1px solid rgba(16, 185, 129, 0.3)`, text `#10B981`. Includes an optional 6px pulsing green dot (`#10B981`) for "Available for hire" or "Live" statuses.
- **Amber Milestone Badge:** Background `rgba(249, 115, 22, 0.12)`, border `1px solid rgba(249, 115, 22, 0.3)`, text `#F97316`.
- **Neutral Stack Chip:** Background `rgba(30, 41, 59, 0.8)`, border `1px solid rgba(255, 255, 255, 0.06)`, text `#94A3B8`.

### Code Terminal / Snippet Container
- Window wrapper styling: Header bar styled with mac-like window controls (3 subtle dots: `#EF4444`, `#F59E0B`, `#10B981` at 8px size) and a centered file path label (`~/projects/orchestrator/src/worker.rs`) in `label-sm`.
- Container background: `#070C1E` (darker than the main background for visual containment).
- Font: `JetBrains Mono` (`code-block`), syntax highlighted with emerald keys, amber strings, and slate comments.
- Line numbers: Displayed along the left margin in `#475569`, separated by a fine 1px vertical border.

### Input Fields & Contact Elements
- Background: `rgba(15, 23, 42, 0.7)`.
- Border: `1px solid rgba(255, 255, 255, 0.12)`, corner radius `0.5rem`.
- Text: `#F8FAFC`, placeholder `#64748B`.
- Active/Focus: Border transitions to `#10B981` with `box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.18)`.

### Dividers & Section Anchors
- Horizontal rules: `1px` high with a gradient mask fading in from transparent, centering at `rgba(255, 255, 255, 0.12)`, and fading back to transparent.
- Section titles are accompanied by an auto-incrementing step index in `JetBrains Mono` (e.g., `// 01. ARCHITECTURE & WORK`).