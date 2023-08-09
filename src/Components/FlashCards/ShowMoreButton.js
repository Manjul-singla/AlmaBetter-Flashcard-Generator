// Import the React library.
import React from "react";

// Define a functional component named ShowMoreButton which receives props.
const ShowMoreButton = ({ showAll, toggleShow }) => {
  // The component rendering begins.
  return (
    <div className="flex justify-end mr-10">
      {" "}
      {/* Align the button to the right using flexbox. */}
      <button
        onClick={toggleShow} // Attach a click event handler to the button that calls the toggleShow function.
        className="mb-24 font-bold cursor-pointer w-24 mx-5 text-red-500" // Define button styling using Tailwind CSS classes.
      >
        {/* Display different text based on whether showAll is true or false. */}
        {showAll ? "See less" : "See all"}
      </button>
    </div>
  );
};

export default ShowMoreButton;
