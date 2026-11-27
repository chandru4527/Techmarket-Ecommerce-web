import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { get, post, patch, del } from "../../api/axios";
import Endpoints from "../../api/Endpoints";

const AUTH_USER_KEY = ["auth", "user", "admin"];

export const useUpdateProfile = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload) => patch(Endpoints.PROFILE, payload),
        onSuccess: () => {
            queryClient.invalidateQueries(AUTH_USER_KEY);
        }
    });
};

export const useUpdatePassword = () => useMutation({
    mutationFn: (data) => patch(Endpoints.CHANGE_PASSWORD, data),
    retry: false,
});