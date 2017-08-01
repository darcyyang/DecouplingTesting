import React, { Component } from 'react';
import { connect } from 'react-redux'
import NavigationAPI from '../../api/navigationAPI.js'
import CategoryItem from './categoryItem'
import { List } from 'react-item-list';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';


const mapStateToProps = (state) => ({
  navigation: state.navigation
})

export class Navigation extends Component {


  renderNavigationData = (endecaId) => {
    const { dispatch } = this.props
    NavigationAPI.loadRootNavigationData(dispatch);
    console.log("start navigation request dispatch")
  }

  // renderNavigation = ()

  componentWillMount() {
    console.log("Will mount navigation widget")
    this.renderNavigationData("Endeca");
  }

  digestNavigationData(rawNavigation) {
    if (rawNavigation.navigation !== "") {
      const category = JSON.parse(rawNavigation.navigation);
      return category.navigation;
    } else {
      return [];
    }
  }

  renderCategoryitem(category) {
    if (category.length > 0) {
      const listItems = category.map((item,index) =>
        <CategoryItem itemData={item} key={index} />
      )
      return <Nav>{listItems}</Nav>
    }
    else {
      return null
    }
  }


  render() {
    console.log("Start render Navigation widget")
    const { navigation } = this.props;
    const category = this.digestNavigationData(navigation)
    return (
                this.renderCategoryitem(category)
    );
  }
}


export default connect(mapStateToProps)(Navigation)
