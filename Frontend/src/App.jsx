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
const FaqLazy = lazy(() => import('./Pages/FaqPage/FaqPage'));
const AppointmentBookingLazy = lazy(() => import('./Components/AppointmentBooking/AppointmentBooking'));
const NewsLazy = lazy(() => import('./Pages/News/News'));
const NewsDetailsLazy = lazy(() => import('./Components/NewsDetails/NewsDetails'));
const LawerAboutLazy = lazy(() => import('./Components/LawerAbout/LawerAbout'));
const LegalDraftLazy = lazy(() => import('./Components/LegalDraftBooking/LegalDraftBooking'));

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
          <Route path="/faqs" element={
            <Suspense fallback={
              <div className="loader-container">
                <Atom color="#1c1c23" size="medium" text="Loading..." textColor="#1c1c23" />
              </div>
            }>
              <FaqLazy />
            </Suspense>
          } />
          <Route path="/appointment/booking" element={
            <Suspense fallback={
              <div className="loader-container">
                <Atom color="#1c1c23" size="medium" text="Loading..." textColor="#1c1c23" />
              </div>
            }>
              <AppointmentBookingLazy />
            </Suspense>
          } />
          <Route path="/news" element={
            <Suspense fallback={
              <div className="loader-container">
                <Atom color="#1c1c23" size="medium" text="Loading..." textColor="#1c1c23" />
              </div>
            }>
              <NewsLazy />
            </Suspense>
          } />
          <Route path="/news/:id" element={
            <Suspense fallback={
              <div className="loader-container">
                <Atom color="#1c1c23" size="medium" text="Loading..." textColor="#1c1c23" />
              </div>
            }>
              <NewsDetailsLazy />
            </Suspense>
          } />
          <Route path="/lawer/about" element={
            <Suspense fallback={
              <div className="loader-container">
                <Atom color="#1c1c23" size="medium" text="Loading..." textColor="#1c1c23" />
              </div>
            }>
              <LawerAboutLazy />
            </Suspense>
          } />
          <Route path="/draft/booking" element={
            <Suspense fallback={
              <div className="loader-container">
                <Atom color="#1c1c23" size="medium" text="Loading..." textColor="#1c1c23" />
              </div>
            }>
              <LegalDraftLazy />
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