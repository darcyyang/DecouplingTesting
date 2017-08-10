import React, { Component } from 'react';

import { ButtonToolbar } from 'react-bootstrap';
import NavigationAPI from '../api/navigationAPI'
import { connect } from 'react-redux'
import { Navbar } from 'react-bootstrap';
import { FormGroup, FormControl, Button} from 'react-bootstrap';


const mapStateToProps = (state) => ({
})

class Search extends Component {


  render() {
    console.log("Start render search widget")
    // const buttonsInstance = (
    // <ButtonToolbar>
    //     {/* Standard button */}
    //     <Button>Default</Button>
    //     <Button bsStyle="primary"  onClick={() => this.reloadNavigationData()}>Re-Load Navigation Data</Button>
    // </ButtonToolbar>
    // );

    return (
      <Navbar.Form pullRight>
        <FormGroup>
          <FormControl type="text" placeholder="Search" />
        </FormGroup>
        <Button type="submit">    
                <span className="glyphicon glyphicon-console"  aria-hidden="true"></span>
        </Button> 
      </Navbar.Form>
    );
  }
}


export default connect(mapStateToProps)(Search)