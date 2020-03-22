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

// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
    CardFooter,
  CardTitle,
  Table,
  Row,
  Col,
    Container,
    Form,
    FormGroup,
    FormText,
    Input,
    InputGroup,
    InputGroupText,
    Button,
} from "reactstrap";


// core components
// import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

import { thead, tbody } from "variables/general";
import {Link} from "react-router-dom";

class RegularTables extends React.Component {
  render() {
    return (
      <>
        {/*<PanelHeader size="sm" />*/}
        <div className="login-page">
          <Container>
            <div className="ml-auto mr-auto col-12 col-md-8 col-lg-4">
              <Form>
                <Card className="card-login card-plain">
                  <CardHeader>
                    <CardTitle style={{color:'#fff'}}>Login</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <InputGroup className="no-border form-control-lg">
                      <div className="input-group-prepend">
                        <InputGroupText><i className="now-ui-icons users_circle-08"></i></InputGroupText>
                      </div>
                      <Input type="text" name="text" placeholder="Login"/>
                    </InputGroup>
                    <InputGroup className="no-border form-control-lg">
                      <div className="input-group-prepend">
                        <InputGroupText><i className="now-ui-icons text_caps-small"></i></InputGroupText>
                      </div>
                      <Input type="password" name="password" placeholder="Password"/>
                    </InputGroup>

                  </CardBody>
                  <CardFooter>
                    <Button className="mb-3 btn-round btn-primary btn-lg btn-block">Get Started</Button>
                    <div className="pull-left">
                      <Link className="link footer-link" to="/register">Create Account</Link>
                    </div>
                    <div className="pull-right">
                      <Link className="link footer-link" to="/forgot-password">Forgot Password?</Link>
                    </div>
                  </CardFooter>
                </Card>
              </Form>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default RegularTables;
