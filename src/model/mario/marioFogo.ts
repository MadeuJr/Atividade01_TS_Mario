import { MarioCapa } from "./marioCapa";
import { MarioGrande } from "./marioGrande";
import { IMarioState } from "./marioInterface";

export class MarioFogo implements IMarioState {
    pegarFlor(): IMarioState {
        console.log("Mario pegou a Flor");
        return this;
    }
    pegarCogumelo(): IMarioState {
        console.log("Mario pegou o Cogumelo");
        return this;
    }
    pegarPena(): IMarioState {
        console.log("Mario pegou uma pena");
        return new MarioCapa;
    }
    levarDano(): IMarioState {
        console.log("Mario recebeu dano");
        return new MarioGrande;
    }  
}