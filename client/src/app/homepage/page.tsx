import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <ProductCategories />
      <FeaturedProducts />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Homepage;
