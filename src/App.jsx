import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"

import Header from "./components/header.jsx"
import Footer from "./components/Footer.jsx"

const HomePage = lazy(() => import("./Pages/HomePage.jsx"))
const ProductsPage = lazy(() => import("./Pages/ProductPage.jsx"))
const CategoryPage = lazy(() => import("./Pages/categoryPage.jsx"))
const ProductCarousel = lazy(() => import("./Pages/Product-carasouelPage.jsx"))
const ContactUs = lazy(() => import("./Pages/ContactUs.jsx"))

function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg font-semibold">Loading...</p>
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/product-page/:categoryId/:product-name/:id" element={<ProductsPage />} />
          <Route path="/category-page/:categoryType/:id" element={<CategoryPage />} />
          <Route path="/categories" element={<ProductCarousel />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  )
}

export default App
