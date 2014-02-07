/*
 * 2.4. Using Paths to Create Lines
 *     2.4.2.2. lineJoin
 */

window.addEventListener(
  'load',
  function () {
    var canvas = document.getElementById('canvas01');
    if (canvas && canvas.getContext) {
      var ctx = (function (canvas) {
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

      drawScreen(ctx, width, height);
    }

    /**
     * lineJoin 属性, 用于设置线条拐点的样式,
     * 可选值为：
     *     miter  斜接, 显示一个三角形的尖尖
     *     bevel  斜切, 显示一个斜切面
     *     round  圆弧, 显示一个圆弧
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param width
     * @param height
     */
    function drawScreen(ctx, width, height) {
      ctx.lineWidth = 50;

      ctx.lineJoin = 'miter';
      ctx.beginPath();
      ctx.moveTo(100, 100);
      ctx.lineTo(200, 100);
      ctx.lineTo(100, 200);
      ctx.stroke();

      // miterLimit 用来设置最大斜接长度,
      // 斜接长度: 指的是在两条线交汇处内角和外角之间的距离跟 lineWidth 的比率,
      // 如果斜接长度超过 miterLimit 的值, lineJoin 会以 bevel 的形式来显示.
      ctx.lineJoin = 'miter';
      ctx.miterLimit = 2;
      ctx.beginPath();
      ctx.moveTo(100, 300);
      ctx.lineTo(200, 300);
      ctx.lineTo(100, 400);
      ctx.stroke();

      ctx.lineJoin = 'bevel';
      ctx.beginPath();
      ctx.moveTo(300, 100);
      ctx.lineTo(400, 100);
      ctx.lineTo(300, 200);
      ctx.stroke();

      ctx.lineJoin = 'round';
      ctx.beginPath();
      ctx.moveTo(500, 100);
      ctx.lineTo(600, 100);
      ctx.lineTo(500, 200);
      ctx.stroke();

      ctx.lineWidth = 1;
      ctx.strokeStyle = '#ff0000';

      ctx.beginPath();
      ctx.moveTo(0, 100);
      ctx.lineTo(width, 100);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, 200);
      ctx.lineTo(width, 200);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(100, 0);
      ctx.lineTo(100, height);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(200, 0);
      ctx.lineTo(200, height);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(300, 0);
      ctx.lineTo(300, height);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(400, 0);
      ctx.lineTo(400, height);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(500, 0);
      ctx.lineTo(500, height);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(600, 0);
      ctx.lineTo(600, height);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(600, 100, 25, 0, 360);
      ctx.stroke();
    }
  },
  false,
);
