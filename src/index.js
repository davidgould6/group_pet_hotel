import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';



function* fetchPetsSaga(){
    console.log( 'in fetchPetsSaga' )
    let response = yield axios({
        method: 'GET',
        url: '/pets'
    })
    console.log( 'response is:', response )
}


// Generator function to listen for specific strings to run sagas. 
function* sagaListener (){
    yield takeEvery( 'FETCH_PETS', fetchPetsSaga )
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
combineReducers({ 
    // plantList 
}),
applyMiddleware(sagaMiddleware)
);
// Run sagaMiddleware
sagaMiddleware.run(sagaListener);


ReactDOM.render(<Provider store={store}> <App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
