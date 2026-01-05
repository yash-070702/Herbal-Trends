import { ChevronRight, ShieldCheck, History, Award, BookOpen, Microscope, Globe, Users } from "lucide-react"
import picture1 from "../assets/pic1.png";
import picture2 from "../assets/pic2.png";
export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white font-sans antialiased text-green-950">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={picture2}
            alt="Veterinary Excellence"
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/20 to-white" />
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
                At Herbal Trends, we believe the future of veterinary medicine lies in sustainable, plant-based
                innovation. Our journey began with a simple mission: to provide veterinarians with clinical-grade herbal
                solutions that rival traditional pharmaceuticals in efficacy while offering a superior safety profile.
              </p>
              <p>
                Today, we operate at the intersection of traditional ethnobotany and modern biotechnology, ensuring
                every product that leaves our facility meets the most stringent global quality standards.
              </p>
            </div>
          </div>
          <div className="relative aspect-square rounded-[3rem] overflow-hidden group">
            <img
              src={picture1}
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
                desc: "Strategic logistics network serving over 40 countries.",
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
                className="p-8 bg-white rounded-[2rem] hover:shadow-2xl hover:shadow-green-950/5 transition-all duration-500 border border-green-950/5 group"
              >
                <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight">{item.title}</h3>
                <p className="text-green-950/60 font-medium leading-relaxed mb-6">{item.desc}</p>
                <button className="flex items-center gap-2 font-bold text-emerald-600 hover:text-emerald-500 transition-colors">
                  Details <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto overflow-hidden">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Our Legacy.</h2>
          <p className="text-xl text-green-950/60 font-medium">A timeline of innovation and commitment.</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-green-950/10 hidden md:block" />

          {[
            {
              year: "2010",
              title: "The Genesis",
              desc: "Founded with a vision to standardize herbal veterinary treatments.",
              align: "left",
            },
            {
              year: "2015",
              title: "Clinical Breakthrough",
              desc: "First patent granted for our proprietary extraction process.",
              align: "right",
            },
            {
              year: "2018",
              title: "Global Expansion",
              desc: "Established our international headquarters and manufacturing hub.",
              align: "left",
            },
            {
              year: "2024",
              title: "Future-Proofing",
              desc: "Launching our AI-driven diagnostic integration for personalized care.",
              align: "right",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center mb-16 last:mb-0 ${
                item.align === "left" ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 w-full md:w-auto" />
              <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-green-950 rounded-full border-4 border-white shadow-xl text-white font-black my-4 md:my-0 md:mx-8">
                <History className="w-5 h-5" />
              </div>
              <div
                className={`flex-1 w-full md:w-auto p-8 bg-green-50 rounded-[2.5rem] ${
                  item.align === "left" ? "text-left md:text-right" : "text-left"
                }`}
              >
                <span className="text-emerald-600 font-black text-2xl mb-2 block">{item.year}</span>
                <h3 className="text-2xl font-black mb-3 tracking-tight">{item.title}</h3>
                <p className="text-green-950/60 font-medium leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-green-950 rounded-[5rem] mx-4 mb-12 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">
                Excellence <br />
                recognized.
              </h2>
              <p className="text-xl text-white/70 font-medium leading-relaxed mb-12">
                Our commitment to quality has earned us the trust of professionals and the highest industry
                certifications.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="border-l-4 border-emerald-500 pl-6">
                  <span className="text-4xl font-black block mb-2">15+</span>
                  <p className="text-white/60 font-bold uppercase tracking-widest text-sm">International Awards</p>
                </div>
                <div className="border-l-4 border-emerald-500 pl-6">
                  <span className="text-4xl font-black block mb-2">100%</span>
                  <p className="text-white/60 font-bold uppercase tracking-widest text-sm">Clinical Safety</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: "ISO Certified", icon: ShieldCheck },
                { label: "GMP Compliant", icon: Award },
                { label: "Eco-Design Award", icon: Award },
                { label: "Top Innovator 2024", icon: ShieldCheck },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 flex flex-col items-center text-center group hover:bg-white/10 transition-all duration-500"
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
          <button className="px-12 py-6 bg-green-950 text-white rounded-full font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-green-950/30">
            Contact Us
          </button>
          <button className="px-12 py-6 bg-green-50 text-green-950 rounded-full font-black text-xl hover:bg-green-100 transition-all">
            Join the Network
          </button>
        </div>
      </section>

      
    </main>
  )
}
