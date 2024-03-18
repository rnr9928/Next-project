'use client'

import { AddEmail } from "@/app/action/boardAction"
import { useRouter } from "next/navigation"
import { useRef } from "react"

export default function NewBoardSetting({boardId}:{boardId:string}){
    const router = useRouter()
    const inputRef = useRef<HTMLInputElement>(null)
   async function actionEamil(formData: FormData){
        const email = formData.get('email')?.toString() || ''
        await AddEmail(boardId,email)
        if(inputRef.current){
            inputRef.current.value =''
        }
        router.refresh()
    }
    return (
        <form action={actionEamil} className=" max-w-xs">
            <h2 className=" text-lg mb-2">Add Email</h2>
            <input
            ref={inputRef} 
            className="text" 
            placeholder="@gmail.com"
            name="email"/>
            <button className="submit w-full mt-2">저장</button>
        </form>
    )
}