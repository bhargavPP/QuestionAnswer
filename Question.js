import React from 'react'
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
class Question extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.index,
            Question: '',
            Description: '',
            Answer: '',
            values: [],
        }

    }
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
        this.setState({ [e.target.name]: e.currentTarget.value });
        console.log("child", this.state) // SO why yu are logging here 
        //this.props.callbackFromParent(this.state);
    }
    render() {
        return (
            <div>
                <div className="subtitle">Question {this.props.index}</div>
                <div style={{ display: "inline-flex", paddingLeft: "15px" }}>
                    <div>
                        <label style={{ width: "100px" }}>Question</label>
                    </div>
                    <div><textarea type="textarea" onChange={e => { this.props.handleQ(e, this.props.index) }} name="Question" style={{ width: "760px", resize: "both" }} className="form-control dept-z-1" /> </div>
                </div><br />
                <div style={{ display: "inline-flex", paddingLeft: "15px" }}>
                    <div><label style={{ width: "100px" }}>Description</label></div>
                    <div><textarea name="Description" onChange={e => { this.props.handleQ(e, this.props.index) }} style={{ width: " 760px", resize: "both" }} className="form-control dept-z-1" /></div>
                </div><br />
                <div style={{ display: "inline-flex", paddingLeft: "15px" }}>
                    <div><label style={{ width: "100px" }}>Answer</label></div>
                    <div><textarea name="Answer" onChange={e => { this.props.handleQ(e, this.props.index) }} style={{ width: "760px", resize: "both" }} className="form-control dept-z-1" /> </div>
                </div>
                <br />{this.createUI()}
                <br />
                <button type="Button" style={{ cursor: "pointer", display: "inline-flex" }}
                    onClick={this.addRadio.bind(this)}
                >Add Option</button>
            </div>
        )
    }
}
export default Question;
