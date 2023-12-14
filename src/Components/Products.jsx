import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Veg1 from "../assets/Images/veg1.jpg";
import Veg2 from "../assets/Images/veg2.jpg";
import Veg3 from "../assets/Images/veg3.jpg";
import Veg4 from "../assets/Images/veg4.jpg";
import Veg5 from "../assets/Images/veg5.jpg";
import Veg6 from "../assets/Images/veg6.jpg";
import Veg7 from "../assets/Images/veg7.jpg";
import JProducts from "./JProducts";

const Products = () => {
  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider py-5">
      <h1 className="text-center display-4 mt-4 fw-bold text-light product-text">
        Fresh & healthy coconut oil
        <br /> To Your home.
      </h1>
      <div className="container mt-5">
        <Slider {...settings}>
          <div className="p-1">
            <JProducts
              Image={Veg1}
              Description="Celery potato scallion desert raisin horseradish spinach carrot"
            />
          </div>
          <div className="p-1">
            <JProducts
              Image={Veg2}
              Description="Celery potato scallion desert raisin horseradish spinach carrot"
            />
          </div>
          <div className="p-1">
            <JProducts
              Image={Veg3}
              Description="Celery potato scallion desert raisin horseradish spinach carrot"
            />
          </div>
          <div className="p-1">
            <JProducts
              Image={Veg4}
              Description="Celery potato scallion desert raisin horseradish spinach carrot"
            />
          </div>
          <div className="p-1">
            <JProducts
              Image={Veg5}
              Description="Celery potato scallion desert raisin horseradish spinach carrot"
            />
          </div>
          <div className="p-1">
            <JProducts
              Image={Veg6}
              Description="Celery potato scallion desert raisin horseradish spinach carrot"
            />
          </div>
          <div className="p-1">
            <JProducts
              Image={Veg7}
              Description="Celery potato scallion desert raisin horseradish spinach carrot"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Products;
