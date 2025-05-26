import React, { useState } from 'react';
import './AboutTimeline.css';

// Assets
import Timeline1 from '../../assets/timeline1.webp';
import Timeline2 from '../../assets/timeline2.webp';
import Timeline3 from '../../assets/timeline3.webp';
import Timeline4 from '../../assets/timeline4.webp';
import Timeline5 from '../../assets/timeline3.webp';
import Timeline6 from '../../assets/timeline2.webp';
import Timeline7 from '../../assets/timeline1.webp';

const AboutTimeline = () => {
  const [activeYear, setActiveYear] = useState(2019);

  const years = [
    {
      year: 2019,
      image: Timeline6,
      content: 'Legal Structuring & Compliance Foundation',
      description: `
        In 2019, we initiated our journey by building a strong legal and structural foundation. This involved extensive research on the Indian corporate legal ecosystem, including types of business entities, registration requirements, and compliance regulations. We consulted with legal experts to understand the Company Act, 2013 and planned our entity formation roadmap. Simultaneously, we drafted preliminary internal policies on data security, privacy, and business ethics.`
    },
    {
      year: 2020,
      image: Timeline3,
      content: 'Business Registration & Company Incorporation',
      description: `
       The year 2020 marked our official legal entry into the market as we registered the business as a Private Limited Company under the Ministry of Corporate Affairs (MCA). We obtained our Certificate of Incorporation (CIN), PAN, TAN, GSTIN, and opened a corporate bank account. Alongside, we filed the Memorandum and Articles of Association, defined shareholder roles, and ensured proper board resolution documentation to initiate lawful operations.`
    },
    {
      year: 2021,
      image: Timeline4,
      content: 'Contractual Framework & Legal Drafting',
      description: `
        In 2021, we developed and implemented all major legal contracts and agreements. This included legally binding Non-Disclosure Agreements (NDAs), Master Service Agreements (MSAs), client onboarding contracts, vendor agreements, and employee offer letters with confidentiality clauses. We consulted external law firms to ensure our documentation aligned with Indian labor law, IT Act 2000, and international best practices to reduce future legal risk`
    },
    {
      year: 2022,
      image: Timeline5,
      content: 'IP Protection & Licensing',
      description: `
       This year, our focus turned toward safeguarding our intellectual assets. We successfully filed for our logo and brand name trademarks and implemented copyright policies for all proprietary digital content and source code. We also ensured that any third-party software or libraries used were in compliance with respective open-source licenses such as MIT, Apache, and GNU. Legal due diligence was carried out for IP rights and source code ownership.`
    },
    {
      year: 2023,
      image: Timeline1,
      content: 'Taxation & Legal Audit Compliance',
      description: `
        In 2023, with revenue and client volume increasing, we prioritized statutory and financial compliance. Our company underwent its first independent audit, GST filings became streamlined, and income tax returns were filed quarterly and annually. We conducted an internal legal audit to review contract integrity, IP filings, and compliance with the Companies Act. Our ESOP policy draft was prepared in anticipation of future talent hiring and retention programs.`
    },
    {
      year: 2024,
      image: Timeline2,
      content: 'Global Expansion & Cross-Border Compliance',
      description: `
       As we started expanding globally, 2024 was dedicated to ensuring cross-border legal compliance. We applied for IEC (Import Export Code) registration for international service delivery and established client contracts with dual compliance under Indian and foreign laws. Cybersecurity and data protection became a priority, and we aligned operations with global standards like GDPR and ISO 27001. We also onboarded a data protection officer to manage risk and compliance at scale`
    },
    {
      year: 2025,
      image: Timeline7,
      content: 'Legal Automation & In-House Counsel',
      description: `
       In 2025, we streamlined our legal and compliance processes through automation and internal legal leadership. A dedicated in-house legal counsel was appointed to oversee contract review, regulatory compliance, IP protection, and legal negotiations. We introduced e-signature tools, centralized contract repositories, policy version control systems, and legal analytics dashboards. These changes reduced legal turnaround times and improved compliance accuracy across departments.`
    },
  ];

  const activeYearData = years.find((y) => y.year === activeYear);

  return (
    <div className="timeline-container">
      <div className="timeline-header">
        <h1>Our Journey Through the Years</h1>
        <p>
          Explore our company’s key milestones focusing on legal compliance, corporate governance, and strategic growth from 2019 to 2025.
        </p>
      </div>

      <div className="timeline-bar">
        <div className="timeline-line">
          {years.map((item) => (
            <div key={item.year} className="timeline-year-wrapper">
              <div
                className={`dot ${activeYear === item.year ? 'active-dot' : ''}`}
                onClick={() => setActiveYear(item.year)}
              ></div>
              <div className={`year-label ${activeYear === item.year ? 'active-year' : ''}`}>
                {item.year}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="timeline-content">
        <img src={activeYearData.image} alt={`Timeline ${activeYear}`} />
        <div className="timeline-text">
          <h2>{activeYearData.content}</h2>
          <p>{activeYearData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutTimeline;
