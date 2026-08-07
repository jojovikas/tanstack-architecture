import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { updateUser } from "../api/userApi";
import { toast } from "sonner";

export const useUpdateUser = (mode) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUser,

    onSuccess: (updatedUser) => {
      console.log(
    updatedUser,
    "UPDATE RESPONSE"
  );
      if (mode === "advanced") {
        queryClient.setQueryData(
          ["users"],
          (oldUsers = []) =>
            oldUsers.map((user) =>
              user._id === updatedUser._id
                ? updatedUser
                : user
            )
        );
      } else {
        queryClient.invalidateQueries({
          queryKey: ["users"],
        });
      }

      toast.success(
        `${updatedUser.name} updated successfully ✨`
      );
    },

    onError: (error) => {
      toast.error(
        error.message ||
          "Failed to update user"
      );
    },
  });
};



// import {
//   useMutation,
//   useQueryClient,
// } from "@tanstack/react-query";

// import { updateUser } from "../api/userApi";

// export const useUpdateUser = (mode) => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: updateUser,

//     onSuccess: (updatedUser) => {
//       if (mode === "advanced") {
//         queryClient.setQueryData(
//           ["users"],
//           (oldUsers = []) =>
//             oldUsers.map((user) =>
//               user._id === updatedUser._id
//                 ? updatedUser
//                 : user
//             )
//         );
//       } else {
//         queryClient.invalidateQueries({
//           queryKey: ["users"],
//         });
//       }
//     },
//   });
// };