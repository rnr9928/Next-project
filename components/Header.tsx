
import { authOptions } from "@/lib/authOptions"
import { getServerSession } from "next-auth"
import Logout from "./Logout"
import Login from "./Login"
import Link from "next/link"

export default async function Header() {
    const session = await getServerSession(authOptions)
    return(
    <header className="bg-gray-200 p-4 px -8">
        <div className=" flex justify-between items-center">
    <Link href="/" className="logo">Gurello</Link>
    <div>
        {session  && (
            <div>
                반갑습니다, {session.user?.name}
               <Logout />
                </div>
)}
{!session && (
    <>
     로그인하기
     <Login/>
    </>
)}
</div>
    </div>
  </header>
    )
}
