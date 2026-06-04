import Icon from '../components/Icon'

const PRODUCTS = [
  { icon: <Icon name="battery" size="md" bg="red" />, name: 'Pilas Energizer® MAX AA', detail: 'Paquetes de 2, 4, 8, 10 y 12 piezas', participates: true },
  { icon: <Icon name="battery" size="md" bg="red" />, name: 'Pilas Energizer® MAX AAA', detail: 'Paquetes de 2, 4, 8, 10 y 12 piezas', participates: true },
  { icon: <Icon name="battery" size="md" bg="red" />, name: 'Pilas Energizer® MAX C', detail: 'Paquetes de 2 y 4 piezas', participates: true },
  { icon: <Icon name="battery" size="md" bg="red" />, name: 'Pilas Energizer® MAX D', detail: 'Paquetes de 2 y 4 piezas', participates: true },
  { icon: <Icon name="battery" size="md" bg="red" />, name: 'Pilas Energizer® MAX 9V', detail: 'Paquetes de 1 y 2 piezas', participates: true },
  { icon: <Icon name="battery" size="md" bg="red" />, name: 'Pilas Energizer® Ultimate Lithium AA', detail: 'Paquetes de 2, 4 y 8 piezas', participates: true },
  { icon: <Icon name="battery" size="md" bg="red" />, name: 'Pilas Energizer® Ultimate Lithium AAA', detail: 'Paquetes de 2, 4 y 8 piezas', participates: true },
  { icon: <Icon name="battery" size="md" bg="black" />, name: 'Cargador Energizer® Smart Charger', detail: 'Para pilas AA/AAA NiMH', participates: true },
  { icon: <Icon name="battery" size="md" bg="black" />, name: 'Cargador Energizer® Recharge Pro', detail: 'Con pilas incluidas AA/AAA', participates: true },
  { icon: <Icon name="flashlight" size="md" bg="red" />, name: 'Linterna Energizer® HDX', detail: 'Linterna de alta duración', participates: true },
  { icon: <Icon name="flashlight" size="md" bg="red" />, name: 'Linterna Energizer® TAC', detail: 'Linterna táctica recargable', participates: true },
  { icon: <Icon name="flashlight" size="md" bg="red" />, name: 'Linterna Energizer® Vision HD', detail: 'Con 3 modos de iluminación', participates: true },
]

const EXCLUDED = [
  { icon: <Icon name="battery" size="md" bg="black" />, name: 'Pilas genéricas o de otras marcas', reason: 'Solo participan pilas de la marca Energizer®' },
  { icon: <Icon name="cart" size="md" bg="black" />, name: 'Compras fuera de Farmacias Guadalajara', reason: 'La promoción aplica únicamente en tiendas participantes' },
  { icon: <Icon name="tablet" size="md" bg="black" />, name: 'Productos adquiridos en línea (e-commerce)', reason: 'Solo aplica compra en tienda física' },
  { icon: <Icon name="gift" size="md" bg="black" />, name: 'Kits regalo o promocionales', reason: 'Solo producto en empaque original individual o multipack estándar' },
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
              className="bg-white/5 border border-energizer-yellow/20 p-5 flex items-start gap-4 hover:border-energizer-yellow/60 hover:bg-white/10 transition-all duration-200"
            >
              <div className="flex-shrink-0">
                {p.icon}
              </div>
              <div>
                <p className="text-white font-bold text-sm mb-0.5">{p.name}</p>
                <p className="text-gray-400 text-xs">{p.detail}</p>
                <span className="inline-flex items-center gap-1 text-xs font-medium mt-1.5">
                  <Icon name="check" size="sm" bg="red" />
                  <span className="text-green-400">Participa</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Excluded products */}
        <div className="bg-red-900/20 border border-red-500/30 p-8">
          <div className="flex items-center gap-3 mb-6">
            <Icon name="warning" size="md" bg="red" />
            <div>
              <h2 className="text-xl font-black text-white uppercase tracking-wide">Productos / Casos EXCLUIDOS</h2>
              <p className="text-gray-400 text-sm">Los siguientes casos NO aplican para la promoción</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {EXCLUDED.map((e) => (
              <div
                key={e.name}
                className="flex items-start gap-3 bg-red-900/20 p-4 border border-red-500/20"
              >
                <div className="flex-shrink-0">{e.icon}</div>
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
