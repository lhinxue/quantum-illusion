import Page from "../wrapper/page";
import {Typography} from "@mui/material";
import IconButton from "../button/icon_button";
import Icon from "../icon/icon";
import TextField from "../input/text_field";
import Fading from "../animation/fading";
import {createEditor, Node} from "slate";
import {Editable, Slate, withReact} from "slate-react";
import {useState} from "react";


export default function MemoryModification({on, memory, onClose, utl}) {

    const [editor] = useState(() => withReact(createEditor()))
    const empty = [
        {
            type: 'paragraph',
            children: [{text: ''}],
        },
    ]

    const loadContent = (memory) => {
        return memory.content.split("\n").map((line) => ({
            children: [{text: line}],
            type: "paragraph"
        })) ?? empty
    }

    const saveContent = () => {
        utl.updateMemory(
            memory.id,
            memory.title,
            editor.children.map((value) => Node.string(value)).join("\n"),
            memory.labels
        )
        onClose()
    }


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
                    borderRadius: "1em"
                }}>
                    <div>
                        <IconButton Icon={Icon.fold} onClick={saveContent}/>
                        <TextField/>
                    </div>
                    <div>
                        <Slate key={memory.id} editor={editor} value={loadContent(memory)}
                        >
                            <Editable/>
                        </Slate>
                    </div>

                </Typography>
            </Page>
        </Fading>
    )
}