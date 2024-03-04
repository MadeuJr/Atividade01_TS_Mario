import { MarioCapa } from './marioCapa';
import { MarioFogo } from './marioFogo';
import { MarioGrande } from './marioGrande';
import { IMarioState } from './marioInterface';

export class MarioPequeno implements IMarioState {
    pegarFlor(): IMarioState {
        console.log('Mario pegou a Flor e virou Mario Fogo');
        return new MarioFogo();
    }
    pegarCogumelo(): IMarioState {
        console.log('Mario pegou o Cogumelo e virou Mario Grande');
        return new MarioGrande();
    }
    pegarPena(): IMarioState {
        console.log('Mario pegou uma pena e virou Mario Capa');
        return new MarioCapa();
    }
    levarDano(): IMarioState {
        console.log('Mario recebeu dano e Morreu :( ');
        return this;
        // TODO fazer classes de morte ou outra forma de marcar que ele morreu
    }
}
