import React, { Component } from 'react';
import { connect } from 'react-redux'
import { List } from 'react-item-list';
import FacetItem from './facetItem'
import { Navbar } from 'react-bootstrap'

const mapStateToProps = (state) => ({
    products: state.products
})

class Facets extends Component {


    renderFacets(facets) {
        if (facets !== undefined && facets !== "" && facets.length > 0) {
            const facetHTML = facets.map((item, index) =>
                <FacetItem itemData={item} key={index} />
            )
            return facetHTML
        }
        // else {
        return null
        // }
    }

    parseFacetsData() {

        const { products } = this.props;
        if (products == undefined || products == "")
            return ""
        const prodsJSON = JSON.parse(products.products)
        return prodsJSON.facetGroups
    }

    render() {
        console.log("Start render facets widget")
        const facetJSON = this.parseFacetsData();
        if (facetJSON == undefined) {
            return <div className="container"></div>
        }          
        return (
            <div className="left col-sm-2">
                <Navbar inverse fluid collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse >
                        {this.renderFacets(facetJSON)}
                    </Navbar.Collapse>
                </Navbar>
            </div>




        );
    }
}


export default connect(mapStateToProps)(Facets)
