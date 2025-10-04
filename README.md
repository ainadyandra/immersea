# Immersea: WebXR Sea Turtle Underwater Experience

Immersea is an immersive WebXR experience built with A-Frame, placing the user in the perspective of a sea turtle swimming underwater. The scene combines narration, interactive ocean science data, and dynamic particle effects to illustrate the wonders of ocean currents, phytoplankton blooms, and satellite observations.

## Features

- **WebXR support**: Works in VR headsets and desktop browsers.
- **Ocean shader background**: Realistic underwater gradient with light rays.
- **Camera motion**: Slight bob and sway to simulate swimming.
- **Narration audio**: Auto-plays on scene start, with synchronized subtitles.
- **Bubble subtitles**: Semi-transparent, floating text in front of the user.
- **Eddies particle system**: Swirling water effects triggered by narration; interactive via gaze or hand tracking.
- **Phytoplankton particle effects**: Glowing green particles rise when “life awakens” in narration.
- **Satellite ocean data maps**: Fade in above the waterline, inspectable by moving your head.
- **3D turtle models**: Swim near the user and interact with currents.
- **Sunset horizon**: Scene fades to a calm sunset to conclude the experience.
- **Hand tracking & gaze interactivity**: Point or hover to reveal scientific info panels.

## Getting Started

1. **Clone this repo in GitHub Codespaces or locally.**
2. **Add assets** to the `assets/` folder:
   - `narration.mp3` — Narration audio file.
   - `turtle.glb` — 3D turtle model.
   - Satellite map images (e.g., `satellite_map_1.png`).
3. **Preview the scene:**
   - In Codespaces, start a static server (`npx live-server` or `npx http-server`).
   - Open the preview URL, or use a WebXR-enabled browser for VR.
4. **Interact** using gaze or hand tracking (supported on compatible headsets).

## Folder Structure

```
index.html
assets/
  narration.mp3
  turtle.glb
  satellite_map_1.png
js/
  subtitles.js
  narration-events.js
  particles.js
  interactivity.js
```
## License

MIT

## Credits

- Built with [A-Frame](https://aframe.io/), [aframe-extras](https://github.com/donmccurdy/aframe-extras), and [aframe-particle-system](https://github.com/IdeaSpaceVR/aframe-particle-system-component).
- Satellite data from NASA, turtle model from [Sketchfab](https://sketchfab.com/) or similar sources.
