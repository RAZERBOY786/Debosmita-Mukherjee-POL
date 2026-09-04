---
name: Obsidian Emerald Light
colors:
  surface: '#faf8ff'
  surface-dim: '#d3d9f8'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f2ff'
  surface-container: '#ebedff'
  surface-container-high: '#e3e7ff'
  surface-container-highest: '#dce1ff'
  on-surface: '#141a32'
  on-surface-variant: '#3d4a42'
  inverse-surface: '#292f48'
  inverse-on-surface: '#eff0ff'
  outline: '#6d7a72'
  outline-variant: '#bccac0'
  surface-tint: '#006c4a'
  primary: '#006948'
  on-primary: '#ffffff'
  primary-container: '#00855d'
  on-primary-container: '#f5fff7'
  inverse-primary: '#68dba9'
  secondary: '#006398'
  on-secondary: '#ffffff'
  secondary-container: '#5bb8fe'
  on-secondary-container: '#00476e'
  tertiary: '#a33900'
  on-tertiary: '#ffffff'
  tertiary-container: '#cc4900'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#85f8c4'
  primary-fixed-dim: '#68dba9'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#005137'
  secondary-fixed: '#cce5ff'
  secondary-fixed-dim: '#93ccff'
  on-secondary-fixed: '#001d31'
  on-secondary-fixed-variant: '#004b73'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#ffb599'
  on-tertiary-fixed: '#370e00'
  on-tertiary-fixed-variant: '#7f2b00'
  background: '#faf8ff'
  on-background: '#141a32'
  surface-variant: '#dce1ff'
  surface-canvas: '#f8fafc'
  surface-card: '#ffffff'
  surface-inset: '#f1f5f9'
  border-subtle: '#e2e8f0'
  border-strong: '#cbd5e1'
  emerald-vivid: '#10b981'
  emerald-deep: '#047857'
  blue-vivid: '#2563eb'
  amber-vivid: '#f97316'
  text-primary: '#0a1128'
  text-secondary: '#334155'
  text-muted: '#64748b'
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
This design system crafts an immaculate, razor-sharp software engineering portfolio built purposefully in a high-contrast light mode. Designed for elite systems architects, full-stack engineers, and technical leaders, the aesthetic fuses developer-tool clarity with modern minimalist editorial restraint.

The aesthetic philosophy centers on **Technical Minimalism with Tactical Color Accents**:
- **Pristine Precision:** Crisp slate-white and pure white surfaces paired with deep obsidian navy typography (`#0A1128`) guarantee uncompromised WCAG AAA readability, rejecting muddy gray-on-gray low-contrast trends.
- **Architectural Edge:** Structural `1px` crisp borders define cards, viewports, and interactive containers, instilling instant engineering discipline and spatial organization.
- **Vibrant Purpose:** Emerald green (`#059669`) asserts system health, technical mastery, and primary interactive states; tech blue/cyan (`#0284C7`) delivers familiar, accessible navigation; warm amber (`#EA580C`) commands decisive call-to-action attention.
- **Tactile Polish:** Restrained surface drop shadows and subtle frosted glass treatments deliver clean dimensional hierarchy without sacrificing performance or visual noise.

## Colors
The palette leverages a crisp, light-mode foundation engineered for long reading sessions and clear technical architecture review.

### Canvas & Surface Architecture
- **Canvas Base (`#F8FAFC`):** An ultra-clean slate tint that prevents retinal glare while offering a soft, paper-like surface foundation.
- **Surface Layer (Cards & Modules - `#FFFFFF`):** Crisp pure white elevated above the canvas using razor `1px` borders (`#E2E8F0`) and subtle contact shadows.
- **Surface Inset / Terminal Base (`#F1F5F9`):** A cooler, structured slate for terminal emulators, code blocks, diff viewers, and inset controls.

### Chromatic Accents
- **Primary Emerald (`#059669` / `#10B981`):** Represents algorithmic health, deployed releases, verified tests, and primary actions. It anchors the developer identity with authority and fresh vibrancy.
- **Secondary Tech Blue (`#0284C7` / `#2563EB`):** Dedicated to hyperlinked documentation, external technical artifacts, git branches, and inline interactive highlights.
- **Tertiary Kinetic Amber (`#EA580C` / `#F97316`):** Reserved exclusively for conversion surfaces—direct hire outreach, meeting scheduler CTAs, and featured milestone tags.

### Text Contrast Hierarchy
- **Text Headings & Structural Titles (`#0A1128`):** Deep obsidian navy yielding a stellar contrast ratio (> 14:1) against white cards and canvas.
- **Text Body (`#334155`):** Slate navy, offering balanced typographic rhythm and soft legibility for multi-paragraph technical case studies.
- **Text Metadata (`#64748B`):** Reserved for monospaced timestamps, code comments, and secondary diagnostic labels.

## Typography
Typographic discipline pairs human-centered geometric clarity with engineering rigor:

- **Primary Voice (`Plus Jakarta Sans`):** Dictates hero banners, section headers, narrative case studies, and primary button labels. Tight letter-spacing on display headlines creates a dense, premium editorial presentation.
- **Technical Voice (`JetBrains Mono`):** Powers code listings, system metrics, performance markers, commit hashes, navigation indexes, and small uppercase labels. Monospace elements build immediate technical credibility.
- **Rules of Engagement:** Uppercase labels in `JetBrains Mono` must always carry letter spacing between `0.06em` and `0.08em`. Code inline snippets must render inside padded inline pills with `#F1F5F9` background and `#0A1128` text.

## Layout & Spacing
The layout uses a 12-column responsive grid locked to a max width of `1200px` for optimal typographic line length and visual structure.

### Layout Model
- **Desktop (>= 1024px):** 12 columns, `1.5rem` (24px) gutters, and a minimum of `2rem` page padding. Main showcase content employs asymmetric 8/4 or symmetric 6/6 column distributions.
- **Tablet (768px – 1023px):** 8 columns, `1.25rem` (20px) gutters, `1.5rem` margins. Two-column project grids collapse naturally without visual fragmentation.
- **Mobile (< 768px):** 4 columns, `1rem` (16px) gutters, `1rem` margins. All modules reflow to a linear, single-column reading stack.

### Spacing Cadence
- An 8px base grid rhythm governs component dimensions, with a 4px sub-grid for badges and status indicators.
- Vertical space between thematic portfolio chapters (About, Work, Open Source, Contact) utilizes `space-4xl` on desktop, scaling to `space-2xl` on mobile devices.
- Card interiors enforce `space-lg` (24px) on desktop to guarantee spacious whitespace around technical descriptions.

## Elevation & Depth
In this clean light aesthetic, depth is articulated through **crisp structural borders** combined with **soft, natural ambient shadows**. The system avoids murky heavy drop shadows in favor of luminous daylight layering:

- **Level 0 (Canvas Surface):** Solid `#F8FAFC` flat foundation.
- **Level 1 (Card & Module Resting):** Pure `#FFFFFF` fill bounded by a crisp `1px solid #E2E8F0` border, grounded by a subtle dual-layer shadow: `box-shadow: 0 1px 3px 0 rgba(10, 17, 40, 0.04), 0 4px 12px -2px rgba(10, 17, 40, 0.03)`.
- **Level 2 (Elevated & Active Hover):** `box-shadow: 0 8px 24px -4px rgba(10, 17, 40, 0.08), 0 2px 6px -1px rgba(10, 17, 40, 0.04)`. Card border transitions cleanly to `#059669` or `#CBD5E1` with a dynamic `-2px` vertical translation.
- **Level 3 (Modals & Navigation Bar):** Semi-transparent frosted glass: `background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid #E2E8F0; box-shadow: 0 4px 20px -2px rgba(10, 17, 40, 0.05)`.
- **Focus Rings:** Accessible, dual-offset rings composed of `box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px #059669`.

## Shapes
The structural geometry uses rounded corners (`roundedness: 2`), balancing software engineering rigor with refined human-centered usability:

- **Micro Badges & Syntax Pills:** `0.25rem` (4px) or full pill `9999px` strictly for active status indicators and release tags.
- **Standard Controls (Buttons, Form Inputs, Filter Tabs):** `0.5rem` (8px).
- **Cards, Panels & Code Containers (`rounded-lg`):** `1rem` (16px).
- **Hero Containers & Major Showcase Frames (`rounded-xl`):** `1.5rem` (24px).

## Components

### Buttons
- **High-Impact CTA (Warm Amber):** Solid `#EA580C` background, `#FFFFFF` text, weight 700. On hover, shifts to `#C2410C` with `box-shadow: 0 4px 14px rgba(234, 88, 12, 0.3)`. Used exclusively for primary conversion touchpoints (e.g., "Schedule Technical Chat", "Download Resume").
- **Primary Tech Button (Emerald):** Solid `#059669` background, `#FFFFFF` text, weight 600. On hover: shifts to `#047857` with `box-shadow: 0 4px 12px rgba(5, 150, 105, 0.25)`.
- **Secondary Button (Tech Blue Outline):** Background transparent, border `1px solid #0284C7`, text `#0284C7`. On hover: background `#F0F9FF`, text `#0369A1`.
- **Ghost / Tertiary Button:** Text `#334155`, transparent fill. On hover: background `#F1F5F9`, text `#0A1128`.
- **Dimensions:** Height 40px (Desktop), 44px (Mobile). Internal padding: `0.75rem 1.25rem`.

### Project & Engineering Cards
- Built on `#FFFFFF` surface with `1px solid #E2E8F0` border and `rounded-lg` corners.
- **Header:** Project title in `headline-sm` (`#0A1128`), flanked by a live deployment tag (`JetBrains Mono`, `label-sm`) and external link icons.
- **Metrics Line:** Key performance achievements (e.g., `⚡ 42% latency drop`, `12.5k GitHub stars`) highlighted in `#059669` bold text.
- **Description:** Clear architectural overview in `body-md` (`#334155`).
- **Footer:** Row of neutral stack chips with a secondary action link in `#0284C7`.
- **Hover State:** Border shifts to `#059669`, elevates by `-2px`, and adopts Level 2 shadow.

### Chips & Badges
- **Status Live Badge:** Pill-shaped (`rounded-full`), background `#ECFDF5`, border `1px solid #A7F3D0`, text `#047857`, featuring a pulsing 6px green LED dot (`#10B981`).
- **Milestone / High-Impact Badge:** Background `#FFF7ED`, border `1px solid #FFEDD5`, text `#C2410C`.
- **Tech Stack Chip:** Background `#F1F5F9`, border `1px solid #E2E8F0`, text `#334155`, styled in `label-sm` monospaced font with `0.25rem 0.5rem` padding.

### Code Terminal & Snippet Window
- **Container Window:** Background `#F8FAFC`, border `1px solid #CBD5E1`, rounded `1rem`.
- **Terminal Header Bar:** Background `#F1F5F9`, border-bottom `1px solid #E2E8F0`, displaying 3 tactile window buttons (`#EF4444`, `#F59E0B`, `#10B981`) and the current file path in `label-sm` (`~/architecture/pipeline.go`).
- **Typography & Syntax:** `JetBrains Mono` (`code-block`), line height `22px`. Left margin contains muted line numbers in `#94A3B8`. Keywords highlighted in `#059669`, strings in `#EA580C`, and types in `#0284C7`.

### Input Fields & Interactive Controls
- Surface `#FFFFFF`, border `1px solid #CBD5E1`, border-radius `0.5rem`, padding `0.75rem 1rem`.
- Text `#0A1128`, placeholder `#94A3B8`.
- Focus state: Border color changes to `#059669` with `box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.15)`.

### Lists & Activity Feeds
- Career timeline and open-source commit feeds use a `1px` continuous vertical stem in `#E2E8F0`.
- Nodes use an 8px circular indicator filled with `#059669` and bordered by `2px solid #FFFFFF`.
- Commit messages and date badges use `JetBrains Mono` (`label-md`).