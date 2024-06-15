import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

// import { useSelector } from 'react-redux';
import Spinner from '../Messages/Spinner';

import './app.css';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const AdminPage = lazy(() => import('../pages/AdminPage'));
const UserInfoPage = lazy(() => import('../pages/UserInfoPage'));

const PrivateRoute = ({ children }) => {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <div className="app">
      <Suspense
        fallback={
          <div className="centered-spinner">
            <Spinner />
          </div>
        }
      >
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="login" element={<LoginPage />} />
            <Route
              path="admin"
              element={
                <PrivateRoute>
                  <AdminPage />
                </PrivateRoute>
              }
            />
            <Route
              path="student"
              element={<PrivateRoute>{<UserInfoPage />}</PrivateRoute>}
            />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
