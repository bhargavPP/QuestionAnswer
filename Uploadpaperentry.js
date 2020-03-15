import React, { Component } from 'react'
import Question from "./Question";
// function getUnique(arr, index) {

//     const unique = arr
//         .map(e => e[index])

//         // store the keys of the unique objects
//         .map((e, i, final) => final.indexOf(e) === i && i)

//         // eliminate the dead keys & store unique objects
//         .filter(e => arr[e]).map(e => arr[e]);

//     return unique;
// }

export class Uploadpaperentry extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Id: 0,
            name: "first",
            QuestionArray: [{}],
            QuestionArrayRes: [{ Question: '' }],
            BranchId: 1,
            PaperName: "",
            Subject: "",
            error: [],
            isFormValid: true,
        }
    }
    componentDidMount() {
        this.PaperNameInput.focus();
    }
    validateForm() {
        let formisValid = true;
        let error = {};
        // console.log(this.state.QuestionArrayRes)
        if (this.state.PaperName === "") {
            formisValid = false;
            this.PaperNameInput.focus();
            error["PaperName"] = "Enter Correct Paper Name";
        } else if (this.state.Subject === "") {
            formisValid = false;
            this.SubjectInput.focus();
            error["Subject"] = "Enter Correct Subject";
        } else if (this.state.BranchId <= 0) {
            formisValid = false;
            this.BranchInput.focus();
            error["BranchId"] = "Select Proper Branch";
        }
        else if (this.state.QuestionArrayRes.length < 0 || this.state.QuestionArrayRes) {

            this.state.QuestionArrayRes.map((q, id) => {

                return formisValid = (q.Question === "" || q.Description === "" || q.Answer === "" ? !formisValid : formisValid)
            })
            if (!formisValid) {
                formisValid = false;
                error["Question"] = "Enter Proper Question Detail";
            }
            else {
                formisValid = true;
                error["Question"] = "";
            }

        }
        else {
            error["PaperName"] = "";
            error["Subject"] = "";
            error["BranchId"] = "";
            error["Question"] = "";
            formisValid = true;
        }

        this.setState({ error, isFormValid: formisValid });
        return formisValid;
    }
    SubmitQuestions = e => {
        e.preventDefault();
        if (this.validateForm()) {

            //            return true;
        } else {
            //          return false;
            //alert("Error");
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    AddQuestion = e => {
        // this.setState({ QuestionArray: this.state.QuestionArray.push(<Question />) });
        this.setState(prevState => ({ QuestionArray: [...prevState.QuestionArray, [{}]] }))
        console.log(this.state)
    }

    myCallback = (datafromChild) => {
        //this.props.handleStateChange(datafromChild);
        console.log(datafromChild)

        this.setState(prevState => ({ QuestionArrayRes: [...prevState.QuestionArrayRes, datafromChild] }));
        // console.log("da", this.state.QuestionArrayRes);
        // console.log("resul", getUnique(this.state.QuestionArrayRes, 'id'))
    }
    renderBlocks = () => {
        return this.state.QuestionArray.map((question, idx) => { return (<Question callbackFromParent={this.myCallback} handleQ={this.handleQ} key={idx + 1} index={idx + 1} />) });//handleQ={this.handleQ.bind(idx + 1)}
    }
    handleQ = (e, index) => {
        e.preventDefault();
        //console.log(e.target.name)
        //console.log(index)
        const val = [...this.state.QuestionArrayRes];

        // console.log(index + ":" + val[index].Question)
        if (e.target.name === 'Question')
            val[index].Question = e.target.value;
        else if (e.target.name === 'Answer')
            val[index].Answer = e.target.value;
        else if (e.target.name === 'Description')
            val[index].Description = e.target.value;

        this.setState({ QuestionArrayRes: val });
        //console.log(this.state.QuestionArrayRes)
    }
    handleOp = (e, index) => {
        //  e.preventDefault();

        const val = [...this.state.QuestionArrayRes.values];
        val[index] = e.target.value;

        this.setState({ QuestionArrayRes: val });
        console.log(this.state.QuestionArrayRes)
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>Upload Paper</h1>
                </div>
                <div className="underline"> </div>
                <div>
                    <form>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <label>Paper Name</label>
                                    </td>
                                    <td >
                                        <input type="text" ref={(input) => { this.PaperNameInput = input; }} className="form-control z-depth-1" name="PaperName" value={this.state.PaperName} onChange={this.handleChange} />
                                    </td>
                                    <td><label>Subject</label></td>
                                    <td><input type="text" ref={(input) => { this.SubjectInput = input; }} name="Subject" className="form-control z-depth-1" value={this.state.Subject} onChange={this.handleChange} /> </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Branch</label>
                                    </td>
                                    <td colSpan="3">
                                        <select
                                            ref={(input) => { this.BranchInput = input; }}
                                            className="form-control z-depth-1"
                                            value={this.state.BranchId}
                                            onChange={e => {
                                                this.setState({ BranchId: e.target.value })
                                            }}
                                        >

                                            <option key={1} value={1}>Branch 1</option>
                                            <option key={2} value={2}>Branch 2</option>
                                            <option key={3} value={3}>Branch 3</option>

                                        </select>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                        &nbsp;
                        <div className="underline" />
                        {/* {
                            this.state.map((item, idx) => ( */}
                        <div className="title">Question Paper</div>
                        {/* <Question index={0} callbackFromParent={this.myCallback} handleQ={this.handleQ} /> */}
                        {this.renderBlocks()}
                        {!this.state.isFormValid ? (
                            <div>
                                <span style={{ color: "Red" }}>{this.state.error["PaperName"]}</span>
                                <span style={{ color: "Red" }}>{this.state.error["Subject"]}</span>
                                <span style={{ color: "Red" }}>{this.state.error["BranchId"]}</span>
                                <span style={{ color: "Red" }}>{this.state.error["Question"]}</span>
                            </div>) : ""}

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
                            onClick={this.AddQuestion}
                        >
                            Next
                    </button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default Uploadpaperentry
