"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { mockProducts, mockReviews } from "@/lib/mock-data"
import { Star, Heart, ShoppingBag, Minus, Plus, Truck, RotateCcw, Shield } from "lucide-react"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const product = mockProducts.find((p) => p.id === Number.parseInt(params.id))
  const productReviews = mockReviews.filter((r) => r.productId === Number.parseInt(params.id))

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/shop">
            <Button>Back to Shop</Button>
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = mockProducts.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-black">
            Shop
          </Link>
          <span>/</span>
          <Link href={`/shop?category=${product.category}`} className="hover:text-black">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-black">{product.name}</span>
        </div>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={800}
              className="w-full h-[600px] object-cover rounded-lg"
            />
            {product.isOnSale && <Badge className="absolute top-4 left-4 bg-red-500">SALE</Badge>}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <p className="text-gray-500 mb-2">{product.brand}</p>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-3xl font-bold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
              )}
              {product.isOnSale && product.originalPrice && (
                <Badge variant="destructive">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </Badge>
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          {/* Size Selection */}
          {product.sizes.length > 1 && (
            <div>
              <h3 className="font-semibold mb-3">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    className="min-w-12"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Color Selection */}
          <div>
            <h3 className="font-semibold mb-3">Color</h3>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <Button
                  key={color}
                  variant={selectedColor === color ? "default" : "outline"}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </Button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="font-semibold mb-3">Quantity</h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-4 py-2 font-semibold">{quantity}</span>
                <Button variant="ghost" size="sm" onClick={() => setQuantity(quantity + 1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex space-x-4">
            <Button size="lg" className="flex-1">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={isWishlisted ? "text-red-500 border-red-500" : ""}
            >
              <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
            </Button>
          </div>

          {/* Features */}
          <div className="border-t pt-6 space-y-4">
            <div className="flex items-center space-x-3">
              <Truck className="h-5 w-5 text-gray-500" />
              <span className="text-sm">Free shipping on orders over $100</span>
            </div>
            <div className="flex items-center space-x-3">
              <RotateCcw className="h-5 w-5 text-gray-500" />
              <span className="text-sm">30-day return policy</span>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="h-5 w-5 text-gray-500" />
              <span className="text-sm">2-year warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mb-16">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({productReviews.length})</TabsTrigger>
            <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Product Details</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Premium quality materials</li>
                      <li>• Expert craftsmanship</li>
                      <li>• Comfortable fit</li>
                      <li>• Durable construction</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Care Instructions:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Machine wash cold</li>
                      <li>• Tumble dry low</li>
                      <li>• Do not bleach</li>
                      <li>• Iron on low heat</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold">Customer Reviews</h3>
                  <Button variant="outline">Write a Review</Button>
                </div>

                <div className="space-y-6">
                  {productReviews.map((review) => (
                    <div key={review.id} className="border-b pb-6 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{review.userName}</span>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="shipping" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-4">Shipping Information</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>• Free standard shipping on orders over $100</p>
                      <p>• Standard shipping: 5-7 business days ($9.99)</p>
                      <p>• Express shipping: 2-3 business days ($19.99)</p>
                      <p>• Overnight shipping: 1 business day ($29.99)</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4">Returns & Exchanges</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>• 30-day return policy</p>
                      <p>• Items must be in original condition with tags</p>
                      <p>• Free returns for defective items</p>
                      <p>• Return shipping fee: $9.99 (deducted from refund)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Link href={`/product/${relatedProduct.id}`}>
                    <div className="relative overflow-hidden">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        width={300}
                        height={400}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2 group-hover:text-gray-600 transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold">${relatedProduct.price}</span>
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
