'use client'

import { deleteEmail, updateBoard } from "@/app/action/boardAction"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { RoomAccesses } from "@liveblocks/node"
import { useRouter } from "next/navigation"

export default function EmailList({boardId,usersAccesses}:
    {boardId:string ,usersAccesses:RoomAccesses}){
    const router = useRouter()
    async function handleDelete(emailDelete:string){
      await deleteEmail(boardId,emailDelete)
      router.refresh()
    }
    return (
        <div className=" max-w-xs">
        {Object.keys(usersAccesses).map(email => (
            <div
            key={email} 
            className=" flex gap-2 m-4 items-center max-w-xs justify-between
             border rounded-lg pl-4">
                {email}
            <button className="btn p-1" onClick={() => handleDelete(email)}>
                <FontAwesomeIcon icon={faTrash}/>
            </button>
                </div>
        ))}
        </div>
    )
}