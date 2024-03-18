'use server'
import Board from "@/components/forms/Board"
import { liveblocks } from "@/lib/liveBlock"
import { getUserEamil } from "@/lib/userClient"


type PageProps = {
    params: {
        boardId: string
    }
}

export default async function BoardPage(props: PageProps) {
    const boardId = props.params.boardId
    const userEmail = await getUserEamil()
    const boardInfo = await liveblocks.getRoom(boardId)
    const userAccess = boardInfo.usersAccesses?.[userEmail]
    const isAccess = userAccess && [...userAccess].includes('room:write')
        if (!isAccess){
            return (
                <>
                ㅎㅎㅎㅎ
                </>
            )
    }
    return (
        <div>
         
            <Board name={boardInfo.metadata.boardName.toString()} id={boardId}/>
        </div>
    )
}