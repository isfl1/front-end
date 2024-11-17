import Nav from '../../components/nav';
import Sidebar from '../../components/SideBar';
import { useState } from 'react';

const Settings = () => {
  const [profileData, setProfileData] = useState({
    name: "Isadora Ferreira",
    email: "isa@example.com",
    bio: "Apaixonada por tecnologia e gastronomia!",
    profilePicture: "/default-profile.png", // Caminho para a imagem padrão
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Criar uma URL temporária para exibir a imagem carregada
      const imageUrl = URL.createObjectURL(file);
      setProfileData({ ...profileData, profilePicture: imageUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Perfil atualizado com sucesso!");
    // Aqui você pode adicionar lógica para salvar as alterações no backend.
  };

  return (
    <div className="bg-[#dcd9e1] min-h-screen pb-10">
      {/* Barra de navegação */}
      <Nav />

      <div className="grid md:flex gap-6 max-w-5xl p-4 mx-auto">
        {/* Barra lateral */}
        <Sidebar />

        {/* Conteúdo principal - Configurações */}
        <div className="flex-1 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-orange-600">Configurações</h2>
          <div>
            <h3 className="text-lg font-semibold mb-4">Editar Perfil</h3>
            
            {/* Mudar Foto de Perfil */}
            <div className="mb-6 text-center">
              <div className="relative inline-block">
                <img
                  src={profileData.profilePicture}
                  alt="Foto de Perfil"
                  className="w-32 h-32 rounded-full object-cover border-4 border-orange-600"
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="profilePicture"
                  className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 cursor-pointer"
                >
                  Mudar Foto
                </label>
                <input
                  type="file"
                  id="profilePicture"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            </div>

            {/* Formulário de Edição */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-bold text-gray-700">
                  Nome:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={profileData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-bold text-gray-700">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="bio" className="block font-bold text-gray-700">
                  Biografia:
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  value={profileData.bio}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  rows="3"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
              >
                Salvar Alterações
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

