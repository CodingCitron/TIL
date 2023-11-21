function MobileDatePicker (element) {
  this.el = element
  this.childEl = {}
  this.date = new Date()

  this.yearRange = 120

  this.startYear = this.date.getFullYear() - this.yearRange
  this.selectedYear = this.date.getFullYear()
  this.selectedMonth = this.date.getMonth() + 1
  this.selectedDay = this.date.getDate()
  this.selectedLastDay = new Date(this.selectedYear, this.selectedMonth, 0).getDate()

  this.data = {
    year: [],
    month: [],
    days: [] 
  }

  this.selectedDate 
  this.drawStructure()
  this.draw()
}

MobileDatePicker.prototype.drawStructure = function () {
  const st = ['Year', 'Month', 'Day']

  for(let i = 0; i < st.length; i++) {
    const div = document.createElement('div')
    div.className = st[i]

    this.childEl[st[i].toLocaleLowerCase()] = div
    this.el.append(div)
  }
}

MobileDatePicker.prototype.draw = function () {
  const { year, month, day } = this.childEl 

  console.log(year, month, day)
  console.log(this.selectedYear, this.selectedMonth, this.selectedDay)
  // year
  for(let i = 0; i <= this.yearRange; i++) {
    const btn = document.createElement('button')

    btn.textContent = this.startYear + i
    year.append(btn)
  }
  
  // month
  for(let i = 1; i <= 12; i++) {
    const btn = document.createElement('button')
    btn.textContent = i

    month.append(btn)
  }

  // day
  for(let i = 1; i <= this.selectedLastDay; i++) {
    const btn = document.createElement('button')
    btn.textContent = i

    day.append(btn)
  }
}

const datePicker = document.querySelector('#datePicker')
const mobileDatePicker = new MobileDatePicker(datePicker)