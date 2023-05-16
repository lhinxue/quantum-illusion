import Page from "../wrapper/page";
import {Box, Collapse, Tabs, Typography, useTheme} from "@mui/material";
import {useState} from "react";
import IconButton from "../button/icon_button";
import Icon from "../icon/icon";
import Fading from "../animation/fading";
import SelfButton from "../button/button"
import TextField from "../input/text_field";
import Masonry from "../wrapper/masonry";
import Note from "../display/note";
import Chip from "../display/chip";

export default function UserInteraction({container}) {

    const [isSidebarExpanded, _isSidebarExpanded] = useState(true)
    const [appUrl, _appUrl] = useState(false)
    const [isSearchModePartial, _isSearchModePartial] = useState(true)
    const [isSearchPanelExpanded, _isSearchPanelExpanded] = useState(false)
    const [searchKeyWord, _searchKeyWord] = useState("")
    const [searchLabels,_searchLabels]=useState([])
    const addLabelToSearch = (id) => {
        _searchLabels(labels => {
            if (labels.includes(id)) {
                return labels.filter(label => label !== id);
            } else {
                return labels.concat(id);
            }
        })

    }
    const getUrl = () => {
        if (appUrl && appUrl.startsWith("label-")) {
            return appUrl.replace("label-", "")
        } else {
            return false
        }
    }
    const setUrl = (value) => {
        _appUrl(value)
        clearSearch()
    }

    const setSearchKeyWord = (value) => {
        _searchKeyWord(value)
        _appUrl("")
    }

    const clearSearch = () => {
        _searchKeyWord("")
    }

    const getFilteredMemories = () => {
        if (searchKeyWord) {
            return container.findMemories(searchKeyWord, [])
        } else if (appUrl === "menu-0") {
            return container.memories
        } else if (appUrl === "menu-1") {
            return container.findMemories("", null)
        } else if (getUrl()) {
            return container.findMemories(null, [getUrl()])
        } else {
            return []
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
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                    }
                }}>
                    <IconButton Icon={isSidebarExpanded ? Icon.fold : Icon.unfold}
                                onClick={() => _isSidebarExpanded(n => !n)}
                                style={{color: "white"}} color={"#ffffff"}
                    />
                    <div>{container.name}</div>
                </Typography>
                <SelfButton className={`Button Menu`} fullWidth
                            onClick={() => setUrl("menu-0")}
                            disableRipple={true}
                            active={appUrl === "menu-0"}
                >
                    <Icon.notes fontSize={"small"}/>
                    <div>All Memories</div>
                </SelfButton>
                <SelfButton className={`Button Menu`} fullWidth
                            onClick={() => setUrl("menu-1")}
                            disableRipple
                            active={appUrl === "menu-1"}
                >
                    <Icon.labelless fontSize={"small"}/>
                    <div>Not Classified</div>
                </SelfButton>
                <Fading on={isSidebarExpanded}>
                    <Tabs
                        orientation={"vertical"}
                        scrollButtons={false}
                        value={false}
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
                                    onClick={() => setUrl("label-" + v.id)}
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
                        <IconButton Icon={Icon.setting} onClick={() => _isSidebarExpanded(n => !n)}/>
                        <IconButton Icon={Icon.download} onClick={() => _isSidebarExpanded(n => !n)}/>
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
                        // gap:'12px',
                        "& label": {
                            marginBottom: "7px"
                        }
                    }}>
                        <IconButton Icon={Icon.download} onClick={() => _isSidebarExpanded(n => !n)}/>
                        <IconButton Icon={Icon.setting} onClick={() => _isSidebarExpanded(n => !n)}/>
                    </Typography>
                </Fading>
            </Box>
            <Box sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column"

            }}>
                <Box
                    onMouseEnter={() => _isSearchPanelExpanded(true)}
                    onMouseLeave={() => _isSearchPanelExpanded(false)}
                    sx={{
                        borderBottom: "1px solid silver"
                    }}
                >
                    <Typography sx={{
                        padding: "15px",
display:"flex",alignItems:"center"
                    }}>
                        <TextField
                            disableUnderline
                            value={searchKeyWord}
                            onChange={setSearchKeyWord}

                        />
                        <IconButton Icon={Icon.search}/>
                    </Typography>
                    <Typography
                        style={{
                            borderTop: "1px solid silver",
                            padding: "10px 15px",
                            display: "flex",
                            fontSize: "14px",
                            gap: "10px",
                            alignItems: "center",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            height:'29px'
                        }}
                    >
                        <IconButton Icon={Icon.switch} onClick={() => _isSearchModePartial(n => !n)}/>
                        <div style={{
                            paddingLeft: '5px',
                            width: "90px",
                            cursor: "pointer"
                        }}

                        >Includes {`${isSearchModePartial ? "one" : "all"}`}</div>
                        {
                            container.labels.filter((label)=>searchLabels.includes(label.id)).map((label) =>
                                <Chip data={label}/>
                            )
                        }
                    </Typography>
                    <Collapse orientation="vertical" in={isSearchPanelExpanded} timeout={300}
                              easing={"ease-in-out"}

                    >
                        <Typography
                            style={{
                                padding: "10px 15px",
                                display: "flex",
                                fontSize: "14px",
                                gap: "10px",
                                alignItems: "center",
                                flexDirection: "row",
                                flexWrap: "wrap"
                            }}
                        >

                            {
                                container.labels.map((label) =>
                                    <Chip data={label}  onClick={addLabelToSearch}/>
                                )
                            }
                        </Typography>

                    </Collapse>
                </Box>

                <div style={{flex: 1, width: "100%",}}>
                    <Masonry reRender={isSidebarExpanded}>
                        {
                            getFilteredMemories().map((memory) =>
                                <Note memory={memory} labels={container.labels} searchKeyWord={searchKeyWord}/>
                            )
                        }
                    </Masonry>
                </div>
            </Box>
        </Page>

    )
}