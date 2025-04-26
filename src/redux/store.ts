import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import modalReducer from "./modalSlice";
import agentStateReducer from "./agentStateSlice"

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    modal: modalReducer,
    agentState: agentStateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
