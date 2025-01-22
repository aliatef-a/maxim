import { lazy } from "react";

export const Layout = lazy(() => import("../views/layout/Layout.jsx"));
export const Home = lazy(() => import("../views/Home/Home"));
export const Navbar = lazy(() => import("../components/header/Navbar"));
export const AboutUs = lazy(() => import("../views/About-us/AboutUs"));
export const Products = lazy(() => import("../views/Products/Products"));
export const Blogs = lazy(() => import("../views/Blogs/Blogs"));
export const ProductDetails = lazy(() => import("../views/ProductDetails/ProductDetails"));
export const BlogsDetails = lazy(() => import("../views/BlogsDetails/BlogsDetails"));
export const ContactUs = lazy(() => import("../views/ContactUs/ContactUs"));
export const Login = lazy(() => import("../views/Login/Login"));
export const Signup = lazy(() => import("../views/Signup/Signup"));
export const ForgotPassword = lazy(() => import("../views/ForgetPassword/Forgot-password"))
export const VerifyCode = lazy(() => import("../views/VerifyCode/VerifyCode"))
export const NewPassword = lazy(() => import("../views/NewPassword/NewPassword"))
export const Success = lazy(() => import("../views/Success/Success"))
export const Cart = lazy(() => import("../views/Cart/Cart"))
export const Profile = lazy(() => import("../views/Profile/Profile"))
export const MyPurchases = lazy(() => import("../views/MyPurchases/MyPurchases"))
export const privacyPolicy = lazy(() => import("../views/privacy-Policy/PrivacyPolicy"))
export const Terms = lazy(() => import("../views/Terms/Terms"))