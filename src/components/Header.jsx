

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
   const navigate = useNavigate();

  const categories = [
    { label: "Cattle Care", value: "cattle-care" },
    { label: "Poultry Care", value: "poultry-care" },
    { label: "Pet Care", value: "pet-care" },
  ]

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about-us" },
    { label: "Product", to: "/categories" },
    { label: "Contact", to: "/contact-us" },
  ]

  const closeMenu = () => setIsOpen(false)
  const handleCategoryClick = (category,idx) => {
    navigate(`/category-page/${category}/${idx}`);
    setIsDropdownOpen(false)
    closeMenu()
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#2d5016] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center h-20">
              <div className="flex items-center gap-2">
              <Link to="/">
                <img src={logo} alt="Logo" className="h-10" />
              </Link>
              <div className="text-white font-semibold hidden sm:block">
                <p className="text-sm">Herbal</p>
                <p className="text-sm leading-none">Trends</p>
              </div>
            </div>

            <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-white text-sm font-medium hover:text-green-200 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="relative group">
                <button className="text-white text-sm font-medium hover:text-green-200 transition-colors flex items-center gap-1">
                  Categories
                  <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200" />
                </button>

                {/* Dropdown Menu */}
                <div className="absolute left-0 top-full pt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="bg-white rounded-lg shadow-lg py-2 min-w-max">
                    {categories.map((category, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleCategoryClick(category.value, idx + 1)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            <button
              className="md:hidden absolute right-4 text-white p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              style={{
                transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease-out",
              }}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop with fade */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMenu}
            style={{
              animation: "fadeIn 0.3s ease-out",
            }}
          />

      
          <div
            className="absolute right-0 top-0 h-full w-72 bg-[#2d5016] shadow-xl p-6 flex flex-col"
            style={{
              animation: "slideInRight 0.3s ease-out",
            }}
          >
          
            <button
              className="self-end text-white mb-6 p-2 hover:rotate-90"
              onClick={closeMenu}
              aria-label="Close menu"
              style={{
                transition: "transform 0.3s ease-out",
              }}
            >
              <X size={26} />
            </button>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={closeMenu}
                  className="text-white text-lg font-medium hover:text-green-200 transition-colors"
                  style={{
                    animation: `slideInRight 0.3s ease-out ${idx * 50}ms backwards`,
                  }}
                >
                  {link.label}
                </Link>
              ))}

              <div>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-white text-lg font-medium hover:text-green-200 transition-colors flex items-center gap-2 w-full"
                  style={{
                    animation: `slideInRight 0.3s ease-out ${navLinks.length * 50}ms backwards`,
                  }}
                >
                  Categories
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

        
                {isDropdownOpen && (
                  <div className="mt-3 ml-4 flex flex-col gap-2">
                    {categories.map((category, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleCategoryClick(category.value, idx + 1)}
                        className="text-green-200 text-sm hover:text-white transition-colors text-left"
                        style={{
                          animation: `slideInRight 0.2s ease-out ${idx * 30}ms backwards`,
                        }}
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>

          <style>{`
            @keyframes slideInRight {
              from {
                transform: translateX(100%);
                opacity: 0;
              }
              to {
                transform: translateX(0);
                opacity: 1;
              }
            }

            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
          `}</style>
        </div>
      )}
    </>
  )
}
