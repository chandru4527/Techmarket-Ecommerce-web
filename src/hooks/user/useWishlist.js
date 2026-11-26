import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { get, post, put, del } from "../../api/axios";
import Endpoints from "../../api/apiEndpoints";


// Get Wishlist
export const getWishlist = () => useQuery({
    queryKey: ["wishlist"],
    queryFn: () => get(Endpoints.WISHLIST),
    staleTime: 5 * 60 * 1000,
    retry: false,
});

// Add to Wishlist
export const addToWishlist = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id) => post(Endpoints.WISHLIST_ID(id)),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["wishlist"] });
        }
    });
}

