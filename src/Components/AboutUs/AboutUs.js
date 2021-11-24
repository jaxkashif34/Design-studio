import { IoMdQuote } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";

const AboutUs = () => {
  return (
    <div className="AboutUs_Container">
      <div className="AboutUs_content">
        <div className="AboutUs_Empty"></div>
        <div className="text_Area">
          <h2>What Do People Say About Design Studio?</h2>
          <p>
            Our utmost priority is to satisfy the visitors with services that
            don’t demand the users to acquire designing skills. The brilliant
            tools available in the Design Studio have made people fond of it.
            Let’s look into what people have to say about the Design Studio.
          </p>
        </div>
      </div>
      <div className="main_comments">
        <div className="Comment">
          <div className="Comment_profile">
            <div className="comment_circle">
              <div className="profile_picture">
                <BsPersonCircle className="profile_icon" />
              </div>
              <h5>Suarez Mario</h5>
            </div>
            <IoMdQuote className="Quote_icon" />
          </div>
          <div className="comment_text">
            <p>
              It was a wonderful experience working on Design Studio. The
              interface of this platform is brilliant and easy to use.
            </p>
          </div>
        </div>
        <div className="Comment">
          <div className="Comment_profile">
            <div className="comment_circle">
              <div className="profile_picture">
                <BsPersonCircle className="profile_icon" />
              </div>
              <h5>Suarez Mario</h5>
            </div>
            <IoMdQuote className="Quote_icon" />
          </div>
          <div className="comment_text">
            <p>
              Great source for designing anything. Thanks a lot to the
              developers.
            </p>
          </div>
        </div>
        <div className="Comment">
          <div className="Comment_profile">
            <div className="comment_circle">
              <div className="profile_picture">
                <BsPersonCircle className="profile_icon" />
              </div>
              <h5>Suarez Mario</h5>
            </div>
            <IoMdQuote className="Quote_icon" />
          </div>
          <div className="comment_text">
            <p>
              All of the services on this platform have super-fast
              functionality.
            </p>
          </div>
        </div>
        <div className="Comment">
          <div className="Comment_profile">
            <div className="comment_circle">
              <div className="profile_picture">
                <BsPersonCircle className="profile_icon" />
              </div>
              <h5>Suarez Mario</h5>
            </div>
            <IoMdQuote className="Quote_icon" />
          </div>
          <div className="comment_text">
            <p>
              The wide range of templates provided on each editor of this
              platform is all professionally designed. The best thing is that I
              have a free hand on customization, and I was able to alter the
              design as per my requirements.
            </p>
          </div>
        </div>
        <div className="Comment">
          <div className="Comment_profile">
            <div className="comment_circle">
              <div className="profile_picture">
                <BsPersonCircle className="profile_icon" />
              </div>
              <h5>Suarez Mario</h5>
            </div>
            <IoMdQuote className="Quote_icon" />
          </div>
          <div className="comment_text">
            <p>
              I was looking for online editors that can help me design flyers,
              logos, etc. I tried multiple options available over the web, but
              none of them were up to the mark. As I came across this design
              studio, all my worries vanished.
            </p>
          </div>
        </div>
        <div className="Comment">
          <div className="Comment_profile">
            <div className="comment_circle">
              <div className="profile_picture">
                <BsPersonCircle className="profile_icon" />
              </div>
              <h5>Suarez Mario</h5>
            </div>
            <IoMdQuote className="Quote_icon" />
          </div>
          <div className="comment_text">
            <p>
              I am longer dependent on freelancers, thanks to this Design
              Studio. It’s a great platform for designing anything we want.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
