import React from 'react';
import MaterialTable from 'material-table';

export default function UploadedPapers() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Branch', field: 'Branch' },
            { title: 'Subject', field: 'Subject' },
            { title: 'PaperName', field: 'PaperName' },
            //{ title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        ],
        data: [
            { Branch: 'Mehmet', Subject: 'Baran', PaperName: "Test" },
            {
                Branch: 'Zerya Betül',
                Subject: 'Baran',
                PaperName: "Test2"
            },
        ],
    });

    return (
        <MaterialTable
            title="Uploaded Papers"
            columns={state.columns}
            data={state.data}
            options={{
                exportButton: true
            }}
            editable={{
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data];
                                data.push(newData);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState(prevState => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
            }}
        />
    );
}