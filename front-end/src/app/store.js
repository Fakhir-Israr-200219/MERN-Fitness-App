import { configureStore } from '@reduxjs/toolkit';
import { exerciseApi } from '../app/api/exercisesSclices';
import { cardioApi } from '../app/api/cardioSclice';
import { workoutApi } from "../app/api/workoutSclice";
import logReducer from "../app/Slices/logSclice"
export const store = configureStore({
  reducer: {
    [exerciseApi.reducerPath]: exerciseApi.reducer,
    [cardioApi.reducerPath]: cardioApi.reducer,
    [workoutApi.reducerPath]: workoutApi.reducer,
    logs: logReducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
  .concat(exerciseApi.middleware)
  .concat(cardioApi.middleware)
  .concat(workoutApi.middleware),
});
