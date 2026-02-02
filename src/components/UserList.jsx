import UserCard from "./UserCard";

function UserList({ users, onDelete, onEdit }) {
  if (users.length === 0) {
    return (
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 rounded-2xl shadow-lg text-center border-2 border-dashed border-gray-300">
        <div className="text-6xl mb-4">📝</div>
        <p className="text-gray-600 text-xl font-semibold">
          Henüz kullanıcı eklenmedi
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Yukarıdaki formu kullanarak ilk kullanıcınızı ekleyin!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <span className="text-3xl">👥</span>
          Kullanıcı Listesi
        </h2>
        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-bold">
          {users.length} Kullanıcı
        </span>
      </div>

      <div className="grid gap-4">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default UserList;
