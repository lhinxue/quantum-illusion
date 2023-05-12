import {Button, ButtonGroup, colors, createTheme, ThemeProvider} from "@mui/material";
import FontLoader from "./lib/utility/font_loader";
import {useState} from "react";
import Loading from "./lib/animation/loading";
import Container from "../models/container";
import Fading from "./lib/animation/fading";
import DataDecryption from "./lib/portal/data_decryption";
import UserInteraction from "./lib/portal/user_interaction";
import ScreenLocker from "./lib/utility/screen_locker";

export default function App() {

    const [isFontLoaded, _isFontLoaded] = useState(false)
    const [isDataReady, _isDataReady] = useState(false)
    const [isScreenLocked, _isScreenLocked] = useState(false)
    const [isLoading, _isLoading] = useState(false)
    const [container, _container] = useState(new Container())
    const [password, _password] = useState("")

    class utl {
        static fontLoadComplete() {
            _isFontLoaded(true)
        }

        static dataReady() {
            _isDataReady(true)
        }

        static restartApp() {
            _isDataReady(false)
        }

        static lockScreen() {
            _isScreenLocked(true)
        }

        static unlockScreen() {
            _isScreenLocked(false)
        }

        static updateContainer(value) {
            _container(value)
        }

        static getPassword() {
            return password
        }

        static updatePassword(value) {
            _password(value)
        }

    }

    return (
        <ThemeProvider theme={createTheme({
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
        })}>
            <FontLoader fonts={["DINosaur", "HarmonyOS"]} onLoadComplete={utl.fontLoadComplete}/>

            <DataDecryption on={!isDataReady} container={container} utl={utl}/>
            <Fading on={isDataReady}>
                <UserInteraction/>
            </Fading>
            <Loading on={isLoading} opacity={.5}/>
            <Loading on={!isFontLoaded}/>
            <ScreenLocker on={isScreenLocked}/>
            <div style={{background: 'white', position: 'fixed', bottom:0}}>
                <ButtonGroup>
                    <Button onClick={() => _isDataReady(n => !n)}>
                        isDataReady
                    </Button>
                    <Button onClick={() => _isLoading(n => !n)}>
                        isLoading
                    </Button>
                </ButtonGroup>
            </div>
        </ThemeProvider>
    )
}