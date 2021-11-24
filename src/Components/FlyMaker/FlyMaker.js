import { BiChevronRight } from "react-icons/bi";
import logo_maker from "../../Assets/Images/FlyMaker/image.webp";
const FlyMaker = () => {
  return (
    <>
      <div className="FlyMaker_container">
        <div className="FlyMaker_heading">
          <h1>Flyer Maker</h1>
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
              <h2>Design Flyers That Produce Fruitful Outcomes</h2>
              <p>
                Flyers are considered an important marketing tool for businesses
                and organizations. Our flyer making service is here to cover the
                needs of generating flyers for small businesses who are looking
                forward to promoting upcoming events. You can create flyers for
                yourself by following the hassle-free design process on Design
                Studio. Now is the time to switch towards a quick solution
                instead of relying on freelance designers. Get started now and
                generate eye-catching flyers yourself in minutes.
              </p>
            </div>
            <div className="Fly_maker_buttons">
              <a>Create my Flyer</a>
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

export default FlyMaker;
