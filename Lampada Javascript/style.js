const turnon = document.getElementById("on")
const turnof = document.getElementById("of")
const lamp = document.getElementById("lamp")

function verifc() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampon() {
    if (!verifc()) {
        lamp.src = 'https://tse2.mm.bing.net/th?id=OIP.gMVEHGzru3dl6At8YbEsLgHaM6&pid=Api&P=0';
    }
}
function lampof() {
    if (!verifc()) {
        lamp.src = './img/th.jfif'
    }
}
function lampBroken() {
    lamp.src = './img/quebrada.jpg'
}

turnon.addEventListener('click', lampon)
turnof.addEventListener('click', lampof)
lamp.addEventListener('mouseover', lampon)
lamp.addEventListener('mouseleave', lampof)

lamp.addEventListener('dblclick', lampBroken)