import Sidebar from '../../components/dashboard/Sidebar'
import ProductsTable from '../../components/dashboard/ProductsTable'
import { useAppData } from '../../context/AppDataContext'

function DashboardProducts() {
  const { products } = useAppData()
  return (
    <div className="min-h-screen bg-[#FAF6F1] flex">
      <Sidebar />
      <main className="ml-64 flex-1 p-10">
        <div className="mb-10">
          <h1 className="text-[#2C1A0E] text-3xl font-bold">Products</h1>
          <p className="text-[#2C1A0E]/40 text-sm mt-1">{products.length} products available</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <ProductsTable />
        </div>

      </main>
    </div>
  )
}

export default DashboardProducts