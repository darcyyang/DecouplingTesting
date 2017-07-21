import React, { Component } from 'react';
import { List } from 'react-item-list';


export class CategoryItem extends Component {



    renderSubCategoryitem(categoryItem) {
        if (categoryItem.subCategories !== undefined && categoryItem.subCategories !== "" && categoryItem.subCategories[0].catItems.length > 0) {
            return <List items={categoryItem.subCategories[0].catItems} ListItem={cateItemHTML} />
        }
        else {
            return null
        }
    }


    render() {
        const categoryItem = this.props.itemData;
        let categoryItemHTML
        if (categoryItem !== undefined) {
            categoryItemHTML =  
                <li className={"dropdown"}>
                    <a href="javascript:void(0)" className="dropbtn">{categoryItem.categoryName} {categoryItem.restURL}</a>
                    <div className="dropdown-content">
                         {this.renderSubCategoryitem(categoryItem)} 
                    </div>
                </li>
        }
        else {
            return null
        }
        return <ul>{categoryItemHTML}</ul>
    }
}

class cateItemHTML extends Component {
    render() {
        let itemData = this.props.itemData;
        return <a href={itemData.restURL}> {itemData.label} </a>
    }
}



export default CategoryItem;
