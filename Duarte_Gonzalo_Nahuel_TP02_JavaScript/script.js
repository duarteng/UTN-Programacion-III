
let todos = JSON.parse(localStorage.getItem("todos")) || [];

const guardarTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
}

const form = document.getElementById("todo-form")
const input = document.getElementById("todo-input")
const btnAgregar = document.querySelector("#btn-agregar")
const listaTareas = document.querySelector("#todo-list")


// TODO: limpiar <ul> y crear un <li> por cada tarea (con botón eliminar y click para toggle)
const renderTodos = () => {

    listaTareas.innerHTML = "";

    todos.forEach( todo => {
        // Creando el elemento li para colocar dentro la tarea 
        const listaTareaNueva = document.createElement("li");
        listaTareaNueva.style.marginTop = "25px"
        
        const spanTexto = document.createElement("span");
        spanTexto.textContent = todo.texto;
        spanTexto.style.cursor = "pointer";

        // Boton para eliminar todo
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.style.marginLeft = "15px";
        btnEliminar.style.cursor = "pointer";


        // Tacha la tarea cuando pasa a estado true
        if (todo.completada) {
            spanTexto.style.textDecoration = "line-through";
        }

        // Alternar el estado de completado del todo
        spanTexto.addEventListener("click", () => {
            toggleTodo(todo.id);
        })

        btnEliminar.addEventListener("click", () => {
            eliminarTodo(todo.id);
        })

        listaTareaNueva.appendChild(spanTexto);
        listaTareaNueva.appendChild(btnEliminar);
        listaTareas.appendChild(listaTareaNueva)
        
    });

};

// TODO: pushear { id, texto, completada: false } al array, guardar y renderizar
const agregarTodo = (texto) => {
    const nuevoTodo = {
        id: Date.now(), // Genera numeros que no se repiten
        texto, // Parametro que recibe
        completada: false
    }

    todos.push(nuevoTodo);
    guardarTodos();
    renderTodos();
};

// TODO: filtrar el array sacando la tarea con ese id, guardar y renderizar
const eliminarTodo = (id) => {
    todos = todos.filter( todo => todo.id !== id);
    guardarTodos();
    renderTodos();
};

// TODO: buscar la tarea por id e invertir su propiedad completada, guardar y renderizar
const toggleTodo = (id) => {
    
    // Mapea la propiedad completada y modifica el estado
    todos = todos.map( todo => {
        if (todo.id === id) {
            return {
                ...todo,
                completada: !todo.completada
            };
        }

        return todo;
    });

    guardarTodos();
    renderTodos();
};

// TODO: preventDefault, leer el input, si no está vacío llamar a agregarTodo y limpiar el input
form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const valorInput = input.value.trim();

    // Validacion del campo
    if (valorInput === "") {
        console.log("El campo esta vacio, por favor ingrese una tarea.");
        return;
    }

    agregarTodo(valorInput)

    // Limpiando el campo 
    input.value = "";

});

renderTodos();