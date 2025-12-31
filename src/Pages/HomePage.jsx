import { ChevronRight, Plus, Microscope, ShieldCheck, Factory } from "lucide-react"
import Lab from "../assets/professional-veterinary-laboratory-background.jpg";
import man from "../assets/high-tech-veterinary-manufacturing-facility.jpg";
import pimage from "../assets/ProductImage.png"
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={Lab}
            alt="Laboratory"
            className="w-full h-full object-cover brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
            Pioneering the Future of <span className="text-emerald-400">Animal Health.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-medium max-w-2xl mx-auto mb-10 text-pretty">
            Herbal Trends is a global leader in manufacturing high-quality veterinary products, blending innovation with
            clinical excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-emerald-500 text-white rounded-full font-black text-lg hover:bg-emerald-400 hover:scale-105 transition-all shadow-2xl shadow-emerald-500/40">
              Explore Our Products
            </button>
            <button className="px-10 py-5 bg-white backdrop-blur-md border border-white/20 text-black rounded-full font-black text-lg hover:bg-white/20 transition-all">
              Our Research
            </button>
          </div>
        </div>
      </section>

      {/* Main Principles Section */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="text-5xl font-black text-green-950 tracking-tighter max-w-md leading-none">
            Our core <br />
            commitments.
          </h2>
          <p className="text-lg text-green-950/60 font-medium max-w-sm">
            We focus on three pillars that define our manufacturing excellence and global influence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              num: "01",
              title: "Sustainable Innovation",
              desc: "Accompanying veterinarians in their transition to modern, durable health practices.",
              icon: Microscope,
            },
            {
              num: "02",
              title: "Quality Assurance",
              desc: "Valorizing innovation through our proprietary QC systems and advanced material science.",
              icon: ShieldCheck,
            },
            {
              num: "03",
              title: "Global Supply",
              desc: "Operating a global network that ensures essential medical supplies reach every corner.",
              icon: Factory,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group p-10 bg-green-50 rounded-[2.5rem] hover:bg-green-950 hover:translate-y-[-8px] transition-all duration-500"
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
              <button className="flex items-center gap-2 font-bold text-green-950 group-hover:text-emerald-400 transition-colors">
                Learn more <ChevronRight className="w-4 h-4" />
              </button>
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
              src={man}
              alt="Facility"
              className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
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

          <div className="max-w-2xl mx-auto text-center mt-16">
            <p className="text-xl text-white/80 font-medium leading-relaxed mb-10 text-pretty">
              Herbal Trends is committed to the food transition in the marine products sector. We propose sustainable
              solutions serving the enterprises of tomorrow.
            </p>
            <button className="px-12 py-5 bg-white text-green-950 rounded-full font-black text-lg hover:bg-emerald-50 hover:scale-105 transition-all">
              Our Engagement
            </button>
          </div>
        </div>
      </section>

      {/* Grid Portfolio */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-green-950 tracking-tighter mb-20 text-balance leading-[0.9]">
          A global approach for <br />a model of the future.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { query: "veterinary handshake business", label: "Global Partnership" },
            { query: "medical lab close up aesthetic", label: "Precision Research" },
            { query: "animal care clinic interior", label: "Clinical Support" },
          ].map((item, idx) => (
            <div key={idx} className="relative aspect-[3/4] rounded-[2rem] overflow-hidden group">
              <img
                src={pimage}
                alt={item.label}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-white font-black text-2xl">{item.label}</span>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-950">
                  <Plus className="w-6 h-6" />
                </div>
              </div>
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
        <button className="px-16 py-6 bg-green-950 text-white rounded-full font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-green-950/30" 
        onClick={()=>navigate("/categories")}>
          Explore Products
        </button>
      </section>
    </main>
  )
}
