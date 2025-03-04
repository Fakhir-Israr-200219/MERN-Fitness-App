import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  logs: {},
};

const logSlice = createSlice({
  name: 'logs',
  initialState,
  reducers: {
    incrementValue: (state, action) => {
      const { date, type, index, field } = action.payload;
      if (state.logs[date] && state.logs[date][type][index]) {
        state.logs[date][type][index][field] += 1;
      }
    },
    decrementValue: (state, action) => {
      const { date, type, index, field } = action.payload;
      if (state.logs[date] && state.logs[date][type][index] && state.logs[date][type][index][field] > 0) {
        state.logs[date][type][index][field] -= 1;
      }
    },
    setLogs: (state, action) => {
      state.logs = action.payload;
      console.log(state.logs)
    },
  },
});

export const { incrementValue, decrementValue, setLogs } = logSlice.actions;
export default logSlice.reducer;
