import Page from "../wrapper/page";
import {Accordion, AccordionDetails, AccordionSummary, Box, Collapse, Tabs, Typography, useTheme} from "@mui/material";
import {useState} from "react";
import IconButton from "../button/icon_button";
import Icon from "../icon/icon";
import Fading from "../animation/fading";
import SelfButton from "../button/button"
import TextField from "../input/text_field";

export default function UserInteraction({container}) {

    const [isSidebarExpanded, _isSidebarExpanded] = useState(true)
    const [appUrl, _appUrl] = useState(false)
    const [isSearchModePartial,_isSearchModePartial]=useState(true)
    const [isSearchPanelExpanded, _isSearchPanelExpanded] = useState(false)

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
                    padding: '10px 10px 10px 0',
                    justifyContent: 'flex-start',
                    border: '0',
                    borderRadius: '0',
                    alignItems: 'center',
                    height: "50px",
                    fontSize: "14px",
                    boxSizing: "border-box",
                    minHeight: '50px',
                    minWidth: '50px',
                    maxHeight: '50px',
                    textTransform: 'none',
                    transition: "background-color .3s ease-in-out",
                    '& svg': {
                        padding: "10px",
                        width: "30px"
                    },
                    '& > div': {
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
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

                    backgroundColor: theme.palette.primary.main,
                    color: "white",
                    "& div": {
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    }
                }}>
                    <IconButton Icon={Icon.upload} onClick={() => _isSidebarExpanded(n => !n)}
                                style={{color: "white"}} color={"#ffffff"}
                    />
                    <div>{container.name}</div>
                </Typography>
                <SelfButton className={`Button Menu`} fullWidth
                            onClick={() => _appUrl("menu-0")}
                            disableRipple={true}
                            active={appUrl === "menu-0"}
                >
                    <Icon.upload fontSize={"small"}/>
                    <div>All Memories</div>
                </SelfButton>
                <SelfButton className={`Button Menu`} fullWidth
                            onClick={() => _appUrl("menu-1")}
                            disableRipple
                            active={appUrl === "menu-1"}
                >
                    <Icon.upload fontSize={"small"}/>
                    <div>Not Classified</div>
                </SelfButton>
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
                                opacity: "0"
                            }
                        }}
                    >
                        {
                            container.labels.map(v =>
                                <SelfButton
                                    className={`Button Tab`}
                                    active={getUrl() === v.id}
                                    onClick={() => _appUrl("label-" + v.id)}
                                    disableRipple
                                >
                                    {v.name}
                                </SelfButton>)
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
                flex: 1,
                display:"flex",
                flexDirection:"column"

            }}>
                <Box
                    onMouseEnter={() => _isSearchPanelExpanded(true)}
                    onMouseLeave={() => _isSearchPanelExpanded(false)}
                    sx={{
                        borderBottom:"1px solid silver"
                    }}
                >
                    <Typography sx={{
                        padding:"15px",

                    }}>
                        <TextField
                            disableUnderline
                            endIcon={<IconButton Icon={Icon.upload} onClick={() => _isSidebarExpanded(n => !n)}/>}/>
                    </Typography>
                    <Collapse orientation="vertical" in={isSearchPanelExpanded} timeout={300}
                              easing={"ease-in-out"}

                    >
                        <Typography
                        style={{
                            borderTop:"1px solid silver",
                            padding:"10px 15px",
                            display:"flex",
                            fontSize:"14px",
                            gap:"10px",
                        }}
                        >
                            <IconButton Icon={Icon.upload} onClick={()=>_isSearchModePartial(n=>!n)}/>
                            <div style={{paddingLeft:'5px',
                            width:"90px",
                                cursor:"pointer"
                            }}

                            >Includes {`${isSearchModePartial?"one":"all"}`}</div>
                            {
                                container.labels.map((label) =>
                                    <Typography

                                        sx={{
                                            fontSize: "13px",
                                            border: "1px solid",
                                            padding: "1px 5px",
                                            borderRadius: "1em",
                                            width: "fit-content"
                                        }}
                                    >
                                        {label.name}
                                    </Typography>
                                )
                            }
                        </Typography>

                    </Collapse>
                </Box>

                <div style={{flex: 1, background: "azure"}}></div>
            </Box>
        </Page>

    )
}