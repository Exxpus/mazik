import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Cosmic T-Shirt',
    description: 'Stylish t-shirt with a cosmic print',
    price: '$29.99',
    imageUrl: 'https://image.pollinations.ai/prompt/cosmic%20t-shirt%20on%20dark%20background?width=960&height=720&seed=47&nologo=true&model=flux'
  },
  {
    id: 2,
    name: 'Minimalist T-Shirt',
    description: 'Elegant t-shirt in minimalist style',
    price: '$24.99',
    imageUrl: 'https://image.pollinations.ai/prompt/minimalist%20t-shirt%20on%20dark%20background?width=960&height=720&seed=48&nologo=true&model=flux'
  },
  {
    id: 3,
    name: 'Abstract T-Shirt',
    description: 'Vibrant t-shirt with abstract design',
    price: '$32.99',
    imageUrl: 'https://image.pollinations.ai/prompt/abstract%20t-shirt%20on%20dark%20background?width=960&height=720&seed=49&nologo=true&model=flux'
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 h-full overflow-y-auto">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-100 mb-6 text-center">Featured Products</h2>
        <div className="space-y-6">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <div className="relative h-40">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-100 mb-1">{product.name}</h3>
                <p className="text-gray-300 text-sm mb-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-100">{product.price}</span>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-semibold">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}