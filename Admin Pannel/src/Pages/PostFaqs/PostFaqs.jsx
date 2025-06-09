import React, { useState } from 'react';
import './PostFaqs.css';

const PostFaqs = () => {
  const [faqs, setFaqs] = useState([{ question: '', answer: '', category: '' }]);
  const [categories, setCategories] = useState(['General']);
  const [newCategory, setNewCategory] = useState('');

  const handleFaqChange = (index, field, value) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index][field] = value;
    setFaqs(updatedFaqs);
  };

  const addFaqField = () => {
    setFaqs([...faqs, { question: '', answer: '', category: '' }]);
  };

  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted FAQs:', faqs);
  };

  return (
    <div className="Post-Faq-Container">
      <div className="Post-Faq-FormSection">
        <h2 className="Post-Faq-Heading">📘 Post FAQs</h2>

        <form onSubmit={handleSubmit} className="Post-Faq-Form">
          {faqs.map((faq, index) => (
            <div key={index} className="Post-Faq-Item">
              <div className="Post-Faq-FieldGroup">
                <label className="Post-Faq-Label">Question {index + 1}</label>
                <input
                  type="text"
                  className="Post-Faq-Input"
                  placeholder="Write your question"
                  value={faq.question}
                  onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
                />
              </div>

              <div className="Post-Faq-FieldGroup">
                <label className="Post-Faq-Label">Answer</label>
                <textarea
                  className="Post-Faq-Textarea"
                  placeholder="Write the answer"
                  value={faq.answer}
                  onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
                />
              </div>

              <div className="Post-Faq-FieldGroup">
                <label className="Post-Faq-Label">Select Category</label>
                <select
                  className="Post-Faq-Select"
                  value={faq.category}
                  onChange={(e) => handleFaqChange(index, 'category', e.target.value)}
                >
                  <option value="">Choose Category</option>
                  {categories.map((cat, i) => (
                    <option key={i} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}

          <button type="button" onClick={addFaqField} className="Post-Faq-Button Add">
            ➕ Add More FAQ
          </button>

          <button type="submit" className="Post-Faq-Button Submit">
            🚀 Submit FAQs
          </button>
        </form>
      </div>

      <div className="Post-Faq-Sidebar">
        <h3 className="Post-Faq-SidebarHeading">➕ Add New Category</h3>
        <input
          type="text"
          className="Post-Faq-SidebarInput"
          placeholder="New category name"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button onClick={handleAddCategory} className="Post-Faq-Button Green">
          Add Category
        </button>

        <div className="Post-Faq-CategoryList">
          <h4>Available Categories:</h4>
          <ul>
            {categories.map((cat, index) => (
              <li key={index}>{cat}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostFaqs;
