import { BiChevronRight } from "react-icons/bi";
import logo_maker from "../../Assets/Images/Business/image.webp";

const Clients = () => {
  return (
    <>
      <div className="FlyMaker_container">
        <div className="FlyMaker_heading">
          <h1>Business Card Maker</h1>
        </div>
        <div className="FlyMaker_main_content">
          <div className="FlyMaker_img">
            <img src={logo_maker} alt="" />
            <div className="FlyMaker_container_shape">
              <div className="triangles">
                <div className="left_two">
                  <div className="triangle triangle1"></div>
                  <div className="triangle triangle2"></div>
                </div>
                <div className="right_two">
                  <div className="triangle triangle3"></div>
                  <div className="triangle triangle4"></div>
                </div>
              </div>
              <div className="semi-circle"></div>
            </div>
          </div>
          <div className="FlyMaker_content">
            <div className="text">
              <h2>
                Improve Your Brand Appearance With Professional Business Cards
              </h2>
              <p>
                While visiting a seminar or meeting clients and colleagues, it’s
                essential to have a marketing tool in your pocket that can
                represent your business, i.e., a business card. If anyone asks
                you about your company, the verbal information won’t be enough
                to make an impression. Therefore, you must design a
                mind-captivating business card that can reflect the
                professionalism of your business. You don’t need to be a
                designer for making a business card, as the business card maker
                on DesignStudio is here with a copious amount of ready-made
                templates.
              </p>
            </div>
            <div className="Fly_maker_buttons">
              <a>Business Card</a>
              <i>
                <BiChevronRight />
              </i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
