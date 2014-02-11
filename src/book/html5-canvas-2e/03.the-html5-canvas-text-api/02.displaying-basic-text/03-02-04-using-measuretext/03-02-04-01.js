/*
 * 3.2. Displaying Basic Text
 *     3.2.4. Using measureText
 *         context.measureText()
 */
window.addEventListener(
  'load',
  function() {
    var canvas = document.getElementById('canvas01');
    if (canvas && canvas.getContext) {
      var ratio = window.devicePixelRatio;
      var ctx = (function(canvas) {
        var dpr = ratio || 1;
        var rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        var ctx = canvas.getContext('2d');
        ctx.scale(dpr, dpr);
        return ctx;
      })(canvas);
      var width = canvas.width / (ratio || 1);
      var height = canvas.height / (ratio || 1);
      console.log('--------------------------------------------------');

      var message = 'hello world';

      var inputEl = document.getElementById('msg');
      if (inputEl) {
        message = inputEl.value;

        inputEl.addEventListener(
          'keyup',
          function(event) {
            message = event.target.value;
            drawScreen(ctx, width, height);
          },
          false,
        );
      }

      drawScreen(ctx, width, height);
    }

    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param width
     * @param height
     */
    function drawScreen(ctx, width, height) {
      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = '#000000';
      ctx.beginPath();
      ctx.strokeRect(0, 0, width, height);

      ctx.fillStyle = '#0000ff';
      ctx.font = "12px Monaco";
      ctx.textBaseline = 'middle';

      /*
       * context.measureText() 方法，
       * 测量一段文字的尺寸信息，比如文字的宽度，
       * 最终的测量结果，会受到当前 context 上面的配置属性的影响，比如字体大小，字体样式等等
       */

      var textMetrics = ctx.measureText(message);
      ctx.fillText(message.toUpperCase(), width / 2 - textMetrics.width / 2, height / 2);
    }
  },
  false,
);
