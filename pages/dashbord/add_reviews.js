import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Addrevies() {
  return (
    <>
      <div className="flex gap-40 p-20">
        <div className="flex flex-col justify-center items-center ">
          <Image src="/img/login.svg" width={1280} height={720} alt="img" />
          <h1 className="text-2xl font-extrabold tracking-wider text-gray-900 my-4 uppercase">
            God of war
          </h1>
          <div className="text-sm text-gray-600 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            impedit temporibus soluta dolorem eveniet, consequuntur minus
            provident quas unde mollitia. Enim quae libero impedit officia
            tenetur officiis eveniet blanditiis. Blanditiis.
          </div>
        </div>
        <div className="">
          <Link href="/" className="text-sm text-center w-full">
            Close Now
          </Link>
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Add your reviews
          </h2>
          <div className="relative mb-4">
            <label
              htmlFor="reviews"
              className="leading-7 text-sm text-gray-600"
            >
              your comments
            </label>
            <textarea
              type="text"
              id="reviews"
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <button className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg mb-6">
            Add now
          </button>
          <div className="w-full flex gap-8 justify-center items-center shadow-lg p-4 border-2 border-gray-100">
            <div className="bg-green-600 rounded-full font-extrabold text-white p-2 uppercase">
              Em
            </div>
            <div className="">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="w-full flex gap-8 justify-center items-center shadow-lg p-4 mt-6 border-gray-100 border-2 rounded-md">
            <div className="bg-green-600 rounded-full font-extrabold text-white p-2 uppercase">
              Em
            </div>
            <div className="">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laboriosam accusantium distinctio explicabo expedita vitae
                placeat sequi eius a cumque nesciunt!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
