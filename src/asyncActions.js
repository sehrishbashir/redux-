// const redux = require('redux')
// const createStore = redux.createStore
// const applyMiddleware = redux.applyMiddleware
// const thunkMiddleware = require('redux-thunk').default
// const axios = require('axios')


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


// const store = createStore(reducer, applyMiddleware(thunkMiddleware))
// store.subscribe(() => { console.log(store.getState()) })
// store.dispatch(fetchUsers())
// // console.log(fetchUsers)
// // console.log(store)
// // console.log(reducer);
// // console.log(fetchUsers)
// // store.dispatch(fetchUsersRequest)
// // store.dispatch(fetchUsersSuccess)
// // store.dispatch(fetchUsersFailure)