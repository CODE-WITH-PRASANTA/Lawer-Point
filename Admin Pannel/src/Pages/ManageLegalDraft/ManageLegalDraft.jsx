import React, { useState } from 'react';
import './ManageLegalDraft.css';

const ManageLegalDraft = () => {
  const [services, setServices] = useState([
    { name: '', categories: [{ name: '', price: '', duration: '' }] },
  ]);

  const [plans, setPlans] = useState([
    { type: 'Basic', price: '', features: [''] },
    { type: 'Professional', price: '', features: [''] },
    { type: 'Premium', price: '', features: [''] },
  ]);

  const handleServiceChange = (index, value) => {
    const newServices = [...services];
    newServices[index].name = value;
    setServices(newServices);
  };

  const handleCategoryChange = (serviceIndex, categoryIndex, field, value) => {
    const newServices = [...services];
    newServices[serviceIndex].categories[categoryIndex][field] = value;
    setServices(newServices);
  };

  const addCategory = (serviceIndex) => {
    const newServices = [...services];
    newServices[serviceIndex].categories.push({ name: '', price: '', duration: '' });
    setServices(newServices);
  };

  const addService = () => {
    setServices([...services, { name: '', categories: [{ name: '', price: '', duration: '' }] }]);
  };

  const handlePlanChange = (index, field, value) => {
    const newPlans = [...plans];
    newPlans[index][field] = value;
    setPlans(newPlans);
  };

  const handleFeatureChange = (planIndex, featureIndex, value) => {
    const newPlans = [...plans];
    newPlans[planIndex].features[featureIndex] = value;
    setPlans(newPlans);
  };

  const addFeature = (planIndex) => {
    const newPlans = [...plans];
    if (newPlans[planIndex].features.length < 5) {
      newPlans[planIndex].features.push('');
      setPlans(newPlans);
    }
  };

  return (
    <div className="Mnage-Legadraft-Serviice-Container">
      <h2 className="Mnage-Legadraft-Serviice-Heading">Manage Legal Draft Services</h2>

      <div className="Mnage-Legadraft-Serviice-Grid">
        {/* === LEFT: Services Section === */}
        <div className="Mnage-Legadraft-Serviice-Left">
          <h3 className="Mnage-Legadraft-Serviice-Subheading">Add Services</h3>
          {services.map((service, serviceIndex) => (
            <div className="Mnage-Legadraft-Serviice-Card" key={serviceIndex}>
              <input
                type="text"
                placeholder="Service Name"
                value={service.name}
                onChange={(e) => handleServiceChange(serviceIndex, e.target.value)}
                className="Mnage-Legadraft-Serviice-Input"
              />

              {service.categories.map((cat, categoryIndex) => (
                <div key={categoryIndex} className="Mnage-Legadraft-Serviice-CategoryRow">
                  <input
                    type="text"
                    placeholder="Category Name"
                    value={cat.name}
                    onChange={(e) =>
                      handleCategoryChange(serviceIndex, categoryIndex, 'name', e.target.value)
                    }
                    className="Mnage-Legadraft-Serviice-Input"
                  />
                  <input
                    type="number"
                    placeholder="Price"
                    value={cat.price}
                    onChange={(e) =>
                      handleCategoryChange(serviceIndex, categoryIndex, 'price', e.target.value)
                    }
                    className="Mnage-Legadraft-Serviice-Input"
                  />
                  <input
                    type="text"
                    placeholder="Duration (e.g., 2 Days)"
                    value={cat.duration}
                    onChange={(e) =>
                      handleCategoryChange(serviceIndex, categoryIndex, 'duration', e.target.value)
                    }
                    className="Mnage-Legadraft-Serviice-Input"
                  />
                </div>
              ))}

              <button
                type="button"
                onClick={() => addCategory(serviceIndex)}
                className="Mnage-Legadraft-Serviice-BtnSmall"
              >
                + Add Category
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={addService}
            className="Mnage-Legadraft-Serviice-BtnPrimary"
          >
            + Add Another Service
          </button>
          <button type="submit" className="Mnage-Legadraft-Serviice-BtnSubmit">
            Submit Services
          </button>
        </div>

        {/* === RIGHT: Minimum Draft Prices === */}
        <div className="Mnage-Legadraft-Serviice-Right">
          <h3 className="Mnage-Legadraft-Serviice-Subheading">Minimum Draft Price</h3>
          {plans.map((plan, planIndex) => (
            <div key={planIndex} className="Mnage-Legadraft-Serviice-Card">
              <h4 className="Mnage-Legadraft-Serviice-PlanTitle">{plan.type}</h4>
              <input
                type="number"
                placeholder={`${plan.type} Price`}
                value={plan.price}
                onChange={(e) => handlePlanChange(planIndex, 'price', e.target.value)}
                className="Mnage-Legadraft-Serviice-Input"
              />
              {plan.features.map((feature, featureIndex) => (
                <input
                  key={featureIndex}
                  type="text"
                  placeholder={`Feature ${featureIndex + 1}`}
                  value={feature}
                  onChange={(e) => handleFeatureChange(planIndex, featureIndex, e.target.value)}
                  className="Mnage-Legadraft-Serviice-Input"
                />
              ))}
              {plan.features.length < 5 && (
                <button
                  type="button"
                  onClick={() => addFeature(planIndex)}
                  className="Mnage-Legadraft-Serviice-BtnSmall"
                >
                  + Add Feature
                </button>
              )}
            </div>
          ))}
          <button type="submit" className="Mnage-Legadraft-Serviice-BtnSubmit">
            Submit Pricing
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageLegalDraft;
