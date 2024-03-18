'use server'

import { liveblocks } from "@/lib/liveBlock"
import { getUserEamil } from "@/lib/userClient"
import Link from "next/link"


export default async function Boards() {
    const email = await getUserEamil()
    const {data:rooms} = await liveblocks.getRooms({userId:email})
    return (
        <div className=" my-4 grid md:grid-cols-4 gap-2">
            {
            rooms?.length > 0 && rooms.map(room => (
                <Link 
                className=" bg-gray-200 p-4 rounded-md block"
                href={`/boards/${room.id}`} 
                key={room.id}>
                    {room.metadata.boardName}
                </Link>
            ))
            }
        </div>
    )
}