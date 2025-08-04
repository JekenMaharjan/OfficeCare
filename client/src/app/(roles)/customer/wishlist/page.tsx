import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Trash2, Star } from "lucide-react";
import { CustomerLayout } from "@/components/customer/customerLayout";

const Wishlist = () => {
  const wishlistItems = [
    {
      id: 1,
      name: "Premium Ergonomic Office Chair",
      price: "$299.99",
      originalPrice: "$399.99",
      image: "/placeholder.svg",
      inStock: true,
      rating: 4.8,
      reviews: 124,
      discount: "25% OFF"
    },
    {
      id: 2,
      name: "4K Ultra-Wide Monitor",
      price: "$449.99",
      originalPrice: "$549.99",
      image: "/placeholder.svg",
      inStock: true,
      rating: 4.6,
      reviews: 89,
      discount: "18% OFF"
    },
    {
      id: 3,
      name: "Wireless Charging Desk Pad",
      price: "$79.99",
      originalPrice: "$99.99",
      image: "/placeholder.svg",
      inStock: false,
      rating: 4.4,
      reviews: 56,
      discount: "20% OFF"
    },
    {
      id: 4,
      name: "LED Smart Desk Lamp",
      price: "$89.99",
      originalPrice: "$119.99",
      image: "/placeholder.svg",
      inStock: true,
      rating: 4.7,
      reviews: 203,
      discount: "25% OFF"
    },
    {
      id: 5,
      name: "Adjustable Laptop Stand",
      price: "$34.99",
      originalPrice: "$49.99",
      image: "/placeholder.svg",
      inStock: true,
      rating: 4.5,
      reviews: 78,
      discount: "30% OFF"
    },
    {
      id: 6,
      name: "Noise-Cancelling Headphones",
      price: "$199.99",
      originalPrice: "$249.99",
      image: "/placeholder.svg",
      inStock: true,
      rating: 4.9,
      reviews: 156,
      discount: "20% OFF"
    }
  ];

  return (
    <CustomerLayout>
        <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
            <div>
            <h1 className="text-3xl font-bold text-foreground">My Wishlist</h1>
            <p className="text-muted-foreground">Items you've saved for later ({wishlistItems.length} items)</p>
            </div>
            <Button variant="outline">
            Clear All
            </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
                <div className="relative">
                <div className="aspect-square bg-office-gray flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-office-gray to-office-gray-dark flex items-center justify-center">
                    <span className="text-4xl text-muted-foreground">📦</span>
                    </div>
                </div>
                {item.discount && (
                    <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                    {item.discount}
                    </Badge>
                )}
                <Button 
                    variant="ghost" 
                    size="icon"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                >
                    <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                </Button>
                {!item.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Badge variant="destructive">Out of Stock</Badge>
                    </div>
                )}
                </div>
                
                <CardContent className="p-4">
                <div className="space-y-3">
                    <div>
                    <h3 className="font-semibold text-sm leading-tight">{item.name}</h3>
                    <div className="flex items-center gap-1 mt-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-muted-foreground">
                        {item.rating} ({item.reviews} reviews)
                        </span>
                    </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                    <span className="font-bold text-primary">{item.price}</span>
                    <span className="text-sm text-muted-foreground line-through">
                        {item.originalPrice}
                    </span>
                    </div>
                    
                    <div className="flex gap-2">
                    <Button 
                        size="sm" 
                        className="flex-1"
                        disabled={!item.inStock}
                    >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {item.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                    <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4" />
                    </Button>
                    </div>
                </div>
                </CardContent>
            </Card>
            ))}
        </div>

        {wishlistItems.length === 0 && (
            <Card className="text-center py-12">
            <CardContent>
                <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <CardTitle className="text-xl mb-2">Your wishlist is empty</CardTitle>
                <CardDescription className="mb-4">
                Start adding items to your wishlist by clicking the heart icon on products you love
                </CardDescription>
                <Button>
                Continue Shopping
                </Button>
            </CardContent>
            </Card>
        )}
        </div>
    </CustomerLayout>
  );
};

export default Wishlist;