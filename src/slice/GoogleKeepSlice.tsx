import { createSlice } from "@reduxjs/toolkit";

interface googleKeepState{
    googleKeepList:{
        id:number,
        title: string,
        description:string,
    }[]
}

const initialState: googleKeepState = {
    googleKeepList:[],
  }

export const GoogleKeepSlice = createSlice({
    name: 'Google Keep',
    initialState,
    reducers: {
        addNote: (state, action) => {
           state.googleKeepList = [...state.googleKeepList, action.payload]
        }
    },
})

export const { addNote} = GoogleKeepSlice.actions
export default GoogleKeepSlice.reducer