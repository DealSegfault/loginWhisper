// import { createStore, combineReducers } from 'redux';
// import { reducer as reduxFormReducer } from 'redux-form';

import {connect} from 'react-redux'
import Admin from '../components/admin'
import { logout } from '../actions'

const handleSubmit = (dispatch) => {
    dispatch(logout()) 
}

const mapStateToProps = (state) => ({
    dispatch: state.dispatch,
    user: state.user,
    handleSubmit
})

const VisibleAdmin = connect(
    mapStateToProps,
)(Admin)

export default VisibleAdmin
