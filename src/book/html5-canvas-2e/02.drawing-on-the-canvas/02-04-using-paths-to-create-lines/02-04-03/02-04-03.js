/*
 * 2.4. Using Paths to Create Lines
 *     2.4.3. Examples of More Advanced Line Drawing
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
       * 因为线条是有宽度的，在画线时，画笔的中心点是位于线条的中心的，
       * 因此当我们从左上角（0, 0）开始画线时，
       * 线条的上半部分就会位于画布的外面，看起来就好像那部分被裁剪掉了；
       * 同理，线条的顶端，如果设置 lineCap 为 round 或者 square，
       * 那么线条的顶端也会有一部分位于画布外面；
       */
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 10;
      ctx.lineJoin = 'bevel';
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(25, 0);
      ctx.lineTo(25, 25);
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.moveTo(10, 50);
      ctx.lineTo(35, 50);
      ctx.lineTo(35, 75);
      ctx.stroke();
      ctx.closePath();

      ctx.lineCap = 'butt';
      ctx.lineJoin = 'round';
      ctx.beginPath();
      ctx.moveTo(10, 100);
      ctx.lineTo(35, 100);
      ctx.lineTo(35, 125);
      ctx.stroke();
      ctx.closePath();
    }
  },
  false,
);
