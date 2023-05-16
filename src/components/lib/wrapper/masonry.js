import Scrollbars from "react-custom-scrollbars"
import {default as ReactMasonry} from "react-masonry-css"
import {Box} from "@mui/material";
import {createRef, useEffect, useRef, useState} from "react";

export default function Masonry({children}) {


    return (
        <Box component={"span"} sx={{
            width: "100%",
            '& .Masonry': {
                display: "flex",
                width: "auto",
                padding: "16px",
                gap:"16px",
                '& .MasonryColumn': {
                    backgroundClip: 'padding-box',
                    boxSizing: "border-box",
                    gap:"16px",
                    display: "flex",
                    flexDirection:"column"
                }
            }
        }}>
            <Scrollbars>
                <ReactMasonry className={"Masonry"} columnClassName={"MasonryColumn"}
                              breakpointCols={{default: 4, 1400: 3, 1050: 2, 750: 1}}
                >
{children}
                </ReactMasonry>

            </Scrollbars>
        </Box>
    )
}