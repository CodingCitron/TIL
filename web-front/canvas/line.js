const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

// x horizontal, y vertical

ctx.beginPath(); // Start a new path
ctx.moveTo(50, 100); // Move the pen to (30, 50)
ctx.lineTo(50, 50); // Draw a line to (150, 100)
ctx.lineTo(100, 100); // Draw a line to (150, 100)
ctx.lineTo(150, 100);
ctx.stroke(); // Render the path
// ctx.fill() // fill color

// ctx.strokeStyle = "blue" // set Color
// ctx.fillStyle = "blue"

/* moveTo 시작 좌표 */
/* lineTo 절대 좌표 lineTo를 사용해서 그림 */