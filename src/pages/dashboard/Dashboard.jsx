import Sidebar from '../../components/dashboard/Sidebar'
import OrdersTable from '../../components/dashboard/OrdersTable'
import { useAppData } from '../../context/AppDataContext'

function StatCard({ label, value, color }) {
  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-2 shadow-sm">
      <p className="text-[#2C1A0E]/50 text-xs tracking-widest uppercase font-bold">{label}</p>
      <p className={`text-4xl font-bold ${color}`}>{value}</p>
    </div>
  )
}
function Dashboard() {
  const { users, products, orders } = useAppData()
  const totalRevenue = orders.reduce((acc, o) => acc + parseFloat(o.total), 0)

  return (
    <div className="min-h-screen bg-[#FAF6F1] flex">
      <Sidebar />
      <main className="ml-64 flex-1 p-10">
        <div className="mb-10">
          <h1 className="text-[#2C1A0E] text-3xl font-bold">Overview</h1>
          <p className="text-[#2C1A0E]/40 text-sm mt-1">Welcome back, Admin</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard label="Total Users" value={users.length} color="text-[#3E1F0D]" />
          <StatCard label="Total Products" value={products.length} color="text-[#D4A96A]" />
          <StatCard label="Total Orders" value={orders.length} color="text-[#3E1F0D]" />
          <StatCard label="Total Revenue" value={`$${totalRevenue.toFixed(2)}`} color="text-[#D4A96A]" />
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-[#2C1A0E] text-lg font-bold tracking-wider uppercase mb-6">
            Recent Orders
          </h2>
          <OrdersTable />
        </div>
      </main>
    </div>
  )
}

export default Dashboard