import ModalConfirmation from "../components/System/Modal/ModalConfirmation";
import ModalSubmit from "../components/System/Modal/ModalSubmit";
import { useState, useEffect } from "react";
import ModalTimer from "../components/System/Modal/ModalTimer";
import TableStatus from "../components/System/Table/TableStatus";
import TabsStatus from "../components/System/Tabs/TabsStatus";
import { RootState } from "../redux/store";
import { useSelector } from 'react-redux';

const AgentStateComponent = () => {

  const [openModalSubmit, setOpenModalSubmit] = useState<boolean>(false)
  const [openModalTimer, setOpenModalTimer] = useState<boolean>(false)
  const [agentStatePersistant,setAgentStatePersistant] = useState<string>('')
  const [submitStatus,setSubmitStatus]= useState<boolean>(false)
  const agentState = useSelector((state: RootState) => state.agentState.agentState);

  useEffect(() => {
    setSubmitStatus(false);
  }, [agentState]);
  
  
  return (
    <div>
      <TableStatus agentStatePersistant={agentStatePersistant} submitStatus={submitStatus}/>
      <TabsStatus/>
      <ModalConfirmation setOpenModalSubmit={setOpenModalSubmit} setAgentStatePersistant={setAgentStatePersistant} setSubmitStatus={setSubmitStatus}/>
      <ModalSubmit openModalSubmit={openModalSubmit} setAgentStatePersistant={setAgentStatePersistant} setOpenModalSubmit={setOpenModalSubmit} setOpenModalTimer={setOpenModalTimer} setSubmitStatus={setSubmitStatus}/>
      <ModalTimer open={openModalTimer} handleClose={() => {setOpenModalTimer(false);setAgentStatePersistant('Production')}} agentStatePersistant={agentStatePersistant}/>
    </div>
  );
};

export default AgentStateComponent;
