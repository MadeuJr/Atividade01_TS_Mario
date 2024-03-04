"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarioGrande = void 0;
const marioCapa_1 = require("./marioCapa");
const marioFogo_1 = require("./marioFogo");
const marioPequeno_1 = require("./marioPequeno");
class MarioGrande {
    pegarFlor() {
        console.log('Mario pegou a Flor e virou Mario Fogo');
        return new marioFogo_1.MarioFogo();
    }
    pegarCogumelo() {
        console.log('Mario pegou o Cogumelo e continua Mario Grande');
        return this;
    }
    pegarPena() {
        console.log('Mario pegou uma pena e virou Mario Capa');
        return new marioCapa_1.MarioCapa();
    }
    levarDano() {
        console.log('Mario recebeu dano e virou Mario Pequeno');
        return new marioPequeno_1.MarioPequeno();
    }
}
exports.MarioGrande = MarioGrande;
