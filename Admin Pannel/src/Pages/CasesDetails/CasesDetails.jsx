import React, { useState } from 'react';
import './CasesDetails.css';

const CasesDetails = () => {
  const [reasons, setReasons] = useState(['']);
  const [faqs, setFaqs] = useState([{ question: '', answer: '' }]);
  const [photo, setPhoto] = useState(null);

  const handleReasonChange = (index, value) => {
    const updated = [...reasons];
    updated[index] = value;
    setReasons(updated);
  };

  const addReason = () => setReasons([...reasons, '']);
  const removeReason = (index) => {
    const updated = [...reasons];
    updated.splice(index, 1);
    setReasons(updated);
  };

  const handleFaqChange = (index, field, value) => {
    const updated = [...faqs];
    updated[index][field] = value;
    setFaqs(updated);
  };

  const addFaq = () => setFaqs([...faqs, { question: '', answer: '' }]);
  const removeFaq = (index) => {
    const updated = [...faqs];
    updated.splice(index, 1);
    setFaqs(updated);
  };

  const handlePhotoUpload = (e) => setPhoto(e.target.files[0]);

  return (
    <div className="Case-Details-Container">
      <h1 className="Case-Details-Heading">📂 Manage All Case Details</h1>

      <div className="Case-Details-Group">
        <label className="Case-Details-Label">Law Title</label>
        <input type="text" className="Case-Details-Input" placeholder="Enter Law Title" />
      </div>

      <div className="Case-Details-Group">
        <label className="Case-Details-Label">Description</label>
        <textarea className="Case-Details-Textarea" rows="3" placeholder="Enter Law Description"></textarea>
      </div>

      <div className="Case-Details-Group">
        <label className="Case-Details-Label">Upload Photo</label>
        <input type="file" className="Case-Details-Input" onChange={handlePhotoUpload} />
        {photo && <p className="Case-Details-FileName">📎 Selected: {photo.name}</p>}
      </div>

      <div className="Case-Details-Group">
        <label className="Case-Details-Label">Reasons of Law Issue (Points)</label>
        {reasons.map((reason, index) => (
          <div key={index} className="Case-Details-DynamicInput">
            <input
              type="text"
              placeholder={`Reason ${index + 1}`}
              value={reason}
              onChange={(e) => handleReasonChange(index, e.target.value)}
              className="Case-Details-Input"
            />
            <button type="button" onClick={() => removeReason(index)} className="Case-Details-RemoveBtn">Remove</button>
          </div>
        ))}
        <button type="button" onClick={addReason} className="Case-Details-AddBtn">+ Add Reason</button>
      </div>

      <div className="Case-Details-Group">
        <label className="Case-Details-Label">About Law</label>
        <textarea className="Case-Details-Textarea" rows="3" placeholder="Details about the law..."></textarea>
      </div>

      <div className="Case-Details-Group">
        <label className="Case-Details-Label">Know Your Rights</label>
        <textarea className="Case-Details-Textarea" rows="3" placeholder="Explain user rights..."></textarea>
      </div>

      <div className="Case-Details-Group">
        <label className="Case-Details-Label">FAQs (Frequently Asked Questions)</label>
        {faqs.map((faq, index) => (
          <div key={index} className="Case-Details-FAQGroup">
            <input
              type="text"
              placeholder="Question"
              value={faq.question}
              onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
              className="Case-Details-Input"
            />
            <textarea
              rows="2"
              placeholder="Answer"
              value={faq.answer}
              onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
              className="Case-Details-Textarea"
            ></textarea>
            <button type="button" onClick={() => removeFaq(index)} className="Case-Details-RemoveBtn">Remove</button>
          </div>
        ))}
        <button type="button" onClick={addFaq} className="Case-Details-AddBtn">+ Add FAQ</button>
      </div>

      <button className="Case-Details-SubmitBtn">Submit Case</button>
    </div>
  );
};

export default CasesDetails;
