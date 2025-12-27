"use client"
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-linear-to-b from-[#55ac45] to-[#d4ede4] flex flex-col items-center  -translate-y-23 md:-translate-y-5 p-4 sm:p-6 md:p-8">
      

      {/* Main 404 Container */}
      <div className="flex flex-col items-center justify-center flex-1 w-full max-w-4xl">
        {/* 404 Text with Dog Image */}
        <div className="relative w-full mb-8 sm:mb-12 md:mb-5 flex items-center justify-center">
          {/* Large 404 Numbers */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6">
            {/* Left 4 */}
            <div className="text-[60px] sm:text-[100px] md:text-[150px] lg:text-[180px] font-bold text-[#223f1e] opacity-70">
              4
            </div>

            {/* Center 0 with Dog Image */}
            <div className="relative w-[80px] h-[120px] sm:w-[120px] sm:h-[180px] md:w-[160px] md:h-[240px] lg:w-[180px] lg:h-[270px] flex items-center justify-center">
              {/* Outer Circle Background */}
              <div className="absolute inset-0 rounded-full bg-[#5a9080] opacity-40"></div>

              {/* Inner Circle Background */}
              <div className="absolute inset-4 sm:inset-6 md:inset-8 rounded-full bg-white flex items-center justify-center shadow-md">
                {/* Dog Image */}
                <img
                  src="/public/images/404-20page-20not-20found.png"
                  alt="Dog in 404"
                  width={140}
                  height={140}
                  className="w-full h-full object-contain p-2 sm:p-3 md:p-4"
                  priority
                />
              </div>

              {/* Large 0 */}
              <div className="absolute text-[60px] sm:text-[100px] md:text-[150px] lg:text-[180px] font-bold text-[#223f1e] opacity-70">
                0
              </div>
            </div>

            {/* Right 4 */}
            <div className="text-[60px] sm:text-[100px] md:text-[150px] lg:text-[180px] font-bold text-[#223f1e] opacity-70">
              4
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1d411d] mb-3 sm:mb-4">
            Page Not Found
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#01412d] font-semibold">Oops, i think we're lost</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:-translate-y-4 sm:flex-row gap-4 sm:gap-6 md:gap-8 w-full sm:w-auto">
          <Link
            href="/"
            className="px-6 sm:px-8 md:px-8 py-2 sm:py-2 md:py-4 border-2 border-[#5a9080] text-[#2d5f4f] font-semibold rounded-full hover:bg-[#5a9080] hover:text-white transition-all duration-300 transform hover:scale-105 text-center text-sm sm:text-base md:text-lg"
          >
            Back to Home
          </Link>
          <Link
            href="/categories"
            className="px-6 sm:px-8 md:px-8 py-2 sm:py-2 md:py-4 border-2 border-[#5a9080] text-[#2d5f4f] font-semibold rounded-full hover:bg-[#5a9080] hover:text-white transition-all duration-300 transform hover:scale-105 text-center text-sm sm:text-base md:text-lg"
          >
            View Products
          </Link>
        </div>
      </div>
    </div>
  )
}
