import React, { Component } from 'react';
import { connect } from 'react-redux';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
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
    console.log('this.props is:', this.props )
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
        </table>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  pets: reduxState.petReducer
});

export default connect(mapStateToProps)(Dashboard);
