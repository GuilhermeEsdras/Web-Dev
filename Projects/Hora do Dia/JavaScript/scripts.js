function load() {
    var msgHello = window.document.getElementById('hello')
    var msgHour = window.document.getElementById('hour')
    var pic = window.document.getElementById('image')
    var date = new Date()
    var hour = date.getHours()

    if (hour >= 0 && hour < 12) {
        msgHello.innerText = `Bom dia!`
        pic.src = '../Hora do Dia/Images/morning.jpeg'
        document.body.style.background = 'rgba(156,197,206,1)'

    } else if (hour >= 12 && hour <= 18) {
        msgHello.innerText = `Boa tarde!`
        pic.src = '../Hora do Dia/Images/sunset.jpg'
        document.body.style.background = 'rgba(131,95,72,1)'

    } else {
        msgHello.innerText = `Boa noite!`
        pic.src = '../Hora do Dia/Images/night.jpeg'
        document.body.style.background = 'rgba(9,19,39,1)'
    }

    msgHour.innerText = `Agora são ${hour} horas`
}
