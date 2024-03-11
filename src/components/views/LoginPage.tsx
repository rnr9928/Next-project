'use client'

import { signIn } from "next-auth/react"

export default function LoginPage() {
    return(
        <div className=" w-full pt-8 text-center">
            <button
            onClick={() => signIn('google')}
            className="primary" >lgoin</button>
        </div>
    )
}