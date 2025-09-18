import { ColaboradorSimples } from "./colaboradores.model";

export interface WorkshopSimples {
  id: number;
  nome: string;
  dataRealizacao: Date;   
  descricao: string;
}

export interface Workshop {
  id: number;
  nome: string;
  dataRealizacao: string; 
  descricao: string;
  colaboradores?: ColaboradorSimples[];
}