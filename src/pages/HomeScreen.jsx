import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import "./home.scss";
import { NavLink } from "react-router-dom";
import WebsiteCardDetails from "../components/WebsiteCardDetails";
import RelatedCard from "../components/RelatedCard";

const midNavLinks = [
  {
    path: "/tools",
    title: "Tools",
  },
  {
    path: "/aws-builder",
    title: "Aws Builder",
  },
  {
    path: "/start-build",
    title: "Start Build",
  },
  {
    path: "/build-supplies",
    title: "Build Supplies",
  },
  {
    path: "/tooling",
    title: "Tooling",
  },
  {
    path: "/blue-hosting",
    title: "Blue Hosting",
  },
];

const builderDetails = [
  {
    choice: "Best Choice",
    title: "Builder 1",
    heading: "WixPro 72-Inch Responsive Website Builder-",
    mainTitle:
      " Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    mainHighligth:
      "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",

    rating: 9.8,
    status: "Exceptional",
  },
  {
    choice: "Best Choice",
    title: "Builder",
    heading: "SiteCraft 68-Inch Ultimate Web Design Studio-",
    mainTitle:
      " Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
    mainHighligth:
      "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",

    rating: 9.5,
    status: "Excellent",
  },
  {
    title: "Builder 1",
    heading: "WixPro 72-Inch Responsive Website Builder-",
    mainTitle:
      " Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    mainHighligth:
      "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    rating: 9.1,
    status: "Very Good",
  },
  {
    choice: "Best Choice",
    title: "Builder 1",
    heading: "WixPro 72-Inch Responsive Website Builder-",
    mainTitle:
      " Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    mainHighligth:
      "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",

    rating: 4,
    status: "Good",
  },
];
function HomeScreen() {
  return (
    <>
      <div className="mainContainer">
        <div className="homeSection">
          <h1>Best Website builders in the US</h1>
          <div className="time-filter">
            <div className="time">
              <div>
                <div>
                  <CiCircleCheck className="timeIcon" />
                </div>
                <div>
                  <p>
                    Last Updated <span>- February 22, 2020</span>
                  </p>
                </div>
              </div>
              <div>
                <CiCircleInfo className="addIcon" />
                <p>Advertising Disclosure</p>
              </div>
            </div>
            <div className="top-relevant">
              <select>
                <option value="topRelevant"> Top-Relevant</option>
              </select>
            </div>
          </div>
          <div className="midNav">
            <div className="midNavLinks">
              {midNavLinks.map((item) => (
                <NavLink key={item.path} to={item.path} className={"midLink"}>
                  {item.title}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="hositing">
            <div>
              <span>Home</span>
              <span>{">"}</span>
            </div>
            <div>
              <span>Hosting for all</span>
              <span>{">"}</span>
            </div>
            <div>
              <span>Hosting</span>
              <span>{">"}</span>
            </div>
            <div>
              <span>Hosting6</span>
              <span>{">"}</span>
            </div>
            <div>
              <span>Hosting5</span>
            </div>
          </div>
          <div className="builder-details">
            {builderDetails.map((builder, index) => (
              <WebsiteCardDetails key={index} {...builder} index={index} />
            ))}
          </div>
          <div className="related-deals">
            <h1>Related deals you might like for</h1>
            <div className="all-deals">
              <RelatedCard />
              <RelatedCard />
              <RelatedCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
