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
    const [container, _container] = useState(new Container({
        name: "My Memories",
        memories: [
            {
                id: "1",
                title: "First memory</div>",
                content: "<div>This is my first memory</div>",
                labels: ["1", "3"]
            },
            {
                id: "2",
                title: "Second memory</div>",
                content: "<div>This is my second memory</div>",
                labels: ["2", "4"]
            },
            {
                id: "3",
                title: "Third memory</div>",
                content: "<div>This is my third memory</div>",
                labels: []
            },
            {
                id: "4",
                title: "Fourth memory</div>",
                content: "<div>This is my fourth memory</div>",
                labels: []
            },
            {
                id: "5",
                title: "Fifth memory</div>",
                content: "<div>This is my fifth memory</div>",
                labels: ["3", "4"]
            },
            {
                id: "6",
                title: "Sixth memory</div>",
                content: "<div>This is my sixth memory</div>",
                labels: ["1", "3"]
            },
            {
                id: "7",
                title: "Seventh memory</div>",
                content: "<div>This is my seventh memory</div>",
                labels: ["1", "2"]
            },
            {
                id: "8",
                title: "Eighth memory</div>",
                content: "<div>This is my eighth memory</div>",
                labels: ["1", "4"]
            },
            {
                id: "9",
                title: "Ninth memory</div>",
                content: "<div>This is my ninth memory</div>",
                labels: ["2", "3"]
            },
            {
                id: "10",
                title: "Tenth memory</div>",
                content: "<div>This is my tenth memory</div>",
                labels: ["1", "3"]
            }
        ],
        labels: [
            {
                id: "1",
                name: "personal",
                hidden: false,
                important: false
            },
            {
                id: "2",
                name: "work",
                hidden: false,
                important: true
            },
            {
                id: "3",
                name: "travel",
                hidden: false,
                important: true
            },
            {
                id: "4",
                name: "sad",
                hidden: false,
                important: false
            }
        ]
    }))
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
                <UserInteraction container={container} />
            </Fading>
            <Loading on={isLoading} opacity={.5}/>
            <Loading on={!isFontLoaded}/>
            <ScreenLocker on={isScreenLocked}/>
            <div style={{background: 'white', position: 'fixed', bottom:0,right:0}}>
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