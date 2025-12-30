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

  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number (include country code without + or spaces)
    const phoneNumber = import.meta.env.VITE_MOBILE_NUMBER;
    const message = "Hello! I'm interested in your products."
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-green-950 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center h-20">
              <div className="flex items-center gap-2">
              <Link to="/">
                <img src={logo || "/placeholder.svg"} alt="Logo" className="h-10" />
              </Link>
              <div className="text-white font-semibold hidden sm:block">
                <p className="text-md">Herbal</p>
                <p className="text-md leading-none">Trends</p>
              </div>
            </div>

            <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-white text-md font-medium hover:text-green-200 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="relative group">
                <button className="text-white text-md font-medium hover:text-green-200 transition-colors flex items-center gap-1">
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
              onClick={handleWhatsAppClick}
              className="hidden absolute right-12 items-center justify-center w-10 h-10 bg-[#25D366] rounded-full hover:bg-[#20BA5A] transition-colors shadow-lg"
              aria-label="Contact us on WhatsApp"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </button>

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

              <button
                onClick={() => {
                  handleWhatsAppClick()
                  closeMenu()
                }}
                className="flex items-center gap-3 text-white text-lg font-medium hover:text-green-200 transition-colors mt-4"
                style={{
                  animation: `slideInRight 0.3s ease-out ${(navLinks.length + 1) * 50}ms backwards`,
                }}
              >
                <div className="flex items-center justify-center w-8 h-8 bg-[#25D366] rounded-full">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                WhatsApp
              </button>
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
