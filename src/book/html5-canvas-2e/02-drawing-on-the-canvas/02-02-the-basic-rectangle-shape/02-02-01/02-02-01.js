/*
 * 2.2. The Basic Rectangle Shape
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

      /*
       * 在 canvas 中绘制一个 rectangle 有三种方式：
       *     fillRect(x, y, width, height)
       *     strokeRect(x, y, width, height)
       *     clearRect(x, y, width, height)
       */

      drawScreen(ctx, width, height);
    }

    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param width
     * @param height
     */
    function drawScreen(ctx, width, height) {
      /*
       * 对于 fillRect() 方法，
       * 需要先设置 fillStyle 样式，即填充的颜色
       */
      ctx.fillStyle = '#000000';
      ctx.fillRect(10, 10, 40, 40);

      /*
       * 对于 strokeRect() 方法，
       * 需要先设置 strokeStyle 样式，即线的颜色
       * 以及 lineWidth 属性，即线的宽度
       */
      ctx.strokeStyle = '#ff00ff';
      ctx.lineWidth = 2;
      ctx.strokeRect(1, 1, 58, 58);

      ctx.clearRect(20, 20, 20, 20);
    }
  },
  false,
);
