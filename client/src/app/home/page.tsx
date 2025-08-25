"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, ShoppingCart, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import Link from "next/link"
import { 
  User, 
  LogOut, 
  Package, 
  Heart,
  Menu,
  X
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import Footer from "@/components/Footer"

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()

  // TODO: Replace with actual cart count from context/backend
  const cartItemCount = 2

  // TODO: Replace with actual user data from auth context
  const isLoggedIn = true
  const userName = "John Doe"

  // TODO: Implement with backend API calls
  const handleAddToCart = (productId: number) => {
    console.log("Adding to cart:", productId)
    // Backend call: POST /api/cart/add
    toast("Product has been added to your cart successfully.")
  }

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (searchTerm.trim()) {
        router.push(`/products?search=${encodeURIComponent(searchTerm)}`)
        }
    }

    const handleLogout = () => {
        console.log("Logging out...")
        // TODO: Implement logout with backend
        router.push("/")
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
        <div>
        <div>
            <header className="sticky h-25 flex items-center justify-center top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    {/* Logo Image can still navigate home if needed */}
                    <Link href="/">
                        <img
                        className="h-20 w-20"
                        src="/OfficeCareLogo.png"
                        alt="Office Care Logo"
                        />
                    </Link>

                    {/* H1 scrolls to top, no navigation */}
                    <h1
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="cursor-pointer text-3xl font-bold bg-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 will-change-transform"
                    >
                        Office Care
                    </h1>
                </div>


                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                <Link 
                    href="/customer/productList" 
                    className="text-sm font-medium hover:text-primary transition-colors"
                >
                    Products
                </Link>
                <Link 
                    href="#" 
                    className="text-sm font-medium hover:text-primary transition-colors"
                >
                    Categories
                </Link>
                <Link 
                    href="#" 
                    className="text-sm font-medium hover:text-primary transition-colors"
                >
                    Deals
                </Link>
                <Link 
                    href="#" 
                    className="text-sm font-medium hover:text-primary transition-colors"
                >
                    About
                </Link>
                </nav>

                {/* Search Bar */}
                <form onSubmit={handleSearch} className="hidden lg:flex items-center space-x-2 flex-1 max-w-md mx-6">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                        type="search"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                        />
                    </div>
                </form>

                {/* Right Side Actions */}
                <div className="flex items-center space-x-4">
                {/* Mobile Search - visible on smaller screens */}
                <Button variant="ghost" size="sm" className="lg:hidden">
                    <Search className="h-4 w-4" />
                </Button>

                {/* Cart */}
                <Button variant="ghost" size="sm" asChild className="relative">
                    <Link href="/cart">
                    <ShoppingCart className="h-4 w-4" />
                    {cartItemCount > 0 && (
                        <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-purple-600 rounded-full text-xs">
                        {cartItemCount}
                        </Badge>
                    )}
                    </Link>
                </Button>

                {/* User Menu */}
                {isLoggedIn ? (
                    <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                        <User className="h-4 w-4" />
                        <span className="hidden sm:inline ml-2">{userName}</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                        <Link href="/profile">
                            <User className="mr-2 h-4 w-4" />
                            Profile
                        </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                        <Link href="/orders">
                            <Package className="mr-2 h-4 w-4" />
                            My Orders
                        </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                        <Link href="/wishlist">
                            <Heart className="mr-2 h-4 w-4" />
                            Wishlist
                        </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                    </DropdownMenu>
                ) : (
                    <div className="hidden sm:flex space-x-2">
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="/login">Login</Link>
                    </Button>
                    <Button size="sm" asChild>
                        <Link href="/register">Sign Up</Link>
                    </Button>
                    </div>
                )}

                {/* Mobile Menu Toggle */}
                <Button
                    variant="ghost"
                    size="sm"
                    className="md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t bg-background">
                    <nav className="container py-4 space-y-4">
                        <Link 
                        href="/products" 
                        className="block text-sm font-medium hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                        >
                        Products
                        </Link>
                        <Link 
                        href="/categories" 
                        className="block text-sm font-medium hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                        >
                        Categories
                        </Link>
                        <Link 
                        href="/deals" 
                        className="block text-sm font-medium hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                        >
                        Deals
                        </Link>
                        <Link 
                        href="/about" 
                        className="block text-sm font-medium hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                        >
                        About
                        </Link>
                        
                        {/* Search for mobile */}
                        <form onSubmit={handleSearch} className="flex space-x-2">
                        <Input
                            type="search"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="flex-1"
                        />
                        <Button type="submit" size="sm">
                            <Search className="h-4 w-4" />
                        </Button>
                        </form>

                        {!isLoggedIn && (
                        <div className="flex space-x-2 pt-4 border-t">
                            <Button variant="ghost" size="sm" asChild className="flex-1">
                            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
                            </Button>
                            <Button size="sm" asChild className="flex-1">
                            <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link>
                            </Button>
                        </div>
                        )}
                    </nav>
                </div>
            )}
            </header>

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
    </div>
    <Footer />
    )
}