$(document).ready(() => {
    

    $('#index').on('click', () => {
        $('body').load('index.html');
    })
	
    $('#documentacao').on('click', () => {
        $.post('documentacao.html', data => {
            $('#pagina').html(data);
        })
    });
    
    $('#suporte').on('click', () => {
        $.post('suporte.html', data => {
            $('#pagina').html(data);
        })
    });

    // ajax
    $('#competencia').on('change', e => {

        let competencia = $(e.target).val();

        $.ajax({
            type: 'GET',
            url: 'app.php',
            data: `competencia=${competencia}`, // x-www-form-urlencoded
            dataType: 'json',
            success: dados => {
                $('#numeroVendas').html(dados.numeroVendas);
                $('#totalVendas').html(dados.totalVendas);
                $('#clientesAtivos').html(dados.clientesAtivos);
                $('#clientesInativos').html(dados.clientesInativos);
                $('#totalDeReclamacoes').html(dados.totalDeReclamacoes);
                $('#totalDeElogios').html(dados.totalDeElogios);
                $('#totalDeSugestoes').html(dados.totalDeSugestoes);
                $('#totalDeDespesas').html(dados.totalDeDespesas);
                console.log(dados);
            },
            error: erro => {
                console.log(erro);
            }
        })

        // método, url, dados, sucesso, erro

    })
})