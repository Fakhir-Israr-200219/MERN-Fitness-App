import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    loading:false,
    user:null,
    error:null
}


const authSlice = createSlice({
    name : 'user',
    initialState,

})

export default authSlice.reducer

