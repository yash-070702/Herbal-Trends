"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import products from "../data/products_data"

export default function Page() {
  const categories = [
    { id: 0, label: "Cattle Care" },
    { id: 1, label: "Poultry Care" },
    { id: 2, label: "Pet Care" },
  ]

  const [selectedCategory, setSelectedCategory] = useState(0)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const categoryId = selectedCategory

  const categoryProducts = products[categoryId] || products["default"]
  const initialProduct = categoryProducts[0]

  const [selectedProduct, setSelectedProduct] = useState(initialProduct)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isIngredientsExpanded, setIsIngredientsExpanded] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  useEffect(() => {
    setCurrentImageIndex(0)
  }, [selectedProduct])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId)
    setIsDropdownOpen(false)
    setSelectedProduct(products[categoryId][0])
    setIsIngredientsExpanded(false)
  }

  const handleProductSelect = (product) => {
    setSelectedProduct(product)
    setIsMenuOpen(false)
    setIsIngredientsExpanded(false)
  }

  const getImagesArray = () => {
    const images = selectedProduct.images || selectedProduct.image
    return Array.isArray(images) ? images : [images]
  }

  const handlePrevImage = () => {
    const imagesArray = getImagesArray()
    setCurrentImageIndex((prev) => (prev === 0 ? imagesArray.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    const imagesArray = getImagesArray()
    setCurrentImageIndex((prev) => (prev === imagesArray.length - 1 ? 0 : prev + 1))
  }

  const currentCategory = categories.find((cat) => cat.id === selectedCategory)

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      <div className="flex relative">
        <aside className="hidden lg:block w-72 bg-[#0f431d] h-screen sticky top-0 p-8 overflow-y-auto">
          <div className="mb-8 relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full text-[#377024]  flex items-center justify-between  transition-all duration-200 text-white text-3xl font-serif mb-8 border-b border-gray-800 pb-4"
            >
              <span>{currentCategory?.label}</span>
              <ChevronDown
                size={20}
                className={`transform transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-20  mt-2 bg-white rounded-xl shadow-2xl overflow-hidden z-50"
                >
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategorySelect(category.id)}
                      className={`w-full text-left px-5 py-3 font-medium transition-colors duration-200 ${
                        selectedCategory === category.id
                          ? "bg-[#377024] text-white"
                          : "text-[#377024] hover:bg-gray-100"
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex flex-col gap-2">
            {categoryProducts.map((product, idx) => (
              <button
                key={idx}
                onClick={() => handleProductSelect(product)}
                className={`text-left px-5 py-3 rounded-xl transition-all duration-200 font-medium ${
                  selectedProduct.name === product?.name
                    ? "bg-white text-black shadow-lg scale-105"
                    : "text-white hover:text-white hover:bg-white/5"
                }`}
              >
                {product.name}
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 p-6 md:p-12 lg:p-16 flex flex-col xl:flex-row gap-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProduct.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex-1 space-y-10"
            >
              <div>
                <h1 className="text-[#1b4313] text-3xl md:text-5xl font-serif mb-6">{selectedProduct.name}</h1>

                <div className="space-y-6 max-w-2xl">
                  <section>
                    <h3 className="text-[#1b4313] font-bold uppercase tracking-wider text-sm mb-2">Medicine Type</h3>
                    <p className="text-lg text-slate-600">{selectedProduct.medicineType}</p>
                  </section>

                  <section>
                    <h3 className="text-[#1b4313] font-bold uppercase tracking-wider text-sm mb-2">Physical Form</h3>
                    <p className="text-lg text-slate-600">{selectedProduct.physicalForm}</p>
                  </section>

                  <section>
                    <h3 className="text-[#1b4313] font-bold uppercase tracking-wider text-sm mb-2">Ingredients</h3>
                    <div className="text-lg text-slate-600 leading-relaxed">
                      {isIngredientsExpanded
                        ? selectedProduct.ingredients
                        : `${selectedProduct.ingredients.split(",").slice(0, 5).join(",")}...`}
                      <button
                        onClick={() => setIsIngredientsExpanded(!isIngredientsExpanded)}
                        className="ml-2 text-green-700 font-bold hover:underline"
                      >
                        {isIngredientsExpanded ? "See less" : "See more..."}
                      </button>
                    </div>
                  </section>

                  <hr className="border-gray-200" />

                  <section>
                    <h3 className="text-[#1b4313] font-bold uppercase tracking-wider text-sm mb-4">
                      Treatments & Functions
                    </h3>
                    <ul className="text-lg text-slate-600 leading-relaxed space-y-2">
                      {selectedProduct.treatmentsAndFunctions.split(",").map((treatment, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-[#377024] font-bold mt-1">•</span>
                          <span>{treatment.trim()}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <hr className="border-gray-200" />

                  <section>
                    <h3 className="text-[#1b4313] font-bold uppercase tracking-wider text-sm mb-2">Recommended For</h3>
                    <p className="text-lg text-slate-600">{selectedProduct.recommendedFor}</p>
                  </section>

                  <section>
                    <h3 className="text-[#1b4313] font-bold uppercase tracking-wider text-sm mb-2">Quantity</h3>
                    <p className="text-lg text-slate-600">{selectedProduct.quantity}</p>
                  </section>

                  <section>
                    <h3 className="text-[#1b4313] font-bold uppercase tracking-wider text-sm mb-2">
                      Directions To Use
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed">{selectedProduct.directionsToUse}</p>
                  </section>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Floating Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedProduct.name}-card`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="xl:w-96"
            >
              <div className="bg-[#dafbdd] rounded-[2.5rem] shadow-2xl p-6 md:p-8 sticky top-24 border border-gray-100">
                 <div className="rounded-3xl overflow-hidden mb-8 shadow-inner bg-gray-50 h-64 relative group">
                  {/* Image display */}
                  <img
                    src={getImagesArray()[currentImageIndex]  }
                   alt="Optimized"
                    onClick={() => window.open(getImagesArray()[currentImageIndex], "_blank", "noopener,noreferrer")}
                    className="w-full h-full object-contain cursor-pointer"
                    style={{
                      transformOrigin: 'var(--mouse-x, 50%) var(--mouse-y, 50%)',
                      transition: 'transform 0.1s ease-out'
                    }}

                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = ((e.clientX - rect.left) / rect.width) * 100;
                      const y = ((e.clientY - rect.top) / rect.height) * 100;
                      e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                      e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
                      e.currentTarget.style.transform = 'scale(2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />

                  {getImagesArray().length > 1 && (
                    <>
                      {/* Previous button */}
                      <button
                        onClick={handlePrevImage}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={20} />
                      </button>

                      {/* Next button */}
                      <button
                        onClick={handleNextImage}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
                        aria-label="Next image"
                      >
                        <ChevronRight size={20} />
                      </button>

                      {/* Image counter/dots */}
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                        {getImagesArray().map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              idx === currentImageIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/75"
                            }`}
                            aria-label={`Go to image ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-serif text-[#1b4313] mb-3">Storage</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{selectedProduct.StorageInstructions}</p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <h3 className="text-xl font-serif text-[#1b4313] mb-3">Quick Dosage</h3>
                    <ul className="text-slate-600 text-sm leading-relaxed space-y-2">
                      {selectedProduct.dosage.split(",").map((dose, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-[#377024] font-bold mt-0.5">•</span>
                          <span>{dose.trim()}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Burger Menu Overlay - Mobile Only */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-start" aria-hidden="true">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300"
            onClick={toggleMenu}
          />

          <div
            className="relative bg-[#0f431d] h-full w-[80%] max-w-sm p-8 shadow-2xl flex flex-col transform transition-transform duration-300 animate-in slide-in-from-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8 shrink-0">
              <h2 className="text-white text-3xl font-serif">{currentCategory?.label}</h2>
              <button
                onClick={toggleMenu}
                className="text-white p-2 hover:rounded-full hover:bg-white/20 transition-colors"
              >
                <X size={28} />
              </button>
            </div>

            <div className="mb-6 pb-6 border-b border-white/20">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-white text-[#377024] px-5 py-3 rounded-xl font-bold flex items-center justify-between hover:shadow-lg transition-all duration-200"
              >
                <span>{currentCategory?.label}</span>
                <ChevronDown
                  size={20}
                  className={`transform transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="mt-2 bg-white rounded-xl shadow-2xl overflow-hidden"
                  >
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => handleCategorySelect(category.id)}
                        className={`w-full text-left px-5 py-3 font-medium transition-colors duration-200 ${
                          selectedCategory === category.id
                            ? "bg-[#377024] text-white"
                            : "text-[#377024] hover:bg-gray-100"
                        }`}
                      >
                        {category.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex flex-col gap-3 overflow-y-auto pb-20">
              {categoryProducts.map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleProductSelect(product)}
                  className={`text-left px-6 py-4 rounded-2xl transition-all duration-200 text-lg font-medium shrink-0 ${
                    selectedProduct?.name === product?.name
                      ? "bg-white text-black shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {product.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <button
        onClick={toggleMenu}
        className="lg:hidden fixed bottom-25 right-6 z-60 bg-[#0f2f09] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all"
      >
        {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>
    </main>
  )
}
