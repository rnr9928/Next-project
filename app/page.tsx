
import Boards from "@/components/Boards";
import LoginPage from "@/components/views/LoginPage";
import { authOptions } from "@/lib/authOptions";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions)
  if(!session){
    return (
      <LoginPage/>
    )
  }
  return (
  <div>
    <h1 className=" text-4xl mb-4">To Do :</h1>
    <Boards/>
    <div className=" mt-4">
   <Link
   className="btn primary inline-flex gap-2"
    href={'/newboard'}>
      글쓰기 <FontAwesomeIcon className=" h-6"
      icon={faArrowRight} />
    </Link>
    </div>
  </div>
  );
}
