"use strict";

(function ($) {
  $.fn.temporizador = function (opcoes) {
    var opcoesFinais = $.extend({
      mensagem: 'Em breve!',
      horario: '23:59:59'
    }, opcoes);
    var horaDezena = $('<span class="digito">').html('0');
    var horaUnidade = $('<span class="digito">').html('0');
    var minutoDezena = $('<span class="digito">').html('0');
    var minutoUnidade = $('<span class="digito">').html('0');
    var segundoDezena = $('<span class="digito">').html('0');
    var segundoUnidade = $('<span class="digito">').html('0');
    var separadorHora = $('<span class="separador">').html(':');
    var separadorMinuto = $('<span class="separador">').html(':');
    var mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem);
    $(this).addClass('temporizador');
    $(this).append(horaDezena, horaUnidade, separadorHora, minutoDezena, minutoUnidade, separadorMinuto, segundoDezena, segundoUnidade, mensagem);
    var regex = new RegExp(/(\d\d):(\d\d):(\d\d)/);
    var horarioAlvo = regex.exec(opcoesFinais.horario);
    console.log(horarioAlvo);
    var temporizador = setInterval(function () {
      var agora = new Date();
      var alvo = new Date();
      alvo.setHours(horarioAlvo[1]);
      alvo.setMinutes(horarioAlvo[2]);
      alvo.setSeconds(horarioAlvo[3]);
      var diferencaEmMili = alvo.getTime() - agora.getTime();

      if (diferencaEmMili >= 0) {
        var diferenca = regex.exec(new Date(diferencaEmMili).toISOString());
        console.log(diferenca);
        horaDezena.html(diferenca[1][0]);
        horaUnidade.html(diferenca[1][1]);
        minutoDezena.html(diferenca[2][0]);
      }
    }, 1000);
    return this;
  };
})(jQuery);