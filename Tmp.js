import React from 'react'
import { CSVLink } from "react-csv";
function Tmp() {//upload file format
    const headers = [
        { label: "Question", key: "Question" },
        { label: "Description", key: "Description" },
        { label: "Answer", key: "Answer" },
        { label: "Option1", key: "Option1" },
        { label: "Option2", key: "Option2" },
        { label: "Option3", key: "Option3" },
        { label: "Option4", key: "Option4" },
        { label: "Option5", key: "Option5" }
    ];

    const data = [
        //{ Question: "", Description: "Tomi", Answer: "ahsmthingm", Option1: "Op1", Option2: "Op2", Option3: "Op3", Option4: "Op4", Option5: "Op5" }
        {}
    ];
    return (
        <div >
            <CSVLink filename="Sample Paper.xls" data={data} headers={headers}>
                <span style={{ color: "blue", display: "inline-block", marginLeft: "15px" }}>   Download Sample</span>
            </CSVLink>
        </div>
    )
}

export default Tmp
