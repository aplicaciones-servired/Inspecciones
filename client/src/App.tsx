import { useCallback, useEffect, useState } from 'react'
import { InspectionFilters } from './components/InspectionFilters'
import { InspectionTable } from './components/InspectionTable'
import { InspectionModal } from './components/InspectionModal'
import { LoginForm } from './components/LoginForm'
import { Toast } from './components/Toast'
import { useInspectionsPage } from './hooks/useInspectionsPage'
import type { LoginUser } from './service/login.service'

const sessionKey = 'inspecciones.login.session'

function InspectionsWorkspace({ onLogout }: { onLogout: () => void }) {
  const vm = useInspectionsPage()
  const toast = vm.toast
  const setToast = vm.setToast
  const closeToast = useCallback(() => {
    setToast(null)
  }, [setToast])

  useEffect(() => {
    if (!toast) return

    const timeoutId = window.setTimeout(() => {
      closeToast()
    }, 3600)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [toast, closeToast])

  return (
    <div className="min-h-screen bg-linear-to-br from-red-300 via-white to-sky-200 px-4 py-10 text-slate-700">
      <div className="mx-auto mb-6 flex max-w-6xl items-center justify-between gap-4 rounded-3xl border border-white/70 bg-white/75 px-5 py-4 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.35)] backdrop-blur">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">Sesion activa</p>
          <h1 className="text-2xl font-black text-slate-900 md:text-3xl">Panel de inspecciones</h1>
        </div>
        <button
          onClick={onLogout}
          className="rounded-2xl border border-red-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-red-50"
        >
          Cerrar sesion
        </button>
      </div>

      <div className="mx-auto max-w-6xl">
        <InspectionFilters
          selectedInspection={vm.selectedInspection}
          onInspectionChange={(value) => {
            vm.setLoading(true)
            vm.setSelectedInspection(value)
          }}
          selectedZone={vm.selectedZone}
          onZoneChange={(value) => {
            vm.setLoading(true)
            vm.setSelectedZone(value)
          }}
          searchDate={vm.searchDate}
          onSearchDateChange={(value) => {
            vm.setCurrentPage(1)
            vm.setSearchDate(value)
          }}
          exportStartDate={vm.exportStartDate}
          onExportStartDateChange={vm.setExportStartDate}
          exportEndDate={vm.exportEndDate}
          onExportEndDateChange={vm.setExportEndDate}
          onExportByRange={vm.exportByDateRange}
          onClearFilters={vm.clearDateFilters}
          onClearExportDates={vm.clearExportDates}
        />

        <InspectionTable
          loading={vm.loading}
          filteredData={vm.filteredData}
          paginatedData={vm.paginatedData}
          tableHeaders={vm.tableHeaders}
          getDisplayFields={vm.getDisplayFields}
          prettifyLabel={vm.prettifyLabel}
          onViewDetails={vm.handleViewDetails}
          currentPage={vm.currentPage}
          totalPages={vm.totalPages}
          pageStart={vm.pageStart}
          itemsPerPage={vm.itemsPerPage}
          onPageChange={vm.goToPage}
          getVisiblePages={vm.getVisiblePages}
        />
      </div>

      <InspectionModal
        showModal={vm.showModal}
        selectedInspection={vm.selectedInspection}
        selectedRow={vm.selectedRow}
        onClose={() => vm.setShowModal(false)}
        prettifyLabel={vm.prettifyLabel}
      />

      <Toast toast={toast} onClose={closeToast} />
    </div>
  )
}

function App() {
  const [session, setSession] = useState<LoginUser | null>(() => {
    const rawSession = window.localStorage.getItem(sessionKey)
    if (!rawSession) return null

    try {
      return JSON.parse(rawSession) as LoginUser
    } catch {
      window.localStorage.removeItem(sessionKey)
      return null
    }
  })

  const handleLoginSuccess = (user: LoginUser) => {
    setSession(user)
    window.localStorage.setItem(sessionKey, JSON.stringify(user))
  }

  const handleLogout = () => {
    setSession(null)
    window.localStorage.removeItem(sessionKey)
  }

  if (!session) {
    return <LoginForm onSuccess={handleLoginSuccess} />
  }

  return <InspectionsWorkspace onLogout={handleLogout} />
}

export default App
