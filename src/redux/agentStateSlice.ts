import { createSlice } from "@reduxjs/toolkit";

interface AgentState {
  agentState: string;
}


const initialState: AgentState = {
  agentState: "Attente d'affectation",
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
