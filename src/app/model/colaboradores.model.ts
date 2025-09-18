import { WorkshopSimples } from "./workshop.model";

export interface Colaborador {
    id: number;
    nome: string;
    workshops: WorkshopSimples[];
}

export interface ColaboradorSimples {
    id: number;
    nome: string;
    presente: boolean;
}