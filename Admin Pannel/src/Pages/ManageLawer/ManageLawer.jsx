import React, { useState } from 'react';
import './ManageLawer.css';

const ManageLawer = () => {
  const [educationFields, setEducationFields] = useState(['']);
  const [categories, setCategories] = useState(['']);
  const [platformFee, setPlatformFee] = useState('');
  const [lawerFee, setLawerFee] = useState('');
  const [experienceFields, setExperienceFields] = useState(['']);
  const [positionFields, setPositionFields] = useState(['']);

const handleAddExperience = () => {
  setExperienceFields([...experienceFields, '']);
};

const handleAddPosition = () => {
  setPositionFields([...positionFields, '']);
};

  const handleAddEducation = () => {
    setEducationFields([...educationFields, '']);
  };

  const handleAddCategory = () => {
    setCategories([...categories, '']);
  };

  const handleCategoryChange = (index, value) => {
    const updated = [...categories];
    updated[index] = value;
    setCategories(updated);
  };

  return (
    <div className="Manage-Lawer-Container">
      <h2 className="Manage-Lawer-Heading">Manage Lawyer's Profile</h2>

      <form className="Manage-Lawer-Form">
        {/* Personal Info */}
        <div className="Manage-Lawer-Section">
          <h3 className="Manage-Lawer-SubHeading">Personal Information</h3>
          <div className="Manage-Lawer-Row">
            <div className="Manage-Lawer-Input-Group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" className="Manage-Lawer-Input" />
            </div>
            <div className="Manage-Lawer-Input-Group">
              <label>Designation</label>
              <input type="text" placeholder="Senior Lawyer" className="Manage-Lawer-Input" />
            </div>
          </div>
          <div className="Manage-Lawer-Row">
            <div className="Manage-Lawer-Input-Group">
              <label>Phone Number</label>
              <input type="tel" placeholder="+1 123 456 7890" className="Manage-Lawer-Input" />
            </div>
            <div className="Manage-Lawer-Input-Group">
              <label>Email Address</label>
              <input type="email" placeholder="john.doe@example.com" className="Manage-Lawer-Input" />
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="Manage-Lawer-Section">
          <h3 className="Manage-Lawer-SubHeading">Social Media Links</h3>
          <div className="Manage-Lawer-Row">
            <div className="Manage-Lawer-Input-Group">
              <label>Facebook</label>
              <input type="url" placeholder="https://www.facebook.com/johndoe" className="Manage-Lawer-Input" />
            </div>
            <div className="Manage-Lawer-Input-Group">
              <label>Twitter</label>
              <input type="url" placeholder="https://www.twitter.com/johndoe" className="Manage-Lawer-Input" />
            </div>
          </div>
          <div className="Manage-Lawer-Row">
            <div className="Manage-Lawer-Input-Group">
              <label>LinkedIn</label>
              <input type="url" placeholder="https://www.linkedin.com/in/johndoe" className="Manage-Lawer-Input" />
            </div>
            <div className="Manage-Lawer-Input-Group">
              <label>Google+</label>
              <input type="url" placeholder="https://plus.google.com/+johndoe" className="Manage-Lawer-Input" />
            </div>
          </div>
        </div>

        {/* Portfolio */}
        <div className="Manage-Lawer-Section">
          <h3 className="Manage-Lawer-SubHeading">Portfolio & Objective</h3>
          <div className="Manage-Lawer-Input-Group">
            <label>Main Portfolio</label>
            <textarea placeholder="Describe your main portfolio" rows="3" className="Manage-Lawer-Textarea" />
          </div>
          <div className="Manage-Lawer-Input-Group">
            <label>Objective</label>
            <textarea placeholder="Describe your objective" rows="3" className="Manage-Lawer-Textarea" />
          </div>
          <div className="Manage-Lawer-Input-Group">
            <label>Address</label>
            <textarea placeholder="Enter your address" rows="2" className="Manage-Lawer-Textarea" />
          </div>
        </div>

        {/* Education */}
        <div className="Manage-Lawer-Section">
          <h3 className="Manage-Lawer-SubHeading">Education</h3>
          <div className="Manage-Lawer-Input-Group">
            <label>About Education</label>
            <textarea placeholder="Describe your education" rows="3" className="Manage-Lawer-Textarea" />
          </div>
          {educationFields.map((_, index) => (
            <div key={index} className="Manage-Lawer-Input-Group">
              <label>Education Detail {index + 1}</label>
              <input type="text" placeholder={`Education Detail ${index + 1}`} className="Manage-Lawer-Input" />
            </div>
          ))}
          <button type="button" onClick={handleAddEducation} className="Manage-Lawer-AddBtn">
            + Add Another
          </button>
        </div>

        {/* Legal Info */}
        <div className="Manage-Lawer-Section">
          <h3 className="Manage-Lawer-SubHeading">Legal & Professional Info</h3>
          <div className="Manage-Lawer-Input-Group">
            <label>Court Details</label>
            <textarea placeholder="Enter court details" rows="3" className="Manage-Lawer-Textarea" />
          </div>
          <div className="Manage-Lawer-Input-Group">
            <label>Other Admissions Details</label>
            <textarea placeholder="Enter other admissions details" rows="3" className="Manage-Lawer-Textarea" />
          </div>
          <div className="Manage-Lawer-Input-Group">
            <label>Professional Affiliations</label>
            <textarea placeholder="Enter professional affiliations" rows="3" className="Manage-Lawer-Textarea" />
          </div>
          <div className="Manage-Lawer-Input-Group">
            <label>Honors and Awards</label>
            <textarea placeholder="Enter honors and awards" rows="3" className="Manage-Lawer-Textarea" />
          </div>
          <div className="Manage-Lawer-Input-Group">
            <label>Meeting Charges</label>
            <input type="text" placeholder="e.g., ₹2000/hr" className="Manage-Lawer-Input" />
          </div>
        </div>

        {/* Profile Picture */}
        <div className="Manage-Lawer-Section">
          <h3 className="Manage-Lawer-SubHeading">Upload Profile Picture</h3>
          <input type="file" className="Manage-Lawer-Input" />
        </div>

        {/* Categories */}
        <div className="Manage-Lawer-Section">
          <h3 className="Manage-Lawer-SubHeading">Categories</h3>
          <div className="Manage-Lawer-Grid">
            {categories.map((cat, index) => (
              <div key={index} className="Manage-Lawer-Input-Group">
                <label>Category {index + 1}</label>
                <input
                  type="text"
                  placeholder={`Category ${index + 1}`}
                  value={cat}
                  onChange={(e) => handleCategoryChange(index, e.target.value)}
                  className="Manage-Lawer-Input"
                />
              </div>
            ))}
          </div>
          <button type="button" onClick={handleAddCategory} className="Manage-Lawer-AddBtn">
            + Add Category
          </button>
        </div>

        {/* Platform Fee */}
        <div className="Manage-Lawer-Section">
          <h3 className="Manage-Lawer-SubHeading">Platform Fee</h3>
          <div className="Manage-Lawer-Input-Group">
            <label>Platform Fee</label>
            <input
              type="text"
              placeholder="e.g., ₹500"
              value={platformFee}
              onChange={(e) => setPlatformFee(e.target.value)}
              className="Manage-Lawer-Input"
            />
          </div>
        </div>

        {/* Lawyer Fee */}
        <div className="Manage-Lawer-Section">
          <h3 className="Manage-Lawer-SubHeading">Lawyer Fee</h3>
          <div className="Manage-Lawer-Input-Group">
            <label>Lawyer Fee</label>
            <input
              type="text"
              placeholder="e.g., ₹3000 for consultation"
              value={lawerFee}
              onChange={(e) => setLawerFee(e.target.value)}
              className="Manage-Lawer-Input"
            />
          </div>
        </div>

        {/* Experience */}
        <div className="Manage-Lawer-Section">
          <h3 className="Manage-Lawer-SubHeading">Experience</h3>
          <div className="Manage-Lawer-Input-Group">
            <label>Total Experience</label>
            <input type="text" placeholder="e.g., 5 years" className="Manage-Lawer-Input" />
          </div>
          <div className="Manage-Lawer-Input-Group">
            <label>Experience Details</label>
            <textarea placeholder="Describe your experience" rows="3" className="Manage-Lawer-Textarea" />
          </div>
          {experienceFields.map((_, index) => (
            <div key={index} className="Manage-Lawer-Input-Group">
              <label>Experience {index + 1}</label>
              <input type="text" placeholder={`Experience ${index + 1}`} className="Manage-Lawer-Input" />
            </div>
          ))}
          <button type="button" onClick={handleAddExperience} className="Manage-Lawer-AddBtn">
            + Add Another
          </button>
        </div>

          {/* Position */}
          <div className="Manage-Lawer-Section">
            <h3 className="Manage-Lawer-SubHeading">Position</h3>
            <div className="Manage-Lawer-Input-Group">
              <label>Current Position</label>
              <input type="text" placeholder="e.g., Senior Lawyer" className="Manage-Lawer-Input" />
            </div>
            <div className="Manage-Lawer-Input-Group">
              <label>Previous Positions</label>
              <textarea placeholder="Describe your previous positions" rows="3" className="Manage-Lawer-Textarea" />
            </div>
            {positionFields.map((_, index) => (
              <div key={index} className="Manage-Lawer-Input-Group">
                <label>Position {index + 1}</label>
                <input type="text" placeholder={`Position ${index + 1}`} className="Manage-Lawer-Input" />
              </div>
            ))}
            <button type="button" onClick={handleAddPosition} className="Manage-Lawer-AddBtn">
              + Add Another
            </button>
          </div>

        {/* Submit */}
        <button type="submit" className="Manage-Lawer-SubmitBtn">Submit Details</button>
      </form>
    </div>
  );
};

export default ManageLawer;