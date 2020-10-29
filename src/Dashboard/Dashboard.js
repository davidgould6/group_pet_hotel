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
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
    return (reduxState)
}

export default connect(mapStateToProps)(Dashboard);
