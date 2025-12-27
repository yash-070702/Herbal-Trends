import { useState } from "react"
import { Menu, X } from "lucide-react"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about-us" },
    { label: "Product", to: "/categories" },
    { label: "Contact", to: "/contact-us" },
  ]

  const closeMenu = () => setIsOpen(false)

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
                  className="text-white text-sm font-medium hover:text-green-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            
            <button
              className="md:hidden absolute right-4 text-white p-2"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

    
      {isOpen && (
        <div className="fixed inset-0 z-50">
          
         
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMenu}
          />

          <div className="absolute right-0 top-0 h-full w-72 bg-[#2d5016] shadow-xl p-6 flex flex-col">
            
            
            <button
              className="self-end text-white mb-6"
              onClick={closeMenu}
            >
              <X size={26} />
            </button>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={closeMenu}
                  className="text-white text-lg font-medium hover:text-green-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
