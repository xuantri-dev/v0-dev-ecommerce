"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Edit, Trash2, Tag } from "lucide-react"

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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Category Management</h1>
          <p className="text-gray-600 mt-2">Organize your products into categories</p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <CardTitle>Categories ({categories.length})</CardTitle>
              <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Category
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Category</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="categoryName">Category Name</Label>
                      <Input id="categoryName" placeholder="Enter category name" />
                    </div>
                    <div>
                      <Label htmlFor="categoryDescription">Description</Label>
                      <Textarea id="categoryDescription" placeholder="Enter category description" />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 mt-4">
                    <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={() => setIsAddDialogOpen(false)}>Add Category</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Products</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {categories.map((category) => (
                    <TableRow key={category.id}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <div className="bg-gray-100 p-2 rounded-md">
                            <Tag className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-medium">{category.name}</p>
                            <p className="text-sm text-gray-500">ID: {category.id}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="text-sm">{category.description}</p>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{category.productCount} products</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={category.status === "active" ? "default" : "secondary"}
                          className="cursor-pointer"
                          onClick={() => toggleStatus(category.id)}
                        >
                          {category.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm" onClick={() => setEditingCategory(category)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => deleteCategory(category.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Edit Category Dialog */}
        <Dialog open={!!editingCategory} onOpenChange={() => setEditingCategory(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Category</DialogTitle>
            </DialogHeader>
            {editingCategory && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="editCategoryName">Category Name</Label>
                  <Input id="editCategoryName" defaultValue={editingCategory.name} placeholder="Enter category name" />
                </div>
                <div>
                  <Label htmlFor="editCategoryDescription">Description</Label>
                  <Textarea
                    id="editCategoryDescription"
                    defaultValue={editingCategory.description}
                    placeholder="Enter category description"
                  />
                </div>
              </div>
            )}
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={() => setEditingCategory(null)}>
                Cancel
              </Button>
              <Button onClick={() => setEditingCategory(null)}>Save Changes</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
