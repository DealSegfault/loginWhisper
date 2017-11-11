//Redux React-Router react
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { createStore, compose } from 'redux'
import web3 from './util/web3'
// import jwt from './jwt-simple'
import jwt from './jsonwebtoken'

//Action, reducers
import user from './reducers/connected'

//Containers
import App from './containers/appContainer';
import VisibleAdmin from './containers/adminContainer';


//Actions
import { connectUser } from './actions'

const history = createHistory();
const middleware = routerMiddleware(history)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    user,
    router: routerReducer
  }),
  composeEnhancers(
    applyMiddleware(
      middleware
    )
  )
)

// store.dispatch(connectUser("superuser"))


const getEtherAdress = () => {
  return new Promise((resolve, reject) => {
    web3.eth.getCoinbase((error, result) => {
      resolve(result)
    })
  })
};
var JWT_SECRET = "mdp"
const auth = () => {
  getEtherAdress().then(adress => {
    let user = jwt.user()
    let key = "demo"
    let tokeninfo = {
      user_id: user.id,
      user_name: user.user_name,
      ethadress: adress,
      exp: Date() + 60
    }
    return jwt.sign(tokeninfo, process.env.JWT_SECRET, {
      expiresIn: 60 * 60 * 24 // expires in 24 hours
   });
  }) 
  
  console.log(user)
}
getEtherAdress().then(reuslt => console.log(reuslt))
auth()

const Home = () =>  <div><App /></div>
const Admin = () =>  <div><VisibleAdmin /></div>

// whisperObj()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/admin" component={Admin}/>
      </div>
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root')
)

registerServiceWorker();
