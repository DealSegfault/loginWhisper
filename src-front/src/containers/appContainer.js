// import { createStore, combineReducers } from 'redux';
// import { reducer as reduxFormReducer } from 'redux-form';

import {connect} from 'react-redux'
import { connectUser } from '../actions'
import App from '../components/App/App'
// import { Redirect } from 'react-router'

const handleClick = (dispatch, user) => {
    dispatch(connectUser("Maman"))
    console.log("User registred")
}

const mapStateToProps = ({dispatch}) => ({
    dispatch,
    handleClick
})

const VisibleApp = connect(
    mapStateToProps,
)(App)

export default VisibleApp
