import { IMarioState } from './marioInterface';
import { MarioPequeno } from './marioPequeno';

export class Mario {
    private state: IMarioState;
    constructor() {
        this.state = new MarioPequeno();
    }

    mudarStatus(state: IMarioState): void {
        this.state = state;
    }

    pegarCogumelo():IMarioState{
        return this.state.pegarCogumelo()
    }

    pegarFlor(): IMarioState{
        return this.state.pegarFlor();
    }

    pegarPena():IMarioState{
        return this.state.pegarPena()
    }

    levarDano():IMarioState{
        return this.state.levarDano();
    }
    
}
