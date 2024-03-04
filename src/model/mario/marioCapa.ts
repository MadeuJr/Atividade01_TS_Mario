import { MarioFogo } from './marioFogo';
import { MarioGrande } from './marioGrande';
import { IMarioState } from './marioInterface';

export class MarioCapa implements IMarioState {
    pegarFlor(): IMarioState {
        console.log('Mario pegou a Flor e virou Mario Fogo');
        return new MarioFogo();
    }
    pegarCogumelo(): IMarioState {
        console.log('Mario pegou o Cogumelo e continua Mario capa');
        return this;
    }
    pegarPena(): IMarioState {
        console.log('Mario pegou uma pena e continua Mario Capa');
        return this;
    }
    levarDano(): IMarioState {
        console.log('Mario recebeu dano e virou Mario Grande');
        return new MarioGrande();
    }
}
