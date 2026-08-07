import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { createUser } from "../api/userApi";

export const useCreateUser = (mode) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,

    onSuccess: (data) => {
      toast.success(
        `${data.name} created successfully 🎉`
      );

      // Normal CRUD
      if (mode === "normal") {
        queryClient.invalidateQueries({
          queryKey: ["users"],
        });

        return;
      }

      // Advanced CRUD
      if (mode === "advanced") {
        queryClient.setQueryData(
          ["users"],
          (oldUsers = []) => [
            data,
            ...oldUsers,
          ]
        );

        return;
      }

      // Optimistic CRUD
      // (abhi temporary Advanced jaisa hi rakhenge)
      if (mode === "optimistic") {
        queryClient.setQueryData(
          ["users"],
          (oldUsers = []) => [
            data,
            ...oldUsers,
          ]
        );
      }
    },

    onError: (error) => {
      console.log(error, "error");

      toast.error(
        error.message ||
          "Failed to create user"
      );
    },
  });
};


// export const useCreateUser = (
//   mode
// ) => {
//   const queryClient =
//     useQueryClient();

//   return useMutation({
//     mutationFn: createUser,

//     onSuccess: (data) => {
//       if (mode === "advanced") {
//         queryClient.setQueryData(
//           ["users"],
//           (oldUsers = []) => [
//             data,
//             ...oldUsers,
//           ]
//         );
//       } else {
//         queryClient.invalidateQueries({
//           queryKey: ["users"],
//         });
//       }
//     },
//   });
// };