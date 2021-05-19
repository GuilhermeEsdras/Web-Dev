var inputDistancia = document.getElementById("distancia"),
    inputHoras = document.getElementById("horas"),
    inputMinutos = document.getElementById("minutos"),
    inputSegundos = document.getElementById("segundos"),
    btnCalcular = document.getElementById("btn_calcular"),
    paceText = document.getElementById("pace");

btnCalcular.addEventListener("click", function () {
    var kms = parseFloat(inputDistancia.value),
        horas = parseFloat(inputHoras.value),
        minutos = parseFloat(inputMinutos.value),
        segundos = parseFloat(inputSegundos.value);

    var totalMinutos = horas * 60 + minutos + segundos / 60,
        pace = totalMinutos / kms,
        paceMinutos = Math.floor(pace),
        paceSegundos = Math.round((pace - paceMinutos) * 60);
    
    var ehNaN = function(e) {
        if (isNaN(e)) {
            e.style.borderColor = "red";
            return;
        } else {
            e.style.borderColor = "initial";
        }
    }
    
    ehNaN(inputDistancia);
    ehNaN(inputHoras);
    ehNaN(inputMinutos);
    ehNaN(inputSegundos);

    if(paceSegundos < 10) {
        paceSegundos = "0" + paceSegundos;
    }
    
    paceText.textContent = "Você precisa correr " + paceMinutos + ":" + paceSegundos + " minutos por km."
})