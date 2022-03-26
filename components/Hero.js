import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <>
      <section className=" w-full flex items-center justify-center sm:h-screen  md:pt-6 pt-20 px-10 emu relative text-white">
        <div className="absolute top-0 left-0 w-full h-full murgi "></div>
        <Image
          src="https://picsum.photos/1920/1080"
          priority
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="immm"
          alt="hero_alt"
        />
        <div className="sm:w-1/2 w-full text-center z-10">
          <h1 className=" md:text-6xl text-3xl font-bold sm:pb-10 pb-5">
            PUBG - New State
          </h1>
          <h5 className="mb-10 font-light text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            voluptatum delectus sit dolores molestiae laborum excepturi et iure
            temporibus reiciendis!
          </h5>
          <button className="px-10 py-3 bg-green-600 rounded text-white mr-6">
            Give Your Review
          </button>
          <span className="p-5 rounded-full bg-red-400 font-extrabold text-lg mr-2">
            7.5
          </span>
          (36) Reviews
        </div>
      </section>
    </>
  );
}

export default Hero;
