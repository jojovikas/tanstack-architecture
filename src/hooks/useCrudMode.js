import { useLocation } from "react-router-dom";

export const useCrudMode = () => {
  const location = useLocation();

  return {
    isAdvanced:
      location.pathname === "/advanced",

    mode:
      location.pathname === "/advanced"
        ? "advanced"
        : "normal",
  };
};