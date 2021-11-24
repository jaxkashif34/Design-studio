import { RiLayoutMasonryFill } from "react-icons/ri";
import { GiClockwork } from "react-icons/gi";
import { RiComputerFill } from "react-icons/ri";

const WeOffers = () => {
  return (
    <div className="WeOffers_Container">
      <div className="Weoffers_conten">
        <div className="offers offer1">
          <div className="offer_icon">
            <RiLayoutMasonryFill className="icons" />
          </div>
          <div className="offer_Text">
            <h3>Free and Instant</h3>
            <p>Design anything in a few minutes without paying a penny.</p>
          </div>
        </div>
        <div className="offers offer2">
          <div className="offer_icon">
            <GiClockwork className="icons icon2" />
          </div>
          <div className="offer_Text">
            <h3>Variety of Templates</h3>
            <p>
              A wide range of templates comes under different categories with
              all editors.
            </p>
          </div>
        </div>
        <div className="offers offer3">
          <div className="offer_icon">
            <RiComputerFill className="icons icon3" />
          </div>
          <div className="offer_Text">
            <h3>No Installation Required</h3>
            <p>
              The web-based service can be accessed through all devices without
              any software installation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeOffers;
