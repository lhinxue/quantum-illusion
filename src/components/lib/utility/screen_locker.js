import Page from "../wrapper/page";

export default function ScreenLocker({on}) {
    return (
        <Page style={{zIndex: 99999, display: on ? "block" : "none"}}/>
    )
}