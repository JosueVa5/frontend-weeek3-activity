import { useState } from 'react';
import './App.css'


function App() {

const [topics, setTopics] = useState ([
  "Instalacion de Node",
  "Uso de NPW"

])

const [newTopic, setNewTopic] = useState ("");

const addTopic = () => {

     if (newTopic.trim() == "") return;
      setTopics ([...topics, newTopic]);
      setNewTopic ("");
};


  return (
    <div className ="main-container">
      <h1>Fronted week3 activity</h1>
      <div className="contenedor-listas">

        {/* seccion dinamica */}
        <div>


          <input type="text"
          placeholder="Escribe un nuevo tema"
          value={newTopic}
          onChange={(e) => setNewTopic (e.target.value)}
          />
          <button onClick={addTopic}>Agregar a la lista</button>
          
          </div>
        <h3>Listado de temas:</h3>
        <ol>
          {topics.map((topicName, index) => (
            <li key={index}>
              {topicName}
              
              </li>


          )) }

        </ol>

        <hr />
        <ul>
          <li>Vscode</li>
          <li>Francisco Josue</li>
          <li>Barcelona</li>
        </ul>

        </div>
    </div>
  );
}

export default App