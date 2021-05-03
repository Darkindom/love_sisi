import React from 'react'
import style from './style.module.scss'
import XinJiang from '../../images/Xinjiang.jpg'

const Page = () => (
  <div className={style.wrapper}>
    <div className={style.title}>到新疆</div>
    <img className={style.image} src={XinJiang} />
  </div>
)
export default Page
