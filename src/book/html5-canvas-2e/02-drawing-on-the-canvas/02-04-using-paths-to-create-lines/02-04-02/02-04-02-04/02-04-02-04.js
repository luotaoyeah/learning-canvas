/*
 * 2.4. Using Paths to Create Lines
 *     2.4.2.4. strokeStyle
 */

window.addEventListener(
  "load",
  function() {
    var canvas = document.getElementById("canvas01");
    if (canvas && canvas.getContext) {
      var ctx = (function(canvas) {
        var dpr = window.devicePixelRatio || 1;
        var rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        var ctx = canvas.getContext("2d");
        ctx.scale(dpr, dpr);
        return ctx;
      })(canvas);
      var width = canvas.width / (window.devicePixelRatio || 1);
      var height = canvas.height / (window.devicePixelRatio || 1);
      console.log("--------------------------------------------------");

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
       * strokeStyle 属性，用于设置线条的颜色或者样式，
       * 默认为 rgb(0, 0, 0, 1)
       */

      ctx.beginPath();
      ctx.moveTo(100, 100);
      ctx.lineTo(200, 200);

      ctx.strokeStyle = "#ff0000";
      ctx.stroke();
    }
  },
  false
);
