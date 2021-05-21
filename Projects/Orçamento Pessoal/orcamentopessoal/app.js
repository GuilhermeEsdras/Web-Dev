class Despesa {

    constructor(ano, mes, dia, tipo, descricao, valor) {
        this.ano = ano;
        this.mes = mes;
        this.dia = dia;
        this.tipo = tipo;
        this.descricao = descricao;
        this.valor = valor;
    }

    validarDados() {
        for (let i in this) {
            if(this[i] == undefined || this[i] == null || this[i] == '') {
                return false;
            }
        }
        return true;
    }

}

class Bd {

    constructor() {
        let id = localStorage.getItem('id');

        if (id === null) {
            localStorage.setItem('id', 0);
        }

    }

    getProximoId() {
        let proximoId = localStorage.getItem('id');
        return parseInt(proximoId) +1;
    }

    gravar(d) {
        let id = this.getProximoId();
        localStorage.setItem(id, JSON.stringify(d));

        localStorage.setItem('id', id);
    }

    recuperarTodosRegistros() {

        // array de despesas recuperadas
        let despesas = Array();

        let id = localStorage.getItem('id');

        // iterar sobre todas as despesas em localStorage
        for(let i = 1; i <= id; i++) {

            // recupera a despesa
            let despesaAtual = JSON.parse(localStorage.getItem(i));
            if (!despesaAtual) continue; // verifica se foi removida

            despesaAtual.id = i;
            despesas.push(despesaAtual); // add ao array
        }
        
        return despesas;
    }

    pesquisar(despesa) {
        return this.recuperarTodosRegistros().filter(
            function(d) {
                return  d.ano === despesa.ano ||
                        d.mes === despesa.mes ||
                        d.dia === despesa.dia ||
                        d.tipo === despesa.tipo ||
                        d.descricao === despesa.descricao ||
                        d.valor === despesa.valor;
            }
        )
    }

    remover(id) {
        localStorage.removeItem(id);
    }

}

let bd = new Bd();

function cadastrarDespesa() {

    let ano = document.getElementById('ano'),
        mes = document.getElementById('mes'),
        dia = document.getElementById('dia'),
        tipo = document.getElementById('tipo'),
        descricao = document.getElementById('descricao'),
        valor = document.getElementById('valor');

    let despesa = new Despesa(
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value
    );

    let resultadoDeValidacao = despesa.validarDados();

    let add_rem = (elemento, tipo) => {
        let remover = (e) => resultadoDeValidacao ? `${e}-danger` : `${e}-success`,
            add     = (e) => resultadoDeValidacao ? `${e}-success` : `${e}-danger`;
        elemento.classList.contains(remover(tipo)) && elemento.classList.remove(remover(tipo));
        elemento.classList.add(add(tipo));
    };

    let alteraTexto = (elemento, textoVerdadeiro, textoFalso) => {
        elemento.innerHTML = resultadoDeValidacao ? textoVerdadeiro : textoFalso;
    };

    let divDoModal = document.getElementById('divDoModal'),
        btnDoModal = document.getElementById('btnDoModal'),
        modalHeader = document.getElementById('tituloDoModal'),
        textoDoModal = document.getElementById('textoDoModal');

    add_rem(divDoModal, 'text');
    add_rem(btnDoModal, 'btn');
    btnDoModal.innerHTML = 'Voltar' + (resultadoDeValidacao ? '' : ' e corrigir');

    alteraTexto(modalHeader, 'Registro inserido com sucesso', 'Erro na gravação');
    alteraTexto(textoDoModal, 'Despesa foi cadastrada com sucesso!', 'Existem campos obrigatórios que não foram preenchidos');
    
    resultadoDeValidacao && bd.gravar(despesa);
    $('#modalRegistraDespesa').modal('show');
    if (resultadoDeValidacao) {
        let limpaCampos = (id) => document.getElementById(id).value = '';
        [ano, mes, dia, tipo, descricao, valor].forEach(id => {
            limpaCampos(id.id);
        });
    }
}

function carregaListaDespesas(despesas = Array(), filtro = false) {
    let listaDeDespesas = document.getElementById('listaDespesas');
    listaDeDespesas.innerHTML = '';

    ( (despesas.length < 1 && !filtro) ? 
        bd.recuperarTodosRegistros() :
        despesas
    ).forEach(function (d) { 
        // recebe um Objeto Despesas 'd'
        
        // criando a linha (tr)
        let linha = listaDeDespesas.insertRow();

        // construindo as colunas (td)
        linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`;

        switch (d.tipo) {
            case '1': d.tipo = 'Alimentação';
                break;
            case '2': d.tipo = 'Educação';
                break;
            case '3': d.tipo = 'Lazer';
                break;
            case '4': d.tipo = 'Saúde';
                break;
            case '5': d.tipo = 'Transporte';
                break;
        }
        linha.insertCell(1).innerHTML = d.tipo;

        linha.insertCell(2).innerHTML = d.descricao;
        linha.insertCell(3).innerHTML = d.valor;

        // cria botão de exclusão
        let btn = document.createElement("button");
        btn.className = 'btn btn-danger';
        btn.innerHTML = '<i class="fas fa-times"></i>';
        btn.id = `id_despesa_${d.id}`;
        btn.onclick = function () {
            // remove despesa
            let id = this.id.split("_")[2];
            bd.remover(id);
            window.location.reload();
        }
        linha.insertCell(4).append(btn);
    })
}

function pesquisarDespesa() {
    let ano = document.getElementById('ano').value,
        mes = document.getElementById('mes').value,
        dia = document.getElementById('dia').value,
        tipo = document.getElementById('tipo').value,
        descricao = document.getElementById('descricao').value,
        valor = document.getElementById('valor').value;
    
    let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor);

    console.log(bd.pesquisar(despesa));
    carregaListaDespesas(bd.pesquisar(despesa), true);
}