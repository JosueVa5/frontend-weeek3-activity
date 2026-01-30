import { useState } from 'react';
import './App.css';

function App() {

  // Estado que almacena la lista dinámica de temas
  const [topics, setTopics] = useState([
    "Instalacion de Node",
    "Uso de NPW"
  ]);

  // Estado para manejar el input del nuevo tema
  const [newTopic, setNewTopic] = useState("");

  // FUNCIÓN NUEVA
  // Agrega un nuevo tema a la lista dinámica
  const addTopic = () => {
    // Evita agregar elementos vacíos
    if (newTopic.trim() === "") return;

    setTopics([...topics, newTopic]);
    setNewTopic(""); // Limpia el input
  };

  // FUNCIÓN NUEVA
  // Elimina todos los elementos de la lista dinámica
  const clearTopics = () => {
    setTopics([]);
  };

  return (
    <div className="main-container">
      <h1>Frontend week 3 activity</h1>

      <div className="contenedor-listas">

        {/* Sección para agregar nuevos temas */}
        <input
          type="text"
          placeholder="Escribe un nuevo tema"
          value={newTopic}
          onChange={(e) => setNewTopic(e.target.value)}
        />

        {/* Botón para agregar un tema a la lista */}
        <button onClick={addTopic}>Agregar a la lista</button>

        {/* BOTÓN NUEVO */}
        {/* Elimina completamente la lista dinámica */}
        <button onClick={clearTopics}>Eliminar lista</button>

        <h3>Listado de temas:</h3>

        {/* Validación para mostrar mensaje cuando la lista está vacía */}
        {topics.length === 0 ? (
          <p>No hay temas en la lista</p>
        ) : (
          <ol>
            {topics.map((topicName, index) => (
              <li key={index}>
                {topicName}
              </li>
            ))}
          </ol>
        )}

        <hr />

        {/* Lista estática */}
        <ul>
          <li>Vscode</li>
          <li>Francisco Josue</li>
          <li>Barcelona</li>
        </ul>

      </div>
    </div>
  );
}

export default App;
