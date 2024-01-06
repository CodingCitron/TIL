function getWidth(element) {
  return Number(
    getComputedStyle(element).getPropertyValue("width").replace("px", "")
  );
}

/* 홀수 슬라이드 */
class Slide {
  #index = 0;
  #correctionIndex = 0;

  static EVENTS_TYPES = "slide-change".split(",");
  static BASE = "left,cetner,right".split(",");

  constructor({ slideView, slideWrap, gap, base, on }) {
    this.slideView = slideView;
    this.slideWrap = slideWrap;

    if (slideWrap.children.length < 3) {
      return console.log("slide length < 3");
    }

    this.slides = [...this.slideWrap.children];
    this.gap = gap || 0;
    this.base = base || Slide.BASE[0];
    this.threshold = 0.5;

    /* 마우스 이벤트 */
    /* 터치 이벤트 */
    this.touch = {
      start: false,
      startX: 0,
      startTranslateX: 0,
      moveTranslatX: 0,
    };

    this.events = {};
    Slide.EVENTS_TYPES.forEach((type) => (this.events[type] = []));
    this.transitionRun = false;
    this.bulletIndex;

    // 생성시점부터 이벤트 동작하게 하기
    Object.keys(on).forEach((key) => {
      if (!Object.hasOwn(this.events, key)) {
        throw new Error("지원하지 않는 이벤트");
      }

      this.events[key].push({
        callback: on[key],
      });
    });

    this.#initStyle();
    this.#cloneSlide();

    this.allSlides = [...this.slideWrap.children];

    this.initPosition();
    this.#watchTransition();

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

    // 처음 한번 동작
    this.index = 0;
  }

  #initStyle() {
    const { slideView, slideWrap, slides, gap } = this;
    const width = getWidth(slides[0]);

    this.width = width;

    slideView.style.width = `${(width + gap) * slides.length - gap}px`;
    slideWrap.style.gap = `${gap}px`;
  }

  #cloneSlide() {
    const { slideWrap, slides } = this;
    const left = document.createDocumentFragment();
    const right = document.createDocumentFragment();

    for (let i = 0; i < slides.length; i++) {
      let j = slides.length - 1 - i;

      left.prepend(slides[j].cloneNode(true));
      left.append(slides[i].cloneNode(true));

      right.append(slides[i].cloneNode(true));
      right.prepend(slides[j].cloneNode(true));
    }

    slideWrap.prepend(left);
    slideWrap.append(right);
  }

  on(type, callback) {
    const { events } = this;

    if (!Object.hasOwn(events, type)) {
      throw new Error("지원하지 않는 이벤트");
    }

    this.events[type].push({
      callback,
    });
  }

  get index() {
    return this.#index;
  }

  set index(index) {
    this.#index = index;
    this.centerIndex = this.findCenter();

    this.bulletIndex = (this.slides.length + -this.index) % this.slides.length;

    if (this.events["slide-change"].length > 0) {
      this.events["slide-change"].forEach((event) =>
        event.callback({
          bulletIndex: this.bulletIndex,
        })
      );
    }

    this.move();
  }

  get correctionIndex() {
    return this.#correctionIndex;
  }

  set correctionIndex(value) {
    if (typeof value !== "number") throw new Error("value type is not number");
    this.#correctionIndex = value;
  }

  initPosition() {
    const { slideWrap, slides, base, allSlides } = this;
    const transition = null;

    // 초기화
    slideWrap.style.transition = transition;
    allSlides.forEach((el) => (el.style.transition = transition));
    this.beforeAnimationInit();

    if (base === "left") {
      //   this.#index = 0;
      this.correctionIndex = 0;
    }

    if (base === "center") {
      //   this.#index = 0;
      this.correctionIndex = Math.floor(slides.length / 2);
    }

    // 이전 모습
    const { x } = this.calcMoveValue();
    this.centerIndex = this.findCenter();
    this.beforeAnimation();
    slideWrap.style.transform = `translateX(${x}px)`;
  }

  #watchTransition() {
    const { slideWrap } = this;
    slideWrap.addEventListener(
      "transitionstart",
      this.#transitionStart.bind(this)
    );
    slideWrap.addEventListener("transitionend", this.#transitionEnd.bind(this));
  }

  #transitionStart(e) {
    this.transitionRun = true;
    // this.#transition(e);
  }

  #transitionEnd(e) {
    this.#transition(e);
    this.transitionRun = false;
  }

  #transition(e) {
    const { slides } = this;
    const length = slides.length;

    this.transitionRun = true;

    let isEnd = 0; /* start: 1, end: 0 */
    if (e.type === "transitionstart") isEnd = 1;

    let value = this.#index + this.correctionIndex;
    let max = length + this.correctionIndex + isEnd;
    let min = -(length - this.correctionIndex) - isEnd;

    if (value >= max || value <= min) {
      this.#index = this.#index % slides.length;
      this.initPosition();
    }
  }

  calcMoveValue(index) {
    const { slideView, slideWrap, slides, gap, width } = this;

    if (typeof index !== "number") {
      index = this.#index;
    }

    const magnification =
      (slideWrap.children.length - slides.length) / 2 / slides.length;
    const calcedLeft = (getWidth(slideView) + gap) * magnification;
    const calced = (width + gap) * (index + this.correctionIndex);

    return {
      distanceWidth: calced,
      x: -(calcedLeft - calced),
    };
  }

  findCenter() {
    const { slideWrap, slides, correctionIndex, base, allSlides } = this;

    const startPosition = (allSlides.length - slides.length) / 2;
    let centerIndex = startPosition + -this.#index;

    if (base === "left") {
      centerIndex -= correctionIndex;
    }

    return centerIndex;
  }

  move() {
    console.log("move");
    const { slideWrap, allSlides } = this;
    const { x } = this.calcMoveValue();

    const transition = `all 0.3s linear`;
    slideWrap.style.transition = transition;
    allSlides.forEach((el) => (el.style.transition = transition));
    // 여기에서 가운데 올애한테 scale 값을 주고
    // 가운데 있던애는 다시 작아지는 scale
    this.beforeAnimation();

    slideWrap.style.transform = `translateX(${x}px)`;
  }

  beforeAnimationInit() {
    const { allSlides } = this;
    allSlides.forEach((el) => (el.style.transform = `scale(1)`));
  }

  beforeAnimation() {
    // console.log("beforeAnimation");
    const { allSlides, centerIndex } = this;

    console.log(allSlides[centerIndex]);
    if (allSlides[centerIndex - 1]) {
      allSlides[centerIndex - 1].style.transform = `scale(1)`;
    }

    if (allSlides[centerIndex + 1]) {
      allSlides[centerIndex + 1].style.transform = `scale(1)`;
    }

    if (allSlides[centerIndex]) {
      allSlides[centerIndex].style.transform = `scale(1.25)`;
    }
  }

  getPageX(e) {
    return e.type.includes("mouse") ? e.pageX : e.touches[0].pageX;
  }

  touchStart(e) {
    e.preventDefault();

    const { slideWrap, allSlides } = this;
    const li = e.target.closest("li.slide-item");

    if (!allSlides.includes(li)) return;
    this.touch.start = true;

    const transition = null;

    // 초기화
    slideWrap.style.transition = transition;
    allSlides.forEach((el) => (el.style.transition = transition));

    this.touch.startTranslateX = this.calcMoveValue().x;
    this.touch.startX = this.getPageX(e);
  }

  touchMove(e) {
    if (!this.touch.start) return;

    const {
      slideWrap,
      touch: { startX },
    } = this;

    const { x } = this.calcMoveValue();
    const pageX = this.getPageX(e);
    const value = x - startX + pageX;

    slideWrap.style.transform = `translateX(${value}px)`;
    this.touch.moveTranslatX = value;
  }

  touchEnd(e) {
    e.preventDefault();
    if (!this.touch.start) return;

    const {
      width,
      gap,
      touch: { startTranslateX, moveTranslatX },
    } = this;

    this.touch.start = false;
    this.touch.startX = 0;
    this.touch.moveTranslatX = 0;

    let calc = -((startTranslateX - moveTranslatX) / (width + gap));
    this.touchMoveCloser(startTranslateX, calc);
  }

  // 터치 종료시 트랜지션 그 후 initPosition을 해야함
  touchMoveCloser(startTranslateX, calc) {
    const { slideWrap, allSlides, width, gap } = this;

    // 스케일 줄이기
    this.beforeAnimationInit();

    //트랜지션 온
    const transition = `all 0.3s linear`;
    slideWrap.style.transition = transition;
    allSlides.forEach((el) => (el.style.transition = transition));

    this.#index = this.index + Math.round(calc);
    this.centerIndex = this.findCenter();
    this.beforeAnimation();

    const calced = (width + gap) * Math.round(calc);
    slideWrap.style.transform = `translateX(${startTranslateX + calced}px)`;

    this.bulletIndex = (this.slides.length + -this.index) % this.slides.length;

    if (this.events["slide-change"].length > 0) {
      this.events["slide-change"].forEach((event) =>
        event.callback({
          bulletIndex: this.bulletIndex,
        })
      );
    }
  } /* 터치시 사용 */

  prev() {
    if (this.transitionRun) return;
    this.index = this.index + 1;
  }

  next() {
    if (this.transitionRun) return;
    this.index = this.index - 1;
  }
}
