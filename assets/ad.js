/* ==========================================================
 * 神奇海螺 —— 侧边广告组件（仅校园论坛页使用）
 * 用法：MagicConchAd.createSide('left' | 'right')
 * 特点：缩小版广告，固定于页面两侧，上下左右缓慢浮动。
 *       不再自动挂载，各页面不再有浮动广告。
 * ========================================================== */
(function () {
  if (window.MagicConchAd) return;

  var CSS = `
.mh-side{position:fixed;z-index:500;width:150px;background:#fff;border-radius:16px;padding:16px 10px 12px;
  box-shadow:0 8px 26px rgba(31,90,255,.25),0 2px 8px rgba(0,0,0,.12);
  font-family:'Source Han Serif SC','Noto Serif SC','Source Han Serif CN','思源宋体',serif;text-align:center;user-select:none;
  animation:mh-float 9s ease-in-out infinite}
.mh-side.mh-left{left:16px;top:44%}
.mh-side.mh-right{right:16px;top:50%;animation-delay:-4.5s}
@keyframes mh-float{
  0%{transform:translate(0,-12px)}25%{transform:translate(7px,0)}
  50%{transform:translate(0,12px)}75%{transform:translate(-7px,0)}100%{transform:translate(0,-12px)}}
.mh-side .mh-tag{position:absolute;top:8px;left:10px;font-size:10px;color:#bbb;border:1px solid #ddd;
  border-radius:4px;padding:0 4px;letter-spacing:1px}
.mh-side .mh-logo img{width:84px;height:68px;object-fit:contain;pointer-events:none}
.mh-side .mh-title{font-size:19px;font-weight:900;letter-spacing:3px;line-height:1.25;margin-bottom:1px}
.mh-side .mh-title .b{color:#3B82F6}
.mh-side .mh-title .o{color:#FF9D2E}
.mh-side .mh-slogan{font-size:10.5px;color:#8a93a6;margin:2px 0 10px;letter-spacing:.5px}
.mh-side form{display:flex;align-items:center;background:#f4f7ff;border:2px solid #cfe0ff;border-radius:999px;
  padding:2px 2px 2px 10px;transition:border-color .2s}
.mh-side form:focus-within{border-color:#3B82F6}
.mh-side input{flex:1;border:0;background:none;outline:none;font-size:11.5px;color:#333;min-width:0;font-family:inherit}
.mh-side button[type=submit]{width:26px;height:26px;border:0;border-radius:50%;background:#3B82F6;color:#fff;
  font-size:12px;cursor:pointer;flex:none;display:flex;align-items:center;justify-content:center}
.mh-side button[type=submit]:hover{background:#2f6fe0}
@media (max-width:1100px),(max-height:700px){.mh-side{display:none}}
`;

  function createSide(side) {
    var el = document.createElement('div');
    el.className = 'mh-side mh-' + (side === 'right' ? 'right' : 'left');
    el.innerHTML =
      '<span class="mh-tag">广告</span>' +
      '<div class="mh-logo"><img src="assets/conch-logo.png" alt="神奇海螺" draggable="false"></div>' +
      '<div class="mh-title"><span class="b">神奇</span><span class="o">海螺</span></div>' +
      '<div class="mh-slogan">你为什么不问问神奇海螺呢？</div>' +
      '<form><input type="text" placeholder="问问海螺吧…" aria-label="搜索">' +
      '<button type="submit">🔍</button></form>';

    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);
    document.body.appendChild(el);

    el.querySelector('form').addEventListener('submit', function (e) {
      e.preventDefault();
      var v = el.querySelector('input').value.trim();
      window.location.href = 'search.html?q=' + encodeURIComponent(v || '神奇海螺');
    });
    return el;
  }

  window.MagicConchAd = { createSide: createSide };
})();
