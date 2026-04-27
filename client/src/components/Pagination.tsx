type Props = {
  currentPage: number
  totalPages: number
  totalItems: number
  pageStart: number
  itemsPerPage: number
  onPageChange: (page: number) => void
  getVisiblePages: () => Array<number | 'ellipsis'>
}

export function Pagination({
  currentPage,
  totalPages,
  totalItems,
  pageStart,
  itemsPerPage,
  onPageChange,
  getVisiblePages,
}: Props) {
  if (totalItems <= itemsPerPage) return null

  return (
    <div className="flex flex-col gap-3 border-t border-red-100 bg-white/90 px-5 py-4 md:flex-row md:items-center md:justify-between">
      <p className="text-sm text-sky-800">
        Mostrando {pageStart + 1} - {Math.min(pageStart + itemsPerPage, totalItems)} de {totalItems} registros
      </p>

      <div className="flex flex-wrap items-center gap-2 md:justify-end">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded-lg border border-red-200 px-3 py-1.5 text-sm font-medium text-slate-700 transition enabled:hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Anterior
        </button>

        {getVisiblePages().map((item, index) => {
          if (item === 'ellipsis') {
            return (
              <span key={`ellipsis-${index}`} className="px-1 text-sm font-semibold text-slate-500">
                ...
              </span>
            )
          }

          return (
            <button
              key={item}
              onClick={() => onPageChange(item)}
              className={`min-w-9 rounded-lg px-3 py-1.5 text-sm font-semibold transition ${
                currentPage === item
                  ? 'bg-linear-to-r from-red-200 to-sky-200 text-slate-900'
                  : 'border border-red-200 text-slate-700 hover:bg-red-50'
              }`}
            >
              {item}
            </button>
          )
        })}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded-lg border border-red-200 px-3 py-1.5 text-sm font-medium text-slate-700 transition enabled:hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </div>
  )
}
