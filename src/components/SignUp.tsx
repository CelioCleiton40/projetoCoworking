'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";

const SignUp: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
        setIsLoading(true);

        if (password !== confirmPassword) {
            setError('As senhas não conferem!');
            setIsLoading(false);
            return;
        }

        try {
            // Simulação de sucesso no cadastro
            const userData = {
                name,
                email,
                // (NUNCA armazene a senha real no Local Storage!)
            };

            // Salvar dados do usuário no Local Storage
            localStorage.setItem('userData', JSON.stringify(userData));
            localStorage.setItem('isLoggedIn', 'true'); // Marca o usuário como logado

            console.log('Cadastro realizado com sucesso!');
            router.push('/dashboard'); // Redireciona para o dashboard após o cadastro
        } catch (err: any) {
            setError(err.message || 'Erro ao realizar o cadastro.');
        } finally {
            setIsLoading(false);
        }
  };

  return (
    <div className="min-h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center p-4">
      {/* Background Image (Optional - reuse from Login if needed) */}
      <img
        src="/path/to/your/background.jpg" // Replace with your image path
        alt="Signup Background"
        className="absolute inset-0 w-full h-full object-cover blur-sm opacity-20"
      />

      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 relative">
        {/* Logo (Optional - reuse from Login if needed) */}
        <Image
                          className="dark:invert"
                          src="/next.svg"
                          alt="Next.js logo"
                          width={180}
                          height={38}
                          priority
                        />

        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Criar Conta
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?
          <a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;