import React from 'react'
import style from './SecondPage.module.scss'
import WordsCloud from '../images/sisi_words.png'

const TogetherDays = () => (
  <div className={style.wrapper}>
    <img className={style.wordsCloud} src={WordsCloud} />
    <div className={style.name}>最爱的宝贝</div>
    <div className={style.title}>生日快乐</div>
  </div>
)
export default TogetherDays
