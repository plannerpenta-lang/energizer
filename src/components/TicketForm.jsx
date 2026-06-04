import { useState } from 'react'
import Icon from './Icon'

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
        <div className="flex justify-center mb-4"><Icon name="trophy" size="xl" bg="red" /></div>
        <h2 className="text-3xl font-black text-black mb-3 uppercase">
          ¡Ticket Registrado!
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Tu participación fue recibida. Recibirás una confirmación en tu correo.
        </p>
        <div className="bg-[#FFF200] border-l-4 border-black px-6 py-4 max-w-md mx-auto mb-8 text-left">
          <p className="text-black font-bold text-sm">
            Recuerda guardar todos tus empaques y facturas registradas, serán solicitadas para entregar el premio.
          </p>
        </div>
        <button
          onClick={() => { setSubmitted(false); setForm(initialState); setPreview(null) }}
          className="btn-primary"
        >
          Registrar otro ticket
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Alert */}
      <div className="flex items-start gap-3 bg-[#FFF200] border-l-4 border-black px-4 py-3">
        <Icon name="warning" size="sm" bg="yellow" />
        <p className="text-black text-sm font-bold">
          Recuerda guardar todos tus empaques y facturas registradas, serán solicitadas para entregar el premio.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Nombre */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-bold text-black mb-1">
            Nombre completo <span className="text-[#EE3A43]">*</span>
          </label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Juan Pérez García"
            className={`w-full bg-white border-2 px-4 py-3 text-black placeholder-gray-400 outline-none focus:border-black transition-all ${
              errors.nombre ? 'border-red-500' : 'border-gray-300'
            }`}
            style={{ borderRadius: 0 }}
          />
          {errors.nombre && <p className="text-red-600 text-xs mt-1">{errors.nombre}</p>}
        </div>

        {/* Correo */}
        <div>
          <label className="block text-sm font-bold text-black mb-1">
            Correo electrónico <span className="text-[#EE3A43]">*</span>
          </label>
          <input
            type="email"
            name="correo"
            value={form.correo}
            onChange={handleChange}
            placeholder="juan@ejemplo.com"
            className={`w-full bg-white border-2 px-4 py-3 text-black placeholder-gray-400 outline-none focus:border-black transition-all ${
              errors.correo ? 'border-red-500' : 'border-gray-300'
            }`}
            style={{ borderRadius: 0 }}
          />
          {errors.correo && <p className="text-red-600 text-xs mt-1">{errors.correo}</p>}
        </div>

        {/* Teléfono */}
        <div>
          <label className="block text-sm font-bold text-black mb-1">
            Teléfono <span className="text-[#EE3A43]">*</span>
          </label>
          <input
            type="tel"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            placeholder="55 1234 5678"
            maxLength={10}
            className={`w-full bg-white border-2 px-4 py-3 text-black placeholder-gray-400 outline-none focus:border-black transition-all ${
              errors.telefono ? 'border-red-500' : 'border-gray-300'
            }`}
            style={{ borderRadius: 0 }}
          />
          {errors.telefono && <p className="text-red-600 text-xs mt-1">{errors.telefono}</p>}
        </div>

        {/* Número ticket */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-bold text-black mb-1">
            Número de ticket / folio <span className="text-[#EE3A43]">*</span>
          </label>
          <input
            type="text"
            name="ticket"
            value={form.ticket}
            onChange={handleChange}
            placeholder="Ej. 000123456"
            className={`w-full bg-white border-2 px-4 py-3 text-black placeholder-gray-400 outline-none focus:border-black transition-all ${
              errors.ticket ? 'border-red-500' : 'border-gray-300'
            }`}
            style={{ borderRadius: 0 }}
          />
          {errors.ticket && <p className="text-red-600 text-xs mt-1">{errors.ticket}</p>}
        </div>

        {/* Foto ticket */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-bold text-black mb-1">
            Foto del ticket <span className="text-[#EE3A43]">*</span>
          </label>
          <label
            className={`flex flex-col items-center justify-center border-2 border-dashed p-8 cursor-pointer transition-all hover:border-black ${
              errors.foto ? 'border-red-500 bg-red-50' : 'border-gray-400 bg-[#F5F5F5] hover:bg-gray-100'
            }`}
            style={{ borderRadius: 0 }}
          >
            {preview ? (
              <img src={preview} alt="Vista previa" className="max-h-40 object-contain" />
            ) : (
              <>
                <div className="mb-2"><Icon name="camera" size="lg" bg="black" /></div>
                <span className="text-gray-600 text-sm text-center">
                  Haz clic para subir o arrastra tu foto aquí<br />
                  <span className="text-gray-500 text-xs">JPG, PNG — máx. 5 MB</span>
                </span>
              </>
            )}
            <input type="file" accept="image/*" className="sr-only" onChange={handleFile} />
          </label>
          {errors.foto && <p className="text-red-600 text-xs mt-1">{errors.foto}</p>}
          {preview && (
            <button
              type="button"
              onClick={() => { setPreview(null); setForm((p) => ({ ...p, foto: null })) }}
              className="text-xs text-gray-500 hover:text-red-600 mt-1 transition-colors"
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
            className="mt-1 w-4 h-4 accent-black flex-shrink-0"
          />
          <span className="text-black text-sm">
            He leído y acepto los{' '}
            <a href="/terminos" target="_blank" className="text-[#EE3A43] underline hover:no-underline">
              Términos y Condiciones
            </a>{' '}
            de la promoción.
          </span>
        </label>
        {errors.terminos && <p className="text-red-600 text-xs mt-1">{errors.terminos}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          'Registrando...'
        ) : (
          'Registrar mi ticket'
        )}
      </button>
    </form>
  )
}
