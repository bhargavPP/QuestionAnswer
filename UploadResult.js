import React, { Component } from 'react'
import { ExcelRenderer, OutTable } from 'react-excel-renderer';
import CApi from "../Api";
import UItable from "../UserDefineComponent/UItable";
import ResultSample from "./ResultSample"
export class UploadResult extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Id: 0,
            QuestionArray: [],
            QuestionArrayRes: [],
            cols: ["Question", "Description", "Answer", "Option1", "option2", "option3", "option4", "option5"],
            rows: "",
            SelectedFile: null,
            isFormValid: true,
            error: [],
        }
    }
    fileHandler = (event) => {
        let fileObj = event.target.files[0];
        //just pass the fileObj as parameter
        ExcelRenderer(fileObj, (err, resp) => {

            if (err) {
                alert(err);
            }
            else {

                this.setState({
                    cols: resp.cols,
                    rows: (resp.rows),
                    SelectedFile: resp.rows,
                });
            }
        });
    }
    clearRecords = () => {
        this.setState({
            Id: 0,

            QuestionArray: [],
            QuestionArrayRes: [],
            cols: ["Question", "Description", "Answer", "Option1", "option2", "option3", "option4", "option5"],
            rows: "",
            SelectedFile: null,
        });
    }
    validateForm() {
        let formisValid = true;
        let error = {};
        console.log("selected" + this.state.selectedFile);
        if (!this.state.rows) {
            formisValid = false;
            this.selectedFile.focus();
            error["selectedFile"] = "please Select Excel File To Upload";
        } else {
            error["selectedFile"] = "";
            formisValid = true;
        }
        this.setState({ error, isFormValid: formisValid });
        return formisValid;
    }
    SubmitResult = e => {
        e.preventDefault();
        if (this.validateForm()) {
            console.log("fin" + this.state.error["SelectedFile"]);
            //            return true;
        } else {
            //          return false;
            //alert("Error");
        }
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>Upload Student Result</h1>
                </div>
                <div className="underline"> </div>
                <div>
                    <form>

                        {/* <a href="/sample_paper_file.xls" download="/sample_paper_file.xls" style={{ color: "blue" }}>Download Sample</a> */}
                        {!this.state.isFormValid ? (
                            <div>
                                <span style={{ color: "Red" }}>{this.state.error["selectedFile"]}</span>
                            </div>) : ""}
                        &nbsp;
                        <ResultSample /><input name="file" ref={(input) => { this.selectedFile = input; }} className="btn btn-outline-info waves-effect btn-sm float-left" type="file" onChange={this.fileHandler.bind(this)} style={{ "padding": "10px" }} />
                                                &nbsp;

                        <button
                            type="Button"
                            id="Submit"
                            className="btn btn-primary"
                            onClick={this.SubmitResult}
                        >
                            Submit
                    </button>
                        {/* &nbsp;<button
                            type="Button"
                            id="Submit"
                            className="btn btn-secondary"
                            onClick={this.clearRecords}
                        >
                            Clear
                    </button> */}
                    </form>
                    <br />
                    {this.state.rows.length > 0 ?
                        (<UItable data={this.state.rows} cols={this.state.cols} />
                        )
                        // <OutTable data={this.state.rows} columns={this.state.cols} ClassName="handsontable" tableHeaderRowClass="heading" />
                        : console.log("")}
                </div>
            </React.Fragment>
        )
    }
}

export default UploadResult
