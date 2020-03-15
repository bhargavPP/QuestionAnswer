import React from "react";
import Uploadpaperentry from "./Uploadpaperentry";
import UploadpaperDetail from "./UploadpaperDetail";
import ErrorBoundry from "../ErrorBoundry";

class UploadPaperHead extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: "",
            Flage: false
        };
    }
    getData = rowData => {
        this.setState({
            data: rowData,
            Flage: false
        });
    };
    onUpdate(data) {
        this.setState({
            Flage: data
        });

        return;
    }
    render() {

        return (
            <React.Fragment>
                <ErrorBoundry>
                    {this.state.data ? (
                        <Uploadpaperentry
                            handleClick={this.getData}
                            data={this.state.data}
                            onUpdates={
                                this.onUpdate.bind(this)
                            }
                        />
                    ) : (
                            <Uploadpaperentry onUpdates={
                                this.onUpdate.bind(this)
                            } />
                        )}
                </ErrorBoundry>
                <ErrorBoundry>
                    <UploadpaperDetail
                        handleClick={this.getData.bind(this)}
                        onUpdate={this.onUpdate.bind(this)}
                        UpdateComp={this.state.Flage}
                    />
                </ErrorBoundry>
            </React.Fragment>
        );
    }
}

export default UploadPaperHead;
