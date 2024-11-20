import {Link, useLocation} from "react-router-dom";



function Nav() {
    const userLocation = useLocation();

    const userDestination = () => {
        if (userLocation.pathname === "/Home") {
            return "/Login";
        }else{
            return "/Home";
        }
    }

    return (
      <nav className="bg-green-500 flex justify-start gap-5 p-2">
        <img src="Logotipo marca nutricionista veganismo saúde maçã verde_processed (1).png" alt="Logo" className="h-10 object-contain " />
        <h1 className="font-bold text-gray-800 text-2xl">SerLeve</h1>
        
          <Link to={userDestination()} className="ml-auto flex  font-bold text-gray-800 bg-green-500 py-2 px-3 rounded-full hover:bg-gray-700">Login</Link>

      </nav>
    );
  }
  
  export default Nav;
