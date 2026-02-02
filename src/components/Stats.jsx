function Stats({ totalUsers, apiUsers, localUsers, onFetchAPI, loading }) {
  return (
    <div className="space-y-4 mb-8">
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-8 rounded-2xl shadow-2xl text-white transform hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold opacity-90 uppercase tracking-wide">
              Toplam Kullanıcı
            </h2>
            <p className="text-6xl font-black mt-3 drop-shadow-lg">
              {totalUsers}
            </p>
            <p className="text-sm opacity-75 mt-2">
              👤 Kayıtlı kullanıcı sayısı
            </p>
          </div>
          <div className="text-8xl opacity-30 animate-pulse">👥</div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/20">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold">{totalUsers}</p>
              <p className="text-xs opacity-75 mt-1">Toplam</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{apiUsers}</p>
              <p className="text-xs opacity-75 mt-1">API'den</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{localUsers}</p>
              <p className="text-xs opacity-75 mt-1">Lokal</p>
            </div>
          </div>
        </div>
      </div>

      {/* API Butonu */}
      <button
        onClick={onFetchAPI}
        disabled={loading}
        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-6 rounded-2xl hover:from-green-600 hover:to-emerald-700 transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "⏳ Yükleniyor..." : "🚀 API'den 10 Kullanıcı Çek"}
      </button>
    </div>
  );
}

export default Stats;
