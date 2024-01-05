function getWidth(element) {
  return Number(
    getComputedStyle(element).getPropertyValue("width").replace("px", "")
  );
}

function on(type, callback) {}

function moveSlide() {}

/* 홀수 슬라이드 */
class Slide {
  #index = 0;
  #centerSlideIndex;
  #correctionIndex = 0;

  static EVENTS_TYPES = "slide-change".split(",");
  static BASE = "left,cetner,right".split(",");

  constructor({ slideView, slideWrap, gap, base }) {
    this.slideView = slideView;
    this.slideWrap = slideWrap;

    if (slideWrap.children.length < 3) {
      return console.log("slide length < 3");
    }

    this.slides = [...this.slideWrap.children];
    this.gap = gap || 0;
    this.base = base || Slide.BASE[0];

    this.events = {};
    Slide.EVENTS_TYPES.forEach((type) => (this.events[type] = []));

    this.#initStyle();
    this.#cloneSlide();
    this.initPosition();
    this.#watchTransition();
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

  get index() {
    return this.#index;
  }

  set index(index) {
    this.#index = index;
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
    const { slideWrap, slides, base } = this;
    const allSlides = [...slideWrap.children];
    const transition = null;

    slideWrap.style.transition = transition;
    allSlides.forEach((el) => (el.style.transition = transition));

    if (base === "left") {
      this.#index = 0;
      this.correctionIndex = 0;
    }

    if (base === "center") {
      this.#index = 0;
      this.correctionIndex = Math.floor(slides.length / 2);
    }

    const { x } = this.calcMoveValue();
    slideWrap.style.transform = `translateX(-${x}px)`;
  }

  #watchTransition() {
    const { slideWrap } = this;
    slideWrap.addEventListener("transitionstart", this.#transition.bind(this));
    slideWrap.addEventListener("transitionend", this.#transition.bind(this));
  }

  #transition(e) {
    const { index, slides } = this;
    const length = slides.length;

    let plus = 0;
    if (e.type === "transitionstart") plus = 1;

    let value = index + this.correctionIndex;
    let max = length + this.correctionIndex + plus;
    let min = -(length - this.correctionIndex) - plus;

    // console.log(index, value);
    // console.log("max: ", max, value >= max);
    // console.log("min: ", min, value <= min);

    if (value >= max || value <= min) {
      this.initPosition();
    }
  }

  calcCloser() {} /* 터치시 사용 */
  calcMoveValue() {
    const { slideView, slideWrap, slides, index, gap, width } = this;

    const magnification =
      (slideWrap.children.length - slides.length) / 2 / slides.length;
    const calcedLeft = (getWidth(slideView) + gap) * magnification;
    const calced = (width + gap) * (index + this.correctionIndex);

    return {
      distanceWidth: calced,
      x: calcedLeft - calced,
    };
  }

  move() {
    console.log("move");
    const { slideWrap } = this;
    const slides = [...slideWrap.children];
    const { x } = this.calcMoveValue();

    console.log(x);
    const transition = `all 0.3s linear`;
    slideWrap.style.transition = transition;
    slides.forEach((el) => (el.style.transition = transition));
    // 여기에서 가운데 올애한테 scale 값을 주고
    // 가운데 있던애는 다시 작아지는 scale
    // slides[6].style.transform = `scale(1.25)`;
    slideWrap.style.transform = `translateX(-${x}px)`;
  }
}
