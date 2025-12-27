import { useParams } from "react-router-dom"
import ProductCard from "../components/product-card.jsx"
const products = [
  {
    id: 1,
    name: "Maxomilk Bolus",
    form: "Bolus",
  },
  {
    id: 2,
    name: "Heatex Bolus",
    form: "Bolus",
  },
  {
    id: 3,
    name: "Mcure Powder",
    form: "Powder",
  },
  {
    id: 4,
    name: "Maxomilk Bolus",
    form: "Bolus",
  },
  {
    id: 5,
    name: "Heatex Bolus",
    form: "Bolus",
  },
  {
    id: 6,
    name: "Mcure Powder",
    form: "Powder",
  },
  {
    id: 7,
    name: "Maxomilk Bolus",
    form: "Bolus",
  },
  {
    id: 8,
    name: "Heatex Bolus",
    form: "Bolus",
  },
  {
    id: 9,
    name: "Mcure Powder",
    form: "Powder",
  },
]

const dummyData=["Product 1","Product 2","Product 3","Product 4","Product 5","Product 6","Product 7","Product 8","Product 9"]

export default function CategoryPage() {
  const { id } = useParams()
  return (
    <section className="bg-gray-50 min-h-screen py-10 sm:py-12 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="mb-10 sm:mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 text-pretty">{dummyData[id]}</h1>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} name={product.name} form={product.form} />
          ))}
        </div>
      </div>
    </section>
  )
}
