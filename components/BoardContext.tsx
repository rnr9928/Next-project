import { Dispatch, useState } from "react";
import { createContext } from "react";

type ProviderProps = {
    children:React.ReactNode
}

export type ClickCardId = string | null
export type BoardContextProps = {
    clickCard?: ClickCardId
    setClickCard?: Dispatch<React.SetStateAction<ClickCardId>>
}

export const BoardContext = createContext<BoardContextProps>({})

export function BoardProvider({children}:ProviderProps) {
    const [clickCard,setClickCard] = useState<ClickCardId>(null)

    return (
        <BoardContext.Provider value={{clickCard,setClickCard}}>
            {children}
        </BoardContext.Provider>
    )
}