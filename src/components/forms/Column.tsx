import { ReactSortable } from "react-sortablejs"
import { Cardtype } from "./Board"
import { SetStateAction } from "react"

type Colprops = {
    id: string
    name: string
    cards: Cardtype[]
    setCards: SetStateAction<any>
}


export default function Column({id, name,cards,setCards}: Colprops){
    
    function setCardsCol(sortCards : Cardtype[], newcolId:string) {
        // console.log({sortCards,newcolId})
        
 
        setCards((prevCards:Cardtype[]) => {
            const newCards = [...prevCards]
            sortCards.forEach((sortCard:Cardtype, newIndex:number) => {
                const foundCard = newCards.find(newCard =>
                    newCard.id === sortCard.id)
                    if (foundCard){
                        foundCard.index = newIndex
                        foundCard.colId = newcolId
                    }
            })
            
            //
            // newCards.forEach(newCard => {
            //     if(sortCardId.includes(newCard.id)){
            //         newCard.colId = newcolId
            //         // console.log(newCard.name + ': ', newcolId)
            //     }
            // })
            return newCards
        })
    }
    return(
        <div className=" w-48 bg-white shadow-sm rounded-md p-2">
            <h3>{name}</h3>
            <ReactSortable
             list={cards}
              setList={items => setCardsCol(items,id )}
              group="cards"
              className=" min-h-12"
              ghostClass="opacity-40"
              >
            {cards.map(card => (
                <div key={card.id} className=" border bg-white my-2 p-2 rounded-md">
                    <span>{card.name}</span>
                </div>
            ))}
            </ReactSortable>
        </div>
    )
}