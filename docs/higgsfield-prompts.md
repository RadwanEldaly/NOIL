# NOIR — Visual Asset Direction & Higgsfield Prompts

All imagery on the live site should feel shot for a single campaign, not
stock-sourced. Every prompt below shares the same "world": desaturated
warm-black tones, a single hard key light, 35mm film grain, shallow depth
of field. Generate stills at minimum 2400px wide; generate the hero as a
6–8 second looping video plate.

## Global style suffix
Append this to every prompt to keep the whole site visually unified:
`cinematic film still, 35mm grain, single hard key light, warm black and
bone-white palette, one desaturated red accent, shallow depth of field,
editorial photography, no text, no logos`

## 1. Hero background plate (video loop, 6–8s)
**Placement:** `components/Hero.tsx`, replacing the CSS gradient backdrop.
**Prompt:** "Slow, almost imperceptible camera dolly forward through dark
studio smoke, a single shaft of warm light cutting diagonally through the
frame, dust particles drifting, near-black background fading to deep red
at the edges, abstract and atmospheric, no subject, no text" +
global style suffix.
**Motion notes:** loop seamlessly, keep motion under 5% of frame per
second so it reads as ambient rather than distracting behind the type.

## 2. Aurum — watch case study cover
**Placement:** `lib/data.ts` → `projects[0].cover`
**Prompt:** "Macro photograph of a gold mechanical watch movement, gear
train and jewels visible, dramatic side lighting on black background,
razor-thin depth of field, single droplet of light reflecting off the
bezel" + global style suffix.

## 3. Meridian — airline case study cover
**Placement:** `projects[1].cover`
**Prompt:** "Aircraft wing in silhouette against a golden-hour cloud
layer, shot from inside the cabin window, warm rim light on the wing
edge, deep shadow in the cabin foreground" + global style suffix.

## 4. Folio — publishing case study cover
**Placement:** `projects[2].cover`
**Prompt:** "Stack of hardcover books on a dark wooden surface, single
raking side light revealing texture on the spines, one book open with
pages fanned, out-of-focus background" + global style suffix.

## 5. Vela — skincare case study cover
**Placement:** `projects[3].cover`
**Prompt:** "Extreme close-up of a water droplet on bare skin, soft
studio light with one hard specular highlight, matte dark background,
sensory and tactile framing" + global style suffix.

## 6. Case study detail pairs (2 per project)
Use the same prompt as the cover but reframe as: (a) a product-in-context
lifestyle shot, (b) a macro detail shot. Keep the same lighting rig
description so the pair reads as one shoot.

## Implementation
1. Generate each still/video through Higgsfield.
2. Export and place in `public/projects/` using the exact filenames
   already referenced in `lib/data.ts` (e.g. `aurum-cover.jpg`).
3. For the hero video, export as `.mp4` + `.webm`, drop into `public/`,
   and swap the gradient `<motion.div>` background in `Hero.tsx` for a
   `<video autoPlay muted loop playsInline>` element — keep the existing
   gradient as a poster/fallback for reduced-motion users.
4. Run every generated still through the same LUT/grade (warm-black,
   crushed shadows, single red channel boost) so a Higgsfield still and a
   real photo shoot are indistinguishable side by side.
