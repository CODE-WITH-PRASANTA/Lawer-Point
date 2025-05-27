import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import DownFooter from './Components/DownFooter/DownFooter';
import { Suspense, lazy, useState, useEffect } from 'react';
import { Atom } from 'react-loading-indicators';
import WhatsAppBubble from './Components/WhatsAppBubble/WhatsAppBubble';

const HomeLazy = lazy(() => import('./Pages/Home/Home'));
const AboutLazy = lazy(() => import('./Pages/AboutUs/Aboutus'));
const AppointmentLazy = lazy(() => import('./Pages/Appointment/Appointment'));
const ContactLazy = lazy(() => import('./Pages/ContactUs/ContactUs'));
const CasesLazy = lazy(() => import('./Pages/Cases/Cases'));
const CasesDetailsLazy = lazy(() => import('./Components/CaseDetails/CaseDetails'));
const PlanandPricingLazy = lazy(() => import('./Pages/PlanandPricing/PlanandPricing'));

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
          <Route path="/about" element={
            <Suspense fallback={
              <div className="loader-container">
                <Atom color="#1c1c23" size="medium" text="Loading..." textColor="#1c1c23" />
              </div>
            }>
              <AboutLazy />
            </Suspense>
          } />
          <Route path="/appointment" element={
            <Suspense fallback={
              <div className="loader-container">
                <Atom color="#1c1c23" size="medium" text="Loading..." textColor="#1c1c23" />
              </div>
            }>
              <AppointmentLazy />
            </Suspense>
          } />
          <Route path="/contact" element={
            <Suspense fallback={
              <div className="loader-container">
                <Atom color="#1c1c23" size="medium" text="Loading..." textColor="#1c1c23" />
              </div>
            }>
              <ContactLazy />
            </Suspense>
          } />
          <Route path="/cases" element={
            <Suspense fallback={
              <div className="loader-container">
                <Atom color="#1c1c23" size="medium" text="Loading..." textColor="#1c1c23" />
              </div>
            }>
              <CasesLazy />
            </Suspense>
          } />
          <Route path="/cases/:area" element={
            <Suspense fallback={
              <div className="loader-container">
                <Atom color="#1c1c23" size="medium" text="Loading..." textColor="#1c1c23" />
              </div>
            }>
              <CasesDetailsLazy />
            </Suspense>
          } />
          <Route path="/pricing-details" element={
            <Suspense fallback={
              <div className="loader-container">
                <Atom color="#1c1c23" size="medium" text="Loading..." textColor="#1c1c23" />
              </div>
            }>
              <PlanandPricingLazy />
            </Suspense>
          } />
        </Routes>
        <WhatsAppBubble />
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