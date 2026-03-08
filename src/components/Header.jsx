import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import logo from "../assets/logo.png"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Fuse from "fuse.js"
import products, { allProducts } from "../data/products_data"
import { useRef, useEffect } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [query, setQuery] = useState("")
const [results, setResults] = useState([])
const searchRef = useRef(null)
   const navigate = useNavigate();

  const categories = [
    { label: "Cattle Care", value: "cattle-care" },
    { label: "Poultry Care", value: "poultry-care" },
    { label: "Pet Care", value: "pet-care" },
  ]

  const fuse = new Fuse(allProducts, {
  keys: ["name", "keyword"],
  threshold: 0.35,
})

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about-us" },
    { label: "Product", to: "/categories" },
    { label: "Contact", to: "/contact-us" },
    { label: "ThirdParty", to: "/third-party" },
  ]

  const closeMenu = () => setIsOpen(false)
  const handleCategoryClick = (category,idx) => {
    navigate(`/category-page/${category}`);
    setIsDropdownOpen(false)
    closeMenu()
  }

  const handleSearch = (e) => {
  const value = e.target.value
  setQuery(value)

  if (!value.trim()) {
    setResults([])
    return
  }

  const searchResults = fuse.search(value)
  const filtered = searchResults.map((r) => r.item)

  setResults(filtered.slice(0, 6))
}

  function formatString(input) {
  if (typeof input !== "string") return "";
  
  const beforeSlash = input.toLowerCase().split("/")[0];
  return beforeSlash.trim().replace(/\s+/g, "-");
}

const handleProductClick = (product) => {
  navigate(`/product-page/${product.category}/${formatString(product.keyword)}/${product.id}`)
  setResults([])
  setQuery("")
}

useEffect(() => {
  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setResults([])
    }
  }

  document.addEventListener("mousedown", handleClickOutside)

  return () => {
    document.removeEventListener("mousedown", handleClickOutside)
  }
}, [])

  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number (include country code without + or spaces)
    const phoneNumber = import.meta.env.VITE_MOBILE_NUMBER;
    const message = "Hello! I'm interested in your products."
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-linear-to-r from-green-950 to-green-900 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Header */}
          <div className="hidden md:flex items-center justify-between h-20 gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3 shrink-0">
              <NavLink to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <img src={logo || "/placeholder.svg"} alt="Logo" className="h-14 w-14 object-contain" />
                <div className="leading-tight">
                  <p className="text-white text-lg font-bold tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Herbal
                  </p>
                  <p className="text-green-400 text-lg font-semibold tracking-wider" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Trends
                  </p>
                </div>
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <nav className="flex items-center gap-8 flex-1 justify-center">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `text-green-200 text-sm font-semibold transition-all duration-300 relative px-3 py-2 hover:text-green-300
                     ${isActive ? "text-green-300 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-linear-to-r after:from-green-400 after:to-green-300 after:rounded-full" : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="relative group">
                <button className="text-green-200 text-sm font-semibold hover:text-green-300 transition-all duration-300 flex items-center gap-2 px-3 py-2">
                  Categories
                  <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute left-0 top-full pt-3 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <div className="bg-white rounded-lg shadow-xl py-2 min-w-max border border-green-100">
                    {categories.map((category, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleCategoryClick(category.value, idx + 1)}
                        className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-linear-to-r hover:from-green-50 hover:to-green-100 hover:text-green-700 transition-all duration-200 font-medium border-l-4 border-transparent hover:border-green-400"
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Desktop Search & WhatsApp */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="relative w-64" ref={searchRef}>
                <div className="relative">
                  <input
                    type="text"
                    value={query}
                    onChange={handleSearch}
                    placeholder="Search products..."
                    className="w-full px-4 py-2.5 pr-10 rounded-lg text-sm outline-none bg-white/95 text-gray-800 placeholder-gray-500 border border-green-300/50 focus:border-green-400 focus:ring-2 focus:ring-green-400/30 transition-all duration-300 shadow-sm"
                  />
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                {results.length > 0 && (
                  <div className="hide-scrollbar absolute top-full left-0 w-full bg-white shadow-xl rounded-lg mt-2 max-h-64 scrollbar-hide overflow-y-auto z-50 border border-green-100">
                    {results.map((product) => (
                      <div
                        key={product.id}
                        onClick={() => handleProductClick(product)}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-linear-to-r hover:from-green-50 hover:to-green-100 cursor-pointer border-b border-gray-100 transition-all duration-200 last:border-b-0 group"
                      >
                        <img src={product.image[0]} alt={product.name} className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-200" />
                        <div>
                          <p className="text-sm font-semibold text-gray-800">{product.name}</p>
                          <p className="text-xs text-gray-500">{product.keyword}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="md:hidden flex items-center justify-between h-16">
            {/* Mobile Logo */}
            <NavLink to="/" className="flex items-center gap-2 shrink-0">
              <img src={logo || "/placeholder.svg"} alt="Logo" className="h-12 w-12 object-contain" />
              <div className="leading-tight">
                <p className="text-white text-sm font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Herbal
                </p>
                <p className="text-green-400 text-xs font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Trends
                </p>
              </div>
            </NavLink>

            {/* Mobile Menu Button */}
            <button
              className="text-white p-2 hover:bg-green-800 rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Search Bar */}
          {isOpen && (
            <div className="md:hidden pb-4 border-t border-green-800">
              <div className="relative mt-4" ref={searchRef}>
                <input
                  type="text"
                  value={query}
                  onChange={handleSearch}
                  placeholder="Search products..."
                  className="w-full px-4 py-2.5 pr-10 rounded-lg text-sm outline-none bg-white/95 text-gray-800 placeholder-gray-500 border border-green-300/50 focus:border-green-400 focus:ring-2 focus:ring-green-400/30 transition-all duration-300"
                />
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {results.length > 0 && (
                  <div className="absolute top-full left-0 right-0 bg-white shadow-xl rounded-lg mt-2 max-h-64 overflow-y-auto z-50 border border-green-100">
                    {results.map((product) => (
                      <div
                        key={product.id}
                        onClick={() => {
                          handleProductClick(product)
                          setIsOpen(false)
                        }}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-linear-to-r hover:from-green-50 hover:to-green-100 cursor-pointer border-b border-gray-100 transition-all duration-200 last:border-b-0"
                      >
                        <img src={product.image[0]} alt={product.name} className="w-10 h-10 object-contain" />
                        <div>
                          <p className="text-sm font-semibold text-gray-800">{product.name}</p>
                          <p className="text-xs text-gray-500">{product.keyword}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      {isOpen && (
        <div className="md:hidden bg-green-900 border-t border-green-800 py-4 px-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-green-200 text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:bg-green-800
                   ${isActive ? "bg-green-700 text-green-300" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-green-200 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-green-800 transition-all duration-200 flex items-center gap-2 w-full"
              >
                Categories
                <ChevronDown size={16} className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isDropdownOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-1">
                  {categories.map((category, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        handleCategoryClick(category.value, idx + 1)
                        setIsDropdownOpen(false)
                      }}
                      className="text-green-200 text-xs px-4 py-2 hover:text-green-300 hover:bg-green-800 rounded-lg transition-colors text-left"
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </nav>
        </div>
      )}
    </>
  )
}
