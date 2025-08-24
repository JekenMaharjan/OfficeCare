"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, ShoppingCart, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { CustomerLayout } from "@/components/customer/customerLayout"

// TODO: Replace with actual data from backend
const mockProducts = [
  {
    id: 1,
    name: "Office Chair Pro",
    description: "Ergonomic office chair with lumbar support",
    price: 299.99,
    category: "Chairs",
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.5
  },
  {
    id: 2,
    name: "Standing Desk",
    description: "Height adjustable standing desk",
    price: 599.99,
    category: "Desks",
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.8
  },
  {
    id: 3,
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse",
    price: 29.99,
    category: "Accessories",
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.2
  },
  {
    id: 4,
    name: "Monitor Stand",
    description: "Adjustable monitor stand with storage",
    price: 89.99,
    category: "Accessories",
    image: "/placeholder.svg",
    inStock: false,
    rating: 4.0
  }
]

export default function ProductList() {
  const [products] = useState(mockProducts)
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [sortBy, setSortBy] = useState("name")

  // TODO: Implement with backend API calls
  const handleAddToCart = (productId: number) => {
    console.log("Adding to cart:", productId)
    // Backend call: POST /api/cart/add
    toast("Product has been added to your cart successfully.")
  }

  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = categoryFilter === "all" || product.category === categoryFilter
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price":
          return a.price - b.price
        case "rating":
          return b.rating - a.rating
        default:
          return a.name.localeCompare(b.name)
      }
    })

  const categories = ["all", ...Array.from(new Set(products.map(p => p.category)))]

  return (
    <CustomerLayout>
        <div className="space-y-6">
        <div>
            <h1 className="text-3xl font-bold text-foreground">Products</h1>
            <p className="text-muted-foreground">Browse our office equipment collection</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-2 w-full sm:w-auto">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm"
            />
            </div>

            <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                {categories.map(category => (
                    <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                    </SelectItem>
                ))}
                </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-32">
                <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="price">Price</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
            </Select>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
            <Card key={product.id} className="h-full flex flex-col">
                <CardHeader className="p-0">
                <div className="aspect-square bg-muted rounded-t-lg flex items-center justify-center">
                    <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover rounded-t-lg"
                    />
                </div>
                </CardHeader>
                <CardContent className="p-4 flex-1 flex flex-col">
                <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <Badge className={product.inStock ? "bg-purple-600" : "text-black bg-gray-200/80"}>
                        {product.inStock ? "In Stock" : "Out of Stock"}
                    </Badge>
                    </div>
                    <CardDescription className="text-sm mb-3">
                    {product.description}
                    </CardDescription>
                    <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-purple-600">
                        ${product.price}
                    </span>
                    <div className="flex items-center">
                        <span className="text-sm text-muted-foreground">
                        ⭐ {product.rating}/5
                        </span>
                    </div>
                    </div>
                </div>
                <Button 
                    className="w-full bg-purple-600 hover:bg-purple-600/80 cursor-pointer" 
                    onClick={() => handleAddToCart(product.id)}
                    disabled={!product.inStock}
                >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
                </CardContent>
            </Card>
            ))}
        </div>

        {filteredProducts.length === 0 && (
            <div className="text-center py-12">
            <p className="text-muted-foreground">No products found matching your criteria.</p>
            </div>
        )}
        </div>
    </CustomerLayout>
  )
}