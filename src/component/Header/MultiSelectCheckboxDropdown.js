import React, { useState } from 'react';

const MultiSelectCheckboxDropdown = ({ options }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleToggleOption = (value) => {
    const isSelected = selectedOptions.includes(value);
    if (isSelected) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredOptions = options.filter((option) => option.toLowerCase().includes(searchTerm));

  return (
    <div>
      <h3>Multi-Select Checkbox Search Dropdown</h3>
      <div>
        <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch} />
      </div>
      <div>
        {filteredOptions.map((option) => (
          <div key={option}>
            <label>
              <input
                type="checkbox"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleToggleOption(option)}
              />
              {option}
            </label>
          </div>
        ))}
      </div>
      <div>
        <h4>Selected Options:</h4>
        {selectedOptions.map((option) => (
          <div key={option}>{option}</div>
        ))}
      </div>
    </div>
  );
};

export default MultiSelectCheckboxDropdown;
