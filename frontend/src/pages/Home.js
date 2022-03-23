import { useDispatch } from "react-redux";
import { logout } from "../store/actions/login";

export const Home = () => {
  const dispatch = useDispatch();

  return (
    <div>
      home <button onClick={() => dispatch(logout())}>logout</button>
    </div>
  );
};
