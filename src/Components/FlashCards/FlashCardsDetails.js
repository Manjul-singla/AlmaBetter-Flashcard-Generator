import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { TfiBackRight } from "react-icons/tfi";
import { BsCloudDownload } from "react-icons/bs";
import { BsPrinter } from "react-icons/bs";
import ShareModel from "./ShareModel";
import TermListItem from "./TermListItem";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Details_IMG from "./Images/Details_IMG.gif";

const FlashCardsDetails = () => {
  const { id } = useParams();
  const { cards } = useSelector((state) => state.flashcardReducers);
  const carddata = cards.find((cards) => cards.id === id);

  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  const setCard = (newIndex) => {
    const term = carddata.term[newIndex];
    setTermDis(term.Enter_Definition);
    setTermImg(term.term_uploadimage ? term.term_uploadimage : Details_IMG);
  };

  const nextCard = () => {
    const isLastCard = active === carddata.term.length - 1;
    const newIndex = isLastCard ? 0 : active + 1;
    setActive(newIndex);
    setCard(newIndex);
  };

  const prevCard = () => {
    const isFirstCard = active === 0;
    const newIndex = isFirstCard ? carddata.term.length - 1 : active - 1;
    setActive(newIndex);
    setCard(newIndex);
  };

  const displayTermDetails = (item, index) => {
    setTermImg(item.term_uploadimage ? item.term_uploadimage : Details_IMG);
    setTermDis(item.Enter_Definition);
    handleClick(index);
  };

  useEffect(() => {
    setTermDis(carddata.term[0].Enter_Definition);
    setTermImg(
      carddata.term[0].term_uploadimage
        ? carddata.term[0].term_uploadimage
        : Details_IMG
    );
  }, [carddata]);

  const handleClick = (index) => {
    setActive(index);
  };

  const onClose = () => {
    setVisible(false);
  };

  const [TermImg, setTermImg] = useState(Details_IMG);
  const [TermDis, setTermDis] = useState("");

  return (
    <>
      <div className="pt-3 dark:text-white">
        <div className="flex items-center">
          <IoMdArrowRoundBack
            onClick={() => navigate(-1)}
            className="text-2xl m-1 cursor-pointer hover:text-red-400"
          />
          <div className="font-bold text-xl px-3 dark:text-gray-300">
            {carddata.Create_Group}
          </div>
          <div className=" my-2 pr-4">{carddata.description}</div>
        </div>
        <div className="flex flex-col lg:flex-row mt-4 lg:items-start">
          {/* Term List */}
          <div className="bg-white dark:bg-gray-800 lg:mr-5 drop-shadow-md rounded-lg py-1 lg:h-[340px] my-4 px-3">
            <h1 className="font-bold m-2 dark:text-red-400">Flashcards</h1>
            <hr />
            {carddata.term.map((item, index) => (
              <TermListItem
                key={index}
                item={item}
                index={index}
                active={active}
                handleClick={handleClick}
              />
            ))}
          </div>

          {/* Term Display */}
          <div className="" id="forPrint">
            <div className="flex flex-wrap py-11 px-5 p-3 drop-shadow-md dark:bg-gray-800 bg-white rounded-lg my-4">
              <div className="pr-2 h-[286px] flex justify-center items-center w-[240px] sm:w-[320px] md:w-[320px] lg:w-[320px] xl:w-[320px] overflow-hidden">
                <img
                  src={TermImg}
                  alt=""
                  className="m-auto rounded-lg max-h-[286px] transition duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <div className="pl-2 w-[240px] sm:w-[320px] md:w-[320px] lg:w-[320px] xl:w-[320px] ">
                {TermDis}
              </div>
            </div>

            <div className="flex justify-center my-2">
              <p className="mx-auto h-3 w-60 bg-black opacity-5 rounded-[100%] shadow-xl"></p>
            </div>

            {/* Next and Previous buttons */}
            <div className="flex justify-center items-center">
              <MdNavigateBefore
                className="text-5xl cursor-pointer dark:text-white hover:text-red-400"
                onClick={prevCard}
              />
              <span className="ml-10">{active + 1}/</span>
              <span className="mr-10">{carddata.term.length}</span>
              <MdNavigateNext
                className="text-5xl cursor-pointer dark:text-white hover:text-red-400"
                onClick={nextCard}
              />
            </div>
          </div>

          {/* Share, Download, Print buttons */}
          <div className="flex lg:flex-col lg:space-y-5 my-4 rounded-lg md:justify-center">
            <div
              onClick={() => setVisible(true)}
              className="bg-white dark:bg-gray-800 flex cursor-pointer drop-shadow-md hover:scale-105 rounded-lg ml-5 p-2 h-10"
            >
              <TfiBackRight className="text-2xl mx-2" />
              Share
            </div>
            <div className="bg-white dark:bg-gray-800 flex cursor-pointer drop-shadow-md hover:scale-105 rounded-lg ml-5 p-2 h-10">
              <BsCloudDownload className="text-2xl mx-2" />
              Download
            </div>
            <div
              onClick={() => {
                window.print();
              }}
              className="bg-white dark:bg-gray-800 flex cursor-pointer drop-shadow-md hover:scale-105 rounded-lg ml-5 p-2 h-10"
            >
              <BsPrinter className="text-2xl mx-2" />
              Print
            </div>
          </div>
        </div>
      </div>
      <ShareModel onClose={onClose} visible={visible} />
    </>
  );
};

export default FlashCardsDetails;
