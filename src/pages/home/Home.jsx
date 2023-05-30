import React from 'react';
import Banner from './banner/Banner';
import SwiperCategory from '../swiper/SwiperCategory';
import PopularMenu from '../popularmenu/PopularMenu';
import Featured from './featured/Featured';



const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SwiperCategory></SwiperCategory>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
    </div>
  );
};

export default Home;