export class Todo {

    public id: number;
    public texto: string;
    public completado: boolean;

    constructor(texto: string) {
        this.id = new Date().getTime() * Math.random();
        this.texto = texto;
        this.completado = false;
    }

}