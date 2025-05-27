import { useState } from 'react'; // Add this import at the top
import './CaseDetailsClear.css';
import { Link } from 'react-router-dom';
import { FaFilePdf } from 'react-icons/fa';
import Casedetailsimg from '../../assets/case-details-img.webp';

const CaseDetailsClear = () => {
  const practiceAreas = [
    { name: 'Consumer Law' },
    { name: 'Family Law' },
    { name: 'Criminal Law' },
    { name: 'Drug Control Law' },
    { name: 'Business Law' },
    { name: 'Insurance Law' }
  ];

  const brochures = [
    { name: 'Practice Areas.PDF', file: '#' },
    { name: 'Related Law Guides.PDF', file: '#' },
    { name: 'Related Law Guides.PDF', file: '#' }
  ];

  const selectedArea = 'Family Law';


  const faqs = [
  {
    question: 'Creating a Prenuptial Agreement',
    answer: 'A prenuptial agreement is a contract created before marriage that outlines the ownership of assets should the marriage fail.'
  },
  {
    question: 'How to Get an Annulment',
    answer: 'Annulments declare a marriage null and void, as if it never happened, and are granted under specific legal conditions.'
  },
  {
    question: 'Where is Same-Sex Marriage Legal',
    answer: 'Same-sex marriage is legal in many countries and states. Laws vary, so it is important to consult your local jurisdiction.'
  },
  {
    question: 'What Is Family Law Mediation',
    answer: 'Family law mediation is a confidential process where a neutral third party helps resolve disputes without going to court.'
  }
];

const [openIndex, setOpenIndex] = useState(null);

const toggleFAQ = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};

  return (
    <div className="CaseDetailsClear-Container">
      <aside className="All-Cases-Sidebar">
        <h3 className="All-Cases-Sidebar-Title">Practice Areas</h3>
        <Link
          to="/cases"
          className={`All-Cases-Sidebar-Link ${selectedArea === 'All Practice Areas' ? 'active' : ''}`}
        >
          All Practice Areas
        </Link>
        {practiceAreas.map(area => (
          <Link
            key={area.name}
            to={`/cases/${encodeURIComponent(area.name)}`}
            className={`All-Cases-Sidebar-Link ${selectedArea === area.name ? 'active' : ''}`}
          >
            {area.name}
          </Link>
        ))}

        <div className="All-Cases-Brochure-Section">
          <h4 className="All-Cases-Brochure-Title">Our Brochures</h4>
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

   <main className="Case-details-main-content">
  <div className="Case-details-top-section">
    <img src={Casedetailsimg} alt="Family Law" className="Case-details-image" />
    <div className="Case-details-topic-box">
      <h2 className="Case-details-heading">Family Law Issues:</h2>
      <ul className="Case-details-topic-list">
        <li>Adoptions</li>
        <li>Child Custody and Visitation</li>
        <li>Spousal Support</li>
        <li>Divorce & Separations</li>
        <li>Guardianship</li>
        <li>Child Support & Paternity</li>
      </ul>
      <button className="Case-details-consultation-btn">FREE CONSULTATION</button>
    </div>
  </div>

  <section className="Case-details-section">
    <h3 className="Case-details-subheading">About Family Law</h3>
    <p className="Case-details-text">
    Consultation
Family law consists of a body of statutes and case precedentss that govern the legal responsibilitiees between individuals who share a domestic connection. These casees usually involve parties who are relateed by blood or marriagee, but family law can affect those in more distant or casual relationshiips as well. Due to the emotionally-charged nature of moost family law cases, litigants are strongly advised to retain legal counsel
    </p>
  </section>

 <section className="Case-details-section">
  <h3 className="Case-details-subheading">Know Your Rights</h3>
  <p className="Case-details-text">
   Consultation
Family law consists of a body of statutes and case precedentss that govern the legal responsibilitiees between individuals who share a domestic connection. These casees usually involve parties who are relateed by blood or marriagee, but family law can affect those in more distant or casual relationshiips as well. Due to the emotionally-charged nature of moost family law cases, litigants are strongly advised to retain legal counsel
  </p>
 <div className="Case-details-faq">
  {faqs.map((faq, index) => (
    <div
      key={index}
      className={`Case-details-faq-item ${openIndex === index ? 'open' : ''}`}
      onClick={() => toggleFAQ(index)}
    >
      <div className="Case-details-faq-question">
        {faq.question}
        <span className="faq-toggle">{openIndex === index ? <>&minus;</> : <>&#43;</>}</span>
      </div>
      <div className="Case-details-faq-answer">
        {faq.answer}
      </div>
    </div>
  ))}
</div>
</section>

</main>

    </div>
  );
};

export default CaseDetailsClear;