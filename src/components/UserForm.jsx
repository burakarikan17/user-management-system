import { useState } from "react";

function UserForm({ onAddUser }) {
  const [formData, setFormData] = useState({
    ad: "",
    soyad: "",
    email: "",
    telefon: "",
    sirket: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Boş alan kontrolü
    if (
      !formData.ad ||
      !formData.soyad ||
      !formData.email ||
      !formData.telefon ||
      !formData.sirket
    ) {
      alert("Lütfen tüm alanları doldurun!");
      return;
    }

    // Kullanıcıyı ekle
    onAddUser({
      id: Date.now(),
      ...formData,
    });

    // Formu temizle
    setFormData({
      ad: "",
      soyad: "",
      email: "", // ← EKLE
      telefon: "",
      sirket: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

return (
  <div className="bg-white p-8 rounded-2xl shadow-xl mb-8 border border-gray-100">
    <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-2">
      <span className="text-3xl">➕</span>
      Yeni Kullanıcı Ekle
    </h2>

    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Ad
          </label>
          <input
            type="text"
            name="ad"
            value={formData.ad}
            onChange={handleChange}
            placeholder="Adınızı girin"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Soyad
          </label>
          <input
            type="text"
            name="soyad"
            value={formData.soyad}
            onChange={handleChange}
            placeholder="Soyadınızı girin"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="ornek@email.com"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Telefon
          </label>
          <input
            type="tel"
            name="telefon"
            value={formData.telefon}
            onChange={handleChange}
            placeholder="0555 555 55 55"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Şirket
          </label>
          <input
            type="text"
            name="sirket"
            value={formData.sirket}
            onChange={handleChange}
            placeholder="Şirket adı"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
      >
        ✨ Kullanıcı Ekle
      </button>
    </form>
  </div>
);
}

export default UserForm;
