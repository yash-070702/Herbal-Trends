import { useState } from "react"
import ProductImage from "../assets/image.png"
import { useNavigate } from "react-router-dom"
export default function ProductCard({ categoryId , ind , name, form }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full aspect-video bg-linear-to-br from-green-50 to-green-100 flex items-center justify-center overflow-hidden">
        <img
          src={ProductImage}
          alt={name}
          width={400}
          height={250}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex justify-between items-center p-4 sm:p-6">
        <div className="mb-3">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{name}</h3>
          <p className="text-sm sm:text-base text-gray-600">Physical Form : {form}</p>
        </div>

        {/* More Info Button */}
        <button
          className={`w-auto px-4 sm:px-6 py-2 rounded-md font-medium text-sm sm:text-base transition-all duration-300 ${
            isHovered ? "bg-[#2d5016] text-white shadow-md" : "bg-[#2d5016] text-white"
          }`}
          onClick={() => navigate(`/product-page/${categoryId}/${name.replace(/\s+/g, '-').toLowerCase()}/${ind}`)}
        >
          More Info
        </button>
      </div>
    </div>
  )
}
