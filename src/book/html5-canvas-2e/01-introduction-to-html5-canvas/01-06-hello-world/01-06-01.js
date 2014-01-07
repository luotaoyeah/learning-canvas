/*
 * 对 canvas 的操作必须保证在文档加载完成之后进行，
 * 因此需要监听 window 对象的 load 事件
 */

window.addEventListener(
  "load",
  function() {
    var canvas = document.getElementById("canvas01");
    if (canvas && canvas.getContext) {
      /*
       * 通过 HTMLCanvasElement.getContext() 方法，
       * 获取 canvas 元素的 context 对象，
       * 对 canvas 元素的所有操作，都是通过 context 对象进行的
       */
      var context = canvas.getContext("2d");
      drawScreen(context);
    }

    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     */
    function drawScreen(ctx) {
      /* 设置背景颜色 */
      ctx.fillStyle = "#ffffaa";
      ctx.fillRect(0, 0, 1000, 800);

      /* 添加文本 */
      ctx.fillStyle = "#000000";
      ctx.font = "20px '宋体'";
      ctx.textBaseline = "top";
      ctx.textAlign = "center";
      ctx.fillText("hello world", 500, 100);

      /* 添加图片 */
      var image = new Image(418, 435);
      image.onload = function() {
        ctx.drawImage(image, 500 - 418 / 2, 400 - 435 / 2);
      };
      image.src = "./01-06-01.jpg";

      /* 添加边框 */
      ctx.strokeStyle = "#000000";
      ctx.strokeRect(0, 0, 1000, 800);
    }
  },
  false
);
