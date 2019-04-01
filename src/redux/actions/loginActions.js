import { LOGIN, LOGOUT } from './types';
import axios from 'axios';


export const userSignup = (userData) => dispatch => {
    console.log(userData)
    axios.post('http://localhost:8081/signup', userData

    )
        .then( (response) => {
            // if valid response
            // console.log(response)
            })
//     dispatch({
//     type: LOGIN
// });
}
export const userLogin = (userData) => dispatch => {
    // console.log(userData)
    axios.post('http://localhost:8081/login', userData

    )
        .then( (response) => {
            // if valid response
            if(response.data.code == 200)
            {
                 return dispatch({
                    type: LOGIN,
                    data: response.data.userData
                })
            }
            })
}

export const userLogout = () => dispatch => dispatch({
    type: LOGOUT
});

