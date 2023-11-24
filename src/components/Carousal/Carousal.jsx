import React from "react";
import {Virtual, Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import Card from "../Card/Card";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./Carousal.css";

import LeftIcon from "../../assects/Left Icon.png";
import Righticon from "../../assects/Right Icon.png";

function Carousal ({data}) {
    return (<div className='carousel-container'>
      <Swiper
    modules={[Virtual, Navigation, Pagination]}
    // onSwiper={setSwiperRef}
    slidesPerView={7}
    // centeredSlides={true}
    spaceBetween={30}
    // pagination={{
    //     type: 'fraction',
    // }}
    // navigation={true}
    navigation={{nextEl:".arrow-left", prevEl:".arrow-right" }}
    virtual
    >
      {data.map(cardData => <SwiperSlide key={cardData.id}> <Card 
            key={cardData.id}
            imgSrc={cardData.image}
            label={cardData.title}
            followersCount={cardData.follows}
            songs={cardData.songs.length}
            /></SwiperSlide>)}
    </Swiper>

    <div className='arrow-left arrow'><img src= {LeftIcon} alt="" /></div>
    <div className='arrow-right arrow'><img src= {Righticon} alt="" /></div>
 </div>)
}

export default Carousal;