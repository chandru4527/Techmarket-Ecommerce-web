import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";

const AdminRoute = () => {
    // const { user, isLoading } = useAuth();

    const user = {
        name: 'ck',
        role: 'admin'
    }

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    // Not logged in
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // Logged in but not admin
    if (user.role !== "admin") {
        return <Navigate to="/" replace />;
    }

    // Admin
    return <Outlet />;
};

export default AdminRoute;