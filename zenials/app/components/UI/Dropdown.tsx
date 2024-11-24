import React, { useState } from "react";

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  label?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, label = "Select" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="dropdown">
      <label
        tabIndex={0}
        className="btn m-1"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selected || label}
      </label>
      {isOpen && (
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {options.map((option, idx) => (
            <li key={idx}>
              <a onClick={() => handleSelect(option)}>{option}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
