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
      <nav className="bg-orange-600 flex justify-around items-center p-2">
        <h1 className="font-bold text-green-800 text-2xl">SerLeve</h1>
        <input
          type="text"
          className="rounded-full bg-white py-1 px-4 md:w-96"
          placeholder="Search"
        />
          <Link to={userDestination()} className=" font-bold text-green-800 bg-orange-600 py-2 px-3 rounded-full hover:bg-orange-700">Login</Link>
      
      </nav>
    );
  }
  
  export default Nav;
