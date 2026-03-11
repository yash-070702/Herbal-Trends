import { ChevronRight, Home, Search } from "lucide-react"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
export default function NotFound() {
  return (
    <>
    <Helmet>

{/* Page Title */}
<title>404 Page Not Found | Herbal Trends</title>

{/* SEO Description */}
<meta
name="description"
content="The page you are looking for cannot be found. Return to Herbal Trends to explore herbal veterinary products, supplements and animal healthcare solutions."
/>

{/* Prevent Indexing */}
<meta name="robots" content="noindex, follow" />

{/* Canonical */}
<link rel="canonical" href="https://yourdomain.com/404" />

{/* OpenGraph */}
<meta property="og:title" content="404 Page Not Found | Herbal Trends" />
<meta
property="og:description"
content="This page doesn't exist. Visit Herbal Trends to explore our veterinary herbal healthcare solutions."
/>
<meta property="og:type" content="website" />
<meta property="og:image" content="/preview.jpg" />

{/* Twitter */}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="404 Page Not Found | Herbal Trends" />
<meta
name="twitter:description"
content="Oops! This page cannot be found. Return to Herbal Trends for veterinary herbal products."
/>

</Helmet>
    <main className="min-h-screen bg-white text-green-950 flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4  -translate-y-12 sm:translate-y-16 md:-translate-y-14 ">
        <div className="max-w-3xl w-full text-center">
       
          {/* 404 Text */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-9xl md:text-[200px] font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-green-950 to-green-950/70 leading-none mb-2">
              404
            </h1>
            <p className="text-sm md:text-base font-bold tracking-widest uppercase text-emerald-600 mt-4">
              Oops! This page wandered off.
            </p>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight text-balance">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-green-950/60 font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
            The page you're looking for seems to have disappeared. Let's get you back on track with our complete range
            of herbal solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary Button */}
            <Link
              to="/"
              className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-green-950 text-white rounded-full font-black text-lg transition-all duration-300 hover:shadow-xl hover:shadow-green-950/20 hover:scale-105 active:scale-95"
            >
              <span className="flex items-center gap-2">
                <Home className="w-5 h-5 md:w-6 md:h-6" />
                Back to Home
              </span>
            </Link>

            {/* Secondary Button */}
            <Link
              to="/categories"
              className="group inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-green-50 text-green-950 rounded-full font-black text-lg border-2 border-green-950/20 transition-all duration-300 hover:bg-green-100 hover:border-green-950/40 hover:scale-105 active:scale-95"
            >
              <span className="flex items-center gap-2">
                <Search className="w-5 h-5 md:w-6 md:h-6" />
                Explore Products
              </span>
            </Link>
          </div>
          
        </div>
      </section>
  </main>
    </>
  )
}
