"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mario = void 0;
const marioPequeno_1 = require("./marioPequeno");
class Mario {
    constructor() {
        this.state = new marioPequeno_1.MarioPequeno();
    }
    mudarStatus(state) {
        this.state = state;
    }
    pegarCogumelo() {
        return this.state.pegarCogumelo();
    }
    pegarFlor() {
        return this.state.pegarFlor();
    }
    pegarPena() {
        return this.state.pegarPena();
    }
    levarDano() {
        return this.state.levarDano();
    }
}
exports.Mario = Mario;
