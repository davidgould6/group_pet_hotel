import React, { Component } from 'react';
import { connect } from 'react-redux';


class ManageOwnersItem extends Component {

  componentDidMount = () => {
    this.getPets();
  }

  getPets = () => {
    this.props.dispatch({
        type: 'FETCH_PETS'
    })
  }

  render() {
    // console.log('this.props for dashboarditem.js:', this.props)
    return (
      <tr>
        <td>{this.props.owner.name}</td>
        <td>{this.props.owner.count}</td>
        <td><button>Delete</button></td>
      </tr>
    );
  }
}

export default connect()(ManageOwnersItem);
