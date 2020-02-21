import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// const redux = require('redux')
// const reduxLogger = require('redux-logger')

// const createStore = redux.createStore
// const combineReducers = redux.combineReducers
// const applyMiddleware = redux.applyMiddleware
// const logger = reduxLogger.createLogger()

// const thunkMiddleware = require('redux-thunk').default
// const axios = require('axios')

// const BUY_CAKE = 'BUY_CAKE';
// const BUY_ICECREAM = 'BUY_ICECREAM';



// //////////   action   /////////////
// function buyCake () {
//     return {
//         type: BUY_CAKE,
//         info: 'First redux action'
//     }
// }

// function buyIceCream () {
//     return {
//         type: BUY_ICECREAM  
//     }
// }

// // const initialState = {
// //     noOfCakes: 10,
// //     noOfIceCream: 20
// // }


// /////////       pev state     /////////////

// const initialCakeState = {
//     noOfCakes: 10,
// }


// const initialIceCreamState = {
//     noOfIceCream: 20
// }

// // const reducer = (state = initialState, action) => {
// //     switch(action.type) {
// //         case BUY_CAKE: return {
// //             ...state,
// //             noOfCakes: state.noOfCakes - 1
// //         }
// //         case BUY_ICECREAM: return {
// //             ...state,
// //             noOfIceCream: state.noOfIceCream - 1
// //         }
// //          default: return state;
// //     }
// // }



// ////////////      next state       //////////////

// const cakeReducer = (state = initialCakeState, action) => {
//     switch(action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             noOfCakes: state.noOfCakes - 1
//         }
//         default: return state;
//     }
// }

// const iceCreamReducer = (state = initialIceCreamState, action) => {
//     switch(action.type) {
//         case BUY_ICECREAM: return {
//             ...state,
//             noOfIceCream: state.noOfIceCream - 1
//         }
//          default: return state;
//     }
// }





// const rootReducers = combineReducers({
//     cake: cakeReducer,
//     iceCream: iceCreamReducer
// })
// const store = createStore(rootReducers, applyMiddleware(logger))
// console.log('initial state', store.getState())
// const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyIceCream())
// store.dispatch(buyIceCream())
// unsubscribe()








// const initialState = {
//     loading: false,
//     users: [],
//     error: ''
// }

// const FATCH_USERS_REQUEST = 'FATCH_USERS_REQUEST'
// const FATCH_USERS_SUCCESS = 'FATCH_USERS_SUCCESS'
// const FATCH_USERS_FAILURE = 'FATCH_USERS_FAILURE'

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case FATCH_USERS_REQUEST:
//             return {
//                 ...state,
//                 loading: true
//             }

//         case FATCH_USERS_SUCCESS:
//             return {
//                 loading: false,
//                 users: action.payload,
//                 error: '',
//             }

//         case FATCH_USERS_FAILURE:
//             return {
//                 loading: false,
//                 users: [],
//                 error: action.payload
//             }
//         default: return state;
//     }
// }

// const fetchUsersRequest = () => {
//     console.log('sucess')
//     return {
//         type: FATCH_USERS_REQUEST
//     }
// }

// const fetchUsersSuccess = users => {
//     console.log('hi')
//     return {
//         type: FATCH_USERS_SUCCESS,
//         payload: users
//     }
// }

// const fetchUsersFailure = error => {
//     console.log('bye')
//     return {
//         type: FATCH_USERS_FAILURE,
//         payload: error
//     }
// }


// const fetchUsers = () => {
//     return function (dispatch) {
//         console.log('data')
//         dispatch(fetchUsersRequest())
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then(response => {
//                 console.log(response)
//                 const users = response.data.map(user => user.id)
//                 console.log(users)
//                 dispatch(fetchUsersSuccess(users))
//             })
//             .catch(error => {
//                 console.log(error)
//                 dispatch(fetchUsersFailure(error.message))
//             })
//     }
// }


// const store1 = createStore(reducer, applyMiddleware(thunkMiddleware))
// store1.subscribe(() => { console.log(store.getState()) })
// store1.dispatch(fetchUsers())
// // console.log(fetchUsers)
// // console.log(store)
// // console.log(reducer);
// // console.log(fetchUsers)
// // store.dispatch(fetchUsersRequest)
// // store.dispatch(fetchUsersSuccess)
// // store.dispatch(fetchUsersFailure)







