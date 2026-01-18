import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
import dummyImage from "../assets/image.png"


const heroSlides = [
  {
    id: 1,
    title: "Cattle Care",
    description: "Medicines help protect animal health, prevent disease, and keep our food supply safe.",
    backgroundVideo: "https://res.cloudinary.com/djxxk3hkp/video/upload/v1767639613/CattleCare_xyqwff.mp4",
    imageUrl: dummyImage,
  },
  {
    id: 2,
    title: "Poultry Care",
    description: "Medicines help protect animal health, prevent disease, and keep our food supply safe.",
    backgroundVideo:"https://res.cloudinary.com/djxxk3hkp/video/upload/v1767639612/PoultryCare_galuqj.mp4",
    imageUrl: dummyImage,
  },
  {
    id: 3,
    title: "Pet Care",
    description: "Medicines help protect animal health, prevent disease, and keep our food supply safe.",
    backgroundVideo: "https://res.cloudinary.com/djxxk3hkp/video/upload/v1767639600/PetCare_tsdznh.mp4",
    imageUrl: dummyImage,
  },
]

export default function ProductCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }
  const handleCick = (id) => {
    if (id == 1) navigate(`/category-page/cattle-care`)
    else if (id == 2) navigate(`/category-page/poultry-care`)
    else if (id == 3) navigate(`/category-page/pet-care`)
  }

  const slide = heroSlides[currentSlide]

  return (
    <section className="relative w-full h-[90vh] min-h-[90vh] xl:h-[88.5vh] xl:min-h-[88.5vh] overflow-hidden">
      <video
        key={slide.id}
        className="absolute inset-0 w-full h-full object-cover"
        src={slide.backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content container */}
      <div className="relative h-full flex  items-center px-4 sm:px-8 lg:px-12">
        <div
          key={currentSlide}
          className="w-screen bg-black/30 p-10  rounded-2xl max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center"
        >
          {/* Left content */}
          <div
            className="text-white space-y-6 sm:space-y-8 order-2 lg:order-1"
            style={{
              animation: "fadeInUp 0.8s ease-out forwards",
            }}
          >
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance"
              style={{
                animation: "fadeInUp 0.8s ease-out 0.1s forwards",
                opacity: 0,
              }}
            >
              {slide.title}
            </h1>
            <p
              className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-pretty max-w-xl"
              style={{
                animation: "fadeInUp 0.8s ease-out 0.2s forwards",
                opacity: 0,
              }}
            >
              {slide.description}
            </p>
            <button
              className="bg-green-950 hover:bg-green-900 transition-colors text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-lg sm:text-xl w-full sm:w-auto"
              onClick={() => handleCick(slide.id)}
              style={{
                animation: "fadeInUp 0.8s ease-out 0.3s forwards",
                opacity: 0,
              }}
            >
              Explore
            </button>
          </div>

          {/* Right image placeholder */}
          <div
            className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden order-1 lg:order-2"
            style={{
              animation: "fadeInRight 0.8s ease-out forwards",
            }}
          >
            <img
              src={slide.imageUrl || "/placeholder.svg"}
              alt={slide.title}
              className="object-cover w-full h-full"
              key={slide.id}
            />
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 transition-colors text-white p-2 sm:p-3 rounded-full backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 transition-colors text-white p-2 sm:p-3 rounded-full backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all rounded-full ${
              index === currentSlide
                ? "bg-white w-8 h-2.5 sm:w-10 sm:h-3"
                : "bg-white/50 w-2.5 h-2.5 sm:w-3 sm:h-3 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
}
