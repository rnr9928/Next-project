import Board from "@/components/forms/Board";
import LoginPage from "@/components/views/LoginPage";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions)
  if(!session){
    return (
      <LoginPage/>
    )
  }
  return (
  <div>
    <h1>To Do :</h1>
    아무것도 없어요
   {/* <Board /> */}
  </div>
  );
}
