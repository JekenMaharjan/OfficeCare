import React from 'react';
import { Star, Heart } from 'lucide-react';

const products = [
    {
        id: 1,
        name: 'Premium Office Chair',
        price: 299.99,
        originalPrice: 399.99,
        rating: 4.8,
        reviews: 124,
        image: '🪑',
        badge: 'Best Seller',
        badgeColor: 'bg-red-500'
    },
    {
        id: 2,
        name: 'Wireless Laser Printer',
        price: 189.99,
        originalPrice: 249.99,
        rating: 4.6,
        reviews: 89,
        image: '🖨️',
        badge: 'Sale',
        badgeColor: 'bg-green-500'
    },
    {
        id: 3,
        name: 'Standing Desk Converter',
        price: 159.99,
        originalPrice: 199.99,
        rating: 4.9,
        reviews: 156,
        image: '💻',
        badge: 'New',
        badgeColor: 'bg-blue-500'
    },
    {
        id: 4,
        name: 'Conference Camera 4K',
        price: 279.99,
        originalPrice: 329.99,
        rating: 4.7,
        reviews: 78,
        image: '🎥',
        badge: 'Hot',
        badgeColor: 'bg-orange-500'
    }
];

const FeaturedProducts = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Handpicked premium office appliances with the best ratings and reviews from our customers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                        >
                            <div className="relative p-6 bg-gradient-to-br from-gray-50 to-gray-100">
                                <button className="cursor-pointer absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-red-50 hover:text-red-500 transition-colors">
                                    <Heart size={18} />
                                </button>
                                {product.badge && (
                                    <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold text-white rounded-full ${product.badgeColor}`}>
                                        {product.badge}
                                    </span>
                                )}
                                <div className="text-6xl text-center mb-4 transform group-hover:scale-110 transition-transform">
                                    {product.image}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                                    {product.name}
                                </h3>

                                <div className="flex items-center mb-3">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={14}
                                                className={`${i < Math.floor(product.rating)
                                                        ? 'text-yellow-400 fill-current'
                                                        : 'text-gray-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-600 ml-2">
                                        {product.rating} ({product.reviews})
                                    </span>
                                </div>

                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <span className="text-2xl font-bold text-gray-800">
                                            ${product.price}
                                        </span>
                                        {product.originalPrice && (
                                            <span className="text-sm text-gray-500 line-through ml-2">
                                                ${product.originalPrice}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <button className="cursor-pointer w-full bg-gradient-to-r from-[#A32CDF] to-[#106AD2] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="cursor-pointer bg-white border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors">
                        View All Products
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;