import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

const AnimatedSwiper = () => {
  const slides = [
    {
      id: 1,
      title: 'Creative Designs',
      description: 'Unique layouts and modern visuals for your website.',
      img: 'https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww'
    },
    {
      id: 2,
      title: 'Responsive Layouts',
      description: 'Built for every screen size.',
      img: 'https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/Building-Types-Hero.webp'
    },
    {
      id: 3,
      title: 'Lightning Speed',
      description: 'Optimized and blazing fast.',
      img: 'https://www.gannestonconstruction.com/wp-content/uploads/2022/09/5-types-of-building-construction-ganneston-construction.jpg'
    },
    {
      id: 4,
      title: 'Lightning Speed',
      description: 'Optimized and blazing fast.',
      img: 'https://media.istockphoto.com/id/1176581571/photo/large-construction-site-including-several-cranes-with-clear-sky-and-the-sun.jpg?s=612x612&w=0&k=20&c=jOtmetjH-lOQ9oMnjsqLm33e0LOm2_SdhUb8X1btUGo='
    },
    {
      id: 5,
      title: 'Lightning Speed',
      description: 'Optimized and blazing fast.',
      img: 'https://cdn.ca.emap.com/wp-content/uploads/sites/9/2023/09/Track-Renewal-library-picture-16x9-1-scaled.jpg'
    },
    {
      id: 6,
      title: 'Lightning Speed',
      description: 'Optimized and blazing fast.',
      img: 'https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/01-Bridge-Construction-1.webp'
    },
    {
      id: 7,
      title: 'Lightning Speed',
      description: 'Optimized and blazing fast.',
      img: 'https://www.shutterstock.com/image-photo/aerial-view-building-site-while-600nw-1958694949.jpg'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-gray-100 to-slate-600 text-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl">
        <h2 className="text-black text-4xl font-bold text-center mb-10">Our Future Projects</h2>
        <Swiper
          modules={[Navigation, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={false}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true
          }}
          pagination={{ clickable: true }}
          navigation
          className="swiper-container"
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="bg-wblack backdrop-blur-md rounded-xl overflow-hidden shadow-lg max-w-md mx-4 transition-all duration-700"
            >
              <img src={slide.img} alt={slide.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-black text-2xl font-semibold mb-2">{slide.title}</h3>
                <p className="text-sm text-black">{slide.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default AnimatedSwiper
