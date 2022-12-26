let process = require("process");
let { leerArchivo, guardarTarea, filtrarPorEstado } = require("./app-tareas/funcionesDeTareas");

let arrayTareas = leerArchivo();

let accion = process.argv[2];
switch (accion) {
      case "listar":
            console.log("Listado de tareas");
            console.log("-------------------");
            arrayTareas.forEach((element, index) => {
                  console.log(`${index + 1}. ${element.titulo} - ${element.estado}`);
            });
            break;
      case "crear":
            console.log("");
            console.log("Nueva tarea creada");
            console.log("-------------------");
            let tarea = process.argv[3];
            let objTarea = {
                  titulo: tarea,
                  estado: "pendiente",
            };
            guardarTarea(objTarea);
            console.log(`${objTarea.titulo} -> ${objTarea.estado}`);
            break;
      case "filtrar":
            console.log("");
            console.log("Tareas en proceso");
            console.log("-------------------");
            let estado = process.argv[3];
            arrayFiltrado = filtrarPorEstado(estado);
            arrayFiltrado.forEach((elem, index) => {
                  console.log(`${index + 1}. ${elem.titulo}`);
            });
            break;
      case undefined:
            console.log("Atención - Tienes que pasar una acción.");
            console.log("Las acciones disponibles son: listar");
            console.log("--------------------------------------");
            break;
      default:
            console.log("No entiendo qué quieres hacer.");
            console.log("Las acciones disponibles son: listar");
            console.log("--------------------------------------");
            break;
}