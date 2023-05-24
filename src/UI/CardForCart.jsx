import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem, decrementCount, removeItem } from '../redux/cart-slice'
import classes from './CardForCart.module.css'

const CardForCart = ({ item }) => {
  const totalPrice = Math.round(item.price * item.count)
  console.log(item)
  const dispatch = useDispatch()
  return (
    <div className={classes.block}>
      <div className={classes.wrapper}>
        <img className={classes.image} src={item.image} alt="cart-games" />
        <h1 className={classes.title}>{item.title}</h1>
      </div>

      <div className={classes.inner}>
        <span className={classes.spanName}>Количетсво:</span>
        <button
          onClick={() => dispatch(decrementCount(item.id))}
          className={classes.button}
          type="button"
        >
          -
        </button>

        <span className={classes.span}>{item.count}</span>
        <button
          onClick={() => dispatch(addItem({ id: item.id }))}
          className={classes.button}
          type="button"
        >
          +
        </button>

        <span className={classes.price}>
          {totalPrice} <span className={classes.spanPrice}>$</span>
        </span>

        <svg
          onClick={() => dispatch(removeItem(item.id))}
          className={classes.icon}
          fill="#5558ed"
          width="32px"
          height="32px"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM21.657 10.344c-0.39-0.39-1.023-0.39-1.414 0l-4.242 4.242-4.242-4.242c-0.39-0.39-1.024-0.39-1.415 0s-0.39 1.024 0 1.414l4.242 4.242-4.242 4.242c-0.39 0.39-0.39 1.024 0 1.414s1.024 0.39 1.415 0l4.242-4.242 4.242 4.242c0.39 0.39 1.023 0.39 1.414 0s0.39-1.024 0-1.414l-4.242-4.242 4.242-4.242c0.391-0.391 0.391-1.024 0-1.414z"></path>
        </svg>
      </div>
    </div>
  )
}

export default CardForCart
