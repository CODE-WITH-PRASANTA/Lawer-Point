import React, { useState } from 'react';
import './AllCases.css';
import { Link, useParams } from "react-router-dom";
import i1 from '../../assets/i1.webp';
import i2 from '../../assets/i2.webp';
import i3 from '../../assets/i3.webp';
import i4 from '../../assets/i4.webp';
import i6 from '../../assets/i6.webp';
import i7 from '../../assets/i7.webp';
import {
  FaBalanceScale,
  FaUsers,
  FaGavel,
  FaCapsules,
  FaBriefcase,
  FaShieldAlt,
  FaFilePdf
} from "react-icons/fa";

const practiceAreas = [
  { name: "Consumer Law", icon: <FaBalanceScale />, image: i1, description: "Consumer protection laws ensure fair trade and protect consumer rights by offering a legal framework that allows consumers to seek redress and promotes transparency in transactions." },
  { name: "Family Law", icon: <FaUsers />, image: i2, description: "Covers family-related issues like divorce, custody, property division, and legal responsibilities of parents and spouses. It helps resolve disputes and protect family relationships within a legal context." },
  { name: "Criminal Law", icon: <FaGavel />, image: i3, description: "Governs crimes and punishments including public safety, law enforcement, prosecution, and legal penalties for criminal behavior such as theft, assault, fraud, and more." },
  { name: "Drug Control Law", icon: <FaCapsules />, image: i4, description: "Laws that regulate drug use, distribution, and pharmaceutical control. These rules help prevent misuse, ensure safe distribution, and guide legal responsibilities of pharmacists and manufacturers." },
  { name: "Business Law", icon: <FaBriefcase />, image: i6, description: "Deals with corporate law, contracts, mergers, acquisitions, and business regulations. It ensures businesses operate within the legal boundaries and resolves internal or external legal conflicts." },
  { name: "Insurance Law", icon: <FaShieldAlt />, image: i7, description: "Regulates insurance policies, claims handling, and insurer responsibilities. It ensures fair treatment of policyholders and proper conduct of insurance companies." }
];

const brochures = [
  { name: "Practice Areas", file: "Practice_Areas.pdf" },
  { name: "Related Law Guides", file: "Related_Law_Guides.pdf" },
  { name: "Related Law Guides", file: "Related_Law_Guides_2.pdf" }
];

const AllCases = () => {
  const { area } = useParams();
  const [expandedCard, setExpandedCard] = useState(null);

  const selectedArea = area ? decodeURIComponent(area) : "All Practice Areas";

  const filteredAreas = selectedArea === "All Practice Areas"
    ? practiceAreas
    : practiceAreas.filter(item => item.name === selectedArea);

  const toggleReadMore = (name) => {
    setExpandedCard(expandedCard === name ? null : name);
  };

  return (
    <div className="All-Cases-Container">
      <aside className="All-Cases-Sidebar">
        <h3 className="All-Cases-Sidebar-Title">Practice Areas</h3>
        <Link
          to="/cases"
          className={`All-Cases-Sidebar-Link ${selectedArea === "All Practice Areas" ? "active" : ""}`}
        >
          All Practice Areas
        </Link>
        {practiceAreas.map(area => (
          <Link
            key={area.name}
            to={`/cases/${encodeURIComponent(area.name)}`}
            className={`All-Cases-Sidebar-Link ${selectedArea === area.name ? "active" : ""}`}
          >
            {area.name}
          </Link>
        ))}

       <div className="All-Cases-Brochure-Section">
          <h4 className="All-Cases-Brochure-Title">Download Brochures</h4>
          <div className="All-Cases-Brochure-Divider" />
          {brochures.map((item, index) => (
            <a
              className="All-Cases-Brochure-Link"
              key={index}
              href={item.file}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="All-Cases-PDF-Container">
                <FaFilePdf className="All-Cases-PDF-Icon" />
                <span className="All-Cases-PDF-Name">{item.name}</span>
              </div>
            </a>
          ))}
        </div>
      </aside>

      <main className="All-Cases-Content">
        {filteredAreas.length > 0 ? (
          filteredAreas.map(area => {
            const isExpanded = expandedCard === area.name;
            const shortDesc = area.description.length > 130
              ? area.description.slice(0, 130) + "..."
              : area.description;

            return (
              <div className="All-Cases-Card" key={area.name}>
                <div className="All-Cases-Image-Wrap">
                  <img src={area.image} alt={area.name} className="All-Cases-Image" />
                </div>
                <div className="All-Cases-Icon">{area.icon}</div>
                <h3 className="All-Cases-Name">{area.name}</h3>
                <p className="All-Cases-Description">
                  {isExpanded ? area.description : shortDesc}
                  {area.description.length > 130 && (
                    <button className="ReadMoreBtn" onClick={() => toggleReadMore(area.name)}>
                      {isExpanded ? " Read less" : " Read more"}
                    </button>
                  )}
                </p>
              </div>
            );
          })
        ) : (
          <p className="All-Cases-No-Result">No practice area found for "{selectedArea}"</p>
        )}
      </main>
    </div>
  );
};

export default AllCases;
