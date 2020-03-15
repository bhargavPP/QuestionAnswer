import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "../App.css";
import "../Css/ChildComponent.css";
import "../Css/Menu.css";
import ToggleOnIcon from "@material-ui/icons/ToggleOn";
import ToggleOffIcon from "@material-ui/icons/ToggleOff";
import UploadPaperHead from "../Components/Exams/UploadPaperHead";
import UploadFile from "../Components/Exams/UploadFile";
import UploadedPaper from "../Components/Exams/UploadedPaper";
import UploadResult from "../Components/Exams/UploadResult";
import HeaderChart from "../Components/Exams/HeaderChart";
//import CheckIcon from '@material-ui/icons/Check';
//import ToggleButton from '@material-ui/lab/ToggleButton';
export class Menu extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      isDropdown: false,
      isIn: false,
      areaexpanded: false,
      areaExpandedpara: false,
      areaExpandedstock: false,
      areaExpandedComp: false,
      title: ""//,
      //      Permmision: []
    };
  }

  handleClick = () => {
    this.setState({ isClicked: !this.state.isClicked, isIn: !this.state.isIn });
    //this.isClicked = !this.isClicked;
  };

  // componentDidMount() {
  //   axios
  //     .post(`${[Api]}/tblUser/GetUserPermission/`, { id: this.state.UserId })
  //     .then(res => {
  //       this.setState({ Permmision: res.data });
  //     })
  //     .catch(function (error) {
  //       console.log("error", error);
  //     })

  // }
  handleDropdown = () => {
    this.setState({ isDropdown: !this.state.isClicked });
  };
  // expandMenu = () => {
  //   this.setState({ areaexpanded: !this.state.areaexpanded, areaExpandedpara: false, areaExpandedstock: false, areaExpandedComp: false });
  // };
  // expandParaMenu = () => {
  //   this.setState({ areaExpandedpara: !this.state.areaExpandedpara, areaexpanded: false, areaExpandedstock: false, areaExpandedComp: false });
  // };
  // expandstockMenu = () => {
  //   this.setState({ areaExpandedstock: !this.state.areaExpandedstock, areaexpanded: false, areaExpandedpara: false, areaExpandedComp: false });
  // };
  // expandCompMenu = () => {
  //   this.setState({ areaExpandedComp: !this.state.areaExpandedComp, areaExpandedstock: false, areaexpanded: false, areaExpandedpara: false });
  // };
  // logout = () => {
  //   localStorage.removeItem("UserInfo");
  //   this.props.history.push("./");
  // };
  // setTitle(currentPage) {
  //   this.setState({ title: currentPage });
  // }
  render() {
    const toggleClassName = this.state.isClicked ? "active" : "";

    const toggledropdown = this.state.areaexpanded
      ? "dropdown-toggle collapsed"
      : "dropdown-toggle";
    const toggledUlropdown = this.state.areaexpanded
      ? "list-unstyled collapse show"
      : "list-unstyled collapse ";
    const toggledropdownpara = this.state.areaExpandedpara
      ? "dropdown-toggle collapsed"
      : "dropdown-toggle";
    const toggledUlropdownpara = this.state.areaExpandedpara
      ? "list-unstyled collapse show"
      : "list-unstyled collapse ";
    const toggledropdownstock = this.state.areaExpandedstock
      ? "dropdown-toggle collapsed"
      : "dropdown-toggle";
    const toggledUlropdownstock = this.state.areaExpandedstock
      ? "list-unstyled collapse show"
      : "list-unstyled collapse ";
    const toggledUlropdowncomp = this.state.areaExpandedComp
      ? "list-unstyled collapse show"
      : "list-unstyled collapse ";
    const toggledropdowncomp = this.state.areaExpandedComp
      ? "dropdown-toggle collapsed"
      : "dropdown-toggle";
    //const areaExpanded = this.state.areaexpanded ? true : false;
    //const areaExpandedpara = this.state.areaExpandedpara ? true : false;
    //const areaExpandedstock = this.state.areaExpandedstock ? true : false;
    return (
      <div className="wrapper">
        <nav id="sidebar" className={toggleClassName}>
          <div className="sidebar-header">
            <h3 style={{ textAlign: "center" }}>Demo</h3>
          </div>

          <Link to="/Menu/UploadPaperHead"   >
            Upload Paper
          </Link>
          <Link to="/Menu/UploadedPaper"   >
            Uploaded Paper
          </Link>
          <Link to="/Menu/UploadFile"   >
            Upload File
          </Link>
          <Link to="/Menu/UploadResult"   >
            Upload Result
          </Link>

          {/* <li className="active" key={4}> 
            <Link to="/"  >
              Logout
              </Link>
          </li> */}

        </nav>
        <div id="content">
          <nav  >
            <button
              type="checkbox"
              checked
              data-toggle="toggle"
              data-onstyle="primary"
              id="sidebarCollapse"
              className="btn btn-info "
              onClick={this.handleClick}
            >
              {!this.state.isClicked ? <ToggleOnIcon /> : <ToggleOffIcon />}
              <i className="fas fa-align-left"></i>
              <span className="sr-only">Toggle Sidebar</span>
            </button>
            {/* <ToggleButton
              value="check"
              selected={this.state.isClicked}
              onChange={() => {
                this.setState({ isClicked: !this.state.isClicked })
              }}
            >
              <CheckIcon />
            </ToggleButton> */}
          </nav>
          {/* <UserInfoContextProvider> */}
          <HeaderChart />
          <Switch>
            <Route path={"/Menu/UploadPaperHead"} component={UploadPaperHead} />
            <Route path={"/Menu/UploadFile"} component={UploadFile} />
            <Route path={"/Menu/UploadedPaper"} component={UploadedPaper} />
            <Route path={"/Menu/UploadResult"} component={UploadResult} />

            {/* <Route path={"/Menu/HeadOffice"} component={HeadOffice} />
              <Route path={"/Menu/Office"} component={Office} />
              <Route path={"/Menu/ParaHead"} component={ParaHead} />
              <Route path={"/Menu/ParaAns"} component={ParaAns} />
              <Route path={"/Menu/ParaReview"} component={ParaReview} />
              <Route path={"/Menu/ParaReport"} component={ParaReport} />
              <Route path={"/Menu/ScheduleHead"} component={ScheduleHead} />
              <Route path={"/Menu/BranchesHead"} component={BranchesHead} />
              <Route path={"/Menu/CategoryHead"} component={CategoryHead} />
              <Route path={"/Menu/SubcategoryHead"} component={SubcategoryHead} />
              <Route path={"/Menu/InwardStockHead"} component={InwardStockHead} />
              <Route path={"/Menu/IssueRecStockHead"} component={IssueRecStockHead} />
              <Route path={"/Menu/BalanceStock"} component={BalanceStockReport} />
              <Route path={"/Menu/DesignationHead"} component={DesignationHead} />
              <Route path={"/Menu/UserHead"} component={UserHead} />
              <Route path={"/Menu/ComplainHead"} component={ComplainHead} />
              <Route path={"/Menu/ComplainReportAgency"} component={ComplainReportAgency} /> */}

          </Switch>
          {/* </UserInfoContextProvider> */}

        </div>
      </div >
    );
  }
}

export default Menu;
