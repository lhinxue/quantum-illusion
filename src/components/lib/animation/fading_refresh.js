import {useEffect, useState} from "react";
import {Box} from "@mui/material";

export default function FadingRefresh({renderKey,children}) {

    const [fade,_fade]=useState(false)
    const [child,_child]=useState(children)

    useEffect(() => {
        _fade(true)
        const timeout = setTimeout(()=>{
            _fade(false)
            _child(children)
        },300)
        return ()=>clearTimeout(timeout)
    }, [renderKey])


    return (
        <Box component={"span"} sx={{
            "& .fading-refresh":{
                transition:"opacity .3s ease-in-out",
                opacity:fade?0:1
            }
        }}>
            {
                child && (
                        <span className={`fading-refresh`}>
                            {child}
                        </span>
                )
            }
        </Box>
    )
}