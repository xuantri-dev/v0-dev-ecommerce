"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingBag, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { mockProducts } from "@/lib/mock-data"

// Mock wishlist data (subset of products)
const mockWishlistItems = mockProducts.slice(0, 6)

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState(mockWishlistItems)

  const removeFromWishlist = (productId: number) => {
    setWishlistItems((items) => items.filter((item) => item.id !== productId))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">My Wishlist</h1>
          <p className="text-gray-600 mt-2">
            {wishlistItems.length} item{wishlistItems.length !== 1 ? "s" : ""} saved
          </p>
        </div>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((product) => (
              <Card key={product.id} className="group relative hover:shadow-lg transition-shadow">
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
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                      onClick={() => removeFromWishlist(product.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
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

                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1">
                        <ShoppingBag className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => removeFromWishlist(product.id)}>
                        <Heart className="h-4 w-4 fill-current text-red-500" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="text-center py-12">
              <Heart className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Your wishlist is empty</h3>
              <p className="text-gray-600 mb-4">Save items you love to your wishlist and shop them later</p>
              <Button asChild>
                <Link href="/shop">Start Shopping</Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
