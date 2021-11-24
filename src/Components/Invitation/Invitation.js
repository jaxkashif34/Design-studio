import { BiChevronRight } from "react-icons/bi";
import logo_maker from "../../Assets/Images/invitation/image.webp";
import { Link } from "react-router-dom";
const Team = () => {
  return (
    <>
      <div className="Logo_Maker_container">
        <div className="logo_Maker_heading">
          <h1>Invitation Maker</h1>
        </div>
        <div className="logo_maker_content">
          <div className="content">
            <div className="text">
              <h2>Make A Persuasive Invitation That Stands Out</h2>
              <p>
                The invitation designing process has become quite a swift job
                after the inception of our Invitation Maker. Now, you won’t have
                to get yourself indulged in any heavy lifting; the advanced
                editing features of this online invitation maker will smooth the
                process of creating overwhelming invitations. There aren't any
                confines for using the tool. Now, there’s no need to spend money
                on creating invitations. The tool comes free of any charges, and
                you will be able to create a personalized invitation with our
                tool on the go.
              </p>
            </div>
            <Link to="/logopage" className="Link">
            <div className="logo_maker_buttons">
              <a>Build Invitation</a>
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

export default Team;
