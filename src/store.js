import { createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './redux/reducers'

// for the use of middleware
import thunk from 'redux-thunk'

const initialState = {};

// applying middleware
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
