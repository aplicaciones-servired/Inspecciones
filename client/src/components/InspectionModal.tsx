import type { RowData } from '../service/inpeccion.service'
import { inspectionDialogConfig } from '../utils/const'

type Props = {
  showModal: boolean
  selectedInspection: string
  selectedRow: RowData | null
  onClose: () => void
  prettifyLabel: (value: string) => string
}

export function InspectionModal({
  showModal,
  selectedInspection,
  selectedRow,
  onClose,
  prettifyLabel,
}: Props) {
  if (!showModal || !selectedRow) return null

  const config = inspectionDialogConfig[selectedInspection as keyof typeof inspectionDialogConfig]

  const hasContent = (value: unknown) => {
    if (value == null) return false
    const parsed = String(value).trim()
    return parsed.length > 0
  }

  const normalizeKey = (key: string) => key.trim().toLowerCase()

  const toLabel = (key: string) => {
    if (!config) return prettifyLabel(key)

    const exactLabel = config.labels[key] || config.labels[normalizeKey(key)]
    if (exactLabel) return exactLabel

    const numberedMatch = key.match(/^([a-zA-Z_]+)(\d+)$/)
    if (numberedMatch) {
      const [, base, index] = numberedMatch
      const baseLabel = config.labels[base] || config.labels[base.toLowerCase()] || prettifyLabel(base)
      return `${baseLabel} ${index}`
    }

    return prettifyLabel(key)
  }

  const getSortedEntries = (row: RowData) => {
    const hiddenKeys = new Set((config?.hiddenKeys ?? []).map((key) => normalizeKey(key)))
    const entries = Object.entries(row).filter(([key, value]) => {
      if (!hasContent(value)) return false
      return !hiddenKeys.has(normalizeKey(key))
    })
    if (!config) return entries

    const orderIndex = new Map<string, number>()

    config.order.forEach((key, index) => {
      orderIndex.set(key.toLowerCase(), index)
    })

    return [...entries].sort(([keyA], [keyB]) => {
      const keyANormalized = normalizeKey(keyA)
      const keyBNormalized = normalizeKey(keyB)
      const indexA = orderIndex.get(keyANormalized)
      const indexB = orderIndex.get(keyBNormalized)

      if (indexA != null && indexB != null) return indexA - indexB
      if (indexA != null) return -1
      if (indexB != null) return 1

      const aNumbered = keyANormalized.match(/^([a-z_]+)(\d+)$/)
      const bNumbered = keyBNormalized.match(/^([a-z_]+)(\d+)$/)

      if (aNumbered && bNumbered && aNumbered[1] === bNumbered[1]) {
        return Number(aNumbered[2]) - Number(bNumbered[2])
      }

      return keyANormalized.localeCompare(keyBNormalized)
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-sky-100/45 p-4 backdrop-blur-md md:p-6">
      <div className="w-full max-w-6xl rounded-4xl border border-red-200/70 bg-linear-to-b from-white via-red-50/60 to-sky-50/70 shadow-[0_20px_55px_-22px_rgba(15,23,42,0.25)]">
        <div className="p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">Detalles completos</h2>
          <p className="mt-1 text-sm text-slate-600">Consulta la informacion registrada para esta inspeccion.</p>

          <div className="mb-7 mt-6 max-h-[58vh] overflow-y-auto rounded-2xl border border-red-200/70 bg-white p-4 md:p-6">
            <div className="space-y-4">
              {getSortedEntries(selectedRow).map(([key, value]) => (
                <div key={key} className="rounded-xl border border-sky-100 bg-sky-50/70 px-4 py-3.5 md:px-5 md:py-4">
                  <p className="text-sm font-semibold leading-snug text-red-500">{toLabel(key)}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-700">{String(value)}</p>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-full rounded-xl bg-linear-to-r from-red-200 to-sky-200 px-4 py-3 text-base font-semibold text-slate-900 transition hover:from-red-300 hover:to-sky-300"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}
