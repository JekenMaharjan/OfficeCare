"use client"

import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Mail, Lock, EyeOff, Eye } from "lucide-react"
import axios from "axios"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { addLoginDetails } from "@/redux/reducerSlices/userSlice"
import { useDispatch } from "react-redux"

interface SigninFormValues {
  email: string
  password: string
}

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/\d/, 'Password must contain at least one number')
        .required('Password is required'),
})

const Signin = () => {
    const [showPassword, setShowPassword] = useState(false)

    const initialValues: SigninFormValues = {
        email: "",
        password: "",
    }

    const router = useRouter()
    const dispatch = useDispatch()

    const handleSubmit = async (values: SigninFormValues, { setSubmitting }: any) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000))

            const { data } = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/signin", values)
            if(data?.isLoggedIn){
                router.push('/homepage')
                // router.back();
            }
            //   toast("Welcome back! You have successfully signed in.")
            toast(data?.message)

            if(data){dispatch(addLoginDetails(data))}

            console.log("Signin data:", values)
            setSubmitting(false)

            // Redirect to dashboard or home page after successful signin
            // window.location.href = '/dashboard'
        } catch (error) {
        toast("Sign in failed. Please check your credentials and try again.")
        setSubmitting(false)
        }
    }

    return (
        <div
        className="min-h-screen flex items-center justify-center p-4"
        style={{ background: "linear-gradient(135deg, #fed7aa 0%, #dbeafe 100%)" }}
        >
        <Card className="w-full max-w-md">
                <img className="w-60 h-auto mx-auto my-auto" src="/OfficeCareLogo.png" alt="Office Care Logo" />
            <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Office Care</CardTitle>
            <p className="text-sm text-muted-foreground">Welcome back! Sign in to your account</p>
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

                    {/* Forgot Password Link */}
                    <div className="text-right">
                    <button
                        type="button"
                                        className="text-sm text-blue-600 hover:underline cursor-pointer"
                        onClick={() => toast("Password reset functionality coming soon!")}
                    >
                        Forgot your password?
                    </button>
                    </div>

                                <Button type="submit" disabled={isSubmitting} className="w-full cursor-pointer">
                    {isSubmitting ? "Signing In..." : "Sign In"}
                    </Button>

                    <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                        Don't have an account?{" "}
                        <button
                        type="button"
                        onClick={() => (window.location.href = "/register")}
                                            className="text-blue-600 hover:underline cursor-pointer"
                        >
                        Create account
                        </button>
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

export default Signin
