import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ChartComponent from '@/components/ChartComponent';
import {
    AiOutlineUser,
    AiOutlineFileText,
    AiOutlineShoppingCart
 } from 'react-icons/ai';
 import Image from "next/image";

const Dashboard: React.FC = () => {
    const contractsData = [
        { name: 'Jan', value: 400 },
        { name: 'Fev', value: 300 },
        { name: 'Mar', value: 200 },
        { name: 'Abr', value: 500 },
        { name: 'Mai', value: 400 },
        { name: 'Jun', value: 700 },
    ];

    const engajamentoData = [
        { name: 'Jan', value: 200 },
        { name: 'Fev', value: 500 },
        { name: 'Mar', value: 700 },
        { name: 'Abr', value: 100 },
        { name: 'Mai', value: 900 },
        { name: 'Jun', value: 300 },
    ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <Header userName="Usuário Teste" /> {/* Passando um nome de usuário de exemplo */}
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Gráfico de Contratos */}
            <ChartComponent data={contractsData} title="Novos Contratos x Encerrados" dataKey="value" />

            {/* Gráfico de Engajamento */}
            <ChartComponent data={engajamentoData} title="Engajamento" dataKey="value" />

            {/* Card de Clientes */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className='flex items-center gap-4'>
                    <span className="text-4xl block float-left">
                        <AiOutlineUser />
                    </span>
                    <div>
                        <h2 className="text-lg font-medium mb-1">Clientes</h2>
                        <p className="text-gray-600">Total de 150 Clientes</p>
                    </div>
                </div>
            </div>

            {/* Card de Contratos */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className='flex items-center gap-4'>
                    <span className="text-4xl block float-left">
                        <AiOutlineFileText />
                    </span>
                    <div>
                        <h2 className="text-lg font-medium mb-1">Contratos</h2>
                        <p className="text-gray-600">Total de 80 Contratos</p>
                    </div>
                </div>
            </div>

            {/* Card de Vendas */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className='flex items-center gap-4'>
                    <span className="text-4xl block float-left">
                        <AiOutlineShoppingCart />
                    </span>
                    <div>
                        <h2 className="text-lg font-medium mb-1">Vendas</h2>
                        <p className="text-gray-600">Total de R$ 10.000,00</p>
                    </div>
                </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;