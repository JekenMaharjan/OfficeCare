"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  ShoppingCart, 
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
import Link from "next/link"
import { useRouter } from "next/navigation"

export function CustomerHeader() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()

  // TODO: Replace with actual cart count from context/backend
  const cartItemCount = 2

  // TODO: Replace with actual user data from auth context
  const isLoggedIn = true
  const userName = "John Doe"

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

  return (
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
  )
}