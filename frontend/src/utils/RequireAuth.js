import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { useLocation } from "react-router-dom";

export default function RequireAuth({ children }) {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  const token = useSelector((state) => state.login.token);
  const dispatch = useDispatch();
  const location = useLocation();

  const checkAuth = () => {
    if (!isAuthenticated) {
      const redirectAfterLogin = location.pathname;
      dispatch(push(`/login?next=${redirectAfterLogin}`));
    }
  };

  useEffect(() => {
    checkAuth();
  }, [isAuthenticated, token]);

  return isAuthenticated ? children : null;
}
