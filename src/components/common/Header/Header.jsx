import s from './Header.module.css'
import Container from "../Container";
import {useDispatch, useSelector} from "react-redux";
import authSelectors from "../../../store/auth.selectors";
import authOperations from "../../../store/auth.operations";
import {NavLink} from "react-router-dom";

export default function Header(props) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  const userName = useSelector(authSelectors.getUserName)

  return (
    <header className={s.container}>
      <Container>
        <div className={s.innerContainer}>

          <div className={s.userMenu}>
            <NavLink to="/" className={s.userBtn}>
              Home
            </NavLink>
            <NavLink to="/about" className={s.userBtn}>
              About
            </NavLink>
          </div>

          {isLoggedIn ? (
            <div>
              Welcome, {userName} <button
              className={s.userBtn}
              onClick={() => dispatch(authOperations.logOut())}
            >Logout</button>
            </div>
          ) : (
            <div className={s.userMenu}>
              <NavLink to="/login" className={s.userBtn}>
                Login
              </NavLink>
              <NavLink to="/registration" className={s.userBtn}>
                Register
              </NavLink>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
