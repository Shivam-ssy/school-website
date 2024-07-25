import React from 'react'

import Carousel from "./Carousel";
function Landing() {
  return (
    <main className="w-full h-auto relative">
    <div className=" relative h-screen w-full">
      <div className="w-full  h-screen absolute ">
        <Carousel />
      </div>
      <div className="w-full absolute flex justify-center items-center flex-col h-screen">
        <div>
        <div className="flex-col flex items-center text-white">
          <span className="text-3xl md:text-5xl font-bold ">Welcome to Springdale Public </span>
          <span className="text-sm md:text-xl text-black font-semibold mt-5 text-center">Any prominent career starts with good education. Where <br /> we nurture young minds for a brighter future</span>
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between md:justify-around mt-10">
        <button className="hover:bg-green-600 bg-gray-900 text-white px-5 py-3 font-bold text-lg font-sans rounded-full">Sign up for Excursion</button>
        <button className="bg-green-600 hover:bg-gray-900 px-5 py-3 font-bold text-white text-lg font-sans rounded-full">Learn more</button>

        </div>
        </div>
      </div>
      

      
    </div>
      <div className=" flex md:flex-row  flex-col justify-center px-10 md:px-0 gap-5 md:justify-evenly w-full py-10 items-center">
        <div className="">
          <iframe src="https://youtu.be/zGRdsCNTebw?si=Wix1KtxplsnzI5vd" frameborder="20"></iframe>
        </div>
        <div className="resize break-words w-96 h-60">
          <h2 className="text-5xl font-bold mb-6">About <span className="text-green-500">Our School</span></h2>
          <div className="  text-ellipsis ">As one of the world's premier academic, the Springdale Public School has driven new ways of thinking since our founding. Today, we represent an intellectual destination that draws inspired scholars to our local and international campuses, keeping us at the nexus of ideas that challenge and change the world and provide companies with new specialists.</div>
        <button className="border-2 border-gray-700 hover:bg-gray-700 font-bold px-5 py-2 mt-5 rounded-full ">Learn More</button>
        </div>
      </div>
    </main>
  )
}

export default Landing
