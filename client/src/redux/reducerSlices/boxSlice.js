import { createSlice } from '@reduxjs/toolkit'

export const boxSlice = createSlice({
    name: 'box',
    initialState: {
        backgroundColor: 'red',
        borderRadius: 0,
        width: 200,
        height: 200,
        marginLeft: 0
    },
    reducers: {
        incrementHeight: state => {
            state.height = state.height + 10
        },
        incrementWidth: state => {
            state.width = state.width + 10
        },
        changeColor: (state, action) => {
            state.backgroundColor = action.payload
        }
    }
})

export const { incrementHeight, incrementWidth, changeColor } = boxSlice.actions

export default boxSlice.reducer