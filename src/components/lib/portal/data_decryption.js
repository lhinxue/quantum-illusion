import Page from "../wrapper/page";
import Logo from "../icon/logo";
import {Typography} from "@mui/material";

export default function DataDecryption() {
    return (
        <Page style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
        }}>
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
                userSelect: "none"
            }}>
                <div>
                    <div>Quantum</div>
                    <div>Illusion</div>
                </div>
            </Typography>
        </Page>

    )
}