import { BiChevronRight } from "react-icons/bi";
import logo_maker from "../../Assets/Images/Meme/image.webp";
import { Link } from "react-router-dom";
const Meme = () => {
  return (
    <>
      <div className="Logo_Maker_container">
        <div className="logo_Maker_heading">
          <h1>Meme Generator</h1>
        </div>
        <div className="logo_maker_content">
          <div className="content">
            <div className="text">
              <h2>Create Hilarious Memes That Go Viral In No Time</h2>
              <p>
                A memorable picture or scene can be turned into a witty post by
                adding a caption that makes everyone relate to an idea or trend.
                You can uplift your social media page’s performance by creating
                memes on your own which catch your audience’s attention. The
                availability of the meme generator facility makes this task
                simple for everyone. You can show the world how good you are at
                making hilarious posts by captioning the amusing meme templates
                with attractive fonts.
              </p>
            </div>
            <Link to="/logopage" className="Link">
              <div className="logo_maker_buttons">
                <a>Generate Meme</a>
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

export default Meme;
