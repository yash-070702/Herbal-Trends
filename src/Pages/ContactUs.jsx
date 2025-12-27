"use client"
import { Phone, Mail, MapPin, Leaf } from "lucide-react"

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <main className="max-w-7xl mx-auto px-6 lg:px-20 py-12">
        {/* Top Map Section */}
        <div className="w-full h-75 rounded-lg overflow-hidden mb-12 shadow-sm border border-gray-100">
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
          <section>
            <h2 className="text-4xl font-bold mb-5 text-gray-900 tracking-tight">Contact Information</h2>

            <div className=" text-xl text-green-800 font-semibold ">Because every paw , every tail, and every whisker matters to us .....</div>

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
          <section className="bg-[#e9f3eb] rounded-3xl lg:w-125 p-5 md:p-8  shadow-sm">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 tracking-tight">Contact Form</h2>
            <form className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-white rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#4d8155] border-none shadow-sm text-md"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#4d8155] border-none shadow-sm text-md"
                />
              </div>
              <div>
                <textarea
                  placeholder="Write a Message"
                  rows={4}
                  className="w-full bg-white rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#4d8155] border-none shadow-sm text-md resize-none"
                ></textarea>
              </div>
              <div className="flex justify-center pt-1">
                <button
                  type="submit"
                  className="bg-white text-gray-800 font-bold px-12 py-4 rounded-2xl shadow-md hover:bg-gray-50 transition-colors text-md"
                >
                  Send Message
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>
    </div>
  )
}
