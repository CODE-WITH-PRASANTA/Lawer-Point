import React from 'react';
import './Cases.css';
import AllCases from '../../Components/AllCases/AllCases';

const Cases = () => {
  return (
  <>
    <div>
      <div className="Cases-Section">
        <div className="Cases-Overlay">
          <h1 className="Cases-Heading">ALL TYPES OF CASES & LEGAL INFORMATION</h1>
          <p className="Cases-Subheading">
            “ Explore a comprehensive range of legal cases, including civil, criminal, corporate, property, and family law. This page provides detailed insights, case histories, and access to legal drafts and documentation to help you understand and manage your legal matters effectively. ”
          </p>
        </div>
        <div className="Cases-Breadcrumb">
          <span className="Cases-BreadcrumbItem">Home</span>
          <span className="Cases-Separator">»</span>
          <span className="Cases-BreadcrumbItem">All Cases</span>
        </div>
      </div>
    </div>

    <AllCases />
  </>
  );
};

export default Cases;
