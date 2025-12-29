import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import image1 from "../assets/image.png";
import { useParams } from "react-router-dom"
import products from "../data/products_data";


export default function ProductPage() {
 const params = useParams()
  const id = (params?.id ) || "0"
  const categoryId = (params?.categoryId ) || "cattle-care"

  const categoryProducts = products[categoryId] || products["default"]
  const initialProduct = categoryProducts.find((p) => p.id === id) || categoryProducts[0]

  const [selectedProduct, setSelectedProduct] = useState(initialProduct)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isIngredientsExpanded, setIsIngredientsExpanded] = useState(false)
 
   
  // console.log("id:", id, "product-name:", productName, "categoryId:", categoryId);

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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleProductSelect = (product) => {
    setSelectedProduct(product)
    setIsMenuOpen(false)
    setIsIngredientsExpanded(false)
  }

  return (
    <main className="min-h-screen bg-gray-50 font-sans ">
  
      <div className="flex relative">

        <aside className="hidden lg:block w-72 bg-[#377024] h-[calc(100vh-68px)] sticky top-17 p-8 overflow-y-auto">
          <h2 className="text-white text-3xl font-serif mb-8 border-b border-gray-800 pb-4">Cattle Care</h2>
          <div className="flex flex-col gap-2">
            {products[categoryId].map((product,idx) => (
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
                <h1 className="text-[#1b4313] text-5xl md:text-6xl font-serif mb-6">{selectedProduct.name}</h1>

                <div className="space-y-8 max-w-2xl">
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
                    <h3 className="text-[#1b4313] font-bold uppercase tracking-wider text-sm mb-4">Treatments</h3>
                    {/* <ul className="space-y-3">
                      {selectedProduct.treatments.map((treatment, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-lg text-slate-700">
                          <CheckCircle2 className="text-green-600 w-6 h-6 shrink-0" />
                          {treatment}
                        </li>
                      ))}
                    </ul> */}
                  </section>

                  <hr className="border-gray-200" />

                  <section>
                    <h3 className="text-[#1b4313] font-bold uppercase tracking-wider text-sm mb-2">Quantity</h3>
                    <p className="text-lg text-slate-600">{selectedProduct.quantity}</p>
                  </section>

                  <section>
                    <h3 className="text-[#1b4313] font-bold uppercase tracking-wider text-sm mb-2">Dosage</h3>
                    <div className="space-y-1 text-lg">
                      <p>
                        <span className="font-bold text-slate-700">Small Animal:</span>{" "}
                        <span className="text-slate-600">{selectedProduct.dosage.small}</span>
                      </p>
                      <p>
                        <span className="font-bold text-slate-700">Large Animal:</span>{" "}
                        <span className="text-slate-600">{selectedProduct.dosage.large}</span>
                      </p>
                    </div>
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
              <div className="bg-white rounded-[2.5rem] shadow-2xl p-6 md:p-8 sticky top-24 border border-gray-100">
                <div className="rounded-3xl overflow-hidden mb-8 shadow-inner bg-gray-50">
                  <img
                    src={selectedProduct.image || "/placeholder.svg"}
                    alt={selectedProduct.name}
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-serif text-[#1b4313] mb-3">Dosage</h3>
                    <div className="space-y-1 text-slate-600">
                      <p>
                        <span className="font-bold text-slate-800">Small Animal:</span> {selectedProduct.dosage.small}
                      </p>
                      <p>
                        <span className="font-bold text-slate-800">Large Animal:</span> {selectedProduct.dosage.large}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif text-[#1b4313] mb-3">Storage</h3>
                    <p className="text-slate-600 leading-relaxed">{selectedProduct.storage}</p>
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
            className="relative bg-[#377024] h-full w-[80%] max-w-sm p-8 shadow-2xl flex flex-col transform transition-transform duration-300 animate-in slide-in-from-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8 shrink-0">
              <h2 className="text-white text-3xl font-serif">Cattle Care</h2>
              <button
                onClick={toggleMenu}
                className="text-white p-2  hover:rounded-full hover:bg-white/20 transition-colors"
              >
                <X size={28} />
              </button>
            </div>

            <div className="flex flex-col gap-3 overflow-y-auto pb-20 scrollbar-hide">
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
        className="lg:hidden fixed bottom-6 right-6 z-60 bg-[#1b4313] text-white p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all"
      >
        {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>
    </main>
  )
}
