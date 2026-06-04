import { useState } from 'react'

const SECTIONS = [
  {
    title: '1. Organizador y responsable',
    content: `La presente promoción es organizada y operada por Energizer Mexico, S. de R.L. de C.V. (en adelante "Energizer"), con domicilio en Ciudad de México, México. Energizer es el único responsable de la mecánica, premios y términos de esta campaña.`,
  },
  {
    title: '2. Vigencia',
    content: `La promoción "Registra y Gana" estará vigente del 01 de abril de 2026 al 17 de julio de 2026 en Farmacias Guadalajara participantes en la República Mexicana. Los tickets de compra deben registrarse antes del 17 de julio de 2026 a las 23:59 horas (tiempo del centro de México).`,
  },
  {
    title: '3. Área de aplicación',
    content: `La promoción aplica únicamente en tiendas físicas de Farmacias Guadalajara en la República Mexicana que cuenten con los productos Energizer® participantes. No aplica para compras realizadas a través de plataformas de comercio electrónico.`,
  },
  {
    title: '4. Participantes elegibles',
    content: `Pueden participar personas físicas mayores de 18 años, residentes en la República Mexicana, que cuenten con una identificación oficial vigente. No pueden participar empleados de Energizer, Farmacias Guadalajara, ni sus familiares directos hasta el segundo grado.`,
  },
  {
    title: '5. Productos participantes',
    content: `Participan en la promoción todos los productos de la línea Energizer® (pilas MAX, Ultimate Lithium, Eco Advanced; cargadores Recharge y Smart Charger; linternas de la línea Vision y TAC) disponibles en Farmacias Guadalajara. Quedan excluidos los kits promocionales, productos a granel y cualquier producto de marca diferente a Energizer®.`,
  },
  {
    title: '6. Mecánica de participación',
    content: `1. Compra uno o más productos Energizer® en Farmacias Guadalajara durante la vigencia de la promoción.\n2. Ingresa al micrositio oficial en www.registrayganaenergizer.com.mx\n3. Llena el formulario de registro con: nombre completo, correo electrónico, número de teléfono y número de ticket de compra.\n4. Sube una fotografía legible del ticket de compra donde se aprecien los productos Energizer® adquiridos.\n5. Acepta los presentes términos y condiciones.\n6. Cada ticket de compra puede registrarse una sola vez. Un mismo participante puede registrar múltiples tickets de compras diferentes.`,
  },
  {
    title: '7. Premios y sorteos',
    content: `Premio Mayor: 1 viaje a Playa del Carmen, Quintana Roo para 2 personas que incluye: boletos de avión redondo desde la ciudad de origen del ganador a Cancún, Q. Roo; 5 noches de hospedaje en hotel de categoría 5 estrellas en régimen todo incluido; traslados aeropuerto-hotel-aeropuerto. El sorteo del Premio Mayor se realizará el 24 de julio de 2026.\n\nPremios semanales: se sortean entre los registros válidos de cada semana. Los premios incluyen smartphones, audífonos inalámbricos, tablets y tarjetas de regalo para Farmacias Guadalajara.`,
  },
  {
    title: '8. Validación y entrega de premios',
    content: `Los ganadores serán notificados por correo electrónico al domicilio proporcionado en el registro. Para reclamar el premio, el ganador deberá presentar: identificación oficial, el ticket de compra original, el empaque original del producto Energizer®. Energizer se reserva el derecho de descalificar a cualquier participante que no pueda verificar su compra con los documentos originales. Los premios no son transferibles, canjeables por dinero en efectivo, ni pueden cederse a terceros.`,
  },
  {
    title: '9. Limitaciones de responsabilidad',
    content: `Energizer no se hace responsable por fallas técnicas del sitio web, errores de transmisión de datos, interrupciones del servicio de internet, ni por cualquier circunstancia de fuerza mayor que impida la correcta participación. Energizer se reserva el derecho de cancelar, modificar o posponer la promoción en caso de circunstancias extraordinarias, notificando a los participantes con la mayor anticipación posible.`,
  },
  {
    title: '10. Tratamiento de datos personales',
    content: `Los datos personales proporcionados serán tratados conforme al Aviso de Privacidad de Energizer Mexico, S. de R.L. de C.V., disponible en el sitio oficial de Energizer México. Los datos serán utilizados exclusivamente para la gestión de la presente promoción, la notificación de ganadores y el cumplimiento de obligaciones legales. Los participantes podrán ejercer sus derechos ARCO (Acceso, Rectificación, Cancelación y Oposición) enviando un correo a privacidad@energizer.com.mx.`,
  },
  {
    title: '11. Disposiciones generales',
    content: `La participación en esta promoción implica la aceptación de los presentes términos y condiciones. Cualquier controversia derivada de la presente promoción será resuelta conforme a las leyes de los Estados Unidos Mexicanos, con sujeción a la jurisdicción de los tribunales competentes de la Ciudad de México. En caso de discrepancia entre el texto publicado en este micrositio y cualquier otro material publicitario, prevalecerá el presente documento.\n\nPromoción válida del 01/04/2026 al 17/07/2026. Mecánica bajo responsabilidad exclusiva de Energizer Mexico, S. de R.L. de C.V.`,
  },
]

export default function Terminos() {
  const [open, setOpen] = useState(null)

  return (
    <div className="min-h-screen bg-black py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-energizer-red font-bold uppercase tracking-widest text-sm mb-2">Legalidad</p>
          <h1 className="section-title text-white mb-3">Términos y Condiciones</h1>
          <p className="text-gray-400">
            Promoción <strong className="text-white">Registra y Gana</strong> · Energizer® × Farmacias Guadalajara<br />
            Vigencia: 01/04/2026 – 17/07/2026
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {SECTIONS.map((s, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 bg-white/5 hover:bg-white/10 transition-colors text-left"
              >
                <span className="text-white font-semibold text-sm">{s.title}</span>
                <svg
                  className={`w-5 h-5 text-energizer-yellow transition-transform flex-shrink-0 ml-3 ${open === i ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 py-4 bg-black/40">
                  {s.content.split('\n').map((line, idx) => (
                    <p key={idx} className={`text-gray-300 text-sm leading-relaxed ${idx > 0 ? 'mt-3' : ''}`}>
                      {line}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-xs mt-10">
          ©2026 Energizer Mexico, S. de R.L. de C.V. Todos los derechos reservados.
        </p>
      </div>
    </div>
  )
}
