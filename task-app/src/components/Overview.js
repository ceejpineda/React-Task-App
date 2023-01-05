import React from "react";

const Overview = (props) =>{
    const { tasks } = props;

    return (
        <div>
            {tasks?.map((task) => {
                return (
                    <span key={task.id}>
                        <p>{task.number}. {task.text}</p> 
                        <button>Delete</button>
                    </span>
                );
            })}
        </div>
    );
};

export default Overview; 