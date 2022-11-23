import React, {useState} from "react";



//create your first component

const Home = () => {
	const [tarea, nueva] = useState(["Tarea1","Tarea2","Tarea3",]);
		
	const borrar = (b) => {
		nueva(tarea.filter((value,index,arr)=> {return index != b}));
	}
 	
	return (
		
			<div className="text-center">

				<h1 >Lista de Tareas </h1>

				<form onSubmit={(event)=>{
					event.preventDefault();
					nueva([...tarea,event.target[0].value]);
				}}>

				<input placeholder="¿cual es tu tarea?"></input>
				<button> Ingresar</button>
				</form>
				{tarea.map((value,index, arr)=>{
					return <li key={index}>{value} 
					<button onClick={() => borrar(index)}> X </button></li>

				})}

			</div>
	);
	
};

export default Home;
