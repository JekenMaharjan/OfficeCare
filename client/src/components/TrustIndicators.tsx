import React from 'react';

const trustFeatures = [
    {
        icon: '🚚',
        title: 'Free Shipping',
        description: 'Free delivery on orders over $100'
    },
    {
        icon: '💬',
        title: '24/7 Support',
        description: 'Round-the-clock customer service'
    },
    {
        icon: '🔒',
        title: 'Secure Payments',
        description: 'Your payment information is protected'
    },
    {
        icon: '↩️',
        title: 'Easy Returns',
        description: '30-day hassle-free returns'
    }
];

const TrustIndicators = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {trustFeatures.map((feature, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-8">Trusted by 10,000+ Businesses</h3>
                    <div className="flex justify-center items-center space-x-12 opacity-60">
                        <div className="text-2xl font-bold text-gray-400">Microsoft</div>
                        <div className="text-2xl font-bold text-gray-400">Google</div>
                        <div className="text-2xl font-bold text-gray-400">Apple</div>
                        <div className="text-2xl font-bold text-gray-400">Amazon</div>
                        <div className="text-2xl font-bold text-gray-400">IBM</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustIndicators;
