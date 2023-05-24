import { Routes, Route } from "react-router-dom"
import "./App.css"
import HomePage from "./pages/HomePage"
import CartPage from "./pages/CartPage"
import NotFound from "./pages/NotFound"
import MainLauyout from "./pages/MainLauyout"
import { useState, useEffect } from "react"
import axios from "axios"
import GameInfo from "./pages/GameInfo"

function App() {
  const [games, setGames] = useState([])

  useEffect(() => {
    const getGames = async () => {
      try {
        const res = await axios.get(
          "https://6419524029e7e36438fa9a49.mockapi.io/games"
        )
        setGames(res.data)
      } catch (error) {
        alert(error)
      }
    }
    getGames()
  }, [])

  return (
    <Routes>
      <Route path="" element={<MainLauyout />}>
        <Route path="/" element={<HomePage games={games} />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="games/:gameId" element={<GameInfo />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
