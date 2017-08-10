import React, { Component } from 'react';
import { connect } from 'react-redux'
import { List } from 'react-item-list';
import { Nav, NavDropdown, MenuItem} from 'react-bootstrap'


class FacetItem extends Component {

  

    render() {
        let itemData = this.props.itemData;
        if (itemData == undefined) {
            return <div className=""></div>
        }

        let rows = []

        return (    
          <Nav>
                <NavDropdown id={itemData.facetName} title={itemData.facetName}> 
                         {itemData.facetValues.map((facet,index) =>
                            <MenuItem key={facet.label} href={"/categories/"+ facet.restURL}>{facet.label}</MenuItem>
                                                        )  
                          }
                </NavDropdown>
          </Nav>      



        );
    }
}
export default FacetItem