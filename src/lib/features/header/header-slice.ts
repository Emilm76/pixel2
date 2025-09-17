import type { RootState } from "@/lib/store"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface HeaderState {
  isHidden: boolean
}

const initialState: HeaderState = {
  isHidden: false,
}

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setHeaderVisibility: (state, action: PayloadAction<boolean>) => {
      state.isHidden = action.payload
    },
    showHeader: (state) => {
      state.isHidden = false
    },
    hideHeader: (state) => {
      state.isHidden = true
    },
  },
})

export const { setHeaderVisibility, showHeader, hideHeader } =
  headerSlice.actions

export const selectHeaderVisibility = (state: RootState) =>
  state.header.isHidden

export default headerSlice.reducer
