const PRODUCTS = [
  { emoji: '🔋', name: 'Pilas Energizer® MAX AA', detail: 'Paquetes de 2, 4, 8, 10 y 12 piezas', participates: true },
  { emoji: '🔋', name: 'Pilas Energizer® MAX AAA', detail: 'Paquetes de 2, 4, 8, 10 y 12 piezas', participates: true },
  { emoji: '🔋', name: 'Pilas Energizer® MAX C', detail: 'Paquetes de 2 y 4 piezas', participates: true },
  { emoji: '🔋', name: 'Pilas Energizer® MAX D', detail: 'Paquetes de 2 y 4 piezas', participates: true },
  { emoji: '⚡', name: 'Pilas Energizer® MAX 9V', detail: 'Paquetes de 1 y 2 piezas', participates: true },
  { emoji: '🔋', name: 'Pilas Energizer® Ultimate Lithium AA', detail: 'Paquetes de 2, 4 y 8 piezas', participates: true },
  { emoji: '🔋', name: 'Pilas Energizer® Ultimate Lithium AAA', detail: 'Paquetes de 2, 4 y 8 piezas', participates: true },
  { emoji: '🔌', name: 'Cargador Energizer® Smart Charger', detail: 'Para pilas AA/AAA NiMH', participates: true },
  { emoji: '🔌', name: 'Cargador Energizer® Recharge Pro', detail: 'Con pilas incluidas AA/AAA', participates: true },
  { emoji: '🔦', name: 'Linterna Energizer® HDX', detail: 'Linterna de alta duración', participates: true },
  { emoji: '🔦', name: 'Linterna Energizer® TAC', detail: 'Linterna táctica recargable', participates: true },
  { emoji: '🔦', name: 'Linterna Energizer® Vision HD', detail: 'Con 3 modos de iluminación', participates: true },
]

const EXCLUDED = [
  { emoji: '🔋', name: 'Pilas genéricas o de otras marcas', reason: 'Solo participan pilas de la marca Energizer®' },
  { emoji: '🛒', name: 'Compras fuera de Farmacias Guadalajara', reason: 'La promoción aplica únicamente en tiendas participantes' },
  { emoji: '📦', name: 'Productos adquiridos en línea (e-commerce)', reason: 'Solo aplica compra en tienda física' },
  { emoji: '🎁', name: 'Kits regalo o promocionales', reason: 'Solo producto en empaque original individual o multipack estándar' },
]

export default function Productos() {
  return (
    <div className="py-16 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-energizer-red font-bold uppercase tracking-widest text-sm mb-2">Campaña 2026</p>
          <h1 className="section-title text-white mb-4">Productos participantes</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Todos los productos Energizer® listados a continuación son elegibles para participar
            en la promoción <strong className="text-white">Registra y Gana</strong>, disponibles en Farmacias Guadalajara.
          </p>
        </div>

        {/* Participating products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {PRODUCTS.map((p) => (
            <div
              key={p.name}
              className="bg-white/5 border border-energizer-yellow/20 rounded-2xl p-5 flex items-start gap-4 hover:border-energizer-yellow/60 hover:bg-white/10 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-energizer-yellow/10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                {p.emoji}
              </div>
              <div>
                <p className="text-white font-bold text-sm mb-0.5">{p.name}</p>
                <p className="text-gray-400 text-xs">{p.detail}</p>
                <span className="inline-flex items-center gap-1 text-xs text-green-400 font-medium mt-1.5">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Participa
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Excluded products */}
        <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🚫</span>
            <div>
              <h2 className="text-xl font-black text-white uppercase tracking-wide">Productos / Casos EXCLUIDOS</h2>
              <p className="text-gray-400 text-sm">Los siguientes casos NO aplican para la promoción</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {EXCLUDED.map((e) => (
              <div
                key={e.name}
                className="flex items-start gap-3 bg-red-900/20 rounded-xl p-4 border border-red-500/20"
              >
                <span className="text-2xl flex-shrink-0">{e.emoji}</span>
                <div>
                  <p className="text-white font-semibold text-sm">{e.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{e.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-gray-500 text-xs mt-8">
          * Lista de productos sujeta a disponibilidad en tienda. Consulta términos y condiciones completos.
        </p>
      </div>
    </div>
  )
}
