import { useState } from "react";
import { useTaskManager } from "./TaskHandler";

export const useInputList = () => {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  const {
    taskInputValues,
    handleAddTask,
    handleTaskEdit,
    handleTaskToggle,
    handleTaskInputChange,
  } = useTaskManager();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddList = () => {
    let newListName;

    if (inputValue.trim() !== "") {
      newListName = inputValue;
    } else {
      newListName = `List ${list.length + 1}`;
    }

    setList((prevList) => [
      ...prevList,
      { name: newListName, tasks: [], isOpen: true },
    ]);
    setInputValue("");
  };

  const handleRemoveList = (index) => {
    setList((prevList) => prevList.filter((_, i) => i !== index));
  };

  return {
    inputValue,
    handleInputChange,
    handleAddList,
    handleRemoveList,
    list,
    taskInputValues,
    handleAddTask: (listIndex, taskName) =>
      handleAddTask(listIndex, taskName, list, setList),
    handleTaskEdit: (listIndex, taskIndex, e) =>
      handleTaskEdit(listIndex, taskIndex, e, list, setList),
    handleTaskToggle: (listIndex, taskIndex) =>
      handleTaskToggle(listIndex, taskIndex, list, setList),
    handleTaskInputChange,
  };
};
