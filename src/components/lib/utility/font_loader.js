import {Box} from "@mui/material"

export default function FontLoader({fonts, onLoadComplete}) {

    const task = setInterval(() => {
        try {
            if (document.fonts.check('10px ' + fonts.join(', '))) {
                clearInterval(task)
                onLoadComplete()
            }
        } catch (error) {
            clearInterval(task)
            onLoadComplete(error)
        }
    }, 1000)

    return (
        <Box sx={{userSelect: 'none', position: 'fixed', color: '#00000000', zIndex: -1}}>
            {
                (fonts ?? []).map(
                    font => <div key={font} style={{fontFamily: font}}>{font}</div>
                )
            }
        </Box>
    )
}