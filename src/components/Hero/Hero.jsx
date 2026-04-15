import React from "react";
import Grocery from "../../assets/images/grocery.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <>
      <section>
        <div className="min-h-screen max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col justify-center items-center md:pt-25 pt-35">
          <div className="flex-1">
            <span className="bg-orange-100 text-orange-500 text-xl rounded-full px-5 py-2">
              export best quality...
            </span>
            <h1 className="md:text-7xl/20 text-5xl/14 mt-4 font-bold">
              tasty organic <span className="text-orange-500">fruits</span> &{" "}
              <span className="text-orange-500">veggies</span>
              <br /> in your city
            </h1>
            <p className="text-zinc-600 md:text-lg text-md max-w-[530px] mt-5 mb-10">
              Bred for a high content of beneficial substances. Our products are
              all fresh and healthy.
            </p>
            <Button content="Shop Now" />
          </div>

          <div className="flex-1">
            <img src={Grocery} alt="Hero Image"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;




// import React from "react";
// import Grocery from "../../assets/images/grocery.png";
// import Button from "../Button/Button";

// const Hero = () => {
//   return (
//     <>
//       <section>
//         <div className="w-full min-h-screen max-w-[1400px] mx-auto md:px-10 px-4 flex md:flex-row flex-col justify-between gap-12 items-center pt-32 md:pt-24">
//           <div className="flex-1 text-center md:text-left">
//             <span className="bg-orange-100 text-orange-500 text-xl rounded-full px-5 py-2">
//               export best quality...
//             </span>
//             <h1 className="text-4xl md:text-6xl leading-tight md:leading-[1.2] mt-4 font-bold">
//               tasty organic <span className="text-orange-500">fruits</span> &{" "}
//               <span className="text-orange-500">veggies</span>
//               <br /> in your city
//             </h1>
//             <p className="text-zinc-600 md:text-lg text-md max-w-full md:max-w-[530px] mx-auto md:mx-0 mt-5 mb-10">
//               Bred for a high content of beneficial substances. Our products are
//               all fresh and healthy.
//             </p>
//             <Button content="Shop Now" />
//           </div>

//           <div className="flex-1 flex justify-center mt-10 md:mt-0">
//             <img src={Grocery} alt="Hero Image" className="w-[280px] md:w-[450px] object-contain"/>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Hero;
