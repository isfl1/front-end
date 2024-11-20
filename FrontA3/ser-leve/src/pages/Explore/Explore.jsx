import Nav from '../../components/nav';
import Sidebar from '../../components/SideBar';

import React from "react";

function Explore() {
  const recipes = [
    {
      id: 1,
      title: "Bolo de Chocolate",
      description: "Um bolo delicioso e fácil de fazer.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Torta de Limão",
      description: "Refrescante e perfeita para sobremesas.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Pizza Margherita",
      description: "Clássica e irresistível.",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="bg-[#dcd9e1] h-screen pb-10">
      <Nav />
      <div className=" grid md:flex gap-6 max-w-8xl h-screen p-4 "> 
        <Sidebar />
       
        <div className="p-6 flex-1">
          <h1 className="text-2xl font-bold mb-4 text-green-600">Explore Receitas</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {recipes.map((recipe) => (
              <div
                key={recipe.id}
                className="border rounded-lg shadow hover:shadow-lg transition duration-200"
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-32 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold">{recipe.title}</h2>
                  <p className="text-sm text-gray-600">{recipe.description}</p>
                 
                </div>
              </div>
          
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
