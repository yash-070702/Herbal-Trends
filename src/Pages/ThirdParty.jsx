import { Factory, ShieldCheck, Leaf, PackageCheck } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet-async"

export default function ThirdParty() {
  const navigate = useNavigate()

  const products = [
    "Calcium Liquid", "Calcium Bolus", "Calcium Tablet", "Mineral Mixture",
    "Liver Tonic", "Shampoo", "Deodorant", "Perfume", "Creams",
    "Uterine Tonic", "Energy Booster", "Digestive Bolus", "Digestive Powder",
    "Anorexia Powder", "Anorexia Bolus", "Immunity Booster",
    "Area Freshener", "Kannel Wash", "Calcium Granule", "Enzyme Tonics",
    "Cough Syrup", "Herbal Medicines", "Pre Biotic", "Pro Biotic",
    "Calcium Gel", "Joint Pain Tablet", "B Complex", "Multivitamins",
    "Growth Promotor", "Kidney Medicine", "Stone Medicine", "UTI Medicine",
    "Wound Healer", "Ticks Spray", "Hand Wash", "Birds Tonic",
    "Chewable Tablet"
  ]

  return (
    <> 
    <Helmet>

{/* Title */}
<title>Veterinary Third Party Manufacturing in India | Herbal Trends</title>

{/* Primary SEO */}
<meta
name="description"
content="Herbal Trends offers GMP-certified veterinary third party manufacturing and PCD franchise services in India. We manufacture herbal veterinary medicines, feed supplements and animal healthcare products for cattle, poultry and pets."
/>

<meta
name="keywords"
content="veterinary third party manufacturing India, veterinary PCD franchise company, herbal veterinary products manufacturer India, cattle feed supplements manufacturer, poultry veterinary medicines manufacturer, animal healthcare products manufacturer"
/>

<meta name="robots" content="index, follow, max-image-preview:large" />

{/* Canonical */}
<link rel="canonical" href="https://yourdomain.com/third-party-manufacturing" />

{/* Language */}
<html lang="en-IN" />

{/* Open Graph */}
<meta property="og:type" content="website" />
<meta property="og:title" content="Veterinary Third Party Manufacturing | Herbal Trends India" />
<meta
property="og:description"
content="Partner with Herbal Trends for veterinary third party manufacturing and PCD franchise services. GMP-certified herbal veterinary medicines and supplements."
/>
<meta property="og:image" content="/preview.jpg" />
<meta property="og:url" content="https://yourdomain.com/third-party-manufacturing" />
<meta property="og:site_name" content="Herbal Trends" />
<meta property="og:locale" content="en_IN" />

{/* Twitter */}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Veterinary Third Party Manufacturing | Herbal Trends" />
<meta
name="twitter:description"
content="GMP-certified veterinary third party manufacturing services for herbal medicines, supplements and livestock healthcare products."
/>
<meta name="twitter:image" content="/preview.jpg" />

{/* Local SEO */}
<meta name="geo.region" content="IN-HR" />
<meta name="geo.placename" content="Gurugram, Haryana" />

</Helmet>
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative py-40 bg-green-900  bg-linear-to-b from-transparent to-white text-center overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-8xl font-black text-white md:tracking-tighter md:leading-[0.9] mb-8">
            Third Party <br />
            <span className="text-green-950">Manufacturing</span>
          </h1>

          <p className="text-xl md:text-2xl text-green-950/60 font-medium max-w-3xl mx-auto">
            We offer veterinary PCD franchise and third-party manufacturing services,
            ensuring that our high-quality herbal veterinary products reach a wider audience
            with reliability and excellence.
          </p>
        </div>
      </section>


      {/* Why Partner With Us */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-green-950 tracking-tighter mb-6">
            Why Partner With Us
          </h2>
          <p className="text-lg text-green-950/60 font-medium max-w-3xl mx-auto">
            We combine advanced manufacturing systems with botanical expertise to
            deliver safe, effective, and market-ready veterinary products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Factory, title: "Modern Facilities", desc: "State-of-the-art GMP certified production units." },
            { icon: ShieldCheck, title: "Quality Assurance", desc: "Strict quality control & residue-free formulations." },
            { icon: Leaf, title: "Herbal Expertise", desc: "Scientifically validated botanical formulations." },
            { icon: PackageCheck, title: "Custom Branding", desc: "Private labeling & PCD franchise support." },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group p-10 bg-green-50 rounded-[2.5rem] hover:bg-green-950 hover:-translate-y-2 transition-all duration-500"
            >
              <item.icon className="w-12 h-12 text-green-950 group-hover:text-emerald-400 transition-colors mb-8" />
              <h3 className="text-2xl font-black text-green-950 group-hover:text-white mb-4">
                {item.title}
              </h3>
              <p className="text-green-950/60 group-hover:text-white/70 font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>


     {/* Products List Section */}
<section className="py-32 bg-green-50 px-4">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-5xl font-black text-green-950 tracking-tighter mb-16 text-center">
      Products Available for Manufacturing
    </h2>

    <div className="bg-white rounded-[3rem] p-12 shadow-2xl shadow-green-950/5 border border-green-100">
      
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4 text-green-950 font-medium text-lg">
        {products.map((product, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="w-2.5 h-2.5 mt-2 rounded-full bg-emerald-500 shrink-0"></span>
            {product}
          </li>
        ))}
      </ul>

    </div>
  </div>
</section>
    </main>
    </>
  )
}