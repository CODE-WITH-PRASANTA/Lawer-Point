import React, { useState } from "react";
import './ManageTeam.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa"; // ✅ FIXED HERE

const lawyerData = {
  FamilyLaw: [
    {
      name: "John Doe",
      role: "Family Lawyer",
      experience: "10 years",
      cases: 50,
      position: "Senior Lawyer",
      description:
        "Expert in handling divorce, child custody, and adoption cases.",
      img: "https://i.pravatar.cc/150?img=47",
      bg: "linear-gradient(135deg, #e8d2ff, #a1c4fd)",
    },
    {
      name: "Jane Smith",
      role: "Family Lawyer",
      experience: "5 years",
      cases: 20,
      position: "Junior Lawyer",
      description:
        "Specializes in family disputes and property settlements.",
      img: "https://i.pravatar.cc/150?img=50",
      bg: "linear-gradient(135deg, #d4fc79, #96e6a1)",
    },
  ],
  CriminalLaw: [
    {
      name: "Bob Johnson",
      role: "Criminal Lawyer",
      experience: "15 years",
      cases: 100,
      position: "Lead Lawyer",
      description:
        "Expert in handling felony and misdemeanor cases.",
      img: "https://i.pravatar.cc/150?img=55",
      bg: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    },
    {
      name: "Alice Brown",
      role: "Criminal Lawyer",
      experience: "8 years",
      cases: 40,
      position: "Associate Lawyer",
      description:
        "Specializes in DUI and traffic cases.",
      img: "https://i.pravatar.cc/150?img=45",
      bg: "linear-gradient(135deg, #f6d365, #fda085)",
    },
  ],
  CorporateLaw: [
    {
      name: "Mike Davis",
      role: "Corporate Lawyer",
      experience: "12 years",
      cases: 60,
      position: "Senior Lawyer",
      description:
        "Expert in handling mergers and acquisitions.",
      img: "https://i.pravatar.cc/150?img=34",
      bg: "linear-gradient(135deg, #ffecd2, #fcb69f)",
    },
    {
      name: "Emily Taylor",
      role: "Corporate Lawyer",
      experience: "6 years",
      cases: 30,
      position: "Junior Lawyer",
      description:
        "Specializes in contract law and compliance.",
      img: "https://i.pravatar.cc/150?img=26",
      bg: "linear-gradient(135deg, #c1dfc4, #deecdd)",
    },
  ],
};

const tabs = [
  { label: "Family Law", icon: <FaBalanceScale /> },
  { label: "Criminal Law", icon: <FaBalanceScale /> },
  { label: "Corporate Law", icon: <FaBalanceScale /> },
];

const ManageTeam = () => {
  const [activeTab, setActiveTab] = useState("Family Law");

  return (
    <div className="Manage-Team-Container">
      <div className="Manage-Team-Header">
        <h1 className="Manage-Team-Title">Lawyers</h1>
        <div className="Manage-Team-Breadcrumb">
          <span>Services</span> / <span className="Manage-Team-Breadcrumb-Active">Lawyers</span>
        </div>
      </div>

      <div className="Manage-Team-Tabs-Container">
        <div className="Manage-Team-Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              className={`Manage-Team-Tab-Btn ${activeTab === tab.label ? "Manage-Team-Tab-Btn-Active" : ""}`}
              onClick={() => setActiveTab(tab.label)}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="Manage-Team-Card-Grid">
        {lawyerData[activeTab.replace(" ", "")].map((lawyer, index) => (
          <div className="Manage-Team-Card" key={index}>
            <div className="Manage-Team-Card-Bg" style={{ background: lawyer.bg }} />
            <img src={lawyer.img} alt={lawyer.name} className="Manage-Team-Avatar" />
            <h2 className="Manage-Team-Member-Name">{lawyer.name}</h2>
            <p className="Manage-Team-Member-Role">{lawyer.role}</p>

            <div className="Manage-Team-Member-Stats">
              <div className="Manage-Team-Stat">
                <strong>Experience</strong>
                <p>{lawyer.experience}</p>
              </div>
              <div className="Manage-Team-Stat">
                <strong>Cases</strong>
                <p>{lawyer.cases}</p>
              </div>
              <div className="Manage-Team-Stat">
                <strong>Position</strong>
                <p>{lawyer.position}</p>
              </div>
            </div>

            <p className="Manage-Team-Member-Description">{lawyer.description}</p>

            <div className="Manage-Team-Socials">
              <a href="#" className="social-icon facebook" aria-label="Facebook">
                <FaFacebookF size={18} />
                </a>
                <a href="#" className="social-icon twitter" aria-label="Twitter">
                <FaTwitter size={18} />
                </a>
                <a href="#" className="social-icon linkedin" aria-label="LinkedIn">
                <FaLinkedinIn size={18} />
                </a>
                <a href="#" className="social-icon whatsapp" aria-label="WhatsApp">
                <FaWhatsapp size={18} />
                </a>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageTeam;
