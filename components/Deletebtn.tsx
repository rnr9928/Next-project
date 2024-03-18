'use client'
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

type Props = {
    onDelete: () => void
}

export default function DeleteCheck({onDelete}:Props){
    const [Delete,setDelete] = useState(false)

    if(Delete) {
    return (
        <div>
            <h4 className=" mb-2 text-center">정말로 삭제할까요?</h4>
              <div className=" gird grid-cols-2 gap-2">
            <div className="">
        <button 
        onClick={() => setDelete(false)}
        className=" btn block grow w-full with-icon"
        >
       취소
    </button>
    </div>
    <button onClick={onDelete} className="w-full btn red with-icon">
        네
        </button>
    </div>
        </div>
      
    )
    
}

return(
    <button
    onClick={() => setDelete(true)}
    className=" bg-red-500 text-white p-2 w-full 
    justify-center items-center flex gap-2 rounded-md">
        <FontAwesomeIcon icon={faTrash}/>
        삭제
    </button>
)


}