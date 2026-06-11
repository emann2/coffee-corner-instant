import { useAppData } from '../../context/AppDataContext'

const statusOptions = ['Pending', 'Preparing', 'Delivered']

function OrdersTable() {
  const { orders, updateOrderStatus } = useAppData()

  if (orders.length === 0) {
    return (
      <p className="text-[#2C1A0E]/40 text-sm text-center py-10">
        No orders yet.
      </p>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#FAF6F1]">
            <th className="text-left text-[#2C1A0E]/50 text-xs tracking-widest uppercase pb-4 font-bold">Order ID</th>
            <th className="text-left text-[#2C1A0E]/50 text-xs tracking-widest uppercase pb-4 font-bold">Customer</th>
            <th className="text-left text-[#2C1A0E]/50 text-xs tracking-widest uppercase pb-4 font-bold">Items</th>
            <th className="text-left text-[#2C1A0E]/50 text-xs tracking-widest uppercase pb-4 font-bold">Total</th>
            <th className="text-left text-[#2C1A0E]/50 text-xs tracking-widest uppercase pb-4 font-bold">Date</th>
            <th className="text-left text-[#2C1A0E]/50 text-xs tracking-widest uppercase pb-4 font-bold">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#FAF6F1]">
          {[...orders].reverse().map((order) => (
            <tr key={order.id}>
              <td className="py-4 text-[#3E1F0D] font-bold">#{order.id}</td>
              <td className="py-4">
                <p className="text-[#2C1A0E] font-bold">{order.userName}</p>
                <p className="text-[#2C1A0E]/40 text-xs">{order.userEmail}</p>
              </td>
              <td className="py-4">
                <div className="flex flex-col gap-1">
                  {order.items.map((item, i) => (
                    <span key={i} className="text-[#2C1A0E]/60 text-xs">
                      {item.name} x{item.quantity}
                    </span>
                  ))}
                </div>
              </td>
              <td className="py-4 text-[#D4A96A] font-bold">${order.total}</td>
              <td className="py-4 text-[#2C1A0E]/50">{order.createdAt}</td>
              <td className="py-4">
                <select
                  value={order.status}
                  onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                  className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase outline-none cursor-pointer transition-all duration-300 ${
                    order.status === 'Delivered'
                      ? 'bg-green-100 text-green-700'
                      : order.status === 'Preparing'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-[#FAF6F1] text-[#8B5E3C]'
                  }`}
                >
                  {statusOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OrdersTable