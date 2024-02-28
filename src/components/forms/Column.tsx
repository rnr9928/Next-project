import { Cardtype } from "./Board"

type Colprops = {
    name: String
    cards: Cardtype[]
}

// const cards = [
//     {id: 'dssad' , name: 'guk' , order:0},
//     {id: 'dssad2' , name: 'guk2' , order:1},
//     {id: 'dssad3' , name: 'guk3' , order:2},
// ]

export default function Column({name,cards}: Colprops){
    return(
        <div className=" w-48 bg-white shadow-sm rounded-md">
            <h3>{name}</h3>
            {cards.map(card => (
                <div className=" border my-2 p-2 rounded-md">
                    <span>{card.name}</span>
                </div>
            ))}
        </div>
    )
}