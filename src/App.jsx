import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy} from "react"
import { useState, useEffect } from "react"

import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"

const HomePage = lazy(() => import("./Pages/HomePage.jsx"))
const LoaderPage = lazy(() => import("./Pages/LoaderPage.jsx"))
const ProductsPage = lazy(() => import("./Pages/ProductPage.jsx"))
const CategoryPage = lazy(() => import("./Pages/CategoryPage.jsx"))
const ProductCarousel = lazy(() => import("./Pages/Product-carasouelPage.jsx"))
const ContactUs = lazy(() => import("./Pages/ContactUs.jsx"))
const NotFound = lazy(() => import("./Pages/NotFound.jsx"))


const App = () => {
const [showLoader, setShowLoader] = useState(true)

useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false)
    }, 2000) // 3 seconds

    return () => clearTimeout(timer)
  }, [])

  if (showLoader) {
    return <LoaderPage />
  }

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/product-page/:categoryId/:product-name/:id" element={<ProductsPage />} />
          <Route path="/category-page/:categoryType/:id" element={<CategoryPage />} />
          <Route path="/categories" element={<ProductCarousel />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      

      <Footer />
    </BrowserRouter>
  )
}

export default App
