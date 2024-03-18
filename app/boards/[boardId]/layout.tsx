'use client'

import { RoomProvider } from "@/app/liveblocks.config"
import { BoardProvider } from "@/components/BoardContext"
import { LiveList } from "@liveblocks/core"
import { useParams } from "next/navigation"

type PageProps = {
    children: React.ReactNode,
    modal: React.ReactNode,
}


export default function BoardLayout({children,modal}: PageProps){
    const params = useParams()
    return(
        <BoardProvider>
            <RoomProvider
            id={params.boardId.toString()}
            initialPresence={{}}
            initialStorage={{
                cols: new LiveList(),
                cards: new LiveList()
            }}>
        {children}
        {modal}
            </RoomProvider>
        </BoardProvider>
    )
}