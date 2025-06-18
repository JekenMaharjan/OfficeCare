import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Hero = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Card className="bg-gradient-to-r from-gray-900 to-orange-600 text-white">
          <CardContent className="p-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-4">
                Premium Office Solutions
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Discover everything you need for your workspace. Free shipping on orders over $50.
              </p>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                Shop Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Hero;