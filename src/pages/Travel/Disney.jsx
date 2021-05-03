import React from 'react'
import style from './style.module.scss'
import Disney from '../../images/Disney.jpg'
import Disney_heart from '../../images/Disney_heart.jpg'

const Page = () => (
  <div className={style.wrapper}>
    <div className={style.title}>到迪士尼</div>
    <img className={style.image} src={Disney} />
    <img className={style.image} src={Disney_heart} />
  </div>
)
export default Page
