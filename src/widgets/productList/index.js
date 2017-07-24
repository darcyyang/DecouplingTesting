import React, { Component } from 'react';
import { connect } from 'react-redux'
import ProdItem from './prodItem'
import { List } from 'react-item-list';
import Pagination from '../pagination'


const mapStateToProps = (state) => ({
  products: state.products
})

class Products extends Component {

    renderProductListItem(productList) {
        if (productList !== undefined && productList !== "" && productList.length > 0) {
            return <List items={productList} ListItem={ProdItem} />
        }
        // else {
            return null
        // }
    }

    parseProductsListData(){
        const {products} = this.props;
        if (products == undefined || products == "")
            return ""
        const prodsJSON = JSON.parse(products.products)
        return prodsJSON.products
    }

  render() {
    const productJSON = this.parseProductsListData();
    return (
        <div className="container">
            <div className="row">
                <p>Total product count :　{productJSON.productCount} </p>
                <p>Sort options: {JSON.stringify(productJSON.sortOptions)}</p>
            </div>
            <div className="row">
                {this.renderProductListItem(productJSON.productList)}
                {/* {JSON.stringify(products)} */}
            </div>    
            <div className="row">
                <Pagination/>
            </div>
        </div>
    );
  }
}


export default connect(mapStateToProps)(Products)
