import React from 'react'
import style from './style.module.scss'
import BiXin from '../../images/bixin.jpg'
import Beach from '../../images/beach.jpg'

const Page = () => (
  <div className={style.wrapper}>
    <div className={style.lovePageTitle}>
      <div className={style.title}>爱，不是一件浪漫的事</div>
      <div className={style.title}>爱你才是！</div>
    </div>
    <img className={style.image} src={BiXin} />
    <img className={style.image} src={Beach} />
  </div>
)
export default Page
