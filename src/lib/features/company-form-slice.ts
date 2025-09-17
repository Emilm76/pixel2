import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CompanyFormState {
  name: string
  description: string
  color: string
  logoSrc: string
}

const initialState: CompanyFormState = {
  name: "",
  description: "",
  color: "",
  logoSrc: "",
}

const companyFormSlice = createSlice({
  name: "companyForm",
  initialState,
  reducers: {
    setCompanyForm(state, action: PayloadAction<CompanyFormState>) {
      state.name = action.payload.name
      state.description = action.payload.description
      state.color = action.payload.color
      state.logoSrc = action.payload.logoSrc
    },
    resetCompanyForm(state) {
      state.name = ""
      state.description = ""
      state.color = ""
      state.logoSrc = ""
    },
  },
})

export const { setCompanyForm, resetCompanyForm } = companyFormSlice.actions
export default companyFormSlice.reducer
