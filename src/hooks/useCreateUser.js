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

      // queryClient.invalidateQueries({
      //   queryKey: ["users"],
      // });
             if (mode === "advanced") {
        queryClient.setQueryData(
          ["users"],
          (oldUsers = []) => [
            data,
            ...oldUsers,
          ]
        );
      } else {
        queryClient.invalidateQueries({
          queryKey: ["users"],
        });
      }
    },

    onError: (error) => {
      console.log(error, "error");
      
      toast.error(
        error.message || "Failed to create user"
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