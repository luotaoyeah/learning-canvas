/*
 * 2.4. Using Paths to Create Lines
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

      /*
       * 可以使用路径（path）在 canvas 上面绘制各种图形，
       * 一个 path 实际上就是一系列的点使用线连接起来组成的，
       * path 不属于 current state
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
      ctx.beginPath();
      ctx.moveTo(10, 10);
      ctx.lineTo(100, 10);
      ctx.lineTo(100, 100);
      ctx.lineTo(10, 100);
      ctx.closePath();

      ctx.lineWidth = 10;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#000000";
      ctx.stroke();

      ctx.fillStyle = "#ff00ff";
      ctx.fill();
    }
  },
  false
);
