// Narration-driven subtitle and scene event synchronization
const subtitles = [
  {start: 0, end: 10, text: "Welcome to the endless ocean. To you, it may seem still and quiet. But beneath this surface, the water is never truly at rest."},
  {start: 10, end: 25, text: "Hidden rivers twist and swirl, shaping my journey every day. We call them eddies."},
  {start: 25, end: 45, text: "Eddies are great rotating loops of water, born where currents meet and winds stir. They can grow hundreds of kilometers wide — as large as a country! However, you cannot see them from here; you can only feel their pull."},
  {start: 45, end: 70, text: "These eddies are able to form due to many different factors. Some are created when water of different densities or speeds meet each other, some are formed from river plumes or fronts. Others arise from unstable major ocean currents — for example, in the Gulf Stream."},
  {start: 70, end: 95, text: "Within these swirling giants, life awakens. Eddies pull nutrients up from the dark deep, stirring invisible soups that feed the tiniest of beings — phytoplankton. They are small, but together, they breathe for the planet, making much of the oxygen you humans inhale each day."},
  {start: 95, end: 110, text: "NASA’s PACE mission helps you see what we cannot — the shifting colors of plankton blooms, tracked from space, revealing where the ocean comes alive."},
  {start: 110, end: 130, text: "But eddies are not always kind. They carry us far from home, pulling young ones off course. They can scatter food, or trap it. We adapt, but survival is never promised in these spiraling waters."},
  {start: 130, end: 150, text: "Yet, the story of eddies is not just mine. They shape your world too. Eddies move heat between the ocean surface and deeper layers, store carbon from the air, and even influence weather patterns."},
  {start: 150, end: 170, text: "Satellites watch from above, measuring these hidden rivers, teaching you how the ocean breathes, and how it responds to a changing climate."},
  {start: 170, end: 190, text: "From the smallest plankton drifting in the light, to great swirling currents that circle the globe, everything in the ocean is connected. And so are you."},
  {start: 190, end: 210, text: "By understanding us, you learn how to protect the seas — and yourselves. My story is written in water, but you hold the power to change its future."},
  {start: 210, end: 225, text: "Together, with knowledge, care, and curiosity… you can keep our oceans alive."}
];

document.addEventListener('DOMContentLoaded', () => {
  const audio = document.querySelector('[sound]');
  const eddyParticles = document.getElementById('eddies-particles');
  const phytoParticles = document.getElementById('phyto-particles');
  const satelliteMap = document.getElementById('satellite-map');
  const sunsetHorizon = document.getElementById('sunset-horizon');
  let subtitleIdx = 0;
  let intervalId = null;

  function showSubtitle(idx) {
    window.dispatchEvent(new CustomEvent('subtitle', {detail: {text: subtitles[idx].text}}));
  }

  function clearSubtitle() {
    window.dispatchEvent(new CustomEvent('subtitle', {detail: {text: ''}}));
  }

  function onTick() {
    // get current audio time in seconds
    let t = (audio.components.sound && audio.components.sound.pool && audio.components.sound.pool.children[0])
      ? audio.components.sound.pool.children[0].currentTime
      : 0;
    // Show correct subtitle
    if (subtitleIdx < subtitles.length && t >= subtitles[subtitleIdx].start) {
      showSubtitle(subtitleIdx);
      // Scene event triggers
      switch(subtitleIdx) {
        case 1: // "eddies"
          eddyParticles.setAttribute('visible', 'true');
          break;
        case 4: // "life awakens"
          phytoParticles.setAttribute('visible', 'true');
          break;
        case 5: // "NASA"
        case 8: // "satellites"
          satelliteMap.setAttribute('visible', 'true');
          break;
        case 9: // near ending
          eddyParticles.setAttribute('visible', 'false');
          phytoParticles.setAttribute('visible', 'false');
          satelliteMap.setAttribute('visible', 'false');
          break;
        case 11: // sunset
          sunsetHorizon.setAttribute('visible', 'true');
          break;
      }
      // Advance to next subtitle if end time passed
      if (t >= subtitles[subtitleIdx].end) {
        clearSubtitle();
        subtitleIdx++;
      }
    }
  }

  // Start interval when audio plays
  audio.addEventListener('sound-loaded', () => {
    subtitleIdx = 0;
    intervalId = setInterval(onTick, 350);
  });
  // Stop interval when audio ends
  audio.addEventListener('sound-ended', () => {
    clearInterval(intervalId);
    clearSubtitle();
    eddyParticles.setAttribute('visible', 'false');
    phytoParticles.setAttribute('visible', 'false');
    satelliteMap.setAttribute('visible', 'false');
    sunsetHorizon.setAttribute('visible', 'true');
  });
});
