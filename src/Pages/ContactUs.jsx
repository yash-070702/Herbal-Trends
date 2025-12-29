import { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"

const WEB3FORMS_ACCESS_KEY = "your_access_key_here" // Declare the variable here

export default function ContactUs() {
  const [loading, setLoading] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState({})

  const toast = {
    success: (message) => {
      setFormSubmitted(true)
      setTimeout(() => setFormSubmitted(false), 5000)
      console.log("Success:", message)
    },
    error: (message) => {
      console.error("Error:", message)
    },
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const submitContactForm = async () => {
    console.log("Form Data - ", formData)

    if (!validateForm()) {
      return
    }

    try {
      setLoading(true)

      const submitData = new FormData()

      submitData.append("access_key", WEB3FORMS_ACCESS_KEY)

      submitData.append("name", formData.name)
      submitData.append("email", formData.email)
      submitData.append("message", formData.message)

      // Optional fields
      submitData.append("subject", "New Contact Us Submission")
      submitData.append("from_name", formData.name)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData,
      })

      const result = await response.json()

      if (response.ok && result.success) {
        toast.success("Your message has been sent successfully!")
        setFormData({
          name: "",
          email: "",
          message: "",
        })
      } else {
        console.error("Web3Forms Error:", result)
        toast.error(result.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("ERROR MESSAGE - ", error.message)
      toast.error("Failed to send message. Please check your internet connection.")
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <main className="max-w-7xl mx-auto px-6 lg:px-20 py-12">
        {/* Top Map Section */}
        <div
          className="w-full h-75 rounded-lg overflow-hidden mb-12 shadow-sm border border-gray-100 opacity-0"
          style={{
            animation: "fadeInDown 1s ease-out forwards",
          }}
        >
          <style
            dangerouslySetInnerHTML={{
              __html: `
            @keyframes fadeInDown {
              from { opacity: 0; transform: translateY(-20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeInLeft {
              from { opacity: 0; transform: translateX(-30px); }
              to { opacity: 1; transform: translateX(0); }
            }
            @keyframes fadeInRight {
              from { opacity: 0; transform: translateX(30px); }
              to { opacity: 1; transform: translateX(0); }
            }
          `,
            }}
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9653566401576!2d76.99038877495002!3d28.450460692326487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17972e7cf663%3A0xfb3c9cb09b0df1d6!2sHERBAL%20TRENDS!5e0!3m2!1sen!2sin!4v1766749105052!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="grid grid-cols-1 mt-20 lg:grid-cols-2 gap-16 lg:gap-30">
          {/* Contact Information */}
          <section
            className="opacity-0"
            style={{
              animation: "fadeInLeft 0.8s ease-out 0.3s forwards",
            }}
          >
            <h2 className="text-4xl font-bold mb-5 text-gray-900 tracking-tight">Contact Information</h2>

            <div className=" text-xl text-green-800 font-semibold ">
              Because every paw , every tail, and every whisker matters to us .....
            </div>

            <div className="my-15 text-xl">🐾 🐾🐾 🐾🐾 🐾🐾 🐾🐾 🐾🐾 🐾🐾</div>

            <div className="space-y-10">
              <div className="flex items-start gap-5">
                <div className="mt-1">
                  <Phone className="w-7 h-7 text-gray-900" />
                </div>
                <div>
                  <p className=" text-md lg:text-lg font-medium text-gray-900">9910037950</p>
                  <p className="text-gray-500 text-sm">Monday to Saturday. 10 AM to 6 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="mt-1">
                  <Mail className="w-7 h-7 text-gray-900" />
                </div>
                <div>
                  <p className="text-md lg:text-lg font-medium text-gray-900">herbaltrendsggn@gmail.com</p>
                  <p className="text-gray-500 text-sm">Email us your query</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="mt-1">
                  <MapPin className="w-7 h-7 text-gray-900" />
                </div>
                <div>
                  <p className="text-md lg:text-lg font-medium text-gray-900 leading-snug">
                    Lane No. - 8, Pataudi Rd, Kadipur Industrial Area, Sector 10 Gurugram, Haryana 122001
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section
            className="bg-[#e9f3eb] rounded-3xl lg:w-125 p-5 md:p-8 shadow-sm opacity-0"
            style={{
              animation: "fadeInRight 0.8s ease-out 0.6s forwards",
            }}
          >
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 tracking-tight">Contact Form</h2>
            <form className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="w-full bg-white rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#4d8155] border-none shadow-sm text-md"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full bg-white rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#4d8155] border-none shadow-sm text-md"
                />
              </div>
              <div>
                <textarea
                  placeholder="Write a Message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-white rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#4d8155] border-none shadow-sm text-md resize-none"
                ></textarea>
              </div>
              <div className="flex justify-center pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  onClick={submitContactForm}
                  className="bg-white text-gray-800 font-bold px-12 py-4 rounded-2xl shadow-md hover:bg-gray-50 transition-colors text-md"
                >
                  {loading ? (
                    <div
                      className="flex items-center gap-2"
                      // animate={{ rotate: 360 }}
                      // transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <>
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>
    </div>
  )
}
