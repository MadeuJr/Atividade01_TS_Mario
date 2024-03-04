"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarioFogo = void 0;
const marioCapa_1 = require("./marioCapa");
const marioGrande_1 = require("./marioGrande");
class MarioFogo {
    pegarFlor() {
        console.log('Mario pegou a Flor e continua Mario Fogo');
        return this;
    }
    pegarCogumelo() {
        console.log('Mario pegou o Cogumelo e continua Mario Fogo');
        return this;
    }
    pegarPena() {
        console.log('Mario pegou uma pena e virou Mario Capa');
        return new marioCapa_1.MarioCapa();
    }
    levarDano() {
        console.log('Mario recebeu dano e virou Mario Grande');
        return new marioGrande_1.MarioGrande();
    }
}
exports.MarioFogo = MarioFogo;
