const sidebar = document.querySelector('.sidebar')
const page = document.querySelector('.page')
const openBtn = document.querySelector('.page .open-btn')
const closeBtn = document.querySelector('.sidebar .close-btn')

openBtn.addEventListener('click', sidebarOpenHandler)
closeBtn.addEventListener('click', sidebarCloseHandler)

function sidebarOpenHandler() {
  sidebar.classList.add('open')
}

function sidebarCloseHandler() {
  sidebar.classList.remove('open')
}