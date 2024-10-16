"use client";
import { useMachine } from "@xstate/react";
import { useEffect } from "react";
import { toggleMachine } from "./modules/TaskMachine";
import ListComponent from "./components/ListComponent";
import { useInputList } from "./modules/ListHandler";

export default function Home() {
  const [state, send] = useMachine(toggleMachine);

  const {
    inputValue,
    handleInputChange,
    handleAddList,
    list,
    taskInputValues,
    handleTaskInputChange,
    handleAddTask,
    handleRemoveList,
    handleTaskEdit,
  } = useInputList();

  useEffect(() => {
    console.log("Current state:", state.value);
  }, [state.value]);

  return (
    <div>
      <div className="inputRow">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="List name"
          className="inputField"
        />
        <button onClick={handleAddList} className="addButton">
          Add list
        </button>
      </div>

      <ListComponent
        list={list}
        taskInputValues={taskInputValues}
        handleTaskInputChange={handleTaskInputChange}
        handleAddTask={handleAddTask}
        handleRemoveList={handleRemoveList}
        handleTaskEdit={handleTaskEdit}
        send={send}
      />
    </div>
  );
}
