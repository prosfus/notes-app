import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { OAuthCredential, UserCredential } from 'firebase/auth'
import moment from 'moment'
import type { RootState } from '../store'

// Define a type for the slice state



interface JournalState {
  daySelected: string
}

// Define the initial state using that type
const initialState: JournalState = {
  daySelected: moment().toString(),
}

export const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    setDay: (state, action: PayloadAction<string>) =>{
      state.daySelected = action.payload
    },
  },
})

export const { setDay } = journalSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectJournal = (state: RootState) => state.journal

export default journalSlice.reducer