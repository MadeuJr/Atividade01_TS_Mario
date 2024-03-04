import { MarioFogo } from "./marioFogo";
import { MarioGrande } from "./marioGrande";
import { IMarioState } from "./marioInterface";

export class MarioCapa implements IMarioState {
    pegarFlor(): IMarioState {
        console.log("Mario pegou a Flor");
        return new MarioFogo;
    }
    pegarCogumelo(): IMarioState {
        console.log("Mario pegou o Cogumelo");
        return this;
    }
    pegarPena(): IMarioState {
        console.log("Mario pegou uma pena");
        return this;
    }
    levarDano(): IMarioState {
        console.log("Mario recebeu dano");
        return new MarioGrande;
    }   
}