import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-r from-indigo-500 to-indigo-700 py-16 px-8">
            <div className="flex flex-col items-center gap-8">
                {/* Logo */}
                <Image
                    className="dark:invert"
                    src="/next.svg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                />
                {/* Welcome Text */}
                <h1 className="text-3xl font-bold text-white">
                    Bem-vindo ao 2CM SoftWare
                </h1>
                <p className="text-xl text-center text-gray-200">
                    Pronto para começar? Escolha como você gostaria de prosseguir:
                </p>

                {/* Login or Signup Buttons */}
                <div className="flex justify-center gap-4">
                    <Link href="/login" className="rounded-full bg-white text-indigo-600 px-6 py-2 font-medium hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all">
                        Login {/* Conteúdo diretamente dentro do Link */}
                    </Link>
                    <Link href="/signup" className="rounded-full border border-white text-white px-6 py-2 font-medium hover:bg-indigo-600 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all">
                        Inscrever-se {/* Conteúdo diretamente dentro do Link */}
                    </Link>
                </div>

                <div className="mt-8 text-center text-gray-200">
                    <p>O melhor espaço de coworking em Mossoró.</p>
                </div>
            </div>
        </div>
    );
}