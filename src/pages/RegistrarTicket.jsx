import TicketForm from '../components/TicketForm'

const STEPS_MINI = [
  { n: '1', t: 'Compra Energizer®', s: 'En Farmacias Guadalajara' },
  { n: '2', t: 'Llena el formulario', s: 'Con tus datos y ticket' },
  { n: '3', t: 'Sube tu foto', s: 'Del ticket de compra' },
  { n: '4', t: '¡Participa!', s: 'Espera el sorteo semanal' },
]

export default function RegistrarTicket() {
  return (
    <div className="min-h-screen bg-black py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-energizer-red font-bold uppercase tracking-widest text-sm mb-2">Paso a paso</p>
          <h1 className="section-title text-white mb-3">Registra tu ticket</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Ingresa tus datos y sube una foto de tu ticket de compra de productos Energizer® en Farmacias Guadalajara.
          </p>
        </div>

        {/* Mini steps */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {STEPS_MINI.map((s) => (
            <div key={s.n} className="text-center bg-white/5 rounded-xl p-3 border border-white/10">
              <div className="w-8 h-8 rounded-full bg-energizer-yellow text-energizer-black font-black text-sm mx-auto mb-1 flex items-center justify-center">
                {s.n}
              </div>
              <p className="text-white font-semibold text-xs">{s.t}</p>
              <p className="text-gray-500 text-xs">{s.s}</p>
            </div>
          ))}
        </div>

        {/* Form card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10">
          <TicketForm />
        </div>

        <p className="text-center text-gray-600 text-xs mt-6">
          Vigencia: 01/04/2026 – 17/07/2026. Un registro por ticket. Consulta términos y condiciones.
        </p>
      </div>
    </div>
  )
}
