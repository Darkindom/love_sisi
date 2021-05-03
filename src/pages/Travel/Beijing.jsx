import React from 'react'
import style from './style.module.scss'
import Beijing from '../../images/Beijing.jpg'
import Tiantan from '../../images/Beijing_Tiantan.jpg'

const Page = () => (
  <div className={style.wrapper}>
    <div className={style.title}>到北京</div>
    <img className={style.image} src={Tiantan} />
    <img className={style.image} src={Beijing} />
  </div>
)
export default Page
