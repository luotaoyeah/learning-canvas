/*
 * 1.10. Another Example: Guess The Letter
 */

window.addEventListener(
  'load',
  function () {
    var canvas = document.getElementById('canvas01');
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

    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    /* 总共猜了多少次 */
    var guesses = 0;
    /* 要猜测的字母 */
    var letterToGuess = '';
    /* 猜的结果 */
    var higherOrLower = '';
    /* 已经猜过的字母列表 */
    var lettersGuessed = [];
    /* 游戏是否结束 */
    var gameOver = false;

    function initGame() {
      letterToGuess = letters[Math.floor(Math.random() * letters.length)];
      guesses = 0;
      lettersGuessed = [];
      gameOver = false;
      window.addEventListener('keydown', handleWindowKeyDown, true);
    }

    /**
     *
     * @param {KeyboardEvent} e
     */
    function handleWindowKeyDown(e) {
      if (gameOver) {
        return;
      }

      var letterGuessed = e.key.toLowerCase();
      guesses++;
      lettersGuessed.push(letterGuessed);

      if (letterGuessed === letterToGuess) {
        gameOver = true;
      } else {
        var guessedIndex = letters.indexOf(letterGuessed);
        var toGuessIndex = letters.indexOf(letterToGuess);

        if (guessedIndex < 0) {
          higherOrLower = '不是字母';
        } else if (guessedIndex > toGuessIndex) {
          higherOrLower = '高';
        } else {
          higherOrLower = '低';
        }
      }

      drawScreen(ctx, width, height);
    }

    initGame();
    drawScreen(ctx, width, height);

    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param width
     * @param height
     */
    function drawScreen(ctx, width, height) {
      /* 背景 */
      ctx.fillStyle = '#ffffaa';
      ctx.fillRect(0, 0, width, height);

      /* 边框 */
      ctx.strokeStyle = '#000000';
      ctx.strokeRect(0, 0, width, height);

      /* 提示消息 */
      ctx.fillStyle = '#ff0000';
      ctx.font = "20px Monaco";
      ctx.textBaseline = 'top';
      ctx.textAlign = 'center';
      ctx.fillText('猜字母游戏', width / 2, 10);

      /* 已经猜了多少次 */
      ctx.fillStyle = '#000000';
      ctx.font = "14px Monaco";
      ctx.textBaseline = 'bottom';
      ctx.textAlign = 'left';
      ctx.fillText('猜的次数：' + guesses, 10, height - 30);

      /* 高了还是低了 */
      ctx.fillStyle = '#000000';
      ctx.font = "14px Monaco";
      ctx.textBaseline = 'bottom';
      ctx.textAlign = 'left';
      ctx.fillText('猜的结果：' + higherOrLower, 10, height - 50);

      /* 已经猜过的字母 */
      ctx.fillStyle = '#000000';
      ctx.font = "14px Monaco";
      ctx.textBaseline = 'bottom';
      ctx.textAlign = 'left';
      ctx.fillText('已经猜过：' + lettersGuessed.join(', '), 10, height - 10);

      /* 猜对啦 */
      if (gameOver) {
        ctx.fillStyle = '#00ff00';
        ctx.font = "60px Monaco";
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.fillText('猜对啦', width / 2, height / 2);
      }
    }
  },
  false,
);
