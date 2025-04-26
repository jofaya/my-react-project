import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalState = {
  open: boolean;
  title?: string;
  message: string;
  type: "info" | "success" | "error" | "confirm";
  onConfirm?: () => void;
  onCancel?: () => void;
};

const initialState: ModalState = {
  open: false,
  message: "",
  type: "info",
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{
        message: string;
        type: ModalState["type"];
        title?: string;
        onConfirm?: () => void;
        onCancel?: () => void;
      }>
    ) => {
      state.open = true;
      state.message = action.payload.message;
      state.type = action.payload.type;
      state.title = action.payload.title;
      state.onConfirm = action.payload.onConfirm;
      state.onCancel = action.payload.onCancel;
    },
    closeModal: (state) => {
      state.open = false;
      state.message = "";
      state.type = "info";
      state.title = undefined;
      state.onConfirm = undefined;
      state.onCancel = undefined;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
