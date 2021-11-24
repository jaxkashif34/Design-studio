import LogoHeaderImg from "../../../Assets/Images/LogoPage/image.webp";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <div className="Header_Container">
      <div className="upper_content">
        <div className="Header_text_content">
          <div className="Header_text">
            <h1>Logo Ideas: Explore Cool Logo Design</h1>
            <p>
              Galvanize the appearance of your brand and outshine your
              competitors with the assistance of our well-crafted logo ideas.
              Our cool logo ideas are flawless and provide you a chance to get a
              visual icon just like you dreamt of. The flexible logo templates
              can be adjusted on any medium. The copious amount of curated logo
              designs will allow you to make a logo for your business, spark
              your imagination, and give you the inspiration you require. You
              will get a vast collection of premium logo design ideas on this
              platform.
            </p>
          </div>
        </div>
        <div className="header_img">
          <div className="actual_img">
            <img src={LogoHeaderImg} alt="" />
          </div>
        </div>
      </div>
      <div className="searchBox">
        <div className="actual_box">
          <FiSearch className="LogoPage_Search" />
          <input type="text" placeholder="Search Categories"></input>
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
