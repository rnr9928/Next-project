import { authOptions } from "./authOptions"
import { getServerSession } from "next-auth"

export async function getUserEamil(): Promise<string> {
    const session = await getServerSession(authOptions)
    return session?.user?.email || ''
}