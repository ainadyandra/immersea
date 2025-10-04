AFRAME.registerComponent('interactable-eddy', {
  init: function () {
    this.el.addEventListener('mouseenter', () => {
      spawnDataPanel('Eddies', 'Eddies are swirling water masses. They transport nutrients and heat...');
    });
    this.el.addEventListener('pinchstarted', () => {
      spawnDataPanel('Eddies', 'Eddies are swirling water masses. They transport nutrients and heat...');
    });
  }
});
function spawnDataPanel(title, text) {
  const panel = document.createElement('a-entity');
  panel.setAttribute('geometry', 'primitive: plane; height: 1; width: 2');
  panel.setAttribute('material', 'color: #222; opacity: 0.85');
  panel.setAttribute('text', `value: ${title}\n${text}; color: #aaffee; width: 1.8; align: center`);
  panel.setAttribute('position', '0 2 -2');
  panel.setAttribute('animation', 'property: material.opacity; to: 0; dur: 3000; delay: 5000');
  document.querySelector('a-scene').appendChild(panel);
  setTimeout(() => panel.parentNode && panel.parentNode.removeChild(panel), 8000);
}