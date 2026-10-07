import { CreditCard, CalendarCheck, FileText } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full mx-auto max-w-7xl gap-8 p-6 md:p-10 pb-8">
      <h1 className="text-[28px] md:text-[32px] font-bold text-white tracking-tight">
        Hola, Javier 👋
      </h1>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
        
        {/* Planes Activos */}
        <div className="flex flex-col">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-100 mb-4">Tus planes activos</h2>
          
          <div className="flex-1 flex flex-col items-center text-center justify-center p-8 bg-[#151A23] border border-gray-800 rounded-2xl min-h-[280px]">
            <div className="w-16 h-16 rounded-full bg-gray-800/50 flex items-center justify-center mb-6">
              <CreditCard className="w-8 h-8 text-gray-400" />
            </div>
            <span className="text-lg font-bold text-white mb-2">Aún no tienes planes activos</span>
            <span className="text-base text-gray-400 mb-8">Compra un plan para poder reservar servicios.</span>
            <Link href="/planes" className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full px-10 py-3 transition-colors">
              Ver planes
            </Link>
          </div>
        </div>

        {/* Columna Derecha: Agenda y Progreso */}
        <div className="flex flex-col gap-8">
          
          {/* Mi Agenda */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-100">Mi agenda</h2>
            </div>
            
            <div className="flex items-center gap-4 p-5 border border-gray-800 rounded-2xl bg-[#151A23]">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <CalendarCheck className="w-6 h-6 text-blue-500 shrink-0" />
              </div>
              <div className="text-sm text-gray-400">
                <b className="block text-gray-200 font-semibold mb-1 text-base">Aún no tienes reservas</b>
                Reserva tu próxima actividad con cualquiera de tus planes.
              </div>
            </div>
          </div>

          {/* Ficha Progreso */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-100">Ficha progreso</h2>
            </div>
            
            <div className="p-6 md:p-8 flex flex-col items-center text-center border border-gray-800 rounded-2xl bg-[#151A23]">
              <div className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-blue-500" />
              </div>
              <span className="text-lg font-bold text-white mb-2">No hay entradas en Ficha progreso</span>
              <span className="text-sm text-gray-400">Aquí aparecerán las observaciones y recomendaciones de tus profesionales.</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
