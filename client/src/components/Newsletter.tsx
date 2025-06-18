import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const Newsletter = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-6">
              Get the latest deals and product updates delivered to your inbox.
            </p>
            <div className="flex gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1"
              />
              <Button className="bg-orange-600 hover:bg-orange-700">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;