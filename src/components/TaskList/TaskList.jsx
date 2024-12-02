import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompeleteTask from "./CompeleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  // console.log(data);
  return (
    <div
      id="tasklist"
      className="mt-10 overflow-x-auto flex items-center justify-start gap-5 py-5 flex-nowrap h-[50%] w-full"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        }
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} />;
        }
        if (elem.completed) {
          return <CompeleteTask key={idx} data={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />;
        }
      })}
    </div>
  );
};

export default TaskList;
