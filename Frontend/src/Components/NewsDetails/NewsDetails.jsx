import React, { useState } from 'react';
import './NewsDetails.css';
import rp from '../../assets/rp-1.webp';
import bd from '../../assets/bd.webp';
import bd0 from '../../assets/bd0.webp';
import { useParams } from 'react-router-dom';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faComments } from '@fortawesome/free-solid-svg-icons';
import { faSearch, faQuoteLeft, faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const NewsDetails = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [categories, setCategories] = useState([
        { name: 'Health Care Policy', link: '#' },
        { name: 'Personal Injury Law', link: '#' },
        { name: 'Corporate Law', link: '#' },
        { name: 'Criminal Law', link: '#' },
        { name: 'Artificial Intelligence', link: '#' },
        { name: 'Corporate Governance', link: '#' },
    ]);

    const [recentPosts, setRecentPosts] = useState([
        {
            title: 'Your Source For The Most Recent Legal Developments',
            date: '10 May 2025',
            comments: 3,
            link: '#',
            image: rp,
        },
        {
            title: 'Stay Informed With Timely And Relevant Legal News',
            date: '13 May 2025',
            comments: 5,
            link: '#',
            image: rp,
        },
    ]);

    const [tags, setTags] = useState([
        'Criminal Law',
        'Family Law',
        'Corporate Law',
        'Business Law',
        'Personal Injury',
        'Lawyer',
    ]);
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

const { id } = useParams();


    return (
        <div className="News-details-container">
            <div className="News-details-main-content">
                <div className="News-details-content-area">
                    <div className="News-details-image-section-one">
                        <img src={bd0} alt="Lawyer at desk" />
                        <div className="News-details-footer">
                            <div className="date-container">
    <FontAwesomeIcon icon={faCalendarAlt} className="news-icon" />
    <span>10 May 2025</span>
</div>
<div className="comments-container">
    <FontAwesomeIcon icon={faComments} className="news-icon" />
    <span>03 Comments</span>
</div>
                        </div>
                    </div>

                    <h1 className="News-details-title">The impact of technology on modern legal practice</h1>
                    <p className="News-details-paragraph">
                        Pellentesque quis facilisis velit, non venenatis dui. Aliquam erat volutpat. Phasellus vulputate elit at nulla
                        pellentesque, sit amet consequat metus viverra. Ut vitae fringilla lorem, vitae tincidunt tellus. Etiam luctus nulla ut
                        bibendum finibus. Suspendisse mauris dolor, varius ac urna eu, elementum lobortis velit.
                    </p>
                    <p className="News-details-paragraph">
                        When facing legal challenges, having the right attorney by your side can make all the difference. We offer affordable
                        legal services without compromising on the quality of representation.
                    </p>
                    <div className="News-details-image-section-two">
                        <div className="image-container">
                            <img src={bd} alt="Lawyer at desk" />
                        </div>
                        <div className="News-details-benefits">
                            <h2>How To Benefit</h2>
                            <p>
                                Sed blandit tellus neque, a lobortis dolor porttitor vitae. Cras sit amet vestibulum magna, ut tincidunt arcu.
                                Proin bibendum, ante ut condimentum cursus, enim risus commodo tortor.
                                When facing legal challenges, having the right attorney by your side can make all the difference.
                            </p>
                            <p>
                                Donec iaculis diam arcu, ac sodales mauris rutrum id. Proin ultricies ipsum in magna dapibus, at congue felis suscipit.
                                Nullam in fermentum risus, eu facilisis turpis. Donec eget ultrices nibh.
                            </p>
                        </div>
                    </div>

                    <div className="News-details-quote">
                        <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                        <p>
                            "Those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful."
                        </p>
                    </div>
                    <div className="News-details-community">
                        <h2>Community Engagement</h2>
                        <p>
                            Section will highlight the agency's involvement in community events, pro bono work, and initiatives aimed at
                            promoting legal awareness. As we wrap up each post, we'll encourage readers to reach out to Bryn Lawyer & Legal
                            Services Agency for personalized.
                        </p>
                        <ul className="benefits-list">
                            <li><FontAwesomeIcon icon={faCheckCircle} /> Trusted Legal Support with Unwavering Dedication to Your Case</li>
                            <li><FontAwesomeIcon icon={faCheckCircle} /> We Build Trust by Diligently Fighting for Your Best Outcome</li>
                            <li><FontAwesomeIcon icon={faCheckCircle} /> No-Cost Initial Consultation with an Experienced Attorney</li>
                            <li><FontAwesomeIcon icon={faCheckCircle} /> Enjoy a Free Initial Consultation with One of Our Lawyers</li>
                            <li><FontAwesomeIcon icon={faCheckCircle} /> Your First Meeting with a Lawyer Is Absolutely Free</li>
                        </ul>
                        <div className="News-details-tags-row">
                            <div className="tags">
                                <strong>Tags:</strong> <span>Layers, Criminal Law, Business Law</span>
                            </div>
                            <div className="social-share">
                                <strong>Share:</strong>
                                <button className="social-news-icon">F</button>
                                <button className="social-news-icon">X</button>
                                <button className="social-news-icon">in</button>
                                <button className="social-news-icon">G</button>
                            </div>
                        </div>
                    </div>
                    <div className="comments-reply-form">
                        <h2>Ask Any Question ?</h2>
                        <form>
                            <div className="news-form-row">
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="news-form-row">
                                <input type="tel" placeholder="Phone" />
                                <input type="text" placeholder="Subject" />
                            </div>
                            <textarea placeholder="Message"></textarea>
                            <button type="submit">Submit Now →</button>
                        </form>
                    </div>

                </div>
                <aside className="News-details-sidebar">
                    <div className="News-details-search-bar">
                        <input type="search" value={searchTerm} onChange={handleSearch} placeholder="Search" />
                        <button>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                    <div className="News-details-categories">
                        <h2>All Categories</h2>
                        <div className="News-details-category-tags">
                            {categories.map((category, index) => (
                                <span key={index} className="News-details-category-tag">
                                    <a href={category.link}>{category.name}</a>
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="News-details-recent-posts-sidebar">
                        <h2>Recent Posts</h2>
                        {recentPosts.map((post, index) => (
                            <div key={index} className="News-details-recent-post">
                                <img src={post.image} alt="Post" />
                                <div className="News-details-recent-post-content">
                                    <h3>{post.title}</h3>
                                    <a href={post.link} className="News-details-read-more">Read More</a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="News-details-tags-sidebar">
                        <h2>Tags</h2>
                        <div className="News-details-tags">
                            {tags.map((tag, index) => (
                                <span key={index} className="News-details-tag">
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

export default NewsDetails;