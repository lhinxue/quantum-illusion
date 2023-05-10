import {colors, createTheme, ThemeProvider} from "@mui/material";
import FontLoader from "./lib/utility/font_loader";
import {useState} from "react";
import Loading from "./lib/animation/loading";
import Container from "../models/container";
import Fading from "./lib/animation/fading";
import DataDecryption from "./lib/portal/data_decryption";
import UserInteraction from "./lib/portal/user_interaction";

export default function App() {

    const [isFontLoaded, _isFontLoaded] = useState(false)
    const [isDataReady, _isDataReady] = useState(false)
    const [container, _container] = useState(new Container())
    const [password, _password] = useState("")

    return (
        <ThemeProvider
            theme={createTheme({
                palette: {
                    mode: 'light',
                    primary: {
                        main: colors.grey[600],
                        contrastText: '#ffffff',
                        light: colors.grey[400],
                        dark: colors.grey[800],
                    },
                    secondary: {
                        main: colors.blue[400],
                        contrastText: '#ffffff',
                        light: colors.blue[200],
                        dark: colors.blue[700],
                    }
                },
                typography: {
                    fontWeightLight: 400,
                    fontWeightMedium: 400,
                    fontWeightBold: 400,
                    fontFamily: `HarmonyOS, -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"`
                }
            })}
        >
            <FontLoader fonts={["DINosaur", "HarmonyOS"]} onLoadComplete={() => _isFontLoaded(true)}/>
            {
                isFontLoaded ?
                    <>
                        <Fading on={!isDataReady}>
                            <DataDecryption/>
                        </Fading>
                        <UserInteraction/>
                        <div onClick={() => _isDataReady(n => !n)}>666</div>
                    </>
                    :
                    <Loading/>

            }
        </ThemeProvider>
    )
}