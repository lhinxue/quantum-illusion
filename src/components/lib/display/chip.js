import {Typography} from "@mui/material";

export default function Chip({data, onClick}) {

    const onChipClick = () => {
        if (onClick) {
            onClick(data.id)
        }
    }

    return (
        <Typography
            onClick={onChipClick}
            sx={{
                cursor: "pointer",
                userSelect: "none",
                fontSize: "13px",
                border: "1px solid silver",
                padding: "1px 10px",
                borderRadius: "1em",
                width: "fit-content",
                backgroundColor: "white"
            }}
        >
            {data.name}
        </Typography>
    )
}