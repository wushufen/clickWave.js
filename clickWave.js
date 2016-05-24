/**
 * https://github.com/wusfen/clickWave.js
 */
(function () {
  function Wave(x, y) {
    var wave = this;
    wave.el = document.createElement('div');
    wave.time = 1;
    setCss(wave.el, {
      'pointer-events': 'none',
      'z-index': 999999999,
      position: 'fixed',
      width: '100px',
      height: '100px',
      borderRadius: '999em',
      background: 'rgba(111,111,111,.25)',
      // background: 'rgba(0, 161, 255, 0.55)',
      transform: 'translate(-50%,-50%) scale(.1)',
      transition: wave.time + 's',
      left: x + 'px',
      top: y + 'px'
    });
  }
  Wave.prototype={
    show: function () {
      document.body.appendChild(this.el);
    },
    remove: function () {
      this.el.parentNode.removeChild(this.el);
    },
    animate: function () {
      var that = this;
      setTimeout(function () {
        setCss(that.el,{
          transform: 'translate(-50%,-50%) scale(1)',
          opacity: '0'
        });
      },1);
    }
  };

  function setCss(el, map) {
    for (var name in map) {
      var value = map[name];
      el.style[name] = value;
    }
  }

  if (new Wave().el.style.transform) {
    document.addEventListener('click', function(e) {
      var wave = new Wave(e.clientX, e.clientY);
      wave.show();
      wave.animate();
      setTimeout(function () {
        wave.remove();
      }, wave.time * 1000);
    })
  }
  // window.Wave = Wave;
}());
