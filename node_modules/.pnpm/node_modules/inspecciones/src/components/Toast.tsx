type ToastType = 'success' | 'error' | 'info'

export type ToastState = {
  id: number
  type: ToastType
  title: string
  message: string
}

type Props = {
  toast: ToastState | null
  onClose: () => void
}

const toastStyles: Record<ToastType, { border: string; icon: string; iconBg: string }> = {
  success: {
    border: 'border-emerald-700/70',
    icon: 'text-emerald-200',
    iconBg: 'bg-emerald-800/80',
  },
  error: {
    border: 'border-red-700/70',
    icon: 'text-red-200',
    iconBg: 'bg-red-800/80',
  },
  info: {
    border: 'border-sky-700/70',
    icon: 'text-sky-200',
    iconBg: 'bg-sky-800/80',
  },
}

const toastIcons: Record<ToastType, string> = {
  success: '✓',
  error: '!',
  info: 'i',
}

export function Toast({ toast, onClose }: Props) {
  if (!toast) return null

  const style = toastStyles[toast.type]

  return (
    <div className="pointer-events-none fixed right-4 top-4 z-70 w-[calc(100vw-2rem)] max-w-sm animate-[slideIn_.25s_ease-out] sm:right-6 sm:top-6">
      <div className={`pointer-events-auto rounded-2xl border ${style.border} bg-slate-900/95 p-4 shadow-[0_20px_45px_-26px_rgba(2,6,23,0.65)] backdrop-blur`}>
        <div className="flex items-start gap-3">
          <div className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${style.iconBg} text-sm font-bold ${style.icon}`}>
            {toastIcons[toast.type]}
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-slate-100">{toast.title}</p>
            <p className="mt-0.5 text-sm text-slate-300">{toast.message}</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-md px-2 py-1 text-xs font-semibold text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}
