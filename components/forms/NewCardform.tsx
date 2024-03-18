'use client'
import { Card, useMutation } from "@/app/liveblocks.config"
import { LiveObject } from "@liveblocks/core"
import { FormEvent } from "react"
import uniqid from "uniqid"

export default function NewCardform({colId}: {colId:string}) {

    const addCard = useMutation(({storage},cardName) => {
        return storage.get('cards').push(new LiveObject<Card>({
            name: cardName,
            id: uniqid.time(),
            colId: colId,
            index: 9999,
        }))
    }, [colId])
    function handleCardSubmit(e:FormEvent){
        e.preventDefault()
        const input = (e.target as HTMLFormElement).querySelector('input')
        if (input){
            const cardName = input?.value
            addCard(cardName)
            input.value=''
        }
    }
    return (
        <form onSubmit={handleCardSubmit}>
            <input className="text" placeholder="이름"/>
        </form>
    )
}