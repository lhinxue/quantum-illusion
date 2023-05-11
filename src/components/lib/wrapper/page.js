import {Box} from "@mui/material";

export default function Page({children, style}) {
    return (
        <Box sx={{
            width: "100vw",
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            overflow: "hidden",
            ...style
        }}>
            {children}
        </Box>
    )
}