import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    rows: 4,
    slidesPerRow: 1,
    autoplaySpeed: 3000,
    autoplay: true,
  };
  return (
    <div className="bg-[#E88A8A] px-[30px] py-[60px] lg:-mt-52 z-10 max-w-xl w-full max-h-full">
      <h1 className="font-bold text-5xl mb-8">Our Clients</h1>
      <div className="grayscale">
        <Slider {...settings}>
          <img
            src="https://the5starz.com/wp-content/uploads/2021/12/maelys.jpg"
            alt=""
            className="w-[182px] h-[92px] object-fill pl-2 pb-2 object-center"
          />
          <img
            src="https://the5starz.com/wp-content/uploads/2021/12/Tennessee-Heritage-ranch.jpg"
            alt=""
            className="w-[182px] h-[92px] object-fill pl-2 pb-2 object-center"
          />
          <img
            src="https://the5starz.com/wp-content/uploads/2021/12/nanuka.jpg"
            alt=""
            className="w-[182px] h-[92px] object-fill pl-2 pb-2 object-center"
          />
          <img
            src="https://the5starz.com/wp-content/uploads/2021/12/23b2297349740ba1c5ca93d1ecee6805.jpg"
            alt=""
            className="w-[182px] h-[92px] object-fill pl-2 pb-2 object-center"
          />
          <img
            src="https://the5starz.com/wp-content/uploads/2021/12/download.png"
            alt=""
            className="w-[182px] h-[92px] object-fill pl-2 pb-2 object-center"
          />
          <img
            src="https://the5starz.com/wp-content/uploads/2021/12/1590255738994.jpg"
            alt=""
            className="w-[182px] h-[92px] object-fill pl-2 pb-2 object-center"
          />
          <img
            src="https://the5starz.com/wp-content/uploads/2021/12/noa-kirel.jpg"
            alt=""
            className="w-[182px] h-[92px] object-fill pl-2 pb-2 object-center"
          />
          <img
            src="https://the5starz.com/wp-content/uploads/2021/12/URB-Cosmetics.jpg"
            alt=""
            className="w-[182px] h-[92px] object-fill pl-2 pb-2 object-center"
          />
          <img
            src="https://the5starz.com/wp-content/uploads/2021/12/logo.jpg"
            alt=""
            className="w-[182px] h-[92px] object-fill pl-2 pb-2 object-center"
          />
          <img
            src="https://the5starz.com/wp-content/uploads/2021/12/clinique.jpg"
            alt=""
            className="w-[182px] h-[92px] object-fill pl-2 pb-2 object-center"
          />
          <img
            src="https://the5starz.com/wp-content/uploads/2021/12/roi-ben.jpg"
            alt=""
            className="w-[182px] h-[92px] object-fill pl-2 pb-2 object-center"
          />
          <img
            src="https://the5starz.com/wp-content/uploads/2021/12/13seeds_Logo_Master_CMYK_Small_4d96485f-d159-40d6-b6c7-13793710fa89.png"
            alt=""
            className="w-[182px] h-[92px] object-fill pl-2 pb-2 object-center"
          />
          <img
            src="https://the5starz.com/wp-content/uploads/2021/12/qqlbpv.png"
            alt=""
            className="w-[182px] h-[92px] object-fill pl-2 pb-2 object-center"
          />
          <img
            src="https://the5starz.com/wp-content/uploads/2021/12/download.jpg"
            alt=""
            className="w-[182px] h-[92px] pl-2 pb-2 object-center object-fill"
          />
          <img
            src="https://the5starz.com/wp-content/uploads/2021/12/dafni.jpg"
            alt=""
            className="w-[182px] h-[92px] object-fill pl-2 pb-2 object-center"
          />
          <img
            src="https://the5starz.com/wp-content/uploads/2021/12/seboCalm.jpg"
            alt=""
            className="w-[182px] h-[92px] object-fill pl-2 pb-2 object-center"
          />
        </Slider>
      </div>
    </div>
  );
};

export default ClientSlider;
