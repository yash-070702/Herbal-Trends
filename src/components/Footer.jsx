import React from 'react'
import { Facebook, Linkedin, Twitter, Instagram, Mail, Phone, Clock, MapPin, ChevronRight, LogOut } from "lucide-react"
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
const Footer = () => {

  const navLinks = [
    { label: "About", to: "/about-us" },
    { label: "Our Products", to: "/categories" },
    { label: "Contact Us", to: "/contact-us" },
    { label: "Categories", to: "/categories" }
  ]
   return (
    <footer className="bg-green-950 text-green-50/80 pt-16 pb-8 border-t border-green-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Company Info Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
                <img src={Logo}
                  alt="Herbal Trends Logo"
                  />
             
              <span className="text-2xl font-black tracking-tighter text-white">
                Herbal <span className="text-emerald-400">Trends</span>
              </span>
            </div>

            <p className="text-green-100/60 text-sm leading-relaxed max-w-xs font-medium">
              We are the pioneer manufacturing Group of Quality Veterinary Products, dedicated to animal health and
              wellness.
            </p>

            <div className="space-y-4 pt-2">
              <div>
                <h4 className="font-bold text-emerald-400 text-xs uppercase tracking-widest mb-1">
                  For Export Enquiry:
                </h4>
                <p className="text-white font-semibold">
                  Mr. Yash Aggarwal <span className="text-green-800 font-normal">|</span> +91-8273230778
                </p>
              </div>
              <div>
                <h4 className="font-bold text-emerald-400 text-xs uppercase tracking-widest mb-1">
                  For Domestic Enquiry:
                </h4>
                <p className="text-white font-semibold">
                  Mr. Arsh <span className="text-green-800 font-normal">|</span> +91-9208585875
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:pl-12">
            <div className="relative mb-8">
              <h3 className="text-xl font-bold text-white inline-block">Explore</h3>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-emerald-500 rounded-full"></div>
            </div>

            <ul className="space-y-3">
              {navLinks.map((link,idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    className="flex items-center group text-green-100/70 hover:text-emerald-400 transition-colors duration-200"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-emerald-500 group-hover:translate-x-1 transition-transform" />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Column */}
          <div className="space-y-8">
            <div className="relative mb-8">
              <h3 className="text-xl font-bold text-white inline-block leading-tight">
                Visit Our Office Or Contact Us
              </h3>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-emerald-500 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-green-900/50 p-2 rounded-full h-fit border border-green-800">
                    <Mail className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-green-50">herbaltrendsggn@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-green-900/50 p-2 rounded-full h-fit border border-green-800">
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </div>
                  <p className="text-sm font-medium text-green-50 self-center">+91-8273230778</p>
                </div>

                <div className="flex gap-4">
                  <div className="bg-green-900/50 p-2 rounded-full h-fit border border-green-800">
                    <Clock className="w-5 h-5 text-emerald-400" />
                  </div>
                  <p className="text-sm font-medium text-green-50 self-center">09.00am to 07.00pm</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-green-900/50 p-2 rounded-full h-fit border border-green-800">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                  </div>
                  <p className="text-sm font-medium text-green-100/60 leading-relaxed">
                   Lane No. - 8, Pataudi Rd, 
                    <br />
                     Kadipur Industrial Area, Sector 10 Gurugram,
                    <br />
                   Haryana 122001 ( INDIA )
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-green-900">
              <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-4">Follow us:</p>
              <div className="flex gap-3">
                {[
                  { Icon: Facebook, color: "hover:bg-[#1877F2]" },
                  { Icon: Linkedin, color: "hover:bg-[#0A66C2]" },
                  { Icon: Twitter, color: "hover:bg-[#000000]" },
                  { Icon: Instagram, color: "hover:bg-[#E4405F]" },
                ].map(({ Icon, color }, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className={`bg-green-900 border border-green-800 text-white p-2.5 rounded-lg ${color} hover:scale-110 hover:border-transparent transition-all duration-200 shadow-lg shadow-black/20`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-green-900 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-green-100/40 font-medium">
          <p>© 2025 Herbal Trends. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer


