import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Home, CreditCard, Search, Calendar, User, FileText, LogOut, ChevronDown, Users } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Lion Fit",
  description: "Portal de clientes Lion Fit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans bg-[#0B0E14] text-white overflow-hidden`}>
        <div className="flex h-screen w-full overflow-hidden">
          
          {/* SIDEBAR (Desktop) */}
          <aside className="hidden md:flex flex-col w-[298px] bg-[#151A23] border-r border-gray-800 shrink-0 h-screen">
            <div className="flex-1 flex flex-col min-h-0">
              <div className="flex items-center justify-center h-20 px-6 mt-4">
                <span className="text-2xl font-bold tracking-widest text-white uppercase">LION FIT</span>
              </div>
              
              <div className="pt-8 px-6 pb-6 overflow-y-auto flex-1">
                <nav className="flex flex-col gap-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 ml-2">Menú Principal</span>
                  
                  <SidebarLink href="/" icon={<Home size={20} />} label="Inicio" active />
                  <SidebarLink href="/planes" icon={<CreditCard size={20} />} label="Planes" />
                  <SidebarLink href="/reservar" icon={<Search size={20} />} label="Reservar" />
                  <SidebarLink href="/agenda" icon={<Calendar size={20} />} label="Mi agenda" />
                  <SidebarLink href="/perfil" icon={<User size={20} />} label="Perfil" />
                  <SidebarLink href="/progreso" icon={<FileText size={20} />} label="Ficha progreso" />
                  
                  <div className="mt-4 mb-2">
                    <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider ml-2">Administración</span>
                  </div>
                  <SidebarLink href="/admin" icon={<Users size={20} />} label="Panel de Ismael" />
                </nav>
              </div>
            </div>

            <div className="shrink-0 p-6 border-t border-gray-800">
              <button className="flex items-center gap-3 text-gray-400 hover:text-red-400 transition-colors w-full p-2 rounded-lg hover:bg-red-500/10">
                <LogOut size={20} />
                <span className="font-medium">Cerrar sesión</span>
              </button>
            </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <main className="flex-1 flex flex-col min-w-0 min-h-0 overflow-hidden bg-[#0B0E14]">
            
            {/* HEADER */}
            <header className="flex flex-col md:flex-row md:items-center justify-between md:justify-end bg-[#151A23] border-b border-gray-800 shrink-0 py-3 md:py-4 px-4 md:px-10 md:h-[65px] gap-2">
              <div className="flex items-center justify-between md:justify-end w-full">
                {/* Mobile Logo */}
                <div className="md:hidden flex items-center">
                  <span className="text-lg font-bold text-white">LION FIT</span>
                </div>

                {/* User Actions */}
                <div className="flex items-center gap-4 ml-auto">
                  <Link href="/agenda" className="text-gray-400 hover:text-white transition-colors hidden md:block">
                    <Calendar size={20} />
                  </Link>
                  
                  <div className="flex items-center gap-2 cursor-pointer p-1 pr-2 rounded-full hover:bg-gray-800 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-sm">
                      JT
                    </div>
                    <ChevronDown size={16} className="text-gray-400" />
                  </div>
                </div>
              </div>
              
              {/* Mobile Title */}
              <div className="md:hidden w-full mt-2">
                <h1 className="text-xl font-bold text-white m-0 leading-tight" id="mobile-page-title">Inicio</h1>
              </div>
            </header>

            {/* SCROLLABLE VIEW */}
            <div className="flex-1 overflow-y-auto pb-20 md:pb-0">
              {children}
            </div>

          </main>
        </div>

        {/* BOTTOM NAV (Mobile) */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#151A23] border-t border-gray-800 flex items-center justify-around h-[70px] z-50 px-2 pb-2">
          <BottomNavLink href="/" icon={<Home size={22} />} label="Inicio" active />
          <BottomNavLink href="/planes" icon={<CreditCard size={22} />} label="Planes" />
          <BottomNavLink href="/reservar" icon={<Search size={22} />} label="Reservar" />
          <BottomNavLink href="/agenda" icon={<Calendar size={22} />} label="Agenda" />
        </nav>
      </body>
    </html>
  );
}

function SidebarLink({ href, icon, label, active = false }: { href: string, icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <Link href={href} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${active ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
      {icon}
      <span className="font-medium">{label}</span>
    </Link>
  );
}

function BottomNavLink({ href, icon, label, active = false }: { href: string, icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <Link href={href} className={`flex flex-col items-center gap-1 p-2 min-w-[64px] ${active ? 'text-blue-500' : 'text-gray-500'}`}>
      {icon}
      <span className="text-[10px] font-medium">{label}</span>
    </Link>
  );
}
