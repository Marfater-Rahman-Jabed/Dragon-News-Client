import React from 'react';
import img1 from '../../assets/images/banner/1.jpg';
import img2 from '../../assets/images/banner/2.jpg';
import img3 from '../../assets/images/banner/3.jpg';
import img4 from '../../assets/images/banner/4.jpg';
import img5 from '../../assets/images/banner/5.jpg';
import img6 from '../../assets/images/banner/6.jpg';
import BannerItems from './BannerItems';

const Banner = () => {
    const bannerData = [
        {
            image: img1,
            id: 1,
            prev: 6,
            next: 2,

        },
        {
            image: img2,
            id: 2,
            prev: 1,
            next: 3,

        },
        {
            image: img3,
            id: 3,
            prev: 2,
            next: 4,

        },
        {
            image: img4,
            id: 4,
            prev: 3,
            next: 5,

        },
        {
            image: img5,
            id: 5,
            prev: 4,
            next: 6,

        },
        {
            image: img6,
            id: 6,
            prev: 5,
            next: 1,

        }
    ]

    return (
        <div className="carousel w-full">

            {
                bannerData.map(slide => <BannerItems
                    key={slide.id}
                    slide={slide}
                ></BannerItems>)
            }

            {/* <BannerItems image={img1}></BannerItems>



            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} alt="" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> */}

        </div>
    );
};

export default Banner;