import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Swal from "sweetalert2";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleClick = async () => {
    const mydomain = process.env.NEXT_PUBLIC_DOMAIN;
    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email empty",
      });
    } else if (!password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "password empty",
      });
    } else if (!repassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "retype password empty",
      });
    } else if (password !== repassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "password not same",
      });
    } else {
      try {
        const respons = await axios.post(`${mydomain}/api/auth/register`, {
          email,
          password,
        });
        if (respons.data.warning === true) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Alredy have an account",
          });
        } else if (respons.data.success === true) {
          router.push("/dashbord");
        }
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Someting went worng!",
        });
      }
    }
  };

  return (
    <>
      <Head>
        <title>GamerHub ~ Register</title>
        <meta
          name="description"
          content="This is a register page of gamerhub their you need to enter your username and password to login."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="text-gray-600 body-font pt-10">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <Image src="/img/signup.svg" width={1920} height={1080} />
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Resister
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="password"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="*******"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="password"
                className="leading-7 text-sm text-gray-600"
              >
                Re-Type Password
              </label>
              <input
                type="password"
                id="re_password"
                placeholder="*******"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setRepassword(e.target.value)}
              />
            </div>
            <button
              className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
              onClick={handleClick}
            >
              Register
            </button>
            <p className="text-xs text-gray-500 mt-3">
              <Link href="/auth">Already have an account .</Link>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Register;
