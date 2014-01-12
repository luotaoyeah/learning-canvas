/*
 * 2.4. Using Paths to Create Lines
 *     2.4.2.1. lineCap
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
       * lineCap 属性，用于设置线条顶端的样式，
       * 可选属性值：butt（默认），square，round
       */

      ctx.strokeStyle = "#000000";
      ctx.lineWidth = 10;

      ctx.beginPath();
      ctx.moveTo(10, 10);
      ctx.lineTo(110, 10);
      ctx.lineCap = "butt";
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(10, 60);
      ctx.lineTo(110, 60);
      ctx.lineCap = "square";
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(10, 110);
      ctx.lineTo(110, 110);
      ctx.lineCap = "round";
      ctx.stroke();
    }
  },
  false
);
