import { useState } from 'react'

const initialState = {
  nombre: '',
  correo: '',
  telefono: '',
  ticket: '',
  foto: null,
  terminos: false,
}

export default function TicketForm() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [preview, setPreview] = useState(null)

  const validate = () => {
    const e = {}
    if (!form.nombre.trim()) e.nombre = 'El nombre es requerido.'
    if (!form.correo.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo))
      e.correo = 'Ingresa un correo válido.'
    if (!form.telefono.trim() || !/^\d{10}$/.test(form.telefono.replace(/\s/g, '')))
      e.telefono = 'Ingresa un teléfono de 10 dígitos.'
    if (!form.ticket.trim()) e.ticket = 'El número de ticket es requerido.'
    if (!form.foto) e.foto = 'Debes subir una foto de tu ticket.'
    if (!form.terminos) e.terminos = 'Debes aceptar los términos y condiciones.'
    return e
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleFile = (e) => {
    const file = e.target.files[0]
    if (!file) return
    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, foto: 'El archivo no debe superar 5 MB.' }))
      return
    }
    setForm((prev) => ({ ...prev, foto: file }))
    setErrors((prev) => ({ ...prev, foto: undefined }))
    setPreview(URL.createObjectURL(file))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length > 0) {
      setErrors(e2)
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  if (submitted) {
    return (
      <div className="text-center py-16 px-6">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-3xl font-black text-energizer-yellow mb-3 uppercase">
          ¡Ticket Registrado!
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          Tu participación fue recibida. Recibirás una confirmación en tu correo.
        </p>
        <div className="bg-energizer-orange/20 border border-energizer-orange/50 rounded-xl px-6 py-4 max-w-md mx-auto mb-8">
          <p className="text-energizer-orange font-semibold text-sm">
            ⚠️ Recuerda guardar todos tus empaques y facturas registradas, serán solicitadas para entregar el premio.
          </p>
        </div>
        <button
          onClick={() => { setSubmitted(false); setForm(initialState); setPreview(null) }}
          className="btn-secondary"
        >
          Registrar otro ticket
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Alert */}
      <div className="flex items-start gap-3 bg-energizer-orange/10 border border-energizer-orange/40 rounded-xl p-4">
        <span className="text-energizer-orange text-xl flex-shrink-0">⚠️</span>
        <p className="text-energizer-orange text-sm font-medium">
          Recuerda guardar todos tus empaques y facturas registradas, serán solicitadas para entregar el premio.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Nombre */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold text-gray-300 mb-1">
            Nombre completo <span className="text-energizer-red">*</span>
          </label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Juan Pérez García"
            className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-energizer-yellow transition-all ${
              errors.nombre ? 'border-red-500' : 'border-white/20 focus:border-energizer-yellow'
            }`}
          />
          {errors.nombre && <p className="text-red-400 text-xs mt-1">{errors.nombre}</p>}
        </div>

        {/* Correo */}
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-1">
            Correo electrónico <span className="text-energizer-red">*</span>
          </label>
          <input
            type="email"
            name="correo"
            value={form.correo}
            onChange={handleChange}
            placeholder="juan@ejemplo.com"
            className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-energizer-yellow transition-all ${
              errors.correo ? 'border-red-500' : 'border-white/20 focus:border-energizer-yellow'
            }`}
          />
          {errors.correo && <p className="text-red-400 text-xs mt-1">{errors.correo}</p>}
        </div>

        {/* Teléfono */}
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-1">
            Teléfono <span className="text-energizer-red">*</span>
          </label>
          <input
            type="tel"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            placeholder="55 1234 5678"
            maxLength={10}
            className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-energizer-yellow transition-all ${
              errors.telefono ? 'border-red-500' : 'border-white/20 focus:border-energizer-yellow'
            }`}
          />
          {errors.telefono && <p className="text-red-400 text-xs mt-1">{errors.telefono}</p>}
        </div>

        {/* Número ticket */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold text-gray-300 mb-1">
            Número de ticket / folio <span className="text-energizer-red">*</span>
          </label>
          <input
            type="text"
            name="ticket"
            value={form.ticket}
            onChange={handleChange}
            placeholder="Ej. 000123456"
            className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-energizer-yellow transition-all ${
              errors.ticket ? 'border-red-500' : 'border-white/20 focus:border-energizer-yellow'
            }`}
          />
          {errors.ticket && <p className="text-red-400 text-xs mt-1">{errors.ticket}</p>}
        </div>

        {/* Foto ticket */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold text-gray-300 mb-1">
            Foto del ticket <span className="text-energizer-red">*</span>
          </label>
          <label
            className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-8 cursor-pointer transition-all hover:border-energizer-yellow ${
              errors.foto ? 'border-red-500 bg-red-500/5' : 'border-white/20 bg-white/5 hover:bg-white/10'
            }`}
          >
            {preview ? (
              <img src={preview} alt="Vista previa" className="max-h-40 rounded-lg object-contain" />
            ) : (
              <>
                <span className="text-4xl mb-2">📷</span>
                <span className="text-gray-400 text-sm text-center">
                  Haz clic para subir o arrastra tu foto aquí<br />
                  <span className="text-gray-500 text-xs">JPG, PNG — máx. 5 MB</span>
                </span>
              </>
            )}
            <input type="file" accept="image/*" className="sr-only" onChange={handleFile} />
          </label>
          {errors.foto && <p className="text-red-400 text-xs mt-1">{errors.foto}</p>}
          {preview && (
            <button
              type="button"
              onClick={() => { setPreview(null); setForm((p) => ({ ...p, foto: null })) }}
              className="text-xs text-gray-400 hover:text-red-400 mt-1 transition-colors"
            >
              Eliminar imagen
            </button>
          )}
        </div>
      </div>

      {/* Términos */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="terminos"
            checked={form.terminos}
            onChange={handleChange}
            className="mt-1 w-4 h-4 accent-energizer-yellow flex-shrink-0"
          />
          <span className="text-gray-300 text-sm">
            He leído y acepto los{' '}
            <a href="/terminos" target="_blank" className="text-energizer-yellow underline hover:no-underline">
              Términos y Condiciones
            </a>{' '}
            de la promoción.
          </span>
        </label>
        {errors.terminos && <p className="text-red-400 text-xs mt-1">{errors.terminos}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Registrando…
          </span>
        ) : (
          '🎟️ Registrar mi ticket'
        )}
      </button>
    </form>
  )
}
