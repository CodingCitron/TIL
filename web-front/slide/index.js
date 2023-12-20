function Slide(options) {
  this.element = options.element;
  this.viewLength = options.viewLength || 1;
  this.gap = options.gap || 0;
  this.width = options.width;
  this.viewsElement = document.createElement("div");
  this.viewsElement.classList.add("slide-views");
  this.index = 0;

  [...this.element.children].forEach((el) => {
    this.viewsElement.append(el);
  });

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

  this.element.style.width = `${this.width * this.viewLength + this.gap}px`;
}

// 좌우 1개 추가
// 트랜지션 이벤트

Slide.prototype.prev = function () {
  console.log("prev");
  this.index--;

  this.viewsElement.style.transform = `translateX(${
    (this.width + this.gap) * this.index
  }px)`;
};

Slide.prototype.next = function () {
  console.log("next");
  this.index++;

  this.viewsElement.style.transform = `translateX(${
    (this.width + this.gap) * this.index
  }px)`;
};

const slide = new Slide({
  element: document.querySelector(".slide-wrap"),
  viewLength: 2,
  gap: 10,
  width: 300,
});

const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

prevBtn.addEventListener("click", slide.prev.bind(slide));
nextBtn.addEventListener("click", slide.next.bind(slide));
