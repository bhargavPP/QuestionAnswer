import React from 'react'
import { CSVLink } from "react-csv";
function ResultSample() {//upload sample Result file format
    const headers = [
        { label: "Email", key: "Email" },
        { label: "Subject", key: "Subject" },
        { label: "Marks", key: "Marks" },
        { label: "Total", key: "Total" }
    ];

    const data = [
        //{ Question: "", Description: "Tomi", Answer: "ahsmthingm", Option1: "Op1", Option2: "Op2", Option3: "Op3", Option4: "Op4", Option5: "Op5" }
        {}
    ];
    return (
        <div >
            <CSVLink filename="Sample_Student_Result.xls" data={data} headers={headers}>
                <span style={{ color: "blue", display: "inline-block", marginLeft: "15px" }}>   Download Result Sample</span>
            </CSVLink>
        </div>
    )
}

export default ResultSample
