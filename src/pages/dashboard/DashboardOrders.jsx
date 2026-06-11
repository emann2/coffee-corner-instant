import Sidebar from '../../components/dashboard/Sidebar'
import OrdersTable from '../../components/dashboard/OrdersTable'
import { useAppData } from '../../context/AppDataContext'

function DashboardOrders() {
  const { orders } = useAppData()
  return (
    <div className="min-h-screen bg-[#FAF6F1] flex">
      <Sidebar />
      <main className="ml-64 flex-1 p-10">
        <div className="mb-10">
          <h1 className="text-[#2C1A0E] text-3xl font-bold">Orders</h1>
          <p className="text-[#2C1A0E]/40 text-sm mt-1">{orders.length} total orders</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <OrdersTable />
        </div>
      </main>
    </div>
  )
}

export default DashboardOrders