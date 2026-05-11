import { useState } from 'react'
import type { LoginUser } from '../service/login.service'
import { authenticateLogin } from '../service/login.service'

type Props = {
  onSuccess: (user: LoginUser) => void
}

export function LoginForm({ onSuccess }: Props) {
  const [login, setLogin] = useState('')
  const [pass, setPass] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setLoading(true)

    try {
      const user = await authenticateLogin({ login, pass })
      onSuccess(user)
    } catch (authError) {
      const message = authError instanceof Error ? authError.message : 'No fue posible iniciar sesion.'
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10 text-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(248,113,113,0.26),transparent_32%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.24),transparent_34%),linear-gradient(180deg,#fffdfc_0%,#eef8ff_100%)]" />
      <div className="absolute left-[8%] top-[10%] h-36 w-36 rounded-full bg-red-200/40 blur-3xl" />
      <div className="absolute bottom-[8%] right-[10%] h-44 w-44 rounded-full bg-sky-200/45 blur-3xl" />

      <div className="relative grid w-full max-w-5xl overflow-hidden rounded-4xl border border-white/70 bg-white/80 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.45)] backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col justify-between gap-8 bg-linear-to-br from-red-300 via-rose-500 to-sky-300 p-8 text-white md:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">Control de inspecciones</p>
            <h1 className="mt-4 max-w-xl text-4xl font-black leading-tight md:text-6xl">
                Administra y supervisa tus inspecciones de manera eficiente
            </h1>
          </div>

        </div>

        <div className="flex items-center justify-center p-8 md:p-10">
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">Iniciar sesion</p>
              <h2 className="mt-2 text-3xl font-black text-slate-900">Bienvenido de vuelta</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Ingresa con tus credenciales registradas para abrir el panel.
              </p>
            </div>

            <label className="block space-y-2">
              <span className="text-sm font-semibold text-slate-700">Login</span>
              <input
                value={login}
                onChange={(event) => setLogin(event.target.value)}
                autoComplete="username"
                inputMode="text"
                maxLength={35}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-red-300 focus:ring-4 focus:ring-red-100"
                placeholder="usuario"
                required
              />
            </label>

            <label className="block space-y-2">
              <span className="text-sm font-semibold text-slate-700">Pass</span>
              <input
                value={pass}
                onChange={(event) => setPass(event.target.value)}
                autoComplete="current-password"
                maxLength={35}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                placeholder="********"
                type="password"
                required
              />
            </label>

            {error ? (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center rounded-2xl bg-linear-to-r from-red-500 to-sky-500 px-4 py-3.5 text-base font-bold text-white transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? 'Validando acceso...' : 'Entrar al sistema'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}