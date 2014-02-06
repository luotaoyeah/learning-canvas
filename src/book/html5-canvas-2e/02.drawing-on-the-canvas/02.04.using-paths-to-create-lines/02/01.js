/*
 * 2.4. Using Paths to Create Lines
 *     2.4.2.1. lineCap
 */

window.addEventListener(
  'load',
  function () {
    var canvas = document.getElementById('canvas01');
    if (canvas && canvas.getContext) {
      var ctx = (function (canvas) {
        var dpr = window.devicePixelRatio || 1;
        var rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        var ctx = canvas.getContext('2d');
        ctx.scale(dpr, dpr);
        return ctx;
      })(canvas);
      var width = canvas.width / (window.devicePixelRatio || 1);
      var height = canvas.height / (window.devicePixelRatio || 1);

      drawScreen(ctx, width, height);
    }

    /**
     * lineCap 属性, 用于设置线条端点的形状,
     * 可选属性值
     *    butt（默认）
     *    square      矩形
     *    round       半圆
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param width
     * @param height
     */
    function drawScreen(ctx, width, height) {
      ctx.lineWidth = 50;
      ctx.strokeStyle = '#000000';

      ctx.beginPath();
      ctx.moveTo(100, 60);
      ctx.lineTo(500, 60);
      ctx.lineCap = 'butt';
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(100, 120);
      ctx.lineTo(500, 120);
      ctx.lineCap = 'square';
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(100, 180);
      ctx.lineTo(500, 180);
      ctx.lineCap = 'round';
      ctx.stroke();

      ctx.lineWidth = 1;
      ctx.strokeStyle = '#ff0000';

      ctx.beginPath();
      ctx.moveTo(75, 0);
      ctx.lineTo(75, height);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(100, 0);
      ctx.lineTo(100, height);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, 120);
      ctx.lineTo(1000, 120);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, 60);
      ctx.lineTo(1000, 60);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, 180);
      ctx.lineTo(1000, 180);
      ctx.stroke();
    }
  },
  false,
);
