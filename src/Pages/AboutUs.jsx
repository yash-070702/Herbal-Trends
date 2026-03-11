import {  ShieldCheck, History, Award, BookOpen, Microscope, Globe, Users, Heart, Leaf } from "lucide-react"
import picture2 from "../assets/pic2.png"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet-async"
export default function AboutUs() {
  const navigate = useNavigate()
  return (
    <>
    <Helmet>

{/* Page Title */}
<title>About Herbal Trends | Veterinary Herbal Products Manufacturer in India Since 2003</title>

{/* Primary SEO */}
<meta
name="description"
content="Herbal Trends is a Gurugram-based veterinary herbal products manufacturer since 2003. We specialize in natural veterinary medicines and supplements for cattle, poultry and pet healthcare."
/>

<meta
name="keywords"
content="Herbal Trends company, veterinary herbal medicine manufacturer India, veterinary company Gurugram Haryana, herbal animal healthcare products, cattle and poultry supplements manufacturer, veterinary pharmaceutical company India"
/>

<meta name="robots" content="index, follow" />

{/* Canonical */}
<link rel="canonical" href="https://yourdomain.com/about-us" />

{/* Open Graph (Social Media) */}
<meta property="og:type" content="website" />
<meta property="og:title" content="About Herbal Trends | Veterinary Herbal Medicine Manufacturer" />
<meta
property="og:description"
content="Discover the story of Herbal Trends, a trusted veterinary herbal medicine manufacturer delivering innovative animal healthcare solutions since 2003."
/>
<meta property="og:image" content="/preview.jpg" />
<meta property="og:url" content="https://yourdomain.com/about-us" />
<meta property="og:site_name" content="Herbal Trends" />
<meta property="og:locale" content="en_IN" />

{/* Twitter SEO */}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="About Herbal Trends | Veterinary Herbal Medicine Manufacturer" />
<meta
name="twitter:description"
content="Learn about Herbal Trends, a veterinary herbal medicine manufacturer providing natural healthcare products for livestock and pets."
/>
<meta name="twitter:image" content="/preview.jpg" />

{/* Local SEO Signals */}
<meta name="geo.region" content="IN-HR" />
<meta name="geo.placename" content="Gurugram, Haryana" />

    </Helmet>
    <main className="min-h-screen bg-[#e5faeb] font-sans antialiased text-green-950">
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
          <h1 className="text-3xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9] text-balance">
            Innovation Driven by Nature <br />
            <span className="text-emerald-400"> Quality Backed by Science.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-medium max-w-2xl mx-auto text-pretty">
            Transforming animal health through the synergy of nature's wisdom and advanced clinical manufacturing.
          </p>
        </div>
      </section>


           {/* Heritage Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase bg-emerald-500/10 text-emerald-600 rounded-full border border-emerald-500/20">
              Since 2003
            </span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.9]">
              Our Heritage <br />
              of Quality.
            </h2>
            <div className="space-y-6 text-lg text-green-950/70 font-medium leading-relaxed">
              <p>
                Since 2003, Herbal Trends has been at the forefront of the veterinary pharmaceutical industry. With over 20 years of dedicated experience, we specialize in the research, development, and manufacturing of high-potency herbal medicines and nutritional supplements for pets and livestock.
              </p>
              <p>
                We believe that the best healthcare for animals comes from the perfect synergy of ancient botanical wisdom and modern manufacturing technology. As a GMP (Good Manufacturing Practices) licensed company, we adhere to the most stringent international quality standards. Every batch produced in our facility undergoes rigorous testing to ensure safety, purity, and clinical efficacy.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            {[
              { icon: History, title: "20+ Years Experience", desc: "Over two decades of proven excellence in veterinary pharmaceuticals." },
              { icon: ShieldCheck, title: "GMP Licensed", desc: "Adherence to the most stringent international quality standards." },
              { icon: Microscope, title: "Rigorous Testing", desc: "Every batch undergoes comprehensive testing for safety and efficacy." },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 group">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-emerald-500/10 text-emerald-600 group-hover:bg-emerald-500/20 transition-all duration-500">
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-black text-green-950 mb-2">{item.title}</h3>
                  <p className="text-green-950/60 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Professionals Trust Us Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-linear-to-br from-emerald-50 to-green-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500 p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-black text-green-950 leading-tight tracking-tight mb-4">
            Why Veterinary Professionals Trust Herbal Trends
          </h2>
          <div className="w-16 h-1 bg-emerald-500 rounded-full mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Decades of Expertise",
                desc: "Operating since 2003, we have a deep understanding of animal physiology and the evolving needs of modern dairy farms and pet owners.",
                icon: Award,
              },
              {
                title: "GMP Certified Excellence",
                desc: "Our state-of-the-art manufacturing facility is designed to deliver consistent, pharmaceutical-grade products.",
                icon: ShieldCheck,
              },
              {
                title: "The Palatability Guarantee",
                desc: "We are pioneers in creating \"Acceptance-First\" formulas, ensuring our syrups and tablets are 100% palatable to eliminate the stress of dosing.",
                icon: Heart,
              },
              {
                title: "Holistic Wellness",
                desc: "From our Guard Pro hygiene range to our Zenith-Yeast nutritional elixirs, our portfolio addresses the root causes of health issues, not just the symptoms.",
                icon: Leaf,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group p-8 bg-white/60 backdrop-blur-sm rounded-2xl hover:bg-emerald-500 hover:-translate-y-2 transition-all duration-500 border border-white/40 hover:border-emerald-600/30 shadow-md hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-green-950 group-hover:text-white mb-3 transition-colors">
                  {item.title}
                </h3>
                <p className="text-green-950/70 group-hover:text-white/90 font-medium leading-relaxed text-sm md:text-base transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment to Future Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-linear-to-br from-green-950 to-emerald-950 rounded-3xl overflow-hidden shadow-lg p-8 md:p-12 text-white">
          <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
            Our Commitment to the Future
          </h2>
          <div className="w-16 h-1 bg-emerald-400 rounded-full mb-8" />

          <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed max-w-4xl">
            At Herbal Trends, we don't just manufacture medicine; we build foundations for a healthier animal kingdom. By choosing us, you are partnering with a legacy of trust, a future of innovation, and a company that truly understands the heart of veterinary care.
          </p>
        </div>
      </section>

      {/* Letter from Founder Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500 p-8 md:p-12">
          <div className="flex items-start justify-between mb-8 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-green-950 leading-tight tracking-tight mb-2">
                Letter from the Founder
              </h2>
              <p className="text-lg text-green-950/70 font-medium">A Legacy of Care, A Future of Health</p>
            </div>
            <div className="w-16 h-1 bg-blue-500 rounded-full hidden md:block" style={{ alignSelf: 'flex-start', marginTop: '1rem' }} />
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/50">
            <p className="text-green-950/80 font-medium leading-relaxed mb-6 text-lg">
              <span className="font-black text-green-950">To our valued partners, veterinarians, and animal lovers,</span>
            </p>

            <div className="space-y-6 text-green-950/75 font-medium leading-relaxed">
              <p>
                When I founded Herbal Trends in 2003, the goal was simple: to create veterinary products that didn't just work, but were a joy to administer. For too long, dosing animals was a struggle of bitter pills and ineffective formulas. I knew there was a better way—by looking to nature.
              </p>

              <p>
                Over the last 23 years, we have grown from a small manufacturing unit into a GMP-licensed leader in herbal veterinary medicine. Our journey has been defined by a relentless pursuit of quality. We don't just meet standards; we set them. Whether it is our 80% Yeast Plasmolysate syrup or our specialized dairy hygiene liquids, every product that leaves our facility carries the weight of two decades of research and a deep respect for animal life.
              </p>

              <p>
                As we look toward the future, our promise remains the same: to innovate with integrity, to manufacture with precision, and to ensure that every animal—from the smallest kitten to the largest dairy cow—has access to the very best that herbal science has to offer.
              </p>

              <p className="pt-4 border-t border-green-950/10">
                Thank you for trusting us with your animals' health since 2003.
              </p>

              <div className="pt-2">
                <p className="font-black text-green-950">Warm regards,</p>
                <p className="text-green-950 font-bold text-lg">Mr. P.K. Gupta</p>
                <p className="text-green-950/70">Founder, Herbal Trends</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources / Pillars Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500 p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
            <h2 className="text-4xl md:text-5xl font-black text-green-950 leading-tight tracking-tight max-w-md">
              The foundations <br />
              of our excellence.
            </h2>
            <div className="w-16 h-1 bg-emerald-500 rounded-full" />
          </div>

          <p className="text-lg text-green-950/75 font-medium max-w-3xl mb-12">
            Our resources are dedicated to maintaining the highest standard of animal care worldwide.
          </p>

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
              className="group p-8 md:p-10 bg-white/50 backdrop-blur-sm rounded-2xl hover:bg-green-950 hover:-translate-y-2 transition-all duration-500 border border-white/30 hover:border-emerald-600/30 shadow-md hover:shadow-lg"
            >
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                  <item.icon className="w-6 h-6" />
                </div>
               <h3 className="text-xl md:text-2xl font-black text-green-950 group-hover:text-white mb-4 transition-colors">{item.title}</h3>
                 <p className="text-green-950/70 group-hover:text-white/90 font-medium leading-relaxed transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    {/*Mission & Vision Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-green-950 tracking-tight mb-6 leading-tight">
            Our Mission & Vision
          </h2>
          <div className="w-16 h-1 bg-emerald-500 rounded-full mx-auto mb-8" />
          <p className="text-lg text-green-950/75 font-medium max-w-3xl mx-auto">
            Guiding principles that shape our journey.
          </p>
        </div>

        {/* Alternating Left-Right Layout */}
        <div className="space-y-20">
          
          {/* Mission: Image Left, Content Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img 
                src="https://res.cloudinary.com/djxxk3hkp/image/upload/v1772964581/Screenshot_2026-03-08_153514-removebg-preview_xztnoc.png" 
                alt="Mission target icon" 
                className="w-64 h-64 md:w-72 md:h-72 object-fit rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-1 bg-emerald-500 rounded-full" />
                <h3 className="text-3xl md:text-4xl font-black text-green-950 italic">Mission</h3>
              </div>
              <div className="space-y-4">
                {[
                  "To revolutionize animal healthcare by providing scientifically validated, high-performance herbal solutions that offer a safe and effective alternative to synthetic pharmaceuticals.",
                  "To enhance the quality of life for every animal we touch through gentle, plant-based remedies that work in harmony with their natural biology.",
                  "To empower farmers and pet owners with sustainable, residue-free herbal products that promote animal vitality and protect the integrity of our environment."
                ].map((mission, idx) => (
                  <p key={idx} className="text-green-950/75 font-medium leading-relaxed">
                    {mission}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Vision: Content Left, Image Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-3xl md:text-4xl font-black text-green-950 italic">Vision</h3>
                <div className="w-16 h-1 bg-emerald-500 rounded-full" />
              </div>
              <div className="space-y-4">
                {[
                  "To become the global leader in phyto-veterinary medicine, where nature-based treatments are the first choice for practitioners and farmers worldwide.",
                  "A world where every pet and livestock animal lives a longer, healthier life through the healing power of nature's finest ingredients.",
                  "To lead a global shift toward 'One Health'—where healthy animals, healthy people, and a healthy planet are achieved through botanical excellence."
                ].map((vision, idx) => (
                  <p key={idx} className="text-green-950/75 font-medium leading-relaxed">
                    {vision}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex justify-center md:justify-end order-first md:order-last">
              <img 
                src="https://res.cloudinary.com/djxxk3hkp/image/upload/v1772964543/Screenshot_2026-03-08_153526-removebg-preview_fwnrbk.png" 
                alt="Vision diamond icon" 
                className="w-64 h-64 md:w-72 md:h-72 object-fit rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Core Values: Image Left, Content Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="flex justify-center">
              <img 
                src="https://res.cloudinary.com/djxxk3hkp/image/upload/v1772964618/Screenshot_2026-03-08_153549-removebg-preview_u9fwc0.png" 
                alt="Core values megaphone icon" 
                className="w-64 h-64 md:w-72 md:h-72 object-fit rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-1 bg-emerald-500 rounded-full" />
                <h3 className="text-3xl md:text-4xl font-black text-green-950 italic">Core Values</h3>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/40 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-lg">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-black uppercase tracking-widest text-emerald-600 mb-2">Quality & Excellence</p>
                    <p className="text-green-950/75 font-medium leading-relaxed">Every product reflects our commitment to pharmaceutical-grade quality.</p>
                  </div>
                  <div className="border-t border-green-950/10 pt-4">
                    <p className="text-sm font-black uppercase tracking-widest text-emerald-600 mb-2">Sustainability & Trust</p>
                    <p className="text-green-950/75 font-medium leading-relaxed">Built on 20+ years of integrity and environmental responsibility.</p>
                  </div>
                  <div className="border-t border-green-950/10 pt-4">
                    <p className="text-sm font-black uppercase tracking-widest text-emerald-600 mb-2">Holistic Wellness</p>
                    <p className="text-green-950/75 font-medium leading-relaxed">Treating root causes, not just symptoms, for lasting animal health.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


 

      {/* Achievements Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-linear-to-br from-green-950 to-emerald-950 rounded-3xl overflow-hidden shadow-lg p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-6">
                Excellence <br />
                recognized.
              </h2>
              <p className="text-lg text-white/80 font-medium leading-relaxed">
                Our commitment to quality has earned us the trust of professionals and the highest industry
                certifications.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {[
                { label: "GMP Certified", icon: ShieldCheck },
                { label: "ISO Certified", icon: ShieldCheck },
                { label: "100% Clinical Safety", icon: ShieldCheck },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 md:p-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-emerald-400/50 flex flex-col items-center text-center group hover:bg-white/15 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/20"
                >
                  <item.icon className="w-10 h-10 md:w-12 h-12 text-emerald-400 mb-4 group-hover:scale-125 group-hover:text-emerald-300 transition-all duration-300" />
                  <span className="text-lg md:text-xl font-black tracking-tight group-hover:text-emerald-300 transition-colors">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    {/* Final CTA */}
     <section className="py-40 text-center bg-green-50 rounded-t-[5rem]">
        
         <h2 className="text-5xl md:text-7xl font-black text-green-950 tracking-tighter mb-12">
            Join us in shaping the <br />
            future of animal health.
          </h2>
      
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
          className="px-16 py-6 bg-green-950 text-white rounded-full font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-green-950/30"
          onClick={() => navigate("/categories")}
        >
              Contact Us
            </button>
          </div>
      </section>
    </main>
    </>
  )
}
