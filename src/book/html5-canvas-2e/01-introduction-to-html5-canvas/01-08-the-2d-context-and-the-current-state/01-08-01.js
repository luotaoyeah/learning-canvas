window.addEventListener(
  "load",
  function() {
    var canvasEl = document.getElementById("canvas01");
    if (canvasEl && canvasEl.getContext) {
      drawScreen(canvasEl.getContext("2d"));
    }

    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     */
    function drawScreen(ctx) {
      /*
       * context 是一个 CanvasRenderingContext2D 对象，
       * 对 canvas 的所有操作都是通过 context 对象进行的，
       * context 使用笛卡尔（cartesian）坐标系，
       * 即，左上角是坐标原点（0，0）
       */
      /*
       * 因为 canvas 是属于 immediate mode 而不是 retained mode
       * 即，当某个部分发生变化时，整个画布都需要重绘，
       * 因此，canvas 中有一个 current state 的概念，
       * 当前状态指的是，当前 context 对象上面的一系列属性设置，
       * 如：strokeStyle，fillStyle，lineWidth，等等
       */

      ctx.fillStyle = "#ffffaa";
      ctx.fillRect(0, 0, 1000, 600);

      ctx.strokeStyle = "#ff0000";
      ctx.lineWidth = 2;
      ctx.strokeRect(1, 1, 998, 598);
    }
  },
  false
);
