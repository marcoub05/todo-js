export class Todo{

    static fromJson({id,tarea,completado,creado}){
        const temp = new Todo(tarea);
        temp.id = id;
        temp.completado = completado;
        temp.creado = creado;

        return temp;
    }

    constructor(tarea){

        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }
}