import React from "react";

const ComingSoon = () => {
  return (
    <section
      className="text-gray-600 body-font bg-cover bg-center min-h-screen flex justify-center items-center"
      style={{ backgroundColor: "#f5d742" }}
    >
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
       
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900">
            COMING SOON
          </h1>
          <p className="mb-8 leading-relaxed">Under Construction</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            style={ {backgroundColor: "#000"}}>
              Contact 
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Mail
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
