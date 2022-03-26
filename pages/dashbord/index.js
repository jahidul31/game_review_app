import React from "react";
import Sidebar from "../../components/dashbord/Sidebar";

function Dashbord() {
  return (
    <>
      <Sidebar />
      <div className="ml-64 p-16">
        <div className="flex justify-center items-center gap-6">
          <div className="p-6 rounded-md border-2 border-gray-400">
            <h6 className="font-light text-md mb-2">Total Reviews</h6>
            <h1 className="font-extrabold text-3xl inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#16a34a"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>{" "}
              350
            </h1>
          </div>
          <div className="p-6 rounded-md border-2 border-gray-400">
            <h6 className="font-light text-md mb-2">Total Games</h6>
            <h1 className="font-extrabold text-3xl inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#16a34a"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>{" "}
              350
            </h1>
          </div>
          <div className="p-6 rounded-md border-2 border-gray-400">
            <h6 className="font-light text-md mb-2">Profile Status</h6>
            <h1 className="font-extrabold text-3xl inline-flex items-center">
              Good
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashbord;
