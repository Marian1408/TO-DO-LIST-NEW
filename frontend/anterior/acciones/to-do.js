// Primero, obtenemos la lista de tareas desde la API
fetch('http://localhost:8082/todos')
  .then(response => response.json())
  .then(data => {
    // Luego, creamos un elemento para mostrar las tareas
    const tareaList = document.getElementById('lista');
    
    // Recorremos cada tarea en la lista
    data.forEach(tarea => {
      // Creamos un nuevo elemento de lista para cada tarea
      const tareaElemento = document.createElement('LI');
      
      // Si la tarea está completada, la marcamos como tal
      if (tarea.completed) {
        tareaElemento.style.textDecoration = 'line-through';
      }
      
      // Agregamos el título de la tarea al elemento de lista
      const tituloTarea = document.createElement('A');
      tituloTarea.textContent = tarea.title;
      tareaElemento.appendChild(tituloTarea);
      
      // Agregamos el elemento de lista a la lista de tareas
      tareaList.appendChild(tareaElemento);
    });
  })
  .catch(error => console.error('Error:', error));
