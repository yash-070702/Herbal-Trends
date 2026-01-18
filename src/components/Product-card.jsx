import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function ProductCard({id,displayName, name, form, image,categoryType }) {
const [isHovered, setIsHovered] = useState(false)
const navigate = useNavigate()
 
//   function formatString(input) {
//   if (typeof input !== "string") return "";
  
//   const beforeSlash = input.toLowerCase().split("/")[0];
//   return beforeSlash.trim().replace(/\s+/g, "-");
// }


  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full aspect-video bg-linear-to-br from-green-50 to-green-100 flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          width={400}
          height={250}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="flex justify-between items-center p-4 sm:p-6">
        <div className="mb-3">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{displayName}</h3>
          <p className="text-sm sm:text-base text-gray-600">Physical Form : {form}</p>
        </div>

        {/* More Info Button */}
        <button
          className={`w-auto px-4 sm:px-6 py-2 rounded-md font-medium text-sm sm:text-base transition-all duration-300 ${
            isHovered ? "bg-[#2d5016] text-white shadow-md" : "bg-[#0f4523] text-white"
          }`}
            onClick={() => navigate(`/product-page/${categoryType}/${id}`)}
        >
          More Info
        </button> 
      </div>
    </div>
  )
}

