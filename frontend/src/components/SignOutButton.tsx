import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import * as apiClient from "../services/api-client";
import { useAppContext } from "../contexts/AppContext";
const SignOutButton = () => {
  const queryClient = useQueryClient(); // - for invalidating all queries - this helps in removing the user from the cache

  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: apiClient.logoutUser,
    onSuccess: async () => {
      showToast({
        message: "Logged out successfully",
        type: "success",
      });
      await queryClient.invalidateQueries({ queryKey: ["validateToken"] });
      navigate("/sign-in");
    },
    onError: (error: Error) => {
      showToast({
        message: error.message || "Sorry, something went wrong",
        type: "error",
      });
    },
  });

  const handleLogout = () => {
    mutation.mutate();
    console.log("logout");
  };

  return (
    <button
      className=" text-lg bg-white px-4 py-1.5 rounded-md hover:bg-gray-200 text-primary"
      onClick={handleLogout}
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
