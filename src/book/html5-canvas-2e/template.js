/*
 * 2.3. The Canvas State
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
    function drawScreen(ctx, width, height) {}
  },
  false
);
