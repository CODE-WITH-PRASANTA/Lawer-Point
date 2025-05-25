import React from 'react';
import { FaCalendarAlt, FaFolder } from 'react-icons/fa';
import './LatestNews.css';

// Assets
import News1 from '../../assets/blog-01.webp';
import News2 from '../../assets/blog-02.webp';
import News3 from '../../assets/blog-03.webp';

const LatestNews = () => {
  return (
    <div className="Latest-News-Container">
      <h2 className="Latest-News-Title">LEGAL UPDATES & INSIGHTS</h2>
        <p className="Latest-News-Subtitle">
        Stay informed with our latest legal updates, expert insights, and real-time news on legal drafting, compliance, case management, and industry reforms. <br />
        From client case studies to regulatory changes — get a deep dive into the world of law and justice.
        </p>


      <div className="Latest-News-Cards">
        <div className="Latest-News-Card">
          <img src={News1} alt="News 1" className="Latest-News-Image" />
          <h3 className="Latest-News-Card-Title">Efficiently Make Your Time Matter Wherever You Go</h3>
          <div className="Latest-News-Card-Meta">
            <span><FaCalendarAlt className="Latest-News-Icon" /> 25 August 2019</span>
            <span><FaFolder className="Latest-News-Icon" /> Legal Advice, News</span>
          </div>
          <p className="Latest-News-Card-Description">
            According to Altman Weil's 2018 Chief Legal Officer Survey, corporate legal departments are spending more on internal expenditures than on…
          </p>
          <a href="#" className="Latest-News-Read-More">READ MORE</a>
        </div>

        <div className="Latest-News-Card">
          <img src={News2} alt="News 2" className="Latest-News-Image" />
          <h3 className="Latest-News-Card-Title">Workloads Are Increasing. Is Your Legal Department.</h3>
          <div className="Latest-News-Card-Meta">
            <span><FaCalendarAlt className="Latest-News-Icon" /> 29 August 2019</span>
            <span><FaFolder className="Latest-News-Icon" /> Uncategorized</span>
          </div>
          <p className="Latest-News-Card-Description">
            According to Altman Weil's 2018 Chief Legal Officer Survey, corporate legal departments are spending more on internal expenditures than on…
          </p>
          <a href="#" className="Latest-News-Read-More">READ MORE</a>
        </div>

        <div className="Latest-News-Card">
          <img src={News3} alt="News 3" className="Latest-News-Image" />
          <h3 className="Latest-News-Card-Title">We’ve Learned alot by Listening to Our Customers</h3>
          <div className="Latest-News-Card-Meta">
            <span><FaCalendarAlt className="Latest-News-Icon" /> 30 August 2019</span>
            <span><FaFolder className="Latest-News-Icon" /> Civil law, Attorneys</span>
          </div>
          <p className="Latest-News-Card-Description">
            When your job involves developing innovative technology, it’s easy to get so wrapped up in figuring out what you are…
          </p>
          <a href="#" className="Latest-News-Read-More">READ MORE</a>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;