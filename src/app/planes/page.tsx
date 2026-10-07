import { CheckCircle2, MapPin, Users } from "lucide-react";

export default function Planes() {
  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto h-full">
      <div className="sticky top-0 z-10 flex items-center justify-between flex-wrap bg-[#0B0E14]/90 backdrop-blur-sm pt-6 pb-4 px-6 md:px-10 border-b border-gray-800">
        <h1 className="text-2xl font-bold tracking-tight text-white hidden md:block">Elige tu plan</h1>
        
        <div className="flex items-center gap-3 flex-wrap justify-center w-full md:w-auto">
          <FilterButton label="Servicios" />
          <FilterButton label="Duración" />
          <FilterButton label="Modalidad" />
          <FilterButton label="Sede" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 md:p-10 pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          <PlanCard 
            title="Clase Prueba Grupal Casa Central" 
            price="$5.000" 
            period="1 semana" 
            sessions="1 Sesión" 
            location="Casa Central" 
            type="Grupal" 
            tags={["Hybrid", "Upper Body", "Full Body"]}
          />
          <PlanCard 
            title="Grupal Casa Central - 1 x Semana" 
            price="$40.000" 
            period="1 mes" 
            sessions="4 sesiones" 
            location="Casa Central" 
            type="Grupal" 
            tags={["Hybrid", "Lower Body", "Booty Class"]}
          />
          <PlanCard 
            title="Personalizado - 1 x Semana" 
            price="$105.000" 
            period="1 mes" 
            sessions="4 sesiones" 
            location="Casa Central" 
            type="Personalizado" 
            tags={["Personalizado"]}
            tagColor="orange"
          />
          <PlanCard 
            title="Open Gym - Acceso libre" 
            price="$60.000" 
            period="1 mes" 
            sessions="24 sesiones" 
            location="Casa Central" 
            type="Individual" 
            tags={["Open Gym"]}
            tagColor="green"
          />
          <PlanCard 
            title="Grupal Casa Central - 3 x Semana" 
            price="$105.000" 
            period="1 mes" 
            sessions="12 sesiones" 
            location="Casa Central" 
            type="Grupal" 
            tags={["Hybrid", "Upper Body", "Full Body"]}
          />
          <PlanCard 
            title="Dúo - 2 x Semana" 
            price="$316.000" 
            period="1 mes" 
            sessions="8 sesiones" 
            location="Casa Central" 
            type="Grupal" 
            tags={["Dúo (valor x dupla)"]}
            tagColor="blue"
          />
        </div>
      </div>
    </div>
  );
}

function FilterButton({ label }: { label: string }) {
  return (
    <button className="bg-[#151A23] border border-gray-700 hover:border-gray-500 text-sm font-medium text-gray-200 py-2 px-4 rounded-lg shadow-sm transition-colors flex items-center gap-2">
      {label}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><path d="m6 9 6 6 6-6"/></svg>
    </button>
  );
}

function PlanCard({ title, price, period, sessions, location, type, tags, tagColor = "teal" }: { 
  title: string, price: string, period: string, sessions: string, location: string, type: string, tags: string[], tagColor?: "teal" | "orange" | "green" | "blue" 
}) {
  const badgeColors = {
    teal: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    green: "bg-green-500/10 text-green-400 border-green-500/20",
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  };

  return (
    <div className="flex flex-col bg-[#151A23] border border-gray-800 hover:border-gray-600 transition-colors rounded-2xl p-6 h-full">
      <div className="flex flex-col gap-2 items-start pb-4 border-b border-gray-800/50 mb-4">
        <span className="font-semibold text-lg text-white leading-snug line-clamp-2" title={title}>{title}</span>
        
        <div className="flex items-baseline gap-1 mt-1">
          <span className="text-2xl font-bold text-white">{price}</span>
          <span className="text-gray-400 text-sm">/ {period}</span>
        </div>
        
        <div className="flex items-center gap-2 mt-2">
          <span className="bg-blue-600/20 text-blue-400 border border-blue-600/30 text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-full">
            Full Flow
          </span>
          <span className="text-xs text-gray-500 cursor-pointer hover:text-gray-300">← Ver agenda</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 pb-6">
        <div className="flex items-center gap-3 text-sm text-gray-300">
          <div className="w-6 text-center flex justify-center"><CheckCircle2 className="w-4 h-4 text-blue-500" /></div>
          <span>{sessions}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-300">
          <div className="w-6 text-center flex justify-center"><MapPin className="w-4 h-4 text-blue-500" /></div>
          <span className="line-clamp-1">{location}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-300">
          <div className="w-6 text-center flex justify-center"><Users className="w-4 h-4 text-blue-500" /></div>
          <span>{type}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 pb-6">
        {tags.map(t => (
          <span key={t} className={`border rounded-full text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 ${badgeColors[tagColor]}`}>
            {t}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-4">
        <button className="w-full bg-transparent hover:bg-gray-800 text-white font-medium border border-gray-600 rounded-xl py-2.5 transition-colors">
          Seleccionar
        </button>
      </div>
    </div>
  );
}
