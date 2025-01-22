import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  AboutUs, Blogs, BlogsDetails, Cart, ContactUs, ForgotPassword, Home,
  Layout, Login, MyPurchases, NewPassword, ProductDetails, Products, Profile,
  Signup, Success, Terms, VerifyCode
} from "./Router/LazyRoutes";
import ChangePassword from "./views/ChangePassword/ChangePassword";
import PrivacyPolicy from "./views/privacy-Policy/PrivacyPolicy";

// Fade-in animation variants
const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
};

const AnimatedRoute = ({ element }) => (
  <motion.div
    variants={fadeVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {element}
  </motion.div>
);

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<AnimatedRoute element={<Home />} />} />
          <Route path="/about-us" element={<AnimatedRoute element={<AboutUs />} />} />
          <Route path="/products" element={<AnimatedRoute element={<Products />} />} />
          <Route
            path="/products/:id"
            element={<AnimatedRoute element={<ProductDetails />} />}
          />
          <Route path="/blog" element={<AnimatedRoute element={<Blogs />} />} />
          <Route
            path="/blog/:id"
            element={<AnimatedRoute element={<BlogsDetails />} />}
          />
          <Route path="/contact-us" element={<AnimatedRoute element={<ContactUs />} />} />
          <Route path="/cart" element={<AnimatedRoute element={<Cart />} />} />
          <Route path="/login" element={<AnimatedRoute element={<Login />} />} />
          <Route path="/signup" element={<AnimatedRoute element={<Signup />} />} />
          <Route
            path="/forgot-password"
            element={<AnimatedRoute element={<ForgotPassword />} />}
          />
          <Route path="/verify-code" element={<AnimatedRoute element={<VerifyCode />} />} />
          <Route path="/new-password" element={<AnimatedRoute element={<NewPassword />} />} />
          <Route path="/success" element={<AnimatedRoute element={<Success />} />} />
          <Route path="/profile" element={<AnimatedRoute element={<Profile />} />} />
          <Route
            path="/change-password"
            element={<AnimatedRoute element={<ChangePassword />} />}
          />
          <Route
            path="/my-purchases"
            element={<AnimatedRoute element={<MyPurchases />} />}
          />
          <Route
            path="/privacy-policy"
            element={<AnimatedRoute element={<PrivacyPolicy />} />}
          />
          <Route path="/terms" element={<AnimatedRoute element={<Terms />} />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const RootApp = () => (
  <Router>
    <App />
  </Router>
);

export default RootApp;
