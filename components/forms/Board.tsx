'use client'

import { RoomProvider, useMyPresence } from "@/app/liveblocks.config";
import { LiveList } from "@liveblocks/client";
import { ClientSideSuspense } from "@liveblocks/react";
import Cols from "../Columns";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FormEvent, useEffect, useState } from "react";
import { updateBoard } from "@/app/action/boardAction";
import { useRouter } from "next/navigation";
import { BoardProvider } from "../BoardContext";



export default function Board({id,name} : {id:string , name:string}) {
    const [rename,setRename] = useState(false)
    const router = useRouter()
   
   async function handleRename(e:FormEvent){
        e.preventDefault()
        const input = (e.target as HTMLFormElement).querySelector('input')
        if (input) {
            const newName = input.value
            await updateBoard(id,{metadata:{boardName:newName}})
            input.value=''
            setRename(false)
            router.refresh()
        }
    }
    return(
        <BoardProvider>
        <RoomProvider
         id={id}
         initialPresence={{}}
          initialStorage={{
            cols:new LiveList(),
            cards: new LiveList(),
          }}>
            
            <ClientSideSuspense fallback={(<div>loading</div>)}>{()=>(
    <>
        <div className=" flex gap-2 justify-between items-center mb-4">
        <div>
            {!rename && (

            <h1
            onClick={()=> setRename(true)}
             className="text-2xl">
        
            제목: {name} 
            </h1>
            )}
            {rename && (
                <form onSubmit={handleRename}>
                    <input className="text" defaultValue={name}/>
                </form>
            )}
            </div>
                <Link 
                className=" flex gap-2 items-center btn"
                href={`/boards/${id}/settings`}>
                    
                 <FontAwesomeIcon icon={faCog}/> 
                   설정
                </Link>
        </div>
        <Cols  />
    </>
)}

</ClientSideSuspense>      
    </RoomProvider> 
    </BoardProvider>
    )

}

