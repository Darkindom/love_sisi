import React from 'react'
import style from './Path.module.scss'
import PaperPlane from '../images/paper_plane.png'

const Page = () => (
  <div className={style.wrapper}>
    <div className={style.titleWrapper}>
      <div className={style.title}>未来的路很长</div>
      <div className={style.title}>我想和你一起慢慢走下去</div>
    </div>

    <div className={style.text}>相遇</div>
    <div className={style.text}>相知</div>
    <div className={style.text}>相惜</div>
    <div className={style.text}>相恋</div>
    <div className={style.text}>相爱</div>
    <div className={style.text}>相助</div>
    <div className={style.text}>相许</div>
    <div className={style.text}>相守一生</div>

    <img className={style.paperPlane} src={PaperPlane} />

    {/* <div className={style.title}>想和你</div>
    <div className={style.title}>
      相遇、相知、相恋、相爱、相助、相惜、相许、相守一生。
    </div> */}
  </div>
)
export default Page
