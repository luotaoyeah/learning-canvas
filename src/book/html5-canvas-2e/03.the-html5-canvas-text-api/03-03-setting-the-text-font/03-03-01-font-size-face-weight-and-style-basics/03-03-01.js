/*
 * 3.3. Setting the Text Font
 *     3.3.1. Font Size, Face, Weight, and Style Basics
 */
window.addEventListener(
  'load',
  function() {
    var canvas = document.getElementById('canvas01');
    if (canvas && canvas.getContext) {
      var ratio = window.devicePixelRatio;
      var ctx = (function(canvas) {
        var dpr = ratio || 1;
        var rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        var ctx = canvas.getContext('2d');
        ctx.scale(dpr, dpr);
        return ctx;
      })(canvas);
      var width = canvas.width / (ratio || 1);
      var height = canvas.height / (ratio || 1);
      console.log('--------------------------------------------------');

      /* TODO */

      drawScreen(ctx, width, height);
    }

    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param width
     * @param height
     */
    function drawScreen(ctx, width, height) {
      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = '#000000';
      ctx.beginPath();
      ctx.strokeRect(0, 0, width, height);
    }
  },
  false,
);
