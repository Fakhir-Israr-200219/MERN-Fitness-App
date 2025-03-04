import { configureStore } from '@reduxjs/toolkit';
import { exerciseApi } from '../app/api/exercisesSclices';
import { cardioApi } from '../app/api/cardioSclice';
import { workoutApi } from "../app/api/workoutSclice";
export const store = configureStore({
  reducer: {
    [exerciseApi.reducerPath]: exerciseApi.reducer,
    [cardioApi.reducerPath]: cardioApi.reducer,
    [workoutApi.reducerPath]: workoutApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
  .concat(exerciseApi.middleware)
  .concat(cardioApi.middleware)
  .concat(workoutApi.middleware),
});
