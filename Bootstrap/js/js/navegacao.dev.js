"use strict";

(function () {
  function navegarViaAjax(hash) {
    if (!hash) return;
    var link = document.querySelector("[wm-link='".concat(hash, "']"));
    if (!link) return;
    var destino = document.querySelector('[wm-link-destino]');
    var url = hash.substring(1);
    fetch(url).then(function (resp) {
      return resp.text();
    }).then(function (html) {
      destino.innerHTML = html;
      var resultado = html.match(/\<script\>([\s\S]*)\<\/script\>/);

      if (resultado && resultado.length >= 2) {
        eval(resultado[1]);
      }
    });
  }

  function configurarLinks() {
    document.querySelectorAll('[wm-link]').forEach(function (link) {
      link.href = link.attributes['wm-link'].value;
    });
  }

  function navegacaoInicial() {
    if (location.hash) {
      navegarViaAjax(location.hash);
    } else {
      var primeiroLink = document.querySelector('[wm-link]');
      navegarViaAjax(primeiroLink.hash);
    }
  }

  window.onhashchange = function (e) {
    return navegarViaAjax(location.hash);
  };

  configurarLinks();
  navegacaoInicial();
})();