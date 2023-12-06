import Hero1 from "../assets/Images/hero1.png";
import Cert from "../assets/Images/certi.png";

const Hero = () => {
  return (
    <div className="container-fluid col-xxl-8 px-4 py-5 hero-container">
      <div className="row flex-lg-row-reverse align-items-center g-5 ">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={Hero1}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6 py-5 hero-text">
          <h1 className="display-1 fw-bold text-body-emphasis lh-1 mb-3">
            <span>
              Fresh Foods <br /> For You
            </span>
          </h1>
          <div className="d-flex align-items-center my-5">
            <img src={Cert} alt="" className="me-4" />
            <p className="fw-bold">
              We give 100% organic & fresh foods for you.
              <br />
              Lets eat and live healthy...!
            </p>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Primary
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
