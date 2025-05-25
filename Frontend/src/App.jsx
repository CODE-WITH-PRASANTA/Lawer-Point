import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Home from './Pages/Home/Home';
import DownFooter from './Components/DownFooter/DownFooter';
import { Suspense, lazy, useState, useEffect } from 'react';
import { Atom } from 'react-loading-indicators';

const HomeLazy = lazy(() => import('./Pages/Home/Home'));

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1200); // adjust the delay time as needed

    return () => clearTimeout(timeoutId);
  }, [location]);

  return (
    <div className="app-container">
      {loading && (
        <div className="loader-container">
          <Atom color="#1c1c23" size="medium" text="Loading..." textColor="#1c1c23" />
        </div>
      )}
      <div className="content-wrapper" style={{ display: loading ? 'none' : 'block' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <Suspense fallback={
              <div className="loader-container">
                <Atom color="#1c1c23" size="medium" text="Loading..." textColor="#1c1c23" />
              </div>
            }>
              <HomeLazy />
            </Suspense>
          } />
        </Routes>
        <DownFooter />
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;