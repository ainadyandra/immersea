document.addEventListener('DOMContentLoaded', () => {
  const audio = document.querySelector('[sound]');
  const eddyParticles = document.getElementById('eddies-particles');
  const phytoParticles = document.getElementById('phyto-particles');
  const satelliteMap = document.getElementById('satellite-map');
  const sunsetHorizon = document.getElementById('sunset-horizon');
  audio.addEventListener('sound-loaded', () => {
    window.dispatchEvent(new CustomEvent('subtitle', {detail: {text: 'You are floating beneath the waves...'}}));
    setTimeout(() => {
      eddyParticles.setAttribute('visible', 'true');
      window.dispatchEvent(new CustomEvent('subtitle', {detail: {text: 'Swirling eddies carry you...'}}));
    }, 8000);
    setTimeout(() => {
      phytoParticles.setAttribute('visible', 'true');
      window.dispatchEvent(new CustomEvent('subtitle', {detail: {text: 'Life awakens in the bloom...'}}));
    }, 16000);
    setTimeout(() => {
      satelliteMap.setAttribute('visible', 'true');
      window.dispatchEvent(new CustomEvent('subtitle', {detail: {text: 'NASA’s satellites watch from above...'}}));
    }, 21000);
    setTimeout(() => {
      eddyParticles.setAttribute('visible', 'false');
      phytoParticles.setAttribute('visible', 'false');
      satelliteMap.setAttribute('visible', 'false');
      sunsetHorizon.setAttribute('visible', 'true');
      window.dispatchEvent(new CustomEvent('subtitle', {detail: {text: 'A calm sunset horizon...'}}));
    }, 30000);
  });
});
