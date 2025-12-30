import { useState } from 'react'
import './App.css'

const cardImages = [
  {"src": "img/helmet-1.png", "matched": false},
  {"src": "img/potion-1.png", "matched": false},      
  {"src": "img/ring-1.png", "matched": false},
  {"src": "img/scroll-1.png", "matched": false},
  {"src": "img/shield-1.png", "matched": false},
  {"src": "img/sword-1.png", "matched": false}  
]


function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  const shuffledCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(()=> Math.random() - 0.5)
      .map((card)=>({...card, id: Math.floor(Math.random() * 12) + 1 }))

      setCards(shuffledCards)
      setTurns(0)
  }

console.log(cards);


  return (
    <>
      <div className='App'> 
        <h1>Magic Memory</h1>
        <button>New Game</button>
      </div>
    </>
  )
}

export default App
