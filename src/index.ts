import { Mario } from "./model/mario/mario";

const MeuMario = new Mario;

MeuMario.mudarStatus(MeuMario.pegarCogumelo());
MeuMario.mudarStatus(MeuMario.levarDano());
MeuMario.mudarStatus(MeuMario.pegarFlor());
MeuMario.mudarStatus(MeuMario.levarDano());
MeuMario.mudarStatus(MeuMario.pegarPena());
MeuMario.mudarStatus(MeuMario.levarDano());
