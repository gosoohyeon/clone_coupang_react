import Product from './Product';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Category() {
    return (
      <article className="mCate">
        <div className="mCate__header">
          <h1>여성패션</h1>
          <div className="mCate__hotKeyword">
            <h2>HOT키워드</h2>
            <span className="mCate__hotKeywordItem">목도리</span>
          </div>
        </div>
        <div className="mCate__promotion">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
        </div>
        <div className="mCate__list">
          <Product />
        </div>
      </article>
    );
  }
  
  export default Category;
  