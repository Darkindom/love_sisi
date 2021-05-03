import React, { useState } from 'react'
import './App.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'

import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'
import TogetherDays from './pages/TogetherDays'
import XiZang from './pages/Travel/XiZang'
import Disney from './pages/Travel/Disney'
import XinJiang from './pages/Travel/XinJiang'
import Beijing from './pages/Travel/Beijing'
import Future from './pages/Travel/Future'

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
            <Future />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default App
