import React from "react";
import "./related.scss";

function RelatedCard() {
  return (
    <>
      <div className="related-card">
        <div className="deal-img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvjFEOlLdF-tpWLJfDmJ9N_L4TArvySCh17Mk6FcnKkQ&s"
            alt=""
          />
        </div>
        <div className="limited">
          <p>20% off</p>
          <p>Limited time </p>
        </div>
        <div className="title">
          <p>Webbuilder 1</p>
        </div>
        <div className="desc">
          <p>Computer Modern clasic with wix support</p>
        </div>
        <div className="price">
          <p>$39.96</p>
          <p>$49.96</p>
          <p>(20% Off)</p>
        </div>
        <div className="deal-btn">
          <button>View Deal</button>
        </div>
      </div>
    </>
  );
}

export default RelatedCard;
