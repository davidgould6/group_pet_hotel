import React, { Component } from 'react';
import { connect } from 'react-redux';
import ManageOwnersItem from '../ManageOwnersItem/ManageOwnersItem';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class ManageOwners extends Component {
  state = {
    heading: 'Class Component',
  };

  componentDidMount = () => {
    this.getOwners();
  }

  getOwners = () => {
    this.props.dispatch({
        type: 'FETCH_OWNERS'
    })
  }

  render() {
    console.log('this.props for ManageOwners.js:', this.props)
    return (
      <div>
        <table>
          <thead>
            <th>Name</th>
            <th>Number of Pets</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {/* we map here */}
            {this.props.owners.map((owner, i) =>  
              <ManageOwnersItem key={i} owner={owner}/>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
    owners: reduxState.ownersReducer
  });

export default connect(mapStateToProps)(ManageOwners);
