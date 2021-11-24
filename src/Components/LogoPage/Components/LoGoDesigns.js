import { All_DATA } from "./Alldata";
const LoGoDesigns = () => {
  return (
    <div className="Designs_Container">
      <div className="designs_header">
        <div className="actual_data">
          <h2>Cool Logo Design Ideas & Inspiration By Industries</h2>
          <p>
            Get a perfect logo for your brand by exploring any of the categories
            given below. No matter what type of business you are running, Make
            the perfect logo for your business using a
            <span>Small SEO tool logo maker.</span> On our online platform, you
            will get a vast collection of premium logo design ideas free of
            cost.
          </p>
        </div>
      </div>
      <div className="Logo_Designs_container">
        {All_DATA.map((items) => {
          const { img, name, background, id } = items;
          return (
            <div className="actual_designs" key={id}>
              <div className="template">
                <div className="design_img">
                  <img src={img} alt="Img not displaying" />
                </div>
                <div className="design_name">
                  <h5>{name}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LoGoDesigns;
