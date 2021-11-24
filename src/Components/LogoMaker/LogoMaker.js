import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo_maker from "../../Assets/Images/logo-maker/image.webp";
const LogoMaker = () => {
  return (
    <>
      <div className="Logo_Maker_container">
        <div className="logo_Maker_heading">
          <h1>Logo Maker</h1>
        </div>
        <div className="logo_maker_content">
          <div className="content">
            <div className="text">
              <h2>Design A Logo For Your Brand</h2>
              <p>
                A classic range of professionally designed logo templates allows
                you to select and customize an emblem for your company as you
                desire. Match the theme of logo designs given in multiple
                categories with your brand to make a perfect selection. Alter
                the chosen design with the help of an advanced toolkit that’s
                super-easy to use. Even the professionals might not be able to
                present you with a logo that you can create yourself without
                acquiring any skills.
              </p>
            </div>
            <Link to="/logopage" className="Link">
              <div className="logo_maker_buttons">
                <a>Make your Logo</a>
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

export default LogoMaker;
