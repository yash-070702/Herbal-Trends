import { useState } from "react"
import { PRODUCTS } from "../data/pd"
import { Menu, X } from "lucide-react"

function ProductList({ activeId, onSelect, className }) {
  return (
    <div className={`p-8 ${className} bg-black h-[89vh]  overflow-y-auto`}>
      <h2 className="text-3xl font-serif font-bold mb-8  text-white border-b border-white/20 pb-4">Cattle Care</h2>
      <ul className="space-y-2">
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <button
  onClick={() => onSelect(product.id)}
  className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-200 text-lg ${
    activeId === product.id
      ? "bg-white text-brand-deep font-bold shadow-lg scale-[1.02]"
      : "hover:bg-brand-deep/40 text-white/90"
  }`}
>
              {product.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ProductSidebar({ activeId, onSelect }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleSelect = (id) => {
    onSelect(id)
    setIsOpen(false)
  }

  return (
    <>
      <aside className="hidden lg:block w-80 bg-brand-green text-white h-full overflow-y-auto border-r border-black/5">
        <ProductList activeId={activeId} onSelect={onSelect} />
      </aside>

      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="fixed bottom-8 right-8 z-50 p-4 bg-brand-deep text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-brand-green/50 active:scale-95"
          aria-label="Open Product Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity" onClick={toggleMenu} />
        )}

        <aside
          className={`
            "fixed top-0 right-0 h-full w-full sm:w-80 bg-brand-green text-white z-40 transform transition-transform duration-300 ease-in-out shadow-2xl overflow-y-auto",
            isOpen ? "translate-x-0" : "translate-x-full",
          `}
        >
          <div className="pt-20">
            <ProductList activeId={activeId} onSelect={handleSelect} />
          </div>
        </aside>
      </div>
    </>
  )
}
