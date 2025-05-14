import type { RootState } from '@/lib/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ModalState {
  isOpen: boolean;
}

const initialState: ModalState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalVisibility: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    showModal: (state) => {
      state.isOpen = true;
    },
    hideModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { setModalVisibility, showModal, hideModal } = modalSlice.actions;

export const selectModalVisibility = (state: RootState) => state.modal.isOpen;

export default modalSlice.reducer;
