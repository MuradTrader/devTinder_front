import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const user = useSelector((store) => store.user);

  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          🧑‍💻 DevTinder
        </Link>
      </div>
      <div className="flex-none gap-2">
        {user && (
          <div className="badge badge-neutral">
            Добро пожаловать! {user.firstName}
          </div>
        )}
        {user && (
          <div className="dropdown dropdown-end mx-2 mt-2">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              {user ? (
                <div className="avatar online">
                  <div className="rounded-full">
                    <img src={user.photoUrl} />
                  </div>
                </div>
              ) : (
                <div className="avatar offline">
                  <div className=" rounded-full">
                    <img src={user.photoUrl} />
                  </div>
                </div>
              )}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Профиль
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <a>Настройки</a>
              </li>
              <li>
                <a className="text-orange-600">Выйти</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
