import { FileText, TrendingUp, Target, Award } from "lucide-react";

export default function Progreso() {
  return (
    <div className="flex flex-col w-full mx-auto max-w-7xl gap-8 p-6 md:p-10 pb-8 h-full">
      <div>
        <h1 className="text-[28px] md:text-[32px] font-bold text-white tracking-tight">Ficha de Progreso</h1>
        <p className="text-gray-400 mt-1">Sigue tu evolución y revisa las notas de tus entrenadores.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Estadísticas Rápidas */}
        <div className="lg:col-span-1 flex flex-col gap-4">
          <div className="bg-[#151A23] border border-gray-800 rounded-2xl p-6 flex items-center gap-4">
            <div className="p-4 bg-blue-500/10 rounded-xl">
              <TrendingUp className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-400 font-medium">Clases Asistidas</p>
              <p className="text-2xl font-bold text-white">47</p>
            </div>
          </div>
          <div className="bg-[#151A23] border border-gray-800 rounded-2xl p-6 flex items-center gap-4">
            <div className="p-4 bg-emerald-500/10 rounded-xl">
              <Award className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <p className="text-sm text-gray-400 font-medium">Racha Actual</p>
              <p className="text-2xl font-bold text-white">3 semanas</p>
            </div>
          </div>
          <div className="bg-[#151A23] border border-gray-800 rounded-2xl p-6 flex items-center gap-4">
            <div className="p-4 bg-orange-500/10 rounded-xl">
              <Target className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <p className="text-sm text-gray-400 font-medium">Objetivo</p>
              <p className="text-xl font-bold text-white">Hipertrofia</p>
            </div>
          </div>
        </div>

        {/* Timeline de Notas */}
        <div className="lg:col-span-2">
          <div className="bg-[#151A23] border border-gray-800 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-semibold text-white mb-8 flex items-center gap-2">
              <FileText className="text-blue-500" size={20} />
              Evaluaciones y Notas
            </h2>

            <div className="relative border-l border-gray-800 ml-4 space-y-8">
              
              {/* Nota 1 */}
              <div className="relative pl-8">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1 border-4 border-[#151A23]"></div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <span className="text-sm font-bold text-white">Evaluación Mensual</span>
                  <span className="text-xs text-gray-500 font-medium">Hace 2 semanas • Ismael</span>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-sm text-gray-300 leading-relaxed">
                  Excelente progreso en técnica de Snatch. La movilidad de hombros ha mejorado bastante desde el mes pasado. Para las próximas semanas nos enfocaremos en aumentar el RM de Back Squat. Seguir hidratando bien durante las clases de la tarde.
                </div>
              </div>

              {/* Nota 2 */}
              <div className="relative pl-8">
                <div className="absolute w-4 h-4 bg-gray-600 rounded-full -left-[9px] top-1 border-4 border-[#151A23]"></div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <span className="text-sm font-bold text-white">Nota de sesión</span>
                  <span className="text-xs text-gray-500 font-medium">Hace 1 mes • Profe Luis</span>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-sm text-gray-300 leading-relaxed">
                  Ajustamos peso en Deadlift a 80kg para cuidar zona lumbar. Buen rendimiento en el WOD metabólico.
                </div>
              </div>

              {/* Nota 3 */}
              <div className="relative pl-8">
                <div className="absolute w-4 h-4 bg-gray-600 rounded-full -left-[9px] top-1 border-4 border-[#151A23]"></div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <span className="text-sm font-bold text-white">Ingreso</span>
                  <span className="text-xs text-gray-500 font-medium">Hace 3 meses • Ismael</span>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-sm text-gray-300 leading-relaxed">
                  Deportista sin lesiones previas. Objetivo principal: bajar % de grasa y ganar fuerza base. Empezaremos con 3 veces por semana intercalando Full Flow y levantamiento.
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
