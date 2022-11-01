import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { OAuthCredential, UserCredential } from 'firebase/auth'
import type { RootState } from '../store'

// Define a type for the slice state



interface AuthState {
  isLogged: boolean
}

// Define the initial state using that type
const initialState: AuthState = {
  isLogged: false,
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLogged: (state, action: PayloadAction<boolean>) =>{
        state.isLogged = action.payload
    },

    
  },
})

export const { setLogged } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectAuth = (state: RootState) => state.auth

export default authSlice.reducer