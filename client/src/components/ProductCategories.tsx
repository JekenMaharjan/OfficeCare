import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductCategories = () => {
  const categories = [
    { name: "Desks", icon: "🖥️" },
    { name: "Chairs", icon: "🪑" },
    { name: "Printers", icon: "🖨️" },
    { name: "Supplies", icon: "📝" },
    { name: "Storage", icon: "📚" },
    { name: "Lighting", icon: "💡" }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-2">{category.icon}</div>
                <div className="font-medium">{category.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
