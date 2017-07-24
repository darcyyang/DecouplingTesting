import React, { Component } from 'react';
import NavigationAPI from '../../api/navigationAPI.js'



class ProdItem extends Component {

    loadProductDetailData(productId){
        const { dispatch } = this.props
        NavigationAPI.loadProductDetailData(dispatch,productId)
    }


    render() {
        let itemData = this.props.itemData;
        
        let itemTagHTML =  <a href="#" onClick={()=>this.loadProductDetailData(itemData.restURL)} target="_blank">
                                      <img src={itemData.images[0]} alt="Lights" style={{width:"100%"}}/>
                                      <div className={"caption"}>
                                          <p>{itemData.productName}</p>
                                      </div>
                            </a>

        return (
            <div className="col-md-4">
                 {itemTagHTML}
            </div>
            )

    }
}

export default ProdItem