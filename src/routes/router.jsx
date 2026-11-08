import { createBrowserRouter, Navigate } from "react-router-dom";

// Layouts
import UserLayout from "../layout/user/UserLayout";
import AdminLayout from "../layout/admin/AdminLayout";

// Route Protection
import PublicRoute from "./PublicRoute";
import AdminRoute from "./AdminRoute";

// Auth Pages
import Login from "../pages/authpage/LoginPage";
import Register from "../pages/authpage/RegisterPage";

// User Pages
import Home from "../pages/user/Home";
import Shop from "../pages/user/Shop";
import ProductDetails from "../pages/user/ProductDetails";
import CartPage from "../pages/user/CartPage";
import Blogs from "../pages/user/Blogs";
import Aboutus from "../pages/user/Aboutus";
import Contact from "../pages/user/Contact";
import WishlistPage from "../pages/user/WishlistPage";
import Profile from "../pages/user/Profile";

// Admin Pages
import Dashboard from "../pages/admin/Dashboard";
import Users from "../pages/admin/Users";
import Products from "../pages/admin/Products";
import AdminProfile from "../pages/admin/AdminProfile";

// Not Found
import NotFound from "../pages/notfound/NotFound";

const router = createBrowserRouter([

  // user routes
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "about",
        element: <Aboutus />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "wishlist",
        element: <WishlistPage />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },

  // public rotes
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/login",
        element: <Login />,
        handle: {
          title: "Login",
        },
      },

      {
        path: "/register",
        element: <Register />,
        handle: {
          title: "Register",
        },
      },
    ],
  },

  // admin routes
  {
    element: <AdminRoute />,
    children: [
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="dashboard" replace />,
          },
          {
            path: "dashboard",
            element: <Dashboard />,
            handle: {
              title: "Dashboard",
            },
          },
          {
            path: "users",
            element: <Users />,
            handle: {
              title: "Users Management",
            },
          },
          {
            path: "products",
            element: <Products />,
            handle: {
              title: "Products Management",
            },
          },
          {
            path: "profile",
            element: <AdminProfile />,
            handle: {
              title: "Profile",
            },
          },
        ],
      },
    ],
  },

  // 404 notfound 
  {
    path: "*",
    element: <NotFound />,
    handle: {
      title: "Page Not Found",
    },
  },
]);

export default router;