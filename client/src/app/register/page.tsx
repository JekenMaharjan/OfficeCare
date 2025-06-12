'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { Mail, User, Phone, MapPin, Lock, EyeOff, Eye, Link } from 'lucide-react';
import { toast } from 'sonner';

interface RegisterFormValues {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    location: string;
    password: string;
    confirmPassword: string;
}

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    firstName: Yup.string()
        .min(2, 'First name must be at least 2 characters')
        .required('First name is required'),
    lastName: Yup.string()
        .min(2, 'Last name must be at least 2 characters')
        .required('Last name is required'),
    phoneNumber: Yup.string()
        .matches(/^[+]?[\d\s\-()]+$/, 'Invalid phone number format')
        .min(10, 'Phone number must be at least 10 digits')
        .required('Phone number is required'),
    location: Yup.string()
        .min(2, 'Location must be at least 2 characters')
        .required('Location is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm password is required'),
});

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    //   const { toast } = useToast();

    const initialValues: RegisterFormValues = {
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        location: '',
        password: '',
        confirmPassword: '',
  };

  const handleSubmit = async (values: RegisterFormValues, { setSubmitting }: any) => {
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        console.log('Registration data:', values);
        
        toast("Registration Successful! Your account has been created successfully.");

        // Reset form after successful submission
        setSubmitting(false);
    } catch (error) {
        toast("Registration Failed Something went wrong. Please try again.");
        setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4">
        <Card className="w-full max-w-2xl shadow-xl border-0 bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center space-y-2 pb-8">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Office Care
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
            Shop premium office appliances at OfficeCare — where comfort meets productivity.
            </CardDescription>
            </CardHeader>
            
            <CardContent>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, errors, touched }) => (
                <Form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="md:col-span-2 space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email Address
                        </Label>
                        <Field
                        as={Input}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className={`transition-all duration-200 ${
                            errors.email && touched.email ? 'border-destructive focus:border-destructive' : ''
                        }`}
                        />
                        <ErrorMessage name="email" component="p" className="text-sm text-destructive" />
                    </div>

                    {/* First Name */}
                    <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-medium flex items-center gap-2">
                        <User className="w-4 h-4" />
                        First Name
                        </Label>
                        <Field
                        as={Input}
                        id="firstName"
                        name="firstName"
                        placeholder="Enter your first name"
                        className={`transition-all duration-200 ${
                            errors.firstName && touched.firstName ? 'border-destructive focus:border-destructive' : ''
                        }`}
                        />
                        <ErrorMessage name="firstName" component="p" className="text-sm text-destructive" />
                    </div>

                    {/* Last Name */}
                    <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-medium flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Last Name
                        </Label>
                        <Field
                        as={Input}
                        id="lastName"
                        name="lastName"
                        placeholder="Enter your last name"
                        className={`transition-all duration-200 ${
                            errors.lastName && touched.lastName ? 'border-destructive focus:border-destructive' : ''
                        }`}
                        />
                        <ErrorMessage name="lastName" component="p" className="text-sm text-destructive" />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                        <Label htmlFor="phoneNumber" className="text-sm font-medium flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Phone Number
                        </Label>
                        <Field
                        as={Input}
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Enter your phone number"
                        className={`transition-all duration-200 ${
                            errors.phoneNumber && touched.phoneNumber ? 'border-destructive focus:border-destructive' : ''
                        }`}
                        />
                        <ErrorMessage name="phoneNumber" component="p" className="text-sm text-destructive" />
                    </div>

                    {/* Location */}
                    <div className="space-y-2">
                        <Label htmlFor="location" className="text-sm font-medium flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Location
                        </Label>
                        <Field
                        as={Input}
                        id="location"
                        name="location"
                        placeholder="Enter your location"
                        className={`transition-all duration-200 ${
                            errors.location && touched.location ? 'border-destructive focus:border-destructive' : ''
                        }`}
                        />
                        <ErrorMessage name="location" component="p" className="text-sm text-destructive" />
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                        <Label htmlFor="password" className="text-sm font-medium flex items-center gap-2">
                        <Lock className="w-4 h-4" />
                        Password
                        </Label>
                        <div className="relative">
                        <Field
                            as={Input}
                            id="password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            className={`pr-10 transition-all duration-200 ${
                            errors.password && touched.password ? 'border-destructive focus:border-destructive' : ''
                            }`}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                        </div>
                        <ErrorMessage name="password" component="p" className="text-sm text-destructive" />
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-2">
                        <Label htmlFor="confirmPassword" className="text-sm font-medium flex items-center gap-2">
                        <Lock className="w-4 h-4" />
                        Confirm Password
                        </Label>
                        <div className="relative">
                        <Field
                            as={Input}
                            id="confirmPassword"
                            name="confirmPassword"
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="Confirm your password"
                            className={`pr-10 transition-all duration-200 ${
                            errors.confirmPassword && touched.confirmPassword ? 'border-destructive focus:border-destructive' : ''
                            }`}
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                        </div>
                        <ErrorMessage name="confirmPassword" component="p" className="text-sm text-destructive" />
                    </div>
                    </div>

                    <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 text-lg font-medium bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                    {isSubmitting ? 'Creating Account...' : 'Create Account'}
                    </Button>

                    <div className="text-center pt-4">
                    <p className="text-muted-foreground">
                        Already have an account?{' '}
                        <Link
                        href="/login"
                        className="font-medium text-primary hover:underline transition-colors"
                        >
                        Sign in here
                        </Link>
                    </p>
                    </div>
                </Form>
                )}
            </Formik>
            </CardContent>
        </Card>
    </div>
  );
};

export default Register;