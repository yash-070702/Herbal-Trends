import { Plus, Microscope, ShieldCheck, Factory, Leaf, Beaker, Heart, X } from "lucide-react"
import man from "../assets/high-tech-veterinary-manufacturing-facility.jpg"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Helmet } from "react-helmet-async"

export default function Home() {
  const navigate = useNavigate()
  const [expandedCard, setExpandedCard] = useState(null)

  return (
    
    <>

<Helmet>
  {/* Title */}
  <title>Herbal Trends | Veterinary Herbal Products Manufacturer in India</title>

  {/* Basic SEO */}
  <meta
    name="description"
    content="Herbal Trends is a trusted veterinary herbal products manufacturer in Gurugram, India since 2003. We develop natural veterinary medicines and supplements for pets, cattle and poultry to improve animal health and productivity."
  />

  <meta
    name="keywords"
    content="veterinary herbal products, veterinary medicine manufacturer India, herbal veterinary medicines, cattle health supplements, poultry health supplements, herbal livestock medicine, veterinary pharma company Gurugram"
  />

  <meta name="author" content="Herbal Trends" />

  {/* Robots */}
  <meta name="robots" content="index, follow" />

  {/* Canonical (add when domain exists) */}
  <link rel="canonical" href="https://yourdomain.com/" />

  {/* Open Graph (Facebook / LinkedIn sharing) */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Herbal Trends | Natural Veterinary & Animal Health Products" />
  <meta
    property="og:description"
    content="Discover premium herbal veterinary products for livestock, pets and poultry designed for improved animal health and productivity."
  />
  <meta property="og:image" content="/preview.jpg" />
  <meta property="og:url" content="https://yourdomain.com/" />

  {/* Twitter SEO */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Herbal Trends | Veterinary Herbal Products Manufacturer" />
  <meta
    name="twitter:description"
    content="Premium herbal veterinary supplements and medicines for livestock productivity and pet wellness."
  />
  <meta name="twitter:image" content="/preview.jpg" />

  {/* Geo Tags (Local SEO) */}
  <meta name="geo.region" content="IN-HR" />
  <meta name="geo.placename" content="Gurugram" />
  <meta name="geo.position" content="28.4595;77.0266" />
  <meta name="ICBM" content="28.4595, 77.0266" />

  {/* Theme Color */}
  <meta name="theme-color" content="#2E7D32" />
</Helmet>

    <main className="min-h-screen bg-[#e5faeb]">
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

      {/* Introduction Section - Blog Style */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <article className="bg-linear-to-br from-green-50 to-emerald-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500">
         

          {/* Blog Content */}
          <div className="p-8 md:p-12">
            {/* Meta Information */}
           

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-black text-green-950 mb-6 leading-tight tracking-tight">
              Our vision for the next generation.
            </h2>

            {/* Blog Excerpt Line */}
            <div className="w-16 h-1 bg-emerald-500 rounded-full mb-8" />

            {/* Blog Content */}
            <div className="space-y-6 text-green-950/75 font-medium leading-relaxed">
              <p className="text-lg">
                At herbal trends, we believe that the best medicine for animals has already been perfected by nature.
                Our mission is to transform traditional botanical wisdom into evidence-based healthcare solutions for
                the modern veterinary world.
              </p>
              <p className="text-lg">
                We specialize in developing high-potency, herbal and supplement formulations that support animal health
                without the side effects. From livestock productivity to pet wellness, our products are rigorously
                tested to ensure they meet the highest standards of safety and efficacy. We aren't just offering
                supplements; we are offering a sustainable, chemical-free future for animal care.
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* Main Principles Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
              <h2 className="text-4xl md:text-5xl font-black text-green-950 leading-tight tracking-tight">
                Our core <br />
                commitments.
              </h2>
              <div className="w-16 h-1 bg-emerald-500 rounded-full" />
            </div>

            <p className="text-lg text-green-950/75 font-medium max-w-3xl mb-12 leading-relaxed">
              We believe that healthy animals are the backbone of a prosperous country. By combining ancient botanical wisdom
              with modern veterinary delivery systems—from soothing ointments to potent liquids— <b className="text-green-950 font-black">Herbal Trends</b> provides the
              tools you need to keep your herd healthy, productive, and profitable, naturally.
            </p>

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
                  className="group p-10 bg-white/50 backdrop-blur-sm rounded-2xl hover:bg-emerald-500 hover:-translate-y-2 transition-all duration-500 border border-white/30 hover:border-emerald-600/30 shadow-md hover:shadow-lg"
                >
                  <div className="flex justify-between items-start mb-12">
                    <span className="text-6xl font-black text-green-950/10 group-hover:text-white/20 transition-colors">
                      {item.num}
                    </span>
                    <item.icon className="w-10 h-10 text-emerald-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-black text-green-950 group-hover:text-white mb-4 tracking-tight transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-green-950/70 group-hover:text-white/90 font-medium leading-relaxed transition-colors">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="bg-linear-to-br from-emerald-50 to-green-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500 p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-green-950 tracking-tight mb-6 leading-tight">
              Why Choose Us
            </h2>
            <div className="w-16 h-1 bg-emerald-500 rounded-full mx-auto mb-8" />
            <p className="text-lg text-green-950/75 font-medium max-w-3xl mx-auto">
              Discover what sets Herbal Trends apart in the veterinary wellness industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Factory,
                title: "Zero Residue",
                desc: "No harmful chemicals in meat or milk products",
                color: "bg-gradient-to-br from-emerald-100 to-emerald-50",
                iconBg: "bg-emerald-100",
                iconColor: "text-emerald-600",
              },
              {
                icon: Beaker,
                title: "Science-Backed",
                desc: "Herbal formulas tested for consistent results",
                color: "bg-gradient-to-br from-blue-100 to-blue-50",
                iconBg: "bg-blue-100",
                iconColor: "text-blue-600",
              },
              {
                icon: Leaf,
                title: "Eco-Friendly",
                desc: "Sustainably sourced ingredients and biodegradable focus",
                color: "bg-gradient-to-br from-green-100 to-green-50",
                iconBg: "bg-green-100",
                iconColor: "text-green-600",
              },
              {
                icon: Heart,
                title: "Holistic Health",
                desc: "Treating the root cause, not just the symptoms",
                color: "bg-gradient-to-br from-red-100 to-red-50",
                iconBg: "bg-red-100",
                iconColor: "text-red-600",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`group p-8 ${item.color} rounded-2xl shadow-md hover:shadow-2xl hover:shadow-green-950/15 hover:-translate-y-2 transition-all duration-500 cursor-pointer border border-white/50 hover:border-white/80`}
              >
                <div
                  className={`w-16 h-16 ${item.iconBg} ${item.iconColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}
                >
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-green-950 mb-3 group-hover:text-green-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-green-950/70 font-medium leading-relaxed group-hover:text-green-950/85 transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
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
    </>
  )
}
