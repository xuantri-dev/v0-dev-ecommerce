"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"

interface CartItem {
  id: number
  name: string
  price: number
  image: string
  size: string
  color: string
  quantity: number
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Elegant Silk Dress",
      price: 299.99,
      image: "/placeholder.svg?height=200&width=200",
      size: "M",
      color: "Black",
      quantity: 1,
    },
    {
      id: 2,
      name: "Classic Leather Jacket",
      price: 449.99,
      image: "/placeholder.svg?height=200&width=200",
      size: "L",
      color: "Black",
      quantity: 1,
    },
  ])

  const [promoCode, setPromoCode] = useState("")

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id)
      return
    }
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 100 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 mx-auto text-gray-300 mb-6" />
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
          <Button asChild size="lg">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <Card key={`${item.id}-${item.size}-${item.color}`}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Size: {item.size} | Color: {item.color}
                    </p>
                    <p className="font-bold text-lg">${item.price}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-semibold">{item.quantity}</span>
                    <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-lg mb-2">${(item.price * item.quantity).toFixed(2)}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Button asChild className="w-full mb-4" size="lg">
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>

              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/shop">Continue Shopping</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Promo Code */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Promo Code</h3>
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <Button variant="outline">Apply</Button>
              </div>
            </CardContent>
          </Card>

          {/* Free Shipping Notice */}
          {shipping > 0 && (
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <p className="text-sm text-blue-800">Add ${(100 - subtotal).toFixed(2)} more to get free shipping!</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
