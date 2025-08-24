"use client"

import { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { useDispatch } from "react-redux"
import { useRouter } from "next/navigation"
import { addLoginDetails } from "@/redux/reducerSlices/userSlice"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

import { Mail, Lock, Eye, EyeOff } from "lucide-react"
import { toast } from "sonner"
import Link from "next/link"

// ✅ Validation Schema with Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/\d/, "Must contain at least one number")
    .required("Password is required"),
})

interface SigninFormValues {
  email: string
  password: string
}

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()

  const initialValues: SigninFormValues = { email: "", password: "" }

  const handleSubmit = async (values: SigninFormValues, { setSubmitting }: any) => {
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const { data } = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + "/signin",
        values
      )

      if (data?.isLoggedIn) {
        dispatch(addLoginDetails(data))
        toast.success("Welcome back! You have successfully signed in.")
        router.push("/admin/dashboard") // redirect to dashboard
      } else {
        toast.error(data?.message || "Login failed. Please try again.")
      }
    } catch (error: any) {
      toast.error("Sign in failed. Please check your credentials.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: "linear-gradient(135deg, #0400ffbe 0%, #dbeafe 100%)" }}
    >
        <Card className="w-full max-w-md">
            <CardHeader className="text-center">
                <img className="w-50 h-auto mx-auto my-auto" src="/OfficeCareLogo.png" alt="Office Care Logo" />
                <CardTitle className="text-2xl">Welcome Back</CardTitle>
                <CardDescription>Sign in to your Office Care account</CardDescription>
            </CardHeader>

            <CardContent>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                <Form className="space-y-4">
                    {/* Email */}
                    <div className="space-y-2">
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
                    />
                    <ErrorMessage
                        name="email"
                        component="p"
                        className="text-sm text-red-500"
                    />
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
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
                        />
                        <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                        >
                        {showPassword ? (
                            <EyeOff className="w-4 h-4" />
                        ) : (
                            <Eye className="w-4 h-4" />
                        )}
                        </button>
                    </div>
                    <ErrorMessage
                        name="password"
                        component="p"
                        className="text-sm text-red-500"
                    />
                    </div>

                    {/* Forgot Password */}
                    <div className="flex items-center justify-between">
                    <Link
                        href="/forgot-password"
                        className="text-sm text-purple-600 hover:underline"
                    >
                        Forgot password?
                    </Link>
                    </div>

                    {/* Submit */}
                    <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-600/80 cursor-pointer" disabled={isSubmitting}>
                    {isSubmitting ? "Signing in..." : "Sign In"}
                    </Button>
                </Form>
                )}
            </Formik>

            {/* Divider */}
            <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                </span>
                </div>
            </div>

            {/* Google Button */}
            <Button variant="outline" className="w-full cursor-pointer">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                />
                <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                />
                <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                />
                <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                />
                </svg>
                Continue with Google
            </Button>

            {/* Register */}
            <div className="text-center text-sm mt-4">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="text-purple-600 hover:underline">
                Sign up
                </Link>
            </div>
            </CardContent>
        </Card>
    </div>
  )
}








// "use client"

// import { Formik, Form, Field, ErrorMessage } from "formik"
// import * as Yup from "yup"
// import { useState } from "react"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

// import { Mail, Lock, EyeOff, Eye } from "lucide-react"
// import axios from "axios"
// import { toast } from "sonner"
// import { useRouter } from "next/navigation"
// import { addLoginDetails } from "@/redux/reducerSlices/userSlice"
// import { useDispatch } from "react-redux"

// interface SigninFormValues {
//   email: string
//   password: string
// }

// const validationSchema = Yup.object({
//     email: Yup.string()
//         .email('Invalid email address')
//         .required('Email is required'),
//     password: Yup.string()
//         .min(8, 'Password must be at least 8 characters')
//         .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
//         .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
//         .matches(/\d/, 'Password must contain at least one number')
//         .required('Password is required'),
// })

// const Signin = () => {
//     // const [showPassword, setShowPassword] = useState(false)

//     const initialValues: SigninFormValues = {
//         email: "",
//         password: "",
//     }

//     const router = useRouter()
//     const dispatch = useDispatch()

//     const handleSubmit = async (values: SigninFormValues, { setSubmitting }: any) => {
//         try {
//             await new Promise((resolve) => setTimeout(resolve, 1000))

//             const { data } = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/signin", values)
//             if(data?.isLoggedIn){
//                 router.push('admin/dashboard')
//                 // router.back();
//             }
//             //   toast("Welcome back! You have successfully signed in.")
//             toast(data?.message)

//             if(data){dispatch(addLoginDetails(data))}

//             console.log("Signin data:", values)
//             setSubmitting(false)

//             // Redirect to dashboard or home page after successful signin
//             // window.location.href = '/dashboard'
//         } catch (error) {
//         toast("Sign in failed. Please check your credentials and try again.")
//         setSubmitting(false)
//         }
//     }

//     return (
//         <div
//         className="min-h-screen flex items-center justify-center p-4"
//         style={{ background: "linear-gradient(135deg, #0400ffbe 0%, #dbeafe 100%)" }}
//         >
//         <Card className="w-full max-w-md">
//                 <img className="w-50 h-auto mx-auto my-auto" src="/OfficeCareLogo.png" alt="Office Care Logo" />
//             <CardHeader className="text-center">
//             <CardTitle className="text-2xl font-bold">Office Care</CardTitle>
//             <p className="text-sm text-muted-foreground">Welcome back! Sign in to your account</p>
//             </CardHeader>

//             <CardContent>
//             <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
//                 {({ isSubmitting, errors, touched }) => (
//                 <Form className="space-y-4">
//                     {/* Email */}
//                     <div>
//                     <Label htmlFor="email" className="flex items-center gap-2">
//                         <Mail className="w-4 h-4" />
//                         Email
//                     </Label>
//                     <Field
//                         as={Input}
//                         id="email"
//                         name="email"
//                         type="email"
//                         placeholder="Enter your email"
//                         className={errors.email && touched.email ? "border-red-500" : ""}
//                     />
//                     <ErrorMessage name="email" component="p" className="text-sm text-red-500" />
//                     </div>

//                     {/* Password */}
//                     <div>
//                     <Label htmlFor="password" className="flex items-center gap-2">
//                         <Lock className="w-4 h-4" />
//                         Password
//                     </Label>
//                     <div className="relative">
//                         <Field
//                         as={Input}
//                         id="password"
//                         name="password"
//                         // type={showPassword ? "text" : "password"}
//                         type={"password"}
//                         placeholder="Enter your password"
//                         className={errors.password && touched.password ? "border-red-500" : ""}
//                         />
//                         {/* <button
//                         type="button"
//                         onClick={() => setShowPassword(!showPassword)}
//                         className="absolute right-3 top-1/2 -translate-y-1/2"
//                         >
//                         {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
//                         </button> */}
//                     </div>
//                     <ErrorMessage name="password" component="p" className="text-sm text-red-500" />
//                     </div>

//                     {/* Forgot Password Link */}
//                     <div className="text-right">
//                     <button
//                         type="button"
//                                         className="text-sm text-blue-600 hover:underline cursor-pointer"
//                         onClick={() => toast("Password reset functionality coming soon!")}
//                     >
//                         Forgot your password?
//                     </button>
//                     </div>

//                                 <Button type="submit" disabled={isSubmitting} className="w-full cursor-pointer">
//                     {isSubmitting ? "Signing In..." : "Sign In"}
//                     </Button>

//                     <div className="text-center">
//                     <p className="text-sm text-muted-foreground">
//                         Don't have an account?{" "}
//                         <button
//                         type="button"
//                         onClick={() => (window.location.href = "/register")}
//                                             className="text-blue-600 hover:underline cursor-pointer"
//                         >
//                         Create account
//                         </button>
//                     </p>
//                     </div>
//                 </Form>
//                 )}
//             </Formik>
//             </CardContent>
//         </Card>
//         </div>
//     )
// }

// export default Signin
