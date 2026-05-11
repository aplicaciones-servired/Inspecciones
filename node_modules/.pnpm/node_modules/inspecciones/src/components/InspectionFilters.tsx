import { inspections } from '../utils/const'
import type { InspectionZone } from '../service/inpeccion.service'

type Props = {
  selectedInspection: string
  onInspectionChange: (value: string) => void
  selectedZone: InspectionZone
  onZoneChange: (value: InspectionZone) => void
  searchDate: string
  onSearchDateChange: (value: string) => void
  exportStartDate: string
  onExportStartDateChange: (value: string) => void
  exportEndDate: string
  onExportEndDateChange: (value: string) => void
  onExportByRange: () => void
  onClearFilters: () => void
  onClearExportDates: () => void
}

export function InspectionFilters({
  selectedInspection,
  onInspectionChange,
  selectedZone,
  onZoneChange,
  searchDate,
  onSearchDateChange,
  exportStartDate,
  onExportStartDateChange,
  exportEndDate,
  onExportEndDateChange,
  onExportByRange,
  onClearFilters,
  onClearExportDates,
}: Props) {
  return (
    <section className="mb-8 rounded-3xl border border-red-200/60 bg-white/85 p-6 shadow-[0_12px_40px_-18px_rgba(15,23,42,0.25)] backdrop-blur md:p-8">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-red-500">Panel</p>
      <h1 className="mb-6 text-3xl font-bold text-slate-900 md:text-5xl">Inspecciones {selectedZone}</h1>

      <div className="grid gap-4 md:grid-cols-2 md:gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="inspecciones" className="text-sm font-medium text-sky-800">Tipo de inspeccion</label>
          <select
            name="inspecciones"
            id="inspecciones"
            value={selectedInspection}
            onChange={(event) => onInspectionChange(event.target.value)}
            className="rounded-xl border border-red-200 bg-linear-to-r from-red-50 to-sky-50 px-4 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-red-300 focus:ring-2 focus:ring-red-200"
          >
            {inspections.map((inspection) => (
              <option key={inspection.value} value={inspection.value}>
                {inspection.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="empresa" className="text-sm font-medium text-sky-800">Empresa</label>
          <select
            id="empresa"
            value={selectedZone}
            onChange={(event) => onZoneChange(event.target.value as InspectionZone)}
            className="rounded-xl border border-red-200 bg-linear-to-r from-red-50 to-sky-50 px-4 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-red-300 focus:ring-2 focus:ring-red-200"
          >
            
            <option value="Multired">Multired</option>
            <option value="Servired">Servired</option>
          </select>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-red-100 bg-white/75 p-4 md:p-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-sky-800">Filtro de consulta</p>

        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-6">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="searchDate" className="text-xs font-semibold uppercase tracking-wide text-sky-800">Buscar fecha exacta</label>
            <input
              id="searchDate"
              type="date"
              value={searchDate}
              onChange={(event) => onSearchDateChange(event.target.value)}
              className="rounded-lg border border-red-200 bg-white px-3 py-2 text-sm outline-none focus:border-red-300 focus:ring-2 focus:ring-red-200"
            />
          </div>

          <button
            onClick={onClearFilters}
            className="h-10.5 rounded-lg border border-red-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-red-50 md:min-w-57.5"
          >
            Limpiar filtros de consulta
          </button>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-sky-100 bg-sky-50/55 p-4 md:p-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-sky-800">Exportar por fechas</p>

        <div className="grid gap-4 md:gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(240px,0.9fr)] lg:items-end">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="exportStartDate" className="text-xs font-semibold uppercase tracking-wide text-sky-800">Fecha inicial</label>
            <input
              id="exportStartDate"
              type="date"
              value={exportStartDate}
              onChange={(event) => onExportStartDateChange(event.target.value)}
              className="rounded-lg border border-red-200 bg-white px-3 py-2 text-sm outline-none focus:border-red-300 focus:ring-2 focus:ring-red-200"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="exportEndDate" className="text-xs font-semibold uppercase tracking-wide text-sky-800">Fecha final</label>
            <input
              id="exportEndDate"
              type="date"
              value={exportEndDate}
              onChange={(event) => onExportEndDateChange(event.target.value)}
              className="rounded-lg border border-red-200 bg-white px-3 py-2 text-sm outline-none focus:border-red-300 focus:ring-2 focus:ring-red-200"
            />
          </div>

          <div className="flex flex-col justify-end gap-2">
            <button
              onClick={onExportByRange}
              className="h-10.5 rounded-lg bg-linear-to-r from-red-200 to-sky-200 px-3 py-2 text-sm font-semibold text-slate-900 transition hover:from-red-300 hover:to-sky-300"
            >
              Exportar por fechas
            </button>
            <button
              onClick={onClearExportDates}
              className="h-10.5 rounded-lg border border-red-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-red-50"
            >
              Limpiar fechas de exportacion
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
