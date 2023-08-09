// Import necessary modules from React and related libraries.
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import FlashCardItem from "./FlashCardItem"; // Importing a component named FlashCardItem.
import ShowMoreButton from "./ShowMoreButton"; // Importing a component named ShowMoreButton.

// Define a functional component named MyFlashCards.
const MyFlashCards = () => {
  // Use the `useSelector` hook to retrieve flashcard data from Redux state.
  const flashCard = useSelector((state) => state.flashcardReducers.cards);

  // Obtain the navigation function from the `useNavigate` hook.
  const navigate = useNavigate();

  // Declare a state variable named `showAll` and its setter function `setShowAll` using the `useState` hook.
  const [showAll, setShowAll] = useState(false);

  // Define a function to toggle the `showAll` state.
  const toggleShow = () => {
    setShowAll(!showAll);
  };

  // Component rendering begins.
  return (
    <>
      {/* Conditional rendering: Display a message if there are no flashcards available. */}
      {flashCard.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[80vh]">
          <div className="text-red-600 m-2 font-bold">
            Flashcards Is Not Available
          </div>
          {/* Provide a link to the homepage where users can create flashcards. */}
          <Link to="/">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Create Flashcards
            </button>
          </Link>
        </div>
      ) : null}

      {/* Display a grid of flashcard items. Show all if `showAll` is true, otherwise show only up to 6. */}
      <div className="flex flex-wrap space-evenly sm:px-8 md:px-8 lg:px-8 xl:px-8 px-2">
        {flashCard.slice(0, showAll ? flashCard.length : 6).map((elem) => (
          // Render the FlashCardItem component for each flashcard element.
          <FlashCardItem key={elem.id} card={elem} navigate={navigate} />
        ))}
      </div>

      {/* Conditional rendering: Display the "Show More" button if there are more than 6 flashcards. */}
      {flashCard.length > 6 ? (
        <ShowMoreButton showAll={showAll} toggleShow={toggleShow} />
      ) : null}
    </>
  );
};

export default MyFlashCards;
