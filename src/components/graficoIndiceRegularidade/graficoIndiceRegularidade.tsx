import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { IIndiceRegResponse } from "../../@types/IIndiceRegResponse";
import { useState } from "react";
import { Dropdown } from "primereact/dropdown";

interface IGraficoIndiceRegularidadeProps {
  indiceReg: IIndiceRegResponse | undefined;
  quantidadeClientes: number;
  minValue: number;
  maxValue: number;
}

const GraficoIndiceRegularidade: React.FC<IGraficoIndiceRegularidadeProps> = ({
  indiceReg, 
  quantidadeClientes,
  minValue,
  maxValue
}) => {
  const [min, setMin] = useState<number>(minValue);
  const [max, setMax] = useState<number>(maxValue);

  const options = Array.from({ length: 11 }, (_, i) => i);

  const dados = indiceReg?.indices
    ?.slice(0, quantidadeClientes)
    .filter((item) => item.indice_regularidade >= min && item.indice_regularidade <= max)
    .map((item, index) => ({
      ...item,
      uniqueKey: `${item.devedor_id}-${item.desvio_padrao}-${item.indice_regularidade}-${index}`,
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
        <BarChart
          data={dados}
          margin={{
            top: 50,
            right: 100,
            bottom: 50,
            left: 70,
          }}
          barCategoryGap={10}
          barGap={2}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="devedor_id" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="desvio_padrao" stackId="a" fill="#8884d8" />
          <Bar dataKey="indice_regularidade" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export { GraficoIndiceRegularidade };
