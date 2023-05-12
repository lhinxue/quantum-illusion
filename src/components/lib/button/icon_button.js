import {IconButton as MuiIconButton, Tooltip} from "@mui/material";

export default function IconButton({Icon, size = 30, tooltip, children, style, ...props}) {

    const Base = () => (
        <MuiIconButton sx={{
            width: `${size}px`,
            height: `${size}px`,
            minWidth: `${size}px`,
            minHeight: `${size}px`,
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
        </MuiIconButton>
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