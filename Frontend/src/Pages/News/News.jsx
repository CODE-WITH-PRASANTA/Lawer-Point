import React from 'react';
import './News.css';
import AllNews from '../../Components/AllNews/AllNews';

const News = () => {
  return (
    <div>
      <div className="News-Section">
        <div className="News-Overlay">
          <h1 className="News-Heading">Legal Drafts & Law Updates</h1>
          <p className="News-Subheading">
            “ Stay informed with the latest news and updates from the legal world. Explore a wide collection of legal drafts, case studies, policy updates, and expert insights across civil, criminal, corporate, property, and family law. ”
          </p>
        </div>
        <div className="News-Breadcrumb">
          <span className="News-BreadcrumbItem">Home</span>
          <span className="News-Separator">»</span>
          <span className="News-BreadcrumbItem">Legal News</span>
        </div>
      </div>

      <AllNews />
    </div>
  );
};

export default News;
