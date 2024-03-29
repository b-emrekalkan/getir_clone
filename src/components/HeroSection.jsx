import React, { useState } from 'react'
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";


const HeroSection = () => {
  const [selected, setSelected] = useState('TR');
  const phones = {
    US: '+1',
    DE: '+49',
    TR: '+90',
    FR: '+33',
    IT: '+39',
    IN: '+91'
  }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    arrows: false,
  };

  return (
    <div className='h-auto relative sm:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10 '>
      <Slider className='h-full hidden sm:block' {...settings}>
        <div>
          <div className="h-[500px] bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: 'url(https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg)' }}>
          </div>
        </div>
        <div>
          <div className="h-[500px] bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: 'url(https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg)' }}>
          </div>
        </div>
        <div>
          <div className="h-[500px] bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: 'url(https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg)' }}>
          </div>
        </div>
        <div>
          <div className="h-[500px] bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: 'url(https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg)' }}>
          </div>
        </div>
      </Slider>

      <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
        <div>
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="" />
          <h3 className='text-4xl mt-8 font-semibold text-white'>Dakikalar içinde <br /> kapınızda</h3>
        </div>
        <div className="w-[400px] rounded-lg bg-gray-50 p-6">
          <h4 className='text-primary-brand-color text-center font-semibold mb-4'>Giriş yap veya kayıt ol</h4>
          <div className='grid gap-y-3'>
            <div className='flex gap-x-2'>
              <ReactFlagsSelect
                className='flag-select'
                selected={selected}
                onSelect={code => setSelected(code)}
                countries={Object.keys(phones)}
                customLabels={phones}
              />
              <label className='flex-1 relative group block cursor-pointer'>
                <input required className='h-14 px-4 border-2 border-gray-200 rounded cursor-pointer w-full transition-colors group-hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer text-sm pt-2' />
                <span className='absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs' >Telefon Numarası</span>
              </label>
            </div>
            <button className='bg-brand-yellow text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold '>
              Telefon numarası ile devam et
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection