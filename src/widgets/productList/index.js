import React, { Component } from 'react';
import { connect } from 'react-redux'
import ProdItem from './prodItem'
import { List } from 'react-item-list';
import Pagination from '../pagination'
import NavigationAPI from '../../api/navigationAPI.js'
import { Button,Grid, Row, Col, Thumbnail, ButtonToolbar, SplitButton, MenuItem, Navbar } from 'react-bootstrap'



const mapStateToProps = (state, ownProps) => ({
    products: state.products,
})

class Products extends Component {


    componentWillMount() {
        const { dispatch } = this.props
        const { filter } = this.props
        NavigationAPI.loadNavigationDataByEndecaId(dispatch, filter)
    }

    renderProductListItem(productList) {
        if (productList == undefined || productList == "" || productList.length == 0) {
            return null
        }
        const thumbnailInstance = (
            <Grid>
                <Row>
                    {productList.map((productItem, i) =>
                        <Col xs={6} md={4}>
                            <Thumbnail src={productItem.images[0]} >
                                <h3>{productItem.productName}</h3>
                                <div id="product-price"> 
                                <p className="product-price">Retail Price: $ {productItem.priceRetail}</p>
                                 <p className="product-price">Sales Price : $ {productItem.priceCurrent}</p>
                                <p className="product-price">Saving for : $ {productItem.discount}</p>
                                </div>
                                <p>
                                <Button bsStyle="primary">Add to cart</Button>&nbsp;
                                <Button bsStyle="default" href={"/product/"+productItem.restURL}>View Detail</Button>
                                </p>
                            </Thumbnail>
                        </Col>
                    )}
                </Row>
            </Grid>
        );

        // else {
        return thumbnailInstance
        // }
    }

    parseProductsListData() {
        const { products } = this.props;
        if (products == undefined || products == "")
            return ""
        const prodsJSON = JSON.parse(products.products)
        return prodsJSON.products
    }



    renderSortOptions(sortOptions) {
        if (sortOptions == null || sortOptions == "" || sortOptions == undefined || sortOptions.length == 0) {
            return <div></div>
        }
        return (
            <ButtonToolbar>
                <SplitButton id="SortbyOption" title="Sort By" pullRight>
                    {sortOptions.map((sortOption, i) =>
                        <MenuItem key={i} href={sortOption.restURL}>{sortOption.label}</MenuItem>
                    )}
                </SplitButton>
            </ButtonToolbar>
        )
    }




    render() {
        console.log("Start render Product List widget")
        const productJSON = this.parseProductsListData();
        if (productJSON == undefined) {
            return <div className="container"></div>
        }
        var productCountHTML = ""
        if (productJSON.productCount) {
            productCountHTML = <p>Total product count :　{productJSON.productCount} </p>
        }
        else {
            productCountHTML = <p>Total product count :　NULL </p>
        }
        return (
            <div className="col-sm-10">
                <div className="row default-row">
                    <Navbar.Collapse>
                        <Navbar.Text className="default-text">{productCountHTML}</Navbar.Text>
                        {this.renderSortOptions(productJSON.sortOptions)}
                    </Navbar.Collapse>
                </div>
                <hr />
                <div className="row">
                    {this.renderProductListItem(productJSON.productList)}
                    {/* {JSON.stringify(products)} */}
                </div>
                <div className="row">
                    <Pagination />
                </div>
            </div>
        );
    }
}


export default connect(mapStateToProps)(Products)
