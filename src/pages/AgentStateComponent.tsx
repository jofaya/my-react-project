import ModalConfirmation from "../components/System/Modal/ModalConfirmation";
import ModalSubmit from "../components/System/Modal/ModalSubmit";
import { useState } from "react";
import ModalTimer from "../components/System/Modal/ModalTimer";

const AgentStateComponent = () => {

  const [openModalSubmit, setOpenModalSubmit] = useState<boolean>(false)
  const [openModalTimer, setOpenModalTimer] = useState<boolean>(false)
  const [agentStatePersistant,setAgentStatePersistant] = useState<string>('')

  
  return (
    <div>
      <ModalConfirmation setOpenModalSubmit={setOpenModalSubmit} setAgentStatePersistant={setAgentStatePersistant}/>
      <ModalSubmit openModalSubmit={openModalSubmit} setOpenModalSubmit={setOpenModalSubmit} setOpenModalTimer={setOpenModalTimer} />
      <ModalTimer open={openModalTimer} handleClose={() => setOpenModalTimer(false)} agentStatePersistant={agentStatePersistant}/>
    </div>
  );
};

export default AgentStateComponent;
