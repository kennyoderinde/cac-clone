import { FaRegAddressCard, FaRegClock, FaRegCalendarAlt } from 'react-icons/fa';
import { GiClick } from "react-icons/gi";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

const flipCardData = [
  { id: 1, text: 'Revised Service Timeline', subText: 'Timeline for our service', backIcon: FaRegAddressCard, backText: 'Check our Turnaround Time', path: '/card1' },
  { id: 2, text: 'How to use CPG', subText: 'Clicked to View', backIcon: FaRegClock, backText: 'Instructional Videos', path: '/card2' },
  { id: 3, text: 'Summaries of Fees', subText: 'Fees for our services', backIcon: FaRegCalendarAlt, backText: 'Fees for our services', path: '/card3' },
];

const FlipCard = ({ text, subText, backIcon, backText, path }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  const BackIcon = backIcon; // Dynamically set the backIcon component

  return (
    <>
    <div
      className={`flip-card ${isFlipped ? 'flipped' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flip-card-inner sm:-mt-40 -mt-8 sm:w-full sm:h-full  ">
        <div className="flip-card-front bg-stone-100 flex flex-col items-center justify-center text-white">
          <div className= ' w-16 h-16 flex items-center justify-center sm:w-20 sm:h-20 rounded-full bg-zinc-700 sm:flex sm:items-center sm:justify-center sm:-mt-0'>
            <BackIcon className="back-icon sm:w-7 sm:h-7" />
          </div>
          <span className=" text-3xl font-light px-6 sm:text-5xl sm:font-light text-black text-center flex items-center justify-center sm:grid sm:place-items-center  sm:justify-center w-60" style={{ fontFamily: 'Roboto Slab', lineHeight: '56px' }}>{text}</span>
          <span className="text-base sm:mt-7 text-gray-600 font-medium ">{subText}</span>
        </div>
        <div className={`flip-card-back ${isFlipped ? 'yellow-500' : ''} sm:flex sm:items-center sm:justify-center `}  style={{ fontFamily: 'Roboto Slab', lineHeight: '56px' }}>
          <span className='sm:flex sm:items-center sm:justify-center text-white text-xl sm:text-3xl sm:font-light' style={{ fontFamily: 'Roboto Slab' }}>{isFlipped ? backText : text}</span>
          {isFlipped && (
            <Link to={path} className="flip-card-button mt-6 sm:mt-10" onClick={handleButtonClick}>
              <GiClick  className='w-10 h-10'/>
            </Link>
          )}
        </div>
      </div>
    </div>
    </>
  );
};
// check the Cards.css for the mobile responsiveness
const App = () => {
  return (
    <div className="app flex items-center justify-center h-screen ">
      <div className="grid grid-cols-3 gap-4 ">
        {flipCardData.map(({ id, text, subText, backIcon, backText, path }) => (
          <div key={id} className=" w-96 h-60 sm:w-96 sm:h-96">
            <FlipCard text={text} subText={subText } backIcon={backIcon} backText={backText} path={path} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
