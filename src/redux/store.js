import {configureStore} from '@reduxjs/toolkit';
import uiReducer from './uiSlice/uiSlice';
export default configureStore({
  reducer: {
    ui: uiReducer,
  },
});
