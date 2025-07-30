"use client"

import Link from "next/link"
import { Box, Typography, Button, Container } from "@mui/material"
import { Home, Search, ArrowBack } from "@mui/icons-material"

export default function NotFound() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", bgcolor: "#f5f5f5" }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", px: 2 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "8rem", md: "12rem" },
              fontWeight: "bold",
              color: "#e0e0e0",
              lineHeight: 1,
              mb: -2,
            }}
          >
            404
          </Typography>
          <Typography variant="h3" component="h2" sx={{ fontWeight: "bold", mb: 2 }}>
            Page Not Found
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: "500px", mx: "auto" }}>
            Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or you entered
            the wrong URL.
          </Typography>

          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap", mb: 6 }}>
            <Button component={Link} href="/" variant="contained" size="large" startIcon={<Home />}>
              Go Home
            </Button>
            <Button component={Link} href="/shop" variant="outlined" size="large" startIcon={<Search />}>
              Browse Products
            </Button>
            <Button variant="text" size="large" startIcon={<ArrowBack />} onClick={() => window.history.back()}>
              Go Back
            </Button>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Popular Pages
            </Typography>
            <Box sx={{ display: "flex", gap: 3, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/shop" style={{ color: "#1976d2", textDecoration: "none" }}>
                Shop
              </Link>
              <Link href="/about" style={{ color: "#1976d2", textDecoration: "none" }}>
                About
              </Link>
              <Link href="/contact" style={{ color: "#1976d2", textDecoration: "none" }}>
                Contact
              </Link>
              <Link href="/cart" style={{ color: "#1976d2", textDecoration: "none" }}>
                Cart
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
