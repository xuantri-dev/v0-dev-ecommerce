"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Container,
  Paper,
  InputAdornment,
} from "@mui/material"
import { Add, Search, Edit, Delete, Visibility } from "@mui/icons-material"
import { mockProducts } from "@/lib/mock-data"

export default function AdminProductsPage() {
  const [products, setProducts] = useState(mockProducts)
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const deleteProduct = (productId: number) => {
    setProducts(products.filter((p) => p.id !== productId))
  }

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5", py: 4 }}>
      <Container maxWidth="xl">
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: "bold", mb: 1 }}>
            Product Management
          </Typography>
          <Typography color="text.secondary">Manage your product catalog</Typography>
        </Box>

        <Card>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Products ({filteredProducts.length})
              </Typography>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <TextField
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  size="small"
                  sx={{ minWidth: 250 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button variant="contained" startIcon={<Add />} onClick={() => setIsAddDialogOpen(true)}>
                  Add Product
                </Button>
              </Box>
            </Box>

            <TableContainer component={Paper} sx={{ maxHeight: 600 }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell>Brand</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Stock</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredProducts.map((product) => (
                    <TableRow key={product.id} hover>
                      <TableCell>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            width={50}
                            height={50}
                            style={{ borderRadius: "8px", objectFit: "cover" }}
                          />
                          <Box>
                            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                              {product.name}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              ID: {product.id}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>{product.brand}</TableCell>
                      <TableCell>${product.price}</TableCell>
                      <TableCell>{product.stock || "N/A"}</TableCell>
                      <TableCell>
                        <Chip
                          label={product.isOnSale ? "On Sale" : "Active"}
                          color={product.isOnSale ? "error" : "success"}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: "flex", gap: 1 }}>
                          <IconButton size="small">
                            <Visibility />
                          </IconButton>
                          <IconButton size="small">
                            <Edit />
                          </IconButton>
                          <IconButton size="small" onClick={() => deleteProduct(product.id)}>
                            <Delete />
                          </IconButton>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>

        {/* Add Product Dialog */}
        <Dialog open={isAddDialogOpen} onClose={() => setIsAddDialogOpen(false)} maxWidth="md" fullWidth>
          <DialogTitle>Add New Product</DialogTitle>
          <DialogContent>
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, mt: 1 }}>
              <TextField label="Product Name" placeholder="Enter product name" fullWidth />
              <TextField label="Brand" placeholder="Enter brand name" fullWidth />
              <TextField label="Price" type="number" placeholder="0.00" fullWidth />
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select label="Category">
                  <MenuItem value="clothing">Clothing</MenuItem>
                  <MenuItem value="accessories">Accessories</MenuItem>
                  <MenuItem value="shoes">Shoes</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Description"
                placeholder="Enter product description"
                multiline
                rows={3}
                fullWidth
                sx={{ gridColumn: "1 / -1" }}
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
            <Button variant="contained" onClick={() => setIsAddDialogOpen(false)}>
              Add Product
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  )
}
