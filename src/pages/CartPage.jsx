import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardForCart from '../UI/CardForCart'
import classes from './CartPage.module.css'
import { BiCartAlt } from 'react-icons/bi'
import { removeAllItems } from '../redux/cart-slice'

const CartPage = () => {
  const items = useSelector((state) => state.cart.items)
  const totalPrice = useSelector((state) => state.cart.totalPrice)
  const dispatch = useDispatch()

  const onClearHandler = () => {
    dispatch(removeAllItems())
  }
  return (
    <div className="container">
      <div className={classes.totalPrice}>
        <p className={classes.text}>
          Общая стоимось товара:
          <span className={classes.span}> {totalPrice}$</span>
        </p>
      </div>

      {items.map((item) => (
        <CardForCart item={item} />
      ))}
      <div></div>
      <div className={classes.inner}>
        <button
          type="button"
          onClick={onClearHandler}
          className={classes.button}
        >
          Очистить корзину
        </button>
        <BiCartAlt color="white" size={25} className="cart-icon" />
      </div>
    </div>
  )
}

export default CartPage
