import { BiChevronRight } from "react-icons/bi";
import logo_maker from "../../Assets/Images/Resume/image.webp";
import { Link } from "react-router-dom";
const Portfolio = () => {
  return (
    <>
      <div className="Logo_Maker_container">
        <div className="logo_Maker_heading">
          <h1>Resume Builder</h1>
        </div>
        <div className="logo_maker_content">
          <div className="content">
            <div className="text">
              <h2>Make A Persuasive Resume That Stands Out</h2>
              <p>
                Our resume building service is here to rescue everyone from the
                nuisance of creating resume layouts manually. A resume should be
                capable of catching the attention of recruiters; if a resume has
                failed to please the hiring manager at first glance, it’s going
                to become part of the rejected resumes’ pile. Get your hands on
                a professional-looking resume template by Design Studio to get
                your dream job in any industry.
              </p>
            </div>
            <Link to="/logopage" className="Link">
              <div className="logo_maker_buttons">
                <a>Build Resume</a>
                <i>
                  <BiChevronRight />
                </i>
              </div>
            </Link>
          </div>
          <div className="logo_maker_img">
            <img src={logo_maker} alt="" />
            <div className="container_shape">
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
        </div>
      </div>
    </>
  );
};

export default Portfolio;
