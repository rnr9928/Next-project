'use client'

import { FormEvent } from "react"

export default function Newform() {
    function handleNewcol(e: FormEvent){
        e.preventDefault()
        const input = (e.target as HTMLFormElement).querySelector('input')
        const colName = input?.value
        alert('new col: ' + colName)
    }
    return(
        <form onSubmit={handleNewcol} className=" max-w-sm">
            <label className=" block">
                <span className="text-gray-600 block">Name:</span>
            <input type="text" placeholder="asaasd"/>
            </label>
            <button type="submit" className=" mt-2 block w-full">Create</button>
        </form>
    )
}