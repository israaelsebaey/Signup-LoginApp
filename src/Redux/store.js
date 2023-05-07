
import {configureStore} from '@reduxjs/toolkit';
import UserReducer from './reducers/UserReducer';

const Store=configureStore({
    reducer:{
     user:UserReducer
    }
})
export default Store;