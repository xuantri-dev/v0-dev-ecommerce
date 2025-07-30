"use client"

import { useState } from "react"
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
  IconButton,
  Container,
  Paper,
} from "@mui/material"
import { Add, Edit, Delete, Category } from "@mui/icons-material"

// Mock categories data
const mockCategories = [
  {
    id: 1,
    name: "Clothing",
    description: "All types of clothing items",
    productCount: 45,
    status: "active",
  },
  {
    id: 2,
    name: "Accessories",
    description: "Fashion accessories and jewelry",
    productCount: 23,
    status: "active",
  },
  {
    id: 3,
    name: "Shoes",
    description: "Footwear for all occasions",
    productCount: 18,
    status: "active",
  },
  {
    id: 4,
    name: "Bags",
    description: "Handbags, backpacks, and luggage",
    productCount: 12,
    status: "inactive",
  },
]

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState(mockCategories)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingCategory, setEditingCategory] = useState<any>(null)

  const deleteCategory = (categoryId: number) => {
    setCategories(categories.filter((c) => c.id !== categoryId))
  }

  const toggleStatus = (categoryId: number) => {
    setCategories(
      categories.map((c) =>
        c.id === categoryId ? { ...c, status: c.status === "active" ? "inactive" : "active" } : c,
      ),
    )
  }

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5", py: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: "bold", mb: 1 }}>
            Category Management
          </Typography>
          <Typography color="text.secondary">Organize your products into categories</Typography>
        </Box>

        <Card>
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Categories ({categories.length})
              </Typography>
              <Button variant="contained" startIcon={<Add />} onClick={() => setIsAddDialogOpen(true)}>
                Add Category
              </Button>
            </Box>

            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Category</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Products</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {categories.map((category) => (
                    <TableRow key={category.id} hover>
                      <TableCell>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                          <Box sx={{ bgcolor: "#f5f5f5", p: 1, borderRadius: 1 }}>
                            <Category />
                          </Box>
                          <Box>
                            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                              {category.name}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              ID: {category.id}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">{category.description}</Typography>
                      </TableCell>
                      <TableCell>
                        <Chip label={`${category.productCount} products`} variant="outlined" size="small" />
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={category.status}
                          color={category.status === "active" ? "success" : "default"}
                          size="small"
                          onClick={() => toggleStatus(category.id)}
                          sx={{ cursor: "pointer" }}
                        />
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: "flex", gap: 1 }}>
                          <IconButton size="small" onClick={() => setEditingCategory(category)}>
                            <Edit />
                          </IconButton>
                          <IconButton size="small" onClick={() => deleteCategory(category.id)}>
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

        {/* Add Category Dialog */}
        <Dialog open={isAddDialogOpen} onClose={() => setIsAddDialogOpen(false)} maxWidth="sm" fullWidth>
          <DialogTitle>Add New Category</DialogTitle>
          <DialogContent>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
              <TextField label="Category Name" placeholder="Enter category name" fullWidth />
              <TextField label="Description" placeholder="Enter category description" multiline rows={3} fullWidth />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
            <Button variant="contained" onClick={() => setIsAddDialogOpen(false)}>
              Add Category
            </Button>
          </DialogActions>
        </Dialog>

        {/* Edit Category Dialog */}
        <Dialog open={!!editingCategory} onClose={() => setEditingCategory(null)} maxWidth="sm" fullWidth>
          <DialogTitle>Edit Category</DialogTitle>
          <DialogContent>
            {editingCategory && (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
                <TextField
                  label="Category Name"
                  defaultValue={editingCategory.name}
                  placeholder="Enter category name"
                  fullWidth
                />
                <TextField
                  label="Description"
                  defaultValue={editingCategory.description}
                  placeholder="Enter category description"
                  multiline
                  rows={3}
                  fullWidth
                />
              </Box>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setEditingCategory(null)}>Cancel</Button>
            <Button variant="contained" onClick={() => setEditingCategory(null)}>
              Save Changes
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  )
}
