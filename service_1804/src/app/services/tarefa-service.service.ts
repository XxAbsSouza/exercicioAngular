import { Injectable } from '@angular/core';
import { Tarefa } from '../interfaces/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  tarefas:Tarefa[] =[
    {id: "1", titulo:"Atividade Angular", descricao:"Criação de um checkList", dataVencimento:"18/04"},
    {id: "3", titulo:"Atividade Angular", descricao:"Criação de um checkList"}
  ];

  listar():Tarefa[]{
    return this.tarefas;
  }

  remover(id:String){
    const tarefa = this.tarefas.find(c=> c.id == id)
    if (tarefa) {
      const index = this.tarefas.indexOf(tarefa)
      this.tarefas.splice(index,1)//(index,1)
    }
  }

  adicionar(tarefa:Tarefa){
    this.tarefas.push(tarefa)
  }
}
