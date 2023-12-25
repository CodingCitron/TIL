function Slide(options) {
  this.element = options.element;
  this.viewLength = options.viewLength || 1;
  this.gap = options.gap || 0;
  this.width = options.width;
  this.viewsElement = document.createElement("div");
  this.viewsElement.classList.add("slide-views");
  this.index = 0;
  this.center = null; // 센터 이미지 인덱스

  [...this.element.children].forEach((el) => {
    this.viewsElement.append(el);
  });

  const first = this.viewsElement.children[0];
  const last =
    this.viewsElement.children[this.viewsElement.children.length - 1];

  // this.viewsElement.append(this.clone(first));
  // this.viewsElement.prepend(this.clone(last));

  this.element.append(this.viewsElement);
  this.viewsElement.style.gap = `${this.gap}px`;
  this.viewsElement.style.transition = `transform 0.3s ease`;

  if (options.width) {
    [...this.viewsElement.children].forEach((el) => {
      el.style.width = `${this.width}px`;
      el.style.flex = `1 0 ${this.width}px`;
      el.classList.add("slide-item");
    });
  }

  this.element.style.width = `${
    this.width * this.viewLength + this.gap * (this.viewLength - 1)
  }px`;

  // this.next();

  this.viewsElement.addEventListener(
    "transitionstart",
    this.transitionStart.bind(this)
  );
  this.viewsElement.addEventListener(
    "transitionstart",
    this.transitionEnd.bind(this)
  );
}

Slide.prototype.clone = function (el) {
  return el.cloneNode(true);
};

Slide.prototype.transitionStart = function () {
  console.log("transition-start");
  const viewLength = this.viewLength;
};

Slide.prototype.transitionEnd = function () {
  console.log("transition-end");
  const viewLength = this.viewLength;
  const childrenLength = this.viewsElement.children.length;

  console.log(viewLength, childrenLength);
  console.log(this.index);

  this.viewsElement.prepend(this.viewsElement.children[childrenLength - 1]);
};
// 좌우 1개 추가
// 트랜지션 이벤트

Slide.prototype.initTransition = function () {
  this.viewsElement.style.transition = `transform 0s ease`;
};

Slide.prototype.next = function () {
  console.log("next");
  this.index++;

  this.viewsElement.style.transform = `translateX(${
    (this.width + this.gap) * -this.index
  }px)`;
};

Slide.prototype.prev = function () {
  console.log("prev");
  this.index--;

  this.viewsElement.style.transform = `translateX(${
    (this.width + this.gap) * -this.index
  }px)`;
};

const slide = new Slide({
  element: document.querySelector(".slide-wrap"),
  viewLength: 5,
  gap: 35,
  width: 128,
});

const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

prevBtn.addEventListener("click", slide.prev.bind(slide));
nextBtn.addEventListener("click", slide.next.bind(slide));
