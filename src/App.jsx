import React, { useState } from 'react'
import './App.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'

import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'
import TogetherDays from './pages/TogetherDays'

import Path from './pages/Path'
import XiZang from './pages/Travel/XiZang'
import Disney from './pages/Travel/Disney'
import XinJiang from './pages/Travel/XinJiang'
import Beijing from './pages/Travel/Beijing'
import Love from './pages/Travel/Love'
// import Future from './pages/Travel/Future'
import LoveFooter from './images/love_footer.png'

import style from './style.module.scss'
import cn from 'classnames'

function App () {
  return (
    <div className='App'>
      <Swiper className={style.swipers} direction='vertical'>
        <SwiperSlide className={style.swiperItem}>
          <div className={style.swiperCont}>
            <FirstPage />
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.swiperItem}>
          <div className={cn(style.swiperCont, style.second)}>
            <SecondPage />
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.swiperItem}>
          <div className={style.swiperCont}>
            <TogetherDays />
          </div>
        </SwiperSlide>

        {/* Travel */}
        <SwiperSlide className={style.swiperItem}>
          <div className={style.swiperCont}>
            <XiZang />
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.swiperItem}>
          <div className={style.swiperCont}>
            <Disney />
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.swiperItem}>
          <div className={style.swiperCont}>
            <XinJiang />
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.swiperItem}>
          <div className={style.swiperCont}>
            <Beijing />
          </div>
        </SwiperSlide>

        <SwiperSlide className={style.swiperItem}>
          <div className={style.swiperCont}>
            <Love />
          </div>
        </SwiperSlide>

        <SwiperSlide className={style.swiperItem}>
          <div className={style.swiperCont}>
            <Path />
          </div>
        </SwiperSlide>
      </Swiper>

      <div className={style.footerImg}>
        <img src={LoveFooter} />
      </div>
    </div>
  )
}

export default App
