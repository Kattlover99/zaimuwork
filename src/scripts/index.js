// Title Split
const textSplit = document.querySelectorAll('.text-split');
const lineSplit = document.querySelectorAll('.line-split');
const brightReveal = document.querySelectorAll('.bright-box');
const RevealImage = document.querySelectorAll('.reveal-image');
const StaggerParent = document.querySelectorAll('.reveal-stagger');

// Each El
Array.prototype.forEach.call(textSplit, function(el, i) {

  let ElText = el.innerText;
  el.setAttribute('data-word', ElText);

  const chars = ElText.split('');

  var res = chars.map(function(el, i) {
    return `<span>${el}</span>`;
  }).join('');
  
  el.innerHTML = res;
  
});

Array.prototype.forEach.call(lineSplit, function(el, i) {

  let ElText = el.innerText;

  const lines = ElText.split('\n');

  var res = lines.map(function(el, i) {
    return `<span><span>${el}</span></span>`;
  }).join('');
  
  el.innerHTML = res;
  
});

let staggeredFlipInTexts = document.querySelectorAll(".staggered-flip-in");
staggeredFlipInTexts.forEach(text => {
  let letters = text.textContent.split("");
  text.textContent = "";
  letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${i / 10}s`;
    text.append(span);
  });
});

StaggerParent.forEach(el =>{
  let childEls = el.querySelectorAll('div');
  childEls.forEach((childEl, i) => {
    childEl.style.animationDelay = `${i / 10}s`;
  });
})


brightReveal.forEach(el => {
  const brightElem = '<div class="horizontal-lines">'
  +'<div class="line"></div><div class="line"></div>'
  +'</div>'
  +'<div class="vertical-lines">'
  +'<div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div>'
  +'</div>'
  +'<div class="blingbling"></div>';
  el.innerHTML = `<div class="pg">${el.innerHTML}</div>${brightElem}`;
});

RevealImage.forEach(el => {
  el.innerHTML = `<span class="image_wrap">${el.innerHTML}</span>`;
})


var pagelink = document.querySelectorAll('a[href^="#"]');

/* scrollToのOptionsに対応しているかのどうかの判別 */
var smoothScrollType;
if('scrollBehavior' in document.documentElement.style) {
    smoothScrollType = smoothScroll;
} else {
    smoothScrollType = oldTypeSmoothScroll;
}

for( var i = 0; i < pagelink.length; i++ ) {
    pagelink[i].addEventListener('click', smoothScrollType, false);
}

/* scrollToのOptionsに対応している場合 */
function smoothScroll(e) {
    e.preventDefault();
    // 遷移先の要素
    var pagelinkId = e.target.hash;
    var pagelinkSection = document.querySelector(pagelinkId);
    // スクロール先の位置
    var scrollPosition = window.pageYOffset + pagelinkSection.getBoundingClientRect().top;
    // スクロールで移動
    window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
    });
}
/* scrollToのOptionsに対応していない場合 */
function oldTypeSmoothScroll(e) {
  e.preventDefault();
  // スクロール速度の設定
  var scrollSpeed = 300;
  var timerStep = 20;
  // 遷移先の要素
  var pagelinkId = e.target.hash;
  var pagelinkSection = document.querySelector(pagelinkId);
  // スクロール先の位置
  var scrollPosition = window.pageYOffset;
  var sectionPosition = pagelinkSection.getBoundingClientRect().top;
  var goalPosition = scrollPosition + sectionPosition;
  // スクロール量
  var scrollStep = sectionPosition / (scrollSpeed / timerStep);
  var currentScroll = scrollPosition;

  // スクロールの実行
  var smoothScrollTimer = setInterval(function() {
      // スクロール完了時
      if(currentScroll >= goalPosition) {
          // スクロール位置を完了位置に設定
          window.scrollTo(0, goalPosition);
          // タイマーのクリア
          clearInterval(smoothScrollTimer);
      } else {
          currentScroll += scrollStep;
          window.scrollTo(0, currentScroll);
      }
  }, timerStep);
}