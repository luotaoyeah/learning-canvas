/*
 * 对 canvas 的操作必须保证在文档加载完成之后进行，
 * 因此需要监听 window 对象的 load 事件
 */

window.addEventListener(
  "load",
  function() {
    var canvasEl = document.getElementById("canvas01");
    if (canvasEl && canvasEl.getContext) {
      /*
       * 通过 HTMLCanvasElement.getContext() 方法，
       * 获取 canvas 元素的 context 对象，
       * 对 canvas 元素的所有操作，都是通过 context 对象进行的
       */
      var context = canvasEl.getContext("2d");
      drawScreen(context);
    }

    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     */
    function drawScreen(ctx) {
      ctx.fillStyle = "#ffffaa";
      ctx.fillRect(0, 0, 500, 300);
      ctx.fillStyle = "#000000";
      ctx.font = "20px '宋体'";
      ctx.textBaseline = "top";
      ctx.fillText("hello world", 195, 80);
    }
  },
  false
);
