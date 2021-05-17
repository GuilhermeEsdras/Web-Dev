var contaTerminada = false;

function calcular(tipo, valor) {
    // console.log(tipo, valor);
    var verificaPonto = () => valor === '.' ? '' : ' ';
    var atualizaVisor = () => document.getElementById('resultado').value += `${verificaPonto()}${valor}${verificaPonto()}`;
    switch (tipo) {
        case 'acao':

        switch (valor) {
            case 'c':
                // limpa o visor
                document.getElementById('resultado').value = '';
                break;

            case '+':
            case '-':
            case '*':
            case '/':
            case '.':
                atualizaVisor();
                break;
            
            case '=':
                var conta = eval((document.getElementById('resultado').value).replace(/\s/g, ''));
                document.getElementById('resultado').value = String(conta);
                contaTerminada = true;

                console.log(eval(conta));
                break;
        
            default:
                break;
        }
            break;
        
        case 'valor':
            if (!contaTerminada) document.getElementById('resultado').value += valor;
            else {
                document.getElementById('resultado').value = valor;
                contaTerminada = false;
            }

            break;
    
        default:
            break;
    }
}