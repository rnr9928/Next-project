'use client'

import { redirect } from "next/navigation"
import { createBoard } from "../action/boardAction"

export default  function NewPage() {
   async function handleNewBoard(formData: FormData ) {
        const boardName = formData.get('name')?.toString()|| ''
        const {id} = await createBoard(boardName)
        redirect(`/boards/${id}`)
    }

    return (
        <form action={handleNewBoard} className=" max-w-xs block">
            <h1 className=" text-2xl mb-4">CNB</h1>
            <input className="text" name="name" placeholder="제목"/>
            <button  className="submit mt-2 ">만들기</button>
        </form>
    )
}