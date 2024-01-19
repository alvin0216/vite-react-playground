// Import Swiper React components
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Button, Grid } from '@mui/material';
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';

const Demo1: React.FC = () => {
  const swipperRef = useRef<SwiperClass | null>(null);
  const list = [
    [1, 2, 3, 4],
    [4, 5, 6, 7],
    [8, 9],
  ];

  return (
    <Swiper
      navigation
      slidesPerView={1}
      modules={[Navigation]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => {
        swipperRef.current = swiper;
      }}>
      {list.map((items, iIndex) => (
        <SwiperSlide key={iIndex}>
          <Grid container spacing={3} alignItems='stretch'>
            {items.map((item, itemIndecx) => (
              <Grid key={itemIndecx} item xs={3}>
                <div className='bg-purple-100 w-full'>
                  <Button
                    variant='contained'
                    onFocus={() => {
                      if (swipperRef.current?.activeIndex !== iIndex) {
                        swipperRef.current?.slideTo(iIndex);
                      }
                    }}>
                    {item}
                  </Button>
                </div>
              </Grid>
            ))}
          </Grid>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Demo1;
