const Endpoints = {
    // Auth
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    GOOGLE_LOGIN: "/auth/google-login",
    LOGOUT: "/auth/logout",
    REFRESH_TOKEN: "/auth/refresh-token",
    GET_ME: "/auth/me",

    // Media
    UPLOAD_IMAGE: "/media/upload-image",

    // Admin
    DASHBOARD_STATS: "/admin/dashboard",
    USERS: "/admin/users",
    BANNERS_ADMIN: '/admin/banners',


    
    // User
    UPDATE_PROFILE: "/user/profile",
    CHANGE_PASSWORD: "/user/change-password",

    BANNERS: "/user/banners",

    PRODUCTS: "/user/products",
    PRODUCTS_ID:(id) => `/user/products/${id}`,
    BRANDS: "/user/brands",
    CATEGORIES: "/user/categories",

    WISHLIST: "/user/wishlist",
    WISHLIST_ID: (id) => `/user/wishlist/${id}`,

};

export default Endpoints;