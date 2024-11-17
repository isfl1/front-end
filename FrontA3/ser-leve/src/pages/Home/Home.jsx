import Main from "../../components/Main";
import Nav from "../../components/Nav";
import Sidebar from "../../components/Sidebar";  

function Home() {
  return (
    <div className="bg-[#dcd9e1] min-h-screen pb-10">
      <Nav />
      <div className="grid md:flex gap-6 max-w-5xl p-4 mx-auto">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default Home;
