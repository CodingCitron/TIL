/*
문제
1. 반대로 이동할때 가까운쪽으로 이동하게 해야함
2. 터치 이동시 버그 있음
3. 센터만 scale 1.25 되어야 하는데 다른 슬라이드도 1.25로 커진 것 있음
4. 마우스 이벤트 동작 문제 있음
5. 감도 불편
6. 마우스 또는 터치 이동시 많은 이동이 일어날 때 있음
*/

class Slide {
  constructor({ slideView, slideWrap, gap, prevBtn, nextBtn, margin, center }) {
    console.log(slideWrap);
    this.slideView = slideView;
    this.slideWrap = slideWrap;
    this.slides = [...slideWrap.children];
    this.slideLength = this.slides.length;
    // offsetWidth로 하면 안보이는 부분의 슬라이드는 width값을 가져오지 못해
    // 오류가 생김

    let width = 0;

    this.initCenter = center;
    this.center = center; /* 0번을 중앙으로 */ /* 한번만 실행되어야 하는 속성 */
    this.centeredIndex = 0; /* defineProperty를 사용해서 이벤트 구현해야함 */

    if (this.slides[0]) {
      width = Number(
        getComputedStyle(this.slides[0])
          .getPropertyValue("width")
          .replace("px", "")
      );
    }

    this.slideWidth = width;

    this.prevBtn = prevBtn;
    this.nextBtn = nextBtn;

    this.currentIndex = 0;
    this.transition = {
      run: false,
      duration: 0.3,
    };

    /* 마우스 이벤트 */
    /* 터치 이벤트 */
    this.touch = {
      start: false,
      startX: 0,
      startTranslateX: 0,
    };

    this.slideGap = gap || 0;
    this.margin = margin;
    this.transitionStatus = false;
    this.scale = `1.25`;

    this.slideViewWidth = (this.slideWidth + this.slideGap) * this.slideLength;

    this.resizeObserver = null;

    this.events = {
      "index-change": [],
    };

    this.init();
  }

  /* index */
  on(type, callback) {
    if (type === "index-change") {
      this.events["index-change"].push({
        type: "index",
        callback,
      });
    }
  }

  get index() {
    return this.currentIndex;
  }

  set index(value) {
    this.currentIndex = value;
    this.events["index-change"].forEach((event) => event.callback(value));
  }

  init() {
    const {
      slideView,
      slideWrap,
      slideGap,
      slides,
      slideViewWidth,
      prevBtn,
      nextBtn,
    } = this;

    slideView.style.width = slideViewWidth - slideGap + "px";
    slideView.style.overflow = `hidden`;

    slideWrap.style.display = "flex";
    slideWrap.style.gap = slideGap + "px";

    // width 안줄어들게 하는  속성
    slides.forEach((el) => (el.style.flexShrink = "0"));

    // clone 생성
    for (let i = 0; i < slides.length; i++) {
      const clone = slides[i].cloneNode(true);
      clone.classList.add("clone");
      slideWrap.append(clone);
    }

    for (let i = slides.length - 1; i >= 0; i--) {
      const clone = slides[i].cloneNode(true);
      clone.classList.add("clone");
      slideWrap.prepend(clone);
    }

    // update width
    const allSlides = [...slideWrap.children];
    const allSlidesLength = allSlides.length;
    const slideWidth = this.slideWidth;
    const newWidth = (slideWidth + slideGap) * allSlidesLength - slideGap;

    slideWrap.style.width = newWidth + "px";

    // resizeObserver
    this.resizeObserver = new ResizeObserver(this.resize.bind(this));
    this.resizeObserver.observe(slideView);

    this.initPosition();

    slideWrap.addEventListener(
      "transitionstart",
      this.transitionStart.bind(this)
    );
    slideWrap.addEventListener("transitionend", this.transitionEnd.bind(this));

    if (prevBtn) {
      prevBtn.addEventListener("click", this.prev.bind(this));
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", this.next.bind(this));
    }

    // mouse
    slideWrap.addEventListener("mousedown", this.touchStart.bind(this));
    addEventListener("mousemove", this.touchMove.bind(this));
    addEventListener("mouseup", this.touchEnd.bind(this));

    // touch
    slideWrap.addEventListener("touchstart", this.touchStart.bind(this), {
      passive: true,
    });
    addEventListener("touchmove", this.touchMove.bind(this), { passive: true });
    addEventListener("touchend", this.touchEnd.bind(this), { passive: true });
  }

  initPosition() {
    const slideView = this.slideView;
    const slideWrap = this.slideWrap;
    const gap = this.slideGap;
    const children = [...this.slideWrap.children];

    this.animate(false);

    children.forEach((el) => (el.style.transform = `scale(1.0)`));
    slideWrap.style.transform = `translateX(-${this.slideViewWidth}px)`;

    this.currentIndex = 0;
    let center = this.findCenter();

    if (this.center) {
      this.centeredIndex = center - this.slideLength + 1;
      this.moveSlide(center - this.slideLength + 1, false);
      center = this.findCenter();

      this.center = false; /* 한번만 실행되어야 하는 속성 */
    }

    slideWrap.children[center].style.transform = `scale(${this.scale})`;
  }

  findCenter() {
    const length = this.slideLength;
    const index = this.index;

    return Math.floor(length / 2 + 1) + length + index - 1;
  }

  animate(boolean = true) {
    const slideWrap = this.slideWrap;
    let second = this.transition.duration;
    let transition = `all ${second}s ease`;

    if (!boolean) {
      transition = "";
      this.transition.run = false;
    }

    slideWrap.style.transition = transition;
    [...slideWrap.children].forEach((el) => (el.style.transition = transition));
    const center = this.findCenter();

    if (!slideWrap.children[center]) return;
    slideWrap.children[center].style.transform = `scale(${this.scale})`;
  }

  moveSlide(index, animate = true) {
    const slideWrap = this.slideWrap;
    const slideViewWidth = this.slideViewWidth;
    const slideWidth = this.slideWidth;
    const gap = this.slideGap;

    this.animate(animate);

    if (index > this.slideLength) index = index % this.slideLength;

    // 가까운 곳 이동하게 로직 수정

    slideWrap.style.transform = `translateX(${-(
      slideViewWidth +
      index * (slideWidth + gap)
    )}px)`;

    this.index = index;

    // const center = this.findCenter();
    // if (!slideWrap.children[center]) return;

    // slideWrap.children[center].style.transform = `scale(${this.scale})`;
    // if (slideWrap.children[center - 1]) {
    //   slideWrap.children[center - 1].style.transform = `scale(1)`;
    // }

    // if (slideWrap.children[center + 1]) {
    //   slideWrap.children[center + 1].style.transform = `scale(1)`;
    // }
  }

  prev() {
    if (this.transition.run) return;
    this.moveSlide(this.index - 1);
  }

  next() {
    if (this.transition.run) return;
    this.moveSlide(this.index + 1);
  }

  transitionStart() {
    this.transition.run = true;
  }

  transitionEnd() {
    this.transition.run = false;

    const { index, slideLength } = this;
    //   if (e.target !== e.currentTarget) return;
    if (index >= slideLength || -index >= slideLength) {
      this.initPosition();
    }
  }

  resize() {
    const slideView = this.slideView;
    const width = Number(slideView.style.width.replace("px", ""));
    const deviceWidth =
      window.innerWidth > 0 ? window.innerWidth : screen.width;

    if (width > deviceWidth) {
      let margin = this.slideLength <= 1 ? 0 : this.margin;
      slideView.style.marginLeft = `${(deviceWidth - width) / 2 - margin}px`;
    }

    if (width === deviceWidth) {
      slideView.style.marginLeft = "0px";
    }
  }

  touchStart(e) {
    e.preventDefault();
    const children = [...this.slideWrap.children];
    const li = e.target.closest("li.slide-item");

    if (!children.includes(li)) return;
    const slideViewWidth = this.slideViewWidth;
    const slideWidth = this.slideWidth;
    const gap = this.slideGap;

    this.touch.start = true;

    let pageX = e.type === "mousedown" ? e.pageX : e.touches[0].pageX;
    this.touch.startX = pageX;

    this.touch.startTranslateX =
      slideViewWidth + this.index * (slideWidth + gap);
    this.animate(false);
  }

  touchMove(e) {
    if (!this.touch.start) return;

    const slideViewWidth = this.slideViewWidth;
    const slideWrap = this.slideWrap;
    const slideWidth = this.slideWidth;
    const gap = this.slideGap;
    const startX = this.touch.startX;

    let val = slideViewWidth + this.index * (slideWidth + gap);
    let pageX = e.type === "mousemove" ? e.pageX : e.touches[0].pageX;

    if (startX < pageX) {
      // right
      slideWrap.style.transform = `translateX(-${val - pageX + startX}px)`;
    }

    if (startX > pageX) {
      // left
      slideWrap.style.transform = `translateX(-${val + startX - pageX}px)`;
    }
  }

  touchEnd(e) {
    if (!this.touch.start) return;

    this.touch.start = false;
    this.touch.startX = 0;

    const slideWrap = this.slideWrap;
    const matrix = new WebKitCSSMatrix(slideWrap.style.transform);

    let value = -matrix.m41 - this.touch.startTranslateX; // +값 right, -값 left
    this.transitionEnd();

    let calc =
      this.index + Math.round(value / (this.slideWidth + this.slideGap));
    console.log(calc);
    this.moveSlide(calc);
  }

  destroy() {
    const { slideWrap, prevBtn, nextBtn, resizeObserver } = this;
    this.resizeObserver.disconnect();

    slideWrap.removeEventListener("transitionstart", this.transitionStart);
    slideWrap.removeEventListener("transitionend", this.transitionEnd);

    if (prevBtn) {
      prevBtn.removeEventListener("click", this.prev.bind(this));
    }

    if (nextBtn) {
      nextBtn.removeEventListener("click", this.next.bind(this));
    }

    slideWrap.removeEventListener("touchstart", this.touchStart);
    slideWrap.removeEventListener("touchmove", this.touchMove);
    slideWrap.removeEventListener("touchend", this.touchEnd);
  }
}
