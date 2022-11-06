import s from './Header.module.css'
import Container from "../Container";
import {useDispatch, useSelector} from "react-redux";
import authSelectors from "../../../store/auth.selectors";
import authOperations from "../../../store/auth.operations";
import {NavLink} from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  // const userName = useSelector(authSelectors.getUserName)
  const userEmail = useSelector(authSelectors.getUserEmail)
  const onClickLogOut = () => {
    dispatch(authOperations.logOut())
  }

  return (
    <header className={s.container}>
      <Container>
        <div className={s.innerContainer}>

          <div className={s.userMenu}>
            <NavLink to="/" className={s.userBtn}>
              Home
            </NavLink>
            <NavLink to="/contacts" className={s.userBtn}>
              Contacts
            </NavLink>
            <NavLink to="/about" className={s.userBtn}>
              About
            </NavLink>
          </div>

          {isLoggedIn ? (
            <div>
              Welcome, {userEmail} <button
              className={s.userBtn}
              onClick={onClickLogOut}
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
