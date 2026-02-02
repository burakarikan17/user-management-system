import { useState, useEffect } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import Stats from "./components/Stats";

function App() {
  // İlk yüklemede localStorage'dan al
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem("users");
    return saved ? JSON.parse(saved) : [];
  });

  const [apiUsers, setApiUsers] = useState(0);
  const [localUsers, setLocalUsers] = useState(0);
  const [loading, setLoading] = useState(false);

  // users değiştiğinde localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Kullanıcı Ekleme (CREATE)
  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  // Kullanıcı Silme (DELETE)
  const handleDeleteUser = (userId) => {
    if (window.confirm("Bu kullanıcıyı silmek istediğinize emin misiniz?")) {
      setUsers(users.filter((user) => user.id !== userId));
    }
  };

  // Kullanıcı Düzenleme (UPDATE)
  const handleEditUser = (user) => {
    const newAd = prompt("Yeni Ad:", user.ad);
    const newSoyad = prompt("Yeni Soyad:", user.soyad);
    const newEmail = prompt("Yeni Email:", user.email);
    const newTelefon = prompt("Yeni Telefon:", user.telefon);
    const newSirket = prompt("Yeni Şirket:", user.sirket);

    if (newAd && newSoyad && newEmail && newTelefon && newSirket) {
      setUsers(
        users.map((u) =>
          u.id === user.id
            ? {
                ...u,
                ad: newAd,
                soyad: newSoyad,
                email: newEmail,
                telefon: newTelefon,
                sirket: newSirket,
              }
            : u,
        ),
      );
    }
  };

  // API'den kullanıcıları çek
  const fetchUsersFromAPI = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();

      // API verilerini bizim formatımıza çevir
      const formattedUsers = data.map((user) => ({
        id: Date.now() + user.id,
        ad: user.name.split(" ")[0],
        soyad: user.name.split(" ")[1] || "",
        email: user.email,
        telefon: user.phone,
        sirket: user.company.name,
      }));

      setApiUsers(formattedUsers.length);
      setUsers([...users, ...formattedUsers]);
      alert(`${formattedUsers.length} kullanıcı API'den eklendi!`);
    } catch (error) {
      alert("API hatası: " + error.message);
    }
    setLoading(false);
  };

  // Lokal ve API kullanıcı sayısını hesapla
  useEffect(() => {
    const localCount = users.filter((u) => u.id < 1000000000000).length;
    const apiCount = users.filter((u) => u.id >= 1000000000000).length;
    setLocalUsers(localCount);
    setApiUsers(apiCount);
  }, [users]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            👤 Kullanıcı Yönetim Sistemi
          </h1>
          <p className="text-gray-600 text-lg">
            Modern ve kullanıcı dostu yönetim paneli
          </p>
        </div>

        {/* Stats */}
        <Stats
          totalUsers={users.length}
          apiUsers={apiUsers}
          localUsers={localUsers}
          onFetchAPI={fetchUsersFromAPI}
          loading={loading}
        />

        {/* Form */}
        <UserForm onAddUser={handleAddUser} />

        {/* List */}
        <UserList
          users={users}
          onDelete={handleDeleteUser}
          onEdit={handleEditUser}
        />

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>❤️ React + Tailwind CSS ile yapıldı</p>
        </div>
      </div>
    </div>
  );
}

export default App;
