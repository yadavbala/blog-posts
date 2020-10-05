import {createStore,combineReducers} from 'redux'
import postsReducer from '../reducer/postsReducer'

const configureStore=()=>{
    const store=createStore(combineReducers({
        posts:postsReducer
    }))
    return store
}

export default configureStore