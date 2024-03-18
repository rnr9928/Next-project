import LiveblocksProvider from "@liveblocks/yjs"
import {Doc} from "yjs"
import {EditorContent, useEditor} from '@tiptap/react'
import {StarterKit} from '@tiptap/starter-kit'
import {Placeholder} from '@tiptap/extension-placeholder'
import {Collaboration} from '@tiptap/extension-collaboration'
import {CollaborationCursor} from '@tiptap/extension-collaboration-cursor'
import { useSelf } from "@/app/liveblocks.config"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBold } from "@fortawesome/free-solid-svg-icons"

type EditProps = {
    doc: Doc
    provider: LiveblocksProvider<any, any, any, any>
    cardId: string
}

export default function DesEdit({doc,provider,cardId}: EditProps){
    const userInfo = useSelf(me => me.info)

    if(!userInfo){
        return
    }

    const editor = useEditor({
        extensions:[
            StarterKit.configure({
                history: false,
            }),
            Placeholder.configure({
                emptyEditorClass: '빈공간',
                placeholder:'글'
            }),
            Collaboration.configure({
                document:doc,
                field: cardId,
            }),
            CollaborationCursor.configure({
                provider,
                user:userInfo,
            })
        ]
    })
    return(
        <div>
            <div className=" flex gap-1 mb-1 mt-2">
            <button
            className=" border bg-white rounded-md py-1 px-2 text-sm"       
            onClick={() => editor?.chain().focus().toggleBold().run()}>
                <FontAwesomeIcon icon={faBold}/>
            </button>
            
            </div>
            <EditorContent editor={editor}/>    
        </div>
    
    )
}