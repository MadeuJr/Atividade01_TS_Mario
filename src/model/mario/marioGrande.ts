import { MarioCapa } from './marioCapa';
import { MarioFogo } from './marioFogo';
import { IMarioState } from './marioInterface';
import { MarioPequeno } from './marioPequeno';

export class MarioGrande implements IMarioState {
    pegarFlor(): IMarioState {
        console.log('Mario pegou a Flor e virou Mario Fogo');
        return new MarioFogo();
    }
    pegarCogumelo(): IMarioState {
        console.log('Mario pegou o Cogumelo e continua Mario Grande');
        return this;
    }
    pegarPena(): IMarioState {
        console.log('Mario pegou uma pena e virou Mario Capa');
        return new MarioCapa();
    }
    levarDano(): IMarioState {
        console.log('Mario recebeu dano e virou Mario Pequeno');
        return new MarioPequeno();
    }
}
