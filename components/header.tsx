"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingBag, Heart, User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-black">
            LUXE
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/shop" className="text-gray-700 hover:text-black transition-colors">
              Shop
            </Link>
            <Link href="/sale" className="text-red-600 hover:text-red-700 transition-colors">
              Sale
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-black transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-black transition-colors">
              Contact
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input type="search" placeholder="Search products..." className="pl-10 pr-4 py-2 w-full" />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <Link href="/search" className="md:hidden">
              <Search className="h-6 w-6 text-gray-700" />
            </Link>
            <Link href="/wishlist" className="relative">
              <Heart className="h-6 w-6 text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingBag className="h-6 w-6 text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-6 w-6 text-gray-700" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/orders">Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/login">Login</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/register">Register</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/shop" className="text-gray-700 hover:text-black transition-colors">
                Shop
              </Link>
              <Link href="/sale" className="text-red-600 hover:text-red-700 transition-colors">
                Sale
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-black transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-black transition-colors">
                Contact
              </Link>
              <div className="pt-4">
                <Input type="search" placeholder="Search products..." className="w-full" />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
