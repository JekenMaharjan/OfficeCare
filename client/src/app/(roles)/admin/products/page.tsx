"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import axios from "axios"
import { toast } from "sonner"
import { 
    Plus, 
    Search, 
    Filter, 
    Edit,
    Trash2,
    Eye,
    Package, 
    AlignLeft, 
    DollarSign, 
    Tag, 
    Image, 
    Boxes
} from "lucide-react";
import * as Yup from "yup"
import { Formik, Form, Field, ErrorMessage } from "formik"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AdminLayout } from "@/components/admin/adminLayout";
import { useEffect, useState } from "react";

interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
    stock: number;
}

interface AddProductFormValues {
    name: string;
    description: string;
    price: number | string;
    category: string;
    image: string;
    stock: number | string;
}


const validationSchema = Yup.object({
    name: Yup.string().max(100, "Must be 100 characters or less").required("Product name is required"),
    description: Yup.string().max(500, "Must be 500 characters or less").required("Description is required"),
    price: Yup.number()
        .typeError("Price must be a number")
        .positive("Price must be a positive number")
        .required("Price is required"),
    category: Yup.string().max(50, "Must be 50 characters or less").required("Category is required"),
    image: Yup.mixed().required("Image is required"),
    stock: Yup.number()
        .typeError("Stock must be a number")
        .integer("Stock must be an integer")
        .min(0, "Stock cannot be negative")
        .required("Stock quantity is required"),
})

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_API_URL + "/product")
        .then(res => setProducts(res.data))
        .catch(err => console.error("Error fetching products:", err));
    }, []);

    const getStatusColor = (status: string, stock: number) => {
        if (status === "low_stock" || stock <= 5) return "destructive";
        if (status === "active") return "default";
        return "secondary";
    };

    const getStatusText = (status: string, stock: number) => {
        if (stock <= 5) return "Low Stock";
        if (status === "active") return "Active";
        return "Inactive";
    };

    const initialValues: AddProductFormValues = {
            name: "",
            description: "",
            price: "", // Initialize as empty string to match input type="text"
            category: "",
            image: "",
            stock: "", // Initialize as empty string
        }

        const handleSubmit = async (values: AddProductFormValues, { setSubmitting, resetForm }: any) => {
            try {
            await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call delay

            const { data } = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/Product", values)
            toast(data);

            // console.log("Product data to be added:", values)
            // toast("Product added successfully!")

            resetForm() // Clear the form after successful submission
            } catch (error) {
            console.error("Error adding product:", error)
            toast("Failed to add product. Something went wrong. Please try again.")
            } finally {
            setSubmitting(false)
            }
        }


    return (
        <AdminLayout>
            <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-foreground">Products</h1>
                    <p className="text-muted-foreground">Manage your office appliances inventory</p>
                </div>
                
                <Dialog>
                    <DialogTrigger className="bg-primary hover:bg-primary/90 cursor-pointer text-white rounded-md flex items-center p-1 px-2"
                    >
                        <Plus className="mr-2 h-4 w-4" />
                        Add Product
                    </DialogTrigger>

                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add Product</DialogTitle>
                            <p className="text-sm text-muted-foreground mb-4">Enter the details for your new product</p>
                            
                            <DialogDescription className="text-black">
                                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                                    {({ isSubmitting, errors, touched }) => (
                                    <Form className="space-y-4">
                                        {/* Product Name */}
                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="name" className="flex items-center gap-2">
                                                <Package className="w-4 h-4" />
                                                Product Name
                                            </Label>
                                            <Field
                                                as={Input}
                                                id="name"
                                                name="name"
                                                type="text"
                                                placeholder="e.g., Wireless Bluetooth Headphones"
                                                className={errors.name && touched.name ? "border-red-500" : ""}
                                            />
                                            <ErrorMessage name="name" component="p" className="text-sm text-red-500" />
                                        </div>

                                        {/* Description */}
                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="description" className="flex items-center gap-2">
                                                <AlignLeft className="w-4 h-4" />
                                                Description
                                            </Label>
                                            <Field
                                                as="textarea" // Use textarea for description
                                                id="description"
                                                name="description"
                                                placeholder="A brief description of the product..."
                                                rows={4} // Adjust rows as needed
                                                className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                                                errors.description && touched.description ? "border-red-500" : ""
                                                }`}
                                            />
                                            <ErrorMessage name="description" component="p" className="text-sm text-red-500" />
                                        </div>

                                        {/* Price */}
                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="price" className="flex items-center gap-2">
                                                <DollarSign className="w-4 h-4" />
                                                Price
                                            </Label>
                                            <Field
                                                as={Input}
                                                id="price"
                                                name="price"
                                                type="text" // Keep as text to allow for "typeError" from Yup if non-numeric
                                                placeholder="e.g., 49.99"
                                                className={errors.price && touched.price ? "border-red-500" : ""}
                                            />
                                            <ErrorMessage name="price" component="p" className="text-sm text-red-500" />
                                        </div>

                                        {/* Category */}
                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="category" className="flex items-center gap-2">
                                                <Tag className="w-4 h-4" />
                                                Category
                                            </Label>
                                            <Field
                                                as={Input}
                                                id="category"
                                                name="category"
                                                type="text"
                                                placeholder="e.g., Electronics, Clothing, Home Goods"
                                                className={errors.category && touched.category ? "border-red-500" : ""}
                                            />
                                            <ErrorMessage name="category" component="p" className="text-sm text-red-500" />
                                        </div>

                                        {/* Image */}
                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="image" className="flex items-center gap-2">
                                                <Image className="w-4 h-4" />
                                                Upload File
                                            </Label>
                                            <Field
                                                as={Input}
                                                id="image"
                                                name="image"
                                                type="file"
                                                accept="image/*"
                                                className={errors.image && touched.image ? "border-red-500" : ""}
                                            />
                                            <ErrorMessage name="image" component="p" className="text-sm text-red-500" />
                                        </div>

                                        {/* Stock Quantity */}
                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="stock" className="flex items-center gap-2">
                                                <Boxes className="w-4 h-4" />
                                                Stock Quantity
                                            </Label>
                                            <Field
                                                as={Input}
                                                id="stock"
                                                name="stock"
                                                type="text" // Keep as text to allow for "typeError" from Yup if non-numeric
                                                placeholder="e.g., 150"
                                                className={errors.stock && touched.stock ? "border-red-500" : ""}
                                            />
                                            <ErrorMessage name="stock" component="p" className="text-sm text-red-500" />
                                        </div>

                                        <Button type="submit" disabled={isSubmitting} className="w-full cursor-pointer">
                                        {isSubmitting ? "Adding Product..." : "Add Product"}
                                        </Button>
                                    </Form>
                                    )}
                                </Formik>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>

            {/* Filters and Search */}
            <Card className="shadow-elegant">
                <CardHeader>
                <CardTitle className="text-lg">Product Management</CardTitle>
                </CardHeader>
                <CardContent>
                <div className="flex gap-4 mb-6">
                    <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search products..." className="pl-10" />
                    </div>
                    <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                    </Button>
                </div>

                {/* Products Table */}
                <div className="rounded-lg border">
                    <div className="grid grid-cols-6 gap-25 p-4 bg-muted/50 font-medium text-sm text-muted-foreground border-b">
                    <div>Product</div>
                    <div>Category</div>
                    <div>Price</div>
                    <div>Stock</div>
                    <div>Status</div>
                    <div>Actions</div>
                    </div>
                    
                    {products.map((product) => (
                    <div
                    key={product._id} className="grid grid-cols-6 gap-5 p-4 items-center border-b hover:bg-accent/50 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                                <Package className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <div>
                                <p className="font-medium text-foreground">{product.name}</p>
                                {/* <p className="text-sm text-muted-foreground">ID: #{product._id}</p> */}
                            </div>
                        </div>
                        
                        <div className="ml-4">
                        <Badge variant="outline">{product.category}</Badge>
                        </div>
                        
                        <div className="font-medium text-foreground ml-7">
                        {product.price}
                        </div>
                        
                        <div className="font-medium text-foreground ml-11">
                        {product.stock}
                        </div>
                        
                        <div className="ml-12">
                        <Badge variant={getStatusColor(product.status, product.stock)}>
                            {getStatusText(product.status, product.stock)}
                        </Badge>
                        </div>
                        
                        <div className="flex items-center gap-2 ml-14">
                        <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                        </Button>
                        </div>
                        
                        <div></div>
                    </div>
                    ))}
                </div>
                </CardContent>
            </Card>

            {/* Summary Stats */}
            <div className="grid gap-6 md:grid-cols-3">
                <Card className="shadow-elegant">
                <CardHeader>
                    <CardTitle className="text-sm font-medium text-muted-foreground">Total Products</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-foreground">562</div>
                    <p className="text-sm text-muted-foreground">Across all categories</p>
                </CardContent>
                </Card>
                
                <Card className="shadow-elegant">
                <CardHeader>
                    <CardTitle className="text-sm font-medium text-muted-foreground">Low Stock Items</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-destructive">12</div>
                    <p className="text-sm text-muted-foreground">Need immediate attention</p>
                </CardContent>
                </Card>
                
                <Card className="shadow-elegant">
                <CardHeader>
                    <CardTitle className="text-sm font-medium text-muted-foreground">Total Value</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-foreground">$125,450</div>
                    <p className="text-sm text-muted-foreground">Current inventory value</p>
                </CardContent>
                </Card>
            </div>
            </div>
        </AdminLayout>
    );
};

export default Products;