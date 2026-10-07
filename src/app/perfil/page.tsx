import { User, CreditCard, Mail, Phone, MapPin, Edit3 } from "lucide-react";

export default function Perfil() {
  return (
    <div className="flex flex-col w-full mx-auto max-w-5xl gap-8 p-6 md:p-10 pb-8 h-full">
      <div>
        <h1 className="text-[28px] md:text-[32px] font-bold text-white tracking-tight">Mi Perfil</h1>
        <p className="text-gray-400 mt-1">Gestiona tu información personal y suscripción.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        {/* Datos Personales */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="bg-lion-card border border-gray-800 rounded-2xl p-6 relative">
            <button className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors">
              <Edit3 size={18} />
            </button>
            
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-full bg-lion-blue flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                JM
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Javier Martínez</h2>
                <p className="text-gray-400">Deportista Lion Fit</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InfoItem icon={<Mail className="w-4 h-4 text-gray-500" />} label="Email" value="javier@email.com" />
              <InfoItem icon={<Phone className="w-4 h-4 text-gray-500" />} label="Teléfono" value="+56 9 1234 5678" />
              <InfoItem icon={<User className="w-4 h-4 text-gray-500" />} label="RUT" value="12.345.678-9" />
              <InfoItem icon={<MapPin className="w-4 h-4 text-gray-500" />} label="Sede Principal" value="Casa Central" />
            </div>
          </div>
        </div>

        {/* Plan Actual */}
        <div className="flex flex-col gap-6">
          <div className="bg-lion-card border border-gray-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <CreditCard className="text-lion-blue" size={20} />
              Suscripción Actual
            </h3>

            <div className="flex flex-col items-center text-center py-4">
              <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Activa
              </span>
              <h4 className="text-xl font-bold text-white mb-1">Plan 12 Clases</h4>
              <p className="text-gray-400 text-sm mb-6">Renovación: 15 de Noviembre</p>

              <div className="w-full bg-gray-900 rounded-xl p-4 border border-gray-800 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-300">Clases disponibles</span>
                  <span className="text-lg font-bold text-lion-blue">8 / 12</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-lion-blue h-2 rounded-full" style={{ width: '66%' }}></div>
                </div>
              </div>

              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-2.5 rounded-xl transition-colors">
                Gestionar Pagos
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function InfoItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1">{icon}</div>
      <div>
        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{label}</p>
        <p className="text-sm font-medium text-gray-200 mt-0.5">{value}</p>
      </div>
    </div>
  );
}
