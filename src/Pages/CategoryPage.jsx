import { useParams } from "react-router-dom"
import ProductCard from "../components/Product-card.jsx"
import products from "../data/products_data.js"
import { motion } from "framer-motion"
import description from "../data/description.js"
import { Helmet } from "react-helmet-async"

export default function CategoryPage() {
  const { categoryType } = useParams();
  
  let categoryId;

  if (categoryType === "cattle-care") {
    categoryId = 1;
  } else if (categoryType === "poultry-care") {
    categoryId = 2;
  } else if (categoryType === "pet-care") {
    categoryId = 3;
  }
  function capitalizeWords(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
const truncate = (text = "", limit = 15) => 
  text.length > limit ? text.slice(0, limit) + "..." : text;


const categoryTitles = {
  "cattle-care": "Cattle Healthcare Products",
  "poultry-care": "Poultry Healthcare Products",
  "pet-care": "Pet Healthcare Products",
}

const categoryDescriptions = {
  "cattle-care":
    "Explore herbal veterinary products for cattle including calcium supplements, digestive tonics, immunity boosters and livestock healthcare solutions.",

  "poultry-care":
    "Discover herbal veterinary medicines for poultry including growth promoters, immunity boosters, digestive supplements and poultry healthcare products.",

  "pet-care":
    "Browse herbal pet healthcare products including supplements, shampoos, immunity boosters and natural veterinary medicines for pets.",
}

const title = `${categoryTitles[categoryType]} | Herbal Trends`

const descriptionText = categoryDescriptions[categoryType]

  return (
    <>
    <Helmet>

{/* Page Title */}
<title>{title}</title>

{/* Primary SEO */}
<meta name="description" content={descriptionText} />

<meta
  name="keywords"
  content={`${categoryType} veterinary products, herbal veterinary medicines, animal healthcare supplements, cattle supplements, poultry medicines, pet healthcare products`}
/>

<meta name="author" content="Herbal Trends" />

<meta name="robots" content="index, follow" />

<meta http-equiv="content-language" content="en-IN" />

{/* Canonical URL */}
<link rel="canonical" href={`https://yourdomain.com/categories/${categoryType}`} />

{/* OpenGraph (Facebook / LinkedIn) */}
<meta property="og:type" content="website" />
<meta property="og:title" content={title} />
<meta property="og:description" content={descriptionText} />
<meta property="og:image" content="/preview.jpg" />
<meta property="og:url" content={`https://yourdomain.com/categories/${categoryType}`} />
<meta property="og:site_name" content="Herbal Trends" />
<meta property="og:locale" content="en_IN" />

{/* Twitter SEO */}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={descriptionText} />
<meta name="twitter:image" content="/preview.jpg" />
<meta name="twitter:site" content="@herbaltrends" />

{/* Local SEO */}
<meta name="geo.region" content="IN-HR" />
<meta name="geo.placename" content="Gurugram, Haryana" />
<meta name="geo.position" content="28.4595;77.0266" />
<meta name="ICBM" content="28.4595,77.0266" />

{/* Mobile Theme */}
<meta name="theme-color" content="#2E7D32" />

</Helmet>
    <section className="bg-[#e5faeb] min-h-screen py-10 sm:py-12 lg:py-10">
       <motion.div
              
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4}} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  
        <div className="mb-10 sm:mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 text-pretty">{capitalizeWords(categoryType)}</h1>
          <p className="mt-4 text-gray-800 text-xl  text-pretty">{description[categoryId - 1]}</p>
        </div>

<div
  key={categoryId}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
>

          {products[categoryId - 1].map((product,idx) => (
           <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <ProductCard
                id={product.id}
                keyword={product?.keyword}
                categoryId={categoryId}
                categoryType={categoryType}
                displayName={truncate(product.name)}
                name={product.name}
                form={product.physicalForm}
                image={product.image[0]}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
    </>
  )
}
