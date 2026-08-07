import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { createUser } from "../api/userApi";

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,

    onSuccess: (data) => {
      toast.success(
        `${data.name} created successfully 🎉`
      );

      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },

    onError: (error) => {
      toast.error(
        error.message || "Failed to create user"
      );
    },
  });
};