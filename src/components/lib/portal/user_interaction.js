import Page from "../wrapper/page";
import {Box} from "@mui/material";
import {useState} from "react";
import IconButton from "../button/icon_button";
import Icon from "../icon/icon";

export default function UserInteraction() {

    const [isSidebarExpanded, _isSidebarExpanded] = useState(true)

    return (
        <Page style={{
            display: "flex"
        }}>
            <Box sx={{
                width: isSidebarExpanded ? "300px" : "50px",
                transition: "width .5s ease-in-out",
                borderRight:"1px solid silver"
            }}>
                <IconButton Icon={Icon.upload} onClick={() => _isSidebarExpanded(n => !n)}/>
            </Box>
            <Box sx={{
                flex:1
            }}>
                ioio
            </Box>
        </Page>

    )
}