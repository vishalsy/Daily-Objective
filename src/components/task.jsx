import React from "react";

function task({title,description,deleteTask,index}) {

 


	return (
		<div className="task">
			<div>
				<p>{title}</p>
				{/* console.log({description}); */}
				<span>{description}</span>
			</div>
			<button  className="delete" onClick={()=>deleteTask(index)}>-</button>
		</div>
	);
}

export default task;
