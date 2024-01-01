const slideView = document.querySelector(".slide-wrapper");
const slides = document.querySelector(".slides");
let slideWidth = 128,
  slideHeight = 179.2,
  sildeGap = 35;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentIndex = 0;
let transitionRun = false;

slides.style.display = "flex";
slides.style.gap = `${sildeGap}px`;

const children = [...slides.children];
const length = children.length;

const viewWidth = (slideWidth + sildeGap) * length;
slideView.style.width = `${viewWidth - sildeGap}px`;
slideView.style.overflow = `hidden`;

// 뷰값이 화면보다 작을때
// if()

children.forEach((el) => {
  el.style.width = `${slideWidth}px`;
  el.style.height = `${slideHeight}px`;
  el.style.flexShrink = "0";
});

const resizeObserver = new ResizeObserver(() => {
  const width = Number(slideView.style.width.replace("px", ""));
  const deviceWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;

  if (width > deviceWidth) {
    slideView.style.marginLeft = `${(deviceWidth - width) / 2}px`;
  }

  if (width === deviceWidth) {
    slideView.style.marginLeft = "0px";
  }
});

resizeObserver.observe(slideView);
// function resize() {}

function makeClone() {
  const children = [...slides.children];

  for (let i = 0; i < children.length; i++) {
    const clone = children[i].cloneNode(true);
    clone.classList.add("clone");
    slides.append(clone);
  }

  for (let i = children.length - 1; i >= 0; i--) {
    const clone = children[i].cloneNode(true);
    clone.classList.add("clone");
    slides.prepend(clone);
  }

  updateWidth();
  initPosition();
}

function updateWidth() {
  const currentSlides = [...slides.children];
  const childrenLength = currentSlides.length;

  const newWidth = (slideWidth + sildeGap) * childrenLength - sildeGap;
  slides.style.width = newWidth + "px";
}

function initPosition() {
  console.log("initPosition");
  animate(false);
  [...slides.children].forEach((el) => (el.style.transform = `scale(1.0)`));
  slides.style.transform = `translateX(-${viewWidth}px)`;

  currentIndex = 0;

  const center = findCenter();
  slides.children[center].style.transform = `scale(1.25)`;
}

function animate(boolean = true) {
  let second = 0.3;

  if (!boolean) {
    second = 0;
  }

  slides.style.transition = `transform ${second}s ease`;
  [...slides.children].forEach(
    (el) => (el.style.transition = `transform ${second}s ease`)
  );
  const center = findCenter();

  if (!slides.children[center]) return;
  slides.children[center].style.transform = `scale(1.25)`;
}

function moveSlide(index) {
  animate();

  slides.style.transform = `translateX(${-(
    viewWidth +
    index * (slideWidth + sildeGap)
  )}px)`;

  currentIndex = index;

  const center = findCenter();
  if (!slides.children[center]) return;
  slides.children[center].style.transform = `scale(1.25)`;
  if (slides.children[center - 1]) {
    slides.children[center - 1].style.transform = `scale(1)`;
  }

  if (slides.children[center + 1]) {
    slides.children[center + 1].style.transform = `scale(1)`;
  }
}

function findCenter() {
  return Math.floor(length / 2 + 1) + length + currentIndex - 1;
}

function prevHandler() {
  if (transitionRun) return;
  moveSlide(currentIndex - 1);
}

function nextHandler() {
  if (transitionRun) return;
  moveSlide(currentIndex + 1);
}

function transitionstart() {
  transitionRun = true;
}

function transitionEnd() {
  transitionRun = false;
  //   if (e.target !== e.currentTarget) return;
  if (currentIndex >= length || -currentIndex >= length) {
    initPosition();
  }
}

slides.addEventListener("transitionstart", transitionstart);
slides.addEventListener("transitionend", transitionEnd);

prevBtn.addEventListener("click", prevHandler);
nextBtn.addEventListener("click", nextHandler);

let touchStart = false;
let startX = 0;
let startTransformValue = 0;

slides.addEventListener("touchstart", (e) => {
  if (![...slides.children].includes(e.target)) return;
  touchStart = true;

  startX = e.touches[0].pageX;
  startTransformValue = viewWidth + currentIndex * (slideWidth + sildeGap);
  console.log("touchstart", startTransformValue);
  animate(false);
});

slides.addEventListener("touchmove", (e) => {
  if (!touchStart) return;

  let val = viewWidth + currentIndex * (slideWidth + sildeGap);

  if (startX < e.touches[0].pageX) {
    // right
    slides.style.transform = `translateX(-${
      val - e.touches[0].pageX + startX
    }px)`;
  }

  if (startX > e.touches[0].pageX) {
    // left
    slides.style.transform = `translateX(-${
      val + startX - e.touches[0].pageX
    }px)`;
  }
});

slides.addEventListener("touchend", (e) => {
  if (!touchStart) return;
  touchStart = false;
  startX = 0;

  const matrix = new WebKitCSSMatrix(slides.style.transform);

  let value = -matrix.m41 - startTransformValue; // +값 right, -값 left

  transitionEnd();

  //   if (value > 0) {
  //     moveSlide(currentIndex + Math.round(value / (slideWidth + sildeGap)));
  //   } else {
  console.log(Math.round(value / (slideWidth + sildeGap)));

  let calc = currentIndex + Math.round(value / (slideWidth + sildeGap));

  //   if (Math.round(value / (slideWidth + sildeGap)) >= length) {
  //     calc = length - 1;
  //   }

  //   if (Math.round(value / (slideWidth + sildeGap)) <= -length) {
  //     calc = 0;
  //   }

  moveSlide(calc);

  //   }
});

makeClone();
