import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { IIndiceRepResponse } from "../../@types/IIndiceRepResponse";
import { useState } from "react";
import { Dropdown } from "primereact/dropdown";

interface IGraficoIndiceReputacao {
  indiceRep: IIndiceRepResponse | undefined;
  quantidadeClientes: number;
  minValue: number;
  maxValue: number;
}

export const GraficoIndiceReputacao: React.FC<IGraficoIndiceReputacao> = ({
  indiceRep, 
  quantidadeClientes, 
  minValue, 
  maxValue 
}) => {
  const [min, setMin] = useState<number>(minValue);
  const [max, setMax] = useState<number>(maxValue);

  const options = Array.from({ length: 11 }, (_, i) => i);

  const dados = indiceRep?.indices
    ?.slice(0, quantidadeClientes)
    .filter((item) => item.i_rep >= min && item.i_rep <= max)
    .map((item, index) => ({
      ...item,
      uniqueKey: `${item.devedor_id}-${item.conta_id}-${index}`,
    }));

  return (
    <div>
      {/* Filtros para intervalo de valores */}
      <div className="flex flex-row align-items-center justify-content-around pt-3">
        <div className="mr-2 pl-2">
          <label htmlFor="minValue">Valor mínimo</label>
          <Dropdown
            value={min}
            options={options}
            onChange={(e) => setMin(e.value)}
            placeholder="Selecione o valor mínimo"
          />
        </div>
        <div className="mr-2">
          <label htmlFor="maxValue">Valor máximo</label>
          <Dropdown
            value={max}
            options={options}
            onChange={(e) => setMax(e.value)}
            placeholder="Selecione o valor máximo"
          />
        </div>
      </div>

      <ResponsiveContainer width="105%" height={500}>
        <LineChart
          data={dados}
          margin={{
            top: 50,
            right: 100,
            bottom: 50,
            left: 70,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="devedor_id" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="i_pag" stroke="#8884d8" />
          <Line type="monotone" dataKey="i_reg" stroke="#82ca9d" />
          <Line type="monotone" dataKey="i_int" stroke="#ffc658" />
          <Line type="monotone" dataKey="i_rep" stroke="#ff7300" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
