'use client'

import { useParams, useRouter } from "next/navigation"
import { FormEvent, useContext, useEffect, useState } from "react"
import { BoardContext, BoardContextProps } from "../BoardContext"
import { Card, useMutation, useStorage } from "@/app/liveblocks.config"
import { shallow } from "@liveblocks/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsis, faFileLines, faTrash } from "@fortawesome/free-solid-svg-icons"
import DeleteCheck from "../Deletebtn"
import CancelBtn from "../CancelBtn"
import CardDes from "../CardDes"


export default function CardModal() {
    const router = useRouter()
    const params = useParams()
    const {clickCard , setClickCard} = useContext<BoardContextProps>(BoardContext)
    const [edit,setEdit] = useState(false)

const card = useStorage(root => {
   return root.cards.find(c=>c.id === params.cardId)
},shallow)

const updateCard = useMutation(({storage},cardId,updateData)=>{
    const cards = storage.get('cards').map(c => c.toObject())
    const index = cards.findIndex(c => c.id === cardId)
    const card = storage.get('cards').get(index)
    for( let updateKey in updateData){
        card?.set(updateKey as keyof Card,updateData[updateKey])
    }
},[])

const deleteCard = useMutation(({storage}, id )=>{
    const cards = storage.get('cards')
    const cardIndex = cards.findIndex(c => c.toObject().id ===id)
    cards.delete(cardIndex)
},[])

    useEffect(() =>{
        if(params.cardId && setClickCard) {
            setClickCard(params.cardId.toString())
        }
    },[params])

    function handleDelete(){
        deleteCard(params.cardId)
        if(setClickCard){
            setClickCard(null)
        }  
        router.back()
    }


    function hadleClick(){
        router.back()
    }

    function handleNameChange(e: FormEvent){
        e.preventDefault()
        const input = (e.target as HTMLFormElement).querySelector('input')
        if(input) {
            const newName = input.value
            updateCard(params.cardId,{name:newName})
            setEdit(false)
        }
    }
    return (
        <div 
        onClick={hadleClick}
        className=" fixed inset-0 bg-black/70"> 
            <div
            onClick={e => e.stopPropagation()}
            className=" bg-white p-4 mt-8 max-w-xs mx-auto rounded-md">
                {!edit && (
                         <div className=" flex justify-between"> 
                         <h4 className=" text-lg">{card?.name}</h4>
                         <button
                         onClick={()=> setEdit(true)} 
                         className=" text-gray-400">
                             <FontAwesomeIcon icon={faEllipsis}/>
                         </button>
                         </div>
                        )}
                        {edit && (
                            <div>
                                <form onSubmit={handleNameChange}>
                                    <input 
                                    className="text mb-2"
                                    defaultValue={card?.name}
                                    />
                                    <button 
                                    className="submit w-full">
                                        저장
                                        </button>
                                </form>
                                <div className="mt-8">
                               <DeleteCheck 
                               onDelete={() => handleDelete()}/>
                                </div>
                                <CancelBtn onClick={() =>setEdit(false)}/>
                                </div>
                        )}
                        {!edit && (
                            <div>
                                <h2 className="flex gap-2 items-center mt-4">
                                    <FontAwesomeIcon icon={faFileLines}/>
                                    글
                                </h2>
                               <CardDes/>
                                </div>
                        )}
                </div>
        </div>
    )
}