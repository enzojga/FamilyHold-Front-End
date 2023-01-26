import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination'
import './styles.css';
import { useSwiper } from 'swiper/react';
import Welcome from './Welcome';
import WelcomeMenu from './WelcomeMenu';

export default function WelcomeSwiper() {

    const swiper = useSwiper();

    return (
        <Swiper
            modules={[ Pagination ]}
            slidesPerView={1}
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <Welcome swiper={swiper}/>
            </SwiperSlide>
            <SwiperSlide>
                <WelcomeMenu/>
            </SwiperSlide>
        </Swiper>
    )
}
