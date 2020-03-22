/*!

=========================================================
* Now UI Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import { Route, Switch, Redirect } from "react-router-dom";

// core components
import GeneralNavbar from "components/Navbars/GeneralNavbar.jsx";

import routes from "./../routes/general";
import backgroundImage from "./../assets/img/bg14.jpg"

class General extends React.Component {
  state = {
    backgroundColor: "blue"
  };
  mainPanel = React.createRef();
  componentDidMount() {
    console.log(routes);
    // if (navigator.platform.indexOf("Win") > -1) {
    //   ps = new PerfectScrollbar(this.mainPanel.current);
    //   document.body.classList.toggle("perfect-scrollbar-on");
    // }
  }
  componentWillUnmount() {
    // if (navigator.platform.indexOf("Win") > -1) {
    //   ps.destroy();
    //   document.body.classList.toggle("perfect-scrollbar-on");
    // }
  }
  componentDidUpdate(e) {
    // if (e.history.action === "PUSH") {
    //   this.mainPanel.current.scrollTop = 0;
    //   document.scrollingElement.scrollTop = 0;
    // }
  }
  handleColorClick = color => {
    // this.setState({ backgroundColor: color });
  };
  render() {
    return (
        <div>
          <GeneralNavbar/>
      <div className="wrapper wrapper-full-page">

          {/*<switch>*/}
          {/*  {routes.map((prop,key)=>{*/}
          {/*    return <Route*/}
          {/*        path={prop.path}*/}
          {/*        component={prop.component}*/}
          {/*        key={key}*/}
          {/*      />*/}
          {/*  })}*/}
          {/*</switch>*/}
          {/*<DemoNavbar {...this.props} />*/}
          {/*<Switch>*/}
          {/*  {routes.map((prop, key) => {*/}
          {/*    return (*/}
          {/*      <Route*/}
          {/*        path={prop.layout + prop.path}*/}
          {/*        component={prop.component}*/}
          {/*        key={key}*/}
          {/*      />*/}
          {/*    );*/}
          {/*  })}*/}
          {/*  <Redirect from="/" to="/login" />*/}
          {/*</Switch>*/}
          {/*<Footer fluid />*/}
        {/*<FixedPlugin*/}
        {/*  bgColor={this.state.backgroundColor}*/}
        {/*  handleColorClick={this.handleColorClick}*/}
        {/*/>*/}
        <div className="full-page section-image" filter-color="yellow">
          <div className="content">
            <switch>
              {routes.map((prop,key)=>{
                return <Route
                    path={prop.path}
                    component={prop.component}
                    key={key}
                  />
              })}
            </switch>
          </div>
          <div className="full-page-background" style={{backgroundImage:'url('+backgroundImage+')'}}></div>
        </div>

      </div>
        </div>
    );
  }
}

export default General;
