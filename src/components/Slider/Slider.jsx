import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './styles.css';

import styles from './Slider.module.scss'
import Illustration1 from './../../assets/Illustration1.png'
import Illustration2 from './../../assets/Illustration2.png'
import Illustration3 from './../../assets/Illustration3.png'





export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        initialSlide={1}
      >
        <SwiperSlide>
          <div className={styles.Wrapper}>
            <div className={styles.Image}>
              <img className={styles.ImgSize} src={Illustration1} alt="Image 1"/>
            </div>
            <hr  className={styles.Hr}/>
            <p>Концентрация воздушного потока</p>
          </div> 
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.Wrapper}>
            <div className={styles.Image}>
              <img className={styles.ImgSize} src={Illustration2} alt="Image 1"/>
            </div>
            <hr  className={styles.Hr}/>
            <p>Аэродинамические щиты</p>
          </div> 
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.Wrapper}>
            <div className={styles.Image}>
              <img className={styles.ImgSize} src={Illustration3} alt="Image 1"/>
            </div>
            <hr  className={styles.Hr}/>
            <p>Независимые модули на статичной оси</p>
          </div> 
        </SwiperSlide>
      </Swiper>
    </>
  );
}