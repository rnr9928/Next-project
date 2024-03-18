'use client'

import { deleteBoard } from "@/app/action/boardAction"
import { useRouter } from "next/navigation"


export default function BoardDelelteBtn({boardId}:{boardId:string}){
    const router = useRouter()
    async function handleDeleteBoard(){
        await deleteBoard(boardId)
        router.push('/')
    }
    return (
        <button
        onClick={() => handleDeleteBoard()} 
        className=" bg-red-500 text-white px-4 py-2 rounded-md">
        Delete
        </button>
    )
}