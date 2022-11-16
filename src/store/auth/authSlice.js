import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status:
      'not-authenticated' /* 'authenticated' 'not-authenticated', 'checking' */,
    use: {}
  },
  reducers: {
    onChecking: (state) => {
      state.status = 'checking'
    }
  }
})

export const { onChecking } = authSlice.actions
