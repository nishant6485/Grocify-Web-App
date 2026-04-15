import React from "react";
import Button from "../Button/Button";
import Freshfruits from "../../assets/images/fresh-fruits.png";

const Discount = () => {
  return (
    <>
      <section
        className="bg-zinc-100 bg-no-repeat bg-right bg-contain w-full h-full object-contain"
        style={{ backgroundImage: `url(${Freshfruits})` }}
      >
        <div className="md:bg-transparent bg-zinc-100 md:flex-row flex-col py-10 max-w-[1400px] mx-auto px-10 flex">
          <span className="md:text-9xl text-5xl text-orange-500 font-bold transform md:-rotate-90 h-fit md:self-center">
            20%
          </span>
          <div className="max-w-[700px]">
            <h3 className="md:text-7xl text-4xl text-zinc-800 font-bold">
              first order discount
            </h3>
            <p className="text-zinc-600 my-6">
              Enjoy an exclusive first order discount on our grocery website!
              Shop fresh essentials and save big on your first purchase. Fast
              delivery and quality guaranteed.
            </p>
            <Button content="Get Discount" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Discount;
