import React from 'react'
import BirthdayCake from '../images/birthday_cake.png'
import style from './FourthPage.module.scss'

const FourthPage = () => (
  <div className={style.wrapper}>
    <img className={style.birthdayCake} src={BirthdayCake} />
    <div className={style.title}>
      <div>这是和你一起过的</div>
      <div>第一个生日🎂</div>
    </div>
    <div className={style.title}>
      <div>以后你的每一个生日</div>
      <div>我都陪你过~！</div>
    </div>
  </div>
)
export default FourthPage
