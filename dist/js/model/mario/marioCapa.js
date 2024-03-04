"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarioCapa = void 0;
const marioFogo_1 = require("./marioFogo");
const marioGrande_1 = require("./marioGrande");
class MarioCapa {
    pegarFlor() {
        console.log('Mario pegou a Flor e virou Mario Fogo');
        return new marioFogo_1.MarioFogo();
    }
    pegarCogumelo() {
        console.log('Mario pegou o Cogumelo e continua Mario capa');
        return this;
    }
    pegarPena() {
        console.log('Mario pegou uma pena e continua Mario Capa');
        return this;
    }
    levarDano() {
        console.log('Mario recebeu dano e virou Mario Grande');
        return new marioGrande_1.MarioGrande();
    }
}
exports.MarioCapa = MarioCapa;
