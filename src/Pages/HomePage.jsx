import { Plus, Microscope, ShieldCheck, Factory, Leaf, Beaker, Heart, X } from "lucide-react"
import Lab from "../assets/professional-veterinary-laboratory-background.jpg"
import man from "../assets/high-tech-veterinary-manufacturing-facility.jpg"

import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Home() {
  const navigate = useNavigate()
  const [expandedCard, setExpandedCard] = useState(null)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute  inset-0 z-0">
          {/* <img
            src={Lab || "/placeholder.svg"}
            alt="Laboratory"
            className="w-full h-full object-cover brightness-[0.3]"
          /> */}
          <div className="w-full h-full object-cover bg-green-500 brightness-[0.3]"></div>
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-white" />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
            Nature's Solution <br></br> to the <span className="text-green-950">Animal Health.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-medium max-w-2xl mx-auto mb-10 text-pretty">
            Herbal Trends is a global leader in manufacturing high-quality veterinary products, blending innovation with
            clinical excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-10 py-5 bg-emerald-500 text-white rounded-full font-black text-lg hover:bg-emerald-400 hover:scale-105 transition-all shadow-2xl shadow-emerald-500/40"
              onClick={() => navigate("/categories")}
            >
              Explore Our Products
            </button>
          </div>
        </div>
      </section>

      {/* Main Principles Section */}
      <section className="pt-32 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
          <h2 className="text-5xl font-black text-green-950 tracking-tighter max-w-md leading-none">
            Our core <br />
            commitments.
          </h2>
          <p className="text-lg text-green-950/60 font-medium max-w-xl">
            We believe that healthy animals are the backbone of a prosperous farm. By combining ancient botanical wisdom
            with modern veterinary delivery systems—from soothing ointments to potent liquids—Herbal Trendsprovides the
            tools you need to keep your herd healthy, productive, and profitable, naturally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              num: "01",
              title: "Rumen-Friendly Science",
              desc: "Our products are designed to work in harmony with the cattle's complex digestive system, supporting beneficial microflora",
              icon: Microscope,
            },
            {
              num: "02",
              title: "GMP-Certified Excellence",
              desc: "Every bolus, gel, and powder is manufactured in state-of-the-art facilities with strict quality control protocols.",
              icon: ShieldCheck,
            },
            {
              num: "03",
              title: "Holistic Productivity",
              desc: "We don't just treat symptoms; we improve the animal's overall Feed Conversion Ratio (FCR) and reproductive health.",
              icon: Factory,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group p-10 bg-green-50 rounded-[2.5rem] hover:bg-green-950 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-6xl font-black text-green-950/10 group-hover:text-white/10 transition-colors">
                  {item.num}
                </span>
                <item.icon className="w-10 h-10 text-green-950 group-hover:text-emerald-400 transition-colors" />
              </div>
              <h3 className="text-3xl font-black text-green-950 group-hover:text-white mb-6 tracking-tight">
                {item.title}
              </h3>
              <p className="text-green-950/60 group-hover:text-white/70 font-medium leading-relaxed mb-8">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 px-4 max-w-7xl mx-auto bg-white">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-green-950 tracking-tighter mb-6 leading-tight">
            Why Choose Us
          </h2>
          <p className="text-lg text-green-950/60 font-medium max-w-3xl mx-auto">
            Discover what sets Herbal Trends apart in the veterinary wellness industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Factory,
              title: "Zero Residue",
              desc: "No harmful chemicals in meat or milk products",
              color: "bg-emerald-50",
              iconColor: "text-emerald-600",
              hoverBg: "hover:bg-emerald-600",
            },
            {
              icon: Beaker,
              title: "Science-Backed",
              desc: "Herbal formulas tested for consistent results",
              color: "bg-blue-50",
              iconColor: "text-blue-600",
              hoverBg: "hover:bg-blue-600",
            },
            {
              icon: Leaf,
              title: "Eco-Friendly",
              desc: "Sustainably sourced ingredients and biodegradable focus",
              color: "bg-green-50",
              iconColor: "text-green-600",
              hoverBg: "hover:bg-green-600",
            },
            {
              icon: Heart,
              title: "Holistic Health",
              desc: "Treating the root cause, not just the symptoms",
              color: "bg-red-50",
              iconColor: "text-red-600",
              hoverBg: "hover:bg-red-600",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`group p-8 ${item.color} rounded-4xl hover:shadow-2xl hover:shadow-green-950/10 hover:-translate-y-1.5 transition-all duration-500 cursor-pointer border border-transparent ${item.hoverBg} hover:border-white/30`}
            >
              <div
                className={`w-16 h-16 ${item.iconColor} rounded-2xl flex items-center justify-center mb-6 group-${item.hoverBg.replace("hover:", "")} transition-all duration-500 group-hover:bg-white/20 group-hover:scale-110`}
              >
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-green-950 mb-3 group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="text-green-950/70 font-medium leading-relaxed group-hover:text-white/80 transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 bg-green-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight">
              Combining innovation, <br />
              durability, and efficiency.
            </h2>
          </div>

          <div className="relative rounded-[3rem] overflow-hidden group">
            <img
              src={man || "/placeholder.svg"}
              alt="Facility"
              className="w-full h-150 object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 hover:scale-110 active:scale-95 transition-all group/play">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-green-950">
                  <Plus className="w-8 h-8 rotate-45" />
                </div>
              </button>
            </div>
          </div>

          <div className="max-w-7xl mx-auto text-center mt-16">
            <p className="text-xl text-white/80 font-medium leading-relaxed mb-10 text-pretty">
              At herbal trends, we believe that the best medicine for animals has already been perfected by nature. Our
              mission is to transform traditional botanical wisdom into evidence-based healthcare solutions for the
              modern veterinary world. We specialize in developing high-potency, herbal and supplement formulations that
              support animal health without the side effects. From livestock productivity to pet wellness, our products
              are rigorously tested to ensure they meet the highest standards of safety and efficacy. We aren't just
              offering supplements; we are offering a sustainable, chemical-free future for animal care.
            </p>
            <button
              className="px-12 py-5 bg-white text-green-950 rounded-full font-black text-lg hover:bg-emerald-50 hover:scale-105 transition-all"
              onClick={() => navigate("/about-us")}
            >
              Our Engagement
            </button>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="pt-32 px-4 max-w-7xl mx-auto pb-20">
        <h2 className="text-5xl font-black text-green-950 tracking-tighter mb-5 text-balance leading-[0.9]">
          Our core Value.
        </h2>

        <p className="text-lg text-green-950/60 font-medium max-w-3xl mb-16 leading-relaxed">
          These principles guide every formula we develop and every partnership we build.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              label: "Purity First",
              desc: "We use only the highest-grade botanical extracts, ensuring our products are free from heavy metals, contaminants, and synthetic fillers.",
              image: "https://res.cloudinary.com/djxxk3hkp/image/upload/v1767984512/purity-first-botanical_shylcc.jpg",
            },
            {
              label: "Scientific Integrity",
              desc: "While we honor tradition, we verify our results through rigorous testing. Nature provides the ingredients; science proves the efficacy.",
              image: "https://res.cloudinary.com/djxxk3hkp/image/upload/v1767984538/scientific-integrity-lab_m403ev.jpg",
            },
            {
              label: "Animal Welfare",
              desc: "Every decision we make is centered on the comfort and longevity of the animals. We believe in 'First, do no harm.'",
              image:"https://res.cloudinary.com/djxxk3hkp/image/upload/v1767984512/animal-welfare-care_iwglym.jpg",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative aspect-3/4 rounded-4xl overflow-hidden group cursor-pointer"
              onClick={() => setExpandedCard(expandedCard === idx ? null : idx)}
            >
              {/* Image with grayscale effect */}
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.label}
                className="w-full h-full object-cover transition-all duration-700"
              
              />

              <div
                className="absolute inset-0 bg-linear-to-t from-green-950/95 via-green-950/60 to-transparent transition-all duration-500"
                style={{
                  opacity: expandedCard === idx ? 1 : 0,
                }}
              />

              {expandedCard === idx && (
                <div className="absolute inset-0 flex flex-col justify-between p-8 z-20">
                  {/* Close button */}
                  <div className="flex justify-end">
                    <button
                      className="w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-all backdrop-blur-sm border border-white/30"
                      onClick={(e) => {
                        e.stopPropagation()
                        setExpandedCard(null)
                      }}
                    >
                      <X className="w-5 h-5 text-black" />
                    </button>
                  </div>

                  {/* Main content */}
                  <div className="space-y-6">
                    <h3 className="text-4xl font-black text-white leading-tight">{item.label}</h3>
                    <p className="text-white/90 text-lg font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )}

              {expandedCard !== idx && (
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white font-black text-2xl drop-shadow-lg">{item.label}</span>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/40 group-hover:bg-white/40 transition-all">
                    <Plus className="w-6 h-6" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 text-center bg-green-50 rounded-t-[5rem]">
        <h2 className="text-5xl md:text-7xl font-black text-green-950 tracking-tighter mb-12">
          Let's talk about <br />
          our Products.
        </h2>
        <button
          className="px-16 py-6 bg-green-950 text-white rounded-full font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-green-950/30"
          onClick={() => navigate("/categories")}
        >
          Explore Products
        </button>
      </section>
    </main>
  )
}
