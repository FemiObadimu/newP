import React from "react";
import Navbar from "../basic/Navbar";
import Featured from "../basic/Featured";
import Footer from "../basic/Footer";
const Home = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="https://ik.imagekit.io/ubdvpx7xd0j/newP/Rectangle_2_N_et3Q-Fg.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660830420323"
          className="w-full h-1/2"
          alt="storage"
        />
        <div className="absolute top-0 w-full">
          <Navbar />
          <div className="flex justify-center items-center flex-col mt-24 text-white ">
            <div className="font-extrabold text-5xl py-2">
              Self Storage Business
            </div>
            <div className="font-extrabold text-5xl">Buy. Sell. Learn.</div>
            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <a
                  href="#"
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 shadow-sm  mainbg sm:px-8"
                >
                  Sell Your Self Storage
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                >
                  Active Self Storage Listings
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Featured />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
