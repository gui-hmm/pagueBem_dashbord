import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

interface GraficoIRepProps { 
    selectedIndices: string[]; 
}

interface DataItem { 
    date: string; 
    [key: string]: any;
}

const GraficoIRep: React.FC<GraficoIRepProps> = ({ selectedIndices }) => { // Usando `const` ao invés de `function`
  const [data, setData] = useState<DataItem[]>([]);
  const [range, setRange] = useState<[number, number]>([0, 9]); // Ajuste conforme necessário

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<DataItem[]>("/api/indices"); // Ajuste o endpoint conforme necessário
        setData(response.data);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.slice(range[0], range[1] + 1).map((item) => {
    const filteredItem: DataItem = { date: item.date };
    selectedIndices.forEach((indice) => {
      filteredItem[indice] = item[indice];
    });
    return filteredItem;
  });

  return (
    <div>
      <h1>Gráfico de Índices</h1>
      <BarChart width={600} height={300} data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        {selectedIndices.map((indice) => (
          <Bar key={indice} dataKey={indice} fill="#8884d8" />
        ))}
      </BarChart>
    </div>
  );
};

export default GraficoIRep;
