const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday",
 "Thursday", "Friday", "Saturday"];

const months = ["Jan", "Feb", "Mar", "Apr",
 "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

 toggle.addEventListener('click', (event) => {
     const html = document.querySelector('html')
     if(html.classList.contains('dark')){
        html.classList.remove('dark')
        event.target.innerHTML = 'Dark Mode'
     } else {
         html.classList.add('dark')
         event.target.innerHTML = 'Light Mode'
     }

 })

 