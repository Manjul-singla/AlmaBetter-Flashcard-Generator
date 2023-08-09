import React from "react";
import { IoIosArrowForward } from "react-icons/io";

// Define a functional component named TermListItem which receives props.
const TermListItem = ({ item, index, active, handleClick }) => {
  // The component rendering begins.
  return (
    <div
      onClick={() => handleClick(index)} // Attach a click event handler to call handleClick with the index when clicked.
      className={`p-3 font-medium cursor-pointer ${
        active === index ? "activeTerm" : "" // Apply the "activeTerm" class if the current item is active.
      }`}
    >
      <div className={active === index ? "activeTerm" : undefined}>
        {/* Display an arrow icon and the term from the item. */}
        <IoIosArrowForward className="icon hidden " />{" "}
        {/* A hidden arrow icon. */}
        {item.Enter_Term} {/* Display the term from the item. */}
      </div>
    </div>
  );
};

export default TermListItem;
