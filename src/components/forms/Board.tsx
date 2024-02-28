'use client'
import { useState } from "react";
import Column from "./Column";
import Newform from "./Newform";

const defaultcol = [
    {id: 'asd', name:'do it', index:0},
    {id: 'zxc', name:'do it', index:1},
    {id: 'qwe', name:'do it', index:2},
]

export type Cardtype ={
    name: String
    id: String
    order: Number
}

const defaultcards = [
    {id: 'dssad' , name: 'guk' , order:0, colId: 'asd'},
    {id: 'dssad' , name: 'guk33' , order:0, colId: 'asd'},
    {id: 'dssad2' , name: 'guk2' , order:1, colId: 'zxc'},
    {id: 'dssad3' , name: 'guk3' , order:2, colId: 'qwe'},
]

export default function Board() {
    const [cards, setCards] = useState(defaultcards)
    const [col,setCol] = useState(defaultcol)
    return(
    <div className=" flex gap-4">
        {col.map(value=>(
            <Column {...value} 
            cards={cards.filter(c=>c.colId ===value.id)} />
        ))}
        <Newform/>
    </div>       
    )
}