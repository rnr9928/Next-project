
import { ReactSortable } from "react-sortablejs"
import { Card, useMutation, useStorage } from "@/app/liveblocks.config"
import NewCardform from "./NewCardform"
import { shallow } from "@liveblocks/core"
import { FormEvent, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsis, faTrash } from "@fortawesome/free-solid-svg-icons"
import {default as ColCard} from '../../components/Card'
import CancelBtn from "../CancelBtn"

type Colprops = {
    id: string
    name: string

}


export default function Column({id, name}: Colprops){
    const [rename,setRename] = useState(false)

    const colCards = useStorage<Card[]>(root => {
        return root.cards
        .filter(card => card.colId === id)
        .map(c => ({...c}))
        .sort((a,b) => a.index - b.index)
    }, shallow)
 
    const updateCard = useMutation(({storage},index,updateData) =>{
        const card = storage.get('cards').get(index)
        if (card) {
            for (let key in updateData){
                card?.set(key as keyof Card, updateData[key])
            }
        }
    },[])

    const updateCol = useMutation(({storage}, id, newName) => {
        const cols = storage.get('cols')
        cols.find(c => c.toObject().id ===id)?.set('name',newName)
    },[])

    const deleteCol = useMutation(({storage}, id )=>{
        const cols = storage.get('cols')
        const colIndex = cols.findIndex(c => c.toObject().id ===id)
        cols.delete(colIndex)
    },[])
    
    const setTaskCol = useMutation(({storage},sortCards:Card[],newColId)=>{
        const idSortCards = sortCards.map(c => c.id.toString())
        const allCards:Card[] = [...storage.get('cards').map(c => c.toObject())]
        idSortCards.forEach((sortCardId,colIndex) => {
            const cardStorageIndex = allCards.findIndex(
                c => c.id.toString() === sortCardId
            )
            updateCard(cardStorageIndex,{
                colId: newColId,
                index: colIndex
            })
            })
        },[])

       function handleRename(e: FormEvent){
        e.preventDefault()
        const input = (e.target as HTMLAnchorElement).querySelector('input')
        if (input) {
            const newColName = input.value
            updateCol(id,newColName)
            setRename(false)
        }
       }

    return(
        <div className=" w-48 bg-white shadow-sm rounded-md p-2">
            {!rename && (
                <div className=" flex justify-between">
                <h3>
                    {name}
                    </h3>
                    <button 
                    onClick={()=> setRename(true)}
                    className=" text-gray-500">
                        <FontAwesomeIcon icon={faEllipsis}/>
                    </button>
                </div>
            )}
            {rename && (
                <div className=" mb-8">
                    제목 수정 :
                <form
                className=" mb-2" 
                onSubmit={handleRename}>
                    <input className="text" defaultValue={name}/>
                    <button className="submit w-full mt-2">저장하기</button>
                </form>
                <button 
                onClick={() => deleteCol(id)}
                className=" bg-red-500 text-white p-2 flex
                 gap-2 w-full items-center rounded-md justify-center">
                    <FontAwesomeIcon icon={faTrash}/>
                    삭제하기
                </button>
                <CancelBtn onClick={()=>setRename(false)}/>
                </div>
            )}
            {!rename && colCards &&  (
                <>
                 <ReactSortable
                list={colCards}
                setList={items => setTaskCol(items,id )}
                 group="cards"
                className=" min-h-12"
                 ghostClass="opacity-40"
  >
            {colCards.map(card => (
                <ColCard key={card.id} id={card.id} name={card.name}/>
          
    ))}
        </ReactSortable>
                </>
            )}
            {!rename && (
<NewCardform colId={id}/>
            )}
        </div>
    )
            }
    