import React from 'react'
import Paper from '@material-ui/core/Paper';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
import {
    Chart,
    PieSeries,
} from '@devexpress/dx-react-chart-material-ui';
import Barchart from "../Exams/Barchart";
const data = [
    { PaperCount: '1950', Count: 2 },
    { PaperCount: '1960', Count: 3 },
    { PaperCount: '1970', Count: 3 },
    { PaperCount: '1980', Count: 4 },

];

function HeaderChart() {
    return (
        <React.Fragment>
            <h1>Question Paper Uploaded Status</h1>
            < div style={{ display: "-webkit-box" }
            }>

                <div style={{ width: "40%", display: "inline-block", float: "left" }}>

                    <Paper>
                        <Chart
                            data={data}
                        >
                            <PieSeries
                                valueField="Count"
                                argumentField="PaperCount"
                            />
                        </Chart>
                    </Paper>
                </div>
                <Barchart />
            </div >
        </React.Fragment>
    )
}

export default HeaderChart
