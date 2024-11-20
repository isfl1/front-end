import Main from "../../components/Main";
import Nav from "../../components/Nav";
import Sidebar from "../../components/Sidebar";  
import Aside from "../../components/Aside"
function Home() {

  return (
    <div  className="bg-gray-100">
      <Nav />
      <div className=" md:flex gap-6 max-w-8xl h-screen p-4 ">
        <Sidebar />      
        <Main />
        <Aside />
     
      </div>
    </div>
  );
}

export default Home;
