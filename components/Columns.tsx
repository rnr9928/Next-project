import { Col, useMutation, useStorage } from "@/app/liveblocks.config"
import Newform from "./forms/Newform"
import { ReactSortable } from "react-sortablejs"
import {default as BoardCol} from '@/components/forms/Column'
import { LiveList, LiveObject, shallow } from "@liveblocks/core"

export default function Cols(){
    const cols = useStorage(root => root.cols.map(c => ({...c}))
    ,shallow)

    const updateCols = useMutation(({storage},cols:LiveObject<Col>[]) => {
        storage.set('cols',new LiveList(cols))
    },[])
    
    function setColOrder(sortCols:Col[]){
        const newCols:LiveObject<Col>[] = []
        sortCols.forEach((sortCol,newIndex) => {
            const newSortCol = {...sortCol}
            newSortCol.index = newIndex
            newCols.push(new LiveObject(newSortCol))
        })
        updateCols(newCols)
    }
    if(!cols) {
        return
    }
    
    return(
        <div className="">
            <ReactSortable 
            group={'boardcol'}
            list={cols} 
            className=" flex gap-4"
            ghostClass="opacity-40"
            setList={setColOrder}>
            {cols?.length > 0 && cols.map(col=>(
        <BoardCol 
        key={col.id}
        {...col}
       />
    ))}
            </ReactSortable>
    <Newform/>
</div>
    )      
}