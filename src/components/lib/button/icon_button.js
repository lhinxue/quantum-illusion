import {Tooltip, Typography, useTheme} from "@mui/material";

export default function IconButton({Icon, size = 30, tooltip, children, style, color, ...props}) {
    const theme = useTheme()
    const Base = () => (

        <Typography component={"label"} sx={{
            cursor: "pointer",
            width: `${size}px`,
            height: `${size}px`,
            minWidth: `${size}px`,
            minHeight: `${size}px`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "1em",
            transition: "background-color .3s ease-in-out",
            "&:hover": {
                backgroundColor: (color ?? theme.palette.primary.light) + "33",
            },
            '& svg': {
                width: `${size * 0.66}px`,
                height: `${size * 0.66}px`,
                minWidth: `${size * 0.66}px`,
                minHeight: `${size * 0.66}px`,
            },
            ...style
        }} {...props}>
            <Icon fontSize={"small"}/>
            {children}
        </Typography>
    )

    return (
        tooltip ?
            <Tooltip title={tooltip} arrow enterDelay={1000} placement={props.tooltipPosition ?? "top"}>
                <Base/>
            </Tooltip>
            :
            <Base/>
    )
}