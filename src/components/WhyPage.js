import React from "react";
import "../assets/css/WhyPage.css";
import gift from "../assets/images/gift.png";
import community from "../assets/images/community.png";
import impact from "../assets/images/impact.png";

const WhyPage = props => {
  return (
    <div id="why" className="why-page">
      <div className="why-content">
        <h2 className="why-title">why</h2>
        <div className="why-cards">
          <div className="why-card">
            <h2 className="card-title">altruism</h2>
            <img className="card-img" src={gift} alt="card" />
            <p className="card-description">
              Altruism is at the heart of this platform. We hope to inspire
              genuine giving!
            </p>
          </div>
          <div className="why-card">
            <h2 className="card-title">community</h2>
            <img className="card-img" src={community} alt="card" />
            <p className="card-description">
              Community is composed of the people on our platform, non-profit
              partners, and corporations that care. We hope to connect people to
              the issues they care about and the organizations who are solving
              those problems.
            </p>
          </div>
          <div className="why-card">
            <h2 className="card-title">impact</h2>
            <img className="card-img" src={impact} alt="card" />
            <p className="card-description">
              Impact and its benefits for the social issues you care about is
              one of our core values. We want to empower people to have a
              tangible impact on the world with each dollar given.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPage;
