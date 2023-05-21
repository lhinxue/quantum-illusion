import {default as ReactMasonry} from "react-masonry-css"
import {Box, Tabs} from "@mui/material";
import {Fade} from "react-reveal"

export default function Masonry({children}) {

    return (
            <Box sx={{
                width: "100%",
                height: "100%",
                '& .Masonry': {
                    display: "flex",
                    width: "auto",
                    padding: "16px",
                    gap: "16px",
                    '& .MasonryColumn': {
                        backgroundClip: 'padding-box',
                        boxSizing: "border-box",
                        gap: "16px",
                        display: "flex",
                        flexDirection: "column"
                    }
                }
            }}>
                <Tabs
                    orientation={"vertical"}
                    scrollButtons={false}
                    value={false}
                    variant={"scrollable"}


                    sx={{
                        height: "100%",
                        "& .MuiTabs-indicator": {
                            width: "100%",
                            opacity: "0"
                        }
                    }}
                >
                    <ReactMasonry className={"Masonry"} columnClassName={"MasonryColumn"}
                                  breakpointCols={{default: 4, 1400: 3, 1050: 2, 750: 1}}
                    >
                        {children}
                    </ReactMasonry>
                </Tabs>
            </Box>
    )
}