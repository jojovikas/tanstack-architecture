
import { useMutation } from "@tanstack/react-query";
import { deletePost } from "../api/userApi";
import { useQueryClient } from "@tanstack/react-query";





export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePost,
 onSuccess: () => {
    queryClient.invalidateQueries({
      queryKey: ["users"],
    });
  },
  });
};