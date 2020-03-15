import React from 'react'
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
class Question extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.index,
            Question: "",
            Description: "",
            Answer: "",
            values: [],
        }
    }

    // someFn = () => {
    //     this.props.callbackFromParent(this.state);
    // }
    createUI() {

        return this.state.values.map((el, i) =>
            <div key={i} style={{ display: "inline-flex" }}>
                {/* <input type="radio" className="form-control" value={el || ''} onChange={this.handleChange.bind(this, i)} /> */}
                <div name={i} style={{ display: "inline-flex", marginTop: "5px" }}>Option{i + 1} </div>
                <input type="text" name={i} className="form-control" value={el || ''} onChange={this.handleChange.bind(this, i)} />
                <DeleteIcon style={{ cursor: "pointer", display: "inline-flex", marginTop: "5px" }} onClick={this.removeClick.bind(this, i)} />
                {/* <DeleteIcon style={{ cursor: "pointer" }}onClick={() => props.handleClick(item)} ></DeleteIcon> */}
            </div>
        )
    }
    addRadio() {
        this.setState(prevState => ({ values: [...prevState.values, ''] }))
    }
    removeClick(i) {
        let values = [...this.state.values];
        values.splice(i, 1);
        this.setState({ values });
    }
    handleChange(i, event) {
        let values = [...this.state.values];
        values[i] = event.target.value;
        this.setState({ values });
        //console.log("questionstate", this.state);
        this.props.callbackFromParent(this.state);
    }
    handleState(e) {
        this.setState({ [e.target.name]: e.target.value });
        this.props.callbackFromParent(this.state);
    }
    render() {
        return (
            <div>
                <div className="subtitle">Question {this.props.index}</div>
                <div style={{ display: "inline-flex", paddingLeft: "15px" }}>
                    <div>
                        <label style={{ width: "100px" }}>Question</label>
                    </div>
                    <div><textarea type="textarea" onChange={this.handleState.bind(this)} name="Question" style={{ width: "760px", resize: "both" }} className="form-control dept-z-1" /> </div>
                </div><br />
                <div style={{ display: "inline-flex", paddingLeft: "15px" }}>

                    <div><label style={{ width: "100px" }}>Description</label></div>
                    <div><textarea name="Description" onChange={this.handleState.bind(this)} style={{ width: " 760px", resize: "both" }} className="form-control dept-z-1" /></div>
                </div><br />
                <div style={{ display: "inline-flex", paddingLeft: "15px" }}>
                    <div><label style={{ width: "100px" }}>Answer</label></div>
                    <div><textarea name="Answer" onChange={this.handleState.bind(this)} style={{ width: "760px", resize: "both" }} className="form-control dept-z-1" /> </div>
                </div>
                {/* <table>
                    <tbody>
                        <tr>
                            <td><label>Question</label></td>
                            <td colSpan="2"><textarea name="Question`" style={{ width: " calc(250px + 100vw - 1024px)!important;", resize: "both" }} className="form-control dept-z-1" /> </td>
                            <td ><label>Description</label></td>
                            <td colSpan="2"><textarea name="Description" style={{ width: " calc(250px + 100vw - 1024px)!important;", resize: "both" }} className="form-control dept-z-1" /> </td>
                        </tr>
                        <tr>
                            <td><label>Answer</label></td>
                            <td colSpan="2" ><textarea name="Answer`" style={{ width: " calc(250px + 100vw - 1024px)!important", resize: "both" }} className="form-control dept-z-1" /> </td>
                        </tr>
                        <tr>
                            <td colSpan="4">  { */}
                <br />{this.createUI()}
                {/* <td> <input
                                    type="radio"
                                    id="1"
                                    name="rdOption1"
                                    value="rdOption1"
                                //onChange={this.handlechange}
                                //checked={this.state.selectedOption === "A"}
                                />
                                    <label for="rdoption1">Option1</label>
                                    <input id="2"
                                        type="radio"
                                        name="rdoption2"
                                        value="rdoption2"
                                    //onChange={this.handlechange}
                                    //checked={this.state.selectedOption === "A"}
                                    />
                                    <label for="rdoption2">Option2</label> */}
                <br />
                <button type="Button" style={{ cursor: "pointer", display: "inline-flex" }}
                    onClick={this.addRadio.bind(this)}
                >Add Option</button>
                {/* <AddIcon style={{ cursor: "pointer", display: "inline-flex" }}
                    onClick={this.addRadio.bind(this)}
                ></AddIcon> */}
                {/* <DeleteIcon style={{ cursor: "pointer" }}
                                    // onClick={() => props.handleClick(item)}
                                    ></DeleteIcon> */}
                {/* </td>
                        </tr>
                    </tbody>
                </table> */}
                {/* <div style={{ display: "inline-flex" }}>
                    <label>Question</label>
                    <textarea style={{ width: " calc(250px + 100vw - 1024px)!important;", resize: "both" }} className="form-control dept-z-1" />
                </div> */}

            </div>
        )
    }
}
export default Question;
