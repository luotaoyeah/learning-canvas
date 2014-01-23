window.addEventListener(
  'load',
  function () {
    drawScreen(document.getElementById('canvas01').getContext('2d'));

    /**
     * @param {CanvasRenderingContext2D} ctx
     */
    function drawScreen(ctx) {
      ctx.fillStyle = '#ffffaa';
      ctx.fillRect(0, 0, 1000, 600);

      ctx.strokeStyle = '#ff0000';
      ctx.lineWidth = 2;
      ctx.strokeRect(1, 1, 1000 - 2, 600 - 2);

      ctx.fillStyle = '#000000';
      ctx.font = "12px '宋体'";
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('HELLO WORLD', 500, 300);
    }
  },
  false,
);
