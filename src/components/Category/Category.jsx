import React from "react";
import Heading from "../Heading/Heading";
import { Link } from "react-router-dom";
import FruitsCat from "../../assets/images/fruits-and-veggies.png";
import SeeFoodCat from "../../assets/images/meat-and-seafood.png";
import DairyCat from "../../assets/images/dairy-and-eggs.png";

const category = [
  {
    id: 1,
    title: "fruits & veggies",
    description:
      "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: FruitsCat,
    path:"/fruits"
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: DairyCat,
    path:"/dairy"
  },
  {
    id: 3,
    title: "Meat & SeaFood",
    description:
      "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: SeeFoodCat,
    path:"/seafood"
  },
];

const Category = (props) => {
  const renderCards = category.map((card) => {
    return (
      // card
      <div className="flex-1 basis-[300px]" key={card.id}>
        {/* card image */}
        <div className="w-full min-h-[30vh] relative -mb-10">
          <img src={card.image} className="absolute bottom-0" />
        </div>

        {/* card content */}
        <div className="bg-zinc-100 pt-17 p-8 rounded-xl">
          <h3 className="text-3xl font-bold text-zinc-800">{card.title}</h3>
          <p className="text-zinc-600 mt-3 mb-9">{card.description}</p>
          <Link
            to={card.path}
            className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 cursor-pointer rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300"
          >
            see all
          </Link>
        </div>
      </div>
    );
  });

  return (
    <>
      <section>
        <div className="max-w-[1400px] mx-auto px-10 py-2">
          <Heading highlight="shop" heading="by category" />

          {/* category cards */}
          <div className="flex flex-wrap gap-10 md:mt-15">{renderCards}</div>
        </div>
      </section>
    </>
  );
};

export default Category;
