import { useEffect, useState } from 'react'
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
      .map((card)=>({...card, id: Math.random()}))

      setCards(shuffledCards)
      setTurns(1)
  }

console.log(cards);
useEffect (() => {
  shuffledCards()
},[])

  return (
    <>
      <div className='App'> 
        <h1>Magic Memory</h1>
        <button>New Game</button>

<div>
  {cards.map((card)=>(
<div className='card' key={card.id}>
    <img  src={card.src} alt="front" />
    <img  src="img/cover.png" alt="back" />
</div>

  ))}
  {turns}
</div>

      </div>
    </>
  )
}

export default App
