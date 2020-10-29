import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardItem from '../DashboardItem/DashboardItem';

class Dashboard extends Component {
  state = {
    heading: 'Class Component',
  };

  componentDidMount = () => {
    this.getPets();
  }

  getPets = () => {
    this.props.dispatch({
        type: 'FETCH_PETS'
    })
  }

  render() {
    // console.log('this.props is:', this.props )
    return (
      <div>
        <h2>'spooooooky'</h2>
        <table>
          <thead>
            <th>Owner</th>
            <th>Pet</th>
            <th>Breed</th>
            <th>Color</th>
            <th>Checked in</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {/* we map here */}
            {this.props.pets.map((pet, i) => 
              <tr>
                <DashboardItem key={i} pet={pet}/>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  pets: reduxState.petReducer
});

export default connect(mapStateToProps)(Dashboard);
