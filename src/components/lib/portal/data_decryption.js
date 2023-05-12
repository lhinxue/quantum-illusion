import Page from "../wrapper/page";
import Logo from "../icon/logo";
import {Typography} from "@mui/material";
import TextField from "../input/text_field";
import {useEffect, useState} from "react";
import Fading from "../animation/fading";
import IconButton from "../button/icon_button";
import Icon from "../icon/icon";

export default function DataDecryption({container, utl, on}) {

    const [fileName, _fileName] = useState("")
    const [fileContent, _fileContent] = useState("")
    const [unlockTimer, _unlockTimer] = useState(null)
    const [isPasswordVisible, _isPasswordVisible] = useState(false)

    const onFileDrop = (event) => {
        event.preventDefault()
        event.stopPropagation()
        if (event.dataTransfer.files && event.dataTransfer.files[0]) {
            loadFile(event.dataTransfer.files[0])
        }
    }

    const onFileUpload = (event) => {
        loadFile(event.target.files[0])
    }

    const onFileUnload = event => {
        event.preventDefault()
        event.stopPropagation()
        _fileName("")
        _fileContent("")
        utl.updatePassword("")
    }

    const loadFile = file => {
        if (file.name.endsWith(".qi")) {
            _fileName(file.name.replace(".qi", ""))
        } else {
        }
    }

    const unlockFile = () => {
        container.interpret(
            fileContent,
            utl.getPassword(),
            (data) => {
                utl.updateContainer(data)
            },
            (data) => {
                console.error(data)
            })
    }

    const onPasswordChange = (value) => {
        utl.updatePassword(value)
        if (unlockTimer) clearTimeout(unlockTimer)
        _unlockTimer(setTimeout(() => {
            if (value.length > 0) unlockFile()
        }, 2000))
    }

    useEffect(() => {
        if (!on) clearTimeout(unlockTimer)
        return () => {
            if (unlockTimer) clearTimeout(unlockTimer)
        }
    }, [unlockTimer, on])

    return (
        <Fading on={on}>
            <Page
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "50px"
                }}
                onDragOver={onFileDrop}
                onDrop={onFileDrop}
            >
                <Typography color={"primary"} sx={{
                    display: "flex",
                    fontSize: "30px",
                    fontFamily: "DINosaur",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    gap: "10px",
                    userSelect: "none"
                }}>
                    <Logo/>
                    <div>
                        <div>Quantum</div>
                        <div>Illusion</div>
                    </div>
                </Typography>
                <Typography color={"primary"} sx={{
                    display: "flex",
                    userSelect: "none",
                    flexDirection: "column",
                    gap: "16px",
                    alignItems: "center",
                    marginBottom: "100px"
                }}>
                    <TextField
                        value={fileName}
                        onChange={_fileName}
                        readOnly
                        endIcon={fileName === "" ?
                            <IconButton Icon={Icon.upload} component={"label"}>
                                <input accept='.qi' type="file" onChange={onFileUpload} hidden/>
                            </IconButton>
                            :
                            <IconButton Icon={Icon.upload} onClick={onFileUnload}/>
                        }
                    />
                    <TextField
                        value={utl.getPassword()}
                        onChange={onPasswordChange}
                        type={isPasswordVisible ? "text" : "password"}
                        fontFamily={"monospace"}
                        readOnly={!fileName}
                        endIcon={isPasswordVisible ?
                            <IconButton Icon={Icon.upload} onClick={() => _isPasswordVisible(false)}/>
                            :
                            <IconButton Icon={Icon.upload} onClick={() => _isPasswordVisible(true)}/>
                        }
                    />
                    <Typography fontSize={11} color={"secondary"} sx={{
                        cursor: "pointer",
                        userSelect: "none"
                    }}>
                        {"button-create_new_vault"}
                    </Typography>
                </Typography>
            </Page>
        </Fading>
    )
}