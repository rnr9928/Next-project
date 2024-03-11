'use client'
import { useState } from "react";
import Column from "./Column";
import Newform from "./Newform";

const defaultcol = [
    {id: 'col1', name:'do it', index:0},
    {id: 'col2', name:'do it', index:1},
    {id: 'col3', name:'do it', index:2},]

export type Cardtype ={
    name: string
    id: string | number
   index: number
    colId: string
}

const defaultcards = [
    {id: 'dssad0' , name: 'guk1' ,index:0, colId: 'col1'},
    {id: 'dssad1' , name: 'guk2' ,index:1, colId: 'col1'},
    {id: 'dssad2' , name: 'guk3' ,index:1, colId: 'col2'},
    {id: 'dssad3' , name: 'guk4' ,index:2, colId: 'col3'},
]

export default function Board() {
    const [cards, setCards] = useState(defaultcards)
    const [col,setCol] = useState(defaultcol)
    return(
    <div className=" flex gap-4">
        {col.map(col=>(
            <Column 
            key={col.id}
            {...col}
            setCards={setCards}
            cards={cards
                .sort((a,b)=>a.index-b.index)
                .filter(c=>c.colId ===col.id)} />
        ))}
        <Newform/>
    </div>       
    )
}