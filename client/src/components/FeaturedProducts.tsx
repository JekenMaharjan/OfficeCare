import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Executive Chair",
      price: "$299",
      originalPrice: "$399",
      image: "🪑",
      rating: 4.8
    },
    {
      name: "Standing Desk",
      price: "$599",
      originalPrice: "$799",
      image: "🖥️",
      rating: 4.6
    },
    {
      name: "Wireless Printer",
      price: "$199",
      originalPrice: "$299",
      image: "🖨️",
      rating: 4.7
    },
    {
      name: "LED Desk Lamp",
      price: "$49",
      originalPrice: "$79",
      image: "💡",
      rating: 4.5
    }
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Button variant="outline">View All</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">{product.image}</div>
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-lg font-bold text-orange-600">{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                  <div className="text-yellow-500 mb-4">★★★★★</div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
