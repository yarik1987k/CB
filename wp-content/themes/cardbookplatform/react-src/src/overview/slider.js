import React from "react";
import Slider from 'react-slick';
import './scss/overviewSlider.scss';



const SliderOverview = () =>{

    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
          <button
            className={className}
            onClick={onClick}
          >
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.26734 0.697754L0.161428 2.86073L7.1124 10.0001L0.161428 17.1394L2.26734 19.3024L11.3242 10.0001L2.26734 0.697754Z" fill="white"/>
            </svg>
         </button>
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
          <button
            className={className}
            onClick={onClick}
          >
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.73266 0.697754L11.8386 2.86073L4.8876 10.0001L11.8386 17.1394L9.73266 19.3024L0.675781 10.0001L9.73266 0.697754Z" fill="white"/>
            </svg>
        </button>
        );
      }

    const settings = { 
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

    return(
        <div className="overview-slider">
             
            <ul>
                <Slider {...settings}>
                <li>
                    <div className="slider-content">
                        <div className="inner">
                            <h3>The most important 3 steps for a CardBook</h3>
                        </div>
                    </div> 
                    <figure>
                        <img src="https://cardplat.local/wp-content/uploads/2023/02/Rectangle-6358.png"/>
                    </figure>
                </li>
                <li>
                    <div className="slider-content">
                        <div className="inner">
                            <h3>Access levels on the platform</h3>
                            <p>Learn how to correctly set the access level to your contacts by clicking on this banner</p>
                        </div>
                    </div>
                    <figure>
                        <img src="https://cardplat.local/wp-content/uploads/2023/02/Group-237683.png"/>
                    </figure>
                </li>
                <li>
                    <div className="slider-content">
                        <div className="inner">
                            <h3>Upload your first business card here</h3>
                        </div>
                    </div>
                    <figure>
                        <img src="https://cardplat.local/wp-content/uploads/2023/02/Group-237684.png"/>
                    </figure>
                </li>
                </Slider>
            </ul>
        </div>
    );
}

export default SliderOverview;