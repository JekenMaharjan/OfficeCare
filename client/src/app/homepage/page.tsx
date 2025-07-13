"use client"

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import React from 'react';

const Homepage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className='flex p-10 w-150 h-100'>
            <Card>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                    <CardAction>Card Action</CardAction>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
            </div>

            <Footer />
        </div>
    );
};

export default Homepage;
