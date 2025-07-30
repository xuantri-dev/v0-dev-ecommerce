import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "shadcn/ui"
import { ShoppingBag, Heart, Star } from "lucide-react"

const FeaturedProducts = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-0">
            <div className="relative overflow-hidden">
              <Link href={`/product/${product.id}`}>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
              {product.isOnSale && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 text-sm font-semibold rounded">
                  SALE
                </div>
              )}
            </div>
            <div className="p-4">
              <Link href={`/product/${product.id}`}>
                <h3 className="font-semibold mb-2 group-hover:text-gray-600 transition-colors">{product.name}</h3>
              </Link>
              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>
              </div>

              {/* Add to Cart and Wishlist buttons */}
              <div className="flex space-x-2">
                <button
                  size="sm"
                  className="flex-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Add to Cart
                </button>
                <button
                  variant="outline"
                  size="sm"
                  className="bg-white border border-gray-300 text-gray-500 px-4 py-2 rounded hover:bg-gray-100 transition-colors"
                >
                  <Heart className="h-4 w-4" />
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default FeaturedProducts
