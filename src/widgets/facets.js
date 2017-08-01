import React, { Component } from 'react';
import { connect } from 'react-redux'
import { List } from 'react-item-list';
import FacetItem from './facetItem'
import '../Facets.css'


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
            <div className="left col-sm-4">
                <nav className="navbar navbar-inverse sidebar" role="navigation">
                    <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-sidebar-navbar-collapse-1">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" href="#">Brand</a>
                            </div>
                        <div className="collapse navbar-collapse" id="bs-sidebar-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                {this.renderFacets(facetJSON)}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}


export default connect(mapStateToProps)(Facets)
