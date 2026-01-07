import { useEffect, useState } from 'react'
import './App.css'
import SingleCard from './components/singleCard'

const cardImages = [
  { "src": "img/helmet-1.png", "matched": false },
  { "src": "img/potion-1.png", "matched": false },
  { "src": "img/ring-1.png", "matched": false },
  { "src": "img/scroll-1.png", "matched": false },
  { "src": "img/shield-1.png", "matched": false },
  { "src": "img/sword-1.png", "matched": false }
]


function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  const shuffledCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)
  }

  useEffect(() => {
    shuffledCards()
  }, [])

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    console.log('resetturn');

  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
            return prevCars.map(card => {
              if (card.src === choiceOne.src) {
                return {...card, matched: true}
              }
            })
        })
        resetTurn()
      }
     else {
      console.log('not match');
      resetTurn()
    }}
    console.log(cards);
  }, [choiceOne, choiceTwo])


  return (
    <>
      <div className='App'>
        <div className="barra">
          <h1>Magic Memory</h1>
          <button
          // onClick={}


          >New Game</button>
        </div>
        <div className='card-grid ' >
          {cards.map((card) => (
            <SingleCard key={card.id}
              card={card}
              handleChoice={handleChoice}
              choiceOne={choiceOne}
              choiceTwo={choiceTwo}
            />
          ))}
          Turn : {turns}
        </div>

      </div>
    </>
  )
}

export default App
