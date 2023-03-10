import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	artist:[],
	loading:false,
	error:false

}

const fetchSlice = createSlice({
  name: "lastfm",
  initialState,
  reducers: {
	fetchStart:(state,{payload}) =>{
		state.loading = true
	},
	fetchSuccess:(state,{payload}) =>{
		state.loading = false
		state.artist = payload
	},
	fetchError:(state,{payload}) =>{
		state.error = true
		state.loading = false

		
	}

  }
});

export const {fetchStart,fetchSuccess,fetchError} = fetchSlice.actions

export default fetchSlice.reducer