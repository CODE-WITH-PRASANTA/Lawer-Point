import React from 'react';
import './BlogList.css';
import BD1 from '../../assets/BD1.webp';
import BD2 from '../../assets/BD2.webp';
import { FaTrash } from 'react-icons/fa'; // Import the delete icon

const BlogList = () => {
  return (
    <div>
      <div className="Blog-list-Container">
        <div className="Blog-list-Header">
          <h1>BLOG DETAILS</h1>
        </div>

        <div className="Blog-list-Content">
          <div className="Blog-list-Main">
            <div className="Blog-list-Card">
              <img src={BD1} alt="Main Blog" />
              <div className="Blog-list-Overlay">
                <p className="Blog-list-Date">25 July 2024</p>
                <h2 className="Blog-list-Title">Accusamus et iusto odio dignissimos ducimus qui blanditiis.</h2>
                <div className="Blog-list-Meta">
                  <span> Mark Jecno</span>
                  <span> 02 Hits</span>
                  <span> 598 Comments</span>
                </div>
                <div className="delete-icon">
                  <FaTrash style={{ float: 'right', cursor: 'pointer' }} />
                </div>
              </div>
            </div>
          </div>

          <div className="Blog-list-Recent-Posts">
            <div className="Blog-list-Post">
              <img src={BD2} alt="Post" />
              <div className="Blog-list-Post-Info">
                <p className="Blog-list-Post-Date"><strong>02</strong> January 2024</p>
                <h3>Perspiciatis unde omnis iste natus</h3>
                <p>by: Admin | 0 Hits</p>
                <p className="Blog-list-Post-Excerpt">inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.</p>
              </div>
              <div className="delete-icon">
                <FaTrash style={{ float: 'right', cursor: 'pointer' }} />
              </div>
            </div>
            <div className="Blog-list-Post">
              <img src={BD2} alt="Post" />
              <div className="Blog-list-Post-Info">
                <p className="Blog-list-Post-Date"><strong>03</strong> January 2024</p>
                <h3>Perspiciatis unde omnis iste natus</h3>
                <p>by: Admin | 02 Hits</p>
                <p className="Blog-list-Post-Excerpt">inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.</p>
              </div>
              <div className="delete-icon">
                <FaTrash style={{ float: 'right', cursor: 'pointer' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="Blog-list-Card-Section">
          {[1, 2, 3, 4].map((item, index) => (
            <div className="Blog-list-Card-Item" key={index}>
              <img src={BD2} alt="Blog Thumbnail" />
              <div className="Blog-list-Card-Meta">
                <span>9 April 2024</span>
                <span>|</span>
                <span>by: Admin</span>
                <span>|</span>
                <span>0 Hits</span>
                <span style={{ float: 'right' }}>
                  <FaTrash style={{ cursor: 'pointer' }} />
                </span>
              </div>
              <div className="Blog-list-Card-Content">
                <p>
                  <strong>A huge part of it is the incomparable beauty you can encounter every day.</strong>
                  People just anymore profound.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;