import React from 'react'
import style from './style.module.scss'
import XiZang from '../../images/XIzang.jpg'

const Page = () => (
  <div className={style.wrapper}>
    <div className={style.title}>从西藏</div>
    <img className={style.image} src={XiZang} />
  </div>
)
export default Page
