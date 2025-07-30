import { Card, CardContent, Button } from "@mui/material"
import Link from "next/link"
import Image from "next/image"
import { ShoppingBag, Heart } from "lucide-react"

const FeaturedProducts = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-0">
            <Link href={`/product/${product.id}`}>
              <div className="relative overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.isOnSale && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 text-sm font-semibold rounded">
                    SALE
                  </div>
                )}
              </div>
            </Link>
            <div className="p-4">
              <Link href={`/product/${product.id}`}>
                <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
                <h3 className="font-semibold mb-2 group-hover:text-gray-600 transition-colors">{product.name}</h3>
              </Link>
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
                <Button size="sm" className="flex-1">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default FeaturedProducts
