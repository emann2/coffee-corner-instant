import Sidebar from '../../components/dashboard/Sidebar'
import UsersTable from '../../components/dashboard/UsersTable'
import { useAppData } from '../../context/AppDataContext'

function DashboardUsers() {
  const { users } = useAppData()
  return (
    <div className="min-h-screen bg-[#FAF6F1] flex">
      <Sidebar />
      <main className="ml-64 flex-1 p-10">
        <div className="mb-10">
          <h1 className="text-[#2C1A0E] text-3xl font-bold">Users</h1>
          <p className="text-[#2C1A0E]/40 text-sm mt-1">{users.length} registered users</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <UsersTable />
        </div>
      </main>
    </div>
  )
}

export default DashboardUsers