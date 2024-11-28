import React, { useEffect, useState } from "react";
import axios from "axios";
import { ContainerFilter, FilterClient, FilterClientSearch, FilterClientText, FilterIndice, FilterIndiceOptions, FilterIndiceText } from "./filterStyle";

interface FiltroIndicesProps {
  onSelectIndices: (indices: string[]) => void;
}

interface IndexData {
  date: string;
  [key: string]: any;
}

const FiltroIndices: React.FC<FiltroIndicesProps> = ({ onSelectIndices }) => {
  const [indices, setIndices] = useState<IndexData[]>([]);
  const [selectedIndices, setSelectedIndices] = useState<string[]>([]);

  useEffect(() => {
    const fetchIndices = async () => {
      try {
        const response = await axios.get<IndexData[]>("/api/indices"); // URL de exemplo
        setIndices(response.data);
        // Inicializa com todos os índices selecionados
        const allIndices = Object.keys(response.data[0]).filter((key) => key !== "date");
        setSelectedIndices(allIndices);
        onSelectIndices(allIndices);
      } catch (error) {
        console.error("Erro ao buscar índices:", error);
      }
    };

    fetchIndices();
  }, [onSelectIndices]);

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedIndices((prev) =>
      prev.includes(value) ? prev.filter((indice) => indice !== value) : [...prev, value]
    );
    onSelectIndices(selectedIndices);
  };

  return (
    <ContainerFilter>
      <FilterClient>
        <FilterClientText>
          Filtro de clientes
        </FilterClientText>
        <FilterClientSearch>

        </FilterClientSearch>
      </FilterClient>
      <FilterIndice>
        <FilterIndiceText>
          Filtro de Clientes
        </FilterIndiceText>
        <FilterIndiceOptions>
          
        </FilterIndiceOptions>
      </FilterIndice>
      <h2>Selecione os Índices:</h2>
      {indices.length > 0 &&
        Object.keys(indices[0])
          .filter((key) => key !== "date")
          .map((indice) => (
            <label key={indice}>
              <input
                type="checkbox"
                value={indice}
                checked={selectedIndices.includes(indice)}
                onChange={handleSelect}
              />
              {indice}
            </label>
          ))}
    </ContainerFilter>
  );
};

export default FiltroIndices;
