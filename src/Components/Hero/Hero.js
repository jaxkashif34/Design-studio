import heroImg from "../../Assets/Images/Hero/hero.webp";
const Hero = () => {
  return (
    <>
      <section className="d-flex flex-column align-items-center heroId">
        <div className="container">
          <div className="row gy-4">
            <div
              className="
              hero_content
              col-lg-12
              order-2 order-lg-1
              d-flex
              flex-column
              justify-content-center
            "
            >
              <div className="Empty"></div>
              <h1 className="col-lg-7">
                Create Spectacular Designs Of Anything You Want
              </h1>
              <h5 className="col-lg-7">
                Get started with Design studio’s most creative apps, to create
                what you imagine or create meaningful designs for your brand to
                overshadow competitors. Use your creativity and get stunning
                designs ready without any professional assistance.
              </h5>
            </div>
          </div>
        </div>
        <div className="heroImg">
          <img src={heroImg} alt="hero Img" />
        </div>
        <div className="hero_last_data">
          <h3>Craft Meaningful Designs With The Online Editors</h3>
          <p>
            The Design Studio is offering endless services to help users make
            valuable promotional assets. Access the editors given below to take
            the game of designing into your hands.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
