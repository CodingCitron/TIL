const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

ctx.font ="48px serif"
ctx.textAlign = "start" // start, end, left, right, center
ctx.baseline = "top" // top, hanging, middle, alphabetic, ideographic, bottom
ctx.direction = "ltr" // ltr, rtl, inherit

ctx.fillStyle = "#ff0000"
ctx.strokeStyle ="#00ff00"
ctx.fillText("hello world", 10, 50)
ctx.strokeText("Hello world", 10, 100);
