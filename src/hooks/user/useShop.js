import { useMutation, useQuery, useQueryClient, useInfiniteQuery } from "@tanstack/react-query";

import { get, post, put, patch } from "../../api/axios";
import Endpoints from "../../api/apiEndpoints";

// Get All Products
export const useAllProducts = (params = {}) => useInfiniteQuery({
    queryKey: ["products", params],
    queryFn: ({ pageParam }) =>
        get(Endpoints.PRODUCTS, {
            ...params,
            page: pageParam,
            limit: 12,
        }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
        const totalPages = lastPage?.data?.totalPages;

        if (totalPages && allPages.length < totalPages) {
            return allPages.length + 1;
        }

        return undefined;
    },
    staleTime: 5 * 60 * 1000,
    retry: false,
});

// Get Single Product
export const useSingleProduct = (id) => useQuery({
    queryKey: ["product", id],
    queryFn: () => get(Endpoints.PRODUCTS_ID(id)),
    enabled: !!id,
});

// Get All Categories
export const useCategories = () => useQuery({
    queryKey: ["categories"],
    queryFn: () => get(Endpoints.CATEGORIES),
    staleTime: 5 * 60 * 1000,
    retry: false
});

// Get All Brands
export const useBrands = () => useQuery({
    queryKey: ["brands"],
    queryFn: () => get(Endpoints.BRANDS),
    staleTime: 5 * 60 * 1000,
    retry: false
});