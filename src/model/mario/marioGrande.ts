import { MarioCapa } from "./marioCapa";
import { MarioFogo } from "./marioFogo";
import { IMarioState } from "./marioInterface";
import { MarioPequeno } from "./marioPequeno";

export class MarioGrande implements IMarioState {
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
        return new MarioCapa;
    }
    levarDano(): IMarioState {
        console.log("Mario recebeu dano");
        return new MarioPequeno;
    }
}