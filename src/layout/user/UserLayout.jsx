import { Outlet } from "react-router-dom";

// Components
import Header from "./Header";
import Footer from "./Footer";

import ScrollToTop from "../../components/ScrollToTop";

const UserLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white scrollbar-none">
      <Header />

      <main id="main" className="flex-1 w-full max-w-360 mx-auto px-3 md:px-4 lg:px-8 py-3">
        <ScrollToTop/>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default UserLayout;