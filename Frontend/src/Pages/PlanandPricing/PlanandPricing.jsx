import React from 'react';
import './PlanandPricing.css';
import LegalDraftPricing from '../../Components/LegalDraftPricing/LegalDraftPricing';
import FreeConsultationForm from '../../Components/FreeConsultationForm/FreeConsultationForm';

const PlanandPricing = () => {
  return (
    <>
      <div className="Plan-pricing-Section">
        <div className="Plan-pricing-Overlay">
          <h1 className="Plan-pricing-Heading">Legal Drafting & Law Services – Plans & Pricing</h1>
          <p className="Plan-pricing-Subheading">
            Explore our transparent pricing plans for legal drafting, consultation, and comprehensive legal solutions. From civil to criminal, corporate to property law — our experts deliver personalized, secure, and reliable legal support tailored to your specific needs.
          </p>
        </div>
        <div className="Plan-pricing-Breadcrumb">
          <span className="Plan-pricing-BreadcrumbItem">Home</span>
          <span className="Plan-pricing-Separator">»</span>
          <span className="Plan-pricing-BreadcrumbItem">Plans & Pricing</span>
        </div>
      </div>

      <LegalDraftPricing />
      <FreeConsultationForm />
    </>
  );
};

export default PlanandPricing;
