import React from 'react'
import Content from '../components/Content'
import classes from './HomePage.module.css'

const HomePage = ({ games }) => {
  return (
    <>
      <div className={classes.container}>
        <Content games={games} />
      </div>
    </>
  )
}

export default HomePage
