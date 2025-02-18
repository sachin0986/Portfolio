import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Pages/About";
import ContactMePage from "./Pages/ContactMePage";
import PortfolioDoc from "./Pages/PortfolioDoc";
import ProjectShowcase from "./Pages/ProjectShowcase";
import Resume from "./Pages/Resume";
import Home from "./Pages/Home"; // Fixed import
import Error from "./Pages/Error";
import Publications from "./Pages/Publications";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />, // Moved errorElement inside the root object
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <ContactMePage /> },
      { path: "/projectShowcase", element: <ProjectShowcase /> },
      { path: "/portfolioDoc", element: <PortfolioDoc /> },
      { path: "/resume", element: <Resume /> },
      { path: "/publications", element: <Publications /> }, // Changed path to match component name
    ],
  },
]);

export default App;