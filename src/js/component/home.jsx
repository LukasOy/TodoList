import React, {useState} from "react";

const Home = () => {
	const [tarea, nueva] = useState(["Tarea1","Tarea2","Tarea3",]);
		
	const borrar = (b) => {
		nueva(tarea.filter((value,index,arr)=> {return index != b}));
	}
 	
	return (
		
			<div>
				
		
			<div id="Caja2"> </div>
  			<div id="Caja3"> 
			  <h3>Lista de Tareas</h3>

				
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
				<p id="caja4" class="text-muted">Cantidad de tareas {tarea.length}</p>
				</div>
			</div>
	);
	
};

export default Home;
