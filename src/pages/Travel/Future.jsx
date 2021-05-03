import React from 'react'
import style from './style.module.scss'
import BiXin from '../../images/bixin.jpg'
import Beach from '../../images/beach.jpg'

const Page = () => (
  <div className={style.wrapper}>
    <div className={style.title}>未来的路，我想和你一直走下去</div>
    <img className={style.image} src={BiXin} />
    <img className={style.image} src={Beach} />
  </div>
)
export default Page
