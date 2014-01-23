/*
 * 3.2. Displaying Basic Text
 *     3.2.5. fillText and strokeText
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

      var message = '';
      var fillOrStroke = 'fill';

      var messageInputEl = document.querySelector('#messageInput');
      if (messageInputEl) {
        message = messageInputEl.value.toUpperCase();

        messageInputEl.addEventListener('keyup', function(event) {
          message = event.target.value.toUpperCase();
          drawScreen(ctx, width, height);
        });
      }

      var fillOrStrokeSelectEl = document.querySelector('#fillOrStrokeSelect');
      if (fillOrStrokeSelectEl) {
        fillOrStrokeSelectEl.addEventListener('change', function(event) {
          fillOrStroke = event.target.value;
          drawScreen(ctx, width, height);
        });
      }

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

      ctx.font = "100px Monaco";
      ctx.textBaseline = 'middle';

      var textMetrics = ctx.measureText(message);
      var x = width / 2 - textMetrics.width / 2;
      var y = height / 2;

      switch (fillOrStroke) {
        case 'fill':
          ctx.fillStyle = '#ff0000';
          ctx.fillText(message, x, y);
          break;
        case 'stroke':
          ctx.strokeStyle = '#000000';
          ctx.strokeText(message, x, y);
          break;
        case 'both':
          ctx.fillStyle = '#ff0000';
          ctx.fillText(message, x, y);
          ctx.strokeStyle = '#000000';
          ctx.strokeText(message, x, y);
          break;
      }
    }
  },
  false,
);
