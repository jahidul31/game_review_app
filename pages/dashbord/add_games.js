import Image from "next/image";
import React, { useEffect } from "react";
import Sidebar from "../../components/dashbord/Sidebar";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { mystorage } from "../../firebase/firebase";
import axios from "axios";
import { useRouter } from "next/router";
import { decode } from "jsonwebtoken";

function Addgames({ token }) {
  const router = useRouter();
  const user = decode(token.my_hash).email;
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [fileurl, setFileurl] = useState("");
  const [prog, setProg] = useState(0);
  const mydomain = process.env.NEXT_PUBLIC_DOMAIN;

  useEffect(
    (name, desc, fileurl, user) => {
      if (name || desc || fileurl) {
        postGame(name, desc, user, fileurl);
      }
    },
    [fileurl]
  );

  const postGame = async (name, desc, user, fileurl) => {
    try {
      const newgame = {
        email: user,
        gam: {
          title: name,
          dis: desc,
          thum: fileurl,
        },
      };
      const respons = await axios.post(`${mydomain}/api/add_games`, newgame);

      if (respons.data.success === true) {
        router.push("/dashbord");
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to create games",
      });
    }
  };
  const handleCreate = async () => {
    if (!name || !desc || !file) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Field not be empty...",
      });
      return;
    }
    if (
      file.type === "image/png" ||
      file.type === "image/jpeg" ||
      file.type === "image/jpg"
    ) {
      uploadFirebase(file);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid file type - " + file.type,
      });
      return;
    }
  };

  const uploadFirebase = (file) => {
    if (!file) return;
    const storage = mystorage;
    const storageRef = ref(storage, `image/${uuidv4()}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setProg(Math.round(progress));
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong",
        });
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFileurl(downloadURL);
        });
      }
    );
  };

  return (
    <>
      <Sidebar />
      <div className="ml-64 p-16">
        <div className="w-full flex flex-col items-center justify-center ">
          <h1 className="text-2xl font-bold text-gray-900 tracking-wider mb-16">
            Add Games
          </h1>
          <div className="flex gap-4 items-center justify-center ">
            <div className="">
              <label htmlFor="text" className="leading-7 text-sm text-gray-600">
                Games Name
              </label>
              <input
                type="text"
                id="text"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-3"
                onChange={(e) => setName(e.target.value)}
              />
              <label
                htmlFor="description"
                className="leading-7 text-sm text-gray-600"
              >
                Games Description
              </label>
              <textarea
                name="description"
                id="description"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out  mb-3"
                onChange={(e) => setDesc(e.target.value)}
              />

              <label
                htmlFor="thumbnail"
                className="leading-7 text-sm text-gray-600"
              >
                Thumbnail
              </label>
              <input
                type="file"
                id="thumbnail"
                onChange={(e) => setFile(e.target.files[0])}
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-3"
              />
              <div className=" flex gap-4 justify-between items-center">
                <button
                  className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg mt-6"
                  onClick={handleCreate}
                >
                  Add Games
                </button>
                {prog === 0 ? (
                  ""
                ) : (
                  <div className="relative w-3/4 bg-gray-200 h-1">
                    <div
                      className="absolute top-0 left-0 bg-green-400 h-1"
                      style={{ width: `${prog}%` }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
            <div className="">
              <Image alt="img" src="/img/login.svg" width={1280} height={720} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addgames;

export const getServerSideProps = async (ctx) => {
  const cookies = await ctx.req.cookies;
  return {
    props: {
      token: cookies,
    },
  };
};
