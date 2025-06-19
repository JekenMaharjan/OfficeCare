"use client"

import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Mail, User, Phone, MapPin, Lock, EyeOff, Eye } from "lucide-react"
import axios from "axios"
import { toast } from "sonner"

interface RegisterFormValues {
  email: string
  firstName: string
  lastName: string
  phoneNumber: string
  location: string
  password: string
  confirmPassword: string
}

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  firstName: Yup.string().min(2, "First name must be at least 2 characters").required("First name is required"),
  lastName: Yup.string().min(2, "Last name must be at least 2 characters").required("Last name is required"),
  phoneNumber: Yup.string()
    .matches(/^[+]?[\d\s\-()]+$/, "Invalid phone number format")
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone number is required"),
  location: Yup.string().min(2, "Location must be at least 2 characters").required("Location is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
})

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const initialValues: RegisterFormValues = {
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    location: "",
    password: "",
    confirmPassword: "",
  }

  const handleSubmit = async (values: RegisterFormValues, { setSubmitting }: any) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const { data } = await axios.post("http://localhost:4000/register", values)
      toast(data)

      console.log("Registration data:", values)
      setSubmitting(false)
    } catch (error) {
      toast("Registration Failed Something went wrong. Please try again.")
      setSubmitting(false)
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: "linear-gradient(135deg, #fed7aa 0%, #dbeafe 100%)" }}
    >
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Office Care</CardTitle>
          <p className="text-sm text-muted-foreground">Create your account</p>
        </CardHeader>

        <CardContent>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ isSubmitting, errors, touched }) => (
              <Form className="space-y-4">
                {/* Email */}
                <div>
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </Label>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className={errors.email && touched.email ? "border-red-500" : ""}
                  />
                  <ErrorMessage name="email" component="p" className="text-sm text-red-500" />
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      First Name
                    </Label>
                    <Field
                      as={Input}
                      id="firstName"
                      name="firstName"
                      placeholder="First name"
                      className={errors.firstName && touched.firstName ? "border-red-500" : ""}
                    />
                    <ErrorMessage name="firstName" component="p" className="text-sm text-red-500" />
                  </div>

                  <div>
                    <Label htmlFor="lastName" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Last Name
                    </Label>
                    <Field
                      as={Input}
                      id="lastName"
                      name="lastName"
                      placeholder="Last name"
                      className={errors.lastName && touched.lastName ? "border-red-500" : ""}
                    />
                    <ErrorMessage name="lastName" component="p" className="text-sm text-red-500" />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <Label htmlFor="phoneNumber" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </Label>
                  <Field
                    as={Input}
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    className={errors.phoneNumber && touched.phoneNumber ? "border-red-500" : ""}
                  />
                  <ErrorMessage name="phoneNumber" component="p" className="text-sm text-red-500" />
                </div>

                {/* Location */}
                <div>
                  <Label htmlFor="location" className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Location
                  </Label>
                  <Field
                    as={Input}
                    id="location"
                    name="location"
                    placeholder="Enter your location"
                    className={errors.location && touched.location ? "border-red-500" : ""}
                  />
                  <ErrorMessage name="location" component="p" className="text-sm text-red-500" />
                </div>

                {/* Password */}
                <div>
                  <Label htmlFor="password" className="flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Password
                  </Label>
                  <div className="relative">
                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className={errors.password && touched.password ? "border-red-500" : ""}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  <ErrorMessage name="password" component="p" className="text-sm text-red-500" />
                </div>

                {/* Confirm Password */}
                <div>
                  <Label htmlFor="confirmPassword" className="flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Field
                      as={Input}
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      className={errors.confirmPassword && touched.confirmPassword ? "border-red-500" : ""}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  <ErrorMessage name="confirmPassword" component="p" className="text-sm text-red-500" />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full cursor-pointer">
                  {isSubmitting ? "Creating Account..." : "Create Account"}
                </Button>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <a href="/signin" className="text-blue-600 hover:underline">
                      Sign in here
                    </a>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  )
}

export default Register
