import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import { ButtonToolbar } from 'react-bootstrap';
import NavigationAPI from '../api/navigationAPI'
import { connect } from 'react-redux'
import { Nav } from 'react-bootstrap';


const mapStateToProps = (state) => ({
})

class Login extends Component {




  render() {
    console.log("Start render Login widget")
    // const buttonsInstance = (
    // <ButtonToolbar>
    //     {/* Standard button */}
    //     <Button>Default</Button>
    //     <Button bsStyle="primary"  onClick={() => this.reloadNavigationData()}>Re-Load Navigation Data</Button>
    // </ButtonToolbar>
    // );

    return (

       <Nav pullRight>
            <button className="btn btn-default login-btn">
                     <span className="glyphicon glyphicon-user"  aria-hidden="true"></span>
           </button> 
        </Nav>    
    );
  }
}


export default connect(mapStateToProps)(Login)