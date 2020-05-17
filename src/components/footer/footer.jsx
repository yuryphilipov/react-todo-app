import React from "react";
import PropTypes from "prop-types";
const FILTERS_BTN = [
  {
    text: "All",
    id: "all",
  },
  {
    text: "Active",
    id: "active",
  },
  {
    text: "Completed",
    id: "completed",
  },
];

const Footer = ({ amount, activeFilter, changeFilter }) => (
  <div className='footer'>
    <span className='amount'>
      {`${amount} tasks left`}
      {/* {amount === 1 ? `${amount} tasks left` : "1 task left"} */}
    </span>
    <div className='btn-group'>
      {FILTERS_BTN.map(({ text, id }) => (
        <button
          key={id}
          className={id === activeFilter ? "filter-btn active" : "filter-btn"}
          onClick={() => changeFilter(id)}
        >
          {text}
        </button>
      ))}
    </div>
  </div>
);

Footer.propTypes = {
  amount: PropTypes.number,
  activeFilter: PropTypes.string,
  changeFilter: PropTypes.func,
};

Footer.defaultTypes = {
  amount: 0,
  activeFilter: "all",
  changeFilter: () => {},
};

export default Footer;
