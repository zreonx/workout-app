import { Link } from "react-router-dom";
import { FaDumbbell } from "react-icons/fa";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import useScreenType from "react-screentype-hook";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleLogoutClick = () => {
    logout();
  };

  const screenType = useScreenType();

  return (
    <header>
      <div className='container'>
        <Link
          to='/'
          style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
        >
          <span>
            <FaDumbbell size={50} style={{ marginTop: "" }} />
          </span>

          <h1>Workout</h1>
        </Link>
        <nav>
          {user && (
            <div>
              {!screenType.isMobile && <span>{user.email}</span>}
              <button onClick={handleLogoutClick}>Logout</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to='/login'>Login</Link>
              <Link to='/signup'>Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
