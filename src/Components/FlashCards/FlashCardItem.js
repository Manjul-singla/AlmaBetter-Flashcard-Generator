import React from "react";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import card_logo from "./Images/LOGO.png";
import { deleteGroup } from "../../Redux/Actions/Index";

const FlashCardItem = ({ card, navigate }) => {
  const dispatch = useDispatch();

  return (
    <div className="m-2 flex dark:text-gray-300 hover:scale-105 transform duration-300 overflow-hidden justify-center pt-12 drop-shadow-md">
      <img
        className="w-16 h-16 border-[1px] border-white absolute top-4 rounded-full shadow-lg"
        src={card.uploadimage === null ? card_logo : card.uploadimage}
        alt="Image_logo"
      />

      <div className="bg-white border dark:bg-gray-700 px-4 w-[250px] xl:w-[300px] sm:w-[300px] lg:w-[300px] md:w-[300px] h-64 pt-11 pb-2 rounded-lg dark:border-gray-500">
        <MdDelete
          onClick={() => dispatch(deleteGroup(card.id))}
          className="text-3xl absolute top-14 right-2 text-red-500 hover:text-red-700 cursor-pointer"
        />
        <div className="flex flex-col items-center">
          <h5 className="mb-2 text-xl font-medium">{card.Create_Group}</h5>
          <span className="my-2 h-12 overflow-hidden text-center">
            {card.description}
          </span>
          <span className="font-bold my-2">
            {Object.keys(card.term).length} Cards
          </span>
          <button
            onClick={() => navigate(`/flashcardsdetails/${card.id}`)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            View Cards
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashCardItem;
