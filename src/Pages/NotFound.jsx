"use client"
import { Link } from "react-router-dom"
import Dog from "../assets/doggie.png"

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-950 via-green-700 to-emerald-800 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-800 opacity-20 rounded-full blur-3xl -mr-48 -mt-48 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-green-800 opacity-15 rounded-full blur-3xl -ml-40 -mb-40"></div>

      {/* Main 404 Container */}
      <div className="flex flex-col items-center justify-center flex-1 w-full max-w-5xl relative z-10">
        {/* 404 Text with Dog Image */}
        <div className="relative w-full mb-8 sm:mb-12 md:mb-5 flex items-center justify-center">
          <div className="flex items-center justify-center gap-1 sm:gap-3 md:gap-5 lg:gap-8">
            {/* Left 4 */}
            <div className="text-7xl sm:text-9xl md:text-[180px] lg:text-[220px] font-black text-transparent bg-clip-text bg-gradient-to-b from-emerald-300 to-emerald-100 opacity-90 drop-shadow-lg leading-none">
              4
            </div>

            {/* Center 0 with Dog Image */}
            <div className="relative w-24 h-32 sm:w-36  sm:h-48 md:w-48 md:h-60 lg:w-56 lg:h-72 flex items-center justify-center">
             

              {/* Inner content container */}
              <div className="absolute inset-3 sm:inset-4 md:inset-6 lg:inset-8 rounded-2xl flex items-center justify-center  overflow-hidden">
            
               <img
                src={Dog}
                width={20} 
                height={80}
                autoPlay
                loop
                muted
                playsInline
                className="w-screen !h-[200px] object-contain p-2 sm:p-3 md:p-4 lg:p-5 hover:scale-105 transition-transform duration-300"
              />
              </div>

              {/* Decorative ring effect */}
              <div className="absolute inset-0  opacity-50"></div>

             
            </div>

            {/* Right 4 */}
            <div className="text-7xl sm:text-9xl md:text-[180px] lg:text-[220px] font-black text-transparent bg-clip-text bg-gradient-to-b from-emerald-300 to-emerald-100 opacity-90 drop-shadow-lg leading-none">
              4
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center mb-8 sm:mb-10 md:mb-14 w-full px-4">
          <div className="mb-2 sm:mb-3">
            <span className="text-xs sm:text-sm md:text-base font-semibold text-emerald-300 uppercase tracking-widest">
              Oops!
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-black text-white mb-3 sm:mb-4 leading-tight text-balance">
            Page Not Found
          </h1>
          <p className="text-base sm:text-lg  text-emerald-100 font-medium max-w-2xl mx-auto leading-relaxed">
            It looks like our pup wandered off the trail. Let's get you back on track!
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col -translate-y-8 sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto justify-center">
          <Link
            to="/"
            className="group relative px-8 sm:px-10 py-3  rounded-full font-semibold text-base sm:text-lg transition-all duration-300 overflow-hidden hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, rgba(16, 185, 129, 0.9) to rgba(5, 150, 105, 0.9))",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              color: "white",
              boxShadow: "0 8px 32px rgba(16, 185, 129, 0.2)",
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <Link
            to="/categories"
            className="group relative px-8 sm:px-10 py-3  rounded-full font-semibold text-base sm:text-lg transition-all duration-300 overflow-hidden hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.15) to rgba(255, 255, 255, 0.05))",
              backdropFilter: "blur(10px)",
              border: "1.5px solid rgba(255, 255, 255, 0.3)",
              color: "rgba(255, 255, 255, 0.95)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Explore Products
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </Link>
        </div>
      </div>
    </div>
  )
}
