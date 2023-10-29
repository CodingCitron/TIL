function DragElement(element, option) {
    this.element = element

    if(typeof option === "object" && !Array.isArray(option)) {
        Object.keys(option).forEach(key => this[key] = option[key])
    }
    this.init()
}

DragElement.prototype.init = function (callback) {
    this.element.setAttribute('draggable', true)

    const obj = this
    this.element.addEventListener('drag', function (event) {
        obj.drag.call(this, event, callback)
    })
}

DragElement.prototype.drag = function (event, callback) {
    console.log(event)
}

function DropElement(element) {
    this.element = element
    this.init()
}

DropElement.prototype.init = function () {
    this.element
}

function DragAndDrop(drag, drop) {

}

const dragEl = new DragElement(document.getElementById("dragElement"))
const dropEl = new DropElement(document.getElementById("dropElement"))
