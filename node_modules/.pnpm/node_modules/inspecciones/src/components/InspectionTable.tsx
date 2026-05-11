import type { RowData } from '../service/inpeccion.service'
import { Pagination } from './Pagination'

type Props = {
  loading: boolean
  filteredData: RowData[]
  paginatedData: RowData[]
  tableHeaders: { field1: string; field2: string; field3?: string }
  getDisplayFields: (row: RowData) => { field1: string; field2: string; field3?: string }
  prettifyLabel: (value: string) => string
  onViewDetails: (row: RowData) => void
  currentPage: number
  totalPages: number
  pageStart: number
  itemsPerPage: number
  onPageChange: (page: number) => void
  getVisiblePages: () => Array<number | 'ellipsis'>
}

export function InspectionTable({
  loading,
  filteredData,
  paginatedData,
  tableHeaders,
  getDisplayFields,
  prettifyLabel,
  onViewDetails,
  currentPage,
  totalPages,
  pageStart,
  itemsPerPage,
  onPageChange,
  getVisiblePages,
}: Props) {
  const showThirdColumn = Boolean(tableHeaders.field3)

  if (loading) {
    return (
      <div className="flex items-center justify-center rounded-3xl border border-red-200/60 bg-white/75 py-16 shadow-sm">
        <div className="flex items-center gap-3 text-base font-medium text-sky-800">
          <div className="h-6 w-6 animate-spin rounded-full border-4 border-red-300 border-t-transparent"></div>
          Cargando datos...
        </div>
      </div>
    )
  }

  if (filteredData.length === 0) {
    return (
      <div className="rounded-3xl border border-red-200/60 bg-white/80 py-14 text-center shadow-sm">
        <p className="text-base font-medium text-sky-800">No hay datos disponibles para ese filtro</p>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-red-200/70 bg-white/85 shadow-[0_16px_45px_-24px_rgba(15,23,42,0.30)]">
      <table className="w-full border-collapse">
        <thead className="bg-linear-to-r from-red-200 via-white to-sky-200 text-slate-900">
          <tr>
            <th className="px-5 py-4 text-left text-sm font-semibold">{prettifyLabel(tableHeaders.field1)}</th>
            <th className="px-5 py-4 text-left text-sm font-semibold">{prettifyLabel(tableHeaders.field2)}</th>
            {showThirdColumn ? (
              <th className="px-5 py-4 text-left text-sm font-semibold">{prettifyLabel(tableHeaders.field3 || '')}</th>
            ) : null}
            <th className="px-5 py-4 text-center text-sm font-semibold">Accion</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, idx) => {
            const displayFields = getDisplayFields(row)
            const field1Value = row[displayFields.field1] || 'N/A'
            const field2Value = row[displayFields.field2] || 'N/A'
            const field3Value = displayFields.field3 ? row[displayFields.field3] || 'N/A' : null

            return (
              <tr
                key={pageStart + idx}
                className="border-b border-red-100/70 bg-white/70 transition hover:bg-sky-50/70"
              >
                <td className="px-5 py-4 text-sm text-slate-700">{String(field1Value)}</td>
                <td className="px-5 py-4 text-sm text-slate-700">{String(field2Value)}</td>
                {showThirdColumn ? <td className="px-5 py-4 text-sm text-slate-700">{String(field3Value)}</td> : null}
                <td className="px-5 py-4 text-center">
                  <button
                    onClick={() => onViewDetails(row)}
                    className="rounded-xl bg-linear-to-r from-red-200 to-sky-200 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:from-red-300 hover:to-sky-300"
                  >
                    Ver detalles
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={filteredData.length}
        pageStart={pageStart}
        itemsPerPage={itemsPerPage}
        onPageChange={onPageChange}
        getVisiblePages={getVisiblePages}
      />
    </div>
  )
}
