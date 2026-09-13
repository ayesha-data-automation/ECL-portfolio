(function () {
  'use strict';

  document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    event.stopPropagation();
  }, true);

  document.addEventListener('keydown', function (event) {
    var blocked = ['c', 's', 'p', 'u'];
    var key = String(event.key || '').toLowerCase();
    if ((event.ctrlKey || event.metaKey) && blocked.indexOf(key) !== -1) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, true);

  var overlay = document.createElement('div');
  overlay.className = 'watermark-overlay';
  overlay.setAttribute('aria-hidden', 'true');

  var svg = "<svg xmlns='http://www.w3.org/2000/svg' width='380' height='230'>" +
    "<text x='190' y='115' fill='#1e293b' fill-opacity='0.22' " +
    "font-family='Arial, Helvetica, sans-serif' font-size='17' font-weight='700' " +
    "letter-spacing='2' text-anchor='middle' transform='rotate(-30 190 115)'>" +
    "Portfolio View Only - Do Not Copy</text></svg>";

  overlay.style.backgroundImage =
    "url('data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg) + "')";

  document.body.appendChild(overlay);
})();
