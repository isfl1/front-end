


function Aside() {
    const recommendedProfiles = [
      { name: "João Silva", username: "@joao", photo: "https://via.placeholder.com/50" },
      { name: "Ana Clara", username: "@anaclara", photo: "https://via.placeholder.com/50" },
      { name: "Carlos Eduardo", username: "@carlos", photo: "https://via.placeholder.com/50" },
    ];
  
    const news = [
      { title: "Nova atualização no React 18", link: "#", source: "Tech News" },
      { title: "JavaScript continua em alta em 2024", link: "#", source: "Dev Weekly" },
      { title: "Tailwind CSS: dicas avançadas", link: "#", source: "Frontend Blog" },
    ];
  
    return (
      <aside className="w-full sm:w-1/4 space-y-4 p-4">
        {/* Barra de Busca */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
  
        {/* Perfis Recomendados */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Quem seguir</h2>
          <ul className="space-y-3">
            {recommendedProfiles.map((profile, i) => (
              <li key={i} className="flex items-center gap-3">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium text-sm">{profile.name}</p>
                  <p className="text-xs text-gray-500">{profile.username}</p>
                </div>
                <button className="ml-auto text-gray-600 text-sm font-semibold hover:underline">
                  Seguir
                </button>
              </li>
            ))}
          </ul>
        </div>
  
        {/* Notícias */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Notícias</h2>
          <ul className="space-y-3">
            {news.map((item, i) => (
              <li key={i} className="text-sm">
                <a
                  href={item.link}
                  className="text-gray-600 font-medium hover:underline"
                >
                  {item.title}
                </a>
                <p className="text-xs text-gray-500">Fonte: {item.source}</p>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    );
  }
  
  export default Aside;
  