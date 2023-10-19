import React from "react";

const Buttons = ({ data, onClick }) => {
  return (
    <React.Fragment>
      {data.map((name, index) => {
        return (
          <button key={index} name={name} onClick={onClick}>
            {name}
          </button>
        );
      })}
    </React.Fragment>
  );
};

export default Buttons;

// rafce