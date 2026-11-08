import { Outlet } from "react-router-dom";

// Components
import Header from "./Header";
import Footer from "./Footer";

const UserLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white scrollbar-none">
      <Header />

      <main className="flex-1 w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default UserLayout;