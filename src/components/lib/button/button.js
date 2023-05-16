import {Typography, useTheme} from "@mui/material";

export default function Button({className, active, children, style, ...props}) {

    const theme = useTheme()

    return (
        <Typography
            className={active ? "Active " + className : className}
            sx={{
                cursor: "pointer",
                userSelect: "none",
                transition: "background-color .3s ease-in-out",
                "&:hover": {
                    backgroundColor: theme.palette.primary.light + "11"
                },
                "&.Active": {
                    backgroundColor: theme.palette.primary.main + "22",
                },
                ...style
            }}{...props}
        >
            {children}
        </Typography>
    )
}