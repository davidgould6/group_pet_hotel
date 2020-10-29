import React, { Component } from 'react';
import { connect } from 'react-redux';

class DashboardItem extends Component {

  componentDidMount = () => {
    this.getPets();
  }

  getPets = () => {
    this.props.dispatch({
        type: 'FETCH_PETS'
    })
  }

  render() {
    console.log('this.props for dashboarditem.js:', this.props)
    return (
      <tr>
        <td>{this.props.pet.ownerName}</td>
        <td>{this.props.pet.petName}</td>
        <td>{this.props.pet.breed}</td>
        <td>{this.props.pet.color}</td>
        <td>{this.props.pet.isCheckedIn.toString()}</td>
        <td><button>Delete</button><button>Check</button></td>
      </tr>
    );
  }
}

export default connect()(DashboardItem);
