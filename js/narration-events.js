// Narration-driven subtitle and scene event synchronization
const subtitles = [
  {start: 0, end: 12, text: "Welcome to the endless ocean. To you, it may seem still and quiet. But beneath this surface, the water is never truly at rest. Hidden rivers twist and swirl, shaping my journey every day. We call them eddies."},
  {start: 12, end: 28, text: "Eddies are great rotating loops of water, born where currents meet and winds stir. They can grow hundreds of kilometers wide, that is as large as a country! However, you cannot see them from here, you can only feel their pull."},
  {start: 28, end: 46, text: "These eddies are able to form due to many different factors. Some eddies are created when water of different densities or speeds meet each other, some are formed from river plumes or fronts. While there are also eddies that form because of the unstable major ocean currents. For example, in the Gulf Stream."},
  {start: 46, end: 65, text: "Within these swirling giants, life awakens. Eddies pull nutrients up from the dark deep, stirring invisible soups that feed the tiniest of beings, phytoplankton. They are small, but together, they breathe for the planet, making much of the oxygen you humans inhale each day."},
  {start: 65, end: 79, text: "NASA’s PACE mission helps you see what we cannot, the shifting colors of plankton blooms, tracked from space, revealing where the ocean comes alive."},
  {start: 79, end: 95, text: "But eddies are not always kind. They carry us far from home, pulling young ones off course. They can scatter food, or trap it. We adapt, but survival is never promised in these spiraling waters."},
  {start: 95, end: 112, text: "Yet, the story of eddies is not just mine. They shape your world too. Eddies move heat between the ocean surface and deeper layers, store carbon from the air, and even influence weather patterns."},
  {start: 112, end: 130, text: "Satellites watch from above, measuring these hidden rivers, teaching you how the ocean breathes, and how it responds to a changing climate."},
  {start: 130, end: 150, text: "From the smallest plankton drifting in the light, to great swirling currents that circle the globe, everything in the ocean is connected. And so are you. By understanding us, you learn how to protect the seas, and yourselves."},
  {start: 150, end: 171, text: "My story is written in water, but you hold the power to change its future. Together, with knowledge, care, and curiosity… you can keep our oceans alive."}
];

// The rest of your file remains unchanged!
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
    let t = (audio.components.sound && audio.components.sound.pool && audio.components.sound.pool.children[0])
      ? audio.components.sound.pool.children[0].currentTime
      : 0;
    if (subtitleIdx < subtitles.length && t >= subtitles[subtitleIdx].start) {
      showSubtitle(subtitleIdx);
      switch(subtitleIdx) {
        case 1: eddyParticles.setAttribute('visible', 'true'); break;
        case 3: phytoParticles.setAttribute('visible', 'true'); break;
        case 4: satelliteMap.setAttribute('visible', 'true'); break;
        case 7: satelliteMap.setAttribute('visible', 'true'); break;
        case 8:
          eddyParticles.setAttribute('visible', 'false');
          phytoParticles.setAttribute('visible', 'false');
          satelliteMap.setAttribute('visible', 'false');
          break;
        case 9: sunsetHorizon.setAttribute('visible', 'true'); break;
      }
      if (t >= subtitles[subtitleIdx].end) {
        clearSubtitle();
        subtitleIdx++;
      }
    }
  }

  audio.addEventListener('sound-loaded', () => {
    subtitleIdx = 0;
    intervalId = setInterval(onTick, 350);
  });
  audio.addEventListener('sound-ended', () => {
    clearInterval(intervalId);
    clearSubtitle();
    eddyParticles.setAttribute('visible', 'false');
    phytoParticles.setAttribute('visible', 'false');
    satelliteMap.setAttribute('visible', 'false');
    sunsetHorizon.setAttribute('visible', 'true');
  });
});
