// import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
//   logs: {},
// };

// const logSlice = createSlice({
//   name: 'logs',
//   initialState,
//   reducers: {
//     incrementValue: (state, action) => {
//       const { date, type, index, field, id, token } = action.payload;

//       if (state.logs[date] && state.logs[date][type][index]) {
//         state.logs[date][type][index][field] += 1;

//         // Call API to update backend
//         axios.put(
//           `http://localhost:5000/api/${type === "exercises" ? "exercises" : "cardio"}/${id}`,
//           { [field]: state.logs[date][type][index][field] }, 
//           { headers: { Authorization: `Bearer ${token}` } }
//         ).catch(err => console.error("Error updating backend:", err));
//       }
//     },

//     decrementValue: (state, action) => {
//       const { date, type, index, field, id, token } = action.payload;

//       if (state.logs[date] && state.logs[date][type][index] && state.logs[date][type][index][field] > 0) {
//         state.logs[date][type][index][field] -= 1;

//         // Call API to update backend
//         axios.put(
//           `http://localhost:5000/api/${type === "exercises" ? "exercises" : "cardio"}/${id}`,
//           { [field]: state.logs[date][type][index][field] }, 
//           { headers: { Authorization: `Bearer ${token}` } }
//         ).catch(err => console.error("Error updating backend:", err));
//       }
//     },

//     setLogs: (state, action) => {
//       state.logs = action.payload;
//     },
//   },
// });

// export const { incrementValue, decrementValue, setLogs } = logSlice.actions;
// export default logSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  logs: {},
};

const logSlice = createSlice({
  name: 'logs',
  initialState,
  reducers: {
    // incrementValue: (state, action) => {
    //   const { date, type, index, field, id } = action.payload;
    //   const token = localStorage.getItem('token'); // Get token from localStorage

    //   if (state.logs[date] && state.logs[date][type][index]) {
    //     state.logs[date][type][index][field] += 1;

    //     // Call API to update backend
    //     axios
    //       .put(
    //         `http://localhost:5000/api/${type === "exercises" ? "exercises" : "cardio"}/${id}`,
    //         { [field]: state.logs[date][type][index][field] },
    //         { headers: { Authorization: `Bearer ${token}` } }
    //       )
    //       .catch(err => console.error("Error updating backend:", err));
    //   }
    // },

    // decrementValue: (state, action) => {
    //   const { date, type, index, field, id } = action.payload;
    //   const token = localStorage.getItem('token'); // Get token from localStorage

    //   if (state.logs[date] && state.logs[date][type][index] && state.logs[date][type][index][field] > 0) {
    //     state.logs[date][type][index][field] -= 1;

    //     // Call API to update backend
    //     axios
    //       .put(
    //         `http://localhost:5000/api/${type === "exercises" ? "exercises" : "cardio"}/${id}`,
    //         { [field]: state.logs[date][type][index][field] },
    //         { headers: { Authorization: `Bearer ${token}` } }
    //       )
    //       .catch(err => console.error("Error updating backend:", err));
    //   }
    // },

    incrementValue: (state, action) => {
        const { date, type, index, field, id } = action.payload;
        const token = localStorage.getItem('token');
      
        if (state.logs[date] && state.logs[date][type] && state.logs[date][type][index]) {
          state.logs[date][type][index][field] += 1;
      
          axios.put(
            `http://localhost:5000/api/${type}/${id}`, // No need for condition, `type` is already 'exercises' or 'cardios'
            { [field]: state.logs[date][type][index][field] },
            { headers: { Authorization: `Bearer ${token}` } }
          ).catch(err => console.error("Error updating backend:", err));
        }
      },
      
      decrementValue: (state, action) => {
        const { date, type, index, field, id } = action.payload;
        const token = localStorage.getItem('token');
      
        if (state.logs[date] && state.logs[date][type] && state.logs[date][type][index] && state.logs[date][type][index][field] > 0) {
          state.logs[date][type][index][field] -= 1;
      
          axios.put(
            `http://localhost:5000/api/${type}/${id}`, // Same fix as above
            { [field]: state.logs[date][type][index][field] },
            { headers: { Authorization: `Bearer ${token}` } }
          ).catch(err => console.error("Error updating backend:", err));
        }
      },
      
    setLogs: (state, action) => {
      state.logs = action.payload;
    },
  },
});

export const { incrementValue, decrementValue, setLogs } = logSlice.actions;
export default logSlice.reducer;
