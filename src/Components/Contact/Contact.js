import contactImg from "../../Assets/Images/Contact/image.svg";

const Contact = () => {
  return (
    <div className="Contact_Container">
      <div className="contact_contet">
        <div className="contact_Seo contact_Same">
          <div className="contact_Logo">
            <img src={contactImg} alt="" />
          </div>
          <p>
            Small SEO Tool Design studio provide you the world’s best creative
            apps & services. It’s not just a game of design, but it’s more than
            you think.
          </p>
          <p>A product of SmallSEOTools.com, Made with ❤️</p>
        </div>
        <div className="contects_Dicover contact_Same">
          <div className="contact_heading">
            <h6>Discover</h6>
          </div>
          <div className="contact_links">
            <a>Resume Builder</a>
            <a>Logo Maker</a>
            <a>Flyer Maker</a>
            <a>Poster Maker</a>
            <a>Invitation Maker</a>
            <a>Business Card Maker</a>
            <a>Meme Generator</a>
          </div>
        </div>
        <div className="contects_Company contact_Same">
          <div className="contact_heading">
            <h6>Company</h6>
          </div>
          <div className="contact_links">
            <a>About Us</a>
            <a>Contact Us</a>
            <a>Blog</a>
            <a>Terms and Conditions</a>
          </div>
        </div>
        <div className="contects_contact contact_Same">
          <div className="contact_heading">
            <h6>Contact</h6>
          </div>
          <div className="contact_links">
            <p>Support Email</p>
            <a>support@smallseotools.com</a>
            <h5>Address</h5>
            <p>438, Streatham High Road London, UK. SW16 3PX</p>
          </div>
        </div>
      </div>
      <div className="Copyright">
        <p>
          Copyright © by
          <span> Design Studio</span> All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Contact;
