import axios from "axios";
import Head from "next/head";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import BlogPost from "../components/BlogPost";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Result from "../components/Result";
import { update } from "../redux/statusSlice";

export default function Home({ games, token }) {
  const dis = useDispatch();
  if (token.my_hash) {
    dis(update());
  }
  console.log(games);
  const handlelogout = async () => {
    const mydomain = process.env.NEXT_PUBLIC_DOMAIN;
    const respons = await axios.get(`${mydomain}/api/auth/logout`);
    if (respons.data.success === true) {
      router.push("/auth");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: respons.data,
      });
    }
  };

  return (
    <>
      <Head>
        <title>GamerHub ~ Home</title>
        <meta
          name="description"
          content="This is a gaming reviews website where people can share their own preferences about video game. Which game is good and which game isn't worth to buy this site help you to know about it."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navbar />
        {/* <Hero games={games[0]} /> */}
        <button onClick={() => handlelogout()}>Logout</button>
        {/* <Result games={games} /> */}
        <BlogPost />
        <Footer />
      </div>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const cookies = await ctx.req.cookies;
  const mydomain = process.env.NEXT_PUBLIC_DOMAIN;
  const res = await fetch(`${mydomain}/api/all`, {
    method: "GET",
  });

  const data = await res.json();
  return {
    props: {
      games: data,
      token: cookies,
    },
  };
};
