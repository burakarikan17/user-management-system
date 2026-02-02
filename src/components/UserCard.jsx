function UserCard({ user, onDelete, onEdit }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200 transform hover:-translate-y-1">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              {user.ad[0]}
              {user.soyad[0]}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                {user.ad} {user.soyad}
              </h3>
              <p className="text-sm text-gray-500">{user.sirket}</p>
            </div>
          </div>

          <div className="space-y-2 ml-14">
            <p className="text-gray-700 flex items-center gap-2">
              <span className="text-blue-500 font-semibold">✉️</span>
              {user.email}
            </p>
            <p className="text-gray-700 flex items-center gap-2">
              <span className="text-green-500 font-semibold">📞</span>
              {user.telefon}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <button
            onClick={() => onEdit(user)}
            className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-2 rounded-lg hover:from-amber-500 hover:to-orange-600 transition-all shadow-md hover:shadow-lg font-semibold text-sm"
          >
            ✏️ Düzenle
          </button>
          <button
            onClick={() => onDelete(user.id)}
            className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-pink-700 transition-all shadow-md hover:shadow-lg font-semibold text-sm"
          >
            🗑️ Sil
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
