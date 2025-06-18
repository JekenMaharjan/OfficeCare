import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    location: '',
    token: '',
    isLoggedIn: false
}

export const userSlice = createSlice({
    name: 'box',
    initialState: initialState,
    reducers: {
        logoutUser: state => {
            return initialState
        },
        addLoginDetails: (state, action) => {
            const { email, firstName, lastName, phoneNumber, location, token, isLoggedIn } = action.payload
            return{
                ...state,
                email: email,
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                location: location,
                token: token,
                isLoggedIn: isLoggedIn
            }
        }
    }
})

export const { logoutUser, addLoginDetails } = userSlice.actions

export default userSlice.reducer