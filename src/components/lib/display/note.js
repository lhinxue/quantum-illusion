import Button from "../button/button";
import Chip from "./chip";

export default function Note({memory, labels, searchKeyWord,...props}) {
    return (
        <Button style={{
            border: "1px solid silver",
            borderRadius: "1em",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "10px",
            backgroundColor: "white",
            boxShadow: '2px 2px 6px 0px rgba(70, 70, 70, 0.1)',
            "& .Content": {
                fontSize: "13px"
            },
            "& .Labels": {
                display: "flex",
                fontSize: "14px",
                gap: "5px",
                alignItems: "center",
                flexDirection: "row",
                flexWrap: "wrap"
            }
        }} {...props}>
            <div className={"Title"} dangerouslySetInnerHTML={{__html: memory.highlightTitleMatch(searchKeyWord)}}/>
            <div className={"Content"} dangerouslySetInnerHTML={{__html: memory.highlightContentMatch(searchKeyWord)}}/>
            <div className={"Labels"}>
                {
                    labels.filter((label) => memory.labels.includes(label.id))
                        .map((label) =>
                            <Chip data={label}/>
                        )
                }
            </div>
        </Button>
    )
}