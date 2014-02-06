/*
 * 2.3. The Canvas State
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
       * canvas states 指的是一系列的 state 组成的一个 stack
       * 每一个 state 中可以包含一系列的 data
       * 这些 data 包括：
       *     transformation
       *         context.rotate()
       *         context.setTransform()
       *     clip
       *         context.clip()
       *     attributes
       *         context.globalAlpha
       *         context.globalCompositeOperation
       *         context.fillStyle
       *         context.strokeStyle
       *         context.textBaseline
       *         context.textAlign
       *         context.font
       *         context.lineWidth
       *         context.lineCap
       *         context.lineJoin
       *         context.shadowBlur
       *         context.shadowColor
       *         context.shadowOffsetX
       *         context.shadowOffsetY
       *         等等
       *
       * 通过 context.save() 方法，往 stack 中 push 一个 state
       * 通过 context.restore() 方法，从 stack 中 pop 一个 state 出来
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
       * 首先调用 save() 方法，将默认的 state 添加到 stack 中去
       */
      ctx.save();

      ctx.font = "12px Monaco";
      ctx.textBaseline = 'top';
      ctx.textAlign = 'left';
      ctx.save();

      ctx.fillStyle = '#ff0000';
      ctx.fillText('A', 0, 0);

      ctx.restore();
      ctx.fillText('B', 0, 30);
    }
  },
  false,
);
