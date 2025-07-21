"use client"

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useEffect, useState } from 'react';

const Homepage = () => {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/addProduct') // API route that sends product data from MongoDB
            .then(res => res.json())
            .then(data => setProductList(data))
            .catch(err => console.error("Error fetching products:", err));
    }, []);
    
    const ProductCard = (props) => {
        return (
            <div className='p-5 m-2 shadow-xl w-full h-full bg-gray-300 rounded-xl items-center text-center flex flex-col gap-y-1'>
                {/* Product image */}
                <img
                    src={props.imageUrl}
                    alt={props.name}
                    className="w-full h-64 object-cover rounded-lg"
                />

                {/* Product Name */}
                <h1 className='mt-2 text-xl font-bold'>
                    {props.name}
                </h1>

                {/* Product Category */}
                <p>
                    Category: {props.category}
                </p>

                {/* Product Description */}
                <p>
                    Description: {props.description}
                </p>

                {/* Price */}
                <p>
                    Original Price: ${props.price}
                </p>
                {/* <p className='line-through'>
                    Original Price: ${props.price}
                </p> */}

                {/* <p>
                    Discounted Price: ${props.discount ? props.discount : props.price}
                </p> */}

                {/* Stock info */}
                <p>
                    Stock: {props.stock}
                </p>
                <button className='bg-yellow-500 w-full h-10 rounded-xl cursor-pointer'>Add to Cart</button>
            </div>
        )
    }


    return (
        <div className="flex flex-col gap-y-10 min-h-screen bg-gray-50">
            <Header />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
                {productList.map((item, id) => {
                    return (
                        <ProductCard key={id} imageUrl={item.imageUrl} name={item.name} category={item.category} description={item.description} price={item.price} stock={item.stock} />
                    )
                })}
            </div>

            <Footer />
        </div>
    );
};

export default Homepage;
