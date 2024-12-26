import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  // Você pode adicionar props aqui, se necessário, como usuário logado, etc.
  userName?: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo.svg" // Substitua pelo caminho do seu logo
          alt="Logo da Empresa"
          width={100} // Ajuste conforme necessário
          height={30} // Ajuste conforme necessário
          priority
        />
      </Link>

      {/* Navegação (Exemplo) */}
      <nav className="flex gap-4">
        <Link href="/dashboard">
          <a className="text-gray-700 hover:text-indigo-600">Dashboard</a>
        </Link>
        <Link href="/profile">
          <a className="text-gray-700 hover:text-indigo-600">Perfil</a>
        </Link>
        {/* Outros links de navegação */}
      </nav>

      {/* Informações do usuário (Exemplo) */}
      {userName && ( // Renderiza apenas se o nome do usuário existir
        <div className="flex items-center">
          <span className="text-gray-700 mr-2">Olá, {userName}</span>
          {/* Adicione aqui um ícone de usuário ou avatar, se necessário */}
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            Sair
          </button>
        </div>
      )}
      {!userName && (
        <div className="flex items-center">
            <Link href="/login">
                <a className="text-gray-700 hover:text-indigo-600 mr-4">Login</a>
            </Link>
            <Link href="/signup">
                <a className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Cadastrar</a>
            </Link>
        </div>
      )}
    </header>
  );
};

export default Header;