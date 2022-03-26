import axios from "axios";
import Link from "next/link";
import React from "react";
import navlink from "../utility/setting";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../redux/statusSlice";

function Navbar() {
  const links = navlink.navlink;
  const router = useRouter();
  const dis = useDispatch();

  const status = useSelector((state) => state.status.status);

  const handlelogout = async () => {
    const mydomain = process.env.NEXT_PUBLIC_DOMAIN;
    const respons = await axios.post(`${mydomain}/api/auth/logout`);
    if (respons.data.success === true) {
      dis(logout());
      router.push("/auth/login");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong",
      });
    }
  };
  return (
    <>
      <header className="text-gray-600 body-font border-b fixed w-full z-50 bg-white border-green-600">
        <div className="container mx-auto flex flex-wrap sm:p-5 p-4 sm:flex-col md:flex-row items-center justify-between">
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

          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center hidden sm:block">
            {links.map((link) => (
              <Link href={link.link} key={link.id}>
                <a className="mr-5 hover:text-gray-900 tracking-wider font-bold">
                  {link.text}
                </a>
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-center">
            {status === "login" ? (
              <button
                className="inline-flex items-center bg-green-600 text-white border-0 py-2 px-4 font-bold focus:outline-none hover:bg-gray-100 hover:text-gray-500 rounded text-base sm:mt-4 md:mt-0"
                onClick={() => handlelogout()}
              >
                Log out
              </button>
            ) : (
              <>
                <Link href="/auth/login" passHref>
                  <button className="inline-flex items-center  py-2 px-4 font-bold rounded text-base sm:mt-4 md:mt-0 mr-4 hover:bg-gray-100 hover:text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Login
                  </button>
                </Link>
                <Link href="/auth/register" passHref>
                  <button className="inline-flex items-center bg-green-600 text-white border-0 py-2 px-4 font-bold focus:outline-none hover:bg-gray-100 hover:text-gray-500 rounded text-base sm:mt-4 md:mt-0">
                    Register
                  </button>
                </Link>{" "}
              </>
            )}
          </div>
        </div>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center sm:hidden bg-green-600 p-2 text-white shadow-md">
          {links.map((link) => (
            <Link href={link.link} key={link.id}>
              <a className="mr-5 hover:text-gray-900 tracking-wider font-bold">
                {link.text}
              </a>
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}

export default Navbar;
