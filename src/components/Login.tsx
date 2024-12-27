'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from "next/image";
import SignUp from './SignUp';

const Login: React.FC = () => {
  const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      if (isLoggedIn === 'true') {
          router.push('/dashboard');
      }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your authentication logic here
    setError(null);
    setIsLoading(true);

    try {
        //Simulação de login (substitua pela sua lógica real)
        const storedUserData = localStorage.getItem('userData');
        if (!storedUserData) {
            throw new Error('Usuário não encontrado.');
        }

        const userData = JSON.parse(storedUserData);

        if (userData.email !== email || userData.password !== password) { //Simulação de verificação de senha
            throw new Error("Credenciais inválidas.");
        }

        localStorage.setItem('isLoggedIn', 'true');
        router.push('/dashboard');
    } catch (err: any) {
        setError(err.message);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center p-4">
      {/* Background Image */}
    

      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 relative">
        {/* Logo */}
        <Image
                  className="dark:invert"
                  src="/next.svg"
                  alt="Next.js logo"
                  width={180}
                  height={38}
                  priority
                />

        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="ml-2 text-sm text-gray-600">Lembre de mim</span>
            </label>
            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">
            Esqueceu sua senha?
            </a>
          </div>

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
          Entrar
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
        Não tem uma conta?
        <Link href="/signup">
            <p className="text-indigo-600 hover:text-indigo-500 font-medium">Inscrever-se</p>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;