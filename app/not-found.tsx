"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mt-4">Page Not Found</h2>
          <p className="text-gray-600 mt-4 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or you entered
            the wrong URL.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/shop">
              <Search className="mr-2 h-4 w-4" />
              Browse Products
            </Link>
          </Button>
          <Button variant="ghost" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-4">Popular Pages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/shop" className="text-blue-600 hover:underline">
              Shop
            </Link>
            <Link href="/about" className="text-blue-600 hover:underline">
              About
            </Link>
            <Link href="/contact" className="text-blue-600 hover:underline">
              Contact
            </Link>
            <Link href="/cart" className="text-blue-600 hover:underline">
              Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
