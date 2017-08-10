import React, { Component } from 'react';
import Navigation from './navigation/';
import { Pagination } from 'react-bootstrap'
import { connect } from 'react-redux'


const mapStateToProps = (state) => ({
  activePage: state.activePage
})

class AshfordPagination extends Component {


  componentWillAmount() {
    // let activePage = 1
  }

  handleSelect(eventKey) {
    // this.setState({
    //   activePage: eventKey
    // });
  }

  render() {
    return (
      <Pagination
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        items={20}
        maxButtons={5}
        activePage={this.props.activePage}
        onSelect={this.handleSelect} />
    );
  }
}
export default connect(mapStateToProps)(AshfordPagination)


// export default AshfordPagination;