/* 변하지 않는 부분 */
const days = ["일", "월", "화", "수", "목", "금", "토"]
const daysElement = document.querySelector('.days-wrap')
const dayElement = document.querySelector('.day-wrap')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const yearMonth = document.querySelector('.year-month')

let year = new Date().getFullYear()
let month = new Date().getMonth() + 1

days.forEach(d => {
  const div = createElement('div')
  div.textContent = d

  daysElement.append(div)
})

const date = new Date()

/* util */
function createElement(elName) {
  return document.createElement(elName)
}

/* 계산 부분 */
const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)

function makeMonth(year, month) {
  const firstDay = new Date(year, month - 1, 1)
  const lastDay = new Date(year, month, 0)
  const prev = firstDay.getDay()

  const list = []

  /* 그달 이전 표시 */
  for(let i = prev; i > 0; i--) {
    list.push(new Date(year, month - 1, (-i + 1)).getDate())
  }

  /* 그달 표시 */
  for(let i = 1; i <= lastDay.getDate(); i++) {
    list.push(i)
  }

  /* 그달 이후 표시 */
  const length = 42 - list.length 
  for(let i = 1; i <= length; i++) {
    list.push(i)
  }

  return list
}

function drawMonth(list, inputEl) {
  inputEl.replaceChildren()

  list.forEach(day => {
    const div = createElement('div')
    div.textContent = day

    inputEl.append(div)
  })

  yearMonth.textContent = `${year}년 ${month}월`
}

function prev () {
  if(month === 1) {
    year -= 1
    month = 12
  } else {
    month -= 1
  }

  drawMonth(makeMonth(year, month), dayElement)
}

function next () {
  if(month === 12) {
    year += 1
    month = 1
  } else {
    month += 1
  }

  drawMonth(makeMonth(year, month), dayElement)
}

function init () {
  drawMonth(makeMonth(year, month), dayElement)
}

init ()

prevBtn.addEventListener('click', prev)
nextBtn.addEventListener('click', next)

