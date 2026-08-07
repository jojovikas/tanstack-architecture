import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../api/userApi";

export const useDeleteUser = (mode) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUser,

    onMutate: async (deletedUserId) => {
      if (mode !== "optimistic") return;
      const previousUsers = queryClient.getQueryData(["users"]);
      queryClient.setQueryData(["users"], (oldUsers = []) =>
        oldUsers.filter((user) => user._id !== deletedUserId),
      );
    },

    onSuccess: (_, deletedUserId) => {
      if (mode === "normal") {
        queryClient.invalidateQueries({
          queryKey: ["users"],
        });
      }
      if (mode === "advanced") {
        queryClient.setQueryData(["users"], (oldUsers = []) =>
          oldUsers.filter((user) => user._id !== deletedUserId),
        );
      }
    },
    onError: (error, deletedUserId, context) => {},
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
