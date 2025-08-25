"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Edit, Trash2 } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AdminLayout } from "@/components/admin/adminLayout"

// TODO: Replace with actual data from backend
const mockProducts = [
  {
    id: 1,
    name: "Office Chair Pro",
    category: "Chairs",
    price: 299.99,
    stock: 45,
    status: "Inactive",
    sku: "OC001"
  },
  {
    id: 2,
    name: "Standing Desk",
    category: "Desks",
    price: 599.99,
    stock: 1,
    status: "Active",
    sku: "SD002"
  },
  {
    id: 3,
    name: "Wireless Mouse",
    category: "Accessories",
    price: 29.99,
    stock: 150,
    status: "Active",
    sku: "WM003"
  }
]

export default function ProductsPage() {
  const [products, setProducts] = useState(mockProducts)
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  // TODO: Implement with backend API calls
  const handleAddProduct = (productData: any) => {
    console.log("Adding product:", productData)
    // Backend call: POST /api/products
    setIsAddDialogOpen(false)
  }

  const handleEditProduct = (id: number) => {
    console.log("Editing product:", id)
    // Backend call: PUT /api/products/:id
  }

  const handleDeleteProduct = (id: number) => {
    console.log("Deleting product:", id)
    // Backend call: DELETE /api/products/:id
    setProducts(products.filter(p => p.id !== id))
  }

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

    return (
        <AdminLayout>
            <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                <h1 className="text-3xl font-bold text-foreground">Products</h1>
                <p className="text-muted-foreground">Manage your product inventory</p>
                </div>
                
                <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                    <Button className="bg-purple-600 hover:bg-purple-600/80 cursor-pointer">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Product
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                    <DialogTitle>Add New Product</DialogTitle>
                    <DialogDescription>
                        Add a new product to your inventory.
                    </DialogDescription>
                    </DialogHeader>
                    <form className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Product Name</Label>
                        <Input id="name" placeholder="Enter product name" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Input id="category" placeholder="Enter category" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="price">Price</Label>
                        <Input id="price" type="number" placeholder="0.00" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="stock">Stock Quantity</Label>
                        <Input id="stock" type="number" placeholder="0" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea id="description" placeholder="Product description" />
                    </div>
                    <Button type="submit" className="w-full">Add Product</Button>
                    </form>
                </DialogContent>
                </Dialog>
            </div>

            <Card>
                <CardHeader>
                <CardTitle>Product Inventory</CardTitle>
                <CardDescription>
                    A list of all products in your store
                </CardDescription>
                <div className="flex items-center space-x-2">
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <Input
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-sm"
                    />
                </div>
                </CardHeader>
                <CardContent>
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Stock</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {filteredProducts.map((product) => (
                        <TableRow key={product.id}>
                        <TableCell>
                            <div>
                            <div className="font-medium">{product.name}</div>
                            <div className="text-sm text-muted-foreground">SKU: {product.sku}</div>
                            </div>
                        </TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>${product.price}</TableCell>
                        <TableCell>
                            <Badge className={`bg-purple-600 hover:bg-purple-600/80 ${
                                product.stock < 10
                                ? "bg-red-600 hover:bg-red-600/80"
                                : "bg-purple-600 hover:bg-purple-600/80"
                            }`}>
                                {product.stock}
                            </Badge>
                        </TableCell>
                        <TableCell>
                            <Badge className={`bg-purple-600 hover:bg-purple-600/80 ${
                                product.status === "Inactive"
                                ? "bg-gray-300 hover:bg-gray-300/80 text-black"
                                : "bg-purple-600 hover:bg-purple-600/80"
                            }`}>
                            {product.status}
                            </Badge>
                        </TableCell>
                        <TableCell>
                            <div className="flex space-x-2">
                            <Button
                                variant="outline"
                                size="sm"
                                className="cursor-pointer"
                                onClick={() => handleEditProduct(product.id)}
                            >
                                <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                className="cursor-pointer"
                                onClick={() => handleDeleteProduct(product.id)}
                            >
                                <Trash2 className="h-4 w-4" />
                            </Button>
                            </div>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </CardContent>
            </Card>
            </div>
        </AdminLayout>
    )
}