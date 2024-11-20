import Nav from '../../components/nav';
import Sidebar from '../../components/SideBar';
import Aside from '../../components/Aside';
const Notifications = () => {
 
  const notifications = [
    { 
      id: 1, 
      message: "João curtiu sua receita de bolo!", 
      time: "2 horas atrás", 
      profileImage: "https://via.placeholder.com/50" 
    },
    { 
      id: 2, 
      message: "Maria comentou: 'Adorei!'", 
      time: "5 horas atrás", 
      profileImage: "https://via.placeholder.com/50" 
    },
    { 
      id: 3, 
      message: "Seu perfil foi atualizado com sucesso.", 
      time: "1 dia atrás", 
      profileImage: "https://via.placeholder.com/50" 
    },
  ];

  return (
    <div className="bg-[#dcd9e1] min-h-screen pb-10">
      <Nav />

      <div className="grid md:flex gap-6 max-w-7xl p-4 ">
        {/* Barra lateral */}
        <Sidebar />
   



        {/* Conteúdo principal - Notificações */}
        <div className="flex-1 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-green-600">Notificações</h2>
          <ul>
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className="flex items-center border-b border-gray-200 py-4 last:border-none"
              >
                <img
                  src={notification.profileImage}
                  alt="Imagem de perfil"
                  className="w-10 h-10 rounded-full mr-4"
                />



                {/* Mensagem e tempo */}
                <div>
                  <p className="text-gray-800">{notification.message}</p>
                  <p className="text-sm text-gray-500">{notification.time}</p>
                
               
                </div>
              
              </li>

              
             
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
