import { CheckCircle2 } from "lucide-react"
export default function ProductDetail({ product }) {
  if (!product) return null

  return (
    <div className="flex-1 p-6  md:p-12 h-[89vh] overflow-y-auto bg-brand-light animate-in fade-in duration-500">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Main Details */}
        <div className="flex-1 space-y-8">
          <h2 className="text-5xl md:text-6xl font-serif text-brand-deep mb-4">{product.name}</h2>

          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-bold text-brand-deep uppercase tracking-wide mb-1">Physical Form</h3>
              <p className="text-xl text-gray-700">{product.physicalForm}</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-brand-deep uppercase tracking-wide mb-1">Ingredients</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {product.ingredients}{" "}
                <span className="text-brand-green font-medium cursor-pointer hover:underline ml-2">See more...</span>
              </p>
            </section>

            <section className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-bold text-brand-deep uppercase tracking-wide mb-3">Treatments</h3>
              <ul className="space-y-2">
                {product.treatments.map((t, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-lg text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-green fill-brand-green/10" />
                    {t}
                  </li>
                ))}
              </ul>
            </section>

            <section className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-bold text-brand-deep uppercase tracking-wide mb-1">Quantity</h3>
              <p className="text-lg text-gray-700">{product.quantity}</p>
            </section>

            <section className="hidden lg:block space-y-2">
              <h3 className="text-lg font-bold text-brand-deep uppercase tracking-wide mb-1">Dosage</h3>
              <p className="text-lg text-gray-700">
                <span className="font-semibold">Small Animal:</span> {product.dosage.small}
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-semibold">Large Animal:</span> {product.dosage.large}
              </p>
            </section>
          </div>
        </div>

        {/* Product Card / Image Section */}
        <div className="lg:w-100">
          <div className="bg-white rounded-3xl p-6 shadow-2xl border border-white/20 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="aspect-square bg-brand-light rounded-2xl overflow-hidden mb-8 border border-gray-100 p-4">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-deep mb-2">Dosage</h3>
                <div className="space-y-1 text-gray-600">
                  <p>
                    <span className="font-bold text-gray-900">Small Animal:</span> {product.dosage.small}
                  </p>
                  <p>
                    <span className="font-bold text-gray-900">Large Animal:</span> {product.dosage.large}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-deep mb-2">Storage</h3>
                <p className="text-gray-600 leading-relaxed">{product.storage}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
