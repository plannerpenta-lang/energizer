import { useState } from 'react'
import WinnerRow from '../components/WinnerRow'

const ALL_WINNERS = [
  { name: 'María G.', city: 'Guadalajara, Jal.', prize: 'Smartphone Premium', date: '28 may 2026', week: 8, month: 5 },
  { name: 'Carlos M.', city: 'Ciudad de México', prize: 'Audífonos Inalámbricos', date: '28 may 2026', week: 8, month: 5 },
  { name: 'Ana L.', city: 'Monterrey, N.L.', prize: 'Tarjeta de Regalo $500', date: '21 may 2026', week: 7, month: 5 },
  { name: 'Roberto F.', city: 'Puebla, Pue.', prize: 'Smartphone Premium', date: '21 may 2026', week: 7, month: 5 },
  { name: 'Sofía T.', city: 'León, Gto.', prize: 'Tablet 10"', date: '14 may 2026', week: 6, month: 5 },
  { name: 'Javier H.', city: 'Querétaro, Qro.', prize: 'Tarjeta de Regalo $500', date: '14 may 2026', week: 6, month: 5 },
  { name: 'Laura R.', city: 'Tijuana, B.C.', prize: 'Audífonos Inalámbricos', date: '07 may 2026', week: 5, month: 5 },
  { name: 'Miguel S.', city: 'Mérida, Yuc.', prize: 'Tarjeta de Regalo $500', date: '07 may 2026', week: 5, month: 5 },
  { name: 'Diana P.', city: 'Hermosillo, Son.', prize: 'Smartphone Premium', date: '30 abr 2026', week: 4, month: 4 },
  { name: 'Omar V.', city: 'Toluca, Méx.', prize: 'Tablet 10"', date: '30 abr 2026', week: 4, month: 4 },
  { name: 'Karla B.', city: 'Chihuahua, Chih.', prize: 'Tarjeta de Regalo $500', date: '23 abr 2026', week: 3, month: 4 },
  { name: 'Eduardo C.', city: 'San Luis Potosí', prize: 'Audífonos Inalámbricos', date: '23 abr 2026', week: 3, month: 4 },
  { name: 'Verónica M.', city: 'Culiacán, Sin.', prize: 'Tarjeta de Regalo $500', date: '16 abr 2026', week: 2, month: 4 },
  { name: 'Pablo R.', city: 'Saltillo, Coah.', prize: 'Smartphone Premium', date: '16 abr 2026', week: 2, month: 4 },
  { name: 'Lucía F.', city: 'Oaxaca, Oax.', prize: 'Tarjeta de Regalo $500', date: '09 abr 2026', week: 1, month: 4 },
  { name: 'Fernando G.', city: 'Mexicali, B.C.', prize: 'Tablet 10"', date: '09 abr 2026', week: 1, month: 4 },
]

const PER_PAGE = 6

export default function Ganadores() {
  const [filter, setFilter] = useState('all')
  const [page, setPage] = useState(1)

  const filtered = filter === 'all'
    ? ALL_WINNERS
    : filter.startsWith('m')
    ? ALL_WINNERS.filter((w) => w.month === parseInt(filter.slice(1)))
    : ALL_WINNERS.filter((w) => w.week === parseInt(filter.slice(1)))

  const total = Math.ceil(filtered.length / PER_PAGE)
  const slice = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const handleFilter = (v) => { setFilter(v); setPage(1) }

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#EE3A43] font-black uppercase tracking-widest text-sm mb-2">Ellos ya ganaron</p>
          <h1 className="section-title text-black mb-3">Ganadores</h1>
          <p className="text-gray-700">
            Lista oficial de participantes premiados durante la campaña Registra y Gana 2026.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {[
            { v: 'all', label: 'Todos' },
            { v: 'm4', label: 'Abril' },
            { v: 'm5', label: 'Mayo' },
            { v: 'w1', label: 'Semana 1' },
            { v: 'w2', label: 'Semana 2' },
            { v: 'w3', label: 'Semana 3' },
            { v: 'w4', label: 'Semana 4' },
            { v: 'w5', label: 'Semana 5' },
          ].map((f) => (
            <button
              key={f.v}
              onClick={() => handleFilter(f.v)}
              className={`text-sm font-bold px-4 py-2 transition-all ${
                filter === f.v
                  ? 'bg-black text-[#FFF200]'
                  : 'bg-transparent text-black border-2 border-black hover:bg-black hover:text-[#FFF200]'
              }`}
              style={{ borderRadius: 0 }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-gray-600 text-sm mb-4">
          Mostrando {slice.length} de {filtered.length} ganadores
        </p>

        {/* List */}
        <div className="border-4 border-black bg-white mb-8">
          {slice.length === 0 ? (
            <p className="text-center text-gray-500 py-8">No hay ganadores en este período aún.</p>
          ) : (
            slice.map((w) => (
              <WinnerRow key={`${w.name}-${w.date}`} {...w} />
            ))
          )}
        </div>

        {/* Pagination */}
        {total > 1 && (
          <div className="flex justify-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="w-9 h-9 border-2 border-black text-black flex items-center justify-center disabled:opacity-30 hover:bg-black hover:text-[#FFF200] transition-all"
              style={{ borderRadius: 0 }}
            >
              ‹
            </button>
            {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`w-9 h-9 text-sm font-bold transition-all ${
                  page === n
                    ? 'bg-black text-[#FFF200]'
                    : 'border-2 border-black text-black hover:bg-black hover:text-[#FFF200]'
                }`}
                style={{ borderRadius: 0 }}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(total, p + 1))}
              disabled={page === total}
              className="w-9 h-9 border-2 border-black text-black flex items-center justify-center disabled:opacity-30 hover:bg-black hover:text-[#FFF200] transition-all"
              style={{ borderRadius: 0 }}
            >
              ›
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
