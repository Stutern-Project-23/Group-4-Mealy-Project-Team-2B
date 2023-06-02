import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const TabPanel = ({ children, value, index }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`full-width-tabpanel-${index}`}
    aria-labelledby={`full-width-tab-${index}`}>
    {value === index && (
      <div>
        <div>{children}</div>
      </div>
    )}
  </div>
);

const MealCustomization = ({ tabs, content, className }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const storedValue = localStorage.getItem("selectedTab");
    if (storedValue !== null) {
      setValue(Number(storedValue));
    }
  }, []);

  const handleChange = (newValue) => {
    setValue(newValue);
    localStorage.setItem("selectedTab", newValue);
  };

  return (
    <div className={className}>
      <div className="tab-button-div">
        {tabs.map((label, index) => (
          <button
            key={label.index}
            type="button"
            onClick={() => handleChange(index)}
            disabled={index === 0}
            className={`tab-button ${index === value ? "active-tab" : ""}`}>
            {label}
          </button>
        ))}
      </div>
      <div>
        {tabs.map((label, index) => (
          <TabPanel key={label.index} value={value} index={index}>
            <div className="tab-content-wrapper"> {content[index]}</div>
          </TabPanel>
        ))}
      </div>
    </div>
  );
};

MealCustomization.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  content: PropTypes.arrayOf(PropTypes.node).isRequired,
  className: PropTypes.string,
};

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default MealCustomization;
