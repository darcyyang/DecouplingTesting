import React, { Component } from 'react';
import { connect } from 'react-redux'
import { List } from 'react-item-list';



class FacetItem extends Component {

    assemblerFacetValues(itemData){
        let row = []
        const facetValues = itemData.facetValues
        for (var i=0; i< facetValues.length; i++){
            var facetValueHTML = 
            <li><a href={facetValues[i].restURL}>{facetValues[i].label} - Count : {facetValues[i].count}</a></li>
            row.push(facetValueHTML)
        }
        return row
               
    }



    render() {
        let itemData = this.props.itemData;
        if (itemData == undefined) {
            return <div className=""></div>
        }

        let rows = []
        const facetItemHTML = this.assemblerFacetValues(itemData)
        return (
            <li className="dropdown"> 
                    <a role="button" href="#" data-toggle="dropdown"   className="dropdown-toggle" >
                            {itemData.facetName}<span className="caret"></span>
                            <span style={{"fontSize":"16px"}} className="pull-right hidden-xs showopacity glyphicon glyphicon-cog"></span>
                     </a>
                <ul className="dropdown-menu forAnimate" role="menu">
                    {facetItemHTML}
                </ul>
            </li>

        );
    }
}
export default FacetItem