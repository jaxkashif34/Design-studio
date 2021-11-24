import { BiChevronRight } from "react-icons/bi";
import logo_maker from "../../Assets/Images/Poster/image.webp";
const FAQ = () => {
  return (
    <>
      <div className="FlyMaker_container">
        <div className="FlyMaker_heading">
          <h1>Poster Maker</h1>
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
              <h2>Design Custom Poster That Stands Out</h2>
              <p>
                The poster designing process has become a piece of cake due to
                the inception of our poster maker. The copious amount of
                stunning poster templates offered on our poster maker are
                readily available for everyone in need of designing an
                awe-inspiring poster. The users won’t face any restriction, as
                our tool gives everyone a free hand to alter their chosen
                posters as per their events’ requirements. You don’t have to
                invest money in creating posters anymore, as our poster creator
                will help you do the job instantaneously without charging a
                penny.
              </p>
            </div>
            <div className="Fly_maker_buttons">
              <a>Build Poster</a>
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

export default FAQ;
