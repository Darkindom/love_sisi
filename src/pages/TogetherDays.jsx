import React from 'react'
import style from './TogetherPage.module.scss'
import cn from 'classnames'
import dayjs from 'dayjs'

// function component
const AnimatedCard = ({ animation, digit }) => {
  return (
    <div
      className={cn(style.flipCard, {
        [style[animation]]: !!animation
      })}
    >
      <span>{digit}</span>
    </div>
  )
}

// function component
const StaticCard = ({ position, digit }) => {
  return (
    <div className={style[position]}>
      <span>{digit}</span>
    </div>
  )
}

// function component
const FlipUnitContainer = ({ digit, shuffle, unit }) => {
  // assign digit values
  let currentDigit = digit
  let previousDigit = digit - 1

  // to prevent a negative value
  if (unit === 'days') {
    previousDigit = previousDigit
  } else if (unit !== 'hours') {
    previousDigit = previousDigit === -1 ? 59 : previousDigit
  } else {
    previousDigit = previousDigit === -1 ? 23 : previousDigit
  }

  // add zero
  if (currentDigit < 10) {
    currentDigit = `0${currentDigit}`
  }
  if (previousDigit < 10) {
    previousDigit = `0${previousDigit}`
  }

  // shuffle digits
  const digit1 = shuffle ? previousDigit : currentDigit
  const digit2 = !shuffle ? previousDigit : currentDigit

  // shuffle animations
  const animation1 = shuffle ? 'fold' : 'unfold'
  const animation2 = !shuffle ? 'fold' : 'unfold'

  return (
    <div className={style.flipUnitContainer}>
      <StaticCard position={'upperCard'} digit={currentDigit} />
      <StaticCard position={'lowerCard'} digit={previousDigit} />
      <AnimatedCard digit={digit1} animation={animation1} />
      <AnimatedCard digit={digit2} animation={animation2} />
    </div>
  )
}

// class component
class FlipClock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hours: 0,
      hoursShuffle: true,
      minutes: 0,
      minutesShuffle: true,
      seconds: 0,
      secondsShuffle: true,
      days: 0,
      daysShuffle: true
    }
  }

  componentDidMount () {
    this.timerID = setInterval(() => this.updateTime(), 50)
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  updateTime () {
    const { targetTime } = this.props
    // set time units
    const days = dayjs().diff(targetTime, 'd')
    const hours = dayjs().diff(targetTime, 'hour') % 24
    const minutes = dayjs().diff(targetTime, 'minute') % 60
    const seconds = dayjs().diff(targetTime, 'second') % 60

    // on day chanage, update days and shuffle state
    if (days !== this.state.days) {
      const daysShuffle = !this.state.daysShuffle
      this.setState({
        days,
        daysShuffle
      })
    }
    // on hour chanage, update hours and shuffle state
    if (hours !== this.state.hours) {
      const hoursShuffle = !this.state.hoursShuffle
      this.setState({
        hours,
        hoursShuffle
      })
    }
    // on minute chanage, update minutes and shuffle state
    if (minutes !== this.state.minutes) {
      const minutesShuffle = !this.state.minutesShuffle
      this.setState({
        minutes,
        minutesShuffle
      })
    }
    // on second chanage, update seconds and shuffle state
    if (seconds !== this.state.seconds) {
      const secondsShuffle = !this.state.secondsShuffle
      this.setState({
        seconds,
        secondsShuffle
      })
    }
  }

  render () {
    // state object destructuring
    const {
      hours,
      minutes,
      seconds,
      days,
      hoursShuffle,
      minutesShuffle,
      secondsShuffle,
      daysShuffle
    } = this.state

    return (
      <div className={style.flipClock}>
        <div className={style.flipItem}>
          <FlipUnitContainer unit={'days'} digit={days} shuffle={daysShuffle} />
          <span className={style.unit}>天</span>
        </div>
        <div className={style.flipItem}>
          <FlipUnitContainer
            unit={'hours'}
            digit={hours}
            shuffle={hoursShuffle}
          />
          <span className={style.unit}>时</span>
        </div>
        <div className={style.flipItem}>
          <FlipUnitContainer
            unit={'minutes'}
            digit={minutes}
            shuffle={minutesShuffle}
          />
          <span className={style.unit}>分</span>
        </div>
        <div className={style.flipItem}>
          <FlipUnitContainer
            unit={'seconds'}
            digit={seconds}
            shuffle={secondsShuffle}
          />
          <span className={style.unit}>秒</span>
        </div>
      </div>
    )
  }
}

const TogetherDays = () => (
  <div className={style.wrapper}>
    <div className={style.title}>在一起</div>
    <FlipClock targetTime={dayjs('2020/06/20 23:00:00')} />
    <div className={style.content}>天底下最好的事</div>
    <div className={style.content}>不过就三个字</div>
    <div className={style.content}>遇见你</div>
  </div>
)
export default TogetherDays
