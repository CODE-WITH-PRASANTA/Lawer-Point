import React, { useState } from "react";
import './AllNews.css';
import rp from '../../assets/rp-1.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FaCalendarAlt, FaComments, FaAngleRight, FaTags, FaListAlt, FaNewspaper } from "react-icons/fa";
import { Link } from 'react-router-dom';


const AllNews = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { name: 'Health Care Policy', link: '#' },
    { name: 'Personal Injury Law', link: '#' },
    { name: 'Corporate Law', link: '#' },
    { name: 'Criminal Law', link: '#' },
    { name: 'Artificial Intelligence', link: '#' },
    { name: 'Corporate Governance', link: '#' },
  ];

 const recentPosts = [
  {
    id: 1,
    title: 'Your Source For The Most Recent Legal Developments',
    date: '10 May 2025',
    comments: 3,
    link: '#',
    image: rp,
  },
  {
    id: 2,
    title: 'Stay Informed With Timely And Relevant Legal News',
    date: '13 May 2025',
    comments: 5,
    link: '#',
    image: rp,
  },
];

  const tags = [
    'Criminal Law',
    'Family Law',
    'Corporate Law',
    'Business Law',
    'Personal Injury',
    'Lawyer',
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="news-container">
      <div className="news-main-content">
        <div className="news-recent-posts">
          {recentPosts.map((post, index) => (
  <div key={index} className="news-post">
    <img src={post.image} alt="Post" />
    <div className="news-post-content">
      <h3 className="news-post-title">
        <Link to={`/news/${post.id}`}>{post.title}</Link>
      </h3>
      <div className="news-post-meta">
        <span className="news-post-date">
          <FaCalendarAlt className="icon-meta" /> {post.date}
        </span>
        <span className="news-post-comments">
          <FaComments className="icon-meta" /> {post.comments} Comments
        </span>
      </div>
      <p className="news-post-desc">No description available</p>
      <Link to={`/news/${post.id}`} className="news-read-more-btn">
        Read More <FaAngleRight className="icon-read-more" />
      </Link>
    </div>
  </div>
))}
        </div>

        <aside className="news-sidebar">
          <div className="news-search-bar">
            <input
              type="search"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search"
              className="news-search-input"
            />
            <button className="news-search-btn">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          <div className="news-categories">
            <h2 className="sidebar-heading">
              <FaListAlt className="icon-heading" /> All Categories
            </h2>
            <div className="news-category-tags">
              {categories.map((category, index) => (
                <span key={index} className="news-category-tag">
                  <a href={category.link}>{category.name}</a>
                </span>
              ))}
            </div>
          </div>

          <div className="news-recent-posts-sidebar">
            <h2 className="sidebar-heading">
              <FaNewspaper className="icon-heading" /> Recent Posts
            </h2>
            {recentPosts.map((post, index) => (
              <div key={index} className="news-recent-post">
                <img src={post.image} alt="Recent Post" />
                <div className="news-recent-post-content">
                  <h3>{post.title}</h3>
                  <a href={post.link} className="news-read-more">
                    Read More <FaAngleRight className="icon-read-more" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="news-tags-sidebar">
            <h2 className="sidebar-heading">
              <FaTags className="icon-heading" /> Tags
            </h2>
            <div className="news-tags">
              {tags.map((tag, index) => (
                <span key={index} className="news-tag">
                  <a href={`/tags/${tag.toLowerCase()}`}>{tag}</a>
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AllNews;
