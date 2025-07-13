"use client"

import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { useState } from "react" // Not strictly needed for this form, but kept for consistency if you add toggleable fields

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Package, AlignLeft, DollarSign, Tag, Image, Boxes } from "lucide-react" // Icons for product fields
import axios from "axios"
import { toast } from "sonner"

interface AddProductFormValues {
  name: string
  description: string
  price: number
  category: string
  imageUrl: string
  stock: number
}

const validationSchema = Yup.object({
  name: Yup.string().max(100, "Must be 100 characters or less").required("Product name is required"),
  description: Yup.string().max(500, "Must be 500 characters or less").required("Description is required"),
  price: Yup.number()
    .typeError("Price must be a number")
    .positive("Price must be a positive number")
    .required("Price is required"),
  category: Yup.string().max(50, "Must be 50 characters or less").required("Category is required"),
  imageUrl: Yup.string().url("Invalid URL format").required("Image URL is required"),
  stock: Yup.number()
    .typeError("Stock must be a number")
    .integer("Stock must be an integer")
    .min(0, "Stock cannot be negative")
    .required("Stock quantity is required"),
})

const AddProduct = () => {
  const initialValues: AddProductFormValues = {
    name: "",
    description: "",
    price: "", // Initialize as empty string to match input type="text"
    category: "",
    imageUrl: "",
    stock: "", // Initialize as empty string
  }

  const handleSubmit = async (values: AddProductFormValues, { setSubmitting, resetForm }: any) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call delay

        const { data } = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/addProduct", values)
      toast(data);

      console.log("Product data to be added:", values)
    //   toast("Product added successfully!")

      resetForm() // Clear the form after successful submission
    } catch (error) {
      console.error("Error adding product:", error)
      toast("Failed to add product. Something went wrong. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: "linear-gradient(135deg, #a7e6ff 0%, #c4f0ff 100%)" }} // A different gradient for product page
    >
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Add New Product</CardTitle>
          <p className="text-sm text-muted-foreground">Enter the details for your new product</p>
        </CardHeader>

        <CardContent>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ isSubmitting, errors, touched }) => (
              <Form className="space-y-4">
                {/* Product Name */}
                <div>
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
                <div>
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
                <div>
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
                <div>
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

                {/* Image URL */}
                <div>
                  <Label htmlFor="imageUrl" className="flex items-center gap-2">
                    <Image className="w-4 h-4" />
                    Image URL
                  </Label>
                  <Field
                    as={Input}
                    id="imageUrl"
                    name="imageUrl"
                    type="text"
                    placeholder="e.g., https://example.com/product-image.jpg"
                    className={errors.imageUrl && touched.imageUrl ? "border-red-500" : ""}
                  />
                  <ErrorMessage name="imageUrl" component="p" className="text-sm text-red-500" />
                </div>

                {/* Stock Quantity */}
                <div>
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
        </CardContent>
      </Card>
    </div>
  )
}

export default AddProduct