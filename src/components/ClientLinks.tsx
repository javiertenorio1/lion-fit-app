"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function SidebarLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link href={href} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${active ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
      {icon}
      <span className="font-medium">{label}</span>
    </Link>
  );
}

export function BottomNavLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link href={href} className={`flex flex-col items-center gap-1 p-2 min-w-[64px] ${active ? 'text-blue-500' : 'text-gray-500'}`}>
      {icon}
      <span className="text-[10px] font-medium">{label}</span>
    </Link>
  );
}

export function MobilePageTitle() {
  const pathname = usePathname();
  const titleMap: Record<string, string> = {
    '/': 'Inicio',
    '/planes': 'Planes',
    '/reservar': 'Reservar',
    '/agenda': 'Mi agenda',
    '/perfil': 'Perfil',
    '/progreso': 'Ficha progreso',
    '/admin': 'Panel de Ismael'
  };
  return <h1 className="text-xl font-bold text-white m-0 leading-tight" id="mobile-page-title">{titleMap[pathname] || 'Lion Fit'}</h1>;
}
