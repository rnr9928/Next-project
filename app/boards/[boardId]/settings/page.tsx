'use server'

import BoardDelelteBtn from "@/components/BoardDeleteBtn"
import EmailList from "@/components/EmailList"
import NewBoardSetting from "@/components/forms/NewSettingform"
import { liveblocks } from "@/lib/liveBlock"
import { getUserEamil } from "@/lib/userClient"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

type PageProps = {
    params: {
        boardId: string
    }
}

export default async function BoardSetting({params}:PageProps){
    const {boardId} = params
    const boardInfo = await liveblocks.getRoom(boardId)
    const userEmail = await getUserEamil()
    if(!boardInfo.usersAccesses[userEmail]){
        return ' : ) ' 
    }
    return (
    <div>
       <div className="flex justify-between">
       <Link
        className=" flex gap-1 items-center btn inline-flex mb-4" 
        href={`/boards/${boardId}`}>
            <FontAwesomeIcon icon={faArrowLeft}/>
            돌아가기
        </Link>
        <BoardDelelteBtn boardId={boardId}/>
       </div>
        <h1 className=" text-2xl">
            Setting Mode {boardInfo.metadata.boardName}:
        </h1>       
        <div className=" mb-8">
       <EmailList
       boardId={boardId} 
       usersAccesses={boardInfo.usersAccesses}/>
        </div>
        <NewBoardSetting boardId={boardId}/>
        </div>
    )
}