import React from 'react'
import './CaseDetails.css'
import CaseDetailsClear from '../CaseDetailsClear/CaseDetailsClear'
import ManageTeamMember from '../ManageTeamMember/ManageTeamMember'

const CaseDetails = () => {
  return (
    <>
    <div>
      <div className="cases-details-Section">
        <div className="cases-details-Overlay">
          <h1 className="cases-details-Heading">Explore Case Details & Legal Insights</h1>
          <p className="cases-details-Subheading">
            Discover detailed information about a variety of legal cases, including civil, criminal, corporate, property, and family law. Access case summaries, legal drafts, and historical data to better understand and manage legal proceedings with confidence.
          </p>
        </div>
        <div className="cases-details-Breadcrumb">
          <span className="cases-details-BreadcrumbItem">Home</span>
          <span className="cases-details-Separator">»</span>
          <span className="cases-details-BreadcrumbItem">Case Details</span>
        </div>
      </div>
    </div>
<CaseDetailsClear />

<ManageTeamMember />
    
    </>
  )
}

export default CaseDetails
