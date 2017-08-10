import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

import { ButtonToolbar } from 'react-bootstrap';
import NavigationAPI from '../api/navigationAPI'
import { connect } from 'react-redux'


const mapStateToProps = (state) => ({
})

class Reloader extends Component {

  reloadNavigationData(){
    const { dispatch } = this.props
    NavigationAPI.loadRootNavigationDataMock(dispatch)
  }


  render() {
    console.log("Start render reloader widget")
    const buttonsInstance = (
    <ButtonToolbar>
        {/* Standard button */}
        <Button>Default</Button>
        <Button bsStyle="primary"  onClick={() => this.reloadNavigationData()}>Re-Load Navigation Data</Button>
    </ButtonToolbar>
    );

    return (
        <div className="">
                     {buttonsInstance}
        </div>    
    );
  }
}


export default connect(mapStateToProps)(Reloader)