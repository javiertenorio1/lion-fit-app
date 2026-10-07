import { CalendarCheck, MapPin, Clock, X } from "lucide-react";

export default function Agenda() {
  return (
    <div className="flex flex-col w-full mx-auto max-w-7xl gap-8 p-6 md:p-10 pb-8 h-full">
      <div>
        <h1 className="text-[28px] md:text-[32px] font-bold text-white tracking-tight">Mi Agenda</h1>
        <p className="text-gray-400 mt-1">Revisa tus próximas clases reservadas y tu historial.</p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white mb-2">Próximas Clases</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Tarjeta de reserva futura */}
          <div className="bg-lion-card border border-gray-800 rounded-2xl p-5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-lion-blue/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
            
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-lion-blue uppercase tracking-wider mb-1">Mañana</span>
                <span className="text-xl font-bold text-white">19:00</span>
              </div>
              <button className="text-gray-500 hover:text-red-400 p-2 transition-colors tooltip" title="Cancelar reserva">
                <X size={18} />
              </button>
            </div>

            <h3 className="text-lg font-bold text-white mb-4 relative z-10">Levantamiento Olímpico</h3>
            
            <div className="space-y-2 relative z-10">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span>Casa Central</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Clock className="w-4 h-4 text-gray-500" />
                <span>Profe: Ismael</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white mb-2">Historial</h2>
        
        <div className="bg-lion-card border border-gray-800 rounded-2xl overflow-hidden">
          <div className="p-4 border-b border-gray-800/50 flex justify-between items-center bg-gray-900/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                <CalendarCheck className="w-5 h-5 text-gray-400" />
              </div>
              <div>
                <p className="font-semibold text-gray-200">Crossfit AM</p>
                <p className="text-xs text-gray-500">Lunes 4 de Oct, 08:00</p>
              </div>
            </div>
            <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-md">
              Asistió
            </span>
          </div>

          <div className="p-4 border-b border-gray-800/50 flex justify-between items-center bg-gray-900/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                <CalendarCheck className="w-5 h-5 text-gray-400" />
              </div>
              <div>
                <p className="font-semibold text-gray-200">Funcional</p>
                <p className="text-xs text-gray-500">Miércoles 29 de Sep, 19:00</p>
              </div>
            </div>
            <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-md">
              Asistió
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}
