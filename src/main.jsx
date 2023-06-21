import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LandingPage from "./pages/LandingPage";
import CartPage from "../src/pages/Cart-page";
import CreatinePage from "./pages/products/CreatinePage";
import PreWorkoutPage from "./pages/products/Pre-workoutPage";
import ProteinPage from "./pages/products/ProteinPage";
import ErrorPage from "../src/pages/ErrorPage";
import Header from "../src/components/navigation/Header";
import Footer from "../src/components/footer/Footer";
import ContactPage from "../src/pages/ContactPage";
import { SidebarProvider } from "./contexts/SidebarContext";
import { CartProvider } from "./contexts/CartContext";
import Login from "./pages/user/Login";
import Signup from "./pages/user/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <LandingPage />
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: (
      <>
        <Header />
        <Login />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: (
      <>
        <Header />
        <Signup />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "cart",
    element: (
      <>
        <Header />
        <CartPage />
      </>
    ),
  },
  {
    path: "contact",
    element: (
      <>
        <Header />
        <ContactPage />
      </>
    ),
  },
  {
    path: "creatine",
    element: (
      <>
        <Header />
        <CreatinePage />
      </>
    ),
  },
  {
    path: "pre-workout",
    element: (
      <>
        <Header />
        <PreWorkoutPage />
      </>
    ),
  },
  {
    path: "protein",
    element: (
      <>
        <Header />
        <ProteinPage />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <SidebarProvider>
        <RouterProvider router={router} />
      </SidebarProvider>
    </CartProvider>
  </React.StrictMode>
);
