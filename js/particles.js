AFRAME.registerComponent('eddy-particles', {
  init: function () {
    this.el.setAttribute('particle-system', {
      preset: 'dust',
      color: '#88bfff',
      particleCount: 800,
      size: 0.5,
      opacity: 0.3
    });
    this.el.setAttribute('animation__rotate', {
      property: 'rotation',
      to: '0 360 0',
      loop: true,
      dur: 6000
    });
    this.el.setAttribute('animation__scale', {
      property: 'scale',
      to: '2 2 2',
      loop: true,
      dir: 'alternate',
      dur: 4000
    });
  }
});
AFRAME.registerComponent('phyto-particles', {
  init: function () {
    this.el.setAttribute('particle-system', {
      preset: 'snow',
      color: '#00ff7f',
      particleCount: 1000,
      size: 0.2,
      opacity: 0.7,
      direction: 'up'
    });
    this.el.setAttribute('animation', {
      property: 'position',
      to: '0 4 0',
      dur: 8000,
      loop: true,
      dir: 'alternate'
    });
  }
});
