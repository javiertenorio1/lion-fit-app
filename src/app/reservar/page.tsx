import { Calendar as CalendarIcon, Clock, MapPin, Users } from "lucide-react";

export default function Reservar() {
  return (
    <div className="flex flex-col w-full mx-auto max-w-7xl gap-8 p-6 md:p-10 pb-8 h-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[28px] md:text-[32px] font-bold text-white tracking-tight">Reservar Clase</h1>
          <p className="text-gray-400 mt-1">Selecciona el horario para tu próxima sesión.</p>
        </div>
        <div className="flex bg-[#151A23] rounded-lg border border-gray-800 p-1 w-fit">
          <button className="px-4 py-1.5 text-sm font-medium bg-gray-800 text-white rounded-md shadow-sm">Hoy</button>
          <button className="px-4 py-1.5 text-sm font-medium text-gray-400 hover:text-white">Mañana</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <ClassCard 
          time="08:00" 
          title="Crossfit AM" 
          trainer="Ismael" 
          location="Casa Central" 
          capacity={15} 
          booked={12} 
          type="Full Flow" 
        />
        <ClassCard 
          time="09:00" 
          title="Funcional" 
          trainer="Profe Luis" 
          location="Casa Central" 
          capacity={15} 
          booked={15} 
          type="Full Flow" 
          isFull
        />
        <ClassCard 
          time="18:00" 
          title="Crossfit PM" 
          trainer="Ismael" 
          location="Casa Central" 
          capacity={15} 
          booked={5} 
          type="Full Flow" 
        />
        <ClassCard 
          time="19:00" 
          title="Levantamiento Olímpico" 
          trainer="Ismael" 
          location="Casa Central" 
          capacity={10} 
          booked={8} 
          type="Especialidad" 
        />
        <ClassCard 
          time="20:00" 
          title="Open Gym" 
          trainer="Sin Profesor" 
          location="Casa Central" 
          capacity={20} 
          booked={2} 
          type="Open Gym" 
        />
      </div>
    </div>
  );
}

function ClassCard({ time, title, trainer, location, capacity, booked, type, isFull = false }: {
  time: string, title: string, trainer: string, location: string, capacity: number, booked: number, type: string, isFull?: boolean
}) {
  return (
    <div className="bg-[#151A23] border border-gray-800 rounded-2xl p-6 flex flex-col hover:border-gray-600 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-blue-500 tracking-tight">{time}</span>
          <span className="text-lg font-bold text-white mt-1 leading-tight">{title}</span>
        </div>
        <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-full border ${isFull ? 'bg-red-500/10 text-red-400 border-red-500/20' : 'bg-blue-600/20 text-blue-400 border-blue-600/30'}`}>
          {type}
        </span>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3 text-sm text-gray-300">
          <Users className="w-4 h-4 text-gray-500" />
          <span>Profe: <span className="text-gray-100 font-medium">{trainer}</span></span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-300">
          <MapPin className="w-4 h-4 text-gray-500" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-300">
          <Clock className="w-4 h-4 text-gray-500" />
          <span>Duración: 60 min</span>
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-gray-800/50 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Cupos</span>
          <span className={`text-sm font-bold ${isFull ? 'text-red-400' : 'text-emerald-400'}`}>
            {booked} <span className="text-gray-500 font-normal">/ {capacity}</span>
          </span>
        </div>
        <button 
          disabled={isFull}
          className={`px-6 py-2.5 rounded-xl font-medium transition-colors ${isFull ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
        >
          {isFull ? 'Lleno' : 'Reservar'}
        </button>
      </div>
    </div>
  );
}
