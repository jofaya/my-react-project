import { createSlice } from "@reduxjs/toolkit";

interface AgentState {
  agentState: string;
}

// const savedMode = localStorage.getItem("theme") as "light" | "dark" | null;

const initialState: AgentState = {
  agentState: "",
};

const agentStateSlice = createSlice({
  name: "agentState",
  initialState,
  reducers: {
    toggleAgentState: (state) => {
      state.agentState = "";
    //   localStorage.setItem("theme", state.agentState);
    },
    setAgentState: (state, action) => {
      state.agentState = action.payload;
    },
  },
});

export const { toggleAgentState, setAgentState } = agentStateSlice.actions;
export default agentStateSlice.reducer;
