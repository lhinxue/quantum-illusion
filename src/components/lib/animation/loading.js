import {Box, CircularProgress} from "@mui/material";
import Fading from "./fading";

export default function Loading({on, opacity}) {
    return (
        <Fading on={on}>
            <Box sx={{
                alignItems: 'center',
                background: 'white',
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                justifyContent: 'center',
                left: 0,
                position: 'fixed',
                top: 0,
                width: '100vw',
                opacity: opacity ?? 1
            }}>
                <CircularProgress color="primary" size={20}/>
            </Box>
        </Fading>
    )
}