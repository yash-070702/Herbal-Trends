import { Menu, X, MapPin, Phone, Mail, Star } from "lucide-react"
import { useState } from "react"

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="w-full min-h-screen bg-white">

      {/* Hero Section */}
      <section id="home" className="relative w-full bg-gradient-to-r from-green-50 to-green-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-800 mb-4 text-balance">
                Herbal Medicine
              </h1>
              <p className="text-lg sm:text-xl text-green-700 font-semibold text-balance">
                One of the best manufacturer in herbal medicine
              </p>
            </div>

            {/* Right Content - Hero Image and Products */}
            <div className="flex flex-col gap-6">
              {/* Placeholder for dog image */}
              <div className="w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-green-200 to-green-300 rounded-lg flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <p className="text-green-800 font-semibold">Dog Image</p>
                  <p className="text-green-700 text-sm">(Add your image here)</p>
                </div>
              </div>

              {/* Product Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {["Platelets Booster", "Plasma Care", "Platelets Booster"].map((product, idx) => (
                  <div key={idx} className="bg-white rounded-lg shadow-md p-4 text-center border-l-4 border-yellow-400">
                    <div className="w-12 h-12 bg-yellow-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-green-700 font-bold">🌿</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-800">{product}</p>
                    <p className="text-xs text-gray-600 mt-1">for Pets</p>
                    <p className="text-xs text-gray-600">Plasma Care</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Categories Section */}
      <section id="products" className="w-full py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Product we offer in categories
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              We offer product in Animal medicine and supplements, Pet care, Poultry Feed supplements, Human etc.
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Animal Care",
                desc: "Medicines help protect animal health, prevent diseases, and keep our food supply safe.",
              },
              {
                title: "Pet Care",
                desc: "Medicines help protect animal health, prevent diseases, and keep our food supply safe.",
              },
              {
                title: "Poultry Care",
                desc: "Medicines help protect animal health, prevent diseases, and keep our food supply safe.",
              },
            ].map((category, idx) => (
              <div key={idx} className="bg-green-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                {/* Image Placeholder */}
                <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-green-700 font-semibold text-sm">Product Image</p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">{category.title}</h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">{category.desc}</p>
                  <button className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2 sm:py-3 rounded-lg transition">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">Customer Testimonials</h2>
            <p className="text-gray-600 text-sm sm:text-base">What customers say about us</p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-lg p-6 sm:p-8 relative">
                {/* Quote Mark */}
                <div className="absolute -top-4 -right-4 text-6xl sm:text-8xl text-green-700 opacity-20">"</div>

                {/* Customer Info */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">PG</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm sm:text-base">Pankaj Gupta</p>
                    <p className="text-gray-500 text-xs sm:text-sm">Veterinary doctor</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4].map((star) => (
                    <Star key={star} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star size={16} className="text-yellow-400" />
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed relative z-10">
                  We offer product in Animal medicine and supplements, Pet care, Poultry Feed supplements, Human etc.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
