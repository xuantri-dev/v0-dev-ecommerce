import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { mockProducts } from "@/lib/mock-data"
import { ArrowRight, Star, Truck, Shield, Headphones } from "lucide-react"

export default function HomePage() {
  const featuredProducts = mockProducts.slice(0, 4)
  const saleProducts = mockProducts.filter((p) => p.isOnSale)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-gray-900 to-gray-700 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Discover Your Style</h1>
            <p className="text-xl mb-8 text-gray-200">
              Explore our curated collection of luxury fashion and accessories. Find the perfect pieces to express your
              unique style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
                <Link href="/shop">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                <Link href="/sale">View Sale</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Truck className="h-12 w-12 mx-auto mb-4 text-black" />
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $100</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-black" />
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">Your payment information is safe with us</p>
            </div>
            <div className="text-center">
              <Headphones className="h-12 w-12 mx-auto mb-4 text-black" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Get help whenever you need it</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of the finest fashion pieces
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
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
                    <div className="p-4">
                      <h3 className="font-semibold mb-2 group-hover:text-gray-600 transition-colors">{product.name}</h3>
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
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/shop">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sale Section */}
      {saleProducts.length > 0 && (
        <section className="py-16 bg-red-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-red-600">Limited Time Sale</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Don't miss out on these amazing deals - limited time only!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {saleProducts.map((product) => (
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
                        <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 text-sm font-semibold rounded">
                          SALE
                        </div>
                        {product.originalPrice && (
                          <div className="absolute top-4 right-4 bg-black text-white px-2 py-1 text-sm font-semibold rounded">
                            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold mb-2 group-hover:text-gray-600 transition-colors">
                          {product.name}
                        </h3>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold text-red-600">${product.price}</span>
                            {product.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <Link href="/sale">
                  Shop All Sale Items <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay in Style</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new arrivals, exclusive offers, and fashion tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg text-black" />
            <Button className="bg-white text-black hover:bg-gray-100">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
