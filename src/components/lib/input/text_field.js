import {InputAdornment, TextField as MuiTextField, useTheme} from "@mui/material";

export default function TextField({value, onChange, style, ...props}) {

    const theme = useTheme()

    return (
        <MuiTextField
            value={value}
            onChange={event => onChange(event.target.value)}
            variant={"standard"}
            autoComplete={"off"}
            InputProps={{
                readOnly: props.readOnly ?? false,
                disableUnderline: true,
                startAdornment: props.startIcon ?
                    <InputAdornment position={"start"}>{props.startIcon}</InputAdornment> : null,
                endAdornment: props.endIcon ?
                    <InputAdornment position={"end"}>{props.endIcon}</InputAdornment> : null
            }}
            sx={{
                borderBottom: "1px solid " + theme.palette[props.color ?? "primary"].light,
                "& input": {
                    padding: "1px 6px",
                    color: theme.palette[props.color ?? "primary"].main,
                    fontSize: "15px",
                    fontFamily: props.fontFamily ?? "inherit"
                },
                "& :hover > .MuiInputAdornment-root": {
                    opacity: 1
                },
                "& .MuiInputAdornment-root": {
                    opacity: 0,
                    transition: "opacity .2s ease-in-out"
                },
                ...style
            }}
            fullWidth
            focused
            {...props}
        />
    )
}