import { useState } from 'react'
import { useAppData } from '../../context/AppDataContext'

function ProductsTable() {
  const { products, deleteProduct, editProduct } = useAppData()
  const [editingId, setEditingId] = useState(null)
  const [editForm, setEditForm] = useState({})

  function startEdit(product) {
    setEditingId(product.id)
    setEditForm({
      name: product.name,
      price: product.price,
      description: product.description,
    })
  }

  function saveEdit(id) {
    editProduct(id, {
      name: editForm.name,
      price: parseFloat(editForm.price),
      description: editForm.description,
    })
    setEditingId(null)
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#FAF6F1]">
            <th className="text-left text-[#2C1A0E]/50 text-xs tracking-widest uppercase pb-4 font-bold">Image</th>
            <th className="text-left text-[#2C1A0E]/50 text-xs tracking-widest uppercase pb-4 font-bold">Name</th>
            <th className="text-left text-[#2C1A0E]/50 text-xs tracking-widest uppercase pb-4 font-bold">Category</th>
            <th className="text-left text-[#2C1A0E]/50 text-xs tracking-widest uppercase pb-4 font-bold">Price</th>
            <th className="text-left text-[#2C1A0E]/50 text-xs tracking-widest uppercase pb-4 font-bold">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#FAF6F1]">
          {products.map((product) => (
            <tr key={product.id}>

              {/* Image */}
              <td className="py-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 object-cover rounded-xl"
                />
              </td>

              {/* Name */}
              <td className="py-4">
                {editingId === product.id ? (
                  <input
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    className="border border-[#D4A96A] rounded-lg px-2 py-1 text-sm text-[#2C1A0E] outline-none w-36"
                  />
                ) : (
                  <span className="text-[#3E1F0D] font-bold">{product.name}</span>
                )}
              </td>

              {/* Category */}
              <td className="py-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#FAF6F1] text-[#8B5E3C] capitalize">
                  {product.category.replace('-', ' ')}
                </span>
              </td>

              {/* Price */}
              <td className="py-4">
                {editingId === product.id ? (
                  <input
                    type="number"
                    value={editForm.price}
                    onChange={(e) => setEditForm({ ...editForm, price: e.target.value })}
                    className="border border-[#D4A96A] rounded-lg px-2 py-1 text-sm text-[#2C1A0E] outline-none w-20"
                  />
                ) : (
                  <span className="text-[#D4A96A] font-bold">${product.price.toFixed(2)}</span>
                )}
              </td>

              {/* Actions */}
              <td className="py-4">
                <div className="flex items-center gap-3">
                  {editingId === product.id ? (
                    <>
                      <button
                        onClick={() => saveEdit(product.id)}
                        className="text-green-600 hover:text-green-800 text-xs font-bold tracking-wider uppercase transition-colors duration-300"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="text-[#2C1A0E]/40 hover:text-[#2C1A0E] text-xs font-bold tracking-wider uppercase transition-colors duration-300"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => startEdit(product)}
                        className="text-[#D4A96A] hover:text-[#8B5E3C] text-xs font-bold tracking-wider uppercase transition-colors duration-300"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="text-red-400 hover:text-red-600 text-xs font-bold tracking-wider uppercase transition-colors duration-300"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductsTable