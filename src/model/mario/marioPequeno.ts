import { MarioCapa } from "./marioCapa";
import { MarioFogo } from "./marioFogo";
import { MarioGrande } from "./marioGrande";
import { IMarioState } from "./marioInterface";

export class MarioPequeno implements IMarioState {
    pegarFlor(): IMarioState {
        console.log("Mario pegou a Flor");
        return new MarioFogo;
    }
    pegarCogumelo(): IMarioState {
        console.log("Mario pegou o Cogumelo");
        return new MarioGrande;
    }
    pegarPena(): IMarioState {
        console.log("Mario pegou uma pena");
        return new MarioCapa;
    }
    levarDano(): IMarioState {
        console.log("Mario recebeu dano e Morreu :( ");
        return 
    }
}