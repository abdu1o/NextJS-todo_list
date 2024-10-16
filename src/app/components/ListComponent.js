export default function ListComponent({
    list,
    taskInputValues,
    handleTaskInputChange,
    handleAddTask,
    handleRemoveList,
    handleTaskEdit,
    send,
  }) {
    return (
      <div className="listContainer">
        {list.map(
          (item, index) =>
            item.isOpen && (
              <div key={index} className="listItem">
                <div className="listHeader">
                  <h1 className="listTitle">{item.name}</h1>
                  <button
                    className="closeButton"
                    onClick={() => handleRemoveList(index)}
                  >
                    &#10006;
                  </button>
                </div>
  
                <div className="taskRow">
                  <input
                    type="text"
                    value={taskInputValues[index] || ""}
                    onChange={(e) => handleTaskInputChange(index, e)}
                    placeholder="Task name"
                    className="taskInputField"
                  />
                  <button
                    onClick={() => handleAddTask(index, taskInputValues[index] || "")}
                    className="addTaskButton"
                  >
                    Add Task
                  </button>
                </div>
  
                <div className="taskList">
                  {item.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="taskItem">
                      <input
                        type="checkbox"
                        className="taskCheckbox"
                        onClick={() => send({ type: "TOGGLE" })}
                      />
                      <input
                        type="text"
                        value={task}
                        onChange={(e) => handleTaskEdit(index, taskIndex, e)}
                        className="changebleTaskField"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )
        )}
      </div>
    );
  }
  