import { useParams } from "react-router-dom"
import ProductCard from "../components/Product-card.jsx"
import products from "../data/products_data.js"
import { motion } from "framer-motion"
import description from "../data/description.js"

export default function CategoryPage() {
  const { categoryType, id } = useParams();
  const categoryId = parseInt(id, 10);
  function capitalizeWords(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
const truncate = (text = "", limit = 15) => 
  text.length > limit ? text.slice(0, limit) + "..." : text;



  return (
    <section className="bg-gray-50 min-h-screen py-10 sm:py-12 lg:py-10">
       <motion.div
              
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4}} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  
        <div className="mb-10 sm:mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 text-pretty">{capitalizeWords(categoryType)}</h1>
          <p className="mt-4 text-gray-800 text-xl  text-pretty">{description[categoryId - 1]}</p>
        </div>

<div
  key={id}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
>

          {products[id-1].map((product,idx) => (
           <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <ProductCard
                ind={idx}
                categoryId={categoryId}
                name={truncate(product.name)}
                form={product.physicalForm}
                image={product.image[0]}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
