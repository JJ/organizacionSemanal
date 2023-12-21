import * as dotenv from 'dotenv';

dotenv.config();

export class Configuracion {
    get(key: string): string {
        const value = process.env[key];
        if (!value) {
            throw new Error(`La variable de entorno ${key} no está configurada.`);
        }
        return value;
    }
}