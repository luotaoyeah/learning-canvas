/*
 * 2.4. Using Paths to Create Lines
 *     2.4.3. Examples of More Advanced Line Drawing
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
     * 因为线条是有宽度的, 在画线时, 画笔的中心重合于线条的中心,
     * 因此当我们从左上角（0, 0）开始画线时, 线条的上半部分就会位于画布的外面, 看起来就好像那部分被裁剪掉了.
     * 同理, 线条的顶端如果设置 lineCap 为 round 或者 square,
     * 那么线条的顶端也会有一部分位于画布的外面.
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param width
     * @param height
     */
    function drawScreen(ctx, width, height) {
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 100;
      ctx.lineJoin = 'bevel';
      ctx.lineCap = 'round';

      ctx.beginPath();
      ctx.moveTo(50, 0);
      ctx.lineTo(250, 0);
      ctx.lineTo(250, 200);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(400, 100);
      ctx.lineTo(600, 100);
      ctx.lineTo(600, 300);
      ctx.stroke();

      ctx.lineCap = 'square';
      ctx.lineJoin = 'miter';

      ctx.beginPath();
      ctx.moveTo(50, 350);
      ctx.lineTo(250, 350);
      ctx.lineTo(250, 550);
      ctx.stroke();

      ctx.lineCap = 'butt';
      ctx.lineJoin = 'round';
      ctx.beginPath();
      ctx.moveTo(700, 100);
      ctx.lineTo(900, 100);
      ctx.lineTo(900, 300);
      ctx.stroke();

      ctx.lineWidth = 1;
      ctx.strokeStyle = '#ff0000';

      for (var i = 0; i <= height / 50; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i * 50);
        ctx.lineTo(width, i * 50);
        ctx.stroke();
      }

      for (var j = 0; j <= width / 50; j++) {
        ctx.beginPath();
        ctx.moveTo(j * 50, 0);
        ctx.lineTo(j * 50, height);
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.arc(900, 100, 50, 0, 360);
      ctx.stroke();
    }
  },
  false,
);
