"use client"

import { ChevronRight, ShieldCheck, History, Award, BookOpen, Microscope, Globe, Users } from "lucide-react"
import picture1 from "../assets/pic1.png"
import picture2 from "../assets/pic2.png"
import { useNavigate } from "react-router-dom"
export default function AboutUs() {
  const navigate = useNavigate()
  return (
    <main className="min-h-screen bg-white font-sans antialiased text-green-950">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={picture2 || "/placeholder.svg"}
            alt="Veterinary Excellence"
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-green-950/20 to-white" />
        </div>

        <div className="relative z-10 text-center max-w-5xl px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
            About Herbal Trends
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] text-balance">
            Rooted in Science. <br />
            <span className="text-emerald-400">Driven by Care.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-medium max-w-2xl mx-auto text-pretty">
            Transforming animal health through the synergy of nature's wisdom and advanced clinical manufacturing.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.9]">
              Our vision for <br />
              the next generation.
            </h2>
            <div className="space-y-6 text-lg text-green-950/70 font-medium leading-relaxed">
              <p>
                At herbal trends, we believe that the best medicine for animals has already been perfected by nature.
                Our mission is to transform traditional botanical wisdom into evidence-based healthcare solutions for
                the modern veterinary world.
              </p>
              <p>
                We specialize in developing high-potency, herbal and supplement formulations that support animal health
                without the side effects. From livestock productivity to pet wellness, our products are rigorously
                tested to ensure they meet the highest standards of safety and efficacy. We aren't just offering
                supplements; we are offering a sustainable, chemical-free future for animal care.
              </p>
            </div>
          </div>
          <div className="relative aspect-square rounded-[3rem] overflow-hidden group">
            <img
              src={picture1 || "/placeholder.svg"}
              alt="Lab Innovation"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[3rem]" />
          </div>
        </div>
      </section>

      {/* Resources / Pillars Section */}
      <section className="py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-5xl font-black tracking-tighter max-w-md leading-none">
              The foundations <br />
              of our excellence.
            </h2>
            <p className="text-lg text-green-950/60 font-medium max-w-sm">
              Our resources are dedicated to maintaining the highest standard of animal care worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "R&D Lab",
                desc: "State-of-the-art facility for botanical extraction and analysis.",
                icon: Microscope,
              },
              {
                title: "Global Supply",
                desc: "Strategic logistics network serving over different countries.",
                icon: Globe,
              },
              {
                title: "Expert Team",
                desc: "Led by world-class veterinarians and pharmacologists.",
                icon: Users,
              },
              {
                title: "Resource Center",
                desc: "Extensive clinical trials and white papers for practitioners.",
                icon: BookOpen,
              },
            ].map((item, idx) => (
             <div
              key={idx}
              className="group p-10 bg-green-100 rounded-[2.5rem] hover:bg-green-950 hover:-translate-y-2 transition-all duration-500"
            >
                <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
               <h3 className="text-2xl font-black text-green-950 group-hover:text-white mb-4">{item.title}</h3>
                 <p className="text-green-950/60 group-hover:text-white/70 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Our Mission & Vision.</h2>
          <p className="text-xl text-green-950/60 font-medium">Guiding principles that shape our journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {[
            {
              id: 1,
              mission:
                "To revolutionize animal healthcare by providing scientifically validated, high-performance herbal solutions that offer a safe and effective alternative to synthetic pharmaceuticals.",
              vision:
                "To become the global leader in phyto-veterinary medicine, where nature-based treatments are the first choice for practitioners and farmers worldwide.",
            },
            {
              id: 2,
              mission:
                "To enhance the quality of life for every animal we touch through gentle, plant-based remedies that work in harmony with their natural biology.",
              vision:
                "A world where every pet and livestock animal lives a longer, healthier life through the healing power of nature's finest ingredients.",
            },
            {
              id: 3,
              mission:
                "To empower farmers and pet owners with sustainable, residue-free herbal products that promote animal vitality and protect the integrity of our environment.",
              vision:
                "To lead a global shift toward 'One Health'—where healthy animals, healthy people, and a healthy planet are achieved through botanical excellence.",
            },
          ].map((item, idx) => (
            <div
  key={item.id}
  className="group relative overflow-hidden rounded-[2.5rem] border border-green-950/10 hover:border-emerald-500/30 transition-all duration-500 h-full flex"
>
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:via-emerald-500/3 group-hover:to-emerald-500/5 transition-all duration-500" />

              <div className="relative p-8 md:p-10 bg-white/50 backdrop-blur-sm flex flex-col h-full">
                {/* Card number badge */}
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 font-black text-lg mb-6 group-hover:bg-emerald-500/20 transition-all duration-500">
                  {item.id}
                </div>

                {/* Mission Section */}
                <div className="mb-8 pb-8 border-b border-green-950/10 h-45  md:min-h-45">
                  <h3 className="text-sm font-black uppercase tracking-widest text-emerald-600 mb-3">Mission</h3>
                  <p className="text-base md:text-lg text-green-950/80 font-medium leading-relaxed">{item.mission}</p>
                </div>

                {/* Vision Section */}
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-emerald-600 mb-3">Vision</h3>
                  <p className="text-base md:text-lg text-green-950/70 font-medium leading-relaxed">{item.vision}</p>
                </div>

                {/* Hover indicator */}
                <div className="absolute top-0 left-0 w-1 h-0 bg-emerald-500 group-hover:h-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Visual connector line (hidden on mobile) */}
        <div className="mt-16 hidden lg:flex justify-between items-start relative h-1 bg-linear-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
        </div>
      </section>


      {/* Achievements Section */}
      <section className="py-24 bg-green-950 rounded-[5rem] mx-4 mb-12 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">
                Excellence <br />
                recognized.
              </h2>
              <p className="text-xl text-white/70 font-medium leading-relaxed mb-12">
                Our commitment to quality has earned us the trust of professionals and the highest industry
                certifications.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { label: "GMP Certified", icon: ShieldCheck },
                { label: "ISO Certified", icon: ShieldCheck },
                { label: "100 % Clinical Safety", icon: ShieldCheck },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white/5 backdrop-blur-xl rounded-4xl border border-white/10 flex flex-col items-center text-center group hover:bg-white/10 transition-all duration-500"
                >
                  <item.icon className="w-12 h-12 text-emerald-400 mb-6 group-hover:scale-110 transition-transform" />
                  <span className="text-xl font-black tracking-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 text-center px-4">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12 leading-tight">
          Join us in shaping the <br />
          <span className="text-emerald-500">future of animal health.</span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="px-12 py-6 bg-green-950 text-white rounded-full font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-green-950/30"
            onClick={() => navigate("/contact-us")}
          >
            Contact Us
          </button>
        </div>
      </section>
    </main>
  )
}
