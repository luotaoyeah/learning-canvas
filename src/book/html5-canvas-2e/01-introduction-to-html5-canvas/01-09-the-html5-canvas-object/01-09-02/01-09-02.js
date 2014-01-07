/*
 * HTMLCanvasElement.toDataURL()
 */
window.addEventListener(
  "load",
  function() {
    var canvas = document.getElementById("canvas01");
    if (canvas && canvas.getContext) {
      /*
       * HTMLCanvasElement.toDataURL() 方法，
       * 返回画布的截图的 base64 字符串
       */
      document.getElementById("btn01").onclick = function() {
        var dataURL = canvas.toDataURL();
        console.log(dataURL);
        document.getElementById("img01").src = dataURL;
      };

      drawScreen(
        (function(canvas) {
          var dpr = window.devicePixelRatio || 1;
          var rect = canvas.getBoundingClientRect();
          canvas.width = rect.width * dpr;
          canvas.height = rect.height * dpr;
          var ctx = canvas.getContext("2d");
          ctx.scale(dpr, dpr);
          return ctx;
        })(canvas),
        canvas.width / (window.devicePixelRatio || 1),
        canvas.height / (window.devicePixelRatio || 1)
      );
    }

    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param width
     * @param height
     */
    function drawScreen(ctx, width, height) {
      ctx.strokeStyle = "#000000";
      ctx.strokeRect(0, 0, width, height);

      ctx.fillStyle = "#ff0000";
      ctx.font = "36px '宋体'";
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillText("HELLO", width / 2, height / 2);
    }
  },
  false
);
