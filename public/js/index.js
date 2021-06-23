const buttons = document.querySelectorAll('.nav_button')
const y = document.querySelector('y')
const x = document.querySelector('x')

let hover = false

buttons.forEach( (e, i) => {
    let Yc = e.offsetTop + 34
    e.addEventListener('mouseenter', () => {
        console.log(Yc);
        hover = true
        x.style.left = "0px"
        y.style.top = Yc+"px"
    })
    e.addEventListener('mouseleave', () => {
        hover = false
    })
})

window.addEventListener('mousemove', e => {
    if(hover == false) {
        x.style.left = e.clientX+"px"
        y.style.top = e.clientY+"px"
    }
})
