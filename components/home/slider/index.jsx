import React from 'react'
import SliderSwiper from './sliderSwiper'
import style from './style.module.css'

const Slider = () => {
  return (
    <div id={style.sliderhome} className='w-full md:h-[34rem] h-[29rem] flex items-center justify-center flex-col bg-blue28'>
        <SliderSwiper />        
    </div>
  )
}

export default Slider