import React, { forwardRef } from 'react';
import MaterialTable from 'material-table';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import GetAppSharp from '@material-ui/icons/GetAppSharp';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { CSVDownload, CSVLink } from "react-csv";
import Tmp from "./Tmp"

// const [state, setState] = React.useState({
//     columns: [
//         { title: 'Branch', field: 'Branch' },
//         { title: 'Subject', field: 'Subject' },
//         { title: 'PaperName', field: 'PaperName' },
//         //{ title: 'Birth Year', field: 'birthYear', type: 'numeric' },
//     ],
//     data: [
//         { Branch: 'Mehmet', Subject: 'Baran', PaperName: 'Test' },
//         {
//             Branch: 'Zerya Betül',
//             Subject: 'Baran',
//             PaperName: "Test2"
//         },
//     ],
// });

function UploadedPaper() {
    const tableIcons = {
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        //   Edit: forwardRef((props, ref) => <GetAppSharp {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        Remove: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };

    const columns = [
        { title: "Branch", field: "Branch" },
        { title: "Subject", field: "Subject" },
        { title: "PaperName", field: "PaperName" }
        //{ title: 'Birth Year', field: 'birthYear', type: 'numeric' },
    ];
    const datas = [
        { Branch: "Mehmet", Subject: "Baran", PaperName: "Test" },
        { Branch: "Zerya Betül", Subject: "Baran", PaperName: "Test2" }
    ];
    return (
        <React.Fragment>
            <div>
                <h1>Uploaded Paper</h1>
            </div>
            <div className="underline"> </div>

            <MaterialTable
                title="Uploaded Papers"
                columns={columns}
                data={datas}
                icons={tableIcons}
                options={{
                    exportButton: true,
                    // exportCsv: (columns, data) => {
                    //     alert('You should develop a code to export ' + data.length + ' rows');
                    // }
                    headerStyle: {
                        backgroundColor: '#3f3f3f',
                        color: '#fff'
                    }
                }}
                actions={[
                    {
                        icon: ArrowDownward,
                        tooltip: 'Download',
                        onClick: (event, rowData) => {
                            event.preventDefault();
                            return (< CSVLink data={datas} headers={columns} />)
                        }
                        //     return (
                        //alert('You should develop a code to export ' + rowData + ' rows');
                        // console.log(state.data)
                        //console.log(rowData)
                        //    )
                        // }
                    }

                ]}
                editable={{
                    // onRowAdd: newData =>
                    //     new Promise(resolve => {
                    //         setTimeout(() => {
                    //             resolve();
                    //             setState(prevState => {
                    //                 const data = [...prevState.data];
                    //                 data.push(newData);
                    //                 return { ...prevState, data };
                    //             });
                    //         }, 600);
                    //     }),
                    onRowDelete: oldData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                this.setState(prevState => {
                                    const data = [...prevState.data];
                                    data.splice(data.indexOf(oldData), 1);
                                    return { ...prevState, data };
                                });
                            }, 600);
                        }),
                    // onRowUpdate: (newData, oldData) =>
                    //     new Promise(resolve => {
                    //         setTimeout(() => {
                    //             resolve();
                    //             if (oldData) {
                    //                 setState(prevState => {
                    //                     const data = [...prevState.data];
                    //                     data[data.indexOf(oldData)] = newData;
                    //                     return { ...prevState, data };
                    //                 });
                    //             }
                    //         }, 600);
                    //     }),
                    // onRowExport: (newData, oldData) =>
                    //     new Promise(resolve => {
                    //         setTimeout(() => {
                    //             resolve();
                    //             if (oldData) {
                    //                 this.setState(prevState => {
                    //                     const data = [...prevState.data];
                    //                     data[data.indexOf(oldData)] = newData;
                    //                     return { ...prevState, data };
                    //                 });
                    //             }
                    //             console.log("ca")
                    //         }, 600);
                    //     }),

                }}
            />

        </React.Fragment >

    );

}
export default UploadedPaper;