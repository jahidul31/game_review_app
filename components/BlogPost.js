import Image from "next/image";
import React from "react";

function BlogPost() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <h1 className="title text-center sm:text-6xl text-2xl pt-20 underline decoration-green-600 decoration-wavy decoration-2 underline-offset-8">
          Recent Post
        </h1>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Run loop from here */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  src="https://picsum.photos/1920/1080"
                  width={1920}
                  height={1080}
                  objectFit="cover"
                  objectPosition="center"
                />
                <div className="p-6">
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p className="leading-relaxed mb-3 text-gray-600">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-green-600  inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      12/02/1997
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* // */}
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPost;
