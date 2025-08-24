// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// // Pages
// import Index from "./page";
// import NotFound from "./notFound";

// // Admin Pages
// import { AdminLayout } from "@/components/admin/adminLayout";
// import AdminDashboard from "./(roles)/admin/adminDashboard/page";
// import OrdersPage from "./(roles)/admin/ordersPage/page";
// import ProductsPage from "./(roles)/admin/productsPage/page";
// import CustomersPage from "./(roles)/admin/customersPage/page";


// // Customer Pages
// import Register from "./(roles)/customer/register/page";
// import { CustomerLayout } from "@/components/customer/customerLayout";
// import ProductList from "./(roles)/customer/productList/page";
// import Cart from "./(roles)/customer/cart/page";
// import Profile from "./(roles)/customer/profile/page";
// import Login from "./(roles)/customer/login/page";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Index />} />
          
//           {/* Customer Routes */}
//           <Route path="/products" element={<CustomerLayout><ProductList /></CustomerLayout>} />
//           <Route path="/cart" element={<CustomerLayout><Cart /></CustomerLayout>} />
//           <Route path="/profile" element={<CustomerLayout><Profile /></CustomerLayout>} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
          
//           {/* Admin Routes */}
//           <Route path="/admin" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
//           <Route path="/admin/products" element={<AdminLayout><ProductsPage /></AdminLayout>} />
//           <Route path="/admin/customers" element={<AdminLayout><CustomersPage /></AdminLayout>} />
//           <Route path="/admin/orders" element={<AdminLayout><OrdersPage /></AdminLayout>} />
          
//           {/* 404 Route */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;