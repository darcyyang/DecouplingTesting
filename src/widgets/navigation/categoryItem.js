import React, { Component } from 'react';
import { List } from 'react-item-list';
import NavigationAPI from '../../api/navigationAPI.js'
import { connect } from 'react-redux'
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';


const mapStateToProps = (state) => ({
  navigation: state.navigation
})


export class CategoryItem extends Component {



    renderSubCategoryitem(categoryItem) {
        if (categoryItem.subCategories !== undefined && categoryItem.subCategories !== "" && categoryItem.subCategories[0].catItems.length > 0) {
            const cateItem =  categoryItem.subCategories[0].catItems.map((item,index) =>
               <CateItemHTML itemData={item} key={index}/>
            )
            return cateItem   }
        else {
            return null
        }
    }

    loadNavigationDataByEndecaId(enderId){
        const { dispatch } = this.props
        NavigationAPI.loadNavigationDataByEndecaId(dispatch,enderId)
    }


    render() {
        const categoryItem = this.props.itemData;
        let categoryItemHTML
        if (categoryItem !== undefined) {
            categoryItemHTML =  
                <NavDropdown id={categoryItem.categoryName} title={categoryItem.categoryName}> 
                         {this.renderSubCategoryitem(categoryItem)} 
                </NavDropdown>
        }
        else {
            return null
        }
        return categoryItemHTML
    }
}

class CateItemHTML extends Component {
    render() {
        let itemData = this.props.itemData;
        return  <MenuItem href={"/categories/"+ itemData.restURL}>{itemData.label}</MenuItem>
    }
}

export default connect(mapStateToProps)(CategoryItem)


// export default CategoryItem;
