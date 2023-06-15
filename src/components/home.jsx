import React, { useEffect } from "react";
import Task from "./task";
import { useState } from "react";


function Home() {

  const iniarray= localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
	const [tasks, setTask] = useState(iniarray);
	const [title, settitle] = useState("");
	const [discription, setdescription] = useState("");

	const Submithandler = (e) => {
		e.preventDefault();
		setTask([...tasks, { title, discription }]);
    settitle("");
    setdescription("");
	};

  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks));
  }, [tasks])
  

  const deletetask=(index)=>{
    console.log(index);
     const fillterarry=tasks.filter((val,i)=>{
         return i !== index;
     })
     setTask(fillterarry);
  };
	return (
		<div className="conatainor">
			<form onSubmit={Submithandler}>
				<h1>Daily-Objective</h1>
				<input
					type="text"
					placeholder="Title"
					value={title}
					onChange={(e) => settitle(e.target.value)}
				/>
				<textarea
					placeholder="Description here"
					value={discription}
					onChange={(e) => setdescription(e.target.value)}></textarea>
				<button type="submit">Add</button>
			</form>
			{tasks.map((item, index) => (
				<Task
					key={index} 
					title={item.title}
					description={item.discription}
          deleteTask={deletetask}
          index={index}
				/>
			))}
		</div>
	);
}

export default Home;
