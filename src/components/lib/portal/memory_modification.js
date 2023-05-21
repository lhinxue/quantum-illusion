import Page from "../wrapper/page";
import {Tabs, Typography} from "@mui/material";
import IconButton from "../button/icon_button";
import Icon from "../icon/icon";
import TextField from "../input/text_field";
import Fading from "../animation/fading";
import {
    createEditor,
        Editor,
        Element as SlateElement,
        Node as SlateNode,
        Point,
        Range,
        Transforms
} from "slate"
import { Editable, ReactEditor, Slate, withReact } from "slate-react"
import {useCallback, useRef, useState} from "react";
import SlateMarkdown from "../utility/slate_markdown";

export default function MemoryModification({on, memory, onClose, utl}) {

    const [title,_title]=useState(memory.title)
    const [editor] = useState(() => withReact(createEditor()))
    const empty = [
        {
            type: 'paragraph',
            children: [{text: '666'}],
        },
    ]


    const loadContent = (memory) => {
        return memory?.content?.split("\n").map((line) => ({
            children: [{text: line}],
            type: "paragraph"
        })) ?? empty
    }

    const saveContent = () => {
        console.log(editorRef.current.getEditor())
        // utl.updateMemory(
        //     memory.id,
        //     memory.title,
        //     editor.children.map((value) => SlateNode.string(value)).join("\n"),
        //     memory.labels
        // )
        onClose()
    }
const editorRef = useRef(null)

    return (
        <Fading on={on}>
            <Page style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                backgroundColor: "#00000033"
            }}>
                <Typography sx={{
                    width: "1100px",
                    maxWidth: "90%",
                    height: "800px",
                    maxHeight: "90%",
                    backgroundColor: "white",
                    border: "1px solid silver",
                    borderRadius: "1em",
                    display:"flex",
                    flexDirection:"column",
                    "& .header":{
                        display:"flex",
                        height:"60px",
                        borderBottom:"1px solid silver",
                        alignItems:"center",
                        padding:"0 16px"
                    },
                    '& .editor':{
                        height:"calc(100% - 102px)",
                        padding:"20px"
                    },
                    "& .footer":{
                        borderTop:"1px solid silver",
                        height:"40px",
                    }
                }}>
                    <div className={"header"}>
                        <TextField value={title} onChange={_title} disableUnderline style={{
                            "& input":{
                                fontSize:"18px"
                            }
                        }}/>
                        <IconButton Icon={Icon.fold} onClick={saveContent}/>
                        <IconButton Icon={Icon.fold} onClick={saveContent}/>
                    </div>
                    <Tabs className={"editor"}
                    scrollButtons={false}
                          orientation={"vertical"}
                          value={false}
                          variant={"scrollable"}
                    >
                        <SlateMarkdown key={memory.id} ref={editorRef} value={loadContent(memory)}/>

                    </Tabs>
<div className={"footer"}>

</div>
                </Typography>
            </Page>
        </Fading>
    )
}

