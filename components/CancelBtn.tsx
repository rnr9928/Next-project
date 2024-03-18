import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CancelBtn({onClick}:{onClick:() => void}){
    return (
        <button
        onClick={onClick}
        className=" mt-4 w-full flex gap-2 items-center justify-center text-sm font-bold text-gray-400">
        <FontAwesomeIcon icon={faClose}/>취소
        </button>
    )
}