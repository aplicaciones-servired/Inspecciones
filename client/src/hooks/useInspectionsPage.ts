import { useEffect, useState } from 'react'
import * as XLSX from 'xlsx'
import type { InspectionZone, RowData } from '../service/inpeccion.service'
import { getInspections } from '../service/inpeccion.service'
import type { ToastState } from '../components/Toast'

type ToastType = 'success' | 'error' | 'info'

export function useInspectionsPage() {
  const [selectedInspection, setSelectedInspection] = useState('bodega')
  const [selectedZone, setSelectedZone] = useState<InspectionZone>('Multired')
  const [data, setData] = useState<RowData[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchDate, setSearchDate] = useState('')
  const [exportStartDate, setExportStartDate] = useState('')
  const [exportEndDate, setExportEndDate] = useState('')
  const [selectedRow, setSelectedRow] = useState<RowData | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [toast, setToast] = useState<ToastState | null>(null)

  const itemsPerPage = 6

  const showToast = (type: ToastType, title: string, message: string) => {
    setToast({
      id: Date.now(),
      type,
      title,
      message,
    })
  }

  const parseDateToTime = (value: string) => {
    if (!value) return null

    const isoMatch = value.match(/^(\d{4})-(\d{2})-(\d{2})/)
    if (isoMatch) {
      const [, year, month, day] = isoMatch
      return new Date(Number(year), Number(month) - 1, Number(day)).getTime()
    }

    const latinMatch = value.match(/^(\d{2})\/(\d{2})\/(\d{4})/)
    if (latinMatch) {
      const [, day, month, year] = latinMatch
      return new Date(Number(year), Number(month) - 1, Number(day)).getTime()
    }

    const fallback = new Date(value)
    if (Number.isNaN(fallback.getTime())) return null
    return new Date(fallback.getFullYear(), fallback.getMonth(), fallback.getDate()).getTime()
  }

  const getRowDate = (row: RowData) => {
    const key = Object.keys(row).find((k) => k.toLowerCase().includes('fecha'))
    if (!key) return null
    const raw = row[key]
    return raw == null ? null : String(raw)
  }

  const sortRowsDescending = (rows: RowData[]) => {
    return [...rows].sort((a, b) => {
      const aDate = getRowDate(a)
      const bDate = getRowDate(b)
      const aTime = aDate ? parseDateToTime(aDate) : null
      const bTime = bDate ? parseDateToTime(bDate) : null

      if (aTime != null && bTime != null && aTime !== bTime) {
        return bTime - aTime
      }

      const aId = Number(a.id)
      const bId = Number(b.id)
      if (Number.isFinite(aId) && Number.isFinite(bId) && aId !== bId) {
        return bId - aId
      }

      return 0
    })
  }

  useEffect(() => {
    let cancelled = false

    const fetchData = async () => {
      setLoading(true)

      try {
        const registros = await getInspections(selectedInspection, selectedZone)
        if (!cancelled) {
          setData(sortRowsDescending(registros))
          setCurrentPage(1)

          if (registros.length === 0) {
            showToast('info', 'Sin resultados', 'No se encontraron registros para esta inspeccion.')
          }
        }
      } catch (error) {
        if (!cancelled) {
          console.error('Error fetching data:', error)
          setData([])
          setCurrentPage(1)
          showToast('error', 'No fue posible cargar', 'Verifica la conexion con el servidor e intenta de nuevo.')
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    fetchData()

    return () => {
      cancelled = true
    }
  }, [selectedInspection, selectedZone])

  const handleViewDetails = (row: RowData) => {
    setSelectedRow(row)
    setShowModal(true)
  }

  const getDisplayFields = (row: RowData) => {
    const allKeys = Object.keys(row)
    const normalized = (value: string) => value.toLowerCase().trim()
    const isDateKey = (key: string) => normalized(key).includes('fecha') || normalized(key).includes('fecha de inspeccion') || normalized(key).includes('fecha_inspeccion')
    const isPlaceKey = (key: string) => {
      const keyName = normalized(key)
      return keyName.includes('lugar') || keyName.includes('lugar de inspeccion') || keyName.includes('ubicacion') || keyName.includes('direccion')|| keyName.includes('cedula')
    }
    const isResponsibleKey = (key: string) => {
      const keyName = normalized(key)
      return keyName.includes('responsable') || keyName.includes('inspector') || keyName.includes('nombre') || keyName.includes('cargo')
    }

    const fechaKey = allKeys.find(isDateKey)
    const responsableKey = allKeys.find((key) => key !== fechaKey && isResponsibleKey(key))
    const secondaryKey =
      responsableKey ||
      allKeys.find((key) => key !== fechaKey && !isDateKey(key)) ||
      allKeys.find((key) => key !== fechaKey) ||
      allKeys[1] ||
      allKeys[0]

    const field1 = fechaKey || allKeys[0]
    const field2 = secondaryKey === field1 ? allKeys.find((key) => key !== field1) || field1 : secondaryKey
    const placeKey = allKeys.find((key) => key !== field1 && key !== field2 && isPlaceKey(key))

    return {
      field1,
      field2,
      field3: placeKey,
    }
  }

  const prettifyLabel = (value: string) => {
    return value.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())
  }

  const matchesDateFilters = (row: RowData) => {
    const rowDate = getRowDate(row)
    if (!rowDate) return !searchDate

    const rowTime = parseDateToTime(rowDate)
    if (rowTime == null) return false

    if (searchDate) {
      const searchTime = parseDateToTime(searchDate)
      if (searchTime == null || rowTime !== searchTime) {
        return false
      }
    }

    return true
  }

  const exportByDateRange = () => {
    if (!exportStartDate || !exportEndDate) {
      showToast('error', 'Rango incompleto', 'Debes seleccionar fecha inicial y fecha final para exportar.')
      return
    }

    const rangeData = data.filter((row) => {
      const rowDate = getRowDate(row)
      if (!rowDate) return false
      const rowTime = parseDateToTime(rowDate)
      const startTime = parseDateToTime(exportStartDate)
      const endTime = parseDateToTime(exportEndDate)

      if (rowTime == null || startTime == null || endTime == null) return false
      return rowTime >= startTime && rowTime <= endTime
    })

    if (rangeData.length === 0) {
      showToast('info', 'Sin datos para exportar', 'No hay datos dentro del rango de fechas seleccionado.')
      return
    }

    const headers = Object.keys(rangeData[0]).filter((header) => header.trim().toLowerCase() !== 'id')

    if (headers.length === 0) {
      showToast('info', 'Sin columnas para exportar', 'No hay campos disponibles para exportar.')
      return
    }
    const rowsForSheet = rangeData.map((row) => {
      const normalized: Record<string, string | number | boolean> = {}

      headers.forEach((header) => {
        const value = row[header]
        normalized[header] = value == null ? '' : value
      })

      return normalized
    })

    const workbook = XLSX.utils.book_new()
    const worksheet = XLSX.utils.json_to_sheet(rowsForSheet, { header: headers })
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Inspecciones')

    XLSX.writeFile(
      workbook,
      `inspecciones_${selectedInspection}_${selectedZone}_${exportStartDate}_${exportEndDate}.xlsx`
    )

    showToast('success', 'Exportacion completada', `Se descargaron ${rangeData.length} registros en formato XLSX.`)
  }

  const clearDateFilters = () => {
    const hadFilters = Boolean(searchDate)
    setCurrentPage(1)
    setSearchDate('')

    if (hadFilters) {
      showToast('info', 'Filtros limpiados', 'Se restablecio la fecha del filtro de consulta.')
    }
  }

  const clearExportDates = () => {
    const hadExportDates = Boolean(exportStartDate || exportEndDate)
    setExportStartDate('')
    setExportEndDate('')

    if (hadExportDates) {
      showToast('info', 'Exportacion reiniciada', 'Se limpiaron las fechas de exportacion por rango.')
    }
  }

  const filteredData = data.filter(matchesDateFilters)

  const getTableHeaders = () => {
    if (filteredData.length > 0) {
      const displayFields = getDisplayFields(filteredData[0])
      return {
        field1: displayFields.field1,
        field2: displayFields.field2,
        field3: displayFields.field3,
      }
    }

    if (data.length === 0) return { field1: 'Campo 1', field2: 'Campo 2', field3: undefined }

    const displayFields = getDisplayFields(data[0])
    return {
      field1: displayFields.field1,
      field2: displayFields.field2,
      field3: displayFields.field3,
    }
  }

  const tableHeaders = getTableHeaders()
  const totalPages = Math.max(1, Math.ceil(filteredData.length / itemsPerPage))
  const pageStart = (currentPage - 1) * itemsPerPage
  const paginatedData = filteredData.slice(pageStart, pageStart + itemsPerPage)

  const getVisiblePages = (): Array<number | 'ellipsis'> => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, index) => index + 1)
    }

    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, 'ellipsis', totalPages]
    }

    if (currentPage >= totalPages - 3) {
      return [1, 'ellipsis', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
    }

    return [1, 'ellipsis', currentPage - 1, currentPage, currentPage + 1, 'ellipsis', totalPages]
  }

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }

  return {
    selectedInspection,
    selectedZone,
    loading,
    searchDate,
    exportStartDate,
    exportEndDate,
    filteredData,
    paginatedData,
    tableHeaders,
    currentPage,
    totalPages,
    pageStart,
    itemsPerPage,
    showModal,
    selectedRow,
    prettifyLabel,
    getDisplayFields,
    getVisiblePages,
    setLoading,
    setSelectedInspection,
    setSelectedZone,
    setCurrentPage,
    setSearchDate,
    setExportStartDate,
    setExportEndDate,
    toast,
    setToast,
    handleViewDetails,
    goToPage,
    exportByDateRange,
    clearDateFilters,
    clearExportDates,
    setShowModal,
  }
}
