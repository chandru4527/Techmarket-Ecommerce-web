import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";

const PublicRoute = () => {
    // const { user, isLoading } = useAuth();
    const user = {
        name: 'ck',
        role: 'user'
    }

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    // Already logged in
    if (user) {
        // Admin
        if (user.role === "admin") {
            return <Navigate to="/admin" replace />;
        }

        // Normal user
        return <Navigate to="/" replace />;
    }

    // Not logged in
    return <Outlet />;
};

export default PublicRoute;