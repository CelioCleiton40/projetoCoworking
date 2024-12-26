import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { IconType } from 'react-icons';
import { 
    AiOutlineDashboard,
    AiOutlineUser,
    AiOutlineFileText,
    AiOutlineShoppingCart,
    AiOutlineSetting
 } from 'react-icons/ai';

interface SidebarItem {
  label: string;
  href: string;
  icon: IconType;
}

const Sidebar: React.FC = () => {
    const router = useRouter();
    const [open, setOpen] = useState(true)
    const Menus:SidebarItem[] = [
        { label: "Dashboard", href: "/dashboard", icon: AiOutlineDashboard },
        { label: "Clientes", href: "/clientes", icon: AiOutlineUser },
        { label: "Contratos", href: "/contratos", icon: AiOutlineFileText },
        { label: "Vendas", href: "/vendas", icon: AiOutlineShoppingCart },
        { label: "Configurações", href: "/configuracoes", icon: AiOutlineSetting },
    ]

  return (
    <div className={`bg-gray-100 h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
        <div className="flex gap-x-4 items-center">
            <h1 className={`text-gray-800 origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}>
                Menu
            </h1>
            <button onClick={() => setOpen(!open)} className="text-3xl">
                {open ? "<" : ">"}
            </button>
        </div>
      <ul className="pt-6">
        {Menus.map((menu, index) => (
          <li
            key={index}
            className={`text-gray-600 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 ${router.pathname === menu.href ? 'bg-gray-200' : ''}`}
          >
            <span className="text-2xl block float-left">
              <menu.icon />
            </span>
            <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>
              <Link href={menu.href}>
                {menu.label}
              </Link>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;