import React from "react"
import { useState } from "react"
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, Globe } from "lucide-react"
import { toast } from "react-hot-toast"
import picture3 from "../assets/pic3.png";
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export default function ContactUs() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address"
    }
    if (!formData.message.trim()) newErrors.message = "Message is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const submitContactForm = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    try {
      setLoading(true)
      const submitData = new FormData()
      submitData.append("access_key", WEB3FORMS_ACCESS_KEY)
      submitData.append("name", formData.name)
      submitData.append("email", formData.email)
      submitData.append("message", formData.message)
      submitData.append("subject", formData.subject || "New Contact Us Submission")

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData,
      })

      const result = await response.json()

      if (response.ok && result.success) {
        toast.success("Your message has been sent successfully!")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        toast.error(result.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      toast.error("Failed to send message. Please check your connection.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#fcfdfc] text-[#1a2e1e] font-sans">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={picture3}
            alt="Herbal Trends Lab"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-[#fcfdfc]"></div>
        </div>

        

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-[#e8f5e9] text-[#2e7d32] text-xs font-bold tracking-wider uppercase mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-[#0a2310] mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Let's Start a <span className="font-serif italic text-[#388e3c]">Conversation</span>
          </h1>
          <p className="text-lg text-[#4a5d4e] max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1200">
            Because every paw, every tail, and every whisker matters to us. Reach out to our team of experts for any
            queries regarding our herbal veterinary solutions.
          </p>
        </div>
      </section>

      
            {/* Map Preview */}
            <div className="rounded-[2.5rem] mx-6 max-w-280 mb-20 md:mx-auto  h-64 border border-[#e8f0e9] shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9653566401576!2d76.99038877495002!3d28.450460692326487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17972e7cf663%3A0xfb3c9cb09b0df1d6!2sHERBAL%20TRENDS!5e0!3m2!1sen!2sin!4v1766749105052!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
  
                loading="lazy"
              ></iframe>
            </div>

      <main className="max-w-7xl mx-auto px-6 lg:px-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-5 space-y- ">
            <div className="p-8 rounded-[2.5rem] bg-white border border-[#e8f0e9] shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)]">
              <h3 className="text-2xl font-medium mb-8 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-[#388e3c]" />
                Contact Details
              </h3>

                
<div className=" text-xl text-green-800 font-semibold">

 Because every paw , every tail, and every whisker matters to us .....
            
</div>

            <div className="my-7 text-xl">
🐾 🐾🐾 🐾🐾 🐾🐾 🐾🐾 🐾🐾 🐾
</div>  


              <div className="space-y-8">
                <div className="group flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#f1f8f3] flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#388e3c] group-hover:text-white">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#388e3c] uppercase tracking-widest mb-1">Call Us</p>
                    <p className="text-lg font-medium">9910037950</p>
                    <p className="text-xs text-[#8a9b8e] mt-1">Mon - Sat, 10:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="group flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#f1f8f3] flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#388e3c] group-hover:text-white">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#388e3c] uppercase tracking-widest mb-1">Email Us</p>
                    <p className="text-lg font-medium break-all">herbaltrendsggn@gmail.com</p>
                    <p className="text-xs text-[#8a9b8e] mt-1">Response within 24 hours</p>
                  </div>
                </div>

                <div className="group flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#f1f8f3] flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#388e3c] group-hover:text-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#388e3c] uppercase tracking-widest mb-1">Visit Us</p>
                    <p className="text-lg font-medium leading-snug">
                      Lane No. 8, Pataudi Rd, Kadipur Industrial Area, Gurugram, 122001
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-[#f0f4f1]">
                <div className="flex gap-4">
                  <div className="flex-1 p-4 rounded-2xl bg-[#f9fbf9] text-center transition-transform hover:-translate-y-1">
                    <Clock className="w-5 h-5 mx-auto mb-2 text-[#388e3c]" />
                    <p className="text-xs font-bold uppercase">Working</p>
                    <p className="text-[10px] text-[#8a9b8e]">6 Days a Week</p>
                  </div>
                  <div className="flex-1 p-4 rounded-2xl bg-[#f9fbf9] text-center transition-transform hover:-translate-y-1">
                    <Globe className="w-5 h-5 mx-auto mb-2 text-[#388e3c]" />
                    <p className="text-xs font-bold uppercase">Global</p>
                    <p className="text-[10px] text-[#8a9b8e]">Shipping Worldwide</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form Section */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-[#e8f0e9] shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
              <div className="mb-10">
                <h2 className="text-3xl font-light text-[#0a2310] mb-2">Send a Message</h2>
                <p className="text-[#6b7e6f]">Fill out the form below and we'll get back to you shortly.</p>
              </div>

              <form onSubmit={submitContactForm} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#8a9b8e] ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Dr. John Doe"
                      className={`w-full bg-[#f9fbf9] rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#388e3c]/20 border ${errors.name ? "border-red-300" : "border-[#e8f0e9]"} transition-all`}
                    />
                    {errors.name && <p className="text-[10px] text-red-500 font-bold uppercase ml-1">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#8a9b8e] ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. john@clinic.com"
                      className={`w-full bg-[#f9fbf9] rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#388e3c]/20 border ${errors.email ? "border-red-300" : "border-[#e8f0e9]"} transition-all`}
                    />
                    {errors.email && (
                      <p className="text-[10px] text-red-500 font-bold uppercase ml-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#8a9b8e] ml-1">
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Bulk Order Inquiry"
                    className="w-full bg-[#f9fbf9] rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#388e3c]/20 border border-[#e8f0e9] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#8a9b8e] ml-1">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us how we can help..."
                    rows={6}
                    className={`w-full bg-[#f9fbf9] rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#388e3c]/20 border ${errors.message ? "border-red-300" : "border-[#e8f0e9]"} transition-all resize-none`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-[10px] text-red-500 font-bold uppercase ml-1">{errors.message}</p>
                  )}
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#0a2310] text-white font-bold py-5 rounded-2xl shadow-xl shadow-[#0a2310]/10 hover:bg-[#1a3d1e] hover:shadow-2xl hover:shadow-[#0a2310]/20 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed group overflow-hidden relative"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  )
}

