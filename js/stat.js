'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var HISTOGRAM_HEIGHT = 150;
var HISTOGRAM_COLUMN = 40;
var HISTOGRAM_INTERVAL = 50;
var HISTOGRAM_X = 90;

var fontFamily = 'PT Mono';
var fontSize = '16px';
var textColor = '#000000';

// Функция отрисовки облака

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// Функция отрисовки текста

var renderText = function (ctx, text, x, y, maxWidth) {
  maxWidth = CLOUD_WIDTH;
  ctx.fillStyle = textColor;
  ctx.font = fontSize + ' ' + fontFamily;
  ctx.fillText(text, x, y, maxWidth);
};

// Функция генерации случайного числа

var getRandomInteger = function (min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
};

// Максимальный элемент массива

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

// Функция отрисовки результата игрока


var renderHistogram = function (ctx, names, times) {
  var maxUserTime = Math.round(getMaxElement(times));

  var renderColumn = getRenderColumn();
  for (var i = 0; i < names.length; i++) {
    renderColumn(ctx, names[i], Math.round(times[i]), maxUserTime);
  }
};

// Вывод статистики при успешном завершении игры

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');
  renderText(ctx, 'Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP * 4);
  renderText(ctx, 'Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP * 6);
  renderHistogram(ctx, names, times);
};
