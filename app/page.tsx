"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, Button, Typography, Rating, Box, IconButton } from "@mui/material"
import { ShoppingBag, Heart, Truck, Shield, Headphones, ArrowForward } from "@mui/icons-material"
import { mockProducts } from "@/lib/mock-data"

export default function HomePage() {
  const featuredProducts = mockProducts.slice(0, 4)
  const saleProducts = mockProducts.filter((p) => p.isOnSale)

  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: "600px",
          background: "linear-gradient(to right, #1a1a1a, #4a4a4a)",
          display: "flex",
          alignItems: "center",
          color: "white",
          px: 4,
        }}
      >
        <Box sx={{ maxWidth: "600px", mx: "auto" }}>
          <Typography variant="h2" component="h1" sx={{ fontWeight: "bold", mb: 3 }}>
            Discover Your Style
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: "#e0e0e0" }}>
            Explore our curated collection of luxury fashion and accessories. Find the perfect pieces to express your
            unique style.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              component={Link}
              href="/shop"
              variant="contained"
              size="large"
              sx={{ bgcolor: "white", color: "black", "&:hover": { bgcolor: "#f0f0f0" } }}
              endIcon={<ArrowForward />}
            >
              Shop Now
            </Button>
            <Button
              component={Link}
              href="/sale"
              variant="outlined"
              size="large"
              sx={{ borderColor: "white", color: "white", "&:hover": { bgcolor: "white", color: "black" } }}
            >
              View Sale
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8, bgcolor: "#f5f5f5" }}>
        <Box sx={{ maxWidth: "1200px", mx: "auto", px: 4 }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 4 }}>
            <Box sx={{ textAlign: "center" }}>
              <Truck sx={{ fontSize: 48, mb: 2, color: "black" }} />
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                Free Shipping
              </Typography>
              <Typography color="text.secondary">Free shipping on orders over $100</Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Shield sx={{ fontSize: 48, mb: 2, color: "black" }} />
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                Secure Payment
              </Typography>
              <Typography color="text.secondary">Your payment information is safe with us</Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Headphones sx={{ fontSize: 48, mb: 2, color: "black" }} />
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                24/7 Support
              </Typography>
              <Typography color="text.secondary">Get help whenever you need it</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Featured Products */}
      <Box sx={{ py: 8 }}>
        <Box sx={{ maxWidth: "1200px", mx: "auto", px: 4 }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: "bold", mb: 2 }}>
              Featured Products
            </Typography>
            <Typography color="text.secondary" sx={{ maxWidth: "600px", mx: "auto" }}>
              Discover our handpicked selection of the finest fashion pieces
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
              gap: 3,
            }}
          >
            {featuredProducts.map((product) => (
              <Card key={product.id} sx={{ "&:hover": { boxShadow: 6 }, transition: "box-shadow 0.3s" }}>
                <Box sx={{ position: "relative", overflow: "hidden" }}>
                  <Link href={`/product/${product.id}`}>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={400}
                      style={{ width: "100%", height: "320px", objectFit: "cover" }}
                    />
                  </Link>
                  {product.isOnSale && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        bgcolor: "error.main",
                        color: "white",
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                      }}
                    >
                      SALE
                    </Box>
                  )}
                </Box>
                <CardContent>
                  <Link href={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                      {product.brand}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                      {product.name}
                    </Typography>
                  </Link>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <Rating value={product.rating} readOnly size="small" />
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                      ({product.reviews})
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        ${product.price}
                      </Typography>
                      {product.originalPrice && (
                        <Typography variant="body2" color="text.secondary" sx={{ textDecoration: "line-through" }}>
                          ${product.originalPrice}
                        </Typography>
                      )}
                    </Box>
                  </Box>

                  {/* Add to Cart and Wishlist buttons */}
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Button variant="contained" size="small" startIcon={<ShoppingBag />} sx={{ flex: 1 }}>
                      Add to Cart
                    </Button>
                    <IconButton size="small" sx={{ border: "1px solid #e0e0e0" }}>
                      <Heart />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>

          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button component={Link} href="/shop" variant="outlined" size="large" endIcon={<ArrowForward />}>
              View All Products
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Sale Section */}
      {saleProducts.length > 0 && (
        <Box sx={{ py: 8, bgcolor: "#ffebee" }}>
          <Box sx={{ maxWidth: "1200px", mx: "auto", px: 4 }}>
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography variant="h3" component="h2" sx={{ fontWeight: "bold", mb: 2, color: "error.main" }}>
                Limited Time Sale
              </Typography>
              <Typography color="text.secondary" sx={{ maxWidth: "600px", mx: "auto" }}>
                Don't miss out on these amazing deals - limited time only!
              </Typography>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
                gap: 3,
              }}
            >
              {saleProducts.map((product) => (
                <Card key={product.id} sx={{ "&:hover": { boxShadow: 6 }, transition: "box-shadow 0.3s" }}>
                  <Box sx={{ position: "relative", overflow: "hidden" }}>
                    <Link href={`/product/${product.id}`}>
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={400}
                        style={{ width: "100%", height: "320px", objectFit: "cover" }}
                      />
                    </Link>
                    <Box
                      sx={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        bgcolor: "error.main",
                        color: "white",
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                      }}
                    >
                      SALE
                    </Box>
                    {product.originalPrice && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: 16,
                          right: 16,
                          bgcolor: "black",
                          color: "white",
                          px: 1,
                          py: 0.5,
                          borderRadius: 1,
                          fontSize: "0.75rem",
                          fontWeight: "bold",
                        }}
                      >
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </Box>
                    )}
                  </Box>
                  <CardContent>
                    <Link href={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                        {product.brand}
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                        {product.name}
                      </Typography>
                    </Link>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: "bold", color: "error.main" }}>
                          ${product.price}
                        </Typography>
                        {product.originalPrice && (
                          <Typography variant="body2" color="text.secondary" sx={{ textDecoration: "line-through" }}>
                            ${product.originalPrice}
                          </Typography>
                        )}
                      </Box>
                    </Box>

                    {/* Add to Cart and Wishlist buttons */}
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Button variant="contained" size="small" startIcon={<ShoppingBag />} sx={{ flex: 1 }}>
                        Add to Cart
                      </Button>
                      <IconButton size="small" sx={{ border: "1px solid #e0e0e0" }}>
                        <Heart />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>

            <Box sx={{ textAlign: "center", mt: 6 }}>
              <Button
                component={Link}
                href="/sale"
                variant="contained"
                size="large"
                color="error"
                endIcon={<ArrowForward />}
              >
                Shop All Sale Items
              </Button>
            </Box>
          </Box>
        </Box>
      )}

      {/* Newsletter Section */}
      <Box sx={{ py: 8, bgcolor: "black", color: "white" }}>
        <Box sx={{ maxWidth: "1200px", mx: "auto", px: 4, textAlign: "center" }}>
          <Typography variant="h3" component="h2" sx={{ fontWeight: "bold", mb: 2 }}>
            Stay in Style
          </Typography>
          <Typography sx={{ mb: 4, maxWidth: "600px", mx: "auto", color: "#e0e0e0" }}>
            Subscribe to our newsletter and be the first to know about new arrivals, exclusive offers, and fashion tips.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, maxWidth: "400px", mx: "auto", flexWrap: "wrap" }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: 1,
                padding: "12px 16px",
                borderRadius: "8px",
                border: "none",
                fontSize: "16px",
                minWidth: "200px",
              }}
            />
            <Button variant="contained" sx={{ bgcolor: "white", color: "black", "&:hover": { bgcolor: "#f0f0f0" } }}>
              Subscribe
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
