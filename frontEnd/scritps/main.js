document.addEventListener('DOMContentLoaded', () => {
  const inputTarea = document.getElementById('tareaInput');
  const btnAgregar = document.getElementById('btn-agregar');
  const lista = document.getElementById('lista');

  btnAgregar.addEventListener('click', () => {
    const textoTarea = inputTarea.value.trim();

    if (textoTarea === '') {
      alert('Por favor escribe una tarea');
      return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
      <span class="texto">${textoTarea}</span>
      <button class="proceso">En Proceso</button>
      <button class="eliminar">Eliminar</button>
    `;

    lista.appendChild(li);
    inputTarea.value = '';
    inputTarea.focus();
  });

  // Delegación de eventos para eliminar o marcar como en proceso
  lista.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('eliminar')) {
      target.parentElement.remove();
    }

    if (target.classList.contains('proceso')) {
      target.previousElementSibling.classList.toggle('en-proceso');
      target.textContent = target.textContent === 'En Proceso' ? 'Completa' : 'En Proceso';
    }
  });
});