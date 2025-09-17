import activeStepFormReducer from "@/lib/features/active-step-form-slice"
import companyFormReducer from "@/lib/features/company-form-slice"
import headerReducer from "@/lib/features/header/header-slice"
import { configureStore } from "@reduxjs/toolkit"

export const makeStore = () => {
  return configureStore({
    reducer: {
      header: headerReducer,
      companyForm: companyFormReducer,
      activeStepForm: activeStepFormReducer,
    },
  })
}
// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
