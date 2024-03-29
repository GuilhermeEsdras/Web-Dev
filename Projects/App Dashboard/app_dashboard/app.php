<?php

// classe da Dashboard
class Dashboard {

    public $data_inicio;
    public $data_fim;
    public $numeroVendas;
    public $totalVendas;
    public $clientesAtivos;
    public $clientesInativos;
    public $totalDeReclamacoes;
    public $totalDeElogios;
    public $totalDeSugestoes;
    public $totalDeDespesas;

    public function __get($atributo)
    {
        return $this->$atributo;
    }

    public function __set($atributo, $valor)
    {
        $this->$atributo = $valor;
        return $this;
    }
}

// classe de conexão com bd
class Conexao {

    private $host = 'localhost';
    private $dbname = 'dashboard';
    private $user = 'root';
    private $pass = '';

    public function conectar()
    {
        try {
            
            $conexao = new PDO(
                "mysql:host=$this->host;dbname=$this->dbname",
                "$this->user",
                "$this->pass"
            );

            $conexao->exec('set charset set utf8');

            return $conexao;

        } catch (PDOException $e) {
            echo '<p>'.$e->getMessage().'</p>';
        }
    }
}

// classe model
class Bd {
    
    private $conexao;
    private $dashboard;

    public function __construct(Conexao $conexao, Dashboard $dashboard) 
    {
        $this->conexao = $conexao->conectar();
        $this->dashboard = $dashboard;
    }

    public function getNumeroVendas()
    {
        $query = '
            SELECT
                count(*) as numero_vendas
            FROM
                tb_vendas
            WHERE
                data_venda between :data_inicio and :data_fim
        ';

        $stmt = $this->conexao->prepare($query);
        $stmt->bindValue(':data_inicio', $this->dashboard->__get('data_inicio'));
        $stmt->bindValue(':data_fim', $this->dashboard->__get('data_fim'));
        $stmt->execute();

        return $stmt->fetch((PDO::FETCH_OBJ))->numero_vendas;
    }

    public function getTotalVendas()
    {
        $query = '
            SELECT
                SUM(total) as total_vendas
            FROM
                tb_vendas
            WHERE
                data_venda between :data_inicio and :data_fim
        ';

        $stmt = $this->conexao->prepare($query);
        $stmt->bindValue(':data_inicio', $this->dashboard->__get('data_inicio'));
        $stmt->bindValue(':data_fim', $this->dashboard->__get('data_fim'));
        $stmt->execute();

        return $stmt->fetch((PDO::FETCH_OBJ))->total_vendas;
    }

    public function getClientesAtivos()
    {
        $query = '
            SELECT 
                count(*) as clientes_ativos 
            FROM 
                tb_clientes
            WHERE 
                tb_clientes.cliente_ativo = 1;
        ';

        $stmt = $this->conexao->prepare($query);
        $stmt->bindValue(':data_inicio', $this->dashboard->__get('data_inicio'));
        $stmt->bindValue(':data_fim', $this->dashboard->__get('data_fim'));
        $stmt->execute();

        return $stmt->fetch((PDO::FETCH_OBJ))->clientes_ativos;
    }

    public function getClientesInativos()
    {
        $query = '
            SELECT 
                count(*) as clientes_inativos 
            FROM 
                tb_clientes
            WHERE 
                tb_clientes.cliente_ativo = 0;
        ';

        $stmt = $this->conexao->prepare($query);
        $stmt->bindValue(':data_inicio', $this->dashboard->__get('data_inicio'));
        $stmt->bindValue(':data_fim', $this->dashboard->__get('data_fim'));
        $stmt->execute();

        return $stmt->fetch((PDO::FETCH_OBJ))->clientes_inativos;
    }

    /* Assumindo que: */
        // Tipos de contato:
            # tipo_contato = 1: Reclamação
            # tipo_contato = 2: Elogio
            # tipo_contato = 3: Sugestão
    
    public function getTotalDeReclamacoes()
    {
        
        $query = '
            SELECT 
                count(*) as total_de_reclamacoes 
            FROM 
                tb_contatos
            WHERE 
                tb_contatos.tipo_contato = 1;
        ';

        $stmt = $this->conexao->prepare($query);
        $stmt->bindValue(':data_inicio', $this->dashboard->__get('data_inicio'));
        $stmt->bindValue(':data_fim', $this->dashboard->__get('data_fim'));
        $stmt->execute();

        return $stmt->fetch((PDO::FETCH_OBJ))->total_de_reclamacoes;
    }

    public function getTotalDeElogios()
    {
        $query = '
            SELECT 
                count(*) as total_de_elogios
            FROM 
                tb_contatos
            WHERE 
                tb_contatos.tipo_contato = 2;
        ';

        $stmt = $this->conexao->prepare($query);
        $stmt->bindValue(':data_inicio', $this->dashboard->__get('data_inicio'));
        $stmt->bindValue(':data_fim', $this->dashboard->__get('data_fim'));
        $stmt->execute();

        return $stmt->fetch((PDO::FETCH_OBJ))->total_de_elogios;
    }

    public function getTotalDeSugestoes()
    {
        $query = '
            SELECT 
                count(*) as total_de_sugestoes
            FROM 
                tb_contatos
            WHERE 
                tb_contatos.tipo_contato = 3;
        ';

        $stmt = $this->conexao->prepare($query);
        $stmt->bindValue(':data_inicio', $this->dashboard->__get('data_inicio'));
        $stmt->bindValue(':data_fim', $this->dashboard->__get('data_fim'));
        $stmt->execute();

        return $stmt->fetch((PDO::FETCH_OBJ))->total_de_sugestoes;
    }

    public function getTotalDeDespesas()
    {
        $query = '
            SELECT
                SUM(total) as total_de_despesas
            FROM
                tb_despesas
            WHERE
                data_despesa between :data_inicio and :data_fim
        ';

        $stmt = $this->conexao->prepare($query);
        $stmt->bindValue(':data_inicio', $this->dashboard->__get('data_inicio'));
        $stmt->bindValue(':data_fim', $this->dashboard->__get('data_fim'));
        $stmt->execute();

        return $stmt->fetch((PDO::FETCH_OBJ))->total_de_despesas;
    }
}

// lógica do script
$dashboard = new Dashboard();

$conexao = new Conexao();

$competencia = explode('-', $_GET['competencia']);
$ano = $competencia[0];
$mes = $competencia[1];

$dias_do_mes = cal_days_in_month(CAL_GREGORIAN, $mes, $ano);

$dashboard->__set('data_inicio', $ano.'-'.$mes.'-01');
$dashboard->__set('data_fim', $ano.'-'.$mes.'-'.$dias_do_mes);

$bd = new Bd($conexao, $dashboard);

$dashboard->__set('numeroVendas', $bd->getNumeroVendas());
$dashboard->__set('totalVendas', $bd->getTotalVendas());
$dashboard->__set('clientesAtivos', $bd->getClientesAtivos());
$dashboard->__set('clientesInativos', $bd->getClientesInativos());
$dashboard->__set('totalDeReclamacoes', $bd->getTotalDeReclamacoes());
$dashboard->__set('totalDeElogios', $bd->getTotalDeElogios());
$dashboard->__set('totalDeSugestoes', $bd->getTotalDeSugestoes());
$dashboard->__set('totalDeDespesas', $bd->getTotalDeDespesas());

echo json_encode($dashboard);

?>