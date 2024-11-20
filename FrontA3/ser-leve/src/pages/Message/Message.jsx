import Nav from '../../components/nav';
import Sidebar from '../../components/SideBar';

const Messages = () => {
  // Lista simulada de mensagens
  const messages = [
    {
      id: 1,
      sender: "João",
      text: "Oi, tudo bem? Quando vai postar uma nova receita?",
      time: "2 horas atrás",
      profileImage: "https://via.placeholder.com/50", // Exemplo de URL
    },
    {
      id: 2,
      sender: "Maria",
      text: "Adorei a última receita, ficou incrível!",
      time: "5 horas atrás",
      profileImage: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      sender: "Pedro",
      text: "Você pode me ajudar com uma dica para o pão caseiro?",
      time: "1 dia atrás",
      profileImage: "https://via.placeholder.com/50",
    },
  ];

  return (
    <div className="bg-[#dcd9e1] min-h-screen pb-10">
      {/* Barra de navegação */}
      <Nav />

      <div className="grid md:flex gap-6 max-w-7xl p-4 ">
        {/* Barra lateral */}
        <Sidebar />

        {/* Conteúdo principal - Mensagens */}
        <div className="flex-1 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-green-600">Mensagens</h2>
          <ul>
            {messages.map((message) => (
              <li
                key={message.id}
                className="flex items-center border-b border-gray-200 py-4 last:border-none"
              >
                {/* Imagem de perfil */}
                <img
                  src={message.profileImage}
                  alt="Imagem de perfil"
                  className="w-10 h-10 rounded-full mr-4"
                />
                {/* Texto da mensagem */}
                <div>
                  <p className="text-gray-800 font-bold">{message.sender}</p>
                  <p className="text-gray-800">{message.text}</p>
                  <p className="text-sm text-gray-500">{message.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Messages;
