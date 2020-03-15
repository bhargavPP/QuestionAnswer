import React, { Component } from 'react'
import { ExcelRenderer, OutTable } from 'react-excel-renderer';
import CApi from "../Api";
import UItable from "../UserDefineComponent/UItable";
import Tmp from "./Tmp"
export class UploadFile extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            Id: 0,
            name: "first",
            QuestionArray: [],
            QuestionArrayRes: [],
            StdClass: "",
            PaperName: "",
            Subject: "",
            cols: ["Question", "Description", "Answer", "Option1", "option2", "option3", "option4", "option5"],
            rows: "",
            selectedFile: null,
            error: [],
            isFormValid: true,
        }
    }
    componentDidMount() {
        this.PaperNameInput.focus();
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
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
                    rows: resp.rows, selectedFile: fileObj
                });
            }
        });
    }
    clearRecords = () => {
        this.setState({
            Id: 0,
            name: "first",
            QuestionArray: [],
            QuestionArrayRes: [],
            StdClass: "",
            PaperName: "",
            selectedFile: null,
            Subject: "",
            cols: ["Question", "Description", "Answer", "Option1", "option2", "option3", "option4", "option5"],
            rows: "",
        });
    }
    validateForm() {
        let formisValid = true;
        let error = {};

        if (this.state.PaperName === "") {
            formisValid = false;
            this.PaperNameInput.focus();
            error["PaperName"] = "Enter Correct Paper Name";
        } else if (this.state.Subject === "") {
            formisValid = false;
            this.SubjectInput.focus();
            error["Subject"] = "Enter Correct Subject";
        } else if (this.state.StdClass === "") {
            formisValid = false;
            this.StdClassInput.focus();
            error["StdClass"] = "Enter Correct Class";
        }
        else if (this.state.selectedFile === null) {
            formisValid = false;
            this.selectedFile.focus();
            error["selectedFile"] = "please Select Excel File To Upload";
        } else {
            error["PaperName"] = "";
            error["Subject"] = "";
            error["StdClass"] = "";
            error["selectedFile"] = "";

            formisValid = true;

        }
        this.setState({ error, isFormValid: formisValid });
        return formisValid;
    }
    SubmitQuestions = e => {
        e.preventDefault();
        if (this.validateForm()) {
            console.log("fin" + this.state.error["StdClass"]);
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
                    <h1>Upload Paper</h1>
                </div>
                <div className="underline"> </div>
                <div>
                    <form>``
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <label>Paper Name</label>
                                    </td>
                                    <td >
                                        <input type="text" ref={(input) => { this.PaperNameInput = input; }} className="form-control z-depth-1" name="PaperName" value={this.state.PaperName} onChange={e => { this.setState({ PaperName: e.target.value }) }} />

                                    </td>
                                    <td><label>Subject</label></td>
                                    <td><input type="text" ref={(input) => { this.SubjectInput = input; }} name="Subject" className="form-control z-depth-1" value={this.state.Subject} onChange={e => { this.setState({ Subject: e.target.value }) }} /> </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Class</label>
                                    </td>
                                    <td colSpan="3">
                                        <input type="text" ref={(input) => { this.StdClassInput = input; }} name="StdClass" className="form-control z-depth-1" value={this.state.StdClass} onChange={e => { this.setState({ StdClass: e.target.value }) }} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        {/* <a href="/sample_paper_file.xls" download="/sample_paper_file.xls" style={{ color: "blue" }}>Download Sample</a> */}
                        {!this.state.isFormValid ? (
                            <div>
                                <span style={{ color: "Red" }}>{this.state.error["PaperName"]}</span>
                                <span style={{ color: "Red" }}>{this.state.error["Subject"]}</span>
                                <span style={{ color: "Red" }}>{this.state.error["StdClass"]}</span>
                                <span style={{ color: "Red" }}>{this.state.error["selectedFile"]}</span>
                            </div>) : ""}
                        &nbsp;
                        <Tmp /><input type="file" name="file" ref={(input) => { this.selectedFile = input; }} className="btn btn-outline-info waves-effect btn-sm float-left" onChange={this.fileHandler.bind(this)} style={{ "padding": "10px" }} />
                                                &nbsp;
                        <button
                            type="Button"
                            id="Submit"
                            className="btn btn-primary"
                            onClick={this.SubmitQuestions}
                        >
                            Submit
                    </button>&nbsp;<button
                            type="Button"
                            id="Submit"
                            className="btn btn-secondary"
                            onClick={this.clearRecords}
                        >
                            Clear
                    </button>

                    </form>

                    {this.state.rows.length > 0 ?
                        (<UItable data={this.state.rows} cols={this.state.cols} />
                        )
                        // <OutTable data={this.state.rows} columns={this.state.cols} ClassName="handsontable" tableHeaderRowClass="heading" />
                        : console.log(this.state.rows.length)}
                </div>
            </React.Fragment>
        )
    }
}

export default UploadFile
