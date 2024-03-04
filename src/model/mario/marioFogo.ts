import { IMarioState } from "./marioInterface";

export class MarioPequeno implements IMarioState {
    pegarFlor(): IMarioState {
        throw new Error("Method not implemented.");
    }
    pegarCogumelo(): IMarioState {
        throw new Error("Method not implemented.");
    }
    pegarPena(): IMarioState {
        throw new Error("Method not implemented.");
    }
    levarDano(): IMarioState {
        throw new Error("Method not implemented.");
    }   
}