"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarioPequeno = void 0;
const marioCapa_1 = require("./marioCapa");
const marioFogo_1 = require("./marioFogo");
const marioGrande_1 = require("./marioGrande");
class MarioPequeno {
    pegarFlor() {
        console.log('Mario pegou a Flor e virou Mario Fogo');
        return new marioFogo_1.MarioFogo();
    }
    pegarCogumelo() {
        console.log('Mario pegou o Cogumelo e virou Mario Grande');
        return new marioGrande_1.MarioGrande();
    }
    pegarPena() {
        console.log('Mario pegou uma pena e virou Mario Capa');
        return new marioCapa_1.MarioCapa();
    }
    levarDano() {
        console.log('Mario recebeu dano e Morreu :( ');
        return this;
        // TODO fazer classes de morte ou outra forma de marcar que ele morreu
    }
}
exports.MarioPequeno = MarioPequeno;
