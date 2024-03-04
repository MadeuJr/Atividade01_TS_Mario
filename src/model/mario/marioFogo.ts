import { MarioCapa } from './marioCapa';
import { MarioGrande } from './marioGrande';
import { IMarioState } from './marioInterface';

export class MarioFogo implements IMarioState {
    pegarFlor(): IMarioState {
        console.log('Mario pegou a Flor e continua Mario Fogo');
        return this;
    }
    pegarCogumelo(): IMarioState {
        console.log('Mario pegou o Cogumelo e continua Mario Fogo');
        return this;
    }
    pegarPena(): IMarioState {
        console.log('Mario pegou uma pena e virou Mario Capa');
        return new MarioCapa();
    }
    levarDano(): IMarioState {
        console.log('Mario recebeu dano e virou Mario Grande');
        return new MarioGrande();
    }
}
