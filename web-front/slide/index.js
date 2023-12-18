function Slide(options) {
  this.element = options.element;
  this.viewLength = options.viewLength || 1;
  this.gap = options.gap || 0;
  this.width = options.width;
  this.viewsElement = document.createElement("div");
  this.viewsElement.classList.add("slide-views");

  [...this.element.children].forEach((el) => {
    this.viewsElement.append(el);
  });

  this.element.append(this.viewsElement);
  this.viewsElement.style.gap = `${this.gap}px`;

  if (options.width) {
    [...this.viewsElement.children].forEach((el) => {
      el.style.width = `${this.width}px`;
      el.style.flex = `1 0 ${this.width}px`;
      el.classList.add("slide-item");
    });
  }

  this.viewsElement.style.width = `${
    this.width * this.viewLength + this.gap
  }px`;
}

Slide.prototype.prev = function () {};

Slide.prototype.next = function () {};

const slide = new Slide({
  element: document.querySelector(".slide-wrap"),
  viewLength: 2,
  gap: 10,
  width: 300,
});
