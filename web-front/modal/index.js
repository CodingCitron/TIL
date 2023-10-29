function createElement(tagName, attr) {
    const tag = document.createElement(tagName)
    createProperty(tag, attr)
    return tag
}

function createProperty (target, attr) {
    if(typeof attr !== "object") {
        return attr
    }
    
    for(prop in attr) {
        if(typeof attr[prop] === "object") {
            if(prop === "style") {
                for(styleProp in attr[prop]) {
                    target.style[styleProp] = attr[prop][styleProp]
                }
            } else {
                createProperty(target, attr[prop])
            }
        } else {
            if(prop in target) {
                target[prop] = attr[prop]
            } else {
                target.setAttribute(prop, attr[prop])
            }
        }
    }
}

Modal.default = {
    style: {

    }
}

function Modal(context) {
    this.context = context
    this.element
    this.init()
}

Modal.prototype.init = function () {
    const modalContent = createElement('div', {
        className: "modal-content"
    })
    const backdrop = createElement('div', {
        className: "modal-backdrop"
    })

    backdrop.append(modalContent)

    backdrop.addEventListener('click', this.outSideClick.bind(this))

    this.context.append(backdrop)
    this.element = backdrop
}

Modal.prototype.open = function () {
    this.element.classList.add("open")
}

Modal.prototype.close = function () {
    this.element.classList.remove("open")
}

Modal.prototype.destroy = function () {
    
}

Modal.prototype.outSideClick = function (event) {
    if(event.target === this.element) {
        this.close()
    }
}

const modalWrap = document.querySelector('.modal-wrap')
const modal = new Modal(modalWrap)
const openBtn = document.querySelector('#open')
const closeBtn = document.querySelector('#close')

openBtn.addEventListener('click', modal.open.bind(modal))
closeBtn.addEventListener('click', modal.close.bind(modal))