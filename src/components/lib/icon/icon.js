import {SvgIcon} from "@mui/material";

export default class Icon {
    static style = {
        "stroke": "currentColor",
        "stroke-width": 1.6,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "fill": "none"
    }

    static upload(props) {
        return (
            <SvgIcon {...props}>
                <path {...Icon.style}
                      d="M 3 13 L 3 20 L 21 20 L 21 13 M 12 15 L 12 4 M 8 8 L 12 4 L 16 8"/>
            </SvgIcon>
        )
    }
}