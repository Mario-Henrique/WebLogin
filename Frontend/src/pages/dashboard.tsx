import Menu from "@/components/menu";

export default function Dashboard(){
    const logoff = () => {
        //TODO: Realizar logoff da aplicação
    };

    return (
        <div>
            <Menu action={logoff} logon={true}/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">Controle de Gastos</h2>
                                <p className="card-text">Total de gastos no mês: R$ 2.500,00</p>
                                <p className="card-text">Total de gastos no ano: R$ 30.000,00</p>
                                <canvas className="chart" id="gastosChart"></canvas>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">Controle de Ganhos</h2>
                                <p className="card-text">Total de ganhos no mês: R$ 5.000,00</p>
                                <p className="card-text">Total de ganhos no ano: R$ 60.000,00</p>
                                <canvas className="chart" id="ganhosChart"></canvas>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">Resumo Mensal e Anual</h2>
                                <p className="card-text">Saldo do mês: R$ 2.500,00</p>
                                <p className="card-text">Saldo do ano: R$ 30.000,00</p>
                                <canvas className="chart" id="resumoChart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}