import { useAppData } from '../../context/AppDataContext'

function UsersTable() {
  const { users, deleteUser } = useAppData()

  if (users.length === 0) {
    return (
      <p className="text-[#2C1A0E]/40 text-sm text-center py-10">
        No users registered yet.
      </p>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#FAF6F1]">
            <th className="text-left text-[#2C1A0E]/50 text-xs tracking-widest uppercase pb-4 font-bold">Name</th>
            <th className="text-left text-[#2C1A0E]/50 text-xs tracking-widest uppercase pb-4 font-bold">Email</th>
            <th className="text-left text-[#2C1A0E]/50 text-xs tracking-widest uppercase pb-4 font-bold">Role</th>
            <th className="text-left text-[#2C1A0E]/50 text-xs tracking-widest uppercase pb-4 font-bold">Joined</th>
            <th className="text-left text-[#2C1A0E]/50 text-xs tracking-widest uppercase pb-4 font-bold">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#FAF6F1]">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-4 text-[#3E1F0D] font-bold">{user.name}</td>
              <td className="py-4 text-[#2C1A0E]/70">{user.email}</td>
              <td className="py-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#FAF6F1] text-[#8B5E3C]">
                  {user.role}
                </span>
              </td>
              <td className="py-4 text-[#2C1A0E]/50">{user.joinedAt}</td>
              <td className="py-4">
                <button
                  onClick={() => deleteUser(user.id)}
                  className="text-red-400 hover:text-red-600 text-xs font-bold tracking-wider uppercase transition-colors duration-300"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UsersTable