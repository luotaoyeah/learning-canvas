/*
 * 2.4. Using Paths to Create Lines
 *     2.4.2.2. lineJoin
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
       * lineJoin 属性，用于设置线条拐点的样式，
       * 可选值为：
       *     miter，显示一个三角形的尖尖
       *     bevel，显示一个斜切面
       *     round，显示一个圆弧
       */
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.moveTo(10, 10);
      ctx.lineTo(40, 10);
      ctx.lineTo(10, 40);

      ctx.lineJoin = 'round';
      ctx.stroke();
      ctx.closePath();
    }
  },
  false,
);
