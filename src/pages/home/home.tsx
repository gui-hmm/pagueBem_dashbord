import { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import { Layout } from "../../components/layout/layout";
import { GraficoIndiceInteracao } from "../../components/graficoIndiceInteracao/graficoIndiceInteracao";
import { GraficoIndicePagamento } from "../../components/graficoIndicePagamento/graficoIndicePagamento";
import { GraficoIndiceRegularidade } from "../../components/graficoIndiceRegularidade/graficoIndiceRegularidade";
import { GraficoIndiceReputacao } from "../../components/graficoIndiceReputacao/graficoIndiceReputacao";
import { ProgressSpinner } from "primereact/progressspinner";
import { useHomeData } from "./useHomeData";
import { TituloGrafico } from "./homeStyle";

const Home: React.FC = () => {
  const { 
    dados, 
    quantidadeClientes, 
    setQuantidadeClientes, 
    filtros, 
    setFiltros, 
    filtrarDados 
  } = useHomeData();

  const opcoes = [5, 10, 30, 50, 80, 120, 150, 200, 500, 700, 1000, 1107];

  const [devedorId, setDevedorId] = useState<string | number>('all'); 
  const [devedorIds, setDevedorIds] = useState<string[]>([]);

  useEffect(() => {
    if (dados?.indiceInt?.contas) {
      const idsInt = dados.indiceInt.contas.map((item: any) => item.devedor_id);
      const uniqueIds = Array.from(new Set(idsInt));
      setDevedorIds(uniqueIds.sort((a, b) => a - b)); // Ordena os IDs de forma crescente
    }
  }, [dados]);

  return (
    <Layout>
      {dados?.indicePag && dados?.indiceReg && dados?.indiceRep ? (
        <div className="p-4 xl:p-0 p-fluid formgrid grid aling-items-center justify-content-center">
          {/* Filtro para a quantidade de clientes */}
          <div className="field col-12 flex flex-column align-items-center justify-content-center" style={{ marginTop: 50 }}>
            <label htmlFor="dropdownQuantidadeClientes">Quantidade de Clientes</label>
            <Dropdown
              name="dropdownQuantidadeClientes"
              value={quantidadeClientes}
              onChange={(e) => setQuantidadeClientes(e.value)}
              options={opcoes}
              placeholder="Selecione uma quantidade"
              className="w-full md:w-14rem"
            />
          </div>

          {/* Filtro para o devedor_id */}
          <div className="field col-12 flex flex-column align-items-center justify-content-center" style={{ marginTop: 30 }}>
            <label htmlFor="dropdownDevedorId">Selecione o ID do Devedor</label>
            <Dropdown
              id="dropdownDevedorId"
              value={filtros.devedorId}
              placeholder="Selecione um Devedor"
              className="w-full md:w-14rem"
              onChange={(e) => setFiltros({ ...filtros, devedorId: e.value })}
              options={[{ label: "Todos", value: 'all' }, ...devedorIds.map(id => ({ label: `Devedor ${id}`, value: id }))]}
            />
          </div>

          {/* Gráficos */}
          <div className="field col-12 xl:col-5 border-round-lg shadow-1 bg-white flex flex-column align-items-center justify-content-center ml-3">
            <TituloGrafico>Índice de Interação</TituloGrafico>
            <GraficoIndiceInteracao
              indiceInt={{
                contas: filtrarDados(dados.indiceInt?.contas || [], "indice_interacao"),
                total_contas: dados.indiceInt?.total_contas || 0,
                media_geral: dados.indiceInt?.media_geral || 0,
              }}
              quantidadeClientes={quantidadeClientes}
              minValue={0}
              maxValue={10}
            />
          </div>  

          <div className="field col-12 xl:col-5 border-round-lg shadow-1 bg-white flex flex-column align-items-center justify-content-center ml-3">
            <TituloGrafico>Indice de Regularidade</TituloGrafico>
            <GraficoIndiceRegularidade 
              indiceReg={{
                indices: filtrarDados(dados.indiceReg?.indices || [], "indice_regularidade"),
                total_contas: dados.indiceReg?.total_contas || 0,
                media_desvio_padrao: dados.indiceReg.media_desvio_padrao || 0,
                media_indice_regularidade: dados.indiceReg?.media_indice_regularidade || 0,
              }} 
              quantidadeClientes={quantidadeClientes} 
              minValue={0}
              maxValue={10}
            />
          </div>

          <div className="field col-12 xl:col-5 border-round-lg shadow-1 bg-white flex flex-column align-items-center justify-content-center ml-3">
            <TituloGrafico>Indice de Pagamento</TituloGrafico>
            <GraficoIndicePagamento 
              indicePag={{
                contas: filtrarDados(dados.indicePag?.contas || [], "indice_pagamento"),
                total_contas: dados.indiceReg?.total_contas || 0,
                media_geral: dados.indicePag.media_geral || 0,
              }} 
              quantidadeClientes={quantidadeClientes} 
              minValue={0}
              maxValue={10}
            />
          </div>

          <div className="field col-12 xl:col-5 border-round-lg shadow-1 bg-white flex flex-column align-items-center justify-content-center ml-3">
            <TituloGrafico>Indice de Reputação</TituloGrafico>
            <GraficoIndiceReputacao 
              indiceRep={{
                indices: filtrarDados(dados.indiceRep?.indices || [], "i_rep"),
                total_contas: dados.indiceRep?.total_contas || 0,
                media_reputacao: dados.indiceRep.media_reputacao || 0,
              }}  
              quantidadeClientes={quantidadeClientes} 
              minValue={0}
              maxValue={10}
            />
          </div>
        </div>
      ) : (
        <div
          className="flex flex-row align-items-center justify-content-center"
          style={{ width: "100vw", height: "100vh" }}
        >
          <ProgressSpinner />
        </div>
      )}
    </Layout>
  );
};

export default Home;
