import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../api/userApi";

export const useDeleteUser = (mode) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUser,

   onSuccess: (_, deletedUserId) => {
      if (mode === "advanced") {
        queryClient.setQueryData(
          ["users"],
          (oldUsers = []) =>
            oldUsers.filter(
              (user) =>
                user._id !== deletedUserId
            )
        );
      } else {
        queryClient.invalidateQueries({
          queryKey: ["users"],
        });
      }
    },
  });
};



// import {
//   useMutation,
//   useQueryClient,
// } from "@tanstack/react-query";

// import { deleteUser } from "../api/userApi";

// export const useDeleteUser = (mode) => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: deleteUser,

//     onSuccess: (_, deletedUserId) => {
//       if (mode === "advanced") {
//         queryClient.setQueryData(
//           ["users"],
//           (oldUsers = []) =>
//             oldUsers.filter(
//               (user) =>
//                 user._id !== deletedUserId
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