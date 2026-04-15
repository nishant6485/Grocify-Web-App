import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from "../../assets/images/basket-full-vegetables.png";

const values = [
  {
    id: 1,
    title: "trust",
    description:
      "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    description:
      "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% Organic",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <FaSeedling />,
  },
];

const Values = () => {
  // map values
  const leftValues = values.slice(0, 2).map((items) => {
    return (
      <div
        key={items.id}
        className="flex items-center gap-7 md:flex-row-reverse"
      >
        <div>
          <span className="flex w-15 h-15 rounded-full justify-center items-center text-white text-3xl bg-gradient-to-b from-orange-400 to-orange-500">
            {items.icon}
          </span>
        </div>
        <div className="md:text-right">
          <h3 className="text-3xl font-bold text-zinc-800">{items.title}</h3>
          <p className="text-zinc-600 mt-2">{items.description}</p>
        </div>
      </div>
    );
  });

  const rightValues = values.slice(2).map((items) => {
    return (
      <div key={items.id} className="flex gap-7 items-center">
        <div>
          <span className="flex w-15 h-15 rounded-full justify-center items-center text-white text-3xl bg-gradient-to-b from-orange-400 to-orange-500">
            {items.icon}
          </span>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-zinc-800">{items.title}</h3>
          <p className="text-zinc-600 mt-2">{items.description}</p>
        </div>
      </div>
    );
  });

  return (
    <section className="max-w-[1400px] mx-auto px-10 py-20">
      <Heading highlight="our" heading="values" />

      <div className="flex md:gap-5 gap-15 mt-15 md:flex-row flex-col">
        {/* left values */}
        <div className="md:min-h-100 gap-15 flex flex-col justify-between">
          {leftValues}
        </div>

        {/* center image */}
        <div className="md:flex w-1/2 hidden">
          <img src={Basket} alt="basket" />
        </div>

        {/* right values*/}
        <div className="md:min-h-100 gap-15 flex flex-col justify-between">
          {rightValues}
        </div>
      </div>
    </section>
  );
};

export default Values;
