/*
 * 1.11. Hello World Animated Edition
 */

/*
 * canvas 最重要的一个特性就是 animation
 * 在这个例子中，通过不断更新画布的透明度来实现文本的淡入淡出效果
 */

window.addEventListener(
  'load',
  function() {
    var canvas = document.getElementById('canvas01');
    if (canvas && canvas.getContext) {
      var ctx = (function(canvas) {
        var dpr = window.devicePixelRatio || 1;
        var rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        var ctx = canvas.getContext('2d');
        ctx.scale(dpr, dpr);
        return ctx;
      })(canvas);
      var width = canvas.width / (window.devicePixelRatio || 1);
      var height = canvas.height / (window.devicePixelRatio || 1);
      console.log('--------------------------------------------------');

      /** 本次渲染的透明度 */
      var alpha = 0.25;
      /** 是否正在淡入，否则正在淡出 */
      var fadeIn = true;

      function loop() {
        window.setTimeout(loop, 15);
        drawScreen(ctx, width, height);
      }

      loop();
    }

    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param width
     * @param height
     */
    function drawScreen(ctx, width, height) {
      /*
       * CanvasCompositing.globalAlpha 属性
       * 用来设置画布全局的透明度
       */
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      if (fadeIn) {
        alpha += 0.01;
        if (alpha >= 1) {
          alpha = 1;
          fadeIn = false;
        }
      } else {
        alpha -= 0.01;
        if (alpha < 0.15) {
          alpha = 0.15;
          fadeIn = true;
        }
      }

      ctx.font = "140px '宋体'";
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
      ctx.globalAlpha = alpha;
      ctx.fillStyle = '#ff0000';
      ctx.fillText('HELLO WORLD', width / 2, height / 2);
    }
  },
  false,
);
