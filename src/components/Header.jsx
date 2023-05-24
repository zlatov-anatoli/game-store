import React from 'react'
import { BiCartAlt } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import classes from './Header.module.css'

const Header = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice)
  return (
    <div className={classes.header}>
      <Link to="/">
        <p className={classes.title}>Game Store</p>
      </Link>

      <div className={classes.wrapper}>
        <Link to="cart">
          <BiCartAlt color="white" size={25} className="cart-icon" />
          <span className={classes.price}> {totalPrice} $</span>
        </Link>
      </div>
    </div>
  )
}

export default Header
