import React from "react";
import { IoTrophyOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaStar } from "react-icons/fa"; // Importing star icon
import "./websiteCardDetails.scss";

function WebsiteCardDetails({
  choice,
  title,
  heading,
  mainTitle,
  mainHighligth,
  rating,
  status,
  index,
}) {
  // Array to store star icons
  const stars = [];
  for (let i = 0; i < 5; i++) {
    // Fill stars based on rating
    if (i < Math.floor(rating)) {
      stars.push(<FaStar key={i} fill="#FFD700" />);
    } else if (i === Math.floor(rating) && rating % 1 !== 0) {
      // Fill partial star
      stars.push(
        <FaStar
          key={i}
          fill="#FFD700"
          style={{
            clipPath: `polygon(0 0, ${(rating % 1) * 100}% 0, ${
              (rating % 1) * 100
            }% 100%, 0 100%)`,
          }}
        />
      );
    } else {
      // Empty star
      stars.push(<FaStar key={i} fill="gray" />);
    }
  }

  return (
    <>
      <div className="builderCard">
        {choice && (
          <div className="best-choice">
            <IoTrophyOutline />
            <p>{choice}</p>
          </div>
        )}
        <div className="cardDetails">
          <div>
            <div className="numbers">
              <h4>{index + 1}</h4>
            </div>
            <div className="img-container">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvjFEOlLdF-tpWLJfDmJ9N_L4TArvySCh17Mk6FcnKkQ&s"
                alt=""
              />
            </div>
            <p className="title">{title}</p>
          </div>
          <div className="website-details">
            <div className="mainTitle">
              <strong>{heading}</strong>
              <span>{mainTitle}</span>
            </div>
            <div className="mainHighlight">
              <h3>Main highlights</h3>
              <div>
                <p>{mainHighligth}</p>
              </div>
            </div>
            <div className="showMore">
              <button>Show more</button>
              <IoIosArrowDown className="downArrow" />
            </div>
          </div>
          <div className="rating">
            <div>
              <h3>{rating}</h3>
              <div>
                <h4>{status}</h4>
                <div className="stars" style={{ width: "100px" }}>
                  {stars}
                </div>
              </div>
            </div>
            <div className="view">
              <button>View</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebsiteCardDetails;
