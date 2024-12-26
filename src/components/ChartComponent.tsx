import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface ChartData {
  name: string;
  value: number;
}

interface ChartComponentProps {
  data: ChartData[];
  title: string;
  dataKey: string;
}

const ChartComponent: React.FC<ChartComponentProps> = ({ data, title, dataKey }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4"> {/* Container com estilo */}
      <h3 className="text-lg font-medium mb-2">{title}</h3> {/* Título do gráfico */}
      <ResponsiveContainer width="100%" height={300}> {/* Garante responsividade */}
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" /> {/* Grid de fundo */}
          <XAxis dataKey="name" /> {/* Eixo X */}
          <YAxis /> {/* Eixo Y */}
          <Tooltip /> {/* Tooltip ao passar o mouse */}
          <Legend /> {/* Legenda */}
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{ r: 8 }} /> {/* Linha do gráfico */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;