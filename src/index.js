import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import createSagaMiddleware from "redux-saga";
import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

const petReducer = (state = [], action) => {
	switch (action.type) {
		case "SET_PETS":
			return action.payload;
		default:
			return state;
	}
};

const ownersReducer = (state = [], action) => {
	switch (action.type) {
		case "SET_OWNERS":
			return action.payload;
		default:
			return state;
	}
};

function* fetchPetsSaga() {
	console.log("in fetchPetsSaga");
	let response = yield axios({
		method: "GET",
		url: "/pets",
	});
	console.log("response is:", response.data);

	yield put({ type: "SET_PETS", payload: response.data });
}

function* fetchOwnersSaga() {
	console.log("in fetchOwnersSaga");
	let response = yield axios({
		method: "GET",
		url: "/owners",
	});
	console.log("response is:", response.data);
	yield put({ type: "SET_OWNERS", payload: response.data });
}

function* updateStatusSaga(action) {
	console.log("in updateStatusSaga", "this is action.payload:", action.payload);
	let isCheckedIn = action.payload.isCheckedIn;
	let id = action.payload.id;
	let response = yield axios({
		method: "PUT",
		url: `/pets/${id}`,
		data: action.payload.isCheckedIn,
	});
	console.log("response is:", action.payload);
	console.log("ischeckedin is:", isCheckedIn);
	// yield put({ type: "SET_OWNERS", payload: response.data });
}

// Generator function to listen for specific strings to run sagas.
function* sagaListener() {
	yield takeEvery("FETCH_PETS", fetchPetsSaga);
	yield takeEvery("FETCH_OWNERS", fetchOwnersSaga);
	yield takeEvery("UPDATE_STATUS", updateStatusSaga);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	combineReducers({
		petReducer,
		ownersReducer,
	}),
	applyMiddleware(sagaMiddleware)
);
// Run sagaMiddleware
sagaMiddleware.run(sagaListener);

ReactDOM.render(
	<Provider store={store}>
		{" "}
		<App />
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
