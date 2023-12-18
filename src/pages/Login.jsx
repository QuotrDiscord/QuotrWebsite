import { Navigate, useLocation } from "@solidjs/router";

export const Login = () => {
  const location = useLocation();

  fetch(`${import.meta.env.VITE_API_PATH}/api/login/${location.query.code}`, {
    method: "GET",
    credentials: "include",
  });
  return <Navigate href={"/"} />;
};
