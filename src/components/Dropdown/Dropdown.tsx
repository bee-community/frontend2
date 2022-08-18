import React, { useState, VFC } from 'react';

import arrow from '../../assets/chatImages/dropdownArrow.png';

const Dropdown: VFC<any> = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ['참여인원수', '최신순'];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>
        {selected}
        <img className="arrow" alt="" src={arrow} />
      </div>
      {isActive && (
        <div className="dropdown-content">
          <div
            onClick={e => {
              setSelected(selected);
              setIsActive(false);
            }}
            className="dropdown-item">
            {selected}
            <img className="arrow" alt="" src={arrow} />
          </div>
          {options.map(option => (
            <div
              key={option}
              style={{ color: 'gray' }}
              onClick={e => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item">
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
