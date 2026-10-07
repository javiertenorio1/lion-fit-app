import { Activity, Users, DollarSign, Calendar, Search, MoreVertical, Plus, CheckCircle2 } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="flex flex-col w-full mx-auto max-w-7xl gap-8 p-6 md:p-10 pb-8 h-full">
      
      {/* Header Admin */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[28px] md:text-[32px] font-bold text-white tracking-tight">Panel de Control</h1>
          <p className="text-gray-400 mt-1">Visión general del negocio · Lion Fit</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-medium transition-colors flex items-center gap-2 w-fit">
          <Plus size={20} />
          Crear Clase
        </button>
      </div>

      {/* KPIs Financieros */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Ingresos del Mes" value="$1.850.000" icon={<DollarSign className="w-6 h-6 text-emerald-400" />} />
        <StatCard title="Deportistas Activos" value="142" icon={<Users className="w-6 h-6 text-blue-400" />} />
        <StatCard title="Clases Hoy" value="6" icon={<Calendar className="w-6 h-6 text-orange-400" />} />
        <StatCard title="Pagos Atrasados" value="12" icon={<Activity className="w-6 h-6 text-red-400" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Columna Izquierda: CRM y Semáforo */}
        <div className="lg:col-span-2 bg-[#151A23] rounded-2xl p-6 md:p-8 border border-gray-800 flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Deportistas (Semáforo)</h2>
            <div className="relative">
              <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Buscar deportista..." 
                className="bg-gray-900/50 border border-gray-700 text-sm text-gray-200 rounded-lg pl-9 pr-4 py-2 focus:outline-none focus:border-blue-500 w-full md:w-64"
              />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto pr-2 space-y-3">
            {/* Cabeceras de tabla simulada */}
            <div className="grid grid-cols-12 gap-4 text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 pb-2 border-b border-gray-800">
              <div className="col-span-5">Deportista</div>
              <div className="col-span-4">Plan Actual</div>
              <div className="col-span-3 text-right">Estado</div>
            </div>

            <AthleteRow name="Javier Martínez" email="javier@email.com" plan="Plan 12 Clases" classesLeft={8} status="green" />
            <AthleteRow name="Camila Rojas" email="camila.r@email.com" plan="Plan 8 Clases" classesLeft={2} status="yellow" daysLeft={4} />
            <AthleteRow name="Andrés Soto" email="andres89@email.com" plan="Plan 4 Clases" classesLeft={0} status="red" />
            <AthleteRow name="Isabella Fuentes" email="isa.f@email.com" plan="Dúo - 2 x Semana" classesLeft={4} status="green" />
            <AthleteRow name="Valentina Silva" email="v.silva@email.com" plan="Inactivo" classesLeft={0} status="gray" />
          </div>
          
          <button className="mt-4 text-sm text-blue-400 hover:text-blue-300 font-medium text-center pt-4 border-t border-gray-800 w-full transition-colors">
            Ver todos los deportistas →
          </button>
        </div>

        {/* Columna Derecha: Clases del Día */}
        <div className="bg-[#151A23] rounded-2xl p-6 md:p-8 border border-gray-800 flex flex-col h-full">
          <h2 className="text-xl font-semibold text-white mb-6">Agenda de Hoy</h2>
          
          <div className="flex-1 space-y-4">
            <ClassRow time="18:00" title="Crossfit" trainer="Ismael" capacity={12} maxCapacity={15} status="upcoming" />
            <ClassRow time="19:00" title="Funcional" trainer="Profe Luis" capacity={15} maxCapacity={15} status="full" />
            <ClassRow time="20:00" title="Levantamiento" trainer="Ismael" capacity={8} maxCapacity={10} status="upcoming" />
          </div>

          <div className="mt-6 pt-6 border-t border-gray-800">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Acciones Rápidas</h3>
            <div className="space-y-2">
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-gray-200 text-sm font-medium py-2.5 rounded-lg transition-colors text-left px-4">
                Generar reporte mensual
              </button>
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-gray-200 text-sm font-medium py-2.5 rounded-lg transition-colors text-left px-4">
                Enviar recordatorio de cobros
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// COMPONENTES AUXILIARES

function StatCard({ title, value, icon }: { title: string, value: string, icon: React.ReactNode }) {
  return (
    <div className="bg-[#151A23] p-6 rounded-2xl border border-gray-800 flex items-center justify-between hover:border-gray-700 transition-colors">
      <div>
        <p className="text-gray-400 text-sm font-medium mb-1">{title}</p>
        <p className="text-2xl font-bold text-white">{value}</p>
      </div>
      <div className="p-3 bg-gray-900 rounded-xl border border-gray-800">
        {icon}
      </div>
    </div>
  );
}

function AthleteRow({ name, email, plan, classesLeft, status, daysLeft }: { name: string, email: string, plan: string, classesLeft: number, status: 'green' | 'yellow' | 'red' | 'gray', daysLeft?: number }) {
  const statusColors = {
    green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    yellow: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    red: "bg-red-500/10 text-red-400 border-red-500/20",
    gray: "bg-gray-500/10 text-gray-400 border-gray-500/20"
  };
  
  const statusLabels = {
    green: "Al día",
    yellow: `Vence en ${daysLeft} d`,
    red: "Atrasado",
    gray: "Archivado"
  };

  return (
    <div className="grid grid-cols-12 gap-4 items-center p-3 hover:bg-gray-800/40 rounded-xl transition-colors group cursor-pointer border border-transparent hover:border-gray-700">
      
      {/* Col 1: Perfil */}
      <div className="col-span-5 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center font-bold text-gray-300 shrink-0">
          {name.charAt(0)}
        </div>
        <div className="min-w-0">
          <p className="font-medium text-gray-200 truncate">{name}</p>
          <p className="text-[11px] text-gray-500 truncate">{email}</p>
        </div>
      </div>

      {/* Col 2: Plan y Clases */}
      <div className="col-span-4">
        <p className="text-sm text-gray-300 font-medium truncate">{plan}</p>
        {status !== 'gray' && (
          <p className="text-[11px] text-gray-500 mt-0.5">{classesLeft} clases restantes</p>
        )}
      </div>

      {/* Col 3: Estado */}
      <div className="col-span-3 flex items-center justify-end gap-2">
        <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${statusColors[status]}`}>
          {statusLabels[status]}
        </span>
        <button className="text-gray-500 hover:text-white p-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <MoreVertical size={16} />
        </button>
      </div>
    </div>
  );
}

function ClassRow({ time, title, trainer, capacity, maxCapacity, status }: { time: string, title: string, trainer: string, capacity: number, maxCapacity: number, status: 'upcoming' | 'full' | 'past' }) {
  const isFull = capacity >= maxCapacity;
  
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-800 bg-gray-900/30 hover:bg-gray-800/50 transition-colors cursor-pointer">
      <div className="flex flex-col items-center">
        <span className="text-blue-400 font-bold text-lg leading-none">{time}</span>
        <span className="text-[10px] text-gray-500 font-medium uppercase mt-1">Hoy</span>
      </div>
      
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-gray-100 text-base">{title}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs text-gray-400">Profe: <span className="text-gray-300">{trainer}</span></span>
        </div>
      </div>
      
      <div className="flex flex-col items-end gap-1 shrink-0">
        <div className={`text-sm font-bold ${isFull ? 'text-red-400' : 'text-emerald-400'}`}>
          {capacity} <span className="text-gray-500 font-normal">/ {maxCapacity}</span>
        </div>
        {isFull ? (
          <span className="text-[10px] bg-red-500/10 text-red-400 px-2 py-0.5 rounded-sm font-semibold uppercase">Lleno</span>
        ) : (
          <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-sm font-semibold uppercase">Disponible</span>
        )}
      </div>
    </div>
  );
}
