export abstract class Actividad {

    constructor(
        private descripcion: string,
    ){
        if (descripcion == null)
            throw new Error("La actividad debe tener una descripción.");
    }

    /**
     * Getter de la descripción de la actividad.
     * @returns Descripción de la actividad.
     */
    get Descripcion(): string {
        return this.descripcion;
    }

}
