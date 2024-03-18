'use client'

import { useMutation } from "@/app/liveblocks.config"
import { LiveObject } from "@liveblocks/client"
import { FormEvent } from "react"
import uniqid from "uniqid"

export default function Newform() {

    const addCol = useMutation(({storage}, colName)=> {
        storage.get('cols').push(new LiveObject({
            name: colName,
            id: uniqid.time(),
            index: 9999,
        }))
    }, [])

    function handleNewcol(e: FormEvent){
        e.preventDefault()
        const input = (e.target as HTMLFormElement).querySelector('input')
        if (input){
            const colName = input?.value
            addCol(colName)
            input.value = ''
        }
        
    }
    return(
        <form onSubmit={handleNewcol} className=" max-w-sm">
            <label className=" block">
                <span className="text-gray-600 block">Name:</span>
            <input className="text" placeholder="asaasd"/>
            </label>
            <button  className="submit mt-2 block w-full">Create</button>
        </form>
    )
}