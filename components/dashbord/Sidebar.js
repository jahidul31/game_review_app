import React from "react";
import Link from "next/link";
import Head from "next/head";

import dashbordlink from "../../utility/setting";

function Sidebar({ data }) {
  const links = dashbordlink.dashbordlink;

  return (
    <>
      <Head>
        <title>GamerHub ~ Dashbord</title>
      </Head>
      <div className="w-full relative">
        <div className="sm:w-64 bg-gray-200 sm:h-screen sm:fixed w-full left-0 top-0 p-6 py-6">
          <div className="flex flex-col  h-full  justify-between">
            <div className="mb-12">
              <a className="flex title-font font-medium items-center text-gray-900 sm:mb-4 md:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
                  viewBox="0 0 20 20"
                  fill="white"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-3 text-xl tracking-widest">
                  Gamer<span className="text-green-600">Hub</span>
                </span>
              </a>
            </div>
            <div className="flex-1  flex flex-col">
              {links.map((link) => {
                return (
                  <Link href={link.link} key={link.id}>
                    <a className="p-2  hover:text-gray-900 tracking-wider font-bold">
                      {link.text}
                    </a>
                  </Link>
                );
              })}
            </div>
            <div className="">logout</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
