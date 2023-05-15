import {Typography, useTheme} from "@mui/material";

export default function Button({className, active, children, ...props}) {

    const theme = useTheme()

    return (
        <Typography
            className={active ? "Active " + className : className}
            sx={{
                cursor:"pointer",
                userSelect:"none",
                "&:hover": {
                    backgroundColor: theme.palette.primary.light + "11"
                },
                "&.Active": {
                    backgroundColor: theme.palette.primary.main + "22",
                },

            }}{...props}
        >
            {children}
        </Typography>
    )
}