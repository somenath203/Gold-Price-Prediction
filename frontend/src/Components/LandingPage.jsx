import css from '../Styles/landing.module.css'
import Graph from './Graph'
const LandingPage = () => {
  return (
    <div className={css.LandingPage}>
        <h1 className={css.head}>
            Let's look at some gold!
        </h1>
        <div className={css.Container}>
            <Graph/>
        </div>
    </div>
  )
}

export default LandingPage