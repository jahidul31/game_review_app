import Image from "next/image";
import Link from "next/link";
import React from "react";

function Result({ games }) {
  return (
    <div className="bg-gray-100 p-0 sm:p-20">
      <div className="grid sm:grid-cols-2  gap-4 sm:p-10 items-center justify-center">
        {games === undefined
          ? games.map((game) => (
              <div className="group">
                <div className="p-10">
                  <Image
                    src={game.thum}
                    layout="responsive"
                    width={620}
                    height={400}
                  />
                  <div
                    className="text-3xl mt-10 mb-5 underline decoration-green-600 decoration-wavy decoration-2 underline-offset-8 text-gray-800 leading-relaxed"
                    key={game.title}
                  >
                    {game.title}
                  </div>
                  <h6 className="mb-10 text-gray-500">{game.dis}</h6>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <button className="px-10 py-3 bg-green-600 rounded text-white">
                      <Link href={`/dashbord/add_reviews/${game.title}`}>
                        Give Your Review
                      </Link>
                    </button>
                    <div className="flex items-center justify-center mt-3 mr-4 sm:mt-0">
                      <span className="p-3 rounded-full bg-red-400 font-extrabold text-lg text-white mr-2">
                        7.5
                      </span>
                      <p>(36) Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : "Currently no review found."}
      </div>
    </div>
  );
}

export default Result;
