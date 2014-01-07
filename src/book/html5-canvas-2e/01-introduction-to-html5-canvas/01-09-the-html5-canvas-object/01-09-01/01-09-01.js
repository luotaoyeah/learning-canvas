window.addEventListener(
  "load",
  function() {
    var canvas = document.getElementById("canvas01");
    if (canvas && canvas.getContext) {
      drawScreen(
        setupCanvas(canvas),
        canvas.width / (window.devicePixelRatio || 1),
        canvas.height / (window.devicePixelRatio || 1)
      );
    }

    /**
     * 获取高分辨率屏幕下的 context 对象
     * @param canvas 画布元素
     */
    function setupCanvas(canvas) {
      /* 获取显示屏幕的缩放比例 */
      var dpr = window.devicePixelRatio || 1;

      /* 获取画布元素的实际尺寸 */
      var rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      var ctx = canvas.getContext("2d");
      /*
       * 设置 context 对象的缩放比例
       * 即，画布中的一个单元，对应于屏幕的几个像素？
       * 如果 dpr 为 2，表示一个单元占据两个像素
       */
      ctx.scale(dpr, dpr);

      return ctx;
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
      ctx.font = "13px '宋体'";
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillText("OK", width / 2, height / 2);
    }
  },
  false
);
