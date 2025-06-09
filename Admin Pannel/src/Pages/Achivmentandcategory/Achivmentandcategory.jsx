import React, { useState } from 'react';
import './Achivmentandcategory.css';
import { Trash2, Edit } from 'lucide-react';

const Achivmentandcategory = () => {
  // Existing states
  const [photo, setPhoto] = useState(null);
  const [photoList, setPhotoList] = useState([]);
  const [category, setCategory] = useState('');
  const [categoryList, setCategoryList] = useState([]);

  // New states for client reviews
  const [reviewPic, setReviewPic] = useState(null);
  const [reviewName, setReviewName] = useState('');
  const [reviewDesignation, setReviewDesignation] = useState('');
  const [reviewDetails, setReviewDetails] = useState('');
  const [reviewList, setReviewList] = useState([]);

  // Handlers for existing photo upload
  const handlePhotoChange = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const handleUploadPhoto = () => {
    if (photo) {
      setPhotoList([...photoList, { id: Date.now(), image: photo }]);
      setPhoto(null);
    }
  };

  // Handlers for category add
  const handleAddCategory = () => {
    if (category.trim() !== '') {
      setCategoryList([...categoryList, { id: Date.now(), name: category }]);
      setCategory('');
    }
  };

  // Handlers for client review
  const handleReviewPicChange = (e) => {
    setReviewPic(URL.createObjectURL(e.target.files[0]));
  };

  const handlePostReview = () => {
    if (reviewName.trim() && reviewDesignation.trim() && reviewDetails.trim() && reviewPic) {
      setReviewList([
        ...reviewList,
        {
          id: Date.now(),
          image: reviewPic,
          name: reviewName,
          designation: reviewDesignation,
          details: reviewDetails,
        },
      ]);
      // Reset fields
      setReviewPic(null);
      setReviewName('');
      setReviewDesignation('');
      setReviewDetails('');
    } else {
      alert('Please fill all fields and upload a profile picture.');
    }
  };

  // Delete handlers
  const handleDeletePhoto = (id) => {
    setPhotoList(photoList.filter(item => item.id !== id));
  };

  const handleDeleteCategory = (id) => {
    setCategoryList(categoryList.filter(item => item.id !== id));
  };

  const handleDeleteReview = (id) => {
    setReviewList(reviewList.filter(item => item.id !== id));
  };

  return (
    <div className="Achivment-category-container">
      {/* Existing Achievement Photo Section */}
      <div className="Achivment-category-left">
        <h2 className="Achivment-category-title">Upload Achievement Photo</h2>
        <input type="file" onChange={handlePhotoChange} className="Achivment-category-input" />
        <button onClick={handleUploadPhoto} className="Achivment-category-btn">Upload Photo</button>
        <table className="Achivment-category-table">
          <thead>
            <tr>
              <th>Sl. No</th>
              <th>Photo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {photoList.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>
                  <img src={item.image} alt="Achievement" className="Achivment-category-img" />
                </td>
                <td>
                  <button onClick={() => handleDeletePhoto(item.id)} className="Achivment-category-icon-btn delete">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Existing Category Section */}
      <div className="Achivment-category-right">
        <h2 className="Achivment-category-title">Add Category</h2>
        <input
          type="text"
          placeholder="Enter category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="Achivment-category-input"
        />
        <button onClick={handleAddCategory} className="Achivment-category-btn">Add Category</button>
        <table className="Achivment-category-table">
          <thead>
            <tr>
              <th>Sl. No</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categoryList.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>
                  <button className="Achivment-category-icon-btn edit">
                    <Edit size={18} />
                  </button>
                  <button onClick={() => handleDeleteCategory(item.id)} className="Achivment-category-icon-btn delete">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* New Client Review Section */}
      <div className="Achivment-category-review">
        <h2 className="Achivment-category-title">Post Client Review</h2>
        <input type="file" onChange={handleReviewPicChange} className="Achivment-category-input" />
        <input
          type="text"
          placeholder="Client Name"
          value={reviewName}
          onChange={(e) => setReviewName(e.target.value)}
          className="Achivment-category-input"
        />
        <input
          type="text"
          placeholder="Designation"
          value={reviewDesignation}
          onChange={(e) => setReviewDesignation(e.target.value)}
          className="Achivment-category-input"
        />
        <textarea
          placeholder="Review Details"
          value={reviewDetails}
          onChange={(e) => setReviewDetails(e.target.value)}
          className="Achivment-category-input"
          rows={4}
        />
        <button onClick={handlePostReview} className="Achivment-category-btn">Post Review</button>

        <table className="Achivment-category-table">
          <thead>
            <tr>
              <th>Sl. No</th>
              <th>Profile Pic</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Review</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reviewList.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>
                  <img src={item.image} alt="Client" className="Achivment-category-img" />
                </td>
                <td>{item.name}</td>
                <td>{item.designation}</td>
                <td>{item.details}</td>
                <td>
                  <button onClick={() => handleDeleteReview(item.id)} className="Achivment-category-icon-btn delete">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Achivmentandcategory;
