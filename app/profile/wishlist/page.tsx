"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Box, Card, CardContent, Typography, Button, IconButton, Container } from "@mui/material"
import { Favorite, ShoppingBag, Close } from "@mui/icons-material"
import { mockProducts } from "@/lib/mock-data"

// Mock wishlist data (subset of products)
const mockWishlistItems = mockProducts.slice(0, 6)

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState(mockWishlistItems)

  const removeFromWishlist = (productId: number) => {
    setWishlistItems((items) => items.filter((item) => item.id !== productId))
  }

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5", py: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: "bold", mb: 1 }}>
            My Wishlist
          </Typography>
          <Typography color="text.secondary">
            {wishlistItems.length} item{wishlistItems.length !== 1 ? "s" : ""} saved
          </Typography>
        </Box>

        {wishlistItems.length > 0 ? (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(4, 1fr)" },
              gap: 3,
            }}
          >
            {wishlistItems.map((product) => (
              <Card
                key={product.id}
                sx={{ position: "relative", "&:hover": { boxShadow: 6 }, transition: "box-shadow 0.3s" }}
              >
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
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      bgcolor: "rgba(255, 255, 255, 0.8)",
                      "&:hover": { bgcolor: "white" },
                    }}
                    onClick={() => removeFromWishlist(product.id)}
                  >
                    <Close />
                  </IconButton>
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

                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Button variant="contained" size="small" startIcon={<ShoppingBag />} sx={{ flex: 1 }}>
                      Add to Cart
                    </Button>
                    <IconButton
                      size="small"
                      onClick={() => removeFromWishlist(product.id)}
                      sx={{ border: "1px solid #e0e0e0", color: "error.main" }}
                    >
                      <Favorite />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        ) : (
          <Card>
            <CardContent sx={{ textAlign: "center", py: 8 }}>
              <Favorite sx={{ fontSize: 64, color: "text.secondary", mb: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                Your wishlist is empty
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                Save items you love to your wishlist and shop them later
              </Typography>
              <Button component={Link} href="/shop" variant="contained">
                Start Shopping
              </Button>
            </CardContent>
          </Card>
        )}
      </Container>
    </Box>
  )
}
