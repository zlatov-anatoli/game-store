import CardForHome from '../UI/CardForHome'
import classes from './Content.module.css'

const Content = ({ games }) => {
  return (
    <div className={classes.content}>
      {games.map((game) => (
        <CardForHome key={game.title} game={game} />
      ))}
    </div>
  )
}

export default Content
