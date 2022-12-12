import {configureStore} from '@reduxjs/toolkit';
import uiReducer from './uiSlice/uiSlice';
import { userApi } from './userSlice/userSlice';


export default configureStore({
  reducer: {
    ui: uiReducer,
    [userApi.reducerPath]: userApi.reducer
  },
  middleware:(getDefaultMiddleware) =>
  getDefaultMiddleware().concat(userApi.middleware),
});


