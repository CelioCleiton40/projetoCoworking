import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
    userName?: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
    return (
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
                <Image
                                  className="dark:invert"
                                  src="/next.svg"
                                  alt="Next.js logo"
                                  width={100}
                                  height={30}
                                  priority
                                />
            </Link>

            {/* Navegação (Exemplo) */}
            <nav className="flex gap-4">
                <Link href="/dashboard">
                    Dashboard {/* Remova a tag <a> aqui */}
                </Link>
                <Link href="/profile">
                    Perfil {/* Remova a tag <a> aqui */}
                </Link>
                {/* Outros links de navegação */}
            </nav>

            {/* Informações do usuário (Exemplo) */}
            {userName && (
                <div className="flex items-center">
                    <span className="text-gray-700 mr-2">Olá, {userName}</span>
                    <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                        Sair
                    </button>
                </div>
            )}
            {!userName && (
                <div className="flex items-center">
                    <Link href="/login">
                        Login {/* Remova a tag <a> aqui */}
                    </Link>
                    <Link href="/signup">
                        Cadastrar {/* Remova a tag <a> aqui */}
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;