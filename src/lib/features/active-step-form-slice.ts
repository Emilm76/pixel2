import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ActiveStepFormState {
  step: '1' | '2' | '3';
}

const initialState: ActiveStepFormState = {
  step: '1',
};

const ActiveStepFormSlice = createSlice({
  name: 'activeStepForm',
  initialState,
  reducers: {
    setActiveStepForm(state, action: PayloadAction<ActiveStepFormState>) {
      state.step = action.payload.step;
    },
    resetActiveStepForm(state) {
      state.step = '1';
    },
  },
});

export const { setActiveStepForm, resetActiveStepForm } =
  ActiveStepFormSlice.actions;
export default ActiveStepFormSlice.reducer;
