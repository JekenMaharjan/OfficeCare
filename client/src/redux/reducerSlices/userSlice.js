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
    name: 'user',
    initialState: initialState,
    reducers: {
        logoutUser: state => {
            return initialState
        },
        addLoginDetails: (state, action) => {
            const { token, isLoggedIn } = action.payload
            const { email, firstName, lastName, phoneNumber, location, _id } = action.payload.user
            return{
                ...state,
                email: email,
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                location: location,
                token: token,
                isLoggedIn: isLoggedIn,
                _id: _id
            }
        }
    }
})

export const { logoutUser, addLoginDetails } = userSlice.actions

export default userSlice.reducer