import { useEffect, useState } from "react";
import { httpClient } from "../../api/httpsClient";
import { IIndicePagResponse } from "../../@types/IIndicePagResponse";
import { IIndiceRegResponse } from "../../@types/IIndiceRegResponse";
import { IIndiceRepResponse } from "../../@types/IIndiceRepResponse";
import { IIndiceIntResponse } from "../../@types/IIndiceIntResponse";

interface IHomeData {
  indicePag?: IIndicePagResponse;
  indiceReg?: IIndiceRegResponse;
  indiceRep?: IIndiceRepResponse;
  indiceInt?: IIndiceIntResponse;
}

const useHomeData = () => {
  const [dados, setDados] = useState<IHomeData>({});
  const [quantidadeClientes, setQuantidadeClientes] = useState<number>(10);
  const [filtros, setFiltros] = useState({
    devedorId: 'all',
    min: 0,
    max: 10,
  });

  const filtrarDados = (data: any[], field: string) => {
    const { min, max, devedorId } = filtros;
    return data
      .filter((item) => item[field] >= min && item[field] <= max)
      .filter((item) => (devedorId === 'all' || item.devedor_id === devedorId));
  };

  const getIndices = async () => {
    try {
      const [responsePag, responseReg, responseRep, responseInt] = await Promise.all([
        httpClient.get<IIndicePagResponse>("/indice-pagamento/"),
        httpClient.get<IIndiceRegResponse>("/indice-regularidade/"),
        httpClient.get<IIndiceRepResponse>("/indice-reputacao/"),
        httpClient.get<IIndiceIntResponse>("/indice-interacao/"),
      ]);

      setDados({
        indicePag: responsePag.data,
        indiceReg: responseReg.data,
        indiceRep: responseRep.data,
        indiceInt: responseInt.data,
      });
    } catch (error) {
      console.error("Erro ao buscar dados: ", error);
    }
  };

  useEffect(() => {
    getIndices();
  }, []);

  return {
    dados,
    quantidadeClientes,
    setQuantidadeClientes,
    filtros,
    setFiltros,
    filtrarDados,
  };
};

export { useHomeData };
