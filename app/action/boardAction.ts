'use server'
import { authOptions } from "@/lib/authOptions";
import { liveblocks } from "@/lib/liveBlock";
import { Liveblocks, RoomInfo } from "@liveblocks/node";
import { getServerSession } from "next-auth";
import uniqid from 'uniqid'


export async function createBoard(name: string):Promise<boolean | RoomInfo>{

const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY || '',
});
const session = await getServerSession(authOptions)
const email = session?.user?.email || ''

if (email){
    const roomId = uniqid.time()
    return await liveblocks.createRoom(roomId,{
    defaultAccesses: [],
    usersAccesses: {
        [email] : ['room:write']
    },
    metadata:{
        boardName:name,
    }
})
}
    return false
}

export async function AddEmail(boardId:string, email:string){
    const room = await liveblocks.getRoom(boardId)
    const usersAccesses = room.usersAccesses
    usersAccesses[email] = ['room:write']
    await liveblocks.updateRoom(boardId,{usersAccesses})
    return true
}


export async function updateBoard(boardId:string, updateData:{}) {
    const result = await liveblocks.updateRoom(boardId,updateData)
    return true
}

export async function deleteEmail(boardId:string, email:string) {
    const room = await liveblocks.getRoom(boardId)
    const usersAccesses:any = room.usersAccesses
    usersAccesses[email] = null
    await liveblocks.updateRoom(boardId,{usersAccesses})
    return true
}

export async function deleteBoard(boardId:string) {
    await liveblocks.deleteRoom(boardId)
}