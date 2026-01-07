
export default function SingleCard({ card, handleChoice,choiceOne,choiceTwo }) {

const handleClick = () =>{ 
// console.log({choiceOne},{choiceTwo});
    handleChoice(card)
}

    return (
        <div className='card' >
            <div>
                <img className='front' 
                src={card.src} 
                alt='card-front' />

                <img className='back' 
                src='img/cover.png' 
                alt='card-back'
                onClick={handleClick}
                />
                
            </div>
        </div>
    )
}
