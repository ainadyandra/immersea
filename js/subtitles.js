AFRAME.registerComponent('subtitle-bubble', {
  init: function () {
    this.text = document.createElement('a-text');
    this.text.setAttribute('value', '');
    this.text.setAttribute('align', 'center');
    this.text.setAttribute('color', '#ffffff');
    this.text.setAttribute('opacity', '0.7');
    this.text.setAttribute('width', '2.5');
    this.text.setAttribute('background', 'true');
    this.text.setAttribute('geometry', 'primitive: sphere; radius: 1.2');
    this.el.appendChild(this.text);
    this.currentSubtitle = '';
    window.addEventListener('subtitle', e => {
      this.text.setAttribute('value', e.detail.text);
    });
  }
});
