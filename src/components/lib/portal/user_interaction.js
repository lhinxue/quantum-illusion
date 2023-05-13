import Page from "../wrapper/page";
import {Box, Button, Tab, Tabs, Typography, useTheme} from "@mui/material";
import {useState} from "react";
import IconButton from "../button/icon_button";
import Icon from "../icon/icon";
import Fading from "../animation/fading";

export default function UserInteraction() {

    const [isSidebarExpanded, _isSidebarExpanded] = useState(true)
    const [appUrl, _appUrl] = useState(false)

    const getUrl = () => {
        if (appUrl && appUrl.startsWith("label-")) {
            return appUrl.replace("label-", "")
        } else {
            return false
        }
    }

    const theme = useTheme()

    return (
        <Page style={{
            display: "flex"
        }}>
            <Box sx={{
                width: isSidebarExpanded ? "300px" : "50px",
                transition: "width .5s ease-in-out",
                borderRight: "1px solid silver",
                '& .Button': {
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '10px 0',
                    justifyContent: 'flex-start',
                    border: '0',
                    borderRadius: '0',
                    alignItems: 'center',
                    minHeight: '50px',
                    minWidth: '50px',
                    maxHeight: '50px',
                    textTransform: 'none',
                    '& svg': {
                        padding: "10px",
                        width: "30px"
                    },
                    '& > div': {
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        // padding: '0 10px',
                    }
                },
                '& .Button.Menu': {
                    borderBottom: "1px solid silver",
                },
                '& .Button.Tab': {
                    paddingLeft: "30px",
                }
            }}>
                <Typography sx={{
                    height: "60px",
                    borderBottom: "1px solid silver",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 10px",
                    gap: "10px",
                    "& div": {
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    }
                }}>
                    <IconButton Icon={Icon.upload} onClick={() => _isSidebarExpanded(n => !n)}/>
                    <div>{"tanainaidetanainaidetanainaidetanainaidetanainaide"}</div>
                </Typography>
                <Button className={"Button Menu"} fullWidth color={appUrl === "menu-0" ? "secondary" : "primary"}
                        onClick={() => _appUrl("menu-0")}>
                    <Icon.upload fontSize={"small"}/>
                    <div>All Memories</div>
                </Button>
                <Button className={"Button Menu"} fullWidth color={appUrl === "menu-1" ? "secondary" : "primary"}
                        onClick={() => _appUrl("menu-1")}>
                    <Icon.upload fontSize={"small"}/>
                    <div>Not ClassifiedClassifiedClassifiedClassifiedClassified</div>
                </Button>
                <Fading on={isSidebarExpanded}>
                    <Tabs
                        onChange={(event, value) => _appUrl("label-" + value)}
                        orientation={"vertical"}
                        scrollButtons={false}
                        value={getUrl()}
                        variant={"scrollable"}
                        sx={{
                            height: "calc(100% - 204px)",
                            "& .MuiTabs-indicator": {
                                width: "100%",
                                opacity: ".2"
                            }
                        }}
                    >
                        {
                            [
                                "Jazzercise",
                                "Flamenco",
                                "Futurism",
                                "Astrophysics",
                                "Neuroscience",
                                "Hippopotamus",
                                "Kaleidoscope",
                                "Kangaroo",
                                "Euphoria",
                                "Mediterranean",
                                "Tsunami",
                                "Tambourine",
                                "Chrysanthemum",
                                "Succulent",
                                "Alchemy",
                                "Saxophone",
                                "Giraffe",
                                "Rainforest",
                                "Saffron",
                                "Champagne"
                            ].map(v =>
                                <Tab
                                    className={"Button Tab"}
                                    value={v}
                                    label={v}
                                />)
                        }
                    </Tabs>
                </Fading>
                <Fading on={isSidebarExpanded}>
                    <Typography sx={{
                        height: "40px",
                        borderTop: "1px solid silver",
                        display: "flex",
                        alignItems: "center",
                        padding: "0 10px",
                        gap: "8px",
                        overflow: "hidden"
                    }}>
                        <IconButton Icon={Icon.upload} onClick={() => _isSidebarExpanded(n => !n)}/>
                        <IconButton Icon={Icon.upload} onClick={() => _isSidebarExpanded(n => !n)}/>
                        <IconButton Icon={Icon.upload} onClick={() => _isSidebarExpanded(n => !n)}/>
                    </Typography>
                </Fading>
                <Fading on={!isSidebarExpanded}>
                    <Typography sx={{
                        position: "absolute",
                        bottom: 0,
                        width: "50px",
                        flexDirection: "column",
                        display: "flex",
                        alignItems: "center",
                        overflow: "hidden",
                        "& button": {
                            marginBottom: "8px"
                        }
                    }}>
                        <IconButton Icon={Icon.upload} onClick={() => _isSidebarExpanded(n => !n)}/>
                        <IconButton Icon={Icon.upload} onClick={() => _isSidebarExpanded(n => !n)}/>
                        <IconButton Icon={Icon.upload} onClick={() => _isSidebarExpanded(n => !n)}/>
                    </Typography>
                </Fading>
            </Box>
            <Box sx={{
                flex: 1
            }}>
                {appUrl}
            </Box>
        </Page>

    )
}