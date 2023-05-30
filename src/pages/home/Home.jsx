import React from 'react';
import Banner from './banner/Banner';
import SwiperCategory from '../swiper/SwiperCategory';
import PopularMenu from '../popularmenu/PopularMenu';



const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SwiperCategory></SwiperCategory>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Home;