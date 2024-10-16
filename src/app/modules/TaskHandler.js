import { useState } from 'react';

export const useTaskManager = () => {
    const [taskInputValues, setTaskInputValues] = useState([]);

    const handleAddTask = (listIndex, taskName, list, setList) => {

        if (taskName.trim() !== '') {
            
            setList((prevList) => {
                const newList = prevList.map((listItem, index) => {
                    if (index === listIndex) {
                        return {
                            ...listItem, 
                            tasks: [...listItem.tasks, taskName]
                        };
                    }
                    return listItem;
                });
                return newList;
            });
    
            setTaskInputValues((prevTaskInputValues) => {
                const newTaskInputValues = [...prevTaskInputValues];
                newTaskInputValues[listIndex] = '';
                return newTaskInputValues;
            });
        }
    };

    const handleTaskEdit = (listIndex, taskIndex, e, list, setList) => {
        const newTaskValue = e.target.value;  
        setList((prevList) => {
            const newList = prevList.map((listItem, index) => {
                if (index === listIndex) {
                    const updatedTasks = listItem.tasks.map((task, taskIdx) => {
                        if (taskIdx === taskIndex) {
                            return newTaskValue;
                        }
                        return task;
                    });
    
                    return {
                        ...listItem,
                        tasks: updatedTasks, 
                    };
                }
                return listItem; 
            });
    
            return newList;
        });
    };

    const handleTaskToggle = (listIndex, taskIndex, list, setList) => {
        setList((prevList) => {
            const newList = prevList.map((listItem, index) => {
                if (index === listIndex) {
                    const updatedTasks = listItem.tasks.map((task, taskIdx) => {
                        if (taskIdx === taskIndex) {
                            return {
                                ...task,
                                completed: !task.completed,
                            };
                        }
                        return task;
                    });
    
                    return {
                        ...listItem,
                        tasks: updatedTasks,
                    };
                }
                return listItem;
            });
    
            return newList;
        });
    };

    const handleTaskInputChange = (index, e) => {
        const newTaskInputValues = [...taskInputValues];
        newTaskInputValues[index] = e.target.value;
        setTaskInputValues(newTaskInputValues);
    };

    return {
        taskInputValues,
        handleAddTask,
        handleTaskEdit,
        handleTaskToggle,
        handleTaskInputChange,
    };
};