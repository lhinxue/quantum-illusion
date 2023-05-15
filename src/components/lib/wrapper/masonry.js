import Scrollbars from "react-custom-scrollbars"
import {default as ReactMasonry} from "react-masonry-css"

export default function Masonry({children}) {
    return (
        <span style={{
            width: "100%",
            '& .Masonry': {
                display: "flex",
                width: "auto",
                padding: "0 10px",
                '& .MasonryColumn': {
                    backgroundClip: 'padding-box',
                    boxSizing: "border-box",
                    "& .react-reveal": {
                        margin: "12px 6px",
                        "& .Block": {
                            borderRadius: "1em",
                        }
                    }
                }
            }
        }}>
            <Scrollbars>
                <ReactMasonry className={"Masonry"} columnClassName={"MasonryColumn"}
                              breakpointCols={{default: 4, 1400: 3, 1050: 2, 750: 1}}>
{children}
                </ReactMasonry>

            </Scrollbars>
        </span>
    )
}