import { Route, Routes } from 'react-router-dom';
import Header from './common/Header/Header';
import Home from './pages/Home/Home';
import Registration from './pages/Registration/Registration';
import NotFound from './pages/NotFound';
import LogIn from './pages/LogIn/LogIn';
import { useDispatch } from 'react-redux';
// import authSelectors from '../store/auth.selectors';
import { useEffect } from 'react';
import authOperations from '../store/auth.operations';
import PrivateRoute from './common/PrivateRoute/PrivateRoute';
import About from './pages/About/About';
// import PrivateRoute from './common/PrivateRoute/PrivateRoute';

export default function App() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<PrivateRoute redirectTo='/login'><Home /></PrivateRoute>}/>
        <Route path='/about' element={<PrivateRoute redirectTo='/login'><About /></PrivateRoute>}/>
        <Route path='/login' element={<LogIn />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}
