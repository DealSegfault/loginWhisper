// import { createStore, combineReducers } from 'redux';
// import { reducer as reduxFormReducer } from 'redux-form';

import {connect} from 'react-redux'
import { connectUser } from '../actions'
import App from '../components/App/App'
// import { Redirect } from 'react-router'
import * as helpers from '../util/helper'
import web3 from '../util/web3'

const signHehe = () => {
    return new Promise((resolve, reject) => {
        var msg = '0x123456'
        var from = web3.eth.accounts[0]  
        var params = [msg, from]
        var method = 'personal_sign'
      
        web3.currentProvider.sendAsync({method, params, from}, (err, result) => {
          if (err) return console.error(err)
          if (result.error) return console.error(result.error)
          console.log('PERSONAL SIGNED:' + JSON.stringify(result.result))
          const msgParams = { data: msg }
          msgParams.sig = result.result
          console.dir({ msgParams })
          resolve(msgParams)
        })
    })
}

const handleClick = (dispatch, user) => {
    // helpers.signTransaction()
    signHehe().then(signature => {
        // if (signature.sign === "0x9c31cfefd039159af9926825d71391ffc9c75908b0f2a98093e1ea9d4a4539a52d59081b2bc31d97911d54de0396a88072719fc799802e4502ecff0520521f7d1b") {
            dispatch(connectUser(web3.eth.accounts[0]))
        // }
    })
    
    console.log("User registred", user)
}


const mapStateToProps = ({dispatch}) => ({
    dispatch,
    handleClick
})

const VisibleApp = connect(
    mapStateToProps,
)(App)

export default VisibleApp
