
"use client"

import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { signOut } from "next-auth/react"

export default function Logout(){
    return (
        <button 
        onClick={() => signOut()}
        className=" bg-gray-300 py-2 px-4 ml-2 rounded-md inline-flex gap-2
         items-center">
            로그아웃
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </button>
    )

}