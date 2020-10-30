import React, { Component } from "react";
import { connect } from "react-redux";

class DashboardItem extends Component {
	state = {
		isCheckedIn: this.props.pet.isCheckedIn,
	};

	componentDidMount = () => {
		this.getPets();
	};

	getPets = () => {
		this.props.dispatch({
			type: "FETCH_PETS",
		});
	};

	heckOut = () => {
		this.setState({
			isCheckedIn: !this.state.isCheckedIn,
		});
		let objectToSend = {
			isCheckedIn: this.state.isCheckedIn,
			id: this.props.pet.id,
		};
		this.props.dispatch({
			type: "UPDATE_STATUS",
			payload: objectToSend,
		});
	};

	render() {
		console.log("this is the state", this.state);

		return (
			<tr>
				<td>{this.props.pet.ownerName}</td>
				<td>{this.props.pet.petName}</td>
				<td>{this.props.pet.breed}</td>
				<td>{this.props.pet.color}</td>
				<td>{this.props.pet.isCheckedIn.toString()}</td>
				<td>
					<button>Delete</button>
					{this.state.isCheckedIn ? (
						<button onClick={this.heckOut}>Check Out</button>
					) : (
						<button onClick={this.heckOut}>Check</button>
					)}
				</td>
			</tr>
		);
	}
}

export default connect()(DashboardItem);
