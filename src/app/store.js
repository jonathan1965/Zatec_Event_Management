import { configureStore } from '@reduxjs/toolkit';
import EventReducer from '../reducers/EventReducer';

export const store = configureStore({
  reducer: {
    Event: EventReducer,
  },
});
